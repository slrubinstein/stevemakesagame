'use strict';

const CollisionDetector = require('./CollisionDetector');
const Drawable = require('./Drawable');

class Movable extends Drawable {
  constructor() {
    super();
  }

  handleCollision() {}

  move(direction) {
    const newPosition = this.getNewPosition(direction);
    const collision = this.checkCollisions(newPosition);

    if (collision.length) {
      this.handleCollision(collision[0], newPosition);
    } else {
      this.moveToNewPosition(newPosition);
    }

    if (CollisionDetector.didLeaveMap(newPosition)) {
      this.handleLeaveMap(direction);
    }

    if (this.afterMove) {
      this.afterMove();
    }
  }

  moveToNewPosition(newPosition) {
    this.x = newPosition.x;
    this.y = newPosition.y;
  }

  checkCollisions(position) {
    const nextStep = Object.assign(position, { width: this.width, height: this.height });
    return this.game.room.scenery
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
  }

module.exports = Movable;
