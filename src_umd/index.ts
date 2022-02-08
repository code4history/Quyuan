import "../src/qy-swiper"
import "../src/qy-viewer"
import {templateExtractor} from "../src/qy-template-extractor"

export const Quyuan = {
  templateExtractor
}

if (window) {
  (window as any).Quyuan = Quyuan
}