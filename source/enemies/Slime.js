const Enemy = require('../Enemy');
const World = require('../World');

class Slime extends Enemy {
  constructor(x, y, game) {
    super();
    this.x = x;
    this.y = y;
    this.game = game;
    this.hp = 5;
    this.strength = 7;
    this.defense = 7;
    this.color = 'yellow';
    this.width = World.CELL_SIZE;
    this.height = World.CELL_SIZE;
    this.collision = true;
  }

  move() {
    const player = this.game.player;

    if (this.nextTo(player)) {
        this.attack(player);
        console.log('Enemy attacks player!')
    } else {
        super.move();
    }
  }
}

module.exports = Slime;
