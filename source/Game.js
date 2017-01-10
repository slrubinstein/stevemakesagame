const Keyboard = require('./Keyboard');
const Player = require('./Player');
const World = require('./World');
const Room = require('./Room');
const RoomLoader = require('./RoomLoader');
const Enemy = require('./Enemy');
const TWEEN = require('tween.js');

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

  getPlayer() {
    return this.actors.filter(actor => actor instanceof Player);
  }

  getNewRoom(direction) {
    var nextRoom = this.room.data.exits[direction];
    this.actors = this.getPlayer();
    this.room = new Room(RoomLoader[nextRoom], this);
  }

  update(time) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawWorld();
    this.drawEnemies();
    this.player.draw(this.ctx);
    TWEEN.update(time);
    window.requestAnimationFrame(this.update.bind(this));
  }
}

module.exports = Game;
