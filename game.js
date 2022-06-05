//@ts-check
import { MenuScene } from "./scenes/MenuScene.js";
import { PlayScene } from "./scenes/PlayScene.js";
import { LoadScene } from "./scenes/LoadScene.js";
import { OptionsScene } from "./scenes/OptionsScene.js";
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
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        LoadScene, MenuScene, OptionsScene, PlayScene
    ],
    render:{
        pixelArt: true,
        antialias: true,
        antialiasGL: true,
        mipmapFilter: "LINEAR_MIPMAP_LINEAR"
    }
};

var game = new Phaser.Game(config);
