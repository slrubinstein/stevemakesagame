const TWEEN = require('tween.js');
let num = 0;

class Drawable {
  constructor(x, y) {
    this.drawX = x;
    this.drawY = y;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.drawX, this.drawY, this.width, this.height);
  }

  drawAvatar(ctx) {
    const img = this.avatar;

    ctx.drawImage(
      img,
      16 * this.avatarDirectionColumn,
      16 * this.avatarMovementState,
      12,
      16,
      this.drawX,
      this.drawY,
      this.width,
      this.height
    );
  }
};

module.exports = Drawable;
