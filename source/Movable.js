const TWEEN = require('tween.js');

const CollisionDetector = require('./CollisionDetector');
const Drawable = require('./Drawable');
const World = require('./World');
const AnimateWalk = require('./AnimateWalk');

class Movable extends Drawable {
  constructor(config) {
    super(config);
    this.lastPosition = {};

    this.direction = 'south';
    this.avatarDirectionColumn = 0;
    this.avatarMovementState = 0

  }

  afterMove() {}

  handleCollision() {}

  handleLeaveMap() {}

  move(direction) {
    if (!direction) {
      return;
    }
    this.direction = direction;
    const newPosition = this.getNewPosition(direction);
    const collision = this.checkCollisions(newPosition);
    this.turnTowards(this.direction);

    if (collision.length) {
      this.handleCollision(collision[0], newPosition);
      this.afterMove();
    } else if (CollisionDetector.didLeaveMap(newPosition)) {

      this.handleLeaveMap(direction);
    } else {
      this.moveToNewPosition(newPosition);
    }
  }

  turnTowards(direction) {
    this.avatarDirectionColumn = World.DIRECTIONS.indexOf(direction);
  }

  moveToNewPosition(newPosition) {
    this.lastPosition = {
      x: this.x,
      y: this.y
    };
    this.x = newPosition.x;
    this.y = newPosition.y;
    AnimateWalk.animateMove(this.lastPosition, newPosition, this);
  }

  checkCollisions(position) {
    const nextStep = Object.assign(position, { width: this.width, height: this.height });
    return this.game.room.scenery
      .concat(this.game.actors.filter(a => a !== this))
      .filter(item => item.collision)
      .filter(item => CollisionDetector.didCollide(nextStep, item));
  }

  getNewPosition(direction) {
    switch (direction) {
      case 'east':
        return {
          x: this.x + this.width,
          y: this.y
        };
      case 'west':
        return {
          x: this.x - this.width,
          y: this.y
        };
      case 'north':
        return {
          x: this.x,
          y: this.y - this.height
        };
      case 'south':
        return {
          x: this.x,
          y: this.y + this.height
        };
      default:
        return {
          x: this.x,
          y: this.y
        };
      }
    }

    nextTo(something) {
      return CollisionDetector.areAdjacent(this, something);
    }
  }

module.exports = Movable;
