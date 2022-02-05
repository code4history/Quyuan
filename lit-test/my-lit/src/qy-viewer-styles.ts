import { css } from 'lit'
import { injectCSS } from "./qy-utils";

const viewerIconCss = css`
  /*!
   *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
   *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
   */
  @font-face {
    font-family: qy-viewer-fontawesome-subset;
    src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAQ4AAsAAAAACNQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAEEAAABgiDOFTGNtYXAAAAFMAAAALwAAADTgCxBwZ2FzcAAAAXwAAAAIAAAACP//AANnbHlmAAABhAAAAHkAAACgt8J71mhlYWQAAAIAAAAAMAAAADYM/OLiaGhlYQAAAjAAAAAfAAAAJAuCBnJobXR4AAACUAAAAAwAAAAMDkADLWxvY2EAAAJcAAAADwAAABAAAADYbWF4cAAAAmwAAAAdAAAAIABGACduYW1lAAACjAAAAaAAAAYkHs+aNnBvc3QAAAQsAAAADAAAACAAAwAAeNpjYGbLZJzAwMrAwNLDYszAwNAGoZmKGRgYuxhQAaMAEqegsqiYwYFB4QMvG8N/IJ+NgRGsBkmJAgMDANUACIYAAAB42mNgYGBkYAZiBgYeBhYGDSDNBqQZGZgYFD7w/v8P5IPp/w/5v4JVAQEAnEUJZgAAAAAB//8AAnjaY2BknMRUxJTH7MfAzMDAKKgoyDiJ4Q5TEcOd/yoMjAx5/9+xCrFMYlBmYFAR4WdkU1LnBBL6jGom5pxAwp7RzEicE0jIM4qJsHMysgrJdMgEyPy79e8WkOqQkWFUA7LAYoxqjGoQsX+3gKJ4ZWXgpjAAAIY0J64AAAB42mNgZGBgAOKitvO74/ltvjIwsjOAwBXjs0ZwOu//O1YhlklALgcDE0g1AEMQC0t42mNgZGBgY/jPwMDAzsCQx5DHKsQAFEEBzAA0VQIFAAcAAr8BwAAABYAAbnjaY2AAAxkoXgAAAjgA2QB42mNgZGBgYGZQYQDRDAxMQMwIZjuA+QwABiUAbgAAAHja7dKxSsNAGAfw/yXRIqKgiKDTDQ4uxraIgltRWjdpC0UchJYebSEmeklbOro4iJuv4OggvoMvIg4+gA/gv9dvcHGog4jYkt7vu7vvfwkpAK2uoTD5bPOaWGGN1cQecjgS+5w/Fgd0VzyDZVyJZzl/J87RD7TCvMt/Fo/z38XMVwti5qsVMfPVlpj5qixmvjoRM19dsksFc8w/UzdihaJ6E3tY9NbFPorepjigT8Uz2PBuxbOcfxTn6BfnpXG+vyJmvm/FzPfvxcz3n8TM91/FzA9WxcwP9sXMD6KD5GJke51upg+bA6Mrzbg90sV8YTfUpSjSbinV1qTGDkw7rI4aPTM0tpzEWWlo0uTc1Put1GQ10+lHTfvl+pcLDWPTXhLrnXAvzLuTp8/4Ew+BAyS4wAgWPXT4786gcYgmBjBUhYrR5rpGEXkUsIuQLiHiV3/qSl1lOBqO4+42d1bZ2eAeg6GbL/O0mLtLrk5ZnXOso4+W68xQ42+HdcST7Tf6p+9ouH0pe8Y7NXZ433u88p+e+Sfu4/9N/JI38QFM0j60eNpjYGbACwAAfQAE') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`
injectCSS(viewerIconCss)

export const viewerStyles = css`.fa {display: inline-block;font: normal normal normal 14px/1 qy-viewer-fontawesome-subset;font-size: inherit;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}.fa-times:before {content: "\\f00d";}`
