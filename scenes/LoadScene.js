/// <reference path="../typings/phaser.d.ts" />
import { CST } from "../scripts/const.js";
import { shuffle } from "../scripts/Misc.js";
import { loadPlayerData } from "../scripts/PlayerData.js";
export class LoadScene extends Phaser.Scene {
    playlist = [];
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() {
        this.sound.pauseOnBlur = true;
    }

    loadImages() {
        this.load.setPath("./assets/images");
        for (let prop in CST.IMAGES) {
            this.load.image(CST.IMAGES[prop], CST.IMAGES[prop]+".png");
        }
    }

    loadIcons() {
        this.load.setPath("./assets/icons");
        for (let prop in CST.ICONS) {
            this.load.image(CST.ICONS[prop], CST.ICONS[prop]+".png");
        }
    }

    loadAudio() {
        this.load.setPath("./assets/audio");
        for (let prop in CST.MUSIC) {
            this.load.audio(CST.MUSIC[prop], CST.MUSIC[prop]+".mp3");
            this.playlist.push(CST.MUSIC[prop]);
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
        for (let prop in CST.SPRITES40) {
            this.load.spritesheet(CST.SPRITES40[prop], CST.SPRITES40[prop]+".png", {
                frameHeight: 40,
                frameWidth: 40
            });
        }
        for (let prop in CST.SPRITES48) {
            this.load.spritesheet(CST.SPRITES48[prop], CST.SPRITES48[prop]+".png", {
                frameHeight: 48,
                frameWidth: 48
            });
        }
        for (let prop in CST.SPRITES64) {
            this.load.spritesheet(CST.SPRITES64[prop], CST.SPRITES64[prop]+".png", {
                frameHeight: 64,
                frameWidth: 64
            });
        }
        for (let prop in CST.SPRITES80) {
            this.load.spritesheet(CST.SPRITES80[prop], CST.SPRITES80[prop]+".png", {
                frameHeight: 80,
                frameWidth: 80
            });
        }
        for (let prop in CST.SPRITES90) {
            this.load.spritesheet(CST.SPRITES90[prop], CST.SPRITES90[prop]+".png", {
                frameHeight: 90,
                frameWidth: 90
            });
        }
        for (let prop in CST.SPRITES96) {
            this.load.spritesheet(CST.SPRITES96[prop], CST.SPRITES96[prop]+".png", {
                frameHeight: 96,
                frameWidth: 96
            });
        }
        for (let prop in CST.SPRITES100) {
            this.load.spritesheet(CST.SPRITES100[prop], CST.SPRITES100[prop]+".png", {
                frameHeight: 100,
                frameWidth: 100
            });
        }
        for (let prop in CST.SPRITES120) {
            this.load.spritesheet(CST.SPRITES120[prop], CST.SPRITES120[prop]+".png", {
                frameHeight: 120,
                frameWidth: 120
            });
        }
        for (let prop in CST.SPRITES128) {
            this.load.spritesheet(CST.SPRITES128[prop], CST.SPRITES128[prop]+".png", {
                frameHeight: 128,
                frameWidth: 128
            });
        }
        for (let prop in CST.SPRITES140) {
            this.load.spritesheet(CST.SPRITES140[prop], CST.SPRITES140[prop]+".png", {
                frameHeight: 140,
                frameWidth: 140
            });
        }
        for (let prop in CST.SPRITES150) {
            this.load.spritesheet(CST.SPRITES150[prop], CST.SPRITES150[prop]+".png", {
                frameHeight: 150,
                frameWidth: 150
            });
        }
        for (let prop in CST.SPRITES196) {
            this.load.spritesheet(CST.SPRITES196[prop], CST.SPRITES196[prop]+".png", {
                frameHeight: 196,
                frameWidth: 196
            });
        }
        for (let prop in CST.SPRITES200) {
            this.load.spritesheet(CST.SPRITES200[prop], CST.SPRITES200[prop]+".png", {
                frameHeight: 200,
                frameWidth: 200
            });
        }
        for (let prop in CST.SPRITES240) {
            this.load.spritesheet(CST.SPRITES240[prop], CST.SPRITES240[prop]+".png", {
                frameHeight: 240,
                frameWidth: 240
            });
        }
        for (let prop in CST.SPRITES250) {
            this.load.spritesheet(CST.SPRITES250[prop], CST.SPRITES250[prop]+".png", {
                frameHeight: 250,
                frameWidth: 250
            });
        }
        for (let prop in CST.SPRITES360) {
            this.load.spritesheet(CST.SPRITES360[prop], CST.SPRITES360[prop]+".png", {
                frameHeight: 360,
                frameWidth: 360
            });
        }
        for (let prop in CST.SPRITE_MP_OBELISK) {
            this.load.spritesheet(CST.SPRITE_MP_OBELISK[prop], CST.SPRITE_MP_OBELISK[prop]+".png", {
                frameHeight: 380,
                frameWidth: 190
            });
        }
        for (let prop in CST.SPRITE_HP_OBELISK) {
            this.load.spritesheet(CST.SPRITE_HP_OBELISK[prop], CST.SPRITE_HP_OBELISK[prop]+".png", {
                frameHeight: 140,
                frameWidth: 100
            });
        }
        for (let prop in CST.SPRITE_CD_OBELISK) {
            this.load.spritesheet(CST.SPRITE_CD_OBELISK[prop], CST.SPRITE_CD_OBELISK[prop]+".png", {
                frameHeight: 400,
                frameWidth: 200
            });
        }
        for (let prop in CST.SPRITE_PLASMA_GUN) {
            this.load.spritesheet(CST.SPRITE_PLASMA_GUN[prop], CST.SPRITE_PLASMA_GUN[prop]+".png", {
                frameHeight: 360,
                frameWidth: 777
            });
        }
        for (let prop in CST.SPRITE_TOASTER) {
            this.load.spritesheet(CST.SPRITE_TOASTER[prop], CST.SPRITE_TOASTER[prop]+".png", {
                frameHeight: 22,
                frameWidth: 106
            });
        }
        for (let prop in CST.SPRITESDRAGON) {
            this.load.spritesheet(CST.SPRITESDRAGON[prop], CST.SPRITESDRAGON[prop]+".png", {
                frameHeight: 87,
                frameWidth: 151
            });
        }
        for (let prop in CST.SPRITECTHULHU) {
            this.load.spritesheet(CST.SPRITECTHULHU[prop], CST.SPRITECTHULHU[prop]+".png", {
                frameHeight: 60,
                frameWidth: 100
            });
        }
    }

    preload() {
        //load image, spritesheet, sound
        this.loadAudio();
        this.loadImages();
        this.loadIcons();
        this.loadSprites();

        //create loading bar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        let progressText = this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2 - 50, 0, { fontFamily: 'ClearSans', fontSize: 36, color: '#ffffff', stroke: "#000000", strokeThickness: 3 }).setDepth(2);

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(50, this.game.renderer.height / 2, (this.game.renderer.width - 100) * percent, 50);
            progressText.setText(`${Math.trunc(percent*100)}%`);
        })

