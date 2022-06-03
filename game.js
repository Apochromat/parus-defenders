//@ts-check
import { MenuScene } from "./scenes/MenuScene.js";
import { PlayScene } from "./scenes/PlayScene.js";
import { LoadScene } from "./scenes/LoadScene.js";
import { CST } from "./scripts/const.js";

var width = CST.NUMBERS.WIDTH;
var height = CST.NUMBERS.HEIGHT;

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    scale: {
        // Fit to window
        mode: Phaser.Scale.FIT,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
        LoadScene, MenuScene, PlayScene
    ],
    render:{
        pixelArt: true,
        antialias: true,
        antialiasGL: true,
        mipmapFilter: "LINEAR_MIPMAP_LINEAR"
    }
};

var game = new Phaser.Game(config);
