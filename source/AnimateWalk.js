const TWEEN = require('tween.js');

const World = require('./World');

class AnimateWalk {
  static animateMove(startPosition, endPosition, actor) {

    const thirdDiffX = (endPosition.x - startPosition.x) / 3;
    const thirdDiffY = (endPosition.y - startPosition.y) / 3;
    const oneThirdX = thirdDiffX + startPosition.x;
    const oneThirdY = thirdDiffY + startPosition.y ;
    const twoThirdsX = thirdDiffX * 2 + startPosition.x;
    const twoThirdsY = thirdDiffY * 2 + startPosition.y;

    const tweenA = new TWEEN.Tween(startPosition)
      .to({x: oneThirdX, y: oneThirdY}, World.TICK_TIME / 3)
      .onUpdate(function() {
        actor.drawX = this.x.toFixed(2);
        actor.drawY = this.y.toFixed(2);
      })
      .onStart(() => actor.avatarMovementState++);

    const tweenB = new TWEEN.Tween({x: oneThirdX, y: oneThirdY})
      .to({x: twoThirdsX, y: twoThirdsY}, World.TICK_TIME / 3)
      .onUpdate(function() {
        actor.drawX = this.x.toFixed(2);
        actor.drawY = this.y.toFixed(2);
      })
      .onStart(() => actor.avatarMovementState++);

    const tweenC = new TWEEN.Tween({x: twoThirdsX, y: twoThirdsY})
      .to(endPosition, World.TICK_TIME / 3)
      .onUpdate(function() {
        actor.drawX = this.x.toFixed(2);
        actor.drawY = this.y.toFixed(2);
      })
      .onStart(() => actor.avatarMovementState = 0)
      .onComplete(() => {
        actor.drawX = actor.x;
        actor.drawY = actor.y;
        actor.afterMove();
      });

    tweenA.chain(tweenB);
    tweenB.chain(tweenC);
    tweenA.start();
  }


}

module.exports = AnimateWalk;