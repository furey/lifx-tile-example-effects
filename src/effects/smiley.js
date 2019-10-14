const { parseColor, parseColors } = require('lifx-tile-effects-framework').utils
const noColor = parseColor('yellow', { brightness: 0 })
const frame = parseColors(require('../frames/smiley'))

module.exports = class {

  static getFlushColor() {
    return noColor
  }

  static async create({ device, tiles }) {
    return await (new this({ device, tiles })).boot()
  }

  constructor({ device, tiles }) {
    this.device = device
    this.tiles = tiles
  }

  async boot() {
    this.setInitialState()
    await this.step()  
    setInterval(async () => await this.step(), 1000)
  }

  setInitialState() {
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      this.tiles[i] = {
        ...tile,
        state: i % 2
          ? 'show'
          : 'hide',
      }
    }
  }

  async step() {
    this.stepTiles()
    await this.updateTiles()
  }

  stepTiles() {
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      this.tiles[i] = {
        ...tile,
        state: tile.state === 'show'
          ? 'hide'
          : 'show'
      }
    }
  }

  async updateTiles() {
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      await this.device.tileSetTileState64({
        tile_index: tile.tile_index,
        length: 1,
        duration: 250,
        colors: tile.state === 'show'
          ? frame
          : Array(64).fill(noColor)
      }).catch(console.error)  
    }
  }

}
