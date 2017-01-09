const Item = require('./Item');
const World = require('./World');

class Sword extends Item {
  constructor(x, y) {
    super({ x, y });
    this.x = x;
    this.y = y;
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
    this.color = 'silver';
    this.condition = 'swordUndiscovered';
    this.unique = true;
  }
};

module.exports = Sword;
