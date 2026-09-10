import { describe, expect, it, vi } from 'vitest'
import type { Feature, FeatureCollection } from 'geojson'

// template entry が @c4h/chuci を解決した場合、この mock factory が例外を投げて
// テスト全体が赤になる（throwing-mock）。template entry のモジュールグラフに
// chuci が入った瞬間に factory が評価され、テストは失敗する。
vi.mock('@c4h/chuci', () => {
  throw new Error('template entry must not resolve @c4h/chuci')
})

import { Quyuan, default as defaultQuyuan } from '@/template'

type FeatureWithResult = Feature & { result: Record<string, string> }
type FeatureCollectionWithResult = FeatureCollection & {
  features: FeatureWithResult[]
}

describe('template entry', () => {
  it('provides Quyuan.templateExtractor as a named export function', () => {
    expect(typeof Quyuan.templateExtractor).toBe('function')
  })

  it('provides the same shape via default export', () => {
    expect(defaultQuyuan).toBe(Quyuan)
    expect(typeof defaultQuyuan.templateExtractor).toBe('function')
  })

  it('renders a GeoJSON template without resolving @c4h/chuci', () => {
    const geojson: FeatureCollection = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        properties: {
          name: 'Test Feature',
          description: 'Test Description'
        },
        geometry: {
          type: 'Point',
          coordinates: [0, 0]
        }
      }]
    }

    const templates = {
      html: '<h1>{{ name }}</h1><p>{{ description }}</p>'
    }

    const result = Quyuan.templateExtractor({
      geojson,
      templates
    }) as FeatureCollectionWithResult

    expect(result.features[0].result.html).toContain('<h1>Test Feature</h1>')
    expect(result.features[0].result.html).toContain('<p>Test Description</p>')
  })

  it('does not register UI components', () => {
    expect(customElements.get('qy-swiper')).toBeUndefined()
    expect(customElements.get('qy-viewer')).toBeUndefined()
  })
})
