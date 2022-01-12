const {openPanorama, setUpModalForPanorama} = require("./panorama");
const {openImage, setUpModalForImage} = require("./image");
require('./viewer.css');

const openViewer = (imgUrl, isPanorama) => {
  if (isPanorama) openPanorama(imgUrl);
  else openImage(imgUrl);
};

const setUpModalForViewer = (divID) => {
  const div = document.getElementById(divID);
  div.classList.add('modal-for-viewer');
  setUpModalForPanorama(div);
  setUpModalForImage(div);
};

module.exports = {
  openViewer,
  setUpModalForViewer
}