const { parseColor } = require('lifx-tile-effects-framework').utils

module.exports = class {
  
  static async create({ device, tiles, bounds }) {
    return await (new this({ device, tiles, bounds })).boot()
  }

  static getFlushColor() {
    return { saturation: 1, brightness: 0, kelvin: 9000 }
  }

  constructor({ device, tiles, bounds }) {
    this.device = device
    this.tiles = tiles
    this.bounds = bounds
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
    const firstColor = this.tileColors[0]
    this.tileColors = [...this.tileColors.slice(1), firstColor]
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
