const Game = require('./Game');
const Preloader = require('./Preloader');
const World = require('./World');
const Debug = require('./Debug');

const debug = false;

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  World.setCtx(ctx);
  const game = new Game(ctx);

  if (debug) {
    Debug.init(game);
  }

  Preloader.loadImages(() => game.init({ debug }));
});
