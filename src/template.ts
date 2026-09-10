import {templateExtractor} from "./utils/qy-template-extractor"

// template-only entry（@c4h/quyuan/template）
// UI コンポーネント（qy-swiper / qy-viewer）を副作用 import しないため、
// モジュールグラフに @c4h/chuci を含まない（optional peer 化の目的）。
export const Quyuan = {
  templateExtractor
}

export default Quyuan
