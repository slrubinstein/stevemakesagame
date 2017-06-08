const CELL_SIZE = 40;
const WORLD_WIDTH = CELL_SIZE * 10;
const WORLD_HEIGHT = CELL_SIZE * 10;
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

  TICK_TIME,

  DIRECTIONS,

  ctx: null,

  setCtx(ctx) {
    this.ctx = ctx;
  }
};

module.exports = world;
