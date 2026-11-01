import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import type { Feature } from 'geojson'
import nunjucks from 'nunjucks'
import { Quyuan } from '@/template'

type FeatureWithResult = Feature & { result: Record<string, string> }

type NunjucksRuntime = {
  memberLookup: (obj: unknown, val: unknown) => unknown
  contextOrFrameLookup: (context: unknown, frame: unknown, name: unknown) => unknown
}

const runtime = (nunjucks as unknown as { runtime: NunjucksRuntime }).runtime

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

const pwned = (): unknown => (globalThis as Record<string, unknown>).__qyPwned

// Each payload stores a marker on globalThis, so a test can tell whether the
// template managed to construct and run a Function object.
const prototypeWalkingAttacks: Array<[string, string]> = [
  ['range.constructor', '{{ range.constructor("globalThis.__qyPwned=1")() }}'],
  ['range with a computed name', '{{ range["const" ~ "ructor"]("globalThis.__qyPwned=2")() }}'],
  ['cycler.constructor', '{{ cycler.constructor("globalThis.__qyPwned=3")() }}'],
  ['joiner.constructor', '{{ joiner.constructor("globalThis.__qyPwned=4")() }}'],
  [
    'constructor stashed in a set variable',
    '{% set f = range.constructor %}{{ f("globalThis.__qyPwned=5")() }}',
  ],
  [
    'constructor of a string property',
    '{{ name.constructor.constructor("globalThis.__qyPwned=6")() }}',
  ],
  [
    'constructor of a filtered value',
    '{{ ("x" | list).constructor.constructor("globalThis.__qyPwned=7")() }}',
  ],
  [
    'constructor reached through __proto__',
    '{{ name.__proto__.constructor.constructor("globalThis.__qyPwned=8")() }}',
  ],
  [
    'constructor of an inherited method',
    '{{ (range(1,2)).map.constructor("globalThis.__qyPwned=9")() }}',
  ],
  ['constructor of a function method', '{{ range.call.constructor("globalThis.__qyPwned=10")() }}'],
  [
    'constructor via getOwnPropertyDescriptor',
    '{{ constructor.getOwnPropertyDescriptor(constructor.getPrototypeOf(range),"constructor").value("globalThis.__qyPwned=11")() }}',
  ],
  [
    'constructor with a name built at render time',
    '{{ range[("CONSTRUCTOR" | lower)]("globalThis.__qyPwned=12")() }}',
  ],
  [
    'constructor of an object literal',
    '{{ ({}).constructor.constructor("globalThis.__qyPwned=13")() }}',
  ],
  [
    'constructor of a number literal',
    '{{ (1).constructor.constructor("globalThis.__qyPwned=14")() }}',
  ],
  [
    'constructor of an array literal',
    '{{ ([]).constructor.constructor("globalThis.__qyPwned=15")() }}',
  ],
  [
    'constructor of a string literal',
    '{{ ("").constructor.constructor("globalThis.__qyPwned=16")() }}',
  ],
  [
    'constructor of a boolean literal',
    '{{ (true).constructor.constructor("globalThis.__qyPwned=17")() }}',
  ],
  [
    'constructor of a filtered function',
    '{{ ([range] | first).constructor("globalThis.__qyPwned=18")() }}',
  ],
  [
    'constructor of a cycler method',
    '{{ cycler("a").next.constructor("globalThis.__qyPwned=19")() }}',
  ],
  [
    'constructor of toString',
    '{{ range.toString.constructor("globalThis.__qyPwned=20")() }}',
  ],
  [
    'constructor of a nested property',
    '{{ dict.key.constructor.constructor("globalThis.__qyPwned=21")() }}',
  ],
  [
    'constructor of valueOf',
    '{{ name.valueOf.constructor("globalThis.__qyPwned=22")() }}',
  ],
  [
    '__proto__ of an object literal',
    '{{ ({}).__proto__.constructor.constructor("globalThis.__qyPwned=23")() }}',
  ],
  [
    'constructor of a set object',
    '{% set o = {} %}{{ o.constructor.constructor("globalThis.__qyPwned=24")() }}',
  ],
  [
    '__proto__ of a global function',
    '{{ range.__proto__.constructor("globalThis.__qyPwned=25")() }}',
  ],
  [
    'constructor of hasOwnProperty',
    '{{ range.hasOwnProperty.constructor("globalThis.__qyPwned=26")() }}',
  ],
  [
    'Object through an inherited filter name and getFilter',
    '{% set O=(1|valueOf).env.getFilter("constructor") %}{{ O.getOwnPropertyDescriptor(O.getPrototypeOf(range),"constructor").value("globalThis.__qyPwned=27")() }}',
  ],
  [
    'Object through an inherited filter name and getGlobal',
    '{% set O=(1|valueOf).env.getGlobal("constructor") %}{{ O.getOwnPropertyDescriptor(O.getPrototypeOf(range),"constructor").value("globalThis.__qyPwned=28")() }}',
  ],
  [
    'Object through an inherited filter name and getTest',
    '{% set O=(1|valueOf).env.getTest("constructor") %}{{ O.getOwnPropertyDescriptor(O.getPrototypeOf(range),"constructor").value("globalThis.__qyPwned=29")() }}',
  ],
  [
    'property descriptors sorted with dictsort',
    '{% set O=(1|valueOf).env.getFilter("constructor") %}{% for p in O.getOwnPropertyDescriptors(O.getPrototypeOf(range)) | dictsort %}{% if p[0] == "construc" ~ "tor" %}{{ p[1].value("globalThis.__qyPwned=30")() }}{% endif %}{% endfor %}',
  ],
  [
    'property descriptors iterated with for',
    '{% set O=(1|valueOf).env.getFilter("constructor") %}{% for k, v in O.getOwnPropertyDescriptors(O.getPrototypeOf(range)) %}{% if k == "construc" ~ "tor" %}{{ v.value("globalThis.__qyPwned=31")() }}{% endif %}{% endfor %}',
  ],
  [
    'a key object whose name changes between check and lookup',
    '{% set c = cycler("a","constructor","constructor") %}{% set k = {toString: c.next} %}{{ range[k]("globalThis.__qyPwned=32")() }}',
  ],
  [
    'chained key objects whose names change',
    '{% set c = cycler("a","constructor","constructor") %}{% set k = {toString: c.next} %}{% set c2 = cycler("a","constructor","constructor") %}{% set k2 = {toString: c2.next} %}{{ ""[k][k2]("globalThis.__qyPwned=33")() }}',
  ],
  [
    'a key object backed by joiner',
    '{% set j = joiner("constructor") %}{% set k = {toString: j} %}{{ range[k]("globalThis.__qyPwned=34")() }}',
  ],
  [
    'an array key',
    '{{ range[["construc" ~ "tor"]]("globalThis.__qyPwned=35")() }}',
  ],
  [
    'constructor of a cycler method reached by for',
    '{% for k, v in cycler("a") %}{% if k == "next" %}{{ v.constructor("globalThis.__qyPwned=36")() }}{% endif %}{% endfor %}',
  ],
  [
    'constructor of a macro',
    '{% macro m() %}x{% endmacro %}{{ m.constructor("globalThis.__qyPwned=37")() }}',
  ],
  [
    'constructor of caller',
    '{% macro m() %}{{ caller.constructor("globalThis.__qyPwned=38")() }}{% endmacro %}{% call m() %}y{% endcall %}',
  ],
  [
    'constructor reached from loop',
    '{% for i in [1] %}{{ loop.__proto__.constructor.constructor("globalThis.__qyPwned=39")() }}{% endfor %}',
  ],
  [
    'constructor of a regular expression literal',
    '{{ (r/x/).constructor.constructor("globalThis.__qyPwned=40")() }}',
  ],
  [
    'constructor of a safe string',
    '{{ ("x" | safe).constructor.constructor("globalThis.__qyPwned=41")() }}',
  ],
  [
    'constructor of the joiner result',
    '{{ joiner().constructor("globalThis.__qyPwned=42")() }}',
  ],
]

