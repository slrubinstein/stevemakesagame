const World = require('./World');
const Drawable = require('./Drawable');

class Player extends Drawable {
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

  move(direction) {
    const newPosition = this.getNewPosition(direction);
    this.x = newPosition.x;
    this.y = newPosition.y;
    this.game.update();
  }

  getNewPosition(direction) {
    switch (direction) {
      case 'east':
        return {
          x: this.x + this.width,
          y: this.y
        };
      case 'west':
        return {
          x: this.x - this.width,
          y: this.y
        };
      case 'north':
        return {
          x: this.x,
          y: this.y - this.height
        };
      case 'south':
        return {
          x: this.x,
          y: this.y + this.height
        };
      default:
        return {
          x: this.x,
          y: this.y
        };
    }
  }

}

module.exports = Player;
