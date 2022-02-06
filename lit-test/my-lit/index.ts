import Quyuan from "./src"

const geojson = {
  features: [
    {
      properties: {
        images: [
          { imageUrl: "./no2.JPG", thumbnailUrl: "./no2.JPG", imageType: "image" },
          { imageUrl: "https://www.youtube.com/embed/kGqsNUqbRuo", thumbnailUrl: "https://img.youtube.com/vi/kGqsNUqbRuo/hqdefault.jpg", imageType: "youtube" },
          { imageUrl: "./no7-DSC_7169.JPG", thumbnailUrl: "./no7-DSC_7169.JPG", imageType: "image" },
          { imageUrl: "./1.png", thumbnailUrl: "./1.png", imageType: "panorama", caption: "パノラマ" },
          { imageUrl: "./2.png", thumbnailUrl: "./2.png", imageType: "panorama" }
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

Quyuan.templateExtractor({
  geojson,
  templates
})

document.querySelector("#swiper").innerHTML = geojson.features[0]["result"].main;