import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { QySwiper } from '@/components/swiper/qy-swiper'
import '@/components/swiper/qy-swiper' // Force side-effects for registration
import '@/components/viewer/qy-viewer'

describe('qy-swiper', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
    // Clean up any qy-viewer elements
    document.querySelectorAll('qy-viewer').forEach(el => el.remove())
  })

  it('should register custom elements', () => {
    expect(customElements.get('qy-swiper')).toBeDefined()
    expect(customElements.get('qy-swiper-slide')).toBeDefined()
  })

  it('should create swiper element', async () => {
    container.innerHTML = `
      <qy-swiper>
        <qy-swiper-slide
          thumbnail-url="thumb1.jpg"
          image-url="image1.jpg"
          image-type="image">
        </qy-swiper-slide>
      </qy-swiper>
    `

    await customElements.whenDefined('qy-swiper')
    await customElements.whenDefined('qy-swiper-slide')

    const swiper = container.querySelector('qy-swiper')
    expect(swiper).toBeDefined()
    expect(swiper?.shadowRoot).toBeDefined()
  })

  it('should find qy-swiper-slide elements', async () => {
    container.innerHTML = `
      <qy-swiper>
        <qy-swiper-slide
          thumbnail-url="thumb1.jpg"
          image-url="image1.jpg"
          image-type="image">
        </qy-swiper-slide>
        <qy-swiper-slide
          thumbnail-url="thumb2.jpg"
          image-url="image2.jpg"
          image-type="image">
        </qy-swiper-slide>
      </qy-swiper>
    `

    await customElements.whenDefined('qy-swiper')
    await customElements.whenDefined('qy-swiper-slide')

    const swiper = container.querySelector('qy-swiper') as QySwiper

    // Wait for potential re-render
    await new Promise(resolve => setTimeout(resolve, 100))

    expect(swiper.slides).toBeDefined()
    expect(swiper.slides.length).toBe(2)
    expect(swiper.slides[0].tagName).toBe('QY-SWIPER-SLIDE')
  })

  it('should render slides in shadow DOM', async () => {
    container.innerHTML = `
      <qy-swiper>
        <qy-swiper-slide
          thumbnail-url="thumb1.jpg"
          image-url="image1.jpg"
          image-type="image"
          caption="Test caption">
        </qy-swiper-slide>
      </qy-swiper>
    `

    await customElements.whenDefined('qy-swiper')
    await customElements.whenDefined('qy-swiper-slide')

    const swiper = container.querySelector('qy-swiper')

    // Wait for re-render
    await new Promise(resolve => setTimeout(resolve, 100))

    const shadowRoot = swiper?.shadowRoot
    expect(shadowRoot).toBeDefined()

    const swiperSlides = shadowRoot?.querySelectorAll('.cc-slide')
    expect(swiperSlides?.length).toBeGreaterThan(0)

    const caption = shadowRoot?.querySelector('#caption .cc-bar-caption')
    expect(caption?.textContent).toBe('Test caption')
  })

  it('should handle openViewer method', async () => {
    container.innerHTML = `
      <qy-swiper>
        <qy-swiper-slide
          thumbnail-url="thumb1.jpg"
          image-url="image1.jpg"
          image-type="image">
        </qy-swiper-slide>
      </qy-swiper>
    `

    await customElements.whenDefined('qy-swiper')
    await customElements.whenDefined('qy-swiper-slide')

    const swiper = container.querySelector('qy-swiper') as QySwiper

    // Mock qy-viewer creation
    const mockViewer = {
      open: vi.fn()
    }

    // Override createElement for qy-viewer
    const originalCreateElement = document.createElement
    document.createElement = vi.fn((tagName: string) => {
      if (tagName === 'qy-viewer') {
        const el = originalCreateElement.call(document, tagName)
        Object.assign(el, mockViewer)
        return el
      }
      return originalCreateElement.call(document, tagName)
    }) as unknown as typeof document.createElement

    // Define qy-viewer custom element
    if (!customElements.get('qy-viewer')) {
      customElements.define('qy-viewer', class extends HTMLElement { })
    }

    await swiper.openViewer(0)

    expect(mockViewer.open).toHaveBeenCalledWith([
      {
        url: 'image1.jpg',
        type: 'image',
        thumbnailUrl: 'thumb1.jpg',
        caption: '',
        fitToContainer: false,
        debugMode: false
      }
    ], 0, { loop: false })

    // Restore createElement
    document.createElement = originalCreateElement
  })

  it('keeps timers, observers and handlers off while disconnected', async () => {
    vi.useFakeTimers()
    const observe = vi.fn()
    vi.stubGlobal('ResizeObserver', class { observe = observe; disconnect() {} })
    try {
      const swiper = document.createElement('qy-swiper')
      swiper.setAttribute('autoplay', '')
      const wrapper = document.createElement('div')
      const slide = () => {
        const node = document.createElement('qy-swiper-slide')
        node.setAttribute('thumbnail-url', 'thumb.jpg')
        return node
      }
      wrapper.append(slide(), slide())
      swiper.append(wrapper)
      container.append(swiper)
      expect(vi.getTimerCount()).toBe(1)
      swiper.remove()
      const observations = observe.mock.calls.length
      swiper.toggleAttribute('has-thumb')
      await Promise.resolve()
      expect(observe).toHaveBeenCalledTimes(observations)
      expect(vi.getTimerCount()).toBe(0)
      swiper.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))
      expect(swiper.index).toBe(0)

      container.append(swiper)
      expect(vi.getTimerCount()).toBe(1)
      wrapper.lastElementChild!.remove()
      await Promise.resolve()
      expect(swiper.shadowRoot!.querySelectorAll('.cc-slide')).toHaveLength(1)
      expect(vi.getTimerCount()).toBe(0)
    } finally {
      vi.unstubAllGlobals()
      vi.useRealTimers()
    }
  })

  it('should re-render when slides are added dynamically', async () => {
    container.innerHTML = `<qy-swiper></qy-swiper>`

    await customElements.whenDefined('qy-swiper')
    const swiper = container.querySelector('qy-swiper') as QySwiper

    // Initially no slides
    expect(swiper.slides.length).toBe(0)

    // Add a slide dynamically
    const slide = document.createElement('qy-swiper-slide')
    slide.setAttribute('thumbnail-url', 'thumb1.jpg')
    slide.setAttribute('image-url', 'image1.jpg')
    slide.setAttribute('image-type', 'image')
    swiper.appendChild(slide)

    // Wait for mutation observer to trigger
    await new Promise(resolve => setTimeout(resolve, 100))

    expect(swiper.slides.length).toBe(1)

    // Check if slide is rendered in shadow DOM
    const shadowSlides = swiper.shadowRoot?.querySelectorAll('.cc-slide')
    expect(shadowSlides?.length).toBeGreaterThan(0)
  })
})