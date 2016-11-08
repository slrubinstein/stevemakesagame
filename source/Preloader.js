class Preloader {

  loadImages() {
    images.forEach(this.loadImage);
  }

  static loadImage(image) {
    const img = new Image;
    img.src = './assets/player.png';
    img.id = 'player';
    return img;
  }
}

module.exports = Preloader;
