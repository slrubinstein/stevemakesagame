const World = require('./World');
const Movable = require('./Movable');
const Rock = require('./Rock');
const Enemy = require('./Enemy');
const Combat = require('./Combat');
const Preloader = require('./Preloader');

class Player extends Movable {
  constructor(x, y, game) {
    super(x, y);
    this.game = game;
    this.x = x;
    this.y = y;
    this.hp = 20;
    this.strength = 10;
    this.defense = 5;
    this.color = 'red';
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
    this.collision = true;
    this.avatar = Preloader.getImage('player');
  }

  handleKey(key) {
    switch(key) {
      case 'leftArrow':
        this.move('west');
        break;
      case 'upArrow':
        this.move('north');
        break;
      case 'rightArrow':
        this.move('east');
        break;
      case 'downArrow':
        this.move('south');
        break;
    }
  }

  handleCollision(collision, newPosition) {
    if (collision instanceof Rock) {
      return;
    }
    if (collision instanceof Enemy) {
      this.attack(collision);
    }
  }

  attack(enemy) {
    Combat.attack(this, enemy);
  }

  handleLeaveMap(direction) {
    switch(direction) {
      case 'east':
        this.x = 0;
        this.drawX = this.x;
        break;
      case 'west':
        this.x = World.WORLD_WIDTH - this.width;
        this.drawX = this.x;
        break;
      case 'north':
        this.y = World.WORLD_HEIGHT - this.height;
        this.drawY = this.y;
        break;
      case 'south':
        this.y = 0;
        this.drawY = this.y;
        break;
    }
    this.game.getNewRoom(direction);
  }

  draw() {
    this.drawAvatar();
  }

  afterMove() {
    this.game.moveEnemies();
  }

  die() {
    alert('Game over!');
  }
}

module.exports = Player;
