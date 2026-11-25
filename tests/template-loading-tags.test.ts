import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { Feature } from 'geojson'

// Run against the browser build of Nunjucks, the one a bundler picks for a web
// page. Its default environment loads other templates over XMLHttpRequest.
vi.mock('nunjucks', async () => {
  // @ts-expect-error The browser bundle ships without type declarations.
  const browserBuild = await import('nunjucks/browser/nunjucks.js')
  return { default: browserBuild.default ?? browserBuild }
})

import nunjucks from 'nunjucks'
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
const LOADED = 'LOADED-FROM-OUTSIDE'

// Every request a template causes is recorded here and answered with a
// template, as a server holding that path would.
let requests: string[] = []

class FakeXMLHttpRequest {
  readyState = 0
  status = 0
  responseText = ''
  onreadystatechange: (() => void) | null = null

  open(_method: string, url: string): void {
    requests.push(url)
  }

  send(): void {
    this.readyState = 4
    this.status = 200
    this.responseText = `{% macro m() %}${LOADED}{% endmacro %}${LOADED}`
    this.onreadystatechange?.()
  }
}

const precompiledHolder = window as unknown as { nunjucksPrecompiled?: unknown }

beforeEach(() => {
  requests = []
  vi.stubGlobal('XMLHttpRequest', FakeXMLHttpRequest)
})

afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
  delete precompiledHolder.nunjucksPrecompiled
})

const loadingTemplates: Array<[string, string]> = [
  ['include', '{% include "other.html" %}'],
  ['include that ignores a missing template', '{% include "other.html" ignore missing %}'],
  ['include of a name taken from the data', '{% include name %}'],
  ['include inside a set block', '{% set x %}{% include "other.html" %}{% endset %}{{ x }}'],
  ['include inside if', '{% if true %}{% include "other.html" %}{% endif %}'],
  ['include inside for', '{% for i in [1] %}{% include "other.html" %}{% endfor %}'],
  ['include inside a macro', '{% macro m() %}{% include "other.html" %}{% endmacro %}{{ m() }}'],
  ['import', '{% import "other.html" as other %}{{ other.m() }}'],
  ['from import', '{% from "other.html" import m %}{{ m() }}'],
  ['from import with an alias', '{% from "other.html" import m as n %}{{ n() }}'],
  ['extends', '{% extends "other.html" %}'],
  ['extends of a name taken from the data', '{% extends name %}'],
]

describe('tags that load another template', () => {
  it('runs against the browser build of Nunjucks', () => {
    expect((nunjucks as unknown as Record<string, unknown>).WebLoader).toBeDefined()
  })

  it.each(loadingTemplates)('refuses %s before it renders', (_label, template) => {
    expect(() => render(template, { name: 'other.html' })).toThrow(NOT_ALLOWED)
    expect(requests).toEqual([])
  })
})

describe('the template environment has no loader', () => {
  // The check above reads the template with the Nunjucks parser. These cases
  // skip that one read, to show that the environment cannot load a template
  // even if a loading tag reached it.
  const skipStaticCheckOnce = (): void => {
    const api = nunjucks as unknown as { parser: { parse: (...args: unknown[]) => unknown } }
    vi.spyOn(api.parser, 'parse').mockImplementationOnce(() => {
      throw new Error('skipped')
    })
  }

  it.each(loadingTemplates)('makes no request for %s', (_label, template) => {
    skipStaticCheckOnce()
    let out: string
    try {
      out = render(template, { name: 'other.html' })
    } catch {
      out = 'ERR'
    }
    expect(requests).toEqual([])
    expect(out).not.toContain(LOADED)
  })

  it('reports a missing template', () => {
    skipStaticCheckOnce()
    expect(() => render('{% include "other.html" %}')).toThrow(/template not found/)
  })

  it('does not read templates precompiled into the page', () => {
    precompiledHolder.nunjucksPrecompiled = {
      'other.html': {
        root: (
          _env: unknown,
          _context: unknown,
          _frame: unknown,
          _runtime: unknown,
          cb: (err: unknown, res: string) => void
        ) => cb(null, LOADED),
      },
    }
    skipStaticCheckOnce()
    expect(() => render('{% include "other.html" %}')).toThrow(/template not found/)
  })
})

