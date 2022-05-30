import { CST } from "../scripts/const.js";
export function createAnimations (scene) {

    // Monster Twig
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterTwig.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterTwig, { frames: [ 0, 1, 2, 3 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterTwig.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterTwig, { frames: [ 8, 9, 10, 11, 12, 13, 14, 15 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterTwig.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterTwig, { frames: [ 16, 17, 18, 19, 20, 21 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterTwig.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterTwig, { frames: [ 32, 33, 34, 35, 36, 37 ] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Brainer
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBrainer.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterBrainer, { frames: [ 0, 1, 2, 3 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key:  CST.ANIMATIONS.MonsterBrainer.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterBrainer, { frames: [ 14, 15, 16, 17 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key:  CST.ANIMATIONS.MonsterBrainer.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterBrainer, { frames: [ 7, 8, 9, 10 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key:  CST.ANIMATIONS.MonsterBrainer.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterBrainer, { frames: [ 21, 22, 23, 24, 25, 26, 27 ] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Ghoul
    scene.anims.create({
        key:  CST.ANIMATIONS.MonsterGhoul.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterGhoul, { frames: [ 0, 1, 2, 3 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGhoul.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterGhoul, { frames: [ 8, 9, 19, 11, 12, 13, 14, 15 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGhoul.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterGhoul, { frames: [ 16, 17, 18, 19, 20, 21 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGhoul.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterGhoul, { frames: [ 32, 33, 34, 35, 36, 37 ] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Hedgehog
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHedgehog.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterHedgehog, { frames: [ 0, 1, 2, 3 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHedgehog.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterHedgehog, { frames: [ 4, 5, 6, 7 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHedgehog.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterHedgehog, { frames: [ 8, 9, 10, 11 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHedgehog.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterHedgehog, { frames: [ 12, 13, 14 ] }),
        frameRate: 4,
        repeat: 0
    });

    // Monster Slayer
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlayer.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterSlayer, { frames: [ 0, 1, 2, 3, 4, 5, 6, 7 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlayer.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterSlayer, { frames: [ 8, 9, 10, 11, 12, 13, 14, 15 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlayer.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterSlayer, { frames: [ 16, 17, 18, 19, 20 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlayer.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterSlayer, { frames: [ 32, 33, 34, 35, 36, 37 ] }),
        frameRate: 8,
        repeat: 0
    });
}