import { MenuScene } from "scenes/MenuScene.js";
import { PlayScene } from "scenes/PlayScene.js";
import { CST } from "const.js";

var width = CST.NUMBERS.WIDTH;
var height = CST.NUMBERS.HEIGHT;

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        MenuScene, PlayScene
    ],
    render:{
        pixelArt: true
    }
};

var game = new Phaser.Game(config);
