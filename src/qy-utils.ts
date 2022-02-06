import { CSSResult } from 'lit'

export function injectCSS(styles: CSSResult, styleElement = document.createElement('style')) {
  styleElement.innerHTML = styles.cssText
  document.head.appendChild(styleElement)
  return styleElement
}