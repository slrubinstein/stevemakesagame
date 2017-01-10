const TWEEN = require('tween.js');
const World = require('./World');
let num = 0;

class Drawable {
  constructor({ x, y }) {
    this.drawX = x;
    this.drawY = y;
  }

  draw() {
    World.ctx.fillStyle = this.color;
    World.ctx.fillRect(this.drawX, this.drawY, this.width, this.height);
  }

  drawAvatar() {
    const img = this.avatar;

    World.ctx.drawImage(
      img,
      img.height * this.avatarDirectionColumn,
      img.height * this.avatarMovementState,
      img.width,
      img.height,
      this.drawX,
      this.drawY,
      this.width,
      this.height
    );
  }

  drawStatic() {
    const img = this.image;

    World.ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      this.drawX,
      this.drawY,
      this.width,
      this.height
    );

  }
};

module.exports = Drawable;
