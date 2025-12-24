(function(Ht,Bt){typeof exports=="object"&&typeof module<"u"?Bt(exports):typeof define=="function"&&define.amd?define(["exports"],Bt):(Ht=typeof globalThis<"u"?globalThis:Ht||self,Bt(Ht.Quyuan={}))})(this,(function(Ht){"use strict";var ty=Object.defineProperty;var iy=(Ht,Bt,Sr)=>Bt in Ht?ty(Ht,Bt,{enumerable:!0,configurable:!0,writable:!0,value:Sr}):Ht[Bt]=Sr;var er=(Ht,Bt,Sr)=>iy(Ht,typeof Bt!="symbol"?Bt+"":Bt,Sr);var Bt=typeof document<"u"?document.currentScript:null,Sr=Object.defineProperty,Au=(r,e,t)=>e in r?Sr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ie=(r,e,t)=>Au(r,typeof e!="symbol"?e+"":e,t);class Pn extends HTMLElement{constructor(){super(),Ie(this,"_shadowRoot"),Ie(this,"_connected",!1),this._shadowRoot=this.attachShadow({mode:"open"})}connectedCallback(){this._connected?this.render():(this._connected=!0,this.render(),this.firstUpdated())}disconnectedCallback(){this._connected=!1}attributeChangedCallback(e,t,i){t!==i&&this.render()}firstUpdated(){}html(e,...t){return e.reduce((i,n,a)=>i+n+(t[a]||""),"")}css(e,...t){return`<style>${e.reduce((i,n,a)=>i+n+(t[a]||""),"")}</style>`}updateShadowRoot(e){this._shadowRoot.innerHTML=e}query(e){return this._shadowRoot.querySelector(e)}queryAll(e){return this._shadowRoot.querySelectorAll(e)}dispatch(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}}function ll(r){return r!==null&&typeof r=="object"&&"constructor"in r&&r.constructor===Object}function qa(r,e){r===void 0&&(r={}),e===void 0&&(e={});const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof r[i]>"u"?r[i]=e[i]:ll(e[i])&&ll(r[i])&&Object.keys(e[i]).length>0&&qa(r[i],e[i])})}const cl={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Vt(){const r=typeof document<"u"?document:{};return qa(r,cl),r}const _u={document:cl,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(r){return typeof setTimeout>"u"?(r(),null):setTimeout(r,0)},cancelAnimationFrame(r){typeof setTimeout>"u"||clearTimeout(r)}};function Tt(){const r=typeof window<"u"?window:{};return qa(r,_u),r}function Oi(r){return r===void 0&&(r=""),r.trim().split(" ").filter(e=>!!e.trim())}function yu(r){const e=r;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function $a(r,e){return e===void 0&&(e=0),setTimeout(r,e)}function Vn(){return Date.now()}function Eu(r){const e=Tt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(r,null)),!t&&r.currentStyle&&(t=r.currentStyle),t||(t=r.style),t}function Su(r,e){e===void 0&&(e="x");const t=Tt();let i,n,a;const o=Eu(r);return t.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(s=>s.replace(",",".")).join(", ")),a=new t.WebKitCSSMatrix(n==="none"?"":n)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=a.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?n=a.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?n=a.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function fn(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function xu(r){return typeof window<"u"&&typeof window.HTMLElement<"u"?r instanceof HTMLElement:r&&(r.nodeType===1||r.nodeType===11)}function Yt(){const r=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!xu(i)){const n=Object.keys(Object(i)).filter(a=>e.indexOf(a)<0);for(let a=0,o=n.length;a<o;a+=1){const s=n[a],l=Object.getOwnPropertyDescriptor(i,s);l!==void 0&&l.enumerable&&(fn(r[s])&&fn(i[s])?i[s].__swiper__?r[s]=i[s]:Yt(r[s],i[s]):!fn(r[s])&&fn(i[s])?(r[s]={},i[s].__swiper__?r[s]=i[s]:Yt(r[s],i[s])):r[s]=i[s])}}}return r}function On(r,e,t){r.style.setProperty(e,t)}function hl(r){let{swiper:e,targetPosition:t,side:i}=r;const n=Tt(),a=-e.translate;let o=null,s;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);const c=t>a?"next":"prev",h=(p,m)=>c==="next"&&p>=m||c==="prev"&&p<=m,f=()=>{s=new Date().getTime(),o===null&&(o=s);const p=Math.max(Math.min((s-o)/l,1),0),m=.5-Math.cos(p*Math.PI)/2;let g=a+m*(t-a);if(h(g,t)&&(g=t),e.wrapperEl.scrollTo({[i]:g}),h(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:g})}),n.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=n.requestAnimationFrame(f)};f()}function ci(r,e){e===void 0&&(e="");const t=Tt(),i=[...r.children];return t.HTMLSlotElement&&r instanceof HTMLSlotElement&&i.push(...r.assignedElements()),e?i.filter(n=>n.matches(e)):i}function wu(r,e){const t=[e];for(;t.length>0;){const i=t.shift();if(r===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function bu(r,e){const t=Tt();let i=e.contains(r);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(r),i||(i=wu(r,e))),i}function zn(r){try{console.warn(r);return}catch{}}function mn(r,e){e===void 0&&(e=[]);const t=document.createElement(r);return t.classList.add(...Array.isArray(e)?e:Oi(e)),t}function ul(r){const e=Tt(),t=Vt(),i=r.getBoundingClientRect(),n=t.body,a=r.clientTop||n.clientTop||0,o=r.clientLeft||n.clientLeft||0,s=r===e?e.scrollY:r.scrollTop,l=r===e?e.scrollX:r.scrollLeft;return{top:i.top+s-a,left:i.left+l-o}}function Cu(r,e){const t=[];for(;r.previousElementSibling;){const i=r.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),r=i}return t}function Uu(r,e){const t=[];for(;r.nextElementSibling;){const i=r.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),r=i}return t}function zi(r,e){return Tt().getComputedStyle(r,null).getPropertyValue(e)}function Wn(r){let e=r,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Gn(r,e){const t=[];let i=r.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function es(r,e,t){const i=Tt();return r[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function Et(r){return(Array.isArray(r)?r:[r]).filter(e=>!!e)}function dl(r,e){e===void 0&&(e=""),typeof trustedTypes<"u"?r.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):r.innerHTML=e}let ts;function Tu(){const r=Tt(),e=Vt();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in r||r.DocumentTouch&&e instanceof r.DocumentTouch)}}function pl(){return ts||(ts=Tu()),ts}let is;function Mu(r){let{userAgent:e}=r===void 0?{}:r;const t=pl(),i=Tt(),n=i.navigator.platform,a=e||i.navigator.userAgent,o={ios:!1,android:!1},s=i.screen.width,l=i.screen.height,c=a.match(/(Android);?[\s\/]+([\d.]+)?/);let h=a.match(/(iPad).*OS\s([\d_]+)/);const f=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!h&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=n==="Win32";let g=n==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!h&&g&&t.touch&&y.indexOf(`${s}x${l}`)>=0&&(h=a.match(/(Version)\/([\d.]+)/),h||(h=[0,1,"13_0_0"]),g=!1),c&&!m&&(o.os="android",o.android=!0),(h||p||f)&&(o.os="ios",o.ios=!0),o}function fl(r){return r===void 0&&(r={}),is||(is=Mu(r)),is}let rs;function Fu(){const r=Tt(),e=fl();let t=!1;function i(){const s=r.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(i()){const s=String(r.navigator.userAgent);if(s.includes("Version/")){const[l,c]=s.split("Version/")[1].split(" ")[0].split(".").map(h=>Number(h));t=l<16||l===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent),a=i(),o=a||n&&e.ios;return{isSafari:t||a,needPerspectiveFix:t,need3dFix:o,isWebView:n}}function ml(){return rs||(rs=Fu()),rs}function Ru(r){let{swiper:e,on:t,emit:i}=r;const n=Tt();let a=null,o=null;const s=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(a=new ResizeObserver(f=>{o=n.requestAnimationFrame(()=>{const{width:p,height:m}=e;let g=p,y=m;f.forEach(d=>{let{contentBoxSize:u,contentRect:v,target:S}=d;S&&S!==e.el||(g=v?v.width:(u[0]||u).inlineSize,y=v?v.height:(u[0]||u).blockSize)}),(g!==p||y!==m)&&s()})}),a.observe(e.el))},c=()=>{o&&n.cancelAnimationFrame(o),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null)},h=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof n.ResizeObserver<"u"){l();return}n.addEventListener("resize",s),n.addEventListener("orientationchange",h)}),t("destroy",()=>{c(),n.removeEventListener("resize",s),n.removeEventListener("orientationchange",h)})}function Iu(r){let{swiper:e,extendParams:t,on:i,emit:n}=r;const a=[],o=Tt(),s=function(h,f){f===void 0&&(f={});const p=o.MutationObserver||o.WebkitMutationObserver,m=new p(g=>{if(e.__preventObserver__)return;if(g.length===1){n("observerUpdate",g[0]);return}const y=function(){n("observerUpdate",g[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});m.observe(h,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:e.isElement||(typeof f.childList>"u"?!0:f).childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),a.push(m)},l=()=>{if(e.params.observer){if(e.params.observeParents){const h=Gn(e.hostEl);for(let f=0;f<h.length;f+=1)s(h[f])}s(e.hostEl,{childList:e.params.observeSlideChildren}),s(e.wrapperEl,{attributes:!1})}},c=()=>{a.forEach(h=>{h.disconnect()}),a.splice(0,a.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var Bu={on(r,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const n=t?"unshift":"push";return r.split(" ").forEach(a=>{i.eventsListeners[a]||(i.eventsListeners[a]=[]),i.eventsListeners[a][n](e)}),i},once(r,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function n(){i.off(r,n),n.__emitterProxy&&delete n.__emitterProxy;for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];e.apply(i,o)}return n.__emitterProxy=e,i.on(r,n,t)},onAny(r,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof r!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(r)<0&&t.eventsAnyListeners[i](r),t},offAny(r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(r);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(r,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||r.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((n,a)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&t.eventsListeners[i].splice(a,1)})}),t},emit(){const r=this;if(!r.eventsListeners||r.destroyed||!r.eventsListeners)return r;let e,t,i;for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(e=a[0],t=a.slice(1,a.length),i=r):(e=a[0].events,t=a[0].data,i=a[0].context||r),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(s=>{r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach(l=>{l.apply(i,[s,...t])}),r.eventsListeners&&r.eventsListeners[s]&&r.eventsListeners[s].forEach(l=>{l.apply(i,t)})}),r}};function Qu(){const r=this;let e,t;const i=r.el;typeof r.params.width<"u"&&r.params.width!==null?e=r.params.width:e=i.clientWidth,typeof r.params.height<"u"&&r.params.height!==null?t=r.params.height:t=i.clientHeight,!(e===0&&r.isHorizontal()||t===0&&r.isVertical())&&(e=e-parseInt(zi(i,"padding-left")||0,10)-parseInt(zi(i,"padding-right")||0,10),t=t-parseInt(zi(i,"padding-top")||0,10)-parseInt(zi(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(r,{width:e,height:t,size:r.isHorizontal()?e:t}))}function Lu(){const r=this;function e(A,C){return parseFloat(A.getPropertyValue(r.getDirectionLabel(C))||0)}const t=r.params,{wrapperEl:i,slidesEl:n,size:a,rtlTranslate:o,wrongRTL:s}=r,l=r.virtual&&t.virtual.enabled,c=l?r.virtual.slides.length:r.slides.length,h=ci(n,`.${r.params.slideClass}, swiper-slide`),f=l?r.virtual.slides.length:h.length;let p=[];const m=[],g=[];let y=t.slidesOffsetBefore;typeof y=="function"&&(y=t.slidesOffsetBefore.call(r));let d=t.slidesOffsetAfter;typeof d=="function"&&(d=t.slidesOffsetAfter.call(r));const u=r.snapGrid.length,v=r.slidesGrid.length;let S=t.spaceBetween,_=-y,b=0,x=0;if(typeof a>"u")return;typeof S=="string"&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*a:typeof S=="string"&&(S=parseFloat(S)),r.virtualSize=-S,h.forEach(A=>{o?A.style.marginLeft="":A.style.marginRight="",A.style.marginBottom="",A.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(On(i,"--swiper-centered-offset-before",""),On(i,"--swiper-centered-offset-after",""));const w=t.grid&&t.grid.rows>1&&r.grid;w?r.grid.initSlides(h):r.grid&&r.grid.unsetSlides();let U;const E=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(A=>typeof t.breakpoints[A].slidesPerView<"u").length>0;for(let A=0;A<f;A+=1){U=0;let C;if(h[A]&&(C=h[A]),w&&r.grid.updateSlide(A,C,h),!(h[A]&&zi(C,"display")==="none")){if(t.slidesPerView==="auto"){E&&(h[A].style[r.getDirectionLabel("width")]="");const T=getComputedStyle(C),R=C.style.transform,B=C.style.webkitTransform;if(R&&(C.style.transform="none"),B&&(C.style.webkitTransform="none"),t.roundLengths)U=r.isHorizontal()?es(C,"width"):es(C,"height");else{const L=e(T,"width"),N=e(T,"padding-left"),k=e(T,"padding-right"),M=e(T,"margin-left"),I=e(T,"margin-right"),P=T.getPropertyValue("box-sizing");if(P&&P==="border-box")U=L+M+I;else{const{clientWidth:K,offsetWidth:$}=C;U=L+N+k+M+I+($-K)}}R&&(C.style.transform=R),B&&(C.style.webkitTransform=B),t.roundLengths&&(U=Math.floor(U))}else U=(a-(t.slidesPerView-1)*S)/t.slidesPerView,t.roundLengths&&(U=Math.floor(U)),h[A]&&(h[A].style[r.getDirectionLabel("width")]=`${U}px`);h[A]&&(h[A].swiperSlideSize=U),g.push(U),t.centeredSlides?(_=_+U/2+b/2+S,b===0&&A!==0&&(_=_-a/2-S),A===0&&(_=_-a/2-S),Math.abs(_)<1/1e3&&(_=0),t.roundLengths&&(_=Math.floor(_)),x%t.slidesPerGroup===0&&p.push(_),m.push(_)):(t.roundLengths&&(_=Math.floor(_)),(x-Math.min(r.params.slidesPerGroupSkip,x))%r.params.slidesPerGroup===0&&p.push(_),m.push(_),_=_+U+S),r.virtualSize+=U+S,b=U,x+=1}}if(r.virtualSize=Math.max(r.virtualSize,a)+d,o&&s&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${r.virtualSize+S}px`),t.setWrapperSize&&(i.style[r.getDirectionLabel("width")]=`${r.virtualSize+S}px`),w&&r.grid.updateWrapperSize(U,p),!t.centeredSlides){const A=[];for(let C=0;C<p.length;C+=1){let T=p[C];t.roundLengths&&(T=Math.floor(T)),p[C]<=r.virtualSize-a&&A.push(T)}p=A,Math.floor(r.virtualSize-a)-Math.floor(p[p.length-1])>1&&p.push(r.virtualSize-a)}if(l&&t.loop){const A=g[0]+S;if(t.slidesPerGroup>1){const C=Math.ceil((r.virtual.slidesBefore+r.virtual.slidesAfter)/t.slidesPerGroup),T=A*t.slidesPerGroup;for(let R=0;R<C;R+=1)p.push(p[p.length-1]+T)}for(let C=0;C<r.virtual.slidesBefore+r.virtual.slidesAfter;C+=1)t.slidesPerGroup===1&&p.push(p[p.length-1]+A),m.push(m[m.length-1]+A),r.virtualSize+=A}if(p.length===0&&(p=[0]),S!==0){const A=r.isHorizontal()&&o?"marginLeft":r.getDirectionLabel("marginRight");h.filter((C,T)=>!t.cssMode||t.loop?!0:T!==h.length-1).forEach(C=>{C.style[A]=`${S}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let A=0;g.forEach(T=>{A+=T+(S||0)}),A-=S;const C=A>a?A-a:0;p=p.map(T=>T<=0?-y:T>C?C+d:T)}if(t.centerInsufficientSlides){let A=0;g.forEach(T=>{A+=T+(S||0)}),A-=S;const C=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(A+C<a){const T=(a-A-C)/2;p.forEach((R,B)=>{p[B]=R-T}),m.forEach((R,B)=>{m[B]=R+T})}}if(Object.assign(r,{slides:h,snapGrid:p,slidesGrid:m,slidesSizesGrid:g}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){On(i,"--swiper-centered-offset-before",`${-p[0]}px`),On(i,"--swiper-centered-offset-after",`${r.size/2-g[g.length-1]/2}px`);const A=-r.snapGrid[0],C=-r.slidesGrid[0];r.snapGrid=r.snapGrid.map(T=>T+A),r.slidesGrid=r.slidesGrid.map(T=>T+C)}if(f!==c&&r.emit("slidesLengthChange"),p.length!==u&&(r.params.watchOverflow&&r.checkOverflow(),r.emit("snapGridLengthChange")),m.length!==v&&r.emit("slidesGridLengthChange"),t.watchSlidesProgress&&r.updateSlidesOffset(),r.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const A=`${t.containerModifierClass}backface-hidden`,C=r.el.classList.contains(A);f<=t.maxBackfaceHiddenSlides?C||r.el.classList.add(A):C&&r.el.classList.remove(A)}}function Du(r){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let n=0,a;typeof r=="number"?e.setTransition(r):r===!0&&e.setTransition(e.params.speed);const o=s=>i?e.slides[e.getSlideIndexByData(s)]:e.slides[s];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(s=>{t.push(s)});else for(a=0;a<Math.ceil(e.params.slidesPerView);a+=1){const s=e.activeIndex+a;if(s>e.slides.length&&!i)break;t.push(o(s))}else t.push(o(e.activeIndex));for(a=0;a<t.length;a+=1)if(typeof t[a]<"u"){const s=t[a].offsetHeight;n=s>n?s:n}(n||n===0)&&(e.wrapperEl.style.height=`${n}px`)}function Nu(){const r=this,e=r.slides,t=r.isElement?r.isHorizontal()?r.wrapperEl.offsetLeft:r.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(r.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-r.cssOverflowAdjustment()}const gl=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function ku(r){r===void 0&&(r=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:n,snapGrid:a}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-r;n&&(o=r),e.visibleSlidesIndexes=[],e.visibleSlides=[];let s=t.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*e.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<i.length;l+=1){const c=i[l];let h=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(h-=i[0].swiperSlideOffset);const f=(o+(t.centeredSlides?e.minTranslate():0)-h)/(c.swiperSlideSize+s),p=(o-a[0]+(t.centeredSlides?e.minTranslate():0)-h)/(c.swiperSlideSize+s),m=-(o-h),g=m+e.slidesSizesGrid[l],y=m>=0&&m<=e.size-e.slidesSizesGrid[l],d=m>=0&&m<e.size-1||g>1&&g<=e.size||m<=0&&g>=e.size;d&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),gl(c,d,t.slideVisibleClass),gl(c,y,t.slideFullyVisibleClass),c.progress=n?-f:f,c.originalProgress=n?-p:p}}function Pu(r){const e=this;if(typeof r>"u"){const h=e.rtlTranslate?-1:1;r=e&&e.translate&&e.translate*h||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:n,isBeginning:a,isEnd:o,progressLoop:s}=e;const l=a,c=o;if(i===0)n=0,a=!0,o=!0;else{n=(r-e.minTranslate())/i;const h=Math.abs(r-e.minTranslate())<1,f=Math.abs(r-e.maxTranslate())<1;a=h||n<=0,o=f||n>=1,h&&(n=0),f&&(n=1)}if(t.loop){const h=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),p=e.slidesGrid[h],m=e.slidesGrid[f],g=e.slidesGrid[e.slidesGrid.length-1],y=Math.abs(r);y>=p?s=(y-p)/g:s=(y+g-m)/g,s>1&&(s-=1)}Object.assign(e,{progress:n,progressLoop:s,isBeginning:a,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(r),a&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!a||c&&!o)&&e.emit("fromEdge"),e.emit("progress",n)}const ns=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function Vu(){const r=this,{slides:e,params:t,slidesEl:i,activeIndex:n}=r,a=r.virtual&&t.virtual.enabled,o=r.grid&&t.grid&&t.grid.rows>1,s=f=>ci(i,`.${t.slideClass}${f}, swiper-slide${f}`)[0];let l,c,h;if(a)if(t.loop){let f=n-r.virtual.slidesBefore;f<0&&(f=r.virtual.slides.length+f),f>=r.virtual.slides.length&&(f-=r.virtual.slides.length),l=s(`[data-swiper-slide-index="${f}"]`)}else l=s(`[data-swiper-slide-index="${n}"]`);else o?(l=e.find(f=>f.column===n),h=e.find(f=>f.column===n+1),c=e.find(f=>f.column===n-1)):l=e[n];l&&(o||(h=Uu(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!h&&(h=e[0]),c=Cu(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(f=>{ns(f,f===l,t.slideActiveClass),ns(f,f===h,t.slideNextClass),ns(f,f===c,t.slidePrevClass)}),r.emitSlidesClasses()}const Jn=(r,e)=>{if(!r||r.destroyed||!r.params)return;const t=()=>r.isElement?"swiper-slide":`.${r.params.slideClass}`,i=e.closest(t());if(i){let n=i.querySelector(`.${r.params.lazyPreloaderClass}`);!n&&r.isElement&&(i.shadowRoot?n=i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(n=i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},as=(r,e)=>{if(!r.slides[e])return;const t=r.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ss=r=>{if(!r||r.destroyed||!r.params)return;let e=r.params.lazyPreloadPrevNext;const t=r.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(r.params.slidesPerView),n=r.activeIndex;if(r.params.grid&&r.params.grid.rows>1){const o=n,s=[o-e];s.push(...Array.from({length:e}).map((l,c)=>o+i+c)),r.slides.forEach((l,c)=>{s.includes(l.column)&&as(r,c)});return}const a=n+i-1;if(r.params.rewind||r.params.loop)for(let o=n-e;o<=a+e;o+=1){const s=(o%t+t)%t;(s<n||s>a)&&as(r,s)}else for(let o=Math.max(n-e,0);o<=Math.min(a+e,t-1);o+=1)o!==n&&(o>a||o<n)&&as(r,o)};function Ou(r){const{slidesGrid:e,params:t}=r,i=r.rtlTranslate?r.translate:-r.translate;let n;for(let a=0;a<e.length;a+=1)typeof e[a+1]<"u"?i>=e[a]&&i<e[a+1]-(e[a+1]-e[a])/2?n=a:i>=e[a]&&i<e[a+1]&&(n=a+1):i>=e[a]&&(n=a);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function zu(r){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:n,activeIndex:a,realIndex:o,snapIndex:s}=e;let l=r,c;const h=m=>{let g=m-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof l>"u"&&(l=Ou(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const m=Math.min(n.slidesPerGroupSkip,l);c=m+Math.floor((l-m)/n.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===a&&!e.params.loop){c!==s&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===a&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=h(l);return}const f=e.grid&&n.grid&&n.grid.rows>1;let p;if(e.virtual&&n.virtual.enabled&&n.loop)p=h(l);else if(f){const m=e.slides.find(y=>y.column===l);let g=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(m),0)),p=Math.floor(g/n.grid.rows)}else if(e.slides[l]){const m=e.slides[l].getAttribute("data-swiper-slide-index");m?p=parseInt(m,10):p=l}else p=l;Object.assign(e,{previousSnapIndex:s,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:a,activeIndex:l}),e.initialized&&ss(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==p&&e.emit("realIndexChange"),e.emit("slideChange"))}function Wu(r,e){const t=this,i=t.params;let n=r.closest(`.${i.slideClass}, swiper-slide`);!n&&t.isElement&&e&&e.length>1&&e.includes(r)&&[...e.slice(e.indexOf(r)+1,e.length)].forEach(s=>{!n&&s.matches&&s.matches(`.${i.slideClass}, swiper-slide`)&&(n=s)});let a=!1,o;if(n){for(let s=0;s<t.slides.length;s+=1)if(t.slides[s]===n){a=!0,o=s;break}}if(n&&a)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Gu={updateSize:Qu,updateSlides:Lu,updateAutoHeight:Du,updateSlidesOffset:Nu,updateSlidesProgress:ku,updateProgress:Pu,updateSlidesClasses:Vu,updateActiveIndex:zu,updateClickedSlide:Wu};function Ju(r){r===void 0&&(r=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:n,wrapperEl:a}=e;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let o=Su(a,r);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function Zu(r,e){const t=this,{rtlTranslate:i,params:n,wrapperEl:a,progress:o}=t;let s=0,l=0;const c=0;t.isHorizontal()?s=i?-r:r:l=r,n.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?s:l,n.cssMode?a[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-s:-l:n.virtualTranslate||(t.isHorizontal()?s-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${l}px, ${c}px)`);let h;const f=t.maxTranslate()-t.minTranslate();f===0?h=0:h=(r-t.minTranslate())/f,h!==o&&t.updateProgress(r),t.emit("setTranslate",t.translate,e)}function Hu(){return-this.snapGrid[0]}function Yu(){return-this.snapGrid[this.snapGrid.length-1]}function Xu(r,e,t,i,n){r===void 0&&(r=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),c=a.maxTranslate();let h;if(i&&r>l?h=l:i&&r<c?h=c:h=r,a.updateProgress(h),o.cssMode){const f=a.isHorizontal();if(e===0)s[f?"scrollLeft":"scrollTop"]=-h;else{if(!a.support.smoothScroll)return hl({swiper:a,targetPosition:-h,side:f?"left":"top"}),!0;s.scrollTo({[f?"left":"top"]:-h,behavior:"smooth"})}return!0}return e===0?(a.setTransition(0),a.setTranslate(h),t&&(a.emit("beforeTransitionStart",e,n),a.emit("transitionEnd"))):(a.setTransition(e),a.setTranslate(h),t&&(a.emit("beforeTransitionStart",e,n),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(f){!a||a.destroyed||f.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,t&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var ju={getTranslate:Ju,setTranslate:Zu,minTranslate:Hu,maxTranslate:Yu,translateTo:Xu};function Ku(r,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${r}ms`,t.wrapperEl.style.transitionDelay=r===0?"0ms":""),t.emit("setTransition",r,e)}function vl(r){let{swiper:e,runCallbacks:t,direction:i,step:n}=r;const{activeIndex:a,previousIndex:o}=e;let s=i;s||(a>o?s="next":a<o?s="prev":s="reset"),e.emit(`transition${n}`),t&&s==="reset"?e.emit(`slideResetTransition${n}`):t&&a!==o&&(e.emit(`slideChangeTransition${n}`),s==="next"?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`))}function qu(r,e){r===void 0&&(r=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),vl({swiper:t,runCallbacks:r,direction:e,step:"Start"}))}function $u(r,e){r===void 0&&(r=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),vl({swiper:t,runCallbacks:r,direction:e,step:"End"}))}var ed={setTransition:Ku,transitionStart:qu,transitionEnd:$u};function td(r,e,t,i,n){r===void 0&&(r=0),t===void 0&&(t=!0),typeof r=="string"&&(r=parseInt(r,10));const a=this;let o=r;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:c,previousIndex:h,activeIndex:f,rtlTranslate:p,wrapperEl:m,enabled:g}=a;if(!g&&!i&&!n||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=a.params.speed);const y=Math.min(a.params.slidesPerGroupSkip,o);let d=y+Math.floor((o-y)/a.params.slidesPerGroup);d>=l.length&&(d=l.length-1);const u=-l[d];if(s.normalizeSlideIndex)for(let b=0;b<c.length;b+=1){const x=-Math.floor(u*100),w=Math.floor(c[b]*100),U=Math.floor(c[b+1]*100);typeof c[b+1]<"u"?x>=w&&x<U-(U-w)/2?o=b:x>=w&&x<U&&(o=b+1):x>=w&&(o=b)}if(a.initialized&&o!==f&&(!a.allowSlideNext&&(p?u>a.translate&&u>a.minTranslate():u<a.translate&&u<a.minTranslate())||!a.allowSlidePrev&&u>a.translate&&u>a.maxTranslate()&&(f||0)!==o))return!1;o!==(h||0)&&t&&a.emit("beforeSlideChangeStart"),a.updateProgress(u);let v;o>f?v="next":o<f?v="prev":v="reset";const S=a.virtual&&a.params.virtual.enabled;if(!(S&&n)&&(p&&-u===a.translate||!p&&u===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!=="slide"&&a.setTranslate(u),v!=="reset"&&(a.transitionStart(t,v),a.transitionEnd(t,v)),!1;if(s.cssMode){const b=a.isHorizontal(),x=p?u:-u;if(e===0)S&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),S&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[b?"scrollLeft":"scrollTop"]=x})):m[b?"scrollLeft":"scrollTop"]=x,S&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return hl({swiper:a,targetPosition:x,side:b?"left":"top"}),!0;m.scrollTo({[b?"left":"top"]:x,behavior:"smooth"})}return!0}const _=ml().isSafari;return S&&!n&&_&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(e),a.setTranslate(u),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",e,i),a.transitionStart(t,v),e===0?a.transitionEnd(t,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(b){!a||a.destroyed||b.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(t,v))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function id(r,e,t,i){r===void 0&&(r=0),t===void 0&&(t=!0),typeof r=="string"&&(r=parseInt(r,10));const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);const a=n.grid&&n.params.grid&&n.params.grid.rows>1;let o=r;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)o=o+n.virtual.slidesBefore;else{let s;if(a){const p=o*n.params.grid.rows;s=n.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===p).column}else s=n.getSlideIndexByData(o);const l=a?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c}=n.params;let h=n.params.slidesPerView;h==="auto"?h=n.slidesPerViewDynamic():(h=Math.ceil(parseFloat(n.params.slidesPerView,10)),c&&h%2===0&&(h=h+1));let f=l-s<h;if(c&&(f=f||s<Math.ceil(h/2)),i&&c&&n.params.slidesPerView!=="auto"&&!a&&(f=!1),f){const p=c?s<n.activeIndex?"prev":"next":s-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?s+1:s-l+1,slideRealIndex:p==="next"?n.realIndex:void 0})}if(a){const p=o*n.params.grid.rows;o=n.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===p).column}else o=n.getSlideIndexByData(o)}return requestAnimationFrame(()=>{n.slideTo(o,e,t,i)}),n}function rd(r,e,t){e===void 0&&(e=!0);const i=this,{enabled:n,params:a,animating:o}=i;if(!n||i.destroyed)return i;typeof r>"u"&&(r=i.params.speed);let s=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<a.slidesPerGroupSkip?1:s,c=i.virtual&&a.virtual.enabled;if(a.loop){if(o&&!c&&a.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,r,e,t)}),!0}return a.rewind&&i.isEnd?i.slideTo(0,r,e,t):i.slideTo(i.activeIndex+l,r,e,t)}function nd(r,e,t){e===void 0&&(e=!0);const i=this,{params:n,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof r>"u"&&(r=i.params.speed);const h=i.virtual&&n.virtual.enabled;if(n.loop){if(c&&!h&&n.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=s?i.translate:-i.translate;function p(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const m=p(f),g=a.map(v=>p(v)),y=n.freeMode&&n.freeMode.enabled;let d=a[g.indexOf(m)-1];if(typeof d>"u"&&(n.cssMode||y)){let v;a.forEach((S,_)=>{m>=S&&(v=_)}),typeof v<"u"&&(d=y?a[v]:a[v>0?v-1:v])}let u=0;if(typeof d<"u"&&(u=o.indexOf(d),u<0&&(u=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(u=u-i.slidesPerViewDynamic("previous",!0)+1,u=Math.max(u,0))),n.rewind&&i.isBeginning){const v=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(v,r,e,t)}else if(n.loop&&i.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(u,r,e,t)}),!0;return i.slideTo(u,r,e,t)}function ad(r,e,t){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof r>"u"&&(r=i.params.speed),i.slideTo(i.activeIndex,r,e,t)}function sd(r,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const n=this;if(n.destroyed)return;typeof r>"u"&&(r=n.params.speed);let a=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[s]){const c=n.snapGrid[s],h=n.snapGrid[s+1];l-c>(h-c)*i&&(a+=n.params.slidesPerGroup)}else{const c=n.snapGrid[s-1],h=n.snapGrid[s];l-c<=(h-c)*i&&(a-=n.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,n.slidesGrid.length-1),n.slideTo(a,r,e,t)}function od(){const r=this;if(r.destroyed)return;const{params:e,slidesEl:t}=r,i=e.slidesPerView==="auto"?r.slidesPerViewDynamic():e.slidesPerView;let n=r.getSlideIndexWhenGrid(r.clickedIndex),a;const o=r.isElement?"swiper-slide":`.${e.slideClass}`,s=r.grid&&r.params.grid&&r.params.grid.rows>1;if(e.loop){if(r.animating)return;a=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r.slideToLoop(a):n>(s?(r.slides.length-i)/2-(r.params.grid.rows-1):r.slides.length-i)?(r.loopFix(),n=r.getSlideIndex(ci(t,`${o}[data-swiper-slide-index="${a}"]`)[0]),$a(()=>{r.slideTo(n)})):r.slideTo(n)}else r.slideTo(n)}var ld={slideTo:td,slideToLoop:id,slideNext:rd,slidePrev:nd,slideReset:ad,slideToClosest:sd,slideToClickedSlide:od};function cd(r,e){const t=this,{params:i,slidesEl:n}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const a=()=>{ci(n,`.${i.slideClass}, swiper-slide`).forEach((p,m)=>{p.setAttribute("data-swiper-slide-index",m)})},o=()=>{const p=ci(n,`.${i.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(t.recalcSlides(),t.updateSlides())},s=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||s)&&o();const l=i.slidesPerGroup*(s?i.grid.rows:1),c=t.slides.length%l!==0,h=s&&t.slides.length%i.grid.rows!==0,f=p=>{for(let m=0;m<p;m+=1){const g=t.isElement?mn("swiper-slide",[i.slideBlankClass]):mn("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(g)}};if(c){if(i.loopAddBlankSlides){const p=l-t.slides.length%l;f(p),t.recalcSlides(),t.updateSlides()}else zn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else if(h){if(i.loopAddBlankSlides){const p=i.grid.rows-t.slides.length%i.grid.rows;f(p),t.recalcSlides(),t.updateSlides()}else zn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else a();t.loopFix({slideRealIndex:r,direction:i.centeredSlides?void 0:"next",initial:e})}function hd(r){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:n,activeSlideIndex:a,initial:o,byController:s,byMousewheel:l}=r===void 0?{}:r;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:h,allowSlidePrev:f,allowSlideNext:p,slidesEl:m,params:g}=c,{centeredSlides:y,initialSlide:d}=g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&g.virtual.enabled){t&&(!g.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):g.centeredSlides&&c.snapIndex<g.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=f,c.allowSlideNext=p,c.emit("loopFix");return}let u=g.slidesPerView;u==="auto"?u=c.slidesPerViewDynamic():(u=Math.ceil(parseFloat(g.slidesPerView,10)),y&&u%2===0&&(u=u+1));const v=g.slidesPerGroupAuto?u:g.slidesPerGroup;let S=y?Math.max(v,Math.ceil(u/2)):v;S%v!==0&&(S+=v-S%v),S+=g.loopAdditionalSlides,c.loopedSlides=S;const _=c.grid&&g.grid&&g.grid.rows>1;h.length<u+S||c.params.effect==="cards"&&h.length<u+S*2?zn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):_&&g.grid.fill==="row"&&zn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const b=[],x=[],w=_?Math.ceil(h.length/g.grid.rows):h.length,U=o&&w-d<u&&!y;let E=U?d:c.activeIndex;typeof a>"u"?a=c.getSlideIndex(h.find(L=>L.classList.contains(g.slideActiveClass))):E=a;const A=i==="next"||!i,C=i==="prev"||!i;let T=0,R=0;const B=(_?h[a].column:a)+(y&&typeof n>"u"?-u/2+.5:0);if(B<S){T=Math.max(S-B,v);for(let L=0;L<S-B;L+=1){const N=L-Math.floor(L/w)*w;if(_){const k=w-N-1;for(let M=h.length-1;M>=0;M-=1)h[M].column===k&&b.push(M)}else b.push(w-N-1)}}else if(B+u>w-S){R=Math.max(B-(w-S*2),v),U&&(R=Math.max(R,u-w+d+1));for(let L=0;L<R;L+=1){const N=L-Math.floor(L/w)*w;_?h.forEach((k,M)=>{k.column===N&&x.push(M)}):x.push(N)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&h.length<u+S*2&&(x.includes(a)&&x.splice(x.indexOf(a),1),b.includes(a)&&b.splice(b.indexOf(a),1)),C&&b.forEach(L=>{h[L].swiperLoopMoveDOM=!0,m.prepend(h[L]),h[L].swiperLoopMoveDOM=!1}),A&&x.forEach(L=>{h[L].swiperLoopMoveDOM=!0,m.append(h[L]),h[L].swiperLoopMoveDOM=!1}),c.recalcSlides(),g.slidesPerView==="auto"?c.updateSlides():_&&(b.length>0&&C||x.length>0&&A)&&c.slides.forEach((L,N)=>{c.grid.updateSlide(N,L,c.slides)}),g.watchSlidesProgress&&c.updateSlidesOffset(),t){if(b.length>0&&C){if(typeof e>"u"){const L=c.slidesGrid[E],N=c.slidesGrid[E+T]-L;l?c.setTranslate(c.translate-N):(c.slideTo(E+Math.ceil(T),0,!1,!0),n&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-N,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-N))}else if(n){const L=_?b.length/g.grid.rows:b.length;c.slideTo(c.activeIndex+L,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(x.length>0&&A)if(typeof e>"u"){const L=c.slidesGrid[E],N=c.slidesGrid[E-R]-L;l?c.setTranslate(c.translate-N):(c.slideTo(E-R,0,!1,!0),n&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-N,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-N))}else{const L=_?x.length/g.grid.rows:x.length;c.slideTo(c.activeIndex-L,0,!1,!0)}}if(c.allowSlidePrev=f,c.allowSlideNext=p,c.controller&&c.controller.control&&!s){const L={slideRealIndex:e,direction:i,setTranslate:n,activeSlideIndex:a,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(N=>{!N.destroyed&&N.params.loop&&N.loopFix({...L,slideTo:N.params.slidesPerView===g.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...L,slideTo:c.controller.control.params.slidesPerView===g.slidesPerView?t:!1})}c.emit("loopFix")}function ud(){const r=this,{params:e,slidesEl:t}=r;if(!e.loop||!t||r.virtual&&r.params.virtual.enabled)return;r.recalcSlides();const i=[];r.slides.forEach(n=>{const a=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;i[a]=n}),r.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),i.forEach(n=>{t.append(n)}),r.recalcSlides(),r.slideTo(r.realIndex,0)}var dd={loopCreate:cd,loopFix:hd,loopDestroy:ud};function pd(r){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=r?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function fd(){const r=this;r.params.watchOverflow&&r.isLocked||r.params.cssMode||(r.isElement&&(r.__preventObserver__=!0),r[r.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1}))}var md={setGrabCursor:pd,unsetGrabCursor:fd};function gd(r,e){e===void 0&&(e=this);function t(i){if(!i||i===Vt()||i===Tt())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(r);return!n&&!i.getRootNode?null:n||t(i.getRootNode().host)}return t(e)}function Al(r,e,t){const i=Tt(),{params:n}=r,a=n.edgeSwipeDetection,o=n.edgeSwipeThreshold;return a&&(t<=o||t>=i.innerWidth-o)?a==="prevent"?(e.preventDefault(),!0):!1:!0}function vd(r){const e=this,t=Vt();let i=r;i.originalEvent&&(i=i.originalEvent);const n=e.touchEventsData;if(i.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(n.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Al(e,i,i.targetTouches[0].pageX);return}const{params:a,touches:o,enabled:s}=e;if(!s||!a.simulateTouch&&i.pointerType==="mouse"||e.animating&&a.preventInteractionOnTransition)return;!e.animating&&a.cssMode&&a.loop&&e.loopFix();let l=i.target;if(a.touchEventsTarget==="wrapper"&&!bu(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||n.isTouched&&n.isMoved)return;const c=!!a.noSwipingClass&&a.noSwipingClass!=="",h=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&h&&(l=h[0]);const f=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,p=!!(i.target&&i.target.shadowRoot);if(a.noSwiping&&(p?gd(f,l):l.closest(f))){e.allowClick=!0;return}if(a.swipeHandler&&!l.closest(a.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const m=o.currentX,g=o.currentY;if(!Al(e,i,m))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=m,o.startY=g,n.touchStartTime=Vn(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,a.threshold>0&&(n.allowThresholdMove=!1);let y=!0;l.matches(n.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(n.focusableElements))&&t.activeElement.blur();const d=y&&e.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||d)&&!l.isContentEditable&&i.preventDefault(),a.freeMode&&a.freeMode.enabled&&e.freeMode&&e.animating&&!a.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Ad(r){const e=Vt(),t=this,i=t.touchEventsData,{params:n,touches:a,rtlTranslate:o,enabled:s}=t;if(!s||!n.simulateTouch&&r.pointerType==="mouse")return;let l=r;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(b=>b.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const h=c.pageX,f=c.pageY;if(l.preventedByNestedSwiper){a.startX=h,a.startY=f;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(a,{startX:h,startY:f,currentX:h,currentY:f}),i.touchStartTime=Vn());return}if(n.touchReleaseOnEdges&&!n.loop){if(t.isVertical()){if(f<a.startY&&t.translate<=t.maxTranslate()||f>a.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(o&&(h>a.startX&&-t.translate<=t.maxTranslate()||h<a.startX&&-t.translate>=t.minTranslate())||!o&&(h<a.startX&&t.translate<=t.maxTranslate()||h>a.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=h,a.currentY=f;const p=a.currentX-a.startX,m=a.currentY-a.startY;if(t.params.threshold&&Math.sqrt(p**2+m**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let b;t.isHorizontal()&&a.currentY===a.startY||t.isVertical()&&a.currentX===a.startX?i.isScrolling=!1:p*p+m*m>=25&&(b=Math.atan2(Math.abs(m),Math.abs(p))*180/Math.PI,i.isScrolling=t.isHorizontal()?b>n.touchAngle:90-b>n.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let g=t.isHorizontal()?p:m,y=t.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;n.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),a.diff=g,g*=n.touchRatio,o&&(g=-g,y=-y);const d=t.touchesDirection;t.swipeDirection=g>0?"prev":"next",t.touchesDirection=y>0?"prev":"next";const u=t.params.loop&&!n.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(u&&v&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const b=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(b)}i.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),n._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&d!==t.touchesDirection&&u&&v&&Math.abs(g)>=1){Object.assign(a,{startX:h,startY:f,currentX:h,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let S=!0,_=n.resistanceRatio;if(n.touchReleaseOnEdges&&(_=0),g>0?(u&&v&&i.allowThresholdMove&&i.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(S=!1,n.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+g)**_))):g<0&&(u&&v&&i.allowThresholdMove&&i.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(n.slidesPerView!=="auto"&&t.slides.length-n.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(S=!1,n.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-g)**_))),S&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(g)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,i.currentTranslate=i.startTranslate,a.diff=t.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function _d(r){const e=this,t=e.touchEventsData;let i=r;i.originalEvent&&(i=i.originalEvent);let n;if(i.type==="touchend"||i.type==="touchcancel"){if(n=[...i.changedTouches].find(_=>_.identifier===t.touchId),!n||n.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;n=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:s,slidesGrid:l,enabled:c}=e;if(!c||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const h=Vn(),f=h-t.touchStartTime;if(e.allowClick){const _=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(_&&_[0]||i.target,_),e.emit("tap click",i),f<300&&h-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Vn(),$a(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(a.followFinger?p=s?e.translate:-e.translate:p=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const m=p>=-e.maxTranslate()&&!e.params.loop;let g=0,y=e.slidesSizesGrid[0];for(let _=0;_<l.length;_+=_<a.slidesPerGroupSkip?1:a.slidesPerGroup){const b=_<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof l[_+b]<"u"?(m||p>=l[_]&&p<l[_+b])&&(g=_,y=l[_+b]-l[_]):(m||p>=l[_])&&(g=_,y=l[l.length-1]-l[l.length-2])}let d=null,u=null;a.rewind&&(e.isBeginning?u=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(d=0));const v=(p-l[g])/y,S=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?d:g+S):e.slideTo(g)),e.swipeDirection==="prev"&&(v>1-a.longSwipesRatio?e.slideTo(g+S):u!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?e.slideTo(u):e.slideTo(g))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(g+S):e.slideTo(g):(e.swipeDirection==="next"&&e.slideTo(d!==null?d:g+S),e.swipeDirection==="prev"&&e.slideTo(u!==null?u:g))}}function _l(){const r=this,{params:e,el:t}=r;if(t&&t.offsetWidth===0)return;e.breakpoints&&r.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:n,snapGrid:a}=r,o=r.virtual&&r.params.virtual.enabled;r.allowSlideNext=!0,r.allowSlidePrev=!0,r.updateSize(),r.updateSlides(),r.updateSlidesClasses();const s=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&r.isEnd&&!r.isBeginning&&!r.params.centeredSlides&&!s?r.slideTo(r.slides.length-1,0,!1,!0):r.params.loop&&!o?r.slideToLoop(r.realIndex,0,!1,!0):r.slideTo(r.activeIndex,0,!1,!0),r.autoplay&&r.autoplay.running&&r.autoplay.paused&&(clearTimeout(r.autoplay.resizeTimeout),r.autoplay.resizeTimeout=setTimeout(()=>{r.autoplay&&r.autoplay.running&&r.autoplay.paused&&r.autoplay.resume()},500)),r.allowSlidePrev=n,r.allowSlideNext=i,r.params.watchOverflow&&a!==r.snapGrid&&r.checkOverflow()}function yd(r){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&r.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(r.stopPropagation(),r.stopImmediatePropagation())))}function Ed(){const r=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=r;if(!i)return;r.previousTranslate=r.translate,r.isHorizontal()?r.translate=-e.scrollLeft:r.translate=-e.scrollTop,r.translate===0&&(r.translate=0),r.updateActiveIndex(),r.updateSlidesClasses();let n;const a=r.maxTranslate()-r.minTranslate();a===0?n=0:n=(r.translate-r.minTranslate())/a,n!==r.progress&&r.updateProgress(t?-r.translate:r.translate),r.emit("setTranslate",r.translate,!1)}function Sd(r){const e=this;Jn(e,r.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function xd(){const r=this;r.documentTouchHandlerProceeded||(r.documentTouchHandlerProceeded=!0,r.params.touchReleaseOnEdges&&(r.el.style.touchAction="auto"))}const yl=(r,e)=>{const t=Vt(),{params:i,el:n,wrapperEl:a,device:o}=r,s=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!n||typeof n=="string"||(t[l]("touchstart",r.onDocumentTouchStart,{passive:!1,capture:s}),n[l]("touchstart",r.onTouchStart,{passive:!1}),n[l]("pointerdown",r.onTouchStart,{passive:!1}),t[l]("touchmove",r.onTouchMove,{passive:!1,capture:s}),t[l]("pointermove",r.onTouchMove,{passive:!1,capture:s}),t[l]("touchend",r.onTouchEnd,{passive:!0}),t[l]("pointerup",r.onTouchEnd,{passive:!0}),t[l]("pointercancel",r.onTouchEnd,{passive:!0}),t[l]("touchcancel",r.onTouchEnd,{passive:!0}),t[l]("pointerout",r.onTouchEnd,{passive:!0}),t[l]("pointerleave",r.onTouchEnd,{passive:!0}),t[l]("contextmenu",r.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&n[l]("click",r.onClick,!0),i.cssMode&&a[l]("scroll",r.onScroll),i.updateOnWindowResize?r[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",_l,!0):r[c]("observerUpdate",_l,!0),n[l]("load",r.onLoad,{capture:!0}))};function wd(){const r=this,{params:e}=r;r.onTouchStart=vd.bind(r),r.onTouchMove=Ad.bind(r),r.onTouchEnd=_d.bind(r),r.onDocumentTouchStart=xd.bind(r),e.cssMode&&(r.onScroll=Ed.bind(r)),r.onClick=yd.bind(r),r.onLoad=Sd.bind(r),yl(r,"on")}function bd(){yl(this,"off")}var Cd={attachEvents:wd,detachEvents:bd};const El=(r,e)=>r.grid&&e.grid&&e.grid.rows>1;function Ud(){const r=this,{realIndex:e,initialized:t,params:i,el:n}=r,a=i.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const o=Vt(),s=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?r.el:o.querySelector(i.breakpointsBase),c=r.getBreakpoint(a,s,l);if(!c||r.currentBreakpoint===c)return;const h=(c in a?a[c]:void 0)||r.originalParams,f=El(r,i),p=El(r,h),m=r.params.grabCursor,g=h.grabCursor,y=i.enabled;f&&!p?(n.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),r.emitContainerClasses()):!f&&p&&(n.classList.add(`${i.containerModifierClass}grid`),(h.grid.fill&&h.grid.fill==="column"||!h.grid.fill&&i.grid.fill==="column")&&n.classList.add(`${i.containerModifierClass}grid-column`),r.emitContainerClasses()),m&&!g?r.unsetGrabCursor():!m&&g&&r.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(b=>{if(typeof h[b]>"u")return;const x=i[b]&&i[b].enabled,w=h[b]&&h[b].enabled;x&&!w&&r[b].disable(),!x&&w&&r[b].enable()});const d=h.direction&&h.direction!==i.direction,u=i.loop&&(h.slidesPerView!==i.slidesPerView||d),v=i.loop;d&&t&&r.changeDirection(),Yt(r.params,h);const S=r.params.enabled,_=r.params.loop;Object.assign(r,{allowTouchMove:r.params.allowTouchMove,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev}),y&&!S?r.disable():!y&&S&&r.enable(),r.currentBreakpoint=c,r.emit("_beforeBreakpoint",h),t&&(u?(r.loopDestroy(),r.loopCreate(e),r.updateSlides()):!v&&_?(r.loopCreate(e),r.updateSlides()):v&&!_&&r.loopDestroy()),r.emit("breakpoint",h)}function Td(r,e,t){if(e===void 0&&(e="window"),!r||e==="container"&&!t)return;let i=!1;const n=Tt(),a=e==="window"?n.innerHeight:t.clientHeight,o=Object.keys(r).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:a*l,point:s}}return{value:s,point:s}});o.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<o.length;s+=1){const{point:l,value:c}=o[s];e==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var Md={setBreakpoint:Ud,getBreakpoint:Td};function Fd(r,e){const t=[];return r.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&t.push(e+n)}):typeof i=="string"&&t.push(e+i)}),t}function Rd(){const r=this,{classNames:e,params:t,rtl:i,el:n,device:a}=r,o=Fd(["initialized",t.direction,{"free-mode":r.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),n.classList.add(...e),r.emitContainerClasses()}function Id(){const r=this,{el:e,classNames:t}=r;!e||typeof e=="string"||(e.classList.remove(...t),r.emitContainerClasses())}var Bd={addClasses:Rd,removeClasses:Id};function Qd(){const r=this,{isLocked:e,params:t}=r,{slidesOffsetBefore:i}=t;if(i){const n=r.slides.length-1,a=r.slidesGrid[n]+r.slidesSizesGrid[n]+i*2;r.isLocked=r.size>a}else r.isLocked=r.snapGrid.length===1;t.allowSlideNext===!0&&(r.allowSlideNext=!r.isLocked),t.allowSlidePrev===!0&&(r.allowSlidePrev=!r.isLocked),e&&e!==r.isLocked&&(r.isEnd=!1),e!==r.isLocked&&r.emit(r.isLocked?"lock":"unlock")}var Ld={checkOverflow:Qd},Sl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Dd(r,e){return function(t){t===void 0&&(t={});const i=Object.keys(t)[0],n=t[i];if(typeof n!="object"||n===null){Yt(e,t);return}if(r[i]===!0&&(r[i]={enabled:!0}),i==="navigation"&&r[i]&&r[i].enabled&&!r[i].prevEl&&!r[i].nextEl&&(r[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&r[i]&&r[i].enabled&&!r[i].el&&(r[i].auto=!0),!(i in r&&"enabled"in n)){Yt(e,t);return}typeof r[i]=="object"&&!("enabled"in r[i])&&(r[i].enabled=!0),r[i]||(r[i]={enabled:!1}),Yt(e,t)}}const os={eventsEmitter:Bu,update:Gu,translate:ju,transition:ed,slide:ld,loop:dd,grabCursor:md,events:Cd,breakpoints:Md,checkOverflow:Ld,classes:Bd},ls={};class Xt{constructor(){let e,t;for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?t=n[0]:[e,t]=n,t||(t={}),t=Yt({},t),e&&!t.el&&(t.el=e);const o=Vt();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const h=[];return o.querySelectorAll(t.el).forEach(f=>{const p=Yt({},t,{el:f});h.push(new Xt(p))}),h}const s=this;s.__swiper__=!0,s.support=pl(),s.device=fl({userAgent:t.userAgent}),s.browser=ml(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],t.modules&&Array.isArray(t.modules)&&s.modules.push(...t.modules);const l={};s.modules.forEach(h=>{h({params:t,swiper:s,extendParams:Dd(t,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const c=Yt({},Sl,l);return s.params=Yt({},c,ls,t),s.originalParams=Yt({},s.params),s.passedParams=Yt({},t),s.params&&s.params.on&&Object.keys(s.params.on).forEach(h=>{s.on(h,s.params.on[h])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,n=ci(t,`.${i.slideClass}, swiper-slide`),a=Wn(n[0]);return Wn(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=ci(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const n=i.minTranslate(),a=(i.maxTranslate()-n)*e+n;i.translateTo(a,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const n=e.getSlideClasses(i);t.push({slideEl:i,classNames:n}),e.emit("_slideClass",i,n)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:n,slides:a,slidesGrid:o,slidesSizesGrid:s,size:l,activeIndex:c}=i;let h=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let f=a[c]?Math.ceil(a[c].swiperSlideSize):0,p;for(let m=c+1;m<a.length;m+=1)a[m]&&!p&&(f+=Math.ceil(a[m].swiperSlideSize),h+=1,f>l&&(p=!0));for(let m=c-1;m>=0;m-=1)a[m]&&!p&&(f+=a[m].swiperSlideSize,h+=1,f>l&&(p=!0))}else if(e==="current")for(let f=c+1;f<a.length;f+=1)(t?o[f]+s[f]-o[c]<l:o[f]-o[c]<l)&&(h+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<l&&(h+=1);return h}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Jn(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function n(){const o=e.rtlTranslate?e.translate*-1:e.translate,s=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let a;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)n(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;a=e.slideTo(o.length-1,0,!1,!0)}else a=e.slideTo(e.activeIndex,0,!1,!0);a||n()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,n=i.params.direction;return e||(e=n==="horizontal"?"vertical":"horizontal"),e===n||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(a=>{e==="vertical"?a.style.width="":a.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(n()):ci(i,n())[0];return!a&&t.params.createElements&&(a=mn("div",t.params.wrapperClass),i.append(a),ci(i,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||zi(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||zi(i,"direction")==="rtl"),wrongRTL:zi(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(n=>{n.complete?Jn(t,n):n.addEventListener("load",a=>{Jn(t,a.target)})}),ss(t),t.initialized=!0,ss(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:n,el:a,wrapperEl:o,slides:s}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),o&&o.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),yu(i)),i.destroyed=!0),null}static extendDefaults(e){Yt(ls,e)}static get extendedDefaults(){return ls}static get defaults(){return Sl}static installModule(e){Xt.prototype.__modules__||(Xt.prototype.__modules__=[]);const t=Xt.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Xt.installModule(t)),Xt):(Xt.installModule(e),Xt)}}Object.keys(os).forEach(r=>{Object.keys(os[r]).forEach(e=>{Xt.prototype[e]=os[r][e]})}),Xt.use([Ru,Iu]);function Nd(r){let{swiper:e,extendParams:t,on:i,emit:n}=r;const a=Vt(),o=Tt();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function s(h){if(!e.enabled)return;const{rtlTranslate:f}=e;let p=h;p.originalEvent&&(p=p.originalEvent);const m=p.keyCode||p.charCode,g=e.params.keyboard.pageUpDown,y=g&&m===33,d=g&&m===34,u=m===37,v=m===39,S=m===38,_=m===40;if(!e.allowSlideNext&&(e.isHorizontal()&&v||e.isVertical()&&_||d)||!e.allowSlidePrev&&(e.isHorizontal()&&u||e.isVertical()&&S||y))return!1;if(!(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)&&!(a.activeElement&&(a.activeElement.isContentEditable||a.activeElement.nodeName&&(a.activeElement.nodeName.toLowerCase()==="input"||a.activeElement.nodeName.toLowerCase()==="textarea")))){if(e.params.keyboard.onlyInViewport&&(y||d||u||v||S||_)){let b=!1;if(Gn(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&Gn(e.el,`.${e.params.slideActiveClass}`).length===0)return;const x=e.el,w=x.clientWidth,U=x.clientHeight,E=o.innerWidth,A=o.innerHeight,C=ul(x);f&&(C.left-=x.scrollLeft);const T=[[C.left,C.top],[C.left+w,C.top],[C.left,C.top+U],[C.left+w,C.top+U]];for(let R=0;R<T.length;R+=1){const B=T[R];if(B[0]>=0&&B[0]<=E&&B[1]>=0&&B[1]<=A){if(B[0]===0&&B[1]===0)continue;b=!0}}if(!b)return}e.isHorizontal()?((y||d||u||v)&&(p.preventDefault?p.preventDefault():p.returnValue=!1),((d||v)&&!f||(y||u)&&f)&&e.slideNext(),((y||u)&&!f||(d||v)&&f)&&e.slidePrev()):((y||d||S||_)&&(p.preventDefault?p.preventDefault():p.returnValue=!1),(d||_)&&e.slideNext(),(y||S)&&e.slidePrev()),n("keyPress",m)}}function l(){e.keyboard.enabled||(a.addEventListener("keydown",s),e.keyboard.enabled=!0)}function c(){e.keyboard.enabled&&(a.removeEventListener("keydown",s),e.keyboard.enabled=!1)}i("init",()=>{e.params.keyboard.enabled&&l()}),i("destroy",()=>{e.keyboard.enabled&&c()}),Object.assign(e.keyboard,{enable:l,disable:c})}function cs(r,e,t,i){return r.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let a=ci(r.el,`.${i[n]}`)[0];a||(a=mn("div",i[n]),a.className=i[n],r.el.append(a)),t[n]=a,e[n]=a}}),t}function kd(r){let{swiper:e,extendParams:t,on:i,emit:n}=r;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function a(g){let y;return g&&typeof g=="string"&&e.isElement&&(y=e.el.querySelector(g)||e.hostEl.querySelector(g),y)?y:(g&&(typeof g=="string"&&(y=[...document.querySelectorAll(g)]),e.params.uniqueNavElements&&typeof g=="string"&&y&&y.length>1&&e.el.querySelectorAll(g).length===1?y=e.el.querySelector(g):y&&y.length===1&&(y=y[0])),g&&!y?g:y)}function o(g,y){const d=e.params.navigation;g=Et(g),g.forEach(u=>{u&&(u.classList[y?"add":"remove"](...d.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=y),e.params.watchOverflow&&e.enabled&&u.classList[e.isLocked?"add":"remove"](d.lockClass))})}function s(){const{nextEl:g,prevEl:y}=e.navigation;if(e.params.loop){o(y,!1),o(g,!1);return}o(y,e.isBeginning&&!e.params.rewind),o(g,e.isEnd&&!e.params.rewind)}function l(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function c(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function h(){const g=e.params.navigation;if(e.params.navigation=cs(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let y=a(g.nextEl),d=a(g.prevEl);Object.assign(e.navigation,{nextEl:y,prevEl:d}),y=Et(y),d=Et(d);const u=(v,S)=>{v&&v.addEventListener("click",S==="next"?c:l),!e.enabled&&v&&v.classList.add(...g.lockClass.split(" "))};y.forEach(v=>u(v,"next")),d.forEach(v=>u(v,"prev"))}function f(){let{nextEl:g,prevEl:y}=e.navigation;g=Et(g),y=Et(y);const d=(u,v)=>{u.removeEventListener("click",v==="next"?c:l),u.classList.remove(...e.params.navigation.disabledClass.split(" "))};g.forEach(u=>d(u,"next")),y.forEach(u=>d(u,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?m():(h(),s())}),i("toEdge fromEdge lock unlock",()=>{s()}),i("destroy",()=>{f()}),i("enable disable",()=>{let{nextEl:g,prevEl:y}=e.navigation;if(g=Et(g),y=Et(y),e.enabled){s();return}[...g,...y].filter(d=>!!d).forEach(d=>d.classList.add(e.params.navigation.lockClass))}),i("click",(g,y)=>{let{nextEl:d,prevEl:u}=e.navigation;d=Et(d),u=Et(u);const v=y.target;let S=u.includes(v)||d.includes(v);if(e.isElement&&!S){const _=y.path||y.composedPath&&y.composedPath();_&&(S=_.find(b=>d.includes(b)||u.includes(b)))}if(e.params.navigation.hideOnClick&&!S){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===v||e.pagination.el.contains(v)))return;let _;d.length?_=d[0].classList.contains(e.params.navigation.hiddenClass):u.length&&(_=u[0].classList.contains(e.params.navigation.hiddenClass)),n(_===!0?"navigationShow":"navigationHide"),[...d,...u].filter(b=>!!b).forEach(b=>b.classList.toggle(e.params.navigation.hiddenClass))}});const p=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),h(),s()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:p,disable:m,update:s,init:h,destroy:f})}function xr(r){return r===void 0&&(r=""),`.${r.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function Pd(r){let{swiper:e,extendParams:t,on:i,emit:n}=r;const a="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:v=>v,formatFractionTotal:v=>v,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let o,s=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(v,S){const{bulletActiveClass:_}=e.params.pagination;v&&(v=v[`${S==="prev"?"previous":"next"}ElementSibling`],v&&(v.classList.add(`${_}-${S}`),v=v[`${S==="prev"?"previous":"next"}ElementSibling`],v&&v.classList.add(`${_}-${S}-${S}`)))}function h(v,S,_){if(v=v%_,S=S%_,S===v+1)return"next";if(S===v-1)return"previous"}function f(v){const S=v.target.closest(xr(e.params.pagination.bulletClass));if(!S)return;v.preventDefault();const _=Wn(S)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===_)return;const b=h(e.realIndex,_,e.slides.length);b==="next"?e.slideNext():b==="previous"?e.slidePrev():e.slideToLoop(_)}else e.slideTo(_)}function p(){const v=e.rtl,S=e.params.pagination;if(l())return;let _=e.pagination.el;_=Et(_);let b,x;const w=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,U=e.params.loop?Math.ceil(w/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(x=e.previousRealIndex||0,b=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(b=e.snapIndex,x=e.previousSnapIndex):(x=e.previousIndex||0,b=e.activeIndex||0),S.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let A,C,T;if(S.dynamicBullets&&(o=es(E[0],e.isHorizontal()?"width":"height"),_.forEach(R=>{R.style[e.isHorizontal()?"width":"height"]=`${o*(S.dynamicMainBullets+4)}px`}),S.dynamicMainBullets>1&&x!==void 0&&(s+=b-(x||0),s>S.dynamicMainBullets-1?s=S.dynamicMainBullets-1:s<0&&(s=0)),A=Math.max(b-s,0),C=A+(Math.min(E.length,S.dynamicMainBullets)-1),T=(C+A)/2),E.forEach(R=>{const B=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(L=>`${S.bulletActiveClass}${L}`)].map(L=>typeof L=="string"&&L.includes(" ")?L.split(" "):L).flat();R.classList.remove(...B)}),_.length>1)E.forEach(R=>{const B=Wn(R);B===b?R.classList.add(...S.bulletActiveClass.split(" ")):e.isElement&&R.setAttribute("part","bullet"),S.dynamicBullets&&(B>=A&&B<=C&&R.classList.add(...`${S.bulletActiveClass}-main`.split(" ")),B===A&&c(R,"prev"),B===C&&c(R,"next"))});else{const R=E[b];if(R&&R.classList.add(...S.bulletActiveClass.split(" ")),e.isElement&&E.forEach((B,L)=>{B.setAttribute("part",L===b?"bullet-active":"bullet")}),S.dynamicBullets){const B=E[A],L=E[C];for(let N=A;N<=C;N+=1)E[N]&&E[N].classList.add(...`${S.bulletActiveClass}-main`.split(" "));c(B,"prev"),c(L,"next")}}if(S.dynamicBullets){const R=Math.min(E.length,S.dynamicMainBullets+4),B=(o*R-o)/2-T*o,L=v?"right":"left";E.forEach(N=>{N.style[e.isHorizontal()?L:"top"]=`${B}px`})}}_.forEach((E,A)=>{if(S.type==="fraction"&&(E.querySelectorAll(xr(S.currentClass)).forEach(C=>{C.textContent=S.formatFractionCurrent(b+1)}),E.querySelectorAll(xr(S.totalClass)).forEach(C=>{C.textContent=S.formatFractionTotal(U)})),S.type==="progressbar"){let C;S.progressbarOpposite?C=e.isHorizontal()?"vertical":"horizontal":C=e.isHorizontal()?"horizontal":"vertical";const T=(b+1)/U;let R=1,B=1;C==="horizontal"?R=T:B=T,E.querySelectorAll(xr(S.progressbarFillClass)).forEach(L=>{L.style.transform=`translate3d(0,0,0) scaleX(${R}) scaleY(${B})`,L.style.transitionDuration=`${e.params.speed}ms`})}S.type==="custom"&&S.renderCustom?(dl(E,S.renderCustom(e,b+1,U)),A===0&&n("paginationRender",E)):(A===0&&n("paginationRender",E),n("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](S.lockClass)})}function m(){const v=e.params.pagination;if(l())return;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let _=e.pagination.el;_=Et(_);let b="";if(v.type==="bullets"){let x=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&x>S&&(x=S);for(let w=0;w<x;w+=1)v.renderBullet?b+=v.renderBullet.call(e,w,v.bulletClass):b+=`<${v.bulletElement} ${e.isElement?'part="bullet"':""} class="${v.bulletClass}"></${v.bulletElement}>`}v.type==="fraction"&&(v.renderFraction?b=v.renderFraction.call(e,v.currentClass,v.totalClass):b=`<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`),v.type==="progressbar"&&(v.renderProgressbar?b=v.renderProgressbar.call(e,v.progressbarFillClass):b=`<span class="${v.progressbarFillClass}"></span>`),e.pagination.bullets=[],_.forEach(x=>{v.type!=="custom"&&dl(x,b||""),v.type==="bullets"&&e.pagination.bullets.push(...x.querySelectorAll(xr(v.bulletClass)))}),v.type!=="custom"&&n("paginationRender",_[0])}function g(){e.params.pagination=cs(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const v=e.params.pagination;if(!v.el)return;let S;typeof v.el=="string"&&e.isElement&&(S=e.el.querySelector(v.el)),!S&&typeof v.el=="string"&&(S=[...document.querySelectorAll(v.el)]),S||(S=v.el),!(!S||S.length===0)&&(e.params.uniqueNavElements&&typeof v.el=="string"&&Array.isArray(S)&&S.length>1&&(S=[...e.el.querySelectorAll(v.el)],S.length>1&&(S=S.find(_=>Gn(_,".swiper")[0]===e.el))),Array.isArray(S)&&S.length===1&&(S=S[0]),Object.assign(e.pagination,{el:S}),S=Et(S),S.forEach(_=>{v.type==="bullets"&&v.clickable&&_.classList.add(...(v.clickableClass||"").split(" ")),_.classList.add(v.modifierClass+v.type),_.classList.add(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.type==="bullets"&&v.dynamicBullets&&(_.classList.add(`${v.modifierClass}${v.type}-dynamic`),s=0,v.dynamicMainBullets<1&&(v.dynamicMainBullets=1)),v.type==="progressbar"&&v.progressbarOpposite&&_.classList.add(v.progressbarOppositeClass),v.clickable&&_.addEventListener("click",f),e.enabled||_.classList.add(v.lockClass)}))}function y(){const v=e.params.pagination;if(l())return;let S=e.pagination.el;S&&(S=Et(S),S.forEach(_=>{_.classList.remove(v.hiddenClass),_.classList.remove(v.modifierClass+v.type),_.classList.remove(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.clickable&&(_.classList.remove(...(v.clickableClass||"").split(" ")),_.removeEventListener("click",f))})),e.pagination.bullets&&e.pagination.bullets.forEach(_=>_.classList.remove(...v.bulletActiveClass.split(" ")))}i("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const v=e.params.pagination;let{el:S}=e.pagination;S=Et(S),S.forEach(_=>{_.classList.remove(v.horizontalClass,v.verticalClass),_.classList.add(e.isHorizontal()?v.horizontalClass:v.verticalClass)})}),i("init",()=>{e.params.pagination.enabled===!1?u():(g(),m(),p())}),i("activeIndexChange",()=>{typeof e.snapIndex>"u"&&p()}),i("snapIndexChange",()=>{p()}),i("snapGridLengthChange",()=>{m(),p()}),i("destroy",()=>{y()}),i("enable disable",()=>{let{el:v}=e.pagination;v&&(v=Et(v),v.forEach(S=>S.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),i("lock unlock",()=>{p()}),i("click",(v,S)=>{const _=S.target,b=Et(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&b&&b.length>0&&!_.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&_===e.navigation.nextEl||e.navigation.prevEl&&_===e.navigation.prevEl))return;const x=b[0].classList.contains(e.params.pagination.hiddenClass);n(x===!0?"paginationShow":"paginationHide"),b.forEach(w=>w.classList.toggle(e.params.pagination.hiddenClass))}});const d=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:v}=e.pagination;v&&(v=Et(v),v.forEach(S=>S.classList.remove(e.params.pagination.paginationDisabledClass))),g(),m(),p()},u=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:v}=e.pagination;v&&(v=Et(v),v.forEach(S=>S.classList.add(e.params.pagination.paginationDisabledClass))),y()};Object.assign(e.pagination,{enable:d,disable:u,render:m,update:p,init:g,destroy:y})}function Vd(r){let{swiper:e,extendParams:t,on:i,emit:n}=r;const a=Vt();let o=!1,s=null,l=null,c,h,f,p;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function m(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:T,rtlTranslate:R}=e,{dragEl:B,el:L}=T,N=e.params.scrollbar,k=e.params.loop?e.progressLoop:e.progress;let M=h,I=(f-h)*k;R?(I=-I,I>0?(M=h-I,I=0):-I+h>f&&(M=f+I)):I<0?(M=h+I,I=0):I+h>f&&(M=f-I),e.isHorizontal()?(B.style.transform=`translate3d(${I}px, 0, 0)`,B.style.width=`${M}px`):(B.style.transform=`translate3d(0px, ${I}px, 0)`,B.style.height=`${M}px`),N.hide&&(clearTimeout(s),L.style.opacity=1,s=setTimeout(()=>{L.style.opacity=0,L.style.transitionDuration="400ms"},1e3))}function g(T){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${T}ms`)}function y(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:T}=e,{dragEl:R,el:B}=T;R.style.width="",R.style.height="",f=e.isHorizontal()?B.offsetWidth:B.offsetHeight,p=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?h=f*p:h=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?R.style.width=`${h}px`:R.style.height=`${h}px`,p>=1?B.style.display="none":B.style.display="",e.params.scrollbar.hide&&(B.style.opacity=0),e.params.watchOverflow&&e.enabled&&T.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function d(T){return e.isHorizontal()?T.clientX:T.clientY}function u(T){const{scrollbar:R,rtlTranslate:B}=e,{el:L}=R;let N;N=(d(T)-ul(L)[e.isHorizontal()?"left":"top"]-(c!==null?c:h/2))/(f-h),N=Math.max(Math.min(N,1),0),B&&(N=1-N);const k=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*N;e.updateProgress(k),e.setTranslate(k),e.updateActiveIndex(),e.updateSlidesClasses()}function v(T){const R=e.params.scrollbar,{scrollbar:B,wrapperEl:L}=e,{el:N,dragEl:k}=B;o=!0,c=T.target===k?d(T)-T.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,T.preventDefault(),T.stopPropagation(),L.style.transitionDuration="100ms",k.style.transitionDuration="100ms",u(T),clearTimeout(l),N.style.transitionDuration="0ms",R.hide&&(N.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),n("scrollbarDragStart",T)}function S(T){const{scrollbar:R,wrapperEl:B}=e,{el:L,dragEl:N}=R;o&&(T.preventDefault&&T.cancelable?T.preventDefault():T.returnValue=!1,u(T),B.style.transitionDuration="0ms",L.style.transitionDuration="0ms",N.style.transitionDuration="0ms",n("scrollbarDragMove",T))}function _(T){const R=e.params.scrollbar,{scrollbar:B,wrapperEl:L}=e,{el:N}=B;o&&(o=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",L.style.transitionDuration=""),R.hide&&(clearTimeout(l),l=$a(()=>{N.style.opacity=0,N.style.transitionDuration="400ms"},1e3)),n("scrollbarDragEnd",T),R.snapOnRelease&&e.slideToClosest())}function b(T){const{scrollbar:R,params:B}=e,L=R.el;if(!L)return;const N=L,k=B.passiveListeners?{passive:!1,capture:!1}:!1,M=B.passiveListeners?{passive:!0,capture:!1}:!1;if(!N)return;const I=T==="on"?"addEventListener":"removeEventListener";N[I]("pointerdown",v,k),a[I]("pointermove",S,k),a[I]("pointerup",_,M)}function x(){!e.params.scrollbar.el||!e.scrollbar.el||b("on")}function w(){!e.params.scrollbar.el||!e.scrollbar.el||b("off")}function U(){const{scrollbar:T,el:R}=e;e.params.scrollbar=cs(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const B=e.params.scrollbar;if(!B.el)return;let L;if(typeof B.el=="string"&&e.isElement&&(L=e.el.querySelector(B.el)),!L&&typeof B.el=="string"){if(L=a.querySelectorAll(B.el),!L.length)return}else L||(L=B.el);e.params.uniqueNavElements&&typeof B.el=="string"&&L.length>1&&R.querySelectorAll(B.el).length===1&&(L=R.querySelector(B.el)),L.length>0&&(L=L[0]),L.classList.add(e.isHorizontal()?B.horizontalClass:B.verticalClass);let N;L&&(N=L.querySelector(xr(e.params.scrollbar.dragClass)),N||(N=mn("div",e.params.scrollbar.dragClass),L.append(N))),Object.assign(T,{el:L,dragEl:N}),B.draggable&&x(),L&&L.classList[e.enabled?"remove":"add"](...Oi(e.params.scrollbar.lockClass))}function E(){const T=e.params.scrollbar,R=e.scrollbar.el;R&&R.classList.remove(...Oi(e.isHorizontal()?T.horizontalClass:T.verticalClass)),w()}i("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const T=e.params.scrollbar;let{el:R}=e.scrollbar;R=Et(R),R.forEach(B=>{B.classList.remove(T.horizontalClass,T.verticalClass),B.classList.add(e.isHorizontal()?T.horizontalClass:T.verticalClass)})}),i("init",()=>{e.params.scrollbar.enabled===!1?C():(U(),y(),m())}),i("update resize observerUpdate lock unlock changeDirection",()=>{y()}),i("setTranslate",()=>{m()}),i("setTransition",(T,R)=>{g(R)}),i("enable disable",()=>{const{el:T}=e.scrollbar;T&&T.classList[e.enabled?"remove":"add"](...Oi(e.params.scrollbar.lockClass))}),i("destroy",()=>{E()});const A=()=>{e.el.classList.remove(...Oi(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...Oi(e.params.scrollbar.scrollbarDisabledClass)),U(),y(),m()},C=()=>{e.el.classList.add(...Oi(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...Oi(e.params.scrollbar.scrollbarDisabledClass)),E()};Object.assign(e.scrollbar,{enable:A,disable:C,updateSize:y,setTranslate:m,init:U,destroy:E})}function Od(r){let{swiper:e,extendParams:t,on:i,emit:n,params:a}=r;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,s,l=a&&a.autoplay?a.autoplay.delay:3e3,c=a&&a.autoplay?a.autoplay.delay:3e3,h,f=new Date().getTime(),p,m,g,y,d,u,v;function S(M){!e||e.destroyed||!e.wrapperEl||M.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",S),!(v||M.detail&&M.detail.bySwiperTouchMove)&&A())}const _=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?p=!0:p&&(c=h,p=!1);const M=e.autoplay.paused?h:f+c-new Date().getTime();e.autoplay.timeLeft=M,n("autoplayTimeLeft",M,M/l),s=requestAnimationFrame(()=>{_()})},b=()=>{let M;return e.virtual&&e.params.virtual.enabled?M=e.slides.find(I=>I.classList.contains("swiper-slide-active")):M=e.slides[e.activeIndex],M?parseInt(M.getAttribute("data-swiper-autoplay"),10):void 0},x=M=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(s),_();let I=typeof M>"u"?e.params.autoplay.delay:M;l=e.params.autoplay.delay,c=e.params.autoplay.delay;const P=b();!Number.isNaN(P)&&P>0&&typeof M>"u"&&(I=P,l=P,c=P),h=I;const K=e.params.speed,$=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(K,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,K,!0,!0),n("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(K,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,K,!0,!0),n("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return I>0?(clearTimeout(o),o=setTimeout(()=>{$()},I)):requestAnimationFrame(()=>{$()}),I},w=()=>{f=new Date().getTime(),e.autoplay.running=!0,x(),n("autoplayStart")},U=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(s),n("autoplayStop")},E=(M,I)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),M||(u=!0);const P=()=>{n("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",S):A()};if(e.autoplay.paused=!0,I){d&&(h=e.params.autoplay.delay),d=!1,P();return}h=(h||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&h<0&&!e.params.loop)&&(h<0&&(h=0),P())},A=()=>{e.isEnd&&h<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),u?(u=!1,x(h)):x(),e.autoplay.paused=!1,n("autoplayResume"))},C=()=>{if(e.destroyed||!e.autoplay.running)return;const M=Vt();M.visibilityState==="hidden"&&(u=!0,E(!0)),M.visibilityState==="visible"&&A()},T=M=>{M.pointerType==="mouse"&&(u=!0,v=!0,!(e.animating||e.autoplay.paused)&&E(!0))},R=M=>{M.pointerType==="mouse"&&(v=!1,e.autoplay.paused&&A())},B=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",T),e.el.addEventListener("pointerleave",R))},L=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",T),e.el.removeEventListener("pointerleave",R))},N=()=>{Vt().addEventListener("visibilitychange",C)},k=()=>{Vt().removeEventListener("visibilitychange",C)};i("init",()=>{e.params.autoplay.enabled&&(B(),N(),w())}),i("destroy",()=>{L(),k(),e.autoplay.running&&U()}),i("_freeModeStaticRelease",()=>{(g||u)&&A()}),i("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?U():E(!0,!0)}),i("beforeTransitionStart",(M,I,P)=>{e.destroyed||!e.autoplay.running||(P||!e.params.autoplay.disableOnInteraction?E(!0,!0):U())}),i("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){U();return}m=!0,g=!1,u=!1,y=setTimeout(()=>{u=!0,g=!0,E(!0)},200)}}),i("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!m)){if(clearTimeout(y),clearTimeout(o),e.params.autoplay.disableOnInteraction){g=!1,m=!1;return}g&&e.params.cssMode&&A(),g=!1,m=!1}}),i("slideChange",()=>{e.destroyed||!e.autoplay.running||(d=!0)}),Object.assign(e.autoplay,{start:w,stop:U,pause:E,resume:A})}function zd(r){let{swiper:e,extendParams:t,on:i}=r;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let n=!1,a=!1;e.thumbs={swiper:null};function o(){const c=e.thumbs.swiper;if(!c||c.destroyed)return;const h=c.clickedIndex,f=c.clickedSlide;if(f&&f.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof h>"u"||h===null)return;let p;c.params.loop?p=parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"),10):p=h,e.params.loop?e.slideToLoop(p):e.slideTo(p)}function s(){const{thumbs:c}=e.params;if(n)return!1;n=!0;const h=e.constructor;if(c.swiper instanceof h){if(c.swiper.destroyed)return n=!1,!1;e.thumbs.swiper=c.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(fn(c.swiper)){const f=Object.assign({},c.swiper);Object.assign(f,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new h(f),a=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",o),!0}function l(c){const h=e.thumbs.swiper;if(!h||h.destroyed)return;const f=h.params.slidesPerView==="auto"?h.slidesPerViewDynamic():h.params.slidesPerView;let p=1;const m=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(p=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(p=1),p=Math.floor(p),h.slides.forEach(d=>d.classList.remove(m)),h.params.loop||h.params.virtual&&h.params.virtual.enabled)for(let d=0;d<p;d+=1)ci(h.slidesEl,`[data-swiper-slide-index="${e.realIndex+d}"]`).forEach(u=>{u.classList.add(m)});else for(let d=0;d<p;d+=1)h.slides[e.realIndex+d]&&h.slides[e.realIndex+d].classList.add(m);const g=e.params.thumbs.autoScrollOffset,y=g&&!h.params.loop;if(e.realIndex!==h.realIndex||y){const d=h.activeIndex;let u,v;if(h.params.loop){const S=h.slides.find(_=>_.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);u=h.slides.indexOf(S),v=e.activeIndex>e.previousIndex?"next":"prev"}else u=e.realIndex,v=u>e.previousIndex?"next":"prev";y&&(u+=v==="next"?g:-1*g),h.visibleSlidesIndexes&&h.visibleSlidesIndexes.indexOf(u)<0&&(h.params.centeredSlides?u>d?u=u-Math.floor(f/2)+1:u=u+Math.floor(f/2)-1:u>d&&h.params.slidesPerGroup,h.slideTo(u,c?0:void 0))}}i("beforeInit",()=>{const{thumbs:c}=e.params;if(!(!c||!c.swiper))if(typeof c.swiper=="string"||c.swiper instanceof HTMLElement){const h=Vt(),f=()=>{const m=typeof c.swiper=="string"?h.querySelector(c.swiper):c.swiper;if(m&&m.swiper)c.swiper=m.swiper,s(),l(!0);else if(m){const g=`${e.params.eventsPrefix}init`,y=d=>{c.swiper=d.detail[0],m.removeEventListener(g,y),s(),l(!0),c.swiper.update(),e.update()};m.addEventListener(g,y)}return m},p=()=>{e.destroyed||f()||requestAnimationFrame(p)};requestAnimationFrame(p)}else s(),l(!0)}),i("slideChange update resize observerUpdate",()=>{l()}),i("setTransition",(c,h)=>{const f=e.thumbs.swiper;!f||f.destroyed||f.setTransition(h)}),i("beforeDestroy",()=>{const c=e.thumbs.swiper;!c||c.destroyed||a&&c.destroy()}),Object.assign(e.thumbs,{init:s,update:l})}const Wd='@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:var(--swiper-navigation-top-offset, 50%);width:calc(var(--swiper-navigation-size) / 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}';class xl extends Pn{constructor(){super(...arguments),Ie(this,"slider"),Ie(this,"divContainer"),Ie(this,"divSlides"),Ie(this,"divGallery"),Ie(this,"divPagination"),Ie(this,"divPrevious"),Ie(this,"divNext"),Ie(this,"isDragging",!1)}static get observedAttributes(){return["has-thumb","autoplay"]}get hasThumb(){return this.hasAttribute("has-thumb")}get autoplay(){return this.hasAttribute("autoplay")}get slides(){var e;return[...Array.from(this.querySelectorAll("cc-swiper-slide")),...Array.from(((e=this.divSlides)==null?void 0:e.querySelectorAll("cc-swiper-slide"))??[])]}async openViewer(e,t,i){var n,a;let o=document.querySelector("cc-viewer");if(!o){const c=document.createElement("cc-viewer");document.body.appendChild(c),await customElements.whenDefined("cc-viewer"),o=await new Promise(h=>{setTimeout(()=>{h(document.querySelector("cc-viewer"))},100)})}o.setSwiper(this),o.setCurrentSlideIndex(i??((n=this.slider)==null?void 0:n.activeIndex)??0);const s=this.slides[i??((a=this.slider)==null?void 0:a.activeIndex)??0],l={};s!=null&&s.hasAttribute("fit-to-container")&&(l.fitToContainer=!0),s!=null&&s.hasAttribute("debug-mode")&&(l.debugMode=!0),s!=null&&s.hasAttribute("camera-position")&&(l.cameraPosition=s.getAttribute("camera-position")),s!=null&&s.hasAttribute("camera-target")&&(l.cameraTarget=s.getAttribute("camera-target")),s!=null&&s.hasAttribute("show-texture")&&(l.showTexture=s.getAttribute("show-texture")==="true"),t==="3dmodel"&&s!=null&&s.hasAttribute("material-url")&&(l.materialUrl=s.getAttribute("material-url")),o.open(e,t,l)}firstUpdated(){}render(){const e=`
      <style>
        ${Wd}
      </style>
    `,t=this.css`
      :host {
        display: block;
        height: 100%;
        width: 100%;
        --swiper-theme-color: var(--cc-slider-theme-color, #007aff);
        --swiper-navigation-color: var(--cc-slider-navigation-color, #007aff);
        --swiper-gallery-height: 0px;
        --swiper-slider-margin-bottom: 0px;
        --swiper-navigation-size: 44px;
      }

      :host([has-thumb]) {
        --swiper-slider-margin-bottom: 10px;
        --swiper-gallery-height: calc(100px - var(--swiper-slider-margin-bottom));
      }

      #divContainer {
        height: calc(100% - var(--swiper-gallery-height) - var(--swiper-slider-margin-bottom));
        margin-bottom: var(--swiper-slider-margin-bottom);
      }
      
      .swiper {
        height: 100%;
      }

      #divGallery {
        height: var(--swiper-gallery-height);
      }

      .gallery-thumbs .swiper-slide {
        height: 100%;
        opacity: 0.25;
        transition: 200ms;
        cursor: pointer;
      }

      .gallery-thumbs .swiper-slide-thumb-active {
        opacity: 1;
      }

      .gallery-thumb {
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
      }

      .swiper-wrapper {
        text-align: center;
      }

      .swiper-slide {
        background-color: white;
        height: 100%;
      }

      img.viewer {
        object-fit: contain;
        height: 100%;
        width: 100%;
        cursor: pointer;
        pointer-events: auto !important;
        user-select: none;
      }

      img.viewer.w-caption {
        height: calc(100% - 10px - 1.5rem);
      }

      .slider-caption {
        padding: 5px;
        margin: 0;
        line-height: 1.5em;
        background: #000000;
        color: #ffffff;
        font-size: 0.6rem;
        font-weight: 700;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
      }

      /* Adjust pagination position when caption exists */
      .swiper-pagination {
        bottom: 10px !important;
      }

      /* When captions exist, move pagination up */
      #divContainer.has-captions .swiper-pagination {
        bottom: calc(1.5rem + 20px) !important;
      }

      /* Navigation button styles with SVG icons */
      .swiper-button-prev,
      .swiper-button-next {
        color: var(--swiper-navigation-color);
        font-size: 0; /* Hide text */
        width: var(--swiper-navigation-size);
        height: var(--swiper-navigation-size);
      }

      .swiper-button-prev:after {
        content: '';
        display: block;
        width: var(--swiper-navigation-size);
        height: var(--swiper-navigation-size);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23007aff'%3E%3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/%3E%3C/svg%3E");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      
      .swiper-button-next:after {
        content: '';
        display: block;
        width: var(--swiper-navigation-size);
        height: var(--swiper-navigation-size);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23007aff'%3E%3Cpath d='M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z'/%3E%3C/svg%3E");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    `,i=this.slides.map((o,s)=>{const l=o.getAttribute("thumbnail-url")||"",c=o.getAttribute("image-url")||"",h=o.getAttribute("image-type")||"image",f=o.getAttribute("caption")||"";return`
        <div class='swiper-slide'>
          <img src="${l}" data-image-url="${c}" data-image-type="${h}" data-index="${s}" class="viewer${f!==""?" w-caption":""}">
          ${f!==""?`<p class="slider-caption">${f}</p>`:""}
        </div>
      `}).join(""),n=this.slides.map((o,s)=>{const l=o.getAttribute("thumbnail-url")||"";return`
        <div class='swiper-slide gallery-thumb' data-index="${s}" style="background-image: url('${l}')"></div>
      `}).join(""),a=`
      ${e}
      ${t}
      <div id='divContainer' class='swiper gallery-top'>
        <div id='divSlides' class='swiper-wrapper'>
          ${i}
        </div>

        <div id='divPagination' class='swiper-pagination'></div>
        <div id='divPrevious' class='swiper-button-prev'></div>
        <div id='divNext' class='swiper-button-next'></div>
      </div>
      <div id='divGallery' class='swiper gallery-thumbs'>
        <div class='swiper-wrapper'>
          ${n}
        </div>
      </div>
    `;this.updateShadowRoot(a),setTimeout(()=>{this.initializeSwiper(),this.queryAll(".gallery-thumb").forEach((o,s)=>{o.addEventListener("click",()=>{var l;return(l=this.slider)==null?void 0:l.slideTo(s)})}),this.queryAll("img.viewer").forEach(o=>{o.addEventListener("dragstart",s=>s.preventDefault()),o.addEventListener("click",s=>{if(this.isDragging){this.isDragging=!1;return}s.preventDefault(),s.stopPropagation(),s.stopImmediatePropagation();const l=s.target,c=l.getAttribute("data-image-url")||"",h=l.getAttribute("data-image-type")||"image",f=parseInt(l.getAttribute("data-index")||"0",10);return this.openViewer(c,h,f),!1},!0)})},0)}initializeSwiper(){this.divContainer=this.query("#divContainer")??void 0,this.divSlides=this.query("#divSlides")??void 0,this.divGallery=this.query("#divGallery")??void 0,this.divPagination=this.query("#divPagination")??void 0,this.divPrevious=this.query("#divPrevious")??void 0,this.divNext=this.query("#divNext")??void 0,this.slides.some(t=>t.getAttribute("caption"))&&this.divContainer&&this.divContainer.classList.add("has-captions");const e=this.slides.length>=2;this.divContainer&&(this.slider&&this.slider.destroy(),this.slider=new Xt(this.divContainer,{modules:[kd,Pd,Vd,Od,zd,Nd],navigation:{prevEl:this.divPrevious,nextEl:this.divNext},pagination:this.hasThumb?{}:{el:this.divPagination},autoplay:this.autoplay?{delay:5e3,disableOnInteraction:!1,reverseDirection:!1,stopOnLastSlide:!1,waitForTransition:!0}:!1,thumbs:this.hasThumb&&this.divGallery?{swiper:new Xt(this.divGallery,{spaceBetween:10,slidesPerView:Math.min(Math.max(4,this.slides.length),8),watchSlidesProgress:!0})}:{},preventClicks:!1,preventClicksPropagation:!1,simulateTouch:!0,allowTouchMove:!0,loop:e,on:{sliderMove:()=>{this.isDragging=!0},touchEnd:()=>{setTimeout(()=>{this.isDragging=!1},50)}}}))}}customElements.get("cc-swiper")||customElements.define("cc-swiper",xl);class wl extends Pn{static get observedAttributes(){return["thumbnail-url","image-url","image-type","caption"]}get thumbnailUrl(){return this.getAttribute("thumbnail-url")||""}get imageUrl(){return this.getAttribute("image-url")||""}get imageType(){return this.getAttribute("image-type")||""}get caption(){return this.getAttribute("caption")||""}render(){const e=this.css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }
    `;this.updateShadowRoot(e)}}customElements.get("cc-swiper-slide")||customElements.define("cc-swiper-slide",wl);class wr extends Pn{constructor(){super(...arguments),Ie(this,"_showPrevButton",!0),Ie(this,"_showNextButton",!0),Ie(this,"isShow",!1),Ie(this,"isLoading",!1)}get showPrevButton(){return this._showPrevButton}set showPrevButton(e){this._showPrevButton=e,this.updateNavigationVisibility()}get showNextButton(){return this._showNextButton}set showNextButton(e){this._showNextButton=e,this.updateNavigationVisibility()}open(e){this.isShow=!0,this.isLoading=!0;const t=Promise.resolve(this.doOpen(e));Promise.resolve().then(()=>{this.render()}),t.then(()=>{this.isLoading=!1,this.render()}).catch(i=>{this.isLoading=!1,this.render()})}close(){this.cleanupNavigationListeners(),this.doClose(),this.isShow=!1,this.isLoading=!1,this.render(),this.dispatch("close")}cleanupNavigationListeners(){const e=this.query(".nav-prev"),t=this.query(".nav-next"),i=this.query(".nav-close");e&&e.removeAttribute("data-listener-attached"),t&&t.removeAttribute("data-listener-attached"),i&&i.removeAttribute("data-listener-attached")}render(){if(this.shouldUseCustomRender()){this.customRender();return}const e=`
      ${this.css`
      :host {
        --cc-viewer-z-index-each: 1000;
      }
      
      .backdrop {
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: var(--cc-viewer-z-index-each);
      }
      
      .viewer {
        position: absolute;
        width: 90%;
        height: 85%;
        inset: 0px;
        margin: auto;
        align-self: center;
        background-color: #000;
      }
      
      ${this.getNavigationStyles()}
      ${this.getCustomStyles()}
    `}
      <div class="backdrop" style="${this.isShow?"visibility: visible":"visibility: hidden"}">
        ${this.getNavigationButtons()}
        <div class="viewer">
          ${this.getViewerContent()}
        </div>
      </div>
    `;this.updateShadowRoot(e),setTimeout(()=>{this.addNavigationListeners(),this.onAfterRender()},0)}shouldUseCustomRender(){return!1}customRender(){}getCustomStyles(){return""}onAfterRender(){}navigatePrev(){this.dispatch("navigate-prev")}navigateNext(){this.dispatch("navigate-next")}getNavigationButtons(){const e=this.showPrevButton?"":"display: none;",t=this.showNextButton?"":"display: none;";return`
      <button class="nav-button nav-prev" style="${e}" aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="nav-button nav-next" style="${t}" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      <button class="nav-button nav-close" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `}getNavigationStyles(){return`
      .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        border-radius: 4px;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.3s;
        z-index: 1002;
        pointer-events: auto;
      }
      
      .nav-button:hover {
        background: rgba(0, 0, 0, 0.7);
      }
      
      .nav-prev {
        left: 20px;
      }
      
      .nav-next {
        right: 20px;
      }
      
      .nav-close {
        top: 20px;
        right: 20px;
        transform: none;
      }
    `}addNavigationListeners(){const e=this.query(".backdrop");e&&e.style.visibility==="hidden"||setTimeout(()=>{const t=this.query(".nav-prev"),i=this.query(".nav-next"),n=this.query(".nav-close");t&&!t.hasAttribute("data-listener-attached")&&(t.setAttribute("data-listener-attached","true"),t.addEventListener("click",a=>{a.stopPropagation(),a.preventDefault(),this.navigatePrev()},!0)),i&&!i.hasAttribute("data-listener-attached")&&(i.setAttribute("data-listener-attached","true"),i.addEventListener("click",a=>{a.stopPropagation(),this.navigateNext()})),n&&!n.hasAttribute("data-listener-attached")&&(n.setAttribute("data-listener-attached","true"),n.addEventListener("click",a=>{a.stopPropagation(),this.close()}))},0)}updateNavigationVisibility(){const e=this.query(".nav-prev"),t=this.query(".nav-next");e&&(e.style.display=this._showPrevButton?"":"none"),t&&(t.style.display=this._showNextButton?"":"none")}}/*!
 * Viewer.js v1.11.7
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-11-24T04:32:19.116Z
 */function Gd(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function bl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Ul(i.key),i)}}function Jd(r,e,t){return e&&bl(r.prototype,e),t&&bl(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Zd(r,e,t){return(e=Ul(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Cl(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,i)}return t}function hs(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Cl(Object(t),!0).forEach(function(i){Zd(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Cl(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function Hd(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function Ul(r){var e=Hd(r,"string");return typeof e=="symbol"?e:e+""}function us(r){"@babel/helpers - typeof";return us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},us(r)}var Tl={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},Yd='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',Zn=typeof window<"u"&&typeof window.document<"u",Ci=Zn?window:{},br=Zn&&Ci.document.documentElement?"ontouchstart"in Ci.document.documentElement:!1,ds=Zn?"PointerEvent"in Ci:!1,Xe="viewer",Hn="move",Ml="switch",gn="zoom",Yn="".concat(Xe,"-active"),Xd="".concat(Xe,"-close"),Xn="".concat(Xe,"-fade"),ps="".concat(Xe,"-fixed"),jd="".concat(Xe,"-fullscreen"),Fl="".concat(Xe,"-fullscreen-exit"),tr="".concat(Xe,"-hide"),Kd="".concat(Xe,"-hide-md-down"),qd="".concat(Xe,"-hide-sm-down"),$d="".concat(Xe,"-hide-xs-down"),ii="".concat(Xe,"-in"),vn="".concat(Xe,"-invisible"),Cr="".concat(Xe,"-loading"),ep="".concat(Xe,"-move"),Rl="".concat(Xe,"-open"),Ur="".concat(Xe,"-show"),gt="".concat(Xe,"-transition"),Tr="click",fs="dblclick",Il="dragstart",Bl="focusin",Ql="keydown",ri="load",ir="error",tp=br?"touchend touchcancel":"mouseup",ip=br?"touchmove":"mousemove",rp=br?"touchstart":"mousedown",Ll=ds?"pointerdown":rp,Dl=ds?"pointermove":ip,Nl=ds?"pointerup pointercancel":tp,kl="resize",hi="transitionend",Pl="wheel",Vl="ready",Ol="show",zl="shown",Wl="hide",Gl="hidden",Jl="view",An="viewed",Zl="move",Hl="moved",Yl="rotate",Xl="rotated",jl="scale",Kl="scaled",ql="zoom",$l="zoomed",ec="play",tc="stop",jn="".concat(Xe,"Action"),ms=/\s\s*/,Kn=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function _n(r){return typeof r=="string"}var np=Number.isNaN||Ci.isNaN;function mt(r){return typeof r=="number"&&!np(r)}function Mr(r){return typeof r>"u"}function Fr(r){return us(r)==="object"&&r!==null}var ap=Object.prototype.hasOwnProperty;function Rr(r){if(!Fr(r))return!1;try{var e=r.constructor,t=e.prototype;return e&&t&&ap.call(t,"isPrototypeOf")}catch{return!1}}function ot(r){return typeof r=="function"}function ct(r,e){if(r&&ot(e))if(Array.isArray(r)||mt(r.length)){var t=r.length,i;for(i=0;i<t&&e.call(r,r[i],i,r)!==!1;i+=1);}else Fr(r)&&Object.keys(r).forEach(function(n){e.call(r,r[n],n,r)});return r}var jt=Object.assign||function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];return Fr(r)&&t.length>0&&t.forEach(function(n){Fr(n)&&Object.keys(n).forEach(function(a){r[a]=n[a]})}),r},sp=/^(?:width|height|left|top|marginLeft|marginTop)$/;function ui(r,e){var t=r.style;ct(e,function(i,n){sp.test(n)&&mt(i)&&(i+="px"),t[n]=i})}function op(r){return _n(r)?r.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):r}function Ir(r,e){return!r||!e?!1:r.classList?r.classList.contains(e):r.className.indexOf(e)>-1}function Ne(r,e){if(!(!r||!e)){if(mt(r.length)){ct(r,function(i){Ne(i,e)});return}if(r.classList){r.classList.add(e);return}var t=r.className.trim();t?t.indexOf(e)<0&&(r.className="".concat(t," ").concat(e)):r.className=e}}function tt(r,e){if(!(!r||!e)){if(mt(r.length)){ct(r,function(t){tt(t,e)});return}if(r.classList){r.classList.remove(e);return}r.className.indexOf(e)>=0&&(r.className=r.className.replace(e,""))}}function yn(r,e,t){if(e){if(mt(r.length)){ct(r,function(i){yn(i,e,t)});return}t?Ne(r,e):tt(r,e)}}var lp=/([a-z\d])([A-Z])/g;function gs(r){return r.replace(lp,"$1-$2").toLowerCase()}function Br(r,e){return Fr(r[e])?r[e]:r.dataset?r.dataset[e]:r.getAttribute("data-".concat(gs(e)))}function vs(r,e,t){Fr(t)?r[e]=t:r.dataset?r.dataset[e]=t:r.setAttribute("data-".concat(gs(e)),t)}var ic=(function(){var r=!1;if(Zn){var e=!1,t=function(){},i=Object.defineProperty({},"once",{get:function(){return r=!0,e},set:function(n){e=n}});Ci.addEventListener("test",t,i),Ci.removeEventListener("test",t,i)}return r})();function lt(r,e,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=t;e.trim().split(ms).forEach(function(a){if(!ic){var o=r.listeners;o&&o[a]&&o[a][t]&&(n=o[a][t],delete o[a][t],Object.keys(o[a]).length===0&&delete o[a],Object.keys(o).length===0&&delete r.listeners)}r.removeEventListener(a,n,i)})}function Ve(r,e,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=t;e.trim().split(ms).forEach(function(a){if(i.once&&!ic){var o=r.listeners,s=o===void 0?{}:o;n=function(){delete s[a][t],r.removeEventListener(a,n,i);for(var l=arguments.length,c=new Array(l),h=0;h<l;h++)c[h]=arguments[h];t.apply(r,c)},s[a]||(s[a]={}),s[a][t]&&r.removeEventListener(a,s[a][t],i),s[a][t]=n,r.listeners=s}r.addEventListener(a,n,i)})}function At(r,e,t,i){var n;return ot(Event)&&ot(CustomEvent)?n=new CustomEvent(e,hs({bubbles:!0,cancelable:!0,detail:t},i)):(n=document.createEvent("CustomEvent"),n.initCustomEvent(e,!0,!0,t)),r.dispatchEvent(n)}function cp(r){var e=r.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}function qn(r){var e=r.rotate,t=r.scaleX,i=r.scaleY,n=r.translateX,a=r.translateY,o=[];mt(n)&&n!==0&&o.push("translateX(".concat(n,"px)")),mt(a)&&a!==0&&o.push("translateY(".concat(a,"px)")),mt(e)&&e!==0&&o.push("rotate(".concat(e,"deg)")),mt(t)&&t!==1&&o.push("scaleX(".concat(t,")")),mt(i)&&i!==1&&o.push("scaleY(".concat(i,")"));var s=o.length?o.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function hp(r){return _n(r)?decodeURIComponent(r.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var As=Ci.navigator&&/Version\/\d+(\.\d+)+?\s+Safari/i.test(Ci.navigator.userAgent);function rc(r,e,t){var i=document.createElement("img");if(r.naturalWidth&&!As)return t(r.naturalWidth,r.naturalHeight),i;var n=document.body||document.documentElement;return i.onload=function(){t(i.width,i.height),As||n.removeChild(i)},ct(e.inheritedAttributes,function(a){var o=r.getAttribute(a);o!==null&&i.setAttribute(a,o)}),i.src=r.src,As||(i.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(i)),i}function $n(r){switch(r){case 2:return $d;case 3:return qd;case 4:return Kd;default:return""}}function up(r){var e=hs({},r),t=[];return ct(r,function(i,n){delete e[n],ct(e,function(a){var o=Math.abs(i.startX-a.startX),s=Math.abs(i.startY-a.startY),l=Math.abs(i.endX-a.endX),c=Math.abs(i.endY-a.endY),h=Math.sqrt(o*o+s*s),f=Math.sqrt(l*l+c*c),p=(f-h)/h;t.push(p)})}),t.sort(function(i,n){return Math.abs(i)<Math.abs(n)}),t[0]}function ea(r,e){var t=r.pageX,i=r.pageY,n={endX:t,endY:i};return e?n:hs({timeStamp:Date.now(),startX:t,startY:i},n)}function dp(r){var e=0,t=0,i=0;return ct(r,function(n){var a=n.startX,o=n.startY;e+=a,t+=o,i+=1}),e/=i,t/=i,{pageX:e,pageY:t}}var pp={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var r=this.element.ownerDocument,e=r.body||r.documentElement;this.body=e,this.scrollbarWidth=window.innerWidth-r.documentElement.clientWidth,this.initialBodyPaddingRight=e.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(e).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var r=this.options,e=this.parent,t;r.inline&&(t={width:Math.max(e.offsetWidth,r.minWidth),height:Math.max(e.offsetHeight,r.minHeight)},this.parentData=t),(this.fulled||!t)&&(t=this.containerData),this.viewerData=jt({},t)},renderViewer:function(){this.options.inline&&!this.fulled&&ui(this.viewer,this.viewerData)},initList:function(){var r=this,e=this.element,t=this.options,i=this.list,n=[];i.innerHTML="",ct(this.images,function(a,o){var s=a.src,l=a.alt||hp(s),c=r.getImageURL(a);if(s||c){var h=document.createElement("li"),f=document.createElement("img");ct(t.inheritedAttributes,function(p){var m=a.getAttribute(p);m!==null&&f.setAttribute(p,m)}),t.navbar&&(f.src=s||c),f.alt=l,f.setAttribute("data-original-url",c||s),h.setAttribute("data-index",o),h.setAttribute("data-viewer-action","view"),h.setAttribute("role","button"),t.keyboard&&h.setAttribute("tabindex",0),h.appendChild(f),i.appendChild(h),n.push(h)}}),this.items=n,ct(n,function(a){var o=a.firstElementChild,s,l;vs(o,"filled",!0),t.loading&&Ne(a,Cr),Ve(o,ri,s=function(c){lt(o,ir,l),t.loading&&tt(a,Cr),r.loadImage(c)},{once:!0}),Ve(o,ir,l=function(){lt(o,ri,s),t.loading&&tt(a,Cr)},{once:!0})}),t.transition&&Ve(e,An,function(){Ne(i,gt)},{once:!0})},renderList:function(){var r=this.index,e=this.items[r];if(e){var t=e.nextElementSibling,i=parseInt(window.getComputedStyle(t||e).marginLeft,10),n=e.offsetWidth,a=n+i;ui(this.list,jt({width:a*this.length-i},qn({translateX:(this.viewerData.width-n)/2-a*r})))}},resetList:function(){var r=this.list;r.innerHTML="",tt(r,gt),ui(r,qn({translateX:0}))},initImage:function(r){var e=this,t=this.options,i=this.image,n=this.viewerData,a=this.footer.offsetHeight,o=n.width,s=Math.max(n.height-a,a),l=this.imageData||{},c;this.imageInitializing={abort:function(){c.onload=null}},c=rc(i,t,function(h,f){var p=h/f,m=Math.max(0,Math.min(1,t.initialCoverage)),g=o,y=s;e.imageInitializing=!1,s*p>o?y=o/p:g=s*p,m=mt(m)?m:.9,g=Math.min(g*m,h),y=Math.min(y*m,f);var d=(o-g)/2,u=(s-y)/2,v={left:d,top:u,x:d,y:u,width:g,height:y,oldRatio:1,ratio:g/h,aspectRatio:p,naturalWidth:h,naturalHeight:f},S=jt({},v);t.rotatable&&(v.rotate=l.rotate||0,S.rotate=0),t.scalable&&(v.scaleX=l.scaleX||1,v.scaleY=l.scaleY||1,S.scaleX=1,S.scaleY=1),e.imageData=v,e.initialImageData=S,r&&r()})},renderImage:function(r){var e=this,t=this.image,i=this.imageData;if(ui(t,jt({width:i.width,height:i.height,marginLeft:i.x,marginTop:i.y},qn(i))),r)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&Ir(t,gt)){var n=function(){e.imageRendering=!1,r()};this.imageRendering={abort:function(){lt(t,hi,n)}},Ve(t,hi,n,{once:!0})}else r()},resetImage:function(){var r=this.image;r&&(this.viewing&&this.viewing.abort(),r.parentNode.removeChild(r),this.image=null,this.title.innerHTML="")}},fp={bind:function(){var r=this.options,e=this.viewer,t=this.canvas,i=this.element.ownerDocument;Ve(e,Tr,this.onClick=this.click.bind(this)),Ve(e,Il,this.onDragStart=this.dragstart.bind(this)),Ve(t,Ll,this.onPointerDown=this.pointerdown.bind(this)),Ve(i,Dl,this.onPointerMove=this.pointermove.bind(this)),Ve(i,Nl,this.onPointerUp=this.pointerup.bind(this)),Ve(i,Ql,this.onKeyDown=this.keydown.bind(this)),Ve(window,kl,this.onResize=this.resize.bind(this)),r.zoomable&&r.zoomOnWheel&&Ve(e,Pl,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),r.toggleOnDblclick&&Ve(t,fs,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var r=this.options,e=this.viewer,t=this.canvas,i=this.element.ownerDocument;lt(e,Tr,this.onClick),lt(e,Il,this.onDragStart),lt(t,Ll,this.onPointerDown),lt(i,Dl,this.onPointerMove),lt(i,Nl,this.onPointerUp),lt(i,Ql,this.onKeyDown),lt(window,kl,this.onResize),r.zoomable&&r.zoomOnWheel&&lt(e,Pl,this.onWheel,{passive:!1,capture:!0}),r.toggleOnDblclick&&lt(t,fs,this.onDblclick)}},mp={click:function(r){var e=this.options,t=this.imageData,i=r.target,n=Br(i,jn);switch(!n&&i.localName==="img"&&i.parentElement.localName==="li"&&(i=i.parentElement,n=Br(i,jn)),br&&r.isTrusted&&i===this.canvas&&clearTimeout(this.clickCanvasTimeout),n){case"mix":this.played?this.stop():e.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(Br(i,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(e.loop);break;case"play":this.play(e.fullscreen);break;case"next":this.next(e.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-t.scaleX||-1);break;case"flip-vertical":this.scaleY(-t.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(r){r.preventDefault(),this.viewed&&r.target===this.image&&(br&&r.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(r.isTrusted?r:r.detail&&r.detail.originalEvent))},load:function(){var r=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var e=this.element,t=this.options,i=this.image,n=this.index,a=this.viewerData;tt(i,vn),t.loading&&tt(this.canvas,Cr),i.style.cssText="height:0;"+"margin-left:".concat(a.width/2,"px;")+"margin-top:".concat(a.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){yn(i,ep,t.movable),yn(i,gt,t.transition),r.renderImage(function(){r.viewed=!0,r.viewing=!1,ot(t.viewed)&&Ve(e,An,t.viewed,{once:!0}),At(e,An,{originalImage:r.images[n],index:n,image:i},{cancelable:!1})})})},loadImage:function(r){var e=r.target,t=e.parentNode,i=t.offsetWidth||30,n=t.offsetHeight||50,a=!!Br(e,"filled");rc(e,this.options,function(o,s){var l=o/s,c=i,h=n;n*l>i?a?c=n*l:h=i/l:a?h=i/l:c=n*l,ui(e,jt({width:c,height:h},qn({translateX:(i-c)/2,translateY:(n-h)/2})))})},keydown:function(r){var e=this.options;if(e.keyboard){var t=r.keyCode||r.which||r.charCode;switch(t){case 13:this.viewer.contains(r.target)&&this.click(r);break}if(this.fulled)switch(t){case 27:this.played?this.stop():e.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(e.loop);break;case 38:r.preventDefault(),this.zoom(e.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(e.loop);break;case 40:r.preventDefault(),this.zoom(-e.zoomRatio,!0);break;case 48:case 49:r.ctrlKey&&(r.preventDefault(),this.toggle());break}}},dragstart:function(r){r.target.localName==="img"&&r.preventDefault()},pointerdown:function(r){var e=this.options,t=this.pointers,i=r.buttons,n=r.button;if(this.pointerMoved=!1,!(!this.viewed||this.showing||this.viewing||this.hiding||(r.type==="mousedown"||r.type==="pointerdown"&&r.pointerType==="mouse")&&(mt(i)&&i!==1||mt(n)&&n!==0||r.ctrlKey))){r.preventDefault(),r.changedTouches?ct(r.changedTouches,function(o){t[o.identifier]=ea(o)}):t[r.pointerId||0]=ea(r);var a=e.movable?Hn:!1;e.zoomOnTouch&&e.zoomable&&Object.keys(t).length>1?a=gn:e.slideOnTouch&&(r.pointerType==="touch"||r.type==="touchstart")&&this.isSwitchable()&&(a=Ml),e.transition&&(a===Hn||a===gn)&&tt(this.image,gt),this.action=a}},pointermove:function(r){var e=this.pointers,t=this.action;!this.viewed||!t||(r.preventDefault(),r.changedTouches?ct(r.changedTouches,function(i){jt(e[i.identifier]||{},ea(i,!0))}):jt(e[r.pointerId||0]||{},ea(r,!0)),this.change(r))},pointerup:function(r){var e=this,t=this.options,i=this.action,n=this.pointers,a;r.changedTouches?ct(r.changedTouches,function(o){a=n[o.identifier],delete n[o.identifier]}):(a=n[r.pointerId||0],delete n[r.pointerId||0]),i&&(r.preventDefault(),t.transition&&(i===Hn||i===gn)&&Ne(this.image,gt),this.action=!1,br&&i!==gn&&a&&Date.now()-a.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),t.toggleOnDblclick&&this.viewed&&r.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){At(e.image,fs,{originalEvent:r})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){e.imageClicked=!1},500)):(this.imageClicked=!1,t.backdrop&&t.backdrop!=="static"&&r.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){At(e.canvas,Tr,{originalEvent:r})},50)))))},resize:function(){var r=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){r.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}ct(this.player.getElementsByTagName("img"),function(e){Ve(e,ri,r.loadImage.bind(r),{once:!0}),At(e,ri)})}},wheel:function(r){var e=this;if(this.viewed&&(r.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50);var t=Number(this.options.zoomRatio)||.1,i=1;r.deltaY?i=r.deltaY>0?1:-1:r.wheelDelta?i=-r.wheelDelta/120:r.detail&&(i=r.detail>0?1:-1),this.zoom(-i*t,!0,null,r)}}},gp={show:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=this.element,t=this.options;if(t.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(r),this;if(ot(t.show)&&Ve(e,Ol,t.show,{once:!0}),At(e,Ol)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var i=this.viewer;if(tt(i,tr),i.setAttribute("role","dialog"),i.setAttribute("aria-labelledby",this.title.id),i.setAttribute("aria-modal",!0),i.removeAttribute("aria-hidden"),t.transition&&!r){var n=this.shown.bind(this);this.transitioning={abort:function(){lt(i,hi,n),tt(i,ii)}},Ne(i,gt),i.initialOffsetWidth=i.offsetWidth,Ve(i,hi,n,{once:!0}),Ne(i,ii)}else Ne(i,ii),this.shown();return this},hide:function(){var r=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=this.element,i=this.options;if(i.inline||this.hiding||!(this.isShown||this.showing))return this;if(ot(i.hide)&&Ve(t,Wl,i.hide,{once:!0}),At(t,Wl)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var n=this.viewer,a=this.image,o=function(){tt(n,ii),r.hidden()};if(i.transition&&!e){var s=function(c){c&&c.target===n&&(lt(n,hi,s),r.hidden())},l=function(){Ir(n,gt)?(Ve(n,hi,s),tt(n,ii)):o()};this.transitioning={abort:function(){r.viewed&&Ir(a,gt)?lt(a,hi,l):Ir(n,gt)&&lt(n,hi,s)}},this.viewed&&Ir(a,gt)?(Ve(a,hi,l,{once:!0}),this.zoomTo(0,!1,null,null,!0)):l()}else o();return this},view:function(){var r=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(e=Number(e)||0,this.hiding||this.played||e<0||e>=this.length||this.viewed&&e===this.index)return this;if(!this.isShown)return this.index=e,this.show();this.viewing&&this.viewing.abort();var t=this.element,i=this.options,n=this.title,a=this.canvas,o=this.items[e],s=o.querySelector("img"),l=Br(s,"originalUrl"),c=s.getAttribute("alt"),h=document.createElement("img");if(ct(i.inheritedAttributes,function(y){var d=s.getAttribute(y);d!==null&&h.setAttribute(y,d)}),h.src=l,h.alt=c,ot(i.view)&&Ve(t,Jl,i.view,{once:!0}),At(t,Jl,{originalImage:this.images[e],index:e,image:h})===!1||!this.isShown||this.hiding||this.played)return this;var f=this.items[this.index];f&&(tt(f,Yn),f.removeAttribute("aria-selected")),Ne(o,Yn),o.setAttribute("aria-selected",!0),i.focus&&o.focus(),this.image=h,this.viewed=!1,this.index=e,this.imageData={},Ne(h,vn),i.loading&&Ne(a,Cr),a.innerHTML="",a.appendChild(h),this.renderList(),n.innerHTML="";var p=function(){var y=r.imageData,d=Array.isArray(i.title)?i.title[1]:i.title;n.innerHTML=op(ot(d)?d.call(r,h,y):"".concat(c," (").concat(y.naturalWidth," × ").concat(y.naturalHeight,")"))},m,g;return Ve(t,An,p,{once:!0}),this.viewing={abort:function(){lt(t,An,p),h.complete?r.imageRendering?r.imageRendering.abort():r.imageInitializing&&r.imageInitializing.abort():(h.src="",lt(h,ri,m),r.timeout&&clearTimeout(r.timeout))}},h.complete?this.load():(Ve(h,ri,m=function(){lt(h,ir,g),r.load()},{once:!0}),Ve(h,ir,g=function(){lt(h,ri,m),r.timeout&&(clearTimeout(r.timeout),r.timeout=!1),tt(h,vn),i.loading&&tt(r.canvas,Cr)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){tt(h,vn),r.timeout=!1},1e3)),this},prev:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=this.index-1;return e<0&&(e=r?this.length-1:0),this.view(e),this},next:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=this.length-1,t=this.index+1;return t>e&&(t=r?0:e),this.view(t),this},move:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r,t=this.imageData;return this.moveTo(Mr(r)?r:t.x+Number(r),Mr(e)?e:t.y+Number(e)),this},moveTo:function(r){var e=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=this.element,a=this.options,o=this.imageData;if(r=Number(r),t=Number(t),this.viewed&&!this.played&&a.movable){var s=o.x,l=o.y,c=!1;if(mt(r)?c=!0:r=s,mt(t)?c=!0:t=l,c){if(ot(a.move)&&Ve(n,Zl,a.move,{once:!0}),At(n,Zl,{x:r,y:t,oldX:s,oldY:l,originalEvent:i})===!1)return this;o.x=r,o.y=t,o.left=r,o.top=t,this.moving=!0,this.renderImage(function(){e.moving=!1,ot(a.moved)&&Ve(n,Hl,a.moved,{once:!0}),At(n,Hl,{x:r,y:t,oldX:s,oldY:l,originalEvent:i},{cancelable:!1})})}}return this},rotate:function(r){return this.rotateTo((this.imageData.rotate||0)+Number(r)),this},rotateTo:function(r){var e=this,t=this.element,i=this.options,n=this.imageData;if(r=Number(r),mt(r)&&this.viewed&&!this.played&&i.rotatable){var a=n.rotate;if(ot(i.rotate)&&Ve(t,Yl,i.rotate,{once:!0}),At(t,Yl,{degree:r,oldDegree:a})===!1)return this;n.rotate=r,this.rotating=!0,this.renderImage(function(){e.rotating=!1,ot(i.rotated)&&Ve(t,Xl,i.rotated,{once:!0}),At(t,Xl,{degree:r,oldDegree:a},{cancelable:!1})})}return this},scaleX:function(r){return this.scale(r,this.imageData.scaleY),this},scaleY:function(r){return this.scale(this.imageData.scaleX,r),this},scale:function(r){var e=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r,i=this.element,n=this.options,a=this.imageData;if(r=Number(r),t=Number(t),this.viewed&&!this.played&&n.scalable){var o=a.scaleX,s=a.scaleY,l=!1;if(mt(r)?l=!0:r=o,mt(t)?l=!0:t=s,l){if(ot(n.scale)&&Ve(i,jl,n.scale,{once:!0}),At(i,jl,{scaleX:r,scaleY:t,oldScaleX:o,oldScaleY:s})===!1)return this;a.scaleX=r,a.scaleY=t,this.scaling=!0,this.renderImage(function(){e.scaling=!1,ot(n.scaled)&&Ve(i,Kl,n.scaled,{once:!0}),At(i,Kl,{scaleX:r,scaleY:t,oldScaleX:o,oldScaleY:s},{cancelable:!1})})}}return this},zoom:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,n=this.imageData;return r=Number(r),r<0?r=1/(1-r):r=1+r,this.zoomTo(n.width*r/n.naturalWidth,e,t,i),this},zoomTo:function(r){var e=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,o=this.element,s=this.options,l=this.pointers,c=this.imageData,h=c.x,f=c.y,p=c.width,m=c.height,g=c.naturalWidth,y=c.naturalHeight;if(r=Math.max(0,r),mt(r)&&this.viewed&&!this.played&&(a||s.zoomable)){if(!a){var d=Math.max(.01,s.minZoomRatio),u=Math.min(100,s.maxZoomRatio);r=Math.min(Math.max(r,d),u)}if(n)switch(n.type){case"wheel":s.zoomRatio>=.055&&r>.95&&r<1.05&&(r=1);break;case"pointermove":case"touchmove":case"mousemove":r>.99&&r<1.01&&(r=1);break}var v=g*r,S=y*r,_=v-p,b=S-m,x=c.ratio;if(ot(s.zoom)&&Ve(o,ql,s.zoom,{once:!0}),At(o,ql,{ratio:r,oldRatio:x,originalEvent:n})===!1)return this;if(this.zooming=!0,n){var w=cp(this.viewer),U=l&&Object.keys(l).length>0?dp(l):{pageX:n.pageX,pageY:n.pageY};c.x-=_*((U.pageX-w.left-h)/p),c.y-=b*((U.pageY-w.top-f)/m)}else Rr(i)&&mt(i.x)&&mt(i.y)?(c.x-=_*((i.x-h)/p),c.y-=b*((i.y-f)/m)):(c.x-=_/2,c.y-=b/2);c.left=c.x,c.top=c.y,c.width=v,c.height=S,c.oldRatio=x,c.ratio=r,this.renderImage(function(){e.zooming=!1,ot(s.zoomed)&&Ve(o,$l,s.zoomed,{once:!0}),At(o,$l,{ratio:r,oldRatio:x,originalEvent:n},{cancelable:!1})}),t&&this.tooltip()}return this},play:function(){var r=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var t=this.element,i=this.options;if(ot(i.play)&&Ve(t,ec,i.play,{once:!0}),At(t,ec)===!1)return this;var n=this.player,a=this.loadImage.bind(this),o=[],s=0,l=0;if(this.played=!0,this.onLoadWhenPlay=a,e&&this.requestFullscreen(e),Ne(n,Ur),ct(this.items,function(f,p){var m=f.querySelector("img"),g=document.createElement("img");g.src=Br(m,"originalUrl"),g.alt=m.getAttribute("alt"),g.referrerPolicy=m.referrerPolicy,s+=1,Ne(g,Xn),yn(g,gt,i.transition),Ir(f,Yn)&&(Ne(g,ii),l=p),o.push(g),Ve(g,ri,a,{once:!0}),n.appendChild(g)}),mt(i.interval)&&i.interval>0){var c=function(){clearTimeout(r.playing.timeout),tt(o[l],ii),l-=1,l=l>=0?l:s-1,Ne(o[l],ii),r.playing.timeout=setTimeout(c,i.interval)},h=function(){clearTimeout(r.playing.timeout),tt(o[l],ii),l+=1,l=l<s?l:0,Ne(o[l],ii),r.playing.timeout=setTimeout(h,i.interval)};s>1&&(this.playing={prev:c,next:h,timeout:setTimeout(h,i.interval)})}return this},stop:function(){var r=this;if(!this.played)return this;var e=this.element,t=this.options;if(ot(t.stop)&&Ve(e,tc,t.stop,{once:!0}),At(e,tc)===!1)return this;var i=this.player;return clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,ct(i.getElementsByTagName("img"),function(n){lt(n,ri,r.onLoadWhenPlay)}),tt(i,Ur),i.innerHTML="",this.exitFullscreen(),this},full:function(){var r=this,e=this.options,t=this.viewer,i=this.image,n=this.list;return!this.isShown||this.played||this.fulled||!e.inline?this:(this.fulled=!0,this.open(),Ne(this.button,Fl),e.transition&&(tt(n,gt),this.viewed&&tt(i,gt)),Ne(t,ps),t.setAttribute("role","dialog"),t.setAttribute("aria-labelledby",this.title.id),t.setAttribute("aria-modal",!0),t.removeAttribute("style"),ui(t,{zIndex:e.zIndex}),e.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=jt({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){r.renderImage(function(){e.transition&&setTimeout(function(){Ne(i,gt),Ne(n,gt)},0)})}),this)},exit:function(){var r=this,e=this.options,t=this.viewer,i=this.image,n=this.list;return!this.isShown||this.played||!this.fulled||!e.inline?this:(this.fulled=!1,this.close(),tt(this.button,Fl),e.transition&&(tt(n,gt),this.viewed&&tt(i,gt)),e.focus&&this.clearEnforceFocus(),t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.removeAttribute("aria-modal"),tt(t,ps),ui(t,{zIndex:e.zIndexInline}),this.viewerData=jt({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){r.renderImage(function(){e.transition&&setTimeout(function(){Ne(i,gt),Ne(n,gt)},0)})}),this)},tooltip:function(){var r=this,e=this.options,t=this.tooltipBox,i=this.imageData;return!this.viewed||this.played||!e.tooltip?this:(t.textContent="".concat(Math.round(i.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):e.transition?(this.fading&&At(t,hi),Ne(t,Ur),Ne(t,Xn),Ne(t,gt),t.removeAttribute("aria-hidden"),t.initialOffsetWidth=t.offsetWidth,Ne(t,ii)):(Ne(t,Ur),t.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){e.transition?(Ve(t,hi,function(){tt(t,Ur),tt(t,Xn),tt(t,gt),t.setAttribute("aria-hidden",!0),r.fading=!1},{once:!0}),tt(t,ii),r.fading=!0):(tt(t,Ur),t.setAttribute("aria-hidden",!0)),r.tooltipping=!1},1e3),this)},toggle:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,null,r):this.zoomTo(1,!0,null,r),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=jt({},this.initialImageData),this.renderImage()),this},update:function(){var r=this,e=this.element,t=this.options,i=this.isImg;if(i&&!e.parentNode)return this.destroy();var n=[];if(ct(i?[e]:e.querySelectorAll("img"),function(l){ot(t.filter)?t.filter.call(r,l)&&n.push(l):r.getImageURL(l)&&n.push(l)}),!n.length)return this;if(this.images=n,this.length=n.length,this.ready){var a=[];if(ct(this.items,function(l,c){var h=l.querySelector("img"),f=n[c];f&&h?(f.src!==h.src||f.alt!==h.alt)&&a.push(c):a.push(c)}),ui(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var o=a.indexOf(this.index);if(o>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-o,this.length-1),0));else{var s=this.items[this.index];Ne(s,Yn),s.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var r=this.element,e=this.options;return r[Xe]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),e.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):e.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),e.inline||lt(r,Tr,this.onStart),r[Xe]=void 0,this):this}},vp={getImageURL:function(r){var e=this.options.url;return _n(e)?e=r.getAttribute(e):ot(e)?e=e.call(this,r):e="",e},enforceFocus:function(){var r=this;this.clearEnforceFocus(),Ve(document,Bl,this.onFocusin=function(e){var t=r.viewer,i=e.target;if(!(i===document||i===t||t.contains(i))){for(;i;){if(i.getAttribute("tabindex")!==null||i.getAttribute("aria-modal")==="true")return;i=i.parentElement}t.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(lt(document,Bl,this.onFocusin),this.onFocusin=null)},open:function(){var r=this.body;Ne(r,Rl),this.scrollbarWidth>0&&(r.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px"))},close:function(){var r=this.body;tt(r,Rl),this.scrollbarWidth>0&&(r.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var r=this.element,e=this.options,t=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,e.focus&&(t.focus(),this.enforceFocus()),ot(e.shown)&&Ve(r,zl,e.shown,{once:!0}),At(r,zl)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var r=this.element,e=this.options,t=this.viewer;e.fucus&&this.clearEnforceFocus(),this.close(),this.unbind(),Ne(t,tr),t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.removeAttribute("aria-modal"),t.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.hiding=!1,this.destroyed||(ot(e.hidden)&&Ve(r,Gl,e.hidden,{once:!0}),At(r,Gl,null,{cancelable:!1}))},requestFullscreen:function(r){var e=this.element.ownerDocument;if(this.fulled&&!(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)){var t=e.documentElement;t.requestFullscreen?Rr(r)?t.requestFullscreen(r):t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()}},exitFullscreen:function(){var r=this.element.ownerDocument;this.fulled&&(r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement)&&(r.exitFullscreen?r.exitFullscreen():r.webkitExitFullscreen?r.webkitExitFullscreen():r.mozCancelFullScreen?r.mozCancelFullScreen():r.msExitFullscreen&&r.msExitFullscreen())},change:function(r){var e=this.options,t=this.pointers,i=t[Object.keys(t)[0]];if(i){var n=i.endX-i.startX,a=i.endY-i.startY;switch(this.action){case Hn:(n!==0||a!==0)&&(this.pointerMoved=!0,this.move(n,a,r));break;case gn:this.zoom(up(t),!1,null,r);break;case Ml:{this.action="switched";var o=Math.abs(n);o>1&&o>Math.abs(a)&&(this.pointers={},n>1?this.prev(e.loop):n<-1&&this.next(e.loop));break}}ct(t,function(s){s.startX=s.endX,s.startY=s.endY})}},isSwitchable:function(){var r=this.imageData,e=this.viewerData;return this.length>1&&r.x>=0&&r.y>=0&&r.width<=e.width&&r.height<=e.height}},Ap=Ci.Viewer,_p=(function(r){return function(){return r+=1,r}})(-1),_s=(function(){function r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Gd(this,r),!e||e.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=e,this.options=jt({},Tl,Rr(t)&&t),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=_p(),this.init()}return Jd(r,[{key:"init",value:function(){var e=this,t=this.element,i=this.options;if(!t[Xe]){t[Xe]=this,i.focus&&!i.keyboard&&(i.focus=!1);var n=t.localName==="img",a=[];if(ct(n?[t]:t.querySelectorAll("img"),function(l){ot(i.filter)?i.filter.call(e,l)&&a.push(l):e.getImageURL(l)&&a.push(l)}),this.isImg=n,this.length=a.length,this.images=a,this.initBody(),Mr(document.createElement(Xe).style.transition)&&(i.transition=!1),i.inline){var o=0,s=function(){if(o+=1,o===e.length){var l;e.initializing=!1,e.delaying={abort:function(){clearTimeout(l)}},l=setTimeout(function(){e.delaying=!1,e.build()},0)}};this.initializing={abort:function(){ct(a,function(l){l.complete||(lt(l,ri,s),lt(l,ir,s))})}},ct(a,function(l){if(l.complete)s();else{var c,h;Ve(l,ri,c=function(){lt(l,ir,h),s()},{once:!0}),Ve(l,ir,h=function(){lt(l,ri,c),s()},{once:!0})}})}else Ve(t,Tr,this.onStart=function(l){var c=l.target;c.localName==="img"&&(!ot(i.filter)||i.filter.call(e,c))&&e.view(e.images.indexOf(c))})}}},{key:"build",value:function(){if(!this.ready){var e=this.element,t=this.options,i=e.parentNode,n=document.createElement("div");n.innerHTML=Yd;var a=n.querySelector(".".concat(Xe,"-container")),o=a.querySelector(".".concat(Xe,"-title")),s=a.querySelector(".".concat(Xe,"-toolbar")),l=a.querySelector(".".concat(Xe,"-navbar")),c=a.querySelector(".".concat(Xe,"-button")),h=a.querySelector(".".concat(Xe,"-canvas"));if(this.parent=i,this.viewer=a,this.title=o,this.toolbar=s,this.navbar=l,this.button=c,this.canvas=h,this.footer=a.querySelector(".".concat(Xe,"-footer")),this.tooltipBox=a.querySelector(".".concat(Xe,"-tooltip")),this.player=a.querySelector(".".concat(Xe,"-player")),this.list=a.querySelector(".".concat(Xe,"-list")),a.id="".concat(Xe).concat(this.id),o.id="".concat(Xe,"Title").concat(this.id),Ne(o,t.title?$n(Array.isArray(t.title)?t.title[0]:t.title):tr),Ne(l,t.navbar?$n(t.navbar):tr),yn(c,tr,!t.button),t.keyboard&&c.setAttribute("tabindex",0),t.backdrop&&(Ne(a,"".concat(Xe,"-backdrop")),!t.inline&&t.backdrop!=="static"&&vs(h,jn,"hide")),_n(t.className)&&t.className&&t.className.split(ms).forEach(function(v){Ne(a,v)}),t.toolbar){var f=document.createElement("ul"),p=Rr(t.toolbar),m=Kn.slice(0,3),g=Kn.slice(7,9),y=Kn.slice(9);p||Ne(s,$n(t.toolbar)),ct(p?t.toolbar:Kn,function(v,S){var _=p&&Rr(v),b=p?gs(S):v,x=_&&!Mr(v.show)?v.show:v;if(!(!x||!t.zoomable&&m.indexOf(b)!==-1||!t.rotatable&&g.indexOf(b)!==-1||!t.scalable&&y.indexOf(b)!==-1)){var w=_&&!Mr(v.size)?v.size:v,U=_&&!Mr(v.click)?v.click:v,E=document.createElement("li");t.keyboard&&E.setAttribute("tabindex",0),E.setAttribute("role","button"),Ne(E,"".concat(Xe,"-").concat(b)),ot(U)||vs(E,jn,b),mt(x)&&Ne(E,$n(x)),["small","large"].indexOf(w)!==-1?Ne(E,"".concat(Xe,"-").concat(w)):b==="play"&&Ne(E,"".concat(Xe,"-large")),ot(U)&&Ve(E,Tr,U),f.appendChild(E)}}),s.appendChild(f)}else Ne(s,tr);if(!t.rotatable){var d=s.querySelectorAll('li[class*="rotate"]');Ne(d,vn),ct(d,function(v){s.appendChild(v)})}if(t.inline)Ne(c,jd),ui(a,{zIndex:t.zIndexInline}),window.getComputedStyle(i).position==="static"&&ui(i,{position:"relative"}),i.insertBefore(a,e.nextSibling);else{Ne(c,Xd),Ne(a,ps),Ne(a,Xn),Ne(a,tr),ui(a,{zIndex:t.zIndex});var u=t.container;_n(u)&&(u=e.ownerDocument.querySelector(u)),u||(u=this.body),u.appendChild(a)}if(t.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,ot(t.ready)&&Ve(e,Vl,t.ready,{once:!0}),At(e,Vl)===!1){this.ready=!1;return}this.ready&&t.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=Ap,r}},{key:"setDefaults",value:function(e){jt(Tl,Rr(e)&&e)}}])})();jt(_s.prototype,pp,fp,mp,gp,vp);const yp=`/*!
 * Viewer.js v1.11.7
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-11-24T04:32:14.526Z
 */.viewer-zoom-in:before,.viewer-zoom-out:before,.viewer-one-to-one:before,.viewer-reset:before,.viewer-prev:before,.viewer-play:before,.viewer-next:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen:before,.viewer-fullscreen-exit:before,.viewer-close:before{background-image:url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 560 40%22%3E%3Cpath fill%3D%22%23fff%22 d%3D%22M49.6 17.9h20.2v3.9H49.6zm123.1 2 10.9-11 2.7 2.8-8.2 8.2 8.2 8.2-2.7 2.7-10.9-10.9zm94 0-10.8-11-2.7 2.8 8.1 8.2-8.1 8.2 2.7 2.7 10.8-10.9zM212 9.3l20.1 10.6L212 30.5V9.3zm161.5 4.6-7.2 6 7.2 5.9v-4h12.4v4l7.3-5.9-7.3-6v4h-12.4v-4zm40.2 12.3 5.9 7.2 5.9-7.2h-4V13.6h4l-5.9-7.3-5.9 7.3h4v12.6h-4zm35.9-16.5h6.3v2h-4.3V16h-2V9.7Zm14 0h6.2V16h-2v-4.3h-4.2v-2Zm6.2 14V30h-6.2v-2h4.2v-4.3h2Zm-14 6.3h-6.2v-6.3h2v4.4h4.3v2Zm-438 .1v-8.3H9.6v-3.9h8.2V9.7h3.9v8.2h8.1v3.9h-8.1v8.3h-3.9zM93.6 9.7h-5.8v3.9h2V30h3.8V9.7zm16.1 0h-5.8v3.9h1.9V30h3.9V9.7zm-11.9 4.1h3.9v3.9h-3.9zm0 8.2h3.9v3.9h-3.9zm244.6-11.7 7.2 5.9-7.2 6v-3.6c-5.4-.4-7.8.8-8.7 2.8-.8 1.7-1.8 4.9 2.8 8.2-6.3-2-7.5-6.9-6-11.3 1.6-4.4 8-5 11.9-4.9v-3.1Zm147.2 13.4h6.3V30h-2v-4.3h-4.3v-2zm14 6.3v-6.3h6.2v2h-4.3V30h-1.9zm6.2-14h-6.2V9.7h1.9V14h4.3v2zm-13.9 0h-6.3v-2h4.3V9.7h2V16zm33.3 12.5 8.6-8.6-8.6-8.7 1.9-1.9 8.6 8.7 8.6-8.7 1.9 1.9-8.6 8.7 8.6 8.6-1.9 2-8.6-8.7-8.6 8.7-1.9-2zM297 10.3l-7.1 5.9 7.2 6v-3.6c5.3-.4 7.7.8 8.7 2.8.8 1.7 1.7 4.9-2.9 8.2 6.3-2 7.5-6.9 6-11.3-1.6-4.4-7.9-5-11.8-4.9v-3.1Zm-157.3-.6c2.3 0 4.4.7 6 2l2.5-3 1.9 9.2h-9.3l2.6-3.1a6.2 6.2 0 0 0-9.9 5.1c0 3.4 2.8 6.3 6.2 6.3 2.8 0 5.1-1.9 6-4.4h4c-1 4.7-5 8.3-10 8.3a10 10 0 0 1-10-10.2 10 10 0 0 1 10-10.2Z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat;background-size:280px;color:transparent;display:block;font-size:0;height:20px;line-height:0;width:20px}.viewer-zoom-in:before{background-position:0 0;content:"Zoom In"}.viewer-zoom-out:before{background-position:-20px 0;content:"Zoom Out"}.viewer-one-to-one:before{background-position:-40px 0;content:"One to One"}.viewer-reset:before{background-position:-60px 0;content:"Reset"}.viewer-prev:before{background-position:-80px 0;content:"Previous"}.viewer-play:before{background-position:-100px 0;content:"Play"}.viewer-next:before{background-position:-120px 0;content:"Next"}.viewer-rotate-left:before{background-position:-140px 0;content:"Rotate Left"}.viewer-rotate-right:before{background-position:-160px 0;content:"Rotate Right"}.viewer-flip-horizontal:before{background-position:-180px 0;content:"Flip Horizontal"}.viewer-flip-vertical:before{background-position:-200px 0;content:"Flip Vertical"}.viewer-fullscreen:before{background-position:-220px 0;content:"Enter Full Screen"}.viewer-fullscreen-exit:before{background-position:-240px 0;content:"Exit Full Screen"}.viewer-close:before{background-position:-260px 0;content:"Close"}.viewer-container{bottom:0;direction:ltr;font-size:0;left:0;line-height:0;overflow:hidden;position:absolute;right:0;-webkit-tap-highlight-color:transparent;top:0;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.viewer-container::-moz-selection,.viewer-container *::-moz-selection{background-color:transparent}.viewer-container::selection,.viewer-container *::selection{background-color:transparent}.viewer-container:focus{outline:0}.viewer-container img{display:block;height:auto;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.viewer-canvas{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.viewer-canvas>img{height:auto;margin:15px auto;max-width:90%!important;width:auto}.viewer-footer{bottom:0;left:0;overflow:hidden;position:absolute;right:0;text-align:center}.viewer-navbar{background-color:#00000080;overflow:hidden}.viewer-list{box-sizing:content-box;height:50px;margin:0;overflow:hidden;padding:1px 0}.viewer-list>li{color:transparent;cursor:pointer;float:left;font-size:0;height:50px;line-height:0;opacity:.5;overflow:hidden;transition:opacity .15s;width:30px}.viewer-list>li:focus,.viewer-list>li:hover{opacity:.75}.viewer-list>li:focus{outline:0}.viewer-list>li+li{margin-left:1px}.viewer-list>.viewer-loading{position:relative}.viewer-list>.viewer-loading:after{border-width:2px;height:20px;margin-left:-10px;margin-top:-10px;width:20px}.viewer-list>.viewer-active,.viewer-list>.viewer-active:focus,.viewer-list>.viewer-active:hover{opacity:1}.viewer-player{background-color:#000;bottom:0;cursor:none;display:none;left:0;position:absolute;right:0;top:0;z-index:1}.viewer-player>img{left:0;position:absolute;top:0}.viewer-toolbar>ul{display:inline-block;margin:0 auto 5px;overflow:hidden;padding:6px 3px}.viewer-toolbar>ul>li{background-color:#00000080;border-radius:50%;cursor:pointer;float:left;height:24px;overflow:hidden;transition:background-color .15s;width:24px}.viewer-toolbar>ul>li:focus,.viewer-toolbar>ul>li:hover{background-color:#000c}.viewer-toolbar>ul>li:focus{box-shadow:0 0 3px #fff;outline:0;position:relative;z-index:1}.viewer-toolbar>ul>li:before{margin:2px}.viewer-toolbar>ul>li+li{margin-left:1px}.viewer-toolbar>ul>.viewer-small{height:18px;margin-bottom:3px;margin-top:3px;width:18px}.viewer-toolbar>ul>.viewer-small:before{margin:-1px}.viewer-toolbar>ul>.viewer-large{height:30px;margin-bottom:-3px;margin-top:-3px;width:30px}.viewer-toolbar>ul>.viewer-large:before{margin:5px}.viewer-tooltip{background-color:#000c;border-radius:10px;color:#fff;display:none;font-size:12px;height:20px;left:50%;line-height:20px;margin-left:-25px;margin-top:-10px;position:absolute;text-align:center;top:50%;width:50px}.viewer-title{color:#ccc;display:inline-block;font-size:12px;line-height:1.2;margin:5px 5%;max-width:90%;min-height:14px;opacity:.8;overflow:hidden;text-overflow:ellipsis;transition:opacity .15s;white-space:nowrap}.viewer-title:hover{opacity:1}.viewer-button{-webkit-app-region:no-drag;background-color:#00000080;border-radius:50%;cursor:pointer;height:80px;overflow:hidden;position:absolute;right:-40px;top:-40px;transition:background-color .15s;width:80px}.viewer-button:focus,.viewer-button:hover{background-color:#000c}.viewer-button:focus{box-shadow:0 0 3px #fff;outline:0}.viewer-button:before{bottom:15px;left:15px;position:absolute}.viewer-fixed{position:fixed}.viewer-open{overflow:hidden}.viewer-show{display:block}.viewer-hide{display:none}.viewer-backdrop{background-color:#00000080}.viewer-invisible{visibility:hidden}.viewer-move{cursor:move;cursor:grab}.viewer-fade{opacity:0}.viewer-in{opacity:1}.viewer-transition{transition:all .3s}@keyframes viewer-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.viewer-loading:after{animation:viewer-spinner 1s linear infinite;border:4px solid rgba(255,255,255,.1);border-left-color:#ffffff80;border-radius:50%;content:"";display:inline-block;height:40px;left:50%;margin-left:-20px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:1}@media(max-width:767px){.viewer-hide-xs-down{display:none}}@media(max-width:991px){.viewer-hide-sm-down{display:none}}@media(max-width:1199px){.viewer-hide-md-down{display:none}}`;class Ep extends wr{constructor(){super(...arguments),Ie(this,"viewer"),Ie(this,"container"),Ie(this,"imageUrl","")}doOpen(e){this.imageUrl=e,setTimeout(()=>{if(this.container=this.query("#imageContainer")??void 0,!this.container)return;const t=document.createElement("img");t.src=this.imageUrl,t.style.display="none",this.container.appendChild(t),this.viewer=new _s(t,{inline:!0,container:this.container,toolbar:{zoomIn:!0,zoomOut:!0,oneToOne:!0,reset:!0,prev:!1,play:!1,next:!1,rotateLeft:!0,rotateRight:!0,flipHorizontal:!0,flipVertical:!0},navbar:!1,title:!1,keyboard:!0,backdrop:!1,button:!1,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!1,ready:()=>{this.addNavigationListeners()}})},0)}doClose(){this.viewer&&(this.viewer.destroy(),this.viewer=void 0),this.imageUrl=""}getViewerContent(){return`
      <div id="imageContainer">
        ${this.isLoading?'<div class="loading">Loading...</div>':""}
      </div>
    `}getCustomStyles(){return this.css`
      ${yp}
      
      :host {
        --cc-viewer-z-index-each: 1000;
      }
      
      #imageContainer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: var(--cc-viewer-z-index-each, 1000);
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      /* ViewerJS inline mode adjustments */
      .viewer-container {
        width: 100% !important;
        height: 100% !important;
        position: relative !important;
      }
      
      .viewer-canvas {
        width: 100% !important;
        height: 100% !important;
      }
      
      /* Hide the original image */
      #imageContainer > img {
        display: none !important;
      }
      
      /* Ensure viewer takes full space */
      .viewer-container.viewer-inline {
        width: 100% !important;
        height: 100% !important;
      }
      
      ${this.getNavigationStyles()}
      
      /* Override viewerjs styles for navigation */
      :host ::ng-deep .viewer-container {
        position: relative;
      }
    `}onAfterRender(){if(!this.isShow||!this.imageUrl||this.viewer||(this.container=this.query("#imageContainer"),!this.container))return;const e=document.createElement("img");e.src=this.imageUrl,e.style.display="none",this.container.appendChild(e),this.viewer=new _s(e,{inline:!0,container:this.container,toolbar:{zoomIn:!0,zoomOut:!0,oneToOne:!0,reset:!0,prev:!1,play:!1,next:!1,rotateLeft:!0,rotateRight:!0,flipHorizontal:!0,flipVertical:!0},navbar:!1,title:!1,keyboard:!0,backdrop:!1,button:!1,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!1,ready:()=>{this.isLoading=!1}})}}customElements.get("cc-viewer-image")||customElements.define("cc-viewer-image",Ep);class Sp extends wr{constructor(){super(...arguments),Ie(this,"imgUrl","")}static get observedAttributes(){return["show"]}attributeChangedCallback(e,t,i){e==="show"&&(this.isShow=i==="true"),super.attributeChangedCallback(e,t,i)}doOpen(e){this.imgUrl=e}doClose(){const e=this.query(".iframe");e&&(e.srcdoc=""),this.imgUrl=""}getViewerContent(){return'<iframe class="iframe"></iframe>'}getCustomStyles(){return`
      .iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    `}onAfterRender(){if(this.imgUrl&&this.isShow){const e=this.query(".iframe");if(e){const t=`
          <!DOCTYPE html>
          <html>
            <head>
              <title>A-Frame Panorama</title>
              <style>
              html,body {
                width:100%;
                height:100vh;
                overflow: hidden;
              }
              .a-enter-vr, .a-enter-ar {
                display: none;
              }
              </style>
              <script src="https://aframe.io/releases/1.4.0/aframe.min.js"><\/script>
            </head>
            <body>
              <a-scene embedded xr-mode-ui="enabled: false; XRMode: false;">
                <a-sky src="${this.imgUrl}" rotation="0 -90 0"></a-sky>
                <a-entity camera look-controls="reverseMouseDrag: true"></a-entity>
              </a-scene>
            </body>
          </html>
        `;e.srcdoc=t}}}}customElements.get("cc-viewer-panorama")||customElements.define("cc-viewer-panorama",Sp);class xp extends wr{constructor(){super(...arguments),Ie(this,"videoUrl","")}static get observedAttributes(){return["show"]}attributeChangedCallback(e,t,i){e==="show"&&(this.isShow=i==="true"),super.attributeChangedCallback(e,t,i)}doOpen(e){const t=this.extractYouTubeId(e);t?this.videoUrl=`https://www.youtube.com/embed/${t}`:this.videoUrl=e}extractYouTubeId(e){const t=[/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,/youtube\.com\/watch\?.*v=([^&\n?#]+)/];for(const i of t){const n=e.match(i);if(n)return n[1]}return null}doClose(){const e=this.query(".iframe");e&&(e.src=""),this.videoUrl=""}getViewerContent(){return`<iframe class="iframe" src="${this.videoUrl}" allowfullscreen></iframe>`}getCustomStyles(){return`
      .iframe {
        position: relative;
        width: 100%;
        height: 100%;
        border: 0;
      }
    `}}customElements.get("cc-viewer-youtube")||customElements.define("cc-viewer-youtube",xp);class wp extends wr{constructor(){super(...arguments),Ie(this,"videoUrl",""),Ie(this,"fitToContainer",!1)}static get observedAttributes(){return["show","fit-to-container"]}attributeChangedCallback(e,t,i){e==="show"?this.isShow=i==="true":e==="fit-to-container"&&(this.fitToContainer=i==="true"),super.attributeChangedCallback(e,t,i)}doOpen(e){this.videoUrl=e}doClose(){const e=this.query("video");e&&"pause"in e&&e.pause(),this.videoUrl=""}getViewerContent(){return`
      <div class="video-container">
        ${this.videoUrl?`
          <video
            src="${this.videoUrl}"
            controls
            controlsList="nodownload"
            class="${this.fitToContainer?"fit-to-container":""}"
          >
            Your browser does not support the video tag.
          </video>
        `:'<div class="video-error">No video URL provided</div>'}
      </div>
    `}getCustomStyles(){return`
      .video-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: #000;
      }
      
      video {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        outline: none;
      }
      
      video.fit-to-container {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
      .video-error {
        color: #fff;
        text-align: center;
        padding: 20px;
      }
    `}onAfterRender(){const e=this.query("video");e&&e.addEventListener("error",t=>this.handleVideoError(t))}handleVideoError(e){const t=this.query(".video-container");t&&(t.innerHTML=`
        <div class="video-error">
          Failed to load video: ${this.videoUrl}
        </div>
      `)}}customElements.get("cc-viewer-video")||customElements.define("cc-viewer-video",wp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ys="171",Qr={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bp=0,nc=1,Cp=2,ac=1,Up=2,Ui=3,Ti=0,Ot=1,Mi=2,Wi=0,Dr=1,sc=2,oc=3,lc=4,Tp=5,rr=100,Mp=101,Fp=102,Rp=103,Ip=104,Bp=200,Qp=201,Lp=202,Dp=203,Es=204,Ss=205,Np=206,kp=207,Pp=208,Vp=209,Op=210,zp=211,Wp=212,Gp=213,Jp=214,xs=0,ws=1,bs=2,Nr=3,Cs=4,Us=5,Ts=6,Ms=7,Fs=0,Zp=1,Hp=2,Gi=0,Yp=1,Xp=2,jp=3,Kp=4,qp=5,$p=6,ef=7,cc=300,kr=301,Pr=302,Rs=303,Is=304,ta=306,ia=1e3,nr=1001,Bs=1002,di=1003,tf=1004,ra=1005,Ei=1006,Qs=1007,ar=1008,Fi=1009,hc=1010,uc=1011,En=1012,Ls=1013,sr=1014,Ri=1015,Sn=1016,Ds=1017,Ns=1018,Vr=1020,dc=35902,pc=1021,fc=1022,pi=1023,mc=1024,gc=1025,Or=1026,zr=1027,vc=1028,ks=1029,Ac=1030,Ps=1031,Vs=1033,na=33776,aa=33777,sa=33778,oa=33779,Os=35840,zs=35841,Ws=35842,Gs=35843,Js=36196,Zs=37492,Hs=37496,Ys=37808,Xs=37809,js=37810,Ks=37811,qs=37812,$s=37813,eo=37814,to=37815,io=37816,ro=37817,no=37818,ao=37819,so=37820,oo=37821,la=36492,lo=36494,co=36495,_c=36283,ho=36284,uo=36285,po=36286,rf=3200,nf=3201,yc=0,af=1,Ji="",Mt="srgb",Wr="srgb-linear",ca="linear",rt="srgb",Gr=7680,Ec=519,sf=512,of=513,lf=514,Sc=515,cf=516,hf=517,uf=518,df=519,xc=35044,wc="300 es",Ii=2e3,ha=2001;class or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,fo=180/Math.PI;function xn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function pf(r,e){return(r%e+e)%e}function mo(r,e,t){return(1-t)*r+t*e}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ff={DEG2RAD:ua};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,n,a,o,s,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,c)}set(e,t,i,n,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],m=i[5],g=i[8],y=n[0],d=n[3],u=n[6],v=n[1],S=n[4],_=n[7],b=n[2],x=n[5],w=n[8];return a[0]=o*y+s*v+l*b,a[3]=o*d+s*S+l*x,a[6]=o*u+s*_+l*w,a[1]=c*y+h*v+f*b,a[4]=c*d+h*S+f*x,a[7]=c*u+h*_+f*w,a[2]=p*y+m*v+g*b,a[5]=p*d+m*S+g*x,a[8]=p*u+m*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-i*a*h+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],f=h*o-s*c,p=s*l-h*a,m=c*a-o*l,g=t*f+i*p+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(n*c-h*i)*y,e[2]=(s*i-n*o)*y,e[3]=p*y,e[4]=(h*t-n*l)*y,e[5]=(n*a-s*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new Ge;function bc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function bn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mf(){const r=bn("canvas");return r.style.display="block",r}const Cc={};function Jr(r){r in Cc||(Cc[r]=!0,console.warn(r))}function gf(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function vf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Af(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Uc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _f(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(n,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===rt&&(n.r=Bi(n.r),n.g=Bi(n.g),n.b=Bi(n.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(n.r=Zr(n.r),n.g=Zr(n.g),n.b=Zr(n.b))),n},fromWorkingColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},toWorkingColorSpace:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?ca:this.spaces[n].transfer},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,o){return n.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Wr]:{primaries:e,whitePoint:i,transfer:ca,toXYZ:Uc,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Uc,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),r}const Ke=_f();function Bi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hr;class yf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=bn("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Bi(a[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ef=0;class Mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(vo(n[o].image)):a.push(vo(n[o]))}else a=vo(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function vo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;class Qt extends or{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=nr,n=nr,a=Ei,o=ar,s=pi,l=Fi,c=Qt.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=xn(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null,Qt.DEFAULT_MAPPING=cc,Qt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,n=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],f=o[5],p=o[9],m=o[2],g=o[6],y=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(p+g)<.1&&Math.abs(s+f+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(s+1)/2,v=(f+1)/2,S=(y+1)/2,_=(l+h)/4,b=(c+m)/4,x=(p+g)/4;return u>v&&u>S?u<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(u),n=_/i,a=b/i):v>S?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=_/n,a=x/n):S<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(S),i=b/a,n=x/a),this.set(i,n,a,t),this}let d=Math.sqrt((g-p)*(g-p)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(d)<.001&&(d=1),this.x=(g-p)/d,this.y=(c-m)/d,this.z=(h-l)/d,this.w=Math.acos((s+f+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends or{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Qt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends xf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fc extends Qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wf extends Qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,o,s){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3];const p=a[o+0],m=a[o+1],g=a[o+2],y=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(s===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(f!==y||l!==p||c!==m||h!==g){let d=1-s;const u=l*p+c*m+h*g+f*y,v=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const b=Math.sqrt(S),x=Math.atan2(b,u*v);d=Math.sin(d*x)/b,s=Math.sin(s*x)/b}const _=s*v;if(l=l*d+p*_,c=c*d+m*_,h=h*d+g*_,f=f*d+y*_,d===1-s){const b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=a[o],p=a[o+1],m=a[o+2],g=a[o+3];return e[t]=s*g+h*f+l*m-c*p,e[t+1]=l*g+h*p+c*f-s*m,e[t+2]=c*g+h*m+s*p-l*f,e[t+3]=h*g-s*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(n/2),f=s(a/2),p=l(i/2),m=l(n/2),g=l(a/2);switch(o){case"XYZ":this._x=p*h*f+c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f-p*m*g;break;case"YXZ":this._x=p*h*f+c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f+p*m*g;break;case"ZXY":this._x=p*h*f-c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f-p*m*g;break;case"ZYX":this._x=p*h*f-c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f+p*m*g;break;case"YZX":this._x=p*h*f+c*m*g,this._y=c*m*f+p*h*g,this._z=c*h*g-p*m*f,this._w=c*h*f-p*m*g;break;case"XZY":this._x=p*h*f-c*m*g,this._y=c*m*f-p*h*g,this._z=c*h*g+p*m*f,this._w=c*h*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=i+s+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(i>s&&i>f){const m=2*Math.sqrt(1+i-s-f);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-i-f);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*s+n*c-a*l,this._y=n*h+o*l+a*s-i*c,this._z=a*h+o*c+i*l-n*s,this._w=o*h-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),h=2*(s*t-a*n),f=2*(a*i-o*t);return this.x=t+l*c+o*f-s*h,this.y=i+l*h+s*c-a*f,this.z=n+l*f+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new Y,Rc=new cr;class Yr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(a,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cn),pa.subVectors(this.max,Cn),Xr.subVectors(e.a,Cn),jr.subVectors(e.b,Cn),Kr.subVectors(e.c,Cn),Zi.subVectors(jr,Xr),Hi.subVectors(Kr,jr),hr.subVectors(Xr,Kr);let t=[0,-Zi.z,Zi.y,0,-Hi.z,Hi.y,0,-hr.z,hr.y,Zi.z,0,-Zi.x,Hi.z,0,-Hi.x,hr.z,0,-hr.x,-Zi.y,Zi.x,0,-Hi.y,Hi.x,0,-hr.y,hr.x,0];return!_o(t,Xr,jr,Kr,pa)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,Xr,jr,Kr,pa))?!1:(fa.crossVectors(Zi,Hi),t=[fa.x,fa.y,fa.z],_o(t,Xr,jr,Kr,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],fi=new Y,da=new Yr,Xr=new Y,jr=new Y,Kr=new Y,Zi=new Y,Hi=new Y,hr=new Y,Cn=new Y,pa=new Y,fa=new Y,ur=new Y;function _o(r,e,t,i,n){for(let a=0,o=r.length-3;a<=o;a+=3){ur.fromArray(r,a);const s=n.x*Math.abs(ur.x)+n.y*Math.abs(ur.y)+n.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),h=i.dot(ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const bf=new Yr,Un=new Y,yo=new Y;class Tn{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bf.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Un.subVectors(e,this.center);const t=Un.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Un,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Un.copy(e.center).add(yo)),this.expandByPoint(Un.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new Y,Eo=new Y,ma=new Y,Yi=new Y,So=new Y,ga=new Y,xo=new Y;class va{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Eo.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Eo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ma),s=Yi.dot(this.direction),l=-Yi.dot(ma),c=Yi.lengthSq(),h=Math.abs(1-o*o);let f,p,m,g;if(h>0)if(f=o*l-s,p=o*s-l,g=a*h,f>=0)if(p>=-g)if(p<=g){const y=1/h;f*=y,p*=y,m=f*(f+o*p+2*s)+p*(o*f+p+2*l)+c}else p=a,f=Math.max(0,-(o*p+s)),m=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(o*p+s)),m=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-o*a+s)),p=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+c):(f=Math.max(0,-(o*a+s)),p=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+p*(p+2*l)+c);else p=o>0?-a:a,f=Math.max(0,-(o*p+s)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Eo).addScaledVector(ma,p),m}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),n=Li.dot(Li)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,n=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,n=(e.min.x-p.x)*c),h>=0?(a=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(s=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,n,a){So.subVectors(t,e),ga.subVectors(i,e),xo.crossVectors(So,ga);let o=this.direction.dot(xo),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=s*this.direction.dot(ga.crossVectors(Yi,ga));if(l<0)return null;const c=s*this.direction.dot(So.cross(Yi));if(c<0||l+c>o)return null;const h=-s*Yi.dot(xo);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,n,a,o,s,l,c,h,f,p,m,g,y,d){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,c,h,f,p,m,g,y,d)}set(e,t,i,n,a,o,s,l,c,h,f,p,m,g,y,d){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=n,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=g,u[11]=y,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/qr.setFromMatrixColumn(e,0).length(),a=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=o*h,m=o*f,g=s*h,y=s*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=p-y*c,t[9]=-s*l,t[2]=y-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,m=l*f,g=c*h,y=c*f;t[0]=p+y*s,t[4]=g*s-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-s,t[2]=m*s-g,t[6]=y+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,m=l*f,g=c*h,y=c*f;t[0]=p-y*s,t[4]=-o*f,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*h,t[9]=y-p*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,m=o*f,g=s*h,y=s*f;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+y,t[1]=l*f,t[5]=y*c+p,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,g=s*l,y=s*c;t[0]=l*h,t[4]=y-p*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*f+g,t[10]=p-y*f}else if(e.order==="XZY"){const p=o*l,m=o*c,g=s*l,y=s*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+y,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=s*h,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cf,e,Uf)}lookAt(e,t,i){const n=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Xi.crossVectors(i,Kt),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Xi.crossVectors(i,Kt)),Xi.normalize(),Aa.crossVectors(Kt,Xi),n[0]=Xi.x,n[4]=Aa.x,n[8]=Kt.x,n[1]=Xi.y,n[5]=Aa.y,n[9]=Kt.y,n[2]=Xi.z,n[6]=Aa.z,n[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],m=i[13],g=i[2],y=i[6],d=i[10],u=i[14],v=i[3],S=i[7],_=i[11],b=i[15],x=n[0],w=n[4],U=n[8],E=n[12],A=n[1],C=n[5],T=n[9],R=n[13],B=n[2],L=n[6],N=n[10],k=n[14],M=n[3],I=n[7],P=n[11],K=n[15];return a[0]=o*x+s*A+l*B+c*M,a[4]=o*w+s*C+l*L+c*I,a[8]=o*U+s*T+l*N+c*P,a[12]=o*E+s*R+l*k+c*K,a[1]=h*x+f*A+p*B+m*M,a[5]=h*w+f*C+p*L+m*I,a[9]=h*U+f*T+p*N+m*P,a[13]=h*E+f*R+p*k+m*K,a[2]=g*x+y*A+d*B+u*M,a[6]=g*w+y*C+d*L+u*I,a[10]=g*U+y*T+d*N+u*P,a[14]=g*E+y*R+d*k+u*K,a[3]=v*x+S*A+_*B+b*M,a[7]=v*w+S*C+_*L+b*I,a[11]=v*U+S*T+_*N+b*P,a[15]=v*E+S*R+_*k+b*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],m=e[14],g=e[3],y=e[7],d=e[11],u=e[15];return g*(+a*l*f-n*c*f-a*s*p+i*c*p+n*s*m-i*l*m)+y*(+t*l*m-t*c*p+a*o*p-n*o*m+n*c*h-a*l*h)+d*(+t*c*f-t*s*m-a*o*f+i*o*m+a*s*h-i*c*h)+u*(-n*s*h-t*l*f+t*s*p+n*o*f-i*o*p+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],m=e[11],g=e[12],y=e[13],d=e[14],u=e[15],v=f*d*c-y*p*c+y*l*m-s*d*m-f*l*u+s*p*u,S=g*p*c-h*d*c-g*l*m+o*d*m+h*l*u-o*p*u,_=h*y*c-g*f*c+g*s*m-o*y*m-h*s*u+o*f*u,b=g*f*l-h*y*l-g*s*p+o*y*p+h*s*d-o*f*d,x=t*v+i*S+n*_+a*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=v*w,e[1]=(y*p*a-f*d*a-y*n*m+i*d*m+f*n*u-i*p*u)*w,e[2]=(s*d*a-y*l*a+y*n*c-i*d*c-s*n*u+i*l*u)*w,e[3]=(f*l*a-s*p*a-f*n*c+i*p*c+s*n*m-i*l*m)*w,e[4]=S*w,e[5]=(h*d*a-g*p*a+g*n*m-t*d*m-h*n*u+t*p*u)*w,e[6]=(g*l*a-o*d*a-g*n*c+t*d*c+o*n*u-t*l*u)*w,e[7]=(o*p*a-h*l*a+h*n*c-t*p*c-o*n*m+t*l*m)*w,e[8]=_*w,e[9]=(g*f*a-h*y*a-g*i*m+t*y*m+h*i*u-t*f*u)*w,e[10]=(o*y*a-g*s*a+g*i*c-t*y*c-o*i*u+t*s*u)*w,e[11]=(h*s*a-o*f*a-h*i*c+t*f*c+o*i*m-t*s*m)*w,e[12]=b*w,e[13]=(h*y*n-g*f*n+g*i*p-t*y*p-h*i*d+t*f*d)*w,e[14]=(g*s*n-o*y*n-g*i*l+t*y*l+o*i*d-t*s*d)*w,e[15]=(o*f*n-h*s*n+h*i*l-t*f*l-o*i*p+t*s*p)*w,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,h*s+i,h*l-n*o,0,c*l-n*s,h*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,f=s+s,p=a*c,m=a*h,g=a*f,y=o*h,d=o*f,u=s*f,v=l*c,S=l*h,_=l*f,b=i.x,x=i.y,w=i.z;return n[0]=(1-(y+u))*b,n[1]=(m+_)*b,n[2]=(g-S)*b,n[3]=0,n[4]=(m-_)*x,n[5]=(1-(p+u))*x,n[6]=(d+v)*x,n[7]=0,n[8]=(g+S)*w,n[9]=(d-v)*w,n[10]=(1-(p+y))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=qr.set(n[0],n[1],n[2]).length();const o=qr.set(n[4],n[5],n[6]).length(),s=qr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],mi.copy(this);const l=1/a,c=1/o,h=1/s;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=c,mi.elements[5]*=c,mi.elements[6]*=c,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,n,a,o,s=Ii){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),f=(t+e)/(t-e),p=(i+n)/(i-n);let m,g;if(s===Ii)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===ha)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,o,s=Ii){const l=this.elements,c=1/(t-e),h=1/(i-n),f=1/(o-a),p=(t+e)*c,m=(i+n)*h;let g,y;if(s===Ii)g=(o+a)*f,y=-2*f;else if(s===ha)g=a*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qr=new Y,mi=new ut,Cf=new Y(0,0,0),Uf=new Y(1,1,1),Xi=new Y,Aa=new Y,Kt=new Y,Ic=new ut,Bc=new cr;class Si{constructor(e=0,t=0,i=0,n=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],h=n[9],f=n[2],p=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tf=0;const Lc=new Y,$r=new cr,Di=new ut,_a=new Y,Mn=new Y,Mf=new Y,Ff=new cr,Dc=new Y(1,0,0),Nc=new Y(0,1,0),kc=new Y(0,0,1),Pc={type:"added"},Rf={type:"removed"},en={type:"childadded",child:null},wo={type:"childremoved",child:null};class Ct extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new Y,t=new Si,i=new cr,n=new Y(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(kc,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_a.copy(e):_a.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Mn,_a,this.up):Di.lookAt(_a,Mn,this.up),this.quaternion.setFromRotationMatrix(Di),n&&(Di.extractRotation(n.matrixWorld),$r.setFromRotationMatrix(Di),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),en.child=e,this.dispatchEvent(en),en.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),en.child=e,this.dispatchEvent(en),en.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,Ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Ct.DEFAULT_UP=new Y(0,1,0),Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new Y,Ni=new Y,bo=new Y,ki=new Y,tn=new Y,rn=new Y,Vc=new Y,Co=new Y,Uo=new Y,To=new Y,Mo=new vt,Fo=new vt,Ro=new vt;class vi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),gi.subVectors(e,t),n.cross(gi);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){gi.subVectors(n,t),Ni.subVectors(i,t),bo.subVectors(e,t);const o=gi.dot(gi),s=gi.dot(Ni),l=gi.dot(bo),c=Ni.dot(Ni),h=Ni.dot(bo),f=o*c-s*s;if(f===0)return a.set(0,0,0),null;const p=1/f,m=(c*l-s*h)*p,g=(o*h-s*l)*p;return a.set(1-m-g,g,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,i,n,a,o,s,l){return this.getBarycoord(e,t,i,n,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(s,ki.z),l)}static getInterpolatedAttribute(e,t,i,n,a,o){return Mo.setScalar(0),Fo.setScalar(0),Ro.setScalar(0),Mo.fromBufferAttribute(e,t),Fo.fromBufferAttribute(e,i),Ro.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Mo,a.x),o.addScaledVector(Fo,a.y),o.addScaledVector(Ro,a.z),o}static isFrontFacing(e,t,i,n){return gi.subVectors(i,t),Ni.subVectors(e,t),gi.cross(Ni).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),gi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let o,s;tn.subVectors(n,i),rn.subVectors(a,i),Co.subVectors(e,i);const l=tn.dot(Co),c=rn.dot(Co);if(l<=0&&c<=0)return t.copy(i);Uo.subVectors(e,n);const h=tn.dot(Uo),f=rn.dot(Uo);if(h>=0&&f<=h)return t.copy(n);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(tn,o);To.subVectors(e,a);const m=tn.dot(To),g=rn.dot(To);if(g>=0&&m<=g)return t.copy(a);const y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(i).addScaledVector(rn,s);const d=h*g-m*f;if(d<=0&&f-h>=0&&m-g>=0)return Vc.subVectors(a,n),s=(f-h)/(f-h+(m-g)),t.copy(n).addScaledVector(Vc,s);const u=1/(d+y+p);return o=y*u,s=p*u,t.copy(i).addScaledVector(tn,o).addScaledVector(rn,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Io(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ke.workingColorSpace){if(e=pf(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Io(o,a,e+1/3),this.g=Io(o,a,e),this.b=Io(o,a,e-1/3)}return Ke.toWorkingColorSpace(this,n),this}setStyle(e,t=Mt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const i=Oc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ke.fromWorkingColorSpace(It.copy(this),e),Math.round(je(It.r*255,0,255))*65536+Math.round(je(It.g*255,0,255))*256+Math.round(je(It.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(It.copy(this),t);const i=It.r,n=It.g,a=It.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=h<=.5?f/(o+s):f/(2-o-s),o){case i:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-i)/f+2;break;case a:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Mt){Ke.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,n=It.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(ya);const i=mo(ji.h,ya.h,t),n=mo(ji.s,ya.s,t),a=mo(ji.l,ya.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Je;Je.NAMES=Oc;let If=0;class Pi extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=Dr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Es,this.blendDst=Ss,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Es&&(i.blendSrc=this.blendSrc),this.blendDst!==Ss&&(i.blendDst=this.blendDst),this.blendEquation!==rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zc extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new Y,Ea=new We;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xc,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),n=zt(n,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}}class Wc extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gc extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bf=0;const ni=new ut,Bo=new Ct,nn=new Y,qt=new Yr,Fn=new Yr,Ut=new Y;class Ai extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Gc:Wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ge().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nn).negate(),this.translate(nn.x,nn.y,nn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,a=e.length;n<a;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];qt.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(qt.min,Fn.min),qt.expandByPoint(Ut),Ut.addVectors(qt.max,Fn.max),qt.expandByPoint(Ut)):(qt.expandByPoint(Fn.min),qt.expandByPoint(Fn.max))}qt.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)Ut.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Ut));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)Ut.fromBufferAttribute(s,c),l&&(nn.fromBufferAttribute(e,c),Ut.add(nn)),n=Math.max(n,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let U=0;U<i.count;U++)s[U]=new Y,l[U]=new Y;const c=new Y,h=new Y,f=new Y,p=new We,m=new We,g=new We,y=new Y,d=new Y;function u(U,E,A){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,A),p.fromBufferAttribute(a,U),m.fromBufferAttribute(a,E),g.fromBufferAttribute(a,A),h.sub(c),f.sub(c),m.sub(p),g.sub(p);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(C),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),s[U].add(y),s[E].add(y),s[A].add(y),l[U].add(d),l[E].add(d),l[A].add(d))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,E=v.length;U<E;++U){const A=v[U],C=A.start,T=A.count;for(let R=C,B=C+T;R<B;R+=3)u(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const S=new Y,_=new Y,b=new Y,x=new Y;function w(U){b.fromBufferAttribute(n,U),x.copy(b);const E=s[U];S.copy(E),S.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(x,E);const A=_.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,A)}for(let U=0,E=v.length;U<E;++U){const A=v[U],C=A.start,T=A.count;for(let R=C,B=C+T;R<B;R+=3)w(e.getX(R+0)),w(e.getX(R+1)),w(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const n=new Y,a=new Y,o=new Y,s=new Y,l=new Y,c=new Y,h=new Y,f=new Y;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),y=e.getX(p+1),d=e.getX(p+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,d),h.subVectors(o,a),f.subVectors(n,a),h.cross(f),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,d),s.add(h),l.add(h),c.add(h),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)n.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,a),f.subVectors(n,a),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,f=s.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let y=0,d=l.length;y<d;y++){s.isInterleavedBufferAttribute?m=l[y]*s.data.stride+s.offset:m=l[y]*h;for(let u=0;u<h;u++)p[g++]=c[m++]}return new xi(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,f=c.length;h<f;h++){const p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],f=a[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jc=new ut,dr=new va,Sa=new Tn,Zc=new Y,xa=new Y,wa=new Y,ba=new Y,Qo=new Y,Ca=new Y,Hc=new Y,Ua=new Y;class Wt extends Ct{constructor(e=new Ai,t=new zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Ca.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],f=a[l];h!==0&&(Qo.fromBufferAttribute(f,e),o?Ca.addScaledVector(Qo,h):Ca.addScaledVector(Qo.sub(t),h))}t.add(Ca)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(a),dr.copy(e.ray).recast(e.near),!(Sa.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Sa,Zc)===null||dr.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&(Jc.copy(a).invert(),dr.copy(e.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,p=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){const d=p[g],u=o[d.materialIndex],v=Math.max(d.start,m.start),S=Math.min(s.count,Math.min(d.start+d.count,m.start+m.count));for(let _=v,b=S;_<b;_+=3){const x=s.getX(_),w=s.getX(_+1),U=s.getX(_+2);n=Ta(this,u,e,i,c,h,f,x,w,U),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),y=Math.min(s.count,m.start+m.count);for(let d=g,u=y;d<u;d+=3){const v=s.getX(d),S=s.getX(d+1),_=s.getX(d+2);n=Ta(this,o,e,i,c,h,f,v,S,_),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){const d=p[g],u=o[d.materialIndex],v=Math.max(d.start,m.start),S=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let _=v,b=S;_<b;_+=3){const x=_,w=_+1,U=_+2;n=Ta(this,u,e,i,c,h,f,x,w,U),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let d=g,u=y;d<u;d+=3){const v=d,S=d+1,_=d+2;n=Ta(this,o,e,i,c,h,f,v,S,_),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}}}function Qf(r,e,t,i,n,a,o,s){let l;if(e.side===Ot?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===Ti,s),l===null)return null;Ua.copy(s),Ua.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ua);return c<t.near||c>t.far?null:{distance:c,point:Ua.clone(),object:r}}function Ta(r,e,t,i,n,a,o,s,l,c){r.getVertexPosition(s,xa),r.getVertexPosition(l,wa),r.getVertexPosition(c,ba);const h=Qf(r,e,t,i,xa,wa,ba,Hc);if(h){const f=new Y;vi.getBarycoord(Hc,xa,wa,ba,f),n&&(h.uv=vi.getInterpolatedAttribute(n,s,l,c,f,new We)),a&&(h.uv1=vi.getInterpolatedAttribute(a,s,l,c,f,new We)),o&&(h.normal=vi.getInterpolatedAttribute(o,s,l,c,f,new Y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:s,b:l,c,normal:new Y,materialIndex:0};vi.getNormal(xa,wa,ba,p.normal),h.face=p,h.barycoord=f}return h}class Rn extends Ai{constructor(e=1,t=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],f=[];let p=0,m=0;g("z","y","x",-1,-1,i,t,e,o,a,0),g("z","y","x",1,-1,i,t,-e,o,a,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(f,2));function g(y,d,u,v,S,_,b,x,w,U,E){const A=_/w,C=b/U,T=_/2,R=b/2,B=x/2,L=w+1,N=U+1;let k=0,M=0;const I=new Y;for(let P=0;P<N;P++){const K=P*C-R;for(let $=0;$<L;$++){const he=$*A-T;I[y]=he*v,I[d]=K*S,I[u]=B,c.push(I.x,I.y,I.z),I[y]=0,I[d]=0,I[u]=x>0?1:-1,h.push(I.x,I.y,I.z),f.push($/w),f.push(1-P/U),k+=1}}for(let P=0;P<U;P++)for(let K=0;K<w;K++){const $=p+K+L*P,he=p+K+L*(P+1),W=p+(K+1)+L*(P+1),H=p+(K+1)+L*P;l.push($,he,H),l.push(he,W,H),M+=6}s.addGroup(m,M,E),m+=M,p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function an(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Dt(r){const e={};for(let t=0;t<r.length;t++){const i=an(r[t]);for(const n in i)e[n]=i[n]}return e}function Lf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Df={clone:an,merge:Dt};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=an(e.uniforms),this.uniformsGroups=Lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xc extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new Y,jc=new We,Kc=new We;class ai extends Xc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,jc,Kc),t.subVectors(Kc,jc)}setViewOffset(e,t,i,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sn=-90,on=1;class Pf extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ai(sn,on,e,t);n.layers=this.layers,this.add(n);const a=new ai(sn,on,e,t);a.layers=this.layers,this.add(a);const o=new ai(sn,on,e,t);o.layers=this.layers,this.add(o);const s=new ai(sn,on,e,t);s.layers=this.layers,this.add(s);const l=new ai(sn,on,e,t);l.layers=this.layers,this.add(l);const c=new ai(sn,on,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,s),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qc extends Qt{constructor(e,t,i,n,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:kr,super(e,t,i,n,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vf extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new qc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Rn(5,5,5),a=new Ki({name:"CubemapFromEquirect",uniforms:an(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Wi});a.uniforms.tEquirect.value=t;const o=new Wt(n,a),s=t.minFilter;return t.minFilter===ar&&(t.minFilter=Ei),new Pf(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(a)}}class Of extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Lo=new Y,zf=new Y,Wf=new Ge;class $i{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Lo.subVectors(i,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Lo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wf.getNormalMatrix(e),n=this.coplanarPoint(Lo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Tn,Ma=new Y;class Do{constructor(e=new $i,t=new $i,i=new $i,n=new $i,a=new $i,o=new $i){this.planes=[e,t,i,n,a,o]}set(e,t,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],h=n[5],f=n[6],p=n[7],m=n[8],g=n[9],y=n[10],d=n[11],u=n[12],v=n[13],S=n[14],_=n[15];if(i[0].setComponents(l-a,p-c,d-m,_-u).normalize(),i[1].setComponents(l+a,p+c,d+m,_+u).normalize(),i[2].setComponents(l+o,p+h,d+g,_+v).normalize(),i[3].setComponents(l-o,p-h,d-g,_-v).normalize(),i[4].setComponents(l-s,p-f,d-y,_-S).normalize(),t===Ii)i[5].setComponents(l+s,p+f,d+y,_+S).normalize();else if(t===ha)i[5].setComponents(s,f,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ma.x=n.normal.x>0?e.max.x:e.min.x,Ma.y=n.normal.y>0?e.max.y:e.min.y,Ma.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fa extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ra=new Y,Ia=new Y,$c=new ut,In=new va,Ba=new Tn,No=new Y,eh=new Y;class Gf extends Ct{constructor(e=new Ai,t=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)Ra.fromBufferAttribute(t,n-1),Ia.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Ra.distanceTo(Ia);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(n),Ba.radius+=a,e.ray.intersectsSphere(Ba)===!1)return;$c.copy(n).invert(),In.copy(e.ray).applyMatrix4($c);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=p,y=m-1;g<y;g+=c){const d=h.getX(g),u=h.getX(g+1),v=Qa(this,e,In,l,d,u);v&&t.push(v)}if(this.isLineLoop){const g=h.getX(m-1),y=h.getX(p),d=Qa(this,e,In,l,g,y);d&&t.push(d)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=p,y=m-1;g<y;g+=c){const d=Qa(this,e,In,l,g,g+1);d&&t.push(d)}if(this.isLineLoop){const g=Qa(this,e,In,l,m-1,p);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function Qa(r,e,t,i,n,a){const o=r.geometry.attributes.position;if(Ra.fromBufferAttribute(o,n),Ia.fromBufferAttribute(o,a),t.distanceSqToSegment(Ra,Ia,No,eh)>i)return;No.applyMatrix4(r.matrixWorld);const s=e.ray.origin.distanceTo(No);if(!(s<e.near||s>e.far))return{distance:s,point:eh.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const th=new Y,ih=new Y;class rh extends Gf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)th.fromBufferAttribute(t,n),ih.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+th.distanceTo(ih);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bn extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nh=new ut,ko=new va,La=new Tn,Da=new Y;class Po extends Ct{constructor(e=new Ai,t=new Bn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(n),La.radius+=a,e.ray.intersectsSphere(La)===!1)return;nh.copy(n).invert(),ko.copy(e.ray).applyMatrix4(nh);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,g=p;m<g;m++){const y=c.getX(m);Da.fromBufferAttribute(h,y),ah(Da,y,l,n,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=f,g=p;m<g;m++)Da.fromBufferAttribute(h,m),ah(Da,m,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}function ah(r,e,t,i,n,a,o){const s=ko.distanceSqToPoint(r);if(s<t){const l=new Y;ko.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Qn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}class sh extends Qt{constructor(e,t,i,n,a,o,s,l,c,h=Or){if(h!==Or&&h!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Or&&(i=sr),i===void 0&&h===zr&&(i=Vr),super(null,n,a,o,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Na extends Ai{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(n),c=s+1,h=l+1,f=e/s,p=t/l,m=[],g=[],y=[],d=[];for(let u=0;u<h;u++){const v=u*p-o;for(let S=0;S<c;S++){const _=S*f-a;g.push(_,-v,0),y.push(0,0,1),d.push(S/s),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<s;v++){const S=v+c*u,_=v+c*(u+1),b=v+1+c*(u+1),x=v+1+c*u;m.push(S,_,x),m.push(_,b,x)}this.setIndex(m),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(y,3)),this.setAttribute("uv",new Lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vo extends Pi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zf extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ka={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Hf{constructor(e,t,i){const n=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,s),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,s),o===s&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const oh=new Hf;class ln{constructor(e){this.manager=e!==void 0?e:oh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ln.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class Yf extends Error{constructor(e,t){super(e),this.response=t}}class lh extends ln{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ka.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:n});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Vi[e],f=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let y=0;const d=new ReadableStream({start(u){v();function v(){f.read().then(({done:S,value:_})=>{if(S)u.close();else{y+=_.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let x=0,w=h.length;x<w;x++){const U=h[x];U.onProgress&&U.onProgress(b)}u.enqueue(_),v()}},S=>{u.error(S)})}}});return new Response(d)}else throw new Yf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,s));case"json":return c.json();default:if(s===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(s),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{ka.add(e,c);const h=Vi[e];delete Vi[e];for(let f=0,p=h.length;f<p;f++){const m=h[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Vi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let f=0,p=h.length;f<p;f++){const m=h[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xf extends ln{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=ka.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=bn("img");function l(){h(),ka.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(f){h(),n&&n(f),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class jf extends ln{constructor(e){super(e)}load(e,t,i,n){const a=new Qt,o=new Xf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,n),a}}class ch extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Oo=new ut,hh=new Y,uh=new Y;class Kf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(hh),uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uh),t.updateMatrixWorld(),Oo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dh extends Xc{constructor(e=-1,t=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qf extends Kf{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $f extends ch{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new qf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class em extends ch{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tm{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class im extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ph{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rm extends or{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function fh(r,e,t,i){const n=nm(i);switch(t){case pc:return r*e;case mc:return r*e;case gc:return r*e*2;case vc:return r*e/n.components*n.byteLength;case ks:return r*e/n.components*n.byteLength;case Ac:return r*e*2/n.components*n.byteLength;case Ps:return r*e*2/n.components*n.byteLength;case fc:return r*e*3/n.components*n.byteLength;case pi:return r*e*4/n.components*n.byteLength;case Vs:return r*e*4/n.components*n.byteLength;case na:case aa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sa:case oa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zs:case Gs:return Math.max(r,16)*Math.max(e,8)/4;case Os:case Ws:return Math.max(r,8)*Math.max(e,8)/2;case Js:case Zs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ys:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xs:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case js:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qs:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $s:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ro:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case no:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case so:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case la:case lo:case co:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _c:case ho:return Math.ceil(r/4)*Math.ceil(e/4)*8;case uo:case po:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nm(r){switch(r){case Fi:case hc:return{byteLength:1,components:1};case En:case uc:case Sn:return{byteLength:2,components:1};case Ds:case Ns:return{byteLength:2,components:4};case sr:case Ls:case Ri:return{byteLength:4,components:1};case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ys}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ys);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mh(){let r=null,e=!1,t=null,i=null;function n(a,o){t(a,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function am(r){const e=new WeakMap;function t(s,l){const c=s.array,h=s.usage,f=c.byteLength,p=r.createBuffer();r.bindBuffer(l,p),r.bufferData(l,c,h),s.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,s),f.length===0)r.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){const g=f[p],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){const y=f[m];r.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(r.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const h=e.get(s);(!h||h.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:n,remove:a,update:o}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_m=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ym=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ng=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ev=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:sm,alphahash_pars_fragment:om,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:hm,alphatest_pars_fragment:um,aomap_fragment:dm,aomap_pars_fragment:pm,batching_pars_vertex:fm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:vm,bsdfs:Am,iridescence_fragment:_m,bumpmap_pars_fragment:ym,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:xm,clipping_planes_vertex:wm,color_fragment:bm,color_pars_fragment:Cm,color_pars_vertex:Um,color_vertex:Tm,common:Mm,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Im,displacementmap_vertex:Bm,emissivemap_fragment:Qm,emissivemap_pars_fragment:Lm,colorspace_fragment:Dm,colorspace_pars_fragment:Nm,envmap_fragment:km,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Vm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:qm,envmap_vertex:zm,fog_vertex:Wm,fog_pars_vertex:Gm,fog_fragment:Jm,fog_pars_fragment:Zm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Ym,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:jm,lights_pars_begin:Km,lights_toon_fragment:$m,lights_toon_pars_fragment:eg,lights_phong_fragment:tg,lights_phong_pars_fragment:ig,lights_physical_fragment:rg,lights_physical_pars_fragment:ng,lights_fragment_begin:ag,lights_fragment_maps:sg,lights_fragment_end:og,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:cg,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:ug,map_fragment:dg,map_pars_fragment:pg,map_particle_fragment:fg,map_particle_pars_fragment:mg,metalnessmap_fragment:gg,metalnessmap_pars_fragment:vg,morphinstance_vertex:Ag,morphcolor_vertex:_g,morphnormal_vertex:yg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Sg,normal_fragment_begin:xg,normal_fragment_maps:wg,normal_pars_fragment:bg,normal_pars_vertex:Cg,normal_vertex:Ug,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Mg,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Ig,opaque_fragment:Bg,packing:Qg,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:kg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:zg,shadowmap_vertex:Wg,shadowmask_pars_fragment:Gg,skinbase_vertex:Jg,skinning_pars_vertex:Zg,skinning_vertex:Hg,skinnormal_vertex:Yg,specularmap_fragment:Xg,specularmap_pars_fragment:jg,tonemapping_fragment:Kg,tonemapping_pars_fragment:qg,transmission_fragment:$g,transmission_pars_fragment:ev,uv_pars_fragment:tv,uv_pars_vertex:iv,uv_vertex:rv,worldpos_vertex:nv,background_vert:av,background_frag:sv,backgroundCube_vert:ov,backgroundCube_frag:lv,cube_vert:cv,cube_frag:hv,depth_vert:uv,depth_frag:dv,distanceRGBA_vert:pv,distanceRGBA_frag:fv,equirect_vert:mv,equirect_frag:gv,linedashed_vert:vv,linedashed_frag:Av,meshbasic_vert:_v,meshbasic_frag:yv,meshlambert_vert:Ev,meshlambert_frag:Sv,meshmatcap_vert:xv,meshmatcap_frag:wv,meshnormal_vert:bv,meshnormal_frag:Cv,meshphong_vert:Uv,meshphong_frag:Tv,meshphysical_vert:Mv,meshphysical_frag:Fv,meshtoon_vert:Rv,meshtoon_frag:Iv,points_vert:Bv,points_frag:Qv,shadow_vert:Lv,shadow_frag:Dv,sprite_vert:Nv,sprite_frag:kv},xe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},wi={basic:{uniforms:Dt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Dt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Dt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Dt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Dt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Dt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Dt([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Dt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Dt([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Dt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Dt([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Dt([xe.common,xe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Dt([xe.lights,xe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};wi.physical={uniforms:Dt([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Pa={r:0,b:0,g:0},fr=new Si,Pv=new ut;function Vv(r,e,t,i,n,a,o){const s=new Je(0);let l=a===!0?0:1,c,h,f=null,p=0,m=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function y(S){let _=!1;const b=g(S);b===null?u(s,l):b&&b.isColor&&(u(b,1),_=!0);const x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(S,_){const b=g(_);b&&(b.isCubeTexture||b.mapping===ta)?(h===void 0&&(h=new Wt(new Rn(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:an(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(x,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),fr.copy(_.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(fr)),h.material.toneMapped=Ke.getTransfer(b.colorSpace)!==rt,(f!==b||p!==b.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,f=b,p=b.version,m=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Wt(new Na(2,2),new Ki({name:"BackgroundMaterial",uniforms:an(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(b.colorSpace)!==rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||p!==b.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=b,p=b.version,m=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,_){S.getRGB(Pa,Yc(r)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,_,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return s},setClearColor:function(S,_=1){s.set(S),l=_,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(s,l)},render:y,addToRenderList:d,dispose:v}}function Ov(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=p(null);let a=n,o=!1;function s(A,C,T,R,B){let L=!1;const N=f(R,T,C);a!==N&&(a=N,c(a.object)),L=m(A,R,T,B),L&&g(A,R,T,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,_(A,C,T,R),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(A){return r.bindVertexArray(A)}function h(A){return r.deleteVertexArray(A)}function f(A,C,T){const R=T.wireframe===!0;let B=i[A.id];B===void 0&&(B={},i[A.id]=B);let L=B[C.id];L===void 0&&(L={},B[C.id]=L);let N=L[R];return N===void 0&&(N=p(l()),L[R]=N),N}function p(A){const C=[],T=[],R=[];for(let B=0;B<t;B++)C[B]=0,T[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:T,attributeDivisors:R,object:A,attributes:{},index:null}}function m(A,C,T,R){const B=a.attributes,L=C.attributes;let N=0;const k=T.getAttributes();for(const M in k)if(k[M].location>=0){const I=B[M];let P=L[M];if(P===void 0&&(M==="instanceMatrix"&&A.instanceMatrix&&(P=A.instanceMatrix),M==="instanceColor"&&A.instanceColor&&(P=A.instanceColor)),I===void 0||I.attribute!==P||P&&I.data!==P.data)return!0;N++}return a.attributesNum!==N||a.index!==R}function g(A,C,T,R){const B={},L=C.attributes;let N=0;const k=T.getAttributes();for(const M in k)if(k[M].location>=0){let I=L[M];I===void 0&&(M==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),M==="instanceColor"&&A.instanceColor&&(I=A.instanceColor));const P={};P.attribute=I,I&&I.data&&(P.data=I.data),B[M]=P,N++}a.attributes=B,a.attributesNum=N,a.index=R}function y(){const A=a.newAttributes;for(let C=0,T=A.length;C<T;C++)A[C]=0}function d(A){u(A,0)}function u(A,C){const T=a.newAttributes,R=a.enabledAttributes,B=a.attributeDivisors;T[A]=1,R[A]===0&&(r.enableVertexAttribArray(A),R[A]=1),B[A]!==C&&(r.vertexAttribDivisor(A,C),B[A]=C)}function v(){const A=a.newAttributes,C=a.enabledAttributes;for(let T=0,R=C.length;T<R;T++)C[T]!==A[T]&&(r.disableVertexAttribArray(T),C[T]=0)}function S(A,C,T,R,B,L,N){N===!0?r.vertexAttribIPointer(A,C,T,B,L):r.vertexAttribPointer(A,C,T,R,B,L)}function _(A,C,T,R){y();const B=R.attributes,L=T.getAttributes(),N=C.defaultAttributeValues;for(const k in L){const M=L[k];if(M.location>=0){let I=B[k];if(I===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(I=A.instanceColor)),I!==void 0){const P=I.normalized,K=I.itemSize,$=e.get(I);if($===void 0)continue;const he=$.buffer,W=$.type,H=$.bytesPerElement,ce=W===r.INT||W===r.UNSIGNED_INT||I.gpuType===Ls;if(I.isInterleavedBufferAttribute){const se=I.data,ue=se.stride,me=I.offset;if(se.isInstancedInterleavedBuffer){for(let oe=0;oe<M.locationSize;oe++)u(M.location+oe,se.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let oe=0;oe<M.locationSize;oe++)d(M.location+oe);r.bindBuffer(r.ARRAY_BUFFER,he);for(let oe=0;oe<M.locationSize;oe++)S(M.location+oe,K/M.locationSize,W,P,ue*H,(me+K/M.locationSize*oe)*H,ce)}else{if(I.isInstancedBufferAttribute){for(let se=0;se<M.locationSize;se++)u(M.location+se,I.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let se=0;se<M.locationSize;se++)d(M.location+se);r.bindBuffer(r.ARRAY_BUFFER,he);for(let se=0;se<M.locationSize;se++)S(M.location+se,K/M.locationSize,W,P,K*H,K/M.locationSize*se*H,ce)}}else if(N!==void 0){const P=N[k];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(M.location,P);break;case 3:r.vertexAttrib3fv(M.location,P);break;case 4:r.vertexAttrib4fv(M.location,P);break;default:r.vertexAttrib1fv(M.location,P)}}}}v()}function b(){U();for(const A in i){const C=i[A];for(const T in C){const R=C[T];for(const B in R)h(R[B].object),delete R[B];delete C[T]}delete i[A]}}function x(A){if(i[A.id]===void 0)return;const C=i[A.id];for(const T in C){const R=C[T];for(const B in R)h(R[B].object),delete R[B];delete C[T]}delete i[A.id]}function w(A){for(const C in i){const T=i[C];if(T[A.id]===void 0)continue;const R=T[A.id];for(const B in R)h(R[B].object),delete R[B];delete T[A.id]}}function U(){E(),o=!0,a!==n&&(a=n,c(a.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:s,reset:U,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:d,disableUnusedAttributes:v}}function zv(r,e,t){let i;function n(c){i=c}function a(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function s(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let m=0;m<f;m++)p+=h[m];t.update(p,i,1)}function l(c,h,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,p,0,f);let g=0;for(let y=0;y<f;y++)g+=h[y]*p[y];t.update(g,i,1)}}this.setMode=n,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Wv(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(w){return!(w!==pi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(w){const U=w===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Fi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!U)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),u=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,x=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:b,maxSamples:x}}function Gv(r){const e=this;let t=null,i=0,n=!1,a=!1;const o=new $i,s=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||n;return n=p,i=f.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){const g=f.clippingPlanes,y=f.clipIntersection,d=f.clipShadows,u=r.get(f);if(!n||g===null||g.length===0||a&&!d)a?h(null):c();else{const v=a?0:i,S=v*4;let _=u.clippingState||null;l.value=_,_=h(g,p,S,m);for(let b=0;b!==S;++b)_[b]=t[b];u.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,m,g){const y=f!==null?f.length:0;let d=null;if(y!==0){if(d=l.value,g!==!0||d===null){const u=m+y*4,v=p.matrixWorldInverse;s.getNormalMatrix(v),(d===null||d.length<u)&&(d=new Float32Array(u));for(let S=0,_=m;S!==y;++S,_+=4)o.copy(f[S]).applyMatrix4(v,s),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,d}}function Jv(r){let e=new WeakMap;function t(o,s){return s===Rs?o.mapping=kr:s===Is&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===Rs||s===Is)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vf(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const cn=4,gh=[.125,.215,.35,.446,.526,.582],mr=20,zo=new dh,vh=new Je;let Wo=null,Go=0,Jo=0,Zo=!1;const gr=(1+Math.sqrt(5))/2,hn=1/gr,Ah=[new Y(-gr,hn,0),new Y(gr,hn,0),new Y(-hn,0,gr),new Y(hn,0,gr),new Y(0,gr,-hn),new Y(0,gr,hn),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Wo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Go,Jo),this._renderer.xr.enabled=Zo,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Sn,format:pi,colorSpace:Wr,depthBuffer:!1},n=yh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zv(a)),this._blurMaterial=Hv(a,e,t)}return n}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,i,n){const a=new ai(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(vh),l.toneMapping=Gi,l.autoClear=!1;const f=new zc({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),p=new Wt(new Rn,f);let m=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,m=!0):(f.color.copy(vh),m=!0);for(let y=0;y<6;y++){const d=y%3;d===0?(a.up.set(0,o[y],0),a.lookAt(s[y],0,0)):d===1?(a.up.set(0,0,o[y]),a.lookAt(0,s[y],0)):(a.up.set(0,o[y],0),a.lookAt(0,0,s[y]));const u=this._cubeSize;Va(n,d*u,y>2?u:0,u,u),l.setRenderTarget(n),m&&l.render(p,a),l.render(e,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===kr||e.mapping===Pr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Ah[(n-a-1)%Ah.length];this._blur(e,a-1,a,o,s)}t.autoClear=i}_blur(e,t,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Wt(this._lodPlanes[n],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*mr-1),y=a/g,d=isFinite(a)?1+Math.floor(h*y):mr;d>mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${mr}`);const u=[];let v=0;for(let w=0;w<mr;++w){const U=w/y,E=Math.exp(-U*U/2);u.push(E),w===0?v+=E:w<d&&(v+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-i;const _=this._sizeLods[n],b=3*_*(n>S-cn?n-S+cn:0),x=4*(this._cubeSize-_);Va(t,b,x,3*_,2*_),l.setRenderTarget(t),l.render(f,zo)}}function Zv(r){const e=[],t=[],i=[];let n=r;const a=r-cn+1+gh.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>r-cn?l=gh[o-r+cn-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,y=3,d=2,u=1,v=new Float32Array(y*g*m),S=new Float32Array(d*g*m),_=new Float32Array(u*g*m);for(let x=0;x<m;x++){const w=x%3*2/3-1,U=x>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];v.set(E,y*g*x),S.set(p,d*g*x);const A=[x,x,x,x,x,x];_.set(A,u*g*x)}const b=new Ai;b.setAttribute("position",new xi(v,y)),b.setAttribute("uv",new xi(S,d)),b.setAttribute("faceIndex",new xi(_,u)),e.push(b),n>cn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yh(r,e,t){const i=new lr(r,e,t);return i.texture.mapping=ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Va(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Hv(r,e,t){const i=new Float32Array(mr),n=new Y(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Eh(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Sh(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yv(r){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Rs||l===Is,h=l===kr||l===Pr;if(c||h){let f=e.get(s);const p=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==p)return t===null&&(t=new _h(r)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const m=s.image;return c&&m&&m.height>0||h&&m&&n(m)?(t===null&&(t=new _h(r)),f=c?t.fromEquirectangular(s):t.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",a),f.texture):null}}}return s}function n(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Xv(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Jr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function jv(r,e,t,i){const n={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete n[p.id];const m=a.get(p);m&&(e.remove(m),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(f,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const m in p)e.update(p[m],r.ARRAY_BUFFER)}function c(f){const p=[],m=f.index,g=f.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let S=0,_=v.length;S<_;S+=3){const b=v[S+0],x=v[S+1],w=v[S+2];p.push(b,x,x,w,w,b)}}else if(g!==void 0){const v=g.array;y=g.version;for(let S=0,_=v.length/3-1;S<_;S+=3){const b=S+0,x=S+1,w=S+2;p.push(b,x,x,w,w,b)}}else return;const d=new(bc(p)?Gc:Wc)(p,1);d.version=y;const u=a.get(f);u&&e.remove(u),a.set(f,d)}function h(f){const p=a.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:h}}function Kv(r,e,t){let i;function n(p){i=p}let a,o;function s(p){a=p.type,o=p.bytesPerElement}function l(p,m){r.drawElements(i,m,a,p*o),t.update(m,i,1)}function c(p,m,g){g!==0&&(r.drawElementsInstanced(i,m,a,p*o,g),t.update(m,i,g))}function h(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,p,0,g);let y=0;for(let d=0;d<g;d++)y+=m[d];t.update(y,i,1)}function f(p,m,g,y){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<p.length;u++)c(p[u]/o,m[u],y[u]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,a,p,0,y,0,g);let u=0;for(let v=0;v<g;v++)u+=m[v]*y[v];t.update(u,i,1)}}this.setMode=n,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function qv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=s*(a/3);break;case r.LINES:t.lines+=s*(a/2);break;case r.LINE_STRIP:t.lines+=s*(a-1);break;case r.LINE_LOOP:t.lines+=s*a;break;case r.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function $v(r,e,t){const i=new WeakMap,n=new vt;function a(o,s,l){const c=o.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=h!==void 0?h.length:0;let p=i.get(s);if(p===void 0||p.count!==f){let m=function(){U.dispose(),i.delete(s),s.removeEventListener("dispose",m)};p!==void 0&&p.texture.dispose();const g=s.morphAttributes.position!==void 0,y=s.morphAttributes.normal!==void 0,d=s.morphAttributes.color!==void 0,u=s.morphAttributes.position||[],v=s.morphAttributes.normal||[],S=s.morphAttributes.color||[];let _=0;g===!0&&(_=1),y===!0&&(_=2),d===!0&&(_=3);let b=s.attributes.position.count*_,x=1;b>e.maxTextureSize&&(x=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*x*4*f),U=new Fc(w,b,x,f);U.type=Ri,U.needsUpdate=!0;const E=_*4;for(let A=0;A<f;A++){const C=u[A],T=v[A],R=S[A],B=b*x*4*A;for(let L=0;L<C.count;L++){const N=L*E;g===!0&&(n.fromBufferAttribute(C,L),w[B+N+0]=n.x,w[B+N+1]=n.y,w[B+N+2]=n.z,w[B+N+3]=0),y===!0&&(n.fromBufferAttribute(T,L),w[B+N+4]=n.x,w[B+N+5]=n.y,w[B+N+6]=n.z,w[B+N+7]=0),d===!0&&(n.fromBufferAttribute(R,L),w[B+N+8]=n.x,w[B+N+9]=n.y,w[B+N+10]=n.z,w[B+N+11]=R.itemSize===4?n.w:1)}}p={count:f,texture:U,size:new We(b,x)},i.set(s,p),s.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];const g=s.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:a}}function e0(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;n.get(p)!==c&&(p.update(),n.set(p,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const xh=new Qt,wh=new sh(1,1),bh=new Fc,Ch=new wf,Uh=new qc,Th=[],Mh=[],Fh=new Float32Array(16),Rh=new Float32Array(9),Ih=new Float32Array(4);function un(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=Th[n];if(a===void 0&&(a=new Float32Array(n),Th[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,r[o].toArray(a,s)}return a}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function xt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Oa(r,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function t0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function i0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),xt(t,e)}}function r0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),xt(t,e)}}function n0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),xt(t,e)}}function a0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;Ih.set(i),r.uniformMatrix2fv(this.addr,!1,Ih),xt(t,i)}}function s0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;Rh.set(i),r.uniformMatrix3fv(this.addr,!1,Rh),xt(t,i)}}function o0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(St(t,i))return;Fh.set(i),r.uniformMatrix4fv(this.addr,!1,Fh),xt(t,i)}}function l0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function c0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),xt(t,e)}}function h0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),xt(t,e)}}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),xt(t,e)}}function d0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function p0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),xt(t,e)}}function f0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),xt(t,e)}}function m0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),xt(t,e)}}function g0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?(wh.compareFunction=Sc,a=wh):a=xh,t.setTexture2D(e||a,n)}function v0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ch,n)}function A0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Uh,n)}function _0(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||bh,n)}function y0(r){switch(r){case 5126:return t0;case 35664:return i0;case 35665:return r0;case 35666:return n0;case 35674:return a0;case 35675:return s0;case 35676:return o0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return p0;case 36295:return f0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return _0}}function E0(r,e){r.uniform1fv(this.addr,e)}function S0(r,e){const t=un(e,this.size,2);r.uniform2fv(this.addr,t)}function x0(r,e){const t=un(e,this.size,3);r.uniform3fv(this.addr,t)}function w0(r,e){const t=un(e,this.size,4);r.uniform4fv(this.addr,t)}function b0(r,e){const t=un(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function C0(r,e){const t=un(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function U0(r,e){const t=un(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function T0(r,e){r.uniform1iv(this.addr,e)}function M0(r,e){r.uniform2iv(this.addr,e)}function F0(r,e){r.uniform3iv(this.addr,e)}function R0(r,e){r.uniform4iv(this.addr,e)}function I0(r,e){r.uniform1uiv(this.addr,e)}function B0(r,e){r.uniform2uiv(this.addr,e)}function Q0(r,e){r.uniform3uiv(this.addr,e)}function L0(r,e){r.uniform4uiv(this.addr,e)}function D0(r,e,t){const i=this.cache,n=e.length,a=Oa(t,n);St(i,a)||(r.uniform1iv(this.addr,a),xt(i,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||xh,a[o])}function N0(r,e,t){const i=this.cache,n=e.length,a=Oa(t,n);St(i,a)||(r.uniform1iv(this.addr,a),xt(i,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Ch,a[o])}function k0(r,e,t){const i=this.cache,n=e.length,a=Oa(t,n);St(i,a)||(r.uniform1iv(this.addr,a),xt(i,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Uh,a[o])}function P0(r,e,t){const i=this.cache,n=e.length,a=Oa(t,n);St(i,a)||(r.uniform1iv(this.addr,a),xt(i,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||bh,a[o])}function V0(r){switch(r){case 5126:return E0;case 35664:return S0;case 35665:return x0;case 35666:return w0;case 35674:return b0;case 35675:return C0;case 35676:return U0;case 5124:case 35670:return T0;case 35667:case 35671:return M0;case 35668:case 35672:return F0;case 35669:case 35673:return R0;case 5125:return I0;case 36294:return B0;case 36295:return Q0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return P0}}class O0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y0(t.type)}}class z0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V0(t.type)}}class W0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Bh(r,e){r.seq.push(e),r.map[e.id]=e}function G0(r,e,t){const i=r.name,n=i.length;for(Yo.lastIndex=0;;){const a=Yo.exec(i),o=Yo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Bh(t,c===void 0?new O0(s,r,e):new z0(s,r,e));break}else{let h=t.map[s];h===void 0&&(h=new W0(s),Bh(t,h)),t=h}}}class za{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);G0(a,o,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Qh(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const J0=37297;let Z0=0;function H0(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}const Lh=new Ge;function Y0(r){Ke._getMatrix(Lh,Ke.workingColorSpace,r);const e=`mat3( ${Lh.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case ca:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Dh(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+H0(r.getShaderSource(e),o)}else return n}function X0(r,e){const t=Y0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j0(r,e){let t;switch(e){case Yp:t="Linear";break;case Xp:t="Reinhard";break;case jp:t="Cineon";break;case Kp:t="ACESFilmic";break;case $p:t="AgX";break;case ef:t="Neutral";break;case qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wa=new Y;function K0(){Ke.getLuminanceCoefficients(Wa);const r=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ln).join(`
`)}function $0(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eA(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),o=a.name;let s=1;a.type===r.FLOAT_MAT2&&(s=2),a.type===r.FLOAT_MAT3&&(s=3),a.type===r.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:r.getAttribLocation(e,o),locationSize:s}}return t}function Ln(r){return r!==""}function Nh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(r){return r.replace(tA,rA)}const iA=new Map;function rA(r,e){let t=Ze[e];if(t===void 0){const i=iA.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(r){return r.replace(nA,aA)}function aA(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Vh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function oA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case kr:case Pr:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Pr:e="ENVMAP_MODE_REFRACTION";break}return e}function cA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fs:e="ENVMAP_BLENDING_MULTIPLY";break;case Zp:e="ENVMAP_BLENDING_MIX";break;case Hp:e="ENVMAP_BLENDING_ADD";break}return e}function hA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uA(r,e,t,i){const n=r.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=sA(t),c=oA(t),h=lA(t),f=cA(t),p=hA(t),m=q0(t),g=$0(a),y=n.createProgram();let d,u,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ln).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ln).join(`
`),u.length>0&&(u+=`
`)):(d=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ln).join(`
`),u=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Gi?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,X0("linearToOutputTexel",t.outputColorSpace),K0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ln).join(`
`)),o=Xo(o),o=Nh(o,t),o=kh(o,t),s=Xo(s),s=Nh(s,t),s=kh(s,t),o=Ph(o),s=Ph(s),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=v+d+o,_=v+u+s,b=Qh(n,n.VERTEX_SHADER,S),x=Qh(n,n.FRAGMENT_SHADER,_);n.attachShader(y,b),n.attachShader(y,x),t.index0AttributeName!==void 0?n.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function w(C){if(r.debug.checkShaderErrors){const T=n.getProgramInfoLog(y).trim(),R=n.getShaderInfoLog(b).trim(),B=n.getShaderInfoLog(x).trim();let L=!0,N=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(L=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,y,b,x);else{const k=Dh(n,b,"vertex"),M=Dh(n,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+T+`
`+k+`
`+M)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||B==="")&&(N=!1);N&&(C.diagnostics={runnable:L,programLog:T,vertexShader:{log:R,prefix:d},fragmentShader:{log:B,prefix:u}})}n.deleteShader(b),n.deleteShader(x),U=new za(n,y),E=eA(n,y)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(y,J0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=x,this}let dA=0;class pA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fA(e),t.set(e,i)),i}}class fA{constructor(e){this.id=dA++,this.code=e,this.usedTimes=0}}function mA(r,e,t,i,n,a,o){const s=new Qc,l=new pA,c=new Set,h=[],f=n.logarithmicDepthBuffer,p=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function d(E,A,C,T,R){const B=T.fog,L=R.geometry,N=E.isMeshStandardMaterial?T.environment:null,k=(E.isMeshStandardMaterial?t:e).get(E.envMap||N),M=k&&k.mapping===ta?k.image.height:null,I=g[E.type];E.precision!==null&&(m=n.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const P=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=P!==void 0?P.length:0;let $=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let he,W,H,ce;if(I){const it=wi[I];he=it.vertexShader,W=it.fragmentShader}else he=E.vertexShader,W=E.fragmentShader,l.update(E),H=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const se=r.getRenderTarget(),ue=r.state.buffers.depth.getReversed(),me=R.isInstancedMesh===!0,oe=R.isBatchedMesh===!0,ye=!!E.map,ge=!!E.matcap,Be=!!k,z=!!E.aoMap,$e=!!E.lightMap,ke=!!E.bumpMap,V=!!E.normalMap,X=!!E.displacementMap,fe=!!E.emissiveMap,ie=!!E.metalnessMap,D=!!E.roughnessMap,F=E.anisotropy>0,G=E.clearcoat>0,q=E.dispersion>0,ne=E.iridescence>0,ae=E.sheen>0,be=E.transmission>0,Ee=F&&!!E.anisotropyMap,Me=G&&!!E.clearcoatMap,qe=G&&!!E.clearcoatNormalMap,ve=G&&!!E.clearcoatRoughnessMap,Ue=ne&&!!E.iridescenceMap,Qe=ne&&!!E.iridescenceThicknessMap,De=ae&&!!E.sheenColorMap,we=ae&&!!E.sheenRoughnessMap,He=!!E.specularMap,pe=!!E.specularColorMap,Se=!!E.specularIntensityMap,O=be&&!!E.transmissionMap,le=be&&!!E.thicknessMap,j=!!E.gradientMap,re=!!E.alphaMap,Ae=E.alphaTest>0,_e=!!E.alphaHash,Ye=!!E.extensions;let pt=Gi;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(pt=r.toneMapping);const _t={shaderID:I,shaderType:E.type,shaderName:E.name,vertexShader:he,fragmentShader:W,defines:E.defines,customVertexShaderID:H,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:oe,batchingColor:oe&&R._colorsTexture!==null,instancing:me,instancingColor:me&&R.instanceColor!==null,instancingMorph:me&&R.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Wr,alphaToCoverage:!!E.alphaToCoverage,map:ye,matcap:ge,envMap:Be,envMapMode:Be&&k.mapping,envMapCubeUVHeight:M,aoMap:z,lightMap:$e,bumpMap:ke,normalMap:V,displacementMap:p&&X,emissiveMap:fe,normalMapObjectSpace:V&&E.normalMapType===af,normalMapTangentSpace:V&&E.normalMapType===yc,metalnessMap:ie,roughnessMap:D,anisotropy:F,anisotropyMap:Ee,clearcoat:G,clearcoatMap:Me,clearcoatNormalMap:qe,clearcoatRoughnessMap:ve,dispersion:q,iridescence:ne,iridescenceMap:Ue,iridescenceThicknessMap:Qe,sheen:ae,sheenColorMap:De,sheenRoughnessMap:we,specularMap:He,specularColorMap:pe,specularIntensityMap:Se,transmission:be,transmissionMap:O,thicknessMap:le,gradientMap:j,opaque:E.transparent===!1&&E.blending===Dr&&E.alphaToCoverage===!1,alphaMap:re,alphaTest:Ae,alphaHash:_e,combine:E.combine,mapUv:ye&&y(E.map.channel),aoMapUv:z&&y(E.aoMap.channel),lightMapUv:$e&&y(E.lightMap.channel),bumpMapUv:ke&&y(E.bumpMap.channel),normalMapUv:V&&y(E.normalMap.channel),displacementMapUv:X&&y(E.displacementMap.channel),emissiveMapUv:fe&&y(E.emissiveMap.channel),metalnessMapUv:ie&&y(E.metalnessMap.channel),roughnessMapUv:D&&y(E.roughnessMap.channel),anisotropyMapUv:Ee&&y(E.anisotropyMap.channel),clearcoatMapUv:Me&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(E.sheenRoughnessMap.channel),specularMapUv:He&&y(E.specularMap.channel),specularColorMapUv:pe&&y(E.specularColorMap.channel),specularIntensityMapUv:Se&&y(E.specularIntensityMap.channel),transmissionMapUv:O&&y(E.transmissionMap.channel),thicknessMapUv:le&&y(E.thicknessMap.channel),alphaMapUv:re&&y(E.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(V||F),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(ye||re),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ue,skinning:R.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:$,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===rt,decodeVideoTextureEmissive:fe&&E.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(E.emissiveMap.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mi,flipSided:E.side===Ot,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function u(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)A.push(C),A.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(v(A,E),S(A,E),A.push(r.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function v(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function S(E,A){s.disableAll(),A.supportsVertexTextures&&s.enable(0),A.instancing&&s.enable(1),A.instancingColor&&s.enable(2),A.instancingMorph&&s.enable(3),A.matcap&&s.enable(4),A.envMap&&s.enable(5),A.normalMapObjectSpace&&s.enable(6),A.normalMapTangentSpace&&s.enable(7),A.clearcoat&&s.enable(8),A.iridescence&&s.enable(9),A.alphaTest&&s.enable(10),A.vertexColors&&s.enable(11),A.vertexAlphas&&s.enable(12),A.vertexUv1s&&s.enable(13),A.vertexUv2s&&s.enable(14),A.vertexUv3s&&s.enable(15),A.vertexTangents&&s.enable(16),A.anisotropy&&s.enable(17),A.alphaHash&&s.enable(18),A.batching&&s.enable(19),A.dispersion&&s.enable(20),A.batchingColor&&s.enable(21),E.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reverseDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),E.push(s.mask)}function _(E){const A=g[E.type];let C;if(A){const T=wi[A];C=Df.clone(T.uniforms)}else C=E.uniforms;return C}function b(E,A){let C;for(let T=0,R=h.length;T<R;T++){const B=h[T];if(B.cacheKey===A){C=B,++C.usedTimes;break}}return C===void 0&&(C=new uA(r,A,E,a),h.push(C)),C}function x(E){if(--E.usedTimes===0){const A=h.indexOf(E);h[A]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:_,acquireProgram:b,releaseProgram:x,releaseShaderCache:w,programs:h,dispose:U}}function gA(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let s=r.get(o);return s===void 0&&(s={},r.set(o,s)),s}function i(o){r.delete(o)}function n(o,s,l){r.get(o)[s]=l}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function vA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Oh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zh(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function o(f,p,m,g,y,d){let u=r[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:y,group:d},r[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=y,u.group=d),e++,u}function s(f,p,m,g,y,d){const u=o(f,p,m,g,y,d);m.transmission>0?i.push(u):m.transparent===!0?n.push(u):t.push(u)}function l(f,p,m,g,y,d){const u=o(f,p,m,g,y,d);m.transmission>0?i.unshift(u):m.transparent===!0?n.unshift(u):t.unshift(u)}function c(f,p){t.length>1&&t.sort(f||vA),i.length>1&&i.sort(p||Oh),n.length>1&&n.sort(p||Oh)}function h(){for(let f=e,p=r.length;f<p;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:s,unshift:l,finish:h,sort:c}}function AA(){let r=new WeakMap;function e(i,n){const a=r.get(i);let o;return a===void 0?(o=new zh,r.set(i,[o])):n>=a.length?(o=new zh,a.push(o)):o=a[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function _A(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Je};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function yA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let EA=0;function SA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xA(r){const e=new _A,t=yA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const n=new Y,a=new ut,o=new ut;function s(c){let h=0,f=0,p=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,y=0,d=0,u=0,v=0,S=0,_=0,b=0,x=0,w=0;c.sort(SA);for(let E=0,A=c.length;E<A;E++){const C=c[E],T=C.color,R=C.intensity,B=C.distance,L=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=T.r*R,f+=T.g*R,p+=T.b*R;else if(C.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(C.sh.coefficients[N],R);w++}else if(C.isDirectionalLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,M=t.get(C);M.shadowIntensity=k.intensity,M.shadowBias=k.bias,M.shadowNormalBias=k.normalBias,M.shadowRadius=k.radius,M.shadowMapSize=k.mapSize,i.directionalShadow[m]=M,i.directionalShadowMap[m]=L,i.directionalShadowMatrix[m]=C.shadow.matrix,v++}i.directional[m]=N,m++}else if(C.isSpotLight){const N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(T).multiplyScalar(R),N.distance=B,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,i.spot[y]=N;const k=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,k.updateMatrices(C),C.castShadow&&x++),i.spotLightMatrix[y]=k.matrix,C.castShadow){const M=t.get(C);M.shadowIntensity=k.intensity,M.shadowBias=k.bias,M.shadowNormalBias=k.normalBias,M.shadowRadius=k.radius,M.shadowMapSize=k.mapSize,i.spotShadow[y]=M,i.spotShadowMap[y]=L,_++}y++}else if(C.isRectAreaLight){const N=e.get(C);N.color.copy(T).multiplyScalar(R),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),i.rectArea[d]=N,d++}else if(C.isPointLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){const k=C.shadow,M=t.get(C);M.shadowIntensity=k.intensity,M.shadowBias=k.bias,M.shadowNormalBias=k.normalBias,M.shadowRadius=k.radius,M.shadowMapSize=k.mapSize,M.shadowCameraNear=k.camera.near,M.shadowCameraFar=k.camera.far,i.pointShadow[g]=M,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=C.shadow.matrix,S++}i.point[g]=N,g++}else if(C.isHemisphereLight){const N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(R),N.groundColor.copy(C.groundColor).multiplyScalar(R),i.hemi[u]=N,u++}}d>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;const U=i.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==d||U.hemiLength!==u||U.numDirectionalShadows!==v||U.numPointShadows!==S||U.numSpotShadows!==_||U.numSpotMaps!==b||U.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=d,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+b-x,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=w,U.directionalLength=m,U.pointLength=g,U.spotLength=y,U.rectAreaLength=d,U.hemiLength=u,U.numDirectionalShadows=v,U.numPointShadows=S,U.numSpotShadows=_,U.numSpotMaps=b,U.numLightProbes=w,i.version=EA++)}function l(c,h){let f=0,p=0,m=0,g=0,y=0;const d=h.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const S=c[u];if(S.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(d),f++}else if(S.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(d),_.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(d),m++}else if(S.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const _=i.point[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const _=i.hemi[y];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(d),y++}}}return{setup:s,setupView:l,state:i}}function Wh(r){const e=new xA(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function s(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function wA(r){let e=new WeakMap;function t(n,a=0){const o=e.get(n);let s;return o===void 0?(s=new Wh(r),e.set(n,[s])):a>=o.length?(s=new Wh(r),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}const bA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UA(r,e,t){let i=new Do;const n=new We,a=new We,o=new vt,s=new Jf({depthPacking:nf}),l=new Zf,c={},h=t.maxTextureSize,f={[Ti]:Ot,[Ot]:Ti,[Mi]:Mi},p=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:bA,fragmentShader:CA}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wt(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let u=this.type;this.render=function(x,w,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const E=r.getRenderTarget(),A=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),T=r.state;T.setBlending(Wi),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const R=u!==Ui&&this.type===Ui,B=u===Ui&&this.type!==Ui;for(let L=0,N=x.length;L<N;L++){const k=x[L],M=k.shadow;if(M===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(M.autoUpdate===!1&&M.needsUpdate===!1)continue;n.copy(M.mapSize);const I=M.getFrameExtents();if(n.multiply(I),a.copy(M.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/I.x),n.x=a.x*I.x,M.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/I.y),n.y=a.y*I.y,M.mapSize.y=a.y)),M.map===null||R===!0||B===!0){const K=this.type!==Ui?{minFilter:di,magFilter:di}:{};M.map!==null&&M.map.dispose(),M.map=new lr(n.x,n.y,K),M.map.texture.name=k.name+".shadowMap",M.camera.updateProjectionMatrix()}r.setRenderTarget(M.map),r.clear();const P=M.getViewportCount();for(let K=0;K<P;K++){const $=M.getViewport(K);o.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),T.viewport(o),M.updateMatrices(k,K),i=M.getFrustum(),_(w,U,M.camera,k,this.type)}M.isPointLightShadow!==!0&&this.type===Ui&&v(M,U),M.needsUpdate=!1}u=this.type,d.needsUpdate=!1,r.setRenderTarget(E,A,C)};function v(x,w){const U=e.update(y);p.defines.VSM_SAMPLES!==x.blurSamples&&(p.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new lr(n.x,n.y)),p.uniforms.shadow_pass.value=x.map.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(w,null,U,p,y,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(w,null,U,m,y,null)}function S(x,w,U,E){let A=null;const C=U.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(C!==void 0)A=C;else if(A=U.isPointLight===!0?l:s,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const T=A.uuid,R=w.uuid;let B=c[T];B===void 0&&(B={},c[T]=B);let L=B[R];L===void 0&&(L=A.clone(),B[R]=L,w.addEventListener("dispose",b)),A=L}if(A.visible=w.visible,A.wireframe=w.wireframe,E===Ui?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,U.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const T=r.properties.get(A);T.light=U}return A}function _(x,w,U,E,A){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&A===Ui)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,x.matrixWorld);const T=e.update(x),R=x.material;if(Array.isArray(R)){const B=T.groups;for(let L=0,N=B.length;L<N;L++){const k=B[L],M=R[k.materialIndex];if(M&&M.visible){const I=S(x,M,E,A);x.onBeforeShadow(r,x,w,U,T,I,k),r.renderBufferDirect(U,null,T,I,x,k),x.onAfterShadow(r,x,w,U,T,I,k)}}}else if(R.visible){const B=S(x,R,E,A);x.onBeforeShadow(r,x,w,U,T,B,null),r.renderBufferDirect(U,null,T,B,x,null),x.onAfterShadow(r,x,w,U,T,B,null)}}const C=x.children;for(let T=0,R=C.length;T<R;T++)_(C[T],w,U,E,A)}function b(x){x.target.removeEventListener("dispose",b);for(const w in c){const U=c[w],E=x.target.uuid;E in U&&(U[E].dispose(),delete U[E])}}}const TA={[xs]:ws,[bs]:Ts,[Cs]:Ms,[Nr]:Us,[ws]:xs,[Ts]:bs,[Ms]:Cs,[Us]:Nr};function MA(r,e){function t(){let O=!1;const le=new vt;let j=null;const re=new vt(0,0,0,0);return{setMask:function(Ae){j!==Ae&&!O&&(r.colorMask(Ae,Ae,Ae,Ae),j=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,_e,Ye,pt,_t){_t===!0&&(Ae*=pt,_e*=pt,Ye*=pt),le.set(Ae,_e,Ye,pt),re.equals(le)===!1&&(r.clearColor(Ae,_e,Ye,pt),re.copy(le))},reset:function(){O=!1,j=null,re.set(-1,0,0,0)}}}function i(){let O=!1,le=!1,j=null,re=null,Ae=null;return{setReversed:function(_e){if(le!==_e){const Ye=e.get("EXT_clip_control");le?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);const pt=Ae;Ae=null,this.setClear(pt)}le=_e},getReversed:function(){return le},setTest:function(_e){_e?se(r.DEPTH_TEST):ue(r.DEPTH_TEST)},setMask:function(_e){j!==_e&&!O&&(r.depthMask(_e),j=_e)},setFunc:function(_e){if(le&&(_e=TA[_e]),re!==_e){switch(_e){case xs:r.depthFunc(r.NEVER);break;case ws:r.depthFunc(r.ALWAYS);break;case bs:r.depthFunc(r.LESS);break;case Nr:r.depthFunc(r.LEQUAL);break;case Cs:r.depthFunc(r.EQUAL);break;case Us:r.depthFunc(r.GEQUAL);break;case Ts:r.depthFunc(r.GREATER);break;case Ms:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=_e}},setLocked:function(_e){O=_e},setClear:function(_e){Ae!==_e&&(le&&(_e=1-_e),r.clearDepth(_e),Ae=_e)},reset:function(){O=!1,j=null,re=null,Ae=null,le=!1}}}function n(){let O=!1,le=null,j=null,re=null,Ae=null,_e=null,Ye=null,pt=null,_t=null;return{setTest:function(it){O||(it?se(r.STENCIL_TEST):ue(r.STENCIL_TEST))},setMask:function(it){le!==it&&!O&&(r.stencilMask(it),le=it)},setFunc:function(it,$t,ei){(j!==it||re!==$t||Ae!==ei)&&(r.stencilFunc(it,$t,ei),j=it,re=$t,Ae=ei)},setOp:function(it,$t,ei){(_e!==it||Ye!==$t||pt!==ei)&&(r.stencilOp(it,$t,ei),_e=it,Ye=$t,pt=ei)},setLocked:function(it){O=it},setClear:function(it){_t!==it&&(r.clearStencil(it),_t=it)},reset:function(){O=!1,le=null,j=null,re=null,Ae=null,_e=null,Ye=null,pt=null,_t=null}}}const a=new t,o=new i,s=new n,l=new WeakMap,c=new WeakMap;let h={},f={},p=new WeakMap,m=[],g=null,y=!1,d=null,u=null,v=null,S=null,_=null,b=null,x=null,w=new Je(0,0,0),U=0,E=!1,A=null,C=null,T=null,R=null,B=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const M=r.getParameter(r.VERSION);M.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(M)[1]),N=k>=1):M.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),N=k>=2);let I=null,P={};const K=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),he=new vt().fromArray(K),W=new vt().fromArray($);function H(O,le,j,re){const Ae=new Uint8Array(4),_e=r.createTexture();r.bindTexture(O,_e),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<j;Ye++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(le+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return _e}const ce={};ce[r.TEXTURE_2D]=H(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=H(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=H(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=H(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),se(r.DEPTH_TEST),o.setFunc(Nr),ke(!1),V(nc),se(r.CULL_FACE),z(Wi);function se(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function ue(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function me(O,le){return f[O]!==le?(r.bindFramebuffer(O,le),f[O]=le,O===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=le),O===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=le),!0):!1}function oe(O,le){let j=m,re=!1;if(O){j=p.get(le),j===void 0&&(j=[],p.set(le,j));const Ae=O.textures;if(j.length!==Ae.length||j[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,Ye=Ae.length;_e<Ye;_e++)j[_e]=r.COLOR_ATTACHMENT0+_e;j.length=Ae.length,re=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,re=!0);re&&r.drawBuffers(j)}function ye(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const ge={[rr]:r.FUNC_ADD,[Mp]:r.FUNC_SUBTRACT,[Fp]:r.FUNC_REVERSE_SUBTRACT};ge[Rp]=r.MIN,ge[Ip]=r.MAX;const Be={[Bp]:r.ZERO,[Qp]:r.ONE,[Lp]:r.SRC_COLOR,[Es]:r.SRC_ALPHA,[Op]:r.SRC_ALPHA_SATURATE,[Pp]:r.DST_COLOR,[Np]:r.DST_ALPHA,[Dp]:r.ONE_MINUS_SRC_COLOR,[Ss]:r.ONE_MINUS_SRC_ALPHA,[Vp]:r.ONE_MINUS_DST_COLOR,[kp]:r.ONE_MINUS_DST_ALPHA,[zp]:r.CONSTANT_COLOR,[Wp]:r.ONE_MINUS_CONSTANT_COLOR,[Gp]:r.CONSTANT_ALPHA,[Jp]:r.ONE_MINUS_CONSTANT_ALPHA};function z(O,le,j,re,Ae,_e,Ye,pt,_t,it){if(O===Wi){y===!0&&(ue(r.BLEND),y=!1);return}if(y===!1&&(se(r.BLEND),y=!0),O!==Tp){if(O!==d||it!==E){if((u!==rr||_!==rr)&&(r.blendEquation(r.FUNC_ADD),u=rr,_=rr),it)switch(O){case Dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sc:r.blendFunc(r.ONE,r.ONE);break;case oc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case oc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case lc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,S=null,b=null,x=null,w.set(0,0,0),U=0,d=O,E=it}return}Ae=Ae||le,_e=_e||j,Ye=Ye||re,(le!==u||Ae!==_)&&(r.blendEquationSeparate(ge[le],ge[Ae]),u=le,_=Ae),(j!==v||re!==S||_e!==b||Ye!==x)&&(r.blendFuncSeparate(Be[j],Be[re],Be[_e],Be[Ye]),v=j,S=re,b=_e,x=Ye),(pt.equals(w)===!1||_t!==U)&&(r.blendColor(pt.r,pt.g,pt.b,_t),w.copy(pt),U=_t),d=O,E=!1}function $e(O,le){O.side===Mi?ue(r.CULL_FACE):se(r.CULL_FACE);let j=O.side===Ot;le&&(j=!j),ke(j),O.blending===Dr&&O.transparent===!1?z(Wi):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),a.setMask(O.colorWrite);const re=O.stencilWrite;s.setTest(re),re&&(s.setMask(O.stencilWriteMask),s.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),s.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(O){A!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),A=O)}function V(O){O!==bp?(se(r.CULL_FACE),O!==C&&(O===nc?r.cullFace(r.BACK):O===Cp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ue(r.CULL_FACE),C=O}function X(O){O!==T&&(N&&r.lineWidth(O),T=O)}function fe(O,le,j){O?(se(r.POLYGON_OFFSET_FILL),(R!==le||B!==j)&&(r.polygonOffset(le,j),R=le,B=j)):ue(r.POLYGON_OFFSET_FILL)}function ie(O){O?se(r.SCISSOR_TEST):ue(r.SCISSOR_TEST)}function D(O){O===void 0&&(O=r.TEXTURE0+L-1),I!==O&&(r.activeTexture(O),I=O)}function F(O,le,j){j===void 0&&(I===null?j=r.TEXTURE0+L-1:j=I);let re=P[j];re===void 0&&(re={type:void 0,texture:void 0},P[j]=re),(re.type!==O||re.texture!==le)&&(I!==j&&(r.activeTexture(j),I=j),r.bindTexture(O,le||ce[O]),re.type=O,re.texture=le)}function G(){const O=P[I];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(O){he.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),he.copy(O))}function we(O){W.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),W.copy(O))}function He(O,le){let j=c.get(le);j===void 0&&(j=new WeakMap,c.set(le,j));let re=j.get(O);re===void 0&&(re=r.getUniformBlockIndex(le,O.name),j.set(O,re))}function pe(O,le){const j=c.get(le).get(O);l.get(le)!==j&&(r.uniformBlockBinding(le,j,O.__bindingPointIndex),l.set(le,j))}function Se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},I=null,P={},f={},p=new WeakMap,m=[],g=null,y=!1,d=null,u=null,v=null,S=null,_=null,b=null,x=null,w=new Je(0,0,0),U=0,E=!1,A=null,C=null,T=null,R=null,B=null,he.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:se,disable:ue,bindFramebuffer:me,drawBuffers:oe,useProgram:ye,setBlending:z,setMaterial:$e,setFlipSided:ke,setCullFace:V,setLineWidth:X,setPolygonOffset:fe,setScissorTest:ie,activeTexture:D,bindTexture:F,unbindTexture:G,compressedTexImage2D:q,compressedTexImage3D:ne,texImage2D:Ue,texImage3D:Qe,updateUBOMapping:He,uniformBlockBinding:pe,texStorage2D:qe,texStorage3D:ve,texSubImage2D:ae,texSubImage3D:be,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Me,scissor:De,viewport:we,reset:Se}}function FA(r,e,t,i,n,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,F){return m?new OffscreenCanvas(D,F):bn("canvas")}function y(D,F,G){let q=1;const ne=ie(D);if((ne.width>G||ne.height>G)&&(q=G/Math.max(ne.width,ne.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ae=Math.floor(q*ne.width),be=Math.floor(q*ne.height);f===void 0&&(f=g(ae,be));const Ee=F?g(ae,be):f;return Ee.width=ae,Ee.height=be,Ee.getContext("2d").drawImage(D,0,0,ae,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ae+"x"+be+")."),Ee}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),D;return D}function d(D){return D.generateMipmaps}function u(D){r.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(D,F,G,q,ne=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ae=F;if(F===r.RED&&(G===r.FLOAT&&(ae=r.R32F),G===r.HALF_FLOAT&&(ae=r.R16F),G===r.UNSIGNED_BYTE&&(ae=r.R8)),F===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.R8UI),G===r.UNSIGNED_SHORT&&(ae=r.R16UI),G===r.UNSIGNED_INT&&(ae=r.R32UI),G===r.BYTE&&(ae=r.R8I),G===r.SHORT&&(ae=r.R16I),G===r.INT&&(ae=r.R32I)),F===r.RG&&(G===r.FLOAT&&(ae=r.RG32F),G===r.HALF_FLOAT&&(ae=r.RG16F),G===r.UNSIGNED_BYTE&&(ae=r.RG8)),F===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RG8UI),G===r.UNSIGNED_SHORT&&(ae=r.RG16UI),G===r.UNSIGNED_INT&&(ae=r.RG32UI),G===r.BYTE&&(ae=r.RG8I),G===r.SHORT&&(ae=r.RG16I),G===r.INT&&(ae=r.RG32I)),F===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),G===r.UNSIGNED_INT&&(ae=r.RGB32UI),G===r.BYTE&&(ae=r.RGB8I),G===r.SHORT&&(ae=r.RGB16I),G===r.INT&&(ae=r.RGB32I)),F===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),G===r.UNSIGNED_INT&&(ae=r.RGBA32UI),G===r.BYTE&&(ae=r.RGBA8I),G===r.SHORT&&(ae=r.RGBA16I),G===r.INT&&(ae=r.RGBA32I)),F===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),F===r.RGBA){const be=ne?ca:Ke.getTransfer(q);G===r.FLOAT&&(ae=r.RGBA32F),G===r.HALF_FLOAT&&(ae=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ae=be===rt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function _(D,F){let G;return D?F===null||F===sr||F===Vr?G=r.DEPTH24_STENCIL8:F===Ri?G=r.DEPTH32F_STENCIL8:F===En&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===sr||F===Vr?G=r.DEPTH_COMPONENT24:F===Ri?G=r.DEPTH_COMPONENT32F:F===En&&(G=r.DEPTH_COMPONENT16),G}function b(D,F){return d(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==Ei?Math.log2(Math.max(F.width,F.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?F.mipmaps.length:1}function x(D){const F=D.target;F.removeEventListener("dispose",x),U(F),F.isVideoTexture&&h.delete(F)}function w(D){const F=D.target;F.removeEventListener("dispose",w),A(F)}function U(D){const F=i.get(D);if(F.__webglInit===void 0)return;const G=D.source,q=p.get(G);if(q){const ne=q[F.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(D),Object.keys(q).length===0&&p.delete(G)}i.remove(D)}function E(D){const F=i.get(D);r.deleteTexture(F.__webglTexture);const G=D.source,q=p.get(G);delete q[F.__cacheKey],o.memory.textures--}function A(D){const F=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(F.__webglFramebuffer[q]))for(let ne=0;ne<F.__webglFramebuffer[q].length;ne++)r.deleteFramebuffer(F.__webglFramebuffer[q][ne]);else r.deleteFramebuffer(F.__webglFramebuffer[q]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[q])}else{if(Array.isArray(F.__webglFramebuffer))for(let q=0;q<F.__webglFramebuffer.length;q++)r.deleteFramebuffer(F.__webglFramebuffer[q]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let q=0;q<F.__webglColorRenderbuffer.length;q++)F.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[q]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}const G=D.textures;for(let q=0,ne=G.length;q<ne;q++){const ae=i.get(G[q]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(G[q])}i.remove(D)}let C=0;function T(){C=0}function R(){const D=C;return D>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+n.maxTextures),C+=1,D}function B(D){const F=[];return F.push(D.wrapS),F.push(D.wrapT),F.push(D.wrapR||0),F.push(D.magFilter),F.push(D.minFilter),F.push(D.anisotropy),F.push(D.internalFormat),F.push(D.format),F.push(D.type),F.push(D.generateMipmaps),F.push(D.premultiplyAlpha),F.push(D.flipY),F.push(D.unpackAlignment),F.push(D.colorSpace),F.join()}function L(D,F){const G=i.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){const q=D.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(G,D,F);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+F)}function N(D,F){const G=i.get(D);if(D.version>0&&G.__version!==D.version){W(G,D,F);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+F)}function k(D,F){const G=i.get(D);if(D.version>0&&G.__version!==D.version){W(G,D,F);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+F)}function M(D,F){const G=i.get(D);if(D.version>0&&G.__version!==D.version){H(G,D,F);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+F)}const I={[ia]:r.REPEAT,[nr]:r.CLAMP_TO_EDGE,[Bs]:r.MIRRORED_REPEAT},P={[di]:r.NEAREST,[tf]:r.NEAREST_MIPMAP_NEAREST,[ra]:r.NEAREST_MIPMAP_LINEAR,[Ei]:r.LINEAR,[Qs]:r.LINEAR_MIPMAP_NEAREST,[ar]:r.LINEAR_MIPMAP_LINEAR},K={[sf]:r.NEVER,[df]:r.ALWAYS,[of]:r.LESS,[Sc]:r.LEQUAL,[lf]:r.EQUAL,[uf]:r.GEQUAL,[cf]:r.GREATER,[hf]:r.NOTEQUAL};function $(D,F){if(F.type===Ri&&e.has("OES_texture_float_linear")===!1&&(F.magFilter===Ei||F.magFilter===Qs||F.magFilter===ra||F.magFilter===ar||F.minFilter===Ei||F.minFilter===Qs||F.minFilter===ra||F.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,I[F.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,I[F.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,I[F.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,P[F.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,P[F.minFilter]),F.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,K[F.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===di||F.minFilter!==ra&&F.minFilter!==ar||F.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||i.get(F).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,n.getMaxAnisotropy())),i.get(F).__currentAnisotropy=F.anisotropy}}}function he(D,F){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,F.addEventListener("dispose",x));const q=F.source;let ne=p.get(q);ne===void 0&&(ne={},p.set(q,ne));const ae=B(F);if(ae!==D.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[ae].usedTimes++;const be=ne[D.__cacheKey];be!==void 0&&(ne[D.__cacheKey].usedTimes--,be.usedTimes===0&&E(F)),D.__cacheKey=ae,D.__webglTexture=ne[ae].texture}return G}function W(D,F,G){let q=r.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),F.isData3DTexture&&(q=r.TEXTURE_3D);const ne=he(D,F),ae=F.source;t.bindTexture(q,D.__webglTexture,r.TEXTURE0+G);const be=i.get(ae);if(ae.version!==be.__version||ne===!0){t.activeTexture(r.TEXTURE0+G);const Ee=Ke.getPrimaries(Ke.workingColorSpace),Me=F.colorSpace===Ji?null:Ke.getPrimaries(F.colorSpace),qe=F.colorSpace===Ji||Ee===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,F.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,F.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ve=y(F.image,!1,n.maxTextureSize);ve=fe(F,ve);const Ue=a.convert(F.format,F.colorSpace),Qe=a.convert(F.type);let De=S(F.internalFormat,Ue,Qe,F.colorSpace,F.isVideoTexture);$(q,F);let we;const He=F.mipmaps,pe=F.isVideoTexture!==!0,Se=be.__version===void 0||ne===!0,O=ae.dataReady,le=b(F,ve);if(F.isDepthTexture)De=_(F.format===zr,F.type),Se&&(pe?t.texStorage2D(r.TEXTURE_2D,1,De,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,De,ve.width,ve.height,0,Ue,Qe,null));else if(F.isDataTexture)if(He.length>0){pe&&Se&&t.texStorage2D(r.TEXTURE_2D,le,De,He[0].width,He[0].height);for(let j=0,re=He.length;j<re;j++)we=He[j],pe?O&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,we.width,we.height,Ue,Qe,we.data):t.texImage2D(r.TEXTURE_2D,j,De,we.width,we.height,0,Ue,Qe,we.data);F.generateMipmaps=!1}else pe?(Se&&t.texStorage2D(r.TEXTURE_2D,le,De,ve.width,ve.height),O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,Ue,Qe,ve.data)):t.texImage2D(r.TEXTURE_2D,0,De,ve.width,ve.height,0,Ue,Qe,ve.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){pe&&Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,De,He[0].width,He[0].height,ve.depth);for(let j=0,re=He.length;j<re;j++)if(we=He[j],F.format!==pi)if(Ue!==null)if(pe){if(O)if(F.layerUpdates.size>0){const Ae=fh(we.width,we.height,F.format,F.type);for(const _e of F.layerUpdates){const Ye=we.data.subarray(_e*Ae/we.data.BYTES_PER_ELEMENT,(_e+1)*Ae/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,_e,we.width,we.height,1,Ue,Ye)}F.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,we.width,we.height,ve.depth,Ue,we.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,De,we.width,we.height,ve.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,we.width,we.height,ve.depth,Ue,Qe,we.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,De,we.width,we.height,ve.depth,0,Ue,Qe,we.data)}else{pe&&Se&&t.texStorage2D(r.TEXTURE_2D,le,De,He[0].width,He[0].height);for(let j=0,re=He.length;j<re;j++)we=He[j],F.format!==pi?Ue!==null?pe?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,we.width,we.height,Ue,we.data):t.compressedTexImage2D(r.TEXTURE_2D,j,De,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?O&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,we.width,we.height,Ue,Qe,we.data):t.texImage2D(r.TEXTURE_2D,j,De,we.width,we.height,0,Ue,Qe,we.data)}else if(F.isDataArrayTexture)if(pe){if(Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,De,ve.width,ve.height,ve.depth),O)if(F.layerUpdates.size>0){const j=fh(ve.width,ve.height,F.format,F.type);for(const re of F.layerUpdates){const Ae=ve.data.subarray(re*j/ve.data.BYTES_PER_ELEMENT,(re+1)*j/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,ve.width,ve.height,1,Ue,Qe,Ae)}F.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Qe,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,De,ve.width,ve.height,ve.depth,0,Ue,Qe,ve.data);else if(F.isData3DTexture)pe?(Se&&t.texStorage3D(r.TEXTURE_3D,le,De,ve.width,ve.height,ve.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Qe,ve.data)):t.texImage3D(r.TEXTURE_3D,0,De,ve.width,ve.height,ve.depth,0,Ue,Qe,ve.data);else if(F.isFramebufferTexture){if(Se)if(pe)t.texStorage2D(r.TEXTURE_2D,le,De,ve.width,ve.height);else{let j=ve.width,re=ve.height;for(let Ae=0;Ae<le;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,De,j,re,0,Ue,Qe,null),j>>=1,re>>=1}}else if(He.length>0){if(pe&&Se){const j=ie(He[0]);t.texStorage2D(r.TEXTURE_2D,le,De,j.width,j.height)}for(let j=0,re=He.length;j<re;j++)we=He[j],pe?O&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,Ue,Qe,we):t.texImage2D(r.TEXTURE_2D,j,De,Ue,Qe,we);F.generateMipmaps=!1}else if(pe){if(Se){const j=ie(ve);t.texStorage2D(r.TEXTURE_2D,le,De,j.width,j.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,Qe,ve)}else t.texImage2D(r.TEXTURE_2D,0,De,Ue,Qe,ve);d(F)&&u(q),be.__version=ae.version,F.onUpdate&&F.onUpdate(F)}D.__version=F.version}function H(D,F,G){if(F.image.length!==6)return;const q=he(D,F),ne=F.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+G);const ae=i.get(ne);if(ne.version!==ae.__version||q===!0){t.activeTexture(r.TEXTURE0+G);const be=Ke.getPrimaries(Ke.workingColorSpace),Ee=F.colorSpace===Ji?null:Ke.getPrimaries(F.colorSpace),Me=F.colorSpace===Ji||be===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,F.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,F.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const qe=F.isCompressedTexture||F.image[0].isCompressedTexture,ve=F.image[0]&&F.image[0].isDataTexture,Ue=[];for(let re=0;re<6;re++)!qe&&!ve?Ue[re]=y(F.image[re],!0,n.maxCubemapSize):Ue[re]=ve?F.image[re].image:F.image[re],Ue[re]=fe(F,Ue[re]);const Qe=Ue[0],De=a.convert(F.format,F.colorSpace),we=a.convert(F.type),He=S(F.internalFormat,De,we,F.colorSpace),pe=F.isVideoTexture!==!0,Se=ae.__version===void 0||q===!0,O=ne.dataReady;let le=b(F,Qe);$(r.TEXTURE_CUBE_MAP,F);let j;if(qe){pe&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,He,Qe.width,Qe.height);for(let re=0;re<6;re++){j=Ue[re].mipmaps;for(let Ae=0;Ae<j.length;Ae++){const _e=j[Ae];F.format!==pi?De!==null?pe?O&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,_e.width,_e.height,De,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,He,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,0,0,_e.width,_e.height,De,we,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae,He,_e.width,_e.height,0,De,we,_e.data)}}}else{if(j=F.mipmaps,pe&&Se){j.length>0&&le++;const re=ie(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,He,re.width,re.height)}for(let re=0;re<6;re++)if(ve){pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue[re].width,Ue[re].height,De,we,Ue[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,He,Ue[re].width,Ue[re].height,0,De,we,Ue[re].data);for(let Ae=0;Ae<j.length;Ae++){const _e=j[Ae].image[re].image;pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,_e.width,_e.height,De,we,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,He,_e.width,_e.height,0,De,we,_e.data)}}else{pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,De,we,Ue[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,He,De,we,Ue[re]);for(let Ae=0;Ae<j.length;Ae++){const _e=j[Ae];pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,0,0,De,we,_e.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ae+1,He,De,we,_e.image[re])}}}d(F)&&u(r.TEXTURE_CUBE_MAP),ae.__version=ne.version,F.onUpdate&&F.onUpdate(F)}D.__version=F.version}function ce(D,F,G,q,ne,ae){const be=a.convert(G.format,G.colorSpace),Ee=a.convert(G.type),Me=S(G.internalFormat,be,Ee,G.colorSpace),qe=i.get(F),ve=i.get(G);if(ve.__renderTarget=F,!qe.__hasExternalTextures){const Ue=Math.max(1,F.width>>ae),Qe=Math.max(1,F.height>>ae);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,Me,Ue,Qe,F.depth,0,be,Ee,null):t.texImage2D(ne,ae,Me,Ue,Qe,0,be,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),V(F)?s.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,ne,ve.__webglTexture,0,ke(F)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,ne,ve.__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(D,F,G){if(r.bindRenderbuffer(r.RENDERBUFFER,D),F.depthBuffer){const q=F.depthTexture,ne=q&&q.isDepthTexture?q.type:null,ae=_(F.stencilBuffer,ne),be=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=ke(F);V(F)?s.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ae,F.width,F.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ae,F.width,F.height):r.renderbufferStorage(r.RENDERBUFFER,ae,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,D)}else{const q=F.textures;for(let ne=0;ne<q.length;ne++){const ae=q[ne],be=a.convert(ae.format,ae.colorSpace),Ee=a.convert(ae.type),Me=S(ae.internalFormat,be,Ee,ae.colorSpace),qe=ke(F);G&&V(F)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Me,F.width,F.height):V(F)?s.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,Me,F.width,F.height):r.renderbufferStorage(r.RENDERBUFFER,Me,F.width,F.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(D,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(F.depthTexture);G.__renderTarget=F,(!G.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),L(F.depthTexture,0);const q=G.__webglTexture,ne=ke(F);if(F.depthTexture.format===Or)V(F)?s.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else if(F.depthTexture.format===zr)V(F)?s.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function me(D){const F=i.get(D),G=D.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==D.depthTexture){const q=D.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),q){const ne=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,q.removeEventListener("dispose",ne)};q.addEventListener("dispose",ne),F.__depthDisposeCallback=ne}F.__boundDepthTexture=q}if(D.depthTexture&&!F.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ue(F.__webglFramebuffer,D)}else if(G){F.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer[q]),F.__webglDepthbuffer[q]===void 0)F.__webglDepthbuffer[q]=r.createRenderbuffer(),se(F.__webglDepthbuffer[q],D,!1);else{const ne=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=F.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=r.createRenderbuffer(),se(F.__webglDepthbuffer,D,!1);else{const q=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=F.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(D,F,G){const q=i.get(D);F!==void 0&&ce(q.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&me(D)}function ye(D){const F=D.texture,G=i.get(D),q=i.get(F);D.addEventListener("dispose",w);const ne=D.textures,ae=D.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=F.version,o.memory.textures++),ae){G.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(F.mipmaps&&F.mipmaps.length>0){G.__webglFramebuffer[Ee]=[];for(let Me=0;Me<F.mipmaps.length;Me++)G.__webglFramebuffer[Ee][Me]=r.createFramebuffer()}else G.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ee=0;Ee<F.mipmaps.length;Ee++)G.__webglFramebuffer[Ee]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(be)for(let Ee=0,Me=ne.length;Ee<Me;Ee++){const qe=i.get(ne[Ee]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&V(D)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ne.length;Ee++){const Me=ne[Ee];G.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Ee]);const qe=a.convert(Me.format,Me.colorSpace),ve=a.convert(Me.type),Ue=S(Me.internalFormat,qe,ve,Me.colorSpace,D.isXRRenderTarget===!0),Qe=ke(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,Ue,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,G.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),se(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),$(r.TEXTURE_CUBE_MAP,F);for(let Ee=0;Ee<6;Ee++)if(F.mipmaps&&F.mipmaps.length>0)for(let Me=0;Me<F.mipmaps.length;Me++)ce(G.__webglFramebuffer[Ee][Me],D,F,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Me);else ce(G.__webglFramebuffer[Ee],D,F,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);d(F)&&u(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let Ee=0,Me=ne.length;Ee<Me;Ee++){const qe=ne[Ee],ve=i.get(qe);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),$(r.TEXTURE_2D,qe),ce(G.__webglFramebuffer,D,qe,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),d(qe)&&u(r.TEXTURE_2D)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,q.__webglTexture),$(Ee,F),F.mipmaps&&F.mipmaps.length>0)for(let Me=0;Me<F.mipmaps.length;Me++)ce(G.__webglFramebuffer[Me],D,F,r.COLOR_ATTACHMENT0,Ee,Me);else ce(G.__webglFramebuffer,D,F,r.COLOR_ATTACHMENT0,Ee,0);d(F)&&u(Ee),t.unbindTexture()}D.depthBuffer&&me(D)}function ge(D){const F=D.textures;for(let G=0,q=F.length;G<q;G++){const ne=F[G];if(d(ne)){const ae=v(D),be=i.get(ne).__webglTexture;t.bindTexture(ae,be),u(ae),t.unbindTexture()}}}const Be=[],z=[];function $e(D){if(D.samples>0){if(V(D)===!1){const F=D.textures,G=D.width,q=D.height;let ne=r.COLOR_BUFFER_BIT;const ae=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=i.get(D),Ee=F.length>1;if(Ee)for(let Me=0;Me<F.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<F.length;Me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const qe=i.get(F[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,G,q,0,0,G,q,ne,r.NEAREST),l===!0&&(Be.length=0,z.length=0,Be.push(r.COLOR_ATTACHMENT0+Me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Be.push(ae),z.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let Me=0;Me<F.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const qe=i.get(F[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const F=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[F])}}}function ke(D){return Math.min(n.maxSamples,D.samples)}function V(D){const F=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function X(D){const F=o.render.frame;h.get(D)!==F&&(h.set(D,F),D.update())}function fe(D,F){const G=D.colorSpace,q=D.format,ne=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==Wr&&G!==Ji&&(Ke.getTransfer(G)===rt?(q!==pi||ne!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),F}function ie(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=T,this.setTexture2D=L,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=M,this.rebindTextures=oe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=V}function RA(r,e){function t(i,n=Ji){let a;const o=Ke.getTransfer(n);if(i===Fi)return r.UNSIGNED_BYTE;if(i===Ds)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Ns)return r.UNSIGNED_SHORT_5_5_5_1;if(i===dc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===hc)return r.BYTE;if(i===uc)return r.SHORT;if(i===En)return r.UNSIGNED_SHORT;if(i===Ls)return r.INT;if(i===sr)return r.UNSIGNED_INT;if(i===Ri)return r.FLOAT;if(i===Sn)return r.HALF_FLOAT;if(i===pc)return r.ALPHA;if(i===fc)return r.RGB;if(i===pi)return r.RGBA;if(i===mc)return r.LUMINANCE;if(i===gc)return r.LUMINANCE_ALPHA;if(i===Or)return r.DEPTH_COMPONENT;if(i===zr)return r.DEPTH_STENCIL;if(i===vc)return r.RED;if(i===ks)return r.RED_INTEGER;if(i===Ac)return r.RG;if(i===Ps)return r.RG_INTEGER;if(i===Vs)return r.RGBA_INTEGER;if(i===na||i===aa||i===sa||i===oa)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===na)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===na)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Os||i===zs||i===Ws||i===Gs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Os)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ws)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Js||i===Zs||i===Hs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Js||i===Zs)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Hs)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ys||i===Xs||i===js||i===Ks||i===qs||i===$s||i===eo||i===to||i===io||i===ro||i===no||i===ao||i===so||i===oo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ys)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xs)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===js)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ks)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qs)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$s)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===to)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===io)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ro)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===no)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ao)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===so)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===lo||i===co)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===la)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===co)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===ho||i===uo||i===po)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===la)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ho)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const IA={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const d=t.getJointPose(y,i),u=this._getHandJoint(c,y);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(IA)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const BA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Qt,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ki({vertexShader:BA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DA extends or{constructor(e,t){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,g=null;const y=new LA,d=t.getContextAttributes();let u=null,v=null;const S=[],_=[],b=new We;let x=null;const w=new ai;w.viewport=new vt;const U=new ai;U.viewport=new vt;const E=[w,U],A=new im;let C=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let H=S[W];return H===void 0&&(H=new jo,S[W]=H),H.getTargetRaySpace()},this.getControllerGrip=function(W){let H=S[W];return H===void 0&&(H=new jo,S[W]=H),H.getGripSpace()},this.getHand=function(W){let H=S[W];return H===void 0&&(H=new jo,S[W]=H),H.getHandSpace()};function R(W){const H=_.indexOf(W.inputSource);if(H===-1)return;const ce=S[H];ce!==void 0&&(ce.update(W.inputSource,W.frame,c||o),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){n.removeEventListener("select",R),n.removeEventListener("selectstart",R),n.removeEventListener("selectend",R),n.removeEventListener("squeeze",R),n.removeEventListener("squeezestart",R),n.removeEventListener("squeezeend",R),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",L);for(let W=0;W<S.length;W++){const H=_[W];H!==null&&(_[W]=null,S[W].disconnect(H))}C=null,T=null,y.reset(),e.setRenderTarget(u),m=null,p=null,f=null,n=null,v=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(u=e.getRenderTarget(),n.addEventListener("select",R),n.addEventListener("selectstart",R),n.addEventListener("selectend",R),n.addEventListener("squeeze",R),n.addEventListener("squeezestart",R),n.addEventListener("squeezeend",R),n.addEventListener("end",B),n.addEventListener("inputsourceschange",L),d.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),n.renderState.layers===void 0){const H={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,H),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new lr(m.framebufferWidth,m.framebufferHeight,{format:pi,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let H=null,ce=null,se=null;d.depth&&(se=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=d.stencil?zr:Or,ce=d.stencil?Vr:sr);const ue={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:a};f=new XRWebGLBinding(n,t),p=f.createProjectionLayer(ue),n.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new lr(p.textureWidth,p.textureHeight,{format:pi,type:Fi,depthTexture:new sh(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),he.setContext(n),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function L(W){for(let H=0;H<W.removed.length;H++){const ce=W.removed[H],se=_.indexOf(ce);se>=0&&(_[se]=null,S[se].disconnect(ce))}for(let H=0;H<W.added.length;H++){const ce=W.added[H];let se=_.indexOf(ce);if(se===-1){for(let me=0;me<S.length;me++)if(me>=_.length){_.push(ce),se=me;break}else if(_[me]===null){_[me]=ce,se=me;break}if(se===-1)break}const ue=S[se];ue&&ue.connect(ce)}}const N=new Y,k=new Y;function M(W,H,ce){N.setFromMatrixPosition(H.matrixWorld),k.setFromMatrixPosition(ce.matrixWorld);const se=N.distanceTo(k),ue=H.projectionMatrix.elements,me=ce.projectionMatrix.elements,oe=ue[14]/(ue[10]-1),ye=ue[14]/(ue[10]+1),ge=(ue[9]+1)/ue[5],Be=(ue[9]-1)/ue[5],z=(ue[8]-1)/ue[0],$e=(me[8]+1)/me[0],ke=oe*z,V=oe*$e,X=se/(-z+$e),fe=X*-z;if(H.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(fe),W.translateZ(X),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ue[10]===-1)W.projectionMatrix.copy(H.projectionMatrix),W.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const ie=oe+X,D=ye+X,F=ke-fe,G=V+(se-fe),q=ge*ye/D*ie,ne=Be*ye/D*ie;W.projectionMatrix.makePerspective(F,G,q,ne,ie,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function I(W,H){H===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(H.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let H=W.near,ce=W.far;y.texture!==null&&(y.depthNear>0&&(H=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),A.near=U.near=w.near=H,A.far=U.far=w.far=ce,(C!==A.near||T!==A.far)&&(n.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,T=A.far),w.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,A.layers.mask=w.layers.mask|U.layers.mask;const se=W.parent,ue=A.cameras;I(A,se);for(let me=0;me<ue.length;me++)I(ue[me],se);ue.length===2?M(A,w,U):A.projectionMatrix.copy(w.projectionMatrix),P(W,A,se)};function P(W,H,ce){ce===null?W.matrix.copy(H.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(H.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(H.projectionMatrix),W.projectionMatrixInverse.copy(H.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(A)};let K=null;function $(W,H){if(h=H.getViewerPose(c||o),g=H,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let se=!1;ce.length!==A.cameras.length&&(A.cameras.length=0,se=!0);for(let me=0;me<ce.length;me++){const oe=ce[me];let ye=null;if(m!==null)ye=m.getViewport(oe);else{const Be=f.getViewSubImage(p,oe);ye=Be.viewport,me===0&&(e.setRenderTargetTextures(v,Be.colorTexture,p.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(v))}let ge=E[me];ge===void 0&&(ge=new ai,ge.layers.enable(me),ge.viewport=new vt,E[me]=ge),ge.matrix.fromArray(oe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(oe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ye.x,ye.y,ye.width,ye.height),me===0&&(A.matrix.copy(ge.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),se===!0&&A.cameras.push(ge)}const ue=n.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const me=f.getDepthInformation(ce[0]);me&&me.isValid&&me.texture&&y.init(e,me,n.renderState)}}for(let ce=0;ce<S.length;ce++){const se=_[ce],ue=S[ce];se!==null&&ue!==void 0&&ue.update(se,H,c||o)}K&&K(W,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),g=null}const he=new mh;he.setAnimationLoop($),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}const vr=new Si,NA=new ut;function kA(r,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,Yc(r)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function n(d,u,v,S,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(d,u):u.isMeshToonMaterial?(a(d,u),f(d,u)):u.isMeshPhongMaterial?(a(d,u),h(d,u)):u.isMeshStandardMaterial?(a(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,_)):u.isMeshMatcapMaterial?(a(d,u),g(d,u)):u.isMeshDepthMaterial?a(d,u):u.isMeshDistanceMaterial?(a(d,u),y(d,u)):u.isMeshNormalMaterial?a(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&s(d,u)):u.isPointsMaterial?l(d,u,v,S):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Ot&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Ot&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const v=e.get(u),S=v.envMap,_=v.envMapRotation;S&&(d.envMap.value=S,vr.copy(_),vr.x*=-1,vr.y*=-1,vr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),d.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(vr)),d.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function s(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,v,S){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*v,d.scale.value=S*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,v){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,u){u.matcap&&(d.matcap.value=u.matcap)}function y(d,u){const v=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function PA(r,e,t,i){let n={},a={},o=[];const s=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const _=S.program;i.uniformBlockBinding(v,_)}function c(v,S){let _=n[v.id];_===void 0&&(g(v),_=h(v),n[v.id]=_,v.addEventListener("dispose",d));const b=S.program;i.updateUBOMapping(v,b);const x=e.render.frame;a[v.id]!==x&&(p(v),a[v.id]=x)}function h(v){const S=f();v.__bindingPointIndex=S;const _=r.createBuffer(),b=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,b,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,_),_}function f(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const S=n[v.id],_=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,w=_.length;x<w;x++){const U=Array.isArray(_[x])?_[x]:[_[x]];for(let E=0,A=U.length;E<A;E++){const C=U[E];if(m(C,x,E,b)===!0){const T=C.__offset,R=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let L=0;L<R.length;L++){const N=R[L],k=y(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,T+B,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,T,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(v,S,_,b){const x=v.value,w=S+"_"+_;if(b[w]===void 0)return typeof x=="number"||typeof x=="boolean"?b[w]=x:b[w]=x.clone(),!0;{const U=b[w];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return b[w]=x,!0}else if(U.equals(x)===!1)return U.copy(x),!0}return!1}function g(v){const S=v.uniforms;let _=0;const b=16;for(let w=0,U=S.length;w<U;w++){const E=Array.isArray(S[w])?S[w]:[S[w]];for(let A=0,C=E.length;A<C;A++){const T=E[A],R=Array.isArray(T.value)?T.value:[T.value];for(let B=0,L=R.length;B<L;B++){const N=R[B],k=y(N),M=_%b,I=M%k.boundary,P=M+I;_+=I,P!==0&&b-P<k.storage&&(_+=b-P),T.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=_,_+=k.storage}}}const x=_%b;return x>0&&(_+=b-x),v.__size=_,v.__cache={},this}function y(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function d(v){const S=v.target;S.removeEventListener("dispose",d);const _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete a[S.id]}function u(){for(const v in n)r.deleteBuffer(n[v]);o=[],n={},a={}}return{bind:l,update:c,dispose:u}}class VA{constructor(e={}){const{canvas:t=mf(),context:i=null,depth:n=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),y=new Int32Array(4);let d=null,u=null;const v=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=Gi,this.toneMappingExposure=1;const _=this;let b=!1,x=0,w=0,U=null,E=-1,A=null;const C=new vt,T=new vt;let R=null;const B=new Je(0);let L=0,N=t.width,k=t.height,M=1,I=null,P=null;const K=new vt(0,0,N,k),$=new vt(0,0,N,k);let he=!1;const W=new Do;let H=!1,ce=!1;const se=new ut,ue=new ut,me=new Y,oe=new vt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Be(){return U===null?M:1}let z=i;function $e(Q,Z){return t.getContext(Q,Z)}try{const Q={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ys}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",_e,!1),z===null){const Z="webgl2";if(z=$e(Z,Q),z===null)throw $e(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(Q){throw console.error("THREE.WebGLRenderer: "+Q.message),Q}let ke,V,X,fe,ie,D,F,G,q,ne,ae,be,Ee,Me,qe,ve,Ue,Qe,De,we,He,pe,Se,O;function le(){ke=new Xv(z),ke.init(),pe=new RA(z,ke),V=new Wv(z,ke,e,pe),X=new MA(z,ke),V.reverseDepthBuffer&&p&&X.buffers.depth.setReversed(!0),fe=new qv(z),ie=new gA,D=new FA(z,ke,X,ie,V,pe,fe),F=new Jv(_),G=new Yv(_),q=new am(z),Se=new Ov(z,q),ne=new jv(z,q,fe,Se),ae=new e0(z,ne,q,fe),De=new $v(z,V,D),ve=new Gv(ie),be=new mA(_,F,G,ke,V,Se,ve),Ee=new kA(_,ie),Me=new AA,qe=new wA(ke),Qe=new Vv(_,F,G,X,ae,m,l),Ue=new UA(_,ae,V),O=new PA(z,fe,V,X),we=new zv(z,ke,fe),He=new Kv(z,ke,fe),fe.programs=be.programs,_.capabilities=V,_.extensions=ke,_.properties=ie,_.renderLists=Me,_.shadowMap=Ue,_.state=X,_.info=fe}le();const j=new DA(_,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const Q=ke.get("WEBGL_lose_context");Q&&Q.loseContext()},this.forceContextRestore=function(){const Q=ke.get("WEBGL_lose_context");Q&&Q.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(Q){Q!==void 0&&(M=Q,this.setSize(N,k,!1))},this.getSize=function(Q){return Q.set(N,k)},this.setSize=function(Q,Z,ee=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=Q,k=Z,t.width=Math.floor(Q*M),t.height=Math.floor(Z*M),ee===!0&&(t.style.width=Q+"px",t.style.height=Z+"px"),this.setViewport(0,0,Q,Z)},this.getDrawingBufferSize=function(Q){return Q.set(N*M,k*M).floor()},this.setDrawingBufferSize=function(Q,Z,ee){N=Q,k=Z,M=ee,t.width=Math.floor(Q*ee),t.height=Math.floor(Z*ee),this.setViewport(0,0,Q,Z)},this.getCurrentViewport=function(Q){return Q.copy(C)},this.getViewport=function(Q){return Q.copy(K)},this.setViewport=function(Q,Z,ee,te){Q.isVector4?K.set(Q.x,Q.y,Q.z,Q.w):K.set(Q,Z,ee,te),X.viewport(C.copy(K).multiplyScalar(M).round())},this.getScissor=function(Q){return Q.copy($)},this.setScissor=function(Q,Z,ee,te){Q.isVector4?$.set(Q.x,Q.y,Q.z,Q.w):$.set(Q,Z,ee,te),X.scissor(T.copy($).multiplyScalar(M).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(Q){X.setScissorTest(he=Q)},this.setOpaqueSort=function(Q){I=Q},this.setTransparentSort=function(Q){P=Q},this.getClearColor=function(Q){return Q.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(Q=!0,Z=!0,ee=!0){let te=0;if(Q){let J=!1;if(U!==null){const de=U.texture.format;J=de===Vs||de===Ps||de===ks}if(J){const de=U.texture.type,Ce=de===Fi||de===sr||de===En||de===Vr||de===Ds||de===Ns,Te=Qe.getClearColor(),Re=Qe.getClearAlpha(),Oe=Te.r,Pe=Te.g,ze=Te.b;Ce?(g[0]=Oe,g[1]=Pe,g[2]=ze,g[3]=Re,z.clearBufferuiv(z.COLOR,0,g)):(y[0]=Oe,y[1]=Pe,y[2]=ze,y[3]=Re,z.clearBufferiv(z.COLOR,0,y))}else te|=z.COLOR_BUFFER_BIT}Z&&(te|=z.DEPTH_BUFFER_BIT),ee&&(te|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Qe.dispose(),Me.dispose(),qe.dispose(),ie.dispose(),F.dispose(),G.dispose(),ae.dispose(),Se.dispose(),O.dispose(),be.dispose(),j.dispose(),j.removeEventListener("sessionstart",hu),j.removeEventListener("sessionend",uu),_r.stop()};function re(Q){Q.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const Q=fe.autoReset,Z=Ue.enabled,ee=Ue.autoUpdate,te=Ue.needsUpdate,J=Ue.type;le(),fe.autoReset=Q,Ue.enabled=Z,Ue.autoUpdate=ee,Ue.needsUpdate=te,Ue.type=J}function _e(Q){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",Q.statusMessage)}function Ye(Q){const Z=Q.target;Z.removeEventListener("dispose",Ye),pt(Z)}function pt(Q){_t(Q),ie.remove(Q)}function _t(Q){const Z=ie.get(Q).programs;Z!==void 0&&(Z.forEach(function(ee){be.releaseProgram(ee)}),Q.isShaderMaterial&&be.releaseShaderCache(Q))}this.renderBufferDirect=function(Q,Z,ee,te,J,de){Z===null&&(Z=ye);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Te=j_(Q,Z,ee,te,J);X.setMaterial(te,Ce);let Re=ee.index,Oe=1;if(te.wireframe===!0){if(Re=ne.getWireframeAttribute(ee),Re===void 0)return;Oe=2}const Pe=ee.drawRange,ze=ee.attributes.position;let et=Pe.start*Oe,at=(Pe.start+Pe.count)*Oe;de!==null&&(et=Math.max(et,de.start*Oe),at=Math.min(at,(de.start+de.count)*Oe)),Re!==null?(et=Math.max(et,0),at=Math.min(at,Re.count)):ze!=null&&(et=Math.max(et,0),at=Math.min(at,ze.count));const bt=at-et;if(bt<0||bt===1/0)return;Se.setup(J,te,Te,ee,Re);let st,ht=we;if(Re!==null&&(st=q.get(Re),ht=He,ht.setIndex(st)),J.isMesh)te.wireframe===!0?(X.setLineWidth(te.wireframeLinewidth*Be()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(J.isLine){let Le=te.linewidth;Le===void 0&&(Le=1),X.setLineWidth(Le*Be()),J.isLineSegments?ht.setMode(z.LINES):J.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else J.isPoints?ht.setMode(z.POINTS):J.isSprite&&ht.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ht.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))ht.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Le=J._multiDrawStarts,Pt=J._multiDrawCounts,yr=J._multiDrawCount,_i=Re?q.get(Re).bytesPerElement:1,pn=ie.get(te).currentProgram.getUniforms();for(let ti=0;ti<yr;ti++)pn.setValue(z,"_gl_DrawID",ti),ht.render(Le[ti]/_i,Pt[ti])}else if(J.isInstancedMesh)ht.renderInstances(et,bt,J.count);else if(ee.isInstancedBufferGeometry){const Le=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Pt=Math.min(ee.instanceCount,Le);ht.renderInstances(et,bt,Pt)}else ht.render(et,bt)};function it(Q,Z,ee){Q.transparent===!0&&Q.side===Mi&&Q.forceSinglePass===!1?(Q.side=Ot,Q.needsUpdate=!0,Ka(Q,Z,ee),Q.side=Ti,Q.needsUpdate=!0,Ka(Q,Z,ee),Q.side=Mi):Ka(Q,Z,ee)}this.compile=function(Q,Z,ee=null){ee===null&&(ee=Q),u=qe.get(ee),u.init(Z),S.push(u),ee.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(u.pushLight(J),J.castShadow&&u.pushShadow(J))}),Q!==ee&&Q.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(u.pushLight(J),J.castShadow&&u.pushShadow(J))}),u.setupLights();const te=new Set;return Q.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const de=J.material;if(de)if(Array.isArray(de))for(let Ce=0;Ce<de.length;Ce++){const Te=de[Ce];it(Te,ee,J),te.add(Te)}else it(de,ee,J),te.add(de)}),S.pop(),u=null,te},this.compileAsync=function(Q,Z,ee=null){const te=this.compile(Q,Z,ee);return new Promise(J=>{function de(){if(te.forEach(function(Ce){ie.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){J(Q);return}setTimeout(de,10)}ke.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let $t=null;function ei(Q){$t&&$t(Q)}function hu(){_r.stop()}function uu(){_r.start()}const _r=new mh;_r.setAnimationLoop(ei),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(Q){$t=Q,j.setAnimationLoop(Q),Q===null?_r.stop():_r.start()},j.addEventListener("sessionstart",hu),j.addEventListener("sessionend",uu),this.render=function(Q,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(Z),Z=j.getCamera()),Q.isScene===!0&&Q.onBeforeRender(_,Q,Z,U),u=qe.get(Q,S.length),u.init(Z),S.push(u),ue.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W.setFromProjectionMatrix(ue),ce=this.localClippingEnabled,H=ve.init(this.clippingPlanes,ce),d=Me.get(Q,v.length),d.init(),v.push(d),j.enabled===!0&&j.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&sl(de,Z,-1/0,_.sortObjects)}sl(Q,Z,0,_.sortObjects),d.finish(),_.sortObjects===!0&&d.sort(I,P),ge=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ge&&Qe.addToRenderList(d,Q),this.info.render.frame++,H===!0&&ve.beginShadows();const ee=u.state.shadowsArray;Ue.render(ee,Q,Z),H===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=d.opaque,J=d.transmissive;if(u.setupLights(),Z.isArrayCamera){const de=Z.cameras;if(J.length>0)for(let Ce=0,Te=de.length;Ce<Te;Ce++){const Re=de[Ce];pu(te,J,Q,Re)}ge&&Qe.render(Q);for(let Ce=0,Te=de.length;Ce<Te;Ce++){const Re=de[Ce];du(d,Q,Re,Re.viewport)}}else J.length>0&&pu(te,J,Q,Z),ge&&Qe.render(Q),du(d,Q,Z);U!==null&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),Q.isScene===!0&&Q.onAfterRender(_,Q,Z),Se.resetDefaultState(),E=-1,A=null,S.pop(),S.length>0?(u=S[S.length-1],H===!0&&ve.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function sl(Q,Z,ee,te){if(Q.visible===!1)return;if(Q.layers.test(Z.layers)){if(Q.isGroup)ee=Q.renderOrder;else if(Q.isLOD)Q.autoUpdate===!0&&Q.update(Z);else if(Q.isLight)u.pushLight(Q),Q.castShadow&&u.pushShadow(Q);else if(Q.isSprite){if(!Q.frustumCulled||W.intersectsSprite(Q)){te&&oe.setFromMatrixPosition(Q.matrixWorld).applyMatrix4(ue);const de=ae.update(Q),Ce=Q.material;Ce.visible&&d.push(Q,de,Ce,ee,oe.z,null)}}else if((Q.isMesh||Q.isLine||Q.isPoints)&&(!Q.frustumCulled||W.intersectsObject(Q))){const de=ae.update(Q),Ce=Q.material;if(te&&(Q.boundingSphere!==void 0?(Q.boundingSphere===null&&Q.computeBoundingSphere(),oe.copy(Q.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),oe.copy(de.boundingSphere.center)),oe.applyMatrix4(Q.matrixWorld).applyMatrix4(ue)),Array.isArray(Ce)){const Te=de.groups;for(let Re=0,Oe=Te.length;Re<Oe;Re++){const Pe=Te[Re],ze=Ce[Pe.materialIndex];ze&&ze.visible&&d.push(Q,de,ze,ee,oe.z,Pe)}}else Ce.visible&&d.push(Q,de,Ce,ee,oe.z,null)}}const J=Q.children;for(let de=0,Ce=J.length;de<Ce;de++)sl(J[de],Z,ee,te)}function du(Q,Z,ee,te){const J=Q.opaque,de=Q.transmissive,Ce=Q.transparent;u.setupLightsView(ee),H===!0&&ve.setGlobalState(_.clippingPlanes,ee),te&&X.viewport(C.copy(te)),J.length>0&&ja(J,Z,ee),de.length>0&&ja(de,Z,ee),Ce.length>0&&ja(Ce,Z,ee),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function pu(Q,Z,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[te.id]===void 0&&(u.state.transmissionRenderTarget[te.id]=new lr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Sn:Fi,minFilter:ar,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const J=u.state.transmissionRenderTarget[te.id],de=te.viewport||C;J.setSize(de.z,de.w);const Ce=_.getRenderTarget();_.setRenderTarget(J),_.getClearColor(B),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear(),ge&&Qe.render(ee);const Te=_.toneMapping;_.toneMapping=Gi;const Re=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),u.setupLightsView(te),H===!0&&ve.setGlobalState(_.clippingPlanes,te),ja(Q,ee,te),D.updateMultisampleRenderTarget(J),D.updateRenderTargetMipmap(J),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Pe=0,ze=Z.length;Pe<ze;Pe++){const et=Z[Pe],at=et.object,bt=et.geometry,st=et.material,ht=et.group;if(st.side===Mi&&at.layers.test(te.layers)){const Le=st.side;st.side=Ot,st.needsUpdate=!0,fu(at,ee,te,bt,st,ht),st.side=Le,st.needsUpdate=!0,Oe=!0}}Oe===!0&&(D.updateMultisampleRenderTarget(J),D.updateRenderTargetMipmap(J))}_.setRenderTarget(Ce),_.setClearColor(B,L),Re!==void 0&&(te.viewport=Re),_.toneMapping=Te}function ja(Q,Z,ee){const te=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,de=Q.length;J<de;J++){const Ce=Q[J],Te=Ce.object,Re=Ce.geometry,Oe=te===null?Ce.material:te,Pe=Ce.group;Te.layers.test(ee.layers)&&fu(Te,Z,ee,Re,Oe,Pe)}}function fu(Q,Z,ee,te,J,de){Q.onBeforeRender(_,Z,ee,te,J,de),Q.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,Q.matrixWorld),Q.normalMatrix.getNormalMatrix(Q.modelViewMatrix),J.onBeforeRender(_,Z,ee,te,Q,de),J.transparent===!0&&J.side===Mi&&J.forceSinglePass===!1?(J.side=Ot,J.needsUpdate=!0,_.renderBufferDirect(ee,Z,te,J,Q,de),J.side=Ti,J.needsUpdate=!0,_.renderBufferDirect(ee,Z,te,J,Q,de),J.side=Mi):_.renderBufferDirect(ee,Z,te,J,Q,de),Q.onAfterRender(_,Z,ee,te,J,de)}function Ka(Q,Z,ee){Z.isScene!==!0&&(Z=ye);const te=ie.get(Q),J=u.state.lights,de=u.state.shadowsArray,Ce=J.state.version,Te=be.getParameters(Q,J.state,de,Z,ee),Re=be.getProgramCacheKey(Te);let Oe=te.programs;te.environment=Q.isMeshStandardMaterial?Z.environment:null,te.fog=Z.fog,te.envMap=(Q.isMeshStandardMaterial?G:F).get(Q.envMap||te.environment),te.envMapRotation=te.environment!==null&&Q.envMap===null?Z.environmentRotation:Q.envMapRotation,Oe===void 0&&(Q.addEventListener("dispose",Ye),Oe=new Map,te.programs=Oe);let Pe=Oe.get(Re);if(Pe!==void 0){if(te.currentProgram===Pe&&te.lightsStateVersion===Ce)return gu(Q,Te),Pe}else Te.uniforms=be.getUniforms(Q),Q.onBeforeCompile(Te,_),Pe=be.acquireProgram(Te,Re),Oe.set(Re,Pe),te.uniforms=Te.uniforms;const ze=te.uniforms;return(!Q.isShaderMaterial&&!Q.isRawShaderMaterial||Q.clipping===!0)&&(ze.clippingPlanes=ve.uniform),gu(Q,Te),te.needsLights=q_(Q),te.lightsStateVersion=Ce,te.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.directionalShadowMap.value=J.state.directionalShadowMap,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotShadowMap.value=J.state.spotShadowMap,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMap.value=J.state.pointShadowMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=Pe,te.uniformsList=null,Pe}function mu(Q){if(Q.uniformsList===null){const Z=Q.currentProgram.getUniforms();Q.uniformsList=za.seqWithValue(Z.seq,Q.uniforms)}return Q.uniformsList}function gu(Q,Z){const ee=ie.get(Q);ee.outputColorSpace=Z.outputColorSpace,ee.batching=Z.batching,ee.batchingColor=Z.batchingColor,ee.instancing=Z.instancing,ee.instancingColor=Z.instancingColor,ee.instancingMorph=Z.instancingMorph,ee.skinning=Z.skinning,ee.morphTargets=Z.morphTargets,ee.morphNormals=Z.morphNormals,ee.morphColors=Z.morphColors,ee.morphTargetsCount=Z.morphTargetsCount,ee.numClippingPlanes=Z.numClippingPlanes,ee.numIntersection=Z.numClipIntersection,ee.vertexAlphas=Z.vertexAlphas,ee.vertexTangents=Z.vertexTangents,ee.toneMapping=Z.toneMapping}function j_(Q,Z,ee,te,J){Z.isScene!==!0&&(Z=ye),D.resetTextureUnits();const de=Z.fog,Ce=te.isMeshStandardMaterial?Z.environment:null,Te=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Wr,Re=(te.isMeshStandardMaterial?G:F).get(te.envMap||Ce),Oe=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Pe=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ze=!!ee.morphAttributes.position,et=!!ee.morphAttributes.normal,at=!!ee.morphAttributes.color;let bt=Gi;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(bt=_.toneMapping);const st=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ht=st!==void 0?st.length:0,Le=ie.get(te),Pt=u.state.lights;if(H===!0&&(ce===!0||Q!==A)){const Ft=Q===A&&te.id===E;ve.setState(te,Q,Ft)}let yr=!1;te.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Pt.state.version||Le.outputColorSpace!==Te||J.isBatchedMesh&&Le.batching===!1||!J.isBatchedMesh&&Le.batching===!0||J.isBatchedMesh&&Le.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Le.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Le.instancing===!1||!J.isInstancedMesh&&Le.instancing===!0||J.isSkinnedMesh&&Le.skinning===!1||!J.isSkinnedMesh&&Le.skinning===!0||J.isInstancedMesh&&Le.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Le.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Le.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Le.instancingMorph===!1&&J.morphTexture!==null||Le.envMap!==Re||te.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ve.numPlanes||Le.numIntersection!==ve.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Pe||Le.morphTargets!==ze||Le.morphNormals!==et||Le.morphColors!==at||Le.toneMapping!==bt||Le.morphTargetsCount!==ht)&&(yr=!0):(yr=!0,Le.__version=te.version);let _i=Le.currentProgram;yr===!0&&(_i=Ka(te,Z,J));let pn=!1,ti=!1,Nn=!1;const ft=_i.getUniforms(),oi=Le.uniforms;if(X.useProgram(_i.program)&&(pn=!0,ti=!0,Nn=!0),te.id!==E&&(E=te.id,ti=!0),pn||A!==Q){X.buffers.depth.getReversed()?(se.copy(Q.projectionMatrix),vf(se),Af(se),ft.setValue(z,"projectionMatrix",se)):ft.setValue(z,"projectionMatrix",Q.projectionMatrix),ft.setValue(z,"viewMatrix",Q.matrixWorldInverse);const Ft=ft.map.cameraPosition;Ft!==void 0&&Ft.setValue(z,me.setFromMatrixPosition(Q.matrixWorld)),V.logarithmicDepthBuffer&&ft.setValue(z,"logDepthBufFC",2/(Math.log(Q.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ft.setValue(z,"isOrthographic",Q.isOrthographicCamera===!0),A!==Q&&(A=Q,ti=!0,Nn=!0)}if(J.isSkinnedMesh){ft.setOptional(z,J,"bindMatrix"),ft.setOptional(z,J,"bindMatrixInverse");const Ft=J.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ft.setValue(z,"boneTexture",Ft.boneTexture,D))}J.isBatchedMesh&&(ft.setOptional(z,J,"batchingTexture"),ft.setValue(z,"batchingTexture",J._matricesTexture,D),ft.setOptional(z,J,"batchingIdTexture"),ft.setValue(z,"batchingIdTexture",J._indirectTexture,D),ft.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&ft.setValue(z,"batchingColorTexture",J._colorsTexture,D));const li=ee.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&De.update(J,ee,_i),(ti||Le.receiveShadow!==J.receiveShadow)&&(Le.receiveShadow=J.receiveShadow,ft.setValue(z,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(oi.envMap.value=Re,oi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&Z.environment!==null&&(oi.envMapIntensity.value=Z.environmentIntensity),ti&&(ft.setValue(z,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&K_(oi,Nn),de&&te.fog===!0&&Ee.refreshFogUniforms(oi,de),Ee.refreshMaterialUniforms(oi,te,M,k,u.state.transmissionRenderTarget[Q.id]),za.upload(z,mu(Le),oi,D)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(za.upload(z,mu(Le),oi,D),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ft.setValue(z,"center",J.center),ft.setValue(z,"modelViewMatrix",J.modelViewMatrix),ft.setValue(z,"normalMatrix",J.normalMatrix),ft.setValue(z,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Ft=te.uniformsGroups;for(let yi=0,ol=Ft.length;yi<ol;yi++){const Er=Ft[yi];O.update(Er,_i),O.bind(Er,_i)}}return _i}function K_(Q,Z){Q.ambientLightColor.needsUpdate=Z,Q.lightProbe.needsUpdate=Z,Q.directionalLights.needsUpdate=Z,Q.directionalLightShadows.needsUpdate=Z,Q.pointLights.needsUpdate=Z,Q.pointLightShadows.needsUpdate=Z,Q.spotLights.needsUpdate=Z,Q.spotLightShadows.needsUpdate=Z,Q.rectAreaLights.needsUpdate=Z,Q.hemisphereLights.needsUpdate=Z}function q_(Q){return Q.isMeshLambertMaterial||Q.isMeshToonMaterial||Q.isMeshPhongMaterial||Q.isMeshStandardMaterial||Q.isShadowMaterial||Q.isShaderMaterial&&Q.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(Q,Z,ee){ie.get(Q.texture).__webglTexture=Z,ie.get(Q.depthTexture).__webglTexture=ee;const te=ie.get(Q);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(Q,Z){const ee=ie.get(Q);ee.__webglFramebuffer=Z,ee.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(Q,Z=0,ee=0){U=Q,x=Z,w=ee;let te=!0,J=null,de=!1,Ce=!1;if(Q){const Te=ie.get(Q);if(Te.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(z.FRAMEBUFFER,null),te=!1;else if(Te.__webglFramebuffer===void 0)D.setupRenderTarget(Q);else if(Te.__hasExternalTextures)D.rebindTextures(Q,ie.get(Q.texture).__webglTexture,ie.get(Q.depthTexture).__webglTexture);else if(Q.depthBuffer){const Pe=Q.depthTexture;if(Te.__boundDepthTexture!==Pe){if(Pe!==null&&ie.has(Pe)&&(Q.width!==Pe.image.width||Q.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(Q)}}const Re=Q.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Ce=!0);const Oe=ie.get(Q).__webglFramebuffer;Q.isWebGLCubeRenderTarget?(Array.isArray(Oe[Z])?J=Oe[Z][ee]:J=Oe[Z],de=!0):Q.samples>0&&D.useMultisampledRTT(Q)===!1?J=ie.get(Q).__webglMultisampledFramebuffer:Array.isArray(Oe)?J=Oe[ee]:J=Oe,C.copy(Q.viewport),T.copy(Q.scissor),R=Q.scissorTest}else C.copy(K).multiplyScalar(M).floor(),T.copy($).multiplyScalar(M).floor(),R=he;if(X.bindFramebuffer(z.FRAMEBUFFER,J)&&te&&X.drawBuffers(Q,J),X.viewport(C),X.scissor(T),X.setScissorTest(R),de){const Te=ie.get(Q.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te.__webglTexture,ee)}else if(Ce){const Te=ie.get(Q.texture),Re=Z||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Te.__webglTexture,ee||0,Re)}E=-1},this.readRenderTargetPixels=function(Q,Z,ee,te,J,de,Ce){if(!(Q&&Q.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ie.get(Q).__webglFramebuffer;if(Q.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce]),Te){X.bindFramebuffer(z.FRAMEBUFFER,Te);try{const Re=Q.texture,Oe=Re.format,Pe=Re.type;if(!V.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=Q.width-te&&ee>=0&&ee<=Q.height-J&&z.readPixels(Z,ee,te,J,pe.convert(Oe),pe.convert(Pe),de)}finally{const Re=U!==null?ie.get(U).__webglFramebuffer:null;X.bindFramebuffer(z.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(Q,Z,ee,te,J,de,Ce){if(!(Q&&Q.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ie.get(Q).__webglFramebuffer;if(Q.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce]),Te){const Re=Q.texture,Oe=Re.format,Pe=Re.type;if(!V.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=Q.width-te&&ee>=0&&ee<=Q.height-J){X.bindFramebuffer(z.FRAMEBUFFER,Te);const ze=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ze),z.bufferData(z.PIXEL_PACK_BUFFER,de.byteLength,z.STREAM_READ),z.readPixels(Z,ee,te,J,pe.convert(Oe),pe.convert(Pe),0);const et=U!==null?ie.get(U).__webglFramebuffer:null;X.bindFramebuffer(z.FRAMEBUFFER,et);const at=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await gf(z,at,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ze),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,de),z.deleteBuffer(ze),z.deleteSync(at),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(Q,Z=null,ee=0){Q.isTexture!==!0&&(Jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,Q=arguments[1]);const te=Math.pow(2,-ee),J=Math.floor(Q.image.width*te),de=Math.floor(Q.image.height*te),Ce=Z!==null?Z.x:0,Te=Z!==null?Z.y:0;D.setTexture2D(Q,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,Ce,Te,J,de),X.unbindTexture()};const $_=z.createFramebuffer(),ey=z.createFramebuffer();this.copyTextureToTexture=function(Q,Z,ee=null,te=null,J=0,de=null){Q.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,Q=arguments[1],Z=arguments[2],de=arguments[3]||0,ee=null),de===null&&(J!==0?(Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=J,J=0):de=0);let Ce,Te,Re,Oe,Pe,ze,et,at,bt;const st=Q.isCompressedTexture?Q.mipmaps[de]:Q.image;if(ee!==null)Ce=ee.max.x-ee.min.x,Te=ee.max.y-ee.min.y,Re=ee.isBox3?ee.max.z-ee.min.z:1,Oe=ee.min.x,Pe=ee.min.y,ze=ee.isBox3?ee.min.z:0;else{const li=Math.pow(2,-J);Ce=Math.floor(st.width*li),Te=Math.floor(st.height*li),Q.isDataArrayTexture?Re=st.depth:Q.isData3DTexture?Re=Math.floor(st.depth*li):Re=1,Oe=0,Pe=0,ze=0}te!==null?(et=te.x,at=te.y,bt=te.z):(et=0,at=0,bt=0);const ht=pe.convert(Z.format),Le=pe.convert(Z.type);let Pt;Z.isData3DTexture?(D.setTexture3D(Z,0),Pt=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(D.setTexture2DArray(Z,0),Pt=z.TEXTURE_2D_ARRAY):(D.setTexture2D(Z,0),Pt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const yr=z.getParameter(z.UNPACK_ROW_LENGTH),_i=z.getParameter(z.UNPACK_IMAGE_HEIGHT),pn=z.getParameter(z.UNPACK_SKIP_PIXELS),ti=z.getParameter(z.UNPACK_SKIP_ROWS),Nn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,st.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Oe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Pe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ze);const ft=Q.isDataArrayTexture||Q.isData3DTexture,oi=Z.isDataArrayTexture||Z.isData3DTexture;if(Q.isDepthTexture){const li=ie.get(Q),Ft=ie.get(Z),yi=ie.get(li.__renderTarget),ol=ie.get(Ft.__renderTarget);X.bindFramebuffer(z.READ_FRAMEBUFFER,yi.__webglFramebuffer),X.bindFramebuffer(z.DRAW_FRAMEBUFFER,ol.__webglFramebuffer);for(let Er=0;Er<Re;Er++)ft&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ie.get(Q).__webglTexture,J,ze+Er),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ie.get(Z).__webglTexture,de,bt+Er)),z.blitFramebuffer(Oe,Pe,Ce,Te,et,at,Ce,Te,z.DEPTH_BUFFER_BIT,z.NEAREST);X.bindFramebuffer(z.READ_FRAMEBUFFER,null),X.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||Q.isRenderTargetTexture||ie.has(Q)){const li=ie.get(Q),Ft=ie.get(Z);X.bindFramebuffer(z.READ_FRAMEBUFFER,$_),X.bindFramebuffer(z.DRAW_FRAMEBUFFER,ey);for(let yi=0;yi<Re;yi++)ft?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,li.__webglTexture,J,ze+yi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,li.__webglTexture,J),oi?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.__webglTexture,de,bt+yi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ft.__webglTexture,de),J!==0?z.blitFramebuffer(Oe,Pe,Ce,Te,et,at,Ce,Te,z.COLOR_BUFFER_BIT,z.NEAREST):oi?z.copyTexSubImage3D(Pt,de,et,at,bt+yi,Oe,Pe,Ce,Te):z.copyTexSubImage2D(Pt,de,et,at,Oe,Pe,Ce,Te);X.bindFramebuffer(z.READ_FRAMEBUFFER,null),X.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else oi?Q.isDataTexture||Q.isData3DTexture?z.texSubImage3D(Pt,de,et,at,bt,Ce,Te,Re,ht,Le,st.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Pt,de,et,at,bt,Ce,Te,Re,ht,st.data):z.texSubImage3D(Pt,de,et,at,bt,Ce,Te,Re,ht,Le,st):Q.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,de,et,at,Ce,Te,ht,Le,st.data):Q.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,de,et,at,st.width,st.height,ht,st.data):z.texSubImage2D(z.TEXTURE_2D,de,et,at,Ce,Te,ht,Le,st);z.pixelStorei(z.UNPACK_ROW_LENGTH,yr),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_i),z.pixelStorei(z.UNPACK_SKIP_PIXELS,pn),z.pixelStorei(z.UNPACK_SKIP_ROWS,ti),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Nn),de===0&&Z.generateMipmaps&&z.generateMipmap(Pt),X.unbindTexture()},this.copyTextureToTexture3D=function(Q,Z,ee=null,te=null,J=0){return Q.isTexture!==!0&&(Jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,Q=arguments[2],Z=arguments[3],J=arguments[4]||0),Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(Q,Z,ee,te,J)},this.initRenderTarget=function(Q){ie.get(Q).__webglFramebuffer===void 0&&D.setupRenderTarget(Q)},this.initTexture=function(Q){Q.isCubeTexture?D.setTextureCube(Q,0):Q.isData3DTexture?D.setTexture3D(Q,0):Q.isDataArrayTexture||Q.isCompressedArrayTexture?D.setTexture2DArray(Q,0):D.setTexture2D(Q,0),X.unbindTexture()},this.resetState=function(){x=0,w=0,U=null,X.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const OA=/^[og]\s*(.+)?/,zA=/^mtllib /,WA=/^usemtl /,GA=/^usemap /,Gh=/\s+/,Jh=new Y,Ko=new Y,Zh=new Y,Hh=new Y,si=new Y,Ga=new Je;function JA(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(n,a){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const s={index:this.materials.length,name:n||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(s),s},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(n){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),n&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return n&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},i&&i.name&&typeof i.clone=="function"){const n=i.clone(0);n.inherited=!0,this.object.materials.push(n)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const n=this.vertices,a=this.object.geometry.vertices;a.push(n[e+0],n[e+1],n[e+2]),a.push(n[t+0],n[t+1],n[t+2]),a.push(n[i+0],n[i+1],n[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const n=this.normals,a=this.object.geometry.normals;a.push(n[e+0],n[e+1],n[e+2]),a.push(n[t+0],n[t+1],n[t+2]),a.push(n[i+0],n[i+1],n[i+2])},addFaceNormal:function(e,t,i){const n=this.vertices,a=this.object.geometry.normals;Jh.fromArray(n,e),Ko.fromArray(n,t),Zh.fromArray(n,i),si.subVectors(Zh,Ko),Hh.subVectors(Jh,Ko),si.cross(Hh),si.normalize(),a.push(si.x,si.y,si.z),a.push(si.x,si.y,si.z),a.push(si.x,si.y,si.z)},addColor:function(e,t,i){const n=this.colors,a=this.object.geometry.colors;n[e]!==void 0&&a.push(n[e+0],n[e+1],n[e+2]),n[t]!==void 0&&a.push(n[t+0],n[t+1],n[t+2]),n[i]!==void 0&&a.push(n[i+0],n[i+1],n[i+2])},addUV:function(e,t,i){const n=this.uvs,a=this.object.geometry.uvs;a.push(n[e+0],n[e+1]),a.push(n[t+0],n[t+1]),a.push(n[i+0],n[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,n,a,o,s,l,c){const h=this.vertices.length;let f=this.parseVertexIndex(e,h),p=this.parseVertexIndex(t,h),m=this.parseVertexIndex(i,h);if(this.addVertex(f,p,m),this.addColor(f,p,m),s!==void 0&&s!==""){const g=this.normals.length;f=this.parseNormalIndex(s,g),p=this.parseNormalIndex(l,g),m=this.parseNormalIndex(c,g),this.addNormal(f,p,m)}else this.addFaceNormal(f,p,m);if(n!==void 0&&n!==""){const g=this.uvs.length;f=this.parseUVIndex(n,g),p=this.parseUVIndex(a,g),m=this.parseUVIndex(o,g),this.addUV(f,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,n=e.length;i<n;i++){const a=this.parseVertexIndex(e[i],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,n=this.uvs.length;for(let a=0,o=e.length;a<o;a++)this.addVertexLine(this.parseVertexIndex(e[a],i));for(let a=0,o=t.length;a<o;a++)this.addUVLine(this.parseUVIndex(t[a],n))}};return r.startObject("",!1),r}class ZA extends ln{constructor(e){super(e),this.materials=null}load(e,t,i,n){const a=this,o=new lh(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(s){try{t(a.parse(s))}catch(l){n?n(l):console.error(l),a.manager.itemError(e)}},i,n)}setMaterials(e){return this.materials=e,this}parse(e){const t=new JA;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let n=[];for(let o=0,s=i.length;o<s;o++){const l=i[o].trimStart();if(l.length===0)continue;const c=l.charAt(0);if(c!=="#")if(c==="v"){const h=l.split(Gh);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Ga.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),Mt),t.colors.push(Ga.r,Ga.g,Ga.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(c==="f"){const h=l.slice(1).trim().split(Gh),f=[];for(let m=0,g=h.length;m<g;m++){const y=h[m];if(y.length>0){const d=y.split("/");f.push(d)}}const p=f[0];for(let m=1,g=f.length-1;m<g;m++){const y=f[m],d=f[m+1];t.addFace(p[0],y[0],d[0],p[1],y[1],d[1],p[2],y[2],d[2])}}else if(c==="l"){const h=l.substring(1).trim().split(" ");let f=[];const p=[];if(l.indexOf("/")===-1)f=h;else for(let m=0,g=h.length;m<g;m++){const y=h[m].split("/");y[0]!==""&&f.push(y[0]),y[1]!==""&&p.push(y[1])}t.addLineGeometry(f,p)}else if(c==="p"){const h=l.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((n=OA.exec(l))!==null){const h=(" "+n[0].slice(1).trim()).slice(1);t.startObject(h)}else if(WA.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(zA.test(l))t.materialLibraries.push(l.substring(7).trim());else if(GA.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(c==="s"){if(n=l.split(" "),n.length>1){const f=n[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const a=new Qn;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0))for(let o=0,s=t.objects.length;o<s;o++){const l=t.objects[o],c=l.geometry,h=l.materials,f=c.type==="Line",p=c.type==="Points";let m=!1;if(c.vertices.length===0)continue;const g=new Ai;g.setAttribute("position",new Lt(c.vertices,3)),c.normals.length>0&&g.setAttribute("normal",new Lt(c.normals,3)),c.colors.length>0&&(m=!0,g.setAttribute("color",new Lt(c.colors,3))),c.hasUVIndices===!0&&g.setAttribute("uv",new Lt(c.uvs,2));const y=[];for(let u=0,v=h.length;u<v;u++){const S=h[u],_=S.name+"_"+S.smooth+"_"+m;let b=t.materials[_];if(this.materials!==null){if(b=this.materials.create(S.name),f&&b&&!(b instanceof Fa)){const x=new Fa;Pi.prototype.copy.call(x,b),x.color.copy(b.color),b=x}else if(p&&b&&!(b instanceof Bn)){const x=new Bn({size:10,sizeAttenuation:!1});Pi.prototype.copy.call(x,b),x.color.copy(b.color),x.map=b.map,b=x}}b===void 0&&(f?b=new Fa:p?b=new Bn({size:1,sizeAttenuation:!1}):b=new Vo,b.name=S.name,b.flatShading=!S.smooth,b.vertexColors=m,t.materials[_]=b),y.push(b)}let d;if(y.length>1){for(let u=0,v=h.length;u<v;u++){const S=h[u];g.addGroup(S.groupStart,S.groupCount,u)}f?d=new rh(g,y):p?d=new Po(g,y):d=new Wt(g,y)}else f?d=new rh(g,y[0]):p?d=new Po(g,y[0]):d=new Wt(g,y[0]);d.name=l.name,a.add(d)}else if(t.vertices.length>0){const o=new Bn({size:1,sizeAttenuation:!1}),s=new Ai;s.setAttribute("position",new Lt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(s.setAttribute("color",new Lt(t.colors,3)),o.vertexColors=!0);const l=new Po(s,o);a.add(l)}return a}}class HA extends ln{constructor(e){super(e)}load(e,t,i,n){const a=this,o=this.path===""?tm.extractUrlBase(e):this.path,s=new lh(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(l){try{t(a.parse(l,o))}catch(c){n?n(c):console.error(c),a.manager.itemError(e)}},i,n)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const i=e.split(`
`);let n={};const a=/\s+/,o={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const h=c.indexOf(" ");let f=h>=0?c.substring(0,h):c;f=f.toLowerCase();let p=h>=0?c.substring(h+1):"";if(p=p.trim(),f==="newmtl")n={name:p},o[p]=n;else if(f==="ka"||f==="kd"||f==="ks"||f==="ke"){const m=p.split(a,3);n[f]=[parseFloat(m[0]),parseFloat(m[1]),parseFloat(m[2])]}else n[f]=p}const s=new YA(this.resourcePath||t,this.materialOptions);return s.setCrossOrigin(this.crossOrigin),s.setManager(this.manager),s.setMaterials(o),s}}class YA{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Ti,this.wrap=this.options.wrap!==void 0?this.options.wrap:ia}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const i in e){const n=e[i],a={};t[i]=a;for(const o in n){let s=!0,l=n[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(s=!1);break}s&&(a[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,i=this.materialsInfo[e],n={name:e,side:this.side};function a(s,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:s+l}function o(s,l){if(n[s])return;const c=t.getTextureParams(l,n),h=t.loadTexture(a(t.baseUrl,c.url));h.repeat.copy(c.scale),h.offset.copy(c.offset),h.wrapS=t.wrap,h.wrapT=t.wrap,(s==="map"||s==="emissiveMap")&&(h.colorSpace=Mt),n[s]=h}for(const s in i){const l=i[s];let c;if(l!=="")switch(s.toLowerCase()){case"kd":n.color=Ke.toWorkingColorSpace(new Je().fromArray(l),Mt);break;case"ks":n.specular=Ke.toWorkingColorSpace(new Je().fromArray(l),Mt);break;case"ke":n.emissive=Ke.toWorkingColorSpace(new Je().fromArray(l),Mt);break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),n.transparent=!0;break;case"ns":n.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(n.opacity=c,n.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(n.opacity=1-c,n.transparent=!0);break}}return this.materials[e]=new Vo(n),this.materials[e]}getTextureParams(e,t){const i={scale:new We(1,1),offset:new We(0,0)},n=e.split(/\s+/);let a;return a=n.indexOf("-bm"),a>=0&&(t.bumpScale=parseFloat(n[a+1]),n.splice(a,2)),a=n.indexOf("-s"),a>=0&&(i.scale.set(parseFloat(n[a+1]),parseFloat(n[a+2])),n.splice(a,4)),a=n.indexOf("-o"),a>=0&&(i.offset.set(parseFloat(n[a+1]),parseFloat(n[a+2])),n.splice(a,4)),i.url=n.join(" ").trim(),i}loadTexture(e,t,i,n,a){const o=this.manager!==void 0?this.manager:oh;let s=o.getHandler(e);s===null&&(s=new jf(o)),s.setCrossOrigin&&s.setCrossOrigin(this.crossOrigin);const l=s.load(e,i,n,a);return t!==void 0&&(l.mapping=t),l}}const Yh={type:"change"},qo={type:"start"},Xh={type:"end"},Ja=new va,jh=new $i,XA=Math.cos(70*ff.DEG2RAD),wt=new Y,Gt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$o=1e-6;class jA extends rm{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new cr,this._lastTargetPosition=new Y,this._quat=new cr().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ph,this._sphericalDelta=new ph,this._scale=1,this._panOffset=new Y,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new Y,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qA.bind(this),this._onPointerDown=KA.bind(this),this._onPointerUp=$A.bind(this),this._onContextMenu=s_.bind(this),this._onMouseWheel=i_.bind(this),this._onKeyDown=r_.bind(this),this._onTouchStart=n_.bind(this),this._onTouchMove=a_.bind(this),this._onMouseDown=e_.bind(this),this._onMouseMove=t_.bind(this),this._interceptControlDown=o_.bind(this),this._interceptControlUp=l_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yh),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Gt:i>Math.PI&&(i-=Gt),n<-Math.PI?n+=Gt:n>Math.PI&&(n-=Gt),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=wt.length();o=this._clampDistance(s*this._scale);const l=s-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const s=new Y(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(s),this.object.updateMatrixWorld(),o=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ja.origin.copy(this.object.position),Ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ja.direction))<XA?this.object.lookAt(this.target):(jh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ja.intersectPlane(jh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>$o||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$o||this._lastTargetPosition.distanceToSquared(this.target)>$o?(this.dispatchEvent(Yh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;wt.copy(n).sub(this.target);let a=wt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,a=t-i.top,o=i.width,s=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function KA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function qA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function $A(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xh),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function e_(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=nt.DOLLY;break;case Qr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=nt.ROTATE}break;case Qr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(qo)}function t_(r){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function i_(r){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(r.preventDefault(),this.dispatchEvent(qo),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Xh))}function r_(r){this.enabled!==!1&&this._handleKeyDown(r)}function n_(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=nt.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=nt.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(qo)}function a_(r){switch(this._trackPointer(r),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=nt.NONE}}function s_(r){this.enabled!==!1&&r.preventDefault()}function o_(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l_(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class c_ extends wr{constructor(){super(...arguments),Ie(this,"modelUrl",""),Ie(this,"materialUrl",""),Ie(this,"debugMode",!1),Ie(this,"cameraPosition","3,3,3"),Ie(this,"cameraTarget","0,0,0"),Ie(this,"showTexture",!0),Ie(this,"scene"),Ie(this,"camera"),Ie(this,"renderer"),Ie(this,"controls"),Ie(this,"animationId"),Ie(this,"container"),Ie(this,"currentModel"),Ie(this,"originalMaterials",new Map),Ie(this,"resizeObserver"),Ie(this,"externalCanvas"),Ie(this,"animateLoop",()=>{!this.renderer||!this.scene||!this.camera||(this.animationId=requestAnimationFrame(this.animateLoop),this.controls&&this.controls.update(),this.renderer.render(this.scene,this.camera),this.updateDebugInfo())})}static get observedAttributes(){return["show","debug-mode","camera-position","camera-target","show-texture","material-url"]}attributeChangedCallback(e,t,i){e==="show"?this.isShow=i==="true":e==="debug-mode"?this.debugMode=i==="true"||i==="":e==="camera-position"?this.cameraPosition=i||"3,3,3":e==="camera-target"?this.cameraTarget=i||"0,0,0":e==="show-texture"?this.showTexture=i!=="false":e==="material-url"&&(this.materialUrl=i||""),e==="debug-mode"&&this.isShow&&this.render(),super.attributeChangedCallback(e,t,i)}async doOpen(e){this.modelUrl=e,this.showTexture=!0,await this.initializeViewer()}doClose(){this.cleanup(),this.modelUrl="",this.materialUrl=""}getViewerContent(){return`
      <div class="model-container">
        ${this.modelUrl?`
        ${this.isLoading?'<div class="loading">Loading...</div>':""}
        ${!this.isLoading&&this.debugMode?`
          <div class="debug-info" style="z-index: 1005;">
            Camera Position: ${this.getCameraDebugInfo()}<br>
            Camera Target: ${this.getTargetDebugInfo()}<br>
            Controls: Rotate (drag), Zoom (scroll), Pan (right-drag)
          </div>
        `:""}
        ${this.isLoading?"":`
          <button class="texture-toggle">
            Texture: ${this.showTexture?"ON":"OFF"}
          </button>
        `}
      `:'<div class="error">No model URL provided</div>'}
      </div>
    `}getCustomStyles(){return`
      .model-container {
        width: 100%;
        height: 100%;
        position: relative;
        background: transparent;
        z-index: 1;
      }
      
      .model-container canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      
      .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #666;
        font-size: 1.2rem;
      }
      
      .error {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #e74c3c;
        text-align: center;
        padding: 20px;
      }
      
      canvas {
        display: block;
        width: 100%;
        height: 100%;
      }
      
      .debug-info {
        position: absolute;
        top: 10px;
        left: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 10px;
        font-family: monospace;
        font-size: 12px;
        border-radius: 4px;
        pointer-events: none;
        z-index: 1010;
      }
      
      .texture-toggle {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border: 1px solid #666;
        padding: 8px 16px;
        cursor: pointer;
        border-radius: 4px;
        transition: background 0.3s;
        z-index: 1010;
        pointer-events: auto;
      }
      
      .texture-toggle:hover {
        background: rgba(0, 0, 0, 0.9);
      }
    `}onAfterRender(){const e=this.query(".texture-toggle");e&&e.addEventListener("click",()=>this.toggleTexture())}cleanup(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=void 0),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentNode===document.body&&document.body.removeChild(this.renderer.domElement),this.renderer=void 0),this.controls&&(this.controls.dispose(),this.controls=void 0),this.scene&&(this.scene.traverse(e=>{var t,i;e instanceof Wt&&((t=e.geometry)==null||t.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):(i=e.material)==null||i.dispose())}),this.scene.clear()),this.scene=void 0,this.camera=void 0,this.currentModel=void 0,this.originalMaterials.clear(),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),this.container=void 0}storeOriginalMaterials(e){e.traverse(t=>{t instanceof Wt&&this.originalMaterials.set(t,t.material)})}toggleTexture(){this.showTexture=!this.showTexture,this.currentModel&&(this.currentModel.traverse(e=>{if(e instanceof Wt)if(this.showTexture){const t=this.originalMaterials.get(e);t&&(e.material=t)}else{const t=new Je(13421772);e.material=new Vo({color:t})}}),this.render())}getCameraDebugInfo(){if(!this.camera)return"N/A";const e=this.camera.position;return`${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)}`}getTargetDebugInfo(){if(!this.controls)return"N/A";const e=this.controls.target;return`${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)}`}updateDebugInfo(){const e=this.query(".debug-info");e&&this.debugMode&&(e.innerHTML=`
        Camera Position: ${this.getCameraDebugInfo()}<br>
        Camera Target: ${this.getTargetDebugInfo()}<br>
        Controls: Rotate (drag), Zoom (scroll), Pan (right-drag)
      `)}async initializeViewer(){if(await new Promise(t=>setTimeout(t,50)),this.container=this.query(".model-container"),!this.container)return;const e=this.container.getBoundingClientRect();try{this.scene=new Of,this.scene.background=new Je(3158064);const t=this.container.clientWidth||this.container.offsetWidth,i=this.container.clientHeight||this.container.offsetHeight;this.camera=new ai(75,t/i,.1,1e3),this.renderer=new VA({antialias:!0,alpha:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0;const n=this.renderer.domElement;n.style.position="fixed",n.style.left=`${e.left}px`,n.style.top=`${e.top}px`,n.style.width=`${e.width}px`,n.style.height=`${e.height}px`,n.style.pointerEvents="auto",n.style.zIndex="1001",document.body.appendChild(n),this.externalCanvas=n,this.controls=new jA(this.camera,n),this.controls.enableDamping=!0,this.controls.dampingFactor=.05;const a=new em(4210752,2),o=new $f(16777215,1);o.position.set(1,1,1),this.scene.add(a,o),await this.loadModel(),this.resizeObserver=new ResizeObserver(s=>{for(const l of s){const{width:c,height:h}=l.contentRect;c>0&&h>0&&this.handleResize()}}),this.resizeObserver.observe(this.container),this.animateLoop()}catch(t){throw t}}async loadModel(){const e=new ZA;try{if(this.materialUrl){const h=new HA,f=this.materialUrl.substring(0,this.materialUrl.lastIndexOf("/")+1);h.setPath(f);const p=await new Promise((m,g)=>{const y=this.materialUrl.substring(this.materialUrl.lastIndexOf("/")+1);h.load(y,m,void 0,g)});p.preload(),e.setMaterials(p)}const t=this.modelUrl.substring(0,this.modelUrl.lastIndexOf("/")+1);e.setPath(t);const i=await new Promise((h,f)=>{const p=this.modelUrl.substring(this.modelUrl.lastIndexOf("/")+1);e.load(p,h,void 0,f)}),n=new Yr().setFromObject(i),a=new Y;n.getSize(a);const o=Math.max(a.x,a.y,a.z);i.scale.multiplyScalar(3/o);const s=new Y;if(n.getCenter(s),i.position.sub(s.multiplyScalar(i.scale.x)),!this.scene)return;this.scene.add(i),this.currentModel=i,this.storeOriginalMaterials(i);const l=this.cameraPosition.split(",").map(h=>parseFloat(h.trim())),c=this.cameraTarget.split(",").map(h=>parseFloat(h.trim()));l.length===3&&this.camera.position.set(l[0],l[1],l[2]),c.length===3&&(this.camera.lookAt(c[0],c[1],c[2]),this.controls.target.set(c[0],c[1],c[2])),this.controls.update(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}catch(t){throw t}}handleResize(){if(!this.container||!this.camera||!this.renderer)return;const e=this.container.getBoundingClientRect(),t=e.width,i=e.height;if(t>0&&i>0){this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i);const n=this.renderer.domElement;n.style.left=`${e.left}px`,n.style.top=`${e.top}px`,n.style.width=`${e.width}px`,n.style.height=`${e.height}px`}}}customElements.get("cc-viewer-3dmodel")||customElements.define("cc-viewer-3dmodel",c_);class h_ extends wr{constructor(){super(...arguments),Ie(this,"splatUrl",""),Ie(this,"debugMode",!1),Ie(this,"cameraPosition","3,3,3"),Ie(this,"_cameraTarget","0,0,0"),Ie(this,"scene"),Ie(this,"camera"),Ie(this,"renderer"),Ie(this,"controls"),Ie(this,"animationId"),Ie(this,"canvas"),Ie(this,"swiper")}static get observedAttributes(){return["show","debug-mode","camera-position","camera-target"]}attributeChangedCallback(e,t,i){e==="show"?this.isShow=i==="true":e==="debug-mode"?this.debugMode=i==="true":e==="camera-position"?this.cameraPosition=i||"3,3,3":e==="camera-target"&&(this._cameraTarget=i||"0,0,0"),super.attributeChangedCallback(e,t,i)}async doOpen(e){this.splatUrl=e,await this.initializeViewer()}doClose(){this.cleanup()}getViewerContent(){return""}shouldUseCustomRender(){return!0}customRender(){const e=this.css`
      :host {
        --cc-viewer-z-index-each: 1000;
      }
      
      .backdrop {
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 1000;
      }
      
      .viewer {
        position: absolute;
        width: 90%;
        height: 85%;
        inset: 0px;
        margin: auto;
        align-self: center;
        background-color: #000;
      }
      
      .gaussian-container {
        width: 100%;
        height: 100%;
        position: relative;
        background: #000;
      }
      
      .gaussian-container canvas {
        width: 100% !important;
        height: 100% !important;
        display: block;
      }
      
      .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 1.2rem;
      }
      
      .error {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #e74c3c;
        text-align: center;
        padding: 20px;
      }
      
      canvas {
        display: block;
        width: 100%;
        height: 100%;
        touch-action: none;
      }
      
      .debug-info {
        position: absolute;
        top: 10px;
        left: 10px;
        background: rgba(0, 0, 0, 0.85);
        color: #00ff00;
        padding: 12px;
        font-family: 'Courier New', monospace;
        font-size: 11px;
        line-height: 1.4;
        border-radius: 6px;
        border: 1px solid rgba(0, 255, 0, 0.3);
        pointer-events: none;
        white-space: pre-line;
        min-width: 200px;
        z-index: 1003;
      }
      
      ${this.getNavigationStyles()}
    `,t=`
        <canvas style="display: none;"></canvas>
        ${this.isLoading?'<div class="loading">Loading...</div>':""}
        ${!this.isLoading&&this.debugMode?`
          <div class="debug-info">
📍 Camera Position:
${this.getCameraDebugInfo()}

🎯 Camera Target:
${this.getTargetDebugInfo()}

🎮 Controls:
• Rotate: Left-drag
• Zoom: Scroll wheel
• Pan: Right-drag or Shift+Left-drag

📊 Status: ${this.scene?"Splat loaded":"Loading..."}
          </div>
        `:""}
      `,i=`
      ${e}
      <div class="backdrop" style="${this.isShow?"visibility: visible":"visibility: hidden"}">
        <div class="viewer">
          <div class="gaussian-container">
            ${t}
          </div>
        </div>
        ${this.getNavigationButtons()}
      </div>
    `;this.updateShadowRoot(i),setTimeout(()=>{this.addNavigationListeners()},0)}cleanup(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=void 0),this.renderer&&typeof this.renderer.dispose=="function"&&this.renderer.dispose(),document.querySelectorAll('canvas[id^="gaussian-canvas-"]').forEach(e=>{e.parentNode===document.body&&document.body.removeChild(e)}),this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.controls=void 0,this.canvas=void 0}getCameraDebugInfo(){if(!this.camera||!this.camera.position)return"Position: unavailable";const e=this.camera.position;try{return`X: ${e.x.toFixed(3)}, Y: ${e.y.toFixed(3)}, Z: ${e.z.toFixed(3)}`}catch{return`Position: ${JSON.stringify(e)}`}}getTargetDebugInfo(){if(!this.controls)return"Target: controls unavailable";try{return"Controls active (no target property in gsplat.js)"}catch{return`Target: ${JSON.stringify(this.controls)}`}}updateDebugInfo(){const e=this.query(".debug-info");e&&(e.innerHTML=`
📍 Camera Position:
${this.getCameraDebugInfo()}

🎯 Camera Target:
${this.getTargetDebugInfo()}

🎮 Controls:
• Rotate: Left-drag
• Zoom: Scroll wheel
• Pan: Right-drag or Shift+Left-drag

📊 Status: ${this.scene?"Splat loaded":"Loading..."}
      `)}async initializeViewer(){const e=`gaussian-canvas-${Date.now()}`,t=this.query(".viewer");if(!t)return;const i=t.getBoundingClientRect();let n=document.getElementById(e);n||(n=document.createElement("canvas"),n.id=e,n.style.position="fixed",n.style.top=`${i.top}px`,n.style.left=`${i.left}px`,n.style.width=`${i.width}px`,n.style.height=`${i.height}px`,n.style.zIndex="1001",n.style.pointerEvents="auto",n.style.display="block",n.style.background="transparent",document.body.appendChild(n)),n.style.top=`${i.top}px`,n.style.left=`${i.left}px`,n.style.width=`${i.width}px`,n.style.height=`${i.height}px`,this.canvas=n;try{const a=this.query(".gaussian-container");if(!a)return;const o=await Promise.resolve().then(()=>P_);this.scene=new o.Scene,this.camera=new o.Camera,this.renderer=new o.WebGLRenderer(this.canvas),this.controls=new o.OrbitControls(this.camera,this.canvas),await o.Loader.LoadAsync(this.splatUrl,this.scene);let s=0;const l=()=>{if(!(!this.renderer||!this.scene||!this.camera)){this.animationId=requestAnimationFrame(l),this.controls&&this.controls.update();try{this.renderer.render(this.scene,this.camera)}catch{}s===0&&this.canvas&&s++,this.debugMode&&this.updateDebugInfo()}};l(),new ResizeObserver(()=>{this.handleResize()}).observe(a)}catch(a){throw a}}handleResize(){const e=this.query(".gaussian-container");if(!e||!this.renderer||!this.camera)return;const t=e.clientWidth,i=e.clientHeight;typeof this.renderer.setSize=="function"&&this.renderer.setSize(t,i),typeof this.camera.aspect<"u"&&(this.camera.aspect=t/i,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix())}}customElements.get("cc-viewer-gaussian")||customElements.define("cc-viewer-gaussian",h_);const Za={image:"cc-viewer-image",panorama:"cc-viewer-panorama",youtube:"cc-viewer-youtube",video:"cc-viewer-video","3dmodel":"cc-viewer-3dmodel",gaussian:"cc-viewer-gaussian"};class u_ extends Pn{constructor(){super(...arguments),Ie(this,"swiper"),Ie(this,"currentSlideIndex",0),Ie(this,"currentType",""),Ie(this,"boundHandleNavigatePrev"),Ie(this,"boundHandleNavigateNext")}open(e,t,i){const n=this.currentType;if(this.currentType=t,n&&n!==t){const a=Za[n],o=this.query(a);o&&o.close&&o.close()}n!==t&&this.render(),setTimeout(()=>{const a=Za[t],o=this.query(a);o&&i&&Object.entries(i).forEach(([s,l])=>{const c=s.replace(/([A-Z])/g,"-$1").toLowerCase();typeof l=="boolean"?l?o.setAttribute(c,""):o.removeAttribute(c):o.setAttribute(c,String(l))}),this.updateNavigationButtons(),o&&o.open(e)},0)}firstUpdated(){this.dispatch("load"),this.boundHandleNavigatePrev&&this.removeEventListener("navigate-prev",this.boundHandleNavigatePrev),this.boundHandleNavigateNext&&this.removeEventListener("navigate-next",this.boundHandleNavigateNext),this.boundHandleNavigatePrev=this.handleNavigatePrev.bind(this),this.boundHandleNavigateNext=this.handleNavigateNext.bind(this),this.addEventListener("navigate-prev",this.boundHandleNavigatePrev),this.addEventListener("navigate-next",this.boundHandleNavigateNext)}handleNavigatePrev(e){var t,i;if(!this.swiper)return;const n=this.swiper.slides.length;if(n<=1)return;const a=((i=(t=this.swiper.slider)==null?void 0:t.params)==null?void 0:i.loop)===!0;if(this.currentSlideIndex<=0)if(a)this.currentSlideIndex=n-1;else return;else this.currentSlideIndex--;this.navigateToSlide(this.currentSlideIndex)}handleNavigateNext(e){var t,i;if(!this.swiper)return;const n=this.swiper.slides.length;if(n<=1)return;const a=((i=(t=this.swiper.slider)==null?void 0:t.params)==null?void 0:i.loop)===!0;if(this.currentSlideIndex>=n-1)if(a)this.currentSlideIndex=0;else return;else this.currentSlideIndex++;this.navigateToSlide(this.currentSlideIndex)}navigateToSlide(e){if(!this.swiper||!this.swiper.slides[e])return;const t=this.swiper.slides[e],i=t.getAttribute("image-url")||"",n=t.getAttribute("image-type")||"image",a=Za[this.currentType],o=this.query(a);o&&o.close();const s={};t.hasAttribute("fit-to-container")&&(s.fitToContainer=!0),t.hasAttribute("debug-mode")&&(s.debugMode=!0),t.hasAttribute("camera-position")&&(s.cameraPosition=t.getAttribute("camera-position")),t.hasAttribute("camera-target")&&(s.cameraTarget=t.getAttribute("camera-target")),t.hasAttribute("show-texture")&&(s.showTexture=t.getAttribute("show-texture")==="true"),t.hasAttribute("material-url")&&(s.materialUrl=t.getAttribute("material-url")),this.currentSlideIndex=e,this.open(i,n,s),this.swiper.slider&&this.swiper.slider.slideTo(e)}updateNavigationButtons(){var e,t;if(!this.swiper)return;const i=this.swiper.slides.length,n=((t=(e=this.swiper.slider)==null?void 0:e.params)==null?void 0:t.loop)===!0;if(i<=1){this.setNavigationVisibility(!1,!1);return}if(n){this.setNavigationVisibility(!0,!0);return}const a=this.currentSlideIndex>0,o=this.currentSlideIndex<i-1;this.setNavigationVisibility(a,o)}setNavigationVisibility(e,t){[this.query("cc-viewer-image"),this.query("cc-viewer-youtube"),this.query("cc-viewer-panorama"),this.query("cc-viewer-video"),this.query("cc-viewer-3dmodel"),this.query("cc-viewer-gaussian")].forEach(i=>{if(i){const n=i;n.showPrevButton=e,n.showNextButton=t}})}setSwiper(e){this.swiper=e}setCurrentSlideIndex(e){this.currentSlideIndex=e}render(){const e=this.css`
      :host {
        --cc-viewer-z-index: 1000;
      }
      
      cc-viewer-panorama, cc-viewer-image, cc-viewer-youtube, cc-viewer-video,
      cc-viewer-3dmodel, cc-viewer-gaussian {
        --cc-viewer-z-index-each: var(--cc-viewer-z-index);
      }
    `;let t="";if(this.currentType){const n=Za[this.currentType];n&&(t=`<${n}></${n}>`)}const i=`
      ${e}
      ${t}
    `;this.updateShadowRoot(i)}}customElements.get("cc-viewer")||customElements.define("cc-viewer",u_);class Fe{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}equals(e){return!(this.x!==e.x||this.y!==e.y||this.z!==e.z)}add(e){return typeof e=="number"?new Fe(this.x+e,this.y+e,this.z+e):new Fe(this.x+e.x,this.y+e.y,this.z+e.z)}subtract(e){return typeof e=="number"?new Fe(this.x-e,this.y-e,this.z-e):new Fe(this.x-e.x,this.y-e.y,this.z-e.z)}multiply(e){return typeof e=="number"?new Fe(this.x*e,this.y*e,this.z*e):e instanceof Fe?new Fe(this.x*e.x,this.y*e.y,this.z*e.z):new Fe(this.x*e.buffer[0]+this.y*e.buffer[4]+this.z*e.buffer[8]+e.buffer[12],this.x*e.buffer[1]+this.y*e.buffer[5]+this.z*e.buffer[9]+e.buffer[13],this.x*e.buffer[2]+this.y*e.buffer[6]+this.z*e.buffer[10]+e.buffer[14])}divide(e){return typeof e=="number"?new Fe(this.x/e,this.y/e,this.z/e):new Fe(this.x/e.x,this.y/e.y,this.z/e.z)}cross(e){const t=this.y*e.z-this.z*e.y,i=this.z*e.x-this.x*e.z,n=this.x*e.y-this.y*e.x;return new Fe(t,i,n)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lerp(e,t){return new Fe(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t,this.z+(e.z-this.z)*t)}min(e){return new Fe(Math.min(this.x,e.x),Math.min(this.y,e.y),Math.min(this.z,e.z))}max(e){return new Fe(Math.max(this.x,e.x),Math.max(this.y,e.y),Math.max(this.z,e.z))}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`Invalid component index: ${e}`)}}minComponent(){return this.x<this.y&&this.x<this.z?0:this.y<this.z?1:2}maxComponent(){return this.x>this.y&&this.x>this.z?0:this.y>this.z?1:2}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}distanceTo(e){return Math.sqrt((this.x-e.x)**2+(this.y-e.y)**2+(this.z-e.z)**2)}normalize(){const e=this.magnitude();return new Fe(this.x/e,this.y/e,this.z/e)}flat(){return[this.x,this.y,this.z]}clone(){return new Fe(this.x,this.y,this.z)}toString(){return`[${this.flat().join(", ")}]`}static One(e=1){return new Fe(e,e,e)}}class dt{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}equals(e){return!(this.x!==e.x||this.y!==e.y||this.z!==e.z||this.w!==e.w)}normalize(){const e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return new dt(this.x/e,this.y/e,this.z/e,this.w/e)}multiply(e){const t=this.w,i=this.x,n=this.y,a=this.z,o=e.w,s=e.x,l=e.y,c=e.z;return new dt(t*s+i*o+n*c-a*l,t*l-i*c+n*o+a*s,t*c+i*l-n*s+a*o,t*o-i*s-n*l-a*c)}inverse(){const e=this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w;return new dt(-this.x/e,-this.y/e,-this.z/e,this.w/e)}apply(e){const t=new dt(e.x,e.y,e.z,0),i=new dt(-this.x,-this.y,-this.z,this.w),n=this.multiply(t).multiply(i);return new Fe(n.x,n.y,n.z)}flat(){return[this.x,this.y,this.z,this.w]}clone(){return new dt(this.x,this.y,this.z,this.w)}static FromEuler(e){const t=e.x/2,i=e.y/2,n=e.z/2,a=Math.cos(i),o=Math.sin(i),s=Math.cos(t),l=Math.sin(t),c=Math.cos(n),h=Math.sin(n);return new dt(a*l*c+o*s*h,o*s*c-a*l*h,a*s*h-o*l*c,a*s*c+o*l*h)}toEuler(){const e=2*(this.w*this.x+this.y*this.z),t=1-2*(this.x*this.x+this.y*this.y),i=Math.atan2(e,t);let n;const a=2*(this.w*this.y-this.z*this.x);Math.abs(a)>=1?n=Math.sign(a)*Math.PI/2:n=Math.asin(a);const o=2*(this.w*this.z+this.x*this.y),s=1-2*(this.y*this.y+this.z*this.z),l=Math.atan2(o,s);return new Fe(i,n,l)}static FromMatrix3(e){const t=e.buffer,i=t[0]+t[4]+t[8];let n,a,o,s;if(i>0){const l=.5/Math.sqrt(i+1);s=.25/l,n=(t[7]-t[5])*l,a=(t[2]-t[6])*l,o=(t[3]-t[1])*l}else if(t[0]>t[4]&&t[0]>t[8]){const l=2*Math.sqrt(1+t[0]-t[4]-t[8]);s=(t[7]-t[5])/l,n=.25*l,a=(t[1]+t[3])/l,o=(t[2]+t[6])/l}else if(t[4]>t[8]){const l=2*Math.sqrt(1+t[4]-t[0]-t[8]);s=(t[2]-t[6])/l,n=(t[1]+t[3])/l,a=.25*l,o=(t[5]+t[7])/l}else{const l=2*Math.sqrt(1+t[8]-t[0]-t[4]);s=(t[3]-t[1])/l,n=(t[2]+t[6])/l,a=(t[5]+t[7])/l,o=.25*l}return new dt(n,a,o,s)}static FromAxisAngle(e,t){const i=t/2,n=Math.sin(i),a=Math.cos(i);return new dt(e.x*n,e.y*n,e.z*n,a)}static LookRotation(e){const t=new Fe(0,0,1),i=t.dot(e);if(Math.abs(i- -1)<1e-6)return new dt(0,1,0,Math.PI);if(Math.abs(i-1)<1e-6)return new dt;const n=Math.acos(i),a=t.cross(e).normalize();return dt.FromAxisAngle(a,n)}toString(){return`[${this.flat().join(", ")}]`}}class Kh{constructor(){const e=new Map;this.addEventListener=(t,i)=>{e.has(t)||e.set(t,new Set),e.get(t).add(i)},this.removeEventListener=(t,i)=>{e.has(t)&&e.get(t).delete(i)},this.hasEventListener=(t,i)=>e.has(t)?e.get(t).has(i):!1,this.dispatchEvent=t=>{if(e.has(t.type))for(const i of e.get(t.type))i(t)}}}class Nt{constructor(e=1,t=0,i=0,n=0,a=0,o=1,s=0,l=0,c=0,h=0,f=1,p=0,m=0,g=0,y=0,d=1){this.buffer=[e,t,i,n,a,o,s,l,c,h,f,p,m,g,y,d]}equals(e){if(this.buffer.length!==e.buffer.length)return!1;if(this.buffer===e.buffer)return!0;for(let t=0;t<this.buffer.length;t++)if(this.buffer[t]!==e.buffer[t])return!1;return!0}multiply(e){const t=this.buffer,i=e.buffer;return new Nt(i[0]*t[0]+i[1]*t[4]+i[2]*t[8]+i[3]*t[12],i[0]*t[1]+i[1]*t[5]+i[2]*t[9]+i[3]*t[13],i[0]*t[2]+i[1]*t[6]+i[2]*t[10]+i[3]*t[14],i[0]*t[3]+i[1]*t[7]+i[2]*t[11]+i[3]*t[15],i[4]*t[0]+i[5]*t[4]+i[6]*t[8]+i[7]*t[12],i[4]*t[1]+i[5]*t[5]+i[6]*t[9]+i[7]*t[13],i[4]*t[2]+i[5]*t[6]+i[6]*t[10]+i[7]*t[14],i[4]*t[3]+i[5]*t[7]+i[6]*t[11]+i[7]*t[15],i[8]*t[0]+i[9]*t[4]+i[10]*t[8]+i[11]*t[12],i[8]*t[1]+i[9]*t[5]+i[10]*t[9]+i[11]*t[13],i[8]*t[2]+i[9]*t[6]+i[10]*t[10]+i[11]*t[14],i[8]*t[3]+i[9]*t[7]+i[10]*t[11]+i[11]*t[15],i[12]*t[0]+i[13]*t[4]+i[14]*t[8]+i[15]*t[12],i[12]*t[1]+i[13]*t[5]+i[14]*t[9]+i[15]*t[13],i[12]*t[2]+i[13]*t[6]+i[14]*t[10]+i[15]*t[14],i[12]*t[3]+i[13]*t[7]+i[14]*t[11]+i[15]*t[15])}clone(){const e=this.buffer;return new Nt(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}determinant(){const e=this.buffer;return e[12]*e[9]*e[6]*e[3]-e[8]*e[13]*e[6]*e[3]-e[12]*e[5]*e[10]*e[3]+e[4]*e[13]*e[10]*e[3]+e[8]*e[5]*e[14]*e[3]-e[4]*e[9]*e[14]*e[3]-e[12]*e[9]*e[2]*e[7]+e[8]*e[13]*e[2]*e[7]+e[12]*e[1]*e[10]*e[7]-e[0]*e[13]*e[10]*e[7]-e[8]*e[1]*e[14]*e[7]+e[0]*e[9]*e[14]*e[7]+e[12]*e[5]*e[2]*e[11]-e[4]*e[13]*e[2]*e[11]-e[12]*e[1]*e[6]*e[11]+e[0]*e[13]*e[6]*e[11]+e[4]*e[1]*e[14]*e[11]-e[0]*e[5]*e[14]*e[11]-e[8]*e[5]*e[2]*e[15]+e[4]*e[9]*e[2]*e[15]+e[8]*e[1]*e[6]*e[15]-e[0]*e[9]*e[6]*e[15]-e[4]*e[1]*e[10]*e[15]+e[0]*e[5]*e[10]*e[15]}invert(){const e=this.buffer,t=this.determinant();if(t===0)throw new Error("Matrix is not invertible.");const i=1/t;return new Nt(i*(e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10]),i*(-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10]),i*(e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6]),i*(-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6]),i*(-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10]),i*(e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10]),i*(-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6]),i*(e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6]),i*(e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9]),i*(-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9]),i*(e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5]),i*(-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5]),i*(-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9]),i*(e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9]),i*(-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5]),i*(e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5]))}static Compose(e,t,i){const n=t.x,a=t.y,o=t.z,s=t.w,l=n+n,c=a+a,h=o+o,f=n*l,p=n*c,m=n*h,g=a*c,y=a*h,d=o*h,u=s*l,v=s*c,S=s*h,_=i.x,b=i.y,x=i.z;return new Nt((1-(g+d))*_,(p+S)*_,(m-v)*_,0,(p-S)*b,(1-(f+d))*b,(y+u)*b,0,(m+v)*x,(y-u)*x,(1-(f+g))*x,0,e.x,e.y,e.z,1)}toString(){return`[${this.buffer.join(", ")}]`}}class d_ extends Event{constructor(e){super("objectAdded"),this.object=e}}class p_ extends Event{constructor(e){super("objectRemoved"),this.object=e}}class f_ extends Event{constructor(e){super("objectChanged"),this.object=e}}class Ha extends Kh{constructor(){super(),this.positionChanged=!1,this.rotationChanged=!1,this.scaleChanged=!1,this._position=new Fe,this._rotation=new dt,this._scale=new Fe(1,1,1),this._transform=new Nt,this._changeEvent=new f_(this),this.update=()=>{},this.applyPosition=()=>{this.position=new Fe},this.applyRotation=()=>{this.rotation=new dt},this.applyScale=()=>{this.scale=new Fe(1,1,1)},this.raiseChangeEvent=()=>{this.dispatchEvent(this._changeEvent)}}_updateMatrix(){this._transform=Nt.Compose(this._position,this._rotation,this._scale)}get position(){return this._position}set position(e){this._position.equals(e)||(this._position=e,this.positionChanged=!0,this._updateMatrix(),this.dispatchEvent(this._changeEvent))}get rotation(){return this._rotation}set rotation(e){this._rotation.equals(e)||(this._rotation=e,this.rotationChanged=!0,this._updateMatrix(),this.dispatchEvent(this._changeEvent))}get scale(){return this._scale}set scale(e){this._scale.equals(e)||(this._scale=e,this.scaleChanged=!0,this._updateMatrix(),this.dispatchEvent(this._changeEvent))}get forward(){let e=new Fe(0,0,1);return e=this.rotation.apply(e),e}get transform(){return this._transform}}class kt{constructor(e=1,t=0,i=0,n=0,a=1,o=0,s=0,l=0,c=1){this.buffer=[e,t,i,n,a,o,s,l,c]}equals(e){if(this.buffer.length!==e.buffer.length)return!1;if(this.buffer===e.buffer)return!0;for(let t=0;t<this.buffer.length;t++)if(this.buffer[t]!==e.buffer[t])return!1;return!0}multiply(e){const t=this.buffer,i=e.buffer;return new kt(i[0]*t[0]+i[3]*t[1]+i[6]*t[2],i[1]*t[0]+i[4]*t[1]+i[7]*t[2],i[2]*t[0]+i[5]*t[1]+i[8]*t[2],i[0]*t[3]+i[3]*t[4]+i[6]*t[5],i[1]*t[3]+i[4]*t[4]+i[7]*t[5],i[2]*t[3]+i[5]*t[4]+i[8]*t[5],i[0]*t[6]+i[3]*t[7]+i[6]*t[8],i[1]*t[6]+i[4]*t[7]+i[7]*t[8],i[2]*t[6]+i[5]*t[7]+i[8]*t[8])}clone(){const e=this.buffer;return new kt(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}static Eye(e=1){return new kt(e,0,0,0,e,0,0,0,e)}static Diagonal(e){return new kt(e.x,0,0,0,e.y,0,0,0,e.z)}static RotationFromQuaternion(e){return new kt(1-2*e.y*e.y-2*e.z*e.z,2*e.x*e.y-2*e.z*e.w,2*e.x*e.z+2*e.y*e.w,2*e.x*e.y+2*e.z*e.w,1-2*e.x*e.x-2*e.z*e.z,2*e.y*e.z-2*e.x*e.w,2*e.x*e.z-2*e.y*e.w,2*e.y*e.z+2*e.x*e.w,1-2*e.x*e.x-2*e.y*e.y)}static RotationFromEuler(e){const t=Math.cos(e.x),i=Math.sin(e.x),n=Math.cos(e.y),a=Math.sin(e.y),o=Math.cos(e.z),s=Math.sin(e.z),l=[n*o+a*i*s,-n*s+a*i*o,a*t,t*s,t*o,-i,-a*o+n*i*s,a*s+n*i*o,n*t];return new kt(...l)}toString(){return`[${this.buffer.join(", ")}]`}}const qh=class kn{constructor(e=0,t=null,i=null,n=null,a=null){this.changed=!1,this.detached=!1,this._vertexCount=e,this._positions=t||new Float32Array(0),this._rotations=i||new Float32Array(0),this._scales=n||new Float32Array(0),this._colors=a||new Uint8Array(0),this._selection=new Uint8Array(this.vertexCount),this.translate=o=>{for(let s=0;s<this.vertexCount;s++)this.positions[3*s+0]+=o.x,this.positions[3*s+1]+=o.y,this.positions[3*s+2]+=o.z;this.changed=!0},this.rotate=o=>{const s=kt.RotationFromQuaternion(o).buffer;for(let l=0;l<this.vertexCount;l++){const c=this.positions[3*l+0],h=this.positions[3*l+1],f=this.positions[3*l+2];this.positions[3*l+0]=s[0]*c+s[1]*h+s[2]*f,this.positions[3*l+1]=s[3]*c+s[4]*h+s[5]*f,this.positions[3*l+2]=s[6]*c+s[7]*h+s[8]*f;const p=new dt(this.rotations[4*l+1],this.rotations[4*l+2],this.rotations[4*l+3],this.rotations[4*l+0]),m=o.multiply(p);this.rotations[4*l+1]=m.x,this.rotations[4*l+2]=m.y,this.rotations[4*l+3]=m.z,this.rotations[4*l+0]=m.w}this.changed=!0},this.scale=o=>{for(let s=0;s<this.vertexCount;s++)this.positions[3*s+0]*=o.x,this.positions[3*s+1]*=o.y,this.positions[3*s+2]*=o.z,this.scales[3*s+0]*=o.x,this.scales[3*s+1]*=o.y,this.scales[3*s+2]*=o.z;this.changed=!0},this.serialize=()=>{const o=new Uint8Array(this.vertexCount*kn.RowLength),s=new Float32Array(o.buffer),l=new Uint8Array(o.buffer);for(let c=0;c<this.vertexCount;c++)s[8*c+0]=this.positions[3*c+0],s[8*c+1]=this.positions[3*c+1],s[8*c+2]=this.positions[3*c+2],l[32*c+24+0]=this.colors[4*c+0],l[32*c+24+1]=this.colors[4*c+1],l[32*c+24+2]=this.colors[4*c+2],l[32*c+24+3]=this.colors[4*c+3],s[8*c+3+0]=this.scales[3*c+0],s[8*c+3+1]=this.scales[3*c+1],s[8*c+3+2]=this.scales[3*c+2],l[32*c+28+0]=this.rotations[4*c+0]*128+128&255,l[32*c+28+1]=this.rotations[4*c+1]*128+128&255,l[32*c+28+2]=this.rotations[4*c+2]*128+128&255,l[32*c+28+3]=this.rotations[4*c+3]*128+128&255;return o},this.reattach=(o,s,l,c,h)=>{console.assert(o.byteLength===this.vertexCount*3*4,`Expected ${this.vertexCount*3*4} bytes, got ${o.byteLength} bytes`),this._positions=new Float32Array(o),this._rotations=new Float32Array(s),this._scales=new Float32Array(l),this._colors=new Uint8Array(c),this._selection=new Uint8Array(h),this.detached=!1}}static Deserialize(e){const t=e.length/kn.RowLength,i=new Float32Array(3*t),n=new Float32Array(4*t),a=new Float32Array(3*t),o=new Uint8Array(4*t),s=new Float32Array(e.buffer),l=new Uint8Array(e.buffer);for(let c=0;c<t;c++)i[3*c+0]=s[8*c+0],i[3*c+1]=s[8*c+1],i[3*c+2]=s[8*c+2],n[4*c+0]=(l[32*c+28+0]-128)/128,n[4*c+1]=(l[32*c+28+1]-128)/128,n[4*c+2]=(l[32*c+28+2]-128)/128,n[4*c+3]=(l[32*c+28+3]-128)/128,a[3*c+0]=s[8*c+3+0],a[3*c+1]=s[8*c+3+1],a[3*c+2]=s[8*c+3+2],o[4*c+0]=l[32*c+24+0],o[4*c+1]=l[32*c+24+1],o[4*c+2]=l[32*c+24+2],o[4*c+3]=l[32*c+24+3];return new kn(t,i,n,a,o)}get vertexCount(){return this._vertexCount}get positions(){return this._positions}get rotations(){return this._rotations}get scales(){return this._scales}get colors(){return this._colors}get selection(){return this._selection}clone(){return new kn(this.vertexCount,new Float32Array(this.positions),new Float32Array(this.rotations),new Float32Array(this.scales),new Uint8Array(this.colors))}};qh.RowLength=32;let bi=qh;const $h=class vu{constructor(e,t,i,n,a){this._vertexCount=e,this._positions=t,this._data=i,this._width=n,this._height=a,this.serialize=()=>new Uint8Array(this._data.buffer)}static Deserialize(e,t,i){const n=new Uint32Array(e.buffer),a=new Float32Array(e.buffer),o=Math.floor(a.byteLength/this.RowLength),s=new Float32Array(o*3);for(let l=0;l<o;l++)s[3*l+0]=a[16*l+0],s[3*l+1]=a[16*l+1],s[3*l+2]=a[16*l+2],s[3*l+0]=a[16*l+3];return new vu(o,s,n,t,i)}get vertexCount(){return this._vertexCount}get positions(){return this._positions}get data(){return this._data}get width(){return this._width}get height(){return this._height}};$h.RowLength=64;let eu=$h;const tu=class{static SplatToPLY(e,t){let i=`ply
format binary_little_endian 1.0
`;i+=`element vertex ${t}
`;const n=["x","y","z","nx","ny","nz","f_dc_0","f_dc_1","f_dc_2"];for(let d=0;d<45;d++)n.push(`f_rest_${d}`);n.push("opacity"),n.push("scale_0"),n.push("scale_1"),n.push("scale_2"),n.push("rot_0"),n.push("rot_1"),n.push("rot_2"),n.push("rot_3");for(const d of n)i+=`property float ${d}
`;i+=`end_header
`;const a=new TextEncoder().encode(i),o=248,s=t*o,l=new DataView(new ArrayBuffer(a.length+s));new Uint8Array(l.buffer).set(a,0);const c=new Float32Array(e),h=new Uint8Array(e),f=a.length,p=24,m=p+12+180,g=m+4,y=g+12;for(let d=0;d<t;d++){const u=c[8*d+0],v=c[8*d+1],S=c[8*d+2],_=(h[32*d+24+0]/255-.5)/this.SH_C0,b=(h[32*d+24+1]/255-.5)/this.SH_C0,x=(h[32*d+24+2]/255-.5)/this.SH_C0,w=h[32*d+24+3]/255,U=Math.log(w/(1-w)),E=Math.log(c[8*d+3+0]),A=Math.log(c[8*d+3+1]),C=Math.log(c[8*d+3+2]);let T=new dt((h[32*d+28+1]-128)/128,(h[32*d+28+2]-128)/128,(h[32*d+28+3]-128)/128,(h[32*d+28+0]-128)/128);T=T.normalize();const R=T.w,B=T.x,L=T.y,N=T.z;l.setFloat32(f+o*d+0,u,!0),l.setFloat32(f+o*d+4,v,!0),l.setFloat32(f+o*d+8,S,!0),l.setFloat32(f+o*d+p+0,_,!0),l.setFloat32(f+o*d+p+4,b,!0),l.setFloat32(f+o*d+p+8,x,!0),l.setFloat32(f+o*d+m,U,!0),l.setFloat32(f+o*d+g+0,E,!0),l.setFloat32(f+o*d+g+4,A,!0),l.setFloat32(f+o*d+g+8,C,!0),l.setFloat32(f+o*d+y+0,R,!0),l.setFloat32(f+o*d+y+4,B,!0),l.setFloat32(f+o*d+y+8,L,!0),l.setFloat32(f+o*d+y+12,N,!0)}return l.buffer}};tu.SH_C0=.28209479177387814;let dn=tu;class Dn{constructor(e,t){this.min=e,this.max=t}contains(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}intersects(e){return this.max.x>=e.min.x&&this.min.x<=e.max.x&&this.max.y>=e.min.y&&this.min.y<=e.max.y&&this.max.z>=e.min.z&&this.min.z<=e.max.z}size(){return this.max.subtract(this.min)}center(){return this.min.add(this.max).divide(2)}expand(e){this.min=this.min.min(e),this.max=this.max.max(e)}permute(){const e=this.min,t=this.max;this.min=new Fe(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z)),this.max=new Fe(Math.max(e.x,t.x),Math.max(e.y,t.y),Math.max(e.z,t.z))}}class Jt extends Ha{constructor(e=void 0){super(),this.selectedChanged=!1,this.colorTransformChanged=!1,this._selected=!1,this._colorTransforms=[],this._colorTransformsMap=new Map,this._data=e||new bi,this._bounds=new Dn(new Fe(1/0,1/0,1/0),new Fe(-1/0,-1/0,-1/0)),this.recalculateBounds=()=>{this._bounds=new Dn(new Fe(1/0,1/0,1/0),new Fe(-1/0,-1/0,-1/0));for(let t=0;t<this._data.vertexCount;t++)this._bounds.expand(new Fe(this._data.positions[3*t],this._data.positions[3*t+1],this._data.positions[3*t+2]))},this.applyPosition=()=>{this.data.translate(this.position),this.position=new Fe},this.applyRotation=()=>{this.data.rotate(this.rotation),this.rotation=new dt},this.applyScale=()=>{this.data.scale(this.scale),this.scale=new Fe(1,1,1)},this.recalculateBounds()}saveToFile(e=null,t="splat"){if(!document)return;if(!e){const s=new Date;e=`splat-${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}.${t}`}const i=this.clone();i.applyRotation(),i.applyScale(),i.applyPosition();const n=i.data.serialize();let a;if(t==="ply"){const s=dn.SplatToPLY(n.buffer,i.data.vertexCount);a=new Blob([s],{type:"application/octet-stream"})}else a=new Blob([n.buffer],{type:"application/octet-stream"});const o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(a),o.click()}get data(){return this._data}get selected(){return this._selected}set selected(e){this._selected!==e&&(this._selected=e,this.selectedChanged=!0,this.dispatchEvent(this._changeEvent))}get colorTransforms(){return this._colorTransforms}get colorTransformsMap(){return this._colorTransformsMap}get bounds(){let e=this._bounds.center();e=e.add(this.position);let t=this._bounds.size();return t=t.multiply(this.scale),new Dn(e.subtract(t.divide(2)),e.add(t.divide(2)))}clone(){const e=new Jt(this.data.clone());return e.position=this.position.clone(),e.rotation=this.rotation.clone(),e.scale=this.scale.clone(),e}}class Ar extends Ha{constructor(e){super(),this._data=e}get data(){return this._data}}class iu{constructor(){this._fx=1132,this._fy=1132,this._near=.1,this._far=100,this._width=512,this._height=512,this._projectionMatrix=new Nt,this._viewMatrix=new Nt,this._viewProj=new Nt,this._updateProjectionMatrix=()=>{this._projectionMatrix=new Nt(2*this.fx/this.width,0,0,0,0,-2*this.fy/this.height,0,0,0,0,this.far/(this.far-this.near),1,0,0,-(this.far*this.near)/(this.far-this.near),0),this._viewProj=this.projectionMatrix.multiply(this.viewMatrix)},this.update=(e,t)=>{const i=kt.RotationFromQuaternion(t).buffer,n=e.flat();this._viewMatrix=new Nt(i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,-n[0]*i[0]-n[1]*i[3]-n[2]*i[6],-n[0]*i[1]-n[1]*i[4]-n[2]*i[7],-n[0]*i[2]-n[1]*i[5]-n[2]*i[8],1),this._viewProj=this.projectionMatrix.multiply(this.viewMatrix)},this.setSize=(e,t)=>{this._width=e,this._height=t,this._updateProjectionMatrix()}}get fx(){return this._fx}set fx(e){this._fx!==e&&(this._fx=e,this._updateProjectionMatrix())}get fy(){return this._fy}set fy(e){this._fy!==e&&(this._fy=e,this._updateProjectionMatrix())}get near(){return this._near}set near(e){this._near!==e&&(this._near=e,this._updateProjectionMatrix())}get far(){return this._far}set far(e){this._far!==e&&(this._far=e,this._updateProjectionMatrix())}get width(){return this._width}get height(){return this._height}get projectionMatrix(){return this._projectionMatrix}get viewMatrix(){return this._viewMatrix}get viewProj(){return this._viewProj}}class Zt{constructor(e=0,t=0,i=0,n=0){this.x=e,this.y=t,this.z=i,this.w=n}equals(e){return!(this.x!==e.x||this.y!==e.y||this.z!==e.z||this.w!==e.w)}add(e){return typeof e=="number"?new Zt(this.x+e,this.y+e,this.z+e,this.w+e):new Zt(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)}subtract(e){return typeof e=="number"?new Zt(this.x-e,this.y-e,this.z-e,this.w-e):new Zt(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)}multiply(e){return typeof e=="number"?new Zt(this.x*e,this.y*e,this.z*e,this.w*e):e instanceof Zt?new Zt(this.x*e.x,this.y*e.y,this.z*e.z,this.w*e.w):new Zt(this.x*e.buffer[0]+this.y*e.buffer[4]+this.z*e.buffer[8]+this.w*e.buffer[12],this.x*e.buffer[1]+this.y*e.buffer[5]+this.z*e.buffer[9]+this.w*e.buffer[13],this.x*e.buffer[2]+this.y*e.buffer[6]+this.z*e.buffer[10]+this.w*e.buffer[14],this.x*e.buffer[3]+this.y*e.buffer[7]+this.z*e.buffer[11]+this.w*e.buffer[15])}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lerp(e,t){return new Zt(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t,this.z+(e.z-this.z)*t,this.w+(e.w-this.w)*t)}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}distanceTo(e){return Math.sqrt((this.x-e.x)**2+(this.y-e.y)**2+(this.z-e.z)**2+(this.w-e.w)**2)}normalize(){const e=this.magnitude();return new Zt(this.x/e,this.y/e,this.z/e,this.w/e)}flat(){return[this.x,this.y,this.z,this.w]}clone(){return new Zt(this.x,this.y,this.z,this.w)}toString(){return`[${this.flat().join(", ")}]`}}class m_ extends Ha{constructor(e=void 0){super(),this._data=e||new iu,this._position=new Fe(0,0,-5),this.update=()=>{this.data.update(this.position,this.rotation)},this.screenPointToRay=(t,i)=>{const n=new Zt(t,i,-1,1),a=this._data.projectionMatrix.invert(),o=n.multiply(a),s=this._data.viewMatrix.invert(),l=o.multiply(s);return new Fe(l.x/l.w,l.y/l.w,l.z/l.w).subtract(this.position).normalize()}}get data(){return this._data}}class g_ extends Kh{constructor(){super(),this._objects=[],this.addObject=e=>{this.objects.push(e),this.dispatchEvent(new d_(e))},this.removeObject=e=>{const t=this.objects.indexOf(e);if(t<0)throw new Error("Object not found in scene");this.objects.splice(t,1),this.dispatchEvent(new p_(e))},this.findObject=e=>{for(const t of this.objects)if(e(t))return t},this.findObjectOfType=e=>{for(const t of this.objects)if(t instanceof e)return t},this.reset=()=>{const e=this.objects.slice();for(const t of e)this.removeObject(t)},this.reset()}getMergedSceneDataBuffer(e="splat"){const t=[];let i=0;for(const o of this.objects)if(o instanceof Jt){const s=o.clone();s.applyRotation(),s.applyScale(),s.applyPosition();const l=s.data.serialize();t.push(l),i+=s.data.vertexCount}const n=new Uint8Array(i*bi.RowLength);let a=0;for(const o of t)n.set(o,a),a+=o.length;return e==="ply"?dn.SplatToPLY(n.buffer,i):n.buffer}saveToFile(e=null,t="splat"){if(!document)return;if(!e){const o=new Date;e=`scene-${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}.${t}`}const i=this.getMergedSceneDataBuffer(t),n=new Blob([i],{type:"application/octet-stream"}),a=document.createElement("a");a.download=e,a.href=URL.createObjectURL(n),a.click()}get objects(){return this._objects}}async function el(r,e){const t=await fetch(r,{mode:"cors",credentials:"omit",cache:e?"force-cache":"default"});if(t.status!=200)throw new Error(t.status+" Unable to load "+t.url);return t}async function tl(r,e){const t=r.body.getReader(),i=r.headers.get("content-length"),n=i&&!isNaN(parseInt(i))?parseInt(i):void 0,a=[];let o=0;for(;;){const{done:c,value:h}=await t.read();if(c)break;if(a.push(h),o+=h.length,e&&n){const f=o/n,p=Math.min(f*.95,.95);e(p)}}const s=new Uint8Array(o);let l=0;for(const c of a)s.set(c,l),l+=c.length;return e&&e(1),s}class v_{static async LoadAsync(e,t,i,n=!1){const a=await el(e,n),o=await tl(a,i);return this.LoadFromArrayBuffer(o.buffer,t)}static async LoadFromFileAsync(e,t,i){const n=new FileReader;let a=new Jt;return n.onload=o=>{a=this.LoadFromArrayBuffer(o.target.result,t)},n.onprogress=o=>{i==null||i(o.loaded/o.total)},n.readAsArrayBuffer(e),await new Promise(o=>{n.onloadend=()=>{o()}}),a}static LoadFromArrayBuffer(e,t){const i=new Uint8Array(e),n=bi.Deserialize(i),a=new Jt(n);return t.addObject(a),a}}class A_{static async LoadAsync(e,t,i,n="",a=!1){const o=await el(e,a),s=await tl(o,i);if(s[0]!==112||s[1]!==108||s[2]!==121||s[3]!==10)throw new Error("Invalid PLY file");return this.LoadFromArrayBuffer(s.buffer,t,n)}static async LoadFromFileAsync(e,t,i,n=""){const a=new FileReader;let o=new Jt;return a.onload=s=>{o=this.LoadFromArrayBuffer(s.target.result,t,n)},a.onprogress=s=>{i==null||i(s.loaded/s.total)},a.readAsArrayBuffer(e),await new Promise(s=>{a.onloadend=()=>{s()}}),o}static LoadFromArrayBuffer(e,t,i=""){const n=new Uint8Array(this._ParsePLYBuffer(e,i)),a=bi.Deserialize(n),o=new Jt(a);return t.addObject(o),o}static _ParsePLYBuffer(e,t){const i=new Uint8Array(e),n=new TextDecoder().decode(i.slice(0,1024*10)),a=`end_header
`,o=n.indexOf(a);if(o<0)throw new Error("Unable to read .ply file header");const s=parseInt(/element vertex (\d+)\n/.exec(n)[1]);let l=0;const c={double:8,int:4,uint:4,float:4,short:2,ushort:2,uchar:1},h=[];for(const g of n.slice(0,o).split(`
`).filter(y=>y.startsWith("property "))){const[y,d,u]=g.split(" ");if(h.push({name:u,type:d,offset:l}),!c[d])throw new Error(`Unsupported property type: ${d}`);l+=c[d]}const f=new DataView(e,o+a.length),p=new ArrayBuffer(bi.RowLength*s),m=dt.FromEuler(new Fe(Math.PI/2,0,0));for(let g=0;g<s;g++){const y=new Float32Array(p,g*bi.RowLength,3),d=new Float32Array(p,g*bi.RowLength+12,3),u=new Uint8ClampedArray(p,g*bi.RowLength+24,4),v=new Uint8ClampedArray(p,g*bi.RowLength+28,4);let S=255,_=0,b=0,x=0;h.forEach(U=>{let E;switch(U.type){case"float":E=f.getFloat32(U.offset+g*l,!0);break;case"int":E=f.getInt32(U.offset+g*l,!0);break;default:throw new Error(`Unsupported property type: ${U.type}`)}switch(U.name){case"x":y[0]=E;break;case"y":y[1]=E;break;case"z":y[2]=E;break;case"scale_0":case"scaling_0":d[0]=Math.exp(E);break;case"scale_1":case"scaling_1":d[1]=Math.exp(E);break;case"scale_2":case"scaling_2":d[2]=Math.exp(E);break;case"red":u[0]=E;break;case"green":u[1]=E;break;case"blue":u[2]=E;break;case"f_dc_0":case"features_0":u[0]=(.5+dn.SH_C0*E)*255;break;case"f_dc_1":case"features_1":u[1]=(.5+dn.SH_C0*E)*255;break;case"f_dc_2":case"features_2":u[2]=(.5+dn.SH_C0*E)*255;break;case"f_dc_3":u[3]=(.5+dn.SH_C0*E)*255;break;case"opacity":case"opacity_0":u[3]=1/(1+Math.exp(-E))*255;break;case"rot_0":case"rotation_0":S=E;break;case"rot_1":case"rotation_1":_=E;break;case"rot_2":case"rotation_2":b=E;break;case"rot_3":case"rotation_3":x=E;break}});let w=new dt(_,b,x,S);switch(t){case"polycam":{const U=y[1];y[1]=-y[2],y[2]=U,w=m.multiply(w);break}case"":break;default:throw new Error(`Unsupported format: ${t}`)}w=w.normalize(),v[0]=w.w*128+128,v[1]=w.x*128+128,v[2]=w.y*128+128,v[3]=w.z*128+128}return p}}class __{static async LoadAsync(e,t,i,n,a=!1){const o=await el(e,a),s=await tl(o,n);return this._ParseSplatvBuffer(s.buffer,t,i)}static async LoadFromFileAsync(e,t,i,n){const a=new FileReader;let o=null;if(a.onload=s=>{o=this._ParseSplatvBuffer(s.target.result,t,i)},a.onprogress=s=>{n==null||n(s.loaded/s.total)},a.readAsArrayBuffer(e),await new Promise(s=>{a.onloadend=()=>{s()}}),!o)throw new Error("Failed to load splatv file");return o}static _ParseSplatvBuffer(e,t,i){let n=null;const a=(p,m,g)=>{if(p.type==="magic"){const y=new Int32Array(m.buffer);if(y[0]!==26443)throw new Error("Invalid splatv file");g.push({size:y[1],type:"chunks"})}else if(p.type==="chunks"){const y=JSON.parse(new TextDecoder("utf-8").decode(m));if(y.length==0)throw new Error("Invalid splatv file");y.length>1&&console.warn("Splatv file contains more than one chunk, only the first one will be loaded");const d=y[0],u=d.cameras;if(i&&u&&u.length){const v=u[0],S=new Fe(v.position[0],v.position[1],v.position[2]),_=dt.FromMatrix3(new kt(v.rotation[0][0],v.rotation[0][1],v.rotation[0][2],v.rotation[1][0],v.rotation[1][1],v.rotation[1][2],v.rotation[2][0],v.rotation[2][1],v.rotation[2][2]));i.position=S,i.rotation=_}g.push(d)}else if(p.type==="splat"){const y=eu.Deserialize(m,p.texwidth,p.texheight),d=new Ar(y);t.addObject(d),n=d}},o=new Uint8Array(e),s=[{size:8,type:"magic",texwidth:0,texheight:0}];let l=s.shift(),c=new Uint8Array(l.size),h=0,f=0;for(;l;){for(;h<l.size;){const p=Math.min(l.size-h,o.length-f);c.set(o.subarray(f,f+p),h),h+=p,f+=p}if(a(l,c,s),n)return n;l=s.shift(),l&&(c=new Uint8Array(l.size),h=0)}throw new Error("Invalid splatv file")}}const ru="dmFyIGVBID0gZnVuY3Rpb24oQyA9IHt9KSB7CiAgdmFyIHIsIEkgPSBDLCBsID0gaW1wb3J0Lm1ldGEudXJsLCBqID0gIiIsIFU7CiAgewogICAgdHJ5IHsKICAgICAgaiA9IG5ldyBVUkwoIi4iLCBsKS5ocmVmOwogICAgfSBjYXRjaCB7CiAgICB9CiAgICBVID0gKEEpID0+IHsKICAgICAgdmFyIEIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIEIub3BlbigiR0VUIiwgQSwgITEpLCBCLnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIEIuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkoQi5yZXNwb25zZSk7CiAgICB9OwogIH0KICBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7CiAgdmFyIE0sIHUsIEw7CiAgZnVuY3Rpb24gcSgpIHsKICAgIHZhciBBID0gdS5idWZmZXI7CiAgICBJLkhFQVBVOCA9IEwgPSBuZXcgVWludDhBcnJheShBKSwgSS5IRUFQVTMyID0gbmV3IFVpbnQzMkFycmF5KEEpLCBJLkhFQVBGMzIgPSBuZXcgRmxvYXQzMkFycmF5KEEpLCBuZXcgQmlnSW50NjRBcnJheShBKSwgbmV3IEJpZ1VpbnQ2NEFycmF5KEEpOwogIH0KICBmdW5jdGlvbiBQKCkgewogICAgaWYgKEkucHJlUnVuKQogICAgICBmb3IgKHR5cGVvZiBJLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChJLnByZVJ1biA9IFtJLnByZVJ1bl0pOyBJLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICBDQShJLnByZVJ1bi5zaGlmdCgpKTsKICAgIHgoVCk7CiAgfQogIGZ1bmN0aW9uIGIoKSB7CiAgICB5LmMoKTsKICB9CiAgZnVuY3Rpb24gVygpIHsKICAgIGlmIChJLnBvc3RSdW4pCiAgICAgIGZvciAodHlwZW9mIEkucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChJLnBvc3RSdW4gPSBbSS5wb3N0UnVuXSk7IEkucG9zdFJ1bi5sZW5ndGg7ICkKICAgICAgICBnQShJLnBvc3RSdW4uc2hpZnQoKSk7CiAgICB4KHYpOwogIH0KICB2YXIgcyA9IDAsIGYgPSBudWxsOwogIGZ1bmN0aW9uIF8oQSkgewogICAgcysrLCBJLm1vbml0b3JSdW5EZXBlbmRlbmNpZXM/LihzKTsKICB9CiAgZnVuY3Rpb24geihBKSB7CiAgICBpZiAocy0tLCBJLm1vbml0b3JSdW5EZXBlbmRlbmNpZXM/LihzKSwgcyA9PSAwICYmIGYpIHsKICAgICAgdmFyIEIgPSBmOwogICAgICBmID0gbnVsbCwgQigpOwogICAgfQogIH0KICB2YXIgUzsKICBmdW5jdGlvbiBWKCkgewogICAgcmV0dXJuIEJBKCJBR0Z6YlFFQUFBQUJHUVJnQVg4QmYyQUJmd0JnQ1g5L2YzOS9mMzkvZndCZ0FBQUNCd0VCWVFGaEFBQURCZ1VBQVFBQ0F3VUhBUUdDQW9DQUFnWUlBWDhCUVlDTUJBc0hGUVVCWWdJQUFXTUFCUUZrQUFRQlpRQURBV1lBQWd3QkFRck5PQVZQQVFKL1FZQUlLQUlBSWdFZ0FFRUhha0Y0Y1NJQ2FpRUFBa0FnQWtFQUlBQWdBVTBiUlFSQUlBQS9BRUVRZEUwTkFTQUFFQUFOQVF0QmhBaEJNRFlDQUVGL0R3dEJnQWdnQURZQ0FDQUJDOXdMQVFoL0FrQWdBRVVOQUNBQVFRaHJJZ01nQUVFRWF5Z0NBQ0lDUVhoeElnQnFJUVVDUUNBQ1FRRnhEUUFnQWtFQ2NVVU5BU0FESUFNb0FnQWlCR3NpQTBHWUNDZ0NBRWtOQVNBQUlBUnFJUUFDUUFKQUFrQkJuQWdvQWdBZ0EwY0VRQ0FES0FJTUlRRWdCRUgvQVUwRVFDQUJJQU1vQWdnaUFrY05Ba0dJQ0VHSUNDZ0NBRUYrSUFSQkEzWjNjVFlDQUF3RkN5QURLQUlZSVFjZ0FTQURSd1JBSUFNb0FnZ2lBaUFCTmdJTUlBRWdBallDQ0F3RUN5QURLQUlVSWdJRWZ5QURRUlJxQlNBREtBSVFJZ0pGRFFNZ0EwRVFhZ3NoQkFOQUlBUWhCaUFDSWdGQkZHb2hCQ0FCS0FJVUlnSU5BQ0FCUVJCcUlRUWdBU2dDRUNJQ0RRQUxJQVpCQURZQ0FBd0RDeUFGS0FJRUlnSkJBM0ZCQTBjTkEwR1FDQ0FBTmdJQUlBVWdBa0YrY1RZQ0JDQURJQUJCQVhJMkFnUWdCU0FBTmdJQUR3c2dBaUFCTmdJTUlBRWdBallDQ0F3Q0MwRUFJUUVMSUFkRkRRQUNRQ0FES0FJY0lnUkJBblJCdUFwcUlnSW9BZ0FnQTBZRVFDQUNJQUUyQWdBZ0FRMEJRWXdJUVl3SUtBSUFRWDRnQkhkeE5nSUFEQUlMQWtBZ0F5QUhLQUlRUmdSQUlBY2dBVFlDRUF3QkN5QUhJQUUyQWhRTElBRkZEUUVMSUFFZ0J6WUNHQ0FES0FJUUlnSUVRQ0FCSUFJMkFoQWdBaUFCTmdJWUN5QURLQUlVSWdKRkRRQWdBU0FDTmdJVUlBSWdBVFlDR0FzZ0F5QUZUdzBBSUFVb0FnUWlCRUVCY1VVTkFBSkFBa0FDUUFKQUlBUkJBbkZGQkVCQm9BZ29BZ0FnQlVZRVFFR2dDQ0FETmdJQVFaUUlRWlFJS0FJQUlBQnFJZ0EyQWdBZ0F5QUFRUUZ5TmdJRUlBTkJuQWdvQWdCSERRWkJrQWhCQURZQ0FFR2NDRUVBTmdJQUR3dEJuQWdvQWdBaUJ5QUZSZ1JBUVp3SUlBTTJBZ0JCa0FoQmtBZ29BZ0FnQUdvaUFEWUNBQ0FESUFCQkFYSTJBZ1FnQUNBRGFpQUFOZ0lBRHdzZ0JFRjRjU0FBYWlFQUlBVW9BZ3doQVNBRVFmOEJUUVJBSUFVb0FnZ2lBaUFCUmdSQVFZZ0lRWWdJS0FJQVFYNGdCRUVEZG5keE5nSUFEQVVMSUFJZ0FUWUNEQ0FCSUFJMkFnZ01CQXNnQlNnQ0dDRUlJQUVnQlVjRVFDQUZLQUlJSWdJZ0FUWUNEQ0FCSUFJMkFnZ01Bd3NnQlNnQ0ZDSUNCSDhnQlVFVWFnVWdCU2dDRUNJQ1JRMENJQVZCRUdvTElRUURRQ0FFSVFZZ0FpSUJRUlJxSVFRZ0FTZ0NGQ0lDRFFBZ0FVRVFhaUVFSUFFb0FoQWlBZzBBQ3lBR1FRQTJBZ0FNQWdzZ0JTQUVRWDV4TmdJRUlBTWdBRUVCY2pZQ0JDQUFJQU5xSUFBMkFnQU1Bd3RCQUNFQkN5QUlSUTBBQWtBZ0JTZ0NIQ0lFUVFKMFFiZ0thaUlDS0FJQUlBVkdCRUFnQWlBQk5nSUFJQUVOQVVHTUNFR01DQ2dDQUVGK0lBUjNjVFlDQUF3Q0N3SkFJQVVnQ0NnQ0VFWUVRQ0FJSUFFMkFoQU1BUXNnQ0NBQk5nSVVDeUFCUlEwQkN5QUJJQWcyQWhnZ0JTZ0NFQ0lDQkVBZ0FTQUNOZ0lRSUFJZ0FUWUNHQXNnQlNnQ0ZDSUNSUTBBSUFFZ0FqWUNGQ0FDSUFFMkFoZ0xJQU1nQUVFQmNqWUNCQ0FBSUFOcUlBQTJBZ0FnQXlBSFJ3MEFRWkFJSUFBMkFnQVBDeUFBUWY4QlRRUkFJQUJCZUhGQnNBaHFJUUlDZjBHSUNDZ0NBQ0lFUVFFZ0FFRURkblFpQUhGRkJFQkJpQWdnQUNBRWNqWUNBQ0FDREFFTElBSW9BZ2dMSVFBZ0FpQUROZ0lJSUFBZ0F6WUNEQ0FESUFJMkFnd2dBeUFBTmdJSUR3dEJIeUVCSUFCQi8vLy9CMDBFUUNBQVFTWWdBRUVJZG1jaUFtdDJRUUZ4SUFKQkFYUnJRVDVxSVFFTElBTWdBVFlDSENBRFFnQTNBaEFnQVVFQ2RFRzRDbW9oQkFKL0FrQUNmMEdNQ0NnQ0FDSUdRUUVnQVhRaUFuRkZCRUJCakFnZ0FpQUdjallDQUNBRUlBTTJBZ0JCR0NFQlFRZ01BUXNnQUVFWklBRkJBWFpyUVFBZ0FVRWZSeHQwSVFFZ0JDZ0NBQ0VFQTBBZ0JDSUNLQUlFUVhoeElBQkdEUUlnQVVFZGRpRUVJQUZCQVhRaEFTQUNJQVJCQkhGcUlnWW9BaEFpQkEwQUN5QUdJQU0yQWhCQkdDRUJJQUloQkVFSUN5RUFJQU1pQWd3QkN5QUNLQUlJSWdRZ0F6WUNEQ0FDSUFNMkFnaEJHQ0VBUVFnaEFVRUFDeUVHSUFFZ0Eyb2dCRFlDQUNBRElBSTJBZ3dnQUNBRGFpQUdOZ0lBUWFnSVFhZ0lLQUlBUVFGcklnQkJmeUFBR3pZQ0FBc0wwU2NCQzM4akFFRVFheUlLSkFBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FDQUFRZlFCVFFSQVFZZ0lLQUlBSWdSQkVDQUFRUXRxUWZnRGNTQUFRUXRKR3lJR1FRTjJJZ0IySWdGQkEzRUVRQUpBSUFGQmYzTkJBWEVnQUdvaUFrRURkQ0lCUWJBSWFpSUFJQUZCdUFocUtBSUFJZ0VvQWdnaUJVWUVRRUdJQ0NBRVFYNGdBbmR4TmdJQURBRUxJQVVnQURZQ0RDQUFJQVUyQWdnTElBRkJDR29oQUNBQklBSkJBM1FpQWtFRGNqWUNCQ0FCSUFKcUlnRWdBU2dDQkVFQmNqWUNCQXdMQ3lBR1FaQUlLQUlBSWdoTkRRRWdBUVJBQWtCQkFpQUFkQ0lDUVFBZ0FtdHlJQUVnQUhSeGFDSUJRUU4wSWdCQnNBaHFJZ0lnQUVHNENHb29BZ0FpQUNnQ0NDSUZSZ1JBUVlnSUlBUkJmaUFCZDNFaUJEWUNBQXdCQ3lBRklBSTJBZ3dnQWlBRk5nSUlDeUFBSUFaQkEzSTJBZ1FnQUNBR2FpSUhJQUZCQTNRaUFTQUdheUlGUVFGeU5nSUVJQUFnQVdvZ0JUWUNBQ0FJQkVBZ0NFRjRjVUd3Q0dvaEFVR2NDQ2dDQUNFQ0FuOGdCRUVCSUFoQkEzWjBJZ054UlFSQVFZZ0lJQU1nQkhJMkFnQWdBUXdCQ3lBQktBSUlDeUVESUFFZ0FqWUNDQ0FESUFJMkFnd2dBaUFCTmdJTUlBSWdBellDQ0FzZ0FFRUlhaUVBUVp3SUlBYzJBZ0JCa0FnZ0JUWUNBQXdMQzBHTUNDZ0NBQ0lMUlEwQklBdG9RUUowUWJnS2FpZ0NBQ0lDS0FJRVFYaHhJQVpySVFNZ0FpRUJBMEFDUUNBQktBSVFJZ0JGQkVBZ0FTZ0NGQ0lBUlEwQkN5QUFLQUlFUVhoeElBWnJJZ0VnQXlBQklBTkpJZ0ViSVFNZ0FDQUNJQUViSVFJZ0FDRUJEQUVMQ3lBQ0tBSVlJUWtnQWlBQ0tBSU1JZ0JIQkVBZ0FpZ0NDQ0lCSUFBMkFnd2dBQ0FCTmdJSURBb0xJQUlvQWhRaUFRUi9JQUpCRkdvRklBSW9BaEFpQVVVTkF5QUNRUkJxQ3lFRkEwQWdCU0VISUFFaUFFRVVhaUVGSUFBb0FoUWlBUTBBSUFCQkVHb2hCU0FBS0FJUUlnRU5BQXNnQjBFQU5nSUFEQWtMUVg4aEJpQUFRYjkvU3cwQUlBQkJDMm9pQVVGNGNTRUdRWXdJS0FJQUlnZEZEUUJCSHlFSVFRQWdCbXNoQXlBQVFmVC8vd2ROQkVBZ0JrRW1JQUZCQ0habklnQnJka0VCY1NBQVFRRjBhMEUrYWlFSUN3SkFBa0FDUUNBSVFRSjBRYmdLYWlnQ0FDSUJSUVJBUVFBaEFBd0JDMEVBSVFBZ0JrRVpJQWhCQVhaclFRQWdDRUVmUnh0MElRSURRQUpBSUFFb0FnUkJlSEVnQm1zaUJDQURUdzBBSUFFaEJTQUVJZ01OQUVFQUlRTWdBU0VBREFNTElBQWdBU2dDRkNJRUlBUWdBU0FDUVIxMlFRUnhhaWdDRUNJQlJoc2dBQ0FFR3lFQUlBSkJBWFFoQWlBQkRRQUxDeUFBSUFWeVJRUkFRUUFoQlVFQ0lBaDBJZ0JCQUNBQWEzSWdCM0VpQUVVTkF5QUFhRUVDZEVHNENtb29BZ0FoQUFzZ0FFVU5BUXNEUUNBQUtBSUVRWGh4SUFacklnSWdBMGtoQVNBQ0lBTWdBUnNoQXlBQUlBVWdBUnNoQlNBQUtBSVFJZ0VFZnlBQkJTQUFLQUlVQ3lJQURRQUxDeUFGUlEwQUlBTkJrQWdvQWdBZ0JtdFBEUUFnQlNnQ0dDRUlJQVVnQlNnQ0RDSUFSd1JBSUFVb0FnZ2lBU0FBTmdJTUlBQWdBVFlDQ0F3SUN5QUZLQUlVSWdFRWZ5QUZRUlJxQlNBRktBSVFJZ0ZGRFFNZ0JVRVFhZ3NoQWdOQUlBSWhCQ0FCSWdCQkZHb2hBaUFBS0FJVUlnRU5BQ0FBUVJCcUlRSWdBQ2dDRUNJQkRRQUxJQVJCQURZQ0FBd0hDeUFHUVpBSUtBSUFJZ1ZOQkVCQm5BZ29BZ0FoQUFKQUlBVWdCbXNpQVVFUVR3UkFJQUFnQm1vaUFpQUJRUUZ5TmdJRUlBQWdCV29nQVRZQ0FDQUFJQVpCQTNJMkFnUU1BUXNnQUNBRlFRTnlOZ0lFSUFBZ0JXb2lBU0FCS0FJRVFRRnlOZ0lFUVFBaEFrRUFJUUVMUVpBSUlBRTJBZ0JCbkFnZ0FqWUNBQ0FBUVFocUlRQU1DUXNnQmtHVUNDZ0NBQ0lDU1FSQVFaUUlJQUlnQm1zaUFUWUNBRUdnQ0VHZ0NDZ0NBQ0lBSUFacUlnSTJBZ0FnQWlBQlFRRnlOZ0lFSUFBZ0JrRURjallDQkNBQVFRaHFJUUFNQ1F0QkFDRUFJQVpCTDJvaUF3Si9RZUFMS0FJQUJFQkI2QXNvQWdBTUFRdEI3QXRDZnpjQ0FFSGtDMEtBb0lDQWdJQUVOd0lBUWVBTElBcEJER3BCY0hGQjJLclZxZ1Z6TmdJQVFmUUxRUUEyQWdCQnhBdEJBRFlDQUVHQUlBc2lBV29pQkVFQUlBRnJJZ2R4SWdFZ0JrME5DRUhBQ3lnQ0FDSUZCRUJCdUFzb0FnQWlDQ0FCYWlJSklBaE5JQVVnQ1VseURRa0xBa0JCeEFzdEFBQkJCSEZGQkVBQ1FBSkFBa0FDUUVHZ0NDZ0NBQ0lGQkVCQnlBc2hBQU5BSUFBb0FnQWlDQ0FGVFFSQUlBVWdDQ0FBS0FJRWFra05Bd3NnQUNnQ0NDSUFEUUFMQzBFQUVBRWlBa0YvUmcwRElBRWhCRUhrQ3lnQ0FDSUFRUUZySWdVZ0FuRUVRQ0FCSUFKcklBSWdCV3BCQUNBQWEzRnFJUVFMSUFRZ0JrME5BMEhBQ3lnQ0FDSUFCRUJCdUFzb0FnQWlCU0FFYWlJSElBVk5JQUFnQjBseURRUUxJQVFRQVNJQUlBSkhEUUVNQlFzZ0JDQUNheUFIY1NJRUVBRWlBaUFBS0FJQUlBQW9BZ1JxUmcwQklBSWhBQXNnQUVGL1JnMEJJQVpCTUdvZ0JFMEVRQ0FBSVFJTUJBdEI2QXNvQWdBaUFpQURJQVJyYWtFQUlBSnJjU0lDRUFGQmYwWU5BU0FDSUFScUlRUWdBQ0VDREFNTElBSkJmMGNOQWd0QnhBdEJ4QXNvQWdCQkJISTJBZ0FMSUFFUUFTSUNRWDlHUVFBUUFTSUFRWDlHY2lBQUlBSk5jZzBGSUFBZ0Ftc2lCQ0FHUVNocVRRMEZDMEc0QzBHNEN5Z0NBQ0FFYWlJQU5nSUFRYndMS0FJQUlBQkpCRUJCdkFzZ0FEWUNBQXNDUUVHZ0NDZ0NBQ0lEQkVCQnlBc2hBQU5BSUFJZ0FDZ0NBQ0lCSUFBb0FnUWlCV3BHRFFJZ0FDZ0NDQ0lBRFFBTERBUUxRWmdJS0FJQUlnQkJBQ0FBSUFKTkcwVUVRRUdZQ0NBQ05nSUFDMEVBSVFCQnpBc2dCRFlDQUVISUN5QUNOZ0lBUWFnSVFYODJBZ0JCckFoQjRBc29BZ0EyQWdCQjFBdEJBRFlDQUFOQUlBQkJBM1FpQVVHNENHb2dBVUd3Q0dvaUJUWUNBQ0FCUWJ3SWFpQUZOZ0lBSUFCQkFXb2lBRUVnUncwQUMwR1VDQ0FFUVNocklnQkJlQ0FDYTBFSGNTSUJheUlGTmdJQVFhQUlJQUVnQW1vaUFUWUNBQ0FCSUFWQkFYSTJBZ1FnQUNBQ2FrRW9OZ0lFUWFRSVFmQUxLQUlBTmdJQURBUUxJQUlnQTAwZ0FTQURTM0lOQWlBQUtBSU1RUWh4RFFJZ0FDQUVJQVZxTmdJRVFhQUlJQU5CZUNBRGEwRUhjU0lBYWlJQk5nSUFRWlFJUVpRSUtBSUFJQVJxSWdJZ0FHc2lBRFlDQUNBQklBQkJBWEkyQWdRZ0FpQURha0VvTmdJRVFhUUlRZkFMS0FJQU5nSUFEQU1MUVFBaEFBd0dDMEVBSVFBTUJBdEJtQWdvQWdBZ0Frc0VRRUdZQ0NBQ05nSUFDeUFDSUFScUlRVkJ5QXNoQUFKQUEwQWdCU0FBS0FJQUlnRkhCRUFnQUNnQ0NDSUFEUUVNQWdzTElBQXRBQXhCQ0hGRkRRTUxRY2dMSVFBRFFBSkFJQUFvQWdBaUFTQURUUVJBSUFNZ0FTQUFLQUlFYWlJRlNRMEJDeUFBS0FJSUlRQU1BUXNMUVpRSUlBUkJLR3NpQUVGNElBSnJRUWR4SWdGcklnYzJBZ0JCb0FnZ0FTQUNhaUlCTmdJQUlBRWdCMEVCY2pZQ0JDQUFJQUpxUVNnMkFnUkJwQWhCOEFzb0FnQTJBZ0FnQXlBRlFTY2dCV3RCQjNGcVFTOXJJZ0FnQUNBRFFSQnFTUnNpQVVFYk5nSUVJQUZCMEFzcEFnQTNBaEFnQVVISUN5a0NBRGNDQ0VIUUN5QUJRUWhxTmdJQVFjd0xJQVEyQWdCQnlBc2dBallDQUVIVUMwRUFOZ0lBSUFGQkdHb2hBQU5BSUFCQkJ6WUNCQ0FBUVFocUlBQkJCR29oQUNBRlNRMEFDeUFCSUFOR0RRQWdBU0FCS0FJRVFYNXhOZ0lFSUFNZ0FTQURheUlDUVFGeU5nSUVJQUVnQWpZQ0FBSi9JQUpCL3dGTkJFQWdBa0Y0Y1VHd0NHb2hBQUovUVlnSUtBSUFJZ0ZCQVNBQ1FRTjJkQ0lDY1VVRVFFR0lDQ0FCSUFKeU5nSUFJQUFNQVFzZ0FDZ0NDQXNoQVNBQUlBTTJBZ2dnQVNBRE5nSU1RUXdoQWtFSURBRUxRUjhoQUNBQ1FmLy8vd2ROQkVBZ0FrRW1JQUpCQ0habklnQnJka0VCY1NBQVFRRjBhMEUrYWlFQUN5QURJQUEyQWh3Z0EwSUFOd0lRSUFCQkFuUkJ1QXBxSVFFQ1FBSkFRWXdJS0FJQUlnVkJBU0FBZENJRWNVVUVRRUdNQ0NBRUlBVnlOZ0lBSUFFZ0F6WUNBQXdCQ3lBQ1FSa2dBRUVCZG10QkFDQUFRUjlIRzNRaEFDQUJLQUlBSVFVRFFDQUZJZ0VvQWdSQmVIRWdBa1lOQWlBQVFSMTJJUVVnQUVFQmRDRUFJQUVnQlVFRWNXb2lCQ2dDRUNJRkRRQUxJQVFnQXpZQ0VBc2dBeUFCTmdJWVFRZ2hBaUFESWdFaEFFRU1EQUVMSUFFb0FnZ2lBQ0FETmdJTUlBRWdBellDQ0NBRElBQTJBZ2hCQUNFQVFSZ2hBa0VNQ3lBRGFpQUJOZ0lBSUFJZ0Eyb2dBRFlDQUF0QmxBZ29BZ0FpQUNBR1RRMEFRWlFJSUFBZ0Jtc2lBVFlDQUVHZ0NFR2dDQ2dDQUNJQUlBWnFJZ0kyQWdBZ0FpQUJRUUZ5TmdJRUlBQWdCa0VEY2pZQ0JDQUFRUWhxSVFBTUJBdEJoQWhCTURZQ0FFRUFJUUFNQXdzZ0FDQUNOZ0lBSUFBZ0FDZ0NCQ0FFYWpZQ0JDQUNRWGdnQW10QkIzRnFJZ2dnQmtFRGNqWUNCQ0FCUVhnZ0FXdEJCM0ZxSWdRZ0JpQUlhaUlEYXlFSEFrQkJvQWdvQWdBZ0JFWUVRRUdnQ0NBRE5nSUFRWlFJUVpRSUtBSUFJQWRxSWdBMkFnQWdBeUFBUVFGeU5nSUVEQUVMUVp3SUtBSUFJQVJHQkVCQm5BZ2dBellDQUVHUUNFR1FDQ2dDQUNBSGFpSUFOZ0lBSUFNZ0FFRUJjallDQkNBQUlBTnFJQUEyQWdBTUFRc2dCQ2dDQkNJQVFRTnhRUUZHQkVBZ0FFRjRjU0VKSUFRb0Fnd2hBZ0pBSUFCQi93Rk5CRUFnQkNnQ0NDSUJJQUpHQkVCQmlBaEJpQWdvQWdCQmZpQUFRUU4yZDNFMkFnQU1BZ3NnQVNBQ05nSU1JQUlnQVRZQ0NBd0JDeUFFS0FJWUlRWUNRQ0FDSUFSSEJFQWdCQ2dDQ0NJQUlBSTJBZ3dnQWlBQU5nSUlEQUVMQWtBZ0JDZ0NGQ0lBQkg4Z0JFRVVhZ1VnQkNnQ0VDSUFSUTBCSUFSQkVHb0xJUUVEUUNBQklRVWdBQ0lDUVJScUlRRWdBQ2dDRkNJQURRQWdBa0VRYWlFQklBSW9BaEFpQUEwQUN5QUZRUUEyQWdBTUFRdEJBQ0VDQ3lBR1JRMEFBa0FnQkNnQ0hDSUFRUUowUWJnS2FpSUJLQUlBSUFSR0JFQWdBU0FDTmdJQUlBSU5BVUdNQ0VHTUNDZ0NBRUYrSUFCM2NUWUNBQXdDQ3dKQUlBUWdCaWdDRUVZRVFDQUdJQUkyQWhBTUFRc2dCaUFDTmdJVUN5QUNSUTBCQ3lBQ0lBWTJBaGdnQkNnQ0VDSUFCRUFnQWlBQU5nSVFJQUFnQWpZQ0dBc2dCQ2dDRkNJQVJRMEFJQUlnQURZQ0ZDQUFJQUkyQWhnTElBY2dDV29oQnlBRUlBbHFJZ1FvQWdRaEFBc2dCQ0FBUVg1eE5nSUVJQU1nQjBFQmNqWUNCQ0FESUFkcUlBYzJBZ0FnQjBIL0FVMEVRQ0FIUVhoeFFiQUlhaUVBQW45QmlBZ29BZ0FpQVVFQklBZEJBM1owSWdKeFJRUkFRWWdJSUFFZ0FuSTJBZ0FnQUF3QkN5QUFLQUlJQ3lFQklBQWdBellDQ0NBQklBTTJBZ3dnQXlBQU5nSU1JQU1nQVRZQ0NBd0JDMEVmSVFJZ0IwSC8vLzhIVFFSQUlBZEJKaUFIUVFoMlp5SUFhM1pCQVhFZ0FFRUJkR3RCUG1vaEFnc2dBeUFDTmdJY0lBTkNBRGNDRUNBQ1FRSjBRYmdLYWlFQUFrQUNRRUdNQ0NnQ0FDSUJRUUVnQW5RaUJYRkZCRUJCakFnZ0FTQUZjallDQUNBQUlBTTJBZ0FNQVFzZ0IwRVpJQUpCQVhaclFRQWdBa0VmUnh0MElRSWdBQ2dDQUNFQkEwQWdBU0lBS0FJRVFYaHhJQWRHRFFJZ0FrRWRkaUVCSUFKQkFYUWhBaUFBSUFGQkJIRnFJZ1VvQWhBaUFRMEFDeUFGSUFNMkFoQUxJQU1nQURZQ0dDQURJQU0yQWd3Z0F5QUROZ0lJREFFTElBQW9BZ2dpQVNBRE5nSU1JQUFnQXpZQ0NDQURRUUEyQWhnZ0F5QUFOZ0lNSUFNZ0FUWUNDQXNnQ0VFSWFpRUFEQUlMQWtBZ0NFVU5BQUpBSUFVb0Fod2lBVUVDZEVHNENtb2lBaWdDQUNBRlJnUkFJQUlnQURZQ0FDQUFEUUZCakFnZ0IwRitJQUYzY1NJSE5nSUFEQUlMQWtBZ0JTQUlLQUlRUmdSQUlBZ2dBRFlDRUF3QkN5QUlJQUEyQWhRTElBQkZEUUVMSUFBZ0NEWUNHQ0FGS0FJUUlnRUVRQ0FBSUFFMkFoQWdBU0FBTmdJWUN5QUZLQUlVSWdGRkRRQWdBQ0FCTmdJVUlBRWdBRFlDR0FzQ1FDQURRUTlOQkVBZ0JTQURJQVpxSWdCQkEzSTJBZ1FnQUNBRmFpSUFJQUFvQWdSQkFYSTJBZ1FNQVFzZ0JTQUdRUU55TmdJRUlBVWdCbW9pQkNBRFFRRnlOZ0lFSUFNZ0JHb2dBellDQUNBRFFmOEJUUVJBSUFOQmVIRkJzQWhxSVFBQ2YwR0lDQ2dDQUNJQlFRRWdBMEVEZG5RaUFuRkZCRUJCaUFnZ0FTQUNjallDQUNBQURBRUxJQUFvQWdnTElRRWdBQ0FFTmdJSUlBRWdCRFlDRENBRUlBQTJBZ3dnQkNBQk5nSUlEQUVMUVI4aEFDQURRZi8vL3dkTkJFQWdBMEVtSUFOQkNIWm5JZ0JyZGtFQmNTQUFRUUYwYTBFK2FpRUFDeUFFSUFBMkFod2dCRUlBTndJUUlBQkJBblJCdUFwcUlRRUNRQUpBSUFkQkFTQUFkQ0lDY1VVRVFFR01DQ0FDSUFkeU5nSUFJQUVnQkRZQ0FDQUVJQUUyQWhnTUFRc2dBMEVaSUFCQkFYWnJRUUFnQUVFZlJ4dDBJUUFnQVNnQ0FDRUJBMEFnQVNJQ0tBSUVRWGh4SUFOR0RRSWdBRUVkZGlFQklBQkJBWFFoQUNBQ0lBRkJCSEZxSWdjb0FoQWlBUTBBQ3lBSElBUTJBaEFnQkNBQ05nSVlDeUFFSUFRMkFnd2dCQ0FFTmdJSURBRUxJQUlvQWdnaUFDQUVOZ0lNSUFJZ0JEWUNDQ0FFUVFBMkFoZ2dCQ0FDTmdJTUlBUWdBRFlDQ0FzZ0JVRUlhaUVBREFFTEFrQWdDVVVOQUFKQUlBSW9BaHdpQVVFQ2RFRzRDbW9pQlNnQ0FDQUNSZ1JBSUFVZ0FEWUNBQ0FBRFFGQmpBZ2dDMEYrSUFGM2NUWUNBQXdDQ3dKQUlBSWdDU2dDRUVZRVFDQUpJQUEyQWhBTUFRc2dDU0FBTmdJVUN5QUFSUTBCQ3lBQUlBazJBaGdnQWlnQ0VDSUJCRUFnQUNBQk5nSVFJQUVnQURZQ0dBc2dBaWdDRkNJQlJRMEFJQUFnQVRZQ0ZDQUJJQUEyQWhnTEFrQWdBMEVQVFFSQUlBSWdBeUFHYWlJQVFRTnlOZ0lFSUFBZ0Ftb2lBQ0FBS0FJRVFRRnlOZ0lFREFFTElBSWdCa0VEY2pZQ0JDQUNJQVpxSWdVZ0EwRUJjallDQkNBRElBVnFJQU0yQWdBZ0NBUkFJQWhCZUhGQnNBaHFJUUJCbkFnb0FnQWhBUUovUVFFZ0NFRURkblFpQnlBRWNVVUVRRUdJQ0NBRUlBZHlOZ0lBSUFBTUFRc2dBQ2dDQ0FzaEJDQUFJQUUyQWdnZ0JDQUJOZ0lNSUFFZ0FEWUNEQ0FCSUFRMkFnZ0xRWndJSUFVMkFnQkJrQWdnQXpZQ0FBc2dBa0VJYWlFQUN5QUtRUkJxSkFBZ0FBdkdCQUlHZndwOVFmLy8vLzhISVF4QmdJQ0FnSGdoRFVGL0lRa0RRQ0FESUFwR0JFQkJBQ0VBSUFoQkFFR0FnQkQ4Q3dCREFQOS9SeUFOSUF4cnNwVWhEd1VnQkNBS1FReHNhaUlMS2dJQUlSTWdDeW9DQ0NFVUlBc3FBZ1FoRlNBSklBSWdDa0VDZENJT2FpZ0NBQ0lMUndSQUlBRWdDMEhRQUd4cUlna3FBandnQUNvQ09DSVBsQ0FKS2dJNElBQXFBaWdpRUpRZ0NTb0NNQ0FBS2dJSUloR1VJQUFxQWhnaUVpQUpLZ0kwbEpLU2tpRVdJQWtxQWl3Z0Q1UWdDU29DS0NBUWxDQUpLZ0lnSUJHVUlCSWdDU29DSkpTU2twSWhGeUFKS2dJY0lBK1VJQWtxQWhnZ0VKUWdDU29DRUNBUmxDQVNJQWtxQWhTVWtwS1NJUmdnQ1NvQ0RDQVBsQ0FKS2dJSUlCQ1VJQWtxQWdBZ0VaUWdDU29DQkNBU2xKS1NraUVQSUFzaENRc2dCU0FPYWlBV0lCY2dGSlFnRHlBVGxDQVZJQmlVa3BLU1F3QUFnRVdVL0FBaUN6WUNBQ0FNSUFzZ0N5QU1TaHNoRENBTklBc2dDeUFOU0JzaERTQUtRUUZxSVFvTUFRc0xBMEFnQUNBRFJrVUVRQ0FGSUFCQkFuUnFJZ0VnRHlBQktBSUFJQXhyczVUOEFTSUJOZ0lBSUFnZ0FVRUNkR29pQVNBQktBSUFRUUZxTmdJQUlBQkJBV29oQUF3QkN3dEJBQ0VBSUFkQkFEWUNBQ0FJUVFScklRRkJBQ0VNUVFFaENnTkFJQXBCZ0lBRVJnUkFBMEFDUUNBQUlBTkdEUUFnQnlBRklBQkJBblJxS0FJQVFRSjBhaUlCSUFFb0FnQWlBVUVCYWpZQ0FDQUdJQUZCQW5ScUlBQTJBZ0FnQUVFQmFpRUFEQUVMQ3dVZ0J5QUtRUUowSWdKcUlBRWdBbW9vQWdBZ0RHb2lERFlDQUNBS1FRRnFJUW9NQVFzTEN3SUFDd3NKQVFCQmdRZ0xBZ1lCIik7CiAgfQogIGZ1bmN0aW9uIE8oQSkgewogICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhBKSkKICAgICAgcmV0dXJuIEE7CiAgICBpZiAoQSA9PSBTICYmIE0pCiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShNKTsKICAgIGlmIChVKQogICAgICByZXR1cm4gVShBKTsKICAgIHRocm93ICdzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZDogeW91IGNhbiBwcmVsb2FkIGl0IHRvIE1vZHVsZVsid2FzbUJpbmFyeSJdIG1hbnVhbGx5LCBvciBlbWNjLnB5IHdpbGwgZG8gdGhhdCBmb3IgeW91IHdoZW4gZ2VuZXJhdGluZyBIVE1MIChidXQgbm90IEpTKSc7CiAgfQogIGZ1bmN0aW9uICQoQSwgQikgewogICAgdmFyIHQsIEUgPSBPKEEpOwogICAgdCA9IG5ldyBXZWJBc3NlbWJseS5Nb2R1bGUoRSk7CiAgICB2YXIgaSA9IG5ldyBXZWJBc3NlbWJseS5JbnN0YW5jZSh0LCBCKTsKICAgIHJldHVybiBbaSwgdF07CiAgfQogIGZ1bmN0aW9uIEFBKCkgewogICAgcmV0dXJuIHsgYTogbkEgfTsKICB9CiAgZnVuY3Rpb24gSUEoKSB7CiAgICBmdW5jdGlvbiBBKEUsIGkpIHsKICAgICAgcmV0dXJuIHkgPSBFLmV4cG9ydHMsIHUgPSB5LmIsIHEoKSwgckEoeSksIHooKSwgeTsKICAgIH0KICAgIF8oKTsKICAgIHZhciBCID0gQUEoKTsKICAgIGlmIChJLmluc3RhbnRpYXRlV2FzbSkKICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChFLCBpKSA9PiB7CiAgICAgICAgSS5pbnN0YW50aWF0ZVdhc20oQiwgKG8sIGgpID0+IHsKICAgICAgICAgIEUoQShvKSk7CiAgICAgICAgfSk7CiAgICAgIH0pOwogICAgUyA/Pz0gVigpOwogICAgdmFyIHQgPSAkKFMsIEIpOwogICAgcmV0dXJuIEEodFswXSk7CiAgfQogIGZvciAodmFyIHggPSAoQSkgPT4gewogICAgZm9yICg7IEEubGVuZ3RoID4gMDsgKQogICAgICBBLnNoaWZ0KCkoSSk7CiAgfSwgdiA9IFtdLCBnQSA9IChBKSA9PiB2LnB1c2goQSksIFQgPSBbXSwgQ0EgPSAoQSkgPT4gVC5wdXNoKEEpLCBCQSA9IChBKSA9PiB7CiAgICBmb3IgKHZhciBCLCB0LCBFID0gMCwgaSA9IDAsIG8gPSBBLmxlbmd0aCwgaCA9IG5ldyBVaW50OEFycmF5KChvICogMyA+PiAyKSAtIChBW28gLSAyXSA9PSAiPSIpIC0gKEFbbyAtIDFdID09ICI9IikpOyBFIDwgbzsgRSArPSA0LCBpICs9IDMpCiAgICAgIEIgPSBuW0EuY2hhckNvZGVBdChFICsgMSldLCB0ID0gbltBLmNoYXJDb2RlQXQoRSArIDIpXSwgaFtpXSA9IG5bQS5jaGFyQ29kZUF0KEUpXSA8PCAyIHwgQiA+PiA0LCBoW2kgKyAxXSA9IEIgPDwgNCB8IHQgPj4gMiwgaFtpICsgMl0gPSB0IDw8IDYgfCBuW0EuY2hhckNvZGVBdChFICsgMyldOwogICAgcmV0dXJuIGg7CiAgfSwgUUEgPSAoKSA9PiAyMTQ3NDgzNjQ4LCBFQSA9IChBLCBCKSA9PiBNYXRoLmNlaWwoQSAvIEIpICogQiwgdEEgPSAoQSkgPT4gewogICAgdmFyIEIgPSB1LmJ1ZmZlciwgdCA9IChBIC0gQi5ieXRlTGVuZ3RoICsgNjU1MzUpIC8gNjU1MzYgfCAwOwogICAgdHJ5IHsKICAgICAgcmV0dXJuIHUuZ3Jvdyh0KSwgcSgpLCAxOwogICAgfSBjYXRjaCB7CiAgICB9CiAgfSwgaUEgPSAoQSkgPT4gewogICAgdmFyIEIgPSBMLmxlbmd0aDsKICAgIEEgPj4+PSAwOwogICAgdmFyIHQgPSBRQSgpOwogICAgaWYgKEEgPiB0KQogICAgICByZXR1cm4gITE7CiAgICBmb3IgKHZhciBFID0gMTsgRSA8PSA0OyBFICo9IDIpIHsKICAgICAgdmFyIGkgPSBCICogKDEgKyAwLjIgLyBFKTsKICAgICAgaSA9IE1hdGgubWluKGksIEEgKyAxMDA2NjMyOTYpOwogICAgICB2YXIgbyA9IE1hdGgubWluKHQsIEVBKE1hdGgubWF4KEEsIGkpLCA2NTUzNikpLCBoID0gdEEobyk7CiAgICAgIGlmIChoKQogICAgICAgIHJldHVybiAhMDsKICAgIH0KICAgIHJldHVybiAhMTsKICB9LCBuID0gbmV3IFVpbnQ4QXJyYXkoMTIzKSwgZSA9IDI1OyBlID49IDA7IC0tZSkKICAgIG5bNDggKyBlXSA9IDUyICsgZSwgbls2NSArIGVdID0gZSwgbls5NyArIGVdID0gMjYgKyBlOwogIG5bNDNdID0gNjIsIG5bNDddID0gNjMsIEkubm9FeGl0UnVudGltZSAmJiBJLm5vRXhpdFJ1bnRpbWUsIEkucHJpbnQgJiYgSS5wcmludCwgSS5wcmludEVyciAmJiBJLnByaW50RXJyLCBJLndhc21CaW5hcnkgJiYgKE0gPSBJLndhc21CaW5hcnkpLCBJLmFyZ3VtZW50cyAmJiBJLmFyZ3VtZW50cywgSS50aGlzUHJvZ3JhbSAmJiBJLnRoaXNQcm9ncmFtOwogIGZ1bmN0aW9uIHJBKEEpIHsKICAgIEkuX3NvcnQgPSBBLmQsIEkuX21hbGxvYyA9IEEuZSwgSS5fZnJlZSA9IEEuZjsKICB9CiAgdmFyIG5BID0geyBhOiBpQSB9LCB5ID0gSUEoKTsKICBmdW5jdGlvbiBtKCkgewogICAgaWYgKHMgPiAwKSB7CiAgICAgIGYgPSBtOwogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoUCgpLCBzID4gMCkgewogICAgICBmID0gbTsKICAgICAgcmV0dXJuOwogICAgfQogICAgZnVuY3Rpb24gQSgpIHsKICAgICAgSS5jYWxsZWRSdW4gPSAhMCwgYigpLCBJLm9uUnVudGltZUluaXRpYWxpemVkPy4oKSwgVygpOwogICAgfQogICAgSS5zZXRTdGF0dXMgPyAoSS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gSS5zZXRTdGF0dXMoIiIpLCAxKSwgQSgpOwogICAgfSwgMSkpIDogQSgpOwogIH0KICBmdW5jdGlvbiBhQSgpIHsKICAgIGlmIChJLnByZUluaXQpCiAgICAgIGZvciAodHlwZW9mIEkucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChJLnByZUluaXQgPSBbSS5wcmVJbml0XSk7IEkucHJlSW5pdC5sZW5ndGggPiAwOyApCiAgICAgICAgSS5wcmVJbml0LnNoaWZ0KCkoKTsKICB9CiAgcmV0dXJuIGFBKCksIG0oKSwgciA9IEksIHI7Cn07CmxldCBnLCBRLCBkLCBjLCBOLCB3LCBwLCBSLCBrLCBKLCBhID0gMCwgWSA9IDAsIEggPSBbXSwgRyA9ICEwLCBEID0gITEsIEYgPSAhMSwgSyA9ICExOwphc3luYyBmdW5jdGlvbiBvQSgpIHsKICBpZiAoIWcgJiYgKGcgPSBhd2FpdCBlQSgpLCAhZyB8fCAhZy5IRUFQRjMyIHx8ICFnLl9zb3J0KSkKICAgIHRocm93IG5ldyBFcnJvcigiV0FTTSBtb2R1bGUgZmFpbGVkIHRvIGluaXRpYWxpemUgcHJvcGVybHkiKTsKfQpjb25zdCBaID0gYXN5bmMgKCkgPT4gewogIGlmIChEKSB7CiAgICBGID0gITA7CiAgICByZXR1cm47CiAgfQogIEQgPSAhMCwgRiA9ICExLCBnIHx8IGF3YWl0IG9BKCk7CiAgY29uc3QgQyA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIoUS52ZXJ0ZXhDb3VudCkpKTsKICBhIDwgQyAmJiAoYSA+IDAgJiYgKGcuX2ZyZWUoZCksIGcuX2ZyZWUoTiksIGcuX2ZyZWUodyksIGcuX2ZyZWUocCksIGcuX2ZyZWUoUiksIGcuX2ZyZWUoayksIGcuX2ZyZWUoSikpLCBhID0gQywgZCA9IGcuX21hbGxvYygxNiAqIDQpLCBOID0gZy5fbWFsbG9jKGEgKiA0KSwgdyA9IGcuX21hbGxvYygzICogYSAqIDQpLCBwID0gZy5fbWFsbG9jKGEgKiA0KSwgUiA9IGcuX21hbGxvYyhhICogNCksIGsgPSBnLl9tYWxsb2MoYSAqIDQpLCBKID0gZy5fbWFsbG9jKGEgKiA0KSksIFkgPCBRLnRyYW5zZm9ybXMubGVuZ3RoICYmIChZID4gMCAmJiBnLl9mcmVlKGMpLCBZID0gUS50cmFuc2Zvcm1zLmxlbmd0aCwgYyA9IGcuX21hbGxvYyhZICogNCkpLCBEID0gITEsIEYgJiYgKEYgPSAhMSwgYXdhaXQgWigpKTsKfSwgc0EgPSAoKSA9PiB7CiAgaWYgKCEoRCB8fCBGIHx8ICFnIHx8ICFRKSkgewogICAgRCA9ICEwOwogICAgdHJ5IHsKICAgICAgY29uc3QgQyA9IGcuSEVBUEYzMiwgciA9IGcuSEVBUFUzMjsKICAgICAgaWYgKHcgLyA0ICsgUS5wb3NpdGlvbnMubGVuZ3RoID4gQy5sZW5ndGgpCiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJQb3NpdGlvbnMgYnVmZmVyIG92ZXJmbG93Iik7CiAgICAgIGlmIChjIC8gNCArIFEudHJhbnNmb3Jtcy5sZW5ndGggPiBDLmxlbmd0aCkKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIlRyYW5zZm9ybXMgYnVmZmVyIG92ZXJmbG93Iik7CiAgICAgIGlmIChOIC8gNCArIFEudHJhbnNmb3JtSW5kaWNlcy5sZW5ndGggPiByLmxlbmd0aCkKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIlRyYW5zZm9ybSBpbmRpY2VzIGJ1ZmZlciBvdmVyZmxvdyIpOwogICAgICBpZiAoQy5zZXQoUS5wb3NpdGlvbnMsIHcgLyA0KSwgQy5zZXQoUS50cmFuc2Zvcm1zLCBjIC8gNCksIHIuc2V0KFEudHJhbnNmb3JtSW5kaWNlcywgTiAvIDQpLCBDLnNldChuZXcgRmxvYXQzMkFycmF5KEgpLCBkIC8gNCksIGcuX3NvcnQoCiAgICAgICAgZCwKICAgICAgICBjLAogICAgICAgIE4sCiAgICAgICAgUS52ZXJ0ZXhDb3VudCwKICAgICAgICB3LAogICAgICAgIHAsCiAgICAgICAgUiwKICAgICAgICBrLAogICAgICAgIEoKICAgICAgKSwgUiArIFEudmVydGV4Q291bnQgKiA0ID4gci5idWZmZXIuYnl0ZUxlbmd0aCkKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkRlcHRoIGluZGV4IGJ1ZmZlciBvdmVyZmxvdyIpOwogICAgICBjb25zdCBJID0gbmV3IFVpbnQzMkFycmF5KHIuYnVmZmVyLCBSLCBRLnZlcnRleENvdW50KSwgbCA9IG5ldyBVaW50MzJBcnJheShJLnNsaWNlKCkuYnVmZmVyKTsKICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGRlcHRoSW5kZXg6IGwgfSwgW2wuYnVmZmVyXSk7CiAgICB9IGNhdGNoIHsKICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGRlcHRoSW5kZXg6IG5ldyBVaW50MzJBcnJheSgwKSB9LCBbXSk7CiAgICB9CiAgICBEID0gITEsIEcgPSAhMTsKICB9Cn0sIFggPSAoKSA9PiB7CiAgSyB8fCAoSyA9ICEwLCBHICYmIHNBKCksIHNldFRpbWVvdXQoKCkgPT4gewogICAgSyA9ICExLCBYKCk7CiAgfSkpOwp9OwpzZWxmLm9ubWVzc2FnZSA9IChDKSA9PiB7CiAgQy5kYXRhLnNvcnREYXRhICYmIChRID8gKFEucG9zaXRpb25zLnNldChDLmRhdGEuc29ydERhdGEucG9zaXRpb25zKSwgUS50cmFuc2Zvcm1zLnNldChDLmRhdGEuc29ydERhdGEudHJhbnNmb3JtcyksIFEudHJhbnNmb3JtSW5kaWNlcy5zZXQoQy5kYXRhLnNvcnREYXRhLnRyYW5zZm9ybUluZGljZXMpLCBRLnZlcnRleENvdW50ID0gQy5kYXRhLnNvcnREYXRhLnZlcnRleENvdW50KSA6IFEgPSB7CiAgICBwb3NpdGlvbnM6IG5ldyBGbG9hdDMyQXJyYXkoQy5kYXRhLnNvcnREYXRhLnBvc2l0aW9ucyksCiAgICB0cmFuc2Zvcm1zOiBuZXcgRmxvYXQzMkFycmF5KEMuZGF0YS5zb3J0RGF0YS50cmFuc2Zvcm1zKSwKICAgIHRyYW5zZm9ybUluZGljZXM6IG5ldyBVaW50MzJBcnJheShDLmRhdGEuc29ydERhdGEudHJhbnNmb3JtSW5kaWNlcyksCiAgICB2ZXJ0ZXhDb3VudDogQy5kYXRhLnNvcnREYXRhLnZlcnRleENvdW50CiAgfSwgRyA9ICEwLCBaKCkpLCBDLmRhdGEudmlld1Byb2ogJiYgKEMuZGF0YS52aWV3UHJvai5ldmVyeSgocikgPT4gSC5pbmNsdWRlcyhyKSkgPT09ICExICYmIChIID0gQy5kYXRhLnZpZXdQcm9qLCBHID0gITApLCBYKCkpOwp9OwovLyMgc291cmNlTWFwcGluZ1VSTD1Tb3J0V29ya2VyLURRTDdVVEVoLmpzLm1hcAo=",y_=r=>Uint8Array.from(atob(r),e=>e.charCodeAt(0)),nu=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",y_(ru)],{type:"text/javascript;charset=utf-8"});function E_(r){let e;try{if(e=nu&&(self.URL||self.webkitURL).createObjectURL(nu),!e)throw"";const t=new Worker(e,{type:"module",name:r==null?void 0:r.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+ru,{type:"module",name:r==null?void 0:r.name})}}class il{constructor(e,t){this._scene=null,this._camera=null,this._started=!1,this._initialized=!1,this._renderer=e;const i=e.gl;this._program=i.createProgram(),this._passes=t||[];const n=i.createShader(i.VERTEX_SHADER);i.shaderSource(n,this._getVertexSource()),i.compileShader(n),i.getShaderParameter(n,i.COMPILE_STATUS)||console.error(i.getShaderInfoLog(n));const a=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(a,this._getFragmentSource()),i.compileShader(a),i.getShaderParameter(a,i.COMPILE_STATUS)||console.error(i.getShaderInfoLog(a)),i.attachShader(this.program,n),i.attachShader(this.program,a),i.linkProgram(this.program),i.getProgramParameter(this.program,i.LINK_STATUS)||console.error(i.getProgramInfoLog(this.program)),this.resize=()=>{i.useProgram(this._program),this._resize()},this.initialize=()=>{console.assert(!this._initialized,"ShaderProgram already initialized"),i.useProgram(this._program),this._initialize();for(const o of this.passes)o.initialize(this);this._initialized=!0,this._started=!0},this.render=(o,s)=>{i.useProgram(this._program),(this._scene!==o||this._camera!==s)&&(this.dispose(),this._scene=o,this._camera=s,this.initialize());for(const l of this.passes)l.render();this._render()},this.dispose=()=>{if(this._initialized){i.useProgram(this._program);for(const o of this.passes)o.dispose();this._dispose(),this._scene=null,this._camera=null,this._initialized=!1}}}get renderer(){return this._renderer}get scene(){return this._scene}get camera(){return this._camera}get program(){return this._program}get passes(){return this._passes}get started(){return this._started}}const au="dmFyIG9BID0gZnVuY3Rpb24oQyA9IHt9KSB7CiAgdmFyIGUsIEEgPSBDLCBoID0gaW1wb3J0Lm1ldGEudXJsLCBrID0gIiIsIHk7CiAgewogICAgdHJ5IHsKICAgICAgayA9IG5ldyBVUkwoIi4iLCBoKS5ocmVmOwogICAgfSBjYXRjaCB7CiAgICB9CiAgICB5ID0gKGcpID0+IHsKICAgICAgdmFyIEIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIEIub3BlbigiR0VUIiwgZywgITEpLCBCLnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIEIuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkoQi5yZXNwb25zZSk7CiAgICB9OwogIH0KICBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7CiAgdmFyIEYsIEQsIE47CiAgZnVuY3Rpb24gVSgpIHsKICAgIHZhciBnID0gRC5idWZmZXI7CiAgICBBLkhFQVBVOCA9IE4gPSBuZXcgVWludDhBcnJheShnKSwgQS5IRUFQVTMyID0gbmV3IFVpbnQzMkFycmF5KGcpLCBBLkhFQVBGMzIgPSBuZXcgRmxvYXQzMkFycmF5KGcpLCBuZXcgQmlnSW50NjRBcnJheShnKSwgbmV3IEJpZ1VpbnQ2NEFycmF5KGcpOwogIH0KICBmdW5jdGlvbiBpKCkgewogICAgaWYgKEEucHJlUnVuKQogICAgICBmb3IgKHR5cGVvZiBBLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChBLnByZVJ1biA9IFtBLnByZVJ1bl0pOyBBLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAkKEEucHJlUnVuLnNoaWZ0KCkpOwogICAgeChUKTsKICB9CiAgZnVuY3Rpb24gSCgpIHsKICAgIGYuYygpOwogIH0KICBmdW5jdGlvbiBiKCkgewogICAgaWYgKEEucG9zdFJ1bikKICAgICAgZm9yICh0eXBlb2YgQS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKEEucG9zdFJ1biA9IFtBLnBvc3RSdW5dKTsgQS5wb3N0UnVuLmxlbmd0aDsgKQogICAgICAgIE8oQS5wb3N0UnVuLnNoaWZ0KCkpOwogICAgeChqKTsKICB9CiAgdmFyIHMgPSAwLCB3ID0gbnVsbDsKICBmdW5jdGlvbiB2KGcpIHsKICAgIHMrKywgQS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzPy4ocyk7CiAgfQogIGZ1bmN0aW9uIFAoZykgewogICAgaWYgKHMtLSwgQS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzPy4ocyksIHMgPT0gMCAmJiB3KSB7CiAgICAgIHZhciBCID0gdzsKICAgICAgdyA9IG51bGwsIEIoKTsKICAgIH0KICB9CiAgdmFyIG07CiAgZnVuY3Rpb24gWCgpIHsKICAgIHJldHVybiBBQSgiQUdGemJRRUFBQUFCSmdaZ0FYOEJmMkFDZlgwQmYyQUJmUUYvWUFGL0FHQUxmMzkvZjM5L2YzOS9mMzhBWUFBQUFnY0JBV0VCWVFBQUF3Z0hBQUVDQXdBRUJRVUhBUUdDQW9DQUFnWUlBWDhCUVlDTUJBc0hGUVVCWWdJQUFXTUFCd0ZrQUFZQlpRQUZBV1lBQkF3QkFRcXFRQWRQQVFKL1FZQUlLQUlBSWdFZ0FFRUhha0Y0Y1NJQ2FpRUFBa0FnQWtFQUlBQWdBVTBiUlFSQUlBQS9BRUVRZEUwTkFTQUFFQUFOQVF0QmhBaEJNRFlDQUVGL0R3dEJnQWdnQURZQ0FDQUJDdzRBSUFBUUF5QUJFQU5CRUhSeUMzSUJCSDhnQUx3aUJFSC8vLzhEY1NFQkFrQWdCRUVYZGtIL0FYRWlBa1VOQUNBQ1FmQUFUUVJBSUFGQmdJQ0FCSEpCOFFBZ0FtdDJJUUVNQVFzZ0FrR05BVXNFUUVHQStBRWhBMEVBSVFFTUFRc2dBa0VLZEVHQWdBZHJJUU1MSUFNZ0JFRVFka0dBZ0FKeGNpQUJRUTEyY2d2Y0N3RUlmd0pBSUFCRkRRQWdBRUVJYXlJRElBQkJCR3NvQWdBaUFrRjRjU0lBYWlFRkFrQWdBa0VCY1EwQUlBSkJBbkZGRFFFZ0F5QURLQUlBSWdScklnTkJtQWdvQWdCSkRRRWdBQ0FFYWlFQUFrQUNRQUpBUVp3SUtBSUFJQU5IQkVBZ0F5Z0NEQ0VCSUFSQi93Rk5CRUFnQVNBREtBSUlJZ0pIRFFKQmlBaEJpQWdvQWdCQmZpQUVRUU4yZDNFMkFnQU1CUXNnQXlnQ0dDRUhJQUVnQTBjRVFDQURLQUlJSWdJZ0FUWUNEQ0FCSUFJMkFnZ01CQXNnQXlnQ0ZDSUNCSDhnQTBFVWFnVWdBeWdDRUNJQ1JRMERJQU5CRUdvTElRUURRQ0FFSVFZZ0FpSUJRUlJxSVFRZ0FTZ0NGQ0lDRFFBZ0FVRVFhaUVFSUFFb0FoQWlBZzBBQ3lBR1FRQTJBZ0FNQXdzZ0JTZ0NCQ0lDUVFOeFFRTkhEUU5Ca0FnZ0FEWUNBQ0FGSUFKQmZuRTJBZ1FnQXlBQVFRRnlOZ0lFSUFVZ0FEWUNBQThMSUFJZ0FUWUNEQ0FCSUFJMkFnZ01BZ3RCQUNFQkN5QUhSUTBBQWtBZ0F5Z0NIQ0lFUVFKMFFiZ0thaUlDS0FJQUlBTkdCRUFnQWlBQk5nSUFJQUVOQVVHTUNFR01DQ2dDQUVGK0lBUjNjVFlDQUF3Q0N3SkFJQU1nQnlnQ0VFWUVRQ0FISUFFMkFoQU1BUXNnQnlBQk5nSVVDeUFCUlEwQkN5QUJJQWMyQWhnZ0F5Z0NFQ0lDQkVBZ0FTQUNOZ0lRSUFJZ0FUWUNHQXNnQXlnQ0ZDSUNSUTBBSUFFZ0FqWUNGQ0FDSUFFMkFoZ0xJQU1nQlU4TkFDQUZLQUlFSWdSQkFYRkZEUUFDUUFKQUFrQUNRQ0FFUVFKeFJRUkFRYUFJS0FJQUlBVkdCRUJCb0FnZ0F6WUNBRUdVQ0VHVUNDZ0NBQ0FBYWlJQU5nSUFJQU1nQUVFQmNqWUNCQ0FEUVp3SUtBSUFSdzBHUVpBSVFRQTJBZ0JCbkFoQkFEWUNBQThMUVp3SUtBSUFJZ2NnQlVZRVFFR2NDQ0FETmdJQVFaQUlRWkFJS0FJQUlBQnFJZ0EyQWdBZ0F5QUFRUUZ5TmdJRUlBQWdBMm9nQURZQ0FBOExJQVJCZUhFZ0FHb2hBQ0FGS0FJTUlRRWdCRUgvQVUwRVFDQUZLQUlJSWdJZ0FVWUVRRUdJQ0VHSUNDZ0NBRUYrSUFSQkEzWjNjVFlDQUF3RkN5QUNJQUUyQWd3Z0FTQUNOZ0lJREFRTElBVW9BaGdoQ0NBQklBVkhCRUFnQlNnQ0NDSUNJQUUyQWd3Z0FTQUNOZ0lJREFNTElBVW9BaFFpQWdSL0lBVkJGR29GSUFVb0FoQWlBa1VOQWlBRlFSQnFDeUVFQTBBZ0JDRUdJQUlpQVVFVWFpRUVJQUVvQWhRaUFnMEFJQUZCRUdvaEJDQUJLQUlRSWdJTkFBc2dCa0VBTmdJQURBSUxJQVVnQkVGK2NUWUNCQ0FESUFCQkFYSTJBZ1FnQUNBRGFpQUFOZ0lBREFNTFFRQWhBUXNnQ0VVTkFBSkFJQVVvQWh3aUJFRUNkRUc0Q21vaUFpZ0NBQ0FGUmdSQUlBSWdBVFlDQUNBQkRRRkJqQWhCakFnb0FnQkJmaUFFZDNFMkFnQU1BZ3NDUUNBRklBZ29BaEJHQkVBZ0NDQUJOZ0lRREFFTElBZ2dBVFlDRkFzZ0FVVU5BUXNnQVNBSU5nSVlJQVVvQWhBaUFnUkFJQUVnQWpZQ0VDQUNJQUUyQWhnTElBVW9BaFFpQWtVTkFDQUJJQUkyQWhRZ0FpQUJOZ0lZQ3lBRElBQkJBWEkyQWdRZ0FDQURhaUFBTmdJQUlBTWdCMGNOQUVHUUNDQUFOZ0lBRHdzZ0FFSC9BVTBFUUNBQVFYaHhRYkFJYWlFQ0FuOUJpQWdvQWdBaUJFRUJJQUJCQTNaMElnQnhSUVJBUVlnSUlBQWdCSEkyQWdBZ0Fnd0JDeUFDS0FJSUN5RUFJQUlnQXpZQ0NDQUFJQU0yQWd3Z0F5QUNOZ0lNSUFNZ0FEWUNDQThMUVI4aEFTQUFRZi8vL3dkTkJFQWdBRUVtSUFCQkNIWm5JZ0pyZGtFQmNTQUNRUUYwYTBFK2FpRUJDeUFESUFFMkFod2dBMElBTndJUUlBRkJBblJCdUFwcUlRUUNmd0pBQW45QmpBZ29BZ0FpQmtFQklBRjBJZ0p4UlFSQVFZd0lJQUlnQm5JMkFnQWdCQ0FETmdJQVFSZ2hBVUVJREFFTElBQkJHU0FCUVFGMmEwRUFJQUZCSDBjYmRDRUJJQVFvQWdBaEJBTkFJQVFpQWlnQ0JFRjRjU0FBUmcwQ0lBRkJIWFloQkNBQlFRRjBJUUVnQWlBRVFRUnhhaUlHS0FJUUlnUU5BQXNnQmlBRE5nSVFRUmdoQVNBQ0lRUkJDQXNoQUNBRElnSU1BUXNnQWlnQ0NDSUVJQU0yQWd3Z0FpQUROZ0lJUVJnaEFFRUlJUUZCQUFzaEJpQUJJQU5xSUFRMkFnQWdBeUFDTmdJTUlBQWdBMm9nQmpZQ0FFR29DRUdvQ0NnQ0FFRUJheUlBUVg4Z0FCczJBZ0FMQzlFbkFRdC9Jd0JCRUdzaUNpUUFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FnQUVIMEFVMEVRRUdJQ0NnQ0FDSUVRUkFnQUVFTGFrSDRBM0VnQUVFTFNSc2lCa0VEZGlJQWRpSUJRUU54QkVBQ1FDQUJRWDl6UVFGeElBQnFJZ0pCQTNRaUFVR3dDR29pQUNBQlFiZ0lhaWdDQUNJQktBSUlJZ1ZHQkVCQmlBZ2dCRUYrSUFKM2NUWUNBQXdCQ3lBRklBQTJBZ3dnQUNBRk5nSUlDeUFCUVFocUlRQWdBU0FDUVFOMElnSkJBM0kyQWdRZ0FTQUNhaUlCSUFFb0FnUkJBWEkyQWdRTUN3c2dCa0dRQ0NnQ0FDSUlUUTBCSUFFRVFBSkFRUUlnQUhRaUFrRUFJQUpyY2lBQklBQjBjV2dpQVVFRGRDSUFRYkFJYWlJQ0lBQkJ1QWhxS0FJQUlnQW9BZ2dpQlVZRVFFR0lDQ0FFUVg0Z0FYZHhJZ1EyQWdBTUFRc2dCU0FDTmdJTUlBSWdCVFlDQ0FzZ0FDQUdRUU55TmdJRUlBQWdCbW9pQnlBQlFRTjBJZ0VnQm1zaUJVRUJjallDQkNBQUlBRnFJQVUyQWdBZ0NBUkFJQWhCZUhGQnNBaHFJUUZCbkFnb0FnQWhBZ0ovSUFSQkFTQUlRUU4yZENJRGNVVUVRRUdJQ0NBRElBUnlOZ0lBSUFFTUFRc2dBU2dDQ0FzaEF5QUJJQUkyQWdnZ0F5QUNOZ0lNSUFJZ0FUWUNEQ0FDSUFNMkFnZ0xJQUJCQ0dvaEFFR2NDQ0FITmdJQVFaQUlJQVUyQWdBTUN3dEJqQWdvQWdBaUMwVU5BU0FMYUVFQ2RFRzRDbW9vQWdBaUFpZ0NCRUY0Y1NBR2F5RURJQUloQVFOQUFrQWdBU2dDRUNJQVJRUkFJQUVvQWhRaUFFVU5BUXNnQUNnQ0JFRjRjU0FHYXlJQklBTWdBU0FEU1NJQkd5RURJQUFnQWlBQkd5RUNJQUFoQVF3QkN3c2dBaWdDR0NFSklBSWdBaWdDRENJQVJ3UkFJQUlvQWdnaUFTQUFOZ0lNSUFBZ0FUWUNDQXdLQ3lBQ0tBSVVJZ0VFZnlBQ1FSUnFCU0FDS0FJUUlnRkZEUU1nQWtFUWFnc2hCUU5BSUFVaEJ5QUJJZ0JCRkdvaEJTQUFLQUlVSWdFTkFDQUFRUkJxSVFVZ0FDZ0NFQ0lCRFFBTElBZEJBRFlDQUF3SkMwRi9JUVlnQUVHL2Ywc05BQ0FBUVF0cUlnRkJlSEVoQmtHTUNDZ0NBQ0lIUlEwQVFSOGhDRUVBSUFacklRTWdBRUgwLy84SFRRUkFJQVpCSmlBQlFRaDJaeUlBYTNaQkFYRWdBRUVCZEd0QlBtb2hDQXNDUUFKQUFrQWdDRUVDZEVHNENtb29BZ0FpQVVVRVFFRUFJUUFNQVF0QkFDRUFJQVpCR1NBSVFRRjJhMEVBSUFoQkgwY2JkQ0VDQTBBQ1FDQUJLQUlFUVhoeElBWnJJZ1FnQTA4TkFDQUJJUVVnQkNJRERRQkJBQ0VESUFFaEFBd0RDeUFBSUFFb0FoUWlCQ0FFSUFFZ0FrRWRka0VFY1dvb0FoQWlBVVliSUFBZ0JCc2hBQ0FDUVFGMElRSWdBUTBBQ3dzZ0FDQUZja1VFUUVFQUlRVkJBaUFJZENJQVFRQWdBR3R5SUFkeElnQkZEUU1nQUdoQkFuUkJ1QXBxS0FJQUlRQUxJQUJGRFFFTEEwQWdBQ2dDQkVGNGNTQUdheUlDSUFOSklRRWdBaUFESUFFYklRTWdBQ0FGSUFFYklRVWdBQ2dDRUNJQkJIOGdBUVVnQUNnQ0ZBc2lBQTBBQ3dzZ0JVVU5BQ0FEUVpBSUtBSUFJQVpyVHcwQUlBVW9BaGdoQ0NBRklBVW9BZ3dpQUVjRVFDQUZLQUlJSWdFZ0FEWUNEQ0FBSUFFMkFnZ01DQXNnQlNnQ0ZDSUJCSDhnQlVFVWFnVWdCU2dDRUNJQlJRMERJQVZCRUdvTElRSURRQ0FDSVFRZ0FTSUFRUlJxSVFJZ0FDZ0NGQ0lCRFFBZ0FFRVFhaUVDSUFBb0FoQWlBUTBBQ3lBRVFRQTJBZ0FNQndzZ0JrR1FDQ2dDQUNJRlRRUkFRWndJS0FJQUlRQUNRQ0FGSUFacklnRkJFRThFUUNBQUlBWnFJZ0lnQVVFQmNqWUNCQ0FBSUFWcUlBRTJBZ0FnQUNBR1FRTnlOZ0lFREFFTElBQWdCVUVEY2pZQ0JDQUFJQVZxSWdFZ0FTZ0NCRUVCY2pZQ0JFRUFJUUpCQUNFQkMwR1FDQ0FCTmdJQVFad0lJQUkyQWdBZ0FFRUlhaUVBREFrTElBWkJsQWdvQWdBaUFra0VRRUdVQ0NBQ0lBWnJJZ0UyQWdCQm9BaEJvQWdvQWdBaUFDQUdhaUlDTmdJQUlBSWdBVUVCY2pZQ0JDQUFJQVpCQTNJMkFnUWdBRUVJYWlFQURBa0xRUUFoQUNBR1FTOXFJZ01DZjBIZ0N5Z0NBQVJBUWVnTEtBSUFEQUVMUWV3TFFuODNBZ0JCNUF0Q2dLQ0FnSUNBQkRjQ0FFSGdDeUFLUVF4cVFYQnhRZGlxMWFvRmN6WUNBRUgwQzBFQU5nSUFRY1FMUVFBMkFnQkJnQ0FMSWdGcUlnUkJBQ0FCYXlJSGNTSUJJQVpORFFoQndBc29BZ0FpQlFSQVFiZ0xLQUlBSWdnZ0FXb2lDU0FJVFNBRklBbEpjZzBKQ3dKQVFjUUxMUUFBUVFSeFJRUkFBa0FDUUFKQUFrQkJvQWdvQWdBaUJRUkFRY2dMSVFBRFFDQUFLQUlBSWdnZ0JVMEVRQ0FGSUFnZ0FDZ0NCR3BKRFFNTElBQW9BZ2dpQUEwQUN3dEJBQkFCSWdKQmYwWU5BeUFCSVFSQjVBc29BZ0FpQUVFQmF5SUZJQUp4QkVBZ0FTQUNheUFDSUFWcVFRQWdBR3R4YWlFRUN5QUVJQVpORFFOQndBc29BZ0FpQUFSQVFiZ0xLQUlBSWdVZ0JHb2lCeUFGVFNBQUlBZEpjZzBFQ3lBRUVBRWlBQ0FDUncwQkRBVUxJQVFnQW1zZ0IzRWlCQkFCSWdJZ0FDZ0NBQ0FBS0FJRWFrWU5BU0FDSVFBTElBQkJmMFlOQVNBR1FUQnFJQVJOQkVBZ0FDRUNEQVFMUWVnTEtBSUFJZ0lnQXlBRWEycEJBQ0FDYTNFaUFoQUJRWDlHRFFFZ0FpQUVhaUVFSUFBaEFnd0RDeUFDUVg5SERRSUxRY1FMUWNRTEtBSUFRUVJ5TmdJQUN5QUJFQUVpQWtGL1JrRUFFQUVpQUVGL1JuSWdBQ0FDVFhJTkJTQUFJQUpySWdRZ0JrRW9hazBOQlF0QnVBdEJ1QXNvQWdBZ0JHb2lBRFlDQUVHOEN5Z0NBQ0FBU1FSQVFid0xJQUEyQWdBTEFrQkJvQWdvQWdBaUF3UkFRY2dMSVFBRFFDQUNJQUFvQWdBaUFTQUFLQUlFSWdWcVJnMENJQUFvQWdnaUFBMEFDd3dFQzBHWUNDZ0NBQ0lBUVFBZ0FDQUNUUnRGQkVCQm1BZ2dBallDQUF0QkFDRUFRY3dMSUFRMkFnQkJ5QXNnQWpZQ0FFR29DRUYvTmdJQVFhd0lRZUFMS0FJQU5nSUFRZFFMUVFBMkFnQURRQ0FBUVFOMElnRkJ1QWhxSUFGQnNBaHFJZ1UyQWdBZ0FVRzhDR29nQlRZQ0FDQUFRUUZxSWdCQklFY05BQXRCbEFnZ0JFRW9heUlBUVhnZ0FtdEJCM0VpQVdzaUJUWUNBRUdnQ0NBQklBSnFJZ0UyQWdBZ0FTQUZRUUZ5TmdJRUlBQWdBbXBCS0RZQ0JFR2tDRUh3Q3lnQ0FEWUNBQXdFQ3lBQ0lBTk5JQUVnQTB0eURRSWdBQ2dDREVFSWNRMENJQUFnQkNBRmFqWUNCRUdnQ0NBRFFYZ2dBMnRCQjNFaUFHb2lBVFlDQUVHVUNFR1VDQ2dDQUNBRWFpSUNJQUJySWdBMkFnQWdBU0FBUVFGeU5nSUVJQUlnQTJwQktEWUNCRUdrQ0VId0N5Z0NBRFlDQUF3REMwRUFJUUFNQmd0QkFDRUFEQVFMUVpnSUtBSUFJQUpMQkVCQm1BZ2dBallDQUFzZ0FpQUVhaUVGUWNnTElRQUNRQU5BSUFVZ0FDZ0NBQ0lCUndSQUlBQW9BZ2dpQUEwQkRBSUxDeUFBTFFBTVFRaHhSUTBEQzBISUN5RUFBMEFDUUNBQUtBSUFJZ0VnQTAwRVFDQURJQUVnQUNnQ0JHb2lCVWtOQVFzZ0FDZ0NDQ0VBREFFTEMwR1VDQ0FFUVNocklnQkJlQ0FDYTBFSGNTSUJheUlITmdJQVFhQUlJQUVnQW1vaUFUWUNBQ0FCSUFkQkFYSTJBZ1FnQUNBQ2FrRW9OZ0lFUWFRSVFmQUxLQUlBTmdJQUlBTWdCVUVuSUFWclFRZHhha0V2YXlJQUlBQWdBMEVRYWtrYklnRkJHellDQkNBQlFkQUxLUUlBTndJUUlBRkJ5QXNwQWdBM0FnaEIwQXNnQVVFSWFqWUNBRUhNQ3lBRU5nSUFRY2dMSUFJMkFnQkIxQXRCQURZQ0FDQUJRUmhxSVFBRFFDQUFRUWMyQWdRZ0FFRUlhaUFBUVFScUlRQWdCVWtOQUFzZ0FTQURSZzBBSUFFZ0FTZ0NCRUYrY1RZQ0JDQURJQUVnQTJzaUFrRUJjallDQkNBQklBSTJBZ0FDZnlBQ1FmOEJUUVJBSUFKQmVIRkJzQWhxSVFBQ2YwR0lDQ2dDQUNJQlFRRWdBa0VEZG5RaUFuRkZCRUJCaUFnZ0FTQUNjallDQUNBQURBRUxJQUFvQWdnTElRRWdBQ0FETmdJSUlBRWdBellDREVFTUlRSkJDQXdCQzBFZklRQWdBa0gvLy84SFRRUkFJQUpCSmlBQ1FRaDJaeUlBYTNaQkFYRWdBRUVCZEd0QlBtb2hBQXNnQXlBQU5nSWNJQU5DQURjQ0VDQUFRUUowUWJnS2FpRUJBa0FDUUVHTUNDZ0NBQ0lGUVFFZ0FIUWlCSEZGQkVCQmpBZ2dCQ0FGY2pZQ0FDQUJJQU0yQWdBTUFRc2dBa0VaSUFCQkFYWnJRUUFnQUVFZlJ4dDBJUUFnQVNnQ0FDRUZBMEFnQlNJQktBSUVRWGh4SUFKR0RRSWdBRUVkZGlFRklBQkJBWFFoQUNBQklBVkJCSEZxSWdRb0FoQWlCUTBBQ3lBRUlBTTJBaEFMSUFNZ0FUWUNHRUVJSVFJZ0F5SUJJUUJCREF3QkN5QUJLQUlJSWdBZ0F6WUNEQ0FCSUFNMkFnZ2dBeUFBTmdJSVFRQWhBRUVZSVFKQkRBc2dBMm9nQVRZQ0FDQUNJQU5xSUFBMkFnQUxRWlFJS0FJQUlnQWdCazBOQUVHVUNDQUFJQVpySWdFMkFnQkJvQWhCb0Fnb0FnQWlBQ0FHYWlJQ05nSUFJQUlnQVVFQmNqWUNCQ0FBSUFaQkEzSTJBZ1FnQUVFSWFpRUFEQVFMUVlRSVFUQTJBZ0JCQUNFQURBTUxJQUFnQWpZQ0FDQUFJQUFvQWdRZ0JHbzJBZ1FnQWtGNElBSnJRUWR4YWlJSUlBWkJBM0kyQWdRZ0FVRjRJQUZyUVFkeGFpSUVJQVlnQ0dvaUEyc2hCd0pBUWFBSUtBSUFJQVJHQkVCQm9BZ2dBellDQUVHVUNFR1VDQ2dDQUNBSGFpSUFOZ0lBSUFNZ0FFRUJjallDQkF3QkMwR2NDQ2dDQUNBRVJnUkFRWndJSUFNMkFnQkJrQWhCa0Fnb0FnQWdCMm9pQURZQ0FDQURJQUJCQVhJMkFnUWdBQ0FEYWlBQU5nSUFEQUVMSUFRb0FnUWlBRUVEY1VFQlJnUkFJQUJCZUhFaENTQUVLQUlNSVFJQ1FDQUFRZjhCVFFSQUlBUW9BZ2dpQVNBQ1JnUkFRWWdJUVlnSUtBSUFRWDRnQUVFRGRuZHhOZ0lBREFJTElBRWdBallDRENBQ0lBRTJBZ2dNQVFzZ0JDZ0NHQ0VHQWtBZ0FpQUVSd1JBSUFRb0FnZ2lBQ0FDTmdJTUlBSWdBRFlDQ0F3QkN3SkFJQVFvQWhRaUFBUi9JQVJCRkdvRklBUW9BaEFpQUVVTkFTQUVRUkJxQ3lFQkEwQWdBU0VGSUFBaUFrRVVhaUVCSUFBb0FoUWlBQTBBSUFKQkVHb2hBU0FDS0FJUUlnQU5BQXNnQlVFQU5nSUFEQUVMUVFBaEFnc2dCa1VOQUFKQUlBUW9BaHdpQUVFQ2RFRzRDbW9pQVNnQ0FDQUVSZ1JBSUFFZ0FqWUNBQ0FDRFFGQmpBaEJqQWdvQWdCQmZpQUFkM0UyQWdBTUFnc0NRQ0FFSUFZb0FoQkdCRUFnQmlBQ05nSVFEQUVMSUFZZ0FqWUNGQXNnQWtVTkFRc2dBaUFHTmdJWUlBUW9BaEFpQUFSQUlBSWdBRFlDRUNBQUlBSTJBaGdMSUFRb0FoUWlBRVVOQUNBQ0lBQTJBaFFnQUNBQ05nSVlDeUFISUFscUlRY2dCQ0FKYWlJRUtBSUVJUUFMSUFRZ0FFRitjVFlDQkNBRElBZEJBWEkyQWdRZ0F5QUhhaUFITmdJQUlBZEIvd0ZOQkVBZ0IwRjRjVUd3Q0dvaEFBSi9RWWdJS0FJQUlnRkJBU0FIUVFOMmRDSUNjVVVFUUVHSUNDQUJJQUp5TmdJQUlBQU1BUXNnQUNnQ0NBc2hBU0FBSUFNMkFnZ2dBU0FETmdJTUlBTWdBRFlDRENBRElBRTJBZ2dNQVF0Qkh5RUNJQWRCLy8vL0IwMEVRQ0FIUVNZZ0IwRUlkbWNpQUd0MlFRRnhJQUJCQVhSclFUNXFJUUlMSUFNZ0FqWUNIQ0FEUWdBM0FoQWdBa0VDZEVHNENtb2hBQUpBQWtCQmpBZ29BZ0FpQVVFQklBSjBJZ1Z4UlFSQVFZd0lJQUVnQlhJMkFnQWdBQ0FETmdJQURBRUxJQWRCR1NBQ1FRRjJhMEVBSUFKQkgwY2JkQ0VDSUFBb0FnQWhBUU5BSUFFaUFDZ0NCRUY0Y1NBSFJnMENJQUpCSFhZaEFTQUNRUUYwSVFJZ0FDQUJRUVJ4YWlJRktBSVFJZ0VOQUFzZ0JTQUROZ0lRQ3lBRElBQTJBaGdnQXlBRE5nSU1JQU1nQXpZQ0NBd0JDeUFBS0FJSUlnRWdBellDRENBQUlBTTJBZ2dnQTBFQU5nSVlJQU1nQURZQ0RDQURJQUUyQWdnTElBaEJDR29oQUF3Q0N3SkFJQWhGRFFBQ1FDQUZLQUljSWdGQkFuUkJ1QXBxSWdJb0FnQWdCVVlFUUNBQ0lBQTJBZ0FnQUEwQlFZd0lJQWRCZmlBQmQzRWlCellDQUF3Q0N3SkFJQVVnQ0NnQ0VFWUVRQ0FJSUFBMkFoQU1BUXNnQ0NBQU5nSVVDeUFBUlEwQkN5QUFJQWcyQWhnZ0JTZ0NFQ0lCQkVBZ0FDQUJOZ0lRSUFFZ0FEWUNHQXNnQlNnQ0ZDSUJSUTBBSUFBZ0FUWUNGQ0FCSUFBMkFoZ0xBa0FnQTBFUFRRUkFJQVVnQXlBR2FpSUFRUU55TmdJRUlBQWdCV29pQUNBQUtBSUVRUUZ5TmdJRURBRUxJQVVnQmtFRGNqWUNCQ0FGSUFacUlnUWdBMEVCY2pZQ0JDQURJQVJxSUFNMkFnQWdBMEgvQVUwRVFDQURRWGh4UWJBSWFpRUFBbjlCaUFnb0FnQWlBVUVCSUFOQkEzWjBJZ0p4UlFSQVFZZ0lJQUVnQW5JMkFnQWdBQXdCQ3lBQUtBSUlDeUVCSUFBZ0JEWUNDQ0FCSUFRMkFnd2dCQ0FBTmdJTUlBUWdBVFlDQ0F3QkMwRWZJUUFnQTBILy8vOEhUUVJBSUFOQkppQURRUWgyWnlJQWEzWkJBWEVnQUVFQmRHdEJQbW9oQUFzZ0JDQUFOZ0ljSUFSQ0FEY0NFQ0FBUVFKMFFiZ0thaUVCQWtBQ1FDQUhRUUVnQUhRaUFuRkZCRUJCakFnZ0FpQUhjallDQUNBQklBUTJBZ0FnQkNBQk5nSVlEQUVMSUFOQkdTQUFRUUYyYTBFQUlBQkJIMGNiZENFQUlBRW9BZ0FoQVFOQUlBRWlBaWdDQkVGNGNTQURSZzBDSUFCQkhYWWhBU0FBUVFGMElRQWdBaUFCUVFSeGFpSUhLQUlRSWdFTkFBc2dCeUFFTmdJUUlBUWdBallDR0FzZ0JDQUVOZ0lNSUFRZ0JEWUNDQXdCQ3lBQ0tBSUlJZ0FnQkRZQ0RDQUNJQVEyQWdnZ0JFRUFOZ0lZSUFRZ0FqWUNEQ0FFSUFBMkFnZ0xJQVZCQ0dvaEFBd0JDd0pBSUFsRkRRQUNRQ0FDS0FJY0lnRkJBblJCdUFwcUlnVW9BZ0FnQWtZRVFDQUZJQUEyQWdBZ0FBMEJRWXdJSUF0QmZpQUJkM0UyQWdBTUFnc0NRQ0FDSUFrb0FoQkdCRUFnQ1NBQU5nSVFEQUVMSUFrZ0FEWUNGQXNnQUVVTkFRc2dBQ0FKTmdJWUlBSW9BaEFpQVFSQUlBQWdBVFlDRUNBQklBQTJBaGdMSUFJb0FoUWlBVVVOQUNBQUlBRTJBaFFnQVNBQU5nSVlDd0pBSUFOQkQwMEVRQ0FDSUFNZ0Jtb2lBRUVEY2pZQ0JDQUFJQUpxSWdBZ0FDZ0NCRUVCY2pZQ0JBd0JDeUFDSUFaQkEzSTJBZ1FnQWlBR2FpSUZJQU5CQVhJMkFnUWdBeUFGYWlBRE5nSUFJQWdFUUNBSVFYaHhRYkFJYWlFQVFad0lLQUlBSVFFQ2YwRUJJQWhCQTNaMElnY2dCSEZGQkVCQmlBZ2dCQ0FIY2pZQ0FDQUFEQUVMSUFBb0FnZ0xJUVFnQUNBQk5nSUlJQVFnQVRZQ0RDQUJJQUEyQWd3Z0FTQUVOZ0lJQzBHY0NDQUZOZ0lBUVpBSUlBTTJBZ0FMSUFKQkNHb2hBQXNnQ2tFUWFpUUFJQUFMb1FzQ0MzOEpmU01BUWFBQmF5SUxKQUFnQzBFd2FrRUFRU1Q4Q3dBRFFDQUJJQTVIQkVBZ0FpQU9RUU5zSWd4QkFtcEJBblFpRDJvcUFnQWhGeUFDSUF4QkFXcEJBblFpRUdvcUFnQWhHQ0FJSUF4QkFuUWlFV29nQWlBUmFpb0NBQ0laT0FJQUlBZ2dFR29nR0RnQ0FDQUlJQTlxSUJjNEFnQWdCeUFPUVFWMGFpSU5RUUEyQWd3Z0RTQVhPQUlJSUEwZ0dEZ0NCQ0FOSUJrNEFnQUNRQ0FBUlFSQUlBWWdEbW90QUFCRkRRRUxJQTFCZ0lDQUNEWUNEQXNnRFNBRklBNUJBblFpREVFQmNpSVNhaTBBQUVFSWRDQUZJQXhxTFFBQWNpQUZJQXhCQW5JaUUyb3RBQUJCRUhSeUlBVWdERUVEY2lJTWFpMEFBRUVZZEhJMkFod2dDeUFESUJKQkFuUWlFbW9xQWdBaUZ6Z0NrQUVnQ3lBRElCTkJBblFpRTJvcUFnQWlHRGdDbEFFZ0N5QURJQXhCQW5RaUZHb3FBZ0FpR1RnQ21BRWdDeUFESUE1QkJIUWlGV29xQWdDTUlobzRBcHdCSUF0QjRBQnFJZ3dnQ3lvQ21BRWlGa01BQUFEQWxDQVdsQ0FMS2dLVUFTSVdRd0FBQU1DVUlCYVVRd0FBZ0QrU2tqZ0NBQ0FNSUFzcUFwQUJJaFlnRnBJZ0N5b0NsQUdVSUFzcUFwZ0JJaFlnRnBJZ0N5b0NuQUdVa3pnQ0JDQU1JQXNxQXBBQkloWWdGcElnQ3lvQ21BR1VJQXNxQXBRQkloWWdGcElnQ3lvQ25BR1VramdDQ0NBTUlBc3FBcEFCSWhZZ0ZwSWdDeW9DbEFHVUlBc3FBcGdCSWhZZ0ZwSWdDeW9DbkFHVWtqZ0NEQ0FNSUFzcUFwZ0JJaFpEQUFBQXdKUWdGcFFnQ3lvQ2tBRWlGa01BQUFEQWxDQVdsRU1BQUlBL2twSTRBaEFnRENBTEtnS1VBU0lXSUJhU0lBc3FBcGdCbENBTEtnS1FBU0lXSUJhU0lBc3FBcHdCbEpNNEFoUWdEQ0FMS2dLUUFTSVdJQmFTSUFzcUFwZ0JsQ0FMS2dLVUFTSVdJQmFTSUFzcUFwd0JsSk00QWhnZ0RDQUxLZ0tVQVNJV0lCYVNJQXNxQXBnQmxDQUxLZ0tRQVNJV0lCYVNJQXNxQXB3QmxKSTRBaHdnRENBTEtnS1VBU0lXUXdBQUFNQ1VJQmFVSUFzcUFwQUJJaFpEQUFBQXdKUWdGcFJEQUFDQVA1S1NPQUlnSUFrZ0ZXb2dGemdDQUNBSklCSnFJQmc0QWdBZ0NTQVRhaUFaT0FJQUlBa2dGR29nR2pnQ0FDQUxJQVFnRVdvcUFnQWlGemdDTUNBTElBUWdFR29xQWdBaUdEZ0NRQ0FMSUFRZ0Qyb3FBZ0FpR1RnQ1VDQUtJQkZxSUJjNEFnQWdDaUFRYWlBWU9BSUFJQW9nRDJvZ0dUZ0NBQ0FMSUF3cUFoZ2dDeW9DT0pRZ0RDb0NBQ0FMS2dJd2xDQU1LZ0lNSUFzcUFqU1VrcEk0QWdBZ0N5QU1LZ0ljSUFzcUFqaVVJQXdxQWdRZ0N5b0NNSlFnRENvQ0VDQUxLZ0kwbEpLU09BSUVJQXNnRENvQ0lDQUxLZ0k0bENBTUtnSUlJQXNxQWpDVUlBd3FBaFFnQ3lvQ05KU1NramdDQ0NBTElBd3FBaGdnQ3lvQ1JKUWdEQ29DQUNBTEtnSThsQ0FNS2dJTUlBc3FBa0NVa3BJNEFnd2dDeUFNS2dJY0lBc3FBa1NVSUF3cUFnUWdDeW9DUEpRZ0RDb0NFQ0FMS2dKQWxKS1NPQUlRSUFzZ0RDb0NJQ0FMS2dKRWxDQU1LZ0lJSUFzcUFqeVVJQXdxQWhRZ0N5b0NRSlNTa2pnQ0ZDQUxJQXdxQWhnZ0N5b0NVSlFnRENvQ0FDQUxLZ0pJbENBTUtnSU1JQXNxQWt5VWtwSTRBaGdnQ3lBTUtnSWNJQXNxQWxDVUlBd3FBZ1FnQ3lvQ1NKUWdEQ29DRUNBTEtnSk1sSktTT0FJY0lBc2dEQ29DSUNBTEtnSlFsQ0FNS2dJSUlBc3FBa2lVSUF3cUFoUWdDeW9DVEpTU2tqZ0NJQ0FMS2dJZ0lSY2dDeW9DQ0NFWUlBc3FBaFFoR1NBTklBc3FBaGdpR2lBYWxDQUxLZ0lBSWhZZ0ZwUWdDeW9DRENJYklCdVVrcEpEQUFDQVFKUWdHaUFMS2dJY0loeVVJQllnQ3lvQ0JDSWRsQ0FiSUFzcUFoQWlIcFNTa2tNQUFJQkFsQkFDTmdJUUlBMGdHaUFYbENBV0lCaVVJQnNnR1pTU2trTUFBSUJBbENBY0lCeVVJQjBnSFpRZ0hpQWVsSktTUXdBQWdFQ1VFQUkyQWhRZ0RTQWNJQmVVSUIwZ0dKUWdIaUFabEpLU1F3QUFnRUNVSUJjZ0Y1UWdHQ0FZbENBWklCbVVrcEpEQUFDQVFKUVFBallDR0NBT1FRRnFJUTRNQVFzTElBdEJvQUZxSkFBTEFnQUxDd2tCQUVHQkNBc0NCZ0U9Iik7CiAgfQogIGZ1bmN0aW9uIFcoZykgewogICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhnKSkKICAgICAgcmV0dXJuIGc7CiAgICBpZiAoZyA9PSBtICYmIEYpCiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShGKTsKICAgIGlmICh5KQogICAgICByZXR1cm4geShnKTsKICAgIHRocm93ICdzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZDogeW91IGNhbiBwcmVsb2FkIGl0IHRvIE1vZHVsZVsid2FzbUJpbmFyeSJdIG1hbnVhbGx5LCBvciBlbWNjLnB5IHdpbGwgZG8gdGhhdCBmb3IgeW91IHdoZW4gZ2VuZXJhdGluZyBIVE1MIChidXQgbm90IEpTKSc7CiAgfQogIGZ1bmN0aW9uIF8oZywgQikgewogICAgdmFyIEUsIFEgPSBXKGcpOwogICAgRSA9IG5ldyBXZWJBc3NlbWJseS5Nb2R1bGUoUSk7CiAgICB2YXIgbyA9IG5ldyBXZWJBc3NlbWJseS5JbnN0YW5jZShFLCBCKTsKICAgIHJldHVybiBbbywgRV07CiAgfQogIGZ1bmN0aW9uIFYoKSB7CiAgICByZXR1cm4geyBhOiBFQSB9OwogIH0KICBmdW5jdGlvbiB6KCkgewogICAgZnVuY3Rpb24gZyhRLCBvKSB7CiAgICAgIHJldHVybiBmID0gUS5leHBvcnRzLCBEID0gZi5iLCBVKCksIFFBKGYpLCBQKCksIGY7CiAgICB9CiAgICB2KCk7CiAgICB2YXIgQiA9IFYoKTsKICAgIGlmIChBLmluc3RhbnRpYXRlV2FzbSkKICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChRLCBvKSA9PiB7CiAgICAgICAgQS5pbnN0YW50aWF0ZVdhc20oQiwgKHIsIGMpID0+IHsKICAgICAgICAgIFEoZyhyKSk7CiAgICAgICAgfSk7CiAgICAgIH0pOwogICAgbSA/Pz0gWCgpOwogICAgdmFyIEUgPSBfKG0sIEIpOwogICAgcmV0dXJuIGcoRVswXSk7CiAgfQogIGZvciAodmFyIHggPSAoZykgPT4gewogICAgZm9yICg7IGcubGVuZ3RoID4gMDsgKQogICAgICBnLnNoaWZ0KCkoQSk7CiAgfSwgaiA9IFtdLCBPID0gKGcpID0+IGoucHVzaChnKSwgVCA9IFtdLCAkID0gKGcpID0+IFQucHVzaChnKSwgQUEgPSAoZykgPT4gewogICAgZm9yICh2YXIgQiwgRSwgUSA9IDAsIG8gPSAwLCByID0gZy5sZW5ndGgsIGMgPSBuZXcgVWludDhBcnJheSgociAqIDMgPj4gMikgLSAoZ1tyIC0gMl0gPT0gIj0iKSAtIChnW3IgLSAxXSA9PSAiPSIpKTsgUSA8IHI7IFEgKz0gNCwgbyArPSAzKQogICAgICBCID0gbltnLmNoYXJDb2RlQXQoUSArIDEpXSwgRSA9IG5bZy5jaGFyQ29kZUF0KFEgKyAyKV0sIGNbb10gPSBuW2cuY2hhckNvZGVBdChRKV0gPDwgMiB8IEIgPj4gNCwgY1tvICsgMV0gPSBCIDw8IDQgfCBFID4+IDIsIGNbbyArIDJdID0gRSA8PCA2IHwgbltnLmNoYXJDb2RlQXQoUSArIDMpXTsKICAgIHJldHVybiBjOwogIH0sIGdBID0gKCkgPT4gMjE0NzQ4MzY0OCwgSUEgPSAoZywgQikgPT4gTWF0aC5jZWlsKGcgLyBCKSAqIEIsIENBID0gKGcpID0+IHsKICAgIHZhciBCID0gRC5idWZmZXIsIEUgPSAoZyAtIEIuYnl0ZUxlbmd0aCArIDY1NTM1KSAvIDY1NTM2IHwgMDsKICAgIHRyeSB7CiAgICAgIHJldHVybiBELmdyb3coRSksIFUoKSwgMTsKICAgIH0gY2F0Y2ggewogICAgfQogIH0sIEJBID0gKGcpID0+IHsKICAgIHZhciBCID0gTi5sZW5ndGg7CiAgICBnID4+Pj0gMDsKICAgIHZhciBFID0gZ0EoKTsKICAgIGlmIChnID4gRSkKICAgICAgcmV0dXJuICExOwogICAgZm9yICh2YXIgUSA9IDE7IFEgPD0gNDsgUSAqPSAyKSB7CiAgICAgIHZhciBvID0gQiAqICgxICsgMC4yIC8gUSk7CiAgICAgIG8gPSBNYXRoLm1pbihvLCBnICsgMTAwNjYzMjk2KTsKICAgICAgdmFyIHIgPSBNYXRoLm1pbihFLCBJQShNYXRoLm1heChnLCBvKSwgNjU1MzYpKSwgYyA9IENBKHIpOwogICAgICBpZiAoYykKICAgICAgICByZXR1cm4gITA7CiAgICB9CiAgICByZXR1cm4gITE7CiAgfSwgbiA9IG5ldyBVaW50OEFycmF5KDEyMyksIGEgPSAyNTsgYSA+PSAwOyAtLWEpCiAgICBuWzQ4ICsgYV0gPSA1MiArIGEsIG5bNjUgKyBhXSA9IGEsIG5bOTcgKyBhXSA9IDI2ICsgYTsKICBuWzQzXSA9IDYyLCBuWzQ3XSA9IDYzLCBBLm5vRXhpdFJ1bnRpbWUgJiYgQS5ub0V4aXRSdW50aW1lLCBBLnByaW50ICYmIEEucHJpbnQsIEEucHJpbnRFcnIgJiYgQS5wcmludEVyciwgQS53YXNtQmluYXJ5ICYmIChGID0gQS53YXNtQmluYXJ5KSwgQS5hcmd1bWVudHMgJiYgQS5hcmd1bWVudHMsIEEudGhpc1Byb2dyYW0gJiYgQS50aGlzUHJvZ3JhbTsKICBmdW5jdGlvbiBRQShnKSB7CiAgICBBLl9wYWNrID0gZy5kLCBBLl9tYWxsb2MgPSBnLmUsIEEuX2ZyZWUgPSBnLmY7CiAgfQogIHZhciBFQSA9IHsgYTogQkEgfSwgZiA9IHooKTsKICBmdW5jdGlvbiBxKCkgewogICAgaWYgKHMgPiAwKSB7CiAgICAgIHcgPSBxOwogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoaSgpLCBzID4gMCkgewogICAgICB3ID0gcTsKICAgICAgcmV0dXJuOwogICAgfQogICAgZnVuY3Rpb24gZygpIHsKICAgICAgQS5jYWxsZWRSdW4gPSAhMCwgSCgpLCBBLm9uUnVudGltZUluaXRpYWxpemVkPy4oKSwgYigpOwogICAgfQogICAgQS5zZXRTdGF0dXMgPyAoQS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gQS5zZXRTdGF0dXMoIiIpLCAxKSwgZygpOwogICAgfSwgMSkpIDogZygpOwogIH0KICBmdW5jdGlvbiBpQSgpIHsKICAgIGlmIChBLnByZUluaXQpCiAgICAgIGZvciAodHlwZW9mIEEucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChBLnByZUluaXQgPSBbQS5wcmVJbml0XSk7IEEucHJlSW5pdC5sZW5ndGggPiAwOyApCiAgICAgICAgQS5wcmVJbml0LnNoaWZ0KCkoKTsKICB9CiAgcmV0dXJuIGlBKCksIHEoKSwgZSA9IEEsIGU7Cn07CmxldCBJOwphc3luYyBmdW5jdGlvbiB0QSgpIHsKICBpZiAoSSA9IGF3YWl0IG9BKCksICFJIHx8ICFJLkhFQVBGMzIgfHwgIUkuX3BhY2spCiAgICB0aHJvdyBuZXcgRXJyb3IoIldBU00gbW9kdWxlIGZhaWxlZCB0byBpbml0aWFsaXplIHByb3Blcmx5Iik7Cn0KbGV0IHQgPSAwOwpjb25zdCBsID0gbmV3IEFycmF5KCk7CmxldCBLID0gITEsIHAgPSAhMSwgWSwgUiwgRywgdSwgZCwgTSwgUywgTCwgSjsKY29uc3QgZUEgPSBhc3luYyAoQykgPT4gewogIGZvciAoOyBwOyApCiAgICBhd2FpdCBuZXcgUHJvbWlzZSgoSCkgPT4gc2V0VGltZW91dChILCAwKSk7CiAgSSB8fCAocCA9ICEwLCBhd2FpdCB0QSgpLCBwID0gITEpOwogIGNvbnN0IGUgPSBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2cyKEMudmVydGV4Q291bnQpKSk7CiAgZSA+IHQgJiYgKHQgPiAwICYmIChJLl9mcmVlKFkpLCBJLl9mcmVlKFIpLCBJLl9mcmVlKEcpLCBJLl9mcmVlKHUpLCBJLl9mcmVlKGQpLCBJLl9mcmVlKE0pLCBJLl9mcmVlKFMpLCBJLl9mcmVlKEwpLCBJLl9mcmVlKEopKSwgdCA9IGUsIFkgPSBJLl9tYWxsb2MoMyAqIHQgKiA0KSwgUiA9IEkuX21hbGxvYyg0ICogdCAqIDQpLCBHID0gSS5fbWFsbG9jKDMgKiB0ICogNCksIHUgPSBJLl9tYWxsb2MoNCAqIHQpLCBkID0gSS5fbWFsbG9jKHQpLCBNID0gSS5fbWFsbG9jKDggKiB0ICogNCksIFMgPSBJLl9tYWxsb2MoMyAqIHQgKiA0KSwgTCA9IEkuX21hbGxvYyg0ICogdCAqIDQpLCBKID0gSS5fbWFsbG9jKDMgKiB0ICogNCkpLCBJLkhFQVBGMzIuc2V0KEMucG9zaXRpb25zLCBZIC8gNCksIEkuSEVBUEYzMi5zZXQoQy5yb3RhdGlvbnMsIFIgLyA0KSwgSS5IRUFQRjMyLnNldChDLnNjYWxlcywgRyAvIDQpLCBJLkhFQVBVOC5zZXQoQy5jb2xvcnMsIHUpLCBJLkhFQVBVOC5zZXQoQy5zZWxlY3Rpb24sIGQpLCBJLl9wYWNrKAogICAgQy5zZWxlY3RlZCwKICAgIEMudmVydGV4Q291bnQsCiAgICBZLAogICAgUiwKICAgIEcsCiAgICB1LAogICAgZCwKICAgIE0sCiAgICBTLAogICAgTCwKICAgIEoKICApOwogIGNvbnN0IEEgPSBuZXcgVWludDMyQXJyYXkoSS5IRUFQVTMyLmJ1ZmZlciwgTSwgQy52ZXJ0ZXhDb3VudCAqIDgpLCBoID0gbmV3IFVpbnQzMkFycmF5KEEuc2xpY2UoKS5idWZmZXIpLCBrID0gbmV3IEZsb2F0MzJBcnJheShJLkhFQVBGMzIuYnVmZmVyLCBTLCBDLnZlcnRleENvdW50ICogMyksIHkgPSBuZXcgRmxvYXQzMkFycmF5KGsuc2xpY2UoKS5idWZmZXIpLCBGID0gbmV3IEZsb2F0MzJBcnJheShJLkhFQVBGMzIuYnVmZmVyLCBMLCBDLnZlcnRleENvdW50ICogNCksIEQgPSBuZXcgRmxvYXQzMkFycmF5KEYuc2xpY2UoKS5idWZmZXIpLCBOID0gbmV3IEZsb2F0MzJBcnJheShJLkhFQVBGMzIuYnVmZmVyLCBKLCBDLnZlcnRleENvdW50ICogMyksIFUgPSBuZXcgRmxvYXQzMkFycmF5KE4uc2xpY2UoKS5idWZmZXIpLCBpID0gewogICAgZGF0YTogaCwKICAgIHdvcmxkUG9zaXRpb25zOiB5LAogICAgd29ybGRSb3RhdGlvbnM6IEQsCiAgICB3b3JsZFNjYWxlczogVSwKICAgIG9mZnNldDogQy5vZmZzZXQsCiAgICB2ZXJ0ZXhDb3VudDogQy52ZXJ0ZXhDb3VudCwKICAgIHBvc2l0aW9uczogQy5wb3NpdGlvbnMuYnVmZmVyLAogICAgcm90YXRpb25zOiBDLnJvdGF0aW9ucy5idWZmZXIsCiAgICBzY2FsZXM6IEMuc2NhbGVzLmJ1ZmZlciwKICAgIGNvbG9yczogQy5jb2xvcnMuYnVmZmVyLAogICAgc2VsZWN0aW9uOiBDLnNlbGVjdGlvbi5idWZmZXIKICB9OwogIHNlbGYucG9zdE1lc3NhZ2UoeyByZXNwb25zZTogaSB9LCBbCiAgICBpLmRhdGEuYnVmZmVyLAogICAgaS53b3JsZFBvc2l0aW9ucy5idWZmZXIsCiAgICBpLndvcmxkUm90YXRpb25zLmJ1ZmZlciwKICAgIGkud29ybGRTY2FsZXMuYnVmZmVyLAogICAgaS5wb3NpdGlvbnMsCiAgICBpLnJvdGF0aW9ucywKICAgIGkuc2NhbGVzLAogICAgaS5jb2xvcnMsCiAgICBpLnNlbGVjdGlvbgogIF0pLCBLID0gITE7Cn0sIFogPSAoKSA9PiB7CiAgaWYgKGwubGVuZ3RoICE9PSAwICYmICFLKSB7CiAgICBLID0gITA7CiAgICBjb25zdCBDID0gbC5zaGlmdCgpOwogICAgZUEoQyksIHNldFRpbWVvdXQoKCkgPT4gewogICAgICBLID0gITEsIFooKTsKICAgIH0sIDApOwogIH0KfTsKc2VsZi5vbm1lc3NhZ2UgPSAoQykgPT4gewogIGlmIChDLmRhdGEuc3BsYXQpIHsKICAgIGNvbnN0IGUgPSBDLmRhdGEuc3BsYXQ7CiAgICBmb3IgKGNvbnN0IFtBLCBoXSBvZiBsLmVudHJpZXMoKSkKICAgICAgaWYgKGgub2Zmc2V0ID09PSBlLm9mZnNldCkgewogICAgICAgIGxbQV0gPSBlOwogICAgICAgIHJldHVybjsKICAgICAgfQogICAgbC5wdXNoKGUpLCBaKCk7CiAgfQp9OwovLyMgc291cmNlTWFwcGluZ1VSTD1EYXRhV29ya2VyLUJ6RWRfWmo2LmpzLm1hcAo=",S_=r=>Uint8Array.from(atob(r),e=>e.charCodeAt(0)),su=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",S_(au)],{type:"text/javascript;charset=utf-8"});function x_(r){let e;try{if(e=su&&(self.URL||self.webkitURL).createObjectURL(su),!e)throw"";const t=new Worker(e,{type:"module",name:r==null?void 0:r.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+au,{type:"module",name:r==null?void 0:r.name})}}var w_=function(r={}){var e,t=r,i=typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:Bt&&Bt.tagName.toUpperCase()==="SCRIPT"&&Bt.src||new URL("quyuan.umd.js",document.baseURI).href,n="",a;{try{n=new URL(".",i).href}catch{}a=W=>{var H=new XMLHttpRequest;return H.open("GET",W,!1),H.responseType="arraybuffer",H.send(null),new Uint8Array(H.response)}}console.log.bind(console),console.error.bind(console);var o,s,l;function c(){var W=s.buffer;t.HEAPU8=l=new Uint8Array(W),t.HEAPU32=new Uint32Array(W),t.HEAPF32=new Float32Array(W),new BigInt64Array(W),new BigUint64Array(W)}function h(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)C(t.preRun.shift());w(A)}function f(){K.c()}function p(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)E(t.postRun.shift());w(U)}var m=0,g=null;function y(W){var H;m++,(H=t.monitorRunDependencies)==null||H.call(t,m)}function d(W){var H;if(m--,(H=t.monitorRunDependencies)==null||H.call(t,m),m==0&&g){var ce=g;g=null,ce()}}var u;function v(){return T("AGFzbQEAAAABJgZgAX8Bf2ACfX0Bf2ABfQF/YAF/AGALf39/f39/f39/f38AYAAAAgcBAWEBYQAAAwgHAAECAwAEBQUHAQGCAoCAAgYIAX8BQYCMBAsHFQUBYgIAAWMABwFkAAYBZQAFAWYABAwBAQqqQAdPAQJ/QYAIKAIAIgEgAEEHakF4cSICaiEAAkAgAkEAIAAgAU0bRQRAIAA/AEEQdE0NASAAEAANAQtBhAhBMDYCAEF/DwtBgAggADYCACABCw4AIAAQAyABEANBEHRyC3IBBH8gALwiBEH///8DcSEBAkAgBEEXdkH/AXEiAkUNACACQfAATQRAIAFBgICABHJB8QAgAmt2IQEMAQsgAkGNAUsEQEGA+AEhA0EAIQEMAQsgAkEKdEGAgAdrIQMLIAMgBEEQdkGAgAJxciABQQ12cgvcCwEIfwJAIABFDQAgAEEIayIDIABBBGsoAgAiAkF4cSIAaiEFAkAgAkEBcQ0AIAJBAnFFDQEgAyADKAIAIgRrIgNBmAgoAgBJDQEgACAEaiEAAkACQAJAQZwIKAIAIANHBEAgAygCDCEBIARB/wFNBEAgASADKAIIIgJHDQJBiAhBiAgoAgBBfiAEQQN2d3E2AgAMBQsgAygCGCEHIAEgA0cEQCADKAIIIgIgATYCDCABIAI2AggMBAsgAygCFCICBH8gA0EUagUgAygCECICRQ0DIANBEGoLIQQDQCAEIQYgAiIBQRRqIQQgASgCFCICDQAgAUEQaiEEIAEoAhAiAg0ACyAGQQA2AgAMAwsgBSgCBCICQQNxQQNHDQNBkAggADYCACAFIAJBfnE2AgQgAyAAQQFyNgIEIAUgADYCAA8LIAIgATYCDCABIAI2AggMAgtBACEBCyAHRQ0AAkAgAygCHCIEQQJ0QbgKaiICKAIAIANGBEAgAiABNgIAIAENAUGMCEGMCCgCAEF+IAR3cTYCAAwCCwJAIAMgBygCEEYEQCAHIAE2AhAMAQsgByABNgIUCyABRQ0BCyABIAc2AhggAygCECICBEAgASACNgIQIAIgATYCGAsgAygCFCICRQ0AIAEgAjYCFCACIAE2AhgLIAMgBU8NACAFKAIEIgRBAXFFDQACQAJAAkACQCAEQQJxRQRAQaAIKAIAIAVGBEBBoAggAzYCAEGUCEGUCCgCACAAaiIANgIAIAMgAEEBcjYCBCADQZwIKAIARw0GQZAIQQA2AgBBnAhBADYCAA8LQZwIKAIAIgcgBUYEQEGcCCADNgIAQZAIQZAIKAIAIABqIgA2AgAgAyAAQQFyNgIEIAAgA2ogADYCAA8LIARBeHEgAGohACAFKAIMIQEgBEH/AU0EQCAFKAIIIgIgAUYEQEGICEGICCgCAEF+IARBA3Z3cTYCAAwFCyACIAE2AgwgASACNgIIDAQLIAUoAhghCCABIAVHBEAgBSgCCCICIAE2AgwgASACNgIIDAMLIAUoAhQiAgR/IAVBFGoFIAUoAhAiAkUNAiAFQRBqCyEEA0AgBCEGIAIiAUEUaiEEIAEoAhQiAg0AIAFBEGohBCABKAIQIgINAAsgBkEANgIADAILIAUgBEF+cTYCBCADIABBAXI2AgQgACADaiAANgIADAMLQQAhAQsgCEUNAAJAIAUoAhwiBEECdEG4CmoiAigCACAFRgRAIAIgATYCACABDQFBjAhBjAgoAgBBfiAEd3E2AgAMAgsCQCAFIAgoAhBGBEAgCCABNgIQDAELIAggATYCFAsgAUUNAQsgASAINgIYIAUoAhAiAgRAIAEgAjYCECACIAE2AhgLIAUoAhQiAkUNACABIAI2AhQgAiABNgIYCyADIABBAXI2AgQgACADaiAANgIAIAMgB0cNAEGQCCAANgIADwsgAEH/AU0EQCAAQXhxQbAIaiECAn9BiAgoAgAiBEEBIABBA3Z0IgBxRQRAQYgIIAAgBHI2AgAgAgwBCyACKAIICyEAIAIgAzYCCCAAIAM2AgwgAyACNgIMIAMgADYCCA8LQR8hASAAQf///wdNBEAgAEEmIABBCHZnIgJrdkEBcSACQQF0a0E+aiEBCyADIAE2AhwgA0IANwIQIAFBAnRBuApqIQQCfwJAAn9BjAgoAgAiBkEBIAF0IgJxRQRAQYwIIAIgBnI2AgAgBCADNgIAQRghAUEIDAELIABBGSABQQF2a0EAIAFBH0cbdCEBIAQoAgAhBANAIAQiAigCBEF4cSAARg0CIAFBHXYhBCABQQF0IQEgAiAEQQRxaiIGKAIQIgQNAAsgBiADNgIQQRghASACIQRBCAshACADIgIMAQsgAigCCCIEIAM2AgwgAiADNgIIQRghAEEIIQFBAAshBiABIANqIAQ2AgAgAyACNgIMIAAgA2ogBjYCAEGoCEGoCCgCAEEBayIAQX8gABs2AgALC9EnAQt/IwBBEGsiCiQAAkACQAJAAkACQAJAAkACQAJAAkAgAEH0AU0EQEGICCgCACIEQRAgAEELakH4A3EgAEELSRsiBkEDdiIAdiIBQQNxBEACQCABQX9zQQFxIABqIgJBA3QiAUGwCGoiACABQbgIaigCACIBKAIIIgVGBEBBiAggBEF+IAJ3cTYCAAwBCyAFIAA2AgwgACAFNgIICyABQQhqIQAgASACQQN0IgJBA3I2AgQgASACaiIBIAEoAgRBAXI2AgQMCwsgBkGQCCgCACIITQ0BIAEEQAJAQQIgAHQiAkEAIAJrciABIAB0cWgiAUEDdCIAQbAIaiICIABBuAhqKAIAIgAoAggiBUYEQEGICCAEQX4gAXdxIgQ2AgAMAQsgBSACNgIMIAIgBTYCCAsgACAGQQNyNgIEIAAgBmoiByABQQN0IgEgBmsiBUEBcjYCBCAAIAFqIAU2AgAgCARAIAhBeHFBsAhqIQFBnAgoAgAhAgJ/IARBASAIQQN2dCIDcUUEQEGICCADIARyNgIAIAEMAQsgASgCCAshAyABIAI2AgggAyACNgIMIAIgATYCDCACIAM2AggLIABBCGohAEGcCCAHNgIAQZAIIAU2AgAMCwtBjAgoAgAiC0UNASALaEECdEG4CmooAgAiAigCBEF4cSAGayEDIAIhAQNAAkAgASgCECIARQRAIAEoAhQiAEUNAQsgACgCBEF4cSAGayIBIAMgASADSSIBGyEDIAAgAiABGyECIAAhAQwBCwsgAigCGCEJIAIgAigCDCIARwRAIAIoAggiASAANgIMIAAgATYCCAwKCyACKAIUIgEEfyACQRRqBSACKAIQIgFFDQMgAkEQagshBQNAIAUhByABIgBBFGohBSAAKAIUIgENACAAQRBqIQUgACgCECIBDQALIAdBADYCAAwJC0F/IQYgAEG/f0sNACAAQQtqIgFBeHEhBkGMCCgCACIHRQ0AQR8hCEEAIAZrIQMgAEH0//8HTQRAIAZBJiABQQh2ZyIAa3ZBAXEgAEEBdGtBPmohCAsCQAJAAkAgCEECdEG4CmooAgAiAUUEQEEAIQAMAQtBACEAIAZBGSAIQQF2a0EAIAhBH0cbdCECA0ACQCABKAIEQXhxIAZrIgQgA08NACABIQUgBCIDDQBBACEDIAEhAAwDCyAAIAEoAhQiBCAEIAEgAkEddkEEcWooAhAiAUYbIAAgBBshACACQQF0IQIgAQ0ACwsgACAFckUEQEEAIQVBAiAIdCIAQQAgAGtyIAdxIgBFDQMgAGhBAnRBuApqKAIAIQALIABFDQELA0AgACgCBEF4cSAGayICIANJIQEgAiADIAEbIQMgACAFIAEbIQUgACgCECIBBH8gAQUgACgCFAsiAA0ACwsgBUUNACADQZAIKAIAIAZrTw0AIAUoAhghCCAFIAUoAgwiAEcEQCAFKAIIIgEgADYCDCAAIAE2AggMCAsgBSgCFCIBBH8gBUEUagUgBSgCECIBRQ0DIAVBEGoLIQIDQCACIQQgASIAQRRqIQIgACgCFCIBDQAgAEEQaiECIAAoAhAiAQ0ACyAEQQA2AgAMBwsgBkGQCCgCACIFTQRAQZwIKAIAIQACQCAFIAZrIgFBEE8EQCAAIAZqIgIgAUEBcjYCBCAAIAVqIAE2AgAgACAGQQNyNgIEDAELIAAgBUEDcjYCBCAAIAVqIgEgASgCBEEBcjYCBEEAIQJBACEBC0GQCCABNgIAQZwIIAI2AgAgAEEIaiEADAkLIAZBlAgoAgAiAkkEQEGUCCACIAZrIgE2AgBBoAhBoAgoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAkLQQAhACAGQS9qIgMCf0HgCygCAARAQegLKAIADAELQewLQn83AgBB5AtCgKCAgICABDcCAEHgCyAKQQxqQXBxQdiq1aoFczYCAEH0C0EANgIAQcQLQQA2AgBBgCALIgFqIgRBACABayIHcSIBIAZNDQhBwAsoAgAiBQRAQbgLKAIAIgggAWoiCSAITSAFIAlJcg0JCwJAQcQLLQAAQQRxRQRAAkACQAJAAkBBoAgoAgAiBQRAQcgLIQADQCAAKAIAIgggBU0EQCAFIAggACgCBGpJDQMLIAAoAggiAA0ACwtBABABIgJBf0YNAyABIQRB5AsoAgAiAEEBayIFIAJxBEAgASACayACIAVqQQAgAGtxaiEECyAEIAZNDQNBwAsoAgAiAARAQbgLKAIAIgUgBGoiByAFTSAAIAdJcg0ECyAEEAEiACACRw0BDAULIAQgAmsgB3EiBBABIgIgACgCACAAKAIEakYNASACIQALIABBf0YNASAGQTBqIARNBEAgACECDAQLQegLKAIAIgIgAyAEa2pBACACa3EiAhABQX9GDQEgAiAEaiEEIAAhAgwDCyACQX9HDQILQcQLQcQLKAIAQQRyNgIACyABEAEiAkF/RkEAEAEiAEF/RnIgACACTXINBSAAIAJrIgQgBkEoak0NBQtBuAtBuAsoAgAgBGoiADYCAEG8CygCACAASQRAQbwLIAA2AgALAkBBoAgoAgAiAwRAQcgLIQADQCACIAAoAgAiASAAKAIEIgVqRg0CIAAoAggiAA0ACwwEC0GYCCgCACIAQQAgACACTRtFBEBBmAggAjYCAAtBACEAQcwLIAQ2AgBByAsgAjYCAEGoCEF/NgIAQawIQeALKAIANgIAQdQLQQA2AgADQCAAQQN0IgFBuAhqIAFBsAhqIgU2AgAgAUG8CGogBTYCACAAQQFqIgBBIEcNAAtBlAggBEEoayIAQXggAmtBB3EiAWsiBTYCAEGgCCABIAJqIgE2AgAgASAFQQFyNgIEIAAgAmpBKDYCBEGkCEHwCygCADYCAAwECyACIANNIAEgA0tyDQIgACgCDEEIcQ0CIAAgBCAFajYCBEGgCCADQXggA2tBB3EiAGoiATYCAEGUCEGUCCgCACAEaiICIABrIgA2AgAgASAAQQFyNgIEIAIgA2pBKDYCBEGkCEHwCygCADYCAAwDC0EAIQAMBgtBACEADAQLQZgIKAIAIAJLBEBBmAggAjYCAAsgAiAEaiEFQcgLIQACQANAIAUgACgCACIBRwRAIAAoAggiAA0BDAILCyAALQAMQQhxRQ0DC0HICyEAA0ACQCAAKAIAIgEgA00EQCADIAEgACgCBGoiBUkNAQsgACgCCCEADAELC0GUCCAEQShrIgBBeCACa0EHcSIBayIHNgIAQaAIIAEgAmoiATYCACABIAdBAXI2AgQgACACakEoNgIEQaQIQfALKAIANgIAIAMgBUEnIAVrQQdxakEvayIAIAAgA0EQakkbIgFBGzYCBCABQdALKQIANwIQIAFByAspAgA3AghB0AsgAUEIajYCAEHMCyAENgIAQcgLIAI2AgBB1AtBADYCACABQRhqIQADQCAAQQc2AgQgAEEIaiAAQQRqIQAgBUkNAAsgASADRg0AIAEgASgCBEF+cTYCBCADIAEgA2siAkEBcjYCBCABIAI2AgACfyACQf8BTQRAIAJBeHFBsAhqIQACf0GICCgCACIBQQEgAkEDdnQiAnFFBEBBiAggASACcjYCACAADAELIAAoAggLIQEgACADNgIIIAEgAzYCDEEMIQJBCAwBC0EfIQAgAkH///8HTQRAIAJBJiACQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgAyAANgIcIANCADcCECAAQQJ0QbgKaiEBAkACQEGMCCgCACIFQQEgAHQiBHFFBEBBjAggBCAFcjYCACABIAM2AgAMAQsgAkEZIABBAXZrQQAgAEEfRxt0IQAgASgCACEFA0AgBSIBKAIEQXhxIAJGDQIgAEEddiEFIABBAXQhACABIAVBBHFqIgQoAhAiBQ0ACyAEIAM2AhALIAMgATYCGEEIIQIgAyIBIQBBDAwBCyABKAIIIgAgAzYCDCABIAM2AgggAyAANgIIQQAhAEEYIQJBDAsgA2ogATYCACACIANqIAA2AgALQZQIKAIAIgAgBk0NAEGUCCAAIAZrIgE2AgBBoAhBoAgoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAQLQYQIQTA2AgBBACEADAMLIAAgAjYCACAAIAAoAgQgBGo2AgQgAkF4IAJrQQdxaiIIIAZBA3I2AgQgAUF4IAFrQQdxaiIEIAYgCGoiA2shBwJAQaAIKAIAIARGBEBBoAggAzYCAEGUCEGUCCgCACAHaiIANgIAIAMgAEEBcjYCBAwBC0GcCCgCACAERgRAQZwIIAM2AgBBkAhBkAgoAgAgB2oiADYCACADIABBAXI2AgQgACADaiAANgIADAELIAQoAgQiAEEDcUEBRgRAIABBeHEhCSAEKAIMIQICQCAAQf8BTQRAIAQoAggiASACRgRAQYgIQYgIKAIAQX4gAEEDdndxNgIADAILIAEgAjYCDCACIAE2AggMAQsgBCgCGCEGAkAgAiAERwRAIAQoAggiACACNgIMIAIgADYCCAwBCwJAIAQoAhQiAAR/IARBFGoFIAQoAhAiAEUNASAEQRBqCyEBA0AgASEFIAAiAkEUaiEBIAAoAhQiAA0AIAJBEGohASACKAIQIgANAAsgBUEANgIADAELQQAhAgsgBkUNAAJAIAQoAhwiAEECdEG4CmoiASgCACAERgRAIAEgAjYCACACDQFBjAhBjAgoAgBBfiAAd3E2AgAMAgsCQCAEIAYoAhBGBEAgBiACNgIQDAELIAYgAjYCFAsgAkUNAQsgAiAGNgIYIAQoAhAiAARAIAIgADYCECAAIAI2AhgLIAQoAhQiAEUNACACIAA2AhQgACACNgIYCyAHIAlqIQcgBCAJaiIEKAIEIQALIAQgAEF+cTYCBCADIAdBAXI2AgQgAyAHaiAHNgIAIAdB/wFNBEAgB0F4cUGwCGohAAJ/QYgIKAIAIgFBASAHQQN2dCICcUUEQEGICCABIAJyNgIAIAAMAQsgACgCCAshASAAIAM2AgggASADNgIMIAMgADYCDCADIAE2AggMAQtBHyECIAdB////B00EQCAHQSYgB0EIdmciAGt2QQFxIABBAXRrQT5qIQILIAMgAjYCHCADQgA3AhAgAkECdEG4CmohAAJAAkBBjAgoAgAiAUEBIAJ0IgVxRQRAQYwIIAEgBXI2AgAgACADNgIADAELIAdBGSACQQF2a0EAIAJBH0cbdCECIAAoAgAhAQNAIAEiACgCBEF4cSAHRg0CIAJBHXYhASACQQF0IQIgACABQQRxaiIFKAIQIgENAAsgBSADNgIQCyADIAA2AhggAyADNgIMIAMgAzYCCAwBCyAAKAIIIgEgAzYCDCAAIAM2AgggA0EANgIYIAMgADYCDCADIAE2AggLIAhBCGohAAwCCwJAIAhFDQACQCAFKAIcIgFBAnRBuApqIgIoAgAgBUYEQCACIAA2AgAgAA0BQYwIIAdBfiABd3EiBzYCAAwCCwJAIAUgCCgCEEYEQCAIIAA2AhAMAQsgCCAANgIUCyAARQ0BCyAAIAg2AhggBSgCECIBBEAgACABNgIQIAEgADYCGAsgBSgCFCIBRQ0AIAAgATYCFCABIAA2AhgLAkAgA0EPTQRAIAUgAyAGaiIAQQNyNgIEIAAgBWoiACAAKAIEQQFyNgIEDAELIAUgBkEDcjYCBCAFIAZqIgQgA0EBcjYCBCADIARqIAM2AgAgA0H/AU0EQCADQXhxQbAIaiEAAn9BiAgoAgAiAUEBIANBA3Z0IgJxRQRAQYgIIAEgAnI2AgAgAAwBCyAAKAIICyEBIAAgBDYCCCABIAQ2AgwgBCAANgIMIAQgATYCCAwBC0EfIQAgA0H///8HTQRAIANBJiADQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgBCAANgIcIARCADcCECAAQQJ0QbgKaiEBAkACQCAHQQEgAHQiAnFFBEBBjAggAiAHcjYCACABIAQ2AgAgBCABNgIYDAELIANBGSAAQQF2a0EAIABBH0cbdCEAIAEoAgAhAQNAIAEiAigCBEF4cSADRg0CIABBHXYhASAAQQF0IQAgAiABQQRxaiIHKAIQIgENAAsgByAENgIQIAQgAjYCGAsgBCAENgIMIAQgBDYCCAwBCyACKAIIIgAgBDYCDCACIAQ2AgggBEEANgIYIAQgAjYCDCAEIAA2AggLIAVBCGohAAwBCwJAIAlFDQACQCACKAIcIgFBAnRBuApqIgUoAgAgAkYEQCAFIAA2AgAgAA0BQYwIIAtBfiABd3E2AgAMAgsCQCACIAkoAhBGBEAgCSAANgIQDAELIAkgADYCFAsgAEUNAQsgACAJNgIYIAIoAhAiAQRAIAAgATYCECABIAA2AhgLIAIoAhQiAUUNACAAIAE2AhQgASAANgIYCwJAIANBD00EQCACIAMgBmoiAEEDcjYCBCAAIAJqIgAgACgCBEEBcjYCBAwBCyACIAZBA3I2AgQgAiAGaiIFIANBAXI2AgQgAyAFaiADNgIAIAgEQCAIQXhxQbAIaiEAQZwIKAIAIQECf0EBIAhBA3Z0IgcgBHFFBEBBiAggBCAHcjYCACAADAELIAAoAggLIQQgACABNgIIIAQgATYCDCABIAA2AgwgASAENgIIC0GcCCAFNgIAQZAIIAM2AgALIAJBCGohAAsgCkEQaiQAIAALoQsCC38JfSMAQaABayILJAAgC0EwakEAQST8CwADQCABIA5HBEAgAiAOQQNsIgxBAmpBAnQiD2oqAgAhFyACIAxBAWpBAnQiEGoqAgAhGCAIIAxBAnQiEWogAiARaioCACIZOAIAIAggEGogGDgCACAIIA9qIBc4AgAgByAOQQV0aiINQQA2AgwgDSAXOAIIIA0gGDgCBCANIBk4AgACQCAARQRAIAYgDmotAABFDQELIA1BgICACDYCDAsgDSAFIA5BAnQiDEEBciISai0AAEEIdCAFIAxqLQAAciAFIAxBAnIiE2otAABBEHRyIAUgDEEDciIMai0AAEEYdHI2AhwgCyADIBJBAnQiEmoqAgAiFzgCkAEgCyADIBNBAnQiE2oqAgAiGDgClAEgCyADIAxBAnQiFGoqAgAiGTgCmAEgCyADIA5BBHQiFWoqAgCMIho4ApwBIAtB4ABqIgwgCyoCmAEiFkMAAADAlCAWlCALKgKUASIWQwAAAMCUIBaUQwAAgD+SkjgCACAMIAsqApABIhYgFpIgCyoClAGUIAsqApgBIhYgFpIgCyoCnAGUkzgCBCAMIAsqApABIhYgFpIgCyoCmAGUIAsqApQBIhYgFpIgCyoCnAGUkjgCCCAMIAsqApABIhYgFpIgCyoClAGUIAsqApgBIhYgFpIgCyoCnAGUkjgCDCAMIAsqApgBIhZDAAAAwJQgFpQgCyoCkAEiFkMAAADAlCAWlEMAAIA/kpI4AhAgDCALKgKUASIWIBaSIAsqApgBlCALKgKQASIWIBaSIAsqApwBlJM4AhQgDCALKgKQASIWIBaSIAsqApgBlCALKgKUASIWIBaSIAsqApwBlJM4AhggDCALKgKUASIWIBaSIAsqApgBlCALKgKQASIWIBaSIAsqApwBlJI4AhwgDCALKgKUASIWQwAAAMCUIBaUIAsqApABIhZDAAAAwJQgFpRDAACAP5KSOAIgIAkgFWogFzgCACAJIBJqIBg4AgAgCSATaiAZOAIAIAkgFGogGjgCACALIAQgEWoqAgAiFzgCMCALIAQgEGoqAgAiGDgCQCALIAQgD2oqAgAiGTgCUCAKIBFqIBc4AgAgCiAQaiAYOAIAIAogD2ogGTgCACALIAwqAhggCyoCOJQgDCoCACALKgIwlCAMKgIMIAsqAjSUkpI4AgAgCyAMKgIcIAsqAjiUIAwqAgQgCyoCMJQgDCoCECALKgI0lJKSOAIEIAsgDCoCICALKgI4lCAMKgIIIAsqAjCUIAwqAhQgCyoCNJSSkjgCCCALIAwqAhggCyoCRJQgDCoCACALKgI8lCAMKgIMIAsqAkCUkpI4AgwgCyAMKgIcIAsqAkSUIAwqAgQgCyoCPJQgDCoCECALKgJAlJKSOAIQIAsgDCoCICALKgJElCAMKgIIIAsqAjyUIAwqAhQgCyoCQJSSkjgCFCALIAwqAhggCyoCUJQgDCoCACALKgJIlCAMKgIMIAsqAkyUkpI4AhggCyAMKgIcIAsqAlCUIAwqAgQgCyoCSJQgDCoCECALKgJMlJKSOAIcIAsgDCoCICALKgJQlCAMKgIIIAsqAkiUIAwqAhQgCyoCTJSSkjgCICALKgIgIRcgCyoCCCEYIAsqAhQhGSANIAsqAhgiGiAalCALKgIAIhYgFpQgCyoCDCIbIBuUkpJDAACAQJQgGiALKgIcIhyUIBYgCyoCBCIdlCAbIAsqAhAiHpSSkkMAAIBAlBACNgIQIA0gGiAXlCAWIBiUIBsgGZSSkkMAAIBAlCAcIByUIB0gHZQgHiAelJKSQwAAgECUEAI2AhQgDSAcIBeUIB0gGJQgHiAZlJKSQwAAgECUIBcgF5QgGCAYlCAZIBmUkpJDAACAQJQQAjYCGCAOQQFqIQ4MAQsLIAtBoAFqJAALAgALCwkBAEGBCAsCBgE=")}function S(W){if(ArrayBuffer.isView(W))return W;if(W==u&&o)return new Uint8Array(o);if(a)return a(W);throw'sync fetching of the wasm failed: you can preload it to Module["wasmBinary"] manually, or emcc.py will do that for you when generating HTML (but not JS)'}function _(W,H){var ce,se=S(W);ce=new WebAssembly.Module(se);var ue=new WebAssembly.Instance(ce,H);return[ue,ce]}function b(){return{a:P}}function x(){function W(se,ue){return K=se.exports,s=K.b,c(),I(K),d(),K}y();var H=b();if(t.instantiateWasm)return new Promise((se,ue)=>{t.instantiateWasm(H,(me,oe)=>{se(W(me))})});u??(u=v());var ce=_(u,H);return W(ce[0])}for(var w=W=>{for(;W.length>0;)W.shift()(t)},U=[],E=W=>U.push(W),A=[],C=W=>A.push(W),T=W=>{for(var H,ce,se=0,ue=0,me=W.length,oe=new Uint8Array((me*3>>2)-(W[me-2]=="=")-(W[me-1]=="="));se<me;se+=4,ue+=3)H=k[W.charCodeAt(se+1)],ce=k[W.charCodeAt(se+2)],oe[ue]=k[W.charCodeAt(se)]<<2|H>>4,oe[ue+1]=H<<4|ce>>2,oe[ue+2]=ce<<6|k[W.charCodeAt(se+3)];return oe},R=()=>2147483648,B=(W,H)=>Math.ceil(W/H)*H,L=W=>{var H=s.buffer,ce=(W-H.byteLength+65535)/65536|0;try{return s.grow(ce),c(),1}catch{}},N=W=>{var H=l.length;W>>>=0;var ce=R();if(W>ce)return!1;for(var se=1;se<=4;se*=2){var ue=H*(1+.2/se);ue=Math.min(ue,W+100663296);var me=Math.min(ce,B(Math.max(W,ue),65536)),oe=L(me);if(oe)return!0}return!1},k=new Uint8Array(123),M=25;M>=0;--M)k[48+M]=52+M,k[65+M]=M,k[97+M]=26+M;k[43]=62,k[47]=63,t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&t.printErr,t.wasmBinary&&(o=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram;function I(W){t._pack=W.d,t._malloc=W.e,t._free=W.f}var P={a:N},K=x();function $(){if(m>0){g=$;return}if(h(),m>0){g=$;return}function W(){var H;t.calledRun=!0,f(),(H=t.onRuntimeInitialized)==null||H.call(t),p()}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),W()},1)):W()}function he(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()()}return he(),$(),e=t,e};const b_=()=>new x_;class rl{constructor(e){this.dataChanged=!1,this.transformsChanged=!1,this.colorTransformsChanged=!1,this._updating=new Set,this._dirty=new Set;let t=0,i=0;this._splatIndices=new Map,this._offsets=new Map;const n=new Map;for(const p of e.objects)p instanceof Jt&&(this._splatIndices.set(p,i),this._offsets.set(p,t),n.set(t,p),t+=p.data.vertexCount,i++);this._vertexCount=t,this._width=2048,this._height=Math.ceil(2*this.vertexCount/this.width),this._data=new Uint32Array(this.width*this.height*4),this._transformsWidth=5,this._transformsHeight=n.size,this._transforms=new Float32Array(this._transformsWidth*this._transformsHeight*4),this._transformIndicesWidth=1024,this._transformIndicesHeight=Math.ceil(this.vertexCount/this._transformIndicesWidth),this._transformIndices=new Uint32Array(this._transformIndicesWidth*this._transformIndicesHeight),this._colorTransformsWidth=4,this._colorTransformsHeight=64,this._colorTransforms=new Float32Array(this._colorTransformsWidth*this._colorTransformsHeight*4),this._colorTransforms.fill(0),this._colorTransforms[0]=1,this._colorTransforms[5]=1,this._colorTransforms[10]=1,this._colorTransforms[15]=1,this._colorTransformIndicesWidth=1024,this._colorTransformIndicesHeight=Math.ceil(this.vertexCount/this._colorTransformIndicesWidth),this._colorTransformIndices=new Uint32Array(this._colorTransformIndicesWidth*this._colorTransformIndicesHeight),this.colorTransformIndices.fill(0),this._positions=new Float32Array(this.vertexCount*3),this._rotations=new Float32Array(this.vertexCount*4),this._scales=new Float32Array(this.vertexCount*3),this._worker=b_();const a=p=>{const m=this._splatIndices.get(p);this._transforms.set(p.transform.buffer,m*20),this._transforms[m*20+16]=p.selected?1:0,p.positionChanged=!1,p.rotationChanged=!1,p.scaleChanged=!1,p.selectedChanged=!1,this.transformsChanged=!0},o=()=>{let p=!1;for(const y of this._splatIndices.keys())if(y.colorTransformChanged){p=!0;break}if(!p)return;const m=[new Nt];this._colorTransformIndices.fill(0);let g=1;for(const y of this._splatIndices.keys()){const d=this._offsets.get(y);for(const u of y.colorTransforms)m.includes(u)||(m.push(u),g++);for(const u of y.colorTransformsMap.keys()){const v=y.colorTransformsMap.get(u);this._colorTransformIndices[u+d]=v+g-1}y.colorTransformChanged=!1}for(let y=0;y<m.length;y++){const d=m[y];this._colorTransforms.set(d.buffer,y*16)}this.colorTransformsChanged=!0};this._worker.onmessage=p=>{if(p.data.response){const m=p.data.response,g=n.get(m.offset);a(g),o();const y=this._splatIndices.get(g);for(let d=0;d<g.data.vertexCount;d++)this._transformIndices[m.offset+d]=y;this._data.set(m.data,m.offset*8),g.data.reattach(m.positions,m.rotations,m.scales,m.colors,m.selection),this._positions.set(m.worldPositions,m.offset*3),this._rotations.set(m.worldRotations,m.offset*4),this._scales.set(m.worldScales,m.offset*3),this._updating.delete(g),g.selectedChanged=!1,this.dataChanged=!0}};let s;async function l(){s=await w_()}l();async function c(){for(;!s;)await new Promise(p=>setTimeout(p,0))}const h=p=>{if(!s){c().then(()=>{h(p)});return}a(p);const m=s._malloc(3*p.data.vertexCount*4),g=s._malloc(4*p.data.vertexCount*4),y=s._malloc(3*p.data.vertexCount*4),d=s._malloc(4*p.data.vertexCount),u=s._malloc(p.data.vertexCount),v=s._malloc(8*p.data.vertexCount*4),S=s._malloc(3*p.data.vertexCount*4),_=s._malloc(4*p.data.vertexCount*4),b=s._malloc(3*p.data.vertexCount*4);s.HEAPF32.set(p.data.positions,m/4),s.HEAPF32.set(p.data.rotations,g/4),s.HEAPF32.set(p.data.scales,y/4),s.HEAPU8.set(p.data.colors,d),s.HEAPU8.set(p.data.selection,u),s._pack(p.selected,p.data.vertexCount,m,g,y,d,u,v,S,_,b);const x=new Uint32Array(s.HEAPU32.buffer,v,p.data.vertexCount*8),w=new Float32Array(s.HEAPF32.buffer,S,p.data.vertexCount*3),U=new Float32Array(s.HEAPF32.buffer,_,p.data.vertexCount*4),E=new Float32Array(s.HEAPF32.buffer,b,p.data.vertexCount*3),A=this._splatIndices.get(p),C=this._offsets.get(p);for(let T=0;T<p.data.vertexCount;T++)this._transformIndices[C+T]=A;this._data.set(x,C*8),this._positions.set(w,C*3),this._rotations.set(U,C*4),this._scales.set(E,C*3),s._free(m),s._free(g),s._free(y),s._free(d),s._free(u),s._free(v),s._free(S),s._free(_),s._free(b),this.dataChanged=!0,this.colorTransformsChanged=!0},f=p=>{if((p.positionChanged||p.rotationChanged||p.scaleChanged||p.selectedChanged)&&a(p),p.colorTransformChanged&&o(),!p.data.changed||p.data.detached)return;const m={position:new Float32Array(p.position.flat()),rotation:new Float32Array(p.rotation.flat()),scale:new Float32Array(p.scale.flat()),selected:p.selected,vertexCount:p.data.vertexCount,positions:p.data.positions,rotations:p.data.rotations,scales:p.data.scales,colors:p.data.colors,selection:p.data.selection,offset:this._offsets.get(p)};this._worker.postMessage({splat:m},[m.position.buffer,m.rotation.buffer,m.scale.buffer,m.positions.buffer,m.rotations.buffer,m.scales.buffer,m.colors.buffer,m.selection.buffer]),this._updating.add(p),p.data.detached=!0};this.getSplat=p=>{let m=null;for(const[g,y]of this._offsets)if(p>=y)m=g;else break;return m},this.getLocalIndex=(p,m)=>{const g=this._offsets.get(p);return m-g},this.markDirty=p=>{this._dirty.add(p)},this.rebuild=()=>{for(const p of this._dirty)f(p);this._dirty.clear()},this.dispose=()=>{this._worker.terminate()};for(const p of this._splatIndices.keys())h(p);o()}get offsets(){return this._offsets}get data(){return this._data}get width(){return this._width}get height(){return this._height}get transforms(){return this._transforms}get transformsWidth(){return this._transformsWidth}get transformsHeight(){return this._transformsHeight}get transformIndices(){return this._transformIndices}get transformIndicesWidth(){return this._transformIndicesWidth}get transformIndicesHeight(){return this._transformIndicesHeight}get colorTransforms(){return this._colorTransforms}get colorTransformsWidth(){return this._colorTransformsWidth}get colorTransformsHeight(){return this._colorTransformsHeight}get colorTransformIndices(){return this._colorTransformIndices}get colorTransformIndicesWidth(){return this._colorTransformIndicesWidth}get colorTransformIndicesHeight(){return this._colorTransformIndicesHeight}get positions(){return this._positions}get rotations(){return this._rotations}get scales(){return this._scales}get vertexCount(){return this._vertexCount}get needsRebuild(){return this._dirty.size>0}get updating(){return this._updating.size>0}}class nl{constructor(e=0,t=0,i=0,n=255){this.r=e,this.g=t,this.b=i,this.a=n}flat(){return[this.r,this.g,this.b,this.a]}flatNorm(){return[this.r/255,this.g/255,this.b/255,this.a/255]}toHexString(){return"#"+this.flat().map(e=>e.toString(16).padStart(2,"0")).join("")}toString(){return`[${this.flat().join(", ")}]`}}const C_=()=>new E_,U_=`#version 300 es
precision highp float;
precision highp int;

uniform highp usampler2D u_texture;
uniform highp sampler2D u_transforms;
uniform highp usampler2D u_transformIndices;
uniform highp sampler2D u_colorTransforms;
uniform highp usampler2D u_colorTransformIndices;
uniform mat4 projection, view;
uniform vec2 focal;
uniform vec2 viewport;

uniform bool useDepthFade;
uniform float depthFade;

in vec2 position;
in int index;

out vec4 vColor;
out vec2 vPosition;
out float vSize;
out float vSelected;

void main () {
    uvec4 cen = texelFetch(u_texture, ivec2((uint(index) & 0x3ffu) << 1, uint(index) >> 10), 0);
    float selected = float((cen.w >> 24) & 0xffu);

    uint transformIndex = texelFetch(u_transformIndices, ivec2(uint(index) & 0x3ffu, uint(index) >> 10), 0).x;
    mat4 transform = mat4(
        texelFetch(u_transforms, ivec2(0, transformIndex), 0),
        texelFetch(u_transforms, ivec2(1, transformIndex), 0),
        texelFetch(u_transforms, ivec2(2, transformIndex), 0),
        texelFetch(u_transforms, ivec2(3, transformIndex), 0)
    );

    if (selected < 0.5) {
        selected = texelFetch(u_transforms, ivec2(4, transformIndex), 0).x;
    }

    mat4 viewTransform = view * transform;

    vec4 cam = viewTransform * vec4(uintBitsToFloat(cen.xyz), 1);
    vec4 pos2d = projection * cam;

    float clip = 1.2 * pos2d.w;
    if (pos2d.z < -pos2d.w || pos2d.z > pos2d.w || pos2d.x < -clip || pos2d.x > clip || pos2d.y < -clip || pos2d.y > clip) {
        gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
        return;
    }

    uvec4 cov = texelFetch(u_texture, ivec2(((uint(index) & 0x3ffu) << 1) | 1u, uint(index) >> 10), 0);
    vec2 u1 = unpackHalf2x16(cov.x), u2 = unpackHalf2x16(cov.y), u3 = unpackHalf2x16(cov.z);
    mat3 Vrk = mat3(u1.x, u1.y, u2.x, u1.y, u2.y, u3.x, u2.x, u3.x, u3.y);

    mat3 J = mat3(
        focal.x / cam.z, 0., -(focal.x * cam.x) / (cam.z * cam.z), 
        0., -focal.y / cam.z, (focal.y * cam.y) / (cam.z * cam.z), 
        0., 0., 0.
    );

    mat3 T = transpose(mat3(viewTransform)) * J;
    mat3 cov2d = transpose(T) * Vrk * T;

    //ref: https://github.com/graphdeco-inria/diff-gaussian-rasterization/blob/main/cuda_rasterizer/forward.cu#L110-L111
    cov2d[0][0] += 0.3;
    cov2d[1][1] += 0.3;

    float mid = (cov2d[0][0] + cov2d[1][1]) / 2.0;
    float radius = length(vec2((cov2d[0][0] - cov2d[1][1]) / 2.0, cov2d[0][1]));
    float lambda1 = mid + radius, lambda2 = mid - radius;

    if (lambda2 < 0.0) return;
    vec2 diagonalVector = normalize(vec2(cov2d[0][1], lambda1 - cov2d[0][0]));
    vec2 majorAxis = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
    vec2 minorAxis = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);

    uint colorTransformIndex = texelFetch(u_colorTransformIndices, ivec2(uint(index) & 0x3ffu, uint(index) >> 10), 0).x;
    mat4 colorTransform = mat4(
        texelFetch(u_colorTransforms, ivec2(0, colorTransformIndex), 0),
        texelFetch(u_colorTransforms, ivec2(1, colorTransformIndex), 0),
        texelFetch(u_colorTransforms, ivec2(2, colorTransformIndex), 0),
        texelFetch(u_colorTransforms, ivec2(3, colorTransformIndex), 0)
    );

    vec4 color = vec4((cov.w) & 0xffu, (cov.w >> 8) & 0xffu, (cov.w >> 16) & 0xffu, (cov.w >> 24) & 0xffu) / 255.0;
    vColor = colorTransform * color;

    vPosition = position;
    vSize = length(majorAxis);
    vSelected = selected;

    float scalingFactor = 1.0;

    if (useDepthFade) {
        float depthNorm = (pos2d.z / pos2d.w + 1.0) / 2.0;
        float near = 0.1; float far = 100.0;
        float normalizedDepth = (2.0 * near) / (far + near - depthNorm * (far - near));
        float start = max(normalizedDepth - 0.1, 0.0);
        float end = min(normalizedDepth + 0.1, 1.0);
        scalingFactor = clamp((depthFade - start) / (end - start), 0.0, 1.0);
    }

    vec2 vCenter = vec2(pos2d) / pos2d.w;
    gl_Position = vec4(
        vCenter 
        + position.x * majorAxis * scalingFactor / viewport
        + position.y * minorAxis * scalingFactor / viewport, 0.0, 1.0);
}
`,T_=`#version 300 es
precision highp float;

uniform float outlineThickness;
uniform vec4 outlineColor;

in vec4 vColor;
in vec2 vPosition;
in float vSize;
in float vSelected;

out vec4 fragColor;

void main () {
    float A = -dot(vPosition, vPosition);

    if (A < -4.0) discard;

    if (vSelected < 0.5) {
        float B = exp(A) * vColor.a;
        fragColor = vec4(B * vColor.rgb, B);
        return;
    }

    float outlineThreshold = -4.0 + (outlineThickness / vSize);

    if (A < outlineThreshold) {
        fragColor = outlineColor;
    } 
    else {
        float B = exp(A) * vColor.a;
        fragColor = vec4(B * vColor.rgb, B);
    }
}
`;class al extends il{constructor(e,t){super(e,t),this._outlineThickness=10,this._outlineColor=new nl(255,165,0,255),this._renderData=null,this._depthIndex=new Uint32Array,this._splatTexture=null,this._worker=null;const i=e.canvas,n=e.gl;let a,o,s,l,c,h,f,p,m,g,y,d,u,v,S,_,b,x,w;this._resize=()=>{this._camera&&(this._camera.data.setSize(i.width,i.height),this._camera.update(),a=n.getUniformLocation(this.program,"projection"),n.uniformMatrix4fv(a,!1,this._camera.data.projectionMatrix.buffer),o=n.getUniformLocation(this.program,"viewport"),n.uniform2fv(o,new Float32Array([i.width,i.height])))};const U=()=>{this._worker=C_(),this._worker.onmessage=R=>{if(R.data.depthIndex){const{depthIndex:B}=R.data;this._depthIndex=B,n.bindBuffer(n.ARRAY_BUFFER,w),n.bufferData(n.ARRAY_BUFFER,B,n.STATIC_DRAW)}}};this._initialize=()=>{if(!this._scene||!this._camera){console.error("Cannot render without scene and camera");return}this._resize(),this._scene.addEventListener("objectAdded",E),this._scene.addEventListener("objectRemoved",A);for(const R of this._scene.objects)R instanceof Jt&&R.addEventListener("objectChanged",C);this._renderData=new rl(this._scene),s=n.getUniformLocation(this.program,"focal"),n.uniform2fv(s,new Float32Array([this._camera.data.fx,this._camera.data.fy])),l=n.getUniformLocation(this.program,"view"),n.uniformMatrix4fv(l,!1,this._camera.data.viewMatrix.buffer),g=n.getUniformLocation(this.program,"outlineThickness"),n.uniform1f(g,this.outlineThickness),y=n.getUniformLocation(this.program,"outlineColor"),n.uniform4fv(y,new Float32Array(this.outlineColor.flatNorm())),this._splatTexture=n.createTexture(),c=n.getUniformLocation(this.program,"u_texture"),n.uniform1i(c,0),v=n.createTexture(),h=n.getUniformLocation(this.program,"u_transforms"),n.uniform1i(h,1),S=n.createTexture(),f=n.getUniformLocation(this.program,"u_transformIndices"),n.uniform1i(f,2),_=n.createTexture(),p=n.getUniformLocation(this.program,"u_colorTransforms"),n.uniform1i(p,3),b=n.createTexture(),m=n.getUniformLocation(this.program,"u_colorTransformIndices"),n.uniform1i(m,4),x=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,x),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-2,-2,2,-2,2,2,-2,2]),n.STATIC_DRAW),d=n.getAttribLocation(this.program,"position"),n.enableVertexAttribArray(d),n.vertexAttribPointer(d,2,n.FLOAT,!1,0,0),w=n.createBuffer(),u=n.getAttribLocation(this.program,"index"),n.enableVertexAttribArray(u),n.bindBuffer(n.ARRAY_BUFFER,w),U()};const E=R=>{const B=R;B.object instanceof Jt&&B.object.addEventListener("objectChanged",C),T()},A=R=>{const B=R;B.object instanceof Jt&&B.object.removeEventListener("objectChanged",C),T()},C=R=>{const B=R;B.object instanceof Jt&&this._renderData&&this._renderData.markDirty(B.object)},T=()=>{var R,B;(R=this._renderData)==null||R.dispose(),this._renderData=new rl(this._scene),(B=this._worker)==null||B.terminate(),U()};this._render=()=>{var R,B;if(!this._scene||!this._camera||!this.renderData){console.error("Cannot render without scene and camera");return}if(this.renderData.needsRebuild&&this.renderData.rebuild(),this.renderData.dataChanged||this.renderData.transformsChanged||this.renderData.colorTransformsChanged){this.renderData.dataChanged&&(n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.splatTexture),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32UI,this.renderData.width,this.renderData.height,0,n.RGBA_INTEGER,n.UNSIGNED_INT,this.renderData.data)),this.renderData.transformsChanged&&(n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,v),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,this.renderData.transformsWidth,this.renderData.transformsHeight,0,n.RGBA,n.FLOAT,this.renderData.transforms),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,S),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.R32UI,this.renderData.transformIndicesWidth,this.renderData.transformIndicesHeight,0,n.RED_INTEGER,n.UNSIGNED_INT,this.renderData.transformIndices)),this.renderData.colorTransformsChanged&&(n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,_),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32F,this.renderData.colorTransformsWidth,this.renderData.colorTransformsHeight,0,n.RGBA,n.FLOAT,this.renderData.colorTransforms),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,b),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.R32UI,this.renderData.colorTransformIndicesWidth,this.renderData.colorTransformIndicesHeight,0,n.RED_INTEGER,n.UNSIGNED_INT,this.renderData.colorTransformIndices));const L=new Float32Array(this.renderData.positions.slice().buffer),N=new Float32Array(this.renderData.transforms.slice().buffer),k=new Uint32Array(this.renderData.transformIndices.slice().buffer);(R=this._worker)==null||R.postMessage({sortData:{positions:L,transforms:N,transformIndices:k,vertexCount:this.renderData.vertexCount}},[L.buffer,N.buffer,k.buffer]),this.renderData.dataChanged=!1,this.renderData.transformsChanged=!1,this.renderData.colorTransformsChanged=!1}this._camera.update(),(B=this._worker)==null||B.postMessage({viewProj:this._camera.data.viewProj.buffer}),n.viewport(0,0,i.width,i.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.disable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE_MINUS_DST_ALPHA,n.ONE,n.ONE_MINUS_DST_ALPHA,n.ONE),n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.uniformMatrix4fv(a,!1,this._camera.data.projectionMatrix.buffer),n.uniformMatrix4fv(l,!1,this._camera.data.viewMatrix.buffer),n.bindBuffer(n.ARRAY_BUFFER,x),n.vertexAttribPointer(d,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,w),n.bufferData(n.ARRAY_BUFFER,this.depthIndex,n.STATIC_DRAW),n.vertexAttribIPointer(u,1,n.INT,0,0),n.vertexAttribDivisor(u,1),n.drawArraysInstanced(n.TRIANGLE_FAN,0,4,this.depthIndex.length)},this._dispose=()=>{var R;if(!this._scene||!this._camera||!this.renderData){console.error("Cannot dispose without scene and camera");return}this._scene.removeEventListener("objectAdded",E),this._scene.removeEventListener("objectRemoved",A);for(const B of this._scene.objects)B instanceof Jt&&B.removeEventListener("objectChanged",C);(R=this._worker)==null||R.terminate(),this.renderData.dispose(),n.deleteTexture(this.splatTexture),n.deleteTexture(v),n.deleteTexture(S),n.deleteBuffer(w),n.deleteBuffer(x)},this._setOutlineThickness=R=>{this._outlineThickness=R,this._initialized&&n.uniform1f(g,R)},this._setOutlineColor=R=>{this._outlineColor=R,this._initialized&&n.uniform4fv(y,new Float32Array(R.flatNorm()))}}get renderData(){return this._renderData}get depthIndex(){return this._depthIndex}get splatTexture(){return this._splatTexture}get outlineThickness(){return this._outlineThickness}set outlineThickness(e){this._setOutlineThickness(e)}get outlineColor(){return this._outlineColor}set outlineColor(e){this._setOutlineColor(e)}get worker(){return this._worker}_getVertexSource(){return U_}_getFragmentSource(){return T_}}class ou{constructor(e=1){let t=0,i=!1,n,a,o,s;this.initialize=l=>{if(!(l instanceof al))throw new Error("FadeInPass requires a RenderProgram");t=l.started?1:0,i=!0,n=l,a=l.renderer.gl,o=a.getUniformLocation(n.program,"useDepthFade"),a.uniform1i(o,1),s=a.getUniformLocation(n.program,"depthFade"),a.uniform1f(s,t)},this.render=()=>{var l;!i||(l=n.renderData)!=null&&l.updating||(a.useProgram(n.program),t=Math.min(t+e*.01,1),t>=1&&(i=!1,a.uniform1i(o,0)),a.uniform1f(s,t))}}dispose(){}}class M_{constructor(e=null,t=null){this._backgroundColor=new nl;const i=e||document.createElement("canvas");e||(i.style.display="block",i.style.boxSizing="border-box",i.style.width="100%",i.style.height="100%",i.style.margin="0",i.style.padding="0",document.body.appendChild(i)),i.style.background=this._backgroundColor.toHexString(),this._canvas=i,this._gl=i.getContext("webgl2",{antialias:!1});const n=t||[];t||n.push(new ou),this._renderProgram=new al(this,n);const a=[this._renderProgram];this.resize=()=>{const o=i.clientWidth,s=i.clientHeight;(i.width!==o||i.height!==s)&&this.setSize(o,s)},this.setSize=(o,s)=>{i.width=o,i.height=s,this._gl.viewport(0,0,i.width,i.height);for(const l of a)l.resize()},this.render=(o,s)=>{for(const l of a)l.render(o,s)},this.dispose=()=>{for(const o of a)o.dispose()},this.addProgram=o=>{a.push(o)},this.removeProgram=o=>{const s=a.indexOf(o);if(s<0)throw new Error("Program not found");a.splice(s,1)},this.resize()}get canvas(){return this._canvas}get gl(){return this._gl}get renderProgram(){return this._renderProgram}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=e,this._canvas.style.background=e.toHexString()}}class F_{constructor(e,t,i=.5,n=.5,a=5,o=!0,s=new Fe){this.minAngle=-90,this.maxAngle=90,this.minZoom=.1,this.maxZoom=30,this.orbitSpeed=1,this.panSpeed=1,this.zoomSpeed=1,this.dampening=.12,this.setCameraTarget=()=>{};let l=s.clone(),c=l.clone(),h=i,f=n,p=a,m=!1,g=!1,y=0,d=0,u=0;const v={};let S=!1;const _=()=>{if(S)return;const k=e.rotation.toEuler();h=-k.y,f=-k.x;const M=e.position.x-p*Math.sin(h)*Math.cos(f),I=e.position.y+p*Math.sin(f),P=e.position.z+p*Math.cos(h)*Math.cos(f);c=new Fe(M,I,P)};e.addEventListener("objectChanged",_),this.setCameraTarget=k=>{const M=k.x-e.position.x,I=k.y-e.position.y,P=k.z-e.position.z;p=Math.sqrt(M*M+I*I+P*P),f=Math.atan2(I,Math.sqrt(M*M+P*P)),h=-Math.atan2(M,P),c=new Fe(k.x,k.y,k.z)};const b=()=>.1+.9*(p-this.minZoom)/(this.maxZoom-this.minZoom),x=k=>{v[k.code]=!0,k.code==="ArrowUp"&&(v.KeyW=!0),k.code==="ArrowDown"&&(v.KeyS=!0),k.code==="ArrowLeft"&&(v.KeyA=!0),k.code==="ArrowRight"&&(v.KeyD=!0)},w=k=>{v[k.code]=!1,k.code==="ArrowUp"&&(v.KeyW=!1),k.code==="ArrowDown"&&(v.KeyS=!1),k.code==="ArrowLeft"&&(v.KeyA=!1),k.code==="ArrowRight"&&(v.KeyD=!1)},U=k=>{N(k),m=!0,g=k.button===2,d=k.clientX,u=k.clientY,window.addEventListener("mouseup",E)},E=k=>{N(k),m=!1,g=!1,window.removeEventListener("mouseup",E)},A=k=>{if(N(k),!m||!e)return;const M=k.clientX-d,I=k.clientY-u;if(g){const P=b(),K=-M*this.panSpeed*.01*P,$=-I*this.panSpeed*.01*P,he=kt.RotationFromQuaternion(e.rotation).buffer,W=new Fe(he[0],he[3],he[6]),H=new Fe(he[1],he[4],he[7]);c=c.add(W.multiply(K)),c=c.add(H.multiply($))}else h-=M*this.orbitSpeed*.003,f+=I*this.orbitSpeed*.003,f=Math.min(Math.max(f,this.minAngle*Math.PI/180),this.maxAngle*Math.PI/180);d=k.clientX,u=k.clientY},C=k=>{N(k);const M=b();p+=k.deltaY*this.zoomSpeed*.025*M,p=Math.min(Math.max(p,this.minZoom),this.maxZoom)},T=k=>{if(N(k),k.touches.length===1)m=!0,g=!1,d=k.touches[0].clientX,u=k.touches[0].clientY,y=0;else if(k.touches.length===2){m=!0,g=!0,d=(k.touches[0].clientX+k.touches[1].clientX)/2,u=(k.touches[0].clientY+k.touches[1].clientY)/2;const M=k.touches[0].clientX-k.touches[1].clientX,I=k.touches[0].clientY-k.touches[1].clientY;y=Math.sqrt(M*M+I*I)}},R=k=>{N(k),m=!1,g=!1},B=k=>{if(N(k),!(!m||!e))if(g){const M=b(),I=k.touches[0].clientX-k.touches[1].clientX,P=k.touches[0].clientY-k.touches[1].clientY,K=Math.sqrt(I*I+P*P),$=y-K;p+=$*this.zoomSpeed*.1*M,p=Math.min(Math.max(p,this.minZoom),this.maxZoom),y=K;const he=(k.touches[0].clientX+k.touches[1].clientX)/2,W=(k.touches[0].clientY+k.touches[1].clientY)/2,H=he-d,ce=W-u,se=kt.RotationFromQuaternion(e.rotation).buffer,ue=new Fe(se[0],se[3],se[6]),me=new Fe(se[1],se[4],se[7]);c=c.add(ue.multiply(-H*this.panSpeed*.025*M)),c=c.add(me.multiply(-ce*this.panSpeed*.025*M)),d=he,u=W}else{const M=k.touches[0].clientX-d,I=k.touches[0].clientY-u;h-=M*this.orbitSpeed*.003,f+=I*this.orbitSpeed*.003,f=Math.min(Math.max(f,this.minAngle*Math.PI/180),this.maxAngle*Math.PI/180),d=k.touches[0].clientX,u=k.touches[0].clientY}},L=(k,M,I)=>(1-I)*k+I*M;this.update=()=>{S=!0,i=L(i,h,this.dampening),n=L(n,f,this.dampening),a=L(a,p,this.dampening),l=l.lerp(c,this.dampening);const k=l.x+a*Math.sin(i)*Math.cos(n),M=l.y-a*Math.sin(n),I=l.z-a*Math.cos(i)*Math.cos(n);e.position=new Fe(k,M,I);const P=l.subtract(e.position).normalize(),K=Math.asin(-P.y),$=Math.atan2(P.x,P.z);e.rotation=dt.FromEuler(new Fe(K,$,0));const he=.025,W=.01,H=kt.RotationFromQuaternion(e.rotation).buffer,ce=new Fe(-H[2],-H[5],-H[8]),se=new Fe(H[0],H[3],H[6]);v.KeyS&&(c=c.add(ce.multiply(he))),v.KeyW&&(c=c.subtract(ce.multiply(he))),v.KeyA&&(c=c.subtract(se.multiply(he))),v.KeyD&&(c=c.add(se.multiply(he))),v.KeyE&&(h+=W),v.KeyQ&&(h-=W),v.KeyR&&(f+=W),v.KeyF&&(f-=W),S=!1};const N=k=>{k.preventDefault(),k.stopPropagation()};this.dispose=()=>{t.removeEventListener("dragenter",N),t.removeEventListener("dragover",N),t.removeEventListener("dragleave",N),t.removeEventListener("contextmenu",N),t.removeEventListener("mousedown",U),t.removeEventListener("mousemove",A),t.removeEventListener("wheel",C),t.removeEventListener("touchstart",T),t.removeEventListener("touchend",R),t.removeEventListener("touchmove",B),o&&(window.removeEventListener("keydown",x),window.removeEventListener("keyup",w))},o&&(window.addEventListener("keydown",x),window.addEventListener("keyup",w)),t.addEventListener("dragenter",N),t.addEventListener("dragover",N),t.addEventListener("dragleave",N),t.addEventListener("contextmenu",N),t.addEventListener("mousedown",U),t.addEventListener("mousemove",A),t.addEventListener("wheel",C),t.addEventListener("touchstart",T),t.addEventListener("touchend",R),t.addEventListener("touchmove",B),this.update()}}class R_{constructor(e,t){this.moveSpeed=1.5,this.lookSpeed=.7,this.dampening=.5;const i={};let n=e.rotation.toEuler().x,a=e.rotation.toEuler().y,o=e.position,s=!1;const l=()=>{t.requestPointerLock()},c=()=>{s=document.pointerLockElement===t,s?t.addEventListener("mousemove",h):t.removeEventListener("mousemove",h)},h=g=>{const y=g.movementX,d=g.movementY;a+=y*this.lookSpeed*.001,n-=d*this.lookSpeed*.001,n=Math.max(-Math.PI/2,Math.min(Math.PI/2,n))},f=g=>{i[g.code]=!0,g.code==="ArrowUp"&&(i.KeyW=!0),g.code==="ArrowDown"&&(i.KeyS=!0),g.code==="ArrowLeft"&&(i.KeyA=!0),g.code==="ArrowRight"&&(i.KeyD=!0)},p=g=>{i[g.code]=!1,g.code==="ArrowUp"&&(i.KeyW=!1),g.code==="ArrowDown"&&(i.KeyS=!1),g.code==="ArrowLeft"&&(i.KeyA=!1),g.code==="ArrowRight"&&(i.KeyD=!1),g.code==="Escape"&&document.exitPointerLock()};this.update=()=>{const g=kt.RotationFromQuaternion(e.rotation).buffer,y=new Fe(-g[2],-g[5],-g[8]),d=new Fe(g[0],g[3],g[6]);let u=new Fe(0,0,0);i.KeyS&&(u=u.add(y)),i.KeyW&&(u=u.subtract(y)),i.KeyA&&(u=u.subtract(d)),i.KeyD&&(u=u.add(d)),u=new Fe(u.x,0,u.z),u.magnitude()>0&&(u=u.normalize()),o=o.add(u.multiply(this.moveSpeed*.01)),e.position=e.position.add(o.subtract(e.position).multiply(this.dampening)),e.rotation=dt.FromEuler(new Fe(n,a,0))};const m=g=>{g.preventDefault(),g.stopPropagation()};this.dispose=()=>{t.removeEventListener("dragenter",m),t.removeEventListener("dragover",m),t.removeEventListener("dragleave",m),t.removeEventListener("contextmenu",m),t.removeEventListener("mousedown",l),document.removeEventListener("pointerlockchange",c),window.removeEventListener("keydown",f),window.removeEventListener("keyup",p)},window.addEventListener("keydown",f),window.addEventListener("keyup",p),t.addEventListener("dragenter",m),t.addEventListener("dragover",m),t.addEventListener("dragleave",m),t.addEventListener("contextmenu",m),t.addEventListener("mousedown",l),document.addEventListener("pointerlockchange",c),this.update()}}class I_{constructor(e,t){this.normal=e,this.point=t}intersect(e,t){const i=this.normal.dot(t);if(Math.abs(i)<1e-4)return null;const n=this.normal.dot(this.point.subtract(e))/i;return n<0?null:e.add(t.multiply(n))}}class B_{initialize(e){}render(){}dispose(){}}const Q_=`#version 300 es
precision highp float;
precision highp int;
  
uniform highp usampler2D u_texture;
uniform mat4 projection, view;
uniform vec2 focal;
uniform vec2 viewport;
uniform float time;
  
in vec2 position;
in int index;
  
out vec4 vColor;
out vec2 vPosition;
  
void main () {
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);

    uvec4 motion1 = texelFetch(u_texture, ivec2(((uint(index) & 0x3ffu) << 2) | 3u, uint(index) >> 10), 0);
    vec2 trbf = unpackHalf2x16(motion1.w);
    float dt = time - trbf.x;

    float topacity = exp(-1.0 * pow(dt / trbf.y, 2.0));
    if(topacity < 0.02) return;

    uvec4 motion0 = texelFetch(u_texture, ivec2(((uint(index) & 0x3ffu) << 2) | 2u, uint(index) >> 10), 0);
    uvec4 static0 = texelFetch(u_texture, ivec2(((uint(index) & 0x3ffu) << 2), uint(index) >> 10), 0);

    vec2 m0 = unpackHalf2x16(motion0.x), m1 = unpackHalf2x16(motion0.y), m2 = unpackHalf2x16(motion0.z), 
         m3 = unpackHalf2x16(motion0.w), m4 = unpackHalf2x16(motion1.x); 
      
    vec4 trot = vec4(unpackHalf2x16(motion1.y).xy, unpackHalf2x16(motion1.z).xy) * dt;
    vec3 tpos = (vec3(m0.xy, m1.x) * dt + vec3(m1.y, m2.xy) * dt*dt + vec3(m3.xy, m4.x) * dt*dt*dt);
      
    vec4 cam = view * vec4(uintBitsToFloat(static0.xyz) + tpos, 1);
    vec4 pos = projection * cam;
  
    float clip = 1.2 * pos.w;
    if (pos.z < -clip || pos.x < -clip || pos.x > clip || pos.y < -clip || pos.y > clip) return;
    uvec4 static1 = texelFetch(u_texture, ivec2(((uint(index) & 0x3ffu) << 2) | 1u, uint(index) >> 10), 0);

    vec4 rot = vec4(unpackHalf2x16(static0.w).xy, unpackHalf2x16(static1.x).xy) + trot;
    vec3 scale = vec3(unpackHalf2x16(static1.y).xy, unpackHalf2x16(static1.z).x);
    rot /= sqrt(dot(rot, rot));
  
    mat3 S = mat3(scale.x, 0.0, 0.0, 0.0, scale.y, 0.0, 0.0, 0.0, scale.z);
    mat3 R = mat3(
        1.0 - 2.0 * (rot.z * rot.z + rot.w * rot.w), 2.0 * (rot.y * rot.z - rot.x * rot.w), 2.0 * (rot.y * rot.w + rot.x * rot.z),
        2.0 * (rot.y * rot.z + rot.x * rot.w), 1.0 - 2.0 * (rot.y * rot.y + rot.w * rot.w), 2.0 * (rot.z * rot.w - rot.x * rot.y),
        2.0 * (rot.y * rot.w - rot.x * rot.z), 2.0 * (rot.z * rot.w + rot.x * rot.y), 1.0 - 2.0 * (rot.y * rot.y + rot.z * rot.z));
    mat3 M = S * R;
    mat3 Vrk = 4.0 * transpose(M) * M;
    mat3 J = mat3(
        focal.x / cam.z, 0., -(focal.x * cam.x) / (cam.z * cam.z), 
        0., -focal.y / cam.z, (focal.y * cam.y) / (cam.z * cam.z), 
        0., 0., 0.
    );
  
    mat3 T = transpose(mat3(view)) * J;
    mat3 cov2d = transpose(T) * Vrk * T;
  
    float mid = (cov2d[0][0] + cov2d[1][1]) / 2.0;
    float radius = length(vec2((cov2d[0][0] - cov2d[1][1]) / 2.0, cov2d[0][1]));
    float lambda1 = mid + radius, lambda2 = mid - radius;
  
    if(lambda2 < 0.0) return;
    vec2 diagonalVector = normalize(vec2(cov2d[0][1], lambda1 - cov2d[0][0]));
    vec2 majorAxis = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
    vec2 minorAxis = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);
      
    uint rgba = static1.w;
    vColor = 
        clamp(pos.z/pos.w+1.0, 0.0, 1.0) * 
        vec4(1.0, 1.0, 1.0, topacity) *
        vec4(
            (rgba) & 0xffu, 
            (rgba >> 8) & 0xffu, 
            (rgba >> 16) & 0xffu, 
            (rgba >> 24) & 0xffu) / 255.0;

    vec2 vCenter = vec2(pos) / pos.w;
    gl_Position = vec4(
        vCenter 
        + position.x * majorAxis / viewport 
        + position.y * minorAxis / viewport, 0.0, 1.0);

    vPosition = position;
}
`,L_=`#version 300 es
precision highp float;
  
in vec4 vColor;
in vec2 vPosition;

out vec4 fragColor;

void main () {
    float A = -dot(vPosition, vPosition);
    if (A < -4.0) discard;
    float B = exp(A) * vColor.a;
    fragColor = vec4(B * vColor.rgb, B);
}
`;class D_ extends il{constructor(e,t=[]){super(e,t),this._renderData=null,this._depthIndex=new Uint32Array,this._splatTexture=null;const i=e.canvas,n=e.gl;let a,o,s,l,c,h,f,p,m,g,y;this._resize=()=>{this._camera&&(this._camera.data.setSize(i.width,i.height),this._camera.update(),o=n.getUniformLocation(this.program,"projection"),n.uniformMatrix4fv(o,!1,this._camera.data.projectionMatrix.buffer),s=n.getUniformLocation(this.program,"viewport"),n.uniform2fv(s,new Float32Array([i.width,i.height])))};const d=()=>{if(e.renderProgram.worker===null){console.error("Render program is not initialized. Cannot render without worker");return}a=e.renderProgram.worker,a.onmessage=_=>{if(_.data.depthIndex){const{depthIndex:b}=_.data;this._depthIndex=b,n.bindBuffer(n.ARRAY_BUFFER,y),n.bufferData(n.ARRAY_BUFFER,b,n.STATIC_DRAW)}}};this._initialize=()=>{if(!this._scene||!this._camera){console.error("Cannot render without scene and camera");return}this._resize(),this._scene.addEventListener("objectAdded",u),this._scene.addEventListener("objectRemoved",v);for(const w of this._scene.objects)w instanceof Ar&&(this._renderData===null?(this._renderData=w.data,w.addEventListener("objectChanged",S)):console.warn("Multiple Splatv objects are not currently supported"));if(this._renderData===null){console.error("Cannot render without Splatv object");return}l=n.getUniformLocation(this.program,"focal"),n.uniform2fv(l,new Float32Array([this._camera.data.fx,this._camera.data.fy])),c=n.getUniformLocation(this.program,"view"),n.uniformMatrix4fv(c,!1,this._camera.data.viewMatrix.buffer),this._splatTexture=n.createTexture(),h=n.getUniformLocation(this.program,"u_texture"),n.uniform1i(h,0),f=n.getUniformLocation(this.program,"time"),n.uniform1f(f,Math.sin(Date.now()/1e3)/2+1/2),g=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,g),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-2,-2,2,-2,2,2,-2,2]),n.STATIC_DRAW),p=n.getAttribLocation(this.program,"position"),n.enableVertexAttribArray(p),n.vertexAttribPointer(p,2,n.FLOAT,!1,0,0),y=n.createBuffer(),m=n.getAttribLocation(this.program,"index"),n.enableVertexAttribArray(m),n.bindBuffer(n.ARRAY_BUFFER,y),d(),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this._splatTexture),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texImage2D(n.TEXTURE_2D,0,n.RGBA32UI,this._renderData.width,this._renderData.height,0,n.RGBA_INTEGER,n.UNSIGNED_INT,this._renderData.data);const _=this._renderData.positions,b=new Float32Array(new Nt().buffer),x=new Uint32Array(this._renderData.vertexCount);x.fill(0),a.postMessage({sortData:{positions:_,transforms:b,transformIndices:x,vertexCount:this._renderData.vertexCount}},[_.buffer,b.buffer,x.buffer])};const u=_=>{const b=_;b.object instanceof Ar&&(this._renderData===null?(this._renderData=b.object.data,b.object.addEventListener("objectChanged",S)):console.warn("Splatv not supported by default RenderProgram. Use VideoRenderProgram instead.")),this.dispose()},v=_=>{const b=_;b.object instanceof Ar&&this._renderData===b.object.data&&(this._renderData=null,b.object.removeEventListener("objectChanged",S)),this.dispose()},S=_=>{const b=_;b.object instanceof Ar&&this._renderData===b.object.data&&this.dispose()};this._render=()=>{if(!this._scene||!this._camera){console.error("Cannot render without scene and camera");return}if(!this._renderData){console.warn("Cannot render without Splatv object");return}this._camera.update(),a.postMessage({viewProj:this._camera.data.viewProj.buffer}),n.viewport(0,0,i.width,i.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.disable(n.DEPTH_TEST),n.enable(n.BLEND),n.blendFuncSeparate(n.ONE_MINUS_DST_ALPHA,n.ONE,n.ONE_MINUS_DST_ALPHA,n.ONE),n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.uniformMatrix4fv(o,!1,this._camera.data.projectionMatrix.buffer),n.uniformMatrix4fv(c,!1,this._camera.data.viewMatrix.buffer),n.uniform1f(f,Math.sin(Date.now()/1e3)/2+1/2),n.bindBuffer(n.ARRAY_BUFFER,g),n.vertexAttribPointer(p,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,y),n.bufferData(n.ARRAY_BUFFER,this._depthIndex,n.STATIC_DRAW),n.vertexAttribIPointer(m,1,n.INT,0,0),n.vertexAttribDivisor(m,1),n.drawArraysInstanced(n.TRIANGLE_FAN,0,4,this._renderData.vertexCount)},this._dispose=()=>{if(!this._scene||!this._camera){console.error("Cannot dispose without scene and camera");return}this._scene.removeEventListener("objectAdded",u),this._scene.removeEventListener("objectRemoved",v);for(const _ of this._scene.objects)_ instanceof Ar&&this._renderData===_.data&&(this._renderData=null,_.removeEventListener("objectChanged",S));a==null||a.terminate(),n.deleteTexture(this._splatTexture),n.deleteBuffer(y),n.deleteBuffer(g)}}get renderData(){return this._renderData}_getVertexSource(){return Q_}_getFragmentSource(){return L_}}class Ya{constructor(e,t,i){this.bounds=e,this.boxes=t,this.left=null,this.right=null,this.pointIndices=[],i.length>1?this.split(e,t,i):i.length>0&&(this.pointIndices=i)}split(e,t,i){const n=e.size().maxComponent();i.sort((l,c)=>t[l].center().getComponent(n)-t[c].center().getComponent(n));const a=Math.floor(i.length/2),o=i.slice(0,a),s=i.slice(a);this.left=new Ya(e,t,o),this.right=new Ya(e,t,s)}queryRange(e){return this.bounds.intersects(e)?this.left!==null&&this.right!==null?this.left.queryRange(e).concat(this.right.queryRange(e)):this.pointIndices.filter(t=>e.intersects(this.boxes[t])):[]}}class N_{constructor(e,t){const i=t.map((n,a)=>a);this.root=new Ya(e,t,i)}queryRange(e){return this.root.queryRange(e)}}class k_{constructor(e,t=100,i=1){let n=0,a=null,o=[];const s=()=>{if(e.renderData===null){console.error("IntersectionTester cannot be called before renderProgram has been initialized");return}o=[];const l=e.renderData,c=new Array(l.offsets.size);let h=0;const f=new Dn(new Fe(1/0,1/0,1/0),new Fe(-1/0,-1/0,-1/0));for(const p of l.offsets.keys()){const m=p.bounds;c[h++]=m,f.expand(m.min),f.expand(m.max),o.push(p)}f.permute(),a=new N_(f,c),n=l.vertexCount};this.testPoint=(l,c)=>{if(e.renderData===null||e.camera===null)return console.error("IntersectionTester cannot be called before renderProgram has been initialized"),null;if(s(),a===null)return console.error("Failed to build octree for IntersectionTester"),null;const h=e.renderData,f=e.camera;n!==h.vertexCount&&console.warn("IntersectionTester has not been rebuilt since the last render");const p=f.screenPointToRay(l,c);for(let m=0;m<t;m+=i){const g=f.position.add(p.multiply(m)),y=new Fe(g.x-i/2,g.y-i/2,g.z-i/2),d=new Fe(g.x+i/2,g.y+i/2,g.z+i/2),u=new Dn(y,d),v=a.queryRange(u);if(v.length>0)return o[v[0]]}return null}}}const P_=Object.freeze(Object.defineProperty({__proto__:null,Camera:m_,CameraData:iu,Color32:nl,FPSControls:R_,FadeInPass:ou,IntersectionTester:k_,Loader:v_,Matrix3:kt,Matrix4:Nt,Object3D:Ha,OrbitControls:F_,PLYLoader:A_,Plane:I_,Quaternion:dt,RenderData:rl,RenderProgram:al,Scene:g_,ShaderPass:B_,ShaderProgram:il,Splat:Jt,SplatData:bi,Splatv:Ar,SplatvData:eu,SplatvLoader:__,Vector3:Fe,Vector4:Zt,VideoRenderProgram:D_,WebGLRenderer:M_},Symbol.toStringTag,{value:"Module"}));class V_ extends xl{constructor(){super(...arguments);er(this,"observer")}get slides(){const t=Array.from(this.querySelectorAll("qy-swiper-slide")),i=this.shadowRoot,n=i==null?void 0:i.querySelector("#divSlides"),a=n?Array.from(n.querySelectorAll("qy-swiper-slide")):[];return[...t,...a].map(s=>(s.getAttribute||console.warn("[qy-swiper] Slide element missing getAttribute method:",s),s))}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(t=>{t.some(n=>Array.from(n.addedNodes).some(a=>a.nodeName==="QY-SWIPER-SLIDE")||Array.from(n.removedNodes).some(a=>a.nodeName==="QY-SWIPER-SLIDE"))&&(console.log("[qy-swiper] Slides changed, re-rendering..."),this.render())}),this.observer.observe(this,{childList:!0,subtree:!1}),customElements.whenDefined("qy-swiper-slide").then(()=>{console.log("[qy-swiper] qy-swiper-slide defined, checking if re-render needed"),this.slides.length>0&&(console.log("[qy-swiper] Re-rendering with slides"),this.render())})}disconnectedCallback(){super.disconnectedCallback(),this.observer&&(this.observer.disconnect(),this.observer=void 0)}render(){const t=this.slides.length;console.log(`[qy-swiper] Rendering with ${t} slides`),t===0&&console.warn("[qy-swiper] No slides found during render. Slides might not be initialized yet."),super.render()}firstUpdated(){console.log("[qy-swiper] firstUpdated called"),super.firstUpdated()}async openViewer(t,i,n){console.log("[qy-swiper] openViewer called with:",{imageUrl:t,imageType:i,slideIndex:n});let a=document.querySelector("qy-viewer");if(!a){console.log("[qy-swiper] Creating qy-viewer element");const o=document.createElement("qy-viewer");document.body.appendChild(o),await customElements.whenDefined("qy-viewer"),a=await new Promise(s=>{setTimeout(()=>{s(document.querySelector("qy-viewer"))},100)})}if(console.log("[qy-swiper] qy-viewer element found:",!!a),a){a.setSwiper(this),n!==void 0&&a.setCurrentSlideIndex(n);const o=this.slides[n||0],s={};o&&o.getAttributeNames().forEach(c=>{s[c]=o.getAttribute(c)}),console.log("[qy-swiper] Calling qy-viewer.open"),a.open(t,i,s)}}}class O_ extends wl{}customElements.get("qy-swiper")||customElements.define("qy-swiper",V_),customElements.get("qy-swiper-slide")||customElements.define("qy-swiper-slide",O_);class z_ extends HTMLElement{constructor(){super();er(this,"_shadowRoot");er(this,"_connected",!1);this._shadowRoot=this.attachShadow({mode:"open"})}connectedCallback(){this._connected?this.render():(this._connected=!0,this.render(),this.firstUpdated())}disconnectedCallback(){this._connected=!1}attributeChangedCallback(t,i,n){i!==n&&this.render()}firstUpdated(){}html(t,...i){return t.reduce((n,a,o)=>n+a+(i[o]||""),"")}css(t,...i){return`<style>${t.reduce((a,o,s)=>a+o+(i[s]||""),"")}</style>`}updateShadowRoot(t){this._shadowRoot.innerHTML=t}query(t){return this._shadowRoot.querySelector(t)}queryAll(t){return this._shadowRoot.querySelectorAll(t)}dispatch(t,i){this.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0}))}}class W_ extends z_{constructor(){super(...arguments);er(this,"_swiper");er(this,"_currentSlideIndex",0);er(this,"_currentType","");er(this,"ccViewer")}static get observedAttributes(){return["currentslideindex","currenttype"]}get swiper(){return this._swiper}set swiper(t){const i=this._swiper;i!==t&&(this._swiper=t,this.updated(new Map([["swiper",i]])))}get currentSlideIndex(){return this._currentSlideIndex}set currentSlideIndex(t){const i=this._currentSlideIndex,n=t??0;i!==n&&(this._currentSlideIndex=n,this.setAttribute("currentslideindex",String(n)),this.updated(new Map([["currentSlideIndex",i]])))}get currentType(){return this._currentType}set currentType(t){const i=this._currentType,n=t??"";i!==n&&(this._currentType=n,n?this.setAttribute("currenttype",n):this.removeAttribute("currenttype"),this.updated(new Map([["currentType",i]])))}attributeChangedCallback(t,i,n){i!==n&&(t==="currentslideindex"?(this._currentSlideIndex=n?Number(n):0,this.updated(new Map([["currentSlideIndex",i?Number(i):void 0]]))):t==="currenttype"&&(this._currentType=n||"",this.updated(new Map([["currentType",i]])))),super.attributeChangedCallback(t,i,n)}async open(t,i,n){console.log("[qy-viewer] open called with:",{imgUrl:t,type:i,attributes:n}),this.currentType=i,this.ccViewer||(console.log("[qy-viewer] cc-viewer not ready, waiting..."),this.ccViewer||(await new Promise(a=>requestAnimationFrame(a)),this.ccViewer=this.shadowRoot.querySelector("cc-viewer")||void 0)),this.ccViewer?(console.log("[qy-viewer] Calling cc-viewer.open"),this.ccViewer.style.display="block",this.ccViewer.open(t,i,n)):console.warn("[qy-viewer] cc-viewer still not found")}close(){console.log("[qy-viewer] close called"),this.currentType="",this.ccViewer&&(this.ccViewer.style.display="none","close"in this.ccViewer&&typeof this.ccViewer.close=="function"&&this.ccViewer.close())}setSwiper(t){console.log("[qy-viewer] setSwiper called"),this.swiper=t,this.ccViewer&&this.ccViewer.setSwiper&&(console.log("[qy-viewer] Calling cc-viewer.setSwiper"),this.ccViewer.setSwiper(t))}setCurrentSlideIndex(t){console.log("[qy-viewer] setCurrentSlideIndex called with:",t),this.currentSlideIndex=t,this.ccViewer&&this.ccViewer.setCurrentSlideIndex&&(console.log("[qy-viewer] Calling cc-viewer.setCurrentSlideIndex"),this.ccViewer.setCurrentSlideIndex(t))}async firstUpdated(){var i,n,a;console.log("[qy-viewer] firstUpdated called"),console.log("[qy-viewer] Initial Shadow DOM content:",(i=this.shadowRoot)==null?void 0:i.innerHTML),this.render(),console.log("[qy-viewer] Shadow DOM after render:",(n=this.shadowRoot)==null?void 0:n.innerHTML);const t=new CustomEvent("load");this.dispatchEvent(t),console.log("[qy-viewer] Waiting for cc-viewer to be defined..."),console.log("[qy-viewer] cc-viewer already defined?",!!customElements.get("cc-viewer")),await customElements.whenDefined("cc-viewer"),console.log("[qy-viewer] cc-viewer is defined"),await new Promise(o=>setTimeout(o,100)),this.ccViewer=this.shadowRoot.querySelector("cc-viewer")||void 0,console.log("[qy-viewer] cc-viewer element found:",!!this.ccViewer),console.log("[qy-viewer] Final Shadow DOM:",(a=this.shadowRoot)==null?void 0:a.innerHTML),this.ccViewer&&(this.swiper&&this.ccViewer.setSwiper&&(console.log("[qy-viewer] Setting swiper on cc-viewer"),this.ccViewer.setSwiper(this.swiper)),this.currentSlideIndex!==void 0&&this.ccViewer.setCurrentSlideIndex&&(console.log("[qy-viewer] Setting currentSlideIndex on cc-viewer:",this.currentSlideIndex),this.ccViewer.setCurrentSlideIndex(this.currentSlideIndex)))}updated(t){this.ccViewer&&(t.has("swiper")&&this.ccViewer.setSwiper&&this.ccViewer.setSwiper(this.swiper),t.has("currentSlideIndex")&&this.ccViewer.setCurrentSlideIndex&&this.ccViewer.setCurrentSlideIndex(this.currentSlideIndex||0))}render(){var t;(t=this.shadowRoot)!=null&&t.querySelector("cc-viewer")||this.updateShadowRoot(this.html`
      <style>
        :host {
          --qy-viewer-z-index: 1000;
        }
        
        cc-viewer {
          --cc-viewer-z-index: var(--qy-viewer-z-index);
        }
      </style>
      <cc-viewer></cc-viewer>
    `)}}customElements.define("qy-viewer",W_);function G_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Xa={exports:{}};/*! Browser bundle of nunjucks 3.2.4  */var J_=Xa.exports,lu;function Z_(){return lu||(lu=1,(function(r,e){(function(i,n){r.exports=n()})(typeof self<"u"?self:J_,function(){return(function(t){var i={};function n(a){if(i[a])return i[a].exports;var o=i[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=i,n.d=function(a,o,s){n.o(a,o)||Object.defineProperty(a,o,{configurable:!1,enumerable:!0,get:s})},n.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(o,"a",o),o},n.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},n.p="",n(n.s=11)})([(function(t,c,n){var a=Array.prototype,o=Object.prototype,s={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","\\":"&#92;"},l=/[&"'<>\\]/g,c=t.exports={};function h(I,P){return o.hasOwnProperty.call(I,P)}c.hasOwnProp=h;function f(I){return s[I]}function p(I,P,K){if(K.Update||(K=new c.TemplateError(K)),K.Update(I),!P){var $=K;K=new Error($.message),K.name=$.name}return K}c._prettifyError=p;function m(I,P,K){var $,he;I instanceof Error&&(he=I,I=he.name+": "+he.message),Object.setPrototypeOf?($=new Error(I),Object.setPrototypeOf($,m.prototype)):($=this,Object.defineProperty($,"message",{enumerable:!1,writable:!0,value:I})),Object.defineProperty($,"name",{value:"Template render error"}),Error.captureStackTrace&&Error.captureStackTrace($,this.constructor);var W;if(he){var H=Object.getOwnPropertyDescriptor(he,"stack");W=H&&(H.get||function(){return H.value}),W||(W=function(){return he.stack})}else{var ce=new Error(I).stack;W=function(){return ce}}return Object.defineProperty($,"stack",{get:function(){return W.call($)}}),Object.defineProperty($,"cause",{value:he}),$.lineno=P,$.colno=K,$.firstUpdate=!0,$.Update=function(ue){var me="("+(ue||"unknown path")+")";return this.firstUpdate&&(this.lineno&&this.colno?me+=" [Line "+this.lineno+", Column "+this.colno+"]":this.lineno&&(me+=" [Line "+this.lineno+"]")),me+=`
 `,this.firstUpdate&&(me+=" "),this.message=me+(this.message||""),this.firstUpdate=!1,this},$}Object.setPrototypeOf?Object.setPrototypeOf(m.prototype,Error.prototype):m.prototype=Object.create(Error.prototype,{constructor:{value:m}}),c.TemplateError=m;function g(I){return I.replace(l,f)}c.escape=g;function y(I){return o.toString.call(I)==="[object Function]"}c.isFunction=y;function d(I){return o.toString.call(I)==="[object Array]"}c.isArray=d;function u(I){return o.toString.call(I)==="[object String]"}c.isString=u;function v(I){return o.toString.call(I)==="[object Object]"}c.isObject=v;function S(I){return I?typeof I=="string"?I.split("."):[I]:[]}function _(I){var P=S(I);return function($){for(var he=$,W=0;W<P.length;W++){var H=P[W];if(h(he,H))he=he[H];else return}return he}}c.getAttrGetter=_;function b(I,P,K){for(var $={},he=y(P)?P:_(P),W=0;W<I.length;W++){var H=I[W],ce=he(H,W);if(ce===void 0&&K===!0)throw new TypeError('groupby: attribute "'+P+'" resolved to undefined');($[ce]||($[ce]=[])).push(H)}return $}c.groupBy=b;function x(I){return Array.prototype.slice.call(I)}c.toArray=x;function w(I){var P=[];if(!I)return P;for(var K=I.length,$=x(arguments).slice(1),he=-1;++he<K;)R($,I[he])===-1&&P.push(I[he]);return P}c.without=w;function U(I,P){for(var K="",$=0;$<P;$++)K+=I;return K}c.repeat=U;function E(I,P,K){if(I!=null){if(a.forEach&&I.forEach===a.forEach)I.forEach(P,K);else if(I.length===+I.length)for(var $=0,he=I.length;$<he;$++)P.call(K,I[$],$,I)}}c.each=E;function A(I,P){var K=[];if(I==null)return K;if(a.map&&I.map===a.map)return I.map(P);for(var $=0;$<I.length;$++)K[K.length]=P(I[$],$);return I.length===+I.length&&(K.length=I.length),K}c.map=A;function C(I,P,K){var $=-1;function he(){$++,$<I.length?P(I[$],$,he,K):K()}he()}c.asyncIter=C;function T(I,P,K){var $=B(I||{}),he=$.length,W=-1;function H(){W++;var ce=$[W];W<he?P(ce,I[ce],W,he,H):K()}H()}c.asyncFor=T;function R(I,P,K){return Array.prototype.indexOf.call(I||[],P,K)}c.indexOf=R;function B(I){var P=[];for(var K in I)h(I,K)&&P.push(K);return P}c.keys=B;function L(I){return B(I).map(function(P){return[P,I[P]]})}c._entries=L;function N(I){return B(I).map(function(P){return I[P]})}c._values=N;function k(I,P){return I=I||{},B(P).forEach(function(K){I[K]=P[K]}),I}c._assign=c.extend=k;function M(I,P){if(d(P)||u(P))return P.indexOf(I)!==-1;if(v(P))return I in P;throw new Error('Cannot use "in" operator to search for "'+I+'" in unexpected types.')}c.inOperator=M}),(function(t,i,n){function a(u,v){for(var S=0;S<v.length;S++){var _=v[S];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(u,s(_.key),_)}}function o(u,v,S){return v&&a(u.prototype,v),Object.defineProperty(u,"prototype",{writable:!1}),u}function s(u){var v=l(u,"string");return typeof v=="symbol"?v:String(v)}function l(u,v){if(typeof u!="object"||u===null)return u;var S=u[Symbol.toPrimitive];if(S!==void 0){var _=S.call(u,v);if(typeof _!="object")return _;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(u)}function c(u,v){u.prototype=Object.create(v.prototype),u.prototype.constructor=u,h(u,v)}function h(u,v){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(_,b){return _.__proto__=b,_},h(u,v)}var f=n(16),p=n(0);function m(u,v){return typeof u!="function"||typeof v!="function"?v:function(){var _=this.parent;this.parent=u;var b=v.apply(this,arguments);return this.parent=_,b}}function g(u,v,S){S=S||{},p.keys(S).forEach(function(b){S[b]=m(u.prototype[b],S[b])});var _=(function(b){c(x,b);function x(){return b.apply(this,arguments)||this}return o(x,[{key:"typename",get:function(){return v}}]),x})(u);return p._assign(_.prototype,S),_}var y=(function(){function u(){this.init.apply(this,arguments)}var v=u.prototype;return v.init=function(){},u.extend=function(_,b){return typeof _=="object"&&(b=_,_="anonymous"),g(this,_,b)},o(u,[{key:"typename",get:function(){return this.constructor.name}}]),u})(),d=(function(u){c(v,u);function v(){var _,b;return b=u.call(this)||this,(_=b).init.apply(_,arguments),b}var S=v.prototype;return S.init=function(){},v.extend=function(b,x){return typeof b=="object"&&(x=b,b="anonymous"),g(this,b,x)},o(v,[{key:"typename",get:function(){return this.constructor.name}}]),v})(f);t.exports={Obj:y,EmitterObj:d}}),(function(t,i,n){var a=n(0),o=Array.from,s=typeof Symbol=="function"&&Symbol.iterator&&typeof o=="function",l=(function(){function A(T,R){this.variables=Object.create(null),this.parent=T,this.topLevel=!1,this.isolateWrites=R}var C=A.prototype;return C.set=function(R,B,L){var N=R.split("."),k=this.variables,M=this;if(L&&(M=this.resolve(N[0],!0))){M.set(R,B);return}for(var I=0;I<N.length-1;I++){var P=N[I];k[P]||(k[P]={}),k=k[P]}k[N[N.length-1]]=B},C.get=function(R){var B=this.variables[R];return B!==void 0?B:null},C.lookup=function(R){var B=this.parent,L=this.variables[R];return L!==void 0?L:B&&B.lookup(R)},C.resolve=function(R,B){var L=B&&this.isolateWrites?void 0:this.parent,N=this.variables[R];return N!==void 0?this:L&&L.resolve(R)},C.push=function(R){return new A(this,R)},C.pop=function(){return this.parent},A})();function c(A,C,T){return function(){for(var B=arguments.length,L=new Array(B),N=0;N<B;N++)L[N]=arguments[N];var k=m(L),M,I=p(L);if(k>A.length)M=L.slice(0,A.length),L.slice(M.length,k).forEach(function($,he){he<C.length&&(I[C[he]]=$)}),M.push(I);else if(k<A.length){M=L.slice(0,k);for(var P=k;P<A.length;P++){var K=A[P];M.push(I[K]),delete I[K]}M.push(I)}else M=L;return T.apply(this,M)}}function h(A){return A.__keywords=!0,A}function f(A){return A&&Object.prototype.hasOwnProperty.call(A,"__keywords")}function p(A){var C=A.length;if(C){var T=A[C-1];if(f(T))return T}return{}}function m(A){var C=A.length;if(C===0)return 0;var T=A[C-1];return f(T)?C-1:C}function g(A){if(typeof A!="string")return A;this.val=A,this.length=A.length}g.prototype=Object.create(String.prototype,{length:{writable:!0,configurable:!0,value:0}}),g.prototype.valueOf=function(){return this.val},g.prototype.toString=function(){return this.val};function y(A,C){return A instanceof g?new g(C):C.toString()}function d(A){var C=typeof A;return C==="string"?new g(A):C!=="function"?A:function(R){var B=A.apply(this,arguments);return typeof B=="string"?new g(B):B}}function u(A,C){return A=A??"",C&&!(A instanceof g)&&(A=a.escape(A.toString())),A}function v(A,C,T){if(A==null)throw new a.TemplateError("attempted to output null or undefined value",C+1,T+1);return A}function S(A,C){if(A!=null)return typeof A[C]=="function"?function(){for(var T=arguments.length,R=new Array(T),B=0;B<T;B++)R[B]=arguments[B];return A[C].apply(A,R)}:A[C]}function _(A,C,T,R){if(A){if(typeof A!="function")throw new Error("Unable to call `"+C+"`, which is not a function")}else throw new Error("Unable to call `"+C+"`, which is undefined or falsey");return A.apply(T,R)}function b(A,C,T){var R=C.lookup(T);return R!==void 0?R:A.lookup(T)}function x(A,C,T){return A.lineno?A:new a.TemplateError(A,C,T)}function w(A,C,T,R){if(a.isArray(A)){var B=A.length;a.asyncIter(A,function(N,k,M){switch(C){case 1:T(N,k,B,M);break;case 2:T(N[0],N[1],k,B,M);break;case 3:T(N[0],N[1],N[2],k,B,M);break;default:N.push(k,B,M),T.apply(this,N)}},R)}else a.asyncFor(A,function(N,k,M,I,P){T(N,k,M,I,P)},R)}function U(A,C,T,R){var B=0,L,N;function k(he,W){B++,N[he]=W,B===L&&R(null,N.join(""))}if(a.isArray(A))if(L=A.length,N=new Array(L),L===0)R(null,"");else for(var M=0;M<A.length;M++){var I=A[M];switch(C){case 1:T(I,M,L,k);break;case 2:T(I[0],I[1],M,L,k);break;case 3:T(I[0],I[1],I[2],M,L,k);break;default:I.push(M,L,k),T.apply(this,I)}}else{var P=a.keys(A||{});if(L=P.length,N=new Array(L),L===0)R(null,"");else for(var K=0;K<P.length;K++){var $=P[K];T($,A[$],K,L,k)}}}function E(A){return typeof A!="object"||A===null||a.isArray(A)?A:s&&Symbol.iterator in A?o(A):A}t.exports={Frame:l,makeMacro:c,makeKeywordArgs:h,numArgs:m,suppressValue:u,ensureDefined:v,memberLookup:S,contextOrFrameLookup:b,callWrap:_,handleError:x,isArray:a.isArray,keys:a.keys,SafeString:g,copySafeness:y,markSafe:d,asyncEach:w,asyncAll:U,inOperator:a.inOperator,fromIterator:E}}),(function(t,i,n){function a(pe,Se){for(var O=0;O<Se.length;O++){var le=Se[O];le.enumerable=le.enumerable||!1,le.configurable=!0,"value"in le&&(le.writable=!0),Object.defineProperty(pe,s(le.key),le)}}function o(pe,Se,O){return Se&&a(pe.prototype,Se),Object.defineProperty(pe,"prototype",{writable:!1}),pe}function s(pe){var Se=l(pe,"string");return typeof Se=="symbol"?Se:String(Se)}function l(pe,Se){if(typeof pe!="object"||pe===null)return pe;var O=pe[Symbol.toPrimitive];if(O!==void 0){var le=O.call(pe,Se);if(typeof le!="object")return le;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(pe)}function c(pe,Se){pe.prototype=Object.create(Se.prototype),pe.prototype.constructor=pe,h(pe,Se)}function h(pe,Se){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(le,j){return le.__proto__=j,le},h(pe,Se)}var f=n(1),p=f.Obj;function m(pe,Se,O){pe instanceof Se&&O.push(pe),pe instanceof g&&pe.findAll(Se,O)}var g=(function(pe){c(Se,pe);function Se(){return pe.apply(this,arguments)||this}var O=Se.prototype;return O.init=function(j,re){for(var Ae=arguments,_e=this,Ye=arguments.length,pt=new Array(Ye>2?Ye-2:0),_t=2;_t<Ye;_t++)pt[_t-2]=arguments[_t];this.lineno=j,this.colno=re,this.fields.forEach(function(it,$t){var ei=Ae[$t+2];ei===void 0&&(ei=null),_e[it]=ei})},O.findAll=function(j,re){var Ae=this;return re=re||[],this instanceof d?this.children.forEach(function(_e){return m(_e,j,re)}):this.fields.forEach(function(_e){return m(Ae[_e],j,re)}),re},O.iterFields=function(j){var re=this;this.fields.forEach(function(Ae){j(re[Ae],Ae)})},Se})(p),y=(function(pe){c(Se,pe);function Se(){return pe.apply(this,arguments)||this}return o(Se,[{key:"typename",get:function(){return"Value"}},{key:"fields",get:function(){return["value"]}}]),Se})(g),d=(function(pe){c(Se,pe);function Se(){return pe.apply(this,arguments)||this}var O=Se.prototype;return O.init=function(j,re,Ae){pe.prototype.init.call(this,j,re,Ae||[])},O.addChild=function(j){this.children.push(j)},o(Se,[{key:"typename",get:function(){return"NodeList"}},{key:"fields",get:function(){return["children"]}}]),Se})(g),u=d.extend("Root"),v=y.extend("Literal"),S=y.extend("Symbol"),_=d.extend("Group"),b=d.extend("Array"),x=g.extend("Pair",{fields:["key","value"]}),w=d.extend("Dict"),U=g.extend("LookupVal",{fields:["target","val"]}),E=g.extend("If",{fields:["cond","body","else_"]}),A=E.extend("IfAsync"),C=g.extend("InlineIf",{fields:["cond","body","else_"]}),T=g.extend("For",{fields:["arr","name","body","else_"]}),R=T.extend("AsyncEach"),B=T.extend("AsyncAll"),L=g.extend("Macro",{fields:["name","args","body"]}),N=L.extend("Caller"),k=g.extend("Import",{fields:["template","target","withContext"]}),M=(function(pe){c(Se,pe);function Se(){return pe.apply(this,arguments)||this}var O=Se.prototype;return O.init=function(j,re,Ae,_e,Ye){pe.prototype.init.call(this,j,re,Ae,_e||new d,Ye)},o(Se,[{key:"typename",get:function(){return"FromImport"}},{key:"fields",get:function(){return["template","names","withContext"]}}]),Se})(g),I=g.extend("FunCall",{fields:["name","args"]}),P=I.extend("Filter"),K=P.extend("FilterAsync",{fields:["name","args","symbol"]}),$=w.extend("KeywordArgs"),he=g.extend("Block",{fields:["name","body"]}),W=g.extend("Super",{fields:["blockName","symbol"]}),H=g.extend("TemplateRef",{fields:["template"]}),ce=H.extend("Extends"),se=g.extend("Include",{fields:["template","ignoreMissing"]}),ue=g.extend("Set",{fields:["targets","value"]}),me=g.extend("Switch",{fields:["expr","cases","default"]}),oe=g.extend("Case",{fields:["cond","body"]}),ye=d.extend("Output"),ge=g.extend("Capture",{fields:["body"]}),Be=v.extend("TemplateData"),z=g.extend("UnaryOp",{fields:["target"]}),$e=g.extend("BinOp",{fields:["left","right"]}),ke=$e.extend("In"),V=$e.extend("Is"),X=$e.extend("Or"),fe=$e.extend("And"),ie=z.extend("Not"),D=$e.extend("Add"),F=$e.extend("Concat"),G=$e.extend("Sub"),q=$e.extend("Mul"),ne=$e.extend("Div"),ae=$e.extend("FloorDiv"),be=$e.extend("Mod"),Ee=$e.extend("Pow"),Me=z.extend("Neg"),qe=z.extend("Pos"),ve=g.extend("Compare",{fields:["expr","ops"]}),Ue=g.extend("CompareOperand",{fields:["expr","type"]}),Qe=g.extend("CallExtension",{init:function(Se,O,le,j){this.parent(),this.extName=Se.__name||Se,this.prop=O,this.args=le||new d,this.contentArgs=j||[],this.autoescape=Se.autoescape},fields:["extName","prop","args","contentArgs"]}),De=Qe.extend("CallExtensionAsync");function we(pe,Se,O){var le=pe.split(`
`);le.forEach(function(j,re){j&&(O&&re>0||!O)&&process.stdout.write(" ".repeat(Se));var Ae=re===le.length-1?"":`
`;process.stdout.write(""+j+Ae)})}function He(pe,Se){if(Se=Se||0,we(pe.typename+": ",Se),pe instanceof d)we(`
`),pe.children.forEach(function(j){He(j,Se+2)});else if(pe instanceof Qe)we(pe.extName+"."+pe.prop+`
`),pe.args&&He(pe.args,Se+2),pe.contentArgs&&pe.contentArgs.forEach(function(j){He(j,Se+2)});else{var O=[],le=null;pe.iterFields(function(j,re){j instanceof g?O.push([re,j]):(le=le||{},le[re]=j)}),le?we(JSON.stringify(le,null,2)+`
`,null,!0):we(`
`),O.forEach(function(j){var re=j[0],Ae=j[1];we("["+re+"] =>",Se+2),He(Ae,Se+4)})}}t.exports={Node:g,Root:u,NodeList:d,Value:y,Literal:v,Symbol:S,Group:_,Array:b,Pair:x,Dict:w,Output:ye,Capture:ge,TemplateData:Be,If:E,IfAsync:A,InlineIf:C,For:T,AsyncEach:R,AsyncAll:B,Macro:L,Caller:N,Import:k,FromImport:M,FunCall:I,Filter:P,FilterAsync:K,KeywordArgs:$,Block:he,Super:W,Extends:ce,Include:se,Set:ue,Switch:me,Case:oe,LookupVal:U,BinOp:$e,In:ke,Is:V,Or:X,And:fe,Not:ie,Add:D,Concat:F,Sub:G,Mul:q,Div:ne,FloorDiv:ae,Mod:be,Pow:Ee,Neg:Me,Pos:qe,Compare:ve,CompareOperand:Ue,CallExtension:Qe,CallExtensionAsync:De,printNodes:He}}),(function(t,i){}),(function(t,i,n){function a(v,S){v.prototype=Object.create(S.prototype),v.prototype.constructor=v,o(v,S)}function o(v,S){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,x){return b.__proto__=x,b},o(v,S)}var s=n(8),l=n(17),c=n(3),h=n(0),f=h.TemplateError,p=n(2),m=p.Frame,g=n(1),y=g.Obj,d={"==":"==","===":"===","!=":"!=","!==":"!==","<":"<",">":">","<=":"<=",">=":">="},u=(function(v){a(S,v);function S(){return v.apply(this,arguments)||this}var _=S.prototype;return _.init=function(x,w){this.templateName=x,this.codebuf=[],this.lastId=0,this.buffer=null,this.bufferStack=[],this._scopeClosers="",this.inBlock=!1,this.throwOnUndefined=w},_.fail=function(x,w,U){throw w!==void 0&&(w+=1),U!==void 0&&(U+=1),new f(x,w,U)},_._pushBuffer=function(){var x=this._tmpid();return this.bufferStack.push(this.buffer),this.buffer=x,this._emit("var "+this.buffer+' = "";'),x},_._popBuffer=function(){this.buffer=this.bufferStack.pop()},_._emit=function(x){this.codebuf.push(x)},_._emitLine=function(x){this._emit(x+`
`)},_._emitLines=function(){for(var x=this,w=arguments.length,U=new Array(w),E=0;E<w;E++)U[E]=arguments[E];U.forEach(function(A){return x._emitLine(A)})},_._emitFuncBegin=function(x,w){this.buffer="output",this._scopeClosers="",this._emitLine("function "+w+"(env, context, frame, runtime, cb) {"),this._emitLine("var lineno = "+x.lineno+";"),this._emitLine("var colno = "+x.colno+";"),this._emitLine("var "+this.buffer+' = "";'),this._emitLine("try {")},_._emitFuncEnd=function(x){x||this._emitLine("cb(null, "+this.buffer+");"),this._closeScopeLevels(),this._emitLine("} catch (e) {"),this._emitLine("  cb(runtime.handleError(e, lineno, colno));"),this._emitLine("}"),this._emitLine("}"),this.buffer=null},_._addScopeLevel=function(){this._scopeClosers+="})"},_._closeScopeLevels=function(){this._emitLine(this._scopeClosers+";"),this._scopeClosers=""},_._withScopedSyntax=function(x){var w=this._scopeClosers;this._scopeClosers="",x.call(this),this._closeScopeLevels(),this._scopeClosers=w},_._makeCallback=function(x){var w=this._tmpid();return"function("+w+(x?","+x:"")+`) {
if(`+w+") { cb("+w+"); return; }"},_._tmpid=function(){return this.lastId++,"t_"+this.lastId},_._templateName=function(){return this.templateName==null?"undefined":JSON.stringify(this.templateName)},_._compileChildren=function(x,w){var U=this;x.children.forEach(function(E){U.compile(E,w)})},_._compileAggregate=function(x,w,U,E){var A=this;U&&this._emit(U),x.children.forEach(function(C,T){T>0&&A._emit(","),A.compile(C,w)}),E&&this._emit(E)},_._compileExpression=function(x,w){this.assertType(x,c.Literal,c.Symbol,c.Group,c.Array,c.Dict,c.FunCall,c.Caller,c.Filter,c.LookupVal,c.Compare,c.InlineIf,c.In,c.Is,c.And,c.Or,c.Not,c.Add,c.Concat,c.Sub,c.Mul,c.Div,c.FloorDiv,c.Mod,c.Pow,c.Neg,c.Pos,c.Compare,c.NodeList),this.compile(x,w)},_.assertType=function(x){for(var w=arguments.length,U=new Array(w>1?w-1:0),E=1;E<w;E++)U[E-1]=arguments[E];U.some(function(A){return x instanceof A})||this.fail("assertType: invalid type: "+x.typename,x.lineno,x.colno)},_.compileCallExtension=function(x,w,U){var E=this,A=x.args,C=x.contentArgs,T=typeof x.autoescape=="boolean"?x.autoescape:!0;if(U||this._emit(this.buffer+" += runtime.suppressValue("),this._emit('env.getExtension("'+x.extName+'")["'+x.prop+'"]('),this._emit("context"),(A||C)&&this._emit(","),A&&(A instanceof c.NodeList||this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"),A.children.forEach(function(B,L){E._compileExpression(B,w),(L!==A.children.length-1||C.length)&&E._emit(",")})),C.length&&C.forEach(function(B,L){if(L>0&&E._emit(","),B){E._emitLine("function(cb) {"),E._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");var N=E._pushBuffer();E._withScopedSyntax(function(){E.compile(B,w),E._emitLine("cb(null, "+N+");")}),E._popBuffer(),E._emitLine("return "+N+";"),E._emitLine("}")}else E._emit("null")}),U){var R=this._tmpid();this._emitLine(", "+this._makeCallback(R)),this._emitLine(this.buffer+" += runtime.suppressValue("+R+", "+T+" && env.opts.autoescape);"),this._addScopeLevel()}else this._emit(")"),this._emit(", "+T+` && env.opts.autoescape);
`)},_.compileCallExtensionAsync=function(x,w){this.compileCallExtension(x,w,!0)},_.compileNodeList=function(x,w){this._compileChildren(x,w)},_.compileLiteral=function(x){if(typeof x.value=="string"){var w=x.value.replace(/\\/g,"\\\\");w=w.replace(/"/g,'\\"'),w=w.replace(/\n/g,"\\n"),w=w.replace(/\r/g,"\\r"),w=w.replace(/\t/g,"\\t"),w=w.replace(/\u2028/g,"\\u2028"),this._emit('"'+w+'"')}else x.value===null?this._emit("null"):this._emit(x.value.toString())},_.compileSymbol=function(x,w){var U=x.value,E=w.lookup(U);E?this._emit(E):this._emit('runtime.contextOrFrameLookup(context, frame, "'+U+'")')},_.compileGroup=function(x,w){this._compileAggregate(x,w,"(",")")},_.compileArray=function(x,w){this._compileAggregate(x,w,"[","]")},_.compileDict=function(x,w){this._compileAggregate(x,w,"{","}")},_.compilePair=function(x,w){var U=x.key,E=x.value;U instanceof c.Symbol?U=new c.Literal(U.lineno,U.colno,U.value):U instanceof c.Literal&&typeof U.value=="string"||this.fail("compilePair: Dict keys must be strings or names",U.lineno,U.colno),this.compile(U,w),this._emit(": "),this._compileExpression(E,w)},_.compileInlineIf=function(x,w){this._emit("("),this.compile(x.cond,w),this._emit("?"),this.compile(x.body,w),this._emit(":"),x.else_!==null?this.compile(x.else_,w):this._emit('""'),this._emit(")")},_.compileIn=function(x,w){this._emit("runtime.inOperator("),this.compile(x.left,w),this._emit(","),this.compile(x.right,w),this._emit(")")},_.compileIs=function(x,w){var U=x.right.name?x.right.name.value:x.right.value;this._emit('env.getTest("'+U+'").call(context, '),this.compile(x.left,w),x.right.args&&(this._emit(","),this.compile(x.right.args,w)),this._emit(") === true")},_._binOpEmitter=function(x,w,U){this.compile(x.left,w),this._emit(U),this.compile(x.right,w)},_.compileOr=function(x,w){return this._binOpEmitter(x,w," || ")},_.compileAnd=function(x,w){return this._binOpEmitter(x,w," && ")},_.compileAdd=function(x,w){return this._binOpEmitter(x,w," + ")},_.compileConcat=function(x,w){return this._binOpEmitter(x,w,' + "" + ')},_.compileSub=function(x,w){return this._binOpEmitter(x,w," - ")},_.compileMul=function(x,w){return this._binOpEmitter(x,w," * ")},_.compileDiv=function(x,w){return this._binOpEmitter(x,w," / ")},_.compileMod=function(x,w){return this._binOpEmitter(x,w," % ")},_.compileNot=function(x,w){this._emit("!"),this.compile(x.target,w)},_.compileFloorDiv=function(x,w){this._emit("Math.floor("),this.compile(x.left,w),this._emit(" / "),this.compile(x.right,w),this._emit(")")},_.compilePow=function(x,w){this._emit("Math.pow("),this.compile(x.left,w),this._emit(", "),this.compile(x.right,w),this._emit(")")},_.compileNeg=function(x,w){this._emit("-"),this.compile(x.target,w)},_.compilePos=function(x,w){this._emit("+"),this.compile(x.target,w)},_.compileCompare=function(x,w){var U=this;this.compile(x.expr,w),x.ops.forEach(function(E){U._emit(" "+d[E.type]+" "),U.compile(E.expr,w)})},_.compileLookupVal=function(x,w){this._emit("runtime.memberLookup(("),this._compileExpression(x.target,w),this._emit("),"),this._compileExpression(x.val,w),this._emit(")")},_._getNodeName=function(x){switch(x.typename){case"Symbol":return x.value;case"FunCall":return"the return value of ("+this._getNodeName(x.name)+")";case"LookupVal":return this._getNodeName(x.target)+'["'+this._getNodeName(x.val)+'"]';case"Literal":return x.value.toString();default:return"--expression--"}},_.compileFunCall=function(x,w){this._emit("(lineno = "+x.lineno+", colno = "+x.colno+", "),this._emit("runtime.callWrap("),this._compileExpression(x.name,w),this._emit(', "'+this._getNodeName(x.name).replace(/"/g,'\\"')+'", context, '),this._compileAggregate(x.args,w,"[","])"),this._emit(")")},_.compileFilter=function(x,w){var U=x.name;this.assertType(U,c.Symbol),this._emit('env.getFilter("'+U.value+'").call(context, '),this._compileAggregate(x.args,w),this._emit(")")},_.compileFilterAsync=function(x,w){var U=x.name,E=x.symbol.value;this.assertType(U,c.Symbol),w.set(E,E),this._emit('env.getFilter("'+U.value+'").call(context, '),this._compileAggregate(x.args,w),this._emitLine(", "+this._makeCallback(E)),this._addScopeLevel()},_.compileKeywordArgs=function(x,w){this._emit("runtime.makeKeywordArgs("),this.compileDict(x,w),this._emit(")")},_.compileSet=function(x,w){var U=this,E=[];x.targets.forEach(function(A){var C=A.value,T=w.lookup(C);T==null&&(T=U._tmpid(),U._emitLine("var "+T+";")),E.push(T)}),x.value?(this._emit(E.join(" = ")+" = "),this._compileExpression(x.value,w),this._emitLine(";")):(this._emit(E.join(" = ")+" = "),this.compile(x.body,w),this._emitLine(";")),x.targets.forEach(function(A,C){var T=E[C],R=A.value;U._emitLine('frame.set("'+R+'", '+T+", true);"),U._emitLine("if(frame.topLevel) {"),U._emitLine('context.setVariable("'+R+'", '+T+");"),U._emitLine("}"),R.charAt(0)!=="_"&&(U._emitLine("if(frame.topLevel) {"),U._emitLine('context.addExport("'+R+'", '+T+");"),U._emitLine("}"))})},_.compileSwitch=function(x,w){var U=this;this._emit("switch ("),this.compile(x.expr,w),this._emit(") {"),x.cases.forEach(function(E,A){U._emit("case "),U.compile(E.cond,w),U._emit(": "),U.compile(E.body,w),E.body.children.length&&U._emitLine("break;")}),x.default&&(this._emit("default:"),this.compile(x.default,w)),this._emit("}")},_.compileIf=function(x,w,U){var E=this;this._emit("if("),this._compileExpression(x.cond,w),this._emitLine(") {"),this._withScopedSyntax(function(){E.compile(x.body,w),U&&E._emit("cb()")}),x.else_?(this._emitLine(`}
else {`),this._withScopedSyntax(function(){E.compile(x.else_,w),U&&E._emit("cb()")})):U&&(this._emitLine(`}
else {`),this._emit("cb()")),this._emitLine("}")},_.compileIfAsync=function(x,w){this._emit("(function(cb) {"),this.compileIf(x,w,!0),this._emit("})("+this._makeCallback()),this._addScopeLevel()},_._emitLoopBindings=function(x,w,U,E){var A=this,C=[{name:"index",val:U+" + 1"},{name:"index0",val:U},{name:"revindex",val:E+" - "+U},{name:"revindex0",val:E+" - "+U+" - 1"},{name:"first",val:U+" === 0"},{name:"last",val:U+" === "+E+" - 1"},{name:"length",val:E}];C.forEach(function(T){A._emitLine('frame.set("loop.'+T.name+'", '+T.val+");")})},_.compileFor=function(x,w){var U=this,E=this._tmpid(),A=this._tmpid(),C=this._tmpid();if(w=w.push(),this._emitLine("frame = frame.push();"),this._emit("var "+C+" = "),this._compileExpression(x.arr,w),this._emitLine(";"),this._emit("if("+C+") {"),this._emitLine(C+" = runtime.fromIterator("+C+");"),x.name instanceof c.Array){this._emitLine("var "+E+";"),this._emitLine("if(runtime.isArray("+C+")) {"),this._emitLine("var "+A+" = "+C+".length;"),this._emitLine("for("+E+"=0; "+E+" < "+C+".length; "+E+"++) {"),x.name.children.forEach(function(M,I){var P=U._tmpid();U._emitLine("var "+P+" = "+C+"["+E+"]["+I+"];"),U._emitLine('frame.set("'+M+'", '+C+"["+E+"]["+I+"]);"),w.set(x.name.children[I].value,P)}),this._emitLoopBindings(x,C,E,A),this._withScopedSyntax(function(){U.compile(x.body,w)}),this._emitLine("}"),this._emitLine("} else {");var T=x.name.children,R=T[0],B=T[1],L=this._tmpid(),N=this._tmpid();w.set(R.value,L),w.set(B.value,N),this._emitLine(E+" = -1;"),this._emitLine("var "+A+" = runtime.keys("+C+").length;"),this._emitLine("for(var "+L+" in "+C+") {"),this._emitLine(E+"++;"),this._emitLine("var "+N+" = "+C+"["+L+"];"),this._emitLine('frame.set("'+R.value+'", '+L+");"),this._emitLine('frame.set("'+B.value+'", '+N+");"),this._emitLoopBindings(x,C,E,A),this._withScopedSyntax(function(){U.compile(x.body,w)}),this._emitLine("}"),this._emitLine("}")}else{var k=this._tmpid();w.set(x.name.value,k),this._emitLine("var "+A+" = "+C+".length;"),this._emitLine("for(var "+E+"=0; "+E+" < "+C+".length; "+E+"++) {"),this._emitLine("var "+k+" = "+C+"["+E+"];"),this._emitLine('frame.set("'+x.name.value+'", '+k+");"),this._emitLoopBindings(x,C,E,A),this._withScopedSyntax(function(){U.compile(x.body,w)}),this._emitLine("}")}this._emitLine("}"),x.else_&&(this._emitLine("if (!"+A+") {"),this.compile(x.else_,w),this._emitLine("}")),this._emitLine("frame = frame.pop();")},_._compileAsyncLoop=function(x,w,U){var E=this,A=this._tmpid(),C=this._tmpid(),T=this._tmpid(),R=U?"asyncAll":"asyncEach";if(w=w.push(),this._emitLine("frame = frame.push();"),this._emit("var "+T+" = runtime.fromIterator("),this._compileExpression(x.arr,w),this._emitLine(");"),x.name instanceof c.Array){var B=x.name.children.length;this._emit("runtime."+R+"("+T+", "+B+", function("),x.name.children.forEach(function(k){E._emit(k.value+",")}),this._emit(A+","+C+",next) {"),x.name.children.forEach(function(k){var M=k.value;w.set(M,M),E._emitLine('frame.set("'+M+'", '+M+");")})}else{var L=x.name.value;this._emitLine("runtime."+R+"("+T+", 1, function("+L+", "+A+", "+C+",next) {"),this._emitLine('frame.set("'+L+'", '+L+");"),w.set(L,L)}this._emitLoopBindings(x,T,A,C),this._withScopedSyntax(function(){var k;U&&(k=E._pushBuffer()),E.compile(x.body,w),E._emitLine("next("+A+(k?","+k:"")+");"),U&&E._popBuffer()});var N=this._tmpid();this._emitLine("}, "+this._makeCallback(N)),this._addScopeLevel(),U&&this._emitLine(this.buffer+" += "+N+";"),x.else_&&(this._emitLine("if (!"+T+".length) {"),this.compile(x.else_,w),this._emitLine("}")),this._emitLine("frame = frame.pop();")},_.compileAsyncEach=function(x,w){this._compileAsyncLoop(x,w)},_.compileAsyncAll=function(x,w){this._compileAsyncLoop(x,w,!0)},_._compileMacro=function(x,w){var U=this,E=[],A=null,C="macro_"+this._tmpid(),T=w!==void 0;x.args.children.forEach(function(M,I){I===x.args.children.length-1&&M instanceof c.Dict?A=M:(U.assertType(M,c.Symbol),E.push(M))});var R=[].concat(E.map(function(M){return"l_"+M.value}),["kwargs"]),B=E.map(function(M){return'"'+M.value+'"'}),L=(A&&A.children||[]).map(function(M){return'"'+M.key.value+'"'}),N;T?N=w.push(!0):N=new m,this._emitLines("var "+C+" = runtime.makeMacro(","["+B.join(", ")+"], ","["+L.join(", ")+"], ","function ("+R.join(", ")+") {","var callerFrame = frame;","frame = "+(T?"frame.push(true);":"new runtime.Frame();"),"kwargs = kwargs || {};",'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {','frame.set("caller", kwargs.caller); }'),E.forEach(function(M){U._emitLine('frame.set("'+M.value+'", l_'+M.value+");"),N.set(M.value,"l_"+M.value)}),A&&A.children.forEach(function(M){var I=M.key.value;U._emit('frame.set("'+I+'", '),U._emit('Object.prototype.hasOwnProperty.call(kwargs, "'+I+'")'),U._emit(' ? kwargs["'+I+'"] : '),U._compileExpression(M.value,N),U._emit(");")});var k=this._pushBuffer();return this._withScopedSyntax(function(){U.compile(x.body,N)}),this._emitLine("frame = "+(T?"frame.pop();":"callerFrame;")),this._emitLine("return new runtime.SafeString("+k+");"),this._emitLine("});"),this._popBuffer(),C},_.compileMacro=function(x,w){var U=this._compileMacro(x),E=x.name.value;w.set(E,U),w.parent?this._emitLine('frame.set("'+E+'", '+U+");"):(x.name.value.charAt(0)!=="_"&&this._emitLine('context.addExport("'+E+'");'),this._emitLine('context.setVariable("'+E+'", '+U+");"))},_.compileCaller=function(x,w){this._emit("(function (){");var U=this._compileMacro(x,w);this._emit("return "+U+";})()")},_._compileGetTemplate=function(x,w,U,E){var A=this._tmpid(),C=this._templateName(),T=this._makeCallback(A),R=U?"true":"false",B=E?"true":"false";return this._emit("env.getTemplate("),this._compileExpression(x.template,w),this._emitLine(", "+R+", "+C+", "+B+", "+T),A},_.compileImport=function(x,w){var U=x.target.value,E=this._compileGetTemplate(x,w,!1,!1);this._addScopeLevel(),this._emitLine(E+".getExported("+(x.withContext?"context.getVariables(), frame, ":"")+this._makeCallback(E)),this._addScopeLevel(),w.set(U,E),w.parent?this._emitLine('frame.set("'+U+'", '+E+");"):this._emitLine('context.setVariable("'+U+'", '+E+");")},_.compileFromImport=function(x,w){var U=this,E=this._compileGetTemplate(x,w,!1,!1);this._addScopeLevel(),this._emitLine(E+".getExported("+(x.withContext?"context.getVariables(), frame, ":"")+this._makeCallback(E)),this._addScopeLevel(),x.names.children.forEach(function(A){var C,T,R=U._tmpid();A instanceof c.Pair?(C=A.key.value,T=A.value.value):(C=A.value,T=C),U._emitLine("if(Object.prototype.hasOwnProperty.call("+E+', "'+C+'")) {'),U._emitLine("var "+R+" = "+E+"."+C+";"),U._emitLine("} else {"),U._emitLine(`cb(new Error("cannot import '`+C+`'")); return;`),U._emitLine("}"),w.set(T,R),w.parent?U._emitLine('frame.set("'+T+'", '+R+");"):U._emitLine('context.setVariable("'+T+'", '+R+");")})},_.compileBlock=function(x){var w=this._tmpid();this.inBlock||this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '),this._emit('context.getBlock("'+x.name.value+'")'),this.inBlock||this._emit(")"),this._emitLine("(env, context, frame, runtime, "+this._makeCallback(w)),this._emitLine(this.buffer+" += "+w+";"),this._addScopeLevel()},_.compileSuper=function(x,w){var U=x.blockName.value,E=x.symbol.value,A=this._makeCallback(E);this._emitLine('context.getSuper(env, "'+U+'", b_'+U+", frame, runtime, "+A),this._emitLine(E+" = runtime.markSafe("+E+");"),this._addScopeLevel(),w.set(E,E)},_.compileExtends=function(x,w){var U=this._tmpid(),E=this._compileGetTemplate(x,w,!0,!1);this._emitLine("parentTemplate = "+E),this._emitLine("for(var "+U+" in parentTemplate.blocks) {"),this._emitLine("context.addBlock("+U+", parentTemplate.blocks["+U+"]);"),this._emitLine("}"),this._addScopeLevel()},_.compileInclude=function(x,w){this._emitLine("var tasks = [];"),this._emitLine("tasks.push("),this._emitLine("function(callback) {");var U=this._compileGetTemplate(x,w,!1,x.ignoreMissing);this._emitLine("callback(null,"+U+");});"),this._emitLine("});");var E=this._tmpid();this._emitLine("tasks.push("),this._emitLine("function(template, callback){"),this._emitLine("template.render(context.getVariables(), frame, "+this._makeCallback(E)),this._emitLine("callback(null,"+E+");});"),this._emitLine("});"),this._emitLine("tasks.push("),this._emitLine("function(result, callback){"),this._emitLine(this.buffer+" += result;"),this._emitLine("callback(null);"),this._emitLine("});"),this._emitLine("env.waterfall(tasks, function(){"),this._addScopeLevel()},_.compileTemplateData=function(x,w){this.compileLiteral(x,w)},_.compileCapture=function(x,w){var U=this,E=this.buffer;this.buffer="output",this._emitLine("(function() {"),this._emitLine('var output = "";'),this._withScopedSyntax(function(){U.compile(x.body,w)}),this._emitLine("return output;"),this._emitLine("})()"),this.buffer=E},_.compileOutput=function(x,w){var U=this,E=x.children;E.forEach(function(A){A instanceof c.TemplateData?A.value&&(U._emit(U.buffer+" += "),U.compileLiteral(A,w),U._emitLine(";")):(U._emit(U.buffer+" += runtime.suppressValue("),U.throwOnUndefined&&U._emit("runtime.ensureDefined("),U.compile(A,w),U.throwOnUndefined&&U._emit(","+x.lineno+","+x.colno+")"),U._emit(`, env.opts.autoescape);
`))})},_.compileRoot=function(x,w){var U=this;w&&this.fail("compileRoot: root node can't have frame"),w=new m,this._emitFuncBegin(x,"root"),this._emitLine("var parentTemplate = null;"),this._compileChildren(x,w),this._emitLine("if(parentTemplate) {"),this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"),this._emitLine("} else {"),this._emitLine("cb(null, "+this.buffer+");"),this._emitLine("}"),this._emitFuncEnd(!0),this.inBlock=!0;var E=[],A=x.findAll(c.Block);A.forEach(function(C,T){var R=C.name.value;if(E.indexOf(R)!==-1)throw new Error('Block "'+R+'" defined more than once.');E.push(R),U._emitFuncBegin(C,"b_"+R);var B=new m;U._emitLine("var frame = frame.push(true);"),U.compile(C.body,B),U._emitFuncEnd()}),this._emitLine("return {"),A.forEach(function(C,T){var R="b_"+C.name.value;U._emitLine(R+": "+R+",")}),this._emitLine(`root: root
};`)},_.compile=function(x,w){var U=this["compile"+x.typename];U?U.call(this,x,w):this.fail("compile: Cannot compile node: "+x.typename,x.lineno,x.colno)},_.getCode=function(){return this.codebuf.join("")},S})(y);t.exports={compile:function(S,_,b,x,w){w===void 0&&(w={});var U=new u(x,w.throwOnUndefined),E=(b||[]).map(function(C){return C.preprocess}).filter(function(C){return!!C}),A=E.reduce(function(C,T){return T(C)},S);return U.compile(l.transform(s.parse(A,b,w),_,x)),U.getCode()},Compiler:u}}),(function(t,i,n){function a(h,f){h.prototype=Object.create(f.prototype),h.prototype.constructor=h,o(h,f)}function o(h,f){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,g){return m.__proto__=g,m},o(h,f)}var s=n(4),l=n(1),c=l.EmitterObj;t.exports=(function(h){a(f,h);function f(){return h.apply(this,arguments)||this}var p=f.prototype;return p.resolve=function(g,y){return s.resolve(s.dirname(g),y)},p.isRelative=function(g){return g.indexOf("./")===0||g.indexOf("../")===0},f})(c)}),(function(t,i,n){function a(B,L){B.prototype=Object.create(L.prototype),B.prototype.constructor=B,o(B,L)}function o(B,L){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,M){return k.__proto__=M,k},o(B,L)}var s=n(12),l=n(15),c=n(0),h=n(5),f=n(18),p=n(10),m=p.FileSystemLoader,g=p.WebLoader,y=p.PrecompiledLoader,d=n(20),u=n(21),v=n(1),S=v.Obj,_=v.EmitterObj,b=n(2),x=b.handleError,w=b.Frame,U=n(22);function E(B,L,N){s(function(){B(L,N)})}var A={type:"code",obj:{root:function(L,N,k,M,I){try{I(null,"")}catch(P){I(x(P,null,null))}}}},C=(function(B){a(L,B);function L(){return B.apply(this,arguments)||this}var N=L.prototype;return N.init=function(M,I){var P=this;I=this.opts=I||{},this.opts.dev=!!I.dev,this.opts.autoescape=I.autoescape!=null?I.autoescape:!0,this.opts.throwOnUndefined=!!I.throwOnUndefined,this.opts.trimBlocks=!!I.trimBlocks,this.opts.lstripBlocks=!!I.lstripBlocks,this.loaders=[],M?this.loaders=c.isArray(M)?M:[M]:m?this.loaders=[new m("views")]:g&&(this.loaders=[new g("/views")]),typeof window<"u"&&window.nunjucksPrecompiled&&this.loaders.unshift(new y(window.nunjucksPrecompiled)),this._initLoaders(),this.globals=u(),this.filters={},this.tests={},this.asyncFilters=[],this.extensions={},this.extensionsList=[],c._entries(f).forEach(function(K){var $=K[0],he=K[1];return P.addFilter($,he)}),c._entries(d).forEach(function(K){var $=K[0],he=K[1];return P.addTest($,he)})},N._initLoaders=function(){var M=this;this.loaders.forEach(function(I){I.cache={},typeof I.on=="function"&&(I.on("update",function(P,K){I.cache[P]=null,M.emit("update",P,K,I)}),I.on("load",function(P,K){M.emit("load",P,K,I)}))})},N.invalidateCache=function(){this.loaders.forEach(function(M){M.cache={}})},N.addExtension=function(M,I){return I.__name=M,this.extensions[M]=I,this.extensionsList.push(I),this},N.removeExtension=function(M){var I=this.getExtension(M);I&&(this.extensionsList=c.without(this.extensionsList,I),delete this.extensions[M])},N.getExtension=function(M){return this.extensions[M]},N.hasExtension=function(M){return!!this.extensions[M]},N.addGlobal=function(M,I){return this.globals[M]=I,this},N.getGlobal=function(M){if(typeof this.globals[M]>"u")throw new Error("global not found: "+M);return this.globals[M]},N.addFilter=function(M,I,P){var K=I;return P&&this.asyncFilters.push(M),this.filters[M]=K,this},N.getFilter=function(M){if(!this.filters[M])throw new Error("filter not found: "+M);return this.filters[M]},N.addTest=function(M,I){return this.tests[M]=I,this},N.getTest=function(M){if(!this.tests[M])throw new Error("test not found: "+M);return this.tests[M]},N.resolveTemplate=function(M,I,P){var K=M.isRelative&&I?M.isRelative(P):!1;return K&&M.resolve?M.resolve(I,P):P},N.getTemplate=function(M,I,P,K,$){var he=this,W=this,H=null;if(M&&M.raw&&(M=M.raw),c.isFunction(P)&&($=P,P=null,I=I||!1),c.isFunction(I)&&($=I,I=!1),M instanceof R)H=M;else{if(typeof M!="string")throw new Error("template names must be a string: "+M);for(var ce=0;ce<this.loaders.length;ce++){var se=this.loaders[ce];if(H=se.cache[this.resolveTemplate(se,P,M)],H)break}}if(H)if(I&&H.compile(),$){$(null,H);return}else return H;var ue,me=function(ye,ge){if(!ge&&!ye&&!K&&(ye=new Error("template not found: "+M)),ye)if($){$(ye);return}else throw ye;var Be;ge?(Be=new R(ge.src,he,ge.path,I),ge.noCache||(ge.loader.cache[M]=Be)):Be=new R(A,he,"",I),$?$(null,Be):ue=Be};return c.asyncIter(this.loaders,function(oe,ye,ge,Be){function z($e,ke){$e?Be($e):ke?(ke.loader=oe,Be(null,ke)):ge()}M=W.resolveTemplate(oe,P,M),oe.async?oe.getSource(M,z):z(null,oe.getSource(M))},me),ue},N.express=function(M){return U(this,M)},N.render=function(M,I,P){c.isFunction(I)&&(P=I,I=null);var K=null;return this.getTemplate(M,function($,he){if($&&P)E(P,$);else{if($)throw $;K=he.render(I,P)}}),K},N.renderString=function(M,I,P,K){c.isFunction(P)&&(K=P,P={}),P=P||{};var $=new R(M,this,P.path);return $.render(I,K)},N.waterfall=function(M,I,P){return l(M,I,P)},L})(_),T=(function(B){a(L,B);function L(){return B.apply(this,arguments)||this}var N=L.prototype;return N.init=function(M,I,P){var K=this;this.env=P||new C,this.ctx=c.extend({},M),this.blocks={},this.exported=[],c.keys(I).forEach(function($){K.addBlock($,I[$])})},N.lookup=function(M){return M in this.env.globals&&!(M in this.ctx)?this.env.globals[M]:this.ctx[M]},N.setVariable=function(M,I){this.ctx[M]=I},N.getVariables=function(){return this.ctx},N.addBlock=function(M,I){return this.blocks[M]=this.blocks[M]||[],this.blocks[M].push(I),this},N.getBlock=function(M){if(!this.blocks[M])throw new Error('unknown block "'+M+'"');return this.blocks[M][0]},N.getSuper=function(M,I,P,K,$,he){var W=c.indexOf(this.blocks[I]||[],P),H=this.blocks[I][W+1],ce=this;if(W===-1||!H)throw new Error('no super block available for "'+I+'"');H(M,ce,K,$,he)},N.addExport=function(M){this.exported.push(M)},N.getExported=function(){var M=this,I={};return this.exported.forEach(function(P){I[P]=M.ctx[P]}),I},L})(S),R=(function(B){a(L,B);function L(){return B.apply(this,arguments)||this}var N=L.prototype;return N.init=function(M,I,P,K){if(this.env=I||new C,c.isObject(M))switch(M.type){case"code":this.tmplProps=M.obj;break;case"string":this.tmplStr=M.obj;break;default:throw new Error("Unexpected template object type "+M.type+"; expected 'code', or 'string'")}else if(c.isString(M))this.tmplStr=M;else throw new Error("src must be a string or an object describing the source");if(this.path=P,K)try{this._compile()}catch($){throw c._prettifyError(this.path,this.env.opts.dev,$)}else this.compiled=!1},N.render=function(M,I,P){var K=this;typeof M=="function"?(P=M,M={}):typeof I=="function"&&(P=I,I=null);var $=!I;try{this.compile()}catch(ue){var he=c._prettifyError(this.path,this.env.opts.dev,ue);if(P)return E(P,he);throw he}var W=new T(M||{},this.blocks,this.env),H=I?I.push(!0):new w;H.topLevel=!0;var ce=null,se=!1;return this.rootRenderFunc(this.env,W,H,b,function(ue,me){if(!(se&&P&&typeof me<"u"))if(ue&&(ue=c._prettifyError(K.path,K.env.opts.dev,ue),se=!0),P)$?E(P,ue,me):P(ue,me);else{if(ue)throw ue;ce=me}}),ce},N.getExported=function(M,I,P){typeof M=="function"&&(P=M,M={}),typeof I=="function"&&(P=I,I=null);try{this.compile()}catch(he){if(P)return P(he);throw he}var K=I?I.push():new w;K.topLevel=!0;var $=new T(M||{},this.blocks,this.env);this.rootRenderFunc(this.env,$,K,b,function(he){he?P(he,null):P(null,$.getExported())})},N.compile=function(){this.compiled||this._compile()},N._compile=function(){var M;if(this.tmplProps)M=this.tmplProps;else{var I=h.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path,this.env.opts),P=new Function(I);M=P()}this.blocks=this._getBlocks(M),this.rootRenderFunc=M.root,this.compiled=!0},N._getBlocks=function(M){var I={};return c.keys(M).forEach(function(P){P.slice(0,2)==="b_"&&(I[P.slice(2)]=M[P])}),I},L})(S);t.exports={Environment:C,Template:R}}),(function(t,i,n){function a(p,m){p.prototype=Object.create(m.prototype),p.prototype.constructor=p,o(p,m)}function o(p,m){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(y,d){return y.__proto__=d,y},o(p,m)}var s=n(9),l=n(3),c=n(1).Obj,h=n(0),f=(function(p){a(m,p);function m(){return p.apply(this,arguments)||this}var g=m.prototype;return g.init=function(d){this.tokens=d,this.peeked=null,this.breakOnBlocks=null,this.dropLeadingWhitespace=!1,this.extensions=[]},g.nextToken=function(d){var u;if(this.peeked)if(!d&&this.peeked.type===s.TOKEN_WHITESPACE)this.peeked=null;else return u=this.peeked,this.peeked=null,u;if(u=this.tokens.nextToken(),!d)for(;u&&u.type===s.TOKEN_WHITESPACE;)u=this.tokens.nextToken();return u},g.peekToken=function(){return this.peeked=this.peeked||this.nextToken(),this.peeked},g.pushToken=function(d){if(this.peeked)throw new Error("pushToken: can only push one token on between reads");this.peeked=d},g.error=function(d,u,v){if(u===void 0||v===void 0){var S=this.peekToken()||{};u=S.lineno,v=S.colno}return u!==void 0&&(u+=1),v!==void 0&&(v+=1),new h.TemplateError(d,u,v)},g.fail=function(d,u,v){throw this.error(d,u,v)},g.skip=function(d){var u=this.nextToken();return!u||u.type!==d?(this.pushToken(u),!1):!0},g.expect=function(d){var u=this.nextToken();return u.type!==d&&this.fail("expected "+d+", got "+u.type,u.lineno,u.colno),u},g.skipValue=function(d,u){var v=this.nextToken();return!v||v.type!==d||v.value!==u?(this.pushToken(v),!1):!0},g.skipSymbol=function(d){return this.skipValue(s.TOKEN_SYMBOL,d)},g.advanceAfterBlockEnd=function(d){var u;return d||(u=this.peekToken(),u||this.fail("unexpected end of file"),u.type!==s.TOKEN_SYMBOL&&this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"),d=this.nextToken().value),u=this.nextToken(),u&&u.type===s.TOKEN_BLOCK_END?u.value.charAt(0)==="-"&&(this.dropLeadingWhitespace=!0):this.fail("expected block end in "+d+" statement"),u},g.advanceAfterVariableEnd=function(){var d=this.nextToken();d&&d.type===s.TOKEN_VARIABLE_END?this.dropLeadingWhitespace=d.value.charAt(d.value.length-this.tokens.tags.VARIABLE_END.length-1)==="-":(this.pushToken(d),this.fail("expected variable end"))},g.parseFor=function(){var d=this.peekToken(),u,v;this.skipSymbol("for")?(u=new l.For(d.lineno,d.colno),v="endfor"):this.skipSymbol("asyncEach")?(u=new l.AsyncEach(d.lineno,d.colno),v="endeach"):this.skipSymbol("asyncAll")?(u=new l.AsyncAll(d.lineno,d.colno),v="endall"):this.fail("parseFor: expected for{Async}",d.lineno,d.colno),u.name=this.parsePrimary(),u.name instanceof l.Symbol||this.fail("parseFor: variable name expected for loop");var S=this.peekToken().type;if(S===s.TOKEN_COMMA){var _=u.name;for(u.name=new l.Array(_.lineno,_.colno),u.name.addChild(_);this.skip(s.TOKEN_COMMA);){var b=this.parsePrimary();u.name.addChild(b)}}return this.skipSymbol("in")||this.fail('parseFor: expected "in" keyword for loop',d.lineno,d.colno),u.arr=this.parseExpression(),this.advanceAfterBlockEnd(d.value),u.body=this.parseUntilBlocks(v,"else"),this.skipSymbol("else")&&(this.advanceAfterBlockEnd("else"),u.else_=this.parseUntilBlocks(v)),this.advanceAfterBlockEnd(),u},g.parseMacro=function(){var d=this.peekToken();this.skipSymbol("macro")||this.fail("expected macro");var u=this.parsePrimary(!0),v=this.parseSignature(),S=new l.Macro(d.lineno,d.colno,u,v);return this.advanceAfterBlockEnd(d.value),S.body=this.parseUntilBlocks("endmacro"),this.advanceAfterBlockEnd(),S},g.parseCall=function(){var d=this.peekToken();this.skipSymbol("call")||this.fail("expected call");var u=this.parseSignature(!0)||new l.NodeList,v=this.parsePrimary();this.advanceAfterBlockEnd(d.value);var S=this.parseUntilBlocks("endcall");this.advanceAfterBlockEnd();var _=new l.Symbol(d.lineno,d.colno,"caller"),b=new l.Caller(d.lineno,d.colno,_,u,S),x=v.args.children;x[x.length-1]instanceof l.KeywordArgs||x.push(new l.KeywordArgs);var w=x[x.length-1];return w.addChild(new l.Pair(d.lineno,d.colno,_,b)),new l.Output(d.lineno,d.colno,[v])},g.parseWithContext=function(){var d=this.peekToken(),u=null;return this.skipSymbol("with")?u=!0:this.skipSymbol("without")&&(u=!1),u!==null&&(this.skipSymbol("context")||this.fail("parseFrom: expected context after with/without",d.lineno,d.colno)),u},g.parseImport=function(){var d=this.peekToken();this.skipSymbol("import")||this.fail("parseImport: expected import",d.lineno,d.colno);var u=this.parseExpression();this.skipSymbol("as")||this.fail('parseImport: expected "as" keyword',d.lineno,d.colno);var v=this.parseExpression(),S=this.parseWithContext(),_=new l.Import(d.lineno,d.colno,u,v,S);return this.advanceAfterBlockEnd(d.value),_},g.parseFrom=function(){var d=this.peekToken();this.skipSymbol("from")||this.fail("parseFrom: expected from");var u=this.parseExpression();this.skipSymbol("import")||this.fail("parseFrom: expected import",d.lineno,d.colno);for(var v=new l.NodeList,S;;){var _=this.peekToken();if(_.type===s.TOKEN_BLOCK_END){v.children.length||this.fail("parseFrom: Expected at least one import name",d.lineno,d.colno),_.value.charAt(0)==="-"&&(this.dropLeadingWhitespace=!0),this.nextToken();break}v.children.length>0&&!this.skip(s.TOKEN_COMMA)&&this.fail("parseFrom: expected comma",d.lineno,d.colno);var b=this.parsePrimary();if(b.value.charAt(0)==="_"&&this.fail("parseFrom: names starting with an underscore cannot be imported",b.lineno,b.colno),this.skipSymbol("as")){var x=this.parsePrimary();v.addChild(new l.Pair(b.lineno,b.colno,b,x))}else v.addChild(b);S=this.parseWithContext()}return new l.FromImport(d.lineno,d.colno,u,v,S)},g.parseBlock=function(){var d=this.peekToken();this.skipSymbol("block")||this.fail("parseBlock: expected block",d.lineno,d.colno);var u=new l.Block(d.lineno,d.colno);u.name=this.parsePrimary(),u.name instanceof l.Symbol||this.fail("parseBlock: variable name expected",d.lineno,d.colno),this.advanceAfterBlockEnd(d.value),u.body=this.parseUntilBlocks("endblock"),this.skipSymbol("endblock"),this.skipSymbol(u.name.value);var v=this.peekToken();return v||this.fail("parseBlock: expected endblock, got end of file"),this.advanceAfterBlockEnd(v.value),u},g.parseExtends=function(){var d="extends",u=this.peekToken();this.skipSymbol(d)||this.fail("parseTemplateRef: expected "+d);var v=new l.Extends(u.lineno,u.colno);return v.template=this.parseExpression(),this.advanceAfterBlockEnd(u.value),v},g.parseInclude=function(){var d="include",u=this.peekToken();this.skipSymbol(d)||this.fail("parseInclude: expected "+d);var v=new l.Include(u.lineno,u.colno);return v.template=this.parseExpression(),this.skipSymbol("ignore")&&this.skipSymbol("missing")&&(v.ignoreMissing=!0),this.advanceAfterBlockEnd(u.value),v},g.parseIf=function(){var d=this.peekToken(),u;this.skipSymbol("if")||this.skipSymbol("elif")||this.skipSymbol("elseif")?u=new l.If(d.lineno,d.colno):this.skipSymbol("ifAsync")?u=new l.IfAsync(d.lineno,d.colno):this.fail("parseIf: expected if, elif, or elseif",d.lineno,d.colno),u.cond=this.parseExpression(),this.advanceAfterBlockEnd(d.value),u.body=this.parseUntilBlocks("elif","elseif","else","endif");var v=this.peekToken();switch(v&&v.value){case"elseif":case"elif":u.else_=this.parseIf();break;case"else":this.advanceAfterBlockEnd(),u.else_=this.parseUntilBlocks("endif"),this.advanceAfterBlockEnd();break;case"endif":u.else_=null,this.advanceAfterBlockEnd();break;default:this.fail("parseIf: expected elif, else, or endif, got end of file")}return u},g.parseSet=function(){var d=this.peekToken();this.skipSymbol("set")||this.fail("parseSet: expected set",d.lineno,d.colno);for(var u=new l.Set(d.lineno,d.colno,[]),v;(v=this.parsePrimary())&&(u.targets.push(v),!!this.skip(s.TOKEN_COMMA)););return this.skipValue(s.TOKEN_OPERATOR,"=")?(u.value=this.parseExpression(),this.advanceAfterBlockEnd(d.value)):this.skip(s.TOKEN_BLOCK_END)?(u.body=new l.Capture(d.lineno,d.colno,this.parseUntilBlocks("endset")),u.value=null,this.advanceAfterBlockEnd()):this.fail("parseSet: expected = or block end in set tag",d.lineno,d.colno),u},g.parseSwitch=function(){var d="switch",u="endswitch",v="case",S="default",_=this.peekToken();!this.skipSymbol(d)&&!this.skipSymbol(v)&&!this.skipSymbol(S)&&this.fail('parseSwitch: expected "switch," "case" or "default"',_.lineno,_.colno);var b=this.parseExpression();this.advanceAfterBlockEnd(d),this.parseUntilBlocks(v,S,u);var x=this.peekToken(),w=[],U;do{this.skipSymbol(v);var E=this.parseExpression();this.advanceAfterBlockEnd(d);var A=this.parseUntilBlocks(v,S,u);w.push(new l.Case(x.line,x.col,E,A)),x=this.peekToken()}while(x&&x.value===v);switch(x.value){case S:this.advanceAfterBlockEnd(),U=this.parseUntilBlocks(u),this.advanceAfterBlockEnd();break;case u:this.advanceAfterBlockEnd();break;default:this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.')}return new l.Switch(_.lineno,_.colno,b,w,U)},g.parseStatement=function(){var d=this.peekToken(),u;if(d.type!==s.TOKEN_SYMBOL&&this.fail("tag name expected",d.lineno,d.colno),this.breakOnBlocks&&h.indexOf(this.breakOnBlocks,d.value)!==-1)return null;switch(d.value){case"raw":return this.parseRaw();case"verbatim":return this.parseRaw("verbatim");case"if":case"ifAsync":return this.parseIf();case"for":case"asyncEach":case"asyncAll":return this.parseFor();case"block":return this.parseBlock();case"extends":return this.parseExtends();case"include":return this.parseInclude();case"set":return this.parseSet();case"macro":return this.parseMacro();case"call":return this.parseCall();case"import":return this.parseImport();case"from":return this.parseFrom();case"filter":return this.parseFilterStatement();case"switch":return this.parseSwitch();default:if(this.extensions.length)for(var v=0;v<this.extensions.length;v++){var S=this.extensions[v];if(h.indexOf(S.tags||[],d.value)!==-1)return S.parse(this,l,s)}this.fail("unknown block tag: "+d.value,d.lineno,d.colno)}return u},g.parseRaw=function(d){d=d||"raw";for(var u="end"+d,v=new RegExp("([\\s\\S]*?){%\\s*("+d+"|"+u+")\\s*(?=%})%}"),S=1,_="",b=null,x=this.advanceAfterBlockEnd();(b=this.tokens._extractRegex(v))&&S>0;){var w=b[0],U=b[1],E=b[2];E===d?S+=1:E===u&&(S-=1),S===0?(_+=U,this.tokens.backN(w.length-U.length)):_+=w}return new l.Output(x.lineno,x.colno,[new l.TemplateData(x.lineno,x.colno,_)])},g.parsePostfix=function(d){for(var u,v=this.peekToken();v;){if(v.type===s.TOKEN_LEFT_PAREN)d=new l.FunCall(v.lineno,v.colno,d,this.parseSignature());else if(v.type===s.TOKEN_LEFT_BRACKET)u=this.parseAggregate(),u.children.length>1&&this.fail("invalid index"),d=new l.LookupVal(v.lineno,v.colno,d,u.children[0]);else if(v.type===s.TOKEN_OPERATOR&&v.value==="."){this.nextToken();var S=this.nextToken();S.type!==s.TOKEN_SYMBOL&&this.fail("expected name as lookup value, got "+S.value,S.lineno,S.colno),u=new l.Literal(S.lineno,S.colno,S.value),d=new l.LookupVal(v.lineno,v.colno,d,u)}else break;v=this.peekToken()}return d},g.parseExpression=function(){var d=this.parseInlineIf();return d},g.parseInlineIf=function(){var d=this.parseOr();if(this.skipSymbol("if")){var u=this.parseOr(),v=d;d=new l.InlineIf(d.lineno,d.colno),d.body=v,d.cond=u,this.skipSymbol("else")?d.else_=this.parseOr():d.else_=null}return d},g.parseOr=function(){for(var d=this.parseAnd();this.skipSymbol("or");){var u=this.parseAnd();d=new l.Or(d.lineno,d.colno,d,u)}return d},g.parseAnd=function(){for(var d=this.parseNot();this.skipSymbol("and");){var u=this.parseNot();d=new l.And(d.lineno,d.colno,d,u)}return d},g.parseNot=function(){var d=this.peekToken();return this.skipSymbol("not")?new l.Not(d.lineno,d.colno,this.parseNot()):this.parseIn()},g.parseIn=function(){for(var d=this.parseIs();;){var u=this.nextToken();if(!u)break;var v=u.type===s.TOKEN_SYMBOL&&u.value==="not";if(v||this.pushToken(u),this.skipSymbol("in")){var S=this.parseIs();d=new l.In(d.lineno,d.colno,d,S),v&&(d=new l.Not(d.lineno,d.colno,d))}else{v&&this.pushToken(u);break}}return d},g.parseIs=function(){var d=this.parseCompare();if(this.skipSymbol("is")){var u=this.skipSymbol("not"),v=this.parseCompare();d=new l.Is(d.lineno,d.colno,d,v),u&&(d=new l.Not(d.lineno,d.colno,d))}return d},g.parseCompare=function(){for(var d=["==","===","!=","!==","<",">","<=",">="],u=this.parseConcat(),v=[];;){var S=this.nextToken();if(S)if(d.indexOf(S.value)!==-1)v.push(new l.CompareOperand(S.lineno,S.colno,this.parseConcat(),S.value));else{this.pushToken(S);break}else break}return v.length?new l.Compare(v[0].lineno,v[0].colno,u,v):u},g.parseConcat=function(){for(var d=this.parseAdd();this.skipValue(s.TOKEN_TILDE,"~");){var u=this.parseAdd();d=new l.Concat(d.lineno,d.colno,d,u)}return d},g.parseAdd=function(){for(var d=this.parseSub();this.skipValue(s.TOKEN_OPERATOR,"+");){var u=this.parseSub();d=new l.Add(d.lineno,d.colno,d,u)}return d},g.parseSub=function(){for(var d=this.parseMul();this.skipValue(s.TOKEN_OPERATOR,"-");){var u=this.parseMul();d=new l.Sub(d.lineno,d.colno,d,u)}return d},g.parseMul=function(){for(var d=this.parseDiv();this.skipValue(s.TOKEN_OPERATOR,"*");){var u=this.parseDiv();d=new l.Mul(d.lineno,d.colno,d,u)}return d},g.parseDiv=function(){for(var d=this.parseFloorDiv();this.skipValue(s.TOKEN_OPERATOR,"/");){var u=this.parseFloorDiv();d=new l.Div(d.lineno,d.colno,d,u)}return d},g.parseFloorDiv=function(){for(var d=this.parseMod();this.skipValue(s.TOKEN_OPERATOR,"//");){var u=this.parseMod();d=new l.FloorDiv(d.lineno,d.colno,d,u)}return d},g.parseMod=function(){for(var d=this.parsePow();this.skipValue(s.TOKEN_OPERATOR,"%");){var u=this.parsePow();d=new l.Mod(d.lineno,d.colno,d,u)}return d},g.parsePow=function(){for(var d=this.parseUnary();this.skipValue(s.TOKEN_OPERATOR,"**");){var u=this.parseUnary();d=new l.Pow(d.lineno,d.colno,d,u)}return d},g.parseUnary=function(d){var u=this.peekToken(),v;return this.skipValue(s.TOKEN_OPERATOR,"-")?v=new l.Neg(u.lineno,u.colno,this.parseUnary(!0)):this.skipValue(s.TOKEN_OPERATOR,"+")?v=new l.Pos(u.lineno,u.colno,this.parseUnary(!0)):v=this.parsePrimary(),d||(v=this.parseFilter(v)),v},g.parsePrimary=function(d){var u=this.nextToken(),v,S=null;if(u?u.type===s.TOKEN_STRING?v=u.value:u.type===s.TOKEN_INT?v=parseInt(u.value,10):u.type===s.TOKEN_FLOAT?v=parseFloat(u.value):u.type===s.TOKEN_BOOLEAN?u.value==="true"?v=!0:u.value==="false"?v=!1:this.fail("invalid boolean: "+u.value,u.lineno,u.colno):u.type===s.TOKEN_NONE?v=null:u.type===s.TOKEN_REGEX&&(v=new RegExp(u.value.body,u.value.flags)):this.fail("expected expression, got end of file"),v!==void 0?S=new l.Literal(u.lineno,u.colno,v):u.type===s.TOKEN_SYMBOL?S=new l.Symbol(u.lineno,u.colno,u.value):(this.pushToken(u),S=this.parseAggregate()),d||(S=this.parsePostfix(S)),S)return S;throw this.error("unexpected token: "+u.value,u.lineno,u.colno)},g.parseFilterName=function(){for(var d=this.expect(s.TOKEN_SYMBOL),u=d.value;this.skipValue(s.TOKEN_OPERATOR,".");)u+="."+this.expect(s.TOKEN_SYMBOL).value;return new l.Symbol(d.lineno,d.colno,u)},g.parseFilterArgs=function(d){if(this.peekToken().type===s.TOKEN_LEFT_PAREN){var u=this.parsePostfix(d);return u.args.children}return[]},g.parseFilter=function(d){for(;this.skip(s.TOKEN_PIPE);){var u=this.parseFilterName();d=new l.Filter(u.lineno,u.colno,u,new l.NodeList(u.lineno,u.colno,[d].concat(this.parseFilterArgs(d))))}return d},g.parseFilterStatement=function(){var d=this.peekToken();this.skipSymbol("filter")||this.fail("parseFilterStatement: expected filter");var u=this.parseFilterName(),v=this.parseFilterArgs(u);this.advanceAfterBlockEnd(d.value);var S=new l.Capture(u.lineno,u.colno,this.parseUntilBlocks("endfilter"));this.advanceAfterBlockEnd();var _=new l.Filter(u.lineno,u.colno,u,new l.NodeList(u.lineno,u.colno,[S].concat(v)));return new l.Output(u.lineno,u.colno,[_])},g.parseAggregate=function(){var d=this.nextToken(),u;switch(d.type){case s.TOKEN_LEFT_PAREN:u=new l.Group(d.lineno,d.colno);break;case s.TOKEN_LEFT_BRACKET:u=new l.Array(d.lineno,d.colno);break;case s.TOKEN_LEFT_CURLY:u=new l.Dict(d.lineno,d.colno);break;default:return null}for(;;){var v=this.peekToken().type;if(v===s.TOKEN_RIGHT_PAREN||v===s.TOKEN_RIGHT_BRACKET||v===s.TOKEN_RIGHT_CURLY){this.nextToken();break}if(u.children.length>0&&(this.skip(s.TOKEN_COMMA)||this.fail("parseAggregate: expected comma after expression",d.lineno,d.colno)),u instanceof l.Dict){var S=this.parsePrimary();this.skip(s.TOKEN_COLON)||this.fail("parseAggregate: expected colon after dict key",d.lineno,d.colno);var _=this.parseExpression();u.addChild(new l.Pair(S.lineno,S.colno,S,_))}else{var b=this.parseExpression();u.addChild(b)}}return u},g.parseSignature=function(d,u){var v=this.peekToken();if(!u&&v.type!==s.TOKEN_LEFT_PAREN){if(d)return null;this.fail("expected arguments",v.lineno,v.colno)}v.type===s.TOKEN_LEFT_PAREN&&(v=this.nextToken());for(var S=new l.NodeList(v.lineno,v.colno),_=new l.KeywordArgs(v.lineno,v.colno),b=!1;;){if(v=this.peekToken(),!u&&v.type===s.TOKEN_RIGHT_PAREN){this.nextToken();break}else if(u&&v.type===s.TOKEN_BLOCK_END)break;if(b&&!this.skip(s.TOKEN_COMMA))this.fail("parseSignature: expected comma after expression",v.lineno,v.colno);else{var x=this.parseExpression();this.skipValue(s.TOKEN_OPERATOR,"=")?_.addChild(new l.Pair(x.lineno,x.colno,x,this.parseExpression())):S.addChild(x)}b=!0}return _.children.length&&S.addChild(_),S},g.parseUntilBlocks=function(){for(var d=this.breakOnBlocks,u=arguments.length,v=new Array(u),S=0;S<u;S++)v[S]=arguments[S];this.breakOnBlocks=v;var _=this.parse();return this.breakOnBlocks=d,_},g.parseNodes=function(){for(var d,u=[];d=this.nextToken();)if(d.type===s.TOKEN_DATA){var v=d.value,S=this.peekToken(),_=S&&S.value;this.dropLeadingWhitespace&&(v=v.replace(/^\s*/,""),this.dropLeadingWhitespace=!1),S&&(S.type===s.TOKEN_BLOCK_START&&_.charAt(_.length-1)==="-"||S.type===s.TOKEN_VARIABLE_START&&_.charAt(this.tokens.tags.VARIABLE_START.length)==="-"||S.type===s.TOKEN_COMMENT&&_.charAt(this.tokens.tags.COMMENT_START.length)==="-")&&(v=v.replace(/\s*$/,"")),u.push(new l.Output(d.lineno,d.colno,[new l.TemplateData(d.lineno,d.colno,v)]))}else if(d.type===s.TOKEN_BLOCK_START){this.dropLeadingWhitespace=!1;var b=this.parseStatement();if(!b)break;u.push(b)}else if(d.type===s.TOKEN_VARIABLE_START){var x=this.parseExpression();this.dropLeadingWhitespace=!1,this.advanceAfterVariableEnd(),u.push(new l.Output(d.lineno,d.colno,[x]))}else d.type===s.TOKEN_COMMENT?this.dropLeadingWhitespace=d.value.charAt(d.value.length-this.tokens.tags.COMMENT_END.length-1)==="-":this.fail("Unexpected token at top-level: "+d.type,d.lineno,d.colno);return u},g.parse=function(){return new l.NodeList(0,0,this.parseNodes())},g.parseAsRoot=function(){return new l.Root(0,0,this.parseNodes())},m})(c);t.exports={parse:function(m,g,y){var d=new f(s.lex(m,y));return g!==void 0&&(d.extensions=g),d.parseAsRoot()},Parser:f}}),(function(t,i,n){var a=n(0),o=` 
	\r `,s="()[]{}%*-+~/#,:|.<>=!",l="0123456789",c="{%",h="%}",f="{{",p="}}",m="{#",g="#}",y="string",d="whitespace",u="data",v="block-start",S="block-end",_="variable-start",b="variable-end",x="comment",w="left-paren",U="right-paren",E="left-bracket",A="right-bracket",C="left-curly",T="right-curly",R="operator",B="comma",L="colon",N="tilde",k="pipe",M="int",I="float",P="boolean",K="none",$="symbol",he="special",W="regex";function H(se,ue,me,oe){return{type:se,value:ue,lineno:me,colno:oe}}var ce=(function(){function se(me,oe){this.str=me,this.index=0,this.len=me.length,this.lineno=0,this.colno=0,this.in_code=!1,oe=oe||{};var ye=oe.tags||{};this.tags={BLOCK_START:ye.blockStart||c,BLOCK_END:ye.blockEnd||h,VARIABLE_START:ye.variableStart||f,VARIABLE_END:ye.variableEnd||p,COMMENT_START:ye.commentStart||m,COMMENT_END:ye.commentEnd||g},this.trimBlocks=!!oe.trimBlocks,this.lstripBlocks=!!oe.lstripBlocks}var ue=se.prototype;return ue.nextToken=function(){var oe=this.lineno,ye=this.colno,ge;if(this.in_code){var Be=this.current();if(this.isFinished())return null;if(Be==='"'||Be==="'")return H(y,this._parseString(Be),oe,ye);if(ge=this._extract(o))return H(d,ge,oe,ye);if((ge=this._extractString(this.tags.BLOCK_END))||(ge=this._extractString("-"+this.tags.BLOCK_END)))return this.in_code=!1,this.trimBlocks&&(Be=this.current(),Be===`
`?this.forward():Be==="\r"&&(this.forward(),Be=this.current(),Be===`
`?this.forward():this.back())),H(S,ge,oe,ye);if((ge=this._extractString(this.tags.VARIABLE_END))||(ge=this._extractString("-"+this.tags.VARIABLE_END)))return this.in_code=!1,H(b,ge,oe,ye);if(Be==="r"&&this.str.charAt(this.index+1)==="/"){this.forwardN(2);for(var z="";!this.isFinished();)if(this.current()==="/"&&this.previous()!=="\\"){this.forward();break}else z+=this.current(),this.forward();for(var $e=["g","i","m","y"],ke="";!this.isFinished();){var V=$e.indexOf(this.current())!==-1;if(V)ke+=this.current(),this.forward();else break}return H(W,{body:z,flags:ke},oe,ye)}else if(s.indexOf(Be)!==-1){this.forward();var X=["==","===","!=","!==","<=",">=","//","**"],fe=Be+this.current(),ie;switch(a.indexOf(X,fe)!==-1&&(this.forward(),Be=fe,a.indexOf(X,fe+this.current())!==-1&&(Be=fe+this.current(),this.forward())),Be){case"(":ie=w;break;case")":ie=U;break;case"[":ie=E;break;case"]":ie=A;break;case"{":ie=C;break;case"}":ie=T;break;case",":ie=B;break;case":":ie=L;break;case"~":ie=N;break;case"|":ie=k;break;default:ie=R}return H(ie,Be,oe,ye)}else if(ge=this._extractUntil(o+s),ge.match(/^[-+]?[0-9]+$/))if(this.current()==="."){this.forward();var D=this._extract(l);return H(I,ge+"."+D,oe,ye)}else return H(M,ge,oe,ye);else{if(ge.match(/^(true|false)$/))return H(P,ge,oe,ye);if(ge==="none")return H(K,ge,oe,ye);if(ge==="null")return H(K,ge,oe,ye);if(ge)return H($,ge,oe,ye);throw new Error("Unexpected value while parsing: "+ge)}}else{var F=this.tags.BLOCK_START.charAt(0)+this.tags.VARIABLE_START.charAt(0)+this.tags.COMMENT_START.charAt(0)+this.tags.COMMENT_END.charAt(0);if(this.isFinished())return null;if((ge=this._extractString(this.tags.BLOCK_START+"-"))||(ge=this._extractString(this.tags.BLOCK_START)))return this.in_code=!0,H(v,ge,oe,ye);if((ge=this._extractString(this.tags.VARIABLE_START+"-"))||(ge=this._extractString(this.tags.VARIABLE_START)))return this.in_code=!0,H(_,ge,oe,ye);ge="";var G,q=!1;for(this._matches(this.tags.COMMENT_START)&&(q=!0,ge=this._extractString(this.tags.COMMENT_START));(G=this._extractUntil(F))!==null;)if(ge+=G,(this._matches(this.tags.BLOCK_START)||this._matches(this.tags.VARIABLE_START)||this._matches(this.tags.COMMENT_START))&&!q){if(this.lstripBlocks&&this._matches(this.tags.BLOCK_START)&&this.colno>0&&this.colno<=ge.length){var ne=ge.slice(-this.colno);if(/^\s+$/.test(ne)&&(ge=ge.slice(0,-this.colno),!ge.length))return this.nextToken()}break}else if(this._matches(this.tags.COMMENT_END)){if(!q)throw new Error("unexpected end of comment");ge+=this._extractString(this.tags.COMMENT_END);break}else ge+=this.current(),this.forward();if(G===null&&q)throw new Error("expected end of comment, got end of file");return H(q?x:u,ge,oe,ye)}},ue._parseString=function(oe){this.forward();for(var ye="";!this.isFinished()&&this.current()!==oe;){var ge=this.current();if(ge==="\\"){switch(this.forward(),this.current()){case"n":ye+=`
`;break;case"t":ye+="	";break;case"r":ye+="\r";break;default:ye+=this.current()}this.forward()}else ye+=ge,this.forward()}return this.forward(),ye},ue._matches=function(oe){if(this.index+oe.length>this.len)return null;var ye=this.str.slice(this.index,this.index+oe.length);return ye===oe},ue._extractString=function(oe){return this._matches(oe)?(this.forwardN(oe.length),oe):null},ue._extractUntil=function(oe){return this._extractMatching(!0,oe||"")},ue._extract=function(oe){return this._extractMatching(!1,oe)},ue._extractMatching=function(oe,ye){if(this.isFinished())return null;var ge=ye.indexOf(this.current());if(oe&&ge===-1||!oe&&ge!==-1){var Be=this.current();this.forward();for(var z=ye.indexOf(this.current());(oe&&z===-1||!oe&&z!==-1)&&!this.isFinished();)Be+=this.current(),this.forward(),z=ye.indexOf(this.current());return Be}return""},ue._extractRegex=function(oe){var ye=this.currentStr().match(oe);return ye?(this.forwardN(ye[0].length),ye):null},ue.isFinished=function(){return this.index>=this.len},ue.forwardN=function(oe){for(var ye=0;ye<oe;ye++)this.forward()},ue.forward=function(){this.index++,this.previous()===`
`?(this.lineno++,this.colno=0):this.colno++},ue.backN=function(oe){for(var ye=0;ye<oe;ye++)this.back()},ue.back=function(){if(this.index--,this.current()===`
`){this.lineno--;var oe=this.src.lastIndexOf(`
`,this.index-1);oe===-1?this.colno=this.index:this.colno=this.index-oe}else this.colno--},ue.current=function(){return this.isFinished()?"":this.str.charAt(this.index)},ue.currentStr=function(){return this.isFinished()?"":this.str.substr(this.index)},ue.previous=function(){return this.str.charAt(this.index-1)},se})();t.exports={lex:function(ue,me){return new ce(ue,me)},TOKEN_STRING:y,TOKEN_WHITESPACE:d,TOKEN_DATA:u,TOKEN_BLOCK_START:v,TOKEN_BLOCK_END:S,TOKEN_VARIABLE_START:_,TOKEN_VARIABLE_END:b,TOKEN_COMMENT:x,TOKEN_LEFT_PAREN:w,TOKEN_RIGHT_PAREN:U,TOKEN_LEFT_BRACKET:E,TOKEN_RIGHT_BRACKET:A,TOKEN_LEFT_CURLY:C,TOKEN_RIGHT_CURLY:T,TOKEN_OPERATOR:R,TOKEN_COMMA:B,TOKEN_COLON:L,TOKEN_TILDE:N,TOKEN_PIPE:k,TOKEN_INT:M,TOKEN_FLOAT:I,TOKEN_BOOLEAN:P,TOKEN_NONE:K,TOKEN_SYMBOL:$,TOKEN_SPECIAL:he,TOKEN_REGEX:W}}),(function(t,i,n){function a(f,p){f.prototype=Object.create(p.prototype),f.prototype.constructor=f,o(f,p)}function o(f,p){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,y){return g.__proto__=y,g},o(f,p)}var s=n(6),l=n(19),c=l.PrecompiledLoader,h=(function(f){a(p,f);function p(g,y){var d;return d=f.call(this)||this,d.baseURL=g||".",y=y||{},d.useCache=!!y.useCache,d.async=!!y.async,d}var m=p.prototype;return m.resolve=function(y,d){throw new Error("relative templates not support in the browser yet")},m.getSource=function(y,d){var u=this,v=this.useCache,S;return this.fetch(this.baseURL+"/"+y,function(_,b){if(_)if(d)d(_.content);else if(_.status===404)S=null;else throw _.content;else S={src:b,path:y,noCache:!v},u.emit("load",y,S),d&&d(null,S)}),S},m.fetch=function(y,d){if(typeof window>"u")throw new Error("WebLoader can only by used in a browser");var u=new XMLHttpRequest,v=!0;u.onreadystatechange=function(){u.readyState===4&&v&&(v=!1,u.status===0||u.status===200?d(null,u.responseText):d({status:u.status,content:u.responseText}))},y+=(y.indexOf("?")===-1?"?":"&")+"s="+new Date().getTime(),u.open("GET",y,this.async),u.send()},p})(s);t.exports={WebLoader:h,PrecompiledLoader:c}}),(function(t,i,n){var a=n(0),o=n(7),s=o.Environment,l=o.Template,c=n(6),h=n(10),f=n(23),p=n(5),m=n(8),g=n(9),y=n(2),d=n(3),u=n(25),v;function S(_,b){b=b||{},a.isObject(_)&&(b=_,_=null);var x;return h.FileSystemLoader?x=new h.FileSystemLoader(_,{watch:b.watch,noCache:b.noCache}):h.WebLoader&&(x=new h.WebLoader(_,{useCache:b.web&&b.web.useCache,async:b.web&&b.web.async})),v=new s(x,b),b&&b.express&&v.express(b.express),v}t.exports={Environment:s,Template:l,Loader:c,FileSystemLoader:h.FileSystemLoader,NodeResolveLoader:h.NodeResolveLoader,PrecompiledLoader:h.PrecompiledLoader,WebLoader:h.WebLoader,compiler:p,parser:m,lexer:g,runtime:y,lib:a,nodes:d,installJinjaCompat:u,configure:S,reset:function(){v=void 0},compile:function(b,x,w,U){return v||S(),new l(b,x,w,U)},render:function(b,x,w){return v||S(),v.render(b,x,w)},renderString:function(b,x,w){return v||S(),v.renderString(b,x,w)},precompile:f?f.precompile:void 0,precompileString:f?f.precompileString:void 0}}),(function(t,i,n){var a=n(13),o=[],s=[],l=a.makeRequestCallFromTimer(c);function c(){if(s.length)throw s.shift()}t.exports=h;function h(p){var m;o.length?m=o.pop():m=new f,m.task=p,a(m)}function f(){this.task=null}f.prototype.call=function(){try{this.task.call()}catch(p){h.onerror?h.onerror(p):(s.push(p),l())}finally{this.task=null,o[o.length]=this}}}),(function(t,i,n){(function(a){t.exports=o;function o(d){s.length||l(),s[s.length]=d}var s=[],l,c=0,h=1024;function f(){for(;c<s.length;){var d=c;if(c=c+1,s[d].call(),c>h){for(var u=0,v=s.length-c;u<v;u++)s[u]=s[u+c];s.length-=c,c=0}}s.length=0,c=0}var p=typeof a<"u"?a:self,m=p.MutationObserver||p.WebKitMutationObserver;typeof m=="function"?l=g(f):l=y(f),o.requestFlush=l;function g(d){var u=1,v=new m(d),S=document.createTextNode("");return v.observe(S,{characterData:!0}),function(){u=-u,S.data=u}}function y(d){return function(){var v=setTimeout(_,0),S=setInterval(_,50);function _(){clearTimeout(v),clearInterval(S),d()}}}o.makeRequestCallFromTimer=y}).call(i,n(14))}),(function(t,i){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(n=window)}t.exports=n}),(function(t,i,n){var a,o;(function(s){var l=function(){var m=Array.prototype.slice.call(arguments);typeof m[0]=="function"&&m[0].apply(null,m.splice(1))},c=function(m){typeof setImmediate=="function"?setImmediate(m):typeof process<"u"&&process.nextTick?process.nextTick(m):setTimeout(m,0)},h=function(m){var g=function(y){var d=function(){return m.length&&m[y].apply(null,arguments),d.next()};return d.next=function(){return y<m.length-1?g(y+1):null},d};return g(0)},f=Array.isArray||function(m){return Object.prototype.toString.call(m)==="[object Array]"},p=function(m,g,y){var d=y?c:l;if(g=g||function(){},!f(m)){var u=new Error("First argument to waterfall must be an array of functions");return g(u)}if(!m.length)return g();var v=function(S){return function(_){if(_)g.apply(null,arguments),g=function(){};else{var b=Array.prototype.slice.call(arguments,1),x=S.next();x?b.push(v(x)):b.push(g),d(function(){S.apply(null,b)})}}};v(h(m))()};a=[],o=(function(){return p}).apply(i,a),o!==void 0&&(t.exports=o)})()}),(function(t,i,n){var a=typeof Reflect=="object"?Reflect:null,o=a&&typeof a.apply=="function"?a.apply:function(A,C,T){return Function.prototype.apply.call(A,C,T)},s;a&&typeof a.ownKeys=="function"?s=a.ownKeys:Object.getOwnPropertySymbols?s=function(A){return Object.getOwnPropertyNames(A).concat(Object.getOwnPropertySymbols(A))}:s=function(A){return Object.getOwnPropertyNames(A)};function l(E){console&&console.warn&&console.warn(E)}var c=Number.isNaN||function(A){return A!==A};function h(){h.init.call(this)}t.exports=h,t.exports.once=x,h.EventEmitter=h,h.prototype._events=void 0,h.prototype._eventsCount=0,h.prototype._maxListeners=void 0;var f=10;function p(E){if(typeof E!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof E)}Object.defineProperty(h,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(E){if(typeof E!="number"||E<0||c(E))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+E+".");f=E}}),h.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},h.prototype.setMaxListeners=function(A){if(typeof A!="number"||A<0||c(A))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+A+".");return this._maxListeners=A,this};function m(E){return E._maxListeners===void 0?h.defaultMaxListeners:E._maxListeners}h.prototype.getMaxListeners=function(){return m(this)},h.prototype.emit=function(A){for(var C=[],T=1;T<arguments.length;T++)C.push(arguments[T]);var R=A==="error",B=this._events;if(B!==void 0)R=R&&B.error===void 0;else if(!R)return!1;if(R){var L;if(C.length>0&&(L=C[0]),L instanceof Error)throw L;var N=new Error("Unhandled error."+(L?" ("+L.message+")":""));throw N.context=L,N}var k=B[A];if(k===void 0)return!1;if(typeof k=="function")o(k,this,C);else for(var M=k.length,I=S(k,M),T=0;T<M;++T)o(I[T],this,C);return!0};function g(E,A,C,T){var R,B,L;if(p(C),B=E._events,B===void 0?(B=E._events=Object.create(null),E._eventsCount=0):(B.newListener!==void 0&&(E.emit("newListener",A,C.listener?C.listener:C),B=E._events),L=B[A]),L===void 0)L=B[A]=C,++E._eventsCount;else if(typeof L=="function"?L=B[A]=T?[C,L]:[L,C]:T?L.unshift(C):L.push(C),R=m(E),R>0&&L.length>R&&!L.warned){L.warned=!0;var N=new Error("Possible EventEmitter memory leak detected. "+L.length+" "+String(A)+" listeners added. Use emitter.setMaxListeners() to increase limit");N.name="MaxListenersExceededWarning",N.emitter=E,N.type=A,N.count=L.length,l(N)}return E}h.prototype.addListener=function(A,C){return g(this,A,C,!1)},h.prototype.on=h.prototype.addListener,h.prototype.prependListener=function(A,C){return g(this,A,C,!0)};function y(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(E,A,C){var T={fired:!1,wrapFn:void 0,target:E,type:A,listener:C},R=y.bind(T);return R.listener=C,T.wrapFn=R,R}h.prototype.once=function(A,C){return p(C),this.on(A,d(this,A,C)),this},h.prototype.prependOnceListener=function(A,C){return p(C),this.prependListener(A,d(this,A,C)),this},h.prototype.removeListener=function(A,C){var T,R,B,L,N;if(p(C),R=this._events,R===void 0)return this;if(T=R[A],T===void 0)return this;if(T===C||T.listener===C)--this._eventsCount===0?this._events=Object.create(null):(delete R[A],R.removeListener&&this.emit("removeListener",A,T.listener||C));else if(typeof T!="function"){for(B=-1,L=T.length-1;L>=0;L--)if(T[L]===C||T[L].listener===C){N=T[L].listener,B=L;break}if(B<0)return this;B===0?T.shift():_(T,B),T.length===1&&(R[A]=T[0]),R.removeListener!==void 0&&this.emit("removeListener",A,N||C)}return this},h.prototype.off=h.prototype.removeListener,h.prototype.removeAllListeners=function(A){var C,T,R;if(T=this._events,T===void 0)return this;if(T.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):T[A]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete T[A]),this;if(arguments.length===0){var B=Object.keys(T),L;for(R=0;R<B.length;++R)L=B[R],L!=="removeListener"&&this.removeAllListeners(L);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(C=T[A],typeof C=="function")this.removeListener(A,C);else if(C!==void 0)for(R=C.length-1;R>=0;R--)this.removeListener(A,C[R]);return this};function u(E,A,C){var T=E._events;if(T===void 0)return[];var R=T[A];return R===void 0?[]:typeof R=="function"?C?[R.listener||R]:[R]:C?b(R):S(R,R.length)}h.prototype.listeners=function(A){return u(this,A,!0)},h.prototype.rawListeners=function(A){return u(this,A,!1)},h.listenerCount=function(E,A){return typeof E.listenerCount=="function"?E.listenerCount(A):v.call(E,A)},h.prototype.listenerCount=v;function v(E){var A=this._events;if(A!==void 0){var C=A[E];if(typeof C=="function")return 1;if(C!==void 0)return C.length}return 0}h.prototype.eventNames=function(){return this._eventsCount>0?s(this._events):[]};function S(E,A){for(var C=new Array(A),T=0;T<A;++T)C[T]=E[T];return C}function _(E,A){for(;A+1<E.length;A++)E[A]=E[A+1];E.pop()}function b(E){for(var A=new Array(E.length),C=0;C<A.length;++C)A[C]=E[C].listener||E[C];return A}function x(E,A){return new Promise(function(C,T){function R(L){E.removeListener(A,B),T(L)}function B(){typeof E.removeListener=="function"&&E.removeListener("error",R),C([].slice.call(arguments))}U(E,A,B,{once:!0}),A!=="error"&&w(E,R,{once:!0})})}function w(E,A,C){typeof E.on=="function"&&U(E,"error",A,C)}function U(E,A,C,T){if(typeof E.on=="function")T.once?E.once(A,C):E.on(A,C);else if(typeof E.addEventListener=="function")E.addEventListener(A,function R(B){T.once&&E.removeEventListener(A,R),C(B)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof E)}}),(function(t,i,n){var a=n(3),o=n(0),s=0;function l(){return"hole_"+s++}function c(v,S){for(var _=null,b=0;b<v.length;b++){var x=S(v[b]);x!==v[b]&&(_||(_=v.slice()),_[b]=x)}return _||v}function h(v,S,_){if(!(v instanceof a.Node))return v;if(!_){var b=S(v);if(b&&b!==v)return b}if(v instanceof a.NodeList){var x=c(v.children,function(C){return h(C,S,_)});x!==v.children&&(v=new a[v.typename](v.lineno,v.colno,x))}else if(v instanceof a.CallExtension){var w=h(v.args,S,_),U=c(v.contentArgs,function(C){return h(C,S,_)});(w!==v.args||U!==v.contentArgs)&&(v=new a[v.typename](v.extName,v.prop,w,U))}else{var E=v.fields.map(function(C){return v[C]}),A=c(E,function(C){return h(C,S,_)});A!==E&&(v=new a[v.typename](v.lineno,v.colno),A.forEach(function(C,T){v[v.fields[T]]=C}))}return _&&S(v)||v}function f(v,S){return h(v,S,!0)}function p(v,S,_){var b=[],x=f(_?v[_]:v,function(w){var U;return w instanceof a.Block?w:((w instanceof a.Filter&&o.indexOf(S,w.name.value)!==-1||w instanceof a.CallExtensionAsync)&&(U=new a.Symbol(w.lineno,w.colno,l()),b.push(new a.FilterAsync(w.lineno,w.colno,w.name,w.args,U))),U)});return _?v[_]=x:v=x,b.length?(b.push(v),new a.NodeList(v.lineno,v.colno,b)):v}function m(v,S){return f(v,function(_){return _ instanceof a.Output?p(_,S):_ instanceof a.Set?p(_,S,"value"):_ instanceof a.For?p(_,S,"arr"):_ instanceof a.If?p(_,S,"cond"):_ instanceof a.CallExtension?p(_,S,"args"):void 0})}function g(v){return h(v,function(S){if(S instanceof a.Block){var _=!1,b=l();S.body=h(S.body,function(x){if(x instanceof a.FunCall&&x.name.value==="super")return _=!0,new a.Symbol(x.lineno,x.colno,b)}),_&&S.body.children.unshift(new a.Super(0,0,S.name,new a.Symbol(0,0,b)))}})}function y(v){return f(v,function(S){if(!(!(S instanceof a.If)&&!(S instanceof a.For))){var _=!1;if(h(S,function(b){if(b instanceof a.FilterAsync||b instanceof a.IfAsync||b instanceof a.AsyncEach||b instanceof a.AsyncAll||b instanceof a.CallExtensionAsync)return _=!0,b}),_){if(S instanceof a.If)return new a.IfAsync(S.lineno,S.colno,S.cond,S.body,S.else_);if(S instanceof a.For&&!(S instanceof a.AsyncAll))return new a.AsyncEach(S.lineno,S.colno,S.arr,S.name,S.body,S.else_)}}})}function d(v,S){return y(g(m(v,S)))}function u(v,S){return d(v,S||[])}t.exports={transform:u}}),(function(t,s,n){var a=n(0),o=n(2),s=t.exports={};function l(V,X){return V==null||V===!1?X:V}s.abs=Math.abs;function c(V){return V!==V}function h(V,X,fe){var ie,D=[],F=[];for(ie=0;ie<V.length;ie++)ie%X===0&&F.length&&(D.push(F),F=[]),F.push(V[ie]);if(F.length){if(fe)for(ie=F.length;ie<X;ie++)F.push(fe);D.push(F)}return D}s.batch=h;function f(V){V=l(V,"");var X=V.toLowerCase();return o.copySafeness(V,X.charAt(0).toUpperCase()+X.slice(1))}s.capitalize=f;function p(V,X){if(V=l(V,""),X=X||80,V.length>=X)return V;var fe=X-V.length,ie=a.repeat(" ",fe/2-fe%2),D=a.repeat(" ",fe/2);return o.copySafeness(V,ie+V+D)}s.center=p;function m(V,X,fe){return fe?V||X:V!==void 0?V:X}s.default=m;function g(V,X,fe){if(!a.isObject(V))throw new a.TemplateError("dictsort filter: val must be an object");var ie=[];for(var D in V)ie.push([D,V[D]]);var F;if(fe===void 0||fe==="key")F=0;else if(fe==="value")F=1;else throw new a.TemplateError("dictsort filter: You can only sort by either key or value");return ie.sort(function(G,q){var ne=G[F],ae=q[F];return X||(a.isString(ne)&&(ne=ne.toUpperCase()),a.isString(ae)&&(ae=ae.toUpperCase())),ne>ae?1:ne===ae?0:-1}),ie}s.dictsort=g;function y(V,X){return JSON.stringify(V,null,X)}s.dump=y;function d(V){return V instanceof o.SafeString?V:(V=V??"",o.markSafe(a.escape(V.toString())))}s.escape=d;function u(V){return V instanceof o.SafeString?V:(V=V??"",o.markSafe(V.toString()))}s.safe=u;function v(V){return V[0]}s.first=v;function S(V){return V=V??"",o.markSafe(a.escape(V.toString()))}s.forceescape=S;function _(V,X){return a.groupBy(V,X,this.env.opts.throwOnUndefined)}s.groupby=_;function b(V,X,fe){if(V=l(V,""),V==="")return"";X=X||4;var ie=V.split(`
`),D=a.repeat(" ",X),F=ie.map(function(G,q){return q===0&&!fe?G:""+D+G}).join(`
`);return o.copySafeness(V,F)}s.indent=b;function x(V,X,fe){return X=X||"",fe&&(V=a.map(V,function(ie){return ie[fe]})),V.join(X)}s.join=x;function w(V){return V[V.length-1]}s.last=w;function U(V){var X=l(V,"");return X!==void 0?typeof Map=="function"&&X instanceof Map||typeof Set=="function"&&X instanceof Set?X.size:a.isObject(X)&&!(X instanceof o.SafeString)?a.keys(X).length:X.length:0}s.length=U;function E(V){if(a.isString(V))return V.split("");if(a.isObject(V))return a._entries(V||{}).map(function(X){var fe=X[0],ie=X[1];return{key:fe,value:ie}});if(a.isArray(V))return V;throw new a.TemplateError("list filter: type not iterable")}s.list=E;function A(V){return V=l(V,""),V.toLowerCase()}s.lower=A;function C(V){return V==null?"":o.copySafeness(V,V.replace(/\r\n|\n/g,`<br />
`))}s.nl2br=C;function T(V){return V[Math.floor(Math.random()*V.length)]}s.random=T;function R(V){function X(fe,ie,D){ie===void 0&&(ie="truthy");var F=this,G=F.env.getTest(ie);return a.toArray(fe).filter(function(ne){return G.call(F,ne,D)===V})}return X}s.reject=R(!1);function B(V,X){return V.filter(function(fe){return!fe[X]})}s.rejectattr=B,s.select=R(!0);function L(V,X){return V.filter(function(fe){return!!fe[X]})}s.selectattr=L;function N(V,X,fe,ie){var D=V;if(X instanceof RegExp)return V.replace(X,fe);typeof ie>"u"&&(ie=-1);var F="";if(typeof X=="number")X=""+X;else if(typeof X!="string")return V;if(typeof V=="number"&&(V=""+V),typeof V!="string"&&!(V instanceof o.SafeString))return V;if(X==="")return F=fe+V.split("").join(fe)+fe,o.copySafeness(V,F);var G=V.indexOf(X);if(ie===0||G===-1)return V;for(var q=0,ne=0;G>-1&&(ie===-1||ne<ie);)F+=V.substring(q,G)+fe,q=G+X.length,ne++,G=V.indexOf(X,q);return q<V.length&&(F+=V.substring(q)),o.copySafeness(D,F)}s.replace=N;function k(V){var X;return a.isString(V)?X=E(V):X=a.map(V,function(fe){return fe}),X.reverse(),a.isString(V)?o.copySafeness(V,X.join("")):X}s.reverse=k;function M(V,X,fe){X=X||0;var ie=Math.pow(10,X),D;return fe==="ceil"?D=Math.ceil:fe==="floor"?D=Math.floor:D=Math.round,D(V*ie)/ie}s.round=M;function I(V,X,fe){for(var ie=Math.floor(V.length/X),D=V.length%X,F=[],G=0,q=0;q<X;q++){var ne=G+q*ie;q<D&&G++;var ae=G+(q+1)*ie,be=V.slice(ne,ae);fe&&q>=D&&be.push(fe),F.push(be)}return F}s.slice=I;function P(V,X,fe){return fe===void 0&&(fe=0),X&&(V=a.map(V,function(ie){return ie[X]})),fe+V.reduce(function(ie,D){return ie+D},0)}s.sum=P,s.sort=o.makeMacro(["value","reverse","case_sensitive","attribute"],[],function(X,fe,ie,D){var F=this,G=a.map(X,function(ne){return ne}),q=a.getAttrGetter(D);return G.sort(function(ne,ae){var be=D?q(ne):ne,Ee=D?q(ae):ae;if(F.env.opts.throwOnUndefined&&D&&(be===void 0||Ee===void 0))throw new TypeError('sort: attribute "'+D+'" resolved to undefined');return!ie&&a.isString(be)&&a.isString(Ee)&&(be=be.toLowerCase(),Ee=Ee.toLowerCase()),be<Ee?fe?1:-1:be>Ee?fe?-1:1:0}),G});function K(V){return o.copySafeness(V,V)}s.string=K;function $(V,X){V=l(V,"");var fe=/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,ie=W(V.replace(fe,"")),D="";return X?D=ie.replace(/^ +| +$/gm,"").replace(/ +/g," ").replace(/(\r\n)/g,`
`).replace(/\n\n\n+/g,`

`):D=ie.replace(/\s+/gi," "),o.copySafeness(V,D)}s.striptags=$;function he(V){V=l(V,"");var X=V.split(" ").map(function(fe){return f(fe)});return o.copySafeness(V,X.join(" "))}s.title=he;function W(V){return o.copySafeness(V,V.replace(/^\s*|\s*$/g,""))}s.trim=W;function H(V,X,fe,ie){var D=V;if(V=l(V,""),X=X||255,V.length<=X)return V;if(fe)V=V.substring(0,X);else{var F=V.lastIndexOf(" ",X);F===-1&&(F=X),V=V.substring(0,F)}return V+=ie??"...",o.copySafeness(D,V)}s.truncate=H;function ce(V){return V=l(V,""),V.toUpperCase()}s.upper=ce;function se(V){var X=encodeURIComponent;if(a.isString(V))return X(V);var fe=a.isArray(V)?V:a._entries(V);return fe.map(function(ie){var D=ie[0],F=ie[1];return X(D)+"="+X(F)}).join("&")}s.urlencode=se;var ue=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,me=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,oe=/^https?:\/\/.*$/,ye=/^www\./,ge=/\.(?:org|net|com)(?:\:|\/|$)/;function Be(V,X,fe){c(X)&&(X=1/0);var ie=fe===!0?' rel="nofollow"':"",D=V.split(/(\s+)/).filter(function(F){return F&&F.length}).map(function(F){var G=F.match(ue),q=G?G[1]:F,ne=q.substr(0,X);return oe.test(q)?'<a href="'+q+'"'+ie+">"+ne+"</a>":ye.test(q)?'<a href="http://'+q+'"'+ie+">"+ne+"</a>":me.test(q)?'<a href="mailto:'+q+'">'+q+"</a>":ge.test(q)?'<a href="http://'+q+'"'+ie+">"+ne+"</a>":F});return D.join("")}s.urlize=Be;function z(V){V=l(V,"");var X=V?V.match(/\w+/g):null;return X?X.length:null}s.wordcount=z;function $e(V,X){var fe=parseFloat(V);return c(fe)?X:fe}s.float=$e;var ke=o.makeMacro(["value","default","base"],[],function(X,fe,ie){ie===void 0&&(ie=10);var D=parseInt(X,ie);return c(D)?fe:D});s.int=ke,s.d=s.default,s.e=s.escape}),(function(t,i,n){function a(c,h){c.prototype=Object.create(h.prototype),c.prototype.constructor=c,o(c,h)}function o(c,h){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,m){return p.__proto__=m,p},o(c,h)}var s=n(6),l=(function(c){a(h,c);function h(p){var m;return m=c.call(this)||this,m.precompiled=p||{},m}var f=h.prototype;return f.getSource=function(m){return this.precompiled[m]?{src:{type:"code",obj:this.precompiled[m]},path:m}:null},h})(s);t.exports={PrecompiledLoader:l}}),(function(t,i,n){var a=n(2).SafeString;function o(T){return typeof T=="function"}i.callable=o;function s(T){return T!==void 0}i.defined=s;function l(T,R){return T%R===0}i.divisibleby=l;function c(T){return T instanceof a}i.escaped=c;function h(T,R){return T===R}i.equalto=h,i.eq=i.equalto,i.sameas=i.equalto;function f(T){return T%2===0}i.even=f;function p(T){return!T}i.falsy=p;function m(T,R){return T>=R}i.ge=m;function g(T,R){return T>R}i.greaterthan=g,i.gt=i.greaterthan;function y(T,R){return T<=R}i.le=y;function d(T,R){return T<R}i.lessthan=d,i.lt=i.lessthan;function u(T){return T.toLowerCase()===T}i.lower=u;function v(T,R){return T!==R}i.ne=v;function S(T){return T===null}i.null=S;function _(T){return typeof T=="number"}i.number=_;function b(T){return T%2===1}i.odd=b;function x(T){return typeof T=="string"}i.string=x;function w(T){return!!T}i.truthy=w;function U(T){return T===void 0}i.undefined=U;function E(T){return T.toUpperCase()===T}i.upper=E;function A(T){return typeof Symbol<"u"?!!T[Symbol.iterator]:Array.isArray(T)||typeof T=="string"}i.iterable=A;function C(T){var R=T!=null&&typeof T=="object"&&!Array.isArray(T);return Set?R&&!(T instanceof Set):R}i.mapping=C}),(function(t,i,n){function a(l){var c=-1;return{current:null,reset:function(){c=-1,this.current=null},next:function(){return c++,c>=l.length&&(c=0),this.current=l[c],this.current}}}function o(l){l=l||",";var c=!0;return function(){var h=c?"":l;return c=!1,h}}function s(){return{range:function(c,h,f){typeof h>"u"?(h=c,c=0,f=1):f||(f=1);var p=[];if(f>0)for(var m=c;m<h;m+=f)p.push(m);else for(var g=c;g>h;g+=f)p.push(g);return p},cycler:function(){return a(Array.prototype.slice.call(arguments))},joiner:function(c){return o(c)}}}t.exports=s}),(function(t,i,n){var a=n(4);t.exports=function(s,l){function c(h,f){if(this.name=h,this.path=h,this.defaultEngine=f.defaultEngine,this.ext=a.extname(h),!this.ext&&!this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");this.ext||(this.name+=this.ext=(this.defaultEngine[0]!=="."?".":"")+this.defaultEngine)}return c.prototype.render=function(f,p){s.render(this.name,f,p)},l.set("view",c),l.set("nunjucksEnv",s),s}}),(function(t,i,n){var a=n(4),o=n(4),s=n(0),l=s._prettifyError,c=n(5),h=n(7),f=h.Environment,p=n(24);function m(u,v){return Array.isArray(v)?v.some(function(S){return u.match(S)}):!1}function g(u,v){v=v||{},v.isString=!0;var S=v.env||new f([]),_=v.wrapper||p;if(!v.name)throw new Error('the "name" option is required when compiling a string');return _([d(u,v.name,S)],v)}function y(u,v){v=v||{};var S=v.env||new f([]),_=v.wrapper||p;if(v.isString)return g(u,v);var b=a.existsSync(u)&&a.statSync(u),x=[],w=[];function U(C){a.readdirSync(C).forEach(function(T){var R=o.join(C,T),B=R.substr(o.join(u,"/").length),L=a.statSync(R);L&&L.isDirectory()?(B+="/",m(B,v.exclude)||U(R)):m(B,v.include)&&w.push(R)})}if(b.isFile())x.push(d(a.readFileSync(u,"utf-8"),v.name||u,S));else if(b.isDirectory()){U(u);for(var E=0;E<w.length;E++){var A=w[E].replace(o.join(u,"/"),"");try{x.push(d(a.readFileSync(w[E],"utf-8"),A,S))}catch(C){if(v.force)console.error(C);else throw C}}}return _(x,v)}function d(u,v,S){S=S||new f([]);var _=S.asyncFilters,b=S.extensionsList,x;v=v.replace(/\\/g,"/");try{x=c.compile(u,_,b,v,S.opts)}catch(w){throw l(v,!1,w)}return{name:v,template:x}}t.exports={precompile:y,precompileString:g}}),(function(t,i,n){function a(o,s){var l="";s=s||{};for(var c=0;c<o.length;c++){var h=JSON.stringify(o[c].name),f=o[c].template;l+="(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["+h+`] = (function() {
`+f+`
})();
`,s.asFunction&&(l+="return function(ctx, cb) { return nunjucks.render("+h+`, ctx, cb); }
`),l+=`})();
`}return l}t.exports=a}),(function(t,i,n){function a(){var o=this.runtime,s=this.lib,l=this.compiler.Compiler,c=this.parser.Parser,h=this.nodes,f=this.lexer,p=o.contextOrFrameLookup,m=o.memberLookup,g,y;l&&(g=l.prototype.assertType),c&&(y=c.prototype.parseAggregate);function d(){o.contextOrFrameLookup=p,o.memberLookup=m,l&&(l.prototype.assertType=g),c&&(c.prototype.parseAggregate=y)}o.contextOrFrameLookup=function(U,E,A){var C=p.apply(this,arguments);if(C!==void 0)return C;switch(A){case"True":return!0;case"False":return!1;case"None":return null;default:return}};function u(w){return{index:w.index,lineno:w.lineno,colno:w.colno}}if(h&&l&&c){var v=h.Node.extend("Slice",{fields:["start","stop","step"],init:function(U,E,A,C,T){A=A||new h.Literal(U,E,null),C=C||new h.Literal(U,E,null),T=T||new h.Literal(U,E,1),this.parent(U,E,A,C,T)}});l.prototype.assertType=function(U){U instanceof v||g.apply(this,arguments)},l.prototype.compileSlice=function(U,E){this._emit("("),this._compileExpression(U.start,E),this._emit("),("),this._compileExpression(U.stop,E),this._emit("),("),this._compileExpression(U.step,E),this._emit(")")},c.prototype.parseAggregate=function(){var U=this,E=u(this.tokens);E.colno--,E.index--;try{return y.apply(this)}catch(k){var A=u(this.tokens),C=function(){return s._assign(U.tokens,A),k};s._assign(this.tokens,E),this.peeked=!1;var T=this.peekToken();if(T.type!==f.TOKEN_LEFT_BRACKET)throw C();this.nextToken();for(var R=new v(T.lineno,T.colno),B=!1,L=0;L<=R.fields.length&&!this.skip(f.TOKEN_RIGHT_BRACKET);L++){if(L===R.fields.length)if(B)this.fail("parseSlice: too many slice components",T.lineno,T.colno);else break;if(this.skip(f.TOKEN_COLON))B=!0;else{var N=R.fields[L];R[N]=this.parseExpression(),B=this.skip(f.TOKEN_COLON)||B}}if(!B)throw C();return new h.Array(T.lineno,T.colno,[R])}}}function S(w,U,E,A){w=w||[],U===null&&(U=A<0?w.length-1:0),E===null?E=A<0?-1:w.length:E<0&&(E+=w.length),U<0&&(U+=w.length);for(var C=[],T=U;!(T<0||T>w.length||A>0&&T>=E||A<0&&T<=E);T+=A)C.push(o.memberLookup(w,T));return C}function _(w,U){return Object.prototype.hasOwnProperty.call(w,U)}var b={pop:function(U){if(U===void 0)return this.pop();if(U>=this.length||U<0)throw new Error("KeyError");return this.splice(U,1)},append:function(U){return this.push(U)},remove:function(U){for(var E=0;E<this.length;E++)if(this[E]===U)return this.splice(E,1);throw new Error("ValueError")},count:function(U){for(var E=0,A=0;A<this.length;A++)this[A]===U&&E++;return E},index:function(U){var E;if((E=this.indexOf(U))===-1)throw new Error("ValueError");return E},find:function(U){return this.indexOf(U)},insert:function(U,E){return this.splice(U,0,E)}},x={items:function(){return s._entries(this)},values:function(){return s._values(this)},keys:function(){return s.keys(this)},get:function(U,E){var A=this[U];return A===void 0&&(A=E),A},has_key:function(U){return _(this,U)},pop:function(U,E){var A=this[U];if(A===void 0&&E!==void 0)A=E;else{if(A===void 0)throw new Error("KeyError");delete this[U]}return A},popitem:function(){var U=s.keys(this);if(!U.length)throw new Error("KeyError");var E=U[0],A=this[E];return delete this[E],[E,A]},setdefault:function(U,E){return E===void 0&&(E=null),U in this||(this[U]=E),this[U]},update:function(U){return s._assign(this,U),null}};return x.iteritems=x.items,x.itervalues=x.values,x.iterkeys=x.keys,o.memberLookup=function(U,E,A){return arguments.length===4?S.apply(this,arguments):(U=U||{},s.isArray(U)&&_(b,E)?b[E].bind(U):s.isObject(U)&&_(x,E)?x[E].bind(U):m.apply(this,arguments))},d}t.exports=a})])})})(Xa)),Xa.exports}var H_=Z_();const Y_=G_(H_);function X_(r){const e={};for(const[i,n]of Object.entries(r.templates))e[i]=Y_.compile(n);const t=i=>{i.result={};for(const n of Object.keys(r.templates))i.result[n]=e[n].render(i.properties||{})};return"features"in r.geojson?r.geojson.features.forEach(t):t(r.geojson),r.geojson}const cu={templateExtractor:X_};Ht.Quyuan=cu,Ht.default=cu,Object.defineProperties(Ht,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
