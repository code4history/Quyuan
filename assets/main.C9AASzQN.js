import"./modulepreload-polyfill.B5Qt9EMX.js";const i="0.2.0";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#version");n&&(n.textContent=`v${i}`);const a=[{name:"Leaflet",path:"/leaflet.html",description:"シンプルで軽い地図ライブラリ"},{name:"OpenLayers",path:"/openlayers.html",description:"多機能な地図フレームワーク"},{name:"MapLibre GL",path:"/maplibre.html",description:"ベクタタイルの描画エンジン"}],o=document.querySelector("#demo-list");o&&a.forEach(e=>{const t=document.createElement("div");t.className="demo-card",t.innerHTML=`
        <h2>${e.name}</h2>
        <p>${e.description}</p>
        <a href="${e.path}" class="demo-link">デモを見る</a>
      `,o.appendChild(t)})});
