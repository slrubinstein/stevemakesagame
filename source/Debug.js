const World = require('./World');

const Debug = {
  init(game) {
    this.game = game;

    const div = document.createElement('div');
    const body = document.getElementsByTagName('body')[0];

    this.actorPositionList = document.createElement('ul');
    this.actorPositionList.id = 'actors';

    div.id = 'debug';
    div.append(this.actorPositionList);
    body.append(div);
  },

  writeDebug() {
    this.actorPositionList.innerHTML = '';
    this.game.actors.forEach(a => this.writePosition(a));
  },

  writePosition(actor) {
    const li = document.createElement('li');
    li.innerHTML = `${actor.name} ${actor.drawX} ${actor.drawY}`;
    this.actorPositionList.append(li);
  }
}

module.exports = Debug;
