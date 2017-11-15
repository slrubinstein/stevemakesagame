class GameData {
  constructor(game) {
    this.game = game;
    this.hp = document.getElementById('hp');
  }

  update() {
    this.hp.innerText = this.game.player.hp;
  }
}

module.exports = GameData;