import Quyuan from '../index';

console.log('[quyuan.ts] Quyuan imported:', Quyuan);

const result = async () => {
  console.log('[quyuan.ts] result function called');
  const geoJsonNJ = "./assets/nj.geojson";

  const data = await fetch(geoJsonNJ);
  let geojson = await data.json();
  console.log('[quyuan.ts] GeoJSON loaded:', geojson);

  const popupHtmlTemplate = `
    <div class="poi">
      {% if name %}<h1>{{ name }}</h1>{% endif %}
      {% if images.length > 0 %}
        <qy-swiper style="height:200px;">
          {% for image in images %}
            <qy-swiper-slide 
              image-url="{{ image.path }}" 
              thumbnail-url="{{ image.mid_thumbnail }}" 
              image-type="{{ image.image_type }}" 
              caption="{{ image.description }}">
            </qy-swiper-slide>
          {% endfor %}
        </qy-swiper>
      {% endif %}
      {% if type %}<div>種別: {{ type }}</div>{% endif %}
      {% if cho %}<div>住所: {{ cho }}</div>{% endif %}      
    </div>
  `;

  const iconTemplate = './assets/{% if type == "神社" %}shrine{% elif type == "寺院" %}temple{% elif type == "駅" %}station{% elif type == "地蔵" %}jizo{% else %}park{% endif %}.png';

  console.log('[quyuan.ts] Before templateExtractor call');
  geojson = Quyuan.templateExtractor({
    geojson,
    templates: {
      html: popupHtmlTemplate,
      icon: iconTemplate
    },
  });
  console.log('[quyuan.ts] After templateExtractor, result:', geojson);

  return geojson;
};

export default result;

