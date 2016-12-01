const Movable = require('./Movable');
const World = require('./World');
const MathUtils = require('./utils/MathUtils');
const Combat = require('./Combat');

class Enemy extends Movable {
  constructor(config) {
    super(config);
  }

  move() {
    const direction = World.DIRECTIONS[MathUtils.getRandomBetween(0, 4)];
    super.move(direction);
  }

  die() {
    this.game.actors.splice(this.game.actors.indexOf(this), 1);
  }

  attack(player) {
    Combat.attack(this, player);
  }
}

module.exports = Enemy;
