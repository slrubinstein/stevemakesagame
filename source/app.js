const Game = require('./Game');
const World = require('./World');
const Preloader = require('./Preloader');

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const game = new Game(ctx);
  World.setCtx(ctx);

  Preloader.loadImages(() => game.init());
});
