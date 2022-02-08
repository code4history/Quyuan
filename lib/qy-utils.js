"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectCSS = void 0;
function injectCSS(styles, styleElement = document.createElement('style')) {
    styleElement.innerHTML = styles.cssText;
    document.head.appendChild(styleElement);
    return styleElement;
}
exports.injectCSS = injectCSS;
