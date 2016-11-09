const Game = require('./Game');
const Preloader = require('./Preloader');
const World = require('./World');

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  World.setCtx(ctx);
  const game = new Game(ctx);

  Preloader.loadImages(() => game.init());
});
