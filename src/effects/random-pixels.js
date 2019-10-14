module.exports = class {

  static getFlushColor() {
    return { saturation: 0, brightness: 0, kelvin: 9000 }
  }

  static async create({ device, tiles }) {
    return await (new this({ device, tiles })).boot()
  }

  constructor({ device, tiles }) {
    this.device = device
    this.tiles = tiles
  }

  async boot() {
    await this.step()  
    setInterval(async () => await this.step(), 1000)
  }

  async step() {
    for (let i = 0; i < this.tiles.length; i++) {
      const tile = this.tiles[i]
      await this.device.tileSetTileState64({
        tile_index: tile.tile_index,
        duration: 500,
        colors: [...Array(64)].map(() => ({
          hue: Math.floor(Math.random() * 360)/360,
          saturation: 1,
          brightness: 1,
        }))
      }).catch(console.error)  
    }
  }

}
