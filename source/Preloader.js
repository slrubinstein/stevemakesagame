const Images = require('./Images');

const imageCache = {};

class Preloader {

  static loadImages(cb) {
    Images.forEach((img) => this.loadImage(img));
    cb();
  }

  static getImage(name) {
    if (imageCache.hasOwnProperty(name)) {
      return imageCache[name];
    } else {
      throw new Error;
    }
  }

  static loadImage(image) {
    const img = new Image;
    img.src = image.path;
    img.id = image.name;
    img.height = image.height;
    img.width = image.width;
    imageCache[image.name] = img;
  }
}

module.exports = Preloader;
