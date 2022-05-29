import { CST } from "../const.js";
import { createAnimations } from "../Animations.js";
import * as Characters from "../Characters.js"
export class PlayScene extends Phaser.Scene{
    constructor() {
        super({
            key: CST.SCENES.PLAY
        })
    }

    init() {
    }

    preload() {
        this.load.image('background', "assets/images/background.png");
        this.load.spritesheet('monster_twig', "assets/sprites/monster_twig.png", { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('monster_twig', "assets/sprites/monster_twig.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image('parus', "assets/sprites/parus.png");
    }
    create ()
    {
        this.add.tileSprite(CST.NUMBERS.WIDTH/2, CST.NUMBERS.HEIGHT/2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, 'background');
        let parus = this.physics.add.sprite(400, 425, 'parus');
        
        createAnimations(this);

        this.cody = new Characters.MonsterTwig(this, 600, 570, 1000);
        this.cody.play('monster_twig_kick');
    }
    
    update () {
        if (this.cody.hp > 0){  
            this.cody.damage(10);
        }
    }
}