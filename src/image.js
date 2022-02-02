const Viewer = require("viewerjs");
const elementsFromHtml = require("./elements_from_html");
require("viewerjs/dist/viewer.css");

let containerEl;
let viewerEl;
let imgEl;
let closeButtonEl;

let viewer;
let initialized;

const openImage = (imgUrl) => {
  if (!initialized) setUpModalForImage();

  imgEl.src = imgUrl;
  viewer = new Viewer(imgEl, {
    inline: true,
    navbar: false,
    toolbar: false,
    backdrop: false,
    title: false
  });
  containerEl.classList.add("open");
};

const setUpModalForImage = () => {
  const div = document.querySelector(".modal-for-viewer");
  initialized = true;

  const elements = elementsFromHtml(`<div class="image container">
    <div class="close">
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>
    <div class="viewer"><img class="img_template"></div>
  </div>`);
  div.appendChild(elements);

  containerEl = document.querySelector(".modal-for-viewer .image.container");
  viewerEl = containerEl.querySelector(".viewer");
  imgEl = viewerEl.querySelector("img");
  closeButtonEl = containerEl.querySelector(".close");

  closeButtonEl.addEventListener(
    "click",
    () => {
      imgEl.src = null;
      //viewerEl.removeChild(imgEl);
      //imgEl = elementsFromHtml(`<img class="img_template">`);
      //viewerEl.appendChild(imgEl);
      viewer.destroy();
      viewer = null;
      containerEl.classList.remove("open");
    },
    false
  );
};

module.exports = {
  openImage
};