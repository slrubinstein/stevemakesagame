const Game = require('./Game');
const Preloader = require('./Preloader');

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const game = new Game(ctx);

  Preloader.loadImages(() => game.init());
});
