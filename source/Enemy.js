'use strict';

const Movable = require('./Movable');
const World = require('./World');
const MathUtils = require('./utils/MathUtils');

const directions = ['north', 'south', 'east', 'west'];


class Enemy extends Movable {
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

  move() {
    const direction = directions[MathUtils.getRandomBetween(0, 3)];
    super.move(direction);
  }
}

module.exports = Enemy;
