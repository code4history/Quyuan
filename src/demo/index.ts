import { version } from '../../package.json';

document.addEventListener('DOMContentLoaded', () => {
  const versionElement = document.querySelector('#version');
  if (versionElement) {
    versionElement.textContent = `v${version}`;
  }

  const demos = [
    { name: 'Leaflet', path: '/leaflet.html', description: 'シンプルで軽い地図ライブラリ' },
    { name: 'OpenLayers', path: '/openlayers.html', description: '多機能な地図フレームワーク' },
    { name: 'MapLibre GL', path: '/maplibre.html', description: 'ベクタタイルの描画エンジン' }
  ];

  const demoList = document.querySelector('#demo-list');
  if (demoList) {
    demos.forEach(demo => {
      const card = document.createElement('div');
      card.className = 'demo-card';
      card.innerHTML = `
        <h2>${demo.name}</h2>
        <p>${demo.description}</p>
        <a href="${demo.path}" class="demo-link">デモを見る</a>
      `;
      demoList.appendChild(card);
    });
  }
});