const Keyboard = require('./Keyboard');
const Player = require('./Player');
const World = require('./World');
const Room = require('./Room');
const room1 = require('./rooms/room1');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.height = World.WORLD_HEIGHT;
    this.width = World.WORLD_WIDTH;
  }

  init() {
    this.player = new Player(this, 200, 200);
    this.room = new Room(room1);
    this.initKeyboard();
    this.update();
  }

  initKeyboard() {
    const playerKeyboardListener = Keyboard.listen.bind(null, this.player);
    document.body.addEventListener('keydown', playerKeyboardListener);
  }

  drawWorld() {
    this.room.drawRoom(this.ctx);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawWorld();
    this.player.draw(this.ctx);
  }
}

module.exports = Game;
