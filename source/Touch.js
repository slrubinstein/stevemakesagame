const Hammer = require('hammerjs');
const World = require('./World');

const Touch = {

  move: false,

  timer: null,

  direction: null,

  handler(actor) {

    setInterval(() => this.action(actor), 1);
    const element = document.getElementById('canvas');
    const hammer = new Hammer(element);

    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

    hammer.on('pan', (event) => {
      this.move = true;
      this.direction = event.direction;
    });
    hammer.on('panend', (event) => this.stopAction());
  },

  action(actor) {
    if (this.timer !== null) {
      return;
    }
    this.timer = setTimeout(() => this.timer = null, World.TICK_TIME);

    if (!this.move) {
      return;
    }

    switch(this.direction) {
      case Hammer.DIRECTION_LEFT:
        actor.handleKey('leftArrow');
        break;
      case Hammer.DIRECTION_UP:
        actor.handleKey('upArrow');
        break;
      case Hammer.DIRECTION_RIGHT:
        actor.handleKey('rightArrow');
        break;
      case Hammer.DIRECTION_DOWN:
        actor.handleKey('downArrow');
        break;
    }
  },

  stopAction() {
    this.move = false;
  }
}

module.exports = Touch;
