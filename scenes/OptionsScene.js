/// <reference path="../typings/phaser.d.ts" />
import { CST } from "../scripts/const.js";
import { toggleFullScreen } from "../scripts/Misc.js";
import { loadPlayerData, savePlayerData, erasePlayerData } from "../scripts/PlayerData.js";
export class OptionsScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.OPTIONS
        })
    }
    init() {
    }
    preload() {
        this.add.tileSprite(CST.NUMBERS.WIDTH / 2, CST.NUMBERS.HEIGHT / 2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.BackgroundEvening);
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
    }
    create() {
        this.actualData = loadPlayerData();
        var savedMusic = this.actualData.OPTIONS.Music;
        var savedSounds = this.actualData.OPTIONS.Sounds;

        this.add.tileSprite(CST.NUMBERS.WIDTH / 2, CST.NUMBERS.HEIGHT / 2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.BackgroundOptions);
        this.backButton = this.add.image(50, 50, CST.IMAGES.BackButton).setDepth(CST.DEPTHS.ToolBarField);
        this.backButton.setInteractive();
        this.backButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.MENU);
        });
        this.backButton.on("pointerout", () => {
            this.backButton.setTexture(CST.IMAGES.BackButton);
        });
        this.backButton.on("pointerover", () => {
            this.backButton.setTexture(CST.IMAGES.BackButtonChoose);
        });

        this.fullscreenButton = this.add.image(CST.NUMBERS.WIDTH / 2 + 250, 665, this.actualData.OPTIONS.Fullscreen ? CST.IMAGES.SwitchON : CST.IMAGES.SwitchOFF).setDepth(CST.DEPTHS.ToolBarField);
        this.fullscreenButton.setInteractive();
        this.fullscreenButton.on("pointerup", () => {
            this.actualData.OPTIONS.Fullscreen = !this.actualData.OPTIONS.Fullscreen;
            savePlayerData(this.actualData);
            this.fullscreenButton.setTexture(this.actualData.OPTIONS.Fullscreen ? CST.IMAGES.SwitchON : CST.IMAGES.SwitchOFF);
            toggleFullScreen();
        });
        this.fullscreenButton.on("pointerover", () => {
            this.fullscreenButton.setTexture(this.actualData.OPTIONS.Fullscreen ? CST.IMAGES.SwitchONChoose : CST.IMAGES.SwitchOFFChoose);
        })
        this.fullscreenButton.on("pointerout", () => {
            this.fullscreenButton.setTexture(this.actualData.OPTIONS.Fullscreen ? CST.IMAGES.SwitchON : CST.IMAGES.SwitchOFF);
        })

        this.eraseButton = this.add.image(CST.NUMBERS.WIDTH / 2 + 250, 775, CST.IMAGES.EraseButton).setDepth(CST.DEPTHS.ToolBarField);
        this.eraseButton.setInteractive();
        this.eraseButton.on("pointerup", () => {
            if (confirm("???? ?????????????????????????? ???????????? ???????????????? ???????????????????????????????? ????????????? ???????????????? ?????? ???????????????? ?????????? ????????????????????!")) {
                erasePlayerData();
                this.actualData = loadPlayerData();
                musicBar.setValue(this.actualData.OPTIONS.Music, 0, 10);
                soundBar.setValue(this.actualData.OPTIONS.Sounds, 0, 10);
                this.fullscreenButton.setTexture(this.actualData.OPTIONS.Fullscreen ? CST.IMAGES.SwitchON : CST.IMAGES.SwitchOFF);
                alert("???????????? ??????????????");
            }
        });
        this.eraseButton.on("pointerover", () => {
            this.eraseButton.setTexture(CST.IMAGES.EraseButtonChoose);
        })
        this.eraseButton.on("pointerout", () => {
            this.eraseButton.setTexture(CST.IMAGES.EraseButton);
        })

        var musicBar = this.rexUI.add.numberBar({
            x: CST.NUMBERS.WIDTH / 2 + 300,
            y: 360,
            width: 530, // Fixed width

            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x505050),

            slider: {
                // width: 120, // Fixed width
                track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x323232),
                indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x939393),
                input: 'click',
            },

            text: this.add.text(0, 0, '', { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }).setFixedSize(35, 0),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                icon: 10,
                slider: 10,
            },

            valuechangeCallback: function (value, oldValue, musicBar) {
                musicBar.text = Math.round(Phaser.Math.Linear(0, 10, value));
                for (let el of this.scene.game.music) {
                    el.setMute((Math.round(Phaser.Math.Linear(0, 10, value)) <= 0) ? true : false);
                    el.setVolume(Math.round(Phaser.Math.Linear(0, 10, value))/10);
                }
                this.scene.actualData.OPTIONS.Music = Math.round(Phaser.Math.Linear(0, 10, value));
                savePlayerData(this.scene.actualData);
            }
        })
            .layout();

        var soundBar = this.rexUI.add.numberBar({
            x: CST.NUMBERS.WIDTH / 2 + 300,
            y: 460,
            width: 530, // Fixed width

            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x505050),

            slider: {
                // width: 120, // Fixed width
                track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x323232),
                indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x939393),
                input: 'click',
            },

            text: this.add.text(0, 0, '', { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }).setFixedSize(35, 0),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                icon: 10,
                slider: 10,
            },

            valuechangeCallback: function (value, oldValue, soundBar) {
                soundBar.text = Math.round(Phaser.Math.Linear(0, 10, value));
                this.scene.actualData.OPTIONS.Sounds = Math.round(Phaser.Math.Linear(0, 10, value));
                savePlayerData(this.scene.actualData);
            },
        })
            .layout();

        musicBar.setValue(savedMusic, 0, 10);
        soundBar.setValue(savedSounds, 0, 10);

    }
    update() {
    }
}