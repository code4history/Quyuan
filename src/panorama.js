const PANOLENS = require("./panolens");
const elementsFromHtml = require("./elements_from_html");

let containerEl;
let viewerEl;
let closeButtonEl;

let viewer;
let panorama;

let initialized;

const openPanorama = (imgUrl) => {
  if (!initialized) setUpModalForPanorama();

  panorama = new PANOLENS.ImagePanorama(imgUrl);
  viewer.add(panorama);
  containerEl.classList.add("open");
};

const disposePanorama = () => {
  panorama.dispose();
  viewer.remove(panorama);
  panorama = null;
};

const setUpModalForPanorama = () => {
  const div = document.querySelector(".modal-for-viewer");
  initialized = true;

  const elements = elementsFromHtml(`<div class="panorama container">
    <div class="close">
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>
    <div class="viewer"></div>
  </div>`);
  div.appendChild(elements);

  containerEl = document.querySelector(".modal-for-viewer .panorama.container");
  viewerEl = containerEl.querySelector(".viewer");
  closeButtonEl = containerEl.querySelector(".close");

  viewer = new PANOLENS.Viewer({ container: viewerEl });
  panorama = null;

  closeButtonEl.addEventListener(
    "click",
    () => {
      disposePanorama();
      containerEl.classList.remove("open");
    },
    false
  );
};

module.exports = {
  openPanorama
};
