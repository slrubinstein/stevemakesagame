const Enemy = require('../Enemy');
const World = require('../World');

class Slime extends Enemy {
  constructor(x, y, game) {
    super();
    this.color = 'yellow';
    this.x = x;
    this.y = y;
    this.game = game;
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
    this.collision = true;
  }
}

module.exports = Slime;
