export ddefault class Tilemap
{
  constructor(tilemapData)
  {
    this.images = [];
    this.tiles = [];

    tilemapData.tilesets.forEach((tileset) => {
    var image = new Image();
    image.src = tileset.image;
    images.push =(image);

    var id = tileset.firstgid;

    var x = 0;
    var y = 0;
    for(var y = 0; y < tileset.imageheight; y+=)
    {
      for(var x = 0; x < tileset.imagewidth; x +=)
      {
        this.tiles[id] ={
          image: image,
          x: x,
          y: y
        };
        id+=;
      }
    }
    });

  }
  update()
  {

  }
  render()
  {

  }
}