const ordinaryProperties = {
  name: '太郎',
  items: [1, 2],
  dict: { key: 'K' },
  arr: ['A'],
  desc: 'D',
  html: '<b>x</b>',
  list: [{ n: 2 }, { n: 1 }],
}

const ordinaryTemplates: Array<[string, string, string]> = [
  ['two interpolations', '{{ name }}様 {{ items | length }}件', '太郎様 2件'],
  [
    'for loop',
    '{% for i in items %}<li>{{ i }}</li>{% endfor %}',
    '<li>1</li><li>2</li>',
  ],
  ['property and index access', '{{ dict.key }}{{ arr[0] }}', 'KA'],
  ['upper filter', '{{ name | upper }}', '太郎'],
  ['join filter', '{{ items | join(",") }}', '1,2'],
  ['string length', '{{ name.length }}', '2'],
  ['method call on a literal', '{{ "a,b".split(",") | join("-") }}', 'a-b'],
  ['if block', '{% if desc %}{{ desc }}{% endif %}', 'D'],
  ['autoescaping', '{{ html }}', '&lt;b&gt;x&lt;/b&gt;'],
  ['safe filter', '{{ html | safe }}', '<b>x</b>'],
  [
    'sort attribute and dump',
    '{{ list | sort(false, false, "n") | first | dump }}',
    '{&quot;n&quot;:1}',
  ],
  ['sum attribute', '{{ list | sum("n") }}', '3'],
]

