import { CST } from "../scripts/const.js";
export class MenuScene extends Phaser.Scene{
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    init() {
    }
    preload() {
        this.load.image('backgroundMenu', "assets/images/background_menu.png");
        this.load.image('playButton', "assets/images/play_button.png");
        this.load.image('optionButton', "assets/images/options_button.png");
    }
    create() {
        this.add.tileSprite(CST.NUMBERS.WIDTH/2, CST.NUMBERS.HEIGHT/2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, 'backgroundMenu');
        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 220, "playButton").setDepth(1);
        let optionButton = this.add.image(this.game.renderer.width / 25, this.game.renderer.height - this.game.renderer.height / 12, "optionButton").setDepth(1);
        playButton.setInteractive();

        playButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.PLAY);
        })
    }
}