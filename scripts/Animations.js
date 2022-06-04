import { CST } from "../scripts/const.js";
export function createAnimations(scene) {

    // Hero Cat
    scene.anims.create({
        key: CST.ANIMATIONS.HeroCat.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCat, { frames: [21, 22, 23, 24, 25, 26] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroCat.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCat, { frames: [28, 29, 30, 31, 32, 33, 34] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroCat.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCat, { frames: [0, 1, 2, 3, 7, 8, 9, 10] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroCat.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCat, { frames: [14, 15, 16, 17, 18, 19] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Centurion
    scene.anims.create({
        key: CST.ANIMATIONS.HeroCenturion.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCenturion, { frames: [48, 49, 50, 51, 52] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroCenturion.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCenturion, { frames: [60, 61, 62, 63, 64, 65] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroCenturion.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCenturion, { frames: [0, 1, 2, 3, 7, 8, 9, 10] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroCenturion.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCenturion, { frames: [96, 97, 98, 99, 100, 101, 102] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Nightmare
    scene.anims.create({
        key: CST.ANIMATIONS.HeroNightmare.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroNightmare, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroNightmare.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroNightmare, { frames: [23, 24, 25, 26, 27, 28] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroNightmare.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroNightmare, { frames: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57 ] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroNightmare.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroNightmare, { frames: [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Wizard
    scene.anims.create({
        key: CST.ANIMATIONS.HeroWizard.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroWizard, { frames: [32, 33, 34, 35, 36, 37] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroWizard.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroWizard, { frames: [16, 17, 18, 19, 20, 21, 22, 23 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroWizard.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroWizard, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroWizard.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroWizard, { frames: [24, 25, 26, 27, 28, 29, 30, 31] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Twig
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterTwig.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterTwig, { frames: [0, 1, 2, 3] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterTwig.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterTwig, { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterTwig.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterTwig, { frames: [16, 17, 18, 19, 20, 21] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterTwig.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterTwig, { frames: [32, 33, 34, 35, 36, 37] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Brainer
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBrainer.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterBrainer, { frames: [0, 1, 2, 3] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBrainer.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterBrainer, { frames: [14, 15, 16, 17] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBrainer.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterBrainer, { frames: [7, 8, 9, 10] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBrainer.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterBrainer, { frames: [21, 22, 23, 24, 25, 26, 27] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Ghoul
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGhoul.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterGhoul, { frames: [0, 1, 2, 3] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGhoul.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterGhoul, { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGhoul.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterGhoul, { frames: [16, 17, 18, 19, 20, 21] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGhoul.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterGhoul, { frames: [32, 33, 34, 35, 36, 37] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Hedgehog
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHedgehog.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterHedgehog, { frames: [0, 1, 2, 3] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHedgehog.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterHedgehog, { frames: [4, 5, 6, 7] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHedgehog.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterHedgehog, { frames: [8, 9, 10, 11] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHedgehog.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterHedgehog, { frames: [12, 13, 14] }),
        frameRate: 4,
        repeat: 0
    });

    // Monster Slayer
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlayer.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterSlayer, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlayer.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterSlayer, { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlayer.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterSlayer, { frames: [16, 17, 18, 19, 20] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlayer.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterSlayer, { frames: [32, 33, 34, 35, 36, 37] }),
        frameRate: 8,
        repeat: 0
    });
}