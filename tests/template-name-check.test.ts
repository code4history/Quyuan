import { afterEach, describe, expect, it } from 'vitest'
import type { Feature } from 'geojson'
import { Quyuan } from '@/template'

type FeatureWithResult = Feature & { result: Record<string, string> }

const render = (template: string, properties: Record<string, unknown> = {}): string => {
  const geojson: Feature = {
    type: 'Feature',
    properties,
    geometry: { type: 'Point', coordinates: [0, 0] },
  }
  const result = Quyuan.templateExtractor({
    geojson,
    templates: { html: template },
  }) as FeatureWithResult
  return result.result.html
}

const NOT_ALLOWED = /is not allowed in templates/
const PLAIN_NAMES_ONLY = /Only plain names can be assigned in templates/

const pwned = (): unknown => (globalThis as Record<string, unknown>).__qyPwned

describe('strings in name positions reach the generated code', () => {
  afterEach(() => {
    delete (globalThis as Record<string, unknown>).__qyPwned
  })

  const isPayload = String.raw`"defined\").call(context,0), (globalThis.__qyPwned=1), env.getTest(\"defined"`
  const quotedPayload = String.raw`"a\"+(globalThis.__qyPwned=1)+\"b"`

  const refusedAsName: Array<[string, string]> = [
    ['a test name', `{{ 1 is ${isPayload} }}`],
    ['a called test name', `{{ 1 is ${isPayload}() }}`],
    ['a test name in a set block', `{% set z %}{{ 1 is ${isPayload} }}{% endset %}`],
    ['a test name in a macro', `{% macro m() %}{{ 1 is ${isPayload} }}{% endmacro %}{{ m() }}`],
  ]
  it.each(refusedAsName)('refuses %s', (_label, template) => {
    expect(() => render(template)).toThrow(NOT_ALLOWED)
    expect(pwned()).toBeUndefined()
  })

  const refusedAsTarget: Array<[string, string]> = [
    [
      'a set target',
      String.raw`{% set "a\", 1, true); globalThis.__qyPwned=1; frame.set(\"b" = 1 %}`,
    ],
    [
      'a set target in a set block',
      String.raw`{% set z %}{% set "a\", 1, true); globalThis.__qyPwned=1; frame.set(\"b" = 1 %}{% endset %}`,
    ],
    [
      'a for key or value name',
      String.raw`{% for a, "b\", 1); globalThis.__qyPwned=1; frame.set(\"c" in {x:1} %}{% endfor %}`,
    ],
    ['a macro name', `{% macro ${quotedPayload}() %}{% endmacro %}`],
    ['a macro keyword name', `{% macro m(${quotedPayload}=1) %}{% endmacro %}{{ m() }}`],
    ['a key of a macro dict', `{% macro m({${quotedPayload}:1}) %}{% endmacro %}{{ m() }}`],
    [
      'a caller keyword name',
      `{% macro m() %}{{ caller() }}{% endmacro %}{% call(${quotedPayload}=1) m() %}{% endcall %}`,
    ],
    ['an import target', `{% import "x" as ${quotedPayload} %}`],
    ['an imported name', `{% from "x" import ${quotedPayload} %}`],
    ['an import alias', `{% from "x" import a as ${quotedPayload} %}`],
  ]
  it.each(refusedAsTarget)('refuses %s', (_label, template) => {
    expect(() => render(template)).toThrow(PLAIN_NAMES_ONLY)
    expect(pwned()).toBeUndefined()
  })

  it.each<[string, string]>([
    ['a backslash', String.raw`{{ a["\\"]() }}`],
    ['a backslash deep in the callee', String.raw`{{ a["\\"].b() }}`],
    ['a backslash in a chained call', String.raw`{{ a.b()["\\"]() }}`],
    ['a line feed', String.raw`{{ a["x\ny"]() }}`],
    ['a carriage return', String.raw`{{ a["x\ry"]() }}`],
  ])('refuses %s in the string key of a called member', (_label, template) => {
    expect(() => render(template, { a: {} })).toThrow(NOT_ALLOWED)
  })
})

describe('names the compiler writes into the generated code', () => {
  it.each<[string, string]>([
    ['a backslash', '{{ x\\ }}'],
    ['a double quote', '{{ x" }}'],
    ['a single quote', "{{ x' }}"],
    ['a backtick', '{{ x` }}'],
    ['a semicolon', '{{ x; }}'],
    ['a control character', '{{ x\u0001y }}'],
    ['a vertical tab', '{{ x\u000by }}'],
    ['a line separator', '{{ x y }}'],
    ['an ideographic space', '{{ x　y }}'],
    ['a zero width joiner', '{{ x‍y }}'],
    ['a filter name', '{{ 1|f" }}'],
    ['a dotted filter name', '{{ 1|a.b\\ }}'],
    ['a test name', '{{ 1 is t" }}'],
    ['a set target', '{% set a\\ = 1 %}'],
    ['a for name', '{% for a\\ in b %}{% endfor %}'],
    ['a for key name', '{% for a, b\\ in c %}{% endfor %}'],
    ['a macro name', '{% macro m\\() %}{% endmacro %}'],
    ['a macro argument', '{% macro m(a\\) %}{% endmacro %}'],
    ['a macro keyword', '{% macro m(a\\=1) %}{% endmacro %}'],
    ['a block name', '{% block a\\ %}{% endblock %}'],
    ['a name inside a set block', '{% set z %}{{ x\\ }}{% endset %}'],
    ['a name in a call argument', '{{ range(x\\) }}'],
  ])('refuses %s before rendering', (_label, template) => {
    expect(() => render(template)).toThrow(NOT_ALLOWED)
  })
})

