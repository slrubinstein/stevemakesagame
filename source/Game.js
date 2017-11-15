const Keyboard = require('./Keyboard');
const Player = require('./Player');
const World = require('./World');
const Room = require('./Room');
const RoomLoader = require('./RoomLoader');
const Enemy = require('./Enemy');
const TWEEN = require('tween.js');
const GameData = require('./GameData');

class Game {
  constructor() {
    this.height = World.WORLD_HEIGHT;
    this.width = World.WORLD_WIDTH;
    this.actors = [];
    this.gameData = new GameData(this);
  }

  init(config) {
    const { initialRoom } = config;
    this.player = new Player(200, 200, this);
    this.room =  new Room(RoomLoader[initialRoom], this);
    this.actors.push(this.player);
    this.initKeyboard();
    this.update();
  }

  initKeyboard() {
    const playerKeyboardListener = Keyboard.listen.bind(null, this.player);
    document.body.addEventListener('keydown', playerKeyboardListener);
  }

  drawWorld() {
    this.room.drawRoom(World.ctx);
  }

  moveEnemies() {
    this.getEnemies().forEach(enemy => enemy.move());
  }

  drawEnemies() {
    this.getEnemies().forEach(enemy => enemy.draw(World.ctx));
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
    World.ctx.clearRect(0, 0, this.width, this.height);
    this.gameData.update();
    this.drawWorld();
    this.drawEnemies();
    this.player.draw(World.ctx);
    TWEEN.update(time);
    window.requestAnimationFrame(this.update.bind(this));
  }
}

module.exports = Game;
