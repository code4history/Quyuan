// Re-export from Chuci with qy- prefix for backward compatibility
import { CcSwiper, CcSwiperSlide } from '@c4h/chuci'

// Create wrapper components with qy- prefix
class QySwiper extends CcSwiper {
  get slides() {
    return Array.from(this.querySelectorAll('qy-swiper-slide'));
  }

  protected viewerTagName(): string {
    return 'qy-viewer';
  }
}

class QySwiperSlide extends CcSwiperSlide { }

// Register with original names
if (!customElements.get('qy-swiper')) {
  customElements.define('qy-swiper', QySwiper)
}

if (!customElements.get('qy-swiper-slide')) {
  customElements.define('qy-swiper-slide', QySwiperSlide)
}

export { QySwiper, QySwiperSlide }

declare global {
  interface HTMLElementTagNameMap {
    'qy-swiper': QySwiper
    'qy-swiper-slide': QySwiperSlide
  }
}
