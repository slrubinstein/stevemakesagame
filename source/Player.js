const World = require('./World');
const Movable = require('./Movable');
const Rock = require('./Rock');

class Player extends Movable {
  constructor(game, x, y) {
    super();
    this.game = game;
    this.x = x;
    this.y = y;
    this.color = 'red';
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
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
