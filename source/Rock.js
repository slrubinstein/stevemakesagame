const Drawable = require('./Drawable');
const World = require('./World');

class Rock extends Drawable {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
    this.color = 'brown';
    this.collision = true;
  }
};

module.exports = Rock;
