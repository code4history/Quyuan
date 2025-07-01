import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import { Feature, FeatureCollection, Point } from 'geojson';
import result from './quyuan';

interface CustomProperties {
  name: string;
  type: string;
  cho: string;
  images: any[];
  icon: string;
  popup_html: string;
}

const main = async () => {
  const map = new maplibregl.Map({
    container: 'map',
    style: {
      version: 8,
      sources: {
        osm: {
          type: 'raster',
          tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        },
      },
      layers: [
        {
          id: 'osm',
          type: 'raster',
          source: 'osm',
        },
      ],
    },
    center: [139.53341, 36.23569],
    zoom: 13,
  });

  const data = await result();
  
  // データ構造を単純化
  const simplifiedData: FeatureCollection<Point, CustomProperties> = {
    type: 'FeatureCollection',
    features: data.features.map((feature: any): Feature<Point, CustomProperties> => ({
      type: 'Feature',
      geometry: feature.geometry,
      properties: {
        ...feature.properties,
        icon: feature.result?.icon,
        popup_html: feature.result?.html
      }
    }))
  };

  // 使用されているアイコンのパスを収集
  const iconPaths = new Set<string>();
  simplifiedData.features.forEach((feature) => {
    if (feature.properties.icon) {
      iconPaths.add(feature.properties.icon);
    }
  });

  map.on('load', async () => {
    try {
      // アイコンの読み込み
      for (const iconPath of iconPaths) {
        try {
          const response = await map.loadImage(iconPath);
          if (!map.hasImage(iconPath)) {
            map.addImage(iconPath, response.data);
          }
        } catch (error) {
          console.error(`Failed to load image: ${iconPath}`, error);
        }
      }

      map.addSource('places', {
        type: 'geojson',
        data: simplifiedData,
        generateId: true
      });

      map.addLayer({
        id: 'places',
        type: 'symbol',
        source: 'places',
        layout: {
          'icon-image': ['get', 'icon'],
          'icon-size': ['interpolate', ['linear'], ['zoom'],
            0, 64/256,  // 256はMapLibre GLのデフォルトアイコンサイズ
            22, 64/256
          ],
          'icon-allow-overlap': true,
          'icon-ignore-placement': true
        }
      });

      // マウスイベントハンドラ
      // ポインターカーソル
      map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
      });

      // クリックイベントハンドラ
      map.on('click', 'places', (e) => {
        if (!e.features || e.features.length === 0) return;
        
        const coordinates = (e.features[0].geometry as Point).coordinates.slice() as maplibregl.LngLatLike;
        const html = e.features[0].properties.popup_html;

        if (html) {
          new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(html)
            .addTo(map);
        }
      });

    } catch (error) {
      console.error('Error in map initialization:', error);
    }
  });
};

main().catch(error => {
  console.error('Failed to initialize map:', error);
});