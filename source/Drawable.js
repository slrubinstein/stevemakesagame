const World = require('./World');
const Player = require('./Player');

class Drawable {
  constructor({ x, y }) {
    this.drawX = x;
    this.drawY = y;
    this.overlay = document.getElementById('overlay');
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

  getHit() {
    if (this.name === 'Player') {
      this.flashDamage();
    }
  }

  flashDamage() {
    this.overlay.style.opacity = .2;
    setTimeout(() => {
      this.overlay.style.opacity = 0;
    }, 50);
  }
};

module.exports = Drawable;
