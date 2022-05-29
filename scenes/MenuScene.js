import { CST } from "/scripts/const.js";
export class MenuScene extends Phaser.Scene{
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    init() {
    }
    preload() {
        this.load.image('playButton', "assets/images/play_button.png");
    }
    create() {
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "playButton").setDepth(1);
        playButton.setInteractive();

        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.PLAY);
        })
    }
}