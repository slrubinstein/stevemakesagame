const TWEEN = require('tween.js');

const World = require('./World');

class AnimateWalk {
  static animateMove(startPosition, endPosition, actor) {
    actor.tween = new TWEEN.Tween(startPosition)
      .to(endPosition, World.TICK_TIME)
      .onUpdate(function() {
        actor.drawX = this.x.toFixed(2);
        actor.drawY = this.y.toFixed(2);
      })
      .onComplete(function() {
        actor.afterMove();
      })
      .start();

    actor.avatarMovementState++;
    setTimeout(() => actor.avatarMovementState++, World.TICK_TIME / 3);
    setTimeout(() => actor.avatarMovementState = 0, World.TICK_TIME * 2/ 3);

  }
}

module.exports = AnimateWalk;
