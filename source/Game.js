const Keyboard = require('./Keyboard');
const Player = require('./Player');
const World = require('./World');
const Room = require('./Room');
const RoomLoader = require('./RoomLoader');
const Enemy = require('./Enemy');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.height = World.WORLD_HEIGHT;
    this.width = World.WORLD_WIDTH;
    this.actors = [];
  }

  init() {
    this.player = new Player(200, 200, this);
    this.room =  new Room(RoomLoader['room1'], this);
    this.actors.push(this.player);
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

  moveEnemies() {
    this.getEnemies().forEach(enemy => enemy.move());
  }

  drawEnemies() {
    this.getEnemies().forEach(enemy => enemy.draw(this.ctx));
  }

  getEnemies() {
    return this.actors.filter(actor => actor instanceof Enemy);
  }

  getNewRoom(direction) {
    var nextRoom = this.room.data.exits[direction];
    this.actors.length = 1;
    this.room = new Room(RoomLoader[nextRoom], this);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawWorld();
    this.moveEnemies();
    this.drawEnemies();
    this.player.draw(this.ctx);
  }
}

module.exports = Game;
