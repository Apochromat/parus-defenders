/// <reference path="../typings/phaser.d.ts" />
import { CST } from "../scripts/const.js";
export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() {

    }
    loadImages() {
        this.load.setPath("./assets/images");
        for (let prop in CST.IMAGES) {
            this.load.image(CST.IMAGES[prop], CST.IMAGES[prop]+".png");
        }
    }

    loadAudio() {
        this.load.setPath("./assets/audio");
        for (let prop in CST.AUDIO) {
            this.load.audio(CST.AUDIO[prop], CST.AUDIO[prop]);
        }
    }

    loadSprites() {
        this.load.setPath("./assets/sprites");
        for (let prop in CST.SPRITES32) {
            this.load.spritesheet(CST.SPRITES32[prop], CST.SPRITES32[prop]+".png", {
                frameHeight: 32,
                frameWidth: 32
            });
        }
        for (let prop in CST.SPRITES64) {
            this.load.spritesheet(CST.SPRITES64[prop], CST.SPRITES64[prop]+".png", {
                frameHeight: 64,
                frameWidth: 64
            });
        }
    }

    preload() {
        //load image, spritesheet, sound
        this.loadImages();
        this.loadAudio();
        this.loadSprites();

        //create loading bar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        //simulate large load
        for(let i = 0; i < 100; i++){
            this.load.setPath("./assets/images")
            this.load.spritesheet("parus" + i, "parus.png", {
                frameHeight: 32,
                frameWidth: 32
            });
        }

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(50, this.game.renderer.height / 2, (this.game.renderer.width - 100) * percent, 50);
        })

        this.load.on("complete", () => {
            console.log("Load Complete");
        });

        this.load.on("load", (file) => {
            console.log("Loaded " + file.key + " from " + file.src)
        })
    }
    create() {
        this.scene.start(CST.SCENES.MENU);
    }
}