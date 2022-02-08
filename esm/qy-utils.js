export function injectCSS(styles, styleElement = document.createElement('style')) {
    styleElement.innerHTML = styles.cssText;
    document.head.appendChild(styleElement);
    return styleElement;
}
