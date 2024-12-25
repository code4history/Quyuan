import Quyuan from '../index';

const result = async () => {
  const geoJsonNJ = "/assets/nj.geojson";

  const data = await fetch(geoJsonNJ);
  let geojson = await data.json();

  const popupHtmlTemplate = `
    <div class="poi">
      {% if name %}<h1>{{ name }}</h1>{% endif %}
      {% if images.length > 0 %}
        <qy-swiper style="height:200px;">
          {% for image in images %}
            <qy-swiper-slide 
              imageUrl="{{ image.path }}" 
              thumbnailUrl="{{ image.mid_thumbnail }}" 
              imageType="{{ image.image_type }}" 
              caption="{{ image.description }}">
            </qy-swiper-slide>
          {% endfor %}
        </qy-swiper>
      {% endif %}
      {% if type %}<div>種別: {{ type }}</div>{% endif %}
      {% if cho %}<div>住所: {{ cho }}</div>{% endif %}      
    </div>
  `;

  const iconTemplate = './assets/{% if type == "神社" %}shrine{% elif type == "寺院" %}temple{% elif type == "駅" %}station{% else %}park{% endif %}.png';

  geojson = Quyuan.templateExtractor({
    geojson,
    templates: {
      html: popupHtmlTemplate,
      icon: iconTemplate
    },
  });

  return geojson;
};

export default result;

