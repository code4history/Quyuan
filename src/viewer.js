const {openPanorama} = require("./panorama");
const {openImage} = require("./image");
const {openYoutube} = require("./youtube");
require('./viewer.css');

const openViewer = (imgUrl, image_type) => {
  if (image_type === "panorama") openPanorama(imgUrl);
  else if (image_type === "youtube") openYoutube(imgUrl);
  else openImage(imgUrl);
};

const setUpModalForViewer = (divID) => {
  const div = document.getElementById(divID);
  div.classList.add('modal-for-viewer');
};

module.exports = {
  openViewer,
  setUpModalForViewer
}