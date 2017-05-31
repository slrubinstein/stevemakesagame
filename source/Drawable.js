const World = require('./World');

class Drawable {
  constructor({ x, y }) {
    this.drawX = x;
    this.drawY = y;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.drawX, this.drawY, this.width, this.height);
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
};

module.exports = Drawable;
