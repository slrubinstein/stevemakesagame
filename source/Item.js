const Drawable = require('./Drawable');
const GameProgress = require('./GameProgress');
const World = require('./World');

class Item extends Drawable {
  constructor(config) {
    super(config);
    this.collision = true;
  }

  removeFromRoom(room) {
    this.x = null;
    this.y = null;
    GameProgress[this.condition] = false;
    setTimeout(() => room.scenery.splice(room.scenery.indexOf(this), 1), World.TICK_TIME);
  }
};

module.exports = Item;
