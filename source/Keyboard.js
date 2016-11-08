const World = require('./World');
const usableKeys = [37, 38, 39, 40];
let timer = null;

const Keyboard = {

  listen(actor, event) {
    if (timer !== null) {
      return;
    }
    timer = setTimeout(() => timer = null, World.TICK_TIME);

    const keyCode = event.keyCode;

    if (usableKeys.includes(keyCode)) {
      event.preventDefault();
    }

    switch(keyCode) {
      case 37:
        actor.handleKey('leftArrow');
        break;
      case 38:
        actor.handleKey('upArrow');
        break;
      case 39:
        actor.handleKey('rightArrow');
        break;
      case 40:
        actor.handleKey('downArrow');
        break;
    }
  }

};

module.exports = Keyboard;
