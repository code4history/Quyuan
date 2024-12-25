import 'ol/ol.css';
import { Map as OLMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Overlay } from 'ol';
import { Style, Icon } from 'ol/style';
import result from './quyuan';





const main = async () => {
  const lonLat = [139.53341, 36.23569];
  const zoom = 14;

  const map = new OLMap({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: fromLonLat(lonLat),
      zoom: zoom
    })
  });

  const vectorSource = new VectorSource();
  const vectorLayer = new VectorLayer({
    source: vectorSource
  });
  map.addLayer(vectorLayer);

  const data = await result();
  const overlays = new Map();

  const createPopupContent = (html: string, overlay: Overlay) => {
    const container = document.createElement('div');
    container.className = 'ol-popup';
    
    const closer = document.createElement('a');
    closer.className = 'ol-popup-closer';
    closer.innerHTML = '×';
    closer.href = '#';
    
    const content = document.createElement('div');
    content.innerHTML = html;
    
    container.appendChild(closer);
    container.appendChild(content);
    
    closer.onclick = () => {
      overlay.setPosition(undefined);
      return false;
    };
    
    return container;
  };

  data.features.forEach((feature: any) => {
    const point = new Feature({
      geometry: new Point(fromLonLat(feature.geometry.coordinates))
    });

    point.setStyle(new Style({
      image: new Icon({
        src: feature.result.icon,
        scale: 0.5
      })
    }));
    vectorSource.addFeature(point);
    
    const overlay = new Overlay({
      positioning: 'bottom-center',
      offset: [0, -20],
      stopEvent: false
    });
    const element = createPopupContent(feature.result.html, overlay);
    overlay.setElement(element);

    overlay.getElement()!.innerHTML = feature.result.html;
    map.addOverlay(overlay);
    overlay.setPosition(undefined);
    overlays.set(point, overlay);
  });

  map.on('click', (evt) => {
    const feature = map.forEachFeatureAtPixel(evt.pixel, f => f);
    if (feature) {
      const overlay = overlays.get(feature);
      if (overlay) {
        const geometry = feature.getGeometry();
        if (geometry && geometry instanceof Point) {
          overlay.setPosition(geometry.getCoordinates());
        }
      }
    }
  });
};

main();