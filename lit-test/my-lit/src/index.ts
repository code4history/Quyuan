import "./qy-swiper"
import "./qy-viewer"
import {templateExtractor} from "./qy-template-extractor"

const Quyuan = {
  templateExtractor
}

if (window) {
  (window as any)["Quyuan"] = Quyuan
}

export default Quyuan