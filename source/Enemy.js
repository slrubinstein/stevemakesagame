const Movable = require('./Movable');
const World = require('./World');
const MathUtils = require('./utils/MathUtils');
const Combat = require('./Combat');
const Rock = require('./Rock');

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

  handleCollision(collision, newPosition) {
    if (collision instanceof Rock) {
      return;
    }
    if (collision === this.game.player) {
      this.attack(collision);
    }
  }

  attack(player) {
    Combat.attack(this, player);
  }
}

module.exports = Enemy;
