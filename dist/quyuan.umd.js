(function(Ki,qi){typeof exports=="object"&&typeof module<"u"?qi(exports):typeof define=="function"&&define.amd?define(["exports"],qi):(Ki=typeof globalThis<"u"?globalThis:Ki||self,qi(Ki.Quyuan={}))})(this,(function(Ki){"use strict";var qi=typeof document<"u"?document.currentScript:null;class Ds extends HTMLElement{_shadowRoot;_connected=!1;constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"})}connectedCallback(){this._connected?this.render():(this._connected=!0,this.render(),this.firstUpdated())}disconnectedCallback(){this._connected=!1}attributeChangedCallback(e,t,i){t!==i&&this.render()}firstUpdated(){}html(e,...t){return e.reduce((i,s,n)=>i+s+(t[n]||""),"")}css(e,...t){return`<style>${e.reduce((i,s,n)=>i+s+(t[n]||""),"")}</style>`}updateShadowRoot(e){this._shadowRoot.innerHTML=e}query(e){return this._shadowRoot.querySelector(e)}queryAll(e){return this._shadowRoot.querySelectorAll(e)}dispatch(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}}function ol(r){return r!==null&&typeof r=="object"&&"constructor"in r&&r.constructor===Object}function jn(r={},e={}){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof r[i]>"u"?r[i]=e[i]:ol(e[i])&&ol(r[i])&&Object.keys(e[i]).length>0&&jn(r[i],e[i])})}const ll={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function kt(){const r=typeof document<"u"?document:{};return jn(r,ll),r}const vu={document:ll,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(r){return typeof setTimeout>"u"?(r(),null):setTimeout(r,0)},cancelAnimationFrame(r){typeof setTimeout>"u"||clearTimeout(r)}};function Ut(){const r=typeof window<"u"?window:{};return jn(r,vu),r}function ki(r=""){return r.trim().split(" ").filter(e=>!!e.trim())}function _u(r){const e=r;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Kn(r,e=0){return setTimeout(r,e)}function Ns(){return Date.now()}function Au(r){const e=Ut();let t;return e.getComputedStyle&&(t=e.getComputedStyle(r,null)),!t&&r.currentStyle&&(t=r.currentStyle),t||(t=r.style),t}function wu(r,e="x"){const t=Ut();let i,s,n;const o=Au(r);return t.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(a=>a.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(s==="none"?"":s)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?s=n.m41:i.length===16?s=parseFloat(i[12]):s=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?s=n.m42:i.length===16?s=parseFloat(i[13]):s=parseFloat(i[5])),s||0}function us(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function yu(r){return typeof window<"u"&&typeof window.HTMLElement<"u"?r instanceof HTMLElement:r&&(r.nodeType===1||r.nodeType===11)}function Zt(...r){const e=Object(r[0]);for(let t=1;t<r.length;t+=1){const i=r[t];if(i!=null&&!yu(i)){const s=Object.keys(Object(i)).filter(n=>n!=="__proto__"&&n!=="constructor"&&n!=="prototype");for(let n=0,o=s.length;n<o;n+=1){const a=s[n],l=Object.getOwnPropertyDescriptor(i,a);l!==void 0&&l.enumerable&&(us(e[a])&&us(i[a])?i[a].__swiper__?e[a]=i[a]:Zt(e[a],i[a]):!us(e[a])&&us(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:Zt(e[a],i[a])):e[a]=i[a])}}}return e}function wr(r,e,t){r.style.setProperty(e,t)}function cl({swiper:r,targetPosition:e,side:t}){const i=Ut(),s=-r.translate;let n=null,o;const a=r.params.speed;r.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(r.cssModeFrameID);const l=e>s?"next":"prev",c=(f,m)=>l==="next"&&f>=m||l==="prev"&&f<=m,u=()=>{o=new Date().getTime(),n===null&&(n=o);const f=Math.max(Math.min((o-n)/a,1),0),m=.5-Math.cos(f*Math.PI)/2;let p=s+m*(e-s);if(c(p,e)&&(p=e),r.wrapperEl.scrollTo({[t]:p}),c(p,e)){r.wrapperEl.style.overflow="hidden",r.wrapperEl.style.scrollSnapType="",setTimeout(()=>{r.wrapperEl.style.overflow="",r.wrapperEl.scrollTo({[t]:p})}),i.cancelAnimationFrame(r.cssModeFrameID);return}r.cssModeFrameID=i.requestAnimationFrame(u)};u()}function ai(r,e=""){const t=Ut(),i=[...r.children];return t.HTMLSlotElement&&r instanceof HTMLSlotElement&&i.push(...r.assignedElements()),e?i.filter(s=>s.matches(e)):i}function Su(r,e){const t=[e];for(;t.length>0;){const i=t.shift();if(r===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function Eu(r,e){const t=Ut();let i=e.contains(r);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(r),i||(i=Su(r,e))),i}function ks(r){try{console.warn(r);return}catch{}}function ds(r,e=[]){const t=document.createElement(r);return t.classList.add(...Array.isArray(e)?e:ki(e)),t}function hl(r){const e=Ut(),t=kt(),i=r.getBoundingClientRect(),s=t.body,n=r.clientTop||s.clientTop||0,o=r.clientLeft||s.clientLeft||0,a=r===e?e.scrollY:r.scrollTop,l=r===e?e.scrollX:r.scrollLeft;return{top:i.top+a-n,left:i.left+l-o}}function bu(r,e){const t=[];for(;r.previousElementSibling;){const i=r.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),r=i}return t}function xu(r,e){const t=[];for(;r.nextElementSibling;){const i=r.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),r=i}return t}function Pi(r,e){return Ut().getComputedStyle(r,null).getPropertyValue(e)}function Ps(r){let e=r,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Vs(r,e){const t=[];let i=r.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function qn(r,e,t){const i=Ut();return r[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function wt(r){return(Array.isArray(r)?r:[r]).filter(e=>!!e)}function $n(r,e=""){typeof trustedTypes<"u"?r.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):r.innerHTML=e}let ea;function Cu(){const r=Ut(),e=kt();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in r||r.DocumentTouch&&e instanceof r.DocumentTouch)}}function ul(){return ea||(ea=Cu()),ea}let ta;function Uu({userAgent:r}={}){const e=ul(),t=Ut(),i=t.navigator.platform,s=r||t.navigator.userAgent,n={ios:!1,android:!1},o=t.screen.width,a=t.screen.height,l=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=s.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=i==="Win32";let p=i==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&p&&e.touch&&g.indexOf(`${o}x${a}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),l&&!m&&(n.os="android",n.android=!0),(c||f||u)&&(n.os="ios",n.ios=!0),n}function dl(r={}){return ta||(ta=Uu(r)),ta}let ia;function Tu(){const r=Ut(),e=dl();let t=!1;function i(){const a=r.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(r.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const s=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent),n=i(),o=n||s&&e.ios;return{isSafari:t||n,needPerspectiveFix:t,need3dFix:o,isWebView:s}}function pl(){return ia||(ia=Tu()),ia}function Mu({swiper:r,on:e,emit:t}){const i=Ut();let s=null,n=null;const o=()=>{!r||r.destroyed||!r.initialized||(t("beforeResize"),t("resize"))},a=()=>{!r||r.destroyed||!r.initialized||(s=new ResizeObserver(u=>{n=i.requestAnimationFrame(()=>{const{width:f,height:m}=r;let p=f,g=m;u.forEach(({contentBoxSize:A,contentRect:d,target:h})=>{h&&h!==r.el||(p=d?d.width:(A[0]||A).inlineSize,g=d?d.height:(A[0]||A).blockSize)}),(p!==f||g!==m)&&o()})}),s.observe(r.el))},l=()=>{n&&i.cancelAnimationFrame(n),s&&s.unobserve&&r.el&&(s.unobserve(r.el),s=null)},c=()=>{!r||r.destroyed||!r.initialized||t("orientationchange")};e("init",()=>{if(r.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",c)})}function Ru({swiper:r,extendParams:e,on:t,emit:i}){const s=[],n=Ut(),o=(c,u={})=>{const f=n.MutationObserver||n.WebkitMutationObserver,m=new f(p=>{if(r.__preventObserver__)return;if(p.length===1){i("observerUpdate",p[0]);return}const g=function(){i("observerUpdate",p[0])};n.requestAnimationFrame?n.requestAnimationFrame(g):n.setTimeout(g,0)});m.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:r.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),s.push(m)},a=()=>{if(r.params.observer){if(r.params.observeParents){const c=Vs(r.hostEl);for(let u=0;u<c.length;u+=1)o(c[u])}o(r.hostEl,{childList:r.params.observeSlideChildren}),o(r.wrapperEl,{attributes:!1})}},l=()=>{s.forEach(c=>{c.disconnect()}),s.splice(0,s.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",a),t("destroy",l)}var Iu={on(r,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const s=t?"unshift":"push";return r.split(" ").forEach(n=>{i.eventsListeners[n]||(i.eventsListeners[n]=[]),i.eventsListeners[n][s](e)}),i},once(r,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function s(...n){i.off(r,s),s.__emitterProxy&&delete s.__emitterProxy,e.apply(i,n)}return s.__emitterProxy=e,i.on(r,s,t)},onAny(r,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof r!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(r)<0&&t.eventsAnyListeners[i](r),t},offAny(r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(r);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(r,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||r.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((s,n)=>{(s===e||s.__emitterProxy&&s.__emitterProxy===e)&&t.eventsListeners[i].splice(n,1)})}),t},emit(...r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,s;return typeof r[0]=="string"||Array.isArray(r[0])?(t=r[0],i=r.slice(1,r.length),s=e):(t=r[0].events,i=r[0].data,s=r[0].context||e),i.unshift(s),(Array.isArray(t)?t:t.split(" ")).forEach(n=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(o=>{o.apply(s,[n,...i])}),e.eventsListeners&&e.eventsListeners[n]&&e.eventsListeners[n].forEach(o=>{o.apply(s,i)})}),e}};function Fu(){const r=this;let e,t;const i=r.el;typeof r.params.width<"u"&&r.params.width!==null?e=r.params.width:e=i.clientWidth,typeof r.params.height<"u"&&r.params.height!==null?t=r.params.height:t=i.clientHeight,!(e===0&&r.isHorizontal()||t===0&&r.isVertical())&&(e=e-parseInt(Pi(i,"padding-left")||0,10)-parseInt(Pi(i,"padding-right")||0,10),t=t-parseInt(Pi(i,"padding-top")||0,10)-parseInt(Pi(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(r,{width:e,height:t,size:r.isHorizontal()?e:t}))}function Bu(){const r=this;function e(_,x){return parseFloat(_.getPropertyValue(r.getDirectionLabel(x))||0)}const t=r.params,{wrapperEl:i,slidesEl:s,rtlTranslate:n,wrongRTL:o}=r,a=r.virtual&&t.virtual.enabled,l=a?r.virtual.slides.length:r.slides.length,c=ai(s,`.${r.params.slideClass}, swiper-slide`),u=a?r.virtual.slides.length:c.length;let f=[];const m=[],p=[];let g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(r));let A=t.slidesOffsetAfter;typeof A=="function"&&(A=t.slidesOffsetAfter.call(r));const d=r.snapGrid.length,h=r.slidesGrid.length,v=r.size-g-A;let E=t.spaceBetween,w=-g,C=0,S=0;if(typeof v>"u")return;typeof E=="string"&&E.indexOf("%")>=0?E=parseFloat(E.replace("%",""))/100*v:typeof E=="string"&&(E=parseFloat(E)),r.virtualSize=-E-g-A,c.forEach(_=>{n?_.style.marginLeft="":_.style.marginRight="",_.style.marginBottom="",_.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(wr(i,"--swiper-centered-offset-before",""),wr(i,"--swiper-centered-offset-after","")),t.cssMode&&(wr(i,"--swiper-slides-offset-before",`${g}px`),wr(i,"--swiper-slides-offset-after",`${A}px`));const b=t.grid&&t.grid.rows>1&&r.grid;b?r.grid.initSlides(c):r.grid&&r.grid.unsetSlides();let U;const y=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(_=>typeof t.breakpoints[_].slidesPerView<"u").length>0;for(let _=0;_<u;_+=1){U=0;const x=c[_];if(!(x&&(b&&r.grid.updateSlide(_,x,c),Pi(x,"display")==="none"))){if(a&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(U=t.virtual.slidesPerViewAutoSlideSize),U&&x&&(t.roundLengths&&(U=Math.floor(U)),x.style[r.getDirectionLabel("width")]=`${U}px`);else if(t.slidesPerView==="auto"){y&&(x.style[r.getDirectionLabel("width")]="");const T=getComputedStyle(x),R=x.style.transform,Q=x.style.webkitTransform;if(R&&(x.style.transform="none"),Q&&(x.style.webkitTransform="none"),t.roundLengths)U=r.isHorizontal()?qn(x,"width"):qn(x,"height");else{const N=e(T,"width"),k=e(T,"padding-left"),F=e(T,"padding-right"),M=e(T,"margin-left"),B=e(T,"margin-right"),P=T.getPropertyValue("box-sizing");if(P&&P==="border-box")U=N+M+B;else{const{clientWidth:K,offsetWidth:te}=x;U=N+k+F+M+B+(te-K)}}R&&(x.style.transform=R),Q&&(x.style.webkitTransform=Q),t.roundLengths&&(U=Math.floor(U))}else U=(v-(t.slidesPerView-1)*E)/t.slidesPerView,t.roundLengths&&(U=Math.floor(U)),x&&(x.style[r.getDirectionLabel("width")]=`${U}px`);x&&(x.swiperSlideSize=U),p.push(U),t.centeredSlides?(w=w+U/2+C/2+E,C===0&&_!==0&&(w=w-v/2-E),_===0&&(w=w-v/2-E),Math.abs(w)<1/1e3&&(w=0),t.roundLengths&&(w=Math.floor(w)),S%t.slidesPerGroup===0&&f.push(w),m.push(w)):(t.roundLengths&&(w=Math.floor(w)),(S-Math.min(r.params.slidesPerGroupSkip,S))%r.params.slidesPerGroup===0&&f.push(w),m.push(w),w=w+U+E),r.virtualSize+=U+E,C=U,S+=1}}if(r.virtualSize=Math.max(r.virtualSize,v)+A,n&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${r.virtualSize+E}px`),t.setWrapperSize&&(i.style[r.getDirectionLabel("width")]=`${r.virtualSize+E}px`),b&&r.grid.updateWrapperSize(U,f),!t.centeredSlides){const _=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,x=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||_);let T=f.length;if(x){let Q;if(t.slidesPerView==="auto"){Q=1;let N=0;for(let k=p.length-1;k>=0&&(N+=p[k]+(k<p.length-1?E:0),N<=v);k-=1)Q=p.length-k}else Q=Math.floor(t.slidesPerView);T=Math.max(u-Q,0)}const R=[];for(let Q=0;Q<f.length;Q+=1){let N=f[Q];t.roundLengths&&(N=Math.floor(N)),x?Q<=T&&R.push(N):f[Q]<=r.virtualSize-v&&R.push(N)}f=R,Math.floor(r.virtualSize-v)-Math.floor(f[f.length-1])>1&&(x||f.push(r.virtualSize-v))}if(a&&t.loop){const _=p[0]+E;if(t.slidesPerGroup>1){const x=Math.ceil((r.virtual.slidesBefore+r.virtual.slidesAfter)/t.slidesPerGroup),T=_*t.slidesPerGroup;for(let R=0;R<x;R+=1)f.push(f[f.length-1]+T)}for(let x=0;x<r.virtual.slidesBefore+r.virtual.slidesAfter;x+=1)t.slidesPerGroup===1&&f.push(f[f.length-1]+_),m.push(m[m.length-1]+_),r.virtualSize+=_}if(f.length===0&&(f=[0]),E!==0){const _=r.isHorizontal()&&n?"marginLeft":r.getDirectionLabel("marginRight");c.filter((x,T)=>!t.cssMode||t.loop?!0:T!==c.length-1).forEach(x=>{x.style[_]=`${E}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let _=0;p.forEach(T=>{_+=T+(E||0)}),_-=E;const x=_>v?_-v:0;f=f.map(T=>T<=0?-g:T>x?x+A:T)}if(t.centerInsufficientSlides){let _=0;if(p.forEach(x=>{_+=x+(E||0)}),_-=E,_<v){const x=(v-_)/2;f.forEach((T,R)=>{f[R]=T-x}),m.forEach((T,R)=>{m[R]=T+x})}}if(Object.assign(r,{slides:c,snapGrid:f,slidesGrid:m,slidesSizesGrid:p}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){wr(i,"--swiper-centered-offset-before",`${-f[0]}px`),wr(i,"--swiper-centered-offset-after",`${r.size/2-p[p.length-1]/2}px`);const _=-r.snapGrid[0],x=-r.slidesGrid[0];r.snapGrid=r.snapGrid.map(T=>T+_),r.slidesGrid=r.slidesGrid.map(T=>T+x)}if(u!==l&&r.emit("slidesLengthChange"),f.length!==d&&(r.params.watchOverflow&&r.checkOverflow(),r.emit("snapGridLengthChange")),m.length!==h&&r.emit("slidesGridLengthChange"),t.watchSlidesProgress&&r.updateSlidesOffset(),r.emit("slidesUpdated"),!a&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const _=`${t.containerModifierClass}backface-hidden`,x=r.el.classList.contains(_);u<=t.maxBackfaceHiddenSlides?x||r.el.classList.add(_):x&&r.el.classList.remove(_)}}function Qu(r){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let s=0,n;typeof r=="number"?e.setTransition(r):r===!0&&e.setTransition(e.params.speed);const o=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const a=e.activeIndex+n;if(a>e.slides.length&&!i)break;t.push(o(a))}else t.push(o(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]<"u"){const a=t[n].offsetHeight;s=a>s?a:s}(s||s===0)&&(e.wrapperEl.style.height=`${s}px`)}function Lu(){const r=this,e=r.slides,t=r.isElement?r.isHorizontal()?r.wrapperEl.offsetLeft:r.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(r.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-r.cssOverflowAdjustment()}const fl=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function Du(r=this&&this.translate||0){const e=this,t=e.params,{slides:i,rtlTranslate:s,snapGrid:n}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-r;s&&(o=r),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const c=i[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=i[0].swiperSlideOffset);const f=(o+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),m=(o-n[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+a),p=-(o-u),g=p+e.slidesSizesGrid[l],A=p>=0&&p<=e.size-e.slidesSizesGrid[l],d=p>=0&&p<e.size-1||g>1&&g<=e.size||p<=0&&g>=e.size;d&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),fl(c,d,t.slideVisibleClass),fl(c,A,t.slideFullyVisibleClass),c.progress=s?-f:f,c.originalProgress=s?-m:m}}function Nu(r){const e=this;if(typeof r>"u"){const u=e.rtlTranslate?-1:1;r=e&&e.translate&&e.translate*u||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:s,isBeginning:n,isEnd:o,progressLoop:a}=e;const l=n,c=o;if(i===0)s=0,n=!0,o=!0;else{s=(r-e.minTranslate())/i;const u=Math.abs(r-e.minTranslate())<1,f=Math.abs(r-e.maxTranslate())<1;n=u||s<=0,o=f||s>=1,u&&(s=0),f&&(s=1)}if(t.loop){const u=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),m=e.slidesGrid[u],p=e.slidesGrid[f],g=e.slidesGrid[e.slidesGrid.length-1],A=Math.abs(r);A>=m?a=(A-m)/g:a=(A+g-p)/g,a>1&&(a-=1)}Object.assign(e,{progress:s,progressLoop:a,isBeginning:n,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(r),n&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!n||c&&!o)&&e.emit("fromEdge"),e.emit("progress",s)}const ra=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function ku(){const r=this,{slides:e,params:t,slidesEl:i,activeIndex:s}=r,n=r.virtual&&t.virtual.enabled,o=r.grid&&t.grid&&t.grid.rows>1,a=f=>ai(i,`.${t.slideClass}${f}, swiper-slide${f}`)[0];let l,c,u;if(n)if(t.loop){let f=s-r.virtual.slidesBefore;f<0&&(f=r.virtual.slides.length+f),f>=r.virtual.slides.length&&(f-=r.virtual.slides.length),l=a(`[data-swiper-slide-index="${f}"]`)}else l=a(`[data-swiper-slide-index="${s}"]`);else o?(l=e.find(f=>f.column===s),u=e.find(f=>f.column===s+1),c=e.find(f=>f.column===s-1)):l=e[s];l&&(o||(u=xu(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=bu(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(f=>{ra(f,f===l,t.slideActiveClass),ra(f,f===u,t.slideNextClass),ra(f,f===c,t.slidePrevClass)}),r.emitSlidesClasses()}const Os=(r,e)=>{if(!r||r.destroyed||!r.params)return;const t=()=>r.isElement?"swiper-slide":`.${r.params.slideClass}`,i=e.closest(t());if(i){let s=i.querySelector(`.${r.params.lazyPreloaderClass}`);!s&&r.isElement&&(i.shadowRoot?s=i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(s=i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`),s&&!s.lazyPreloaderManaged&&s.remove())})),s&&!s.lazyPreloaderManaged&&s.remove()}},sa=(r,e)=>{if(!r.slides[e])return;const t=r.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},na=r=>{if(!r||r.destroyed||!r.params)return;let e=r.params.lazyPreloadPrevNext;const t=r.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(r.params.slidesPerView),s=r.activeIndex;if(r.params.grid&&r.params.grid.rows>1){const o=s,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+i+c)),r.slides.forEach((l,c)=>{a.includes(l.column)&&sa(r,c)});return}const n=s+i-1;if(r.params.rewind||r.params.loop)for(let o=s-e;o<=n+e;o+=1){const a=(o%t+t)%t;(a<s||a>n)&&sa(r,a)}else for(let o=Math.max(s-e,0);o<=Math.min(n+e,t-1);o+=1)o!==s&&(o>n||o<s)&&sa(r,o)};function Pu(r){const{slidesGrid:e,params:t}=r,i=r.rtlTranslate?r.translate:-r.translate;let s;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?i>=e[n]&&i<e[n+1]-(e[n+1]-e[n])/2?s=n:i>=e[n]&&i<e[n+1]&&(s=n+1):i>=e[n]&&(s=n);return t.normalizeSlideIndex&&(s<0||typeof s>"u")&&(s=0),s}function Vu(r){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:s,activeIndex:n,realIndex:o,snapIndex:a}=e;let l=r,c;const u=p=>{let g=p-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof l>"u"&&(l=Pu(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const p=Math.min(s.slidesPerGroupSkip,l);c=p+Math.floor((l-p)/s.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===n&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const f=e.grid&&s.grid&&s.grid.rows>1;let m;if(e.virtual&&s.virtual.enabled)s.loop?m=u(l):m=l;else if(f){const p=e.slides.find(A=>A.column===l);let g=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(p),0)),m=Math.floor(g/s.grid.rows)}else if(e.slides[l]){const p=e.slides[l].getAttribute("data-swiper-slide-index");p?m=parseInt(p,10):m=l}else m=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:m,previousIndex:n,activeIndex:l}),e.initialized&&na(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==m&&e.emit("realIndexChange"),e.emit("slideChange"))}function Ou(r,e){const t=this,i=t.params;let s=r.closest(`.${i.slideClass}, swiper-slide`);!s&&t.isElement&&e&&e.length>1&&e.includes(r)&&[...e.slice(e.indexOf(r)+1,e.length)].forEach(a=>{!s&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(s=a)});let n=!1,o;if(s){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===s){n=!0,o=a;break}}if(s&&n)t.clickedSlide=s,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var zu={updateSize:Fu,updateSlides:Bu,updateAutoHeight:Qu,updateSlidesOffset:Lu,updateSlidesProgress:Du,updateProgress:Nu,updateSlidesClasses:ku,updateActiveIndex:Vu,updateClickedSlide:Ou};function Wu(r=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:i,translate:s,wrapperEl:n}=e;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;let o=wu(n,r);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function Gu(r,e){const t=this,{rtlTranslate:i,params:s,wrapperEl:n,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=i?-r:r:l=r,s.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,s.cssMode?n[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:s.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),n.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let u;const f=t.maxTranslate()-t.minTranslate();f===0?u=0:u=(r-t.minTranslate())/f,u!==o&&t.updateProgress(r),t.emit("setTranslate",t.translate,e)}function Ju(){return-this.snapGrid[0]}function Zu(){return-this.snapGrid[this.snapGrid.length-1]}function Hu(r=0,e=this.params.speed,t=!0,i=!0,s){const n=this,{params:o,wrapperEl:a}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const l=n.minTranslate(),c=n.maxTranslate();let u;if(i&&r>l?u=l:i&&r<c?u=c:u=r,n.updateProgress(u),o.cssMode){const f=n.isHorizontal();if(e===0)a[f?"scrollLeft":"scrollTop"]=-u;else{if(!n.support.smoothScroll)return cl({swiper:n,targetPosition:-u,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(u),t&&(n.emit("beforeTransitionStart",e,s),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(u),t&&(n.emit("beforeTransitionStart",e,s),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(f){!n||n.destroyed||f.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,t&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Xu={getTranslate:Wu,setTranslate:Gu,minTranslate:Ju,maxTranslate:Zu,translateTo:Hu};function Yu(r,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${r}ms`,t.wrapperEl.style.transitionDelay=r===0?"0ms":""),t.emit("setTransition",r,e)}function ml({swiper:r,runCallbacks:e,direction:t,step:i}){const{activeIndex:s,previousIndex:n}=r;let o=t;o||(s>n?o="next":s<n?o="prev":o="reset"),r.emit(`transition${i}`),e&&o==="reset"?r.emit(`slideResetTransition${i}`):e&&s!==n&&(r.emit(`slideChangeTransition${i}`),o==="next"?r.emit(`slideNextTransition${i}`):r.emit(`slidePrevTransition${i}`))}function ju(r=!0,e){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),ml({swiper:t,runCallbacks:r,direction:e,step:"Start"}))}function Ku(r=!0,e){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),ml({swiper:t,runCallbacks:r,direction:e,step:"End"}))}var qu={setTransition:Yu,transitionStart:ju,transitionEnd:Ku};function $u(r=0,e,t=!0,i,s){typeof r=="string"&&(r=parseInt(r,10));const n=this;let o=r;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:m,wrapperEl:p,enabled:g}=n;if(!g&&!i&&!s||n.destroyed||n.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=n.params.speed);const A=Math.min(n.params.slidesPerGroupSkip,o);let d=A+Math.floor((o-A)/n.params.slidesPerGroup);d>=l.length&&(d=l.length-1);const h=-l[d];if(a.normalizeSlideIndex)for(let C=0;C<c.length;C+=1){const S=-Math.floor(h*100),b=Math.floor(c[C]*100),U=Math.floor(c[C+1]*100);typeof c[C+1]<"u"?S>=b&&S<U-(U-b)/2?o=C:S>=b&&S<U&&(o=C+1):S>=b&&(o=C)}if(n.initialized&&o!==f&&(!n.allowSlideNext&&(m?h>n.translate&&h>n.minTranslate():h<n.translate&&h<n.minTranslate())||!n.allowSlidePrev&&h>n.translate&&h>n.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&t&&n.emit("beforeSlideChangeStart"),n.updateProgress(h);let v;o>f?v="next":o<f?v="prev":v="reset";const E=n.virtual&&n.params.virtual.enabled;if(!(E&&s)&&(m&&-h===n.translate||!m&&h===n.translate))return n.updateActiveIndex(o),a.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),a.effect!=="slide"&&n.setTranslate(h),v!=="reset"&&(n.transitionStart(t,v),n.transitionEnd(t,v)),!1;if(a.cssMode){const C=n.isHorizontal(),S=m?h:-h;if(e===0)E&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),E&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[C?"scrollLeft":"scrollTop"]=S})):p[C?"scrollLeft":"scrollTop"]=S,E&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return cl({swiper:n,targetPosition:S,side:C?"left":"top"}),!0;p.scrollTo({[C?"left":"top"]:S,behavior:"smooth"})}return!0}const w=pl().isSafari;return E&&!s&&w&&n.isElement&&n.virtual.update(!1,!1,o),n.setTransition(e),n.setTranslate(h),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,i),n.transitionStart(t,v),e===0?n.transitionEnd(t,v):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(C){!n||n.destroyed||C.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,v))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function ed(r=0,e,t=!0,i){typeof r=="string"&&(r=parseInt(r,10));const s=this;if(s.destroyed)return;typeof e>"u"&&(e=s.params.speed);const n=s.grid&&s.params.grid&&s.params.grid.rows>1;let o=r;if(s.params.loop)if(s.virtual&&s.params.virtual.enabled)o=o+s.virtual.slidesBefore;else{let a;if(n){const A=o*s.params.grid.rows;a=s.slides.find(d=>d.getAttribute("data-swiper-slide-index")*1===A).column}else a=s.getSlideIndexByData(o);const l=n?Math.ceil(s.slides.length/s.params.grid.rows):s.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:f}=s.params,m=c||!!u||!!f;let p=s.params.slidesPerView;p==="auto"?p=s.slidesPerViewDynamic():(p=Math.ceil(parseFloat(s.params.slidesPerView,10)),m&&p%2===0&&(p=p+1));let g=l-a<p;if(m&&(g=g||a<Math.ceil(p/2)),i&&m&&s.params.slidesPerView!=="auto"&&!n&&(g=!1),g){const A=m?a<s.activeIndex?"prev":"next":a-s.activeIndex-1<s.params.slidesPerView?"next":"prev";s.loopFix({direction:A,slideTo:!0,activeSlideIndex:A==="next"?a+1:a-l+1,slideRealIndex:A==="next"?s.realIndex:void 0})}if(n){const A=o*s.params.grid.rows;o=s.slides.find(d=>d.getAttribute("data-swiper-slide-index")*1===A).column}else o=s.getSlideIndexByData(o)}return requestAnimationFrame(()=>{s.slideTo(o,e,t,i)}),s}function td(r,e=!0,t){const i=this,{enabled:s,params:n,animating:o}=i;if(!s||i.destroyed)return i;typeof r>"u"&&(r=i.params.speed);let a=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<n.slidesPerGroupSkip?1:a,c=i.virtual&&n.virtual.enabled;if(n.loop){if(o&&!c&&n.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,r,e,t)}),!0}return n.rewind&&i.isEnd?i.slideTo(0,r,e,t):i.slideTo(i.activeIndex+l,r,e,t)}function id(r,e=!0,t){const i=this,{params:s,snapGrid:n,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;typeof r>"u"&&(r=i.params.speed);const u=i.virtual&&s.virtual.enabled;if(s.loop){if(c&&!u&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=a?i.translate:-i.translate;function m(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const p=m(f),g=n.map(v=>m(v)),A=s.freeMode&&s.freeMode.enabled;let d=n[g.indexOf(p)-1];if(typeof d>"u"&&(s.cssMode||A)){let v;n.forEach((E,w)=>{p>=E&&(v=w)}),typeof v<"u"&&(d=A?n[v]:n[v>0?v-1:v])}let h=0;if(typeof d<"u"&&(h=o.indexOf(d),h<0&&(h=i.activeIndex-1),s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(h=h-i.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),s.rewind&&i.isBeginning){const v=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(v,r,e,t)}else if(s.loop&&i.activeIndex===0&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(h,r,e,t)}),!0;return i.slideTo(h,r,e,t)}function rd(r,e=!0,t){const i=this;if(!i.destroyed)return typeof r>"u"&&(r=i.params.speed),i.slideTo(i.activeIndex,r,e,t)}function sd(r,e=!0,t,i=.5){const s=this;if(s.destroyed)return;typeof r>"u"&&(r=s.params.speed);let n=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,n),a=o+Math.floor((n-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const c=s.snapGrid[a],u=s.snapGrid[a+1];l-c>(u-c)*i&&(n+=s.params.slidesPerGroup)}else{const c=s.snapGrid[a-1],u=s.snapGrid[a];l-c<=(u-c)*i&&(n-=s.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,s.slidesGrid.length-1),s.slideTo(n,r,e,t)}function nd(){const r=this;if(r.destroyed)return;const{params:e,slidesEl:t}=r,i=e.slidesPerView==="auto"?r.slidesPerViewDynamic():e.slidesPerView;let s=r.getSlideIndexWhenGrid(r.clickedIndex),n;const o=r.isElement?"swiper-slide":`.${e.slideClass}`,a=r.grid&&r.params.grid&&r.params.grid.rows>1;if(e.loop){if(r.animating)return;n=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r.slideToLoop(n):s>(a?(r.slides.length-i)/2-(r.params.grid.rows-1):r.slides.length-i)?(r.loopFix(),s=r.getSlideIndex(ai(t,`${o}[data-swiper-slide-index="${n}"]`)[0]),Kn(()=>{r.slideTo(s)})):r.slideTo(s)}else r.slideTo(s)}var ad={slideTo:$u,slideToLoop:ed,slideNext:td,slidePrev:id,slideReset:rd,slideToClosest:sd,slideToClickedSlide:nd};function od(r,e){const t=this,{params:i,slidesEl:s}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const n=()=>{ai(s,`.${i.slideClass}, swiper-slide`).forEach((p,g)=>{p.setAttribute("data-swiper-slide-index",g)})},o=()=>{const p=ai(s,`.${i.slideBlankClass}`);p.forEach(g=>{g.remove()}),p.length>0&&(t.recalcSlides(),t.updateSlides())},a=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||a)&&o();const l=i.slidesPerGroup*(a?i.grid.rows:1),c=t.slides.length%l!==0,u=a&&t.slides.length%i.grid.rows!==0,f=p=>{for(let g=0;g<p;g+=1){const A=t.isElement?ds("swiper-slide",[i.slideBlankClass]):ds("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(A)}};if(c){if(i.loopAddBlankSlides){const p=l-t.slides.length%l;f(p),t.recalcSlides(),t.updateSlides()}else ks("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(u){if(i.loopAddBlankSlides){const p=i.grid.rows-t.slides.length%i.grid.rows;f(p),t.recalcSlides(),t.updateSlides()}else ks("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();const m=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:r,direction:m?void 0:"next",initial:e})}function ld({slideRealIndex:r,slideTo:e=!0,direction:t,setTranslate:i,activeSlideIndex:s,initial:n,byController:o,byMousewheel:a}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:f,slidesEl:m,params:p}=l,{centeredSlides:g,slidesOffsetBefore:A,slidesOffsetAfter:d,initialSlide:h}=p,v=g||!!A||!!d;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&p.virtual.enabled){e&&(!v&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v&&l.snapIndex<p.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=f,l.emit("loopFix");return}let E=p.slidesPerView;E==="auto"?E=l.slidesPerViewDynamic():(E=Math.ceil(parseFloat(p.slidesPerView,10)),v&&E%2===0&&(E=E+1));const w=p.slidesPerGroupAuto?E:p.slidesPerGroup;let C=v?Math.max(w,Math.ceil(E/2)):w;C%w!==0&&(C+=w-C%w),C+=p.loopAdditionalSlides,l.loopedSlides=C;const S=l.grid&&p.grid&&p.grid.rows>1;c.length<E+C||l.params.effect==="cards"&&c.length<E+C*2?ks("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):S&&p.grid.fill==="row"&&ks("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const b=[],U=[],y=S?Math.ceil(c.length/p.grid.rows):c.length,_=n&&y-h<E&&!v;let x=_?h:l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.find(F=>F.classList.contains(p.slideActiveClass))):x=s;const T=t==="next"||!t,R=t==="prev"||!t;let Q=0,N=0;const k=(S?c[s].column:s)+(v&&typeof i>"u"?-E/2+.5:0);if(k<C){Q=Math.max(C-k,w);for(let F=0;F<C-k;F+=1){const M=F-Math.floor(F/y)*y;if(S){const B=y-M-1;for(let P=c.length-1;P>=0;P-=1)c[P].column===B&&b.push(P)}else b.push(y-M-1)}}else if(k+E>y-C){N=Math.max(k-(y-C*2),w),_&&(N=Math.max(N,E-y+h+1));for(let F=0;F<N;F+=1){const M=F-Math.floor(F/y)*y;S?c.forEach((B,P)=>{B.column===M&&U.push(P)}):U.push(M)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<E+C*2&&(U.includes(s)&&U.splice(U.indexOf(s),1),b.includes(s)&&b.splice(b.indexOf(s),1)),R&&b.forEach(F=>{c[F].swiperLoopMoveDOM=!0,m.prepend(c[F]),c[F].swiperLoopMoveDOM=!1}),T&&U.forEach(F=>{c[F].swiperLoopMoveDOM=!0,m.append(c[F]),c[F].swiperLoopMoveDOM=!1}),l.recalcSlides(),p.slidesPerView==="auto"?l.updateSlides():S&&(b.length>0&&R||U.length>0&&T)&&l.slides.forEach((F,M)=>{l.grid.updateSlide(M,F,l.slides)}),p.watchSlidesProgress&&l.updateSlidesOffset(),e){if(b.length>0&&R){if(typeof r>"u"){const F=l.slidesGrid[x],M=l.slidesGrid[x+Q]-F;a?l.setTranslate(l.translate-M):(l.slideTo(x+Math.ceil(Q),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-M,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-M))}else if(i){const F=S?b.length/p.grid.rows:b.length;l.slideTo(l.activeIndex+F,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(U.length>0&&T)if(typeof r>"u"){const F=l.slidesGrid[x],M=l.slidesGrid[x-N]-F;a?l.setTranslate(l.translate-M):(l.slideTo(x-N,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-M,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-M))}else{const F=S?U.length/p.grid.rows:U.length;l.slideTo(l.activeIndex-F,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=f,l.controller&&l.controller.control&&!o){const F={slideRealIndex:r,direction:t,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...F,slideTo:M.params.slidesPerView===p.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...F,slideTo:l.controller.control.params.slidesPerView===p.slidesPerView?e:!1})}l.emit("loopFix")}function cd(){const r=this,{params:e,slidesEl:t}=r;if(!e.loop||!t||r.virtual&&r.params.virtual.enabled)return;r.recalcSlides();const i=[];r.slides.forEach(s=>{const n=typeof s.swiperSlideIndex>"u"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;i[n]=s}),r.slides.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),i.forEach(s=>{t.append(s)}),r.recalcSlides(),r.slideTo(r.realIndex,0)}var hd={loopCreate:od,loopFix:ld,loopDestroy:cd};function ud(r){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=r?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function dd(){const r=this;r.params.watchOverflow&&r.isLocked||r.params.cssMode||(r.isElement&&(r.__preventObserver__=!0),r[r.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1}))}var pd={setGrabCursor:ud,unsetGrabCursor:dd};function fd(r,e=this){function t(i){if(!i||i===kt()||i===Ut())return null;i.assignedSlot&&(i=i.assignedSlot);const s=i.closest(r);return!s&&!i.getRootNode?null:s||t(i.getRootNode().host)}return t(e)}function gl(r,e,t){const i=Ut(),{params:s}=r,n=s.edgeSwipeDetection,o=s.edgeSwipeThreshold;return n&&(t<=o||t>=i.innerWidth-o)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function md(r){const e=this;if(e.destroyed)return;const t=kt();let i=r;i.originalEvent&&(i=i.originalEvent);const s=e.touchEventsData;if(i.type==="pointerdown"){if(s.pointerId!==null&&s.pointerId!==i.pointerId)return;s.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(s.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){gl(e,i,i.targetTouches[0].pageX);return}const{params:n,touches:o,enabled:a}=e;if(!a||!n.simulateTouch&&i.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let l=i.target;if(n.touchEventsTarget==="wrapper"&&!Eu(l,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||s.isTouched&&s.isMoved)return;const c=!!n.noSwipingClass&&n.noSwipingClass!=="",u=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&u&&(l=u[0]);const f=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,m=!!(i.target&&i.target.shadowRoot);if(n.noSwiping&&(m?fd(f,l):l.closest(f))){e.allowClick=!0;return}if(n.swipeHandler&&!l.closest(n.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const p=o.currentX,g=o.currentY;if(!gl(e,i,p))return;Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=g,s.touchStartTime=Ns(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(s.allowThresholdMove=!1);let A=!0;l.matches(s.focusableElements)&&(A=!1,l.nodeName==="SELECT"&&(s.isTouched=!1)),t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==l&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!l.matches(s.focusableElements))&&t.activeElement.blur();const d=A&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||d)&&!l.isContentEditable&&i.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function gd(r){const e=kt(),t=this;if(t.destroyed)return;const i=t.touchEventsData,{params:s,touches:n,rtlTranslate:o,enabled:a}=t;if(!a||!s.simulateTouch&&r.pointerType==="mouse")return;let l=r;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(C=>C.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,f=c.pageY;if(l.preventedByNestedSwiper){n.startX=u,n.startY=f;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(n,{startX:u,startY:f,currentX:u,currentY:f}),i.touchStartTime=Ns());return}if(s.touchReleaseOnEdges&&!s.loop){if(t.isVertical()){if(f<n.startY&&t.translate<=t.maxTranslate()||f>n.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(o&&(u>n.startX&&-t.translate<=t.maxTranslate()||u<n.startX&&-t.translate>=t.minTranslate())||!o&&(u<n.startX&&t.translate<=t.maxTranslate()||u>n.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=u,n.currentY=f;const m=n.currentX-n.startX,p=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(m**2+p**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let C;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:m*m+p*p>=25&&(C=Math.atan2(Math.abs(p),Math.abs(m))*180/Math.PI,i.isScrolling=t.isHorizontal()?C>s.touchAngle:90-C>s.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(i.startMoving=!0),i.isScrolling||l.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let g=t.isHorizontal()?m:p,A=t.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;s.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),A=Math.abs(A)*(o?1:-1)),n.diff=g,g*=s.touchRatio,o&&(g=-g,A=-A);const d=t.touchesDirection;t.swipeDirection=g>0?"prev":"next",t.touchesDirection=A>0?"prev":"next";const h=t.params.loop&&!s.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(h&&v&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const C=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(C)}i.allowMomentumBounce=!1,s.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),s._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&d!==t.touchesDirection&&h&&v&&Math.abs(g)>=1){Object.assign(n,{startX:u,startY:f,currentX:u,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let E=!0,w=s.resistanceRatio;if(s.touchReleaseOnEdges&&(w=0),g>0?(h&&v&&i.allowThresholdMove&&i.currentTranslate>(s.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(E=!1,s.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+g)**w))):g<0&&(h&&v&&i.allowThresholdMove&&i.currentTranslate<(s.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(s.slidesPerView!=="auto"&&t.slides.length-s.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(s.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(E=!1,s.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-g)**w))),E&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),s.threshold>0)if(Math.abs(g)>s.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{i.currentTranslate=i.startTranslate;return}!s.followFinger||s.cssMode||((s.freeMode&&s.freeMode.enabled&&t.freeMode||s.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function vd(r){const e=this;if(e.destroyed)return;const t=e.touchEventsData;let i=r;i.originalEvent&&(i=i.originalEvent);let s;if(i.type==="touchend"||i.type==="touchcancel"){if(s=[...i.changedTouches].find(w=>w.identifier===t.touchId),!s||s.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;s=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:n,touches:o,rtlTranslate:a,slidesGrid:l,enabled:c}=e;if(!c||!n.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&n.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}n.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=Ns(),f=u-t.touchStartTime;if(e.allowClick){const w=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(w&&w[0]||i.target,w),e.emit("tap click",i),f<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Ns(),Kn(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let m;if(n.followFinger?m=a?e.translate:-e.translate:m=-t.currentTranslate,n.cssMode)return;if(n.freeMode&&n.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:m});return}const p=m>=-e.maxTranslate()&&!e.params.loop;let g=0,A=e.slidesSizesGrid[0];for(let w=0;w<l.length;w+=w<n.slidesPerGroupSkip?1:n.slidesPerGroup){const C=w<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;typeof l[w+C]<"u"?(p||m>=l[w]&&m<l[w+C])&&(g=w,A=l[w+C]-l[w]):(p||m>=l[w])&&(g=w,A=l[l.length-1]-l[l.length-2])}let d=null,h=null;n.rewind&&(e.isBeginning?h=n.virtual&&n.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(d=0));const v=(m-l[g])/A,E=g<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;if(f>n.longSwipesMs){if(!n.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=n.longSwipesRatio?e.slideTo(n.rewind&&e.isEnd?d:g+E):e.slideTo(g)),e.swipeDirection==="prev"&&(v>1-n.longSwipesRatio?e.slideTo(g+E):h!==null&&v<0&&Math.abs(v)>n.longSwipesRatio?e.slideTo(h):e.slideTo(g))}else{if(!n.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(g+E):e.slideTo(g):(e.swipeDirection==="next"&&e.slideTo(d!==null?d:g+E),e.swipeDirection==="prev"&&e.slideTo(h!==null?h:g))}}function vl(){const r=this,{params:e,el:t}=r;if(t&&t.offsetWidth===0)return;e.breakpoints&&r.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:n}=r,o=r.virtual&&r.params.virtual.enabled;r.allowSlideNext=!0,r.allowSlidePrev=!0,r.updateSize(),r.updateSlides(),r.updateSlidesClasses();const a=o&&e.loop;if((e.slidesPerView==="auto"||e.slidesPerView>1)&&r.isEnd&&!r.isBeginning&&!r.params.centeredSlides&&!a){const l=o?r.virtual.slides:r.slides;r.slideTo(l.length-1,0,!1,!0)}else r.params.loop&&!o?r.slideToLoop(r.realIndex,0,!1,!0):r.slideTo(r.activeIndex,0,!1,!0);r.autoplay&&r.autoplay.running&&r.autoplay.paused&&(clearTimeout(r.autoplay.resizeTimeout),r.autoplay.resizeTimeout=setTimeout(()=>{r.autoplay&&r.autoplay.running&&r.autoplay.paused&&r.autoplay.resume()},500)),r.allowSlidePrev=s,r.allowSlideNext=i,r.params.watchOverflow&&n!==r.snapGrid&&r.checkOverflow()}function _d(r){const e=this;e.destroyed||e.enabled&&(e.allowClick||(e.params.preventClicks&&r.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(r.stopPropagation(),r.stopImmediatePropagation())))}function Ad(){const r=this;if(r.destroyed)return;const{wrapperEl:e,rtlTranslate:t,enabled:i}=r;if(!i)return;r.previousTranslate=r.translate,r.isHorizontal()?r.translate=-e.scrollLeft:r.translate=-e.scrollTop,r.translate===0&&(r.translate=0),r.updateActiveIndex(),r.updateSlidesClasses();let s;const n=r.maxTranslate()-r.minTranslate();n===0?s=0:s=(r.translate-r.minTranslate())/n,s!==r.progress&&r.updateProgress(t?-r.translate:r.translate),r.emit("setTranslate",r.translate,!1)}function wd(r){const e=this;e.destroyed||(Os(e,r.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update())}function yd(){const r=this;r.destroyed||r.documentTouchHandlerProceeded||(r.documentTouchHandlerProceeded=!0,r.params.touchReleaseOnEdges&&(r.el.style.touchAction="auto"))}const _l=(r,e)=>{const t=kt(),{params:i,el:s,wrapperEl:n,device:o}=r,a=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!s||typeof s=="string"||(t[l]("touchstart",r.onDocumentTouchStart,{passive:!1,capture:a}),s[l]("touchstart",r.onTouchStart,{passive:!1}),s[l]("pointerdown",r.onTouchStart,{passive:!1}),t[l]("touchmove",r.onTouchMove,{passive:!1,capture:a}),t[l]("pointermove",r.onTouchMove,{passive:!1,capture:a}),t[l]("touchend",r.onTouchEnd,{passive:!0}),t[l]("pointerup",r.onTouchEnd,{passive:!0}),t[l]("pointercancel",r.onTouchEnd,{passive:!0}),t[l]("touchcancel",r.onTouchEnd,{passive:!0}),t[l]("pointerout",r.onTouchEnd,{passive:!0}),t[l]("pointerleave",r.onTouchEnd,{passive:!0}),t[l]("contextmenu",r.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[l]("click",r.onClick,!0),i.cssMode&&n[l]("scroll",r.onScroll),i.updateOnWindowResize?r[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",vl,!0):r[c]("observerUpdate",vl,!0),s[l]("load",r.onLoad,{capture:!0}))};function Sd(){const r=this,{params:e}=r;r.onTouchStart=md.bind(r),r.onTouchMove=gd.bind(r),r.onTouchEnd=vd.bind(r),r.onDocumentTouchStart=yd.bind(r),e.cssMode&&(r.onScroll=Ad.bind(r)),r.onClick=_d.bind(r),r.onLoad=wd.bind(r),_l(r,"on")}function Ed(){_l(this,"off")}var bd={attachEvents:Sd,detachEvents:Ed};const Al=(r,e)=>r.grid&&e.grid&&e.grid.rows>1;function xd(){const r=this,{realIndex:e,initialized:t,params:i,el:s}=r,n=i.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=kt(),a=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",l=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?r.el:o.querySelector(i.breakpointsBase),c=r.getBreakpoint(n,a,l);if(!c||r.currentBreakpoint===c)return;const u=(c in n?n[c]:void 0)||r.originalParams,f=Al(r,i),m=Al(r,u),p=r.params.grabCursor,g=u.grabCursor,A=i.enabled;f&&!m?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),r.emitContainerClasses()):!f&&m&&(s.classList.add(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&s.classList.add(`${i.containerModifierClass}grid-column`),r.emitContainerClasses()),p&&!g?r.unsetGrabCursor():!p&&g&&r.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(C=>{if(typeof u[C]>"u")return;const S=i[C]&&i[C].enabled,b=u[C]&&u[C].enabled;S&&!b&&r[C].disable(),!S&&b&&r[C].enable()});const d=u.direction&&u.direction!==i.direction,h=i.loop&&(u.slidesPerView!==i.slidesPerView||d),v=i.loop;d&&t&&r.changeDirection(),Zt(r.params,u);const E=r.params.enabled,w=r.params.loop;Object.assign(r,{allowTouchMove:r.params.allowTouchMove,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev}),A&&!E?r.disable():!A&&E&&r.enable(),r.currentBreakpoint=c,r.emit("_beforeBreakpoint",u),t&&(h?(r.loopDestroy(),r.loopCreate(e),r.updateSlides()):!v&&w?(r.loopCreate(e),r.updateSlides()):v&&!w&&r.loopDestroy()),r.emit("breakpoint",u)}function Cd(r,e="window",t){if(!r||e==="container"&&!t)return;let i=!1;const s=Ut(),n=e==="window"?s.innerHeight:t.clientHeight,o=Object.keys(r).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:n*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?s.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var Ud={setBreakpoint:xd,getBreakpoint:Cd};function Td(r,e){const t=[];return r.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(s=>{i[s]&&t.push(e+s)}):typeof i=="string"&&t.push(e+i)}),t}function Md(){const r=this,{classNames:e,params:t,rtl:i,el:s,device:n}=r,o=Td(["initialized",t.direction,{"free-mode":r.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),s.classList.add(...e),r.emitContainerClasses()}function Rd(){const r=this,{el:e,classNames:t}=r;!e||typeof e=="string"||(e.classList.remove(...t),r.emitContainerClasses())}var Id={addClasses:Md,removeClasses:Rd};function Fd(){const r=this,{isLocked:e,params:t}=r,{slidesOffsetBefore:i}=t;if(i){const s=r.slides.length-1,n=r.slidesGrid[s]+r.slidesSizesGrid[s]+i*2;r.isLocked=r.size>n}else r.isLocked=r.snapGrid.length===1;t.allowSlideNext===!0&&(r.allowSlideNext=!r.isLocked),t.allowSlidePrev===!0&&(r.allowSlidePrev=!r.isLocked),e&&e!==r.isLocked&&(r.isEnd=!1),e!==r.isLocked&&r.emit(r.isLocked?"lock":"unlock")}var Bd={checkOverflow:Fd},wl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Qd(r,e){return function(t={}){const i=Object.keys(t)[0],s=t[i];if(typeof s!="object"||s===null){Zt(e,t);return}if(r[i]===!0&&(r[i]={enabled:!0}),i==="navigation"&&r[i]&&r[i].enabled&&!r[i].prevEl&&!r[i].nextEl&&(r[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&r[i]&&r[i].enabled&&!r[i].el&&(r[i].auto=!0),!(i in r&&"enabled"in s)){Zt(e,t);return}typeof r[i]=="object"&&!("enabled"in r[i])&&(r[i].enabled=!0),r[i]||(r[i]={enabled:!1}),Zt(e,t)}}const aa={eventsEmitter:Iu,update:zu,translate:Xu,transition:qu,slide:ad,loop:hd,grabCursor:pd,events:bd,breakpoints:Ud,checkOverflow:Bd,classes:Id},oa={};class Ht{constructor(...e){let t,i;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?i=e[0]:[t,i]=e,i||(i={}),i=Zt({},i),t&&!i.el&&(i.el=t);const s=kt();if(i.el&&typeof i.el=="string"&&s.querySelectorAll(i.el).length>1){const l=[];return s.querySelectorAll(i.el).forEach(c=>{const u=Zt({},i,{el:c});l.push(new Ht(u))}),l}const n=this;n.__swiper__=!0,n.support=ul(),n.device=dl({userAgent:i.userAgent}),n.browser=pl(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(l=>{typeof l=="function"&&n.modules.indexOf(l)<0&&n.modules.push(l)});const o={};n.modules.forEach(l=>{l({params:i,swiper:n,extendParams:Qd(i,o),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const a=Zt({},wl,o);return n.params=Zt({},a,oa,i),n.originalParams=Zt({},n.params),n.passedParams=Zt({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach(l=>{n.on(l,n.params.on[l])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),Object.assign(n,{enabled:n.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,s=ai(t,`.${i.slideClass}, swiper-slide`),n=Ps(s[0]);return Ps(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=ai(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const s=i.minTranslate(),n=(i.maxTranslate()-s)*e+s;i.translateTo(n,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const s=e.getSlideClasses(i);t.push({slideEl:i,classNames:s}),e.emit("_slideClass",i,s)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const i=this,{params:s,slides:n,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=i;let u=1;if(typeof s.slidesPerView=="number")return s.slidesPerView;if(s.centeredSlides){let f=n[c]?Math.ceil(n[c].swiperSlideSize):0,m;for(let p=c+1;p<n.length;p+=1)n[p]&&!m&&(f+=Math.ceil(n[p].swiperSlideSize),u+=1,f>l&&(m=!0));for(let p=c-1;p>=0;p-=1)n[p]&&!m&&(f+=n[p].swiperSlideSize,u+=1,f>l&&(m=!0))}else if(e==="current")for(let f=c+1;f<n.length;f+=1)(t?o[f]+a[f]-o[c]<l:o[f]-o[c]<l)&&(u+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Os(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function s(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)s(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(o.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||s()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,s=i.params.direction;return e||(e=s==="horizontal"?"vertical":"horizontal"),e===s||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${s}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const s=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let n=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(s()):ai(i,s())[0];return!n&&t.params.createElements&&(n=ds("div",t.params.wrapperClass),i.append(n),ai(i,`.${t.params.slideClass}`).forEach(o=>{n.append(o)})),Object.assign(t,{el:i,wrapperEl:n,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:n,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||Pi(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||Pi(i,"direction")==="rtl"),wrongRTL:Pi(n,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Os(t,s):s.addEventListener("load",n=>{Os(t,n.target)})}),na(t),t.initialized=!0,na(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const i=this,{params:s,el:n,wrapperEl:o,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),o&&o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),_u(i)),i.destroyed=!0),null}static extendDefaults(e){Zt(oa,e)}static get extendedDefaults(){return oa}static get defaults(){return wl}static installModule(e){Ht.prototype.__modules__||(Ht.prototype.__modules__=[]);const t=Ht.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Ht.installModule(t)),Ht):(Ht.installModule(e),Ht)}}Object.keys(aa).forEach(r=>{Object.keys(aa[r]).forEach(e=>{Ht.prototype[e]=aa[r][e]})}),Ht.use([Mu,Ru]);function Ld({swiper:r,extendParams:e,on:t,emit:i}){const s=kt(),n=Ut();r.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0,speed:void 0}});function o(c){if(!r.enabled)return;const{rtlTranslate:u}=r;let f=c;f.originalEvent&&(f=f.originalEvent);const m=f.keyCode||f.charCode,p=r.params.keyboard.pageUpDown,g=p&&m===33,A=p&&m===34,d=m===37,h=m===39,v=m===38,E=m===40;if(!r.allowSlideNext&&(r.isHorizontal()&&h||r.isVertical()&&E||A)||!r.allowSlidePrev&&(r.isHorizontal()&&d||r.isVertical()&&v||g))return!1;if(f.shiftKey||f.altKey||f.ctrlKey||f.metaKey||s.activeElement&&(s.activeElement.isContentEditable||s.activeElement.nodeName&&(s.activeElement.nodeName.toLowerCase()==="input"||s.activeElement.nodeName.toLowerCase()==="textarea")))return;if(r.params.keyboard.onlyInViewport&&(g||A||d||h||v||E)){let C=!1;if(Vs(r.el,`.${r.params.slideClass}, swiper-slide`).length>0&&Vs(r.el,`.${r.params.slideActiveClass}`).length===0)return;const S=r.el,b=S.clientWidth,U=S.clientHeight,y=n.innerWidth,_=n.innerHeight,x=hl(S);u&&(x.left-=S.scrollLeft);const T=[[x.left,x.top],[x.left+b,x.top],[x.left,x.top+U],[x.left+b,x.top+U]];for(let R=0;R<T.length;R+=1){const Q=T[R];if(Q[0]>=0&&Q[0]<=y&&Q[1]>=0&&Q[1]<=_){if(Q[0]===0&&Q[1]===0)continue;C=!0}}if(!C)return}const w=r.params.keyboard.speed;r.isHorizontal()?((g||A||d||h)&&(f.preventDefault?f.preventDefault():f.returnValue=!1),((A||h)&&!u||(g||d)&&u)&&r.slideNext(w),((g||d)&&!u||(A||h)&&u)&&r.slidePrev(w)):((g||A||v||E)&&(f.preventDefault?f.preventDefault():f.returnValue=!1),(A||E)&&r.slideNext(w),(g||v)&&r.slidePrev(w)),i("keyPress",m)}function a(){r.keyboard.enabled||(s.addEventListener("keydown",o),r.keyboard.enabled=!0)}function l(){r.keyboard.enabled&&(s.removeEventListener("keydown",o),r.keyboard.enabled=!1)}t("init",()=>{r.params.keyboard.enabled&&a()}),t("destroy",()=>{r.keyboard.enabled&&l()}),Object.assign(r.keyboard,{enable:a,disable:l})}function la(r,e,t,i){return r.params.createElements&&Object.keys(i).forEach(s=>{if(!t[s]&&t.auto===!0){let n=ai(r.el,`.${i[s]}`)[0];n||(n=ds("div",i[s]),n.className=i[s],r.el.append(n)),t[s]=n,e[s]=n}}),t}const yl='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function Dd({swiper:r,extendParams:e,on:t,emit:i}){e({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),r.navigation={nextEl:null,prevEl:null,arrowSvg:yl};function s(p){let g;return p&&typeof p=="string"&&r.isElement&&(g=r.el.querySelector(p)||r.hostEl.querySelector(p),g)?g:(p&&(typeof p=="string"&&(g=[...document.querySelectorAll(p)]),r.params.uniqueNavElements&&typeof p=="string"&&g&&g.length>1&&r.el.querySelectorAll(p).length===1?g=r.el.querySelector(p):g&&g.length===1&&(g=g[0])),p&&!g?p:g)}function n(p,g){const A=r.params.navigation;p=wt(p),p.forEach(d=>{d&&(d.classList[g?"add":"remove"](...A.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=g),r.params.watchOverflow&&r.enabled&&d.classList[r.isLocked?"add":"remove"](A.lockClass))})}function o(){const{nextEl:p,prevEl:g}=r.navigation;if(r.params.loop){n(g,!1),n(p,!1);return}n(g,r.isBeginning&&!r.params.rewind),n(p,r.isEnd&&!r.params.rewind)}function a(p){p.preventDefault(),!(r.isBeginning&&!r.params.loop&&!r.params.rewind)&&(r.slidePrev(),i("navigationPrev"))}function l(p){p.preventDefault(),!(r.isEnd&&!r.params.loop&&!r.params.rewind)&&(r.slideNext(),i("navigationNext"))}function c(){const p=r.params.navigation;if(r.params.navigation=la(r,r.originalParams.navigation,r.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let g=s(p.nextEl),A=s(p.prevEl);Object.assign(r.navigation,{nextEl:g,prevEl:A}),g=wt(g),A=wt(A);const d=(h,v)=>{if(h){if(p.addIcons&&h.matches(".swiper-button-next,.swiper-button-prev")&&!h.querySelector("svg")){const E=document.createElement("div");$n(E,yl),h.appendChild(E.querySelector("svg")),E.remove()}h.addEventListener("click",v==="next"?l:a)}!r.enabled&&h&&h.classList.add(...p.lockClass.split(" "))};g.forEach(h=>d(h,"next")),A.forEach(h=>d(h,"prev"))}function u(){let{nextEl:p,prevEl:g}=r.navigation;p=wt(p),g=wt(g);const A=(d,h)=>{d.removeEventListener("click",h==="next"?l:a),d.classList.remove(...r.params.navigation.disabledClass.split(" "))};p.forEach(d=>A(d,"next")),g.forEach(d=>A(d,"prev"))}t("init",()=>{r.params.navigation.enabled===!1?m():(c(),o())}),t("toEdge fromEdge lock unlock",()=>{o()}),t("destroy",()=>{u()}),t("enable disable",()=>{let{nextEl:p,prevEl:g}=r.navigation;if(p=wt(p),g=wt(g),r.enabled){o();return}[...p,...g].filter(A=>!!A).forEach(A=>A.classList.add(r.params.navigation.lockClass))}),t("click",(p,g)=>{let{nextEl:A,prevEl:d}=r.navigation;A=wt(A),d=wt(d);const h=g.target;let v=d.includes(h)||A.includes(h);if(r.isElement&&!v){const E=g.path||g.composedPath&&g.composedPath();E&&(v=E.find(w=>A.includes(w)||d.includes(w)))}if(r.params.navigation.hideOnClick&&!v){if(r.pagination&&r.params.pagination&&r.params.pagination.clickable&&(r.pagination.el===h||r.pagination.el.contains(h)))return;let E;A.length?E=A[0].classList.contains(r.params.navigation.hiddenClass):d.length&&(E=d[0].classList.contains(r.params.navigation.hiddenClass)),i(E===!0?"navigationShow":"navigationHide"),[...A,...d].filter(w=>!!w).forEach(w=>w.classList.toggle(r.params.navigation.hiddenClass))}});const f=()=>{r.el.classList.remove(...r.params.navigation.navigationDisabledClass.split(" ")),c(),o()},m=()=>{r.el.classList.add(...r.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(r.navigation,{enable:f,disable:m,update:o,init:c,destroy:u})}function yr(r=""){return`.${r.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Nd({swiper:r,extendParams:e,on:t,emit:i}){const s="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),r.pagination={el:null,bullets:[]};let n,o=0;function a(){return!r.params.pagination.el||!r.pagination.el||Array.isArray(r.pagination.el)&&r.pagination.el.length===0}function l(h,v){const{bulletActiveClass:E}=r.params.pagination;h&&(h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${E}-${v}`),h=h[`${v==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${E}-${v}-${v}`)))}function c(h,v,E){if(h=h%E,v=v%E,v===h+1)return"next";if(v===h-1)return"previous"}function u(h){const v=h.target.closest(yr(r.params.pagination.bulletClass));if(!v)return;h.preventDefault();const E=Ps(v)*r.params.slidesPerGroup;if(r.params.loop){if(r.realIndex===E)return;const w=c(r.realIndex,E,r.slides.length);w==="next"?r.slideNext():w==="previous"?r.slidePrev():r.slideToLoop(E)}else r.slideTo(E)}function f(){const h=r.rtl,v=r.params.pagination;if(a())return;let E=r.pagination.el;E=wt(E);let w,C;const S=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:r.slides.length,b=r.params.loop?Math.ceil(S/r.params.slidesPerGroup):r.snapGrid.length;if(r.params.loop?(C=r.previousRealIndex||0,w=r.params.slidesPerGroup>1?Math.floor(r.realIndex/r.params.slidesPerGroup):r.realIndex):typeof r.snapIndex<"u"?(w=r.snapIndex,C=r.previousSnapIndex):(C=r.previousIndex||0,w=r.activeIndex||0),v.type==="bullets"&&r.pagination.bullets&&r.pagination.bullets.length>0){const U=r.pagination.bullets;let y,_,x;if(v.dynamicBullets&&(n=qn(U[0],r.isHorizontal()?"width":"height"),E.forEach(T=>{T.style[r.isHorizontal()?"width":"height"]=`${n*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&C!==void 0&&(o+=w-(C||0),o>v.dynamicMainBullets-1?o=v.dynamicMainBullets-1:o<0&&(o=0)),y=Math.max(w-o,0),_=y+(Math.min(U.length,v.dynamicMainBullets)-1),x=(_+y)/2),U.forEach(T=>{const R=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(Q=>`${v.bulletActiveClass}${Q}`)].map(Q=>typeof Q=="string"&&Q.includes(" ")?Q.split(" "):Q).flat();T.classList.remove(...R)}),E.length>1)U.forEach(T=>{const R=Ps(T);R===w?T.classList.add(...v.bulletActiveClass.split(" ")):r.isElement&&T.setAttribute("part","bullet"),v.dynamicBullets&&(R>=y&&R<=_&&T.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),R===y&&l(T,"prev"),R===_&&l(T,"next"))});else{const T=U[w];if(T&&T.classList.add(...v.bulletActiveClass.split(" ")),r.isElement&&U.forEach((R,Q)=>{R.setAttribute("part",Q===w?"bullet-active":"bullet")}),v.dynamicBullets){const R=U[y],Q=U[_];for(let N=y;N<=_;N+=1)U[N]&&U[N].classList.add(...`${v.bulletActiveClass}-main`.split(" "));l(R,"prev"),l(Q,"next")}}if(v.dynamicBullets){const T=Math.min(U.length,v.dynamicMainBullets+4),R=(n*T-n)/2-x*n,Q=h?"right":"left";U.forEach(N=>{N.style[r.isHorizontal()?Q:"top"]=`${R}px`})}}E.forEach((U,y)=>{if(v.type==="fraction"&&(U.querySelectorAll(yr(v.currentClass)).forEach(_=>{_.textContent=v.formatFractionCurrent(w+1)}),U.querySelectorAll(yr(v.totalClass)).forEach(_=>{_.textContent=v.formatFractionTotal(b)})),v.type==="progressbar"){let _;v.progressbarOpposite?_=r.isHorizontal()?"vertical":"horizontal":_=r.isHorizontal()?"horizontal":"vertical";const x=(w+1)/b;let T=1,R=1;_==="horizontal"?T=x:R=x,U.querySelectorAll(yr(v.progressbarFillClass)).forEach(Q=>{Q.style.transform=`translate3d(0,0,0) scaleX(${T}) scaleY(${R})`,Q.style.transitionDuration=`${r.params.speed}ms`})}v.type==="custom"&&v.renderCustom?($n(U,v.renderCustom(r,w+1,b)),y===0&&i("paginationRender",U)):(y===0&&i("paginationRender",U),i("paginationUpdate",U)),r.params.watchOverflow&&r.enabled&&U.classList[r.isLocked?"add":"remove"](v.lockClass)})}function m(){const h=r.params.pagination;if(a())return;const v=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:r.grid&&r.params.grid.rows>1?r.slides.length/Math.ceil(r.params.grid.rows):r.slides.length;let E=r.pagination.el;E=wt(E);let w="";if(h.type==="bullets"){let C=r.params.loop?Math.ceil(v/r.params.slidesPerGroup):r.snapGrid.length;r.params.freeMode&&r.params.freeMode.enabled&&C>v&&(C=v);for(let S=0;S<C;S+=1)h.renderBullet?w+=h.renderBullet.call(r,S,h.bulletClass):w+=`<${h.bulletElement} ${r.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?w=h.renderFraction.call(r,h.currentClass,h.totalClass):w=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?w=h.renderProgressbar.call(r,h.progressbarFillClass):w=`<span class="${h.progressbarFillClass}"></span>`),r.pagination.bullets=[],E.forEach(C=>{h.type!=="custom"&&$n(C,w||""),h.type==="bullets"&&r.pagination.bullets.push(...C.querySelectorAll(yr(h.bulletClass)))}),h.type!=="custom"&&i("paginationRender",E[0])}function p(){r.params.pagination=la(r,r.originalParams.pagination,r.params.pagination,{el:"swiper-pagination"});const h=r.params.pagination;if(!h.el)return;let v;typeof h.el=="string"&&r.isElement&&(v=r.el.querySelector(h.el)),!v&&typeof h.el=="string"&&(v=[...document.querySelectorAll(h.el)]),v||(v=h.el),!(!v||v.length===0)&&(r.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...r.el.querySelectorAll(h.el)],v.length>1&&(v=v.find(E=>Vs(E,".swiper")[0]===r.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(r.pagination,{el:v}),v=wt(v),v.forEach(E=>{h.type==="bullets"&&h.clickable&&E.classList.add(...(h.clickableClass||"").split(" ")),E.classList.add(h.modifierClass+h.type),E.classList.add(r.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(E.classList.add(`${h.modifierClass}${h.type}-dynamic`),o=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&E.classList.add(h.progressbarOppositeClass),h.clickable&&E.addEventListener("click",u),r.enabled||E.classList.add(h.lockClass)}))}function g(){const h=r.params.pagination;if(a())return;let v=r.pagination.el;v&&(v=wt(v),v.forEach(E=>{E.classList.remove(h.hiddenClass),E.classList.remove(h.modifierClass+h.type),E.classList.remove(r.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(E.classList.remove(...(h.clickableClass||"").split(" ")),E.removeEventListener("click",u))})),r.pagination.bullets&&r.pagination.bullets.forEach(E=>E.classList.remove(...h.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!r.pagination||!r.pagination.el)return;const h=r.params.pagination;let{el:v}=r.pagination;v=wt(v),v.forEach(E=>{E.classList.remove(h.horizontalClass,h.verticalClass),E.classList.add(r.isHorizontal()?h.horizontalClass:h.verticalClass)})}),t("init",()=>{r.params.pagination.enabled===!1?d():(p(),m(),f())}),t("activeIndexChange",()=>{typeof r.snapIndex>"u"&&f()}),t("snapIndexChange",()=>{f()}),t("snapGridLengthChange",()=>{m(),f()}),t("destroy",()=>{g()}),t("enable disable",()=>{let{el:h}=r.pagination;h&&(h=wt(h),h.forEach(v=>v.classList[r.enabled?"remove":"add"](r.params.pagination.lockClass)))}),t("lock unlock",()=>{f()}),t("click",(h,v)=>{const E=v.target,w=wt(r.pagination.el);if(r.params.pagination.el&&r.params.pagination.hideOnClick&&w&&w.length>0&&!E.classList.contains(r.params.pagination.bulletClass)){if(r.navigation&&(r.navigation.nextEl&&E===r.navigation.nextEl||r.navigation.prevEl&&E===r.navigation.prevEl))return;const C=w[0].classList.contains(r.params.pagination.hiddenClass);i(C===!0?"paginationShow":"paginationHide"),w.forEach(S=>S.classList.toggle(r.params.pagination.hiddenClass))}});const A=()=>{r.el.classList.remove(r.params.pagination.paginationDisabledClass);let{el:h}=r.pagination;h&&(h=wt(h),h.forEach(v=>v.classList.remove(r.params.pagination.paginationDisabledClass))),p(),m(),f()},d=()=>{r.el.classList.add(r.params.pagination.paginationDisabledClass);let{el:h}=r.pagination;h&&(h=wt(h),h.forEach(v=>v.classList.add(r.params.pagination.paginationDisabledClass))),g()};Object.assign(r.pagination,{enable:A,disable:d,render:m,update:f,init:p,destroy:g})}function kd({swiper:r,extendParams:e,on:t,emit:i}){const s=kt();let n=!1,o=null,a=null,l,c,u,f;e({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),r.scrollbar={el:null,dragEl:null};function m(){if(!r.params.scrollbar.el||!r.scrollbar.el)return;const{scrollbar:x,rtlTranslate:T}=r,{dragEl:R,el:Q}=x,N=r.params.scrollbar,k=r.params.loop?r.progressLoop:r.progress;let F=c,M=(u-c)*k;T?(M=-M,M>0?(F=c-M,M=0):-M+c>u&&(F=u+M)):M<0?(F=c+M,M=0):M+c>u&&(F=u-M),r.isHorizontal()?(R.style.transform=`translate3d(${M}px, 0, 0)`,R.style.width=`${F}px`):(R.style.transform=`translate3d(0px, ${M}px, 0)`,R.style.height=`${F}px`),N.hide&&(clearTimeout(o),Q.style.opacity=1,o=setTimeout(()=>{Q.style.opacity=0,Q.style.transitionDuration="400ms"},1e3))}function p(x){!r.params.scrollbar.el||!r.scrollbar.el||(r.scrollbar.dragEl.style.transitionDuration=`${x}ms`)}function g(){if(!r.params.scrollbar.el||!r.scrollbar.el)return;const{scrollbar:x}=r,{dragEl:T,el:R}=x;T.style.width="",T.style.height="",u=r.isHorizontal()?R.offsetWidth:R.offsetHeight,f=r.size/(r.virtualSize+r.params.slidesOffsetBefore-(r.params.centeredSlides?r.snapGrid[0]:0)),r.params.scrollbar.dragSize==="auto"?c=u*f:c=parseInt(r.params.scrollbar.dragSize,10),r.isHorizontal()?T.style.width=`${c}px`:T.style.height=`${c}px`,f>=1?R.style.display="none":R.style.display="",r.params.scrollbar.hide&&(R.style.opacity=0),r.params.watchOverflow&&r.enabled&&x.el.classList[r.isLocked?"add":"remove"](r.params.scrollbar.lockClass)}function A(x){return r.isHorizontal()?x.clientX:x.clientY}function d(x){const{scrollbar:T,rtlTranslate:R}=r,{el:Q}=T;let N;N=(A(x)-hl(Q)[r.isHorizontal()?"left":"top"]-(l!==null?l:c/2))/(u-c),N=Math.max(Math.min(N,1),0),R&&(N=1-N);const k=r.minTranslate()+(r.maxTranslate()-r.minTranslate())*N;r.updateProgress(k),r.setTranslate(k),r.updateActiveIndex(),r.updateSlidesClasses()}function h(x){const T=r.params.scrollbar,{scrollbar:R,wrapperEl:Q}=r,{el:N,dragEl:k}=R;n=!0,l=x.target===k?A(x)-x.target.getBoundingClientRect()[r.isHorizontal()?"left":"top"]:null,x.preventDefault(),x.stopPropagation(),Q.style.transitionDuration="100ms",k.style.transitionDuration="100ms",d(x),clearTimeout(a),N.style.transitionDuration="0ms",T.hide&&(N.style.opacity=1),r.params.cssMode&&(r.wrapperEl.style["scroll-snap-type"]="none"),i("scrollbarDragStart",x)}function v(x){const{scrollbar:T,wrapperEl:R}=r,{el:Q,dragEl:N}=T;n&&(x.preventDefault&&x.cancelable?x.preventDefault():x.returnValue=!1,d(x),R.style.transitionDuration="0ms",Q.style.transitionDuration="0ms",N.style.transitionDuration="0ms",i("scrollbarDragMove",x))}function E(x){const T=r.params.scrollbar,{scrollbar:R,wrapperEl:Q}=r,{el:N}=R;n&&(n=!1,r.params.cssMode&&(r.wrapperEl.style["scroll-snap-type"]="",Q.style.transitionDuration=""),T.hide&&(clearTimeout(a),a=Kn(()=>{N.style.opacity=0,N.style.transitionDuration="400ms"},1e3)),i("scrollbarDragEnd",x),T.snapOnRelease&&r.slideToClosest())}function w(x){const{scrollbar:T,params:R}=r,Q=T.el;if(!Q)return;const N=Q,k=R.passiveListeners?{passive:!1,capture:!1}:!1,F=R.passiveListeners?{passive:!0,capture:!1}:!1;if(!N)return;const M=x==="on"?"addEventListener":"removeEventListener";N[M]("pointerdown",h,k),s[M]("pointermove",v,k),s[M]("pointerup",E,F)}function C(){!r.params.scrollbar.el||!r.scrollbar.el||w("on")}function S(){!r.params.scrollbar.el||!r.scrollbar.el||w("off")}function b(){const{scrollbar:x,el:T}=r;r.params.scrollbar=la(r,r.originalParams.scrollbar,r.params.scrollbar,{el:"swiper-scrollbar"});const R=r.params.scrollbar;if(!R.el)return;let Q;if(typeof R.el=="string"&&r.isElement&&(Q=r.el.querySelector(R.el)),!Q&&typeof R.el=="string"){if(Q=s.querySelectorAll(R.el),!Q.length)return}else Q||(Q=R.el);r.params.uniqueNavElements&&typeof R.el=="string"&&Q.length>1&&T.querySelectorAll(R.el).length===1&&(Q=T.querySelector(R.el)),Q.length>0&&(Q=Q[0]),Q.classList.add(r.isHorizontal()?R.horizontalClass:R.verticalClass);let N;Q&&(N=Q.querySelector(yr(r.params.scrollbar.dragClass)),N||(N=ds("div",r.params.scrollbar.dragClass),Q.append(N))),Object.assign(x,{el:Q,dragEl:N}),R.draggable&&C(),Q&&Q.classList[r.enabled?"remove":"add"](...ki(r.params.scrollbar.lockClass))}function U(){const x=r.params.scrollbar,T=r.scrollbar.el;T&&T.classList.remove(...ki(r.isHorizontal()?x.horizontalClass:x.verticalClass)),S()}t("changeDirection",()=>{if(!r.scrollbar||!r.scrollbar.el)return;const x=r.params.scrollbar;let{el:T}=r.scrollbar;T=wt(T),T.forEach(R=>{R.classList.remove(x.horizontalClass,x.verticalClass),R.classList.add(r.isHorizontal()?x.horizontalClass:x.verticalClass)})}),t("init",()=>{r.params.scrollbar.enabled===!1?_():(b(),g(),m())}),t("update resize observerUpdate lock unlock changeDirection",()=>{g()}),t("setTranslate",()=>{m()}),t("setTransition",(x,T)=>{p(T)}),t("enable disable",()=>{const{el:x}=r.scrollbar;x&&x.classList[r.enabled?"remove":"add"](...ki(r.params.scrollbar.lockClass))}),t("destroy",()=>{U()});const y=()=>{r.el.classList.remove(...ki(r.params.scrollbar.scrollbarDisabledClass)),r.scrollbar.el&&r.scrollbar.el.classList.remove(...ki(r.params.scrollbar.scrollbarDisabledClass)),b(),g(),m()},_=()=>{r.el.classList.add(...ki(r.params.scrollbar.scrollbarDisabledClass)),r.scrollbar.el&&r.scrollbar.el.classList.add(...ki(r.params.scrollbar.scrollbarDisabledClass)),U()};Object.assign(r.scrollbar,{enable:y,disable:_,updateSize:g,setTranslate:m,init:b,destroy:U})}function Pd({swiper:r,extendParams:e,on:t,emit:i,params:s}){r.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,o,a=s&&s.autoplay?s.autoplay.delay:3e3,l=s&&s.autoplay?s.autoplay.delay:3e3,c,u=new Date().getTime(),f,m,p,g,A,d;function h(F){!r||r.destroyed||!r.wrapperEl||F.target===r.wrapperEl&&(r.wrapperEl.removeEventListener("transitionend",h),!(d||F.detail&&F.detail.bySwiperTouchMove)&&y())}const v=()=>{if(r.destroyed||!r.autoplay.running)return;r.autoplay.paused?f=!0:f&&(l=c,f=!1);const F=r.autoplay.paused?c:u+l-new Date().getTime();r.autoplay.timeLeft=F,i("autoplayTimeLeft",F,F/a),o=requestAnimationFrame(()=>{v()})},E=()=>{let F;return r.virtual&&r.params.virtual.enabled?F=r.slides.find(M=>M.classList.contains("swiper-slide-active")):F=r.slides[r.activeIndex],F?parseInt(F.getAttribute("data-swiper-autoplay"),10):void 0},w=()=>{let F=r.params.autoplay.delay;const M=E();return!Number.isNaN(M)&&M>0&&(F=M),F},C=F=>{if(r.destroyed||!r.autoplay.running)return;cancelAnimationFrame(o),v();let M=F;typeof M>"u"&&(M=w(),a=M,l=M),c=M;const B=r.params.speed,P=()=>{!r||r.destroyed||(r.params.autoplay.reverseDirection?!r.isBeginning||r.params.loop||r.params.rewind?(r.slidePrev(B,!0,!0),i("autoplay")):r.params.autoplay.stopOnLastSlide||(r.slideTo(r.slides.length-1,B,!0,!0),i("autoplay")):!r.isEnd||r.params.loop||r.params.rewind?(r.slideNext(B,!0,!0),i("autoplay")):r.params.autoplay.stopOnLastSlide||(r.slideTo(0,B,!0,!0),i("autoplay")),r.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return M>0?(clearTimeout(n),n=setTimeout(()=>{P()},M)):requestAnimationFrame(()=>{P()}),M},S=()=>{u=new Date().getTime(),r.autoplay.running=!0,C(),i("autoplayStart")},b=()=>{r.autoplay.running=!1,clearTimeout(n),cancelAnimationFrame(o),i("autoplayStop")},U=(F,M)=>{if(r.destroyed||!r.autoplay.running)return;clearTimeout(n),F||(A=!0);const B=()=>{i("autoplayPause"),r.params.autoplay.waitForTransition?r.wrapperEl.addEventListener("transitionend",h):y()};if(r.autoplay.paused=!0,M){B();return}c=(c||r.params.autoplay.delay)-(new Date().getTime()-u),!(r.isEnd&&c<0&&!r.params.loop)&&(c<0&&(c=0),B())},y=()=>{r.isEnd&&c<0&&!r.params.loop||r.destroyed||!r.autoplay.running||(u=new Date().getTime(),A?(A=!1,C(c)):C(),r.autoplay.paused=!1,i("autoplayResume"))},_=()=>{if(r.destroyed||!r.autoplay.running)return;const F=kt();F.visibilityState==="hidden"&&(A=!0,U(!0)),F.visibilityState==="visible"&&y()},x=F=>{F.pointerType==="mouse"&&(A=!0,d=!0,!(r.animating||r.autoplay.paused)&&U(!0))},T=F=>{F.pointerType==="mouse"&&(d=!1,r.autoplay.paused&&y())},R=()=>{r.params.autoplay.pauseOnMouseEnter&&(r.el.addEventListener("pointerenter",x),r.el.addEventListener("pointerleave",T))},Q=()=>{r.el&&typeof r.el!="string"&&(r.el.removeEventListener("pointerenter",x),r.el.removeEventListener("pointerleave",T))},N=()=>{kt().addEventListener("visibilitychange",_)},k=()=>{kt().removeEventListener("visibilitychange",_)};t("init",()=>{r.params.autoplay.enabled&&(R(),N(),S())}),t("destroy",()=>{Q(),k(),r.autoplay.running&&b()}),t("_freeModeStaticRelease",()=>{(p||A)&&y()}),t("_freeModeNoMomentumRelease",()=>{r.params.autoplay.disableOnInteraction?b():U(!0,!0)}),t("beforeTransitionStart",(F,M,B)=>{r.destroyed||!r.autoplay.running||(B||!r.params.autoplay.disableOnInteraction?U(!0,!0):b())}),t("sliderFirstMove",()=>{if(!(r.destroyed||!r.autoplay.running)){if(r.params.autoplay.disableOnInteraction){b();return}m=!0,p=!1,A=!1,g=setTimeout(()=>{A=!0,p=!0,U(!0)},200)}}),t("touchEnd",()=>{if(!(r.destroyed||!r.autoplay.running||!m)){if(clearTimeout(g),clearTimeout(n),r.params.autoplay.disableOnInteraction){p=!1,m=!1;return}p&&r.params.cssMode&&y(),p=!1,m=!1}}),t("slideChange",()=>{r.destroyed||!r.autoplay.running||r.autoplay.paused&&(c=w(),a=w())}),Object.assign(r.autoplay,{start:S,stop:b,pause:U,resume:y})}function Vd({swiper:r,extendParams:e,on:t}){e({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,s=!1;r.thumbs={swiper:null};function n(){const u=r.thumbs.swiper;return!u||u.destroyed?!1:u.params.virtual&&u.params.virtual.enabled}function o(){const u=r.thumbs.swiper;if(!u||u.destroyed)return;const f=u.clickedIndex,m=u.clickedSlide;if(m&&m.classList.contains(r.params.thumbs.slideThumbActiveClass)||typeof f>"u"||f===null)return;let p;u.params.loop?p=parseInt(u.clickedSlide.getAttribute("data-swiper-slide-index"),10):p=f,r.params.loop?r.slideToLoop(p):r.slideTo(p)}function a(){const{thumbs:u}=r.params;if(i)return!1;i=!0;const f=r.constructor;if(u.swiper instanceof f){if(u.swiper.destroyed)return i=!1,!1;r.thumbs.swiper=u.swiper,Object.assign(r.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(r.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),r.thumbs.swiper.update()}else if(us(u.swiper)){const m=Object.assign({},u.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),r.thumbs.swiper=new f(m),s=!0}return r.thumbs.swiper.el.classList.add(r.params.thumbs.thumbsContainerClass),r.thumbs.swiper.on("tap",o),n()&&r.thumbs.swiper.on("virtualUpdate",()=>{l(!1,{autoScroll:!1})}),!0}function l(u,f){const m=r.thumbs.swiper;if(!m||m.destroyed)return;let p=1;const g=r.params.thumbs.slideThumbActiveClass;if(r.params.slidesPerView>1&&!r.params.centeredSlides&&(p=r.params.slidesPerView),r.params.thumbs.multipleActiveThumbs||(p=1),p=Math.floor(p),m.slides.forEach(A=>A.classList.remove(g)),m.params.loop||n())for(let A=0;A<p;A+=1)ai(m.slidesEl,`[data-swiper-slide-index="${r.realIndex+A}"]`).forEach(d=>{d.classList.add(g)});else for(let A=0;A<p;A+=1)m.slides[r.realIndex+A]&&m.slides[r.realIndex+A].classList.add(g);(f?.autoScroll??!0)&&c(u?0:void 0)}function c(u){const f=r.thumbs.swiper;if(!f||f.destroyed)return;const m=f.params.slidesPerView==="auto"?f.slidesPerViewDynamic():f.params.slidesPerView,p=r.params.thumbs.autoScrollOffset,g=p&&!f.params.loop;if(r.realIndex!==f.realIndex||g){const A=f.activeIndex;let d,h;if(f.params.loop){const v=f.slides.find(E=>E.getAttribute("data-swiper-slide-index")===`${r.realIndex}`);d=f.slides.indexOf(v),h=r.activeIndex>r.previousIndex?"next":"prev"}else d=r.realIndex,h=d>r.previousIndex?"next":"prev";g&&(d+=h==="next"?p:-1*p),f.visibleSlidesIndexes&&f.visibleSlidesIndexes.indexOf(d)<0&&(f.params.centeredSlides?d>A?d=d-Math.floor(m/2)+1:d=d+Math.floor(m/2)-1:d>A&&f.params.slidesPerGroup,f.slideTo(d,u))}}t("beforeInit",()=>{const{thumbs:u}=r.params;if(!(!u||!u.swiper))if(typeof u.swiper=="string"||u.swiper instanceof HTMLElement){const f=kt(),m=()=>{const g=typeof u.swiper=="string"?f.querySelector(u.swiper):u.swiper;if(g&&g.swiper)u.swiper=g.swiper,a(),l(!0);else if(g){const A=`${r.params.eventsPrefix}init`,d=h=>{u.swiper=h.detail[0],g.removeEventListener(A,d),a(),l(!0),u.swiper.update(),r.update()};g.addEventListener(A,d)}return g},p=()=>{r.destroyed||m()||requestAnimationFrame(p)};requestAnimationFrame(p)}else a(),l(!0)}),t("slideChange update resize observerUpdate",()=>{l()}),t("setTransition",(u,f)=>{const m=r.thumbs.swiper;!m||m.destroyed||m.setTransition(f)}),t("beforeDestroy",()=>{const u=r.thumbs.swiper;!u||u.destroyed||s&&u.destroy()}),Object.assign(r.thumbs,{init:a,update:l})}const Od=':root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-slides-offset-before);scroll-margin-inline-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-horizontal>.swiper-wrapper>.swiper-slide:last-child{margin-inline-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-slides-offset-before);scroll-margin-block-start:var(--swiper-slides-offset-before)}.swiper-css-mode.swiper-vertical>.swiper-wrapper>.swiper-slide:last-child{margin-block-end:var(--swiper-slides-offset-after)}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}:is(.swiper:not(.swiper-watch-progress),.swiper-watch-progress .swiper-slide-visible) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;width:var(--swiper-navigation-size);height:var(--swiper-navigation-size);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}:is(.swiper-button-prev,.swiper-button-next).swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}:is(.swiper-button-prev,.swiper-button-next).swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled :is(.swiper-button-prev,.swiper-button-next){display:none!important}:is(.swiper-button-prev,.swiper-button-next) ::slotted(svg),:is(.swiper-button-prev,.swiper-button-next) svg{width:100%;height:100%;object-fit:contain;transform-origin:center;fill:currentColor;pointer-events:none}.swiper-button-lock{display:none}.swiper-button-prev,.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2))}.swiper-button-prev{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-button-prev ::slotted(.swiper-navigation-icon),.swiper-button-prev .swiper-navigation-icon{transform:rotate(180deg)}.swiper-button-next{right:var(--swiper-navigation-sides-offset, 4px);left:auto}.swiper-horizontal .swiper-button-prev,.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal~.swiper-button-next{top:var(--swiper-navigation-top-offset, 50%);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));margin-left:0}.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next{left:var(--swiper-navigation-sides-offset, 4px);right:auto}.swiper-horizontal .swiper-button-next,.swiper-horizontal~.swiper-button-next,.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev{right:var(--swiper-navigation-sides-offset, 4px);left:auto}:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal .swiper-button-prev,.swiper-horizontal~.swiper-button-prev,.swiper-horizontal.swiper-rtl .swiper-button-next,.swiper-horizontal.swiper-rtl~.swiper-button-next) .swiper-navigation-icon{transform:rotate(180deg)}:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-horizontal.swiper-rtl .swiper-button-prev,.swiper-horizontal.swiper-rtl~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(0)}.swiper-vertical .swiper-button-prev,.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-prev,.swiper-vertical~.swiper-button-next{left:var(--swiper-navigation-top-offset, 50%);right:auto;margin-left:calc(0px - (var(--swiper-navigation-size) / 2));margin-top:0}.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev{top:var(--swiper-navigation-sides-offset, 4px);bottom:auto}:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-prev,.swiper-vertical~.swiper-button-prev) .swiper-navigation-icon{transform:rotate(-90deg)}.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next{bottom:var(--swiper-navigation-sides-offset, 4px);top:auto}:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) ::slotted(.swiper-navigation-icon),:is(.swiper-vertical .swiper-button-next,.swiper-vertical~.swiper-button-next) .swiper-navigation-icon{transform:rotate(90deg)}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets) .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}:is(.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets) .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}:is(.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-horizontal.swiper-pagination-bullets).swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}';function zd(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}class Sl extends Ds{slider;divContainer;divSlides;divGallery;divPagination;divPrevious;divNext;isDragging=!1;static get observedAttributes(){return["has-thumb","autoplay"]}get hasThumb(){return this.hasAttribute("has-thumb")}get autoplay(){return this.hasAttribute("autoplay")}get slides(){return[...Array.from(this.querySelectorAll("cc-swiper-slide")),...Array.from(this.divSlides?.querySelectorAll("cc-swiper-slide")??[])]}async openViewer(e,t,i){let s=document.querySelector("cc-viewer");if(!s){const a=document.createElement("cc-viewer");document.body.appendChild(a),await customElements.whenDefined("cc-viewer"),s=await new Promise(l=>{setTimeout(()=>{l(document.querySelector("cc-viewer"))},100)})}s.setSwiper(this),s.setCurrentSlideIndex(i??this.slider?.activeIndex??0);const n=this.slides[i??this.slider?.activeIndex??0],o={};n?.hasAttribute("fit-to-container")&&(o.fitToContainer=!0),n?.hasAttribute("debug-mode")&&(o.debugMode=!0),n?.hasAttribute("camera-position")&&(o.cameraPosition=n.getAttribute("camera-position")),n?.hasAttribute("camera-target")&&(o.cameraTarget=n.getAttribute("camera-target")),n?.hasAttribute("show-texture")&&(o.showTexture=n.getAttribute("show-texture")==="true"),t==="3dmodel"&&n?.hasAttribute("material-url")&&(o.materialUrl=n.getAttribute("material-url")),s.open(e,t,o)}firstUpdated(){}buildSlideElements(){const e=this.query("#divSlides");e&&this.slides.forEach((t,i)=>{const s=t.getAttribute("thumbnail-url")||"",n=t.getAttribute("image-url")||"",o=t.getAttribute("image-type")||"image",a=t.getAttribute("caption")||"",l=document.createElement("div");l.className="swiper-slide";const c=document.createElement("img");if(c.setAttribute("src",s),c.setAttribute("data-image-url",n),c.setAttribute("data-image-type",o),c.setAttribute("data-index",String(i)),c.className=a!==""?"viewer w-caption":"viewer",l.appendChild(c),a!==""){const u=document.createElement("p");u.className="slider-caption",u.textContent=a,l.appendChild(u)}e.appendChild(l)})}buildGalleryElements(){const e=this.query("#divGallery")?.querySelector(".swiper-wrapper");e&&this.slides.forEach((t,i)=>{const s=t.getAttribute("thumbnail-url")||"",n=document.createElement("div");n.className="swiper-slide gallery-thumb",n.setAttribute("data-index",String(i)),n.style.setProperty("background-image",`url("${zd(s)}")`),e.appendChild(n)})}render(){const e=`
      <style>
        ${Od}
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
    `,i=`
      ${e}
      ${t}
      <div id='divContainer' class='swiper gallery-top'>
        <div id='divSlides' class='swiper-wrapper'></div>

        <div id='divPagination' class='swiper-pagination'></div>
        <div id='divPrevious' class='swiper-button-prev'></div>
        <div id='divNext' class='swiper-button-next'></div>
      </div>
      <div id='divGallery' class='swiper gallery-thumbs'>
        <div class='swiper-wrapper'></div>
      </div>
    `;this.updateShadowRoot(i),this.buildSlideElements(),this.buildGalleryElements(),setTimeout(()=>{this.initializeSwiper(),this.queryAll(".gallery-thumb").forEach((s,n)=>{s.addEventListener("click",()=>this.slider?.slideTo(n))}),this.queryAll("img.viewer").forEach(s=>{s.addEventListener("dragstart",n=>n.preventDefault()),s.addEventListener("click",n=>{if(this.isDragging){this.isDragging=!1;return}n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation();const o=n.target,a=o.getAttribute("data-image-url")||"",l=o.getAttribute("data-image-type")||"image",c=parseInt(o.getAttribute("data-index")||"0",10);return this.openViewer(a,l,c),!1},!0)})},0)}initializeSwiper(){this.divContainer=this.query("#divContainer")??void 0,this.divSlides=this.query("#divSlides")??void 0,this.divGallery=this.query("#divGallery")??void 0,this.divPagination=this.query("#divPagination")??void 0,this.divPrevious=this.query("#divPrevious")??void 0,this.divNext=this.query("#divNext")??void 0,this.slides.some(t=>t.getAttribute("caption"))&&this.divContainer&&this.divContainer.classList.add("has-captions");const e=this.slides.length>=2;this.divContainer&&(this.slider&&this.slider.destroy(),this.slider=new Ht(this.divContainer,{modules:[Dd,Nd,kd,Pd,Vd,Ld],navigation:{prevEl:this.divPrevious,nextEl:this.divNext},pagination:this.hasThumb?{}:{el:this.divPagination},autoplay:this.autoplay?{delay:5e3,disableOnInteraction:!1,reverseDirection:!1,stopOnLastSlide:!1,waitForTransition:!0}:!1,thumbs:this.hasThumb&&this.divGallery?{swiper:new Ht(this.divGallery,{spaceBetween:10,slidesPerView:Math.min(Math.max(4,this.slides.length),8),watchSlidesProgress:!0})}:{},preventClicks:!1,preventClicksPropagation:!1,simulateTouch:!0,allowTouchMove:!0,loop:e,on:{sliderMove:()=>{this.isDragging=!0},touchEnd:()=>{setTimeout(()=>{this.isDragging=!1},50)}}}))}}customElements.get("cc-swiper")||customElements.define("cc-swiper",Sl);class El extends Ds{static get observedAttributes(){return["thumbnail-url","image-url","image-type","caption"]}get thumbnailUrl(){return this.getAttribute("thumbnail-url")||""}get imageUrl(){return this.getAttribute("image-url")||""}get imageType(){return this.getAttribute("image-type")||""}get caption(){return this.getAttribute("caption")||""}render(){const e=this.css`
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
    `;this.updateShadowRoot(e)}}customElements.get("cc-swiper-slide")||customElements.define("cc-swiper-slide",El);class Sr extends Ds{_showPrevButton=!0;_showNextButton=!0;isShow=!1;isLoading=!1;get showPrevButton(){return this._showPrevButton}set showPrevButton(e){this._showPrevButton=e,this.updateNavigationVisibility()}get showNextButton(){return this._showNextButton}set showNextButton(e){this._showNextButton=e,this.updateNavigationVisibility()}open(e){this.isShow=!0,this.isLoading=!0;const t=Promise.resolve(this.doOpen(e));Promise.resolve().then(()=>{this.render()}),t.then(()=>{this.isLoading=!1,this.render()}).catch(i=>{this.isLoading=!1,this.render()})}close(){this.cleanupNavigationListeners(),this.doClose(),this.isShow=!1,this.isLoading=!1,this.render(),this.dispatch("close")}cleanupNavigationListeners(){const e=this.query(".nav-prev"),t=this.query(".nav-next"),i=this.query(".nav-close");e&&e.removeAttribute("data-listener-attached"),t&&t.removeAttribute("data-listener-attached"),i&&i.removeAttribute("data-listener-attached")}render(){if(this.shouldUseCustomRender()){this.customRender();return}const e=`
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
    `;this.updateShadowRoot(e),this.applyExternalValues(),setTimeout(()=>{this.addNavigationListeners(),this.onAfterRender()},0)}applyExternalValues(){}shouldUseCustomRender(){return!1}customRender(){}getCustomStyles(){return""}onAfterRender(){}navigatePrev(){this.dispatch("navigate-prev")}navigateNext(){this.dispatch("navigate-next")}getNavigationButtons(){const e=this.showPrevButton?"":"display: none;",t=this.showNextButton?"":"display: none;";return`
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
        z-index: calc(var(--cc-viewer-z-index-each, 1000) + 2);
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
    `}addNavigationListeners(){const e=this.query(".backdrop");e&&e.style.visibility==="hidden"||setTimeout(()=>{const t=this.query(".nav-prev"),i=this.query(".nav-next"),s=this.query(".nav-close");t&&!t.hasAttribute("data-listener-attached")&&(t.setAttribute("data-listener-attached","true"),t.addEventListener("click",n=>{n.stopPropagation(),n.preventDefault(),this.navigatePrev()},!0)),i&&!i.hasAttribute("data-listener-attached")&&(i.setAttribute("data-listener-attached","true"),i.addEventListener("click",n=>{n.stopPropagation(),this.navigateNext()})),s&&!s.hasAttribute("data-listener-attached")&&(s.setAttribute("data-listener-attached","true"),s.addEventListener("click",n=>{n.stopPropagation(),this.close()}))},0)}updateNavigationVisibility(){const e=this.query(".nav-prev"),t=this.query(".nav-next");e&&(e.style.display=this._showPrevButton?"":"none"),t&&(t.style.display=this._showNextButton?"":"none")}}function Wd(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function bl(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Cl(i.key),i)}}function Gd(r,e,t){return e&&bl(r.prototype,e),t&&bl(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Jd(r,e,t){return(e=Cl(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function xl(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,i)}return t}function ca(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?xl(Object(t),!0).forEach(function(i){Jd(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):xl(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function Zd(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function Cl(r){var e=Zd(r,"string");return typeof e=="symbol"?e:e+""}function ha(r){"@babel/helpers - typeof";return ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ha(r)}var Ul={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},Hd='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',zs=typeof window<"u"&&typeof window.document<"u",Ei=zs?window:{},Er=zs&&Ei.document.documentElement?"ontouchstart"in Ei.document.documentElement:!1,ua=zs?"PointerEvent"in Ei:!1,Xe="viewer",Ws="move",Tl="switch",ps="zoom",Gs="".concat(Xe,"-active"),Xd="".concat(Xe,"-close"),Js="".concat(Xe,"-fade"),da="".concat(Xe,"-fixed"),Yd="".concat(Xe,"-fullscreen"),Ml="".concat(Xe,"-fullscreen-exit"),$i="".concat(Xe,"-hide"),jd="".concat(Xe,"-hide-md-down"),Kd="".concat(Xe,"-hide-sm-down"),qd="".concat(Xe,"-hide-xs-down"),$t="".concat(Xe,"-in"),fs="".concat(Xe,"-invisible"),br="".concat(Xe,"-loading"),$d="".concat(Xe,"-move"),Rl="".concat(Xe,"-open"),xr="".concat(Xe,"-show"),mt="".concat(Xe,"-transition"),Cr="click",pa="dblclick",Il="dragstart",Fl="focusin",Bl="keydown",ei="load",er="error",ep=Er?"touchend touchcancel":"mouseup",tp=Er?"touchmove":"mousemove",ip=Er?"touchstart":"mousedown",Ql=ua?"pointerdown":ip,Ll=ua?"pointermove":tp,Dl=ua?"pointerup pointercancel":ep,Nl="resize",oi="transitionend",kl="wheel",Pl="ready",Vl="show",Ol="shown",zl="hide",Wl="hidden",Gl="view",ms="viewed",Jl="move",Zl="moved",Hl="rotate",Xl="rotated",Yl="scale",jl="scaled",Kl="zoom",ql="zoomed",$l="play",ec="stop",Zs="".concat(Xe,"Action"),fa=/\s\s*/,Hs=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function gs(r){return typeof r=="string"}var rp=Number.isNaN||Ei.isNaN;function ft(r){return typeof r=="number"&&!rp(r)}function Ur(r){return typeof r>"u"}function Tr(r){return ha(r)==="object"&&r!==null}var sp=Object.prototype.hasOwnProperty;function Mr(r){if(!Tr(r))return!1;try{var e=r.constructor,t=e.prototype;return e&&t&&sp.call(t,"isPrototypeOf")}catch{return!1}}function at(r){return typeof r=="function"}function lt(r,e){if(r&&at(e))if(Array.isArray(r)||ft(r.length)){var t=r.length,i;for(i=0;i<t&&e.call(r,r[i],i,r)!==!1;i+=1);}else Tr(r)&&Object.keys(r).forEach(function(s){e.call(r,r[s],s,r)});return r}var Pt=Object.assign||function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];return Tr(r)&&t.length>0&&t.forEach(function(s){Tr(s)&&Object.keys(s).forEach(function(n){r[n]=s[n]})}),r},np=/^(?:width|height|left|top|marginLeft|marginTop)$/;function li(r,e){var t=r.style;lt(e,function(i,s){np.test(s)&&ft(i)&&(i+="px"),t[s]=i})}function ap(r){return gs(r)?r.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):r}function Rr(r,e){return!r||!e?!1:r.classList?r.classList.contains(e):r.className.indexOf(e)>-1}function De(r,e){if(!(!r||!e)){if(ft(r.length)){lt(r,function(i){De(i,e)});return}if(r.classList){r.classList.add(e);return}var t=r.className.trim();t?t.indexOf(e)<0&&(r.className="".concat(t," ").concat(e)):r.className=e}}function et(r,e){if(!(!r||!e)){if(ft(r.length)){lt(r,function(t){et(t,e)});return}if(r.classList){r.classList.remove(e);return}r.className.indexOf(e)>=0&&(r.className=r.className.replace(e,""))}}function vs(r,e,t){if(e){if(ft(r.length)){lt(r,function(i){vs(i,e,t)});return}t?De(r,e):et(r,e)}}var op=/([a-z\d])([A-Z])/g;function ma(r){return r.replace(op,"$1-$2").toLowerCase()}function Ir(r,e){return Tr(r[e])?r[e]:r.dataset?r.dataset[e]:r.getAttribute("data-".concat(ma(e)))}function ga(r,e,t){Tr(t)?r[e]=t:r.dataset?r.dataset[e]=t:r.setAttribute("data-".concat(ma(e)),t)}var tc=(function(){var r=!1;if(zs){var e=!1,t=function(){},i=Object.defineProperty({},"once",{get:function(){return r=!0,e},set:function(s){e=s}});Ei.addEventListener("test",t,i),Ei.removeEventListener("test",t,i)}return r})();function ot(r,e,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=t;e.trim().split(fa).forEach(function(n){if(!tc){var o=r.listeners;o&&o[n]&&o[n][t]&&(s=o[n][t],delete o[n][t],Object.keys(o[n]).length===0&&delete o[n],Object.keys(o).length===0&&delete r.listeners)}r.removeEventListener(n,s,i)})}function Pe(r,e,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=t;e.trim().split(fa).forEach(function(n){if(i.once&&!tc){var o=r.listeners,a=o===void 0?{}:o;s=function(){delete a[n][t],r.removeEventListener(n,s,i);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];t.apply(r,c)},a[n]||(a[n]={}),a[n][t]&&r.removeEventListener(n,a[n][t],i),a[n][t]=s,r.listeners=a}r.addEventListener(n,s,i)})}function vt(r,e,t,i){var s;return at(Event)&&at(CustomEvent)?s=new CustomEvent(e,ca({bubbles:!0,cancelable:!0,detail:t},i)):(s=document.createEvent("CustomEvent"),s.initCustomEvent(e,!0,!0,t)),r.dispatchEvent(s)}function lp(r){var e=r.getBoundingClientRect();return{left:e.left+(window.pageXOffset-document.documentElement.clientLeft),top:e.top+(window.pageYOffset-document.documentElement.clientTop)}}function Xs(r){var e=r.rotate,t=r.scaleX,i=r.scaleY,s=r.translateX,n=r.translateY,o=[];ft(s)&&s!==0&&o.push("translateX(".concat(s,"px)")),ft(n)&&n!==0&&o.push("translateY(".concat(n,"px)")),ft(e)&&e!==0&&o.push("rotate(".concat(e,"deg)")),ft(t)&&t!==1&&o.push("scaleX(".concat(t,")")),ft(i)&&i!==1&&o.push("scaleY(".concat(i,")"));var a=o.length?o.join(" "):"none";return{WebkitTransform:a,msTransform:a,transform:a}}function cp(r){return gs(r)?decodeURIComponent(r.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var va=Ei.navigator&&/Version\/\d+(\.\d+)+?\s+Safari/i.test(Ei.navigator.userAgent);function ic(r,e,t){var i=document.createElement("img");if(r.naturalWidth&&!va)return t(r.naturalWidth,r.naturalHeight),i;var s=document.body||document.documentElement;return i.onload=function(){t(i.width,i.height),va||s.removeChild(i)},lt(e.inheritedAttributes,function(n){var o=r.getAttribute(n);o!==null&&i.setAttribute(n,o)}),i.src=r.src,va||(i.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(i)),i}function Ys(r){switch(r){case 2:return qd;case 3:return Kd;case 4:return jd;default:return""}}function hp(r){var e=ca({},r),t=[];return lt(r,function(i,s){delete e[s],lt(e,function(n){var o=Math.abs(i.startX-n.startX),a=Math.abs(i.startY-n.startY),l=Math.abs(i.endX-n.endX),c=Math.abs(i.endY-n.endY),u=Math.sqrt(o*o+a*a),f=Math.sqrt(l*l+c*c),m=(f-u)/u;t.push(m)})}),t.sort(function(i,s){return Math.abs(i)<Math.abs(s)}),t[0]}function js(r,e){var t=r.pageX,i=r.pageY,s={endX:t,endY:i};return e?s:ca({timeStamp:Date.now(),startX:t,startY:i},s)}function up(r){var e=0,t=0,i=0;return lt(r,function(s){var n=s.startX,o=s.startY;e+=n,t+=o,i+=1}),e/=i,t/=i,{pageX:e,pageY:t}}var dp={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var r=this.element.ownerDocument,e=r.body||r.documentElement;this.body=e,this.scrollbarWidth=window.innerWidth-r.documentElement.clientWidth,this.initialBodyPaddingRight=e.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(e).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var r=this.options,e=this.parent,t;r.inline&&(t={width:Math.max(e.offsetWidth,r.minWidth),height:Math.max(e.offsetHeight,r.minHeight)},this.parentData=t),(this.fulled||!t)&&(t=this.containerData),this.viewerData=Pt({},t)},renderViewer:function(){this.options.inline&&!this.fulled&&li(this.viewer,this.viewerData)},initList:function(){var r=this,e=this.element,t=this.options,i=this.list,s=[];i.innerHTML="",lt(this.images,function(n,o){var a=n.src,l=n.alt||cp(a),c=r.getImageURL(n);if(a||c){var u=document.createElement("li"),f=document.createElement("img");lt(t.inheritedAttributes,function(m){var p=n.getAttribute(m);p!==null&&f.setAttribute(m,p)}),t.navbar&&(f.src=a||c),f.alt=l,f.setAttribute("data-original-url",c||a),u.setAttribute("data-index",o),u.setAttribute("data-viewer-action","view"),u.setAttribute("role","button"),t.keyboard&&u.setAttribute("tabindex",0),u.appendChild(f),i.appendChild(u),s.push(u)}}),this.items=s,lt(s,function(n){var o=n.firstElementChild,a,l;ga(o,"filled",!0),t.loading&&De(n,br),Pe(o,ei,a=function(c){ot(o,er,l),t.loading&&et(n,br),r.loadImage(c)},{once:!0}),Pe(o,er,l=function(){ot(o,ei,a),t.loading&&et(n,br)},{once:!0})}),t.transition&&Pe(e,ms,function(){De(i,mt)},{once:!0})},renderList:function(){var r=this.index,e=this.items[r];if(e){var t=e.nextElementSibling,i=parseInt(window.getComputedStyle(t||e).marginLeft,10),s=e.offsetWidth,n=s+i;li(this.list,Pt({width:n*this.length-i},Xs({translateX:(this.viewerData.width-s)/2-n*r})))}},resetList:function(){var r=this.list;r.innerHTML="",et(r,mt),li(r,Pt({width:0},Xs({translateX:0})))},initImage:function(r){var e=this,t=this.options,i=this.image,s=this.viewerData,n=this.footer.offsetHeight,o=s.width,a=Math.max(s.height-n,n),l=this.imageData||{},c;this.imageInitializing={abort:function(){c.onload=null}},c=ic(i,t,function(u,f){var m=u/f,p=Math.max(0,Math.min(1,t.initialCoverage)),g=o,A=a;e.imageInitializing=!1,a*m>o?A=o/m:g=a*m,p=ft(p)?p:.9,g=Math.min(g*p,u),A=Math.min(A*p,f);var d=(o-g)/2,h=(a-A)/2,v={left:d,top:h,x:d,y:h,width:g,height:A,oldRatio:1,ratio:g/u,aspectRatio:m,naturalWidth:u,naturalHeight:f},E=Pt({},v);t.rotatable&&(v.rotate=l.rotate||0,E.rotate=0),t.scalable&&(v.scaleX=l.scaleX||1,v.scaleY=l.scaleY||1,E.scaleX=1,E.scaleY=1),e.imageData=v,e.initialImageData=E,r&&r()})},renderImage:function(r){var e=this,t=this.image,i=this.imageData;if(li(t,Pt({width:i.width,height:i.height,marginLeft:i.x,marginTop:i.y},Xs(i))),r)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&Rr(t,mt)){var s=function(){e.imageRendering=!1,r()};this.imageRendering={abort:function(){ot(t,oi,s)}},Pe(t,oi,s,{once:!0})}else r()},resetImage:function(){var r=this.image;r&&(this.viewing&&this.viewing.abort(),r.parentNode.removeChild(r),this.image=null,this.title.innerHTML="")}},pp={bind:function(){var r=this.options,e=this.viewer,t=this.canvas,i=this.element.ownerDocument;Pe(e,Cr,this.onClick=this.click.bind(this)),Pe(e,Il,this.onDragStart=this.dragstart.bind(this)),Pe(t,Ql,this.onPointerDown=this.pointerdown.bind(this)),Pe(i,Ll,this.onPointerMove=this.pointermove.bind(this)),Pe(i,Dl,this.onPointerUp=this.pointerup.bind(this)),Pe(i,Bl,this.onKeyDown=this.keydown.bind(this)),Pe(window,Nl,this.onResize=this.resize.bind(this)),r.zoomable&&r.zoomOnWheel&&Pe(e,kl,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),r.toggleOnDblclick&&Pe(t,pa,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var r=this.options,e=this.viewer,t=this.canvas,i=this.element.ownerDocument;ot(e,Cr,this.onClick),ot(e,Il,this.onDragStart),ot(t,Ql,this.onPointerDown),ot(i,Ll,this.onPointerMove),ot(i,Dl,this.onPointerUp),ot(i,Bl,this.onKeyDown),ot(window,Nl,this.onResize),r.zoomable&&r.zoomOnWheel&&ot(e,kl,this.onWheel,{passive:!1,capture:!0}),r.toggleOnDblclick&&ot(t,pa,this.onDblclick)}},fp={click:function(r){var e=this.options,t=this.imageData,i=r.target,s=Ir(i,Zs);switch(!s&&i.localName==="img"&&i.parentElement.localName==="li"&&(i=i.parentElement,s=Ir(i,Zs)),Er&&r.isTrusted&&i===this.canvas&&clearTimeout(this.clickCanvasTimeout),s){case"mix":this.played?this.stop():e.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(Ir(i,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(e.loop);break;case"play":this.play(e.fullscreen);break;case"next":this.next(e.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-t.scaleX||-1);break;case"flip-vertical":this.scaleY(-t.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(r){r.preventDefault(),this.viewed&&r.target===this.image&&(Er&&r.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(r.isTrusted?r:r.detail&&r.detail.originalEvent))},load:function(){var r=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var e=this.element,t=this.options,i=this.image,s=this.index,n=this.viewerData;et(i,fs),t.loading&&et(this.canvas,br),i.style.cssText="height:0;"+"margin-left:".concat(n.width/2,"px;")+"margin-top:".concat(n.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){vs(i,$d,t.movable),vs(i,mt,t.transition),r.renderImage(function(){r.viewed=!0,r.viewing=!1,at(t.viewed)&&Pe(e,ms,t.viewed,{once:!0}),vt(e,ms,{originalImage:r.images[s],index:s,image:i},{cancelable:!1})})})},loadImage:function(r){var e=r.target,t=e.parentNode,i=t.offsetWidth||30,s=t.offsetHeight||50,n=!!Ir(e,"filled");ic(e,this.options,function(o,a){var l=o/a,c=i,u=s;s*l>i?n?c=s*l:u=i/l:n?u=i/l:c=s*l,li(e,Pt({width:c,height:u},Xs({translateX:(i-c)/2,translateY:(s-u)/2})))})},keydown:function(r){var e=this.options;if(e.keyboard){var t=r.keyCode||r.which||r.charCode;if(t===13&&this.viewer.contains(r.target)&&this.click(r),!!this.fulled)switch(t){case 27:this.played?this.stop():e.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(e.loop);break;case 38:r.preventDefault(),this.zoom(e.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(e.loop);break;case 40:r.preventDefault(),this.zoom(-e.zoomRatio,!0);break;case 48:case 49:r.ctrlKey&&(r.preventDefault(),this.toggle());break}}},dragstart:function(r){r.target.localName==="img"&&r.preventDefault()},pointerdown:function(r){var e=this.options,t=this.pointers,i=r.buttons,s=r.button;if(this.pointerMoved=!1,!(!this.viewed||this.showing||this.viewing||this.hiding||(r.type==="mousedown"||r.type==="pointerdown"&&r.pointerType==="mouse")&&(ft(i)&&i!==1||ft(s)&&s!==0||r.ctrlKey))){r.preventDefault(),r.changedTouches?lt(r.changedTouches,function(o){t[o.identifier]=js(o)}):t[r.pointerId||0]=js(r);var n=e.movable?Ws:!1;e.zoomOnTouch&&e.zoomable&&Object.keys(t).length>1?n=ps:e.slideOnTouch&&(r.pointerType==="touch"||r.type==="touchstart")&&this.isSwitchable()&&(n=Tl),e.transition&&(n===Ws||n===ps)&&et(this.image,mt),this.action=n}},pointermove:function(r){var e=this.pointers,t=this.action;!this.viewed||!t||(r.preventDefault(),r.changedTouches?lt(r.changedTouches,function(i){Pt(e[i.identifier]||{},js(i,!0))}):Pt(e[r.pointerId||0]||{},js(r,!0)),this.change(r))},pointerup:function(r){var e=this,t=this.options,i=this.action,s=this.pointers,n;r.changedTouches?lt(r.changedTouches,function(o){n=s[o.identifier],delete s[o.identifier]}):(n=s[r.pointerId||0],delete s[r.pointerId||0]),i&&(r.preventDefault(),t.transition&&(i===Ws||i===ps)&&De(this.image,mt),this.action=!1,Er&&i!==ps&&n&&Date.now()-n.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),t.toggleOnDblclick&&this.viewed&&r.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){vt(e.image,pa,{originalEvent:r})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){e.imageClicked=!1},500)):(this.imageClicked=!1,t.backdrop&&t.backdrop!=="static"&&r.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){vt(e.canvas,Cr,{originalEvent:r})},50)))))},resize:function(){var r=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){r.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}lt(this.player.getElementsByTagName("img"),function(e){Pe(e,ei,r.loadImage.bind(r),{once:!0}),vt(e,ei)})}},wheel:function(r){var e=this;if(this.viewed&&(r.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50);var t=Number(this.options.zoomRatio)||.1,i=1;r.deltaY?i=r.deltaY>0?1:-1:r.wheelDelta?i=-r.wheelDelta/120:r.detail&&(i=r.detail>0?1:-1),this.zoom(-i*t,!0,null,r)}}},mp={show:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=this.element,t=this.options;if(t.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(r),this;if(at(t.show)&&Pe(e,Vl,t.show,{once:!0}),vt(e,Vl)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var i=this.viewer;if(et(i,$i),i.setAttribute("role","dialog"),i.setAttribute("aria-labelledby",this.title.id),i.setAttribute("aria-modal",!0),i.removeAttribute("aria-hidden"),t.transition&&!r){var s=this.shown.bind(this);this.transitioning={abort:function(){ot(i,oi,s),et(i,$t)}},De(i,mt),i.initialOffsetWidth=i.offsetWidth,Pe(i,oi,s,{once:!0}),De(i,$t)}else De(i,$t),this.shown();return this},hide:function(){var r=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=this.element,i=this.options;if(i.inline||this.hiding||!(this.isShown||this.showing))return this;if(at(i.hide)&&Pe(t,zl,i.hide,{once:!0}),vt(t,zl)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var s=this.viewer,n=this.image,o=function(){et(s,$t),r.hidden()};if(i.transition&&!e){var a=function(c){c&&c.target===s&&(ot(s,oi,a),r.hidden())},l=function(){Rr(s,mt)?(Pe(s,oi,a),et(s,$t)):o()};this.transitioning={abort:function(){r.viewed&&Rr(n,mt)?ot(n,oi,l):Rr(s,mt)&&ot(s,oi,a)}},this.viewed&&Rr(n,mt)?(Pe(n,oi,l,{once:!0}),this.zoomTo(0,!1,null,null,!0)):l()}else o();return this},view:function(){var r=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(e=Number(e)||0,this.hiding||this.played||e<0||e>=this.length||this.viewed&&e===this.index)return this;if(!this.isShown)return this.index=e,this.show();this.viewing&&this.viewing.abort();var t=this.element,i=this.options,s=this.title,n=this.canvas,o=this.items[e],a=o.querySelector("img"),l=Ir(a,"originalUrl"),c=a.getAttribute("alt"),u=document.createElement("img");if(lt(i.inheritedAttributes,function(A){var d=a.getAttribute(A);d!==null&&u.setAttribute(A,d)}),u.src=l,u.alt=c,at(i.view)&&Pe(t,Gl,i.view,{once:!0}),vt(t,Gl,{originalImage:this.images[e],index:e,image:u})===!1||!this.isShown||this.hiding||this.played)return this;var f=this.items[this.index];f&&(et(f,Gs),f.removeAttribute("aria-selected")),De(o,Gs),o.setAttribute("aria-selected",!0),i.focus&&o.focus(),this.image=u,this.viewed=!1,this.index=e,this.imageData={},De(u,fs),i.loading&&De(n,br),n.innerHTML="",n.appendChild(u),this.renderList(),s.innerHTML="";var m=function(){var A=r.imageData,d=Array.isArray(i.title)?i.title[1]:i.title;s.innerHTML=ap(at(d)?d.call(r,u,A):"".concat(c," (").concat(A.naturalWidth," × ").concat(A.naturalHeight,")"))},p,g;return Pe(t,ms,m,{once:!0}),this.viewing={abort:function(){ot(t,ms,m),u.complete?r.imageRendering?r.imageRendering.abort():r.imageInitializing&&r.imageInitializing.abort():(u.src="",ot(u,ei,p),r.timeout&&clearTimeout(r.timeout))}},u.complete?this.load():(Pe(u,ei,p=function(){ot(u,er,g),r.load()},{once:!0}),Pe(u,er,g=function(){ot(u,ei,p),r.timeout&&(clearTimeout(r.timeout),r.timeout=!1),et(u,fs),i.loading&&et(r.canvas,br)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){et(u,fs),r.timeout=!1},1e3)),this},prev:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=this.index-1;return e<0&&(e=r?this.length-1:0),this.view(e),this},next:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=this.length-1,t=this.index+1;return t>e&&(t=r?0:e),this.view(t),this},move:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r,t=this.imageData;return this.moveTo(Ur(r)?r:t.x+Number(r),Ur(e)?e:t.y+Number(e)),this},moveTo:function(r){var e=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=this.element,n=this.options,o=this.imageData;if(r=Number(r),t=Number(t),this.viewed&&!this.played&&n.movable){var a=o.x,l=o.y,c=!1;if(ft(r)?c=!0:r=a,ft(t)?c=!0:t=l,c){if(at(n.move)&&Pe(s,Jl,n.move,{once:!0}),vt(s,Jl,{x:r,y:t,oldX:a,oldY:l,originalEvent:i})===!1)return this;o.x=r,o.y=t,o.left=r,o.top=t,this.moving=!0,this.renderImage(function(){e.moving=!1,at(n.moved)&&Pe(s,Zl,n.moved,{once:!0}),vt(s,Zl,{x:r,y:t,oldX:a,oldY:l,originalEvent:i},{cancelable:!1})})}}return this},rotate:function(r){return this.rotateTo((this.imageData.rotate||0)+Number(r)),this},rotateTo:function(r){var e=this,t=this.element,i=this.options,s=this.imageData;if(r=Number(r),ft(r)&&this.viewed&&!this.played&&i.rotatable){var n=s.rotate;if(at(i.rotate)&&Pe(t,Hl,i.rotate,{once:!0}),vt(t,Hl,{degree:r,oldDegree:n})===!1)return this;s.rotate=r,this.rotating=!0,this.renderImage(function(){e.rotating=!1,at(i.rotated)&&Pe(t,Xl,i.rotated,{once:!0}),vt(t,Xl,{degree:r,oldDegree:n},{cancelable:!1})})}return this},scaleX:function(r){return this.scale(r,this.imageData.scaleY),this},scaleY:function(r){return this.scale(this.imageData.scaleX,r),this},scale:function(r){var e=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r,i=this.element,s=this.options,n=this.imageData;if(r=Number(r),t=Number(t),this.viewed&&!this.played&&s.scalable){var o=n.scaleX,a=n.scaleY,l=!1;if(ft(r)?l=!0:r=o,ft(t)?l=!0:t=a,l){if(at(s.scale)&&Pe(i,Yl,s.scale,{once:!0}),vt(i,Yl,{scaleX:r,scaleY:t,oldScaleX:o,oldScaleY:a})===!1)return this;n.scaleX=r,n.scaleY=t,this.scaling=!0,this.renderImage(function(){e.scaling=!1,at(s.scaled)&&Pe(i,jl,s.scaled,{once:!0}),vt(i,jl,{scaleX:r,scaleY:t,oldScaleX:o,oldScaleY:a},{cancelable:!1})})}}return this},zoom:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,s=this.imageData;return r=Number(r),r<0?r=1/(1-r):r=1+r,this.zoomTo(s.width*r/s.naturalWidth,e,t,i),this},zoomTo:function(r){var e=this,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,o=this.element,a=this.options,l=this.pointers,c=this.imageData,u=c.x,f=c.y,m=c.width,p=c.height,g=c.naturalWidth,A=c.naturalHeight;if(r=Math.max(0,r),ft(r)&&this.viewed&&!this.played&&(n||a.zoomable)){if(!n){var d=Math.max(.01,a.minZoomRatio),h=Math.min(100,a.maxZoomRatio);r=Math.min(Math.max(r,d),h)}if(s)switch(s.type){case"wheel":a.zoomRatio>=.055&&r>.95&&r<1.05&&(r=1);break;case"pointermove":case"touchmove":case"mousemove":r>.99&&r<1.01&&(r=1);break}var v=g*r,E=A*r,w=v-m,C=E-p,S=c.ratio;if(at(a.zoom)&&Pe(o,Kl,a.zoom,{once:!0}),vt(o,Kl,{ratio:r,oldRatio:S,originalEvent:s})===!1)return this;if(this.zooming=!0,s){var b=lp(this.viewer),U=l&&Object.keys(l).length>0?up(l):{pageX:s.pageX,pageY:s.pageY};c.x-=w*((U.pageX-b.left-u)/m),c.y-=C*((U.pageY-b.top-f)/p)}else Mr(i)&&ft(i.x)&&ft(i.y)?(c.x-=w*((i.x-u)/m),c.y-=C*((i.y-f)/p)):(c.x-=w/2,c.y-=C/2);c.left=c.x,c.top=c.y,c.width=v,c.height=E,c.oldRatio=S,c.ratio=r,this.renderImage(function(){e.zooming=!1,at(a.zoomed)&&Pe(o,ql,a.zoomed,{once:!0}),vt(o,ql,{ratio:r,oldRatio:S,originalEvent:s},{cancelable:!1})}),t&&this.tooltip()}return this},play:function(){var r=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var t=this.element,i=this.options;if(at(i.play)&&Pe(t,$l,i.play,{once:!0}),vt(t,$l)===!1)return this;var s=this.player,n=this.loadImage.bind(this),o=[],a=0,l=0;if(this.played=!0,this.onLoadWhenPlay=n,e&&this.requestFullscreen(e),De(s,xr),lt(this.items,function(f,m){var p=f.querySelector("img"),g=document.createElement("img");g.src=Ir(p,"originalUrl"),g.alt=p.getAttribute("alt"),g.referrerPolicy=p.referrerPolicy,a+=1,De(g,Js),vs(g,mt,i.transition),Rr(f,Gs)&&(De(g,$t),l=m),o.push(g),Pe(g,ei,n,{once:!0}),s.appendChild(g)}),ft(i.interval)&&i.interval>0){var c=function(){clearTimeout(r.playing.timeout),et(o[l],$t),l-=1,l=l>=0?l:a-1,De(o[l],$t),r.playing.timeout=setTimeout(c,i.interval)},u=function(){clearTimeout(r.playing.timeout),et(o[l],$t),l+=1,l=l<a?l:0,De(o[l],$t),r.playing.timeout=setTimeout(u,i.interval)};a>1&&(this.playing={prev:c,next:u,timeout:setTimeout(u,i.interval)})}return this},stop:function(){var r=this;if(!this.played)return this;var e=this.element,t=this.options;if(at(t.stop)&&Pe(e,ec,t.stop,{once:!0}),vt(e,ec)===!1)return this;var i=this.player;return clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,lt(i.getElementsByTagName("img"),function(s){ot(s,ei,r.onLoadWhenPlay)}),et(i,xr),i.innerHTML="",this.exitFullscreen(),this},full:function(){var r=this,e=this.options,t=this.viewer,i=this.image,s=this.list;return!this.isShown||this.played||this.fulled||!e.inline?this:(this.fulled=!0,this.open(),De(this.button,Ml),e.transition&&(et(s,mt),this.viewed&&et(i,mt)),De(t,da),t.setAttribute("role","dialog"),t.setAttribute("aria-labelledby",this.title.id),t.setAttribute("aria-modal",!0),t.removeAttribute("style"),li(t,{zIndex:e.zIndex}),e.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=Pt({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){r.renderImage(function(){e.transition&&setTimeout(function(){De(i,mt),De(s,mt)},0)})}),this)},exit:function(){var r=this,e=this.options,t=this.viewer,i=this.image,s=this.list;return!this.isShown||this.played||!this.fulled||!e.inline?this:(this.fulled=!1,this.close(),et(this.button,Ml),e.transition&&(et(s,mt),this.viewed&&et(i,mt)),e.focus&&this.clearEnforceFocus(),t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.removeAttribute("aria-modal"),et(t,da),li(t,{zIndex:e.zIndexInline}),this.viewerData=Pt({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){r.renderImage(function(){e.transition&&setTimeout(function(){De(i,mt),De(s,mt)},0)})}),this)},tooltip:function(){var r=this,e=this.options,t=this.tooltipBox,i=this.imageData;return!this.viewed||this.played||!e.tooltip?this:(t.textContent="".concat(Math.round(i.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):e.transition?(this.fading&&vt(t,oi),De(t,xr),De(t,Js),De(t,mt),t.removeAttribute("aria-hidden"),t.initialOffsetWidth=t.offsetWidth,De(t,$t)):(De(t,xr),t.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){e.transition?(Pe(t,oi,function(){et(t,xr),et(t,Js),et(t,mt),t.setAttribute("aria-hidden",!0),r.fading=!1},{once:!0}),et(t,$t),r.fading=!0):(et(t,xr),t.setAttribute("aria-hidden",!0)),r.tooltipping=!1},1e3),this)},toggle:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,null,r):this.zoomTo(1,!0,null,r),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=Pt({},this.initialImageData),this.renderImage()),this},update:function(){var r=this,e=this.element,t=this.options,i=this.isImg;if(i&&!e.parentNode)return this.destroy();var s=[];if(lt(i?[e]:e.querySelectorAll("img"),function(l){at(t.filter)?t.filter.call(r,l)&&s.push(l):r.getImageURL(l)&&s.push(l)}),!s.length)return this;if(this.images=s,this.length=s.length,this.ready){var n=[];if(lt(this.items,function(l,c){var u=l.querySelector("img"),f=s[c];f&&u?(f.src!==u.src||f.alt!==u.alt)&&n.push(c):n.push(c)}),li(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var o=n.indexOf(this.index);if(o>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-o,this.length-1),0));else{var a=this.items[this.index];De(a,Gs),a.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var r=this.element,e=this.options;return r[Xe]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),e.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):e.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),e.inline||ot(r,Cr,this.onStart),r[Xe]=void 0,this):this}},gp={getImageURL:function(r){var e=this.options.url;return gs(e)?e=r.getAttribute(e):at(e)?e=e.call(this,r):e="",e},enforceFocus:function(){var r=this;this.clearEnforceFocus(),Pe(document,Fl,this.onFocusin=function(e){var t=r.viewer,i=e.target;if(!(i===document||i===t||t.contains(i))){for(;i;){if(i.getAttribute("tabindex")!==null||i.getAttribute("aria-modal")==="true")return;i=i.parentElement}t.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(ot(document,Fl,this.onFocusin),this.onFocusin=null)},open:function(){var r=this.body;De(r,Rl),this.scrollbarWidth>0&&(r.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px"))},close:function(){var r=this.body;et(r,Rl),this.scrollbarWidth>0&&(r.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var r=this.element,e=this.options,t=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,e.focus&&(t.focus(),this.enforceFocus()),at(e.shown)&&Pe(r,Ol,e.shown,{once:!0}),vt(r,Ol)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var r=this.element,e=this.options,t=this.viewer;e.focus&&this.clearEnforceFocus(),this.close(),this.unbind(),De(t,$i),t.removeAttribute("role"),t.removeAttribute("aria-labelledby"),t.removeAttribute("aria-modal"),t.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.hiding=!1,this.destroyed||(at(e.hidden)&&Pe(r,Wl,e.hidden,{once:!0}),vt(r,Wl,null,{cancelable:!1}))},requestFullscreen:function(r){var e=this.element.ownerDocument;if(this.fulled&&!(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)){var t=e.documentElement;t.requestFullscreen?Mr(r)?t.requestFullscreen(r):t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen()}},exitFullscreen:function(){var r=this.element.ownerDocument;this.fulled&&(r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement)&&(r.exitFullscreen?r.exitFullscreen():r.webkitExitFullscreen?r.webkitExitFullscreen():r.mozCancelFullScreen?r.mozCancelFullScreen():r.msExitFullscreen&&r.msExitFullscreen())},change:function(r){var e=this.options,t=this.pointers,i=t[Object.keys(t)[0]];if(i){var s=i.endX-i.startX,n=i.endY-i.startY;switch(this.action){case Ws:(s!==0||n!==0)&&(this.pointerMoved=!0,this.move(s,n,r));break;case ps:this.zoom(hp(t),!1,null,r);break;case Tl:{this.action="switched";var o=Math.abs(s);o>1&&o>Math.abs(n)&&(this.pointers={},s>1?this.prev(e.loop):s<-1&&this.next(e.loop));break}}lt(t,function(a){a.startX=a.endX,a.startY=a.endY})}},isSwitchable:function(){var r=this.imageData,e=this.viewerData;return this.length>1&&r.x>=0&&r.y>=0&&r.width<=e.width&&r.height<=e.height}},vp=Ei.Viewer,_p=(function(r){return function(){return r+=1,r}})(-1),_a=(function(){function r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Wd(this,r),!e||e.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=e,this.options=Pt({},Ul,Mr(t)&&t),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=_p(),this.init()}return Gd(r,[{key:"init",value:function(){var e=this,t=this.element,i=this.options;if(!t[Xe]){t[Xe]=this,i.focus&&!i.keyboard&&(i.focus=!1);var s=t.localName==="img",n=[];if(lt(s?[t]:t.querySelectorAll("img"),function(l){at(i.filter)?i.filter.call(e,l)&&n.push(l):e.getImageURL(l)&&n.push(l)}),this.isImg=s,this.length=n.length,this.images=n,this.initBody(),Ur(document.createElement(Xe).style.transition)&&(i.transition=!1),i.inline){var o=0,a=function(){if(o+=1,o===e.length){var l;e.initializing=!1,e.delaying={abort:function(){clearTimeout(l)}},l=setTimeout(function(){e.delaying=!1,e.build()},0)}};this.initializing={abort:function(){lt(n,function(l){l.complete||(ot(l,ei,a),ot(l,er,a))})}},lt(n,function(l){if(l.complete)a();else{var c,u;Pe(l,ei,c=function(){ot(l,er,u),a()},{once:!0}),Pe(l,er,u=function(){ot(l,ei,c),a()},{once:!0})}})}else Pe(t,Cr,this.onStart=function(l){var c=l.target;c.localName==="img"&&(!at(i.filter)||i.filter.call(e,c))&&e.view(e.images.indexOf(c))})}}},{key:"build",value:function(){if(!this.ready){var e=this.element,t=this.options,i=e.parentNode,s=document.createElement("div");s.innerHTML=Hd;var n=s.querySelector(".".concat(Xe,"-container")),o=n.querySelector(".".concat(Xe,"-title")),a=n.querySelector(".".concat(Xe,"-toolbar")),l=n.querySelector(".".concat(Xe,"-navbar")),c=n.querySelector(".".concat(Xe,"-button")),u=n.querySelector(".".concat(Xe,"-canvas"));if(this.parent=i,this.viewer=n,this.title=o,this.toolbar=a,this.navbar=l,this.button=c,this.canvas=u,this.footer=n.querySelector(".".concat(Xe,"-footer")),this.tooltipBox=n.querySelector(".".concat(Xe,"-tooltip")),this.player=n.querySelector(".".concat(Xe,"-player")),this.list=n.querySelector(".".concat(Xe,"-list")),n.id="".concat(Xe).concat(this.id),o.id="".concat(Xe,"Title").concat(this.id),De(o,t.title?Ys(Array.isArray(t.title)?t.title[0]:t.title):$i),De(l,t.navbar?Ys(t.navbar):$i),vs(c,$i,!t.button),t.keyboard&&c.setAttribute("tabindex",0),t.backdrop&&(De(n,"".concat(Xe,"-backdrop")),!t.inline&&t.backdrop!=="static"&&ga(u,Zs,"hide")),gs(t.className)&&t.className&&t.className.split(fa).forEach(function(v){De(n,v)}),t.toolbar){var f=document.createElement("ul"),m=Mr(t.toolbar),p=Hs.slice(0,3),g=Hs.slice(7,9),A=Hs.slice(9);m||De(a,Ys(t.toolbar)),lt(m?t.toolbar:Hs,function(v,E){var w=m&&Mr(v),C=m?ma(E):v,S=w&&!Ur(v.show)?v.show:v;if(!(!S||!t.zoomable&&p.indexOf(C)!==-1||!t.rotatable&&g.indexOf(C)!==-1||!t.scalable&&A.indexOf(C)!==-1)){var b=w&&!Ur(v.size)?v.size:v,U=w&&!Ur(v.click)?v.click:v,y=document.createElement("li");t.keyboard&&y.setAttribute("tabindex",0),y.setAttribute("role","button"),De(y,"".concat(Xe,"-").concat(C)),at(U)||ga(y,Zs,C),ft(S)&&De(y,Ys(S)),["small","large"].indexOf(b)!==-1?De(y,"".concat(Xe,"-").concat(b)):C==="play"&&De(y,"".concat(Xe,"-large")),at(U)&&Pe(y,Cr,U),f.appendChild(y)}}),a.appendChild(f)}else De(a,$i);if(!t.rotatable){var d=a.querySelectorAll('li[class*="rotate"]');De(d,fs),lt(d,function(v){a.appendChild(v)})}if(t.inline)De(c,Yd),li(n,{zIndex:t.zIndexInline}),window.getComputedStyle(i).position==="static"&&li(i,{position:"relative"}),i.insertBefore(n,e.nextSibling);else{De(c,Xd),De(n,da),De(n,Js),De(n,$i),li(n,{zIndex:t.zIndex});var h=t.container;gs(h)&&(h=e.ownerDocument.querySelector(h)),h||(h=this.body),h.appendChild(n)}if(t.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,at(t.ready)&&Pe(e,Pl,t.ready,{once:!0}),vt(e,Pl)===!1){this.ready=!1;return}this.ready&&t.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=vp,r}},{key:"setDefaults",value:function(e){Pt(Ul,Mr(e)&&e)}}])})();Pt(_a.prototype,dp,pp,fp,mp,gp);const Ap='.viewer-zoom-in:before,.viewer-zoom-out:before,.viewer-one-to-one:before,.viewer-reset:before,.viewer-prev:before,.viewer-play:before,.viewer-next:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen:before,.viewer-fullscreen-exit:before,.viewer-close:before{background-image:url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 560 40%22%3E%3Cpath fill%3D%22%23fff%22 d%3D%22M49.6 17.9h20.2v3.9H49.6zm123.1 2 10.9-11 2.7 2.8-8.2 8.2 8.2 8.2-2.7 2.7-10.9-10.9zm94 0-10.8-11-2.7 2.8 8.1 8.2-8.1 8.2 2.7 2.7 10.8-10.9zM212 9.3l20.1 10.6L212 30.5V9.3zm161.5 4.6-7.2 6 7.2 5.9v-4h12.4v4l7.3-5.9-7.3-6v4h-12.4v-4zm40.2 12.3 5.9 7.2 5.9-7.2h-4V13.6h4l-5.9-7.3-5.9 7.3h4v12.6h-4zm35.9-16.5h6.3v2h-4.3V16h-2V9.7Zm14 0h6.2V16h-2v-4.3h-4.2v-2Zm6.2 14V30h-6.2v-2h4.2v-4.3h2Zm-14 6.3h-6.2v-6.3h2v4.4h4.3v2Zm-438 .1v-8.3H9.6v-3.9h8.2V9.7h3.9v8.2h8.1v3.9h-8.1v8.3h-3.9zM93.6 9.7h-5.8v3.9h2V30h3.8V9.7zm16.1 0h-5.8v3.9h1.9V30h3.9V9.7zm-11.9 4.1h3.9v3.9h-3.9zm0 8.2h3.9v3.9h-3.9zm244.6-11.7 7.2 5.9-7.2 6v-3.6c-5.4-.4-7.8.8-8.7 2.8-.8 1.7-1.8 4.9 2.8 8.2-6.3-2-7.5-6.9-6-11.3 1.6-4.4 8-5 11.9-4.9v-3.1Zm147.2 13.4h6.3V30h-2v-4.3h-4.3v-2zm14 6.3v-6.3h6.2v2h-4.3V30h-1.9zm6.2-14h-6.2V9.7h1.9V14h4.3v2zm-13.9 0h-6.3v-2h4.3V9.7h2V16zm33.3 12.5 8.6-8.6-8.6-8.7 1.9-1.9 8.6 8.7 8.6-8.7 1.9 1.9-8.6 8.7 8.6 8.6-1.9 2-8.6-8.7-8.6 8.7-1.9-2zM297 10.3l-7.1 5.9 7.2 6v-3.6c5.3-.4 7.7.8 8.7 2.8.8 1.7 1.7 4.9-2.9 8.2 6.3-2 7.5-6.9 6-11.3-1.6-4.4-7.9-5-11.8-4.9v-3.1Zm-157.3-.6c2.3 0 4.4.7 6 2l2.5-3 1.9 9.2h-9.3l2.6-3.1a6.2 6.2 0 0 0-9.9 5.1c0 3.4 2.8 6.3 6.2 6.3 2.8 0 5.1-1.9 6-4.4h4c-1 4.7-5 8.3-10 8.3a10 10 0 0 1-10-10.2 10 10 0 0 1 10-10.2Z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat;background-size:280px;color:transparent;display:block;font-size:0;height:20px;line-height:0;width:20px}.viewer-zoom-in:before{background-position:0 0;content:"Zoom In"}.viewer-zoom-out:before{background-position:-20px 0;content:"Zoom Out"}.viewer-one-to-one:before{background-position:-40px 0;content:"One to One"}.viewer-reset:before{background-position:-60px 0;content:"Reset"}.viewer-prev:before{background-position:-80px 0;content:"Previous"}.viewer-play:before{background-position:-100px 0;content:"Play"}.viewer-next:before{background-position:-120px 0;content:"Next"}.viewer-rotate-left:before{background-position:-140px 0;content:"Rotate Left"}.viewer-rotate-right:before{background-position:-160px 0;content:"Rotate Right"}.viewer-flip-horizontal:before{background-position:-180px 0;content:"Flip Horizontal"}.viewer-flip-vertical:before{background-position:-200px 0;content:"Flip Vertical"}.viewer-fullscreen:before{background-position:-220px 0;content:"Enter Full Screen"}.viewer-fullscreen-exit:before{background-position:-240px 0;content:"Exit Full Screen"}.viewer-close:before{background-position:-260px 0;content:"Close"}.viewer-container{direction:ltr;font-size:0;inset:0;line-height:0;overflow:hidden;position:absolute;-webkit-tap-highlight-color:transparent;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.viewer-container::-moz-selection,.viewer-container *::-moz-selection{background-color:transparent}.viewer-container::selection,.viewer-container *::selection{background-color:transparent}.viewer-container:focus{outline:0}.viewer-container img{display:block;height:auto;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.viewer-canvas{inset:0;overflow:hidden;position:absolute}.viewer-canvas>img{height:auto;margin:15px auto;max-width:90%!important;width:auto}.viewer-footer{bottom:0;left:0;overflow:hidden;position:absolute;right:0;text-align:center}.viewer-navbar{background-color:#00000080;overflow:hidden}.viewer-list{box-sizing:content-box;height:50px;margin:0;overflow:hidden;padding:1px 0}.viewer-list>li{color:transparent;cursor:pointer;float:left;font-size:0;height:50px;line-height:0;opacity:.5;overflow:hidden;transition:opacity .15s;width:30px}.viewer-list>li:focus,.viewer-list>li:hover{opacity:.75}.viewer-list>li:focus{outline:0}.viewer-list>li+li{margin-left:1px}.viewer-list>.viewer-loading{position:relative}.viewer-list>.viewer-loading:after{border-width:2px;height:20px;margin-left:-10px;margin-top:-10px;width:20px}.viewer-list>.viewer-active,.viewer-list>.viewer-active:focus,.viewer-list>.viewer-active:hover{opacity:1}.viewer-player{background-color:#000;cursor:none;display:none;inset:0;position:absolute;z-index:1}.viewer-player>img{left:0;position:absolute;top:0}.viewer-toolbar>ul{display:inline-block;margin:0 auto 5px;overflow:hidden;padding:6px 3px}.viewer-toolbar>ul>li{background-color:#00000080;border-radius:50%;cursor:pointer;float:left;height:24px;overflow:hidden;transition:background-color .15s;width:24px}.viewer-toolbar>ul>li:focus,.viewer-toolbar>ul>li:hover{background-color:#000c}.viewer-toolbar>ul>li:focus{box-shadow:0 0 3px #fff;outline:0;position:relative;z-index:1}.viewer-toolbar>ul>li:before{margin:2px}.viewer-toolbar>ul>li+li{margin-left:1px}.viewer-toolbar>ul>.viewer-small{height:18px;margin-bottom:3px;margin-top:3px;width:18px}.viewer-toolbar>ul>.viewer-small:before{margin:-1px}.viewer-toolbar>ul>.viewer-large{height:30px;margin-bottom:-3px;margin-top:-3px;width:30px}.viewer-toolbar>ul>.viewer-large:before{margin:5px}.viewer-tooltip{background-color:#000c;border-radius:10px;color:#fff;display:none;font-size:12px;height:20px;left:50%;line-height:20px;margin-left:-25px;margin-top:-10px;position:absolute;text-align:center;top:50%;width:50px}.viewer-title{color:#ccc;display:inline-block;font-size:12px;line-height:1.2;margin:5px 5%;max-width:90%;min-height:14px;opacity:.8;overflow:hidden;text-overflow:ellipsis;transition:opacity .15s;white-space:nowrap}.viewer-title:hover{opacity:1}.viewer-button{-webkit-app-region:no-drag;background-color:#00000080;border-radius:50%;cursor:pointer;height:80px;overflow:hidden;position:absolute;right:-40px;top:-40px;transition:background-color .15s;width:80px}.viewer-button:focus,.viewer-button:hover{background-color:#000c}.viewer-button:focus{box-shadow:0 0 3px #fff;outline:0}.viewer-button:before{bottom:15px;left:15px;position:absolute}.viewer-fixed{position:fixed}.viewer-open{overflow:hidden}.viewer-show{display:block}.viewer-hide{display:none}.viewer-backdrop{background-color:#00000080}.viewer-invisible{visibility:hidden}.viewer-move{cursor:move;cursor:grab}.viewer-fade{opacity:0}.viewer-in{opacity:1}.viewer-transition{transition:all .3s}@keyframes viewer-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.viewer-loading:after{animation:viewer-spinner 1s linear infinite;border:4px solid rgba(255,255,255,.1);border-left-color:#ffffff80;border-radius:50%;content:"";display:inline-block;height:40px;left:50%;margin-left:-20px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:1}@media(max-width:767px){.viewer-hide-xs-down{display:none}}@media(max-width:991px){.viewer-hide-sm-down{display:none}}@media(max-width:1199px){.viewer-hide-md-down{display:none}}';class wp extends Sr{viewer;container;imageUrl="";doOpen(e){this.imageUrl=e,setTimeout(()=>{if(this.container=this.query("#imageContainer")??void 0,!this.container)return;const t=document.createElement("img");t.src=this.imageUrl,t.style.display="none",this.container.appendChild(t),this.viewer=new _a(t,{inline:!0,container:this.container,toolbar:{zoomIn:!0,zoomOut:!0,oneToOne:!0,reset:!0,prev:!1,play:!1,next:!1,rotateLeft:!0,rotateRight:!0,flipHorizontal:!0,flipVertical:!0},navbar:!1,title:!1,keyboard:!0,backdrop:!1,button:!1,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!1,ready:()=>{this.addNavigationListeners()}})},0)}doClose(){this.viewer&&(this.viewer.destroy(),this.viewer=void 0),this.imageUrl=""}getViewerContent(){return`
      <div id="imageContainer">
        ${this.isLoading?'<div class="loading">Loading...</div>':""}
      </div>
    `}getCustomStyles(){return this.css`
      ${Ap}
      
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
    `}onAfterRender(){if(!this.isShow||!this.imageUrl||this.viewer||(this.container=this.query("#imageContainer"),!this.container))return;const e=document.createElement("img");e.src=this.imageUrl,e.style.display="none",this.container.appendChild(e),this.viewer=new _a(e,{inline:!0,container:this.container,toolbar:{zoomIn:!0,zoomOut:!0,oneToOne:!0,reset:!0,prev:!1,play:!1,next:!1,rotateLeft:!0,rotateRight:!0,flipHorizontal:!0,flipVertical:!0},navbar:!1,title:!1,keyboard:!0,backdrop:!1,button:!1,movable:!0,zoomable:!0,rotatable:!0,scalable:!0,transition:!0,fullscreen:!1,ready:()=>{this.isLoading=!1}})}}customElements.get("cc-viewer-image")||customElements.define("cc-viewer-image",wp);class Ks extends Sr{imgUrl="";static AFRAME_SRI="sha384-rrkicQnp5c3ysj7SGZ2b/wF2W7mu6NQQMy4w63/dfRnMLkCL1d0IX4i3IOkYi2pj";static get observedAttributes(){return["show"]}attributeChangedCallback(e,t,i){e==="show"&&(this.isShow=i==="true"),super.attributeChangedCallback(e,t,i)}doOpen(e){this.imgUrl=e}doClose(){const e=this.query(".iframe");e&&(e.srcdoc=""),this.onIframeReady&&(window.removeEventListener("message",this.onIframeReady),this.onIframeReady=void 0),this.imgUrl=""}getViewerContent(){return'<iframe class="iframe"></iframe>'}getCustomStyles(){return`
      .iframe {
        width: 100%;
        height: 100%;
        border: 0;
      }
    `}static IFRAME_HTML=`
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
              <script src="https://aframe.io/releases/1.4.0/aframe.min.js" integrity="${Ks.AFRAME_SRI}" crossorigin="anonymous"><\/script>
            </head>
            <body>
              <a-scene embedded xr-mode-ui="enabled: false; XRMode: false;">
                <a-sky rotation="0 -90 0"></a-sky>
                <a-entity camera look-controls="reverseMouseDrag: true"></a-entity>
              </a-scene>
              <script>
                // m1-t9: 画像 URL は親から postMessage で受け取り setAttribute で入れる。
                // srcdoc に埋めると属性ブレイクアウトが成立するため（SRH-1）。
                window.addEventListener('message', function (e) {
                  // m1-t9-hotfix-1: 正当な送り手は親フレームだけである。
                  // origin ではなく source で照合する — 将来 sandbox を付けると
                  // opaque origin になり e.origin が "null" になるため（m1-t9 D4 の実測）。
                  // source 照合なら sandbox の有無によらず成立する。
                  if (e.source !== parent) return;
                  var d = e.data;
                  if (!d || d.type !== 'cc-panorama-src' || typeof d.src !== 'string') return;
                  var sky = document.querySelector('a-sky');
                  if (sky) sky.setAttribute('src', d.src);
                });
                parent.postMessage({ type: 'cc-panorama-ready' }, '*');
              <\/script>
            </body>
          </html>
        `;onIframeReady;onAfterRender(){if(this.imgUrl&&this.isShow){const e=this.query(".iframe");e&&(this.onIframeReady&&window.removeEventListener("message",this.onIframeReady),this.onIframeReady=t=>{!t.data||t.data.type!=="cc-panorama-ready"||t.source===e.contentWindow&&e.contentWindow?.postMessage({type:"cc-panorama-src",src:this.imgUrl},"*")},window.addEventListener("message",this.onIframeReady),e.srcdoc=Ks.IFRAME_HTML)}}}customElements.get("cc-viewer-panorama")||customElements.define("cc-viewer-panorama",Ks);class yp extends Sr{videoUrl="";static get observedAttributes(){return["show"]}attributeChangedCallback(e,t,i){e==="show"&&(this.isShow=i==="true"),super.attributeChangedCallback(e,t,i)}doOpen(e){const t=this.extractYouTubeId(e);t?this.videoUrl=`https://www.youtube.com/embed/${t}`:this.videoUrl=e}extractYouTubeId(e){const t=[/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,/youtube\.com\/watch\?.*v=([^&\n?#]+)/];for(const i of t){const s=e.match(i);if(s)return s[1]}return null}doClose(){const e=this.query(".iframe");e&&(e.src=""),this.videoUrl=""}getViewerContent(){return'<iframe class="iframe" allowfullscreen></iframe>'}applyExternalValues(){const e=this.query(".iframe");e&&e.setAttribute("src",this.videoUrl)}getCustomStyles(){return`
      .iframe {
        position: relative;
        width: 100%;
        height: 100%;
        border: 0;
      }
    `}}customElements.get("cc-viewer-youtube")||customElements.define("cc-viewer-youtube",yp);class Sp extends Sr{videoUrl="";fitToContainer=!1;static get observedAttributes(){return["show","fit-to-container"]}attributeChangedCallback(e,t,i){e==="show"?this.isShow=i==="true":e==="fit-to-container"&&(this.fitToContainer=i==="true"),super.attributeChangedCallback(e,t,i)}doOpen(e){this.videoUrl=e}doClose(){const e=this.query("video");e&&"pause"in e&&e.pause(),this.videoUrl=""}getViewerContent(){return`
      <div class="video-container">
        ${this.videoUrl?`
          <video
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
    `}onAfterRender(){const e=this.query("video");e&&e.addEventListener("error",t=>this.handleVideoError(t))}applyExternalValues(){const e=this.query("video");e&&e.setAttribute("src",this.videoUrl)}handleVideoError(e){const t=this.query(".video-container");if(t){t.textContent="";const i=document.createElement("div");i.className="video-error",i.textContent=`Failed to load video: ${this.videoUrl}`,t.appendChild(i)}}}customElements.get("cc-viewer-video")||customElements.define("cc-viewer-video",Sp);const Aa="171",Fr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ep=0,rc=1,bp=2,sc=1,xp=2,bi=3,xi=0,Vt=1,Ci=2,Vi=0,Qr=1,nc=2,ac=3,oc=4,Cp=5,tr=100,Up=101,Tp=102,Mp=103,Rp=104,Ip=200,Fp=201,Bp=202,Qp=203,wa=204,ya=205,Lp=206,Dp=207,Np=208,kp=209,Pp=210,Vp=211,Op=212,zp=213,Wp=214,Sa=0,Ea=1,ba=2,Lr=3,xa=4,Ca=5,Ua=6,Ta=7,Ma=0,Gp=1,Jp=2,Oi=0,Zp=1,Hp=2,Xp=3,Yp=4,jp=5,Kp=6,qp=7,lc=300,Dr=301,Nr=302,Ra=303,Ia=304,qs=306,$s=1e3,ir=1001,Fa=1002,ci=1003,$p=1004,en=1005,_i=1006,Ba=1007,rr=1008,Ui=1009,cc=1010,hc=1011,_s=1012,Qa=1013,sr=1014,Ti=1015,As=1016,La=1017,Da=1018,kr=1020,uc=35902,dc=1021,pc=1022,hi=1023,fc=1024,mc=1025,Pr=1026,Vr=1027,gc=1028,Na=1029,vc=1030,ka=1031,Pa=1033,tn=33776,rn=33777,sn=33778,nn=33779,Va=35840,Oa=35841,za=35842,Wa=35843,Ga=36196,Ja=37492,Za=37496,Ha=37808,Xa=37809,Ya=37810,ja=37811,Ka=37812,qa=37813,$a=37814,eo=37815,to=37816,io=37817,ro=37818,so=37819,no=37820,ao=37821,an=36492,oo=36494,lo=36495,_c=36283,co=36284,ho=36285,uo=36286,ef=3200,tf=3201,Ac=0,rf=1,zi="",Tt="srgb",Or="srgb-linear",on="linear",it="srgb",zr=7680,wc=519,sf=512,nf=513,af=514,yc=515,of=516,lf=517,cf=518,hf=519,Sc=35044,Ec="300 es",Mi=2e3,ln=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let s=0,n=i.length;s<n;s++)i[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cn=Math.PI/180,po=180/Math.PI;function ws(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ye(r,e,t){return Math.max(e,Math.min(t,r))}function uf(r,e){return(r%e+e)%e}function fo(r,e,t){return(1-t)*r+t*e}function ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const df={DEG2RAD:cn};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*s+e.x,this.y=n*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,s,n,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,o,a,l,c)}set(e,t,i,s,n,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=n,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],m=i[2],p=i[5],g=i[8],A=s[0],d=s[3],h=s[6],v=s[1],E=s[4],w=s[7],C=s[2],S=s[5],b=s[8];return n[0]=o*A+a*v+l*C,n[3]=o*d+a*E+l*S,n[6]=o*h+a*w+l*b,n[1]=c*A+u*v+f*C,n[4]=c*d+u*E+f*S,n[7]=c*h+u*w+f*b,n[2]=m*A+p*v+g*C,n[5]=m*d+p*E+g*S,n[8]=m*h+p*w+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*n*u+i*a*l+s*n*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,m=a*l-u*n,p=c*n-o*l,g=t*f+i*m+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/g;return e[0]=f*A,e[1]=(s*c-u*i)*A,e[2]=(a*i-s*o)*A,e[3]=m*A,e[4]=(u*t-s*l)*A,e[5]=(s*n-a*t)*A,e[6]=p*A,e[7]=(i*l-c*t)*A,e[8]=(o*t-i*n)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,o,a){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new We;function bc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ss(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pf(){const r=Ss("canvas");return r.style.display="block",r}const xc={};function Wr(r){r in xc||(xc[r]=!0,console.warn(r))}function ff(r,e,t){return new Promise(function(i,s){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}function mf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Cc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vf(){const r={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,n,o){return this.enabled===!1||n===o||!n||!o||(this.spaces[n].transfer===it&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[n].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b))),s},fromWorkingColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},toWorkingColorSpace:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?on:this.spaces[s].transfer},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,o){return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Or]:{primaries:e,whitePoint:i,transfer:on,toXYZ:Cc,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Cc,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),r}const je=vf();function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class _f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jr===void 0&&(Jr=Ss("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ss("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let o=0;o<n.length;o++)n[o]=Ri(n[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Af=0;class Tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?n.push(go(s[o].image)):n.push(go(s[o]))}else n=go(s);i.url=n}return t||(e.images[this.uuid]=i),i}}function go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_f.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wf=0;class Ft extends nr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=ir,s=ir,n=_i,o=rr,a=hi,l=Ui,c=Ft.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ws(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null,Ft.DEFAULT_MAPPING=lc,Ft.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n;const o=e.elements,a=o[0],l=o[4],c=o[8],u=o[1],f=o[5],m=o[9],p=o[2],g=o[6],A=o[10];if(Math.abs(l-u)<.01&&Math.abs(c-p)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+p)<.1&&Math.abs(m+g)<.1&&Math.abs(a+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const h=(a+1)/2,v=(f+1)/2,E=(A+1)/2,w=(l+u)/4,C=(c+p)/4,S=(m+g)/4;return h>v&&h>E?h<.01?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(h),s=w/i,n=C/i):v>E?v<.01?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(v),i=w/s,n=S/s):E<.01?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(E),i=C/n,s=S/n),this.set(i,s,n,t),this}let d=Math.sqrt((g-m)*(g-m)+(c-p)*(c-p)+(u-l)*(u-l));return Math.abs(d)<.001&&(d=1),this.x=(g-m)/d,this.y=(c-p)/d,this.z=(u-l)/d,this.w=Math.acos((a+f+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const n=new Ft(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);n.flipY=!1,n.generateMipmaps=i.generateMipmaps,n.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=n.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends yf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mc extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sf extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ci,this.minFilter=ci,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const m=n[o+0],p=n[o+1],g=n[o+2],A=n[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=m,e[t+1]=p,e[t+2]=g,e[t+3]=A;return}if(f!==A||l!==m||c!==p||u!==g){let d=1-a;const h=l*m+c*p+u*g+f*A,v=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const C=Math.sqrt(E),S=Math.atan2(C,h*v);d=Math.sin(d*S)/C,a=Math.sin(a*S)/C}const w=a*v;if(l=l*d+m*w,c=c*d+p*w,u=u*d+g*w,f=f*d+A*w,d===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,n,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=n[o],m=n[o+1],p=n[o+2],g=n[o+3];return e[t]=a*g+u*f+l*p-c*m,e[t+1]=l*g+u*m+c*f-a*p,e[t+2]=c*g+u*p+a*m-l*f,e[t+3]=u*g-a*f-l*m-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,n=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(n/2),m=l(i/2),p=l(s/2),g=l(n/2);switch(o){case"XYZ":this._x=m*u*f+c*p*g,this._y=c*p*f-m*u*g,this._z=c*u*g+m*p*f,this._w=c*u*f-m*p*g;break;case"YXZ":this._x=m*u*f+c*p*g,this._y=c*p*f-m*u*g,this._z=c*u*g-m*p*f,this._w=c*u*f+m*p*g;break;case"ZXY":this._x=m*u*f-c*p*g,this._y=c*p*f+m*u*g,this._z=c*u*g+m*p*f,this._w=c*u*f-m*p*g;break;case"ZYX":this._x=m*u*f-c*p*g,this._y=c*p*f+m*u*g,this._z=c*u*g-m*p*f,this._w=c*u*f+m*p*g;break;case"YZX":this._x=m*u*f+c*p*g,this._y=c*p*f+m*u*g,this._z=c*u*g-m*p*f,this._w=c*u*f-m*p*g;break;case"XZY":this._x=m*u*f-c*p*g,this._y=c*p*f-m*u*g,this._z=c*u*g+m*p*f,this._w=c*u*f+m*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],n=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],m=i+a+f;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(u-l)*p,this._y=(n-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(n+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(n-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(n+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,n=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-n*l,this._y=s*u+o*l+n*a-i*c,this._z=n*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,n=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=n,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,m=Math.sin(t*u)/c;return this._w=o*f+this._w*m,this._x=i*f+this._x*m,this._y=s*f+this._y*m,this._z=n*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,n=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-n*s),f=2*(n*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-n*f,this.z=s+l*f+n*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,n=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-n*a,this.y=n*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new H,Rc=new or;class Zr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=n.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(n,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hn.copy(i.boundingBox)),hn.applyMatrix4(e.matrixWorld),this.union(hn)}const s=e.children;for(let n=0,o=s.length;n<o;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),un.subVectors(this.max,Es),Hr.subVectors(e.a,Es),Xr.subVectors(e.b,Es),Yr.subVectors(e.c,Es),Wi.subVectors(Xr,Hr),Gi.subVectors(Yr,Xr),lr.subVectors(Hr,Yr);let t=[0,-Wi.z,Wi.y,0,-Gi.z,Gi.y,0,-lr.z,lr.y,Wi.z,0,-Wi.x,Gi.z,0,-Gi.x,lr.z,0,-lr.x,-Wi.y,Wi.x,0,-Gi.y,Gi.x,0,-lr.y,lr.x,0];return!_o(t,Hr,Xr,Yr,un)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,Hr,Xr,Yr,un))?!1:(dn.crossVectors(Wi,Gi),t=[dn.x,dn.y,dn.z],_o(t,Hr,Xr,Yr,un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new H,new H,new H,new H,new H,new H,new H,new H],ui=new H,hn=new Zr,Hr=new H,Xr=new H,Yr=new H,Wi=new H,Gi=new H,lr=new H,Es=new H,un=new H,dn=new H,cr=new H;function _o(r,e,t,i,s){for(let n=0,o=r.length-3;n<=o;n+=3){cr.fromArray(r,n);const a=s.x*Math.abs(cr.x)+s.y*Math.abs(cr.y)+s.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),u=i.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ef=new Zr,bs=new H,Ao=new H;class xs{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ef.setFromPoints(e).getCenter(i);let s=0;for(let n=0,o=e.length;n<o;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(bs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Ao)),this.expandByPoint(bs.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new H,wo=new H,pn=new H,Ji=new H,yo=new H,fn=new H,So=new H;class mn{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wo.copy(e).add(t).multiplyScalar(.5),pn.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(wo);const n=e.distanceTo(t)*.5,o=-this.direction.dot(pn),a=Ji.dot(this.direction),l=-Ji.dot(pn),c=Ji.lengthSq(),u=Math.abs(1-o*o);let f,m,p,g;if(u>0)if(f=o*l-a,m=o*a-l,g=n*u,f>=0)if(m>=-g)if(m<=g){const A=1/u;f*=A,m*=A,p=f*(f+o*m+2*a)+m*(o*f+m+2*l)+c}else m=n,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m=-n,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m<=-g?(f=Math.max(0,-(-o*n+a)),m=f>0?-n:Math.min(Math.max(-n,-l),n),p=-f*f+m*(m+2*l)+c):m<=g?(f=0,m=Math.min(Math.max(-n,-l),n),p=m*(m+2*l)+c):(f=Math.max(0,-(o*n+a)),m=f>0?n:Math.min(Math.max(-n,-l),n),p=-f*f+m*(m+2*l)+c);else m=o>0?-n:n,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(wo).addScaledVector(pn,m),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,n=e.radius*e.radius;if(s>n)return null;const o=Math.sqrt(n-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(i=(e.min.x-m.x)*c,s=(e.max.x-m.x)*c):(i=(e.max.x-m.x)*c,s=(e.min.x-m.x)*c),u>=0?(n=(e.min.y-m.y)*u,o=(e.max.y-m.y)*u):(n=(e.max.y-m.y)*u,o=(e.min.y-m.y)*u),i>o||n>s||((n>i||isNaN(i))&&(i=n),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-m.z)*f,l=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,l=(e.min.z-m.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,i,s,n){yo.subVectors(t,e),fn.subVectors(i,e),So.crossVectors(yo,fn);let o=this.direction.dot(So),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(fn.crossVectors(Ji,fn));if(l<0)return null;const c=a*this.direction.dot(yo.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot(So);return u<0?null:this.at(u/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,s,n,o,a,l,c,u,f,m,p,g,A,d){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,o,a,l,c,u,f,m,p,g,A,d)}set(e,t,i,s,n,o,a,l,c,u,f,m,p,g,A,d){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=n,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=m,h[3]=p,h[7]=g,h[11]=A,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/jr.setFromMatrixColumn(e,0).length(),n=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,n=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(n),f=Math.sin(n);if(e.order==="XYZ"){const m=o*u,p=o*f,g=a*u,A=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=m-A*c,t[9]=-a*l,t[2]=A-m*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const m=l*u,p=l*f,g=c*u,A=c*f;t[0]=m+A*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=A+m*a,t[10]=o*l}else if(e.order==="ZXY"){const m=l*u,p=l*f,g=c*u,A=c*f;t[0]=m-A*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=A-m*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const m=o*u,p=o*f,g=a*u,A=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=m*c+A,t[1]=l*f,t[5]=A*c+m,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const m=o*l,p=o*c,g=a*l,A=a*c;t[0]=l*u,t[4]=A-m*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=m-A*f}else if(e.order==="XZY"){const m=o*l,p=o*c,g=a*l,A=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=m*f+A,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=A*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,xf)}lookAt(e,t,i){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Zi.crossVectors(i,Xt),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Zi.crossVectors(i,Xt)),Zi.normalize(),gn.crossVectors(Xt,Zi),s[0]=Zi.x,s[4]=gn.x,s[8]=Xt.x,s[1]=Zi.y,s[5]=gn.y,s[9]=Xt.y,s[2]=Zi.z,s[6]=gn.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],m=i[9],p=i[13],g=i[2],A=i[6],d=i[10],h=i[14],v=i[3],E=i[7],w=i[11],C=i[15],S=s[0],b=s[4],U=s[8],y=s[12],_=s[1],x=s[5],T=s[9],R=s[13],Q=s[2],N=s[6],k=s[10],F=s[14],M=s[3],B=s[7],P=s[11],K=s[15];return n[0]=o*S+a*_+l*Q+c*M,n[4]=o*b+a*x+l*N+c*B,n[8]=o*U+a*T+l*k+c*P,n[12]=o*y+a*R+l*F+c*K,n[1]=u*S+f*_+m*Q+p*M,n[5]=u*b+f*x+m*N+p*B,n[9]=u*U+f*T+m*k+p*P,n[13]=u*y+f*R+m*F+p*K,n[2]=g*S+A*_+d*Q+h*M,n[6]=g*b+A*x+d*N+h*B,n[10]=g*U+A*T+d*k+h*P,n[14]=g*y+A*R+d*F+h*K,n[3]=v*S+E*_+w*Q+C*M,n[7]=v*b+E*x+w*N+C*B,n[11]=v*U+E*T+w*k+C*P,n[15]=v*y+E*R+w*F+C*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],m=e[10],p=e[14],g=e[3],A=e[7],d=e[11],h=e[15];return g*(+n*l*f-s*c*f-n*a*m+i*c*m+s*a*p-i*l*p)+A*(+t*l*p-t*c*m+n*o*m-s*o*p+s*c*u-n*l*u)+d*(+t*c*f-t*a*p-n*o*f+i*o*p+n*a*u-i*c*u)+h*(-s*a*u-t*l*f+t*a*m+s*o*f-i*o*m+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],m=e[10],p=e[11],g=e[12],A=e[13],d=e[14],h=e[15],v=f*d*c-A*m*c+A*l*p-a*d*p-f*l*h+a*m*h,E=g*m*c-u*d*c-g*l*p+o*d*p+u*l*h-o*m*h,w=u*A*c-g*f*c+g*a*p-o*A*p-u*a*h+o*f*h,C=g*f*l-u*A*l-g*a*m+o*A*m+u*a*d-o*f*d,S=t*v+i*E+s*w+n*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=v*b,e[1]=(A*m*n-f*d*n-A*s*p+i*d*p+f*s*h-i*m*h)*b,e[2]=(a*d*n-A*l*n+A*s*c-i*d*c-a*s*h+i*l*h)*b,e[3]=(f*l*n-a*m*n-f*s*c+i*m*c+a*s*p-i*l*p)*b,e[4]=E*b,e[5]=(u*d*n-g*m*n+g*s*p-t*d*p-u*s*h+t*m*h)*b,e[6]=(g*l*n-o*d*n-g*s*c+t*d*c+o*s*h-t*l*h)*b,e[7]=(o*m*n-u*l*n+u*s*c-t*m*c-o*s*p+t*l*p)*b,e[8]=w*b,e[9]=(g*f*n-u*A*n-g*i*p+t*A*p+u*i*h-t*f*h)*b,e[10]=(o*A*n-g*a*n+g*i*c-t*A*c-o*i*h+t*a*h)*b,e[11]=(u*a*n-o*f*n-u*i*c+t*f*c+o*i*p-t*a*p)*b,e[12]=C*b,e[13]=(u*A*s-g*f*s+g*i*m-t*A*m-u*i*d+t*f*d)*b,e[14]=(g*a*s-o*A*s-g*i*l+t*A*l+o*i*d-t*a*d)*b,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*m+t*a*m)*b,this}scale(e){const t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),n=1-i,o=e.x,a=e.y,l=e.z,c=n*o,u=n*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,o){return this.set(1,i,n,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,n=t._x,o=t._y,a=t._z,l=t._w,c=n+n,u=o+o,f=a+a,m=n*c,p=n*u,g=n*f,A=o*u,d=o*f,h=a*f,v=l*c,E=l*u,w=l*f,C=i.x,S=i.y,b=i.z;return s[0]=(1-(A+h))*C,s[1]=(p+w)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(p-w)*S,s[5]=(1-(m+h))*S,s[6]=(d+v)*S,s[7]=0,s[8]=(g+E)*b,s[9]=(d-v)*b,s[10]=(1-(m+A))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let n=jr.set(s[0],s[1],s[2]).length();const o=jr.set(s[4],s[5],s[6]).length(),a=jr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);const l=1/n,c=1/o,u=1/a;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=c,di.elements[5]*=c,di.elements[6]*=c,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),i.x=n,i.y=o,i.z=a,this}makePerspective(e,t,i,s,n,o,a=Mi){const l=this.elements,c=2*n/(t-e),u=2*n/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let p,g;if(a===Mi)p=-(o+n)/(o-n),g=-2*o*n/(o-n);else if(a===ln)p=-o/(o-n),g=-o*n/(o-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,n,o,a=Mi){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-n),m=(t+e)*c,p=(i+s)*u;let g,A;if(a===Mi)g=(o+n)*f,A=-2*f;else if(a===ln)g=n*f,A=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=A,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const jr=new H,di=new ht,bf=new H(0,0,0),xf=new H(1,1,1),Zi=new H,gn=new H,Xt=new H,Ic=new ht,Fc=new or;class Ai{constructor(e=0,t=0,i=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,n=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],m=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,n)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cf=0;const Qc=new H,Kr=new or,Bi=new ht,vn=new H,Cs=new H,Uf=new H,Tf=new or,Lc=new H(1,0,0),Dc=new H(0,1,0),Nc=new H(0,0,1),kc={type:"added"},Mf={type:"removed"},qr={type:"childadded",child:null},Eo={type:"childremoved",child:null};class xt extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new H,t=new Ai,i=new or,s=new H(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Dc,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Dc,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vn.copy(e):vn.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Cs,vn,this.up):Bi.lookAt(vn,Cs,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(Bi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),qr.child=e,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mf),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let n=0,o=s.length;n<o;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let n=0,o=s.length;n<o;n++)s[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function n(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];n(e.shapes,f)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(n(e.materials,this.material[l]));s.material=a}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(n(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),m=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}xt.DEFAULT_UP=new H(0,1,0),xt.DEFAULT_MATRIX_AUTO_UPDATE=!0,xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new H,Qi=new H,bo=new H,Li=new H,$r=new H,es=new H,Pc=new H,xo=new H,Co=new H,Uo=new H,To=new gt,Mo=new gt,Ro=new gt;class fi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){pi.subVectors(s,t),Qi.subVectors(i,t),bo.subVectors(e,t);const o=pi.dot(pi),a=pi.dot(Qi),l=pi.dot(bo),c=Qi.dot(Qi),u=Qi.dot(bo),f=o*c-a*a;if(f===0)return n.set(0,0,0),null;const m=1/f,p=(c*l-a*u)*m,g=(o*u-a*l)*m;return n.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,s,n,o,a,l){return this.getBarycoord(e,t,i,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(e,t,i,s,n,o){return To.setScalar(0),Mo.setScalar(0),Ro.setScalar(0),To.fromBufferAttribute(e,t),Mo.fromBufferAttribute(e,i),Ro.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(To,n.x),o.addScaledVector(Mo,n.y),o.addScaledVector(Ro,n.z),o}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),Qi.subVectors(e,t),pi.cross(Qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),pi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,n){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,n=this.c;let o,a;$r.subVectors(s,i),es.subVectors(n,i),xo.subVectors(e,i);const l=$r.dot(xo),c=es.dot(xo);if(l<=0&&c<=0)return t.copy(i);Co.subVectors(e,s);const u=$r.dot(Co),f=es.dot(Co);if(u>=0&&f<=u)return t.copy(s);const m=l*f-u*c;if(m<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($r,o);Uo.subVectors(e,n);const p=$r.dot(Uo),g=es.dot(Uo);if(g>=0&&p<=g)return t.copy(n);const A=p*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(es,a);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return Pc.subVectors(n,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Pc,a);const h=1/(d+A+m);return o=A*h,a=m*h,t.copy(i).addScaledVector($r,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},_n={h:0,s:0,l:0};function Io(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=uf(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=Io(o,n,e+1/3),this.g=Io(o,n,e),this.b=Io(o,n,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],o=n.length;if(o===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const i=Vc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return je.fromWorkingColorSpace(It.copy(this),e),Math.round(Ye(It.r*255,0,255))*65536+Math.round(Ye(It.g*255,0,255))*256+Math.round(Ye(It.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(It.copy(this),t);const i=It.r,s=It.g,n=It.b,o=Math.max(i,s,n),a=Math.min(i,s,n);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-n)/f+(s<n?6:0);break;case s:l=(n-i)/f+2;break;case n:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Tt){je.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,s=It.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(_n);const i=fo(Hi.h,_n.h,t),s=fo(Hi.s,_n.s,t),n=fo(Hi.l,_n.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ge;Ge.NAMES=Vc;let Rf=0;class Di extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=Qr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=ya,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wa&&(i.blendSrc=this.blendSrc),this.blendDst!==ya&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const o=[];for(const a in n){const l=n[a];delete l.metadata,o.push(l)}return o}if(t){const n=s(e.textures),o=s(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oc extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new H,An=new ze;class wi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sc,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXY(t,An.x,An.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sc&&(e.usage=this.usage),e}}class zc extends wi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wc extends wi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bt extends wi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let If=0;const ti=new ht,Fo=new xt,ts=new H,Yt=new Zr,Us=new Zr,Ct=new H;class mi extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Wc:zc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new We().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,n=e.length;s<n;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const n=e[s];t.setXYZ(s,n.x,n.y,n.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const n=t[i];Yt.setFromBufferAttribute(n),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(Yt.min,Us.min),Yt.expandByPoint(Ct),Ct.addVectors(Yt.max,Us.max),Yt.expandByPoint(Ct)):(Yt.expandByPoint(Us.min),Yt.expandByPoint(Us.max))}Yt.getCenter(i);let s=0;for(let n=0,o=e.count;n<o;n++)Ct.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let n=0,o=t.length;n<o;n++){const a=t[n],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),Ct.add(ts)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new H,l[U]=new H;const c=new H,u=new H,f=new H,m=new ze,p=new ze,g=new ze,A=new H,d=new H;function h(U,y,_){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,_),m.fromBufferAttribute(n,U),p.fromBufferAttribute(n,y),g.fromBufferAttribute(n,_),u.sub(c),f.sub(c),p.sub(m),g.sub(m);const x=1/(p.x*g.y-g.x*p.y);isFinite(x)&&(A.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(x),d.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(x),a[U].add(A),a[y].add(A),a[_].add(A),l[U].add(d),l[y].add(d),l[_].add(d))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,y=v.length;U<y;++U){const _=v[U],x=_.start,T=_.count;for(let R=x,Q=x+T;R<Q;R+=3)h(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const E=new H,w=new H,C=new H,S=new H;function b(U){C.fromBufferAttribute(s,U),S.copy(C);const y=a[U];E.copy(y),E.sub(C.multiplyScalar(C.dot(y))).normalize(),w.crossVectors(S,y);const _=w.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,_)}for(let U=0,y=v.length;U<y;++U){const _=v[U],x=_.start,T=_.count;for(let R=x,Q=x+T;R<Q;R+=3)b(e.getX(R+0)),b(e.getX(R+1)),b(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const s=new H,n=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let m=0,p=e.count;m<p;m+=3){const g=e.getX(m+0),A=e.getX(m+1),d=e.getX(m+2);s.fromBufferAttribute(t,g),n.fromBufferAttribute(t,A),o.fromBufferAttribute(t,d),u.subVectors(o,n),f.subVectors(s,n),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(A,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let m=0,p=t.count;m<p;m+=3)s.fromBufferAttribute(t,m+0),n.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),u.subVectors(o,n),f.subVectors(s,n),u.cross(f),i.setXYZ(m+0,u.x,u.y,u.z),i.setXYZ(m+1,u.x,u.y,u.z),i.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,m=new c.constructor(l.length*u);let p=0,g=0;for(let A=0,d=l.length;A<d;A++){a.isInterleavedBufferAttribute?p=l[A]*a.data.stride+a.offset:p=l[A]*u;for(let h=0;h<u;h++)m[g++]=c[p++]}return new wi(m,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const n=this.morphAttributes;for(const a in n){const l=[],c=n[a];for(let u=0,f=c.length;u<f;u++){const m=c[u],p=e(m,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,m=c.length;f<m;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const n=e.morphAttributes;for(const c in n){const u=[],f=n[c];for(let m=0,p=f.length;m<p;m++)u.push(f[m].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new ht,hr=new mn,wn=new xs,Jc=new H,yn=new H,Sn=new H,En=new H,Bo=new H,bn=new H,Zc=new H,xn=new H;class zt extends xt{constructor(e=new mi,t=new Oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(n&&a){bn.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const u=a[l],f=n[l];u!==0&&(Bo.fromBufferAttribute(f,e),o?bn.addScaledVector(Bo,u):bn.addScaledVector(Bo.sub(t),u))}t.add(bn)}return t}raycast(e,t){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wn.copy(i.boundingSphere),wn.applyMatrix4(n),hr.copy(e.ray).recast(e.near),!(wn.containsPoint(hr.origin)===!1&&(hr.intersectSphere(wn,Jc)===null||hr.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Gc.copy(n).invert(),hr.copy(e.ray).applyMatrix4(Gc),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let s;const n=this.geometry,o=this.material,a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv1,f=n.attributes.normal,m=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=m.length;g<A;g++){const d=m[g],h=o[d.materialIndex],v=Math.max(d.start,p.start),E=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let w=v,C=E;w<C;w+=3){const S=a.getX(w),b=a.getX(w+1),U=a.getX(w+2);s=Cn(this,h,e,i,c,u,f,S,b,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),A=Math.min(a.count,p.start+p.count);for(let d=g,h=A;d<h;d+=3){const v=a.getX(d),E=a.getX(d+1),w=a.getX(d+2);s=Cn(this,o,e,i,c,u,f,v,E,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,A=m.length;g<A;g++){const d=m[g],h=o[d.materialIndex],v=Math.max(d.start,p.start),E=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let w=v,C=E;w<C;w+=3){const S=w,b=w+1,U=w+2;s=Cn(this,h,e,i,c,u,f,S,b,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),A=Math.min(l.count,p.start+p.count);for(let d=g,h=A;d<h;d+=3){const v=d,E=d+1,w=d+2;s=Cn(this,o,e,i,c,u,f,v,E,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Ff(r,e,t,i,s,n,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,n,s,!0,a):l=i.intersectTriangle(s,n,o,e.side===xi,a),l===null)return null;xn.copy(a),xn.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(xn);return c<t.near||c>t.far?null:{distance:c,point:xn.clone(),object:r}}function Cn(r,e,t,i,s,n,o,a,l,c){r.getVertexPosition(a,yn),r.getVertexPosition(l,Sn),r.getVertexPosition(c,En);const u=Ff(r,e,t,i,yn,Sn,En,Zc);if(u){const f=new H;fi.getBarycoord(Zc,yn,Sn,En,f),s&&(u.uv=fi.getInterpolatedAttribute(s,a,l,c,f,new ze)),n&&(u.uv1=fi.getInterpolatedAttribute(n,a,l,c,f,new ze)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new H,materialIndex:0};fi.getNormal(yn,Sn,En,m.normal),u.face=m,u.barycoord=f}return u}class Ts extends mi{constructor(e=1,t=1,i=1,s=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:n,depthSegments:o};const a=this;s=Math.floor(s),n=Math.floor(n),o=Math.floor(o);const l=[],c=[],u=[],f=[];let m=0,p=0;g("z","y","x",-1,-1,i,t,e,o,n,0),g("z","y","x",1,-1,i,t,-e,o,n,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,n,4),g("x","y","z",-1,-1,e,t,-i,s,n,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function g(A,d,h,v,E,w,C,S,b,U,y){const _=w/b,x=C/U,T=w/2,R=C/2,Q=S/2,N=b+1,k=U+1;let F=0,M=0;const B=new H;for(let P=0;P<k;P++){const K=P*x-R;for(let te=0;te<N;te++){const ce=te*_-T;B[A]=ce*v,B[d]=K*E,B[h]=Q,c.push(B.x,B.y,B.z),B[A]=0,B[d]=0,B[h]=S>0?1:-1,u.push(B.x,B.y,B.z),f.push(te/b),f.push(1-P/U),F+=1}}for(let P=0;P<U;P++)for(let K=0;K<b;K++){const te=m+K+N*P,ce=m+K+N*(P+1),W=m+(K+1)+N*(P+1),X=m+(K+1)+N*P;l.push(te,ce,X),l.push(ce,W,X),M+=6}a.addGroup(p,M,y),p+=M,m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(r){const e={};for(let t=0;t<r.length;t++){const i=is(r[t]);for(const s in i)e[s]=i[s]}return e}function Bf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Hc(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Qf={clone:is,merge:Qt};var Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const n=this.uniforms[s].value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xc extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new H,Yc=new ze,jc=new ze;class ii extends Xc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Yc,jc),t.subVectors(jc,Yc)}setViewOffset(e,t,i,s,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cn*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;n+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,ss=1;class Nf extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ii(rs,ss,e,t);s.layers=this.layers,this.add(s);const n=new ii(rs,ss,e,t);n.layers=this.layers,this.add(n);const o=new ii(rs,ss,e,t);o.layers=this.layers,this.add(o);const a=new ii(rs,ss,e,t);a.layers=this.layers,this.add(a);const l=new ii(rs,ss,e,t);l.layers=this.layers,this.add(l);const c=new ii(rs,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,n,o,a,l]=t;for(const c of t)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ln)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,o,a,l,c,u]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,n),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,m,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kc extends Ft{constructor(e,t,i,s,n,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,super(e,t,i,s,n,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kf extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Kc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_i}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ts(5,5,5),n=new Xi({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Vi});n.uniforms.tEquirect.value=t;const o=new zt(s,n),a=t.minFilter;return t.minFilter===rr&&(t.minFilter=_i),new Nf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(n)}}class Pf extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qo=new H,Vf=new H,Of=new We;class ji{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Qo.subVectors(i,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Of.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new xs,Un=new H;class Lo{constructor(e=new ji,t=new ji,i=new ji,s=new ji,n=new ji,o=new ji){this.planes=[e,t,i,s,n,o]}set(e,t,i,s,n,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(n),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi){const i=this.planes,s=e.elements,n=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],m=s[7],p=s[8],g=s[9],A=s[10],d=s[11],h=s[12],v=s[13],E=s[14],w=s[15];if(i[0].setComponents(l-n,m-c,d-p,w-h).normalize(),i[1].setComponents(l+n,m+c,d+p,w+h).normalize(),i[2].setComponents(l+o,m+u,d+g,w+v).normalize(),i[3].setComponents(l-o,m-u,d-g,w-v).normalize(),i[4].setComponents(l-a,m-f,d-A,w-E).normalize(),t===Mi)i[5].setComponents(l+a,m+f,d+A,w+E).normalize();else if(t===ln)i[5].setComponents(a,f,A,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Un.x=s.normal.x>0?e.max.x:e.min.x,Un.y=s.normal.y>0?e.max.y:e.min.y,Un.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Un)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tn extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mn=new H,Rn=new H,qc=new ht,Ms=new mn,In=new xs,Do=new H,$c=new H;class zf extends xt{constructor(e=new mi,t=new Tn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,n=t.count;s<n;s++)Mn.fromBufferAttribute(t,s-1),Rn.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Mn.distanceTo(Rn);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),In.copy(i.boundingSphere),In.applyMatrix4(s),In.radius+=n,e.ray.intersectsSphere(In)===!1)return;qc.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(qc);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=m,A=p-1;g<A;g+=c){const d=u.getX(g),h=u.getX(g+1),v=Fn(this,e,Ms,l,d,h);v&&t.push(v)}if(this.isLineLoop){const g=u.getX(p-1),A=u.getX(m),d=Fn(this,e,Ms,l,g,A);d&&t.push(d)}}else{const m=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=m,A=p-1;g<A;g+=c){const d=Fn(this,e,Ms,l,g,g+1);d&&t.push(d)}if(this.isLineLoop){const g=Fn(this,e,Ms,l,p-1,m);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fn(r,e,t,i,s,n){const o=r.geometry.attributes.position;if(Mn.fromBufferAttribute(o,s),Rn.fromBufferAttribute(o,n),t.distanceSqToSegment(Mn,Rn,Do,$c)>i)return;Do.applyMatrix4(r.matrixWorld);const a=e.ray.origin.distanceTo(Do);if(!(a<e.near||a>e.far))return{distance:a,point:$c.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}const eh=new H,th=new H;class ih extends zf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,n=t.count;s<n;s+=2)eh.fromBufferAttribute(t,s),th.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+eh.distanceTo(th);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rs extends Di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rh=new ht,No=new mn,Bn=new xs,Qn=new H;class ko extends xt{constructor(e=new mi,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bn.copy(i.boundingSphere),Bn.applyMatrix4(s),Bn.radius+=n,e.ray.intersectsSphere(Bn)===!1)return;rh.copy(s).invert(),No.copy(e.ray).applyMatrix4(rh);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let p=f,g=m;p<g;p++){const A=c.getX(p);Qn.fromBufferAttribute(u,A),sh(Qn,A,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let p=f,g=m;p<g;p++)Qn.fromBufferAttribute(u,p),sh(Qn,p,l,s,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function sh(r,e,t,i,s,n,o){const a=No.distanceSqToPoint(r);if(a<t){const l=new H;No.closestPointToPoint(r,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;n.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Is extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class nh extends Ft{constructor(e,t,i,s,n,o,a,l,c,u=Pr){if(u!==Pr&&u!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=sr),i===void 0&&u===Vr&&(i=kr),super(null,s,n,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ci,this.minFilter=l!==void 0?l:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ln extends mi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const n=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,m=t/l,p=[],g=[],A=[],d=[];for(let h=0;h<u;h++){const v=h*m-o;for(let E=0;E<c;E++){const w=E*f-n;g.push(w,-v,0),A.push(0,0,1),d.push(E/a),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const E=v+c*h,w=v+c*(h+1),C=v+1+c*(h+1),S=v+1+c*h;p.push(E,w,S),p.push(w,C,S)}this.setIndex(p),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(A,3)),this.setAttribute("uv",new Bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class Po extends Di{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ge(16777215),this.specular=new Ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wf extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gf extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Jf{constructor(e,t,i){const s=this;let n=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,n===!1&&s.onStart!==void 0&&s.onStart(u,o,a),n=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,m=c.length;f<m;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const ah=new Jf;class ns{constructor(e){this.manager=e!==void 0?e:ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,n){i.load(e,s,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ns.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class Zf extends Error{constructor(e,t){super(e),this.response=t}}class oh extends ns{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=Dn.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:s});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],f=c.body.getReader(),m=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=m?parseInt(m):0,g=p!==0;let A=0;const d=new ReadableStream({start(h){v();function v(){f.read().then(({done:E,value:w})=>{if(E)h.close();else{A+=w.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:A,total:p});for(let S=0,b=u.length;S<b;S++){const U=u[S];U.onProgress&&U.onProgress(C)}h.enqueue(w),v()}},E=>{h.error(E)})}}});return new Response(d)}else throw new Zf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(p=>m.decode(p))}}}).then(c=>{Dn.add(e,c);const u=Ni[e];delete Ni[e];for(let f=0,m=u.length;f<m;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let f=0,m=u.length;f<m;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hf extends ns{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,o=Dn.get(e);if(o!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(o),n.manager.itemEnd(e)},0),o;const a=Ss("img");function l(){u(),Dn.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(f){u(),s&&s(f),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),n.manager.itemStart(e),a.src=e,a}}class Xf extends ns{constructor(e){super(e)}load(e,t,i,s){const n=new Ft,o=new Hf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){n.image=a,n.needsUpdate=!0,t!==void 0&&t(n)},i,s),n}}class lh extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Vo=new ht,ch=new H,hh=new H;class Yf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hh),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uh extends Xc{constructor(e=-1,t=1,i=1,s=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,o=n+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(n,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jf extends Yf{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kf extends lh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new jf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qf extends lh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $f{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class em extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tm extends nr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ph(r,e,t,i){const s=im(i);switch(t){case dc:return r*e;case fc:return r*e;case mc:return r*e*2;case gc:return r*e/s.components*s.byteLength;case Na:return r*e/s.components*s.byteLength;case vc:return r*e*2/s.components*s.byteLength;case ka:return r*e*2/s.components*s.byteLength;case pc:return r*e*3/s.components*s.byteLength;case hi:return r*e*4/s.components*s.byteLength;case Pa:return r*e*4/s.components*s.byteLength;case tn:case rn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case sn:case nn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oa:case Wa:return Math.max(r,16)*Math.max(e,8)/4;case Va:case za:return Math.max(r,8)*Math.max(e,8)/2;case Ga:case Ja:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $a:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case eo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case to:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case io:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case an:case oo:case lo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _c:case co:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ho:case uo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function im(r){switch(r){case Ui:case cc:return{byteLength:1,components:1};case _s:case hc:case As:return{byteLength:2,components:1};case La:case Da:return{byteLength:2,components:4};case sr:case Qa:case Ti:return{byteLength:4,components:1};case uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);function fh(){let r=null,e=!1,t=null,i=null;function s(n,o){t(n,o),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function rm(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,m=r.createBuffer();r.bindBuffer(l,m),r.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let m=0;for(let p=1;p<f.length;p++){const g=f[m],A=f[p];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++m,f[m]=A)}f.length=m+1;for(let p=0,g=f.length;p<g;p++){const A=f[p];r.bufferSubData(c,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function n(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:n,update:o}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mm=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,ig=`struct PhysicalMaterial {
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
}`,rg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ag=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cg=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rv=`varying vec2 vUv;
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
}`,uv=`#define DISTANCE
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
}`,dv=`#define DISTANCE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
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
}`,gv=`uniform vec3 diffuse;
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
}`,vv=`#include <common>
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
}`,_v=`uniform vec3 diffuse;
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
}`,Av=`#define LAMBERT
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
}`,wv=`#define LAMBERT
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
}`,yv=`#define MATCAP
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
}`,Sv=`#define MATCAP
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
}`,Ev=`#define NORMAL
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
}`,bv=`#define NORMAL
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
}`,xv=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Uv=`#define STANDARD
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
}`,Tv=`#define STANDARD
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
}`,Mv=`#define TOON
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
}`,Rv=`#define TOON
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
}`,Iv=`uniform float size;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,Qv=`uniform vec3 color;
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
}`,Lv=`uniform float rotation;
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:sm,alphahash_pars_fragment:nm,alphamap_fragment:am,alphamap_pars_fragment:om,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:um,batching_pars_vertex:dm,batching_vertex:pm,begin_vertex:fm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:vm,bumpmap_pars_fragment:_m,clipping_planes_fragment:Am,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Sm,color_fragment:Em,color_pars_fragment:bm,color_pars_vertex:xm,color_vertex:Cm,common:Um,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Mm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Im,emissivemap_fragment:Fm,emissivemap_pars_fragment:Bm,colorspace_fragment:Qm,colorspace_pars_fragment:Lm,envmap_fragment:Dm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:km,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:jm,envmap_vertex:Vm,fog_vertex:Om,fog_pars_vertex:zm,fog_fragment:Wm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Zm,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Xm,lights_pars_begin:Ym,lights_toon_fragment:Km,lights_toon_pars_fragment:qm,lights_phong_fragment:$m,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ig,lights_fragment_begin:rg,lights_fragment_maps:sg,lights_fragment_end:ng,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:cg,map_fragment:hg,map_pars_fragment:ug,map_particle_fragment:dg,map_particle_pars_fragment:pg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:vg,morphnormal_vertex:_g,morphtarget_pars_vertex:Ag,morphtarget_vertex:wg,normal_fragment_begin:yg,normal_fragment_maps:Sg,normal_pars_fragment:Eg,normal_pars_vertex:bg,normal_vertex:xg,normalmap_pars_fragment:Cg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Rg,opaque_fragment:Ig,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:Qg,dithering_fragment:Lg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Vg,shadowmap_vertex:Og,shadowmask_pars_fragment:zg,skinbase_vertex:Wg,skinning_pars_vertex:Gg,skinning_vertex:Jg,skinnormal_vertex:Zg,specularmap_fragment:Hg,specularmap_pars_fragment:Xg,tonemapping_fragment:Yg,tonemapping_pars_fragment:jg,transmission_fragment:Kg,transmission_pars_fragment:qg,uv_pars_fragment:$g,uv_pars_vertex:ev,uv_vertex:tv,worldpos_vertex:iv,background_vert:rv,background_frag:sv,backgroundCube_vert:nv,backgroundCube_frag:av,cube_vert:ov,cube_frag:lv,depth_vert:cv,depth_frag:hv,distanceRGBA_vert:uv,distanceRGBA_frag:dv,equirect_vert:pv,equirect_frag:fv,linedashed_vert:mv,linedashed_frag:gv,meshbasic_vert:vv,meshbasic_frag:_v,meshlambert_vert:Av,meshlambert_frag:wv,meshmatcap_vert:yv,meshmatcap_frag:Sv,meshnormal_vert:Ev,meshnormal_frag:bv,meshphong_vert:xv,meshphong_frag:Cv,meshphysical_vert:Uv,meshphysical_frag:Tv,meshtoon_vert:Mv,meshtoon_frag:Rv,points_vert:Iv,points_frag:Fv,shadow_vert:Bv,shadow_frag:Qv,sprite_vert:Lv,sprite_frag:Dv},Ee={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yi={basic:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Qt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Qt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Qt([Ee.points,Ee.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Qt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Qt([Ee.common,Ee.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Qt([Ee.sprite,Ee.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Qt([Ee.common,Ee.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Qt([Ee.lights,Ee.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};yi.physical={uniforms:Qt([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Nn={r:0,b:0,g:0},dr=new Ai,Nv=new ht;function kv(r,e,t,i,s,n,o){const a=new Ge(0);let l=n===!0?0:1,c,u,f=null,m=0,p=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function A(E){let w=!1;const C=g(E);C===null?h(a,l):C&&C.isColor&&(h(C,1),w=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function d(E,w){const C=g(w);C&&(C.isCubeTexture||C.mapping===qs)?(u===void 0&&(u=new zt(new Ts(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:is(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,b,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),dr.copy(w.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(dr)),u.material.toneMapped=je.getTransfer(C.colorSpace)!==it,(f!==C||m!==C.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=C,m=C.version,p=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new zt(new Ln(2,2),new Xi({name:"BackgroundMaterial",uniforms:is(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=je.getTransfer(C.colorSpace)!==it,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||m!==C.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=C,m=C.version,p=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,w){E.getRGB(Nn,Hc(r)),i.buffers.color.setClear(Nn.r,Nn.g,Nn.b,w,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:A,addToRenderList:d,dispose:v}}function Pv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=m(null);let n=s,o=!1;function a(_,x,T,R,Q){let N=!1;const k=f(R,T,x);n!==k&&(n=k,c(n.object)),N=p(_,R,T,Q),N&&g(_,R,T,Q),Q!==null&&e.update(Q,r.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,w(_,x,T,R),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return r.createVertexArray()}function c(_){return r.bindVertexArray(_)}function u(_){return r.deleteVertexArray(_)}function f(_,x,T){const R=T.wireframe===!0;let Q=i[_.id];Q===void 0&&(Q={},i[_.id]=Q);let N=Q[x.id];N===void 0&&(N={},Q[x.id]=N);let k=N[R];return k===void 0&&(k=m(l()),N[R]=k),k}function m(_){const x=[],T=[],R=[];for(let Q=0;Q<t;Q++)x[Q]=0,T[Q]=0,R[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:T,attributeDivisors:R,object:_,attributes:{},index:null}}function p(_,x,T,R){const Q=n.attributes,N=x.attributes;let k=0;const F=T.getAttributes();for(const M in F)if(F[M].location>=0){const B=Q[M];let P=N[M];if(P===void 0&&(M==="instanceMatrix"&&_.instanceMatrix&&(P=_.instanceMatrix),M==="instanceColor"&&_.instanceColor&&(P=_.instanceColor)),B===void 0||B.attribute!==P||P&&B.data!==P.data)return!0;k++}return n.attributesNum!==k||n.index!==R}function g(_,x,T,R){const Q={},N=x.attributes;let k=0;const F=T.getAttributes();for(const M in F)if(F[M].location>=0){let B=N[M];B===void 0&&(M==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),M==="instanceColor"&&_.instanceColor&&(B=_.instanceColor));const P={};P.attribute=B,B&&B.data&&(P.data=B.data),Q[M]=P,k++}n.attributes=Q,n.attributesNum=k,n.index=R}function A(){const _=n.newAttributes;for(let x=0,T=_.length;x<T;x++)_[x]=0}function d(_){h(_,0)}function h(_,x){const T=n.newAttributes,R=n.enabledAttributes,Q=n.attributeDivisors;T[_]=1,R[_]===0&&(r.enableVertexAttribArray(_),R[_]=1),Q[_]!==x&&(r.vertexAttribDivisor(_,x),Q[_]=x)}function v(){const _=n.newAttributes,x=n.enabledAttributes;for(let T=0,R=x.length;T<R;T++)x[T]!==_[T]&&(r.disableVertexAttribArray(T),x[T]=0)}function E(_,x,T,R,Q,N,k){k===!0?r.vertexAttribIPointer(_,x,T,Q,N):r.vertexAttribPointer(_,x,T,R,Q,N)}function w(_,x,T,R){A();const Q=R.attributes,N=T.getAttributes(),k=x.defaultAttributeValues;for(const F in N){const M=N[F];if(M.location>=0){let B=Q[F];if(B===void 0&&(F==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),F==="instanceColor"&&_.instanceColor&&(B=_.instanceColor)),B!==void 0){const P=B.normalized,K=B.itemSize,te=e.get(B);if(te===void 0)continue;const ce=te.buffer,W=te.type,X=te.bytesPerElement,ue=W===r.INT||W===r.UNSIGNED_INT||B.gpuType===Qa;if(B.isInterleavedBufferAttribute){const ae=B.data,he=ae.stride,me=B.offset;if(ae.isInstancedInterleavedBuffer){for(let oe=0;oe<M.locationSize;oe++)h(M.location+oe,ae.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<M.locationSize;oe++)d(M.location+oe);r.bindBuffer(r.ARRAY_BUFFER,ce);for(let oe=0;oe<M.locationSize;oe++)E(M.location+oe,K/M.locationSize,W,P,he*X,(me+K/M.locationSize*oe)*X,ue)}else{if(B.isInstancedBufferAttribute){for(let ae=0;ae<M.locationSize;ae++)h(M.location+ae,B.meshPerAttribute);_.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ae=0;ae<M.locationSize;ae++)d(M.location+ae);r.bindBuffer(r.ARRAY_BUFFER,ce);for(let ae=0;ae<M.locationSize;ae++)E(M.location+ae,K/M.locationSize,W,P,K*X,K/M.locationSize*ae*X,ue)}}else if(k!==void 0){const P=k[F];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(M.location,P);break;case 3:r.vertexAttrib3fv(M.location,P);break;case 4:r.vertexAttrib4fv(M.location,P);break;default:r.vertexAttrib1fv(M.location,P)}}}}v()}function C(){U();for(const _ in i){const x=i[_];for(const T in x){const R=x[T];for(const Q in R)u(R[Q].object),delete R[Q];delete x[T]}delete i[_]}}function S(_){if(i[_.id]===void 0)return;const x=i[_.id];for(const T in x){const R=x[T];for(const Q in R)u(R[Q].object),delete R[Q];delete x[T]}delete i[_.id]}function b(_){for(const x in i){const T=i[x];if(T[_.id]===void 0)continue;const R=T[_.id];for(const Q in R)u(R[Q].object),delete R[Q];delete T[_.id]}}function U(){y(),o=!0,n!==s&&(n=s,c(n.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:b,initAttributes:A,enableAttribute:d,disableUnusedAttributes:v}}function Vv(r,e,t){let i;function s(c){i=c}function n(c,u){r.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(r.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let p=0;p<f;p++)m+=u[p];t.update(m,i,1)}function l(c,u,f,m){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],m[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,m,0,f);let g=0;for(let A=0;A<f;A++)g+=u[A]*m[A];t.update(g,i,1)}}this.setMode=s,this.render=n,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ov(r,e,t,i){let s;function n(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==hi&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const U=b===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ui&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ti&&!U)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),d=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),h=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:C,maxSamples:S}}function zv(r){const e=this;let t=null,i=0,s=!1,n=!1;const o=new ji,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const p=f.length!==0||m||i!==0||s;return s=m,i=f.length,p},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(f,m){t=u(f,m,0)},this.setState=function(f,m,p){const g=f.clippingPlanes,A=f.clipIntersection,d=f.clipShadows,h=r.get(f);if(!s||g===null||g.length===0||n&&!d)n?u(null):c();else{const v=n?0:i,E=v*4;let w=h.clippingState||null;l.value=w,w=u(g,m,E,p);for(let C=0;C!==E;++C)w[C]=t[C];h.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,m,p,g){const A=f!==null?f.length:0;let d=null;if(A!==0){if(d=l.value,g!==!0||d===null){const h=p+A*4,v=m.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<h)&&(d=new Float32Array(h));for(let E=0,w=p;E!==A;++E,w+=4)o.copy(f[E]).applyMatrix4(v,a),o.normal.toArray(d,w),d[w+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,d}}function Wv(r){let e=new WeakMap;function t(o,a){return a===Ra?o.mapping=Dr:a===Ia&&(o.mapping=Nr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ra||a===Ia)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kf(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}const as=4,mh=[.125,.215,.35,.446,.526,.582],pr=20,Oo=new uh,gh=new Ge;let zo=null,Wo=0,Go=0,Jo=!1;const fr=(1+Math.sqrt(5))/2,os=1/fr,vh=[new H(-fr,os,0),new H(fr,os,0),new H(-os,0,fr),new H(os,0,fr),new H(0,fr,-os),new H(0,fr,os),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){zo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,s,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Wo,Go),this._renderer.xr.enabled=Jo,e.scissorTest=!1,kn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:As,format:hi,colorSpace:Or,depthBuffer:!1},s=Ah(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gv(n)),this._blurMaterial=Jv(n,e,t)}return s}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,i,s){const n=new ii(90,1,t,i),o=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(gh),l.toneMapping=Oi,l.autoClear=!1;const f=new Oc({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new zt(new Ts,f);let p=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,p=!0):(f.color.copy(gh),p=!0);for(let A=0;A<6;A++){const d=A%3;d===0?(n.up.set(0,o[A],0),n.lookAt(a[A],0,0)):d===1?(n.up.set(0,0,o[A]),n.lookAt(0,a[A],0)):(n.up.set(0,o[A],0),n.lookAt(0,0,a[A]));const h=this._cubeSize;kn(s,d*h,A>2?h:0,h,h),l.setRenderTarget(s),p&&l.render(m,n),l.render(e,n)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=u,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Dr||e.mapping===Nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const n=s?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const l=this._cubeSize;kn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let n=1;n<s;n++){const o=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=vh[(s-n-1)%vh.length];this._blur(e,n-1,n,o,a)}t.autoClear=i}_blur(e,t,i,s,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",n),this._halfBlur(o,e,i,i,s,"longitudinal",n)}_halfBlur(e,t,i,s,n,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zt(this._lodPlanes[s],c),m=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*pr-1),A=n/g,d=isFinite(n)?1+Math.floor(u*A):pr;d>pr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${pr}`);const h=[];let v=0;for(let b=0;b<pr;++b){const U=b/A,y=Math.exp(-U*U/2);h.push(y),b===0?v+=y:b<d&&(v+=2*y)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;m.envMap.value=e.texture,m.samples.value=d,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:E}=this;m.dTheta.value=g,m.mipInt.value=E-i;const w=this._sizeLods[s],C=3*w*(s>E-as?s-E+as:0),S=4*(this._cubeSize-w);kn(t,C,S,3*w,2*w),l.setRenderTarget(t),l.render(f,Oo)}}function Gv(r){const e=[],t=[],i=[];let s=r;const n=r-as+1+mh.length;for(let o=0;o<n;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>r-as?l=mh[o-r+as-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,m=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,A=3,d=2,h=1,v=new Float32Array(A*g*p),E=new Float32Array(d*g*p),w=new Float32Array(h*g*p);for(let S=0;S<p;S++){const b=S%3*2/3-1,U=S>2?0:-1,y=[b,U,0,b+2/3,U,0,b+2/3,U+1,0,b,U,0,b+2/3,U+1,0,b,U+1,0];v.set(y,A*g*S),E.set(m,d*g*S);const _=[S,S,S,S,S,S];w.set(_,h*g*S)}const C=new mi;C.setAttribute("position",new wi(v,A)),C.setAttribute("uv",new wi(E,d)),C.setAttribute("faceIndex",new wi(w,h)),e.push(C),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ah(r,e,t){const i=new ar(r,e,t);return i.texture.mapping=qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kn(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function Jv(r,e,t){const i=new Float32Array(pr),s=new H(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function wh(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function yh(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function Zv(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ra||l===Ia,u=l===Dr||l===Nr;if(c||u){let f=e.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new _h(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new _h(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",n),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function n(a){const l=a.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Hv(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Xv(r,e,t,i){const s={},n=new WeakMap;function o(f){const m=f.target;m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id];const p=n.get(m);p&&(e.remove(p),n.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function l(f){const m=f.attributes;for(const p in m)e.update(m[p],r.ARRAY_BUFFER)}function c(f){const m=[],p=f.index,g=f.attributes.position;let A=0;if(p!==null){const v=p.array;A=p.version;for(let E=0,w=v.length;E<w;E+=3){const C=v[E+0],S=v[E+1],b=v[E+2];m.push(C,S,S,b,b,C)}}else if(g!==void 0){const v=g.array;A=g.version;for(let E=0,w=v.length/3-1;E<w;E+=3){const C=E+0,S=E+1,b=E+2;m.push(C,S,S,b,b,C)}}else return;const d=new(bc(m)?Wc:zc)(m,1);d.version=A;const h=n.get(f);h&&e.remove(h),n.set(f,d)}function u(f){const m=n.get(f);if(m){const p=f.index;p!==null&&m.version<p.version&&c(f)}else c(f);return n.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Yv(r,e,t){let i;function s(m){i=m}let n,o;function a(m){n=m.type,o=m.bytesPerElement}function l(m,p){r.drawElements(i,p,n,m*o),t.update(p,i,1)}function c(m,p,g){g!==0&&(r.drawElementsInstanced(i,p,n,m*o,g),t.update(p,i,g))}function u(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,n,m,0,g);let A=0;for(let d=0;d<g;d++)A+=p[d];t.update(A,i,1)}function f(m,p,g,A){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<m.length;h++)c(m[h]/o,p[h],A[h]);else{d.multiDrawElementsInstancedWEBGL(i,p,0,n,m,0,A,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v]*A[v];t.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function jv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(n/3);break;case r.LINES:t.lines+=a*(n/2);break;case r.LINE_STRIP:t.lines+=a*(n-1);break;case r.LINE_LOOP:t.lines+=a*n;break;case r.POINTS:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Kv(r,e,t){const i=new WeakMap,s=new gt;function n(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let m=i.get(a);if(m===void 0||m.count!==f){let p=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",p)};m!==void 0&&m.texture.dispose();const g=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),A===!0&&(w=2),d===!0&&(w=3);let C=a.attributes.position.count*w,S=1;C>e.maxTextureSize&&(S=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*S*4*f),U=new Mc(b,C,S,f);U.type=Ti,U.needsUpdate=!0;const y=w*4;for(let _=0;_<f;_++){const x=h[_],T=v[_],R=E[_],Q=C*S*4*_;for(let N=0;N<x.count;N++){const k=N*y;g===!0&&(s.fromBufferAttribute(x,N),b[Q+k+0]=s.x,b[Q+k+1]=s.y,b[Q+k+2]=s.z,b[Q+k+3]=0),A===!0&&(s.fromBufferAttribute(T,N),b[Q+k+4]=s.x,b[Q+k+5]=s.y,b[Q+k+6]=s.z,b[Q+k+7]=0),d===!0&&(s.fromBufferAttribute(R,N),b[Q+k+8]=s.x,b[Q+k+9]=s.y,b[Q+k+10]=s.z,b[Q+k+11]=R.itemSize===4?s.w:1)}}m={count:f,texture:U,size:new ze(C,S)},i.set(a,m),a.addEventListener("dispose",p)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let A=0;A<c.length;A++)p+=c[A];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:n}}function qv(r,e,t,i){let s=new WeakMap;function n(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:o}}const Sh=new Ft,Eh=new nh(1,1),bh=new Mc,xh=new Sf,Ch=new Kc,Uh=[],Th=[],Mh=new Float32Array(16),Rh=new Float32Array(9),Ih=new Float32Array(4);function ls(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let n=Uh[s];if(n===void 0&&(n=new Float32Array(s),Uh[s]=n),e!==0){i.toArray(n,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(n,a)}return n}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Pn(r,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function $v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function e0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function t0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function i0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function r0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Ih.set(i),r.uniformMatrix2fv(this.addr,!1,Ih),St(t,i)}}function s0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Rh.set(i),r.uniformMatrix3fv(this.addr,!1,Rh),St(t,i)}}function n0(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Mh.set(i),r.uniformMatrix4fv(this.addr,!1,Mh),St(t,i)}}function a0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function o0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2iv(this.addr,e),St(t,e)}}function l0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3iv(this.addr,e),St(t,e)}}function c0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4iv(this.addr,e),St(t,e)}}function h0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2uiv(this.addr,e),St(t,e)}}function d0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;r.uniform3uiv(this.addr,e),St(t,e)}}function p0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4uiv(this.addr,e),St(t,e)}}function f0(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let n;this.type===r.SAMPLER_2D_SHADOW?(Eh.compareFunction=yc,n=Eh):n=Sh,t.setTexture2D(e||n,s)}function m0(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||xh,s)}function g0(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ch,s)}function v0(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bh,s)}function _0(r){switch(r){case 5126:return $v;case 35664:return e0;case 35665:return t0;case 35666:return i0;case 35674:return r0;case 35675:return s0;case 35676:return n0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}function A0(r,e){r.uniform1fv(this.addr,e)}function w0(r,e){const t=ls(e,this.size,2);r.uniform2fv(this.addr,t)}function y0(r,e){const t=ls(e,this.size,3);r.uniform3fv(this.addr,t)}function S0(r,e){const t=ls(e,this.size,4);r.uniform4fv(this.addr,t)}function E0(r,e){const t=ls(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function b0(r,e){const t=ls(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function x0(r,e){const t=ls(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function C0(r,e){r.uniform1iv(this.addr,e)}function U0(r,e){r.uniform2iv(this.addr,e)}function T0(r,e){r.uniform3iv(this.addr,e)}function M0(r,e){r.uniform4iv(this.addr,e)}function R0(r,e){r.uniform1uiv(this.addr,e)}function I0(r,e){r.uniform2uiv(this.addr,e)}function F0(r,e){r.uniform3uiv(this.addr,e)}function B0(r,e){r.uniform4uiv(this.addr,e)}function Q0(r,e,t){const i=this.cache,s=e.length,n=Pn(t,s);yt(i,n)||(r.uniform1iv(this.addr,n),St(i,n));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Sh,n[o])}function L0(r,e,t){const i=this.cache,s=e.length,n=Pn(t,s);yt(i,n)||(r.uniform1iv(this.addr,n),St(i,n));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xh,n[o])}function D0(r,e,t){const i=this.cache,s=e.length,n=Pn(t,s);yt(i,n)||(r.uniform1iv(this.addr,n),St(i,n));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ch,n[o])}function N0(r,e,t){const i=this.cache,s=e.length,n=Pn(t,s);yt(i,n)||(r.uniform1iv(this.addr,n),St(i,n));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bh,n[o])}function k0(r){switch(r){case 5126:return A0;case 35664:return w0;case 35665:return y0;case 35666:return S0;case 35674:return E0;case 35675:return b0;case 35676:return x0;case 5124:case 35670:return C0;case 35667:case 35671:return U0;case 35668:case 35672:return T0;case 35669:case 35673:return M0;case 5125:return R0;case 36294:return I0;case 36295:return F0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return N0}}class P0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}}class V0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k0(t.type)}}class O0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let n=0,o=s.length;n!==o;++n){const a=s[n];a.setValue(e,t[a.id],i)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function Fh(r,e){r.seq.push(e),r.map[e.id]=e}function z0(r,e,t){const i=r.name,s=i.length;for(Ho.lastIndex=0;;){const n=Ho.exec(i),o=Ho.lastIndex;let a=n[1];const l=n[2]==="]",c=n[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fh(t,c===void 0?new P0(a,r,e):new V0(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new O0(a),Fh(t,u)),t=u}}}class Vn{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const n=e.getActiveUniform(t,s),o=e.getUniformLocation(t,n.name);z0(n,o,this)}}setValue(e,t,i,s){const n=this.map[t];n!==void 0&&n.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let n=0,o=t.length;n!==o;++n){const a=t[n],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,n=e.length;s!==n;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Bh(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const W0=37297;let G0=0;function J0(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=s;o<n;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Qh=new We;function Z0(r){je._getMatrix(Qh,je.workingColorSpace,r);const e=`mat3( ${Qh.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(r)){case on:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Lh(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(i&&s==="")return"";const n=/ERROR: 0:(\d+)/.exec(s);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+s+`

`+J0(r.getShaderSource(e),o)}else return s}function H0(r,e){const t=Z0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X0(r,e){let t;switch(e){case Zp:t="Linear";break;case Hp:t="Reinhard";break;case Xp:t="Cineon";break;case Yp:t="ACESFilmic";break;case Kp:t="AgX";break;case qp:t="Neutral";break;case jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const On=new H;function Y0(){je.getLuminanceCoefficients(On);const r=On.x.toFixed(4),e=On.y.toFixed(4),t=On.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function K0(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q0(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const n=r.getActiveAttrib(e,s),o=n.name;let a=1;n.type===r.FLOAT_MAT2&&(a=2),n.type===r.FLOAT_MAT3&&(a=3),n.type===r.FLOAT_MAT4&&(a=4),t[o]={type:n.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Fs(r){return r!==""}function Dh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(r){return r.replace($0,t_)}const e_=new Map;function t_(r,e){let t=Je[e];if(t===void 0){const i=e_.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(r){return r.replace(i_,r_)}function r_(r,e,t,i){let s="";for(let n=parseInt(e);n<parseInt(t);n++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function Ph(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function s_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function n_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dr:case Nr:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Nr&&(e="ENVMAP_MODE_REFRACTION"),e}function o_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ma:e="ENVMAP_BLENDING_MULTIPLY";break;case Gp:e="ENVMAP_BLENDING_MIX";break;case Jp:e="ENVMAP_BLENDING_ADD";break}return e}function l_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function c_(r,e,t,i){const s=r.getContext(),n=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=s_(t),c=n_(t),u=a_(t),f=o_(t),m=l_(t),p=j0(t),g=K0(n),A=s.createProgram();let d,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),h.length>0&&(h+=`
`)):(d=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),h=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Oi?X0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,H0("linearToOutputTexel",t.outputColorSpace),Y0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Xo(o),o=Dh(o,t),o=Nh(o,t),a=Xo(a),a=Dh(a,t),a=Nh(a,t),o=kh(o),a=kh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=v+d+o,w=v+h+a,C=Bh(s,s.VERTEX_SHADER,E),S=Bh(s,s.FRAGMENT_SHADER,w);s.attachShader(A,C),s.attachShader(A,S),t.index0AttributeName!==void 0?s.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function b(x){if(r.debug.checkShaderErrors){const T=s.getProgramInfoLog(A).trim(),R=s.getShaderInfoLog(C).trim(),Q=s.getShaderInfoLog(S).trim();let N=!0,k=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,A,C,S);else{const F=Lh(s,C,"vertex"),M=Lh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+T+`
`+F+`
`+M)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||Q==="")&&(k=!1);k&&(x.diagnostics={runnable:N,programLog:T,vertexShader:{log:R,prefix:d},fragmentShader:{log:Q,prefix:h}})}s.deleteShader(C),s.deleteShader(S),U=new Vn(s,A),y=q0(s,A)}let U;this.getUniforms=function(){return U===void 0&&b(this),U};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(A,W0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G0++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=C,this.fragmentShader=S,this}let h_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new d_(e),t.set(e,i)),i}}class d_{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}}function p_(r,e,t,i,s,n,o){const a=new Bc,l=new u_,c=new Set,u=[],f=s.logarithmicDepthBuffer,m=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,_,x,T,R){const Q=T.fog,N=R.geometry,k=y.isMeshStandardMaterial?T.environment:null,F=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),M=F&&F.mapping===qs?F.image.height:null,B=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const P=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,K=P!==void 0?P.length:0;let te=0;N.morphAttributes.position!==void 0&&(te=1),N.morphAttributes.normal!==void 0&&(te=2),N.morphAttributes.color!==void 0&&(te=3);let ce,W,X,ue;if(B){const tt=yi[B];ce=tt.vertexShader,W=tt.fragmentShader}else ce=y.vertexShader,W=y.fragmentShader,l.update(y),X=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);const ae=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),me=R.isInstancedMesh===!0,oe=R.isBatchedMesh===!0,we=!!y.map,ge=!!y.matcap,Fe=!!F,z=!!y.aoMap,qe=!!y.lightMap,Ne=!!y.bumpMap,V=!!y.normalMap,Y=!!y.displacementMap,fe=!!y.emissiveMap,ie=!!y.metalnessMap,D=!!y.roughnessMap,I=y.anisotropy>0,G=y.clearcoat>0,q=y.dispersion>0,se=y.iridescence>0,ne=y.sheen>0,xe=y.transmission>0,ye=I&&!!y.anisotropyMap,Me=G&&!!y.clearcoatMap,Ke=G&&!!y.clearcoatNormalMap,ve=G&&!!y.clearcoatRoughnessMap,Ue=se&&!!y.iridescenceMap,Be=se&&!!y.iridescenceThicknessMap,Le=ne&&!!y.sheenColorMap,be=ne&&!!y.sheenRoughnessMap,Ze=!!y.specularMap,pe=!!y.specularColorMap,Se=!!y.specularIntensityMap,O=xe&&!!y.transmissionMap,le=xe&&!!y.thicknessMap,j=!!y.gradientMap,re=!!y.alphaMap,_e=y.alphaTest>0,Ae=!!y.alphaHash,He=!!y.extensions;let dt=Oi;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(dt=r.toneMapping);const _t={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:W,defines:y.defines,customVertexShaderID:X,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:oe,batchingColor:oe&&R._colorsTexture!==null,instancing:me,instancingColor:me&&R.instanceColor!==null,instancingMorph:me&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Or,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:ge,envMap:Fe,envMapMode:Fe&&F.mapping,envMapCubeUVHeight:M,aoMap:z,lightMap:qe,bumpMap:Ne,normalMap:V,displacementMap:m&&Y,emissiveMap:fe,normalMapObjectSpace:V&&y.normalMapType===rf,normalMapTangentSpace:V&&y.normalMapType===Ac,metalnessMap:ie,roughnessMap:D,anisotropy:I,anisotropyMap:ye,clearcoat:G,clearcoatMap:Me,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ve,dispersion:q,iridescence:se,iridescenceMap:Ue,iridescenceThicknessMap:Be,sheen:ne,sheenColorMap:Le,sheenRoughnessMap:be,specularMap:Ze,specularColorMap:pe,specularIntensityMap:Se,transmission:xe,transmissionMap:O,thicknessMap:le,gradientMap:j,opaque:y.transparent===!1&&y.blending===Qr&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:_e,alphaHash:Ae,combine:y.combine,mapUv:we&&A(y.map.channel),aoMapUv:z&&A(y.aoMap.channel),lightMapUv:qe&&A(y.lightMap.channel),bumpMapUv:Ne&&A(y.bumpMap.channel),normalMapUv:V&&A(y.normalMap.channel),displacementMapUv:Y&&A(y.displacementMap.channel),emissiveMapUv:fe&&A(y.emissiveMap.channel),metalnessMapUv:ie&&A(y.metalnessMap.channel),roughnessMapUv:D&&A(y.roughnessMap.channel),anisotropyMapUv:ye&&A(y.anisotropyMap.channel),clearcoatMapUv:Me&&A(y.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&A(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&A(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&A(y.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&A(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&A(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&A(y.sheenRoughnessMap.channel),specularMapUv:Ze&&A(y.specularMap.channel),specularColorMapUv:pe&&A(y.specularColorMap.channel),specularIntensityMapUv:Se&&A(y.specularIntensityMap.channel),transmissionMapUv:O&&A(y.transmissionMap.channel),thicknessMapUv:le&&A(y.thicknessMap.channel),alphaMapUv:re&&A(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(V||I),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(we||re),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:he,skinning:R.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:te,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&x.length>0,shadowMapType:r.shadowMap.type,toneMapping:dt,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:fe&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ci,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:He&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&y.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function h(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const x in y.defines)_.push(x),_.push(y.defines[x]);return y.isRawShaderMaterial===!1&&(v(_,y),E(_,y),_.push(r.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function v(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function E(y,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),y.push(a.mask)}function w(y){const _=g[y.type];let x;if(_){const T=yi[_];x=Qf.clone(T.uniforms)}else x=y.uniforms;return x}function C(y,_){let x;for(let T=0,R=u.length;T<R;T++){const Q=u[T];if(Q.cacheKey===_){x=Q,++x.usedTimes;break}}return x===void 0&&(x=new c_(r,_,y,n),u.push(x)),x}function S(y){if(--y.usedTimes===0){const _=u.indexOf(y);u[_]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function U(){l.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:w,acquireProgram:C,releaseProgram:S,releaseShaderCache:b,programs:u,dispose:U}}function f_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function s(o,a,l){r.get(o)[a]=l}function n(){r=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:n}}function m_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Vh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Oh(){const r=[];let e=0;const t=[],i=[],s=[];function n(){e=0,t.length=0,i.length=0,s.length=0}function o(f,m,p,g,A,d){let h=r[e];return h===void 0?(h={id:f.id,object:f,geometry:m,material:p,groupOrder:g,renderOrder:f.renderOrder,z:A,group:d},r[e]=h):(h.id=f.id,h.object=f,h.geometry=m,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=A,h.group=d),e++,h}function a(f,m,p,g,A,d){const h=o(f,m,p,g,A,d);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(f,m,p,g,A,d){const h=o(f,m,p,g,A,d);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(f,m){t.length>1&&t.sort(f||m_),i.length>1&&i.sort(m||Vh),s.length>1&&s.sort(m||Vh)}function u(){for(let f=e,m=r.length;f<m;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:n,push:a,unshift:l,finish:u,sort:c}}function g_(){let r=new WeakMap;function e(i,s){const n=r.get(i);let o;return n===void 0?(o=new Oh,r.set(i,[o])):s>=n.length?(o=new Oh,n.push(o)):o=n[s],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function v_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ge};break;case"SpotLight":t={position:new H,direction:new H,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function __(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let A_=0;function w_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function y_(r){const e=new v_,t=__(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,n=new ht,o=new ht;function a(c){let u=0,f=0,m=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,A=0,d=0,h=0,v=0,E=0,w=0,C=0,S=0,b=0;c.sort(w_);for(let y=0,_=c.length;y<_;y++){const x=c[y],T=x.color,R=x.intensity,Q=x.distance,N=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=T.r*R,f+=T.g*R,m+=T.b*R;else if(x.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(x.sh.coefficients[k],R);b++}else if(x.isDirectionalLight){const k=e.get(x);if(k.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const F=x.shadow,M=t.get(x);M.shadowIntensity=F.intensity,M.shadowBias=F.bias,M.shadowNormalBias=F.normalBias,M.shadowRadius=F.radius,M.shadowMapSize=F.mapSize,i.directionalShadow[p]=M,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=x.shadow.matrix,v++}i.directional[p]=k,p++}else if(x.isSpotLight){const k=e.get(x);k.position.setFromMatrixPosition(x.matrixWorld),k.color.copy(T).multiplyScalar(R),k.distance=Q,k.coneCos=Math.cos(x.angle),k.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),k.decay=x.decay,i.spot[A]=k;const F=x.shadow;if(x.map&&(i.spotLightMap[C]=x.map,C++,F.updateMatrices(x),x.castShadow&&S++),i.spotLightMatrix[A]=F.matrix,x.castShadow){const M=t.get(x);M.shadowIntensity=F.intensity,M.shadowBias=F.bias,M.shadowNormalBias=F.normalBias,M.shadowRadius=F.radius,M.shadowMapSize=F.mapSize,i.spotShadow[A]=M,i.spotShadowMap[A]=N,w++}A++}else if(x.isRectAreaLight){const k=e.get(x);k.color.copy(T).multiplyScalar(R),k.halfWidth.set(x.width*.5,0,0),k.halfHeight.set(0,x.height*.5,0),i.rectArea[d]=k,d++}else if(x.isPointLight){const k=e.get(x);if(k.color.copy(x.color).multiplyScalar(x.intensity),k.distance=x.distance,k.decay=x.decay,x.castShadow){const F=x.shadow,M=t.get(x);M.shadowIntensity=F.intensity,M.shadowBias=F.bias,M.shadowNormalBias=F.normalBias,M.shadowRadius=F.radius,M.shadowMapSize=F.mapSize,M.shadowCameraNear=F.camera.near,M.shadowCameraFar=F.camera.far,i.pointShadow[g]=M,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=x.shadow.matrix,E++}i.point[g]=k,g++}else if(x.isHemisphereLight){const k=e.get(x);k.skyColor.copy(x.color).multiplyScalar(R),k.groundColor.copy(x.groundColor).multiplyScalar(R),i.hemi[h]=k,h++}}d>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==A||U.rectAreaLength!==d||U.hemiLength!==h||U.numDirectionalShadows!==v||U.numPointShadows!==E||U.numSpotShadows!==w||U.numSpotMaps!==C||U.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=A,i.rectArea.length=d,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+C-S,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=b,U.directionalLength=p,U.pointLength=g,U.spotLength=A,U.rectAreaLength=d,U.hemiLength=h,U.numDirectionalShadows=v,U.numPointShadows=E,U.numSpotShadows=w,U.numSpotMaps=C,U.numLightProbes=b,i.version=A_++)}function l(c,u){let f=0,m=0,p=0,g=0,A=0;const d=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const E=c[h];if(E.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(E.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),p++}else if(E.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),o.identity(),n.copy(E.matrixWorld),n.premultiply(d),o.extractRotation(n),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const w=i.hemi[A];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),A++}}}return{setup:a,setupView:l,state:i}}function zh(r){const e=new y_(r),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function n(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:n,pushShadow:o}}function S_(r){let e=new WeakMap;function t(s,n=0){const o=e.get(s);let a;return o===void 0?(a=new zh(r),e.set(s,[a])):n>=o.length?(a=new zh(r),o.push(a)):a=o[n],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`;function x_(r,e,t){let i=new Lo;const s=new ze,n=new ze,o=new gt,a=new Wf({depthPacking:tf}),l=new Gf,c={},u=t.maxTextureSize,f={[xi]:Vt,[Vt]:xi,[Ci]:Ci},m=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:E_,fragmentShader:b_}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const g=new mi;g.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new zt(g,m),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let h=this.type;this.render=function(S,b,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;const y=r.getRenderTarget(),_=r.getActiveCubeFace(),x=r.getActiveMipmapLevel(),T=r.state;T.setBlending(Vi),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const R=h!==bi&&this.type===bi,Q=h===bi&&this.type!==bi;for(let N=0,k=S.length;N<k;N++){const F=S[N],M=F.shadow;if(M===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(M.autoUpdate===!1&&M.needsUpdate===!1)continue;s.copy(M.mapSize);const B=M.getFrameExtents();if(s.multiply(B),n.copy(M.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(n.x=Math.floor(u/B.x),s.x=n.x*B.x,M.mapSize.x=n.x),s.y>u&&(n.y=Math.floor(u/B.y),s.y=n.y*B.y,M.mapSize.y=n.y)),M.map===null||R===!0||Q===!0){const K=this.type!==bi?{minFilter:ci,magFilter:ci}:{};M.map!==null&&M.map.dispose(),M.map=new ar(s.x,s.y,K),M.map.texture.name=F.name+".shadowMap",M.camera.updateProjectionMatrix()}r.setRenderTarget(M.map),r.clear();const P=M.getViewportCount();for(let K=0;K<P;K++){const te=M.getViewport(K);o.set(n.x*te.x,n.y*te.y,n.x*te.z,n.y*te.w),T.viewport(o),M.updateMatrices(F,K),i=M.getFrustum(),w(b,U,M.camera,F,this.type)}M.isPointLightShadow!==!0&&this.type===bi&&v(M,U),M.needsUpdate=!1}h=this.type,d.needsUpdate=!1,r.setRenderTarget(y,_,x)};function v(S,b){const U=e.update(A);m.defines.VSM_SAMPLES!==S.blurSamples&&(m.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ar(s.x,s.y)),m.uniforms.shadow_pass.value=S.map.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(b,null,U,m,A,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(b,null,U,p,A,null)}function E(S,b,U,y){let _=null;const x=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(x!==void 0)_=x;else if(_=U.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const T=_.uuid,R=b.uuid;let Q=c[T];Q===void 0&&(Q={},c[T]=Q);let N=Q[R];N===void 0&&(N=_.clone(),Q[R]=N,b.addEventListener("dispose",C)),_=N}if(_.visible=b.visible,_.wireframe=b.wireframe,y===bi?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:f[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const T=r.properties.get(_);T.light=U}return _}function w(S,b,U,y,_){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===bi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);const T=e.update(S),R=S.material;if(Array.isArray(R)){const Q=T.groups;for(let N=0,k=Q.length;N<k;N++){const F=Q[N],M=R[F.materialIndex];if(M&&M.visible){const B=E(S,M,y,_);S.onBeforeShadow(r,S,b,U,T,B,F),r.renderBufferDirect(U,null,T,B,S,F),S.onAfterShadow(r,S,b,U,T,B,F)}}}else if(R.visible){const Q=E(S,R,y,_);S.onBeforeShadow(r,S,b,U,T,Q,null),r.renderBufferDirect(U,null,T,Q,S,null),S.onAfterShadow(r,S,b,U,T,Q,null)}}const x=S.children;for(let T=0,R=x.length;T<R;T++)w(x[T],b,U,y,_)}function C(S){S.target.removeEventListener("dispose",C);for(const b in c){const U=c[b],y=S.target.uuid;y in U&&(U[y].dispose(),delete U[y])}}}const C_={[Sa]:Ea,[ba]:Ua,[xa]:Ta,[Lr]:Ca,[Ea]:Sa,[Ua]:ba,[Ta]:xa,[Ca]:Lr};function U_(r,e){function t(){let O=!1;const le=new gt;let j=null;const re=new gt(0,0,0,0);return{setMask:function(_e){j!==_e&&!O&&(r.colorMask(_e,_e,_e,_e),j=_e)},setLocked:function(_e){O=_e},setClear:function(_e,Ae,He,dt,_t){_t===!0&&(_e*=dt,Ae*=dt,He*=dt),le.set(_e,Ae,He,dt),re.equals(le)===!1&&(r.clearColor(_e,Ae,He,dt),re.copy(le))},reset:function(){O=!1,j=null,re.set(-1,0,0,0)}}}function i(){let O=!1,le=!1,j=null,re=null,_e=null;return{setReversed:function(Ae){if(le!==Ae){const He=e.get("EXT_clip_control");le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const dt=_e;_e=null,this.setClear(dt)}le=Ae},getReversed:function(){return le},setTest:function(Ae){Ae?ae(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(Ae){j!==Ae&&!O&&(r.depthMask(Ae),j=Ae)},setFunc:function(Ae){if(le&&(Ae=C_[Ae]),re!==Ae){switch(Ae){case Sa:r.depthFunc(r.NEVER);break;case Ea:r.depthFunc(r.ALWAYS);break;case ba:r.depthFunc(r.LESS);break;case Lr:r.depthFunc(r.LEQUAL);break;case xa:r.depthFunc(r.EQUAL);break;case Ca:r.depthFunc(r.GEQUAL);break;case Ua:r.depthFunc(r.GREATER);break;case Ta:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){_e!==Ae&&(le&&(Ae=1-Ae),r.clearDepth(Ae),_e=Ae)},reset:function(){O=!1,j=null,re=null,_e=null,le=!1}}}function s(){let O=!1,le=null,j=null,re=null,_e=null,Ae=null,He=null,dt=null,_t=null;return{setTest:function(tt){O||(tt?ae(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(tt){le!==tt&&!O&&(r.stencilMask(tt),le=tt)},setFunc:function(tt,jt,Kt){(j!==tt||re!==jt||_e!==Kt)&&(r.stencilFunc(tt,jt,Kt),j=tt,re=jt,_e=Kt)},setOp:function(tt,jt,Kt){(Ae!==tt||He!==jt||dt!==Kt)&&(r.stencilOp(tt,jt,Kt),Ae=tt,He=jt,dt=Kt)},setLocked:function(tt){O=tt},setClear:function(tt){_t!==tt&&(r.clearStencil(tt),_t=tt)},reset:function(){O=!1,le=null,j=null,re=null,_e=null,Ae=null,He=null,dt=null,_t=null}}}const n=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},m=new WeakMap,p=[],g=null,A=!1,d=null,h=null,v=null,E=null,w=null,C=null,S=null,b=new Ge(0,0,0),U=0,y=!1,_=null,x=null,T=null,R=null,Q=null;const N=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const M=r.getParameter(r.VERSION);M.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(M)[1]),k=F>=1):M.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),k=F>=2);let B=null,P={};const K=r.getParameter(r.SCISSOR_BOX),te=r.getParameter(r.VIEWPORT),ce=new gt().fromArray(K),W=new gt().fromArray(te);function X(O,le,j,re){const _e=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(O,Ae),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<j;He++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(le+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return Ae}const ue={};ue[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(r.DEPTH_TEST),o.setFunc(Lr),Ne(!1),V(rc),ae(r.CULL_FACE),z(Vi);function ae(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function he(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function me(O,le){return f[O]!==le?(r.bindFramebuffer(O,le),f[O]=le,O===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=le),O===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=le),!0):!1}function oe(O,le){let j=p,re=!1;if(O){j=m.get(le),j===void 0&&(j=[],m.set(le,j));const _e=O.textures;if(j.length!==_e.length||j[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,He=_e.length;Ae<He;Ae++)j[Ae]=r.COLOR_ATTACHMENT0+Ae;j.length=_e.length,re=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,re=!0);re&&r.drawBuffers(j)}function we(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const ge={[tr]:r.FUNC_ADD,[Up]:r.FUNC_SUBTRACT,[Tp]:r.FUNC_REVERSE_SUBTRACT};ge[Mp]=r.MIN,ge[Rp]=r.MAX;const Fe={[Ip]:r.ZERO,[Fp]:r.ONE,[Bp]:r.SRC_COLOR,[wa]:r.SRC_ALPHA,[Pp]:r.SRC_ALPHA_SATURATE,[Np]:r.DST_COLOR,[Lp]:r.DST_ALPHA,[Qp]:r.ONE_MINUS_SRC_COLOR,[ya]:r.ONE_MINUS_SRC_ALPHA,[kp]:r.ONE_MINUS_DST_COLOR,[Dp]:r.ONE_MINUS_DST_ALPHA,[Vp]:r.CONSTANT_COLOR,[Op]:r.ONE_MINUS_CONSTANT_COLOR,[zp]:r.CONSTANT_ALPHA,[Wp]:r.ONE_MINUS_CONSTANT_ALPHA};function z(O,le,j,re,_e,Ae,He,dt,_t,tt){if(O===Vi){A===!0&&(he(r.BLEND),A=!1);return}if(A===!1&&(ae(r.BLEND),A=!0),O!==Cp){if(O!==d||tt!==y){if((h!==tr||w!==tr)&&(r.blendEquation(r.FUNC_ADD),h=tr,w=tr),tt)switch(O){case Qr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nc:r.blendFunc(r.ONE,r.ONE);break;case ac:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case oc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Qr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ac:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case oc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,E=null,C=null,S=null,b.set(0,0,0),U=0,d=O,y=tt}return}_e=_e||le,Ae=Ae||j,He=He||re,(le!==h||_e!==w)&&(r.blendEquationSeparate(ge[le],ge[_e]),h=le,w=_e),(j!==v||re!==E||Ae!==C||He!==S)&&(r.blendFuncSeparate(Fe[j],Fe[re],Fe[Ae],Fe[He]),v=j,E=re,C=Ae,S=He),(dt.equals(b)===!1||_t!==U)&&(r.blendColor(dt.r,dt.g,dt.b,_t),b.copy(dt),U=_t),d=O,y=!1}function qe(O,le){O.side===Ci?he(r.CULL_FACE):ae(r.CULL_FACE);let j=O.side===Vt;le&&(j=!j),Ne(j),O.blending===Qr&&O.transparent===!1?z(Vi):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),n.setMask(O.colorWrite);const re=O.stencilWrite;a.setTest(re),re&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(O){_!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),_=O)}function V(O){O!==Ep?(ae(r.CULL_FACE),O!==x&&(O===rc?r.cullFace(r.BACK):O===bp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),x=O}function Y(O){O!==T&&(k&&r.lineWidth(O),T=O)}function fe(O,le,j){O?(ae(r.POLYGON_OFFSET_FILL),(R!==le||Q!==j)&&(r.polygonOffset(le,j),R=le,Q=j)):he(r.POLYGON_OFFSET_FILL)}function ie(O){O?ae(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function D(O){O===void 0&&(O=r.TEXTURE0+N-1),B!==O&&(r.activeTexture(O),B=O)}function I(O,le,j){j===void 0&&(B===null?j=r.TEXTURE0+N-1:j=B);let re=P[j];re===void 0&&(re={type:void 0,texture:void 0},P[j]=re),(re.type!==O||re.texture!==le)&&(B!==j&&(r.activeTexture(j),B=j),r.bindTexture(O,le||ue[O]),re.type=O,re.texture=le)}function G(){const O=P[B];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(O){ce.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function be(O){W.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),W.copy(O))}function Ze(O,le){let j=c.get(le);j===void 0&&(j=new WeakMap,c.set(le,j));let re=j.get(O);re===void 0&&(re=r.getUniformBlockIndex(le,O.name),j.set(O,re))}function pe(O,le){const j=c.get(le).get(O);l.get(le)!==j&&(r.uniformBlockBinding(le,j,O.__bindingPointIndex),l.set(le,j))}function Se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},B=null,P={},f={},m=new WeakMap,p=[],g=null,A=!1,d=null,h=null,v=null,E=null,w=null,C=null,S=null,b=new Ge(0,0,0),U=0,y=!1,_=null,x=null,T=null,R=null,Q=null,ce.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),n.reset(),o.reset(),a.reset()}return{buffers:{color:n,depth:o,stencil:a},enable:ae,disable:he,bindFramebuffer:me,drawBuffers:oe,useProgram:we,setBlending:z,setMaterial:qe,setFlipSided:Ne,setCullFace:V,setLineWidth:Y,setPolygonOffset:fe,setScissorTest:ie,activeTexture:D,bindTexture:I,unbindTexture:G,compressedTexImage2D:q,compressedTexImage3D:se,texImage2D:Ue,texImage3D:Be,updateUBOMapping:Ze,uniformBlockBinding:pe,texStorage2D:Ke,texStorage3D:ve,texSubImage2D:ne,texSubImage3D:xe,compressedTexSubImage2D:ye,compressedTexSubImage3D:Me,scissor:Le,viewport:be,reset:Se}}function T_(r,e,t,i,s,n,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let f;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,I){return p?new OffscreenCanvas(D,I):Ss("canvas")}function A(D,I,G){let q=1;const se=ie(D);if((se.width>G||se.height>G)&&(q=G/Math.max(se.width,se.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ne=Math.floor(q*se.width),xe=Math.floor(q*se.height);f===void 0&&(f=g(ne,xe));const ye=I?g(ne,xe):f;return ye.width=ne,ye.height=xe,ye.getContext("2d").drawImage(D,0,0,ne,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ne+"x"+xe+")."),ye}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),D;return D}function d(D){return D.generateMipmaps}function h(D){r.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(D,I,G,q,se=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ne=I;if(I===r.RED&&(G===r.FLOAT&&(ne=r.R32F),G===r.HALF_FLOAT&&(ne=r.R16F),G===r.UNSIGNED_BYTE&&(ne=r.R8)),I===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ne=r.R8UI),G===r.UNSIGNED_SHORT&&(ne=r.R16UI),G===r.UNSIGNED_INT&&(ne=r.R32UI),G===r.BYTE&&(ne=r.R8I),G===r.SHORT&&(ne=r.R16I),G===r.INT&&(ne=r.R32I)),I===r.RG&&(G===r.FLOAT&&(ne=r.RG32F),G===r.HALF_FLOAT&&(ne=r.RG16F),G===r.UNSIGNED_BYTE&&(ne=r.RG8)),I===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ne=r.RG8UI),G===r.UNSIGNED_SHORT&&(ne=r.RG16UI),G===r.UNSIGNED_INT&&(ne=r.RG32UI),G===r.BYTE&&(ne=r.RG8I),G===r.SHORT&&(ne=r.RG16I),G===r.INT&&(ne=r.RG32I)),I===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),G===r.UNSIGNED_INT&&(ne=r.RGB32UI),G===r.BYTE&&(ne=r.RGB8I),G===r.SHORT&&(ne=r.RGB16I),G===r.INT&&(ne=r.RGB32I)),I===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),G===r.UNSIGNED_INT&&(ne=r.RGBA32UI),G===r.BYTE&&(ne=r.RGBA8I),G===r.SHORT&&(ne=r.RGBA16I),G===r.INT&&(ne=r.RGBA32I)),I===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),I===r.RGBA){const xe=se?on:je.getTransfer(q);G===r.FLOAT&&(ne=r.RGBA32F),G===r.HALF_FLOAT&&(ne=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ne=xe===it?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(D,I){let G;return D?I===null||I===sr||I===kr?G=r.DEPTH24_STENCIL8:I===Ti?G=r.DEPTH32F_STENCIL8:I===_s&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===sr||I===kr?G=r.DEPTH_COMPONENT24:I===Ti?G=r.DEPTH_COMPONENT32F:I===_s&&(G=r.DEPTH_COMPONENT16),G}function C(D,I){return d(D)===!0||D.isFramebufferTexture&&D.minFilter!==ci&&D.minFilter!==_i?Math.log2(Math.max(I.width,I.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?I.mipmaps.length:1}function S(D){const I=D.target;I.removeEventListener("dispose",S),U(I),I.isVideoTexture&&u.delete(I)}function b(D){const I=D.target;I.removeEventListener("dispose",b),_(I)}function U(D){const I=i.get(D);if(I.__webglInit===void 0)return;const G=D.source,q=m.get(G);if(q){const se=q[I.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(D),Object.keys(q).length===0&&m.delete(G)}i.remove(D)}function y(D){const I=i.get(D);r.deleteTexture(I.__webglTexture);const G=D.source,q=m.get(G);delete q[I.__cacheKey],o.memory.textures--}function _(D){const I=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(I.__webglFramebuffer[q]))for(let se=0;se<I.__webglFramebuffer[q].length;se++)r.deleteFramebuffer(I.__webglFramebuffer[q][se]);else r.deleteFramebuffer(I.__webglFramebuffer[q]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[q])}else{if(Array.isArray(I.__webglFramebuffer))for(let q=0;q<I.__webglFramebuffer.length;q++)r.deleteFramebuffer(I.__webglFramebuffer[q]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let q=0;q<I.__webglColorRenderbuffer.length;q++)I.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[q]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const G=D.textures;for(let q=0,se=G.length;q<se;q++){const ne=i.get(G[q]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(G[q])}i.remove(D)}let x=0;function T(){x=0}function R(){const D=x;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),x+=1,D}function Q(D){const I=[];return I.push(D.wrapS),I.push(D.wrapT),I.push(D.wrapR||0),I.push(D.magFilter),I.push(D.minFilter),I.push(D.anisotropy),I.push(D.internalFormat),I.push(D.format),I.push(D.type),I.push(D.generateMipmaps),I.push(D.premultiplyAlpha),I.push(D.flipY),I.push(D.unpackAlignment),I.push(D.colorSpace),I.join()}function N(D,I){const G=i.get(D);if(D.isVideoTexture&&Y(D),D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){const q=D.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(G,D,I);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+I)}function k(D,I){const G=i.get(D);if(D.version>0&&G.__version!==D.version){W(G,D,I);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+I)}function F(D,I){const G=i.get(D);if(D.version>0&&G.__version!==D.version){W(G,D,I);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+I)}function M(D,I){const G=i.get(D);if(D.version>0&&G.__version!==D.version){X(G,D,I);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+I)}const B={[$s]:r.REPEAT,[ir]:r.CLAMP_TO_EDGE,[Fa]:r.MIRRORED_REPEAT},P={[ci]:r.NEAREST,[$p]:r.NEAREST_MIPMAP_NEAREST,[en]:r.NEAREST_MIPMAP_LINEAR,[_i]:r.LINEAR,[Ba]:r.LINEAR_MIPMAP_NEAREST,[rr]:r.LINEAR_MIPMAP_LINEAR},K={[sf]:r.NEVER,[hf]:r.ALWAYS,[nf]:r.LESS,[yc]:r.LEQUAL,[af]:r.EQUAL,[cf]:r.GEQUAL,[of]:r.GREATER,[lf]:r.NOTEQUAL};function te(D,I){if(I.type===Ti&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===_i||I.magFilter===Ba||I.magFilter===en||I.magFilter===rr||I.minFilter===_i||I.minFilter===Ba||I.minFilter===en||I.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,B[I.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,B[I.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,B[I.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,P[I.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,P[I.minFilter]),I.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,K[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===ci||I.minFilter!==en&&I.minFilter!==rr||I.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||i.get(I).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),i.get(I).__currentAnisotropy=I.anisotropy}}}function ce(D,I){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,I.addEventListener("dispose",S));const q=I.source;let se=m.get(q);se===void 0&&(se={},m.set(q,se));const ne=Q(I);if(ne!==D.__cacheKey){se[ne]===void 0&&(se[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[ne].usedTimes++;const xe=se[D.__cacheKey];xe!==void 0&&(se[D.__cacheKey].usedTimes--,xe.usedTimes===0&&y(I)),D.__cacheKey=ne,D.__webglTexture=se[ne].texture}return G}function W(D,I,G){let q=r.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),I.isData3DTexture&&(q=r.TEXTURE_3D);const se=ce(D,I),ne=I.source;t.bindTexture(q,D.__webglTexture,r.TEXTURE0+G);const xe=i.get(ne);if(ne.version!==xe.__version||se===!0){t.activeTexture(r.TEXTURE0+G);const ye=je.getPrimaries(je.workingColorSpace),Me=I.colorSpace===zi?null:je.getPrimaries(I.colorSpace),Ke=I.colorSpace===zi||ye===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,I.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,I.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ve=A(I.image,!1,s.maxTextureSize);ve=fe(I,ve);const Ue=n.convert(I.format,I.colorSpace),Be=n.convert(I.type);let Le=E(I.internalFormat,Ue,Be,I.colorSpace,I.isVideoTexture);te(q,I);let be;const Ze=I.mipmaps,pe=I.isVideoTexture!==!0,Se=xe.__version===void 0||se===!0,O=ne.dataReady,le=C(I,ve);if(I.isDepthTexture)Le=w(I.format===Vr,I.type),Se&&(pe?t.texStorage2D(r.TEXTURE_2D,1,Le,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,Le,ve.width,ve.height,0,Ue,Be,null));else if(I.isDataTexture)if(Ze.length>0){pe&&Se&&t.texStorage2D(r.TEXTURE_2D,le,Le,Ze[0].width,Ze[0].height);for(let j=0,re=Ze.length;j<re;j++)be=Ze[j],pe?O&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,be.width,be.height,Ue,Be,be.data):t.texImage2D(r.TEXTURE_2D,j,Le,be.width,be.height,0,Ue,Be,be.data);I.generateMipmaps=!1}else pe?(Se&&t.texStorage2D(r.TEXTURE_2D,le,Le,ve.width,ve.height),O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,Ue,Be,ve.data)):t.texImage2D(r.TEXTURE_2D,0,Le,ve.width,ve.height,0,Ue,Be,ve.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){pe&&Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Le,Ze[0].width,Ze[0].height,ve.depth);for(let j=0,re=Ze.length;j<re;j++)if(be=Ze[j],I.format!==hi)if(Ue!==null)if(pe){if(O)if(I.layerUpdates.size>0){const _e=ph(be.width,be.height,I.format,I.type);for(const Ae of I.layerUpdates){const He=be.data.subarray(Ae*_e/be.data.BYTES_PER_ELEMENT,(Ae+1)*_e/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,Ae,be.width,be.height,1,Ue,He)}I.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,ve.depth,Ue,be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Le,be.width,be.height,ve.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?O&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,ve.depth,Ue,Be,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,j,Le,be.width,be.height,ve.depth,0,Ue,Be,be.data)}else{pe&&Se&&t.texStorage2D(r.TEXTURE_2D,le,Le,Ze[0].width,Ze[0].height);for(let j=0,re=Ze.length;j<re;j++)be=Ze[j],I.format!==hi?Ue!==null?pe?O&&t.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,be.width,be.height,Ue,be.data):t.compressedTexImage2D(r.TEXTURE_2D,j,Le,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?O&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,be.width,be.height,Ue,Be,be.data):t.texImage2D(r.TEXTURE_2D,j,Le,be.width,be.height,0,Ue,Be,be.data)}else if(I.isDataArrayTexture)if(pe){if(Se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Le,ve.width,ve.height,ve.depth),O)if(I.layerUpdates.size>0){const j=ph(ve.width,ve.height,I.format,I.type);for(const re of I.layerUpdates){const _e=ve.data.subarray(re*j/ve.data.BYTES_PER_ELEMENT,(re+1)*j/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,re,ve.width,ve.height,1,Ue,Be,_e)}I.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Be,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ve.width,ve.height,ve.depth,0,Ue,Be,ve.data);else if(I.isData3DTexture)pe?(Se&&t.texStorage3D(r.TEXTURE_3D,le,Le,ve.width,ve.height,ve.depth),O&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Be,ve.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ve.width,ve.height,ve.depth,0,Ue,Be,ve.data);else if(I.isFramebufferTexture){if(Se)if(pe)t.texStorage2D(r.TEXTURE_2D,le,Le,ve.width,ve.height);else{let j=ve.width,re=ve.height;for(let _e=0;_e<le;_e++)t.texImage2D(r.TEXTURE_2D,_e,Le,j,re,0,Ue,Be,null),j>>=1,re>>=1}}else if(Ze.length>0){if(pe&&Se){const j=ie(Ze[0]);t.texStorage2D(r.TEXTURE_2D,le,Le,j.width,j.height)}for(let j=0,re=Ze.length;j<re;j++)be=Ze[j],pe?O&&t.texSubImage2D(r.TEXTURE_2D,j,0,0,Ue,Be,be):t.texImage2D(r.TEXTURE_2D,j,Le,Ue,Be,be);I.generateMipmaps=!1}else if(pe){if(Se){const j=ie(ve);t.texStorage2D(r.TEXTURE_2D,le,Le,j.width,j.height)}O&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,Be,ve)}else t.texImage2D(r.TEXTURE_2D,0,Le,Ue,Be,ve);d(I)&&h(q),xe.__version=ne.version,I.onUpdate&&I.onUpdate(I)}D.__version=I.version}function X(D,I,G){if(I.image.length!==6)return;const q=ce(D,I),se=I.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+G);const ne=i.get(se);if(se.version!==ne.__version||q===!0){t.activeTexture(r.TEXTURE0+G);const xe=je.getPrimaries(je.workingColorSpace),ye=I.colorSpace===zi?null:je.getPrimaries(I.colorSpace),Me=I.colorSpace===zi||xe===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,I.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,I.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ke=I.isCompressedTexture||I.image[0].isCompressedTexture,ve=I.image[0]&&I.image[0].isDataTexture,Ue=[];for(let re=0;re<6;re++)!Ke&&!ve?Ue[re]=A(I.image[re],!0,s.maxCubemapSize):Ue[re]=ve?I.image[re].image:I.image[re],Ue[re]=fe(I,Ue[re]);const Be=Ue[0],Le=n.convert(I.format,I.colorSpace),be=n.convert(I.type),Ze=E(I.internalFormat,Le,be,I.colorSpace),pe=I.isVideoTexture!==!0,Se=ne.__version===void 0||q===!0,O=se.dataReady;let le=C(I,Be);te(r.TEXTURE_CUBE_MAP,I);let j;if(Ke){pe&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Ze,Be.width,Be.height);for(let re=0;re<6;re++){j=Ue[re].mipmaps;for(let _e=0;_e<j.length;_e++){const Ae=j[_e];I.format!==hi?Le!==null?pe?O&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,0,0,Ae.width,Ae.height,Le,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,Ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,0,0,Ae.width,Ae.height,Le,be,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e,Ze,Ae.width,Ae.height,0,Le,be,Ae.data)}}}else{if(j=I.mipmaps,pe&&Se){j.length>0&&le++;const re=ie(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,Ze,re.width,re.height)}for(let re=0;re<6;re++)if(ve){pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ue[re].width,Ue[re].height,Le,be,Ue[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,Ue[re].width,Ue[re].height,0,Le,be,Ue[re].data);for(let _e=0;_e<j.length;_e++){const Ae=j[_e].image[re].image;pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,0,0,Ae.width,Ae.height,Le,be,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,Ze,Ae.width,Ae.height,0,Le,be,Ae.data)}}else{pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,be,Ue[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ze,Le,be,Ue[re]);for(let _e=0;_e<j.length;_e++){const Ae=j[_e];pe?O&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,0,0,Le,be,Ae.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,_e+1,Ze,Le,be,Ae.image[re])}}}d(I)&&h(r.TEXTURE_CUBE_MAP),ne.__version=se.version,I.onUpdate&&I.onUpdate(I)}D.__version=I.version}function ue(D,I,G,q,se,ne){const xe=n.convert(G.format,G.colorSpace),ye=n.convert(G.type),Me=E(G.internalFormat,xe,ye,G.colorSpace),Ke=i.get(I),ve=i.get(G);if(ve.__renderTarget=I,!Ke.__hasExternalTextures){const Ue=Math.max(1,I.width>>ne),Be=Math.max(1,I.height>>ne);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ne,Me,Ue,Be,I.depth,0,xe,ye,null):t.texImage2D(se,ne,Me,Ue,Be,0,xe,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),V(I)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,se,ve.__webglTexture,0,Ne(I)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,se,ve.__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(D,I,G){if(r.bindRenderbuffer(r.RENDERBUFFER,D),I.depthBuffer){const q=I.depthTexture,se=q&&q.isDepthTexture?q.type:null,ne=w(I.stencilBuffer,se),xe=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=Ne(I);V(I)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,ne,I.width,I.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,ne,I.width,I.height):r.renderbufferStorage(r.RENDERBUFFER,ne,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,D)}else{const q=I.textures;for(let se=0;se<q.length;se++){const ne=q[se],xe=n.convert(ne.format,ne.colorSpace),ye=n.convert(ne.type),Me=E(ne.internalFormat,xe,ye,ne.colorSpace),Ke=Ne(I);G&&V(I)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Me,I.width,I.height):V(I)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,Me,I.width,I.height):r.renderbufferStorage(r.RENDERBUFFER,Me,I.width,I.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function he(D,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(I.depthTexture);G.__renderTarget=I,(!G.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),N(I.depthTexture,0);const q=G.__webglTexture,se=Ne(I);if(I.depthTexture.format===Pr)V(I)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else if(I.depthTexture.format===Vr)V(I)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function me(D){const I=i.get(D),G=D.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==D.depthTexture){const q=D.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),q){const se=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,q.removeEventListener("dispose",se)};q.addEventListener("dispose",se),I.__depthDisposeCallback=se}I.__boundDepthTexture=q}if(D.depthTexture&&!I.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");he(I.__webglFramebuffer,D)}else if(G){I.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer[q]),I.__webglDepthbuffer[q]===void 0)I.__webglDepthbuffer[q]=r.createRenderbuffer(),ae(I.__webglDepthbuffer[q],D,!1);else{const se=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=I.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=r.createRenderbuffer(),ae(I.__webglDepthbuffer,D,!1);else{const q=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=I.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(D,I,G){const q=i.get(D);I!==void 0&&ue(q.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&me(D)}function we(D){const I=D.texture,G=i.get(D),q=i.get(I);D.addEventListener("dispose",b);const se=D.textures,ne=D.isWebGLCubeRenderTarget===!0,xe=se.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=I.version,o.memory.textures++),ne){G.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(I.mipmaps&&I.mipmaps.length>0){G.__webglFramebuffer[ye]=[];for(let Me=0;Me<I.mipmaps.length;Me++)G.__webglFramebuffer[ye][Me]=r.createFramebuffer()}else G.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){G.__webglFramebuffer=[];for(let ye=0;ye<I.mipmaps.length;ye++)G.__webglFramebuffer[ye]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(xe)for(let ye=0,Me=se.length;ye<Me;ye++){const Ke=i.get(se[ye]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&V(D)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<se.length;ye++){const Me=se[ye];G.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);const Ke=n.convert(Me.format,Me.colorSpace),ve=n.convert(Me.type),Ue=E(Me.internalFormat,Ke,ve,Me.colorSpace,D.isXRRenderTarget===!0),Be=Ne(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ue,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),te(r.TEXTURE_CUBE_MAP,I);for(let ye=0;ye<6;ye++)if(I.mipmaps&&I.mipmaps.length>0)for(let Me=0;Me<I.mipmaps.length;Me++)ue(G.__webglFramebuffer[ye][Me],D,I,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Me);else ue(G.__webglFramebuffer[ye],D,I,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);d(I)&&h(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ye=0,Me=se.length;ye<Me;ye++){const Ke=se[ye],ve=i.get(Ke);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),te(r.TEXTURE_2D,Ke),ue(G.__webglFramebuffer,D,Ke,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),d(Ke)&&h(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,q.__webglTexture),te(ye,I),I.mipmaps&&I.mipmaps.length>0)for(let Me=0;Me<I.mipmaps.length;Me++)ue(G.__webglFramebuffer[Me],D,I,r.COLOR_ATTACHMENT0,ye,Me);else ue(G.__webglFramebuffer,D,I,r.COLOR_ATTACHMENT0,ye,0);d(I)&&h(ye),t.unbindTexture()}D.depthBuffer&&me(D)}function ge(D){const I=D.textures;for(let G=0,q=I.length;G<q;G++){const se=I[G];if(d(se)){const ne=v(D),xe=i.get(se).__webglTexture;t.bindTexture(ne,xe),h(ne),t.unbindTexture()}}}const Fe=[],z=[];function qe(D){if(D.samples>0){if(V(D)===!1){const I=D.textures,G=D.width,q=D.height;let se=r.COLOR_BUFFER_BIT;const ne=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=i.get(D),ye=I.length>1;if(ye)for(let Me=0;Me<I.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Me=0;Me<I.length;Me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),ye){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);const Ke=i.get(I[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,G,q,0,0,G,q,se,r.NEAREST),l===!0&&(Fe.length=0,z.length=0,Fe.push(r.COLOR_ATTACHMENT0+Me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Fe.push(ne),z.push(ne),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Me=0;Me<I.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Me]);const Ke=i.get(I[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const I=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[I])}}}function Ne(D){return Math.min(s.maxSamples,D.samples)}function V(D){const I=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Y(D){const I=o.render.frame;u.get(D)!==I&&(u.set(D,I),D.update())}function fe(D,I){const G=D.colorSpace,q=D.format,se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==Or&&G!==zi&&(je.getTransfer(G)===it?(q!==hi||se!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),I}function ie(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=T,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=M,this.rebindTextures=oe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=V}function M_(r,e){function t(i,s=zi){let n;const o=je.getTransfer(s);if(i===Ui)return r.UNSIGNED_BYTE;if(i===La)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Da)return r.UNSIGNED_SHORT_5_5_5_1;if(i===uc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===cc)return r.BYTE;if(i===hc)return r.SHORT;if(i===_s)return r.UNSIGNED_SHORT;if(i===Qa)return r.INT;if(i===sr)return r.UNSIGNED_INT;if(i===Ti)return r.FLOAT;if(i===As)return r.HALF_FLOAT;if(i===dc)return r.ALPHA;if(i===pc)return r.RGB;if(i===hi)return r.RGBA;if(i===fc)return r.LUMINANCE;if(i===mc)return r.LUMINANCE_ALPHA;if(i===Pr)return r.DEPTH_COMPONENT;if(i===Vr)return r.DEPTH_STENCIL;if(i===gc)return r.RED;if(i===Na)return r.RED_INTEGER;if(i===vc)return r.RG;if(i===ka)return r.RG_INTEGER;if(i===Pa)return r.RGBA_INTEGER;if(i===tn||i===rn||i===sn||i===nn)if(o===it)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===tn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===tn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Va||i===Oa||i===za||i===Wa)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===Va)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===za)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wa)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ga||i===Ja||i===Za)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===Ga||i===Ja)return o===it?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Za)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ha||i===Xa||i===Ya||i===ja||i===Ka||i===qa||i===$a||i===eo||i===to||i===io||i===ro||i===so||i===no||i===ao)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Ha)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xa)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ya)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qa)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$a)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eo)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===to)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===io)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===so)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===no)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ao)return o===it?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===an||i===oo||i===lo)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===an)return o===it?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===co||i===ho||i===uo)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===an)return n.COMPRESSED_RED_RGTC1_EXT;if(i===co)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const R_={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,n=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const A of e.hand.values()){const d=t.getJointPose(A,i),h=this._getHandJoint(c,A);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&m>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&m<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&n!==null&&(s=n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Is;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ft,n=e.properties.get(s);n.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xi({vertexShader:I_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q_ extends nr{constructor(e,t){super();const i=this;let s=null,n=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,m=null,p=null,g=null;const A=new B_,d=t.getContextAttributes();let h=null,v=null;const E=[],w=[],C=new ze;let S=null;const b=new ii;b.viewport=new gt;const U=new ii;U.viewport=new gt;const y=[b,U],_=new em;let x=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let X=E[W];return X===void 0&&(X=new Yo,E[W]=X),X.getTargetRaySpace()},this.getControllerGrip=function(W){let X=E[W];return X===void 0&&(X=new Yo,E[W]=X),X.getGripSpace()},this.getHand=function(W){let X=E[W];return X===void 0&&(X=new Yo,E[W]=X),X.getHandSpace()};function R(W){const X=w.indexOf(W.inputSource);if(X===-1)return;const ue=E[X];ue!==void 0&&(ue.update(W.inputSource,W.frame,c||o),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function Q(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",N);for(let W=0;W<E.length;W++){const X=w[W];X!==null&&(w[W]=null,E[W].disconnect(X))}x=null,T=null,A.reset(),e.setRenderTarget(h),p=null,m=null,f=null,s=null,v=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){n=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const X={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:n};p=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ar(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let X=null,ue=null,ae=null;d.depth&&(ae=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=d.stencil?Vr:Pr,ue=d.stencil?kr:sr);const he={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:n};f=new XRWebGLBinding(s,t),m=f.createProjectionLayer(he),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),v=new ar(m.textureWidth,m.textureHeight,{format:hi,type:Ui,depthTexture:new nh(m.textureWidth,m.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function N(W){for(let X=0;X<W.removed.length;X++){const ue=W.removed[X],ae=w.indexOf(ue);ae>=0&&(w[ae]=null,E[ae].disconnect(ue))}for(let X=0;X<W.added.length;X++){const ue=W.added[X];let ae=w.indexOf(ue);if(ae===-1){for(let me=0;me<E.length;me++)if(me>=w.length){w.push(ue),ae=me;break}else if(w[me]===null){w[me]=ue,ae=me;break}if(ae===-1)break}const he=E[ae];he&&he.connect(ue)}}const k=new H,F=new H;function M(W,X,ue){k.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(ue.matrixWorld);const ae=k.distanceTo(F),he=X.projectionMatrix.elements,me=ue.projectionMatrix.elements,oe=he[14]/(he[10]-1),we=he[14]/(he[10]+1),ge=(he[9]+1)/he[5],Fe=(he[9]-1)/he[5],z=(he[8]-1)/he[0],qe=(me[8]+1)/me[0],Ne=oe*z,V=oe*qe,Y=ae/(-z+qe),fe=Y*-z;if(X.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(fe),W.translateZ(Y),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),he[10]===-1)W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const ie=oe+Y,D=we+Y,I=Ne-fe,G=V+(ae-fe),q=ge*we/D*ie,se=Fe*we/D*ie;W.projectionMatrix.makePerspective(I,G,q,se,ie,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function B(W,X){X===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(X.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let X=W.near,ue=W.far;A.texture!==null&&(A.depthNear>0&&(X=A.depthNear),A.depthFar>0&&(ue=A.depthFar)),_.near=U.near=b.near=X,_.far=U.far=b.far=ue,(x!==_.near||T!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),x=_.near,T=_.far),b.layers.mask=W.layers.mask|2,U.layers.mask=W.layers.mask|4,_.layers.mask=b.layers.mask|U.layers.mask;const ae=W.parent,he=_.cameras;B(_,ae);for(let me=0;me<he.length;me++)B(he[me],ae);he.length===2?M(_,b,U):_.projectionMatrix.copy(b.projectionMatrix),P(W,_,ae)};function P(W,X,ue){ue===null?W.matrix.copy(X.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(X.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=po*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(W){l=W,m!==null&&(m.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(_)};let K=null;function te(W,X){if(u=X.getViewerPose(c||o),g=X,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let me=0;me<ue.length;me++){const oe=ue[me];let we=null;if(p!==null)we=p.getViewport(oe);else{const Fe=f.getViewSubImage(m,oe);we=Fe.viewport,me===0&&(e.setRenderTargetTextures(v,Fe.colorTexture,m.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(v))}let ge=y[me];ge===void 0&&(ge=new ii,ge.layers.enable(me),ge.viewport=new gt,y[me]=ge),ge.matrix.fromArray(oe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(oe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(we.x,we.y,we.width,we.height),me===0&&(_.matrix.copy(ge.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(ge)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){const me=f.getDepthInformation(ue[0]);me&&me.isValid&&me.texture&&A.init(e,me,s.renderState)}}for(let ue=0;ue<E.length;ue++){const ae=w[ue],he=E[ue];ae!==null&&he!==void 0&&he.update(ae,X,c||o)}K&&K(W,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const ce=new fh;ce.setAnimationLoop(te),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}const mr=new Ai,L_=new ht;function D_(r,e){function t(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function i(d,h){h.color.getRGB(d.fogColor.value,Hc(r)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,v,E,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?n(d,h):h.isMeshToonMaterial?(n(d,h),f(d,h)):h.isMeshPhongMaterial?(n(d,h),u(d,h)):h.isMeshStandardMaterial?(n(d,h),m(d,h),h.isMeshPhysicalMaterial&&p(d,h,w)):h.isMeshMatcapMaterial?(n(d,h),g(d,h)):h.isMeshDepthMaterial?n(d,h):h.isMeshDistanceMaterial?(n(d,h),A(d,h)):h.isMeshNormalMaterial?n(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&a(d,h)):h.isPointsMaterial?l(d,h,v,E):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function n(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,t(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Vt&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,t(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Vt&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,t(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,t(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const v=e.get(h),E=v.envMap,w=v.envMapRotation;E&&(d.envMap.value=E,mr.copy(w),mr.x*=-1,mr.y*=-1,mr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),d.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(mr)),d.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform))}function a(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,v,E){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*v,d.scale.value=E*.5,h.map&&(d.map.value=h.map,t(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function f(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function m(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function p(d,h,v){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,h){h.matcap&&(d.matcap.value=h.matcap)}function A(d,h){const v=e.get(h).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function N_(r,e,t,i){let s={},n={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const w=E.program;i.uniformBlockBinding(v,w)}function c(v,E){let w=s[v.id];w===void 0&&(g(v),w=u(v),s[v.id]=w,v.addEventListener("dispose",d));const C=E.program;i.updateUBOMapping(v,C);const S=e.render.frame;n[v.id]!==S&&(m(v),n[v.id]=S)}function u(v){const E=f();v.__bindingPointIndex=E;const w=r.createBuffer(),C=v.__size,S=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,C,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,w),w}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(v){const E=s[v.id],w=v.uniforms,C=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let S=0,b=w.length;S<b;S++){const U=Array.isArray(w[S])?w[S]:[w[S]];for(let y=0,_=U.length;y<_;y++){const x=U[y];if(p(x,S,y,C)===!0){const T=x.__offset,R=Array.isArray(x.value)?x.value:[x.value];let Q=0;for(let N=0;N<R.length;N++){const k=R[N],F=A(k);typeof k=="number"||typeof k=="boolean"?(x.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,T+Q,x.__data)):k.isMatrix3?(x.__data[0]=k.elements[0],x.__data[1]=k.elements[1],x.__data[2]=k.elements[2],x.__data[3]=0,x.__data[4]=k.elements[3],x.__data[5]=k.elements[4],x.__data[6]=k.elements[5],x.__data[7]=0,x.__data[8]=k.elements[6],x.__data[9]=k.elements[7],x.__data[10]=k.elements[8],x.__data[11]=0):(k.toArray(x.__data,Q),Q+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,T,x.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,E,w,C){const S=v.value,b=E+"_"+w;if(C[b]===void 0)return typeof S=="number"||typeof S=="boolean"?C[b]=S:C[b]=S.clone(),!0;{const U=C[b];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return C[b]=S,!0}else if(U.equals(S)===!1)return U.copy(S),!0}return!1}function g(v){const E=v.uniforms;let w=0;const C=16;for(let b=0,U=E.length;b<U;b++){const y=Array.isArray(E[b])?E[b]:[E[b]];for(let _=0,x=y.length;_<x;_++){const T=y[_],R=Array.isArray(T.value)?T.value:[T.value];for(let Q=0,N=R.length;Q<N;Q++){const k=R[Q],F=A(k),M=w%C,B=M%F.boundary,P=M+B;w+=B,P!==0&&C-P<F.storage&&(w+=C-P),T.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,w+=F.storage}}}const S=w%C;return S>0&&(w+=C-S),v.__size=w,v.__cache={},this}function A(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),E}function d(v){const E=v.target;E.removeEventListener("dispose",d);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(s[E.id]),delete s[E.id],delete n[E.id]}function h(){for(const v in s)r.deleteBuffer(s[v]);o=[],s={},n={}}return{bind:l,update:c,dispose:h}}class k_{constructor(e={}){const{canvas:t=pf(),context:i=null,depth:s=!0,stencil:n=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),A=new Int32Array(4);let d=null,h=null;const v=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=Oi,this.toneMappingExposure=1;const w=this;let C=!1,S=0,b=0,U=null,y=-1,_=null;const x=new gt,T=new gt;let R=null;const Q=new Ge(0);let N=0,k=t.width,F=t.height,M=1,B=null,P=null;const K=new gt(0,0,k,F),te=new gt(0,0,k,F);let ce=!1;const W=new Lo;let X=!1,ue=!1;const ae=new ht,he=new ht,me=new H,oe=new gt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Fe(){return U===null?M:1}let z=i;function qe(L,Z){return t.getContext(L,Z)}try{const L={alpha:!0,depth:s,stencil:n,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),z===null){const Z="webgl2";if(z=qe(Z,L),z===null)throw qe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ne,V,Y,fe,ie,D,I,G,q,se,ne,xe,ye,Me,Ke,ve,Ue,Be,Le,be,Ze,pe,Se,O;function le(){Ne=new Hv(z),Ne.init(),pe=new M_(z,Ne),V=new Ov(z,Ne,e,pe),Y=new U_(z,Ne),V.reverseDepthBuffer&&m&&Y.buffers.depth.setReversed(!0),fe=new jv(z),ie=new f_,D=new T_(z,Ne,Y,ie,V,pe,fe),I=new Wv(w),G=new Zv(w),q=new rm(z),Se=new Pv(z,q),se=new Xv(z,q,fe,Se),ne=new qv(z,se,q,fe),Le=new Kv(z,V,D),ve=new zv(ie),xe=new p_(w,I,G,Ne,V,Se,ve),ye=new D_(w,ie),Me=new g_,Ke=new S_(Ne),Be=new kv(w,I,G,Y,ne,p,l),Ue=new x_(w,ne,V),O=new N_(z,fe,V,Y),be=new Vv(z,Ne,fe),Ze=new Yv(z,Ne,fe),fe.programs=xe.programs,w.capabilities=V,w.extensions=Ne,w.properties=ie,w.renderLists=Me,w.shadowMap=Ue,w.state=Y,w.info=fe}le();const j=new Q_(w,z);this.xr=j,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const L=Ne.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ne.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(L){L!==void 0&&(M=L,this.setSize(k,F,!1))},this.getSize=function(L){return L.set(k,F)},this.setSize=function(L,Z,$=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=L,F=Z,t.width=Math.floor(L*M),t.height=Math.floor(Z*M),$===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(k*M,F*M).floor()},this.setDrawingBufferSize=function(L,Z,$){k=L,F=Z,M=$,t.width=Math.floor(L*$),t.height=Math.floor(Z*$),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(x)},this.getViewport=function(L){return L.copy(K)},this.setViewport=function(L,Z,$,ee){L.isVector4?K.set(L.x,L.y,L.z,L.w):K.set(L,Z,$,ee),Y.viewport(x.copy(K).multiplyScalar(M).round())},this.getScissor=function(L){return L.copy(te)},this.setScissor=function(L,Z,$,ee){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,Z,$,ee),Y.scissor(T.copy(te).multiplyScalar(M).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(L){Y.setScissorTest(ce=L)},this.setOpaqueSort=function(L){B=L},this.setTransparentSort=function(L){P=L},this.getClearColor=function(L){return L.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(L=!0,Z=!0,$=!0){let ee=0;if(L){let J=!1;if(U!==null){const de=U.texture.format;J=de===Pa||de===ka||de===Na}if(J){const de=U.texture.type,Ce=de===Ui||de===sr||de===_s||de===kr||de===La||de===Da,Te=Be.getClearColor(),Ie=Be.getClearAlpha(),Ve=Te.r,ke=Te.g,Oe=Te.b;Ce?(g[0]=Ve,g[1]=ke,g[2]=Oe,g[3]=Ie,z.clearBufferuiv(z.COLOR,0,g)):(A[0]=Ve,A[1]=ke,A[2]=Oe,A[3]=Ie,z.clearBufferiv(z.COLOR,0,A))}else ee|=z.COLOR_BUFFER_BIT}Z&&(ee|=z.DEPTH_BUFFER_BIT),$&&(ee|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Be.dispose(),Me.dispose(),Ke.dispose(),ie.dispose(),I.dispose(),G.dispose(),ne.dispose(),Se.dispose(),O.dispose(),xe.dispose(),j.dispose(),j.removeEventListener("sessionstart",cu),j.removeEventListener("sessionend",hu),vr.stop()};function re(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const L=fe.autoReset,Z=Ue.enabled,$=Ue.autoUpdate,ee=Ue.needsUpdate,J=Ue.type;le(),fe.autoReset=L,Ue.enabled=Z,Ue.autoUpdate=$,Ue.needsUpdate=ee,Ue.type=J}function Ae(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function He(L){const Z=L.target;Z.removeEventListener("dispose",He),dt(Z)}function dt(L){_t(L),ie.remove(L)}function _t(L){const Z=ie.get(L).programs;Z!==void 0&&(Z.forEach(function($){xe.releaseProgram($)}),L.isShaderMaterial&&xe.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,$,ee,J,de){Z===null&&(Z=we);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Te=XA(L,Z,$,ee,J);Y.setMaterial(ee,Ce);let Ie=$.index,Ve=1;if(ee.wireframe===!0){if(Ie=se.getWireframeAttribute($),Ie===void 0)return;Ve=2}const ke=$.drawRange,Oe=$.attributes.position;let $e=ke.start*Ve,st=(ke.start+ke.count)*Ve;de!==null&&($e=Math.max($e,de.start*Ve),st=Math.min(st,(de.start+de.count)*Ve)),Ie!==null?($e=Math.max($e,0),st=Math.min(st,Ie.count)):Oe!=null&&($e=Math.max($e,0),st=Math.min(st,Oe.count));const bt=st-$e;if(bt<0||bt===1/0)return;Se.setup(J,ee,Te,$,Ie);let nt,ct=be;if(Ie!==null&&(nt=q.get(Ie),ct=Ze,ct.setIndex(nt)),J.isMesh)ee.wireframe===!0?(Y.setLineWidth(ee.wireframeLinewidth*Fe()),ct.setMode(z.LINES)):ct.setMode(z.TRIANGLES);else if(J.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),Y.setLineWidth(Qe*Fe()),J.isLineSegments?ct.setMode(z.LINES):J.isLineLoop?ct.setMode(z.LINE_LOOP):ct.setMode(z.LINE_STRIP)}else J.isPoints?ct.setMode(z.POINTS):J.isSprite&&ct.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ct.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))ct.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,Nt=J._multiDrawCounts,_r=J._multiDrawCount,gi=Ie?q.get(Ie).bytesPerElement:1,hs=ie.get(ee).currentProgram.getUniforms();for(let qt=0;qt<_r;qt++)hs.setValue(z,"_gl_DrawID",qt),ct.render(Qe[qt]/gi,Nt[qt])}else if(J.isInstancedMesh)ct.renderInstances($e,bt,J.count);else if($.isInstancedBufferGeometry){const Qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Nt=Math.min($.instanceCount,Qe);ct.renderInstances($e,bt,Nt)}else ct.render($e,bt)};function tt(L,Z,$){L.transparent===!0&&L.side===Ci&&L.forceSinglePass===!1?(L.side=Vt,L.needsUpdate=!0,Yn(L,Z,$),L.side=xi,L.needsUpdate=!0,Yn(L,Z,$),L.side=Ci):Yn(L,Z,$)}this.compile=function(L,Z,$=null){$===null&&($=L),h=Ke.get($),h.init(Z),E.push(h),$.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),L!==$&&L.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights();const ee=new Set;return L.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const de=J.material;if(de)if(Array.isArray(de))for(let Ce=0;Ce<de.length;Ce++){const Te=de[Ce];tt(Te,$,J),ee.add(Te)}else tt(de,$,J),ee.add(de)}),E.pop(),h=null,ee},this.compileAsync=function(L,Z,$=null){const ee=this.compile(L,Z,$);return new Promise(J=>{function de(){if(ee.forEach(function(Ce){ie.get(Ce).currentProgram.isReady()&&ee.delete(Ce)}),ee.size===0){J(L);return}setTimeout(de,10)}Ne.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let jt=null;function Kt(L){jt&&jt(L)}function cu(){vr.stop()}function hu(){vr.start()}const vr=new fh;vr.setAnimationLoop(Kt),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(L){jt=L,j.setAnimationLoop(L),L===null?vr.stop():vr.start()},j.addEventListener("sessionstart",cu),j.addEventListener("sessionend",hu),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(Z),Z=j.getCamera()),L.isScene===!0&&L.onBeforeRender(w,L,Z,U),h=Ke.get(L,E.length),h.init(Z),E.push(h),he.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W.setFromProjectionMatrix(he),ue=this.localClippingEnabled,X=ve.init(this.clippingPlanes,ue),d=Me.get(L,v.length),d.init(),v.push(d),j.enabled===!0&&j.isPresenting===!0){const de=w.xr.getDepthSensingMesh();de!==null&&nl(de,Z,-1/0,w.sortObjects)}nl(L,Z,0,w.sortObjects),d.finish(),w.sortObjects===!0&&d.sort(B,P),ge=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ge&&Be.addToRenderList(d,L),this.info.render.frame++,X===!0&&ve.beginShadows();const $=h.state.shadowsArray;Ue.render($,L,Z),X===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=d.opaque,J=d.transmissive;if(h.setupLights(),Z.isArrayCamera){const de=Z.cameras;if(J.length>0)for(let Ce=0,Te=de.length;Ce<Te;Ce++){const Ie=de[Ce];du(ee,J,L,Ie)}ge&&Be.render(L);for(let Ce=0,Te=de.length;Ce<Te;Ce++){const Ie=de[Ce];uu(d,L,Ie,Ie.viewport)}}else J.length>0&&du(ee,J,L,Z),ge&&Be.render(L),uu(d,L,Z);U!==null&&(D.updateMultisampleRenderTarget(U),D.updateRenderTargetMipmap(U)),L.isScene===!0&&L.onAfterRender(w,L,Z),Se.resetDefaultState(),y=-1,_=null,E.pop(),E.length>0?(h=E[E.length-1],X===!0&&ve.setGlobalState(w.clippingPlanes,h.state.camera)):h=null,v.pop(),v.length>0?d=v[v.length-1]:d=null};function nl(L,Z,$,ee){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)$=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)h.pushLight(L),L.castShadow&&h.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||W.intersectsSprite(L)){ee&&oe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(he);const de=ne.update(L),Ce=L.material;Ce.visible&&d.push(L,de,Ce,$,oe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||W.intersectsObject(L))){const de=ne.update(L),Ce=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),oe.copy(L.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),oe.copy(de.boundingSphere.center)),oe.applyMatrix4(L.matrixWorld).applyMatrix4(he)),Array.isArray(Ce)){const Te=de.groups;for(let Ie=0,Ve=Te.length;Ie<Ve;Ie++){const ke=Te[Ie],Oe=Ce[ke.materialIndex];Oe&&Oe.visible&&d.push(L,de,Oe,$,oe.z,ke)}}else Ce.visible&&d.push(L,de,Ce,$,oe.z,null)}}const J=L.children;for(let de=0,Ce=J.length;de<Ce;de++)nl(J[de],Z,$,ee)}function uu(L,Z,$,ee){const J=L.opaque,de=L.transmissive,Ce=L.transparent;h.setupLightsView($),X===!0&&ve.setGlobalState(w.clippingPlanes,$),ee&&Y.viewport(x.copy(ee)),J.length>0&&Xn(J,Z,$),de.length>0&&Xn(de,Z,$),Ce.length>0&&Xn(Ce,Z,$),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function du(L,Z,$,ee){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ee.id]===void 0&&(h.state.transmissionRenderTarget[ee.id]=new ar(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?As:Ui,minFilter:rr,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const J=h.state.transmissionRenderTarget[ee.id],de=ee.viewport||x;J.setSize(de.z,de.w);const Ce=w.getRenderTarget();w.setRenderTarget(J),w.getClearColor(Q),N=w.getClearAlpha(),N<1&&w.setClearColor(16777215,.5),w.clear(),ge&&Be.render($);const Te=w.toneMapping;w.toneMapping=Oi;const Ie=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),h.setupLightsView(ee),X===!0&&ve.setGlobalState(w.clippingPlanes,ee),Xn(L,$,ee),D.updateMultisampleRenderTarget(J),D.updateRenderTargetMipmap(J),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ke=0,Oe=Z.length;ke<Oe;ke++){const $e=Z[ke],st=$e.object,bt=$e.geometry,nt=$e.material,ct=$e.group;if(nt.side===Ci&&st.layers.test(ee.layers)){const Qe=nt.side;nt.side=Vt,nt.needsUpdate=!0,pu(st,$,ee,bt,nt,ct),nt.side=Qe,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(D.updateMultisampleRenderTarget(J),D.updateRenderTargetMipmap(J))}w.setRenderTarget(Ce),w.setClearColor(Q,N),Ie!==void 0&&(ee.viewport=Ie),w.toneMapping=Te}function Xn(L,Z,$){const ee=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,de=L.length;J<de;J++){const Ce=L[J],Te=Ce.object,Ie=Ce.geometry,Ve=ee===null?Ce.material:ee,ke=Ce.group;Te.layers.test($.layers)&&pu(Te,Z,$,Ie,Ve,ke)}}function pu(L,Z,$,ee,J,de){L.onBeforeRender(w,Z,$,ee,J,de),L.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(w,Z,$,ee,L,de),J.transparent===!0&&J.side===Ci&&J.forceSinglePass===!1?(J.side=Vt,J.needsUpdate=!0,w.renderBufferDirect($,Z,ee,J,L,de),J.side=xi,J.needsUpdate=!0,w.renderBufferDirect($,Z,ee,J,L,de),J.side=Ci):w.renderBufferDirect($,Z,ee,J,L,de),L.onAfterRender(w,Z,$,ee,J,de)}function Yn(L,Z,$){Z.isScene!==!0&&(Z=we);const ee=ie.get(L),J=h.state.lights,de=h.state.shadowsArray,Ce=J.state.version,Te=xe.getParameters(L,J.state,de,Z,$),Ie=xe.getProgramCacheKey(Te);let Ve=ee.programs;ee.environment=L.isMeshStandardMaterial?Z.environment:null,ee.fog=Z.fog,ee.envMap=(L.isMeshStandardMaterial?G:I).get(L.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,Ve===void 0&&(L.addEventListener("dispose",He),Ve=new Map,ee.programs=Ve);let ke=Ve.get(Ie);if(ke!==void 0){if(ee.currentProgram===ke&&ee.lightsStateVersion===Ce)return mu(L,Te),ke}else Te.uniforms=xe.getUniforms(L),L.onBeforeCompile(Te,w),ke=xe.acquireProgram(Te,Ie),Ve.set(Ie,ke),ee.uniforms=Te.uniforms;const Oe=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Oe.clippingPlanes=ve.uniform),mu(L,Te),ee.needsLights=jA(L),ee.lightsStateVersion=Ce,ee.needsLights&&(Oe.ambientLightColor.value=J.state.ambient,Oe.lightProbe.value=J.state.probe,Oe.directionalLights.value=J.state.directional,Oe.directionalLightShadows.value=J.state.directionalShadow,Oe.spotLights.value=J.state.spot,Oe.spotLightShadows.value=J.state.spotShadow,Oe.rectAreaLights.value=J.state.rectArea,Oe.ltc_1.value=J.state.rectAreaLTC1,Oe.ltc_2.value=J.state.rectAreaLTC2,Oe.pointLights.value=J.state.point,Oe.pointLightShadows.value=J.state.pointShadow,Oe.hemisphereLights.value=J.state.hemi,Oe.directionalShadowMap.value=J.state.directionalShadowMap,Oe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Oe.spotShadowMap.value=J.state.spotShadowMap,Oe.spotLightMatrix.value=J.state.spotLightMatrix,Oe.spotLightMap.value=J.state.spotLightMap,Oe.pointShadowMap.value=J.state.pointShadowMap,Oe.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=ke,ee.uniformsList=null,ke}function fu(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=Vn.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function mu(L,Z){const $=ie.get(L);$.outputColorSpace=Z.outputColorSpace,$.batching=Z.batching,$.batchingColor=Z.batchingColor,$.instancing=Z.instancing,$.instancingColor=Z.instancingColor,$.instancingMorph=Z.instancingMorph,$.skinning=Z.skinning,$.morphTargets=Z.morphTargets,$.morphNormals=Z.morphNormals,$.morphColors=Z.morphColors,$.morphTargetsCount=Z.morphTargetsCount,$.numClippingPlanes=Z.numClippingPlanes,$.numIntersection=Z.numClipIntersection,$.vertexAlphas=Z.vertexAlphas,$.vertexTangents=Z.vertexTangents,$.toneMapping=Z.toneMapping}function XA(L,Z,$,ee,J){Z.isScene!==!0&&(Z=we),D.resetTextureUnits();const de=Z.fog,Ce=ee.isMeshStandardMaterial?Z.environment:null,Te=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Or,Ie=(ee.isMeshStandardMaterial?G:I).get(ee.envMap||Ce),Ve=ee.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ke=!!$.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Oe=!!$.morphAttributes.position,$e=!!$.morphAttributes.normal,st=!!$.morphAttributes.color;let bt=Oi;ee.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(bt=w.toneMapping);const nt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=nt!==void 0?nt.length:0,Qe=ie.get(ee),Nt=h.state.lights;if(X===!0&&(ue===!0||L!==_)){const Mt=L===_&&ee.id===y;ve.setState(ee,L,Mt)}let _r=!1;ee.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Nt.state.version||Qe.outputColorSpace!==Te||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==Ie||ee.fog===!0&&Qe.fog!==de||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ve.numPlanes||Qe.numIntersection!==ve.numIntersection)||Qe.vertexAlphas!==Ve||Qe.vertexTangents!==ke||Qe.morphTargets!==Oe||Qe.morphNormals!==$e||Qe.morphColors!==st||Qe.toneMapping!==bt||Qe.morphTargetsCount!==ct)&&(_r=!0):(_r=!0,Qe.__version=ee.version);let gi=Qe.currentProgram;_r===!0&&(gi=Yn(ee,Z,J));let hs=!1,qt=!1,Qs=!1;const pt=gi.getUniforms(),si=Qe.uniforms;if(Y.useProgram(gi.program)&&(hs=!0,qt=!0,Qs=!0),ee.id!==y&&(y=ee.id,qt=!0),hs||_!==L){Y.buffers.depth.getReversed()?(ae.copy(L.projectionMatrix),mf(ae),gf(ae),pt.setValue(z,"projectionMatrix",ae)):pt.setValue(z,"projectionMatrix",L.projectionMatrix),pt.setValue(z,"viewMatrix",L.matrixWorldInverse);const Mt=pt.map.cameraPosition;Mt!==void 0&&Mt.setValue(z,me.setFromMatrixPosition(L.matrixWorld)),V.logarithmicDepthBuffer&&pt.setValue(z,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&pt.setValue(z,"isOrthographic",L.isOrthographicCamera===!0),_!==L&&(_=L,qt=!0,Qs=!0)}if(J.isSkinnedMesh){pt.setOptional(z,J,"bindMatrix"),pt.setOptional(z,J,"bindMatrixInverse");const Mt=J.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),pt.setValue(z,"boneTexture",Mt.boneTexture,D))}J.isBatchedMesh&&(pt.setOptional(z,J,"batchingTexture"),pt.setValue(z,"batchingTexture",J._matricesTexture,D),pt.setOptional(z,J,"batchingIdTexture"),pt.setValue(z,"batchingIdTexture",J._indirectTexture,D),pt.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&pt.setValue(z,"batchingColorTexture",J._colorsTexture,D));const ni=$.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Le.update(J,$,gi),(qt||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,pt.setValue(z,"receiveShadow",J.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(si.envMap.value=Ie,si.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&Z.environment!==null&&(si.envMapIntensity.value=Z.environmentIntensity),qt&&(pt.setValue(z,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&YA(si,Qs),de&&ee.fog===!0&&ye.refreshFogUniforms(si,de),ye.refreshMaterialUniforms(si,ee,M,F,h.state.transmissionRenderTarget[L.id]),Vn.upload(z,fu(Qe),si,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Vn.upload(z,fu(Qe),si,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&pt.setValue(z,"center",J.center),pt.setValue(z,"modelViewMatrix",J.modelViewMatrix),pt.setValue(z,"normalMatrix",J.normalMatrix),pt.setValue(z,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Mt=ee.uniformsGroups;for(let vi=0,al=Mt.length;vi<al;vi++){const Ar=Mt[vi];O.update(Ar,gi),O.bind(Ar,gi)}}return gi}function YA(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function jA(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(L,Z,$){ie.get(L.texture).__webglTexture=Z,ie.get(L.depthTexture).__webglTexture=$;const ee=ie.get(L);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=$===void 0,ee.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Z){const $=ie.get(L);$.__webglFramebuffer=Z,$.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,$=0){U=L,S=Z,b=$;let ee=!0,J=null,de=!1,Ce=!1;if(L){const Te=ie.get(L);if(Te.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(z.FRAMEBUFFER,null),ee=!1;else if(Te.__webglFramebuffer===void 0)D.setupRenderTarget(L);else if(Te.__hasExternalTextures)D.rebindTextures(L,ie.get(L.texture).__webglTexture,ie.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ke=L.depthTexture;if(Te.__boundDepthTexture!==ke){if(ke!==null&&ie.has(ke)&&(L.width!==ke.image.width||L.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(L)}}const Ie=L.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ce=!0);const Ve=ie.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ve[Z])?J=Ve[Z][$]:J=Ve[Z],de=!0):L.samples>0&&D.useMultisampledRTT(L)===!1?J=ie.get(L).__webglMultisampledFramebuffer:Array.isArray(Ve)?J=Ve[$]:J=Ve,x.copy(L.viewport),T.copy(L.scissor),R=L.scissorTest}else x.copy(K).multiplyScalar(M).floor(),T.copy(te).multiplyScalar(M).floor(),R=ce;if(Y.bindFramebuffer(z.FRAMEBUFFER,J)&&ee&&Y.drawBuffers(L,J),Y.viewport(x),Y.scissor(T),Y.setScissorTest(R),de){const Te=ie.get(L.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Te.__webglTexture,$)}else if(Ce){const Te=ie.get(L.texture),Ie=Z||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Te.__webglTexture,$||0,Ie)}y=-1},this.readRenderTargetPixels=function(L,Z,$,ee,J,de,Ce){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ie.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce]),Te){Y.bindFramebuffer(z.FRAMEBUFFER,Te);try{const Ie=L.texture,Ve=Ie.format,ke=Ie.type;if(!V.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-ee&&$>=0&&$<=L.height-J&&z.readPixels(Z,$,ee,J,pe.convert(Ve),pe.convert(ke),de)}finally{const Ie=U!==null?ie.get(U).__webglFramebuffer:null;Y.bindFramebuffer(z.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(L,Z,$,ee,J,de,Ce){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ie.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce]),Te){const Ie=L.texture,Ve=Ie.format,ke=Ie.type;if(!V.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=L.width-ee&&$>=0&&$<=L.height-J){Y.bindFramebuffer(z.FRAMEBUFFER,Te);const Oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Oe),z.bufferData(z.PIXEL_PACK_BUFFER,de.byteLength,z.STREAM_READ),z.readPixels(Z,$,ee,J,pe.convert(Ve),pe.convert(ke),0);const $e=U!==null?ie.get(U).__webglFramebuffer:null;Y.bindFramebuffer(z.FRAMEBUFFER,$e);const st=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ff(z,st,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,de),z.deleteBuffer(Oe),z.deleteSync(st),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Z=null,$=0){L.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,L=arguments[1]);const ee=Math.pow(2,-$),J=Math.floor(L.image.width*ee),de=Math.floor(L.image.height*ee),Ce=Z!==null?Z.x:0,Te=Z!==null?Z.y:0;D.setTexture2D(L,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,Ce,Te,J,de),Y.unbindTexture()};const KA=z.createFramebuffer(),qA=z.createFramebuffer();this.copyTextureToTexture=function(L,Z,$=null,ee=null,J=0,de=null){L.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,L=arguments[1],Z=arguments[2],de=arguments[3]||0,$=null),de===null&&(J!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=J,J=0):de=0);let Ce,Te,Ie,Ve,ke,Oe,$e,st,bt;const nt=L.isCompressedTexture?L.mipmaps[de]:L.image;if($!==null)Ce=$.max.x-$.min.x,Te=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Ve=$.min.x,ke=$.min.y,Oe=$.isBox3?$.min.z:0;else{const ni=Math.pow(2,-J);Ce=Math.floor(nt.width*ni),Te=Math.floor(nt.height*ni),L.isDataArrayTexture?Ie=nt.depth:L.isData3DTexture?Ie=Math.floor(nt.depth*ni):Ie=1,Ve=0,ke=0,Oe=0}ee!==null?($e=ee.x,st=ee.y,bt=ee.z):($e=0,st=0,bt=0);const ct=pe.convert(Z.format),Qe=pe.convert(Z.type);let Nt;Z.isData3DTexture?(D.setTexture3D(Z,0),Nt=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(D.setTexture2DArray(Z,0),Nt=z.TEXTURE_2D_ARRAY):(D.setTexture2D(Z,0),Nt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const _r=z.getParameter(z.UNPACK_ROW_LENGTH),gi=z.getParameter(z.UNPACK_IMAGE_HEIGHT),hs=z.getParameter(z.UNPACK_SKIP_PIXELS),qt=z.getParameter(z.UNPACK_SKIP_ROWS),Qs=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,nt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,nt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ve),z.pixelStorei(z.UNPACK_SKIP_ROWS,ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Oe);const pt=L.isDataArrayTexture||L.isData3DTexture,si=Z.isDataArrayTexture||Z.isData3DTexture;if(L.isDepthTexture){const ni=ie.get(L),Mt=ie.get(Z),vi=ie.get(ni.__renderTarget),al=ie.get(Mt.__renderTarget);Y.bindFramebuffer(z.READ_FRAMEBUFFER,vi.__webglFramebuffer),Y.bindFramebuffer(z.DRAW_FRAMEBUFFER,al.__webglFramebuffer);for(let Ar=0;Ar<Ie;Ar++)pt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ie.get(L).__webglTexture,J,Oe+Ar),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ie.get(Z).__webglTexture,de,bt+Ar)),z.blitFramebuffer(Ve,ke,Ce,Te,$e,st,Ce,Te,z.DEPTH_BUFFER_BIT,z.NEAREST);Y.bindFramebuffer(z.READ_FRAMEBUFFER,null),Y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||L.isRenderTargetTexture||ie.has(L)){const ni=ie.get(L),Mt=ie.get(Z);Y.bindFramebuffer(z.READ_FRAMEBUFFER,KA),Y.bindFramebuffer(z.DRAW_FRAMEBUFFER,qA);for(let vi=0;vi<Ie;vi++)pt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ni.__webglTexture,J,Oe+vi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ni.__webglTexture,J),si?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Mt.__webglTexture,de,bt+vi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mt.__webglTexture,de),J!==0?z.blitFramebuffer(Ve,ke,Ce,Te,$e,st,Ce,Te,z.COLOR_BUFFER_BIT,z.NEAREST):si?z.copyTexSubImage3D(Nt,de,$e,st,bt+vi,Ve,ke,Ce,Te):z.copyTexSubImage2D(Nt,de,$e,st,Ve,ke,Ce,Te);Y.bindFramebuffer(z.READ_FRAMEBUFFER,null),Y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else si?L.isDataTexture||L.isData3DTexture?z.texSubImage3D(Nt,de,$e,st,bt,Ce,Te,Ie,ct,Qe,nt.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Nt,de,$e,st,bt,Ce,Te,Ie,ct,nt.data):z.texSubImage3D(Nt,de,$e,st,bt,Ce,Te,Ie,ct,Qe,nt):L.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,de,$e,st,Ce,Te,ct,Qe,nt.data):L.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,de,$e,st,nt.width,nt.height,ct,nt.data):z.texSubImage2D(z.TEXTURE_2D,de,$e,st,Ce,Te,ct,Qe,nt);z.pixelStorei(z.UNPACK_ROW_LENGTH,_r),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gi),z.pixelStorei(z.UNPACK_SKIP_PIXELS,hs),z.pixelStorei(z.UNPACK_SKIP_ROWS,qt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Qs),de===0&&Z.generateMipmaps&&z.generateMipmap(Nt),Y.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,$=null,ee=null,J=0){return L.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,ee=arguments[1]||null,L=arguments[2],Z=arguments[3],J=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Z,$,ee,J)},this.initRenderTarget=function(L){ie.get(L).__webglFramebuffer===void 0&&D.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?D.setTextureCube(L,0):L.isData3DTexture?D.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?D.setTexture2DArray(L,0):D.setTexture2D(L,0),Y.unbindTexture()},this.resetState=function(){S=0,b=0,U=null,Y.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const P_=/^[og]\s*(.+)?/,V_=/^mtllib /,O_=/^usemtl /,z_=/^usemap /,Wh=/\s+/,Gh=new H,jo=new H,Jh=new H,Zh=new H,ri=new H,zn=new Ge;function W_(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,n){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(n)&&n.length>0?n[n.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const n=this.currentMaterial();if(n&&n.groupEnd===-1&&(n.groupEnd=this.geometry.vertices.length/3,n.groupCount=n.groupEnd-n.groupStart,n.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),n}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,n=this.object.geometry.vertices;n.push(s[e+0],s[e+1],s[e+2]),n.push(s[t+0],s[t+1],s[t+2]),n.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,n=this.object.geometry.normals;n.push(s[e+0],s[e+1],s[e+2]),n.push(s[t+0],s[t+1],s[t+2]),n.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,n=this.object.geometry.normals;Gh.fromArray(s,e),jo.fromArray(s,t),Jh.fromArray(s,i),ri.subVectors(Jh,jo),Zh.subVectors(Gh,jo),ri.cross(Zh),ri.normalize(),n.push(ri.x,ri.y,ri.z),n.push(ri.x,ri.y,ri.z),n.push(ri.x,ri.y,ri.z)},addColor:function(e,t,i){const s=this.colors,n=this.object.geometry.colors;s[e]!==void 0&&n.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&n.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&n.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,n=this.object.geometry.uvs;n.push(s[e+0],s[e+1]),n.push(s[t+0],s[t+1]),n.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,n,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),m=this.parseVertexIndex(t,u),p=this.parseVertexIndex(i,u);if(this.addVertex(f,m,p),this.addColor(f,m,p),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),m=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(f,m,p)}else this.addFaceNormal(f,m,p);if(s!==void 0&&s!==""){const g=this.uvs.length;f=this.parseUVIndex(s,g),m=this.parseUVIndex(n,g),p=this.parseUVIndex(o,g),this.addUV(f,m,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const n=this.parseVertexIndex(e[i],t);this.addVertexPoint(n),this.addColor(n)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let n=0,o=e.length;n<o;n++)this.addVertexLine(this.parseVertexIndex(e[n],i));for(let n=0,o=t.length;n<o;n++)this.addUVLine(this.parseUVIndex(t[n],s))}};return r.startObject("",!1),r}class G_ extends ns{constructor(e){super(e),this.materials=null}load(e,t,i,s){const n=this,o=new oh(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(n.parse(a))}catch(l){s?s(l):console.error(l),n.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new W_;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let o=0,a=i.length;o<a;o++){const l=i[o].trimStart();if(l.length===0)continue;const c=l.charAt(0);if(c!=="#")if(c==="v"){const u=l.split(Wh);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(zn.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Tt),t.colors.push(zn.r,zn.g,zn.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(c==="f"){const u=l.slice(1).trim().split(Wh),f=[];for(let p=0,g=u.length;p<g;p++){const A=u[p];if(A.length>0){const d=A.split("/");f.push(d)}}const m=f[0];for(let p=1,g=f.length-1;p<g;p++){const A=f[p],d=f[p+1];t.addFace(m[0],A[0],d[0],m[1],A[1],d[1],m[2],A[2],d[2])}}else if(c==="l"){const u=l.substring(1).trim().split(" ");let f=[];const m=[];if(l.indexOf("/")===-1)f=u;else for(let p=0,g=u.length;p<g;p++){const A=u[p].split("/");A[0]!==""&&f.push(A[0]),A[1]!==""&&m.push(A[1])}t.addLineGeometry(f,m)}else if(c==="p"){const u=l.slice(1).trim().split(" ");t.addPointGeometry(u)}else if((s=P_.exec(l))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);t.startObject(u)}else if(O_.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(V_.test(l))t.materialLibraries.push(l.substring(7).trim());else if(z_.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(c==="s"){if(s=l.split(" "),s.length>1){const f=s[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const n=new Is;if(n.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0))for(let o=0,a=t.objects.length;o<a;o++){const l=t.objects[o],c=l.geometry,u=l.materials,f=c.type==="Line",m=c.type==="Points";let p=!1;if(c.vertices.length===0)continue;const g=new mi;g.setAttribute("position",new Bt(c.vertices,3)),c.normals.length>0&&g.setAttribute("normal",new Bt(c.normals,3)),c.colors.length>0&&(p=!0,g.setAttribute("color",new Bt(c.colors,3))),c.hasUVIndices===!0&&g.setAttribute("uv",new Bt(c.uvs,2));const A=[];for(let h=0,v=u.length;h<v;h++){const E=u[h],w=E.name+"_"+E.smooth+"_"+p;let C=t.materials[w];if(this.materials!==null){if(C=this.materials.create(E.name),f&&C&&!(C instanceof Tn)){const S=new Tn;Di.prototype.copy.call(S,C),S.color.copy(C.color),C=S}else if(m&&C&&!(C instanceof Rs)){const S=new Rs({size:10,sizeAttenuation:!1});Di.prototype.copy.call(S,C),S.color.copy(C.color),S.map=C.map,C=S}}C===void 0&&(f?C=new Tn:m?C=new Rs({size:1,sizeAttenuation:!1}):C=new Po,C.name=E.name,C.flatShading=!E.smooth,C.vertexColors=p,t.materials[w]=C),A.push(C)}let d;if(A.length>1){for(let h=0,v=u.length;h<v;h++){const E=u[h];g.addGroup(E.groupStart,E.groupCount,h)}f?d=new ih(g,A):m?d=new ko(g,A):d=new zt(g,A)}else f?d=new ih(g,A[0]):m?d=new ko(g,A[0]):d=new zt(g,A[0]);d.name=l.name,n.add(d)}else if(t.vertices.length>0){const o=new Rs({size:1,sizeAttenuation:!1}),a=new mi;a.setAttribute("position",new Bt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(a.setAttribute("color",new Bt(t.colors,3)),o.vertexColors=!0);const l=new ko(a,o);n.add(l)}return n}}class J_ extends ns{constructor(e){super(e)}load(e,t,i,s){const n=this,o=this.path===""?$f.extractUrlBase(e):this.path,a=new oh(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(n.parse(l,o))}catch(c){s?s(c):console.error(c),n.manager.itemError(e)}},i,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const i=e.split(`
`);let s={};const n=/\s+/,o={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let f=u>=0?c.substring(0,u):c;f=f.toLowerCase();let m=u>=0?c.substring(u+1):"";if(m=m.trim(),f==="newmtl")s={name:m},o[m]=s;else if(f==="ka"||f==="kd"||f==="ks"||f==="ke"){const p=m.split(n,3);s[f]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else s[f]=m}const a=new Z_(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class Z_{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:xi,this.wrap=this.options.wrap!==void 0?this.options.wrap:$s}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const i in e){const s=e[i],n={};t[i]=n;for(const o in s){let a=!0,l=s[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(n[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,i=this.materialsInfo[e],s={name:e,side:this.side};function n(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(s[a])return;const c=t.getTextureParams(l,s),u=t.loadTexture(n(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(u.colorSpace=Tt),s[a]=u}for(const a in i){const l=i[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":s.color=je.toWorkingColorSpace(new Ge().fromArray(l),Tt);break;case"ks":s.specular=je.toWorkingColorSpace(new Ge().fromArray(l),Tt);break;case"ke":s.emissive=je.toWorkingColorSpace(new Ge().fromArray(l),Tt);break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break}}return this.materials[e]=new Po(s),this.materials[e]}getTextureParams(e,t){const i={scale:new ze(1,1),offset:new ze(0,0)},s=e.split(/\s+/);let n;return n=s.indexOf("-bm"),n>=0&&(t.bumpScale=parseFloat(s[n+1]),s.splice(n,2)),n=s.indexOf("-s"),n>=0&&(i.scale.set(parseFloat(s[n+1]),parseFloat(s[n+2])),s.splice(n,4)),n=s.indexOf("-o"),n>=0&&(i.offset.set(parseFloat(s[n+1]),parseFloat(s[n+2])),s.splice(n,4)),i.url=s.join(" ").trim(),i}loadTexture(e,t,i,s,n){const o=this.manager!==void 0?this.manager:ah;let a=o.getHandler(e);a===null&&(a=new Xf(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(e,i,s,n);return t!==void 0&&(l.mapping=t),l}}const Hh={type:"change"},Ko={type:"start"},Xh={type:"end"},Wn=new mn,Yh=new ji,H_=Math.cos(70*df.DEG2RAD),Et=new H,Wt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class X_ extends tm{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fr.ROTATE,MIDDLE:Fr.DOLLY,RIGHT:Fr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new or,this._lastTargetPosition=new H,this._quat=new or().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dh,this._sphericalDelta=new dh,this._scale=1,this._panOffset=new H,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new H,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=j_.bind(this),this._onPointerDown=Y_.bind(this),this._onPointerUp=K_.bind(this),this._onContextMenu=sA.bind(this),this._onMouseWheel=eA.bind(this),this._onKeyDown=tA.bind(this),this._onTouchStart=iA.bind(this),this._onTouchMove=rA.bind(this),this._onMouseDown=q_.bind(this),this._onMouseMove=$_.bind(this),this._interceptControlDown=nA.bind(this),this._interceptControlUp=aA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hh),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Wt:i>Math.PI&&(i-=Wt),s<-Math.PI?s+=Wt:s>Math.PI&&(s-=Wt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=o!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Et.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),n=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wn.origin.copy(this.object.position),Wn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wn.direction))<H_?this.object.lookAt(this.target):(Yh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wn.intersectPlane(Yh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(Hh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wt/60*this.autoRotateSpeed*e:Wt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Et.copy(s).sub(this.target);let n=Et.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,n=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(n/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Wt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Wt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Wt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Wt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,n=Math.sqrt(i*i+s*s);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(s,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,n=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Y_(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function j_(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function K_(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xh),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function q_(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=rt.DOLLY;break;case Fr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}break;case Fr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Ko)}function $_(r){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function eA(r){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(r.preventDefault(),this.dispatchEvent(Ko),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Xh))}function tA(r){this.enabled!==!1&&this._handleKeyDown(r)}function iA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=rt.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=rt.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(Ko)}function rA(r){switch(this._trackPointer(r),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=rt.NONE}}function sA(r){this.enabled!==!1&&r.preventDefault()}function nA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class oA extends Sr{modelUrl="";materialUrl="";debugMode=!1;cameraPosition="3,3,3";cameraTarget="0,0,0";showTexture=!0;scene;camera;renderer;controls;animationId;container;currentModel;originalMaterials=new Map;resizeObserver;externalCanvas;static get observedAttributes(){return["show","debug-mode","camera-position","camera-target","show-texture","material-url"]}attributeChangedCallback(e,t,i){e==="show"?this.isShow=i==="true":e==="debug-mode"?this.debugMode=i==="true"||i==="":e==="camera-position"?this.cameraPosition=i||"3,3,3":e==="camera-target"?this.cameraTarget=i||"0,0,0":e==="show-texture"?this.showTexture=i!=="false":e==="material-url"&&(this.materialUrl=i||""),e==="debug-mode"&&this.isShow&&this.render(),super.attributeChangedCallback(e,t,i)}async doOpen(e){this.modelUrl=e,this.showTexture=!0,await this.initializeViewer()}doClose(){this.cleanup(),this.modelUrl="",this.materialUrl=""}getViewerContent(){return`
      <div class="model-container">
        ${this.modelUrl?`
        ${this.isLoading?'<div class="loading">Loading...</div>':""}
        ${!this.isLoading&&this.debugMode?`
          <div class="debug-info" style="z-index: calc(var(--cc-viewer-z-index-each, 1000) + 5);">
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
        z-index: calc(var(--cc-viewer-z-index-each, 1000) + 10);
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
        z-index: calc(var(--cc-viewer-z-index-each, 1000) + 10);
        pointer-events: auto;
      }
      
      .texture-toggle:hover {
        background: rgba(0, 0, 0, 0.9);
      }
    `}onAfterRender(){const e=this.query(".texture-toggle");e&&e.addEventListener("click",()=>this.toggleTexture())}cleanup(){this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=void 0),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentNode===document.body&&document.body.removeChild(this.renderer.domElement),this.renderer=void 0),this.controls&&(this.controls.dispose(),this.controls=void 0),this.scene&&(this.scene.traverse(e=>{e instanceof zt&&(e.geometry?.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material?.dispose())}),this.scene.clear()),this.scene=void 0,this.camera=void 0,this.currentModel=void 0,this.originalMaterials.clear(),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0),this.container=void 0}storeOriginalMaterials(e){e.traverse(t=>{t instanceof zt&&this.originalMaterials.set(t,t.material)})}toggleTexture(){this.showTexture=!this.showTexture,this.currentModel&&(this.currentModel.traverse(e=>{if(e instanceof zt)if(this.showTexture){const t=this.originalMaterials.get(e);t&&(e.material=t)}else{const t=new Ge(13421772);e.material=new Po({color:t})}}),this.render())}getCameraDebugInfo(){if(!this.camera)return"N/A";const e=this.camera.position;return`${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)}`}getTargetDebugInfo(){if(!this.controls)return"N/A";const e=this.controls.target;return`${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)}`}updateDebugInfo(){const e=this.query(".debug-info");e&&this.debugMode&&(e.innerHTML=`
        Camera Position: ${this.getCameraDebugInfo()}<br>
        Camera Target: ${this.getTargetDebugInfo()}<br>
        Controls: Rotate (drag), Zoom (scroll), Pan (right-drag)
      `)}async initializeViewer(){if(await new Promise(t=>setTimeout(t,50)),this.container=this.query(".model-container"),!this.container)return;const e=this.container.getBoundingClientRect();try{this.scene=new Pf,this.scene.background=new Ge(3158064);const t=this.container.clientWidth||this.container.offsetWidth,i=this.container.clientHeight||this.container.offsetHeight;this.camera=new ii(75,t/i,.1,1e3),this.renderer=new k_({antialias:!0,alpha:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0;const s=this.renderer.domElement;s.style.position="fixed",s.style.left=`${e.left}px`,s.style.top=`${e.top}px`,s.style.width=`${e.width}px`,s.style.height=`${e.height}px`,s.style.pointerEvents="auto";const n=window.getComputedStyle(this).getPropertyValue("--cc-viewer-z-index-each").trim(),o=n?parseInt(n,10):1e3;s.style.zIndex=`${o+1}`,document.body.appendChild(s),this.externalCanvas=s,this.controls=new X_(this.camera,s),this.controls.enableDamping=!0,this.controls.dampingFactor=.05;const a=new qf(4210752,2),l=new Kf(16777215,1);l.position.set(1,1,1),this.scene.add(a,l),await this.loadModel(),this.resizeObserver=new ResizeObserver(c=>{for(const u of c){const{width:f,height:m}=u.contentRect;f>0&&m>0&&this.handleResize()}}),this.resizeObserver.observe(this.container),this.animateLoop()}catch(t){throw t}}async loadModel(){const e=new G_;try{if(this.materialUrl){const u=new J_,f=this.materialUrl.substring(0,this.materialUrl.lastIndexOf("/")+1);u.setPath(f);const m=await new Promise((p,g)=>{const A=this.materialUrl.substring(this.materialUrl.lastIndexOf("/")+1);u.load(A,p,void 0,g)});m.preload(),e.setMaterials(m)}const t=this.modelUrl.substring(0,this.modelUrl.lastIndexOf("/")+1);e.setPath(t);const i=await new Promise((u,f)=>{const m=this.modelUrl.substring(this.modelUrl.lastIndexOf("/")+1);e.load(m,u,void 0,f)}),s=new Zr().setFromObject(i),n=new H;s.getSize(n);const o=Math.max(n.x,n.y,n.z);i.scale.multiplyScalar(3/o);const a=new H;if(s.getCenter(a),i.position.sub(a.multiplyScalar(i.scale.x)),!this.scene)return;this.scene.add(i),this.currentModel=i,this.storeOriginalMaterials(i);const l=this.cameraPosition.split(",").map(u=>parseFloat(u.trim())),c=this.cameraTarget.split(",").map(u=>parseFloat(u.trim()));l.length===3&&this.camera.position.set(l[0],l[1],l[2]),c.length===3&&(this.camera.lookAt(c[0],c[1],c[2]),this.controls.target.set(c[0],c[1],c[2])),this.controls.update(),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)}catch(t){throw t}}animateLoop=()=>{!this.renderer||!this.scene||!this.camera||(this.animationId=requestAnimationFrame(this.animateLoop),this.controls&&this.controls.update(),this.renderer.render(this.scene,this.camera),this.updateDebugInfo())};handleResize(){if(!this.container||!this.camera||!this.renderer)return;const e=this.container.getBoundingClientRect(),t=e.width,i=e.height;if(t>0&&i>0){this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i);const s=this.renderer.domElement;s.style.left=`${e.left}px`,s.style.top=`${e.top}px`,s.style.width=`${e.width}px`,s.style.height=`${e.height}px`}}}customElements.get("cc-viewer-3dmodel")||customElements.define("cc-viewer-3dmodel",oA);class lA extends Sr{splatUrl="";debugMode=!1;cameraPosition="3,3,3";_cameraTarget="0,0,0";scene;camera;renderer;controls;animationId;canvas;swiper;static get observedAttributes(){return["show","debug-mode","camera-position","camera-target"]}attributeChangedCallback(e,t,i){e==="show"?this.isShow=i==="true":e==="debug-mode"?this.debugMode=i==="true":e==="camera-position"?this.cameraPosition=i||"3,3,3":e==="camera-target"&&(this._cameraTarget=i||"0,0,0"),super.attributeChangedCallback(e,t,i)}async doOpen(e){this.splatUrl=e,await this.initializeViewer()}doClose(){this.cleanup()}getViewerContent(){return""}shouldUseCustomRender(){return!0}customRender(){const e=this.css`
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
        z-index: var(--cc-viewer-z-index-each, 1000);
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
        z-index: calc(var(--cc-viewer-z-index-each, 1000) + 3);
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
      `)}async initializeViewer(){const e=`gaussian-canvas-${Date.now()}`,t=this.query(".viewer");if(!t)return;const i=t.getBoundingClientRect();let s=document.getElementById(e);if(!s){s=document.createElement("canvas"),s.id=e,s.style.position="fixed",s.style.top=`${i.top}px`,s.style.left=`${i.left}px`,s.style.width=`${i.width}px`,s.style.height=`${i.height}px`;const n=window.getComputedStyle(this).getPropertyValue("--cc-viewer-z-index-each").trim(),o=n?parseInt(n,10):1e3;s.style.zIndex=`${o+1}`,s.style.pointerEvents="auto",s.style.display="block",s.style.background="transparent",document.body.appendChild(s)}s.style.top=`${i.top}px`,s.style.left=`${i.left}px`,s.style.width=`${i.width}px`,s.style.height=`${i.height}px`,this.canvas=s;try{const n=this.query(".gaussian-container");if(!n)return;const o=await Promise.resolve().then(()=>NA);this.scene=new o.Scene,this.camera=new o.Camera,this.renderer=new o.WebGLRenderer(this.canvas),this.controls=new o.OrbitControls(this.camera,this.canvas),await o.Loader.LoadAsync(this.splatUrl,this.scene);let a=0;const l=()=>{if(!(!this.renderer||!this.scene||!this.camera)){this.animationId=requestAnimationFrame(l),this.controls&&this.controls.update();try{this.renderer.render(this.scene,this.camera)}catch{}a===0&&this.canvas&&a++,this.debugMode&&this.updateDebugInfo()}};l(),new ResizeObserver(()=>{this.handleResize()}).observe(n)}catch(n){throw n}}handleResize(){const e=this.query(".gaussian-container");if(!e||!this.renderer||!this.camera)return;const t=e.clientWidth,i=e.clientHeight;typeof this.renderer.setSize=="function"&&this.renderer.setSize(t,i),typeof this.camera.aspect<"u"&&(this.camera.aspect=t/i,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix())}}customElements.get("cc-viewer-gaussian")||customElements.define("cc-viewer-gaussian",lA);const Gn={image:"cc-viewer-image",panorama:"cc-viewer-panorama",youtube:"cc-viewer-youtube",video:"cc-viewer-video","3dmodel":"cc-viewer-3dmodel",gaussian:"cc-viewer-gaussian"};class cA extends Ds{swiper;currentSlideIndex=0;currentType="";boundHandleNavigatePrev;boundHandleNavigateNext;open(e,t,i){const s=this.currentType;if(this.currentType=t,s&&s!==t){const n=Gn[s],o=this.query(n);o&&o.close&&o.close()}s!==t&&this.render(),setTimeout(()=>{const n=Gn[t],o=this.query(n);o&&i&&Object.entries(i).forEach(([a,l])=>{const c=a.replace(/([A-Z])/g,"-$1").toLowerCase();typeof l=="boolean"?l?o.setAttribute(c,""):o.removeAttribute(c):o.setAttribute(c,String(l))}),this.updateNavigationButtons(),o&&o.open(e)},0)}firstUpdated(){this.dispatch("load"),this.boundHandleNavigatePrev&&this.removeEventListener("navigate-prev",this.boundHandleNavigatePrev),this.boundHandleNavigateNext&&this.removeEventListener("navigate-next",this.boundHandleNavigateNext),this.boundHandleNavigatePrev=this.handleNavigatePrev.bind(this),this.boundHandleNavigateNext=this.handleNavigateNext.bind(this),this.addEventListener("navigate-prev",this.boundHandleNavigatePrev),this.addEventListener("navigate-next",this.boundHandleNavigateNext)}handleNavigatePrev(e){if(!this.swiper)return;const t=this.swiper.slides.length;if(t<=1)return;const i=this.swiper.slider?.params?.loop===!0;if(this.currentSlideIndex<=0)if(i)this.currentSlideIndex=t-1;else return;else this.currentSlideIndex--;this.navigateToSlide(this.currentSlideIndex)}handleNavigateNext(e){if(!this.swiper)return;const t=this.swiper.slides.length;if(t<=1)return;const i=this.swiper.slider?.params?.loop===!0;if(this.currentSlideIndex>=t-1)if(i)this.currentSlideIndex=0;else return;else this.currentSlideIndex++;this.navigateToSlide(this.currentSlideIndex)}navigateToSlide(e){if(!this.swiper||!this.swiper.slides[e])return;const t=this.swiper.slides[e],i=t.getAttribute("image-url")||"",s=t.getAttribute("image-type")||"image",n=Gn[this.currentType],o=this.query(n);o&&o.close();const a={};t.hasAttribute("fit-to-container")&&(a.fitToContainer=!0),t.hasAttribute("debug-mode")&&(a.debugMode=!0),t.hasAttribute("camera-position")&&(a.cameraPosition=t.getAttribute("camera-position")),t.hasAttribute("camera-target")&&(a.cameraTarget=t.getAttribute("camera-target")),t.hasAttribute("show-texture")&&(a.showTexture=t.getAttribute("show-texture")==="true"),t.hasAttribute("material-url")&&(a.materialUrl=t.getAttribute("material-url")),this.currentSlideIndex=e,this.open(i,s,a),this.swiper.slider&&this.swiper.slider.slideTo(e)}updateNavigationButtons(){if(!this.swiper)return;const e=this.swiper.slides.length,t=this.swiper.slider?.params?.loop===!0;if(e<=1){this.setNavigationVisibility(!1,!1);return}if(t){this.setNavigationVisibility(!0,!0);return}const i=this.currentSlideIndex>0,s=this.currentSlideIndex<e-1;this.setNavigationVisibility(i,s)}setNavigationVisibility(e,t){[this.query("cc-viewer-image"),this.query("cc-viewer-youtube"),this.query("cc-viewer-panorama"),this.query("cc-viewer-video"),this.query("cc-viewer-3dmodel"),this.query("cc-viewer-gaussian")].forEach(i=>{if(i){const s=i;s.showPrevButton=e,s.showNextButton=t}})}setSwiper(e){this.swiper=e}setCurrentSlideIndex(e){this.currentSlideIndex=e}render(){const e=this.css`
      :host {
        --cc-viewer-z-index: 1000;
      }
      
      cc-viewer-panorama, cc-viewer-image, cc-viewer-youtube, cc-viewer-video,
      cc-viewer-3dmodel, cc-viewer-gaussian {
        --cc-viewer-z-index-each: var(--cc-viewer-z-index);
      }
    `;let t="";if(this.currentType){const s=Gn[this.currentType];s&&(t=`<${s}></${s}>`)}const i=`
      ${e}
      ${t}
    `;this.updateShadowRoot(i)}}customElements.get("cc-viewer")||customElements.define("cc-viewer",cA);class Re{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}equals(e){return!(this.x!==e.x||this.y!==e.y||this.z!==e.z)}add(e){return typeof e=="number"?new Re(this.x+e,this.y+e,this.z+e):new Re(this.x+e.x,this.y+e.y,this.z+e.z)}subtract(e){return typeof e=="number"?new Re(this.x-e,this.y-e,this.z-e):new Re(this.x-e.x,this.y-e.y,this.z-e.z)}multiply(e){return typeof e=="number"?new Re(this.x*e,this.y*e,this.z*e):e instanceof Re?new Re(this.x*e.x,this.y*e.y,this.z*e.z):new Re(this.x*e.buffer[0]+this.y*e.buffer[4]+this.z*e.buffer[8]+e.buffer[12],this.x*e.buffer[1]+this.y*e.buffer[5]+this.z*e.buffer[9]+e.buffer[13],this.x*e.buffer[2]+this.y*e.buffer[6]+this.z*e.buffer[10]+e.buffer[14])}divide(e){return typeof e=="number"?new Re(this.x/e,this.y/e,this.z/e):new Re(this.x/e.x,this.y/e.y,this.z/e.z)}cross(e){const t=this.y*e.z-this.z*e.y,i=this.z*e.x-this.x*e.z,s=this.x*e.y-this.y*e.x;return new Re(t,i,s)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lerp(e,t){return new Re(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t,this.z+(e.z-this.z)*t)}min(e){return new Re(Math.min(this.x,e.x),Math.min(this.y,e.y),Math.min(this.z,e.z))}max(e){return new Re(Math.max(this.x,e.x),Math.max(this.y,e.y),Math.max(this.z,e.z))}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`Invalid component index: ${e}`)}}minComponent(){return this.x<this.y&&this.x<this.z?0:this.y<this.z?1:2}maxComponent(){return this.x>this.y&&this.x>this.z?0:this.y>this.z?1:2}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}distanceTo(e){return Math.sqrt((this.x-e.x)**2+(this.y-e.y)**2+(this.z-e.z)**2)}normalize(){const e=this.magnitude();return new Re(this.x/e,this.y/e,this.z/e)}flat(){return[this.x,this.y,this.z]}clone(){return new Re(this.x,this.y,this.z)}toString(){return`[${this.flat().join(", ")}]`}static One(e=1){return new Re(e,e,e)}}class ut{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}equals(e){return!(this.x!==e.x||this.y!==e.y||this.z!==e.z||this.w!==e.w)}normalize(){const e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return new ut(this.x/e,this.y/e,this.z/e,this.w/e)}multiply(e){const t=this.w,i=this.x,s=this.y,n=this.z,o=e.w,a=e.x,l=e.y,c=e.z;return new ut(t*a+i*o+s*c-n*l,t*l-i*c+s*o+n*a,t*c+i*l-s*a+n*o,t*o-i*a-s*l-n*c)}inverse(){const e=this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w;return new ut(-this.x/e,-this.y/e,-this.z/e,this.w/e)}apply(e){const t=new ut(e.x,e.y,e.z,0),i=new ut(-this.x,-this.y,-this.z,this.w),s=this.multiply(t).multiply(i);return new Re(s.x,s.y,s.z)}flat(){return[this.x,this.y,this.z,this.w]}clone(){return new ut(this.x,this.y,this.z,this.w)}static FromEuler(e){const t=e.x/2,i=e.y/2,s=e.z/2,n=Math.cos(i),o=Math.sin(i),a=Math.cos(t),l=Math.sin(t),c=Math.cos(s),u=Math.sin(s);return new ut(n*l*c+o*a*u,o*a*c-n*l*u,n*a*u-o*l*c,n*a*c+o*l*u)}toEuler(){const e=2*(this.w*this.x+this.y*this.z),t=1-2*(this.x*this.x+this.y*this.y),i=Math.atan2(e,t);let s;const n=2*(this.w*this.y-this.z*this.x);Math.abs(n)>=1?s=Math.sign(n)*Math.PI/2:s=Math.asin(n);const o=2*(this.w*this.z+this.x*this.y),a=1-2*(this.y*this.y+this.z*this.z),l=Math.atan2(o,a);return new Re(i,s,l)}static FromMatrix3(e){const t=e.buffer,i=t[0]+t[4]+t[8];let s,n,o,a;if(i>0){const l=.5/Math.sqrt(i+1);a=.25/l,s=(t[7]-t[5])*l,n=(t[2]-t[6])*l,o=(t[3]-t[1])*l}else if(t[0]>t[4]&&t[0]>t[8]){const l=2*Math.sqrt(1+t[0]-t[4]-t[8]);a=(t[7]-t[5])/l,s=.25*l,n=(t[1]+t[3])/l,o=(t[2]+t[6])/l}else if(t[4]>t[8]){const l=2*Math.sqrt(1+t[4]-t[0]-t[8]);a=(t[2]-t[6])/l,s=(t[1]+t[3])/l,n=.25*l,o=(t[5]+t[7])/l}else{const l=2*Math.sqrt(1+t[8]-t[0]-t[4]);a=(t[3]-t[1])/l,s=(t[2]+t[6])/l,n=(t[5]+t[7])/l,o=.25*l}return new ut(s,n,o,a)}static FromAxisAngle(e,t){const i=t/2,s=Math.sin(i),n=Math.cos(i);return new ut(e.x*s,e.y*s,e.z*s,n)}static LookRotation(e){const t=new Re(0,0,1),i=t.dot(e);if(Math.abs(i- -1)<1e-6)return new ut(0,1,0,Math.PI);if(Math.abs(i-1)<1e-6)return new ut;const s=Math.acos(i),n=t.cross(e).normalize();return ut.FromAxisAngle(n,s)}toString(){return`[${this.flat().join(", ")}]`}}class jh{constructor(){const e=new Map;this.addEventListener=(t,i)=>{e.has(t)||e.set(t,new Set),e.get(t).add(i)},this.removeEventListener=(t,i)=>{e.has(t)&&e.get(t).delete(i)},this.hasEventListener=(t,i)=>e.has(t)?e.get(t).has(i):!1,this.dispatchEvent=t=>{if(e.has(t.type))for(const i of e.get(t.type))i(t)}}}class Lt{constructor(e=1,t=0,i=0,s=0,n=0,o=1,a=0,l=0,c=0,u=0,f=1,m=0,p=0,g=0,A=0,d=1){this.buffer=[e,t,i,s,n,o,a,l,c,u,f,m,p,g,A,d]}equals(e){if(this.buffer.length!==e.buffer.length)return!1;if(this.buffer===e.buffer)return!0;for(let t=0;t<this.buffer.length;t++)if(this.buffer[t]!==e.buffer[t])return!1;return!0}multiply(e){const t=this.buffer,i=e.buffer;return new Lt(i[0]*t[0]+i[1]*t[4]+i[2]*t[8]+i[3]*t[12],i[0]*t[1]+i[1]*t[5]+i[2]*t[9]+i[3]*t[13],i[0]*t[2]+i[1]*t[6]+i[2]*t[10]+i[3]*t[14],i[0]*t[3]+i[1]*t[7]+i[2]*t[11]+i[3]*t[15],i[4]*t[0]+i[5]*t[4]+i[6]*t[8]+i[7]*t[12],i[4]*t[1]+i[5]*t[5]+i[6]*t[9]+i[7]*t[13],i[4]*t[2]+i[5]*t[6]+i[6]*t[10]+i[7]*t[14],i[4]*t[3]+i[5]*t[7]+i[6]*t[11]+i[7]*t[15],i[8]*t[0]+i[9]*t[4]+i[10]*t[8]+i[11]*t[12],i[8]*t[1]+i[9]*t[5]+i[10]*t[9]+i[11]*t[13],i[8]*t[2]+i[9]*t[6]+i[10]*t[10]+i[11]*t[14],i[8]*t[3]+i[9]*t[7]+i[10]*t[11]+i[11]*t[15],i[12]*t[0]+i[13]*t[4]+i[14]*t[8]+i[15]*t[12],i[12]*t[1]+i[13]*t[5]+i[14]*t[9]+i[15]*t[13],i[12]*t[2]+i[13]*t[6]+i[14]*t[10]+i[15]*t[14],i[12]*t[3]+i[13]*t[7]+i[14]*t[11]+i[15]*t[15])}clone(){const e=this.buffer;return new Lt(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}determinant(){const e=this.buffer;return e[12]*e[9]*e[6]*e[3]-e[8]*e[13]*e[6]*e[3]-e[12]*e[5]*e[10]*e[3]+e[4]*e[13]*e[10]*e[3]+e[8]*e[5]*e[14]*e[3]-e[4]*e[9]*e[14]*e[3]-e[12]*e[9]*e[2]*e[7]+e[8]*e[13]*e[2]*e[7]+e[12]*e[1]*e[10]*e[7]-e[0]*e[13]*e[10]*e[7]-e[8]*e[1]*e[14]*e[7]+e[0]*e[9]*e[14]*e[7]+e[12]*e[5]*e[2]*e[11]-e[4]*e[13]*e[2]*e[11]-e[12]*e[1]*e[6]*e[11]+e[0]*e[13]*e[6]*e[11]+e[4]*e[1]*e[14]*e[11]-e[0]*e[5]*e[14]*e[11]-e[8]*e[5]*e[2]*e[15]+e[4]*e[9]*e[2]*e[15]+e[8]*e[1]*e[6]*e[15]-e[0]*e[9]*e[6]*e[15]-e[4]*e[1]*e[10]*e[15]+e[0]*e[5]*e[10]*e[15]}invert(){const e=this.buffer,t=this.determinant();if(t===0)throw new Error("Matrix is not invertible.");const i=1/t;return new Lt(i*(e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10]),i*(-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10]),i*(e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6]),i*(-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6]),i*(-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10]),i*(e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10]),i*(-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6]),i*(e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6]),i*(e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9]),i*(-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9]),i*(e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5]),i*(-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5]),i*(-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9]),i*(e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9]),i*(-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5]),i*(e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5]))}static Compose(e,t,i){const s=t.x,n=t.y,o=t.z,a=t.w,l=s+s,c=n+n,u=o+o,f=s*l,m=s*c,p=s*u,g=n*c,A=n*u,d=o*u,h=a*l,v=a*c,E=a*u,w=i.x,C=i.y,S=i.z;return new Lt((1-(g+d))*w,(m+E)*w,(p-v)*w,0,(m-E)*C,(1-(f+d))*C,(A+h)*C,0,(p+v)*S,(A-h)*S,(1-(f+g))*S,0,e.x,e.y,e.z,1)}toString(){return`[${this.buffer.join(", ")}]`}}class hA extends Event{constructor(e){super("objectAdded"),this.object=e}}class uA extends Event{constructor(e){super("objectRemoved"),this.object=e}}class dA extends Event{constructor(e){super("objectChanged"),this.object=e}}class Jn extends jh{constructor(){super(),this.positionChanged=!1,this.rotationChanged=!1,this.scaleChanged=!1,this._position=new Re,this._rotation=new ut,this._scale=new Re(1,1,1),this._transform=new Lt,this._changeEvent=new dA(this),this.update=()=>{},this.applyPosition=()=>{this.position=new Re},this.applyRotation=()=>{this.rotation=new ut},this.applyScale=()=>{this.scale=new Re(1,1,1)},this.raiseChangeEvent=()=>{this.dispatchEvent(this._changeEvent)}}_updateMatrix(){this._transform=Lt.Compose(this._position,this._rotation,this._scale)}get position(){return this._position}set position(e){this._position.equals(e)||(this._position=e,this.positionChanged=!0,this._updateMatrix(),this.dispatchEvent(this._changeEvent))}get rotation(){return this._rotation}set rotation(e){this._rotation.equals(e)||(this._rotation=e,this.rotationChanged=!0,this._updateMatrix(),this.dispatchEvent(this._changeEvent))}get scale(){return this._scale}set scale(e){this._scale.equals(e)||(this._scale=e,this.scaleChanged=!0,this._updateMatrix(),this.dispatchEvent(this._changeEvent))}get forward(){let e=new Re(0,0,1);return e=this.rotation.apply(e),e}get transform(){return this._transform}}class Dt{constructor(e=1,t=0,i=0,s=0,n=1,o=0,a=0,l=0,c=1){this.buffer=[e,t,i,s,n,o,a,l,c]}equals(e){if(this.buffer.length!==e.buffer.length)return!1;if(this.buffer===e.buffer)return!0;for(let t=0;t<this.buffer.length;t++)if(this.buffer[t]!==e.buffer[t])return!1;return!0}multiply(e){const t=this.buffer,i=e.buffer;return new Dt(i[0]*t[0]+i[3]*t[1]+i[6]*t[2],i[1]*t[0]+i[4]*t[1]+i[7]*t[2],i[2]*t[0]+i[5]*t[1]+i[8]*t[2],i[0]*t[3]+i[3]*t[4]+i[6]*t[5],i[1]*t[3]+i[4]*t[4]+i[7]*t[5],i[2]*t[3]+i[5]*t[4]+i[8]*t[5],i[0]*t[6]+i[3]*t[7]+i[6]*t[8],i[1]*t[6]+i[4]*t[7]+i[7]*t[8],i[2]*t[6]+i[5]*t[7]+i[8]*t[8])}clone(){const e=this.buffer;return new Dt(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}static Eye(e=1){return new Dt(e,0,0,0,e,0,0,0,e)}static Diagonal(e){return new Dt(e.x,0,0,0,e.y,0,0,0,e.z)}static RotationFromQuaternion(e){return new Dt(1-2*e.y*e.y-2*e.z*e.z,2*e.x*e.y-2*e.z*e.w,2*e.x*e.z+2*e.y*e.w,2*e.x*e.y+2*e.z*e.w,1-2*e.x*e.x-2*e.z*e.z,2*e.y*e.z-2*e.x*e.w,2*e.x*e.z-2*e.y*e.w,2*e.y*e.z+2*e.x*e.w,1-2*e.x*e.x-2*e.y*e.y)}static RotationFromEuler(e){const t=Math.cos(e.x),i=Math.sin(e.x),s=Math.cos(e.y),n=Math.sin(e.y),o=Math.cos(e.z),a=Math.sin(e.z),l=[s*o+n*i*a,-s*a+n*i*o,n*t,t*a,t*o,-i,-n*o+s*i*a,n*a+s*i*o,s*t];return new Dt(...l)}toString(){return`[${this.buffer.join(", ")}]`}}const Kh=class Ls{constructor(e=0,t=null,i=null,s=null,n=null){this.changed=!1,this.detached=!1,this._vertexCount=e,this._positions=t||new Float32Array(0),this._rotations=i||new Float32Array(0),this._scales=s||new Float32Array(0),this._colors=n||new Uint8Array(0),this._selection=new Uint8Array(this.vertexCount),this.translate=o=>{for(let a=0;a<this.vertexCount;a++)this.positions[3*a+0]+=o.x,this.positions[3*a+1]+=o.y,this.positions[3*a+2]+=o.z;this.changed=!0},this.rotate=o=>{const a=Dt.RotationFromQuaternion(o).buffer;for(let l=0;l<this.vertexCount;l++){const c=this.positions[3*l+0],u=this.positions[3*l+1],f=this.positions[3*l+2];this.positions[3*l+0]=a[0]*c+a[1]*u+a[2]*f,this.positions[3*l+1]=a[3]*c+a[4]*u+a[5]*f,this.positions[3*l+2]=a[6]*c+a[7]*u+a[8]*f;const m=new ut(this.rotations[4*l+1],this.rotations[4*l+2],this.rotations[4*l+3],this.rotations[4*l+0]),p=o.multiply(m);this.rotations[4*l+1]=p.x,this.rotations[4*l+2]=p.y,this.rotations[4*l+3]=p.z,this.rotations[4*l+0]=p.w}this.changed=!0},this.scale=o=>{for(let a=0;a<this.vertexCount;a++)this.positions[3*a+0]*=o.x,this.positions[3*a+1]*=o.y,this.positions[3*a+2]*=o.z,this.scales[3*a+0]*=o.x,this.scales[3*a+1]*=o.y,this.scales[3*a+2]*=o.z;this.changed=!0},this.serialize=()=>{const o=new Uint8Array(this.vertexCount*Ls.RowLength),a=new Float32Array(o.buffer),l=new Uint8Array(o.buffer);for(let c=0;c<this.vertexCount;c++)a[8*c+0]=this.positions[3*c+0],a[8*c+1]=this.positions[3*c+1],a[8*c+2]=this.positions[3*c+2],l[32*c+24+0]=this.colors[4*c+0],l[32*c+24+1]=this.colors[4*c+1],l[32*c+24+2]=this.colors[4*c+2],l[32*c+24+3]=this.colors[4*c+3],a[8*c+3+0]=this.scales[3*c+0],a[8*c+3+1]=this.scales[3*c+1],a[8*c+3+2]=this.scales[3*c+2],l[32*c+28+0]=this.rotations[4*c+0]*128+128&255,l[32*c+28+1]=this.rotations[4*c+1]*128+128&255,l[32*c+28+2]=this.rotations[4*c+2]*128+128&255,l[32*c+28+3]=this.rotations[4*c+3]*128+128&255;return o},this.reattach=(o,a,l,c,u)=>{console.assert(o.byteLength===this.vertexCount*3*4,`Expected ${this.vertexCount*3*4} bytes, got ${o.byteLength} bytes`),this._positions=new Float32Array(o),this._rotations=new Float32Array(a),this._scales=new Float32Array(l),this._colors=new Uint8Array(c),this._selection=new Uint8Array(u),this.detached=!1}}static Deserialize(e){const t=e.length/Ls.RowLength,i=new Float32Array(3*t),s=new Float32Array(4*t),n=new Float32Array(3*t),o=new Uint8Array(4*t),a=new Float32Array(e.buffer),l=new Uint8Array(e.buffer);for(let c=0;c<t;c++)i[3*c+0]=a[8*c+0],i[3*c+1]=a[8*c+1],i[3*c+2]=a[8*c+2],s[4*c+0]=(l[32*c+28+0]-128)/128,s[4*c+1]=(l[32*c+28+1]-128)/128,s[4*c+2]=(l[32*c+28+2]-128)/128,s[4*c+3]=(l[32*c+28+3]-128)/128,n[3*c+0]=a[8*c+3+0],n[3*c+1]=a[8*c+3+1],n[3*c+2]=a[8*c+3+2],o[4*c+0]=l[32*c+24+0],o[4*c+1]=l[32*c+24+1],o[4*c+2]=l[32*c+24+2],o[4*c+3]=l[32*c+24+3];return new Ls(t,i,s,n,o)}get vertexCount(){return this._vertexCount}get positions(){return this._positions}get rotations(){return this._rotations}get scales(){return this._scales}get colors(){return this._colors}get selection(){return this._selection}clone(){return new Ls(this.vertexCount,new Float32Array(this.positions),new Float32Array(this.rotations),new Float32Array(this.scales),new Uint8Array(this.colors))}};Kh.RowLength=32;let Si=Kh;const qh=class gu{constructor(e,t,i,s,n){this._vertexCount=e,this._positions=t,this._data=i,this._width=s,this._height=n,this.serialize=()=>new Uint8Array(this._data.buffer)}static Deserialize(e,t,i){const s=new Uint32Array(e.buffer),n=new Float32Array(e.buffer),o=Math.floor(n.byteLength/this.RowLength),a=new Float32Array(o*3);for(let l=0;l<o;l++)a[3*l+0]=n[16*l+0],a[3*l+1]=n[16*l+1],a[3*l+2]=n[16*l+2],a[3*l+0]=n[16*l+3];return new gu(o,a,s,t,i)}get vertexCount(){return this._vertexCount}get positions(){return this._positions}get data(){return this._data}get width(){return this._width}get height(){return this._height}};qh.RowLength=64;let $h=qh;const eu=class{static SplatToPLY(e,t){let i=`ply
format binary_little_endian 1.0
`;i+=`element vertex ${t}
`;const s=["x","y","z","nx","ny","nz","f_dc_0","f_dc_1","f_dc_2"];for(let d=0;d<45;d++)s.push(`f_rest_${d}`);s.push("opacity"),s.push("scale_0"),s.push("scale_1"),s.push("scale_2"),s.push("rot_0"),s.push("rot_1"),s.push("rot_2"),s.push("rot_3");for(const d of s)i+=`property float ${d}
`;i+=`end_header
`;const n=new TextEncoder().encode(i),o=248,a=t*o,l=new DataView(new ArrayBuffer(n.length+a));new Uint8Array(l.buffer).set(n,0);const c=new Float32Array(e),u=new Uint8Array(e),f=n.length,m=24,p=m+12+180,g=p+4,A=g+12;for(let d=0;d<t;d++){const h=c[8*d+0],v=c[8*d+1],E=c[8*d+2],w=(u[32*d+24+0]/255-.5)/this.SH_C0,C=(u[32*d+24+1]/255-.5)/this.SH_C0,S=(u[32*d+24+2]/255-.5)/this.SH_C0,b=u[32*d+24+3]/255,U=Math.log(b/(1-b)),y=Math.log(c[8*d+3+0]),_=Math.log(c[8*d+3+1]),x=Math.log(c[8*d+3+2]);let T=new ut((u[32*d+28+1]-128)/128,(u[32*d+28+2]-128)/128,(u[32*d+28+3]-128)/128,(u[32*d+28+0]-128)/128);T=T.normalize();const R=T.w,Q=T.x,N=T.y,k=T.z;l.setFloat32(f+o*d+0,h,!0),l.setFloat32(f+o*d+4,v,!0),l.setFloat32(f+o*d+8,E,!0),l.setFloat32(f+o*d+m+0,w,!0),l.setFloat32(f+o*d+m+4,C,!0),l.setFloat32(f+o*d+m+8,S,!0),l.setFloat32(f+o*d+p,U,!0),l.setFloat32(f+o*d+g+0,y,!0),l.setFloat32(f+o*d+g+4,_,!0),l.setFloat32(f+o*d+g+8,x,!0),l.setFloat32(f+o*d+A+0,R,!0),l.setFloat32(f+o*d+A+4,Q,!0),l.setFloat32(f+o*d+A+8,N,!0),l.setFloat32(f+o*d+A+12,k,!0)}return l.buffer}};eu.SH_C0=.28209479177387814;let cs=eu;class Bs{constructor(e,t){this.min=e,this.max=t}contains(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}intersects(e){return this.max.x>=e.min.x&&this.min.x<=e.max.x&&this.max.y>=e.min.y&&this.min.y<=e.max.y&&this.max.z>=e.min.z&&this.min.z<=e.max.z}size(){return this.max.subtract(this.min)}center(){return this.min.add(this.max).divide(2)}expand(e){this.min=this.min.min(e),this.max=this.max.max(e)}permute(){const e=this.min,t=this.max;this.min=new Re(Math.min(e.x,t.x),Math.min(e.y,t.y),Math.min(e.z,t.z)),this.max=new Re(Math.max(e.x,t.x),Math.max(e.y,t.y),Math.max(e.z,t.z))}}class Gt extends Jn{constructor(e=void 0){super(),this.selectedChanged=!1,this.colorTransformChanged=!1,this._selected=!1,this._colorTransforms=[],this._colorTransformsMap=new Map,this._data=e||new Si,this._bounds=new Bs(new Re(1/0,1/0,1/0),new Re(-1/0,-1/0,-1/0)),this.recalculateBounds=()=>{this._bounds=new Bs(new Re(1/0,1/0,1/0),new Re(-1/0,-1/0,-1/0));for(let t=0;t<this._data.vertexCount;t++)this._bounds.expand(new Re(this._data.positions[3*t],this._data.positions[3*t+1],this._data.positions[3*t+2]))},this.applyPosition=()=>{this.data.translate(this.position),this.position=new Re},this.applyRotation=()=>{this.data.rotate(this.rotation),this.rotation=new ut},this.applyScale=()=>{this.data.scale(this.scale),this.scale=new Re(1,1,1)},this.recalculateBounds()}saveToFile(e=null,t="splat"){if(!document)return;if(!e){const a=new Date;e=`splat-${a.getFullYear()}-${a.getMonth()+1}-${a.getDate()}.${t}`}const i=this.clone();i.applyRotation(),i.applyScale(),i.applyPosition();const s=i.data.serialize();let n;if(t==="ply"){const a=cs.SplatToPLY(s.buffer,i.data.vertexCount);n=new Blob([a],{type:"application/octet-stream"})}else n=new Blob([s.buffer],{type:"application/octet-stream"});const o=document.createElement("a");o.download=e,o.href=URL.createObjectURL(n),o.click()}get data(){return this._data}get selected(){return this._selected}set selected(e){this._selected!==e&&(this._selected=e,this.selectedChanged=!0,this.dispatchEvent(this._changeEvent))}get colorTransforms(){return this._colorTransforms}get colorTransformsMap(){return this._colorTransformsMap}get bounds(){let e=this._bounds.center();e=e.add(this.position);let t=this._bounds.size();return t=t.multiply(this.scale),new Bs(e.subtract(t.divide(2)),e.add(t.divide(2)))}clone(){const e=new Gt(this.data.clone());return e.position=this.position.clone(),e.rotation=this.rotation.clone(),e.scale=this.scale.clone(),e}}class gr extends Jn{constructor(e){super(),this._data=e}get data(){return this._data}}class tu{constructor(){this._fx=1132,this._fy=1132,this._near=.1,this._far=100,this._width=512,this._height=512,this._projectionMatrix=new Lt,this._viewMatrix=new Lt,this._viewProj=new Lt,this._updateProjectionMatrix=()=>{this._projectionMatrix=new Lt(2*this.fx/this.width,0,0,0,0,-2*this.fy/this.height,0,0,0,0,this.far/(this.far-this.near),1,0,0,-(this.far*this.near)/(this.far-this.near),0),this._viewProj=this.projectionMatrix.multiply(this.viewMatrix)},this.update=(e,t)=>{const i=Dt.RotationFromQuaternion(t).buffer,s=e.flat();this._viewMatrix=new Lt(i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,-s[0]*i[0]-s[1]*i[3]-s[2]*i[6],-s[0]*i[1]-s[1]*i[4]-s[2]*i[7],-s[0]*i[2]-s[1]*i[5]-s[2]*i[8],1),this._viewProj=this.projectionMatrix.multiply(this.viewMatrix)},this.setSize=(e,t)=>{this._width=e,this._height=t,this._updateProjectionMatrix()}}get fx(){return this._fx}set fx(e){this._fx!==e&&(this._fx=e,this._updateProjectionMatrix())}get fy(){return this._fy}set fy(e){this._fy!==e&&(this._fy=e,this._updateProjectionMatrix())}get near(){return this._near}set near(e){this._near!==e&&(this._near=e,this._updateProjectionMatrix())}get far(){return this._far}set far(e){this._far!==e&&(this._far=e,this._updateProjectionMatrix())}get width(){return this._width}get height(){return this._height}get projectionMatrix(){return this._projectionMatrix}get viewMatrix(){return this._viewMatrix}get viewProj(){return this._viewProj}}class Jt{constructor(e=0,t=0,i=0,s=0){this.x=e,this.y=t,this.z=i,this.w=s}equals(e){return!(this.x!==e.x||this.y!==e.y||this.z!==e.z||this.w!==e.w)}add(e){return typeof e=="number"?new Jt(this.x+e,this.y+e,this.z+e,this.w+e):new Jt(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)}subtract(e){return typeof e=="number"?new Jt(this.x-e,this.y-e,this.z-e,this.w-e):new Jt(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)}multiply(e){return typeof e=="number"?new Jt(this.x*e,this.y*e,this.z*e,this.w*e):e instanceof Jt?new Jt(this.x*e.x,this.y*e.y,this.z*e.z,this.w*e.w):new Jt(this.x*e.buffer[0]+this.y*e.buffer[4]+this.z*e.buffer[8]+this.w*e.buffer[12],this.x*e.buffer[1]+this.y*e.buffer[5]+this.z*e.buffer[9]+this.w*e.buffer[13],this.x*e.buffer[2]+this.y*e.buffer[6]+this.z*e.buffer[10]+this.w*e.buffer[14],this.x*e.buffer[3]+this.y*e.buffer[7]+this.z*e.buffer[11]+this.w*e.buffer[15])}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lerp(e,t){return new Jt(this.x+(e.x-this.x)*t,this.y+(e.y-this.y)*t,this.z+(e.z-this.z)*t,this.w+(e.w-this.w)*t)}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}distanceTo(e){return Math.sqrt((this.x-e.x)**2+(this.y-e.y)**2+(this.z-e.z)**2+(this.w-e.w)**2)}normalize(){const e=this.magnitude();return new Jt(this.x/e,this.y/e,this.z/e,this.w/e)}flat(){return[this.x,this.y,this.z,this.w]}clone(){return new Jt(this.x,this.y,this.z,this.w)}toString(){return`[${this.flat().join(", ")}]`}}class pA extends Jn{constructor(e=void 0){super(),this._data=e||new tu,this._position=new Re(0,0,-5),this.update=()=>{this.data.update(this.position,this.rotation)},this.screenPointToRay=(t,i)=>{const s=new Jt(t,i,-1,1),n=this._data.projectionMatrix.invert(),o=s.multiply(n),a=this._data.viewMatrix.invert(),l=o.multiply(a);return new Re(l.x/l.w,l.y/l.w,l.z/l.w).subtract(this.position).normalize()}}get data(){return this._data}}class fA extends jh{constructor(){super(),this._objects=[],this.addObject=e=>{this.objects.push(e),this.dispatchEvent(new hA(e))},this.removeObject=e=>{const t=this.objects.indexOf(e);if(t<0)throw new Error("Object not found in scene");this.objects.splice(t,1),this.dispatchEvent(new uA(e))},this.findObject=e=>{for(const t of this.objects)if(e(t))return t},this.findObjectOfType=e=>{for(const t of this.objects)if(t instanceof e)return t},this.reset=()=>{const e=this.objects.slice();for(const t of e)this.removeObject(t)},this.reset()}getMergedSceneDataBuffer(e="splat"){const t=[];let i=0;for(const o of this.objects)if(o instanceof Gt){const a=o.clone();a.applyRotation(),a.applyScale(),a.applyPosition();const l=a.data.serialize();t.push(l),i+=a.data.vertexCount}const s=new Uint8Array(i*Si.RowLength);let n=0;for(const o of t)s.set(o,n),n+=o.length;return e==="ply"?cs.SplatToPLY(s.buffer,i):s.buffer}saveToFile(e=null,t="splat"){if(!document)return;if(!e){const o=new Date;e=`scene-${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}.${t}`}const i=this.getMergedSceneDataBuffer(t),s=new Blob([i],{type:"application/octet-stream"}),n=document.createElement("a");n.download=e,n.href=URL.createObjectURL(s),n.click()}get objects(){return this._objects}}async function $o(r,e){const t=await fetch(r,{mode:"cors",credentials:"omit",cache:e?"force-cache":"default"});if(t.status!=200)throw new Error(t.status+" Unable to load "+t.url);return t}async function el(r,e){const t=r.body.getReader(),i=r.headers.get("content-length"),s=i&&!isNaN(parseInt(i))?parseInt(i):void 0,n=[];let o=0;for(;;){const{done:c,value:u}=await t.read();if(c)break;if(n.push(u),o+=u.length,e&&s){const f=o/s,m=Math.min(f*.95,.95);e(m)}}const a=new Uint8Array(o);let l=0;for(const c of n)a.set(c,l),l+=c.length;return e&&e(1),a}class mA{static async LoadAsync(e,t,i,s=!1){const n=await $o(e,s),o=await el(n,i);return this.LoadFromArrayBuffer(o.buffer,t)}static async LoadFromFileAsync(e,t,i){const s=new FileReader;let n=new Gt;return s.onload=o=>{n=this.LoadFromArrayBuffer(o.target.result,t)},s.onprogress=o=>{i?.(o.loaded/o.total)},s.readAsArrayBuffer(e),await new Promise(o=>{s.onloadend=()=>{o()}}),n}static LoadFromArrayBuffer(e,t){const i=new Uint8Array(e),s=Si.Deserialize(i),n=new Gt(s);return t.addObject(n),n}}class gA{static async LoadAsync(e,t,i,s="",n=!1){const o=await $o(e,n),a=await el(o,i);if(a[0]!==112||a[1]!==108||a[2]!==121||a[3]!==10)throw new Error("Invalid PLY file");return this.LoadFromArrayBuffer(a.buffer,t,s)}static async LoadFromFileAsync(e,t,i,s=""){const n=new FileReader;let o=new Gt;return n.onload=a=>{o=this.LoadFromArrayBuffer(a.target.result,t,s)},n.onprogress=a=>{i?.(a.loaded/a.total)},n.readAsArrayBuffer(e),await new Promise(a=>{n.onloadend=()=>{a()}}),o}static LoadFromArrayBuffer(e,t,i=""){const s=new Uint8Array(this._ParsePLYBuffer(e,i)),n=Si.Deserialize(s),o=new Gt(n);return t.addObject(o),o}static _ParsePLYBuffer(e,t){const i=new Uint8Array(e),s=new TextDecoder().decode(i.slice(0,1024*10)),n=`end_header
`,o=s.indexOf(n);if(o<0)throw new Error("Unable to read .ply file header");const a=parseInt(/element vertex (\d+)\n/.exec(s)[1]);let l=0;const c={double:8,int:4,uint:4,float:4,short:2,ushort:2,uchar:1},u=[];for(const g of s.slice(0,o).split(`
`).filter(A=>A.startsWith("property "))){const[A,d,h]=g.split(" ");if(u.push({name:h,type:d,offset:l}),!c[d])throw new Error(`Unsupported property type: ${d}`);l+=c[d]}const f=new DataView(e,o+n.length),m=new ArrayBuffer(Si.RowLength*a),p=ut.FromEuler(new Re(Math.PI/2,0,0));for(let g=0;g<a;g++){const A=new Float32Array(m,g*Si.RowLength,3),d=new Float32Array(m,g*Si.RowLength+12,3),h=new Uint8ClampedArray(m,g*Si.RowLength+24,4),v=new Uint8ClampedArray(m,g*Si.RowLength+28,4);let E=255,w=0,C=0,S=0;u.forEach(U=>{let y;switch(U.type){case"float":y=f.getFloat32(U.offset+g*l,!0);break;case"int":y=f.getInt32(U.offset+g*l,!0);break;default:throw new Error(`Unsupported property type: ${U.type}`)}switch(U.name){case"x":A[0]=y;break;case"y":A[1]=y;break;case"z":A[2]=y;break;case"scale_0":case"scaling_0":d[0]=Math.exp(y);break;case"scale_1":case"scaling_1":d[1]=Math.exp(y);break;case"scale_2":case"scaling_2":d[2]=Math.exp(y);break;case"red":h[0]=y;break;case"green":h[1]=y;break;case"blue":h[2]=y;break;case"f_dc_0":case"features_0":h[0]=(.5+cs.SH_C0*y)*255;break;case"f_dc_1":case"features_1":h[1]=(.5+cs.SH_C0*y)*255;break;case"f_dc_2":case"features_2":h[2]=(.5+cs.SH_C0*y)*255;break;case"f_dc_3":h[3]=(.5+cs.SH_C0*y)*255;break;case"opacity":case"opacity_0":h[3]=1/(1+Math.exp(-y))*255;break;case"rot_0":case"rotation_0":E=y;break;case"rot_1":case"rotation_1":w=y;break;case"rot_2":case"rotation_2":C=y;break;case"rot_3":case"rotation_3":S=y;break}});let b=new ut(w,C,S,E);switch(t){case"polycam":{const U=A[1];A[1]=-A[2],A[2]=U,b=p.multiply(b);break}case"":break;default:throw new Error(`Unsupported format: ${t}`)}b=b.normalize(),v[0]=b.w*128+128,v[1]=b.x*128+128,v[2]=b.y*128+128,v[3]=b.z*128+128}return m}}class vA{static async LoadAsync(e,t,i,s,n=!1){const o=await $o(e,n),a=await el(o,s);return this._ParseSplatvBuffer(a.buffer,t,i)}static async LoadFromFileAsync(e,t,i,s){const n=new FileReader;let o=null;if(n.onload=a=>{o=this._ParseSplatvBuffer(a.target.result,t,i)},n.onprogress=a=>{s?.(a.loaded/a.total)},n.readAsArrayBuffer(e),await new Promise(a=>{n.onloadend=()=>{a()}}),!o)throw new Error("Failed to load splatv file");return o}static _ParseSplatvBuffer(e,t,i){let s=null;const n=(m,p,g)=>{if(m.type==="magic"){const A=new Int32Array(p.buffer);if(A[0]!==26443)throw new Error("Invalid splatv file");g.push({size:A[1],type:"chunks"})}else if(m.type==="chunks"){const A=JSON.parse(new TextDecoder("utf-8").decode(p));if(A.length==0)throw new Error("Invalid splatv file");A.length>1&&console.warn("Splatv file contains more than one chunk, only the first one will be loaded");const d=A[0],h=d.cameras;if(i&&h&&h.length){const v=h[0],E=new Re(v.position[0],v.position[1],v.position[2]),w=ut.FromMatrix3(new Dt(v.rotation[0][0],v.rotation[0][1],v.rotation[0][2],v.rotation[1][0],v.rotation[1][1],v.rotation[1][2],v.rotation[2][0],v.rotation[2][1],v.rotation[2][2]));i.position=E,i.rotation=w}g.push(d)}else if(m.type==="splat"){const A=$h.Deserialize(p,m.texwidth,m.texheight),d=new gr(A);t.addObject(d),s=d}},o=new Uint8Array(e),a=[{size:8,type:"magic",texwidth:0,texheight:0}];let l=a.shift(),c=new Uint8Array(l.size),u=0,f=0;for(;l;){for(;u<l.size;){const m=Math.min(l.size-u,o.length-f);c.set(o.subarray(f,f+m),u),u+=m,f+=m}if(n(l,c,a),s)return s;l=a.shift(),l&&(c=new Uint8Array(l.size),u=0)}throw new Error("Invalid splatv file")}}const iu="dmFyIGVBID0gZnVuY3Rpb24oQyA9IHt9KSB7CiAgdmFyIHIsIEkgPSBDLCBsID0gaW1wb3J0Lm1ldGEudXJsLCBqID0gIiIsIFU7CiAgewogICAgdHJ5IHsKICAgICAgaiA9IG5ldyBVUkwoIi4iLCBsKS5ocmVmOwogICAgfSBjYXRjaCB7CiAgICB9CiAgICBVID0gKEEpID0+IHsKICAgICAgdmFyIEIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIEIub3BlbigiR0VUIiwgQSwgITEpLCBCLnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIEIuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkoQi5yZXNwb25zZSk7CiAgICB9OwogIH0KICBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7CiAgdmFyIE0sIHUsIEw7CiAgZnVuY3Rpb24gcSgpIHsKICAgIHZhciBBID0gdS5idWZmZXI7CiAgICBJLkhFQVBVOCA9IEwgPSBuZXcgVWludDhBcnJheShBKSwgSS5IRUFQVTMyID0gbmV3IFVpbnQzMkFycmF5KEEpLCBJLkhFQVBGMzIgPSBuZXcgRmxvYXQzMkFycmF5KEEpLCBuZXcgQmlnSW50NjRBcnJheShBKSwgbmV3IEJpZ1VpbnQ2NEFycmF5KEEpOwogIH0KICBmdW5jdGlvbiBQKCkgewogICAgaWYgKEkucHJlUnVuKQogICAgICBmb3IgKHR5cGVvZiBJLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChJLnByZVJ1biA9IFtJLnByZVJ1bl0pOyBJLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICBDQShJLnByZVJ1bi5zaGlmdCgpKTsKICAgIHgoVCk7CiAgfQogIGZ1bmN0aW9uIGIoKSB7CiAgICB5LmMoKTsKICB9CiAgZnVuY3Rpb24gVygpIHsKICAgIGlmIChJLnBvc3RSdW4pCiAgICAgIGZvciAodHlwZW9mIEkucG9zdFJ1biA9PSAiZnVuY3Rpb24iICYmIChJLnBvc3RSdW4gPSBbSS5wb3N0UnVuXSk7IEkucG9zdFJ1bi5sZW5ndGg7ICkKICAgICAgICBnQShJLnBvc3RSdW4uc2hpZnQoKSk7CiAgICB4KHYpOwogIH0KICB2YXIgcyA9IDAsIGYgPSBudWxsOwogIGZ1bmN0aW9uIF8oQSkgewogICAgcysrLCBJLm1vbml0b3JSdW5EZXBlbmRlbmNpZXM/LihzKTsKICB9CiAgZnVuY3Rpb24geihBKSB7CiAgICBpZiAocy0tLCBJLm1vbml0b3JSdW5EZXBlbmRlbmNpZXM/LihzKSwgcyA9PSAwICYmIGYpIHsKICAgICAgdmFyIEIgPSBmOwogICAgICBmID0gbnVsbCwgQigpOwogICAgfQogIH0KICB2YXIgUzsKICBmdW5jdGlvbiBWKCkgewogICAgcmV0dXJuIEJBKCJBR0Z6YlFFQUFBQUJHUVJnQVg4QmYyQUJmd0JnQ1g5L2YzOS9mMzkvZndCZ0FBQUNCd0VCWVFGaEFBQURCZ1VBQVFBQ0F3VUhBUUdDQW9DQUFnWUlBWDhCUVlDTUJBc0hGUVVCWWdJQUFXTUFCUUZrQUFRQlpRQURBV1lBQWd3QkFRck5PQVZQQVFKL1FZQUlLQUlBSWdFZ0FFRUhha0Y0Y1NJQ2FpRUFBa0FnQWtFQUlBQWdBVTBiUlFSQUlBQS9BRUVRZEUwTkFTQUFFQUFOQVF0QmhBaEJNRFlDQUVGL0R3dEJnQWdnQURZQ0FDQUJDOXdMQVFoL0FrQWdBRVVOQUNBQVFRaHJJZ01nQUVFRWF5Z0NBQ0lDUVhoeElnQnFJUVVDUUNBQ1FRRnhEUUFnQWtFQ2NVVU5BU0FESUFNb0FnQWlCR3NpQTBHWUNDZ0NBRWtOQVNBQUlBUnFJUUFDUUFKQUFrQkJuQWdvQWdBZ0EwY0VRQ0FES0FJTUlRRWdCRUgvQVUwRVFDQUJJQU1vQWdnaUFrY05Ba0dJQ0VHSUNDZ0NBRUYrSUFSQkEzWjNjVFlDQUF3RkN5QURLQUlZSVFjZ0FTQURSd1JBSUFNb0FnZ2lBaUFCTmdJTUlBRWdBallDQ0F3RUN5QURLQUlVSWdJRWZ5QURRUlJxQlNBREtBSVFJZ0pGRFFNZ0EwRVFhZ3NoQkFOQUlBUWhCaUFDSWdGQkZHb2hCQ0FCS0FJVUlnSU5BQ0FCUVJCcUlRUWdBU2dDRUNJQ0RRQUxJQVpCQURZQ0FBd0RDeUFGS0FJRUlnSkJBM0ZCQTBjTkEwR1FDQ0FBTmdJQUlBVWdBa0YrY1RZQ0JDQURJQUJCQVhJMkFnUWdCU0FBTmdJQUR3c2dBaUFCTmdJTUlBRWdBallDQ0F3Q0MwRUFJUUVMSUFkRkRRQUNRQ0FES0FJY0lnUkJBblJCdUFwcUlnSW9BZ0FnQTBZRVFDQUNJQUUyQWdBZ0FRMEJRWXdJUVl3SUtBSUFRWDRnQkhkeE5nSUFEQUlMQWtBZ0F5QUhLQUlRUmdSQUlBY2dBVFlDRUF3QkN5QUhJQUUyQWhRTElBRkZEUUVMSUFFZ0J6WUNHQ0FES0FJUUlnSUVRQ0FCSUFJMkFoQWdBaUFCTmdJWUN5QURLQUlVSWdKRkRRQWdBU0FDTmdJVUlBSWdBVFlDR0FzZ0F5QUZUdzBBSUFVb0FnUWlCRUVCY1VVTkFBSkFBa0FDUUFKQUlBUkJBbkZGQkVCQm9BZ29BZ0FnQlVZRVFFR2dDQ0FETmdJQVFaUUlRWlFJS0FJQUlBQnFJZ0EyQWdBZ0F5QUFRUUZ5TmdJRUlBTkJuQWdvQWdCSERRWkJrQWhCQURZQ0FFR2NDRUVBTmdJQUR3dEJuQWdvQWdBaUJ5QUZSZ1JBUVp3SUlBTTJBZ0JCa0FoQmtBZ29BZ0FnQUdvaUFEWUNBQ0FESUFCQkFYSTJBZ1FnQUNBRGFpQUFOZ0lBRHdzZ0JFRjRjU0FBYWlFQUlBVW9BZ3doQVNBRVFmOEJUUVJBSUFVb0FnZ2lBaUFCUmdSQVFZZ0lRWWdJS0FJQVFYNGdCRUVEZG5keE5nSUFEQVVMSUFJZ0FUWUNEQ0FCSUFJMkFnZ01CQXNnQlNnQ0dDRUlJQUVnQlVjRVFDQUZLQUlJSWdJZ0FUWUNEQ0FCSUFJMkFnZ01Bd3NnQlNnQ0ZDSUNCSDhnQlVFVWFnVWdCU2dDRUNJQ1JRMENJQVZCRUdvTElRUURRQ0FFSVFZZ0FpSUJRUlJxSVFRZ0FTZ0NGQ0lDRFFBZ0FVRVFhaUVFSUFFb0FoQWlBZzBBQ3lBR1FRQTJBZ0FNQWdzZ0JTQUVRWDV4TmdJRUlBTWdBRUVCY2pZQ0JDQUFJQU5xSUFBMkFnQU1Bd3RCQUNFQkN5QUlSUTBBQWtBZ0JTZ0NIQ0lFUVFKMFFiZ0thaUlDS0FJQUlBVkdCRUFnQWlBQk5nSUFJQUVOQVVHTUNFR01DQ2dDQUVGK0lBUjNjVFlDQUF3Q0N3SkFJQVVnQ0NnQ0VFWUVRQ0FJSUFFMkFoQU1BUXNnQ0NBQk5nSVVDeUFCUlEwQkN5QUJJQWcyQWhnZ0JTZ0NFQ0lDQkVBZ0FTQUNOZ0lRSUFJZ0FUWUNHQXNnQlNnQ0ZDSUNSUTBBSUFFZ0FqWUNGQ0FDSUFFMkFoZ0xJQU1nQUVFQmNqWUNCQ0FBSUFOcUlBQTJBZ0FnQXlBSFJ3MEFRWkFJSUFBMkFnQVBDeUFBUWY4QlRRUkFJQUJCZUhGQnNBaHFJUUlDZjBHSUNDZ0NBQ0lFUVFFZ0FFRURkblFpQUhGRkJFQkJpQWdnQUNBRWNqWUNBQ0FDREFFTElBSW9BZ2dMSVFBZ0FpQUROZ0lJSUFBZ0F6WUNEQ0FESUFJMkFnd2dBeUFBTmdJSUR3dEJIeUVCSUFCQi8vLy9CMDBFUUNBQVFTWWdBRUVJZG1jaUFtdDJRUUZ4SUFKQkFYUnJRVDVxSVFFTElBTWdBVFlDSENBRFFnQTNBaEFnQVVFQ2RFRzRDbW9oQkFKL0FrQUNmMEdNQ0NnQ0FDSUdRUUVnQVhRaUFuRkZCRUJCakFnZ0FpQUdjallDQUNBRUlBTTJBZ0JCR0NFQlFRZ01BUXNnQUVFWklBRkJBWFpyUVFBZ0FVRWZSeHQwSVFFZ0JDZ0NBQ0VFQTBBZ0JDSUNLQUlFUVhoeElBQkdEUUlnQVVFZGRpRUVJQUZCQVhRaEFTQUNJQVJCQkhGcUlnWW9BaEFpQkEwQUN5QUdJQU0yQWhCQkdDRUJJQUloQkVFSUN5RUFJQU1pQWd3QkN5QUNLQUlJSWdRZ0F6WUNEQ0FDSUFNMkFnaEJHQ0VBUVFnaEFVRUFDeUVHSUFFZ0Eyb2dCRFlDQUNBRElBSTJBZ3dnQUNBRGFpQUdOZ0lBUWFnSVFhZ0lLQUlBUVFGcklnQkJmeUFBR3pZQ0FBc0wwU2NCQzM4akFFRVFheUlLSkFBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FDQUFRZlFCVFFSQVFZZ0lLQUlBSWdSQkVDQUFRUXRxUWZnRGNTQUFRUXRKR3lJR1FRTjJJZ0IySWdGQkEzRUVRQUpBSUFGQmYzTkJBWEVnQUdvaUFrRURkQ0lCUWJBSWFpSUFJQUZCdUFocUtBSUFJZ0VvQWdnaUJVWUVRRUdJQ0NBRVFYNGdBbmR4TmdJQURBRUxJQVVnQURZQ0RDQUFJQVUyQWdnTElBRkJDR29oQUNBQklBSkJBM1FpQWtFRGNqWUNCQ0FCSUFKcUlnRWdBU2dDQkVFQmNqWUNCQXdMQ3lBR1FaQUlLQUlBSWdoTkRRRWdBUVJBQWtCQkFpQUFkQ0lDUVFBZ0FtdHlJQUVnQUhSeGFDSUJRUU4wSWdCQnNBaHFJZ0lnQUVHNENHb29BZ0FpQUNnQ0NDSUZSZ1JBUVlnSUlBUkJmaUFCZDNFaUJEWUNBQXdCQ3lBRklBSTJBZ3dnQWlBRk5nSUlDeUFBSUFaQkEzSTJBZ1FnQUNBR2FpSUhJQUZCQTNRaUFTQUdheUlGUVFGeU5nSUVJQUFnQVdvZ0JUWUNBQ0FJQkVBZ0NFRjRjVUd3Q0dvaEFVR2NDQ2dDQUNFQ0FuOGdCRUVCSUFoQkEzWjBJZ054UlFSQVFZZ0lJQU1nQkhJMkFnQWdBUXdCQ3lBQktBSUlDeUVESUFFZ0FqWUNDQ0FESUFJMkFnd2dBaUFCTmdJTUlBSWdBellDQ0FzZ0FFRUlhaUVBUVp3SUlBYzJBZ0JCa0FnZ0JUWUNBQXdMQzBHTUNDZ0NBQ0lMUlEwQklBdG9RUUowUWJnS2FpZ0NBQ0lDS0FJRVFYaHhJQVpySVFNZ0FpRUJBMEFDUUNBQktBSVFJZ0JGQkVBZ0FTZ0NGQ0lBUlEwQkN5QUFLQUlFUVhoeElBWnJJZ0VnQXlBQklBTkpJZ0ViSVFNZ0FDQUNJQUViSVFJZ0FDRUJEQUVMQ3lBQ0tBSVlJUWtnQWlBQ0tBSU1JZ0JIQkVBZ0FpZ0NDQ0lCSUFBMkFnd2dBQ0FCTmdJSURBb0xJQUlvQWhRaUFRUi9JQUpCRkdvRklBSW9BaEFpQVVVTkF5QUNRUkJxQ3lFRkEwQWdCU0VISUFFaUFFRVVhaUVGSUFBb0FoUWlBUTBBSUFCQkVHb2hCU0FBS0FJUUlnRU5BQXNnQjBFQU5nSUFEQWtMUVg4aEJpQUFRYjkvU3cwQUlBQkJDMm9pQVVGNGNTRUdRWXdJS0FJQUlnZEZEUUJCSHlFSVFRQWdCbXNoQXlBQVFmVC8vd2ROQkVBZ0JrRW1JQUZCQ0habklnQnJka0VCY1NBQVFRRjBhMEUrYWlFSUN3SkFBa0FDUUNBSVFRSjBRYmdLYWlnQ0FDSUJSUVJBUVFBaEFBd0JDMEVBSVFBZ0JrRVpJQWhCQVhaclFRQWdDRUVmUnh0MElRSURRQUpBSUFFb0FnUkJlSEVnQm1zaUJDQURUdzBBSUFFaEJTQUVJZ01OQUVFQUlRTWdBU0VBREFNTElBQWdBU2dDRkNJRUlBUWdBU0FDUVIxMlFRUnhhaWdDRUNJQlJoc2dBQ0FFR3lFQUlBSkJBWFFoQWlBQkRRQUxDeUFBSUFWeVJRUkFRUUFoQlVFQ0lBaDBJZ0JCQUNBQWEzSWdCM0VpQUVVTkF5QUFhRUVDZEVHNENtb29BZ0FoQUFzZ0FFVU5BUXNEUUNBQUtBSUVRWGh4SUFacklnSWdBMGtoQVNBQ0lBTWdBUnNoQXlBQUlBVWdBUnNoQlNBQUtBSVFJZ0VFZnlBQkJTQUFLQUlVQ3lJQURRQUxDeUFGUlEwQUlBTkJrQWdvQWdBZ0JtdFBEUUFnQlNnQ0dDRUlJQVVnQlNnQ0RDSUFSd1JBSUFVb0FnZ2lBU0FBTmdJTUlBQWdBVFlDQ0F3SUN5QUZLQUlVSWdFRWZ5QUZRUlJxQlNBRktBSVFJZ0ZGRFFNZ0JVRVFhZ3NoQWdOQUlBSWhCQ0FCSWdCQkZHb2hBaUFBS0FJVUlnRU5BQ0FBUVJCcUlRSWdBQ2dDRUNJQkRRQUxJQVJCQURZQ0FBd0hDeUFHUVpBSUtBSUFJZ1ZOQkVCQm5BZ29BZ0FoQUFKQUlBVWdCbXNpQVVFUVR3UkFJQUFnQm1vaUFpQUJRUUZ5TmdJRUlBQWdCV29nQVRZQ0FDQUFJQVpCQTNJMkFnUU1BUXNnQUNBRlFRTnlOZ0lFSUFBZ0JXb2lBU0FCS0FJRVFRRnlOZ0lFUVFBaEFrRUFJUUVMUVpBSUlBRTJBZ0JCbkFnZ0FqWUNBQ0FBUVFocUlRQU1DUXNnQmtHVUNDZ0NBQ0lDU1FSQVFaUUlJQUlnQm1zaUFUWUNBRUdnQ0VHZ0NDZ0NBQ0lBSUFacUlnSTJBZ0FnQWlBQlFRRnlOZ0lFSUFBZ0JrRURjallDQkNBQVFRaHFJUUFNQ1F0QkFDRUFJQVpCTDJvaUF3Si9RZUFMS0FJQUJFQkI2QXNvQWdBTUFRdEI3QXRDZnpjQ0FFSGtDMEtBb0lDQWdJQUVOd0lBUWVBTElBcEJER3BCY0hGQjJLclZxZ1Z6TmdJQVFmUUxRUUEyQWdCQnhBdEJBRFlDQUVHQUlBc2lBV29pQkVFQUlBRnJJZ2R4SWdFZ0JrME5DRUhBQ3lnQ0FDSUZCRUJCdUFzb0FnQWlDQ0FCYWlJSklBaE5JQVVnQ1VseURRa0xBa0JCeEFzdEFBQkJCSEZGQkVBQ1FBSkFBa0FDUUVHZ0NDZ0NBQ0lGQkVCQnlBc2hBQU5BSUFBb0FnQWlDQ0FGVFFSQUlBVWdDQ0FBS0FJRWFra05Bd3NnQUNnQ0NDSUFEUUFMQzBFQUVBRWlBa0YvUmcwRElBRWhCRUhrQ3lnQ0FDSUFRUUZySWdVZ0FuRUVRQ0FCSUFKcklBSWdCV3BCQUNBQWEzRnFJUVFMSUFRZ0JrME5BMEhBQ3lnQ0FDSUFCRUJCdUFzb0FnQWlCU0FFYWlJSElBVk5JQUFnQjBseURRUUxJQVFRQVNJQUlBSkhEUUVNQlFzZ0JDQUNheUFIY1NJRUVBRWlBaUFBS0FJQUlBQW9BZ1JxUmcwQklBSWhBQXNnQUVGL1JnMEJJQVpCTUdvZ0JFMEVRQ0FBSVFJTUJBdEI2QXNvQWdBaUFpQURJQVJyYWtFQUlBSnJjU0lDRUFGQmYwWU5BU0FDSUFScUlRUWdBQ0VDREFNTElBSkJmMGNOQWd0QnhBdEJ4QXNvQWdCQkJISTJBZ0FMSUFFUUFTSUNRWDlHUVFBUUFTSUFRWDlHY2lBQUlBSk5jZzBGSUFBZ0Ftc2lCQ0FHUVNocVRRMEZDMEc0QzBHNEN5Z0NBQ0FFYWlJQU5nSUFRYndMS0FJQUlBQkpCRUJCdkFzZ0FEWUNBQXNDUUVHZ0NDZ0NBQ0lEQkVCQnlBc2hBQU5BSUFJZ0FDZ0NBQ0lCSUFBb0FnUWlCV3BHRFFJZ0FDZ0NDQ0lBRFFBTERBUUxRWmdJS0FJQUlnQkJBQ0FBSUFKTkcwVUVRRUdZQ0NBQ05nSUFDMEVBSVFCQnpBc2dCRFlDQUVISUN5QUNOZ0lBUWFnSVFYODJBZ0JCckFoQjRBc29BZ0EyQWdCQjFBdEJBRFlDQUFOQUlBQkJBM1FpQVVHNENHb2dBVUd3Q0dvaUJUWUNBQ0FCUWJ3SWFpQUZOZ0lBSUFCQkFXb2lBRUVnUncwQUMwR1VDQ0FFUVNocklnQkJlQ0FDYTBFSGNTSUJheUlGTmdJQVFhQUlJQUVnQW1vaUFUWUNBQ0FCSUFWQkFYSTJBZ1FnQUNBQ2FrRW9OZ0lFUWFRSVFmQUxLQUlBTmdJQURBUUxJQUlnQTAwZ0FTQURTM0lOQWlBQUtBSU1RUWh4RFFJZ0FDQUVJQVZxTmdJRVFhQUlJQU5CZUNBRGEwRUhjU0lBYWlJQk5nSUFRWlFJUVpRSUtBSUFJQVJxSWdJZ0FHc2lBRFlDQUNBQklBQkJBWEkyQWdRZ0FpQURha0VvTmdJRVFhUUlRZkFMS0FJQU5nSUFEQU1MUVFBaEFBd0dDMEVBSVFBTUJBdEJtQWdvQWdBZ0Frc0VRRUdZQ0NBQ05nSUFDeUFDSUFScUlRVkJ5QXNoQUFKQUEwQWdCU0FBS0FJQUlnRkhCRUFnQUNnQ0NDSUFEUUVNQWdzTElBQXRBQXhCQ0hGRkRRTUxRY2dMSVFBRFFBSkFJQUFvQWdBaUFTQURUUVJBSUFNZ0FTQUFLQUlFYWlJRlNRMEJDeUFBS0FJSUlRQU1BUXNMUVpRSUlBUkJLR3NpQUVGNElBSnJRUWR4SWdGcklnYzJBZ0JCb0FnZ0FTQUNhaUlCTmdJQUlBRWdCMEVCY2pZQ0JDQUFJQUpxUVNnMkFnUkJwQWhCOEFzb0FnQTJBZ0FnQXlBRlFTY2dCV3RCQjNGcVFTOXJJZ0FnQUNBRFFSQnFTUnNpQVVFYk5nSUVJQUZCMEFzcEFnQTNBaEFnQVVISUN5a0NBRGNDQ0VIUUN5QUJRUWhxTmdJQVFjd0xJQVEyQWdCQnlBc2dBallDQUVIVUMwRUFOZ0lBSUFGQkdHb2hBQU5BSUFCQkJ6WUNCQ0FBUVFocUlBQkJCR29oQUNBRlNRMEFDeUFCSUFOR0RRQWdBU0FCS0FJRVFYNXhOZ0lFSUFNZ0FTQURheUlDUVFGeU5nSUVJQUVnQWpZQ0FBSi9JQUpCL3dGTkJFQWdBa0Y0Y1VHd0NHb2hBQUovUVlnSUtBSUFJZ0ZCQVNBQ1FRTjJkQ0lDY1VVRVFFR0lDQ0FCSUFKeU5nSUFJQUFNQVFzZ0FDZ0NDQXNoQVNBQUlBTTJBZ2dnQVNBRE5nSU1RUXdoQWtFSURBRUxRUjhoQUNBQ1FmLy8vd2ROQkVBZ0FrRW1JQUpCQ0habklnQnJka0VCY1NBQVFRRjBhMEUrYWlFQUN5QURJQUEyQWh3Z0EwSUFOd0lRSUFCQkFuUkJ1QXBxSVFFQ1FBSkFRWXdJS0FJQUlnVkJBU0FBZENJRWNVVUVRRUdNQ0NBRUlBVnlOZ0lBSUFFZ0F6WUNBQXdCQ3lBQ1FSa2dBRUVCZG10QkFDQUFRUjlIRzNRaEFDQUJLQUlBSVFVRFFDQUZJZ0VvQWdSQmVIRWdBa1lOQWlBQVFSMTJJUVVnQUVFQmRDRUFJQUVnQlVFRWNXb2lCQ2dDRUNJRkRRQUxJQVFnQXpZQ0VBc2dBeUFCTmdJWVFRZ2hBaUFESWdFaEFFRU1EQUVMSUFFb0FnZ2lBQ0FETmdJTUlBRWdBellDQ0NBRElBQTJBZ2hCQUNFQVFSZ2hBa0VNQ3lBRGFpQUJOZ0lBSUFJZ0Eyb2dBRFlDQUF0QmxBZ29BZ0FpQUNBR1RRMEFRWlFJSUFBZ0Jtc2lBVFlDQUVHZ0NFR2dDQ2dDQUNJQUlBWnFJZ0kyQWdBZ0FpQUJRUUZ5TmdJRUlBQWdCa0VEY2pZQ0JDQUFRUWhxSVFBTUJBdEJoQWhCTURZQ0FFRUFJUUFNQXdzZ0FDQUNOZ0lBSUFBZ0FDZ0NCQ0FFYWpZQ0JDQUNRWGdnQW10QkIzRnFJZ2dnQmtFRGNqWUNCQ0FCUVhnZ0FXdEJCM0ZxSWdRZ0JpQUlhaUlEYXlFSEFrQkJvQWdvQWdBZ0JFWUVRRUdnQ0NBRE5nSUFRWlFJUVpRSUtBSUFJQWRxSWdBMkFnQWdBeUFBUVFGeU5nSUVEQUVMUVp3SUtBSUFJQVJHQkVCQm5BZ2dBellDQUVHUUNFR1FDQ2dDQUNBSGFpSUFOZ0lBSUFNZ0FFRUJjallDQkNBQUlBTnFJQUEyQWdBTUFRc2dCQ2dDQkNJQVFRTnhRUUZHQkVBZ0FFRjRjU0VKSUFRb0Fnd2hBZ0pBSUFCQi93Rk5CRUFnQkNnQ0NDSUJJQUpHQkVCQmlBaEJpQWdvQWdCQmZpQUFRUU4yZDNFMkFnQU1BZ3NnQVNBQ05nSU1JQUlnQVRZQ0NBd0JDeUFFS0FJWUlRWUNRQ0FDSUFSSEJFQWdCQ2dDQ0NJQUlBSTJBZ3dnQWlBQU5nSUlEQUVMQWtBZ0JDZ0NGQ0lBQkg4Z0JFRVVhZ1VnQkNnQ0VDSUFSUTBCSUFSQkVHb0xJUUVEUUNBQklRVWdBQ0lDUVJScUlRRWdBQ2dDRkNJQURRQWdBa0VRYWlFQklBSW9BaEFpQUEwQUN5QUZRUUEyQWdBTUFRdEJBQ0VDQ3lBR1JRMEFBa0FnQkNnQ0hDSUFRUUowUWJnS2FpSUJLQUlBSUFSR0JFQWdBU0FDTmdJQUlBSU5BVUdNQ0VHTUNDZ0NBRUYrSUFCM2NUWUNBQXdDQ3dKQUlBUWdCaWdDRUVZRVFDQUdJQUkyQWhBTUFRc2dCaUFDTmdJVUN5QUNSUTBCQ3lBQ0lBWTJBaGdnQkNnQ0VDSUFCRUFnQWlBQU5nSVFJQUFnQWpZQ0dBc2dCQ2dDRkNJQVJRMEFJQUlnQURZQ0ZDQUFJQUkyQWhnTElBY2dDV29oQnlBRUlBbHFJZ1FvQWdRaEFBc2dCQ0FBUVg1eE5nSUVJQU1nQjBFQmNqWUNCQ0FESUFkcUlBYzJBZ0FnQjBIL0FVMEVRQ0FIUVhoeFFiQUlhaUVBQW45QmlBZ29BZ0FpQVVFQklBZEJBM1owSWdKeFJRUkFRWWdJSUFFZ0FuSTJBZ0FnQUF3QkN5QUFLQUlJQ3lFQklBQWdBellDQ0NBQklBTTJBZ3dnQXlBQU5nSU1JQU1nQVRZQ0NBd0JDMEVmSVFJZ0IwSC8vLzhIVFFSQUlBZEJKaUFIUVFoMlp5SUFhM1pCQVhFZ0FFRUJkR3RCUG1vaEFnc2dBeUFDTmdJY0lBTkNBRGNDRUNBQ1FRSjBRYmdLYWlFQUFrQUNRRUdNQ0NnQ0FDSUJRUUVnQW5RaUJYRkZCRUJCakFnZ0FTQUZjallDQUNBQUlBTTJBZ0FNQVFzZ0IwRVpJQUpCQVhaclFRQWdBa0VmUnh0MElRSWdBQ2dDQUNFQkEwQWdBU0lBS0FJRVFYaHhJQWRHRFFJZ0FrRWRkaUVCSUFKQkFYUWhBaUFBSUFGQkJIRnFJZ1VvQWhBaUFRMEFDeUFGSUFNMkFoQUxJQU1nQURZQ0dDQURJQU0yQWd3Z0F5QUROZ0lJREFFTElBQW9BZ2dpQVNBRE5nSU1JQUFnQXpZQ0NDQURRUUEyQWhnZ0F5QUFOZ0lNSUFNZ0FUWUNDQXNnQ0VFSWFpRUFEQUlMQWtBZ0NFVU5BQUpBSUFVb0Fod2lBVUVDZEVHNENtb2lBaWdDQUNBRlJnUkFJQUlnQURZQ0FDQUFEUUZCakFnZ0IwRitJQUYzY1NJSE5nSUFEQUlMQWtBZ0JTQUlLQUlRUmdSQUlBZ2dBRFlDRUF3QkN5QUlJQUEyQWhRTElBQkZEUUVMSUFBZ0NEWUNHQ0FGS0FJUUlnRUVRQ0FBSUFFMkFoQWdBU0FBTmdJWUN5QUZLQUlVSWdGRkRRQWdBQ0FCTmdJVUlBRWdBRFlDR0FzQ1FDQURRUTlOQkVBZ0JTQURJQVpxSWdCQkEzSTJBZ1FnQUNBRmFpSUFJQUFvQWdSQkFYSTJBZ1FNQVFzZ0JTQUdRUU55TmdJRUlBVWdCbW9pQkNBRFFRRnlOZ0lFSUFNZ0JHb2dBellDQUNBRFFmOEJUUVJBSUFOQmVIRkJzQWhxSVFBQ2YwR0lDQ2dDQUNJQlFRRWdBMEVEZG5RaUFuRkZCRUJCaUFnZ0FTQUNjallDQUNBQURBRUxJQUFvQWdnTElRRWdBQ0FFTmdJSUlBRWdCRFlDRENBRUlBQTJBZ3dnQkNBQk5nSUlEQUVMUVI4aEFDQURRZi8vL3dkTkJFQWdBMEVtSUFOQkNIWm5JZ0JyZGtFQmNTQUFRUUYwYTBFK2FpRUFDeUFFSUFBMkFod2dCRUlBTndJUUlBQkJBblJCdUFwcUlRRUNRQUpBSUFkQkFTQUFkQ0lDY1VVRVFFR01DQ0FDSUFkeU5nSUFJQUVnQkRZQ0FDQUVJQUUyQWhnTUFRc2dBMEVaSUFCQkFYWnJRUUFnQUVFZlJ4dDBJUUFnQVNnQ0FDRUJBMEFnQVNJQ0tBSUVRWGh4SUFOR0RRSWdBRUVkZGlFQklBQkJBWFFoQUNBQ0lBRkJCSEZxSWdjb0FoQWlBUTBBQ3lBSElBUTJBaEFnQkNBQ05nSVlDeUFFSUFRMkFnd2dCQ0FFTmdJSURBRUxJQUlvQWdnaUFDQUVOZ0lNSUFJZ0JEWUNDQ0FFUVFBMkFoZ2dCQ0FDTmdJTUlBUWdBRFlDQ0FzZ0JVRUlhaUVBREFFTEFrQWdDVVVOQUFKQUlBSW9BaHdpQVVFQ2RFRzRDbW9pQlNnQ0FDQUNSZ1JBSUFVZ0FEWUNBQ0FBRFFGQmpBZ2dDMEYrSUFGM2NUWUNBQXdDQ3dKQUlBSWdDU2dDRUVZRVFDQUpJQUEyQWhBTUFRc2dDU0FBTmdJVUN5QUFSUTBCQ3lBQUlBazJBaGdnQWlnQ0VDSUJCRUFnQUNBQk5nSVFJQUVnQURZQ0dBc2dBaWdDRkNJQlJRMEFJQUFnQVRZQ0ZDQUJJQUEyQWhnTEFrQWdBMEVQVFFSQUlBSWdBeUFHYWlJQVFRTnlOZ0lFSUFBZ0Ftb2lBQ0FBS0FJRVFRRnlOZ0lFREFFTElBSWdCa0VEY2pZQ0JDQUNJQVpxSWdVZ0EwRUJjallDQkNBRElBVnFJQU0yQWdBZ0NBUkFJQWhCZUhGQnNBaHFJUUJCbkFnb0FnQWhBUUovUVFFZ0NFRURkblFpQnlBRWNVVUVRRUdJQ0NBRUlBZHlOZ0lBSUFBTUFRc2dBQ2dDQ0FzaEJDQUFJQUUyQWdnZ0JDQUJOZ0lNSUFFZ0FEWUNEQ0FCSUFRMkFnZ0xRWndJSUFVMkFnQkJrQWdnQXpZQ0FBc2dBa0VJYWlFQUN5QUtRUkJxSkFBZ0FBdkdCQUlHZndwOVFmLy8vLzhISVF4QmdJQ0FnSGdoRFVGL0lRa0RRQ0FESUFwR0JFQkJBQ0VBSUFoQkFFR0FnQkQ4Q3dCREFQOS9SeUFOSUF4cnNwVWhEd1VnQkNBS1FReHNhaUlMS2dJQUlSTWdDeW9DQ0NFVUlBc3FBZ1FoRlNBSklBSWdDa0VDZENJT2FpZ0NBQ0lMUndSQUlBRWdDMEhRQUd4cUlna3FBandnQUNvQ09DSVBsQ0FKS2dJNElBQXFBaWdpRUpRZ0NTb0NNQ0FBS2dJSUloR1VJQUFxQWhnaUVpQUpLZ0kwbEpLU2tpRVdJQWtxQWl3Z0Q1UWdDU29DS0NBUWxDQUpLZ0lnSUJHVUlCSWdDU29DSkpTU2twSWhGeUFKS2dJY0lBK1VJQWtxQWhnZ0VKUWdDU29DRUNBUmxDQVNJQWtxQWhTVWtwS1NJUmdnQ1NvQ0RDQVBsQ0FKS2dJSUlCQ1VJQWtxQWdBZ0VaUWdDU29DQkNBU2xKS1NraUVQSUFzaENRc2dCU0FPYWlBV0lCY2dGSlFnRHlBVGxDQVZJQmlVa3BLU1F3QUFnRVdVL0FBaUN6WUNBQ0FNSUFzZ0N5QU1TaHNoRENBTklBc2dDeUFOU0JzaERTQUtRUUZxSVFvTUFRc0xBMEFnQUNBRFJrVUVRQ0FGSUFCQkFuUnFJZ0VnRHlBQktBSUFJQXhyczVUOEFTSUJOZ0lBSUFnZ0FVRUNkR29pQVNBQktBSUFRUUZxTmdJQUlBQkJBV29oQUF3QkN3dEJBQ0VBSUFkQkFEWUNBQ0FJUVFScklRRkJBQ0VNUVFFaENnTkFJQXBCZ0lBRVJnUkFBMEFDUUNBQUlBTkdEUUFnQnlBRklBQkJBblJxS0FJQVFRSjBhaUlCSUFFb0FnQWlBVUVCYWpZQ0FDQUdJQUZCQW5ScUlBQTJBZ0FnQUVFQmFpRUFEQUVMQ3dVZ0J5QUtRUUowSWdKcUlBRWdBbW9vQWdBZ0RHb2lERFlDQUNBS1FRRnFJUW9NQVFzTEN3SUFDd3NKQVFCQmdRZ0xBZ1lCIik7CiAgfQogIGZ1bmN0aW9uIE8oQSkgewogICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhBKSkKICAgICAgcmV0dXJuIEE7CiAgICBpZiAoQSA9PSBTICYmIE0pCiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShNKTsKICAgIGlmIChVKQogICAgICByZXR1cm4gVShBKTsKICAgIHRocm93ICdzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZDogeW91IGNhbiBwcmVsb2FkIGl0IHRvIE1vZHVsZVsid2FzbUJpbmFyeSJdIG1hbnVhbGx5LCBvciBlbWNjLnB5IHdpbGwgZG8gdGhhdCBmb3IgeW91IHdoZW4gZ2VuZXJhdGluZyBIVE1MIChidXQgbm90IEpTKSc7CiAgfQogIGZ1bmN0aW9uICQoQSwgQikgewogICAgdmFyIHQsIEUgPSBPKEEpOwogICAgdCA9IG5ldyBXZWJBc3NlbWJseS5Nb2R1bGUoRSk7CiAgICB2YXIgaSA9IG5ldyBXZWJBc3NlbWJseS5JbnN0YW5jZSh0LCBCKTsKICAgIHJldHVybiBbaSwgdF07CiAgfQogIGZ1bmN0aW9uIEFBKCkgewogICAgcmV0dXJuIHsgYTogbkEgfTsKICB9CiAgZnVuY3Rpb24gSUEoKSB7CiAgICBmdW5jdGlvbiBBKEUsIGkpIHsKICAgICAgcmV0dXJuIHkgPSBFLmV4cG9ydHMsIHUgPSB5LmIsIHEoKSwgckEoeSksIHooKSwgeTsKICAgIH0KICAgIF8oKTsKICAgIHZhciBCID0gQUEoKTsKICAgIGlmIChJLmluc3RhbnRpYXRlV2FzbSkKICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChFLCBpKSA9PiB7CiAgICAgICAgSS5pbnN0YW50aWF0ZVdhc20oQiwgKG8sIGgpID0+IHsKICAgICAgICAgIEUoQShvKSk7CiAgICAgICAgfSk7CiAgICAgIH0pOwogICAgUyA/Pz0gVigpOwogICAgdmFyIHQgPSAkKFMsIEIpOwogICAgcmV0dXJuIEEodFswXSk7CiAgfQogIGZvciAodmFyIHggPSAoQSkgPT4gewogICAgZm9yICg7IEEubGVuZ3RoID4gMDsgKQogICAgICBBLnNoaWZ0KCkoSSk7CiAgfSwgdiA9IFtdLCBnQSA9IChBKSA9PiB2LnB1c2goQSksIFQgPSBbXSwgQ0EgPSAoQSkgPT4gVC5wdXNoKEEpLCBCQSA9IChBKSA9PiB7CiAgICBmb3IgKHZhciBCLCB0LCBFID0gMCwgaSA9IDAsIG8gPSBBLmxlbmd0aCwgaCA9IG5ldyBVaW50OEFycmF5KChvICogMyA+PiAyKSAtIChBW28gLSAyXSA9PSAiPSIpIC0gKEFbbyAtIDFdID09ICI9IikpOyBFIDwgbzsgRSArPSA0LCBpICs9IDMpCiAgICAgIEIgPSBuW0EuY2hhckNvZGVBdChFICsgMSldLCB0ID0gbltBLmNoYXJDb2RlQXQoRSArIDIpXSwgaFtpXSA9IG5bQS5jaGFyQ29kZUF0KEUpXSA8PCAyIHwgQiA+PiA0LCBoW2kgKyAxXSA9IEIgPDwgNCB8IHQgPj4gMiwgaFtpICsgMl0gPSB0IDw8IDYgfCBuW0EuY2hhckNvZGVBdChFICsgMyldOwogICAgcmV0dXJuIGg7CiAgfSwgUUEgPSAoKSA9PiAyMTQ3NDgzNjQ4LCBFQSA9IChBLCBCKSA9PiBNYXRoLmNlaWwoQSAvIEIpICogQiwgdEEgPSAoQSkgPT4gewogICAgdmFyIEIgPSB1LmJ1ZmZlciwgdCA9IChBIC0gQi5ieXRlTGVuZ3RoICsgNjU1MzUpIC8gNjU1MzYgfCAwOwogICAgdHJ5IHsKICAgICAgcmV0dXJuIHUuZ3Jvdyh0KSwgcSgpLCAxOwogICAgfSBjYXRjaCB7CiAgICB9CiAgfSwgaUEgPSAoQSkgPT4gewogICAgdmFyIEIgPSBMLmxlbmd0aDsKICAgIEEgPj4+PSAwOwogICAgdmFyIHQgPSBRQSgpOwogICAgaWYgKEEgPiB0KQogICAgICByZXR1cm4gITE7CiAgICBmb3IgKHZhciBFID0gMTsgRSA8PSA0OyBFICo9IDIpIHsKICAgICAgdmFyIGkgPSBCICogKDEgKyAwLjIgLyBFKTsKICAgICAgaSA9IE1hdGgubWluKGksIEEgKyAxMDA2NjMyOTYpOwogICAgICB2YXIgbyA9IE1hdGgubWluKHQsIEVBKE1hdGgubWF4KEEsIGkpLCA2NTUzNikpLCBoID0gdEEobyk7CiAgICAgIGlmIChoKQogICAgICAgIHJldHVybiAhMDsKICAgIH0KICAgIHJldHVybiAhMTsKICB9LCBuID0gbmV3IFVpbnQ4QXJyYXkoMTIzKSwgZSA9IDI1OyBlID49IDA7IC0tZSkKICAgIG5bNDggKyBlXSA9IDUyICsgZSwgbls2NSArIGVdID0gZSwgbls5NyArIGVdID0gMjYgKyBlOwogIG5bNDNdID0gNjIsIG5bNDddID0gNjMsIEkubm9FeGl0UnVudGltZSAmJiBJLm5vRXhpdFJ1bnRpbWUsIEkucHJpbnQgJiYgSS5wcmludCwgSS5wcmludEVyciAmJiBJLnByaW50RXJyLCBJLndhc21CaW5hcnkgJiYgKE0gPSBJLndhc21CaW5hcnkpLCBJLmFyZ3VtZW50cyAmJiBJLmFyZ3VtZW50cywgSS50aGlzUHJvZ3JhbSAmJiBJLnRoaXNQcm9ncmFtOwogIGZ1bmN0aW9uIHJBKEEpIHsKICAgIEkuX3NvcnQgPSBBLmQsIEkuX21hbGxvYyA9IEEuZSwgSS5fZnJlZSA9IEEuZjsKICB9CiAgdmFyIG5BID0geyBhOiBpQSB9LCB5ID0gSUEoKTsKICBmdW5jdGlvbiBtKCkgewogICAgaWYgKHMgPiAwKSB7CiAgICAgIGYgPSBtOwogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoUCgpLCBzID4gMCkgewogICAgICBmID0gbTsKICAgICAgcmV0dXJuOwogICAgfQogICAgZnVuY3Rpb24gQSgpIHsKICAgICAgSS5jYWxsZWRSdW4gPSAhMCwgYigpLCBJLm9uUnVudGltZUluaXRpYWxpemVkPy4oKSwgVygpOwogICAgfQogICAgSS5zZXRTdGF0dXMgPyAoSS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gSS5zZXRTdGF0dXMoIiIpLCAxKSwgQSgpOwogICAgfSwgMSkpIDogQSgpOwogIH0KICBmdW5jdGlvbiBhQSgpIHsKICAgIGlmIChJLnByZUluaXQpCiAgICAgIGZvciAodHlwZW9mIEkucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChJLnByZUluaXQgPSBbSS5wcmVJbml0XSk7IEkucHJlSW5pdC5sZW5ndGggPiAwOyApCiAgICAgICAgSS5wcmVJbml0LnNoaWZ0KCkoKTsKICB9CiAgcmV0dXJuIGFBKCksIG0oKSwgciA9IEksIHI7Cn07CmxldCBnLCBRLCBkLCBjLCBOLCB3LCBwLCBSLCBrLCBKLCBhID0gMCwgWSA9IDAsIEggPSBbXSwgRyA9ICEwLCBEID0gITEsIEYgPSAhMSwgSyA9ICExOwphc3luYyBmdW5jdGlvbiBvQSgpIHsKICBpZiAoIWcgJiYgKGcgPSBhd2FpdCBlQSgpLCAhZyB8fCAhZy5IRUFQRjMyIHx8ICFnLl9zb3J0KSkKICAgIHRocm93IG5ldyBFcnJvcigiV0FTTSBtb2R1bGUgZmFpbGVkIHRvIGluaXRpYWxpemUgcHJvcGVybHkiKTsKfQpjb25zdCBaID0gYXN5bmMgKCkgPT4gewogIGlmIChEKSB7CiAgICBGID0gITA7CiAgICByZXR1cm47CiAgfQogIEQgPSAhMCwgRiA9ICExLCBnIHx8IGF3YWl0IG9BKCk7CiAgY29uc3QgQyA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIoUS52ZXJ0ZXhDb3VudCkpKTsKICBhIDwgQyAmJiAoYSA+IDAgJiYgKGcuX2ZyZWUoZCksIGcuX2ZyZWUoTiksIGcuX2ZyZWUodyksIGcuX2ZyZWUocCksIGcuX2ZyZWUoUiksIGcuX2ZyZWUoayksIGcuX2ZyZWUoSikpLCBhID0gQywgZCA9IGcuX21hbGxvYygxNiAqIDQpLCBOID0gZy5fbWFsbG9jKGEgKiA0KSwgdyA9IGcuX21hbGxvYygzICogYSAqIDQpLCBwID0gZy5fbWFsbG9jKGEgKiA0KSwgUiA9IGcuX21hbGxvYyhhICogNCksIGsgPSBnLl9tYWxsb2MoYSAqIDQpLCBKID0gZy5fbWFsbG9jKGEgKiA0KSksIFkgPCBRLnRyYW5zZm9ybXMubGVuZ3RoICYmIChZID4gMCAmJiBnLl9mcmVlKGMpLCBZID0gUS50cmFuc2Zvcm1zLmxlbmd0aCwgYyA9IGcuX21hbGxvYyhZICogNCkpLCBEID0gITEsIEYgJiYgKEYgPSAhMSwgYXdhaXQgWigpKTsKfSwgc0EgPSAoKSA9PiB7CiAgaWYgKCEoRCB8fCBGIHx8ICFnIHx8ICFRKSkgewogICAgRCA9ICEwOwogICAgdHJ5IHsKICAgICAgY29uc3QgQyA9IGcuSEVBUEYzMiwgciA9IGcuSEVBUFUzMjsKICAgICAgaWYgKHcgLyA0ICsgUS5wb3NpdGlvbnMubGVuZ3RoID4gQy5sZW5ndGgpCiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJQb3NpdGlvbnMgYnVmZmVyIG92ZXJmbG93Iik7CiAgICAgIGlmIChjIC8gNCArIFEudHJhbnNmb3Jtcy5sZW5ndGggPiBDLmxlbmd0aCkKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIlRyYW5zZm9ybXMgYnVmZmVyIG92ZXJmbG93Iik7CiAgICAgIGlmIChOIC8gNCArIFEudHJhbnNmb3JtSW5kaWNlcy5sZW5ndGggPiByLmxlbmd0aCkKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIlRyYW5zZm9ybSBpbmRpY2VzIGJ1ZmZlciBvdmVyZmxvdyIpOwogICAgICBpZiAoQy5zZXQoUS5wb3NpdGlvbnMsIHcgLyA0KSwgQy5zZXQoUS50cmFuc2Zvcm1zLCBjIC8gNCksIHIuc2V0KFEudHJhbnNmb3JtSW5kaWNlcywgTiAvIDQpLCBDLnNldChuZXcgRmxvYXQzMkFycmF5KEgpLCBkIC8gNCksIGcuX3NvcnQoCiAgICAgICAgZCwKICAgICAgICBjLAogICAgICAgIE4sCiAgICAgICAgUS52ZXJ0ZXhDb3VudCwKICAgICAgICB3LAogICAgICAgIHAsCiAgICAgICAgUiwKICAgICAgICBrLAogICAgICAgIEoKICAgICAgKSwgUiArIFEudmVydGV4Q291bnQgKiA0ID4gci5idWZmZXIuYnl0ZUxlbmd0aCkKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkRlcHRoIGluZGV4IGJ1ZmZlciBvdmVyZmxvdyIpOwogICAgICBjb25zdCBJID0gbmV3IFVpbnQzMkFycmF5KHIuYnVmZmVyLCBSLCBRLnZlcnRleENvdW50KSwgbCA9IG5ldyBVaW50MzJBcnJheShJLnNsaWNlKCkuYnVmZmVyKTsKICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGRlcHRoSW5kZXg6IGwgfSwgW2wuYnVmZmVyXSk7CiAgICB9IGNhdGNoIHsKICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGRlcHRoSW5kZXg6IG5ldyBVaW50MzJBcnJheSgwKSB9LCBbXSk7CiAgICB9CiAgICBEID0gITEsIEcgPSAhMTsKICB9Cn0sIFggPSAoKSA9PiB7CiAgSyB8fCAoSyA9ICEwLCBHICYmIHNBKCksIHNldFRpbWVvdXQoKCkgPT4gewogICAgSyA9ICExLCBYKCk7CiAgfSkpOwp9OwpzZWxmLm9ubWVzc2FnZSA9IChDKSA9PiB7CiAgQy5kYXRhLnNvcnREYXRhICYmIChRID8gKFEucG9zaXRpb25zLnNldChDLmRhdGEuc29ydERhdGEucG9zaXRpb25zKSwgUS50cmFuc2Zvcm1zLnNldChDLmRhdGEuc29ydERhdGEudHJhbnNmb3JtcyksIFEudHJhbnNmb3JtSW5kaWNlcy5zZXQoQy5kYXRhLnNvcnREYXRhLnRyYW5zZm9ybUluZGljZXMpLCBRLnZlcnRleENvdW50ID0gQy5kYXRhLnNvcnREYXRhLnZlcnRleENvdW50KSA6IFEgPSB7CiAgICBwb3NpdGlvbnM6IG5ldyBGbG9hdDMyQXJyYXkoQy5kYXRhLnNvcnREYXRhLnBvc2l0aW9ucyksCiAgICB0cmFuc2Zvcm1zOiBuZXcgRmxvYXQzMkFycmF5KEMuZGF0YS5zb3J0RGF0YS50cmFuc2Zvcm1zKSwKICAgIHRyYW5zZm9ybUluZGljZXM6IG5ldyBVaW50MzJBcnJheShDLmRhdGEuc29ydERhdGEudHJhbnNmb3JtSW5kaWNlcyksCiAgICB2ZXJ0ZXhDb3VudDogQy5kYXRhLnNvcnREYXRhLnZlcnRleENvdW50CiAgfSwgRyA9ICEwLCBaKCkpLCBDLmRhdGEudmlld1Byb2ogJiYgKEMuZGF0YS52aWV3UHJvai5ldmVyeSgocikgPT4gSC5pbmNsdWRlcyhyKSkgPT09ICExICYmIChIID0gQy5kYXRhLnZpZXdQcm9qLCBHID0gITApLCBYKCkpOwp9OwovLyMgc291cmNlTWFwcGluZ1VSTD1Tb3J0V29ya2VyLURRTDdVVEVoLmpzLm1hcAo=",_A=r=>Uint8Array.from(atob(r),e=>e.charCodeAt(0)),ru=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",_A(iu)],{type:"text/javascript;charset=utf-8"});function AA(r){let e;try{if(e=ru&&(self.URL||self.webkitURL).createObjectURL(ru),!e)throw"";const t=new Worker(e,{type:"module",name:r?.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+iu,{type:"module",name:r?.name})}}class tl{constructor(e,t){this._scene=null,this._camera=null,this._started=!1,this._initialized=!1,this._renderer=e;const i=e.gl;this._program=i.createProgram(),this._passes=t||[];const s=i.createShader(i.VERTEX_SHADER);i.shaderSource(s,this._getVertexSource()),i.compileShader(s),i.getShaderParameter(s,i.COMPILE_STATUS)||console.error(i.getShaderInfoLog(s));const n=i.createShader(i.FRAGMENT_SHADER);i.shaderSource(n,this._getFragmentSource()),i.compileShader(n),i.getShaderParameter(n,i.COMPILE_STATUS)||console.error(i.getShaderInfoLog(n)),i.attachShader(this.program,s),i.attachShader(this.program,n),i.linkProgram(this.program),i.getProgramParameter(this.program,i.LINK_STATUS)||console.error(i.getProgramInfoLog(this.program)),this.resize=()=>{i.useProgram(this._program),this._resize()},this.initialize=()=>{console.assert(!this._initialized,"ShaderProgram already initialized"),i.useProgram(this._program),this._initialize();for(const o of this.passes)o.initialize(this);this._initialized=!0,this._started=!0},this.render=(o,a)=>{i.useProgram(this._program),(this._scene!==o||this._camera!==a)&&(this.dispose(),this._scene=o,this._camera=a,this.initialize());for(const l of this.passes)l.render();this._render()},this.dispose=()=>{if(this._initialized){i.useProgram(this._program);for(const o of this.passes)o.dispose();this._dispose(),this._scene=null,this._camera=null,this._initialized=!1}}}get renderer(){return this._renderer}get scene(){return this._scene}get camera(){return this._camera}get program(){return this._program}get passes(){return this._passes}get started(){return this._started}}const su="dmFyIG9BID0gZnVuY3Rpb24oQyA9IHt9KSB7CiAgdmFyIGUsIEEgPSBDLCBoID0gaW1wb3J0Lm1ldGEudXJsLCBrID0gIiIsIHk7CiAgewogICAgdHJ5IHsKICAgICAgayA9IG5ldyBVUkwoIi4iLCBoKS5ocmVmOwogICAgfSBjYXRjaCB7CiAgICB9CiAgICB5ID0gKGcpID0+IHsKICAgICAgdmFyIEIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIEIub3BlbigiR0VUIiwgZywgITEpLCBCLnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIEIuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkoQi5yZXNwb25zZSk7CiAgICB9OwogIH0KICBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpLCBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSk7CiAgdmFyIEYsIEQsIE47CiAgZnVuY3Rpb24gVSgpIHsKICAgIHZhciBnID0gRC5idWZmZXI7CiAgICBBLkhFQVBVOCA9IE4gPSBuZXcgVWludDhBcnJheShnKSwgQS5IRUFQVTMyID0gbmV3IFVpbnQzMkFycmF5KGcpLCBBLkhFQVBGMzIgPSBuZXcgRmxvYXQzMkFycmF5KGcpLCBuZXcgQmlnSW50NjRBcnJheShnKSwgbmV3IEJpZ1VpbnQ2NEFycmF5KGcpOwogIH0KICBmdW5jdGlvbiBpKCkgewogICAgaWYgKEEucHJlUnVuKQogICAgICBmb3IgKHR5cGVvZiBBLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChBLnByZVJ1biA9IFtBLnByZVJ1bl0pOyBBLnByZVJ1bi5sZW5ndGg7ICkKICAgICAgICAkKEEucHJlUnVuLnNoaWZ0KCkpOwogICAgeChUKTsKICB9CiAgZnVuY3Rpb24gSCgpIHsKICAgIGYuYygpOwogIH0KICBmdW5jdGlvbiBiKCkgewogICAgaWYgKEEucG9zdFJ1bikKICAgICAgZm9yICh0eXBlb2YgQS5wb3N0UnVuID09ICJmdW5jdGlvbiIgJiYgKEEucG9zdFJ1biA9IFtBLnBvc3RSdW5dKTsgQS5wb3N0UnVuLmxlbmd0aDsgKQogICAgICAgIE8oQS5wb3N0UnVuLnNoaWZ0KCkpOwogICAgeChqKTsKICB9CiAgdmFyIHMgPSAwLCB3ID0gbnVsbDsKICBmdW5jdGlvbiB2KGcpIHsKICAgIHMrKywgQS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzPy4ocyk7CiAgfQogIGZ1bmN0aW9uIFAoZykgewogICAgaWYgKHMtLSwgQS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzPy4ocyksIHMgPT0gMCAmJiB3KSB7CiAgICAgIHZhciBCID0gdzsKICAgICAgdyA9IG51bGwsIEIoKTsKICAgIH0KICB9CiAgdmFyIG07CiAgZnVuY3Rpb24gWCgpIHsKICAgIHJldHVybiBBQSgiQUdGemJRRUFBQUFCSmdaZ0FYOEJmMkFDZlgwQmYyQUJmUUYvWUFGL0FHQUxmMzkvZjM5L2YzOS9mMzhBWUFBQUFnY0JBV0VCWVFBQUF3Z0hBQUVDQXdBRUJRVUhBUUdDQW9DQUFnWUlBWDhCUVlDTUJBc0hGUVVCWWdJQUFXTUFCd0ZrQUFZQlpRQUZBV1lBQkF3QkFRcXFRQWRQQVFKL1FZQUlLQUlBSWdFZ0FFRUhha0Y0Y1NJQ2FpRUFBa0FnQWtFQUlBQWdBVTBiUlFSQUlBQS9BRUVRZEUwTkFTQUFFQUFOQVF0QmhBaEJNRFlDQUVGL0R3dEJnQWdnQURZQ0FDQUJDdzRBSUFBUUF5QUJFQU5CRUhSeUMzSUJCSDhnQUx3aUJFSC8vLzhEY1NFQkFrQWdCRUVYZGtIL0FYRWlBa1VOQUNBQ1FmQUFUUVJBSUFGQmdJQ0FCSEpCOFFBZ0FtdDJJUUVNQVFzZ0FrR05BVXNFUUVHQStBRWhBMEVBSVFFTUFRc2dBa0VLZEVHQWdBZHJJUU1MSUFNZ0JFRVFka0dBZ0FKeGNpQUJRUTEyY2d2Y0N3RUlmd0pBSUFCRkRRQWdBRUVJYXlJRElBQkJCR3NvQWdBaUFrRjRjU0lBYWlFRkFrQWdBa0VCY1EwQUlBSkJBbkZGRFFFZ0F5QURLQUlBSWdScklnTkJtQWdvQWdCSkRRRWdBQ0FFYWlFQUFrQUNRQUpBUVp3SUtBSUFJQU5IQkVBZ0F5Z0NEQ0VCSUFSQi93Rk5CRUFnQVNBREtBSUlJZ0pIRFFKQmlBaEJpQWdvQWdCQmZpQUVRUU4yZDNFMkFnQU1CUXNnQXlnQ0dDRUhJQUVnQTBjRVFDQURLQUlJSWdJZ0FUWUNEQ0FCSUFJMkFnZ01CQXNnQXlnQ0ZDSUNCSDhnQTBFVWFnVWdBeWdDRUNJQ1JRMERJQU5CRUdvTElRUURRQ0FFSVFZZ0FpSUJRUlJxSVFRZ0FTZ0NGQ0lDRFFBZ0FVRVFhaUVFSUFFb0FoQWlBZzBBQ3lBR1FRQTJBZ0FNQXdzZ0JTZ0NCQ0lDUVFOeFFRTkhEUU5Ca0FnZ0FEWUNBQ0FGSUFKQmZuRTJBZ1FnQXlBQVFRRnlOZ0lFSUFVZ0FEWUNBQThMSUFJZ0FUWUNEQ0FCSUFJMkFnZ01BZ3RCQUNFQkN5QUhSUTBBQWtBZ0F5Z0NIQ0lFUVFKMFFiZ0thaUlDS0FJQUlBTkdCRUFnQWlBQk5nSUFJQUVOQVVHTUNFR01DQ2dDQUVGK0lBUjNjVFlDQUF3Q0N3SkFJQU1nQnlnQ0VFWUVRQ0FISUFFMkFoQU1BUXNnQnlBQk5nSVVDeUFCUlEwQkN5QUJJQWMyQWhnZ0F5Z0NFQ0lDQkVBZ0FTQUNOZ0lRSUFJZ0FUWUNHQXNnQXlnQ0ZDSUNSUTBBSUFFZ0FqWUNGQ0FDSUFFMkFoZ0xJQU1nQlU4TkFDQUZLQUlFSWdSQkFYRkZEUUFDUUFKQUFrQUNRQ0FFUVFKeFJRUkFRYUFJS0FJQUlBVkdCRUJCb0FnZ0F6WUNBRUdVQ0VHVUNDZ0NBQ0FBYWlJQU5nSUFJQU1nQUVFQmNqWUNCQ0FEUVp3SUtBSUFSdzBHUVpBSVFRQTJBZ0JCbkFoQkFEWUNBQThMUVp3SUtBSUFJZ2NnQlVZRVFFR2NDQ0FETmdJQVFaQUlRWkFJS0FJQUlBQnFJZ0EyQWdBZ0F5QUFRUUZ5TmdJRUlBQWdBMm9nQURZQ0FBOExJQVJCZUhFZ0FHb2hBQ0FGS0FJTUlRRWdCRUgvQVUwRVFDQUZLQUlJSWdJZ0FVWUVRRUdJQ0VHSUNDZ0NBRUYrSUFSQkEzWjNjVFlDQUF3RkN5QUNJQUUyQWd3Z0FTQUNOZ0lJREFRTElBVW9BaGdoQ0NBQklBVkhCRUFnQlNnQ0NDSUNJQUUyQWd3Z0FTQUNOZ0lJREFNTElBVW9BaFFpQWdSL0lBVkJGR29GSUFVb0FoQWlBa1VOQWlBRlFSQnFDeUVFQTBBZ0JDRUdJQUlpQVVFVWFpRUVJQUVvQWhRaUFnMEFJQUZCRUdvaEJDQUJLQUlRSWdJTkFBc2dCa0VBTmdJQURBSUxJQVVnQkVGK2NUWUNCQ0FESUFCQkFYSTJBZ1FnQUNBRGFpQUFOZ0lBREFNTFFRQWhBUXNnQ0VVTkFBSkFJQVVvQWh3aUJFRUNkRUc0Q21vaUFpZ0NBQ0FGUmdSQUlBSWdBVFlDQUNBQkRRRkJqQWhCakFnb0FnQkJmaUFFZDNFMkFnQU1BZ3NDUUNBRklBZ29BaEJHQkVBZ0NDQUJOZ0lRREFFTElBZ2dBVFlDRkFzZ0FVVU5BUXNnQVNBSU5nSVlJQVVvQWhBaUFnUkFJQUVnQWpZQ0VDQUNJQUUyQWhnTElBVW9BaFFpQWtVTkFDQUJJQUkyQWhRZ0FpQUJOZ0lZQ3lBRElBQkJBWEkyQWdRZ0FDQURhaUFBTmdJQUlBTWdCMGNOQUVHUUNDQUFOZ0lBRHdzZ0FFSC9BVTBFUUNBQVFYaHhRYkFJYWlFQ0FuOUJpQWdvQWdBaUJFRUJJQUJCQTNaMElnQnhSUVJBUVlnSUlBQWdCSEkyQWdBZ0Fnd0JDeUFDS0FJSUN5RUFJQUlnQXpZQ0NDQUFJQU0yQWd3Z0F5QUNOZ0lNSUFNZ0FEWUNDQThMUVI4aEFTQUFRZi8vL3dkTkJFQWdBRUVtSUFCQkNIWm5JZ0pyZGtFQmNTQUNRUUYwYTBFK2FpRUJDeUFESUFFMkFod2dBMElBTndJUUlBRkJBblJCdUFwcUlRUUNmd0pBQW45QmpBZ29BZ0FpQmtFQklBRjBJZ0p4UlFSQVFZd0lJQUlnQm5JMkFnQWdCQ0FETmdJQVFSZ2hBVUVJREFFTElBQkJHU0FCUVFGMmEwRUFJQUZCSDBjYmRDRUJJQVFvQWdBaEJBTkFJQVFpQWlnQ0JFRjRjU0FBUmcwQ0lBRkJIWFloQkNBQlFRRjBJUUVnQWlBRVFRUnhhaUlHS0FJUUlnUU5BQXNnQmlBRE5nSVFRUmdoQVNBQ0lRUkJDQXNoQUNBRElnSU1BUXNnQWlnQ0NDSUVJQU0yQWd3Z0FpQUROZ0lJUVJnaEFFRUlJUUZCQUFzaEJpQUJJQU5xSUFRMkFnQWdBeUFDTmdJTUlBQWdBMm9nQmpZQ0FFR29DRUdvQ0NnQ0FFRUJheUlBUVg4Z0FCczJBZ0FMQzlFbkFRdC9Jd0JCRUdzaUNpUUFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FnQUVIMEFVMEVRRUdJQ0NnQ0FDSUVRUkFnQUVFTGFrSDRBM0VnQUVFTFNSc2lCa0VEZGlJQWRpSUJRUU54QkVBQ1FDQUJRWDl6UVFGeElBQnFJZ0pCQTNRaUFVR3dDR29pQUNBQlFiZ0lhaWdDQUNJQktBSUlJZ1ZHQkVCQmlBZ2dCRUYrSUFKM2NUWUNBQXdCQ3lBRklBQTJBZ3dnQUNBRk5nSUlDeUFCUVFocUlRQWdBU0FDUVFOMElnSkJBM0kyQWdRZ0FTQUNhaUlCSUFFb0FnUkJBWEkyQWdRTUN3c2dCa0dRQ0NnQ0FDSUlUUTBCSUFFRVFBSkFRUUlnQUhRaUFrRUFJQUpyY2lBQklBQjBjV2dpQVVFRGRDSUFRYkFJYWlJQ0lBQkJ1QWhxS0FJQUlnQW9BZ2dpQlVZRVFFR0lDQ0FFUVg0Z0FYZHhJZ1EyQWdBTUFRc2dCU0FDTmdJTUlBSWdCVFlDQ0FzZ0FDQUdRUU55TmdJRUlBQWdCbW9pQnlBQlFRTjBJZ0VnQm1zaUJVRUJjallDQkNBQUlBRnFJQVUyQWdBZ0NBUkFJQWhCZUhGQnNBaHFJUUZCbkFnb0FnQWhBZ0ovSUFSQkFTQUlRUU4yZENJRGNVVUVRRUdJQ0NBRElBUnlOZ0lBSUFFTUFRc2dBU2dDQ0FzaEF5QUJJQUkyQWdnZ0F5QUNOZ0lNSUFJZ0FUWUNEQ0FDSUFNMkFnZ0xJQUJCQ0dvaEFFR2NDQ0FITmdJQVFaQUlJQVUyQWdBTUN3dEJqQWdvQWdBaUMwVU5BU0FMYUVFQ2RFRzRDbW9vQWdBaUFpZ0NCRUY0Y1NBR2F5RURJQUloQVFOQUFrQWdBU2dDRUNJQVJRUkFJQUVvQWhRaUFFVU5BUXNnQUNnQ0JFRjRjU0FHYXlJQklBTWdBU0FEU1NJQkd5RURJQUFnQWlBQkd5RUNJQUFoQVF3QkN3c2dBaWdDR0NFSklBSWdBaWdDRENJQVJ3UkFJQUlvQWdnaUFTQUFOZ0lNSUFBZ0FUWUNDQXdLQ3lBQ0tBSVVJZ0VFZnlBQ1FSUnFCU0FDS0FJUUlnRkZEUU1nQWtFUWFnc2hCUU5BSUFVaEJ5QUJJZ0JCRkdvaEJTQUFLQUlVSWdFTkFDQUFRUkJxSVFVZ0FDZ0NFQ0lCRFFBTElBZEJBRFlDQUF3SkMwRi9JUVlnQUVHL2Ywc05BQ0FBUVF0cUlnRkJlSEVoQmtHTUNDZ0NBQ0lIUlEwQVFSOGhDRUVBSUFacklRTWdBRUgwLy84SFRRUkFJQVpCSmlBQlFRaDJaeUlBYTNaQkFYRWdBRUVCZEd0QlBtb2hDQXNDUUFKQUFrQWdDRUVDZEVHNENtb29BZ0FpQVVVRVFFRUFJUUFNQVF0QkFDRUFJQVpCR1NBSVFRRjJhMEVBSUFoQkgwY2JkQ0VDQTBBQ1FDQUJLQUlFUVhoeElBWnJJZ1FnQTA4TkFDQUJJUVVnQkNJRERRQkJBQ0VESUFFaEFBd0RDeUFBSUFFb0FoUWlCQ0FFSUFFZ0FrRWRka0VFY1dvb0FoQWlBVVliSUFBZ0JCc2hBQ0FDUVFGMElRSWdBUTBBQ3dzZ0FDQUZja1VFUUVFQUlRVkJBaUFJZENJQVFRQWdBR3R5SUFkeElnQkZEUU1nQUdoQkFuUkJ1QXBxS0FJQUlRQUxJQUJGRFFFTEEwQWdBQ2dDQkVGNGNTQUdheUlDSUFOSklRRWdBaUFESUFFYklRTWdBQ0FGSUFFYklRVWdBQ2dDRUNJQkJIOGdBUVVnQUNnQ0ZBc2lBQTBBQ3dzZ0JVVU5BQ0FEUVpBSUtBSUFJQVpyVHcwQUlBVW9BaGdoQ0NBRklBVW9BZ3dpQUVjRVFDQUZLQUlJSWdFZ0FEWUNEQ0FBSUFFMkFnZ01DQXNnQlNnQ0ZDSUJCSDhnQlVFVWFnVWdCU2dDRUNJQlJRMERJQVZCRUdvTElRSURRQ0FDSVFRZ0FTSUFRUlJxSVFJZ0FDZ0NGQ0lCRFFBZ0FFRVFhaUVDSUFBb0FoQWlBUTBBQ3lBRVFRQTJBZ0FNQndzZ0JrR1FDQ2dDQUNJRlRRUkFRWndJS0FJQUlRQUNRQ0FGSUFacklnRkJFRThFUUNBQUlBWnFJZ0lnQVVFQmNqWUNCQ0FBSUFWcUlBRTJBZ0FnQUNBR1FRTnlOZ0lFREFFTElBQWdCVUVEY2pZQ0JDQUFJQVZxSWdFZ0FTZ0NCRUVCY2pZQ0JFRUFJUUpCQUNFQkMwR1FDQ0FCTmdJQVFad0lJQUkyQWdBZ0FFRUlhaUVBREFrTElBWkJsQWdvQWdBaUFra0VRRUdVQ0NBQ0lBWnJJZ0UyQWdCQm9BaEJvQWdvQWdBaUFDQUdhaUlDTmdJQUlBSWdBVUVCY2pZQ0JDQUFJQVpCQTNJMkFnUWdBRUVJYWlFQURBa0xRUUFoQUNBR1FTOXFJZ01DZjBIZ0N5Z0NBQVJBUWVnTEtBSUFEQUVMUWV3TFFuODNBZ0JCNUF0Q2dLQ0FnSUNBQkRjQ0FFSGdDeUFLUVF4cVFYQnhRZGlxMWFvRmN6WUNBRUgwQzBFQU5nSUFRY1FMUVFBMkFnQkJnQ0FMSWdGcUlnUkJBQ0FCYXlJSGNTSUJJQVpORFFoQndBc29BZ0FpQlFSQVFiZ0xLQUlBSWdnZ0FXb2lDU0FJVFNBRklBbEpjZzBKQ3dKQVFjUUxMUUFBUVFSeFJRUkFBa0FDUUFKQUFrQkJvQWdvQWdBaUJRUkFRY2dMSVFBRFFDQUFLQUlBSWdnZ0JVMEVRQ0FGSUFnZ0FDZ0NCR3BKRFFNTElBQW9BZ2dpQUEwQUN3dEJBQkFCSWdKQmYwWU5BeUFCSVFSQjVBc29BZ0FpQUVFQmF5SUZJQUp4QkVBZ0FTQUNheUFDSUFWcVFRQWdBR3R4YWlFRUN5QUVJQVpORFFOQndBc29BZ0FpQUFSQVFiZ0xLQUlBSWdVZ0JHb2lCeUFGVFNBQUlBZEpjZzBFQ3lBRUVBRWlBQ0FDUncwQkRBVUxJQVFnQW1zZ0IzRWlCQkFCSWdJZ0FDZ0NBQ0FBS0FJRWFrWU5BU0FDSVFBTElBQkJmMFlOQVNBR1FUQnFJQVJOQkVBZ0FDRUNEQVFMUWVnTEtBSUFJZ0lnQXlBRWEycEJBQ0FDYTNFaUFoQUJRWDlHRFFFZ0FpQUVhaUVFSUFBaEFnd0RDeUFDUVg5SERRSUxRY1FMUWNRTEtBSUFRUVJ5TmdJQUN5QUJFQUVpQWtGL1JrRUFFQUVpQUVGL1JuSWdBQ0FDVFhJTkJTQUFJQUpySWdRZ0JrRW9hazBOQlF0QnVBdEJ1QXNvQWdBZ0JHb2lBRFlDQUVHOEN5Z0NBQ0FBU1FSQVFid0xJQUEyQWdBTEFrQkJvQWdvQWdBaUF3UkFRY2dMSVFBRFFDQUNJQUFvQWdBaUFTQUFLQUlFSWdWcVJnMENJQUFvQWdnaUFBMEFDd3dFQzBHWUNDZ0NBQ0lBUVFBZ0FDQUNUUnRGQkVCQm1BZ2dBallDQUF0QkFDRUFRY3dMSUFRMkFnQkJ5QXNnQWpZQ0FFR29DRUYvTmdJQVFhd0lRZUFMS0FJQU5nSUFRZFFMUVFBMkFnQURRQ0FBUVFOMElnRkJ1QWhxSUFGQnNBaHFJZ1UyQWdBZ0FVRzhDR29nQlRZQ0FDQUFRUUZxSWdCQklFY05BQXRCbEFnZ0JFRW9heUlBUVhnZ0FtdEJCM0VpQVdzaUJUWUNBRUdnQ0NBQklBSnFJZ0UyQWdBZ0FTQUZRUUZ5TmdJRUlBQWdBbXBCS0RZQ0JFR2tDRUh3Q3lnQ0FEWUNBQXdFQ3lBQ0lBTk5JQUVnQTB0eURRSWdBQ2dDREVFSWNRMENJQUFnQkNBRmFqWUNCRUdnQ0NBRFFYZ2dBMnRCQjNFaUFHb2lBVFlDQUVHVUNFR1VDQ2dDQUNBRWFpSUNJQUJySWdBMkFnQWdBU0FBUVFGeU5nSUVJQUlnQTJwQktEWUNCRUdrQ0VId0N5Z0NBRFlDQUF3REMwRUFJUUFNQmd0QkFDRUFEQVFMUVpnSUtBSUFJQUpMQkVCQm1BZ2dBallDQUFzZ0FpQUVhaUVGUWNnTElRQUNRQU5BSUFVZ0FDZ0NBQ0lCUndSQUlBQW9BZ2dpQUEwQkRBSUxDeUFBTFFBTVFRaHhSUTBEQzBISUN5RUFBMEFDUUNBQUtBSUFJZ0VnQTAwRVFDQURJQUVnQUNnQ0JHb2lCVWtOQVFzZ0FDZ0NDQ0VBREFFTEMwR1VDQ0FFUVNocklnQkJlQ0FDYTBFSGNTSUJheUlITmdJQVFhQUlJQUVnQW1vaUFUWUNBQ0FCSUFkQkFYSTJBZ1FnQUNBQ2FrRW9OZ0lFUWFRSVFmQUxLQUlBTmdJQUlBTWdCVUVuSUFWclFRZHhha0V2YXlJQUlBQWdBMEVRYWtrYklnRkJHellDQkNBQlFkQUxLUUlBTndJUUlBRkJ5QXNwQWdBM0FnaEIwQXNnQVVFSWFqWUNBRUhNQ3lBRU5nSUFRY2dMSUFJMkFnQkIxQXRCQURZQ0FDQUJRUmhxSVFBRFFDQUFRUWMyQWdRZ0FFRUlhaUFBUVFScUlRQWdCVWtOQUFzZ0FTQURSZzBBSUFFZ0FTZ0NCRUYrY1RZQ0JDQURJQUVnQTJzaUFrRUJjallDQkNBQklBSTJBZ0FDZnlBQ1FmOEJUUVJBSUFKQmVIRkJzQWhxSVFBQ2YwR0lDQ2dDQUNJQlFRRWdBa0VEZG5RaUFuRkZCRUJCaUFnZ0FTQUNjallDQUNBQURBRUxJQUFvQWdnTElRRWdBQ0FETmdJSUlBRWdBellDREVFTUlRSkJDQXdCQzBFZklRQWdBa0gvLy84SFRRUkFJQUpCSmlBQ1FRaDJaeUlBYTNaQkFYRWdBRUVCZEd0QlBtb2hBQXNnQXlBQU5nSWNJQU5DQURjQ0VDQUFRUUowUWJnS2FpRUJBa0FDUUVHTUNDZ0NBQ0lGUVFFZ0FIUWlCSEZGQkVCQmpBZ2dCQ0FGY2pZQ0FDQUJJQU0yQWdBTUFRc2dBa0VaSUFCQkFYWnJRUUFnQUVFZlJ4dDBJUUFnQVNnQ0FDRUZBMEFnQlNJQktBSUVRWGh4SUFKR0RRSWdBRUVkZGlFRklBQkJBWFFoQUNBQklBVkJCSEZxSWdRb0FoQWlCUTBBQ3lBRUlBTTJBaEFMSUFNZ0FUWUNHRUVJSVFJZ0F5SUJJUUJCREF3QkN5QUJLQUlJSWdBZ0F6WUNEQ0FCSUFNMkFnZ2dBeUFBTmdJSVFRQWhBRUVZSVFKQkRBc2dBMm9nQVRZQ0FDQUNJQU5xSUFBMkFnQUxRWlFJS0FJQUlnQWdCazBOQUVHVUNDQUFJQVpySWdFMkFnQkJvQWhCb0Fnb0FnQWlBQ0FHYWlJQ05nSUFJQUlnQVVFQmNqWUNCQ0FBSUFaQkEzSTJBZ1FnQUVFSWFpRUFEQVFMUVlRSVFUQTJBZ0JCQUNFQURBTUxJQUFnQWpZQ0FDQUFJQUFvQWdRZ0JHbzJBZ1FnQWtGNElBSnJRUWR4YWlJSUlBWkJBM0kyQWdRZ0FVRjRJQUZyUVFkeGFpSUVJQVlnQ0dvaUEyc2hCd0pBUWFBSUtBSUFJQVJHQkVCQm9BZ2dBellDQUVHVUNFR1VDQ2dDQUNBSGFpSUFOZ0lBSUFNZ0FFRUJjallDQkF3QkMwR2NDQ2dDQUNBRVJnUkFRWndJSUFNMkFnQkJrQWhCa0Fnb0FnQWdCMm9pQURZQ0FDQURJQUJCQVhJMkFnUWdBQ0FEYWlBQU5nSUFEQUVMSUFRb0FnUWlBRUVEY1VFQlJnUkFJQUJCZUhFaENTQUVLQUlNSVFJQ1FDQUFRZjhCVFFSQUlBUW9BZ2dpQVNBQ1JnUkFRWWdJUVlnSUtBSUFRWDRnQUVFRGRuZHhOZ0lBREFJTElBRWdBallDRENBQ0lBRTJBZ2dNQVFzZ0JDZ0NHQ0VHQWtBZ0FpQUVSd1JBSUFRb0FnZ2lBQ0FDTmdJTUlBSWdBRFlDQ0F3QkN3SkFJQVFvQWhRaUFBUi9JQVJCRkdvRklBUW9BaEFpQUVVTkFTQUVRUkJxQ3lFQkEwQWdBU0VGSUFBaUFrRVVhaUVCSUFBb0FoUWlBQTBBSUFKQkVHb2hBU0FDS0FJUUlnQU5BQXNnQlVFQU5nSUFEQUVMUVFBaEFnc2dCa1VOQUFKQUlBUW9BaHdpQUVFQ2RFRzRDbW9pQVNnQ0FDQUVSZ1JBSUFFZ0FqWUNBQ0FDRFFGQmpBaEJqQWdvQWdCQmZpQUFkM0UyQWdBTUFnc0NRQ0FFSUFZb0FoQkdCRUFnQmlBQ05nSVFEQUVMSUFZZ0FqWUNGQXNnQWtVTkFRc2dBaUFHTmdJWUlBUW9BaEFpQUFSQUlBSWdBRFlDRUNBQUlBSTJBaGdMSUFRb0FoUWlBRVVOQUNBQ0lBQTJBaFFnQUNBQ05nSVlDeUFISUFscUlRY2dCQ0FKYWlJRUtBSUVJUUFMSUFRZ0FFRitjVFlDQkNBRElBZEJBWEkyQWdRZ0F5QUhhaUFITmdJQUlBZEIvd0ZOQkVBZ0IwRjRjVUd3Q0dvaEFBSi9RWWdJS0FJQUlnRkJBU0FIUVFOMmRDSUNjVVVFUUVHSUNDQUJJQUp5TmdJQUlBQU1BUXNnQUNnQ0NBc2hBU0FBSUFNMkFnZ2dBU0FETmdJTUlBTWdBRFlDRENBRElBRTJBZ2dNQVF0Qkh5RUNJQWRCLy8vL0IwMEVRQ0FIUVNZZ0IwRUlkbWNpQUd0MlFRRnhJQUJCQVhSclFUNXFJUUlMSUFNZ0FqWUNIQ0FEUWdBM0FoQWdBa0VDZEVHNENtb2hBQUpBQWtCQmpBZ29BZ0FpQVVFQklBSjBJZ1Z4UlFSQVFZd0lJQUVnQlhJMkFnQWdBQ0FETmdJQURBRUxJQWRCR1NBQ1FRRjJhMEVBSUFKQkgwY2JkQ0VDSUFBb0FnQWhBUU5BSUFFaUFDZ0NCRUY0Y1NBSFJnMENJQUpCSFhZaEFTQUNRUUYwSVFJZ0FDQUJRUVJ4YWlJRktBSVFJZ0VOQUFzZ0JTQUROZ0lRQ3lBRElBQTJBaGdnQXlBRE5nSU1JQU1nQXpZQ0NBd0JDeUFBS0FJSUlnRWdBellDRENBQUlBTTJBZ2dnQTBFQU5nSVlJQU1nQURZQ0RDQURJQUUyQWdnTElBaEJDR29oQUF3Q0N3SkFJQWhGRFFBQ1FDQUZLQUljSWdGQkFuUkJ1QXBxSWdJb0FnQWdCVVlFUUNBQ0lBQTJBZ0FnQUEwQlFZd0lJQWRCZmlBQmQzRWlCellDQUF3Q0N3SkFJQVVnQ0NnQ0VFWUVRQ0FJSUFBMkFoQU1BUXNnQ0NBQU5nSVVDeUFBUlEwQkN5QUFJQWcyQWhnZ0JTZ0NFQ0lCQkVBZ0FDQUJOZ0lRSUFFZ0FEWUNHQXNnQlNnQ0ZDSUJSUTBBSUFBZ0FUWUNGQ0FCSUFBMkFoZ0xBa0FnQTBFUFRRUkFJQVVnQXlBR2FpSUFRUU55TmdJRUlBQWdCV29pQUNBQUtBSUVRUUZ5TmdJRURBRUxJQVVnQmtFRGNqWUNCQ0FGSUFacUlnUWdBMEVCY2pZQ0JDQURJQVJxSUFNMkFnQWdBMEgvQVUwRVFDQURRWGh4UWJBSWFpRUFBbjlCaUFnb0FnQWlBVUVCSUFOQkEzWjBJZ0p4UlFSQVFZZ0lJQUVnQW5JMkFnQWdBQXdCQ3lBQUtBSUlDeUVCSUFBZ0JEWUNDQ0FCSUFRMkFnd2dCQ0FBTmdJTUlBUWdBVFlDQ0F3QkMwRWZJUUFnQTBILy8vOEhUUVJBSUFOQkppQURRUWgyWnlJQWEzWkJBWEVnQUVFQmRHdEJQbW9oQUFzZ0JDQUFOZ0ljSUFSQ0FEY0NFQ0FBUVFKMFFiZ0thaUVCQWtBQ1FDQUhRUUVnQUhRaUFuRkZCRUJCakFnZ0FpQUhjallDQUNBQklBUTJBZ0FnQkNBQk5nSVlEQUVMSUFOQkdTQUFRUUYyYTBFQUlBQkJIMGNiZENFQUlBRW9BZ0FoQVFOQUlBRWlBaWdDQkVGNGNTQURSZzBDSUFCQkhYWWhBU0FBUVFGMElRQWdBaUFCUVFSeGFpSUhLQUlRSWdFTkFBc2dCeUFFTmdJUUlBUWdBallDR0FzZ0JDQUVOZ0lNSUFRZ0JEWUNDQXdCQ3lBQ0tBSUlJZ0FnQkRZQ0RDQUNJQVEyQWdnZ0JFRUFOZ0lZSUFRZ0FqWUNEQ0FFSUFBMkFnZ0xJQVZCQ0dvaEFBd0JDd0pBSUFsRkRRQUNRQ0FDS0FJY0lnRkJBblJCdUFwcUlnVW9BZ0FnQWtZRVFDQUZJQUEyQWdBZ0FBMEJRWXdJSUF0QmZpQUJkM0UyQWdBTUFnc0NRQ0FDSUFrb0FoQkdCRUFnQ1NBQU5nSVFEQUVMSUFrZ0FEWUNGQXNnQUVVTkFRc2dBQ0FKTmdJWUlBSW9BaEFpQVFSQUlBQWdBVFlDRUNBQklBQTJBaGdMSUFJb0FoUWlBVVVOQUNBQUlBRTJBaFFnQVNBQU5nSVlDd0pBSUFOQkQwMEVRQ0FDSUFNZ0Jtb2lBRUVEY2pZQ0JDQUFJQUpxSWdBZ0FDZ0NCRUVCY2pZQ0JBd0JDeUFDSUFaQkEzSTJBZ1FnQWlBR2FpSUZJQU5CQVhJMkFnUWdBeUFGYWlBRE5nSUFJQWdFUUNBSVFYaHhRYkFJYWlFQVFad0lLQUlBSVFFQ2YwRUJJQWhCQTNaMElnY2dCSEZGQkVCQmlBZ2dCQ0FIY2pZQ0FDQUFEQUVMSUFBb0FnZ0xJUVFnQUNBQk5nSUlJQVFnQVRZQ0RDQUJJQUEyQWd3Z0FTQUVOZ0lJQzBHY0NDQUZOZ0lBUVpBSUlBTTJBZ0FMSUFKQkNHb2hBQXNnQ2tFUWFpUUFJQUFMb1FzQ0MzOEpmU01BUWFBQmF5SUxKQUFnQzBFd2FrRUFRU1Q4Q3dBRFFDQUJJQTVIQkVBZ0FpQU9RUU5zSWd4QkFtcEJBblFpRDJvcUFnQWhGeUFDSUF4QkFXcEJBblFpRUdvcUFnQWhHQ0FJSUF4QkFuUWlFV29nQWlBUmFpb0NBQ0laT0FJQUlBZ2dFR29nR0RnQ0FDQUlJQTlxSUJjNEFnQWdCeUFPUVFWMGFpSU5RUUEyQWd3Z0RTQVhPQUlJSUEwZ0dEZ0NCQ0FOSUJrNEFnQUNRQ0FBUlFSQUlBWWdEbW90QUFCRkRRRUxJQTFCZ0lDQUNEWUNEQXNnRFNBRklBNUJBblFpREVFQmNpSVNhaTBBQUVFSWRDQUZJQXhxTFFBQWNpQUZJQXhCQW5JaUUyb3RBQUJCRUhSeUlBVWdERUVEY2lJTWFpMEFBRUVZZEhJMkFod2dDeUFESUJKQkFuUWlFbW9xQWdBaUZ6Z0NrQUVnQ3lBRElCTkJBblFpRTJvcUFnQWlHRGdDbEFFZ0N5QURJQXhCQW5RaUZHb3FBZ0FpR1RnQ21BRWdDeUFESUE1QkJIUWlGV29xQWdDTUlobzRBcHdCSUF0QjRBQnFJZ3dnQ3lvQ21BRWlGa01BQUFEQWxDQVdsQ0FMS2dLVUFTSVdRd0FBQU1DVUlCYVVRd0FBZ0QrU2tqZ0NBQ0FNSUFzcUFwQUJJaFlnRnBJZ0N5b0NsQUdVSUFzcUFwZ0JJaFlnRnBJZ0N5b0NuQUdVa3pnQ0JDQU1JQXNxQXBBQkloWWdGcElnQ3lvQ21BR1VJQXNxQXBRQkloWWdGcElnQ3lvQ25BR1VramdDQ0NBTUlBc3FBcEFCSWhZZ0ZwSWdDeW9DbEFHVUlBc3FBcGdCSWhZZ0ZwSWdDeW9DbkFHVWtqZ0NEQ0FNSUFzcUFwZ0JJaFpEQUFBQXdKUWdGcFFnQ3lvQ2tBRWlGa01BQUFEQWxDQVdsRU1BQUlBL2twSTRBaEFnRENBTEtnS1VBU0lXSUJhU0lBc3FBcGdCbENBTEtnS1FBU0lXSUJhU0lBc3FBcHdCbEpNNEFoUWdEQ0FMS2dLUUFTSVdJQmFTSUFzcUFwZ0JsQ0FMS2dLVUFTSVdJQmFTSUFzcUFwd0JsSk00QWhnZ0RDQUxLZ0tVQVNJV0lCYVNJQXNxQXBnQmxDQUxLZ0tRQVNJV0lCYVNJQXNxQXB3QmxKSTRBaHdnRENBTEtnS1VBU0lXUXdBQUFNQ1VJQmFVSUFzcUFwQUJJaFpEQUFBQXdKUWdGcFJEQUFDQVA1S1NPQUlnSUFrZ0ZXb2dGemdDQUNBSklCSnFJQmc0QWdBZ0NTQVRhaUFaT0FJQUlBa2dGR29nR2pnQ0FDQUxJQVFnRVdvcUFnQWlGemdDTUNBTElBUWdFR29xQWdBaUdEZ0NRQ0FMSUFRZ0Qyb3FBZ0FpR1RnQ1VDQUtJQkZxSUJjNEFnQWdDaUFRYWlBWU9BSUFJQW9nRDJvZ0dUZ0NBQ0FMSUF3cUFoZ2dDeW9DT0pRZ0RDb0NBQ0FMS2dJd2xDQU1LZ0lNSUFzcUFqU1VrcEk0QWdBZ0N5QU1LZ0ljSUFzcUFqaVVJQXdxQWdRZ0N5b0NNSlFnRENvQ0VDQUxLZ0kwbEpLU09BSUVJQXNnRENvQ0lDQUxLZ0k0bENBTUtnSUlJQXNxQWpDVUlBd3FBaFFnQ3lvQ05KU1NramdDQ0NBTElBd3FBaGdnQ3lvQ1JKUWdEQ29DQUNBTEtnSThsQ0FNS2dJTUlBc3FBa0NVa3BJNEFnd2dDeUFNS2dJY0lBc3FBa1NVSUF3cUFnUWdDeW9DUEpRZ0RDb0NFQ0FMS2dKQWxKS1NPQUlRSUFzZ0RDb0NJQ0FMS2dKRWxDQU1LZ0lJSUFzcUFqeVVJQXdxQWhRZ0N5b0NRSlNTa2pnQ0ZDQUxJQXdxQWhnZ0N5b0NVSlFnRENvQ0FDQUxLZ0pJbENBTUtnSU1JQXNxQWt5VWtwSTRBaGdnQ3lBTUtnSWNJQXNxQWxDVUlBd3FBZ1FnQ3lvQ1NKUWdEQ29DRUNBTEtnSk1sSktTT0FJY0lBc2dEQ29DSUNBTEtnSlFsQ0FNS2dJSUlBc3FBa2lVSUF3cUFoUWdDeW9DVEpTU2tqZ0NJQ0FMS2dJZ0lSY2dDeW9DQ0NFWUlBc3FBaFFoR1NBTklBc3FBaGdpR2lBYWxDQUxLZ0lBSWhZZ0ZwUWdDeW9DRENJYklCdVVrcEpEQUFDQVFKUWdHaUFMS2dJY0loeVVJQllnQ3lvQ0JDSWRsQ0FiSUFzcUFoQWlIcFNTa2tNQUFJQkFsQkFDTmdJUUlBMGdHaUFYbENBV0lCaVVJQnNnR1pTU2trTUFBSUJBbENBY0lCeVVJQjBnSFpRZ0hpQWVsSktTUXdBQWdFQ1VFQUkyQWhRZ0RTQWNJQmVVSUIwZ0dKUWdIaUFabEpLU1F3QUFnRUNVSUJjZ0Y1UWdHQ0FZbENBWklCbVVrcEpEQUFDQVFKUVFBallDR0NBT1FRRnFJUTRNQVFzTElBdEJvQUZxSkFBTEFnQUxDd2tCQUVHQkNBc0NCZ0U9Iik7CiAgfQogIGZ1bmN0aW9uIFcoZykgewogICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhnKSkKICAgICAgcmV0dXJuIGc7CiAgICBpZiAoZyA9PSBtICYmIEYpCiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShGKTsKICAgIGlmICh5KQogICAgICByZXR1cm4geShnKTsKICAgIHRocm93ICdzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZDogeW91IGNhbiBwcmVsb2FkIGl0IHRvIE1vZHVsZVsid2FzbUJpbmFyeSJdIG1hbnVhbGx5LCBvciBlbWNjLnB5IHdpbGwgZG8gdGhhdCBmb3IgeW91IHdoZW4gZ2VuZXJhdGluZyBIVE1MIChidXQgbm90IEpTKSc7CiAgfQogIGZ1bmN0aW9uIF8oZywgQikgewogICAgdmFyIEUsIFEgPSBXKGcpOwogICAgRSA9IG5ldyBXZWJBc3NlbWJseS5Nb2R1bGUoUSk7CiAgICB2YXIgbyA9IG5ldyBXZWJBc3NlbWJseS5JbnN0YW5jZShFLCBCKTsKICAgIHJldHVybiBbbywgRV07CiAgfQogIGZ1bmN0aW9uIFYoKSB7CiAgICByZXR1cm4geyBhOiBFQSB9OwogIH0KICBmdW5jdGlvbiB6KCkgewogICAgZnVuY3Rpb24gZyhRLCBvKSB7CiAgICAgIHJldHVybiBmID0gUS5leHBvcnRzLCBEID0gZi5iLCBVKCksIFFBKGYpLCBQKCksIGY7CiAgICB9CiAgICB2KCk7CiAgICB2YXIgQiA9IFYoKTsKICAgIGlmIChBLmluc3RhbnRpYXRlV2FzbSkKICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChRLCBvKSA9PiB7CiAgICAgICAgQS5pbnN0YW50aWF0ZVdhc20oQiwgKHIsIGMpID0+IHsKICAgICAgICAgIFEoZyhyKSk7CiAgICAgICAgfSk7CiAgICAgIH0pOwogICAgbSA/Pz0gWCgpOwogICAgdmFyIEUgPSBfKG0sIEIpOwogICAgcmV0dXJuIGcoRVswXSk7CiAgfQogIGZvciAodmFyIHggPSAoZykgPT4gewogICAgZm9yICg7IGcubGVuZ3RoID4gMDsgKQogICAgICBnLnNoaWZ0KCkoQSk7CiAgfSwgaiA9IFtdLCBPID0gKGcpID0+IGoucHVzaChnKSwgVCA9IFtdLCAkID0gKGcpID0+IFQucHVzaChnKSwgQUEgPSAoZykgPT4gewogICAgZm9yICh2YXIgQiwgRSwgUSA9IDAsIG8gPSAwLCByID0gZy5sZW5ndGgsIGMgPSBuZXcgVWludDhBcnJheSgociAqIDMgPj4gMikgLSAoZ1tyIC0gMl0gPT0gIj0iKSAtIChnW3IgLSAxXSA9PSAiPSIpKTsgUSA8IHI7IFEgKz0gNCwgbyArPSAzKQogICAgICBCID0gbltnLmNoYXJDb2RlQXQoUSArIDEpXSwgRSA9IG5bZy5jaGFyQ29kZUF0KFEgKyAyKV0sIGNbb10gPSBuW2cuY2hhckNvZGVBdChRKV0gPDwgMiB8IEIgPj4gNCwgY1tvICsgMV0gPSBCIDw8IDQgfCBFID4+IDIsIGNbbyArIDJdID0gRSA8PCA2IHwgbltnLmNoYXJDb2RlQXQoUSArIDMpXTsKICAgIHJldHVybiBjOwogIH0sIGdBID0gKCkgPT4gMjE0NzQ4MzY0OCwgSUEgPSAoZywgQikgPT4gTWF0aC5jZWlsKGcgLyBCKSAqIEIsIENBID0gKGcpID0+IHsKICAgIHZhciBCID0gRC5idWZmZXIsIEUgPSAoZyAtIEIuYnl0ZUxlbmd0aCArIDY1NTM1KSAvIDY1NTM2IHwgMDsKICAgIHRyeSB7CiAgICAgIHJldHVybiBELmdyb3coRSksIFUoKSwgMTsKICAgIH0gY2F0Y2ggewogICAgfQogIH0sIEJBID0gKGcpID0+IHsKICAgIHZhciBCID0gTi5sZW5ndGg7CiAgICBnID4+Pj0gMDsKICAgIHZhciBFID0gZ0EoKTsKICAgIGlmIChnID4gRSkKICAgICAgcmV0dXJuICExOwogICAgZm9yICh2YXIgUSA9IDE7IFEgPD0gNDsgUSAqPSAyKSB7CiAgICAgIHZhciBvID0gQiAqICgxICsgMC4yIC8gUSk7CiAgICAgIG8gPSBNYXRoLm1pbihvLCBnICsgMTAwNjYzMjk2KTsKICAgICAgdmFyIHIgPSBNYXRoLm1pbihFLCBJQShNYXRoLm1heChnLCBvKSwgNjU1MzYpKSwgYyA9IENBKHIpOwogICAgICBpZiAoYykKICAgICAgICByZXR1cm4gITA7CiAgICB9CiAgICByZXR1cm4gITE7CiAgfSwgbiA9IG5ldyBVaW50OEFycmF5KDEyMyksIGEgPSAyNTsgYSA+PSAwOyAtLWEpCiAgICBuWzQ4ICsgYV0gPSA1MiArIGEsIG5bNjUgKyBhXSA9IGEsIG5bOTcgKyBhXSA9IDI2ICsgYTsKICBuWzQzXSA9IDYyLCBuWzQ3XSA9IDYzLCBBLm5vRXhpdFJ1bnRpbWUgJiYgQS5ub0V4aXRSdW50aW1lLCBBLnByaW50ICYmIEEucHJpbnQsIEEucHJpbnRFcnIgJiYgQS5wcmludEVyciwgQS53YXNtQmluYXJ5ICYmIChGID0gQS53YXNtQmluYXJ5KSwgQS5hcmd1bWVudHMgJiYgQS5hcmd1bWVudHMsIEEudGhpc1Byb2dyYW0gJiYgQS50aGlzUHJvZ3JhbTsKICBmdW5jdGlvbiBRQShnKSB7CiAgICBBLl9wYWNrID0gZy5kLCBBLl9tYWxsb2MgPSBnLmUsIEEuX2ZyZWUgPSBnLmY7CiAgfQogIHZhciBFQSA9IHsgYTogQkEgfSwgZiA9IHooKTsKICBmdW5jdGlvbiBxKCkgewogICAgaWYgKHMgPiAwKSB7CiAgICAgIHcgPSBxOwogICAgICByZXR1cm47CiAgICB9CiAgICBpZiAoaSgpLCBzID4gMCkgewogICAgICB3ID0gcTsKICAgICAgcmV0dXJuOwogICAgfQogICAgZnVuY3Rpb24gZygpIHsKICAgICAgQS5jYWxsZWRSdW4gPSAhMCwgSCgpLCBBLm9uUnVudGltZUluaXRpYWxpemVkPy4oKSwgYigpOwogICAgfQogICAgQS5zZXRTdGF0dXMgPyAoQS5zZXRTdGF0dXMoIlJ1bm5pbmcuLi4iKSwgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgIHNldFRpbWVvdXQoKCkgPT4gQS5zZXRTdGF0dXMoIiIpLCAxKSwgZygpOwogICAgfSwgMSkpIDogZygpOwogIH0KICBmdW5jdGlvbiBpQSgpIHsKICAgIGlmIChBLnByZUluaXQpCiAgICAgIGZvciAodHlwZW9mIEEucHJlSW5pdCA9PSAiZnVuY3Rpb24iICYmIChBLnByZUluaXQgPSBbQS5wcmVJbml0XSk7IEEucHJlSW5pdC5sZW5ndGggPiAwOyApCiAgICAgICAgQS5wcmVJbml0LnNoaWZ0KCkoKTsKICB9CiAgcmV0dXJuIGlBKCksIHEoKSwgZSA9IEEsIGU7Cn07CmxldCBJOwphc3luYyBmdW5jdGlvbiB0QSgpIHsKICBpZiAoSSA9IGF3YWl0IG9BKCksICFJIHx8ICFJLkhFQVBGMzIgfHwgIUkuX3BhY2spCiAgICB0aHJvdyBuZXcgRXJyb3IoIldBU00gbW9kdWxlIGZhaWxlZCB0byBpbml0aWFsaXplIHByb3Blcmx5Iik7Cn0KbGV0IHQgPSAwOwpjb25zdCBsID0gbmV3IEFycmF5KCk7CmxldCBLID0gITEsIHAgPSAhMSwgWSwgUiwgRywgdSwgZCwgTSwgUywgTCwgSjsKY29uc3QgZUEgPSBhc3luYyAoQykgPT4gewogIGZvciAoOyBwOyApCiAgICBhd2FpdCBuZXcgUHJvbWlzZSgoSCkgPT4gc2V0VGltZW91dChILCAwKSk7CiAgSSB8fCAocCA9ICEwLCBhd2FpdCB0QSgpLCBwID0gITEpOwogIGNvbnN0IGUgPSBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2cyKEMudmVydGV4Q291bnQpKSk7CiAgZSA+IHQgJiYgKHQgPiAwICYmIChJLl9mcmVlKFkpLCBJLl9mcmVlKFIpLCBJLl9mcmVlKEcpLCBJLl9mcmVlKHUpLCBJLl9mcmVlKGQpLCBJLl9mcmVlKE0pLCBJLl9mcmVlKFMpLCBJLl9mcmVlKEwpLCBJLl9mcmVlKEopKSwgdCA9IGUsIFkgPSBJLl9tYWxsb2MoMyAqIHQgKiA0KSwgUiA9IEkuX21hbGxvYyg0ICogdCAqIDQpLCBHID0gSS5fbWFsbG9jKDMgKiB0ICogNCksIHUgPSBJLl9tYWxsb2MoNCAqIHQpLCBkID0gSS5fbWFsbG9jKHQpLCBNID0gSS5fbWFsbG9jKDggKiB0ICogNCksIFMgPSBJLl9tYWxsb2MoMyAqIHQgKiA0KSwgTCA9IEkuX21hbGxvYyg0ICogdCAqIDQpLCBKID0gSS5fbWFsbG9jKDMgKiB0ICogNCkpLCBJLkhFQVBGMzIuc2V0KEMucG9zaXRpb25zLCBZIC8gNCksIEkuSEVBUEYzMi5zZXQoQy5yb3RhdGlvbnMsIFIgLyA0KSwgSS5IRUFQRjMyLnNldChDLnNjYWxlcywgRyAvIDQpLCBJLkhFQVBVOC5zZXQoQy5jb2xvcnMsIHUpLCBJLkhFQVBVOC5zZXQoQy5zZWxlY3Rpb24sIGQpLCBJLl9wYWNrKAogICAgQy5zZWxlY3RlZCwKICAgIEMudmVydGV4Q291bnQsCiAgICBZLAogICAgUiwKICAgIEcsCiAgICB1LAogICAgZCwKICAgIE0sCiAgICBTLAogICAgTCwKICAgIEoKICApOwogIGNvbnN0IEEgPSBuZXcgVWludDMyQXJyYXkoSS5IRUFQVTMyLmJ1ZmZlciwgTSwgQy52ZXJ0ZXhDb3VudCAqIDgpLCBoID0gbmV3IFVpbnQzMkFycmF5KEEuc2xpY2UoKS5idWZmZXIpLCBrID0gbmV3IEZsb2F0MzJBcnJheShJLkhFQVBGMzIuYnVmZmVyLCBTLCBDLnZlcnRleENvdW50ICogMyksIHkgPSBuZXcgRmxvYXQzMkFycmF5KGsuc2xpY2UoKS5idWZmZXIpLCBGID0gbmV3IEZsb2F0MzJBcnJheShJLkhFQVBGMzIuYnVmZmVyLCBMLCBDLnZlcnRleENvdW50ICogNCksIEQgPSBuZXcgRmxvYXQzMkFycmF5KEYuc2xpY2UoKS5idWZmZXIpLCBOID0gbmV3IEZsb2F0MzJBcnJheShJLkhFQVBGMzIuYnVmZmVyLCBKLCBDLnZlcnRleENvdW50ICogMyksIFUgPSBuZXcgRmxvYXQzMkFycmF5KE4uc2xpY2UoKS5idWZmZXIpLCBpID0gewogICAgZGF0YTogaCwKICAgIHdvcmxkUG9zaXRpb25zOiB5LAogICAgd29ybGRSb3RhdGlvbnM6IEQsCiAgICB3b3JsZFNjYWxlczogVSwKICAgIG9mZnNldDogQy5vZmZzZXQsCiAgICB2ZXJ0ZXhDb3VudDogQy52ZXJ0ZXhDb3VudCwKICAgIHBvc2l0aW9uczogQy5wb3NpdGlvbnMuYnVmZmVyLAogICAgcm90YXRpb25zOiBDLnJvdGF0aW9ucy5idWZmZXIsCiAgICBzY2FsZXM6IEMuc2NhbGVzLmJ1ZmZlciwKICAgIGNvbG9yczogQy5jb2xvcnMuYnVmZmVyLAogICAgc2VsZWN0aW9uOiBDLnNlbGVjdGlvbi5idWZmZXIKICB9OwogIHNlbGYucG9zdE1lc3NhZ2UoeyByZXNwb25zZTogaSB9LCBbCiAgICBpLmRhdGEuYnVmZmVyLAogICAgaS53b3JsZFBvc2l0aW9ucy5idWZmZXIsCiAgICBpLndvcmxkUm90YXRpb25zLmJ1ZmZlciwKICAgIGkud29ybGRTY2FsZXMuYnVmZmVyLAogICAgaS5wb3NpdGlvbnMsCiAgICBpLnJvdGF0aW9ucywKICAgIGkuc2NhbGVzLAogICAgaS5jb2xvcnMsCiAgICBpLnNlbGVjdGlvbgogIF0pLCBLID0gITE7Cn0sIFogPSAoKSA9PiB7CiAgaWYgKGwubGVuZ3RoICE9PSAwICYmICFLKSB7CiAgICBLID0gITA7CiAgICBjb25zdCBDID0gbC5zaGlmdCgpOwogICAgZUEoQyksIHNldFRpbWVvdXQoKCkgPT4gewogICAgICBLID0gITEsIFooKTsKICAgIH0sIDApOwogIH0KfTsKc2VsZi5vbm1lc3NhZ2UgPSAoQykgPT4gewogIGlmIChDLmRhdGEuc3BsYXQpIHsKICAgIGNvbnN0IGUgPSBDLmRhdGEuc3BsYXQ7CiAgICBmb3IgKGNvbnN0IFtBLCBoXSBvZiBsLmVudHJpZXMoKSkKICAgICAgaWYgKGgub2Zmc2V0ID09PSBlLm9mZnNldCkgewogICAgICAgIGxbQV0gPSBlOwogICAgICAgIHJldHVybjsKICAgICAgfQogICAgbC5wdXNoKGUpLCBaKCk7CiAgfQp9OwovLyMgc291cmNlTWFwcGluZ1VSTD1EYXRhV29ya2VyLUJ6RWRfWmo2LmpzLm1hcAo=",wA=r=>Uint8Array.from(atob(r),e=>e.charCodeAt(0)),nu=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",wA(su)],{type:"text/javascript;charset=utf-8"});function yA(r){let e;try{if(e=nu&&(self.URL||self.webkitURL).createObjectURL(nu),!e)throw"";const t=new Worker(e,{type:"module",name:r?.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+su,{type:"module",name:r?.name})}}var SA=function(r={}){var e,t=r,i=typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:qi&&qi.tagName.toUpperCase()==="SCRIPT"&&qi.src||new URL("quyuan.umd.js",document.baseURI).href,s="",n;{try{s=new URL(".",i).href}catch{}n=W=>{var X=new XMLHttpRequest;return X.open("GET",W,!1),X.responseType="arraybuffer",X.send(null),new Uint8Array(X.response)}}console.log.bind(console),console.error.bind(console);var o,a,l;function c(){var W=a.buffer;t.HEAPU8=l=new Uint8Array(W),t.HEAPU32=new Uint32Array(W),t.HEAPF32=new Float32Array(W),new BigInt64Array(W),new BigUint64Array(W)}function u(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)x(t.preRun.shift());b(_)}function f(){K.c()}function m(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)y(t.postRun.shift());b(U)}var p=0,g=null;function A(W){p++,t.monitorRunDependencies?.(p)}function d(W){if(p--,t.monitorRunDependencies?.(p),p==0&&g){var X=g;g=null,X()}}var h;function v(){return T("AGFzbQEAAAABJgZgAX8Bf2ACfX0Bf2ABfQF/YAF/AGALf39/f39/f39/f38AYAAAAgcBAWEBYQAAAwgHAAECAwAEBQUHAQGCAoCAAgYIAX8BQYCMBAsHFQUBYgIAAWMABwFkAAYBZQAFAWYABAwBAQqqQAdPAQJ/QYAIKAIAIgEgAEEHakF4cSICaiEAAkAgAkEAIAAgAU0bRQRAIAA/AEEQdE0NASAAEAANAQtBhAhBMDYCAEF/DwtBgAggADYCACABCw4AIAAQAyABEANBEHRyC3IBBH8gALwiBEH///8DcSEBAkAgBEEXdkH/AXEiAkUNACACQfAATQRAIAFBgICABHJB8QAgAmt2IQEMAQsgAkGNAUsEQEGA+AEhA0EAIQEMAQsgAkEKdEGAgAdrIQMLIAMgBEEQdkGAgAJxciABQQ12cgvcCwEIfwJAIABFDQAgAEEIayIDIABBBGsoAgAiAkF4cSIAaiEFAkAgAkEBcQ0AIAJBAnFFDQEgAyADKAIAIgRrIgNBmAgoAgBJDQEgACAEaiEAAkACQAJAQZwIKAIAIANHBEAgAygCDCEBIARB/wFNBEAgASADKAIIIgJHDQJBiAhBiAgoAgBBfiAEQQN2d3E2AgAMBQsgAygCGCEHIAEgA0cEQCADKAIIIgIgATYCDCABIAI2AggMBAsgAygCFCICBH8gA0EUagUgAygCECICRQ0DIANBEGoLIQQDQCAEIQYgAiIBQRRqIQQgASgCFCICDQAgAUEQaiEEIAEoAhAiAg0ACyAGQQA2AgAMAwsgBSgCBCICQQNxQQNHDQNBkAggADYCACAFIAJBfnE2AgQgAyAAQQFyNgIEIAUgADYCAA8LIAIgATYCDCABIAI2AggMAgtBACEBCyAHRQ0AAkAgAygCHCIEQQJ0QbgKaiICKAIAIANGBEAgAiABNgIAIAENAUGMCEGMCCgCAEF+IAR3cTYCAAwCCwJAIAMgBygCEEYEQCAHIAE2AhAMAQsgByABNgIUCyABRQ0BCyABIAc2AhggAygCECICBEAgASACNgIQIAIgATYCGAsgAygCFCICRQ0AIAEgAjYCFCACIAE2AhgLIAMgBU8NACAFKAIEIgRBAXFFDQACQAJAAkACQCAEQQJxRQRAQaAIKAIAIAVGBEBBoAggAzYCAEGUCEGUCCgCACAAaiIANgIAIAMgAEEBcjYCBCADQZwIKAIARw0GQZAIQQA2AgBBnAhBADYCAA8LQZwIKAIAIgcgBUYEQEGcCCADNgIAQZAIQZAIKAIAIABqIgA2AgAgAyAAQQFyNgIEIAAgA2ogADYCAA8LIARBeHEgAGohACAFKAIMIQEgBEH/AU0EQCAFKAIIIgIgAUYEQEGICEGICCgCAEF+IARBA3Z3cTYCAAwFCyACIAE2AgwgASACNgIIDAQLIAUoAhghCCABIAVHBEAgBSgCCCICIAE2AgwgASACNgIIDAMLIAUoAhQiAgR/IAVBFGoFIAUoAhAiAkUNAiAFQRBqCyEEA0AgBCEGIAIiAUEUaiEEIAEoAhQiAg0AIAFBEGohBCABKAIQIgINAAsgBkEANgIADAILIAUgBEF+cTYCBCADIABBAXI2AgQgACADaiAANgIADAMLQQAhAQsgCEUNAAJAIAUoAhwiBEECdEG4CmoiAigCACAFRgRAIAIgATYCACABDQFBjAhBjAgoAgBBfiAEd3E2AgAMAgsCQCAFIAgoAhBGBEAgCCABNgIQDAELIAggATYCFAsgAUUNAQsgASAINgIYIAUoAhAiAgRAIAEgAjYCECACIAE2AhgLIAUoAhQiAkUNACABIAI2AhQgAiABNgIYCyADIABBAXI2AgQgACADaiAANgIAIAMgB0cNAEGQCCAANgIADwsgAEH/AU0EQCAAQXhxQbAIaiECAn9BiAgoAgAiBEEBIABBA3Z0IgBxRQRAQYgIIAAgBHI2AgAgAgwBCyACKAIICyEAIAIgAzYCCCAAIAM2AgwgAyACNgIMIAMgADYCCA8LQR8hASAAQf///wdNBEAgAEEmIABBCHZnIgJrdkEBcSACQQF0a0E+aiEBCyADIAE2AhwgA0IANwIQIAFBAnRBuApqIQQCfwJAAn9BjAgoAgAiBkEBIAF0IgJxRQRAQYwIIAIgBnI2AgAgBCADNgIAQRghAUEIDAELIABBGSABQQF2a0EAIAFBH0cbdCEBIAQoAgAhBANAIAQiAigCBEF4cSAARg0CIAFBHXYhBCABQQF0IQEgAiAEQQRxaiIGKAIQIgQNAAsgBiADNgIQQRghASACIQRBCAshACADIgIMAQsgAigCCCIEIAM2AgwgAiADNgIIQRghAEEIIQFBAAshBiABIANqIAQ2AgAgAyACNgIMIAAgA2ogBjYCAEGoCEGoCCgCAEEBayIAQX8gABs2AgALC9EnAQt/IwBBEGsiCiQAAkACQAJAAkACQAJAAkACQAJAAkAgAEH0AU0EQEGICCgCACIEQRAgAEELakH4A3EgAEELSRsiBkEDdiIAdiIBQQNxBEACQCABQX9zQQFxIABqIgJBA3QiAUGwCGoiACABQbgIaigCACIBKAIIIgVGBEBBiAggBEF+IAJ3cTYCAAwBCyAFIAA2AgwgACAFNgIICyABQQhqIQAgASACQQN0IgJBA3I2AgQgASACaiIBIAEoAgRBAXI2AgQMCwsgBkGQCCgCACIITQ0BIAEEQAJAQQIgAHQiAkEAIAJrciABIAB0cWgiAUEDdCIAQbAIaiICIABBuAhqKAIAIgAoAggiBUYEQEGICCAEQX4gAXdxIgQ2AgAMAQsgBSACNgIMIAIgBTYCCAsgACAGQQNyNgIEIAAgBmoiByABQQN0IgEgBmsiBUEBcjYCBCAAIAFqIAU2AgAgCARAIAhBeHFBsAhqIQFBnAgoAgAhAgJ/IARBASAIQQN2dCIDcUUEQEGICCADIARyNgIAIAEMAQsgASgCCAshAyABIAI2AgggAyACNgIMIAIgATYCDCACIAM2AggLIABBCGohAEGcCCAHNgIAQZAIIAU2AgAMCwtBjAgoAgAiC0UNASALaEECdEG4CmooAgAiAigCBEF4cSAGayEDIAIhAQNAAkAgASgCECIARQRAIAEoAhQiAEUNAQsgACgCBEF4cSAGayIBIAMgASADSSIBGyEDIAAgAiABGyECIAAhAQwBCwsgAigCGCEJIAIgAigCDCIARwRAIAIoAggiASAANgIMIAAgATYCCAwKCyACKAIUIgEEfyACQRRqBSACKAIQIgFFDQMgAkEQagshBQNAIAUhByABIgBBFGohBSAAKAIUIgENACAAQRBqIQUgACgCECIBDQALIAdBADYCAAwJC0F/IQYgAEG/f0sNACAAQQtqIgFBeHEhBkGMCCgCACIHRQ0AQR8hCEEAIAZrIQMgAEH0//8HTQRAIAZBJiABQQh2ZyIAa3ZBAXEgAEEBdGtBPmohCAsCQAJAAkAgCEECdEG4CmooAgAiAUUEQEEAIQAMAQtBACEAIAZBGSAIQQF2a0EAIAhBH0cbdCECA0ACQCABKAIEQXhxIAZrIgQgA08NACABIQUgBCIDDQBBACEDIAEhAAwDCyAAIAEoAhQiBCAEIAEgAkEddkEEcWooAhAiAUYbIAAgBBshACACQQF0IQIgAQ0ACwsgACAFckUEQEEAIQVBAiAIdCIAQQAgAGtyIAdxIgBFDQMgAGhBAnRBuApqKAIAIQALIABFDQELA0AgACgCBEF4cSAGayICIANJIQEgAiADIAEbIQMgACAFIAEbIQUgACgCECIBBH8gAQUgACgCFAsiAA0ACwsgBUUNACADQZAIKAIAIAZrTw0AIAUoAhghCCAFIAUoAgwiAEcEQCAFKAIIIgEgADYCDCAAIAE2AggMCAsgBSgCFCIBBH8gBUEUagUgBSgCECIBRQ0DIAVBEGoLIQIDQCACIQQgASIAQRRqIQIgACgCFCIBDQAgAEEQaiECIAAoAhAiAQ0ACyAEQQA2AgAMBwsgBkGQCCgCACIFTQRAQZwIKAIAIQACQCAFIAZrIgFBEE8EQCAAIAZqIgIgAUEBcjYCBCAAIAVqIAE2AgAgACAGQQNyNgIEDAELIAAgBUEDcjYCBCAAIAVqIgEgASgCBEEBcjYCBEEAIQJBACEBC0GQCCABNgIAQZwIIAI2AgAgAEEIaiEADAkLIAZBlAgoAgAiAkkEQEGUCCACIAZrIgE2AgBBoAhBoAgoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAkLQQAhACAGQS9qIgMCf0HgCygCAARAQegLKAIADAELQewLQn83AgBB5AtCgKCAgICABDcCAEHgCyAKQQxqQXBxQdiq1aoFczYCAEH0C0EANgIAQcQLQQA2AgBBgCALIgFqIgRBACABayIHcSIBIAZNDQhBwAsoAgAiBQRAQbgLKAIAIgggAWoiCSAITSAFIAlJcg0JCwJAQcQLLQAAQQRxRQRAAkACQAJAAkBBoAgoAgAiBQRAQcgLIQADQCAAKAIAIgggBU0EQCAFIAggACgCBGpJDQMLIAAoAggiAA0ACwtBABABIgJBf0YNAyABIQRB5AsoAgAiAEEBayIFIAJxBEAgASACayACIAVqQQAgAGtxaiEECyAEIAZNDQNBwAsoAgAiAARAQbgLKAIAIgUgBGoiByAFTSAAIAdJcg0ECyAEEAEiACACRw0BDAULIAQgAmsgB3EiBBABIgIgACgCACAAKAIEakYNASACIQALIABBf0YNASAGQTBqIARNBEAgACECDAQLQegLKAIAIgIgAyAEa2pBACACa3EiAhABQX9GDQEgAiAEaiEEIAAhAgwDCyACQX9HDQILQcQLQcQLKAIAQQRyNgIACyABEAEiAkF/RkEAEAEiAEF/RnIgACACTXINBSAAIAJrIgQgBkEoak0NBQtBuAtBuAsoAgAgBGoiADYCAEG8CygCACAASQRAQbwLIAA2AgALAkBBoAgoAgAiAwRAQcgLIQADQCACIAAoAgAiASAAKAIEIgVqRg0CIAAoAggiAA0ACwwEC0GYCCgCACIAQQAgACACTRtFBEBBmAggAjYCAAtBACEAQcwLIAQ2AgBByAsgAjYCAEGoCEF/NgIAQawIQeALKAIANgIAQdQLQQA2AgADQCAAQQN0IgFBuAhqIAFBsAhqIgU2AgAgAUG8CGogBTYCACAAQQFqIgBBIEcNAAtBlAggBEEoayIAQXggAmtBB3EiAWsiBTYCAEGgCCABIAJqIgE2AgAgASAFQQFyNgIEIAAgAmpBKDYCBEGkCEHwCygCADYCAAwECyACIANNIAEgA0tyDQIgACgCDEEIcQ0CIAAgBCAFajYCBEGgCCADQXggA2tBB3EiAGoiATYCAEGUCEGUCCgCACAEaiICIABrIgA2AgAgASAAQQFyNgIEIAIgA2pBKDYCBEGkCEHwCygCADYCAAwDC0EAIQAMBgtBACEADAQLQZgIKAIAIAJLBEBBmAggAjYCAAsgAiAEaiEFQcgLIQACQANAIAUgACgCACIBRwRAIAAoAggiAA0BDAILCyAALQAMQQhxRQ0DC0HICyEAA0ACQCAAKAIAIgEgA00EQCADIAEgACgCBGoiBUkNAQsgACgCCCEADAELC0GUCCAEQShrIgBBeCACa0EHcSIBayIHNgIAQaAIIAEgAmoiATYCACABIAdBAXI2AgQgACACakEoNgIEQaQIQfALKAIANgIAIAMgBUEnIAVrQQdxakEvayIAIAAgA0EQakkbIgFBGzYCBCABQdALKQIANwIQIAFByAspAgA3AghB0AsgAUEIajYCAEHMCyAENgIAQcgLIAI2AgBB1AtBADYCACABQRhqIQADQCAAQQc2AgQgAEEIaiAAQQRqIQAgBUkNAAsgASADRg0AIAEgASgCBEF+cTYCBCADIAEgA2siAkEBcjYCBCABIAI2AgACfyACQf8BTQRAIAJBeHFBsAhqIQACf0GICCgCACIBQQEgAkEDdnQiAnFFBEBBiAggASACcjYCACAADAELIAAoAggLIQEgACADNgIIIAEgAzYCDEEMIQJBCAwBC0EfIQAgAkH///8HTQRAIAJBJiACQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgAyAANgIcIANCADcCECAAQQJ0QbgKaiEBAkACQEGMCCgCACIFQQEgAHQiBHFFBEBBjAggBCAFcjYCACABIAM2AgAMAQsgAkEZIABBAXZrQQAgAEEfRxt0IQAgASgCACEFA0AgBSIBKAIEQXhxIAJGDQIgAEEddiEFIABBAXQhACABIAVBBHFqIgQoAhAiBQ0ACyAEIAM2AhALIAMgATYCGEEIIQIgAyIBIQBBDAwBCyABKAIIIgAgAzYCDCABIAM2AgggAyAANgIIQQAhAEEYIQJBDAsgA2ogATYCACACIANqIAA2AgALQZQIKAIAIgAgBk0NAEGUCCAAIAZrIgE2AgBBoAhBoAgoAgAiACAGaiICNgIAIAIgAUEBcjYCBCAAIAZBA3I2AgQgAEEIaiEADAQLQYQIQTA2AgBBACEADAMLIAAgAjYCACAAIAAoAgQgBGo2AgQgAkF4IAJrQQdxaiIIIAZBA3I2AgQgAUF4IAFrQQdxaiIEIAYgCGoiA2shBwJAQaAIKAIAIARGBEBBoAggAzYCAEGUCEGUCCgCACAHaiIANgIAIAMgAEEBcjYCBAwBC0GcCCgCACAERgRAQZwIIAM2AgBBkAhBkAgoAgAgB2oiADYCACADIABBAXI2AgQgACADaiAANgIADAELIAQoAgQiAEEDcUEBRgRAIABBeHEhCSAEKAIMIQICQCAAQf8BTQRAIAQoAggiASACRgRAQYgIQYgIKAIAQX4gAEEDdndxNgIADAILIAEgAjYCDCACIAE2AggMAQsgBCgCGCEGAkAgAiAERwRAIAQoAggiACACNgIMIAIgADYCCAwBCwJAIAQoAhQiAAR/IARBFGoFIAQoAhAiAEUNASAEQRBqCyEBA0AgASEFIAAiAkEUaiEBIAAoAhQiAA0AIAJBEGohASACKAIQIgANAAsgBUEANgIADAELQQAhAgsgBkUNAAJAIAQoAhwiAEECdEG4CmoiASgCACAERgRAIAEgAjYCACACDQFBjAhBjAgoAgBBfiAAd3E2AgAMAgsCQCAEIAYoAhBGBEAgBiACNgIQDAELIAYgAjYCFAsgAkUNAQsgAiAGNgIYIAQoAhAiAARAIAIgADYCECAAIAI2AhgLIAQoAhQiAEUNACACIAA2AhQgACACNgIYCyAHIAlqIQcgBCAJaiIEKAIEIQALIAQgAEF+cTYCBCADIAdBAXI2AgQgAyAHaiAHNgIAIAdB/wFNBEAgB0F4cUGwCGohAAJ/QYgIKAIAIgFBASAHQQN2dCICcUUEQEGICCABIAJyNgIAIAAMAQsgACgCCAshASAAIAM2AgggASADNgIMIAMgADYCDCADIAE2AggMAQtBHyECIAdB////B00EQCAHQSYgB0EIdmciAGt2QQFxIABBAXRrQT5qIQILIAMgAjYCHCADQgA3AhAgAkECdEG4CmohAAJAAkBBjAgoAgAiAUEBIAJ0IgVxRQRAQYwIIAEgBXI2AgAgACADNgIADAELIAdBGSACQQF2a0EAIAJBH0cbdCECIAAoAgAhAQNAIAEiACgCBEF4cSAHRg0CIAJBHXYhASACQQF0IQIgACABQQRxaiIFKAIQIgENAAsgBSADNgIQCyADIAA2AhggAyADNgIMIAMgAzYCCAwBCyAAKAIIIgEgAzYCDCAAIAM2AgggA0EANgIYIAMgADYCDCADIAE2AggLIAhBCGohAAwCCwJAIAhFDQACQCAFKAIcIgFBAnRBuApqIgIoAgAgBUYEQCACIAA2AgAgAA0BQYwIIAdBfiABd3EiBzYCAAwCCwJAIAUgCCgCEEYEQCAIIAA2AhAMAQsgCCAANgIUCyAARQ0BCyAAIAg2AhggBSgCECIBBEAgACABNgIQIAEgADYCGAsgBSgCFCIBRQ0AIAAgATYCFCABIAA2AhgLAkAgA0EPTQRAIAUgAyAGaiIAQQNyNgIEIAAgBWoiACAAKAIEQQFyNgIEDAELIAUgBkEDcjYCBCAFIAZqIgQgA0EBcjYCBCADIARqIAM2AgAgA0H/AU0EQCADQXhxQbAIaiEAAn9BiAgoAgAiAUEBIANBA3Z0IgJxRQRAQYgIIAEgAnI2AgAgAAwBCyAAKAIICyEBIAAgBDYCCCABIAQ2AgwgBCAANgIMIAQgATYCCAwBC0EfIQAgA0H///8HTQRAIANBJiADQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgBCAANgIcIARCADcCECAAQQJ0QbgKaiEBAkACQCAHQQEgAHQiAnFFBEBBjAggAiAHcjYCACABIAQ2AgAgBCABNgIYDAELIANBGSAAQQF2a0EAIABBH0cbdCEAIAEoAgAhAQNAIAEiAigCBEF4cSADRg0CIABBHXYhASAAQQF0IQAgAiABQQRxaiIHKAIQIgENAAsgByAENgIQIAQgAjYCGAsgBCAENgIMIAQgBDYCCAwBCyACKAIIIgAgBDYCDCACIAQ2AgggBEEANgIYIAQgAjYCDCAEIAA2AggLIAVBCGohAAwBCwJAIAlFDQACQCACKAIcIgFBAnRBuApqIgUoAgAgAkYEQCAFIAA2AgAgAA0BQYwIIAtBfiABd3E2AgAMAgsCQCACIAkoAhBGBEAgCSAANgIQDAELIAkgADYCFAsgAEUNAQsgACAJNgIYIAIoAhAiAQRAIAAgATYCECABIAA2AhgLIAIoAhQiAUUNACAAIAE2AhQgASAANgIYCwJAIANBD00EQCACIAMgBmoiAEEDcjYCBCAAIAJqIgAgACgCBEEBcjYCBAwBCyACIAZBA3I2AgQgAiAGaiIFIANBAXI2AgQgAyAFaiADNgIAIAgEQCAIQXhxQbAIaiEAQZwIKAIAIQECf0EBIAhBA3Z0IgcgBHFFBEBBiAggBCAHcjYCACAADAELIAAoAggLIQQgACABNgIIIAQgATYCDCABIAA2AgwgASAENgIIC0GcCCAFNgIAQZAIIAM2AgALIAJBCGohAAsgCkEQaiQAIAALoQsCC38JfSMAQaABayILJAAgC0EwakEAQST8CwADQCABIA5HBEAgAiAOQQNsIgxBAmpBAnQiD2oqAgAhFyACIAxBAWpBAnQiEGoqAgAhGCAIIAxBAnQiEWogAiARaioCACIZOAIAIAggEGogGDgCACAIIA9qIBc4AgAgByAOQQV0aiINQQA2AgwgDSAXOAIIIA0gGDgCBCANIBk4AgACQCAARQRAIAYgDmotAABFDQELIA1BgICACDYCDAsgDSAFIA5BAnQiDEEBciISai0AAEEIdCAFIAxqLQAAciAFIAxBAnIiE2otAABBEHRyIAUgDEEDciIMai0AAEEYdHI2AhwgCyADIBJBAnQiEmoqAgAiFzgCkAEgCyADIBNBAnQiE2oqAgAiGDgClAEgCyADIAxBAnQiFGoqAgAiGTgCmAEgCyADIA5BBHQiFWoqAgCMIho4ApwBIAtB4ABqIgwgCyoCmAEiFkMAAADAlCAWlCALKgKUASIWQwAAAMCUIBaUQwAAgD+SkjgCACAMIAsqApABIhYgFpIgCyoClAGUIAsqApgBIhYgFpIgCyoCnAGUkzgCBCAMIAsqApABIhYgFpIgCyoCmAGUIAsqApQBIhYgFpIgCyoCnAGUkjgCCCAMIAsqApABIhYgFpIgCyoClAGUIAsqApgBIhYgFpIgCyoCnAGUkjgCDCAMIAsqApgBIhZDAAAAwJQgFpQgCyoCkAEiFkMAAADAlCAWlEMAAIA/kpI4AhAgDCALKgKUASIWIBaSIAsqApgBlCALKgKQASIWIBaSIAsqApwBlJM4AhQgDCALKgKQASIWIBaSIAsqApgBlCALKgKUASIWIBaSIAsqApwBlJM4AhggDCALKgKUASIWIBaSIAsqApgBlCALKgKQASIWIBaSIAsqApwBlJI4AhwgDCALKgKUASIWQwAAAMCUIBaUIAsqApABIhZDAAAAwJQgFpRDAACAP5KSOAIgIAkgFWogFzgCACAJIBJqIBg4AgAgCSATaiAZOAIAIAkgFGogGjgCACALIAQgEWoqAgAiFzgCMCALIAQgEGoqAgAiGDgCQCALIAQgD2oqAgAiGTgCUCAKIBFqIBc4AgAgCiAQaiAYOAIAIAogD2ogGTgCACALIAwqAhggCyoCOJQgDCoCACALKgIwlCAMKgIMIAsqAjSUkpI4AgAgCyAMKgIcIAsqAjiUIAwqAgQgCyoCMJQgDCoCECALKgI0lJKSOAIEIAsgDCoCICALKgI4lCAMKgIIIAsqAjCUIAwqAhQgCyoCNJSSkjgCCCALIAwqAhggCyoCRJQgDCoCACALKgI8lCAMKgIMIAsqAkCUkpI4AgwgCyAMKgIcIAsqAkSUIAwqAgQgCyoCPJQgDCoCECALKgJAlJKSOAIQIAsgDCoCICALKgJElCAMKgIIIAsqAjyUIAwqAhQgCyoCQJSSkjgCFCALIAwqAhggCyoCUJQgDCoCACALKgJIlCAMKgIMIAsqAkyUkpI4AhggCyAMKgIcIAsqAlCUIAwqAgQgCyoCSJQgDCoCECALKgJMlJKSOAIcIAsgDCoCICALKgJQlCAMKgIIIAsqAkiUIAwqAhQgCyoCTJSSkjgCICALKgIgIRcgCyoCCCEYIAsqAhQhGSANIAsqAhgiGiAalCALKgIAIhYgFpQgCyoCDCIbIBuUkpJDAACAQJQgGiALKgIcIhyUIBYgCyoCBCIdlCAbIAsqAhAiHpSSkkMAAIBAlBACNgIQIA0gGiAXlCAWIBiUIBsgGZSSkkMAAIBAlCAcIByUIB0gHZQgHiAelJKSQwAAgECUEAI2AhQgDSAcIBeUIB0gGJQgHiAZlJKSQwAAgECUIBcgF5QgGCAYlCAZIBmUkpJDAACAQJQQAjYCGCAOQQFqIQ4MAQsLIAtBoAFqJAALAgALCwkBAEGBCAsCBgE=")}function E(W){if(ArrayBuffer.isView(W))return W;if(W==h&&o)return new Uint8Array(o);if(n)return n(W);throw'sync fetching of the wasm failed: you can preload it to Module["wasmBinary"] manually, or emcc.py will do that for you when generating HTML (but not JS)'}function w(W,X){var ue,ae=E(W);ue=new WebAssembly.Module(ae);var he=new WebAssembly.Instance(ue,X);return[he,ue]}function C(){return{a:P}}function S(){function W(ae,he){return K=ae.exports,a=K.b,c(),B(K),d(),K}A();var X=C();if(t.instantiateWasm)return new Promise((ae,he)=>{t.instantiateWasm(X,(me,oe)=>{ae(W(me))})});h??=v();var ue=w(h,X);return W(ue[0])}for(var b=W=>{for(;W.length>0;)W.shift()(t)},U=[],y=W=>U.push(W),_=[],x=W=>_.push(W),T=W=>{for(var X,ue,ae=0,he=0,me=W.length,oe=new Uint8Array((me*3>>2)-(W[me-2]=="=")-(W[me-1]=="="));ae<me;ae+=4,he+=3)X=F[W.charCodeAt(ae+1)],ue=F[W.charCodeAt(ae+2)],oe[he]=F[W.charCodeAt(ae)]<<2|X>>4,oe[he+1]=X<<4|ue>>2,oe[he+2]=ue<<6|F[W.charCodeAt(ae+3)];return oe},R=()=>2147483648,Q=(W,X)=>Math.ceil(W/X)*X,N=W=>{var X=a.buffer,ue=(W-X.byteLength+65535)/65536|0;try{return a.grow(ue),c(),1}catch{}},k=W=>{var X=l.length;W>>>=0;var ue=R();if(W>ue)return!1;for(var ae=1;ae<=4;ae*=2){var he=X*(1+.2/ae);he=Math.min(he,W+100663296);var me=Math.min(ue,Q(Math.max(W,he),65536)),oe=N(me);if(oe)return!0}return!1},F=new Uint8Array(123),M=25;M>=0;--M)F[48+M]=52+M,F[65+M]=M,F[97+M]=26+M;F[43]=62,F[47]=63,t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&t.printErr,t.wasmBinary&&(o=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram;function B(W){t._pack=W.d,t._malloc=W.e,t._free=W.f}var P={a:k},K=S();function te(){if(p>0){g=te;return}if(u(),p>0){g=te;return}function W(){t.calledRun=!0,f(),t.onRuntimeInitialized?.(),m()}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),W()},1)):W()}function ce(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()()}return ce(),te(),e=t,e};const EA=()=>new yA;class il{constructor(e){this.dataChanged=!1,this.transformsChanged=!1,this.colorTransformsChanged=!1,this._updating=new Set,this._dirty=new Set;let t=0,i=0;this._splatIndices=new Map,this._offsets=new Map;const s=new Map;for(const m of e.objects)m instanceof Gt&&(this._splatIndices.set(m,i),this._offsets.set(m,t),s.set(t,m),t+=m.data.vertexCount,i++);this._vertexCount=t,this._width=2048,this._height=Math.ceil(2*this.vertexCount/this.width),this._data=new Uint32Array(this.width*this.height*4),this._transformsWidth=5,this._transformsHeight=s.size,this._transforms=new Float32Array(this._transformsWidth*this._transformsHeight*4),this._transformIndicesWidth=1024,this._transformIndicesHeight=Math.ceil(this.vertexCount/this._transformIndicesWidth),this._transformIndices=new Uint32Array(this._transformIndicesWidth*this._transformIndicesHeight),this._colorTransformsWidth=4,this._colorTransformsHeight=64,this._colorTransforms=new Float32Array(this._colorTransformsWidth*this._colorTransformsHeight*4),this._colorTransforms.fill(0),this._colorTransforms[0]=1,this._colorTransforms[5]=1,this._colorTransforms[10]=1,this._colorTransforms[15]=1,this._colorTransformIndicesWidth=1024,this._colorTransformIndicesHeight=Math.ceil(this.vertexCount/this._colorTransformIndicesWidth),this._colorTransformIndices=new Uint32Array(this._colorTransformIndicesWidth*this._colorTransformIndicesHeight),this.colorTransformIndices.fill(0),this._positions=new Float32Array(this.vertexCount*3),this._rotations=new Float32Array(this.vertexCount*4),this._scales=new Float32Array(this.vertexCount*3),this._worker=EA();const n=m=>{const p=this._splatIndices.get(m);this._transforms.set(m.transform.buffer,p*20),this._transforms[p*20+16]=m.selected?1:0,m.positionChanged=!1,m.rotationChanged=!1,m.scaleChanged=!1,m.selectedChanged=!1,this.transformsChanged=!0},o=()=>{let m=!1;for(const A of this._splatIndices.keys())if(A.colorTransformChanged){m=!0;break}if(!m)return;const p=[new Lt];this._colorTransformIndices.fill(0);let g=1;for(const A of this._splatIndices.keys()){const d=this._offsets.get(A);for(const h of A.colorTransforms)p.includes(h)||(p.push(h),g++);for(const h of A.colorTransformsMap.keys()){const v=A.colorTransformsMap.get(h);this._colorTransformIndices[h+d]=v+g-1}A.colorTransformChanged=!1}for(let A=0;A<p.length;A++){const d=p[A];this._colorTransforms.set(d.buffer,A*16)}this.colorTransformsChanged=!0};this._worker.onmessage=m=>{if(m.data.response){const p=m.data.response,g=s.get(p.offset);n(g),o();const A=this._splatIndices.get(g);for(let d=0;d<g.data.vertexCount;d++)this._transformIndices[p.offset+d]=A;this._data.set(p.data,p.offset*8),g.data.reattach(p.positions,p.rotations,p.scales,p.colors,p.selection),this._positions.set(p.worldPositions,p.offset*3),this._rotations.set(p.worldRotations,p.offset*4),this._scales.set(p.worldScales,p.offset*3),this._updating.delete(g),g.selectedChanged=!1,this.dataChanged=!0}};let a;async function l(){a=await SA()}l();async function c(){for(;!a;)await new Promise(m=>setTimeout(m,0))}const u=m=>{if(!a){c().then(()=>{u(m)});return}n(m);const p=a._malloc(3*m.data.vertexCount*4),g=a._malloc(4*m.data.vertexCount*4),A=a._malloc(3*m.data.vertexCount*4),d=a._malloc(4*m.data.vertexCount),h=a._malloc(m.data.vertexCount),v=a._malloc(8*m.data.vertexCount*4),E=a._malloc(3*m.data.vertexCount*4),w=a._malloc(4*m.data.vertexCount*4),C=a._malloc(3*m.data.vertexCount*4);a.HEAPF32.set(m.data.positions,p/4),a.HEAPF32.set(m.data.rotations,g/4),a.HEAPF32.set(m.data.scales,A/4),a.HEAPU8.set(m.data.colors,d),a.HEAPU8.set(m.data.selection,h),a._pack(m.selected,m.data.vertexCount,p,g,A,d,h,v,E,w,C);const S=new Uint32Array(a.HEAPU32.buffer,v,m.data.vertexCount*8),b=new Float32Array(a.HEAPF32.buffer,E,m.data.vertexCount*3),U=new Float32Array(a.HEAPF32.buffer,w,m.data.vertexCount*4),y=new Float32Array(a.HEAPF32.buffer,C,m.data.vertexCount*3),_=this._splatIndices.get(m),x=this._offsets.get(m);for(let T=0;T<m.data.vertexCount;T++)this._transformIndices[x+T]=_;this._data.set(S,x*8),this._positions.set(b,x*3),this._rotations.set(U,x*4),this._scales.set(y,x*3),a._free(p),a._free(g),a._free(A),a._free(d),a._free(h),a._free(v),a._free(E),a._free(w),a._free(C),this.dataChanged=!0,this.colorTransformsChanged=!0},f=m=>{if((m.positionChanged||m.rotationChanged||m.scaleChanged||m.selectedChanged)&&n(m),m.colorTransformChanged&&o(),!m.data.changed||m.data.detached)return;const p={position:new Float32Array(m.position.flat()),rotation:new Float32Array(m.rotation.flat()),scale:new Float32Array(m.scale.flat()),selected:m.selected,vertexCount:m.data.vertexCount,positions:m.data.positions,rotations:m.data.rotations,scales:m.data.scales,colors:m.data.colors,selection:m.data.selection,offset:this._offsets.get(m)};this._worker.postMessage({splat:p},[p.position.buffer,p.rotation.buffer,p.scale.buffer,p.positions.buffer,p.rotations.buffer,p.scales.buffer,p.colors.buffer,p.selection.buffer]),this._updating.add(m),m.data.detached=!0};this.getSplat=m=>{let p=null;for(const[g,A]of this._offsets)if(m>=A)p=g;else break;return p},this.getLocalIndex=(m,p)=>{const g=this._offsets.get(m);return p-g},this.markDirty=m=>{this._dirty.add(m)},this.rebuild=()=>{for(const m of this._dirty)f(m);this._dirty.clear()},this.dispose=()=>{this._worker.terminate()};for(const m of this._splatIndices.keys())u(m);o()}get offsets(){return this._offsets}get data(){return this._data}get width(){return this._width}get height(){return this._height}get transforms(){return this._transforms}get transformsWidth(){return this._transformsWidth}get transformsHeight(){return this._transformsHeight}get transformIndices(){return this._transformIndices}get transformIndicesWidth(){return this._transformIndicesWidth}get transformIndicesHeight(){return this._transformIndicesHeight}get colorTransforms(){return this._colorTransforms}get colorTransformsWidth(){return this._colorTransformsWidth}get colorTransformsHeight(){return this._colorTransformsHeight}get colorTransformIndices(){return this._colorTransformIndices}get colorTransformIndicesWidth(){return this._colorTransformIndicesWidth}get colorTransformIndicesHeight(){return this._colorTransformIndicesHeight}get positions(){return this._positions}get rotations(){return this._rotations}get scales(){return this._scales}get vertexCount(){return this._vertexCount}get needsRebuild(){return this._dirty.size>0}get updating(){return this._updating.size>0}}class rl{constructor(e=0,t=0,i=0,s=255){this.r=e,this.g=t,this.b=i,this.a=s}flat(){return[this.r,this.g,this.b,this.a]}flatNorm(){return[this.r/255,this.g/255,this.b/255,this.a/255]}toHexString(){return"#"+this.flat().map(e=>e.toString(16).padStart(2,"0")).join("")}toString(){return`[${this.flat().join(", ")}]`}}const bA=()=>new AA,xA=`#version 300 es
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
`,CA=`#version 300 es
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
`;class sl extends tl{constructor(e,t){super(e,t),this._outlineThickness=10,this._outlineColor=new rl(255,165,0,255),this._renderData=null,this._depthIndex=new Uint32Array,this._splatTexture=null,this._worker=null;const i=e.canvas,s=e.gl;let n,o,a,l,c,u,f,m,p,g,A,d,h,v,E,w,C,S,b;this._resize=()=>{this._camera&&(this._camera.data.setSize(i.width,i.height),this._camera.update(),n=s.getUniformLocation(this.program,"projection"),s.uniformMatrix4fv(n,!1,this._camera.data.projectionMatrix.buffer),o=s.getUniformLocation(this.program,"viewport"),s.uniform2fv(o,new Float32Array([i.width,i.height])))};const U=()=>{this._worker=bA(),this._worker.onmessage=R=>{if(R.data.depthIndex){const{depthIndex:Q}=R.data;this._depthIndex=Q,s.bindBuffer(s.ARRAY_BUFFER,b),s.bufferData(s.ARRAY_BUFFER,Q,s.STATIC_DRAW)}}};this._initialize=()=>{if(!this._scene||!this._camera){console.error("Cannot render without scene and camera");return}this._resize(),this._scene.addEventListener("objectAdded",y),this._scene.addEventListener("objectRemoved",_);for(const R of this._scene.objects)R instanceof Gt&&R.addEventListener("objectChanged",x);this._renderData=new il(this._scene),a=s.getUniformLocation(this.program,"focal"),s.uniform2fv(a,new Float32Array([this._camera.data.fx,this._camera.data.fy])),l=s.getUniformLocation(this.program,"view"),s.uniformMatrix4fv(l,!1,this._camera.data.viewMatrix.buffer),g=s.getUniformLocation(this.program,"outlineThickness"),s.uniform1f(g,this.outlineThickness),A=s.getUniformLocation(this.program,"outlineColor"),s.uniform4fv(A,new Float32Array(this.outlineColor.flatNorm())),this._splatTexture=s.createTexture(),c=s.getUniformLocation(this.program,"u_texture"),s.uniform1i(c,0),v=s.createTexture(),u=s.getUniformLocation(this.program,"u_transforms"),s.uniform1i(u,1),E=s.createTexture(),f=s.getUniformLocation(this.program,"u_transformIndices"),s.uniform1i(f,2),w=s.createTexture(),m=s.getUniformLocation(this.program,"u_colorTransforms"),s.uniform1i(m,3),C=s.createTexture(),p=s.getUniformLocation(this.program,"u_colorTransformIndices"),s.uniform1i(p,4),S=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,S),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-2,-2,2,-2,2,2,-2,2]),s.STATIC_DRAW),d=s.getAttribLocation(this.program,"position"),s.enableVertexAttribArray(d),s.vertexAttribPointer(d,2,s.FLOAT,!1,0,0),b=s.createBuffer(),h=s.getAttribLocation(this.program,"index"),s.enableVertexAttribArray(h),s.bindBuffer(s.ARRAY_BUFFER,b),U()};const y=R=>{const Q=R;Q.object instanceof Gt&&Q.object.addEventListener("objectChanged",x),T()},_=R=>{const Q=R;Q.object instanceof Gt&&Q.object.removeEventListener("objectChanged",x),T()},x=R=>{const Q=R;Q.object instanceof Gt&&this._renderData&&this._renderData.markDirty(Q.object)},T=()=>{this._renderData?.dispose(),this._renderData=new il(this._scene),this._worker?.terminate(),U()};this._render=()=>{if(!this._scene||!this._camera||!this.renderData){console.error("Cannot render without scene and camera");return}if(this.renderData.needsRebuild&&this.renderData.rebuild(),this.renderData.dataChanged||this.renderData.transformsChanged||this.renderData.colorTransformsChanged){this.renderData.dataChanged&&(s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this.splatTexture),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texImage2D(s.TEXTURE_2D,0,s.RGBA32UI,this.renderData.width,this.renderData.height,0,s.RGBA_INTEGER,s.UNSIGNED_INT,this.renderData.data)),this.renderData.transformsChanged&&(s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,v),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texImage2D(s.TEXTURE_2D,0,s.RGBA32F,this.renderData.transformsWidth,this.renderData.transformsHeight,0,s.RGBA,s.FLOAT,this.renderData.transforms),s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,E),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texImage2D(s.TEXTURE_2D,0,s.R32UI,this.renderData.transformIndicesWidth,this.renderData.transformIndicesHeight,0,s.RED_INTEGER,s.UNSIGNED_INT,this.renderData.transformIndices)),this.renderData.colorTransformsChanged&&(s.activeTexture(s.TEXTURE3),s.bindTexture(s.TEXTURE_2D,w),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texImage2D(s.TEXTURE_2D,0,s.RGBA32F,this.renderData.colorTransformsWidth,this.renderData.colorTransformsHeight,0,s.RGBA,s.FLOAT,this.renderData.colorTransforms),s.activeTexture(s.TEXTURE4),s.bindTexture(s.TEXTURE_2D,C),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texImage2D(s.TEXTURE_2D,0,s.R32UI,this.renderData.colorTransformIndicesWidth,this.renderData.colorTransformIndicesHeight,0,s.RED_INTEGER,s.UNSIGNED_INT,this.renderData.colorTransformIndices));const R=new Float32Array(this.renderData.positions.slice().buffer),Q=new Float32Array(this.renderData.transforms.slice().buffer),N=new Uint32Array(this.renderData.transformIndices.slice().buffer);this._worker?.postMessage({sortData:{positions:R,transforms:Q,transformIndices:N,vertexCount:this.renderData.vertexCount}},[R.buffer,Q.buffer,N.buffer]),this.renderData.dataChanged=!1,this.renderData.transformsChanged=!1,this.renderData.colorTransformsChanged=!1}this._camera.update(),this._worker?.postMessage({viewProj:this._camera.data.viewProj.buffer}),s.viewport(0,0,i.width,i.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.disable(s.DEPTH_TEST),s.enable(s.BLEND),s.blendFuncSeparate(s.ONE_MINUS_DST_ALPHA,s.ONE,s.ONE_MINUS_DST_ALPHA,s.ONE),s.blendEquationSeparate(s.FUNC_ADD,s.FUNC_ADD),s.uniformMatrix4fv(n,!1,this._camera.data.projectionMatrix.buffer),s.uniformMatrix4fv(l,!1,this._camera.data.viewMatrix.buffer),s.bindBuffer(s.ARRAY_BUFFER,S),s.vertexAttribPointer(d,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,b),s.bufferData(s.ARRAY_BUFFER,this.depthIndex,s.STATIC_DRAW),s.vertexAttribIPointer(h,1,s.INT,0,0),s.vertexAttribDivisor(h,1),s.drawArraysInstanced(s.TRIANGLE_FAN,0,4,this.depthIndex.length)},this._dispose=()=>{if(!this._scene||!this._camera||!this.renderData){console.error("Cannot dispose without scene and camera");return}this._scene.removeEventListener("objectAdded",y),this._scene.removeEventListener("objectRemoved",_);for(const R of this._scene.objects)R instanceof Gt&&R.removeEventListener("objectChanged",x);this._worker?.terminate(),this.renderData.dispose(),s.deleteTexture(this.splatTexture),s.deleteTexture(v),s.deleteTexture(E),s.deleteBuffer(b),s.deleteBuffer(S)},this._setOutlineThickness=R=>{this._outlineThickness=R,this._initialized&&s.uniform1f(g,R)},this._setOutlineColor=R=>{this._outlineColor=R,this._initialized&&s.uniform4fv(A,new Float32Array(R.flatNorm()))}}get renderData(){return this._renderData}get depthIndex(){return this._depthIndex}get splatTexture(){return this._splatTexture}get outlineThickness(){return this._outlineThickness}set outlineThickness(e){this._setOutlineThickness(e)}get outlineColor(){return this._outlineColor}set outlineColor(e){this._setOutlineColor(e)}get worker(){return this._worker}_getVertexSource(){return xA}_getFragmentSource(){return CA}}class au{constructor(e=1){let t=0,i=!1,s,n,o,a;this.initialize=l=>{if(!(l instanceof sl))throw new Error("FadeInPass requires a RenderProgram");t=l.started?1:0,i=!0,s=l,n=l.renderer.gl,o=n.getUniformLocation(s.program,"useDepthFade"),n.uniform1i(o,1),a=n.getUniformLocation(s.program,"depthFade"),n.uniform1f(a,t)},this.render=()=>{!i||s.renderData?.updating||(n.useProgram(s.program),t=Math.min(t+e*.01,1),t>=1&&(i=!1,n.uniform1i(o,0)),n.uniform1f(a,t))}}dispose(){}}class UA{constructor(e=null,t=null){this._backgroundColor=new rl;const i=e||document.createElement("canvas");e||(i.style.display="block",i.style.boxSizing="border-box",i.style.width="100%",i.style.height="100%",i.style.margin="0",i.style.padding="0",document.body.appendChild(i)),i.style.background=this._backgroundColor.toHexString(),this._canvas=i,this._gl=i.getContext("webgl2",{antialias:!1});const s=t||[];t||s.push(new au),this._renderProgram=new sl(this,s);const n=[this._renderProgram];this.resize=()=>{const o=i.clientWidth,a=i.clientHeight;(i.width!==o||i.height!==a)&&this.setSize(o,a)},this.setSize=(o,a)=>{i.width=o,i.height=a,this._gl.viewport(0,0,i.width,i.height);for(const l of n)l.resize()},this.render=(o,a)=>{for(const l of n)l.render(o,a)},this.dispose=()=>{for(const o of n)o.dispose()},this.addProgram=o=>{n.push(o)},this.removeProgram=o=>{const a=n.indexOf(o);if(a<0)throw new Error("Program not found");n.splice(a,1)},this.resize()}get canvas(){return this._canvas}get gl(){return this._gl}get renderProgram(){return this._renderProgram}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=e,this._canvas.style.background=e.toHexString()}}class TA{constructor(e,t,i=.5,s=.5,n=5,o=!0,a=new Re){this.minAngle=-90,this.maxAngle=90,this.minZoom=.1,this.maxZoom=30,this.orbitSpeed=1,this.panSpeed=1,this.zoomSpeed=1,this.dampening=.12,this.setCameraTarget=()=>{};let l=a.clone(),c=l.clone(),u=i,f=s,m=n,p=!1,g=!1,A=0,d=0,h=0;const v={};let E=!1;const w=()=>{if(E)return;const F=e.rotation.toEuler();u=-F.y,f=-F.x;const M=e.position.x-m*Math.sin(u)*Math.cos(f),B=e.position.y+m*Math.sin(f),P=e.position.z+m*Math.cos(u)*Math.cos(f);c=new Re(M,B,P)};e.addEventListener("objectChanged",w),this.setCameraTarget=F=>{const M=F.x-e.position.x,B=F.y-e.position.y,P=F.z-e.position.z;m=Math.sqrt(M*M+B*B+P*P),f=Math.atan2(B,Math.sqrt(M*M+P*P)),u=-Math.atan2(M,P),c=new Re(F.x,F.y,F.z)};const C=()=>.1+.9*(m-this.minZoom)/(this.maxZoom-this.minZoom),S=F=>{v[F.code]=!0,F.code==="ArrowUp"&&(v.KeyW=!0),F.code==="ArrowDown"&&(v.KeyS=!0),F.code==="ArrowLeft"&&(v.KeyA=!0),F.code==="ArrowRight"&&(v.KeyD=!0)},b=F=>{v[F.code]=!1,F.code==="ArrowUp"&&(v.KeyW=!1),F.code==="ArrowDown"&&(v.KeyS=!1),F.code==="ArrowLeft"&&(v.KeyA=!1),F.code==="ArrowRight"&&(v.KeyD=!1)},U=F=>{k(F),p=!0,g=F.button===2,d=F.clientX,h=F.clientY,window.addEventListener("mouseup",y)},y=F=>{k(F),p=!1,g=!1,window.removeEventListener("mouseup",y)},_=F=>{if(k(F),!p||!e)return;const M=F.clientX-d,B=F.clientY-h;if(g){const P=C(),K=-M*this.panSpeed*.01*P,te=-B*this.panSpeed*.01*P,ce=Dt.RotationFromQuaternion(e.rotation).buffer,W=new Re(ce[0],ce[3],ce[6]),X=new Re(ce[1],ce[4],ce[7]);c=c.add(W.multiply(K)),c=c.add(X.multiply(te))}else u-=M*this.orbitSpeed*.003,f+=B*this.orbitSpeed*.003,f=Math.min(Math.max(f,this.minAngle*Math.PI/180),this.maxAngle*Math.PI/180);d=F.clientX,h=F.clientY},x=F=>{k(F);const M=C();m+=F.deltaY*this.zoomSpeed*.025*M,m=Math.min(Math.max(m,this.minZoom),this.maxZoom)},T=F=>{if(k(F),F.touches.length===1)p=!0,g=!1,d=F.touches[0].clientX,h=F.touches[0].clientY,A=0;else if(F.touches.length===2){p=!0,g=!0,d=(F.touches[0].clientX+F.touches[1].clientX)/2,h=(F.touches[0].clientY+F.touches[1].clientY)/2;const M=F.touches[0].clientX-F.touches[1].clientX,B=F.touches[0].clientY-F.touches[1].clientY;A=Math.sqrt(M*M+B*B)}},R=F=>{k(F),p=!1,g=!1},Q=F=>{if(k(F),!(!p||!e))if(g){const M=C(),B=F.touches[0].clientX-F.touches[1].clientX,P=F.touches[0].clientY-F.touches[1].clientY,K=Math.sqrt(B*B+P*P),te=A-K;m+=te*this.zoomSpeed*.1*M,m=Math.min(Math.max(m,this.minZoom),this.maxZoom),A=K;const ce=(F.touches[0].clientX+F.touches[1].clientX)/2,W=(F.touches[0].clientY+F.touches[1].clientY)/2,X=ce-d,ue=W-h,ae=Dt.RotationFromQuaternion(e.rotation).buffer,he=new Re(ae[0],ae[3],ae[6]),me=new Re(ae[1],ae[4],ae[7]);c=c.add(he.multiply(-X*this.panSpeed*.025*M)),c=c.add(me.multiply(-ue*this.panSpeed*.025*M)),d=ce,h=W}else{const M=F.touches[0].clientX-d,B=F.touches[0].clientY-h;u-=M*this.orbitSpeed*.003,f+=B*this.orbitSpeed*.003,f=Math.min(Math.max(f,this.minAngle*Math.PI/180),this.maxAngle*Math.PI/180),d=F.touches[0].clientX,h=F.touches[0].clientY}},N=(F,M,B)=>(1-B)*F+B*M;this.update=()=>{E=!0,i=N(i,u,this.dampening),s=N(s,f,this.dampening),n=N(n,m,this.dampening),l=l.lerp(c,this.dampening);const F=l.x+n*Math.sin(i)*Math.cos(s),M=l.y-n*Math.sin(s),B=l.z-n*Math.cos(i)*Math.cos(s);e.position=new Re(F,M,B);const P=l.subtract(e.position).normalize(),K=Math.asin(-P.y),te=Math.atan2(P.x,P.z);e.rotation=ut.FromEuler(new Re(K,te,0));const ce=.025,W=.01,X=Dt.RotationFromQuaternion(e.rotation).buffer,ue=new Re(-X[2],-X[5],-X[8]),ae=new Re(X[0],X[3],X[6]);v.KeyS&&(c=c.add(ue.multiply(ce))),v.KeyW&&(c=c.subtract(ue.multiply(ce))),v.KeyA&&(c=c.subtract(ae.multiply(ce))),v.KeyD&&(c=c.add(ae.multiply(ce))),v.KeyE&&(u+=W),v.KeyQ&&(u-=W),v.KeyR&&(f+=W),v.KeyF&&(f-=W),E=!1};const k=F=>{F.preventDefault(),F.stopPropagation()};this.dispose=()=>{t.removeEventListener("dragenter",k),t.removeEventListener("dragover",k),t.removeEventListener("dragleave",k),t.removeEventListener("contextmenu",k),t.removeEventListener("mousedown",U),t.removeEventListener("mousemove",_),t.removeEventListener("wheel",x),t.removeEventListener("touchstart",T),t.removeEventListener("touchend",R),t.removeEventListener("touchmove",Q),o&&(window.removeEventListener("keydown",S),window.removeEventListener("keyup",b))},o&&(window.addEventListener("keydown",S),window.addEventListener("keyup",b)),t.addEventListener("dragenter",k),t.addEventListener("dragover",k),t.addEventListener("dragleave",k),t.addEventListener("contextmenu",k),t.addEventListener("mousedown",U),t.addEventListener("mousemove",_),t.addEventListener("wheel",x),t.addEventListener("touchstart",T),t.addEventListener("touchend",R),t.addEventListener("touchmove",Q),this.update()}}class MA{constructor(e,t){this.moveSpeed=1.5,this.lookSpeed=.7,this.dampening=.5;const i={};let s=e.rotation.toEuler().x,n=e.rotation.toEuler().y,o=e.position,a=!1;const l=()=>{t.requestPointerLock()},c=()=>{a=document.pointerLockElement===t,a?t.addEventListener("mousemove",u):t.removeEventListener("mousemove",u)},u=g=>{const A=g.movementX,d=g.movementY;n+=A*this.lookSpeed*.001,s-=d*this.lookSpeed*.001,s=Math.max(-Math.PI/2,Math.min(Math.PI/2,s))},f=g=>{i[g.code]=!0,g.code==="ArrowUp"&&(i.KeyW=!0),g.code==="ArrowDown"&&(i.KeyS=!0),g.code==="ArrowLeft"&&(i.KeyA=!0),g.code==="ArrowRight"&&(i.KeyD=!0)},m=g=>{i[g.code]=!1,g.code==="ArrowUp"&&(i.KeyW=!1),g.code==="ArrowDown"&&(i.KeyS=!1),g.code==="ArrowLeft"&&(i.KeyA=!1),g.code==="ArrowRight"&&(i.KeyD=!1),g.code==="Escape"&&document.exitPointerLock()};this.update=()=>{const g=Dt.RotationFromQuaternion(e.rotation).buffer,A=new Re(-g[2],-g[5],-g[8]),d=new Re(g[0],g[3],g[6]);let h=new Re(0,0,0);i.KeyS&&(h=h.add(A)),i.KeyW&&(h=h.subtract(A)),i.KeyA&&(h=h.subtract(d)),i.KeyD&&(h=h.add(d)),h=new Re(h.x,0,h.z),h.magnitude()>0&&(h=h.normalize()),o=o.add(h.multiply(this.moveSpeed*.01)),e.position=e.position.add(o.subtract(e.position).multiply(this.dampening)),e.rotation=ut.FromEuler(new Re(s,n,0))};const p=g=>{g.preventDefault(),g.stopPropagation()};this.dispose=()=>{t.removeEventListener("dragenter",p),t.removeEventListener("dragover",p),t.removeEventListener("dragleave",p),t.removeEventListener("contextmenu",p),t.removeEventListener("mousedown",l),document.removeEventListener("pointerlockchange",c),window.removeEventListener("keydown",f),window.removeEventListener("keyup",m)},window.addEventListener("keydown",f),window.addEventListener("keyup",m),t.addEventListener("dragenter",p),t.addEventListener("dragover",p),t.addEventListener("dragleave",p),t.addEventListener("contextmenu",p),t.addEventListener("mousedown",l),document.addEventListener("pointerlockchange",c),this.update()}}class RA{constructor(e,t){this.normal=e,this.point=t}intersect(e,t){const i=this.normal.dot(t);if(Math.abs(i)<1e-4)return null;const s=this.normal.dot(this.point.subtract(e))/i;return s<0?null:e.add(t.multiply(s))}}class IA{initialize(e){}render(){}dispose(){}}const FA=`#version 300 es
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
`,BA=`#version 300 es
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
`;class QA extends tl{constructor(e,t=[]){super(e,t),this._renderData=null,this._depthIndex=new Uint32Array,this._splatTexture=null;const i=e.canvas,s=e.gl;let n,o,a,l,c,u,f,m,p,g,A;this._resize=()=>{this._camera&&(this._camera.data.setSize(i.width,i.height),this._camera.update(),o=s.getUniformLocation(this.program,"projection"),s.uniformMatrix4fv(o,!1,this._camera.data.projectionMatrix.buffer),a=s.getUniformLocation(this.program,"viewport"),s.uniform2fv(a,new Float32Array([i.width,i.height])))};const d=()=>{if(e.renderProgram.worker===null){console.error("Render program is not initialized. Cannot render without worker");return}n=e.renderProgram.worker,n.onmessage=w=>{if(w.data.depthIndex){const{depthIndex:C}=w.data;this._depthIndex=C,s.bindBuffer(s.ARRAY_BUFFER,A),s.bufferData(s.ARRAY_BUFFER,C,s.STATIC_DRAW)}}};this._initialize=()=>{if(!this._scene||!this._camera){console.error("Cannot render without scene and camera");return}this._resize(),this._scene.addEventListener("objectAdded",h),this._scene.addEventListener("objectRemoved",v);for(const b of this._scene.objects)b instanceof gr&&(this._renderData===null?(this._renderData=b.data,b.addEventListener("objectChanged",E)):console.warn("Multiple Splatv objects are not currently supported"));if(this._renderData===null){console.error("Cannot render without Splatv object");return}l=s.getUniformLocation(this.program,"focal"),s.uniform2fv(l,new Float32Array([this._camera.data.fx,this._camera.data.fy])),c=s.getUniformLocation(this.program,"view"),s.uniformMatrix4fv(c,!1,this._camera.data.viewMatrix.buffer),this._splatTexture=s.createTexture(),u=s.getUniformLocation(this.program,"u_texture"),s.uniform1i(u,0),f=s.getUniformLocation(this.program,"time"),s.uniform1f(f,Math.sin(Date.now()/1e3)/2+1/2),g=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,g),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-2,-2,2,-2,2,2,-2,2]),s.STATIC_DRAW),m=s.getAttribLocation(this.program,"position"),s.enableVertexAttribArray(m),s.vertexAttribPointer(m,2,s.FLOAT,!1,0,0),A=s.createBuffer(),p=s.getAttribLocation(this.program,"index"),s.enableVertexAttribArray(p),s.bindBuffer(s.ARRAY_BUFFER,A),d(),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this._splatTexture),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texImage2D(s.TEXTURE_2D,0,s.RGBA32UI,this._renderData.width,this._renderData.height,0,s.RGBA_INTEGER,s.UNSIGNED_INT,this._renderData.data);const w=this._renderData.positions,C=new Float32Array(new Lt().buffer),S=new Uint32Array(this._renderData.vertexCount);S.fill(0),n.postMessage({sortData:{positions:w,transforms:C,transformIndices:S,vertexCount:this._renderData.vertexCount}},[w.buffer,C.buffer,S.buffer])};const h=w=>{const C=w;C.object instanceof gr&&(this._renderData===null?(this._renderData=C.object.data,C.object.addEventListener("objectChanged",E)):console.warn("Splatv not supported by default RenderProgram. Use VideoRenderProgram instead.")),this.dispose()},v=w=>{const C=w;C.object instanceof gr&&this._renderData===C.object.data&&(this._renderData=null,C.object.removeEventListener("objectChanged",E)),this.dispose()},E=w=>{const C=w;C.object instanceof gr&&this._renderData===C.object.data&&this.dispose()};this._render=()=>{if(!this._scene||!this._camera){console.error("Cannot render without scene and camera");return}if(!this._renderData){console.warn("Cannot render without Splatv object");return}this._camera.update(),n.postMessage({viewProj:this._camera.data.viewProj.buffer}),s.viewport(0,0,i.width,i.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.disable(s.DEPTH_TEST),s.enable(s.BLEND),s.blendFuncSeparate(s.ONE_MINUS_DST_ALPHA,s.ONE,s.ONE_MINUS_DST_ALPHA,s.ONE),s.blendEquationSeparate(s.FUNC_ADD,s.FUNC_ADD),s.uniformMatrix4fv(o,!1,this._camera.data.projectionMatrix.buffer),s.uniformMatrix4fv(c,!1,this._camera.data.viewMatrix.buffer),s.uniform1f(f,Math.sin(Date.now()/1e3)/2+1/2),s.bindBuffer(s.ARRAY_BUFFER,g),s.vertexAttribPointer(m,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,A),s.bufferData(s.ARRAY_BUFFER,this._depthIndex,s.STATIC_DRAW),s.vertexAttribIPointer(p,1,s.INT,0,0),s.vertexAttribDivisor(p,1),s.drawArraysInstanced(s.TRIANGLE_FAN,0,4,this._renderData.vertexCount)},this._dispose=()=>{if(!this._scene||!this._camera){console.error("Cannot dispose without scene and camera");return}this._scene.removeEventListener("objectAdded",h),this._scene.removeEventListener("objectRemoved",v);for(const w of this._scene.objects)w instanceof gr&&this._renderData===w.data&&(this._renderData=null,w.removeEventListener("objectChanged",E));n?.terminate(),s.deleteTexture(this._splatTexture),s.deleteBuffer(A),s.deleteBuffer(g)}}get renderData(){return this._renderData}_getVertexSource(){return FA}_getFragmentSource(){return BA}}class Zn{constructor(e,t,i){this.bounds=e,this.boxes=t,this.left=null,this.right=null,this.pointIndices=[],i.length>1?this.split(e,t,i):i.length>0&&(this.pointIndices=i)}split(e,t,i){const s=e.size().maxComponent();i.sort((l,c)=>t[l].center().getComponent(s)-t[c].center().getComponent(s));const n=Math.floor(i.length/2),o=i.slice(0,n),a=i.slice(n);this.left=new Zn(e,t,o),this.right=new Zn(e,t,a)}queryRange(e){return this.bounds.intersects(e)?this.left!==null&&this.right!==null?this.left.queryRange(e).concat(this.right.queryRange(e)):this.pointIndices.filter(t=>e.intersects(this.boxes[t])):[]}}class LA{constructor(e,t){const i=t.map((s,n)=>n);this.root=new Zn(e,t,i)}queryRange(e){return this.root.queryRange(e)}}class DA{constructor(e,t=100,i=1){let s=0,n=null,o=[];const a=()=>{if(e.renderData===null){console.error("IntersectionTester cannot be called before renderProgram has been initialized");return}o=[];const l=e.renderData,c=new Array(l.offsets.size);let u=0;const f=new Bs(new Re(1/0,1/0,1/0),new Re(-1/0,-1/0,-1/0));for(const m of l.offsets.keys()){const p=m.bounds;c[u++]=p,f.expand(p.min),f.expand(p.max),o.push(m)}f.permute(),n=new LA(f,c),s=l.vertexCount};this.testPoint=(l,c)=>{if(e.renderData===null||e.camera===null)return console.error("IntersectionTester cannot be called before renderProgram has been initialized"),null;if(a(),n===null)return console.error("Failed to build octree for IntersectionTester"),null;const u=e.renderData,f=e.camera;s!==u.vertexCount&&console.warn("IntersectionTester has not been rebuilt since the last render");const m=f.screenPointToRay(l,c);for(let p=0;p<t;p+=i){const g=f.position.add(m.multiply(p)),A=new Re(g.x-i/2,g.y-i/2,g.z-i/2),d=new Re(g.x+i/2,g.y+i/2,g.z+i/2),h=new Bs(A,d),v=n.queryRange(h);if(v.length>0)return o[v[0]]}return null}}}const NA=Object.freeze(Object.defineProperty({__proto__:null,Camera:pA,CameraData:tu,Color32:rl,FPSControls:MA,FadeInPass:au,IntersectionTester:DA,Loader:mA,Matrix3:Dt,Matrix4:Lt,Object3D:Jn,OrbitControls:TA,PLYLoader:gA,Plane:RA,Quaternion:ut,RenderData:il,RenderProgram:sl,Scene:fA,ShaderPass:IA,ShaderProgram:tl,Splat:Gt,SplatData:Si,Splatv:gr,SplatvData:$h,SplatvLoader:vA,Vector3:Re,Vector4:Jt,VideoRenderProgram:QA,WebGLRenderer:UA},Symbol.toStringTag,{value:"Module"}));class kA extends Sl{observer;get slides(){const e=Array.from(this.querySelectorAll("qy-swiper-slide")),i=this.shadowRoot?.querySelector("#divSlides"),s=i?Array.from(i.querySelectorAll("qy-swiper-slide")):[];return[...e,...s].map(o=>(o.getAttribute||console.warn("[qy-swiper] Slide element missing getAttribute method:",o),o))}connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(e=>{e.some(i=>Array.from(i.addedNodes).some(s=>s.nodeName==="QY-SWIPER-SLIDE")||Array.from(i.removedNodes).some(s=>s.nodeName==="QY-SWIPER-SLIDE"))&&(console.log("[qy-swiper] Slides changed, re-rendering..."),this.render())}),this.observer.observe(this,{childList:!0,subtree:!1}),customElements.whenDefined("qy-swiper-slide").then(()=>{console.log("[qy-swiper] qy-swiper-slide defined, checking if re-render needed"),this.slides.length>0&&(console.log("[qy-swiper] Re-rendering with slides"),this.render())})}disconnectedCallback(){super.disconnectedCallback(),this.observer&&(this.observer.disconnect(),this.observer=void 0)}render(){const e=this.slides.length;console.log(`[qy-swiper] Rendering with ${e} slides`),e===0&&console.warn("[qy-swiper] No slides found during render. Slides might not be initialized yet."),super.render()}firstUpdated(){console.log("[qy-swiper] firstUpdated called"),super.firstUpdated()}async openViewer(e,t,i){console.log("[qy-swiper] openViewer called with:",{imageUrl:e,imageType:t,slideIndex:i});let s=document.querySelector("qy-viewer");if(!s){console.log("[qy-swiper] Creating qy-viewer element");const n=document.createElement("qy-viewer");document.body.appendChild(n),await customElements.whenDefined("qy-viewer"),s=await new Promise(o=>{setTimeout(()=>{o(document.querySelector("qy-viewer"))},100)})}if(console.log("[qy-swiper] qy-viewer element found:",!!s),s){s.setSwiper(this),i!==void 0&&s.setCurrentSlideIndex(i);const n=this.slides[i||0],o={};n&&n.getAttributeNames().forEach(l=>{o[l]=n.getAttribute(l)}),console.log("[qy-swiper] Calling qy-viewer.open"),s.open(e,t,o)}}}class PA extends El{}customElements.get("qy-swiper")||customElements.define("qy-swiper",kA),customElements.get("qy-swiper-slide")||customElements.define("qy-swiper-slide",PA);class VA extends HTMLElement{_shadowRoot;_connected=!1;constructor(){super(),this._shadowRoot=this.attachShadow({mode:"open"})}connectedCallback(){this._connected?this.render():(this._connected=!0,this.render(),this.firstUpdated())}disconnectedCallback(){this._connected=!1}attributeChangedCallback(e,t,i){t!==i&&this.render()}firstUpdated(){}html(e,...t){return e.reduce((i,s,n)=>i+s+(t[n]||""),"")}css(e,...t){return`<style>${e.reduce((s,n,o)=>s+n+(t[o]||""),"")}</style>`}updateShadowRoot(e){this._shadowRoot.innerHTML=e}query(e){return this._shadowRoot.querySelector(e)}queryAll(e){return this._shadowRoot.querySelectorAll(e)}dispatch(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}}class OA extends VA{_swiper;_currentSlideIndex=0;_currentType="";ccViewer;static get observedAttributes(){return["currentslideindex","currenttype"]}get swiper(){return this._swiper}set swiper(e){const t=this._swiper;t!==e&&(this._swiper=e,this.updated(new Map([["swiper",t]])))}get currentSlideIndex(){return this._currentSlideIndex}set currentSlideIndex(e){const t=this._currentSlideIndex,i=e??0;t!==i&&(this._currentSlideIndex=i,this.setAttribute("currentslideindex",String(i)),this.updated(new Map([["currentSlideIndex",t]])))}get currentType(){return this._currentType}set currentType(e){const t=this._currentType,i=e??"";t!==i&&(this._currentType=i,i?this.setAttribute("currenttype",i):this.removeAttribute("currenttype"),this.updated(new Map([["currentType",t]])))}attributeChangedCallback(e,t,i){t!==i&&(e==="currentslideindex"?(this._currentSlideIndex=i?Number(i):0,this.updated(new Map([["currentSlideIndex",t?Number(t):void 0]]))):e==="currenttype"&&(this._currentType=i||"",this.updated(new Map([["currentType",t]])))),super.attributeChangedCallback(e,t,i)}async open(e,t,i){console.log("[qy-viewer] open called with:",{imgUrl:e,type:t,attributes:i}),this.currentType=t,this.ccViewer||(console.log("[qy-viewer] cc-viewer not ready, waiting..."),this.ccViewer||(await new Promise(s=>requestAnimationFrame(s)),this.ccViewer=this.shadowRoot.querySelector("cc-viewer")||void 0)),this.ccViewer?(console.log("[qy-viewer] Calling cc-viewer.open"),this.ccViewer.style.display="block",this.ccViewer.open(e,t,i)):console.warn("[qy-viewer] cc-viewer still not found")}close(){console.log("[qy-viewer] close called"),this.currentType="",this.ccViewer&&(this.ccViewer.style.display="none","close"in this.ccViewer&&typeof this.ccViewer.close=="function"&&this.ccViewer.close())}setSwiper(e){console.log("[qy-viewer] setSwiper called"),this.swiper=e,this.ccViewer&&this.ccViewer.setSwiper&&(console.log("[qy-viewer] Calling cc-viewer.setSwiper"),this.ccViewer.setSwiper(e))}setCurrentSlideIndex(e){console.log("[qy-viewer] setCurrentSlideIndex called with:",e),this.currentSlideIndex=e,this.ccViewer&&this.ccViewer.setCurrentSlideIndex&&(console.log("[qy-viewer] Calling cc-viewer.setCurrentSlideIndex"),this.ccViewer.setCurrentSlideIndex(e))}async firstUpdated(){console.log("[qy-viewer] firstUpdated called"),console.log("[qy-viewer] Initial Shadow DOM content:",this.shadowRoot?.innerHTML),this.render(),console.log("[qy-viewer] Shadow DOM after render:",this.shadowRoot?.innerHTML);const e=new CustomEvent("load");this.dispatchEvent(e),console.log("[qy-viewer] Waiting for cc-viewer to be defined..."),console.log("[qy-viewer] cc-viewer already defined?",!!customElements.get("cc-viewer")),await customElements.whenDefined("cc-viewer"),console.log("[qy-viewer] cc-viewer is defined"),await new Promise(t=>setTimeout(t,100)),this.ccViewer=this.shadowRoot.querySelector("cc-viewer")||void 0,console.log("[qy-viewer] cc-viewer element found:",!!this.ccViewer),console.log("[qy-viewer] Final Shadow DOM:",this.shadowRoot?.innerHTML),this.ccViewer&&(this.swiper&&this.ccViewer.setSwiper&&(console.log("[qy-viewer] Setting swiper on cc-viewer"),this.ccViewer.setSwiper(this.swiper)),this.currentSlideIndex!==void 0&&this.ccViewer.setCurrentSlideIndex&&(console.log("[qy-viewer] Setting currentSlideIndex on cc-viewer:",this.currentSlideIndex),this.ccViewer.setCurrentSlideIndex(this.currentSlideIndex)))}updated(e){this.ccViewer&&(e.has("swiper")&&this.ccViewer.setSwiper&&this.ccViewer.setSwiper(this.swiper),e.has("currentSlideIndex")&&this.ccViewer.setCurrentSlideIndex&&this.ccViewer.setCurrentSlideIndex(this.currentSlideIndex||0))}render(){this.shadowRoot?.querySelector("cc-viewer")||this.updateShadowRoot(this.html`
      <style>
        :host {
          --qy-viewer-z-index: 1000;
        }
        
        cc-viewer {
          --cc-viewer-z-index: var(--qy-viewer-z-index);
        }
      </style>
      <cc-viewer></cc-viewer>
    `)}}customElements.define("qy-viewer",OA);function zA(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Hn={exports:{}};var WA=Hn.exports,ou;function GA(){return ou||(ou=1,(function(r,e){(function(i,s){r.exports=s()})(typeof self<"u"?self:WA,function(){return(function(t){var i={};function s(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=i,s.d=function(n,o,a){s.o(n,o)||Object.defineProperty(n,o,{configurable:!1,enumerable:!0,get:a})},s.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(o,"a",o),o},s.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},s.p="",s(s.s=11)})([(function(t,c,s){var n=Array.prototype,o=Object.prototype,a={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","\\":"&#92;"},l=/[&"'<>\\]/g,c=t.exports={};function u(B,P){return o.hasOwnProperty.call(B,P)}c.hasOwnProp=u;function f(B){return a[B]}function m(B,P,K){if(K.Update||(K=new c.TemplateError(K)),K.Update(B),!P){var te=K;K=new Error(te.message),K.name=te.name}return K}c._prettifyError=m;function p(B,P,K){var te,ce;B instanceof Error&&(ce=B,B=ce.name+": "+ce.message),Object.setPrototypeOf?(te=new Error(B),Object.setPrototypeOf(te,p.prototype)):(te=this,Object.defineProperty(te,"message",{enumerable:!1,writable:!0,value:B})),Object.defineProperty(te,"name",{value:"Template render error"}),Error.captureStackTrace&&Error.captureStackTrace(te,this.constructor);var W;if(ce){var X=Object.getOwnPropertyDescriptor(ce,"stack");W=X&&(X.get||function(){return X.value}),W||(W=function(){return ce.stack})}else{var ue=new Error(B).stack;W=function(){return ue}}return Object.defineProperty(te,"stack",{get:function(){return W.call(te)}}),Object.defineProperty(te,"cause",{value:ce}),te.lineno=P,te.colno=K,te.firstUpdate=!0,te.Update=function(he){var me="("+(he||"unknown path")+")";return this.firstUpdate&&(this.lineno&&this.colno?me+=" [Line "+this.lineno+", Column "+this.colno+"]":this.lineno&&(me+=" [Line "+this.lineno+"]")),me+=`
 `,this.firstUpdate&&(me+=" "),this.message=me+(this.message||""),this.firstUpdate=!1,this},te}Object.setPrototypeOf?Object.setPrototypeOf(p.prototype,Error.prototype):p.prototype=Object.create(Error.prototype,{constructor:{value:p}}),c.TemplateError=p;function g(B){return B.replace(l,f)}c.escape=g;function A(B){return o.toString.call(B)==="[object Function]"}c.isFunction=A;function d(B){return o.toString.call(B)==="[object Array]"}c.isArray=d;function h(B){return o.toString.call(B)==="[object String]"}c.isString=h;function v(B){return o.toString.call(B)==="[object Object]"}c.isObject=v;function E(B){return B?typeof B=="string"?B.split("."):[B]:[]}function w(B){var P=E(B);return function(te){for(var ce=te,W=0;W<P.length;W++){var X=P[W];if(u(ce,X))ce=ce[X];else return}return ce}}c.getAttrGetter=w;function C(B,P,K){for(var te={},ce=A(P)?P:w(P),W=0;W<B.length;W++){var X=B[W],ue=ce(X,W);if(ue===void 0&&K===!0)throw new TypeError('groupby: attribute "'+P+'" resolved to undefined');(te[ue]||(te[ue]=[])).push(X)}return te}c.groupBy=C;function S(B){return Array.prototype.slice.call(B)}c.toArray=S;function b(B){var P=[];if(!B)return P;for(var K=B.length,te=S(arguments).slice(1),ce=-1;++ce<K;)R(te,B[ce])===-1&&P.push(B[ce]);return P}c.without=b;function U(B,P){for(var K="",te=0;te<P;te++)K+=B;return K}c.repeat=U;function y(B,P,K){if(B!=null){if(n.forEach&&B.forEach===n.forEach)B.forEach(P,K);else if(B.length===+B.length)for(var te=0,ce=B.length;te<ce;te++)P.call(K,B[te],te,B)}}c.each=y;function _(B,P){var K=[];if(B==null)return K;if(n.map&&B.map===n.map)return B.map(P);for(var te=0;te<B.length;te++)K[K.length]=P(B[te],te);return B.length===+B.length&&(K.length=B.length),K}c.map=_;function x(B,P,K){var te=-1;function ce(){te++,te<B.length?P(B[te],te,ce,K):K()}ce()}c.asyncIter=x;function T(B,P,K){var te=Q(B||{}),ce=te.length,W=-1;function X(){W++;var ue=te[W];W<ce?P(ue,B[ue],W,ce,X):K()}X()}c.asyncFor=T;function R(B,P,K){return Array.prototype.indexOf.call(B||[],P,K)}c.indexOf=R;function Q(B){var P=[];for(var K in B)u(B,K)&&P.push(K);return P}c.keys=Q;function N(B){return Q(B).map(function(P){return[P,B[P]]})}c._entries=N;function k(B){return Q(B).map(function(P){return B[P]})}c._values=k;function F(B,P){return B=B||{},Q(P).forEach(function(K){B[K]=P[K]}),B}c._assign=c.extend=F;function M(B,P){if(d(P)||h(P))return P.indexOf(B)!==-1;if(v(P))return B in P;throw new Error('Cannot use "in" operator to search for "'+B+'" in unexpected types.')}c.inOperator=M}),(function(t,i,s){function n(h,v){for(var E=0;E<v.length;E++){var w=v[E];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(h,a(w.key),w)}}function o(h,v,E){return v&&n(h.prototype,v),Object.defineProperty(h,"prototype",{writable:!1}),h}function a(h){var v=l(h,"string");return typeof v=="symbol"?v:String(v)}function l(h,v){if(typeof h!="object"||h===null)return h;var E=h[Symbol.toPrimitive];if(E!==void 0){var w=E.call(h,v);if(typeof w!="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(h)}function c(h,v){h.prototype=Object.create(v.prototype),h.prototype.constructor=h,u(h,v)}function u(h,v){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(w,C){return w.__proto__=C,w},u(h,v)}var f=s(16),m=s(0);function p(h,v){return typeof h!="function"||typeof v!="function"?v:function(){var w=this.parent;this.parent=h;var C=v.apply(this,arguments);return this.parent=w,C}}function g(h,v,E){E=E||{},m.keys(E).forEach(function(C){E[C]=p(h.prototype[C],E[C])});var w=(function(C){c(S,C);function S(){return C.apply(this,arguments)||this}return o(S,[{key:"typename",get:function(){return v}}]),S})(h);return m._assign(w.prototype,E),w}var A=(function(){function h(){this.init.apply(this,arguments)}var v=h.prototype;return v.init=function(){},h.extend=function(w,C){return typeof w=="object"&&(C=w,w="anonymous"),g(this,w,C)},o(h,[{key:"typename",get:function(){return this.constructor.name}}]),h})(),d=(function(h){c(v,h);function v(){var w,C;return C=h.call(this)||this,(w=C).init.apply(w,arguments),C}var E=v.prototype;return E.init=function(){},v.extend=function(C,S){return typeof C=="object"&&(S=C,C="anonymous"),g(this,C,S)},o(v,[{key:"typename",get:function(){return this.constructor.name}}]),v})(f);t.exports={Obj:A,EmitterObj:d}}),(function(t,i,s){var n=s(0),o=Array.from,a=typeof Symbol=="function"&&Symbol.iterator&&typeof o=="function",l=(function(){function _(T,R){this.variables=Object.create(null),this.parent=T,this.topLevel=!1,this.isolateWrites=R}var x=_.prototype;return x.set=function(R,Q,N){var k=R.split("."),F=this.variables,M=this;if(N&&(M=this.resolve(k[0],!0))){M.set(R,Q);return}for(var B=0;B<k.length-1;B++){var P=k[B];F[P]||(F[P]={}),F=F[P]}F[k[k.length-1]]=Q},x.get=function(R){var Q=this.variables[R];return Q!==void 0?Q:null},x.lookup=function(R){var Q=this.parent,N=this.variables[R];return N!==void 0?N:Q&&Q.lookup(R)},x.resolve=function(R,Q){var N=Q&&this.isolateWrites?void 0:this.parent,k=this.variables[R];return k!==void 0?this:N&&N.resolve(R)},x.push=function(R){return new _(this,R)},x.pop=function(){return this.parent},_})();function c(_,x,T){return function(){for(var Q=arguments.length,N=new Array(Q),k=0;k<Q;k++)N[k]=arguments[k];var F=p(N),M,B=m(N);if(F>_.length)M=N.slice(0,_.length),N.slice(M.length,F).forEach(function(te,ce){ce<x.length&&(B[x[ce]]=te)}),M.push(B);else if(F<_.length){M=N.slice(0,F);for(var P=F;P<_.length;P++){var K=_[P];M.push(B[K]),delete B[K]}M.push(B)}else M=N;return T.apply(this,M)}}function u(_){return _.__keywords=!0,_}function f(_){return _&&Object.prototype.hasOwnProperty.call(_,"__keywords")}function m(_){var x=_.length;if(x){var T=_[x-1];if(f(T))return T}return{}}function p(_){var x=_.length;if(x===0)return 0;var T=_[x-1];return f(T)?x-1:x}function g(_){if(typeof _!="string")return _;this.val=_,this.length=_.length}g.prototype=Object.create(String.prototype,{length:{writable:!0,configurable:!0,value:0}}),g.prototype.valueOf=function(){return this.val},g.prototype.toString=function(){return this.val};function A(_,x){return _ instanceof g?new g(x):x.toString()}function d(_){var x=typeof _;return x==="string"?new g(_):x!=="function"?_:function(R){var Q=_.apply(this,arguments);return typeof Q=="string"?new g(Q):Q}}function h(_,x){return _=_??"",x&&!(_ instanceof g)&&(_=n.escape(_.toString())),_}function v(_,x,T){if(_==null)throw new n.TemplateError("attempted to output null or undefined value",x+1,T+1);return _}function E(_,x){if(_!=null)return typeof _[x]=="function"?function(){for(var T=arguments.length,R=new Array(T),Q=0;Q<T;Q++)R[Q]=arguments[Q];return _[x].apply(_,R)}:_[x]}function w(_,x,T,R){if(_){if(typeof _!="function")throw new Error("Unable to call `"+x+"`, which is not a function")}else throw new Error("Unable to call `"+x+"`, which is undefined or falsey");return _.apply(T,R)}function C(_,x,T){var R=x.lookup(T);return R!==void 0?R:_.lookup(T)}function S(_,x,T){return _.lineno?_:new n.TemplateError(_,x,T)}function b(_,x,T,R){if(n.isArray(_)){var Q=_.length;n.asyncIter(_,function(k,F,M){switch(x){case 1:T(k,F,Q,M);break;case 2:T(k[0],k[1],F,Q,M);break;case 3:T(k[0],k[1],k[2],F,Q,M);break;default:k.push(F,Q,M),T.apply(this,k)}},R)}else n.asyncFor(_,function(k,F,M,B,P){T(k,F,M,B,P)},R)}function U(_,x,T,R){var Q=0,N,k;function F(ce,W){Q++,k[ce]=W,Q===N&&R(null,k.join(""))}if(n.isArray(_))if(N=_.length,k=new Array(N),N===0)R(null,"");else for(var M=0;M<_.length;M++){var B=_[M];switch(x){case 1:T(B,M,N,F);break;case 2:T(B[0],B[1],M,N,F);break;case 3:T(B[0],B[1],B[2],M,N,F);break;default:B.push(M,N,F),T.apply(this,B)}}else{var P=n.keys(_||{});if(N=P.length,k=new Array(N),N===0)R(null,"");else for(var K=0;K<P.length;K++){var te=P[K];T(te,_[te],K,N,F)}}}function y(_){return typeof _!="object"||_===null||n.isArray(_)?_:a&&Symbol.iterator in _?o(_):_}t.exports={Frame:l,makeMacro:c,makeKeywordArgs:u,numArgs:p,suppressValue:h,ensureDefined:v,memberLookup:E,contextOrFrameLookup:C,callWrap:w,handleError:S,isArray:n.isArray,keys:n.keys,SafeString:g,copySafeness:A,markSafe:d,asyncEach:b,asyncAll:U,inOperator:n.inOperator,fromIterator:y}}),(function(t,i,s){function n(pe,Se){for(var O=0;O<Se.length;O++){var le=Se[O];le.enumerable=le.enumerable||!1,le.configurable=!0,"value"in le&&(le.writable=!0),Object.defineProperty(pe,a(le.key),le)}}function o(pe,Se,O){return Se&&n(pe.prototype,Se),Object.defineProperty(pe,"prototype",{writable:!1}),pe}function a(pe){var Se=l(pe,"string");return typeof Se=="symbol"?Se:String(Se)}function l(pe,Se){if(typeof pe!="object"||pe===null)return pe;var O=pe[Symbol.toPrimitive];if(O!==void 0){var le=O.call(pe,Se);if(typeof le!="object")return le;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(pe)}function c(pe,Se){pe.prototype=Object.create(Se.prototype),pe.prototype.constructor=pe,u(pe,Se)}function u(pe,Se){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(le,j){return le.__proto__=j,le},u(pe,Se)}var f=s(1),m=f.Obj;function p(pe,Se,O){pe instanceof Se&&O.push(pe),pe instanceof g&&pe.findAll(Se,O)}var g=(function(pe){c(Se,pe);function Se(){return pe.apply(this,arguments)||this}var O=Se.prototype;return O.init=function(j,re){for(var _e=arguments,Ae=this,He=arguments.length,dt=new Array(He>2?He-2:0),_t=2;_t<He;_t++)dt[_t-2]=arguments[_t];this.lineno=j,this.colno=re,this.fields.forEach(function(tt,jt){var Kt=_e[jt+2];Kt===void 0&&(Kt=null),Ae[tt]=Kt})},O.findAll=function(j,re){var _e=this;return re=re||[],this instanceof d?this.children.forEach(function(Ae){return p(Ae,j,re)}):this.fields.forEach(function(Ae){return p(_e[Ae],j,re)}),re},O.iterFields=function(j){var re=this;this.fields.forEach(function(_e){j(re[_e],_e)})},Se})(m),A=(function(pe){c(Se,pe);function Se(){return pe.apply(this,arguments)||this}return o(Se,[{key:"typename",get:function(){return"Value"}},{key:"fields",get:function(){return["value"]}}]),Se})(g),d=(function(pe){c(Se,pe);function Se(){return pe.apply(this,arguments)||this}var O=Se.prototype;return O.init=function(j,re,_e){pe.prototype.init.call(this,j,re,_e||[])},O.addChild=function(j){this.children.push(j)},o(Se,[{key:"typename",get:function(){return"NodeList"}},{key:"fields",get:function(){return["children"]}}]),Se})(g),h=d.extend("Root"),v=A.extend("Literal"),E=A.extend("Symbol"),w=d.extend("Group"),C=d.extend("Array"),S=g.extend("Pair",{fields:["key","value"]}),b=d.extend("Dict"),U=g.extend("LookupVal",{fields:["target","val"]}),y=g.extend("If",{fields:["cond","body","else_"]}),_=y.extend("IfAsync"),x=g.extend("InlineIf",{fields:["cond","body","else_"]}),T=g.extend("For",{fields:["arr","name","body","else_"]}),R=T.extend("AsyncEach"),Q=T.extend("AsyncAll"),N=g.extend("Macro",{fields:["name","args","body"]}),k=N.extend("Caller"),F=g.extend("Import",{fields:["template","target","withContext"]}),M=(function(pe){c(Se,pe);function Se(){return pe.apply(this,arguments)||this}var O=Se.prototype;return O.init=function(j,re,_e,Ae,He){pe.prototype.init.call(this,j,re,_e,Ae||new d,He)},o(Se,[{key:"typename",get:function(){return"FromImport"}},{key:"fields",get:function(){return["template","names","withContext"]}}]),Se})(g),B=g.extend("FunCall",{fields:["name","args"]}),P=B.extend("Filter"),K=P.extend("FilterAsync",{fields:["name","args","symbol"]}),te=b.extend("KeywordArgs"),ce=g.extend("Block",{fields:["name","body"]}),W=g.extend("Super",{fields:["blockName","symbol"]}),X=g.extend("TemplateRef",{fields:["template"]}),ue=X.extend("Extends"),ae=g.extend("Include",{fields:["template","ignoreMissing"]}),he=g.extend("Set",{fields:["targets","value"]}),me=g.extend("Switch",{fields:["expr","cases","default"]}),oe=g.extend("Case",{fields:["cond","body"]}),we=d.extend("Output"),ge=g.extend("Capture",{fields:["body"]}),Fe=v.extend("TemplateData"),z=g.extend("UnaryOp",{fields:["target"]}),qe=g.extend("BinOp",{fields:["left","right"]}),Ne=qe.extend("In"),V=qe.extend("Is"),Y=qe.extend("Or"),fe=qe.extend("And"),ie=z.extend("Not"),D=qe.extend("Add"),I=qe.extend("Concat"),G=qe.extend("Sub"),q=qe.extend("Mul"),se=qe.extend("Div"),ne=qe.extend("FloorDiv"),xe=qe.extend("Mod"),ye=qe.extend("Pow"),Me=z.extend("Neg"),Ke=z.extend("Pos"),ve=g.extend("Compare",{fields:["expr","ops"]}),Ue=g.extend("CompareOperand",{fields:["expr","type"]}),Be=g.extend("CallExtension",{init:function(Se,O,le,j){this.parent(),this.extName=Se.__name||Se,this.prop=O,this.args=le||new d,this.contentArgs=j||[],this.autoescape=Se.autoescape},fields:["extName","prop","args","contentArgs"]}),Le=Be.extend("CallExtensionAsync");function be(pe,Se,O){var le=pe.split(`
`);le.forEach(function(j,re){j&&(O&&re>0||!O)&&process.stdout.write(" ".repeat(Se));var _e=re===le.length-1?"":`
`;process.stdout.write(""+j+_e)})}function Ze(pe,Se){if(Se=Se||0,be(pe.typename+": ",Se),pe instanceof d)be(`
`),pe.children.forEach(function(j){Ze(j,Se+2)});else if(pe instanceof Be)be(pe.extName+"."+pe.prop+`
`),pe.args&&Ze(pe.args,Se+2),pe.contentArgs&&pe.contentArgs.forEach(function(j){Ze(j,Se+2)});else{var O=[],le=null;pe.iterFields(function(j,re){j instanceof g?O.push([re,j]):(le=le||{},le[re]=j)}),le?be(JSON.stringify(le,null,2)+`
`,null,!0):be(`
`),O.forEach(function(j){var re=j[0],_e=j[1];be("["+re+"] =>",Se+2),Ze(_e,Se+4)})}}t.exports={Node:g,Root:h,NodeList:d,Value:A,Literal:v,Symbol:E,Group:w,Array:C,Pair:S,Dict:b,Output:we,Capture:ge,TemplateData:Fe,If:y,IfAsync:_,InlineIf:x,For:T,AsyncEach:R,AsyncAll:Q,Macro:N,Caller:k,Import:F,FromImport:M,FunCall:B,Filter:P,FilterAsync:K,KeywordArgs:te,Block:ce,Super:W,Extends:ue,Include:ae,Set:he,Switch:me,Case:oe,LookupVal:U,BinOp:qe,In:Ne,Is:V,Or:Y,And:fe,Not:ie,Add:D,Concat:I,Sub:G,Mul:q,Div:se,FloorDiv:ne,Mod:xe,Pow:ye,Neg:Me,Pos:Ke,Compare:ve,CompareOperand:Ue,CallExtension:Be,CallExtensionAsync:Le,printNodes:Ze}}),(function(t,i){}),(function(t,i,s){function n(v,E){v.prototype=Object.create(E.prototype),v.prototype.constructor=v,o(v,E)}function o(v,E){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(C,S){return C.__proto__=S,C},o(v,E)}var a=s(8),l=s(17),c=s(3),u=s(0),f=u.TemplateError,m=s(2),p=m.Frame,g=s(1),A=g.Obj,d={"==":"==","===":"===","!=":"!=","!==":"!==","<":"<",">":">","<=":"<=",">=":">="},h=(function(v){n(E,v);function E(){return v.apply(this,arguments)||this}var w=E.prototype;return w.init=function(S,b){this.templateName=S,this.codebuf=[],this.lastId=0,this.buffer=null,this.bufferStack=[],this._scopeClosers="",this.inBlock=!1,this.throwOnUndefined=b},w.fail=function(S,b,U){throw b!==void 0&&(b+=1),U!==void 0&&(U+=1),new f(S,b,U)},w._pushBuffer=function(){var S=this._tmpid();return this.bufferStack.push(this.buffer),this.buffer=S,this._emit("var "+this.buffer+' = "";'),S},w._popBuffer=function(){this.buffer=this.bufferStack.pop()},w._emit=function(S){this.codebuf.push(S)},w._emitLine=function(S){this._emit(S+`
`)},w._emitLines=function(){for(var S=this,b=arguments.length,U=new Array(b),y=0;y<b;y++)U[y]=arguments[y];U.forEach(function(_){return S._emitLine(_)})},w._emitFuncBegin=function(S,b){this.buffer="output",this._scopeClosers="",this._emitLine("function "+b+"(env, context, frame, runtime, cb) {"),this._emitLine("var lineno = "+S.lineno+";"),this._emitLine("var colno = "+S.colno+";"),this._emitLine("var "+this.buffer+' = "";'),this._emitLine("try {")},w._emitFuncEnd=function(S){S||this._emitLine("cb(null, "+this.buffer+");"),this._closeScopeLevels(),this._emitLine("} catch (e) {"),this._emitLine("  cb(runtime.handleError(e, lineno, colno));"),this._emitLine("}"),this._emitLine("}"),this.buffer=null},w._addScopeLevel=function(){this._scopeClosers+="})"},w._closeScopeLevels=function(){this._emitLine(this._scopeClosers+";"),this._scopeClosers=""},w._withScopedSyntax=function(S){var b=this._scopeClosers;this._scopeClosers="",S.call(this),this._closeScopeLevels(),this._scopeClosers=b},w._makeCallback=function(S){var b=this._tmpid();return"function("+b+(S?","+S:"")+`) {
if(`+b+") { cb("+b+"); return; }"},w._tmpid=function(){return this.lastId++,"t_"+this.lastId},w._templateName=function(){return this.templateName==null?"undefined":JSON.stringify(this.templateName)},w._compileChildren=function(S,b){var U=this;S.children.forEach(function(y){U.compile(y,b)})},w._compileAggregate=function(S,b,U,y){var _=this;U&&this._emit(U),S.children.forEach(function(x,T){T>0&&_._emit(","),_.compile(x,b)}),y&&this._emit(y)},w._compileExpression=function(S,b){this.assertType(S,c.Literal,c.Symbol,c.Group,c.Array,c.Dict,c.FunCall,c.Caller,c.Filter,c.LookupVal,c.Compare,c.InlineIf,c.In,c.Is,c.And,c.Or,c.Not,c.Add,c.Concat,c.Sub,c.Mul,c.Div,c.FloorDiv,c.Mod,c.Pow,c.Neg,c.Pos,c.Compare,c.NodeList),this.compile(S,b)},w.assertType=function(S){for(var b=arguments.length,U=new Array(b>1?b-1:0),y=1;y<b;y++)U[y-1]=arguments[y];U.some(function(_){return S instanceof _})||this.fail("assertType: invalid type: "+S.typename,S.lineno,S.colno)},w.compileCallExtension=function(S,b,U){var y=this,_=S.args,x=S.contentArgs,T=typeof S.autoescape=="boolean"?S.autoescape:!0;if(U||this._emit(this.buffer+" += runtime.suppressValue("),this._emit('env.getExtension("'+S.extName+'")["'+S.prop+'"]('),this._emit("context"),(_||x)&&this._emit(","),_&&(_ instanceof c.NodeList||this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"),_.children.forEach(function(Q,N){y._compileExpression(Q,b),(N!==_.children.length-1||x.length)&&y._emit(",")})),x.length&&x.forEach(function(Q,N){if(N>0&&y._emit(","),Q){y._emitLine("function(cb) {"),y._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");var k=y._pushBuffer();y._withScopedSyntax(function(){y.compile(Q,b),y._emitLine("cb(null, "+k+");")}),y._popBuffer(),y._emitLine("return "+k+";"),y._emitLine("}")}else y._emit("null")}),U){var R=this._tmpid();this._emitLine(", "+this._makeCallback(R)),this._emitLine(this.buffer+" += runtime.suppressValue("+R+", "+T+" && env.opts.autoescape);"),this._addScopeLevel()}else this._emit(")"),this._emit(", "+T+` && env.opts.autoescape);
`)},w.compileCallExtensionAsync=function(S,b){this.compileCallExtension(S,b,!0)},w.compileNodeList=function(S,b){this._compileChildren(S,b)},w.compileLiteral=function(S){if(typeof S.value=="string"){var b=S.value.replace(/\\/g,"\\\\");b=b.replace(/"/g,'\\"'),b=b.replace(/\n/g,"\\n"),b=b.replace(/\r/g,"\\r"),b=b.replace(/\t/g,"\\t"),b=b.replace(/\u2028/g,"\\u2028"),this._emit('"'+b+'"')}else S.value===null?this._emit("null"):this._emit(S.value.toString())},w.compileSymbol=function(S,b){var U=S.value,y=b.lookup(U);y?this._emit(y):this._emit('runtime.contextOrFrameLookup(context, frame, "'+U+'")')},w.compileGroup=function(S,b){this._compileAggregate(S,b,"(",")")},w.compileArray=function(S,b){this._compileAggregate(S,b,"[","]")},w.compileDict=function(S,b){this._compileAggregate(S,b,"{","}")},w.compilePair=function(S,b){var U=S.key,y=S.value;U instanceof c.Symbol?U=new c.Literal(U.lineno,U.colno,U.value):U instanceof c.Literal&&typeof U.value=="string"||this.fail("compilePair: Dict keys must be strings or names",U.lineno,U.colno),this.compile(U,b),this._emit(": "),this._compileExpression(y,b)},w.compileInlineIf=function(S,b){this._emit("("),this.compile(S.cond,b),this._emit("?"),this.compile(S.body,b),this._emit(":"),S.else_!==null?this.compile(S.else_,b):this._emit('""'),this._emit(")")},w.compileIn=function(S,b){this._emit("runtime.inOperator("),this.compile(S.left,b),this._emit(","),this.compile(S.right,b),this._emit(")")},w.compileIs=function(S,b){var U=S.right.name?S.right.name.value:S.right.value;this._emit('env.getTest("'+U+'").call(context, '),this.compile(S.left,b),S.right.args&&(this._emit(","),this.compile(S.right.args,b)),this._emit(") === true")},w._binOpEmitter=function(S,b,U){this.compile(S.left,b),this._emit(U),this.compile(S.right,b)},w.compileOr=function(S,b){return this._binOpEmitter(S,b," || ")},w.compileAnd=function(S,b){return this._binOpEmitter(S,b," && ")},w.compileAdd=function(S,b){return this._binOpEmitter(S,b," + ")},w.compileConcat=function(S,b){return this._binOpEmitter(S,b,' + "" + ')},w.compileSub=function(S,b){return this._binOpEmitter(S,b," - ")},w.compileMul=function(S,b){return this._binOpEmitter(S,b," * ")},w.compileDiv=function(S,b){return this._binOpEmitter(S,b," / ")},w.compileMod=function(S,b){return this._binOpEmitter(S,b," % ")},w.compileNot=function(S,b){this._emit("!"),this.compile(S.target,b)},w.compileFloorDiv=function(S,b){this._emit("Math.floor("),this.compile(S.left,b),this._emit(" / "),this.compile(S.right,b),this._emit(")")},w.compilePow=function(S,b){this._emit("Math.pow("),this.compile(S.left,b),this._emit(", "),this.compile(S.right,b),this._emit(")")},w.compileNeg=function(S,b){this._emit("-"),this.compile(S.target,b)},w.compilePos=function(S,b){this._emit("+"),this.compile(S.target,b)},w.compileCompare=function(S,b){var U=this;this.compile(S.expr,b),S.ops.forEach(function(y){U._emit(" "+d[y.type]+" "),U.compile(y.expr,b)})},w.compileLookupVal=function(S,b){this._emit("runtime.memberLookup(("),this._compileExpression(S.target,b),this._emit("),"),this._compileExpression(S.val,b),this._emit(")")},w._getNodeName=function(S){switch(S.typename){case"Symbol":return S.value;case"FunCall":return"the return value of ("+this._getNodeName(S.name)+")";case"LookupVal":return this._getNodeName(S.target)+'["'+this._getNodeName(S.val)+'"]';case"Literal":return S.value.toString();default:return"--expression--"}},w.compileFunCall=function(S,b){this._emit("(lineno = "+S.lineno+", colno = "+S.colno+", "),this._emit("runtime.callWrap("),this._compileExpression(S.name,b),this._emit(', "'+this._getNodeName(S.name).replace(/"/g,'\\"')+'", context, '),this._compileAggregate(S.args,b,"[","])"),this._emit(")")},w.compileFilter=function(S,b){var U=S.name;this.assertType(U,c.Symbol),this._emit('env.getFilter("'+U.value+'").call(context, '),this._compileAggregate(S.args,b),this._emit(")")},w.compileFilterAsync=function(S,b){var U=S.name,y=S.symbol.value;this.assertType(U,c.Symbol),b.set(y,y),this._emit('env.getFilter("'+U.value+'").call(context, '),this._compileAggregate(S.args,b),this._emitLine(", "+this._makeCallback(y)),this._addScopeLevel()},w.compileKeywordArgs=function(S,b){this._emit("runtime.makeKeywordArgs("),this.compileDict(S,b),this._emit(")")},w.compileSet=function(S,b){var U=this,y=[];S.targets.forEach(function(_){var x=_.value,T=b.lookup(x);T==null&&(T=U._tmpid(),U._emitLine("var "+T+";")),y.push(T)}),S.value?(this._emit(y.join(" = ")+" = "),this._compileExpression(S.value,b),this._emitLine(";")):(this._emit(y.join(" = ")+" = "),this.compile(S.body,b),this._emitLine(";")),S.targets.forEach(function(_,x){var T=y[x],R=_.value;U._emitLine('frame.set("'+R+'", '+T+", true);"),U._emitLine("if(frame.topLevel) {"),U._emitLine('context.setVariable("'+R+'", '+T+");"),U._emitLine("}"),R.charAt(0)!=="_"&&(U._emitLine("if(frame.topLevel) {"),U._emitLine('context.addExport("'+R+'", '+T+");"),U._emitLine("}"))})},w.compileSwitch=function(S,b){var U=this;this._emit("switch ("),this.compile(S.expr,b),this._emit(") {"),S.cases.forEach(function(y,_){U._emit("case "),U.compile(y.cond,b),U._emit(": "),U.compile(y.body,b),y.body.children.length&&U._emitLine("break;")}),S.default&&(this._emit("default:"),this.compile(S.default,b)),this._emit("}")},w.compileIf=function(S,b,U){var y=this;this._emit("if("),this._compileExpression(S.cond,b),this._emitLine(") {"),this._withScopedSyntax(function(){y.compile(S.body,b),U&&y._emit("cb()")}),S.else_?(this._emitLine(`}
else {`),this._withScopedSyntax(function(){y.compile(S.else_,b),U&&y._emit("cb()")})):U&&(this._emitLine(`}
else {`),this._emit("cb()")),this._emitLine("}")},w.compileIfAsync=function(S,b){this._emit("(function(cb) {"),this.compileIf(S,b,!0),this._emit("})("+this._makeCallback()),this._addScopeLevel()},w._emitLoopBindings=function(S,b,U,y){var _=this,x=[{name:"index",val:U+" + 1"},{name:"index0",val:U},{name:"revindex",val:y+" - "+U},{name:"revindex0",val:y+" - "+U+" - 1"},{name:"first",val:U+" === 0"},{name:"last",val:U+" === "+y+" - 1"},{name:"length",val:y}];x.forEach(function(T){_._emitLine('frame.set("loop.'+T.name+'", '+T.val+");")})},w.compileFor=function(S,b){var U=this,y=this._tmpid(),_=this._tmpid(),x=this._tmpid();if(b=b.push(),this._emitLine("frame = frame.push();"),this._emit("var "+x+" = "),this._compileExpression(S.arr,b),this._emitLine(";"),this._emit("if("+x+") {"),this._emitLine(x+" = runtime.fromIterator("+x+");"),S.name instanceof c.Array){this._emitLine("var "+y+";"),this._emitLine("if(runtime.isArray("+x+")) {"),this._emitLine("var "+_+" = "+x+".length;"),this._emitLine("for("+y+"=0; "+y+" < "+x+".length; "+y+"++) {"),S.name.children.forEach(function(M,B){var P=U._tmpid();U._emitLine("var "+P+" = "+x+"["+y+"]["+B+"];"),U._emitLine('frame.set("'+M+'", '+x+"["+y+"]["+B+"]);"),b.set(S.name.children[B].value,P)}),this._emitLoopBindings(S,x,y,_),this._withScopedSyntax(function(){U.compile(S.body,b)}),this._emitLine("}"),this._emitLine("} else {");var T=S.name.children,R=T[0],Q=T[1],N=this._tmpid(),k=this._tmpid();b.set(R.value,N),b.set(Q.value,k),this._emitLine(y+" = -1;"),this._emitLine("var "+_+" = runtime.keys("+x+").length;"),this._emitLine("for(var "+N+" in "+x+") {"),this._emitLine(y+"++;"),this._emitLine("var "+k+" = "+x+"["+N+"];"),this._emitLine('frame.set("'+R.value+'", '+N+");"),this._emitLine('frame.set("'+Q.value+'", '+k+");"),this._emitLoopBindings(S,x,y,_),this._withScopedSyntax(function(){U.compile(S.body,b)}),this._emitLine("}"),this._emitLine("}")}else{var F=this._tmpid();b.set(S.name.value,F),this._emitLine("var "+_+" = "+x+".length;"),this._emitLine("for(var "+y+"=0; "+y+" < "+x+".length; "+y+"++) {"),this._emitLine("var "+F+" = "+x+"["+y+"];"),this._emitLine('frame.set("'+S.name.value+'", '+F+");"),this._emitLoopBindings(S,x,y,_),this._withScopedSyntax(function(){U.compile(S.body,b)}),this._emitLine("}")}this._emitLine("}"),S.else_&&(this._emitLine("if (!"+_+") {"),this.compile(S.else_,b),this._emitLine("}")),this._emitLine("frame = frame.pop();")},w._compileAsyncLoop=function(S,b,U){var y=this,_=this._tmpid(),x=this._tmpid(),T=this._tmpid(),R=U?"asyncAll":"asyncEach";if(b=b.push(),this._emitLine("frame = frame.push();"),this._emit("var "+T+" = runtime.fromIterator("),this._compileExpression(S.arr,b),this._emitLine(");"),S.name instanceof c.Array){var Q=S.name.children.length;this._emit("runtime."+R+"("+T+", "+Q+", function("),S.name.children.forEach(function(F){y._emit(F.value+",")}),this._emit(_+","+x+",next) {"),S.name.children.forEach(function(F){var M=F.value;b.set(M,M),y._emitLine('frame.set("'+M+'", '+M+");")})}else{var N=S.name.value;this._emitLine("runtime."+R+"("+T+", 1, function("+N+", "+_+", "+x+",next) {"),this._emitLine('frame.set("'+N+'", '+N+");"),b.set(N,N)}this._emitLoopBindings(S,T,_,x),this._withScopedSyntax(function(){var F;U&&(F=y._pushBuffer()),y.compile(S.body,b),y._emitLine("next("+_+(F?","+F:"")+");"),U&&y._popBuffer()});var k=this._tmpid();this._emitLine("}, "+this._makeCallback(k)),this._addScopeLevel(),U&&this._emitLine(this.buffer+" += "+k+";"),S.else_&&(this._emitLine("if (!"+T+".length) {"),this.compile(S.else_,b),this._emitLine("}")),this._emitLine("frame = frame.pop();")},w.compileAsyncEach=function(S,b){this._compileAsyncLoop(S,b)},w.compileAsyncAll=function(S,b){this._compileAsyncLoop(S,b,!0)},w._compileMacro=function(S,b){var U=this,y=[],_=null,x="macro_"+this._tmpid(),T=b!==void 0;S.args.children.forEach(function(M,B){B===S.args.children.length-1&&M instanceof c.Dict?_=M:(U.assertType(M,c.Symbol),y.push(M))});var R=[].concat(y.map(function(M){return"l_"+M.value}),["kwargs"]),Q=y.map(function(M){return'"'+M.value+'"'}),N=(_&&_.children||[]).map(function(M){return'"'+M.key.value+'"'}),k;T?k=b.push(!0):k=new p,this._emitLines("var "+x+" = runtime.makeMacro(","["+Q.join(", ")+"], ","["+N.join(", ")+"], ","function ("+R.join(", ")+") {","var callerFrame = frame;","frame = "+(T?"frame.push(true);":"new runtime.Frame();"),"kwargs = kwargs || {};",'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {','frame.set("caller", kwargs.caller); }'),y.forEach(function(M){U._emitLine('frame.set("'+M.value+'", l_'+M.value+");"),k.set(M.value,"l_"+M.value)}),_&&_.children.forEach(function(M){var B=M.key.value;U._emit('frame.set("'+B+'", '),U._emit('Object.prototype.hasOwnProperty.call(kwargs, "'+B+'")'),U._emit(' ? kwargs["'+B+'"] : '),U._compileExpression(M.value,k),U._emit(");")});var F=this._pushBuffer();return this._withScopedSyntax(function(){U.compile(S.body,k)}),this._emitLine("frame = "+(T?"frame.pop();":"callerFrame;")),this._emitLine("return new runtime.SafeString("+F+");"),this._emitLine("});"),this._popBuffer(),x},w.compileMacro=function(S,b){var U=this._compileMacro(S),y=S.name.value;b.set(y,U),b.parent?this._emitLine('frame.set("'+y+'", '+U+");"):(S.name.value.charAt(0)!=="_"&&this._emitLine('context.addExport("'+y+'");'),this._emitLine('context.setVariable("'+y+'", '+U+");"))},w.compileCaller=function(S,b){this._emit("(function (){");var U=this._compileMacro(S,b);this._emit("return "+U+";})()")},w._compileGetTemplate=function(S,b,U,y){var _=this._tmpid(),x=this._templateName(),T=this._makeCallback(_),R=U?"true":"false",Q=y?"true":"false";return this._emit("env.getTemplate("),this._compileExpression(S.template,b),this._emitLine(", "+R+", "+x+", "+Q+", "+T),_},w.compileImport=function(S,b){var U=S.target.value,y=this._compileGetTemplate(S,b,!1,!1);this._addScopeLevel(),this._emitLine(y+".getExported("+(S.withContext?"context.getVariables(), frame, ":"")+this._makeCallback(y)),this._addScopeLevel(),b.set(U,y),b.parent?this._emitLine('frame.set("'+U+'", '+y+");"):this._emitLine('context.setVariable("'+U+'", '+y+");")},w.compileFromImport=function(S,b){var U=this,y=this._compileGetTemplate(S,b,!1,!1);this._addScopeLevel(),this._emitLine(y+".getExported("+(S.withContext?"context.getVariables(), frame, ":"")+this._makeCallback(y)),this._addScopeLevel(),S.names.children.forEach(function(_){var x,T,R=U._tmpid();_ instanceof c.Pair?(x=_.key.value,T=_.value.value):(x=_.value,T=x),U._emitLine("if(Object.prototype.hasOwnProperty.call("+y+', "'+x+'")) {'),U._emitLine("var "+R+" = "+y+"."+x+";"),U._emitLine("} else {"),U._emitLine(`cb(new Error("cannot import '`+x+`'")); return;`),U._emitLine("}"),b.set(T,R),b.parent?U._emitLine('frame.set("'+T+'", '+R+");"):U._emitLine('context.setVariable("'+T+'", '+R+");")})},w.compileBlock=function(S){var b=this._tmpid();this.inBlock||this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '),this._emit('context.getBlock("'+S.name.value+'")'),this.inBlock||this._emit(")"),this._emitLine("(env, context, frame, runtime, "+this._makeCallback(b)),this._emitLine(this.buffer+" += "+b+";"),this._addScopeLevel()},w.compileSuper=function(S,b){var U=S.blockName.value,y=S.symbol.value,_=this._makeCallback(y);this._emitLine('context.getSuper(env, "'+U+'", b_'+U+", frame, runtime, "+_),this._emitLine(y+" = runtime.markSafe("+y+");"),this._addScopeLevel(),b.set(y,y)},w.compileExtends=function(S,b){var U=this._tmpid(),y=this._compileGetTemplate(S,b,!0,!1);this._emitLine("parentTemplate = "+y),this._emitLine("for(var "+U+" in parentTemplate.blocks) {"),this._emitLine("context.addBlock("+U+", parentTemplate.blocks["+U+"]);"),this._emitLine("}"),this._addScopeLevel()},w.compileInclude=function(S,b){this._emitLine("var tasks = [];"),this._emitLine("tasks.push("),this._emitLine("function(callback) {");var U=this._compileGetTemplate(S,b,!1,S.ignoreMissing);this._emitLine("callback(null,"+U+");});"),this._emitLine("});");var y=this._tmpid();this._emitLine("tasks.push("),this._emitLine("function(template, callback){"),this._emitLine("template.render(context.getVariables(), frame, "+this._makeCallback(y)),this._emitLine("callback(null,"+y+");});"),this._emitLine("});"),this._emitLine("tasks.push("),this._emitLine("function(result, callback){"),this._emitLine(this.buffer+" += result;"),this._emitLine("callback(null);"),this._emitLine("});"),this._emitLine("env.waterfall(tasks, function(){"),this._addScopeLevel()},w.compileTemplateData=function(S,b){this.compileLiteral(S,b)},w.compileCapture=function(S,b){var U=this,y=this.buffer;this.buffer="output",this._emitLine("(function() {"),this._emitLine('var output = "";'),this._withScopedSyntax(function(){U.compile(S.body,b)}),this._emitLine("return output;"),this._emitLine("})()"),this.buffer=y},w.compileOutput=function(S,b){var U=this,y=S.children;y.forEach(function(_){_ instanceof c.TemplateData?_.value&&(U._emit(U.buffer+" += "),U.compileLiteral(_,b),U._emitLine(";")):(U._emit(U.buffer+" += runtime.suppressValue("),U.throwOnUndefined&&U._emit("runtime.ensureDefined("),U.compile(_,b),U.throwOnUndefined&&U._emit(","+S.lineno+","+S.colno+")"),U._emit(`, env.opts.autoescape);
`))})},w.compileRoot=function(S,b){var U=this;b&&this.fail("compileRoot: root node can't have frame"),b=new p,this._emitFuncBegin(S,"root"),this._emitLine("var parentTemplate = null;"),this._compileChildren(S,b),this._emitLine("if(parentTemplate) {"),this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"),this._emitLine("} else {"),this._emitLine("cb(null, "+this.buffer+");"),this._emitLine("}"),this._emitFuncEnd(!0),this.inBlock=!0;var y=[],_=S.findAll(c.Block);_.forEach(function(x,T){var R=x.name.value;if(y.indexOf(R)!==-1)throw new Error('Block "'+R+'" defined more than once.');y.push(R),U._emitFuncBegin(x,"b_"+R);var Q=new p;U._emitLine("var frame = frame.push(true);"),U.compile(x.body,Q),U._emitFuncEnd()}),this._emitLine("return {"),_.forEach(function(x,T){var R="b_"+x.name.value;U._emitLine(R+": "+R+",")}),this._emitLine(`root: root
};`)},w.compile=function(S,b){var U=this["compile"+S.typename];U?U.call(this,S,b):this.fail("compile: Cannot compile node: "+S.typename,S.lineno,S.colno)},w.getCode=function(){return this.codebuf.join("")},E})(A);t.exports={compile:function(E,w,C,S,b){b===void 0&&(b={});var U=new h(S,b.throwOnUndefined),y=(C||[]).map(function(x){return x.preprocess}).filter(function(x){return!!x}),_=y.reduce(function(x,T){return T(x)},E);return U.compile(l.transform(a.parse(_,C,b),w,S)),U.getCode()},Compiler:h}}),(function(t,i,s){function n(u,f){u.prototype=Object.create(f.prototype),u.prototype.constructor=u,o(u,f)}function o(u,f){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(p,g){return p.__proto__=g,p},o(u,f)}var a=s(4),l=s(1),c=l.EmitterObj;t.exports=(function(u){n(f,u);function f(){return u.apply(this,arguments)||this}var m=f.prototype;return m.resolve=function(g,A){return a.resolve(a.dirname(g),A)},m.isRelative=function(g){return g.indexOf("./")===0||g.indexOf("../")===0},f})(c)}),(function(t,i,s){function n(Q,N){Q.prototype=Object.create(N.prototype),Q.prototype.constructor=Q,o(Q,N)}function o(Q,N){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(F,M){return F.__proto__=M,F},o(Q,N)}var a=s(12),l=s(15),c=s(0),u=s(5),f=s(18),m=s(10),p=m.FileSystemLoader,g=m.WebLoader,A=m.PrecompiledLoader,d=s(20),h=s(21),v=s(1),E=v.Obj,w=v.EmitterObj,C=s(2),S=C.handleError,b=C.Frame,U=s(22);function y(Q,N,k){a(function(){Q(N,k)})}var _={type:"code",obj:{root:function(N,k,F,M,B){try{B(null,"")}catch(P){B(S(P,null,null))}}}},x=(function(Q){n(N,Q);function N(){return Q.apply(this,arguments)||this}var k=N.prototype;return k.init=function(M,B){var P=this;B=this.opts=B||{},this.opts.dev=!!B.dev,this.opts.autoescape=B.autoescape!=null?B.autoescape:!0,this.opts.throwOnUndefined=!!B.throwOnUndefined,this.opts.trimBlocks=!!B.trimBlocks,this.opts.lstripBlocks=!!B.lstripBlocks,this.loaders=[],M?this.loaders=c.isArray(M)?M:[M]:p?this.loaders=[new p("views")]:g&&(this.loaders=[new g("/views")]),typeof window<"u"&&window.nunjucksPrecompiled&&this.loaders.unshift(new A(window.nunjucksPrecompiled)),this._initLoaders(),this.globals=h(),this.filters={},this.tests={},this.asyncFilters=[],this.extensions={},this.extensionsList=[],c._entries(f).forEach(function(K){var te=K[0],ce=K[1];return P.addFilter(te,ce)}),c._entries(d).forEach(function(K){var te=K[0],ce=K[1];return P.addTest(te,ce)})},k._initLoaders=function(){var M=this;this.loaders.forEach(function(B){B.cache={},typeof B.on=="function"&&(B.on("update",function(P,K){B.cache[P]=null,M.emit("update",P,K,B)}),B.on("load",function(P,K){M.emit("load",P,K,B)}))})},k.invalidateCache=function(){this.loaders.forEach(function(M){M.cache={}})},k.addExtension=function(M,B){return B.__name=M,this.extensions[M]=B,this.extensionsList.push(B),this},k.removeExtension=function(M){var B=this.getExtension(M);B&&(this.extensionsList=c.without(this.extensionsList,B),delete this.extensions[M])},k.getExtension=function(M){return this.extensions[M]},k.hasExtension=function(M){return!!this.extensions[M]},k.addGlobal=function(M,B){return this.globals[M]=B,this},k.getGlobal=function(M){if(typeof this.globals[M]>"u")throw new Error("global not found: "+M);return this.globals[M]},k.addFilter=function(M,B,P){var K=B;return P&&this.asyncFilters.push(M),this.filters[M]=K,this},k.getFilter=function(M){if(!this.filters[M])throw new Error("filter not found: "+M);return this.filters[M]},k.addTest=function(M,B){return this.tests[M]=B,this},k.getTest=function(M){if(!this.tests[M])throw new Error("test not found: "+M);return this.tests[M]},k.resolveTemplate=function(M,B,P){var K=M.isRelative&&B?M.isRelative(P):!1;return K&&M.resolve?M.resolve(B,P):P},k.getTemplate=function(M,B,P,K,te){var ce=this,W=this,X=null;if(M&&M.raw&&(M=M.raw),c.isFunction(P)&&(te=P,P=null,B=B||!1),c.isFunction(B)&&(te=B,B=!1),M instanceof R)X=M;else{if(typeof M!="string")throw new Error("template names must be a string: "+M);for(var ue=0;ue<this.loaders.length;ue++){var ae=this.loaders[ue];if(X=ae.cache[this.resolveTemplate(ae,P,M)],X)break}}if(X)if(B&&X.compile(),te){te(null,X);return}else return X;var he,me=function(we,ge){if(!ge&&!we&&!K&&(we=new Error("template not found: "+M)),we)if(te){te(we);return}else throw we;var Fe;ge?(Fe=new R(ge.src,ce,ge.path,B),ge.noCache||(ge.loader.cache[M]=Fe)):Fe=new R(_,ce,"",B),te?te(null,Fe):he=Fe};return c.asyncIter(this.loaders,function(oe,we,ge,Fe){function z(qe,Ne){qe?Fe(qe):Ne?(Ne.loader=oe,Fe(null,Ne)):ge()}M=W.resolveTemplate(oe,P,M),oe.async?oe.getSource(M,z):z(null,oe.getSource(M))},me),he},k.express=function(M){return U(this,M)},k.render=function(M,B,P){c.isFunction(B)&&(P=B,B=null);var K=null;return this.getTemplate(M,function(te,ce){if(te&&P)y(P,te);else{if(te)throw te;K=ce.render(B,P)}}),K},k.renderString=function(M,B,P,K){c.isFunction(P)&&(K=P,P={}),P=P||{};var te=new R(M,this,P.path);return te.render(B,K)},k.waterfall=function(M,B,P){return l(M,B,P)},N})(w),T=(function(Q){n(N,Q);function N(){return Q.apply(this,arguments)||this}var k=N.prototype;return k.init=function(M,B,P){var K=this;this.env=P||new x,this.ctx=c.extend({},M),this.blocks={},this.exported=[],c.keys(B).forEach(function(te){K.addBlock(te,B[te])})},k.lookup=function(M){return M in this.env.globals&&!(M in this.ctx)?this.env.globals[M]:this.ctx[M]},k.setVariable=function(M,B){this.ctx[M]=B},k.getVariables=function(){return this.ctx},k.addBlock=function(M,B){return this.blocks[M]=this.blocks[M]||[],this.blocks[M].push(B),this},k.getBlock=function(M){if(!this.blocks[M])throw new Error('unknown block "'+M+'"');return this.blocks[M][0]},k.getSuper=function(M,B,P,K,te,ce){var W=c.indexOf(this.blocks[B]||[],P),X=this.blocks[B][W+1],ue=this;if(W===-1||!X)throw new Error('no super block available for "'+B+'"');X(M,ue,K,te,ce)},k.addExport=function(M){this.exported.push(M)},k.getExported=function(){var M=this,B={};return this.exported.forEach(function(P){B[P]=M.ctx[P]}),B},N})(E),R=(function(Q){n(N,Q);function N(){return Q.apply(this,arguments)||this}var k=N.prototype;return k.init=function(M,B,P,K){if(this.env=B||new x,c.isObject(M))switch(M.type){case"code":this.tmplProps=M.obj;break;case"string":this.tmplStr=M.obj;break;default:throw new Error("Unexpected template object type "+M.type+"; expected 'code', or 'string'")}else if(c.isString(M))this.tmplStr=M;else throw new Error("src must be a string or an object describing the source");if(this.path=P,K)try{this._compile()}catch(te){throw c._prettifyError(this.path,this.env.opts.dev,te)}else this.compiled=!1},k.render=function(M,B,P){var K=this;typeof M=="function"?(P=M,M={}):typeof B=="function"&&(P=B,B=null);var te=!B;try{this.compile()}catch(he){var ce=c._prettifyError(this.path,this.env.opts.dev,he);if(P)return y(P,ce);throw ce}var W=new T(M||{},this.blocks,this.env),X=B?B.push(!0):new b;X.topLevel=!0;var ue=null,ae=!1;return this.rootRenderFunc(this.env,W,X,C,function(he,me){if(!(ae&&P&&typeof me<"u"))if(he&&(he=c._prettifyError(K.path,K.env.opts.dev,he),ae=!0),P)te?y(P,he,me):P(he,me);else{if(he)throw he;ue=me}}),ue},k.getExported=function(M,B,P){typeof M=="function"&&(P=M,M={}),typeof B=="function"&&(P=B,B=null);try{this.compile()}catch(ce){if(P)return P(ce);throw ce}var K=B?B.push():new b;K.topLevel=!0;var te=new T(M||{},this.blocks,this.env);this.rootRenderFunc(this.env,te,K,C,function(ce){ce?P(ce,null):P(null,te.getExported())})},k.compile=function(){this.compiled||this._compile()},k._compile=function(){var M;if(this.tmplProps)M=this.tmplProps;else{var B=u.compile(this.tmplStr,this.env.asyncFilters,this.env.extensionsList,this.path,this.env.opts),P=new Function(B);M=P()}this.blocks=this._getBlocks(M),this.rootRenderFunc=M.root,this.compiled=!0},k._getBlocks=function(M){var B={};return c.keys(M).forEach(function(P){P.slice(0,2)==="b_"&&(B[P.slice(2)]=M[P])}),B},N})(E);t.exports={Environment:x,Template:R}}),(function(t,i,s){function n(m,p){m.prototype=Object.create(p.prototype),m.prototype.constructor=m,o(m,p)}function o(m,p){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(A,d){return A.__proto__=d,A},o(m,p)}var a=s(9),l=s(3),c=s(1).Obj,u=s(0),f=(function(m){n(p,m);function p(){return m.apply(this,arguments)||this}var g=p.prototype;return g.init=function(d){this.tokens=d,this.peeked=null,this.breakOnBlocks=null,this.dropLeadingWhitespace=!1,this.extensions=[]},g.nextToken=function(d){var h;if(this.peeked)if(!d&&this.peeked.type===a.TOKEN_WHITESPACE)this.peeked=null;else return h=this.peeked,this.peeked=null,h;if(h=this.tokens.nextToken(),!d)for(;h&&h.type===a.TOKEN_WHITESPACE;)h=this.tokens.nextToken();return h},g.peekToken=function(){return this.peeked=this.peeked||this.nextToken(),this.peeked},g.pushToken=function(d){if(this.peeked)throw new Error("pushToken: can only push one token on between reads");this.peeked=d},g.error=function(d,h,v){if(h===void 0||v===void 0){var E=this.peekToken()||{};h=E.lineno,v=E.colno}return h!==void 0&&(h+=1),v!==void 0&&(v+=1),new u.TemplateError(d,h,v)},g.fail=function(d,h,v){throw this.error(d,h,v)},g.skip=function(d){var h=this.nextToken();return!h||h.type!==d?(this.pushToken(h),!1):!0},g.expect=function(d){var h=this.nextToken();return h.type!==d&&this.fail("expected "+d+", got "+h.type,h.lineno,h.colno),h},g.skipValue=function(d,h){var v=this.nextToken();return!v||v.type!==d||v.value!==h?(this.pushToken(v),!1):!0},g.skipSymbol=function(d){return this.skipValue(a.TOKEN_SYMBOL,d)},g.advanceAfterBlockEnd=function(d){var h;return d||(h=this.peekToken(),h||this.fail("unexpected end of file"),h.type!==a.TOKEN_SYMBOL&&this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"),d=this.nextToken().value),h=this.nextToken(),h&&h.type===a.TOKEN_BLOCK_END?h.value.charAt(0)==="-"&&(this.dropLeadingWhitespace=!0):this.fail("expected block end in "+d+" statement"),h},g.advanceAfterVariableEnd=function(){var d=this.nextToken();d&&d.type===a.TOKEN_VARIABLE_END?this.dropLeadingWhitespace=d.value.charAt(d.value.length-this.tokens.tags.VARIABLE_END.length-1)==="-":(this.pushToken(d),this.fail("expected variable end"))},g.parseFor=function(){var d=this.peekToken(),h,v;this.skipSymbol("for")?(h=new l.For(d.lineno,d.colno),v="endfor"):this.skipSymbol("asyncEach")?(h=new l.AsyncEach(d.lineno,d.colno),v="endeach"):this.skipSymbol("asyncAll")?(h=new l.AsyncAll(d.lineno,d.colno),v="endall"):this.fail("parseFor: expected for{Async}",d.lineno,d.colno),h.name=this.parsePrimary(),h.name instanceof l.Symbol||this.fail("parseFor: variable name expected for loop");var E=this.peekToken().type;if(E===a.TOKEN_COMMA){var w=h.name;for(h.name=new l.Array(w.lineno,w.colno),h.name.addChild(w);this.skip(a.TOKEN_COMMA);){var C=this.parsePrimary();h.name.addChild(C)}}return this.skipSymbol("in")||this.fail('parseFor: expected "in" keyword for loop',d.lineno,d.colno),h.arr=this.parseExpression(),this.advanceAfterBlockEnd(d.value),h.body=this.parseUntilBlocks(v,"else"),this.skipSymbol("else")&&(this.advanceAfterBlockEnd("else"),h.else_=this.parseUntilBlocks(v)),this.advanceAfterBlockEnd(),h},g.parseMacro=function(){var d=this.peekToken();this.skipSymbol("macro")||this.fail("expected macro");var h=this.parsePrimary(!0),v=this.parseSignature(),E=new l.Macro(d.lineno,d.colno,h,v);return this.advanceAfterBlockEnd(d.value),E.body=this.parseUntilBlocks("endmacro"),this.advanceAfterBlockEnd(),E},g.parseCall=function(){var d=this.peekToken();this.skipSymbol("call")||this.fail("expected call");var h=this.parseSignature(!0)||new l.NodeList,v=this.parsePrimary();this.advanceAfterBlockEnd(d.value);var E=this.parseUntilBlocks("endcall");this.advanceAfterBlockEnd();var w=new l.Symbol(d.lineno,d.colno,"caller"),C=new l.Caller(d.lineno,d.colno,w,h,E),S=v.args.children;S[S.length-1]instanceof l.KeywordArgs||S.push(new l.KeywordArgs);var b=S[S.length-1];return b.addChild(new l.Pair(d.lineno,d.colno,w,C)),new l.Output(d.lineno,d.colno,[v])},g.parseWithContext=function(){var d=this.peekToken(),h=null;return this.skipSymbol("with")?h=!0:this.skipSymbol("without")&&(h=!1),h!==null&&(this.skipSymbol("context")||this.fail("parseFrom: expected context after with/without",d.lineno,d.colno)),h},g.parseImport=function(){var d=this.peekToken();this.skipSymbol("import")||this.fail("parseImport: expected import",d.lineno,d.colno);var h=this.parseExpression();this.skipSymbol("as")||this.fail('parseImport: expected "as" keyword',d.lineno,d.colno);var v=this.parseExpression(),E=this.parseWithContext(),w=new l.Import(d.lineno,d.colno,h,v,E);return this.advanceAfterBlockEnd(d.value),w},g.parseFrom=function(){var d=this.peekToken();this.skipSymbol("from")||this.fail("parseFrom: expected from");var h=this.parseExpression();this.skipSymbol("import")||this.fail("parseFrom: expected import",d.lineno,d.colno);for(var v=new l.NodeList,E;;){var w=this.peekToken();if(w.type===a.TOKEN_BLOCK_END){v.children.length||this.fail("parseFrom: Expected at least one import name",d.lineno,d.colno),w.value.charAt(0)==="-"&&(this.dropLeadingWhitespace=!0),this.nextToken();break}v.children.length>0&&!this.skip(a.TOKEN_COMMA)&&this.fail("parseFrom: expected comma",d.lineno,d.colno);var C=this.parsePrimary();if(C.value.charAt(0)==="_"&&this.fail("parseFrom: names starting with an underscore cannot be imported",C.lineno,C.colno),this.skipSymbol("as")){var S=this.parsePrimary();v.addChild(new l.Pair(C.lineno,C.colno,C,S))}else v.addChild(C);E=this.parseWithContext()}return new l.FromImport(d.lineno,d.colno,h,v,E)},g.parseBlock=function(){var d=this.peekToken();this.skipSymbol("block")||this.fail("parseBlock: expected block",d.lineno,d.colno);var h=new l.Block(d.lineno,d.colno);h.name=this.parsePrimary(),h.name instanceof l.Symbol||this.fail("parseBlock: variable name expected",d.lineno,d.colno),this.advanceAfterBlockEnd(d.value),h.body=this.parseUntilBlocks("endblock"),this.skipSymbol("endblock"),this.skipSymbol(h.name.value);var v=this.peekToken();return v||this.fail("parseBlock: expected endblock, got end of file"),this.advanceAfterBlockEnd(v.value),h},g.parseExtends=function(){var d="extends",h=this.peekToken();this.skipSymbol(d)||this.fail("parseTemplateRef: expected "+d);var v=new l.Extends(h.lineno,h.colno);return v.template=this.parseExpression(),this.advanceAfterBlockEnd(h.value),v},g.parseInclude=function(){var d="include",h=this.peekToken();this.skipSymbol(d)||this.fail("parseInclude: expected "+d);var v=new l.Include(h.lineno,h.colno);return v.template=this.parseExpression(),this.skipSymbol("ignore")&&this.skipSymbol("missing")&&(v.ignoreMissing=!0),this.advanceAfterBlockEnd(h.value),v},g.parseIf=function(){var d=this.peekToken(),h;this.skipSymbol("if")||this.skipSymbol("elif")||this.skipSymbol("elseif")?h=new l.If(d.lineno,d.colno):this.skipSymbol("ifAsync")?h=new l.IfAsync(d.lineno,d.colno):this.fail("parseIf: expected if, elif, or elseif",d.lineno,d.colno),h.cond=this.parseExpression(),this.advanceAfterBlockEnd(d.value),h.body=this.parseUntilBlocks("elif","elseif","else","endif");var v=this.peekToken();switch(v&&v.value){case"elseif":case"elif":h.else_=this.parseIf();break;case"else":this.advanceAfterBlockEnd(),h.else_=this.parseUntilBlocks("endif"),this.advanceAfterBlockEnd();break;case"endif":h.else_=null,this.advanceAfterBlockEnd();break;default:this.fail("parseIf: expected elif, else, or endif, got end of file")}return h},g.parseSet=function(){var d=this.peekToken();this.skipSymbol("set")||this.fail("parseSet: expected set",d.lineno,d.colno);for(var h=new l.Set(d.lineno,d.colno,[]),v;(v=this.parsePrimary())&&(h.targets.push(v),!!this.skip(a.TOKEN_COMMA)););return this.skipValue(a.TOKEN_OPERATOR,"=")?(h.value=this.parseExpression(),this.advanceAfterBlockEnd(d.value)):this.skip(a.TOKEN_BLOCK_END)?(h.body=new l.Capture(d.lineno,d.colno,this.parseUntilBlocks("endset")),h.value=null,this.advanceAfterBlockEnd()):this.fail("parseSet: expected = or block end in set tag",d.lineno,d.colno),h},g.parseSwitch=function(){var d="switch",h="endswitch",v="case",E="default",w=this.peekToken();!this.skipSymbol(d)&&!this.skipSymbol(v)&&!this.skipSymbol(E)&&this.fail('parseSwitch: expected "switch," "case" or "default"',w.lineno,w.colno);var C=this.parseExpression();this.advanceAfterBlockEnd(d),this.parseUntilBlocks(v,E,h);var S=this.peekToken(),b=[],U;do{this.skipSymbol(v);var y=this.parseExpression();this.advanceAfterBlockEnd(d);var _=this.parseUntilBlocks(v,E,h);b.push(new l.Case(S.line,S.col,y,_)),S=this.peekToken()}while(S&&S.value===v);switch(S.value){case E:this.advanceAfterBlockEnd(),U=this.parseUntilBlocks(h),this.advanceAfterBlockEnd();break;case h:this.advanceAfterBlockEnd();break;default:this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.')}return new l.Switch(w.lineno,w.colno,C,b,U)},g.parseStatement=function(){var d=this.peekToken(),h;if(d.type!==a.TOKEN_SYMBOL&&this.fail("tag name expected",d.lineno,d.colno),this.breakOnBlocks&&u.indexOf(this.breakOnBlocks,d.value)!==-1)return null;switch(d.value){case"raw":return this.parseRaw();case"verbatim":return this.parseRaw("verbatim");case"if":case"ifAsync":return this.parseIf();case"for":case"asyncEach":case"asyncAll":return this.parseFor();case"block":return this.parseBlock();case"extends":return this.parseExtends();case"include":return this.parseInclude();case"set":return this.parseSet();case"macro":return this.parseMacro();case"call":return this.parseCall();case"import":return this.parseImport();case"from":return this.parseFrom();case"filter":return this.parseFilterStatement();case"switch":return this.parseSwitch();default:if(this.extensions.length)for(var v=0;v<this.extensions.length;v++){var E=this.extensions[v];if(u.indexOf(E.tags||[],d.value)!==-1)return E.parse(this,l,a)}this.fail("unknown block tag: "+d.value,d.lineno,d.colno)}return h},g.parseRaw=function(d){d=d||"raw";for(var h="end"+d,v=new RegExp("([\\s\\S]*?){%\\s*("+d+"|"+h+")\\s*(?=%})%}"),E=1,w="",C=null,S=this.advanceAfterBlockEnd();(C=this.tokens._extractRegex(v))&&E>0;){var b=C[0],U=C[1],y=C[2];y===d?E+=1:y===h&&(E-=1),E===0?(w+=U,this.tokens.backN(b.length-U.length)):w+=b}return new l.Output(S.lineno,S.colno,[new l.TemplateData(S.lineno,S.colno,w)])},g.parsePostfix=function(d){for(var h,v=this.peekToken();v;){if(v.type===a.TOKEN_LEFT_PAREN)d=new l.FunCall(v.lineno,v.colno,d,this.parseSignature());else if(v.type===a.TOKEN_LEFT_BRACKET)h=this.parseAggregate(),h.children.length>1&&this.fail("invalid index"),d=new l.LookupVal(v.lineno,v.colno,d,h.children[0]);else if(v.type===a.TOKEN_OPERATOR&&v.value==="."){this.nextToken();var E=this.nextToken();E.type!==a.TOKEN_SYMBOL&&this.fail("expected name as lookup value, got "+E.value,E.lineno,E.colno),h=new l.Literal(E.lineno,E.colno,E.value),d=new l.LookupVal(v.lineno,v.colno,d,h)}else break;v=this.peekToken()}return d},g.parseExpression=function(){var d=this.parseInlineIf();return d},g.parseInlineIf=function(){var d=this.parseOr();if(this.skipSymbol("if")){var h=this.parseOr(),v=d;d=new l.InlineIf(d.lineno,d.colno),d.body=v,d.cond=h,this.skipSymbol("else")?d.else_=this.parseOr():d.else_=null}return d},g.parseOr=function(){for(var d=this.parseAnd();this.skipSymbol("or");){var h=this.parseAnd();d=new l.Or(d.lineno,d.colno,d,h)}return d},g.parseAnd=function(){for(var d=this.parseNot();this.skipSymbol("and");){var h=this.parseNot();d=new l.And(d.lineno,d.colno,d,h)}return d},g.parseNot=function(){var d=this.peekToken();return this.skipSymbol("not")?new l.Not(d.lineno,d.colno,this.parseNot()):this.parseIn()},g.parseIn=function(){for(var d=this.parseIs();;){var h=this.nextToken();if(!h)break;var v=h.type===a.TOKEN_SYMBOL&&h.value==="not";if(v||this.pushToken(h),this.skipSymbol("in")){var E=this.parseIs();d=new l.In(d.lineno,d.colno,d,E),v&&(d=new l.Not(d.lineno,d.colno,d))}else{v&&this.pushToken(h);break}}return d},g.parseIs=function(){var d=this.parseCompare();if(this.skipSymbol("is")){var h=this.skipSymbol("not"),v=this.parseCompare();d=new l.Is(d.lineno,d.colno,d,v),h&&(d=new l.Not(d.lineno,d.colno,d))}return d},g.parseCompare=function(){for(var d=["==","===","!=","!==","<",">","<=",">="],h=this.parseConcat(),v=[];;){var E=this.nextToken();if(E)if(d.indexOf(E.value)!==-1)v.push(new l.CompareOperand(E.lineno,E.colno,this.parseConcat(),E.value));else{this.pushToken(E);break}else break}return v.length?new l.Compare(v[0].lineno,v[0].colno,h,v):h},g.parseConcat=function(){for(var d=this.parseAdd();this.skipValue(a.TOKEN_TILDE,"~");){var h=this.parseAdd();d=new l.Concat(d.lineno,d.colno,d,h)}return d},g.parseAdd=function(){for(var d=this.parseSub();this.skipValue(a.TOKEN_OPERATOR,"+");){var h=this.parseSub();d=new l.Add(d.lineno,d.colno,d,h)}return d},g.parseSub=function(){for(var d=this.parseMul();this.skipValue(a.TOKEN_OPERATOR,"-");){var h=this.parseMul();d=new l.Sub(d.lineno,d.colno,d,h)}return d},g.parseMul=function(){for(var d=this.parseDiv();this.skipValue(a.TOKEN_OPERATOR,"*");){var h=this.parseDiv();d=new l.Mul(d.lineno,d.colno,d,h)}return d},g.parseDiv=function(){for(var d=this.parseFloorDiv();this.skipValue(a.TOKEN_OPERATOR,"/");){var h=this.parseFloorDiv();d=new l.Div(d.lineno,d.colno,d,h)}return d},g.parseFloorDiv=function(){for(var d=this.parseMod();this.skipValue(a.TOKEN_OPERATOR,"//");){var h=this.parseMod();d=new l.FloorDiv(d.lineno,d.colno,d,h)}return d},g.parseMod=function(){for(var d=this.parsePow();this.skipValue(a.TOKEN_OPERATOR,"%");){var h=this.parsePow();d=new l.Mod(d.lineno,d.colno,d,h)}return d},g.parsePow=function(){for(var d=this.parseUnary();this.skipValue(a.TOKEN_OPERATOR,"**");){var h=this.parseUnary();d=new l.Pow(d.lineno,d.colno,d,h)}return d},g.parseUnary=function(d){var h=this.peekToken(),v;return this.skipValue(a.TOKEN_OPERATOR,"-")?v=new l.Neg(h.lineno,h.colno,this.parseUnary(!0)):this.skipValue(a.TOKEN_OPERATOR,"+")?v=new l.Pos(h.lineno,h.colno,this.parseUnary(!0)):v=this.parsePrimary(),d||(v=this.parseFilter(v)),v},g.parsePrimary=function(d){var h=this.nextToken(),v,E=null;if(h?h.type===a.TOKEN_STRING?v=h.value:h.type===a.TOKEN_INT?v=parseInt(h.value,10):h.type===a.TOKEN_FLOAT?v=parseFloat(h.value):h.type===a.TOKEN_BOOLEAN?h.value==="true"?v=!0:h.value==="false"?v=!1:this.fail("invalid boolean: "+h.value,h.lineno,h.colno):h.type===a.TOKEN_NONE?v=null:h.type===a.TOKEN_REGEX&&(v=new RegExp(h.value.body,h.value.flags)):this.fail("expected expression, got end of file"),v!==void 0?E=new l.Literal(h.lineno,h.colno,v):h.type===a.TOKEN_SYMBOL?E=new l.Symbol(h.lineno,h.colno,h.value):(this.pushToken(h),E=this.parseAggregate()),d||(E=this.parsePostfix(E)),E)return E;throw this.error("unexpected token: "+h.value,h.lineno,h.colno)},g.parseFilterName=function(){for(var d=this.expect(a.TOKEN_SYMBOL),h=d.value;this.skipValue(a.TOKEN_OPERATOR,".");)h+="."+this.expect(a.TOKEN_SYMBOL).value;return new l.Symbol(d.lineno,d.colno,h)},g.parseFilterArgs=function(d){if(this.peekToken().type===a.TOKEN_LEFT_PAREN){var h=this.parsePostfix(d);return h.args.children}return[]},g.parseFilter=function(d){for(;this.skip(a.TOKEN_PIPE);){var h=this.parseFilterName();d=new l.Filter(h.lineno,h.colno,h,new l.NodeList(h.lineno,h.colno,[d].concat(this.parseFilterArgs(d))))}return d},g.parseFilterStatement=function(){var d=this.peekToken();this.skipSymbol("filter")||this.fail("parseFilterStatement: expected filter");var h=this.parseFilterName(),v=this.parseFilterArgs(h);this.advanceAfterBlockEnd(d.value);var E=new l.Capture(h.lineno,h.colno,this.parseUntilBlocks("endfilter"));this.advanceAfterBlockEnd();var w=new l.Filter(h.lineno,h.colno,h,new l.NodeList(h.lineno,h.colno,[E].concat(v)));return new l.Output(h.lineno,h.colno,[w])},g.parseAggregate=function(){var d=this.nextToken(),h;switch(d.type){case a.TOKEN_LEFT_PAREN:h=new l.Group(d.lineno,d.colno);break;case a.TOKEN_LEFT_BRACKET:h=new l.Array(d.lineno,d.colno);break;case a.TOKEN_LEFT_CURLY:h=new l.Dict(d.lineno,d.colno);break;default:return null}for(;;){var v=this.peekToken().type;if(v===a.TOKEN_RIGHT_PAREN||v===a.TOKEN_RIGHT_BRACKET||v===a.TOKEN_RIGHT_CURLY){this.nextToken();break}if(h.children.length>0&&(this.skip(a.TOKEN_COMMA)||this.fail("parseAggregate: expected comma after expression",d.lineno,d.colno)),h instanceof l.Dict){var E=this.parsePrimary();this.skip(a.TOKEN_COLON)||this.fail("parseAggregate: expected colon after dict key",d.lineno,d.colno);var w=this.parseExpression();h.addChild(new l.Pair(E.lineno,E.colno,E,w))}else{var C=this.parseExpression();h.addChild(C)}}return h},g.parseSignature=function(d,h){var v=this.peekToken();if(!h&&v.type!==a.TOKEN_LEFT_PAREN){if(d)return null;this.fail("expected arguments",v.lineno,v.colno)}v.type===a.TOKEN_LEFT_PAREN&&(v=this.nextToken());for(var E=new l.NodeList(v.lineno,v.colno),w=new l.KeywordArgs(v.lineno,v.colno),C=!1;;){if(v=this.peekToken(),!h&&v.type===a.TOKEN_RIGHT_PAREN){this.nextToken();break}else if(h&&v.type===a.TOKEN_BLOCK_END)break;if(C&&!this.skip(a.TOKEN_COMMA))this.fail("parseSignature: expected comma after expression",v.lineno,v.colno);else{var S=this.parseExpression();this.skipValue(a.TOKEN_OPERATOR,"=")?w.addChild(new l.Pair(S.lineno,S.colno,S,this.parseExpression())):E.addChild(S)}C=!0}return w.children.length&&E.addChild(w),E},g.parseUntilBlocks=function(){for(var d=this.breakOnBlocks,h=arguments.length,v=new Array(h),E=0;E<h;E++)v[E]=arguments[E];this.breakOnBlocks=v;var w=this.parse();return this.breakOnBlocks=d,w},g.parseNodes=function(){for(var d,h=[];d=this.nextToken();)if(d.type===a.TOKEN_DATA){var v=d.value,E=this.peekToken(),w=E&&E.value;this.dropLeadingWhitespace&&(v=v.replace(/^\s*/,""),this.dropLeadingWhitespace=!1),E&&(E.type===a.TOKEN_BLOCK_START&&w.charAt(w.length-1)==="-"||E.type===a.TOKEN_VARIABLE_START&&w.charAt(this.tokens.tags.VARIABLE_START.length)==="-"||E.type===a.TOKEN_COMMENT&&w.charAt(this.tokens.tags.COMMENT_START.length)==="-")&&(v=v.replace(/\s*$/,"")),h.push(new l.Output(d.lineno,d.colno,[new l.TemplateData(d.lineno,d.colno,v)]))}else if(d.type===a.TOKEN_BLOCK_START){this.dropLeadingWhitespace=!1;var C=this.parseStatement();if(!C)break;h.push(C)}else if(d.type===a.TOKEN_VARIABLE_START){var S=this.parseExpression();this.dropLeadingWhitespace=!1,this.advanceAfterVariableEnd(),h.push(new l.Output(d.lineno,d.colno,[S]))}else d.type===a.TOKEN_COMMENT?this.dropLeadingWhitespace=d.value.charAt(d.value.length-this.tokens.tags.COMMENT_END.length-1)==="-":this.fail("Unexpected token at top-level: "+d.type,d.lineno,d.colno);return h},g.parse=function(){return new l.NodeList(0,0,this.parseNodes())},g.parseAsRoot=function(){return new l.Root(0,0,this.parseNodes())},p})(c);t.exports={parse:function(p,g,A){var d=new f(a.lex(p,A));return g!==void 0&&(d.extensions=g),d.parseAsRoot()},Parser:f}}),(function(t,i,s){var n=s(0),o=` 
	\r `,a="()[]{}%*-+~/#,:|.<>=!",l="0123456789",c="{%",u="%}",f="{{",m="}}",p="{#",g="#}",A="string",d="whitespace",h="data",v="block-start",E="block-end",w="variable-start",C="variable-end",S="comment",b="left-paren",U="right-paren",y="left-bracket",_="right-bracket",x="left-curly",T="right-curly",R="operator",Q="comma",N="colon",k="tilde",F="pipe",M="int",B="float",P="boolean",K="none",te="symbol",ce="special",W="regex";function X(ae,he,me,oe){return{type:ae,value:he,lineno:me,colno:oe}}var ue=(function(){function ae(me,oe){this.str=me,this.index=0,this.len=me.length,this.lineno=0,this.colno=0,this.in_code=!1,oe=oe||{};var we=oe.tags||{};this.tags={BLOCK_START:we.blockStart||c,BLOCK_END:we.blockEnd||u,VARIABLE_START:we.variableStart||f,VARIABLE_END:we.variableEnd||m,COMMENT_START:we.commentStart||p,COMMENT_END:we.commentEnd||g},this.trimBlocks=!!oe.trimBlocks,this.lstripBlocks=!!oe.lstripBlocks}var he=ae.prototype;return he.nextToken=function(){var oe=this.lineno,we=this.colno,ge;if(this.in_code){var Fe=this.current();if(this.isFinished())return null;if(Fe==='"'||Fe==="'")return X(A,this._parseString(Fe),oe,we);if(ge=this._extract(o))return X(d,ge,oe,we);if((ge=this._extractString(this.tags.BLOCK_END))||(ge=this._extractString("-"+this.tags.BLOCK_END)))return this.in_code=!1,this.trimBlocks&&(Fe=this.current(),Fe===`
`?this.forward():Fe==="\r"&&(this.forward(),Fe=this.current(),Fe===`
`?this.forward():this.back())),X(E,ge,oe,we);if((ge=this._extractString(this.tags.VARIABLE_END))||(ge=this._extractString("-"+this.tags.VARIABLE_END)))return this.in_code=!1,X(C,ge,oe,we);if(Fe==="r"&&this.str.charAt(this.index+1)==="/"){this.forwardN(2);for(var z="";!this.isFinished();)if(this.current()==="/"&&this.previous()!=="\\"){this.forward();break}else z+=this.current(),this.forward();for(var qe=["g","i","m","y"],Ne="";!this.isFinished();){var V=qe.indexOf(this.current())!==-1;if(V)Ne+=this.current(),this.forward();else break}return X(W,{body:z,flags:Ne},oe,we)}else if(a.indexOf(Fe)!==-1){this.forward();var Y=["==","===","!=","!==","<=",">=","//","**"],fe=Fe+this.current(),ie;switch(n.indexOf(Y,fe)!==-1&&(this.forward(),Fe=fe,n.indexOf(Y,fe+this.current())!==-1&&(Fe=fe+this.current(),this.forward())),Fe){case"(":ie=b;break;case")":ie=U;break;case"[":ie=y;break;case"]":ie=_;break;case"{":ie=x;break;case"}":ie=T;break;case",":ie=Q;break;case":":ie=N;break;case"~":ie=k;break;case"|":ie=F;break;default:ie=R}return X(ie,Fe,oe,we)}else if(ge=this._extractUntil(o+a),ge.match(/^[-+]?[0-9]+$/))if(this.current()==="."){this.forward();var D=this._extract(l);return X(B,ge+"."+D,oe,we)}else return X(M,ge,oe,we);else{if(ge.match(/^(true|false)$/))return X(P,ge,oe,we);if(ge==="none")return X(K,ge,oe,we);if(ge==="null")return X(K,ge,oe,we);if(ge)return X(te,ge,oe,we);throw new Error("Unexpected value while parsing: "+ge)}}else{var I=this.tags.BLOCK_START.charAt(0)+this.tags.VARIABLE_START.charAt(0)+this.tags.COMMENT_START.charAt(0)+this.tags.COMMENT_END.charAt(0);if(this.isFinished())return null;if((ge=this._extractString(this.tags.BLOCK_START+"-"))||(ge=this._extractString(this.tags.BLOCK_START)))return this.in_code=!0,X(v,ge,oe,we);if((ge=this._extractString(this.tags.VARIABLE_START+"-"))||(ge=this._extractString(this.tags.VARIABLE_START)))return this.in_code=!0,X(w,ge,oe,we);ge="";var G,q=!1;for(this._matches(this.tags.COMMENT_START)&&(q=!0,ge=this._extractString(this.tags.COMMENT_START));(G=this._extractUntil(I))!==null;)if(ge+=G,(this._matches(this.tags.BLOCK_START)||this._matches(this.tags.VARIABLE_START)||this._matches(this.tags.COMMENT_START))&&!q){if(this.lstripBlocks&&this._matches(this.tags.BLOCK_START)&&this.colno>0&&this.colno<=ge.length){var se=ge.slice(-this.colno);if(/^\s+$/.test(se)&&(ge=ge.slice(0,-this.colno),!ge.length))return this.nextToken()}break}else if(this._matches(this.tags.COMMENT_END)){if(!q)throw new Error("unexpected end of comment");ge+=this._extractString(this.tags.COMMENT_END);break}else ge+=this.current(),this.forward();if(G===null&&q)throw new Error("expected end of comment, got end of file");return X(q?S:h,ge,oe,we)}},he._parseString=function(oe){this.forward();for(var we="";!this.isFinished()&&this.current()!==oe;){var ge=this.current();if(ge==="\\"){switch(this.forward(),this.current()){case"n":we+=`
`;break;case"t":we+="	";break;case"r":we+="\r";break;default:we+=this.current()}this.forward()}else we+=ge,this.forward()}return this.forward(),we},he._matches=function(oe){if(this.index+oe.length>this.len)return null;var we=this.str.slice(this.index,this.index+oe.length);return we===oe},he._extractString=function(oe){return this._matches(oe)?(this.forwardN(oe.length),oe):null},he._extractUntil=function(oe){return this._extractMatching(!0,oe||"")},he._extract=function(oe){return this._extractMatching(!1,oe)},he._extractMatching=function(oe,we){if(this.isFinished())return null;var ge=we.indexOf(this.current());if(oe&&ge===-1||!oe&&ge!==-1){var Fe=this.current();this.forward();for(var z=we.indexOf(this.current());(oe&&z===-1||!oe&&z!==-1)&&!this.isFinished();)Fe+=this.current(),this.forward(),z=we.indexOf(this.current());return Fe}return""},he._extractRegex=function(oe){var we=this.currentStr().match(oe);return we?(this.forwardN(we[0].length),we):null},he.isFinished=function(){return this.index>=this.len},he.forwardN=function(oe){for(var we=0;we<oe;we++)this.forward()},he.forward=function(){this.index++,this.previous()===`
`?(this.lineno++,this.colno=0):this.colno++},he.backN=function(oe){for(var we=0;we<oe;we++)this.back()},he.back=function(){if(this.index--,this.current()===`
`){this.lineno--;var oe=this.src.lastIndexOf(`
`,this.index-1);oe===-1?this.colno=this.index:this.colno=this.index-oe}else this.colno--},he.current=function(){return this.isFinished()?"":this.str.charAt(this.index)},he.currentStr=function(){return this.isFinished()?"":this.str.substr(this.index)},he.previous=function(){return this.str.charAt(this.index-1)},ae})();t.exports={lex:function(he,me){return new ue(he,me)},TOKEN_STRING:A,TOKEN_WHITESPACE:d,TOKEN_DATA:h,TOKEN_BLOCK_START:v,TOKEN_BLOCK_END:E,TOKEN_VARIABLE_START:w,TOKEN_VARIABLE_END:C,TOKEN_COMMENT:S,TOKEN_LEFT_PAREN:b,TOKEN_RIGHT_PAREN:U,TOKEN_LEFT_BRACKET:y,TOKEN_RIGHT_BRACKET:_,TOKEN_LEFT_CURLY:x,TOKEN_RIGHT_CURLY:T,TOKEN_OPERATOR:R,TOKEN_COMMA:Q,TOKEN_COLON:N,TOKEN_TILDE:k,TOKEN_PIPE:F,TOKEN_INT:M,TOKEN_FLOAT:B,TOKEN_BOOLEAN:P,TOKEN_NONE:K,TOKEN_SYMBOL:te,TOKEN_SPECIAL:ce,TOKEN_REGEX:W}}),(function(t,i,s){function n(f,m){f.prototype=Object.create(m.prototype),f.prototype.constructor=f,o(f,m)}function o(f,m){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,A){return g.__proto__=A,g},o(f,m)}var a=s(6),l=s(19),c=l.PrecompiledLoader,u=(function(f){n(m,f);function m(g,A){var d;return d=f.call(this)||this,d.baseURL=g||".",A=A||{},d.useCache=!!A.useCache,d.async=!!A.async,d}var p=m.prototype;return p.resolve=function(A,d){throw new Error("relative templates not support in the browser yet")},p.getSource=function(A,d){var h=this,v=this.useCache,E;return this.fetch(this.baseURL+"/"+A,function(w,C){if(w)if(d)d(w.content);else if(w.status===404)E=null;else throw w.content;else E={src:C,path:A,noCache:!v},h.emit("load",A,E),d&&d(null,E)}),E},p.fetch=function(A,d){if(typeof window>"u")throw new Error("WebLoader can only by used in a browser");var h=new XMLHttpRequest,v=!0;h.onreadystatechange=function(){h.readyState===4&&v&&(v=!1,h.status===0||h.status===200?d(null,h.responseText):d({status:h.status,content:h.responseText}))},A+=(A.indexOf("?")===-1?"?":"&")+"s="+new Date().getTime(),h.open("GET",A,this.async),h.send()},m})(a);t.exports={WebLoader:u,PrecompiledLoader:c}}),(function(t,i,s){var n=s(0),o=s(7),a=o.Environment,l=o.Template,c=s(6),u=s(10),f=s(23),m=s(5),p=s(8),g=s(9),A=s(2),d=s(3),h=s(25),v;function E(w,C){C=C||{},n.isObject(w)&&(C=w,w=null);var S;return u.FileSystemLoader?S=new u.FileSystemLoader(w,{watch:C.watch,noCache:C.noCache}):u.WebLoader&&(S=new u.WebLoader(w,{useCache:C.web&&C.web.useCache,async:C.web&&C.web.async})),v=new a(S,C),C&&C.express&&v.express(C.express),v}t.exports={Environment:a,Template:l,Loader:c,FileSystemLoader:u.FileSystemLoader,NodeResolveLoader:u.NodeResolveLoader,PrecompiledLoader:u.PrecompiledLoader,WebLoader:u.WebLoader,compiler:m,parser:p,lexer:g,runtime:A,lib:n,nodes:d,installJinjaCompat:h,configure:E,reset:function(){v=void 0},compile:function(C,S,b,U){return v||E(),new l(C,S,b,U)},render:function(C,S,b){return v||E(),v.render(C,S,b)},renderString:function(C,S,b){return v||E(),v.renderString(C,S,b)},precompile:f?f.precompile:void 0,precompileString:f?f.precompileString:void 0}}),(function(t,i,s){var n=s(13),o=[],a=[],l=n.makeRequestCallFromTimer(c);function c(){if(a.length)throw a.shift()}t.exports=u;function u(m){var p;o.length?p=o.pop():p=new f,p.task=m,n(p)}function f(){this.task=null}f.prototype.call=function(){try{this.task.call()}catch(m){u.onerror?u.onerror(m):(a.push(m),l())}finally{this.task=null,o[o.length]=this}}}),(function(t,i,s){(function(n){t.exports=o;function o(d){a.length||l(),a[a.length]=d}var a=[],l,c=0,u=1024;function f(){for(;c<a.length;){var d=c;if(c=c+1,a[d].call(),c>u){for(var h=0,v=a.length-c;h<v;h++)a[h]=a[h+c];a.length-=c,c=0}}a.length=0,c=0}var m=typeof n<"u"?n:self,p=m.MutationObserver||m.WebKitMutationObserver;typeof p=="function"?l=g(f):l=A(f),o.requestFlush=l;function g(d){var h=1,v=new p(d),E=document.createTextNode("");return v.observe(E,{characterData:!0}),function(){h=-h,E.data=h}}function A(d){return function(){var v=setTimeout(w,0),E=setInterval(w,50);function w(){clearTimeout(v),clearInterval(E),d()}}}o.makeRequestCallFromTimer=A}).call(i,s(14))}),(function(t,i){var s;s=(function(){return this})();try{s=s||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(s=window)}t.exports=s}),(function(t,i,s){var n,o;(function(a){var l=function(){var p=Array.prototype.slice.call(arguments);typeof p[0]=="function"&&p[0].apply(null,p.splice(1))},c=function(p){typeof setImmediate=="function"?setImmediate(p):typeof process<"u"&&process.nextTick?process.nextTick(p):setTimeout(p,0)},u=function(p){var g=function(A){var d=function(){return p.length&&p[A].apply(null,arguments),d.next()};return d.next=function(){return A<p.length-1?g(A+1):null},d};return g(0)},f=Array.isArray||function(p){return Object.prototype.toString.call(p)==="[object Array]"},m=function(p,g,A){var d=A?c:l;if(g=g||function(){},!f(p)){var h=new Error("First argument to waterfall must be an array of functions");return g(h)}if(!p.length)return g();var v=function(E){return function(w){if(w)g.apply(null,arguments),g=function(){};else{var C=Array.prototype.slice.call(arguments,1),S=E.next();S?C.push(v(S)):C.push(g),d(function(){E.apply(null,C)})}}};v(u(p))()};n=[],o=(function(){return m}).apply(i,n),o!==void 0&&(t.exports=o)})()}),(function(t,i,s){var n=typeof Reflect=="object"?Reflect:null,o=n&&typeof n.apply=="function"?n.apply:function(_,x,T){return Function.prototype.apply.call(_,x,T)},a;n&&typeof n.ownKeys=="function"?a=n.ownKeys:Object.getOwnPropertySymbols?a=function(_){return Object.getOwnPropertyNames(_).concat(Object.getOwnPropertySymbols(_))}:a=function(_){return Object.getOwnPropertyNames(_)};function l(y){console&&console.warn&&console.warn(y)}var c=Number.isNaN||function(_){return _!==_};function u(){u.init.call(this)}t.exports=u,t.exports.once=S,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var f=10;function m(y){if(typeof y!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof y)}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(y){if(typeof y!="number"||y<0||c(y))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+y+".");f=y}}),u.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(_){if(typeof _!="number"||_<0||c(_))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+_+".");return this._maxListeners=_,this};function p(y){return y._maxListeners===void 0?u.defaultMaxListeners:y._maxListeners}u.prototype.getMaxListeners=function(){return p(this)},u.prototype.emit=function(_){for(var x=[],T=1;T<arguments.length;T++)x.push(arguments[T]);var R=_==="error",Q=this._events;if(Q!==void 0)R=R&&Q.error===void 0;else if(!R)return!1;if(R){var N;if(x.length>0&&(N=x[0]),N instanceof Error)throw N;var k=new Error("Unhandled error."+(N?" ("+N.message+")":""));throw k.context=N,k}var F=Q[_];if(F===void 0)return!1;if(typeof F=="function")o(F,this,x);else for(var M=F.length,B=E(F,M),T=0;T<M;++T)o(B[T],this,x);return!0};function g(y,_,x,T){var R,Q,N;if(m(x),Q=y._events,Q===void 0?(Q=y._events=Object.create(null),y._eventsCount=0):(Q.newListener!==void 0&&(y.emit("newListener",_,x.listener?x.listener:x),Q=y._events),N=Q[_]),N===void 0)N=Q[_]=x,++y._eventsCount;else if(typeof N=="function"?N=Q[_]=T?[x,N]:[N,x]:T?N.unshift(x):N.push(x),R=p(y),R>0&&N.length>R&&!N.warned){N.warned=!0;var k=new Error("Possible EventEmitter memory leak detected. "+N.length+" "+String(_)+" listeners added. Use emitter.setMaxListeners() to increase limit");k.name="MaxListenersExceededWarning",k.emitter=y,k.type=_,k.count=N.length,l(k)}return y}u.prototype.addListener=function(_,x){return g(this,_,x,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(_,x){return g(this,_,x,!0)};function A(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(y,_,x){var T={fired:!1,wrapFn:void 0,target:y,type:_,listener:x},R=A.bind(T);return R.listener=x,T.wrapFn=R,R}u.prototype.once=function(_,x){return m(x),this.on(_,d(this,_,x)),this},u.prototype.prependOnceListener=function(_,x){return m(x),this.prependListener(_,d(this,_,x)),this},u.prototype.removeListener=function(_,x){var T,R,Q,N,k;if(m(x),R=this._events,R===void 0)return this;if(T=R[_],T===void 0)return this;if(T===x||T.listener===x)--this._eventsCount===0?this._events=Object.create(null):(delete R[_],R.removeListener&&this.emit("removeListener",_,T.listener||x));else if(typeof T!="function"){for(Q=-1,N=T.length-1;N>=0;N--)if(T[N]===x||T[N].listener===x){k=T[N].listener,Q=N;break}if(Q<0)return this;Q===0?T.shift():w(T,Q),T.length===1&&(R[_]=T[0]),R.removeListener!==void 0&&this.emit("removeListener",_,k||x)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(_){var x,T,R;if(T=this._events,T===void 0)return this;if(T.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):T[_]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete T[_]),this;if(arguments.length===0){var Q=Object.keys(T),N;for(R=0;R<Q.length;++R)N=Q[R],N!=="removeListener"&&this.removeAllListeners(N);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(x=T[_],typeof x=="function")this.removeListener(_,x);else if(x!==void 0)for(R=x.length-1;R>=0;R--)this.removeListener(_,x[R]);return this};function h(y,_,x){var T=y._events;if(T===void 0)return[];var R=T[_];return R===void 0?[]:typeof R=="function"?x?[R.listener||R]:[R]:x?C(R):E(R,R.length)}u.prototype.listeners=function(_){return h(this,_,!0)},u.prototype.rawListeners=function(_){return h(this,_,!1)},u.listenerCount=function(y,_){return typeof y.listenerCount=="function"?y.listenerCount(_):v.call(y,_)},u.prototype.listenerCount=v;function v(y){var _=this._events;if(_!==void 0){var x=_[y];if(typeof x=="function")return 1;if(x!==void 0)return x.length}return 0}u.prototype.eventNames=function(){return this._eventsCount>0?a(this._events):[]};function E(y,_){for(var x=new Array(_),T=0;T<_;++T)x[T]=y[T];return x}function w(y,_){for(;_+1<y.length;_++)y[_]=y[_+1];y.pop()}function C(y){for(var _=new Array(y.length),x=0;x<_.length;++x)_[x]=y[x].listener||y[x];return _}function S(y,_){return new Promise(function(x,T){function R(N){y.removeListener(_,Q),T(N)}function Q(){typeof y.removeListener=="function"&&y.removeListener("error",R),x([].slice.call(arguments))}U(y,_,Q,{once:!0}),_!=="error"&&b(y,R,{once:!0})})}function b(y,_,x){typeof y.on=="function"&&U(y,"error",_,x)}function U(y,_,x,T){if(typeof y.on=="function")T.once?y.once(_,x):y.on(_,x);else if(typeof y.addEventListener=="function")y.addEventListener(_,function R(Q){T.once&&y.removeEventListener(_,R),x(Q)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof y)}}),(function(t,i,s){var n=s(3),o=s(0),a=0;function l(){return"hole_"+a++}function c(v,E){for(var w=null,C=0;C<v.length;C++){var S=E(v[C]);S!==v[C]&&(w||(w=v.slice()),w[C]=S)}return w||v}function u(v,E,w){if(!(v instanceof n.Node))return v;if(!w){var C=E(v);if(C&&C!==v)return C}if(v instanceof n.NodeList){var S=c(v.children,function(x){return u(x,E,w)});S!==v.children&&(v=new n[v.typename](v.lineno,v.colno,S))}else if(v instanceof n.CallExtension){var b=u(v.args,E,w),U=c(v.contentArgs,function(x){return u(x,E,w)});(b!==v.args||U!==v.contentArgs)&&(v=new n[v.typename](v.extName,v.prop,b,U))}else{var y=v.fields.map(function(x){return v[x]}),_=c(y,function(x){return u(x,E,w)});_!==y&&(v=new n[v.typename](v.lineno,v.colno),_.forEach(function(x,T){v[v.fields[T]]=x}))}return w&&E(v)||v}function f(v,E){return u(v,E,!0)}function m(v,E,w){var C=[],S=f(w?v[w]:v,function(b){var U;return b instanceof n.Block?b:((b instanceof n.Filter&&o.indexOf(E,b.name.value)!==-1||b instanceof n.CallExtensionAsync)&&(U=new n.Symbol(b.lineno,b.colno,l()),C.push(new n.FilterAsync(b.lineno,b.colno,b.name,b.args,U))),U)});return w?v[w]=S:v=S,C.length?(C.push(v),new n.NodeList(v.lineno,v.colno,C)):v}function p(v,E){return f(v,function(w){return w instanceof n.Output?m(w,E):w instanceof n.Set?m(w,E,"value"):w instanceof n.For?m(w,E,"arr"):w instanceof n.If?m(w,E,"cond"):w instanceof n.CallExtension?m(w,E,"args"):void 0})}function g(v){return u(v,function(E){if(E instanceof n.Block){var w=!1,C=l();E.body=u(E.body,function(S){if(S instanceof n.FunCall&&S.name.value==="super")return w=!0,new n.Symbol(S.lineno,S.colno,C)}),w&&E.body.children.unshift(new n.Super(0,0,E.name,new n.Symbol(0,0,C)))}})}function A(v){return f(v,function(E){if(!(!(E instanceof n.If)&&!(E instanceof n.For))){var w=!1;if(u(E,function(C){if(C instanceof n.FilterAsync||C instanceof n.IfAsync||C instanceof n.AsyncEach||C instanceof n.AsyncAll||C instanceof n.CallExtensionAsync)return w=!0,C}),w){if(E instanceof n.If)return new n.IfAsync(E.lineno,E.colno,E.cond,E.body,E.else_);if(E instanceof n.For&&!(E instanceof n.AsyncAll))return new n.AsyncEach(E.lineno,E.colno,E.arr,E.name,E.body,E.else_)}}})}function d(v,E){return A(g(p(v,E)))}function h(v,E){return d(v,E||[])}t.exports={transform:h}}),(function(t,a,s){var n=s(0),o=s(2),a=t.exports={};function l(V,Y){return V==null||V===!1?Y:V}a.abs=Math.abs;function c(V){return V!==V}function u(V,Y,fe){var ie,D=[],I=[];for(ie=0;ie<V.length;ie++)ie%Y===0&&I.length&&(D.push(I),I=[]),I.push(V[ie]);if(I.length){if(fe)for(ie=I.length;ie<Y;ie++)I.push(fe);D.push(I)}return D}a.batch=u;function f(V){V=l(V,"");var Y=V.toLowerCase();return o.copySafeness(V,Y.charAt(0).toUpperCase()+Y.slice(1))}a.capitalize=f;function m(V,Y){if(V=l(V,""),Y=Y||80,V.length>=Y)return V;var fe=Y-V.length,ie=n.repeat(" ",fe/2-fe%2),D=n.repeat(" ",fe/2);return o.copySafeness(V,ie+V+D)}a.center=m;function p(V,Y,fe){return fe?V||Y:V!==void 0?V:Y}a.default=p;function g(V,Y,fe){if(!n.isObject(V))throw new n.TemplateError("dictsort filter: val must be an object");var ie=[];for(var D in V)ie.push([D,V[D]]);var I;if(fe===void 0||fe==="key")I=0;else if(fe==="value")I=1;else throw new n.TemplateError("dictsort filter: You can only sort by either key or value");return ie.sort(function(G,q){var se=G[I],ne=q[I];return Y||(n.isString(se)&&(se=se.toUpperCase()),n.isString(ne)&&(ne=ne.toUpperCase())),se>ne?1:se===ne?0:-1}),ie}a.dictsort=g;function A(V,Y){return JSON.stringify(V,null,Y)}a.dump=A;function d(V){return V instanceof o.SafeString?V:(V=V??"",o.markSafe(n.escape(V.toString())))}a.escape=d;function h(V){return V instanceof o.SafeString?V:(V=V??"",o.markSafe(V.toString()))}a.safe=h;function v(V){return V[0]}a.first=v;function E(V){return V=V??"",o.markSafe(n.escape(V.toString()))}a.forceescape=E;function w(V,Y){return n.groupBy(V,Y,this.env.opts.throwOnUndefined)}a.groupby=w;function C(V,Y,fe){if(V=l(V,""),V==="")return"";Y=Y||4;var ie=V.split(`
`),D=n.repeat(" ",Y),I=ie.map(function(G,q){return q===0&&!fe?G:""+D+G}).join(`
`);return o.copySafeness(V,I)}a.indent=C;function S(V,Y,fe){return Y=Y||"",fe&&(V=n.map(V,function(ie){return ie[fe]})),V.join(Y)}a.join=S;function b(V){return V[V.length-1]}a.last=b;function U(V){var Y=l(V,"");return Y!==void 0?typeof Map=="function"&&Y instanceof Map||typeof Set=="function"&&Y instanceof Set?Y.size:n.isObject(Y)&&!(Y instanceof o.SafeString)?n.keys(Y).length:Y.length:0}a.length=U;function y(V){if(n.isString(V))return V.split("");if(n.isObject(V))return n._entries(V||{}).map(function(Y){var fe=Y[0],ie=Y[1];return{key:fe,value:ie}});if(n.isArray(V))return V;throw new n.TemplateError("list filter: type not iterable")}a.list=y;function _(V){return V=l(V,""),V.toLowerCase()}a.lower=_;function x(V){return V==null?"":o.copySafeness(V,V.replace(/\r\n|\n/g,`<br />
`))}a.nl2br=x;function T(V){return V[Math.floor(Math.random()*V.length)]}a.random=T;function R(V){function Y(fe,ie,D){ie===void 0&&(ie="truthy");var I=this,G=I.env.getTest(ie);return n.toArray(fe).filter(function(se){return G.call(I,se,D)===V})}return Y}a.reject=R(!1);function Q(V,Y){return V.filter(function(fe){return!fe[Y]})}a.rejectattr=Q,a.select=R(!0);function N(V,Y){return V.filter(function(fe){return!!fe[Y]})}a.selectattr=N;function k(V,Y,fe,ie){var D=V;if(Y instanceof RegExp)return V.replace(Y,fe);typeof ie>"u"&&(ie=-1);var I="";if(typeof Y=="number")Y=""+Y;else if(typeof Y!="string")return V;if(typeof V=="number"&&(V=""+V),typeof V!="string"&&!(V instanceof o.SafeString))return V;if(Y==="")return I=fe+V.split("").join(fe)+fe,o.copySafeness(V,I);var G=V.indexOf(Y);if(ie===0||G===-1)return V;for(var q=0,se=0;G>-1&&(ie===-1||se<ie);)I+=V.substring(q,G)+fe,q=G+Y.length,se++,G=V.indexOf(Y,q);return q<V.length&&(I+=V.substring(q)),o.copySafeness(D,I)}a.replace=k;function F(V){var Y;return n.isString(V)?Y=y(V):Y=n.map(V,function(fe){return fe}),Y.reverse(),n.isString(V)?o.copySafeness(V,Y.join("")):Y}a.reverse=F;function M(V,Y,fe){Y=Y||0;var ie=Math.pow(10,Y),D;return fe==="ceil"?D=Math.ceil:fe==="floor"?D=Math.floor:D=Math.round,D(V*ie)/ie}a.round=M;function B(V,Y,fe){for(var ie=Math.floor(V.length/Y),D=V.length%Y,I=[],G=0,q=0;q<Y;q++){var se=G+q*ie;q<D&&G++;var ne=G+(q+1)*ie,xe=V.slice(se,ne);fe&&q>=D&&xe.push(fe),I.push(xe)}return I}a.slice=B;function P(V,Y,fe){return fe===void 0&&(fe=0),Y&&(V=n.map(V,function(ie){return ie[Y]})),fe+V.reduce(function(ie,D){return ie+D},0)}a.sum=P,a.sort=o.makeMacro(["value","reverse","case_sensitive","attribute"],[],function(Y,fe,ie,D){var I=this,G=n.map(Y,function(se){return se}),q=n.getAttrGetter(D);return G.sort(function(se,ne){var xe=D?q(se):se,ye=D?q(ne):ne;if(I.env.opts.throwOnUndefined&&D&&(xe===void 0||ye===void 0))throw new TypeError('sort: attribute "'+D+'" resolved to undefined');return!ie&&n.isString(xe)&&n.isString(ye)&&(xe=xe.toLowerCase(),ye=ye.toLowerCase()),xe<ye?fe?1:-1:xe>ye?fe?-1:1:0}),G});function K(V){return o.copySafeness(V,V)}a.string=K;function te(V,Y){V=l(V,"");var fe=/<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,ie=W(V.replace(fe,"")),D="";return Y?D=ie.replace(/^ +| +$/gm,"").replace(/ +/g," ").replace(/(\r\n)/g,`
`).replace(/\n\n\n+/g,`

`):D=ie.replace(/\s+/gi," "),o.copySafeness(V,D)}a.striptags=te;function ce(V){V=l(V,"");var Y=V.split(" ").map(function(fe){return f(fe)});return o.copySafeness(V,Y.join(" "))}a.title=ce;function W(V){return o.copySafeness(V,V.replace(/^\s*|\s*$/g,""))}a.trim=W;function X(V,Y,fe,ie){var D=V;if(V=l(V,""),Y=Y||255,V.length<=Y)return V;if(fe)V=V.substring(0,Y);else{var I=V.lastIndexOf(" ",Y);I===-1&&(I=Y),V=V.substring(0,I)}return V+=ie??"...",o.copySafeness(D,V)}a.truncate=X;function ue(V){return V=l(V,""),V.toUpperCase()}a.upper=ue;function ae(V){var Y=encodeURIComponent;if(n.isString(V))return Y(V);var fe=n.isArray(V)?V:n._entries(V);return fe.map(function(ie){var D=ie[0],I=ie[1];return Y(D)+"="+Y(I)}).join("&")}a.urlencode=ae;var he=/^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,me=/^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,oe=/^https?:\/\/.*$/,we=/^www\./,ge=/\.(?:org|net|com)(?:\:|\/|$)/;function Fe(V,Y,fe){c(Y)&&(Y=1/0);var ie=fe===!0?' rel="nofollow"':"",D=V.split(/(\s+)/).filter(function(I){return I&&I.length}).map(function(I){var G=I.match(he),q=G?G[1]:I,se=q.substr(0,Y);return oe.test(q)?'<a href="'+q+'"'+ie+">"+se+"</a>":we.test(q)?'<a href="http://'+q+'"'+ie+">"+se+"</a>":me.test(q)?'<a href="mailto:'+q+'">'+q+"</a>":ge.test(q)?'<a href="http://'+q+'"'+ie+">"+se+"</a>":I});return D.join("")}a.urlize=Fe;function z(V){V=l(V,"");var Y=V?V.match(/\w+/g):null;return Y?Y.length:null}a.wordcount=z;function qe(V,Y){var fe=parseFloat(V);return c(fe)?Y:fe}a.float=qe;var Ne=o.makeMacro(["value","default","base"],[],function(Y,fe,ie){ie===void 0&&(ie=10);var D=parseInt(Y,ie);return c(D)?fe:D});a.int=Ne,a.d=a.default,a.e=a.escape}),(function(t,i,s){function n(c,u){c.prototype=Object.create(u.prototype),c.prototype.constructor=c,o(c,u)}function o(c,u){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,p){return m.__proto__=p,m},o(c,u)}var a=s(6),l=(function(c){n(u,c);function u(m){var p;return p=c.call(this)||this,p.precompiled=m||{},p}var f=u.prototype;return f.getSource=function(p){return this.precompiled[p]?{src:{type:"code",obj:this.precompiled[p]},path:p}:null},u})(a);t.exports={PrecompiledLoader:l}}),(function(t,i,s){var n=s(2).SafeString;function o(T){return typeof T=="function"}i.callable=o;function a(T){return T!==void 0}i.defined=a;function l(T,R){return T%R===0}i.divisibleby=l;function c(T){return T instanceof n}i.escaped=c;function u(T,R){return T===R}i.equalto=u,i.eq=i.equalto,i.sameas=i.equalto;function f(T){return T%2===0}i.even=f;function m(T){return!T}i.falsy=m;function p(T,R){return T>=R}i.ge=p;function g(T,R){return T>R}i.greaterthan=g,i.gt=i.greaterthan;function A(T,R){return T<=R}i.le=A;function d(T,R){return T<R}i.lessthan=d,i.lt=i.lessthan;function h(T){return T.toLowerCase()===T}i.lower=h;function v(T,R){return T!==R}i.ne=v;function E(T){return T===null}i.null=E;function w(T){return typeof T=="number"}i.number=w;function C(T){return T%2===1}i.odd=C;function S(T){return typeof T=="string"}i.string=S;function b(T){return!!T}i.truthy=b;function U(T){return T===void 0}i.undefined=U;function y(T){return T.toUpperCase()===T}i.upper=y;function _(T){return typeof Symbol<"u"?!!T[Symbol.iterator]:Array.isArray(T)||typeof T=="string"}i.iterable=_;function x(T){var R=T!=null&&typeof T=="object"&&!Array.isArray(T);return Set?R&&!(T instanceof Set):R}i.mapping=x}),(function(t,i,s){function n(l){var c=-1;return{current:null,reset:function(){c=-1,this.current=null},next:function(){return c++,c>=l.length&&(c=0),this.current=l[c],this.current}}}function o(l){l=l||",";var c=!0;return function(){var u=c?"":l;return c=!1,u}}function a(){return{range:function(c,u,f){typeof u>"u"?(u=c,c=0,f=1):f||(f=1);var m=[];if(f>0)for(var p=c;p<u;p+=f)m.push(p);else for(var g=c;g>u;g+=f)m.push(g);return m},cycler:function(){return n(Array.prototype.slice.call(arguments))},joiner:function(c){return o(c)}}}t.exports=a}),(function(t,i,s){var n=s(4);t.exports=function(a,l){function c(u,f){if(this.name=u,this.path=u,this.defaultEngine=f.defaultEngine,this.ext=n.extname(u),!this.ext&&!this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");this.ext||(this.name+=this.ext=(this.defaultEngine[0]!=="."?".":"")+this.defaultEngine)}return c.prototype.render=function(f,m){a.render(this.name,f,m)},l.set("view",c),l.set("nunjucksEnv",a),a}}),(function(t,i,s){var n=s(4),o=s(4),a=s(0),l=a._prettifyError,c=s(5),u=s(7),f=u.Environment,m=s(24);function p(h,v){return Array.isArray(v)?v.some(function(E){return h.match(E)}):!1}function g(h,v){v=v||{},v.isString=!0;var E=v.env||new f([]),w=v.wrapper||m;if(!v.name)throw new Error('the "name" option is required when compiling a string');return w([d(h,v.name,E)],v)}function A(h,v){v=v||{};var E=v.env||new f([]),w=v.wrapper||m;if(v.isString)return g(h,v);var C=n.existsSync(h)&&n.statSync(h),S=[],b=[];function U(x){n.readdirSync(x).forEach(function(T){var R=o.join(x,T),Q=R.substr(o.join(h,"/").length),N=n.statSync(R);N&&N.isDirectory()?(Q+="/",p(Q,v.exclude)||U(R)):p(Q,v.include)&&b.push(R)})}if(C.isFile())S.push(d(n.readFileSync(h,"utf-8"),v.name||h,E));else if(C.isDirectory()){U(h);for(var y=0;y<b.length;y++){var _=b[y].replace(o.join(h,"/"),"");try{S.push(d(n.readFileSync(b[y],"utf-8"),_,E))}catch(x){if(v.force)console.error(x);else throw x}}}return w(S,v)}function d(h,v,E){E=E||new f([]);var w=E.asyncFilters,C=E.extensionsList,S;v=v.replace(/\\/g,"/");try{S=c.compile(h,w,C,v,E.opts)}catch(b){throw l(v,!1,b)}return{name:v,template:S}}t.exports={precompile:A,precompileString:g}}),(function(t,i,s){function n(o,a){var l="";a=a||{};for(var c=0;c<o.length;c++){var u=JSON.stringify(o[c].name),f=o[c].template;l+="(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["+u+`] = (function() {
`+f+`
})();
`,a.asFunction&&(l+="return function(ctx, cb) { return nunjucks.render("+u+`, ctx, cb); }
`),l+=`})();
`}return l}t.exports=n}),(function(t,i,s){function n(){var o=this.runtime,a=this.lib,l=this.compiler.Compiler,c=this.parser.Parser,u=this.nodes,f=this.lexer,m=o.contextOrFrameLookup,p=o.memberLookup,g,A;l&&(g=l.prototype.assertType),c&&(A=c.prototype.parseAggregate);function d(){o.contextOrFrameLookup=m,o.memberLookup=p,l&&(l.prototype.assertType=g),c&&(c.prototype.parseAggregate=A)}o.contextOrFrameLookup=function(U,y,_){var x=m.apply(this,arguments);if(x!==void 0)return x;switch(_){case"True":return!0;case"False":return!1;case"None":return null;default:return}};function h(b){return{index:b.index,lineno:b.lineno,colno:b.colno}}if(u&&l&&c){var v=u.Node.extend("Slice",{fields:["start","stop","step"],init:function(U,y,_,x,T){_=_||new u.Literal(U,y,null),x=x||new u.Literal(U,y,null),T=T||new u.Literal(U,y,1),this.parent(U,y,_,x,T)}});l.prototype.assertType=function(U){U instanceof v||g.apply(this,arguments)},l.prototype.compileSlice=function(U,y){this._emit("("),this._compileExpression(U.start,y),this._emit("),("),this._compileExpression(U.stop,y),this._emit("),("),this._compileExpression(U.step,y),this._emit(")")},c.prototype.parseAggregate=function(){var U=this,y=h(this.tokens);y.colno--,y.index--;try{return A.apply(this)}catch(F){var _=h(this.tokens),x=function(){return a._assign(U.tokens,_),F};a._assign(this.tokens,y),this.peeked=!1;var T=this.peekToken();if(T.type!==f.TOKEN_LEFT_BRACKET)throw x();this.nextToken();for(var R=new v(T.lineno,T.colno),Q=!1,N=0;N<=R.fields.length&&!this.skip(f.TOKEN_RIGHT_BRACKET);N++){if(N===R.fields.length)if(Q)this.fail("parseSlice: too many slice components",T.lineno,T.colno);else break;if(this.skip(f.TOKEN_COLON))Q=!0;else{var k=R.fields[N];R[k]=this.parseExpression(),Q=this.skip(f.TOKEN_COLON)||Q}}if(!Q)throw x();return new u.Array(T.lineno,T.colno,[R])}}}function E(b,U,y,_){b=b||[],U===null&&(U=_<0?b.length-1:0),y===null?y=_<0?-1:b.length:y<0&&(y+=b.length),U<0&&(U+=b.length);for(var x=[],T=U;!(T<0||T>b.length||_>0&&T>=y||_<0&&T<=y);T+=_)x.push(o.memberLookup(b,T));return x}function w(b,U){return Object.prototype.hasOwnProperty.call(b,U)}var C={pop:function(U){if(U===void 0)return this.pop();if(U>=this.length||U<0)throw new Error("KeyError");return this.splice(U,1)},append:function(U){return this.push(U)},remove:function(U){for(var y=0;y<this.length;y++)if(this[y]===U)return this.splice(y,1);throw new Error("ValueError")},count:function(U){for(var y=0,_=0;_<this.length;_++)this[_]===U&&y++;return y},index:function(U){var y;if((y=this.indexOf(U))===-1)throw new Error("ValueError");return y},find:function(U){return this.indexOf(U)},insert:function(U,y){return this.splice(U,0,y)}},S={items:function(){return a._entries(this)},values:function(){return a._values(this)},keys:function(){return a.keys(this)},get:function(U,y){var _=this[U];return _===void 0&&(_=y),_},has_key:function(U){return w(this,U)},pop:function(U,y){var _=this[U];if(_===void 0&&y!==void 0)_=y;else{if(_===void 0)throw new Error("KeyError");delete this[U]}return _},popitem:function(){var U=a.keys(this);if(!U.length)throw new Error("KeyError");var y=U[0],_=this[y];return delete this[y],[y,_]},setdefault:function(U,y){return y===void 0&&(y=null),U in this||(this[U]=y),this[U]},update:function(U){return a._assign(this,U),null}};return S.iteritems=S.items,S.itervalues=S.values,S.iterkeys=S.keys,o.memberLookup=function(U,y,_){return arguments.length===4?E.apply(this,arguments):(U=U||{},a.isArray(U)&&w(C,y)?C[y].bind(U):a.isObject(U)&&w(S,y)?S[y].bind(U):p.apply(this,arguments))},d}t.exports=n})])})})(Hn)),Hn.exports}var JA=GA();const ZA=zA(JA);function HA(r){const e={};for(const[i,s]of Object.entries(r.templates))e[i]=ZA.compile(s);const t=i=>{i.result={};for(const s of Object.keys(r.templates))i.result[s]=e[s].render(i.properties||{})};return"features"in r.geojson?r.geojson.features.forEach(t):t(r.geojson),r.geojson}const lu={templateExtractor:HA};Ki.Quyuan=lu,Ki.default=lu,Object.defineProperties(Ki,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
