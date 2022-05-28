var width = 1280;
var height = 720;
var background;
var parus;

var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('monster_twig', 'assets/monster_twig.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('parus', 'assets/parus.png');
}

function create ()
{
    background = this.add.tileSprite(width/2, height/2, width, height, 'background');
    parus = this.physics.add.sprite(400, 425, 'parus');

    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('monster_twig', { frames: [ 0, 1, 2, 3 ] }),
        frameRate: 8,
        repeat: -1
    });

    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('monster_twig', { frames: [ 8, 9, 10, 11, 12, 13, 14, 15 ] }),
        frameRate: 8,
        repeat: -1
    });

    this.anims.create({
        key: 'kick',
        frames: this.anims.generateFrameNumbers('monster_twig', { frames: [ 16, 17, 18, 19, 20, 21 ] }),
        frameRate: 8,
        repeat: -1
    });

    const cody = this.add.sprite(600, 570);
    cody.setScale(3);
    cody.play('kick');
}

function update () {
}

