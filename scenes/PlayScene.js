import { CST } from "../scripts/const.js";
import { createAnimations } from "../scripts/Animations.js";
import * as Characters from "../scripts/Characters.js"
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
        this.load.image('parus', "assets/sprites/parus.png");
    }
    create ()
    {
        this.add.tileSprite(CST.NUMBERS.WIDTH/2, CST.NUMBERS.HEIGHT/2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, 'background');
        let parus = this.physics.add.sprite(400, 425, 'parus').setImmovable();

        this.characterHeap = new Characters.CharacterHeap();
        createAnimations(this);

        this.characterHeap.createMonster("twig", this, 1500, 600, parus);
        this.characterHeap.heap[0].setVelocityX(-170);
        this.characterHeap.heap[0].play('monster_twig_walk');
    }
    
    update () {
        if (this.characterHeap.heap[0].hp >= 0){  
            this.characterHeap.heap[0].damage(2);
        }
        else {
            this.characterHeap.heap[0].remove();
        }
    }
}