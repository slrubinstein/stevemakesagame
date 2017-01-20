const Touch = {

  positions: {
    startX: null,
    startY: null,
    endX: null,
    endY: null
  },

  handler(actor, event) {
    event.preventDefault();

    const touch = event.touches[0];

    if (event.type === 'touchstart') {
      console.log('touchstart');
      Touch.positions.startX = touch.pageX;
      Touch.positions.startY = touch.pageY;
      console.log(Touch.positions.startX);
      console.log(Touch.positions.startY);
    }

    if (event.type === 'touchmove') {
      console.log('touchmove');
      Touch.positions.endX = touch.pageX;
      Touch.positions.endY = touch.pageY;
      console.log(Touch.positions.endX);
      console.log(Touch.positions.endY);
    }

    if (event.type === 'touchend') {
      if (Touch.positions.endX > Touch.positions.startX) {
        actor.handleKey('rightArrow');
        console.log('rightArrow');
      }

      if (Touch.positions.endX < Touch.positions.startX) {
        actor.handleKey('leftArrow');
        console.log('leftArrow');
      }

      if (Touch.positions.endY > Touch.positions.startY) {
        actor.handleKey('downArrow');
        console.log('downArrow');
      }

      if (Touch.positions.endY < Touch.positions.startY) {
        actor.handleKey('upArrow');
        console.log('upArrow');
      }
    }

  }
}

module.exports = Touch;
