const TWEEN = require('tween.js');

class Drawable {
  constructor(x, y) {
    this.drawX = x;
    this.drawY = y;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.drawX, this.drawY, this.width, this.height);
  }
};

module.exports = Drawable;
