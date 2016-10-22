'use strict';

const Movable = require('./Movable');
const World = require('./World');

class Enemy extends Movable {
  constructor(x, y) {
    super();
    this.color = 'yellow';
    this.x = x;
    this.y = y;
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
    this.collision = true;
  }
}

module.exports = Enemy;
