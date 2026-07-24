import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';
import result from './quyuan';

console.log('[leaflet.ts] Script loaded');

const main = async () => {
  console.log('[leaflet.ts] main function called');
  const latLng:LatLngTuple = [36.23569, 139.53341];
  const zoom = 14;
  const minZoom = 5;
  const maxZoom = 21;

  const mymap = L.map("map", {
    maxZoom
  }).setView(latLng, zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom,
    minZoom
  }).addTo(mymap);

  console.log('[leaflet.ts] Calling result function');
  const data = await result();
  console.log('[leaflet.ts] Data received:', data);
  
  data.features.forEach((feature:any, index: number) => {
    console.log(`[leaflet.ts] Feature ${index}:`, {
      name: feature.properties.name,
      type: feature.properties.type,
      icon: feature.result.icon,
      geometry: feature.geometry
    });
    
    if (feature.geometry) {
      const marker = L.marker(
        [...feature.geometry.coordinates].reverse() as LatLngTuple,
        {
          icon: L.icon({
            iconUrl: feature.result.icon,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
          })
        }
      ).bindPopup(feature.result.html);
      marker.addTo(mymap);
    }
  });
};

main().catch(error => {
  console.error('Failed to initialize map:', error);
});