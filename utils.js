//the below code changes the extension's favicon at runtime
const canv = document.createElement('canvas');
const context = canv.getContext('2d');
const image = new Image();
image.src = brandedLogos.newValue.faviconIcon;
image.setAttribute('crossorigin', 'anonymous');
image.onload = function() {
  context.drawImage(image, 0, 0, this.width, this.height, 0, 0, 19, 19);
  const imageData = context.getImageData(0, 0, 19, 19);
  chrome.action.setIcon({
    imageData
  });
//
