const Movable = require('./Movable');
const World = require('./World');
const MathUtils = require('./utils/MathUtils');

const directions = ['north', 'south', 'east', 'west'];


class Enemy extends Movable {
  constructor() {
    super();
  }

  move() {
    const direction = directions[MathUtils.getRandomBetween(0, 3)];
    super.move(direction);
  }

  die() {
    this.game.actors.splice(this.game.actors.indexOf(this), 1);
  }
}

module.exports = Enemy;
