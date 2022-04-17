import TileMap from "./script.js";

const tileSize = 32;
const canvas = document.getElementById("gameboard");
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(tileSize);


function game() {
    tileMap.draw(ctx);

}
sfds
tileMap.setCanvasSize(canvas)

setInterval(game, 1000 / 75)