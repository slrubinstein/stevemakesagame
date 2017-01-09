const Drawable = require('./Drawable');
const GameProgress = require('./GameProgress');

class Item extends Drawable {
  constructor(config) {
    super(config);
    this.collision = true;
  }

  removeFromRoom(room) {
    room.scenery.splice(room.scenery.indexOf(this), 1);
    GameProgress[this.condition] = false;
  }
};

module.exports = Item;