describe('template member guard', () => {
  describe('prototype-walking routes to Function', () => {
    beforeEach(() => {
      delete (globalThis as Record<string, unknown>).__qyPwned
    })

    afterEach(() => {
      delete (globalThis as Record<string, unknown>).__qyPwned
    })

    it.each(prototypeWalkingAttacks)('blocks %s', (_label, template) => {
      try {
        render(template, { name: '太郎', dict: { key: 'K' } })
      } catch {
        // A blocked route may surface as a render error. What matters is that
        // the payload never ran.
      }
      expect(pwned()).toBeUndefined()
    })
  })

  describe('replacing the prototype of the render context', () => {
    const renderOrError = (template: string): string => {
      try {
        return render(template, { name: 'x' })
      } catch {
        return 'ERR'
      }
    }

    it('does not reach the render context through concat', () => {
      const out = renderOrError(
        '{% set __proto__ = [1] %}{% set c = concat() | first %}{{ c.ctx.name }}|{{ c.env.opts.autoescape }}'
      )
      expect(out).not.toContain('x|true')
      expect(out).not.toContain('true')
    })

    it('does not call array methods on the render context', () => {
      const out = renderOrError('{% set __proto__ = [1] %}{{ push(range) }}')
      expect(out === 'ERR' || out === '').toBe(true)
    })

    it('does not expose inherited functions of a replaced prototype', () => {
      const out = renderOrError('{% set __proto__ = range %}{{ toString }}')
      expect(out).not.toContain('native code')
    })

    it.each([
      ['set', '{% set __proto__ = [1] %}x'],
      ['set with several targets', '{% set a, constructor = 1 %}x'],
      ['set block', '{% set prototype %}y{% endset %}x'],
      ['macro', '{% macro __proto__() %}y{% endmacro %}x'],
      ['import', '{% import "t.html" as __proto__ %}x'],
      ['from import alias', '{% from "t.html" import a as __proto__ %}x'],
    ])('refuses assignment to a blocked name with %s', (_label, template) => {
      expect(() => render(template, { name: 'x' })).toThrow(/not allowed/)
    })

    it('keeps ordinary top-level assignments', () => {
      expect(
        render('{% set a = name %}{% macro m(v) %}[{{ v }}]{% endmacro %}{{ a }}{{ m(a) }}', { name: 'x' })
      ).toBe('x[x]')
    })
  })

  describe('host values that build code or reach any object', () => {
    // Templates should never receive these, but if a host passes them in the
    // data, the template still must not be able to use them.
    const hostProperties = { O: Object, F: Function, R: Reflect, fns: [Function] }

    beforeEach(() => {
      delete (globalThis as Record<string, unknown>).__qyPwned
    })

    afterEach(() => {
      delete (globalThis as Record<string, unknown>).__qyPwned
    })

    it.each([
      ['Object', '{{ O.getOwnPropertyDescriptor(O.getPrototypeOf(range),"constructor").value("globalThis.__qyPwned=51")() }}'],
      ['Function', '{{ F("globalThis.__qyPwned=52")() }}'],
      ['Reflect', '{{ R.getOwnPropertyDescriptor(R.getPrototypeOf(range), "constructor").value("globalThis.__qyPwned=53")() }}'],
      ['Function returned by a filter', '{{ (fns | first)("globalThis.__qyPwned=54")() }}'],
    ])('does not let a template use %s', (_label, template) => {
      try {
        render(template, hostProperties)
      } catch {
        // A refused value may surface as a render error.
      }
      expect(pwned()).toBeUndefined()
    })
  })

  describe('filter and test names', () => {
    it.each([
      ['an inherited filter name', '{{ 1 | valueOf }}'],
      ['an inherited filter name (constructor)', '{{ 1 | constructor }}'],
      ['an inherited test name', '{% if range is constructor %}x{% endif %}'],
    ])('rejects %s', (_label, template) => {
      expect(() => render(template, { name: '太郎' })).toThrow()
    })

    it('keeps built-in filters and tests', () => {
      expect(render('{{ name | upper }}{% if name is string %}!{% endif %}', { name: 'a' })).toBe('A!')
    })
  })

  describe('ordinary templates', () => {
    it.each(ordinaryTemplates)('keeps the output of %s', (_label, template, expected) => {
      expect(render(template, ordinaryProperties)).toBe(expected)
    })
  })

  describe('nunjucks runtime restoration', () => {
    it('restores the runtime lookups after a successful render', () => {
      const memberLookup = runtime.memberLookup
      const contextOrFrameLookup = runtime.contextOrFrameLookup

      render('{{ name }}', { name: 'x' })

      expect(runtime.memberLookup).toBe(memberLookup)
      expect(runtime.contextOrFrameLookup).toBe(contextOrFrameLookup)
    })

    it('restores the runtime lookups after a template throws', () => {
      const memberLookup = runtime.memberLookup
      const contextOrFrameLookup = runtime.contextOrFrameLookup

      expect(() => render('{{ undefinedFn() }}')).toThrow()

      expect(runtime.memberLookup).toBe(memberLookup)
      expect(runtime.contextOrFrameLookup).toBe(contextOrFrameLookup)
    })
  })

  describe('other nunjucks users', () => {
    it('leaves nunjucks.renderString untouched', () => {
      // `memberLookup` wraps callable members, so `range.constructor.name`
      // renders as an empty string in plain nunjucks too. Take the baseline
      // before Quyuan renders anything and compare against it afterwards.
      const baseline = nunjucks.renderString('{{ range.constructor.name }}', {})
      expect(baseline).toBe('')

      render('{{ name }}', { name: 'x' })

      expect(nunjucks.renderString('{{ range.constructor.name }}', {})).toBe(baseline)
      // Outside `templateExtractor`, constructing and running a Function still
      // works, which is the usual nunjucks behaviour.
      expect(nunjucks.renderString('{{ range.constructor("return 41+1")() }}', {})).toBe('42')
    })
  })

  describe('refused values', () => {
    it('renders a refused member as an empty string', () => {
      expect(render('{{ range.constructor }}', { name: '太郎' })).toBe('')
    })

    it('renders a refused top-level name as an empty string', () => {
      expect(render('{{ constructor }}', { name: '太郎' })).toBe('')
    })

    it('renders an inherited Object.prototype member as an empty string', () => {
      expect(render('{{ toString }}', { name: '太郎' })).toBe('')
      expect(render('{{ hasOwnProperty }}', { name: '太郎' })).toBe('')
    })

    it('throws when a refused member is called', () => {
      expect(() => render('{{ range.constructor("return 1")() }}', { name: '太郎' })).toThrow()
    })
  })
})
