const { parseColor } = require('lifx-tile-effects-framework').utils

module.exports = class {

  static getFlushColor() {
    return { saturation: 1, brightness: 0, kelvin: 9000 }
  }
  
  static async create({ device, tiles }) {
    return await (new this({ device, tiles })).boot()
  }

  constructor({ device, tiles }) {
    this.device = device
    this.tiles = tiles
    this.beachballColors = ['r', 'y', 'g', 'b', 'm']
    this.tileColors = this.tiles.map((_, i) =>
      this.beachballColors[i % this.beachballColors.length]
    )
  }

  async boot() {
    await this.step()  
    setInterval(async () => await this.step(), 1000)
  }

  async step() {
    this.tileColors = [...this.tileColors.slice(1), this.tileColors[0]]
    await this.updateTiles()
  }

  async updateTiles() {
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      await this.device.tileSetTileState64({
        tile_index: tile.tile_index,
        colors: [...Array(64)].fill(parseColor(this.tileColors[i]))
      }).catch(console.error)  
    }
  }

}
