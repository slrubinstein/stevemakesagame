const World = require('./World');
const Movable = require('./Movable');
const Rock = require('./Rock');
const Enemy = require('./Enemy');
const Combat = require('./Combat');

class Player extends Movable {
  constructor(x, y, game) {
    super();
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
        break;
      case 'west':
        this.x = World.WORLD_WIDTH - this.width;
        break;
      case 'north':
        this.y = World.WORLD_HEIGHT - this.height;
        break;
      case 'south':
        this.y = 0;
        break;
    }
    this.game.getNewRoom(direction);
  }

  afterMove() {
    this.game.update();
  }
}

module.exports = Player;
