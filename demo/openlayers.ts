import 'ol/ol.css';
import { Map as OLMap, View, Overlay } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Style, Icon } from 'ol/style';
import { FeatureLike } from 'ol/Feature';
import result from './quyuan';

interface CustomFeatureProperties {
  name: string;
  popupContent: string;
}

const createOverlayElement = () => {
  const container = document.createElement('div');
  container.className = 'ol-popup';
  
  const content = document.createElement('div');
  content.className = 'popup-content';
  container.appendChild(content);
  
  const closer = document.createElement('a');
  closer.href = '#';
  closer.className = 'ol-popup-closer';
  container.appendChild(closer);
  
  return container;
};

const main = async () => {
  // 地図の初期化
  const map = new OLMap({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat([139.53341, 36.23569]),
      zoom: 14
    })
  });

  // ベクターレイヤーの設定
  const vectorSource = new VectorSource();
  const vectorLayer = new VectorLayer({
    source: vectorSource
  });
  map.addLayer(vectorLayer);

  // ポップアップオーバーレイの設定
  const container = createOverlayElement();
  const popup = new Overlay({
    element: container,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });
  map.addOverlay(popup);

  // ポップアップを閉じる処理
  const closer = container.querySelector('.ol-popup-closer') as HTMLAnchorElement;
  if (closer) {
    closer.onclick = () => {
      popup.setPosition(undefined);
      closer.blur();
      return false;
    };
  }

  // GeoJSONデータの読み込みと処理
  const data = await result();
  data.features.forEach((geoJsonFeature: any) => {
    const coordinates = fromLonLat(geoJsonFeature.geometry.coordinates);
    
    const olFeature = new Feature({
      geometry: new Point(coordinates),
      name: geoJsonFeature.properties.name,
      popupContent: geoJsonFeature.result.html
    });

    // アイコンスタイルの設定
    olFeature.setStyle(new Style({
      image: new Icon({
        src: geoJsonFeature.result.icon,
        width: 32,         // 表示幅を32pxに設定
        height: 32,        // 表示高さを32pxに設定
        crossOrigin: null  // アイコンが同じオリジンの場合
      })
    }));

    vectorSource.addFeature(olFeature);
  });

  // マウスカーソルの制御
  map.on('pointermove', (evt) => {
    const pixel = map.getEventPixel(evt.originalEvent);
    const hit = map.hasFeatureAtPixel(pixel);
    map.getViewport().style.cursor = hit ? 'pointer' : '';
  });

  // クリックイベントの処理
  map.on('click', (evt) => {
    const feature = map.forEachFeatureAtPixel(evt.pixel, (feature: FeatureLike) => feature);
    
    if (feature) {
      const coordinates = (feature.getGeometry() as Point).getCoordinates();
      const properties = feature.getProperties() as CustomFeatureProperties;
      
      // ポップアップコンテンツの更新
      const popupContent = container.querySelector('.popup-content');
      if (popupContent) {
        popupContent.innerHTML = properties.popupContent;
      }
      
      // ポップアップ位置の設定
      popup.setPosition(coordinates);
    } else {
      popup.setPosition(undefined);
    }
  });

  // 他のレイヤーをクリックした時にポップアップを閉じる
  map.on('click', (evt) => {
    const feature = map.forEachFeatureAtPixel(evt.pixel, (feature: FeatureLike) => feature);
    if (!feature) {
      popup.setPosition(undefined);
    }
  });
};

main().catch(error => {
  console.error('Failed to initialize map:', error);
});