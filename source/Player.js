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

  handleCollision(collision) {
    if (collision instanceof Rock) {
      return;
    }
  }

  afterMove() {
    this.game.update();
  }
}

module.exports = Player;
