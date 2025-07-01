import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import '@/components/swiper/qy-swiper'

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
    
    const swiper = container.querySelector('qy-swiper') as any
    
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
    
    const swiperSlides = shadowRoot?.querySelectorAll('.swiper-slide')
    expect(swiperSlides?.length).toBeGreaterThan(0)
    
    const caption = shadowRoot?.querySelector('.slider-caption')
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
    
    const swiper = container.querySelector('qy-swiper') as any
    
    // Mock qy-viewer creation
    const mockViewer = {
      setSwiper: vi.fn(),
      setCurrentSlideIndex: vi.fn(),
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
    }) as any
    
    // Define qy-viewer custom element
    if (!customElements.get('qy-viewer')) {
      customElements.define('qy-viewer', class extends HTMLElement {})
    }
    
    await swiper.openViewer('image1.jpg', 'image', 0)
    
    // Wait for async operations
    await new Promise(resolve => setTimeout(resolve, 150))
    
    expect(mockViewer.setSwiper).toHaveBeenCalledWith(swiper)
    expect(mockViewer.setCurrentSlideIndex).toHaveBeenCalledWith(0)
    expect(mockViewer.open).toHaveBeenCalledWith('image1.jpg', 'image', expect.any(Object))
    
    // Restore createElement
    document.createElement = originalCreateElement
  })

  it('should re-render when slides are added dynamically', async () => {
    container.innerHTML = `<qy-swiper></qy-swiper>`

    await customElements.whenDefined('qy-swiper')
    const swiper = container.querySelector('qy-swiper') as any
    
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
    const shadowSlides = swiper.shadowRoot?.querySelectorAll('.swiper-slide')
    expect(shadowSlides?.length).toBeGreaterThan(0)
  })
})