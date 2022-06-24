/// <reference path="../typings/phaser.d.ts" />
import { CST } from "../scripts/const.js";

export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    init() {
    }
    preload() {
    }
    create() {
        this.add.tileSprite(CST.NUMBERS.WIDTH / 2, CST.NUMBERS.HEIGHT / 2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.BackgroundMenu);
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 220, CST.IMAGES.PlayButton).setDepth(1);
        let optionButton = this.add.image(this.game.renderer.width / 25, this.game.renderer.height - this.game.renderer.height / 12, CST.IMAGES.OptionsButton).setDepth(1);

        playButton.setInteractive();
        optionButton.setInteractive();

        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.PLAY);
        })
        playButton.on("pointerout", () => {
            playButton.setTexture(CST.IMAGES.PlayButton);
        })
        playButton.on("pointerover", () => {
            playButton.setTexture(CST.IMAGES.PlayButtonChoose);
        })

        optionButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.OPTIONS);
        })
        optionButton.on("pointerout", () => {
            optionButton.setTexture(CST.IMAGES.OptionsButton);
        })
        optionButton.on("pointerover", () => {
            optionButton.setTexture(CST.IMAGES.OptionsButtonChoose);
        })
    }
}