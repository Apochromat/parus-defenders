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

        this.fullscreenButton = this.add.image(860, 446, this.actualData.OPTIONS.Fullscreen ? CST.IMAGES.SwitchON : CST.IMAGES.SwitchOFF).setDepth(CST.DEPTHS.ToolBarField);
        this.fullscreenButton.setInteractive();
        this.fullscreenButton.on("pointerup", () => {
            this.actualData.OPTIONS.Fullscreen = !this.actualData.OPTIONS.Fullscreen;
            savePlayerData(this.actualData);
            this.fullscreenButton.setTexture(this.actualData.OPTIONS.Fullscreen ? CST.IMAGES.SwitchON : CST.IMAGES.SwitchOFF);
            toggleFullScreen();
        });

        this.eraseButton = this.add.image(860, 520, CST.IMAGES.EraseButton).setDepth(CST.DEPTHS.ToolBarField);
        this.eraseButton.setInteractive();
        this.eraseButton.on("pointerup", () => {
            if (confirm("Вы действительно хотите сбросить пользовательские данные? Одменить это действие будет невозможно!")){
                erasePlayerData();
                this.actualData = loadPlayerData();
                musicBar.setValue(this.actualData.OPTIONS.Music, 0, 100);
                soundBar.setValue(this.actualData.OPTIONS.Sounds, 0, 100);
                this.fullscreenButton.setTexture(this.actualData.OPTIONS.Fullscreen ? CST.IMAGES.SwitchON : CST.IMAGES.SwitchOFF);
                alert("ДАННЫЕ УДАЛЕНЫ");
            }
        });

        var musicBar = this.rexUI.add.numberBar({
            x: 860,
            y: 258,
            width: 430, // Fixed width

            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x260e04),

            slider: {
                // width: 120, // Fixed width
                track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x170e04),
                indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x7b5e57),
                input: 'click',
            },

            text: this.add.text(0, 0, '').setFixedSize(35, 0),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                icon: 10,
                slider: 10,
            },

            valuechangeCallback: function (value, oldValue, musicBar) {
                musicBar.text = Math.round(Phaser.Math.Linear(0, 100, value));
                this.scene.actualData.OPTIONS.Music = Math.round(Phaser.Math.Linear(0, 100, value));
                savePlayerData(this.scene.actualData);
            }
        })
        .layout();

        var soundBar = this.rexUI.add.numberBar({
            x: 860,
            y: 328,
            width: 430, // Fixed width

            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x260e04),

            slider: {
                // width: 120, // Fixed width
                track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x170e04),
                indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x7b5e57),
                input: 'click',
            },

            text: this.add.text(0, 0, '').setFixedSize(35, 0),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                icon: 10,
                slider: 10,
            },

            valuechangeCallback: function (value, oldValue, soundBar) {
                soundBar.text = Math.round(Phaser.Math.Linear(0, 100, value));
                this.scene.actualData.OPTIONS.Sounds = Math.round(Phaser.Math.Linear(0, 100, value));
                savePlayerData(this.scene.actualData);
            },
        })
        .layout();

        musicBar.setValue(savedMusic, 0, 100);
        soundBar.setValue(savedSounds, 0, 100);

    }
    update() {
    }
}