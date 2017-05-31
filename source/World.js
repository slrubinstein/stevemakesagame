const WORLD_WIDTH = 400;
const WORLD_HEIGHT = 400;
const CELL_SIZE = 40;
const TICK_TIME = 300;
const DIRECTIONS = ['south', 'east', 'north', 'west'];
const world = {

  setCtx(ctx) {
    this.ctx = ctx;
  },

  DIRECTIONS,

  WORLD_WIDTH,

  WORLD_HEIGHT,

  CELL_SIZE,

  TICK_TIME

};

module.exports = world;
