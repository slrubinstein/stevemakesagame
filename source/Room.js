const World = require('./World');
const Rock = require('./Rock');
const GameObjects = require('./GameObjects');

class Room {
  constructor(room) {
    this.data = room;
    this.scenery = [];
    this.setScenery();
  }

  drawRoom(ctx) {
    this.drawBackground(ctx);
    this.drawScenery(ctx);
  }

  drawBackground(ctx) {
    ctx.fillStyle = this.data.backgroundColor;
    ctx.fillRect(0, 0, World.WORLD_WIDTH, World.WORLD_HEIGHT);
  }

  drawScenery(ctx) {
    this.scenery.forEach(item => item.draw(ctx));
  }

  setScenery() {
    const rows = this.data.map;

    rows.forEach((row, i) => {
      row.forEach((cell, j) => {
        this.setSceneryItem(cell, i, j);
      });
    });
  }

  setSceneryItem(cell, i, j) {
    if (!cell) {
      return;
    }

    const object = this.data.objects[cell];
    const instantiatedObject = new GameObjects[object](j * World.CELL_SIZE, i * World.CELL_SIZE);

    this.scenery.push(instantiatedObject);
  }
}

module.exports = Room;