        this.load.on("complete", () => {
            console.log("Load Complete");
        });

        this.load.on("load", (file) => {
            console.log("Loaded " + file.key + " from " + file.src)
        })
    }
    create() {
        this.playlist = shuffle(this.playlist);
        this.game.music = []
        for (let el of this.playlist) {
            this.game.music.push(this.sound.add(el));
        }

        for (let i in this.game.music) {
            if (i == this.game.music.length - 1){
                this.game.music[i].once('complete', function(music){
                    this.manager.game.music[0].play({
                        mute: (loadPlayerData().OPTIONS.Music/10 <= 0) ? true : false,
                        volume: loadPlayerData().OPTIONS.Music/10,
                        // rate: 1,
                        // detune: 0,
                        // seek: 0,
                        loop: false,
                        // delay: 0
                    });
                });
            }
            else{
                this.game.music[i].once('complete', function(music){
                    this.manager.game.music[parseInt(i)+1].play({
                        mute: (loadPlayerData().OPTIONS.Music/10 <= 0) ? true : false,
                        volume: loadPlayerData().OPTIONS.Music/10,
                        // rate: 1,
                        // detune: 0,
                        // seek: 0,
                        loop: false,
                        // delay: 0
                    });
                });
            }
        }

        this.game.music[0].play({
            mute: (loadPlayerData().OPTIONS.Music/10 <= 0) ? true : false,
            volume: loadPlayerData().OPTIONS.Music/10,
            // rate: 1,
            // detune: 0,
            // seek: 0,
            loop: false,
            // delay: 0
        });
        
        this.scene.start(CST.SCENES.MENU);
    }
}