const World = require('./World');

const collisionDetector = {

  didCollide(shapeA, shapeB) {
    const bordersA = getBorders(shapeA);
    const bordersB = getBorders(shapeB);

    return hasOverlappingCorners(bordersA, bordersB);
  },

  didLeaveMap(shape) {
    var borders = getBorders(shape);

    return borders.topBorder < 0 ||
      borders.bottomBorder > World.WORLD_HEIGHT ||
      borders.rightBorder > World.WORLD_WIDTH ||
      borders.leftBorder < 0;
  }

};

function getBorders(shape) {
  return {
    leftBorder: shape.x,
    rightBorder: shape.x + shape.width,
    topBorder: shape.y,
    bottomBorder: shape.y + shape.height
  };
}

function hasOverlappingCorners(bordersA, bordersB) {
  return bordersA.topBorder < bordersB.bottomBorder &&
    bordersA.bottomBorder > bordersB.topBorder &&
    bordersA.leftBorder < bordersB.rightBorder &&
    bordersA.rightBorder > bordersB.leftBorder;
}

module.exports = collisionDetector;