describe('dotted targets', () => {
  it.each<[string, string]>([
    ['a dotted set target', '{% set x.y = 1 %}'],
    ['__proto__ behind a dot', '{% set x.__proto__ = [1] %}'],
    ['a second dotted target', '{% set a, x.y = 1 %}'],
  ])('refuses %s with a clear message', (_label, template) => {
    expect(() => render(template)).toThrow(PLAIN_NAMES_ONLY)
  })
})

describe('assignments nested in a set block', () => {
  it('refuses a blocked name there as well', () => {
    expect(() => render('{% set z %}{% set __proto__ = [1] %}{% endset %}')).toThrow(
      'Assigning to `__proto__` is not allowed in templates'
    )
  })
})

describe('ordinary templates keep working', () => {
  it.each<[string, string, Record<string, unknown>, string]>([
    ['a Japanese name', '{{ 名称 }}', { 名称: '庚申塔' }, '庚申塔'],
    ['two Japanese names', '{{ 名称 }}（{{ 所在地 }}）', { 名称: '地蔵', 所在地: '奈良' }, '地蔵（奈良）'],
    ['a name with a middle dot', '{{ メモ・コード }}', { 'メモ・コード': 'a' }, 'a'],
    ['a name with fullwidth brackets', '{{ 面積（㎡） }}', { '面積（㎡）': 12 }, '12'],
    ['a name with a fullwidth percent', '{{ 割合％ }}', { '割合％': 5 }, '5'],
    ['kanji beyond the BMP', '{{ 𠮷野 }}', { 𠮷野: 'y' }, 'y'],
    ['a decomposed kana', '{{ が }}', { 'が': 'g' }, 'g'],
    ['a name with combining vowels', '{{ ชื่อ }}', { ชื่อ: 't' }, 't'],
    ['a Korean name', '{{ 이름 }}', { 이름: 'k' }, 'k'],
    ['an ASCII name', '{{ name_1 }}', { name_1: 'n' }, 'n'],
    ['a dollar sign', '{{ $id }}', { $id: 'd' }, 'd'],
    ['a member', '{{ 画像.説明 }}', { 画像: { 説明: 'd' } }, 'd'],
    ['a string key with a space', '{{ a["住所 詳細"] }}', { a: { '住所 詳細': 's' } }, 's'],
    ['a string key with a quote', String.raw`{{ a["x\"y"] }}`, { a: { 'x"y': 'q' } }, 'q'],
    ['a string key with a backslash', String.raw`{{ a["x\\y"] }}`, { a: { 'x\\y': 'b' } }, 'b'],
    ['a string key with a line feed', String.raw`{{ a["x\ny"] }}`, { a: { 'x\ny': 'l' } }, 'l'],
    ['a string value with a quote', String.raw`{{ "x\"y;\\" | safe }}`, {}, 'x"y;\\'],
    ['a filter on a Japanese name', '{{ 値 | upper }}', { 値: 'a' }, 'A'],
    ['a test on a Japanese name', '{% if 名称 is defined %}y{% endif %}', { 名称: '1' }, 'y'],
    ['a test with arguments', '{{ 9 is divisibleby(3) }}', {}, 'true'],
    ['none as a test', '{{ 値 is none }}', { 値: null }, 'true'],
    ['a test named by a string', '{{ "a" is "string" }}', {}, 'true'],
    ['a Japanese set', '{% set 名前 = 名称 %}{{ 名前 }}', { 名称: 'n' }, 'n'],
    ['several set targets', '{% set a, b = 1 %}{{ a }}{{ b }}', {}, '11'],
    ['a set block', '{% set 本文 %}x{% endset %}{{ 本文 }}', {}, 'x'],
    ['a Japanese loop', '{% for 項目 in 一覧 %}{{ 項目 }}{% endfor %}', { 一覧: [1, 2] }, '12'],
    ['a key and value loop', '{% for 鍵, 値 in 表 %}{{ 鍵 }}={{ 値 }}{% endfor %}', { 表: { a: 1 } }, 'a=1'],
    ['a name that matches a member', '{% for call in 一覧 %}x{% endfor %}', { 一覧: [1] }, 'x'],
    ['a macro with a keyword', '{% macro 見出し(本文, 級=1) %}{{ 級 }}{{ 本文 }}{% endmacro %}{{ 見出し("x") }}', {}, '1x'],
    ['a macro call with a keyword', '{% macro m(a, b=1) %}{{ b }}{% endmacro %}{{ m(1, b=2) }}', {}, '2'],
    ['a macro with a dict argument', '{% macro m(a={}) %}x{% endmacro %}{{ m() }}', {}, 'x'],
    ['a call block', '{% macro m() %}{{ caller() }}{% endmacro %}{% call m() %}x{% endcall %}', {}, 'x'],
    ['a dict literal', '{% set d = {"a b": 1, c: 2} %}{{ d["a b"] }}{{ d.c }}', {}, '12'],
  ])('renders %s', (_label, template, properties, expected) => {
    expect(render(template, properties)).toBe(expected)
  })

  it('calls a member through a string key', () => {
    const properties = { a: { '住所 "詳細"': () => 'ok' } }
    expect(render(String.raw`{{ a["住所 \"詳細\""]() }}`, properties)).toBe('ok')
  })

  it('leaves the syntax error of a template to Nunjucks', () => {
    expect(() => render('{% if %}')).toThrow(/parseIf|expected/)
  })
})
