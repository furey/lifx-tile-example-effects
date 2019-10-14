const { parseColor } = require('lifx-tile-effects-framework').utils

module.exports = class {

  static getFlushColor() {
    return { saturation: 1, brightness: 0, kelvin: 9000 }
  }
  
  static async create({ device, tiles, bounds }) {
    return await (new this({ device, tiles, bounds })).boot()
  }

  constructor({ device, tiles }) {
    this.device = device
    this.tiles = tiles
    this.index = 0
    this.hue = Math.floor(Math.random() * 360)
    this.colors = [...Array(64)].fill(this.constructor.getFlushColor())
  }

  async boot() {
    await this.step()  
    setInterval(async () => await this.step(), 250)
  }

  async step() {
    this.colors[this.index] = {
      hue: this.hue/360,
      brightness: 1
    }
    this.index++
    if (this.index >= 64) this.index = 0
    this.hue += 4
    if (this.hue > 360) this.hue = 0
    await this.updateTiles()
  }

  async updateTiles() {
    await this.device.tileSetTileState64({
      tile_index: this.tiles[0].tile_index,
      length: this.tiles.length,
      duration: 1000,
      colors: this.colors
    }).catch(console.error) 
  }

}
