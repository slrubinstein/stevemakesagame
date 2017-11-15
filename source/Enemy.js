const Movable = require('./Movable');
const World = require('./World');
const MathUtils = require('./utils/MathUtils');
const Combat = require('./Combat');

class Enemy extends Movable {
  constructor(config) {
    super(config);
  }

  move(direction = null) {
    direction = direction || World.DIRECTIONS[MathUtils.getRandomBetween(0, 4)];
    super.move(direction);
  }

  die() {
    this.game.actors.splice(this.game.actors.indexOf(this), 1);
  }

  attack(player) {
    const direction = this.findAdjacentPlayer(player);

    this.turnTowards(direction);
    Combat.attack(this, player);
  }

  getHit() {

  }

  findAdjacentPlayer(player) {
    if (player.x < this.x) {
      return 'west';
    } else if (player.x > this.x) {
      return 'east';
    } else if (player.y < this.y) {
      return 'north';
    }
    return 'south';
  }
}

module.exports = Enemy;
