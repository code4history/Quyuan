const elementsFromHtml = require("./elements_from_html");
const Viewer = require("viewerjs");

let containerEl;
let viewerEl;
let iframeEl;
let closeButtonEl;

let initialized;

const openYoutube = (imgUrl) => {
  if (!initialized) setUpModalForYoutube();

  iframeEl.src = imgUrl;
  containerEl.classList.add("open");
};

const setUpModalForYoutube = () => {
  const div = document.querySelector(".modal-for-viewer");
  initialized = true;

  const elements = elementsFromHtml(`<div class="youtube container">
    <div class="close">
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>
    <div class="viewer"><iframe class="iframe"></iframe></div>
  </div>`);
  div.appendChild(elements);

  containerEl = document.querySelector(".modal-for-viewer .youtube.container");
  viewerEl = containerEl.querySelector(".viewer");
  iframeEl = viewerEl.querySelector(".iframe");
  closeButtonEl = containerEl.querySelector(".close");

  closeButtonEl.addEventListener(
    "click",
    () => {
      iframeEl.src = null;
      containerEl.classList.remove("open");
    },
    false
  );
};

module.exports = {
  openYoutube
};