import Quyuan from "./index"

interface ProcessedFeature {
    properties: {
      images: Array<{
        imageUrl: string;
        thumbnailUrl: string;
        imageType: string;
        caption?: string;
      }>;
    };
    result?: {
      main: string;
    };
  }
  
  interface ProcessedGeoJSON {
    features: ProcessedFeature[];
  }


const geojson: ProcessedGeoJSON = {
  features: [
    {
      properties: {
        images: [
          { imageUrl: "/assets/no2.JPG", thumbnailUrl: "/assets/no2.JPG", imageType: "image" },
          { imageUrl: "https://www.youtube.com/embed/kGqsNUqbRuo", thumbnailUrl: "https://img.youtube.com/vi/kGqsNUqbRuo/hqdefault.jpg", imageType: "youtube" },
          { imageUrl: "/assets/1.png", thumbnailUrl: "/assets/1.png", imageType: "panorama", caption: "パノラマ" },
          { imageUrl: "/assets/2.png", thumbnailUrl: "/assets/2.png", imageType: "panorama" }
        ]
      }
    }
  ]
};

const templates = {
  main: `
    <qy-swiper style='height: 300px'>
      {% for image in images %}
        <qy-swiper-slide imageUrl="{{ image.imageUrl }}" thumbnailUrl="{{ image.thumbnailUrl }}" imageType="{{ image.imageType }}" caption="{{ image.caption }}"></qy-swiper-slide>
      {% endfor %}
    </qy-swiper>
  `
};

const result = Quyuan.templateExtractor({
  geojson,
  templates
}) as ProcessedGeoJSON;

const swiperElement = document.querySelector("#swiper");
if (swiperElement && result.features[0].result) {
  swiperElement.innerHTML = result.features[0].result.main;
}