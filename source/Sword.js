const Item = require('./Item');
const World = require('./World');
const Preloader = require('./Preloader');

class Sword extends Item {
  constructor(x, y) {
    super({ x, y });
    this.x = x;
    this.y = y;
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
    this.color = 'silver';
    this.image = Preloader.getImage('sword');
    this.condition = 'swordUndiscovered';
    this.unique = true;
  }

  draw() {
    this.drawStatic();
  }
};

module.exports = Sword;
