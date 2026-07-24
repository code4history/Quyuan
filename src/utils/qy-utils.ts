
export function injectCSS(styles: string, styleElement = document.createElement('style')) {
  styleElement.innerHTML = styles
  document.head.appendChild(styleElement)
  return styleElement
}