/**
      tilemap_key: single-tile-paint
      json_file_path: ./assets/single-tile-paint.json
      tilesheet_image_path: ./assets/tilesheet_complete_32.png
      tileset_name: tilesheet_complete_32
      layers: 
        Layer - 1
    */

class MainState extends Phaser.State {
  init() {
    // ..........
  }

  preload() {
    //  Tilemaps are split into two parts: The actual map data (usually stored in a CSV or JSON file)
    //  and the tileset/s used to render the map.

    //  Here we'll load the tilemap data. The first parameter is a unique key for the map data.

    //  The second is a URL to the JSON file the map data is stored in. This is actually optional, you can pass the JSON object as the 3rd
    //  parameter if you already have it loaded (maybe via a 3rd party source or pre-generated). In which case pass 'null' as the URL and
    //  the JSON object as the 3rd parameter.

    //  The final one tells Phaser the format of the map data, in this case it's a JSON file exported from the Tiled map editor.
    //  This could be Phaser.Tilemap.CSV too.
    var v = Math.random()
    this.load.tilemap(
      'test',
      './assets/single-tile-paint.json' + `?v=${v}`,
      null,
      Phaser.Tilemap.TILED_JSON,
    )

    //  Next we load the tileset. This is just an image, loaded in via the normal way we load images:

    this.load.image('tiles', './assets/tilesheet_complete_32.png')
  }

  create() {
    this.stage.backgroundColor = '#000000'

    //  The 'mario' key here is the Loader key given in game.load.tilemap
    const map = this.add.tilemap('test')

    //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
    //  The second parameter maps this name to the Phaser.Cache key 'tiles'
    map.addTilesetImage('tilesheet_complete_32', 'tiles')

    //  Creates a layer from the World1 layer in the map data.
    //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
    const layer = map.createLayer('Layer - 1')

    //  This resizes the game world to match the layer dimensions
    layer.resizeWorld()
  }

  update() {
    // ...
  }
}
const winHeight = window.innerHeight
const winWidth = window.innerWidth
const game = new Phaser.Game(winWidth, winHeight, Phaser.AUTO, 'phaser-example')
const main = new MainState()
game.state.add('Main', main, true)
