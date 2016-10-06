const Keyboard = require('./Keyboard');
const Player = require('./Player');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.height = 400;
    this.width = 400;
  }

  init() {
    this.player = new Player(this, 100, 100);
    this.initKeyboard();
    this.update();
  }

  initKeyboard() {
    const playerKeyboardListener = Keyboard.listen.bind(null, this.player);
    document.body.addEventListener('keydown', playerKeyboardListener);
  }

  drawWorld() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawWorld();
    this.player.draw(this.ctx);
  }
}

module.exports = Game;
