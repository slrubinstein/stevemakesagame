const Drawable = require('./Drawable');
const World = require('./World');

class Tree extends Drawable {
  constructor(x, y) {
    super({ x, y });
    this.x = x;
    this.y = y;
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
    this.color = 'darkgreen';
    this.collision = true;
  }
};

module.exports = Tree;
