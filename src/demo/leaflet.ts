import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';
import result from './quyuan';

const main = async () => {
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

  const data = await result();
  data.features.forEach((feature:any) => {
    if (feature.geometry) {
      const marker = L.marker(
        feature.geometry.coordinates.reverse(),
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

main();