describe('templates that load nothing keep working', () => {
  const properties = {
    name: '地蔵',
    type: 'cultural',
    description: '<b>stone</b>',
    images: [
      { url: 'a.jpg', caption: 'A' },
      { url: 'b.jpg', caption: 'B' },
    ],
    include: 'i',
    import: 'm',
    from: 'f',
    extends: 'e',
    note: '{% include "other.html" %}{{ name }}',
    '住所 詳細': '東京',
  }

  it.each<[string, string, string]>([
    ['a variable', '{{ name }}', '地蔵'],
    ['an escaped variable', '{{ description }}', '&lt;b&gt;stone&lt;/b&gt;'],
    ['filters', '{{ type | upper }}/{{ missing | default("none") }}/{{ description | safe }}', 'CULTURAL/none/<b>stone</b>'],
    ['a filter with arguments', '{{ name | replace("蔵", "X") }}|{{ images | length }}', '地X|2'],
    ['if and else', "{% if type == 'cultural' %}cultural.png{% else %}default.png{% endif %}", 'cultural.png'],
    ['elif', '{% if type == "a" %}1{% elif type == "cultural" %}2{% else %}3{% endif %}', '2'],
    ['an inline if', '{{ "y" if images else "n" }}', 'y'],
    ['for', '{% for image in images %}{{ loop.index }}:{{ image.url }};{% endfor %}', '1:a.jpg;2:b.jpg;'],
    ['for with else', '{% for x in nothing %}x{% else %}empty{% endfor %}', 'empty'],
    ['for over keys and values', '{% for k, v in images[0] %}{{ k }}={{ v }},{% endfor %}', 'url=a.jpg,caption=A,'],
    ['set', '{% set label = name + "!" %}{{ label }}', '地蔵!'],
    ['a set block', '{% set label %}[{{ name }}]{% endset %}{{ label }}', '[地蔵]'],
    ['a macro', '{% macro m(v) %}<{{ v }}>{% endmacro %}{{ m(type) }}', '<cultural>'],
    ['a string key', '{{ ["住所 詳細"] | length }}{{ images[1]["caption"] }}', '1B'],
    ['a raw block', '{% raw %}{% include "other.html" %}{{ name }}{% endraw %}', '{% include "other.html" %}{{ name }}'],
    ['a comment', '{# {% include "other.html" %} #}{{ name }}', '地蔵'],
    ['whitespace control', '{%- if name -%} {{- name -}} {%- endif -%}', '地蔵'],
    ['attributes named like the loading tags', '{{ include }}{{ import }}{{ from }}{{ extends }}', 'imfe'],
    ['plain text that mentions the tags', 'include import from extends {{ name }}', 'include import from extends 地蔵'],
    ['data that holds a loading tag', '{{ note | safe }}', '{% include "other.html" %}{{ name }}'],
  ])('renders %s', (_label, template, expected) => {
    expect(render(template, properties)).toBe(expected)
    expect(requests).toEqual([])
  })

  it('renders the templates of the README', () => {
    const readmeProperties = {
      name: 'Sample Location',
      type: 'cultural',
      images: [
        { path: 'image1.jpg', type: 'image', description: 'Sample image' },
        { path: 'pano1.jpg', type: 'panorama', description: '360-degree image' },
      ],
    }
    expect(
      render("{% if type == 'cultural' %}cultural.png{% else %}default.png{% endif %}", readmeProperties)
    ).toBe('cultural.png')
    const out = render(
      `
    <div class="popup-content">
      <h3>{{ name }}</h3>
      <qy-swiper style="height:200px;">
        {% for image in images %}
          <qy-swiper-slide
            image-url="{{ image.path }}"
            image-type="{{ image.type }}"
            caption="{{ image.description }}">
          </qy-swiper-slide>
        {% endfor %}
      </qy-swiper>
    </div>
  `,
      readmeProperties
    )
    expect(out).toContain('<h3>Sample Location</h3>')
    expect(out).toContain('image-url="image1.jpg"')
    expect(out).toContain('image-type="panorama"')
    expect(out).toContain('caption="360-degree image"')
    expect(requests).toEqual([])
  })
})
