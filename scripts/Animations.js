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
        key: CST.ANIMATIONS.HeroCat.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCat, { frames: [35, 36, 37, 38, 39, 40] }),
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

    // Hero Mage
    scene.anims.create({
        key: CST.ANIMATIONS.HeroMage.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroMage, { frames: [16, 17, 18, 19, 20, 21, 22] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroMage.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroMage, { frames: [72, 73, 74, 75, 76, 77, 78] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroMage.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroMage, { frames: [0, 1, 2, 3, 4, 5, 6] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroMage.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroMage, { frames: [32, 33, 34, 35, 36, 37, 38, 39] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroMage.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroMage, { frames: [64, 65, 66, 67, 68, 69, 70, 71] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Archaeologist
    scene.anims.create({
        key: CST.ANIMATIONS.HeroArchaeologist.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroArchaeologist, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroArchaeologist.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroArchaeologist, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroArchaeologist.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroArchaeologist, { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroArchaeologist.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroArchaeologist, { frames: [16, 17, 18, 19, 20, 21, 22, 23] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroArchaeologist.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroArchaeologist, { frames: [32, 33, 34, 35, 36] }),
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
        key: CST.ANIMATIONS.HeroCenturion.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.HeroCenturion, { frames: [108, 109, 110, 111, 112] }),
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

    // Hero Sceleton
    scene.anims.create({
        key: CST.ANIMATIONS.HeroSceleton.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroSceleton, { frames: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroSceleton.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroSceleton, { frames: [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroSceleton.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroSceleton, { frames: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroSceleton.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroSceleton, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroSceleton.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroSceleton, { frames: [54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Tesla
    scene.anims.create({
        key: CST.ANIMATIONS.HeroTesla.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroTesla, { frames: [1, 6, 11, 16, 21, 26] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroTesla.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroTesla, { frames: [4, 9, 14, 19, 24, 29] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroTesla.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroTesla, { frames: [2, 7, 12, 17, 22, 27] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroTesla.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroTesla, { frames: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroTesla.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.HeroTesla, { frames: [3, 8, 13, 18, 23, 28, 33, 38] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Witch
    scene.anims.create({
        key: CST.ANIMATIONS.HeroWitch.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroWitch, { frames: [1, 6, 11, 16, 21, 26] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroWitch.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroWitch, { frames: [4, 9, 14, 19, 24, 29] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroWitch.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroWitch, { frames: [2, 7, 12, 17, 22, 27, 32, 37] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroWitch.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroWitch, { frames: [3, 7, 11, 15, 19, 23, 27] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroWitch.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroWitch, { frames: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Reaper
    scene.anims.create({
        key: CST.ANIMATIONS.HeroReaper.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroReaper, { frames: [0, 1, 2, 3, 4] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroReaper.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroReaper, { frames: [0, 1, 2, 3, 4] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroReaper.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroReaper, { frames: [11, 12, 13, 14, 15, 16, 17, 18] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroReaper.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroReaper, { frames: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroReaper.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.HeroReaper, { frames: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43] }),
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
        key: CST.ANIMATIONS.HeroNightmare.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroNightmare, { frames: [115, 116, 117, 118, 119, 120, 121, 122, 123] }),
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
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroNightmare, { frames: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroNightmare.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroNightmare, { frames: [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Minotaur 
    scene.anims.create({
        key: CST.ANIMATIONS.HeroMinotaur.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.HeroMinotaur, { frames: [0, 1, 2, 3, 4] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroMinotaur.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.HeroMinotaur, { frames: [0, 1, 2, 3, 4] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroMinotaur.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.HeroMinotaur, { frames: [9, 10, 11, 12, 13, 14, 15, 16] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroMinotaur.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.HeroMinotaur, { frames: [36, 37, 38, 39, 40, 41, 42, 43, 44] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroMinotaur.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.HeroMinotaur, { frames: [45, 46, 47, 48, 49, 50] }),
        frameRate: 8,
        repeat: 0
    });

    // Hero Stormhead 
    scene.anims.create({
        key: CST.ANIMATIONS.HeroStormhead.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.HeroStormhead, { frames: [1, 6, 11, 16, 21, 26, 31, 36, 41] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroStormhead.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.HeroStormhead, { frames: [4, 9, 14, 19, 24, 29, 34, 39, 44] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroStormhead.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.HeroStormhead, { frames: [2, 7, 12, 17, 22, 27, 32, 37, 42, 47] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroStormhead.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.HeroStormhead, { frames: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroStormhead.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.HeroStormhead, { frames: [3, 8, 13, 18, 23, 28, 33, 38] }),
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
        key: CST.ANIMATIONS.HeroWizard.IdleWindow,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroWizard, { frames: [40, 41, 42, 43, 44, 45] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.HeroWizard.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.HeroWizard, { frames: [16, 17, 18, 19, 20, 21, 22, 23] }),
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

    // Boss Cthulhu
    scene.anims.create({
        key: CST.ANIMATIONS.BossCthulhu.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITECTHULHU.BossCthulhu, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossCthulhu.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITECTHULHU.BossCthulhu, { frames: [24, 25, 26, 27, 28, 29, 30, 31] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossCthulhu.Brainstorm,
        frames: scene.anims.generateFrameNumbers(CST.SPRITECTHULHU.BossCthulhu, { frames: [48, 49, 50, 51, 52, 53, 54, 55] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossCthulhu.Tentacle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITECTHULHU.BossCthulhu, { frames: [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossCthulhu.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITECTHULHU.BossCthulhu, { frames: [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89] }),
        frameRate: 8,
        repeat: 0
    });

    // Boss Black Dragon
    scene.anims.create({
        key: CST.ANIMATIONS.BossBlackDragon.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITESDRAGON.BossBlackDragon, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossBlackDragon.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITESDRAGON.BossBlackDragon, { frames: [16, 17, 18, 19, 20, 21, 22, 23] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossBlackDragon.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITESDRAGON.BossBlackDragon, { frames: [32, 33, 34, 35, 36, 37, 38, 39] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossBlackDragon.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITESDRAGON.BossBlackDragon, { frames: [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77] }),
        frameRate: 8,
        repeat: 0
    });

     // Boss Demon
     scene.anims.create({
        key: CST.ANIMATIONS.BossDemon.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES240.BossDemon, { frames: [11, 12, 13, 14, 15, 16] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossDemon.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES240.BossDemon, { frames: [11, 12, 13, 14, 15, 16] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossDemon.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES240.BossDemon, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossDemon.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES240.BossDemon, { frames: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32] }),
        frameRate: 8,
        repeat: 0
    });

    // Boss Cultist
    scene.anims.create({
        key: CST.ANIMATIONS.BossCultist.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES200.BossCultist, { frames: [6, 7, 8, 9, 10] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossCultist.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES200.BossCultist, { frames: [12, 13, 14, 15, 16, 17] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossCultist.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES200.BossCultist, { frames: [0, 1, 2, 3, 4] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossCultist.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES200.BossCultist, { frames: [18, 19, 20, 21, 22, 23] }),
        frameRate: 8,
        repeat: 0
    });

     // Boss Mother Miranda
     scene.anims.create({
        key: CST.ANIMATIONS.BossMiranda.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES200.BossMiranda, { frames: [13, 14, 15, 16, 17] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossMiranda.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES200.BossMiranda, { frames: [13, 14, 15, 16, 17] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossMiranda.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES200.BossMiranda, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.BossMiranda.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES200.BossMiranda, { frames: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35] }),
        frameRate: 8,
        repeat: 0
    });

    // Summon Golem
    scene.anims.create({
        key: CST.ANIMATIONS.SummonGolem.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.SummonGolem, { frames: [0, 1, 2, 3, 4] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.SummonGolem.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.SummonGolem, { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.SummonGolem.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.SummonGolem, { frames: [16, 17, 18, 19, 20, 21, 22] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.SummonGolem.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.SummonGolem, { frames: [32, 33, 34, 35, 36] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Slime
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlime.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterSlime, { frames: [0, 1, 2, 3] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlime.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterSlime, { frames: [7, 8, 9, 10, 11, 12] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlime.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterSlime, { frames: [14, 15, 16, 17, 18, 19, 20] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSlime.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterSlime, { frames: [28, 29, 30, 31, 32] }),
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

    // Monster Hellhound
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHellhound.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.MonsterHellhound, { frames: [0, 1, 2, 3, 4, 5] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHellhound.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.MonsterHellhound, { frames: [14, 15, 16, 17, 18] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHellhound.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.MonsterHellhound, { frames: [7, 8, 9, 10, 11] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterHellhound.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES48.MonsterHellhound, { frames: [21, 22, 23, 24, 25, 26, 27] }),
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

    // Monster Bot
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBot.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES40.MonsterBot, { frames: [0, 4, 8, 12] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBot.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES40.MonsterBot, { frames: [2, 6, 10, 14, 18, 22, 26, 30] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBot.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES40.MonsterBot, { frames: [1, 5, 9, 13] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBot.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES40.MonsterBot, { frames: [3, 7, 11, 15, 19, 23] }),
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

    // Monster Worm
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterWorm.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES90.MonsterWorm, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterWorm.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES90.MonsterWorm, { frames: [16, 17, 18, 19, 20, 21, 22, 23, 24] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterWorm.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES90.MonsterWorm, { frames: [32, 33, 34, 35, 36, 37, 38, 39, 40] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterWorm.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES90.MonsterWorm, { frames: [48, 49, 50, 51, 52, 53, 54, 55] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Dark Knight
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterDarkKnight.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterDarkKnight, { frames: [0, 1, 2, 3] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterDarkKnight.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterDarkKnight, { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterDarkKnight.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterDarkKnight, { frames: [24, 25, 26, 27, 28, 29] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterDarkKnight.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES32.MonsterDarkKnight, { frames: [16, 17, 18, 19, 20, 21, 22, 23] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster IEM
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterIEM.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterIEM, { frames: [0, 1, 2, 3, 4, 5, 6] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterIEM.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterIEM, { frames: [0, 1, 2, 3, 4, 5, 6] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterIEM.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterIEM, { frames: [7, 8, 9, 10, 11, 12, 13] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterIEM.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES64.MonsterIEM, { frames: [14, 15, 16, 17, 18, 19, 20] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Toaster
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterToaster.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_TOASTER.MonsterToaster, { frames: [0, 1, 2, 3, 4] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterToaster.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_TOASTER.MonsterToaster, { frames: [11, 12, 13, 14, 15, 16, 17, 18] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterToaster.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_TOASTER.MonsterToaster, { frames: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterToaster.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_TOASTER.MonsterToaster, { frames: [33, 34, 35, 36, 37, 38, 39] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Sprout
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSprout.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.MonsterSprout, { frames: [1, 5, 9, 13] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSprout.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.MonsterSprout, { frames: [2, 6, 10, 14, 18] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSprout.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.MonsterSprout, { frames: [0, 4, 8, 12, 16, 20] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSprout.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES96.MonsterSprout, { frames: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51] }),
        frameRate: 8,
        repeat: 0
    });

     // Monster Bringer
     scene.anims.create({
        key: CST.ANIMATIONS.MonsterBringer.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES140.MonsterBringer, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBringer.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES140.MonsterBringer, { frames: [14, 15, 16, 17, 18, 19, 20, 21] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBringer.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES140.MonsterBringer, { frames: [28, 29, 30, 31, 32, 33, 34, 35] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterBringer.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES140.MonsterBringer, { frames: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55] }),
        frameRate: 8,
        repeat: 0
    });


    // Monster Reaper
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterReaper.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES100.MonsterReaper, { frames: [36, 37, 42, 43] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterReaper.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES100.MonsterReaper, { frames: [36, 37, 42, 43] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterReaper.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES100.MonsterReaper, { frames: [0, 1, 2, 3, 4, 5] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterReaper.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES100.MonsterReaper, { frames: [54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Necromancer
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterNecromancer.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.MonsterNecromancer, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterNecromancer.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.MonsterNecromancer, { frames: [13, 14, 15, 16, 17, 18] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterNecromancer.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.MonsterNecromancer, { frames: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterNecromancer.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES128.MonsterNecromancer, { frames: [39, 40, 41, 42, 43, 44, 45, 46, 47] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Soul Wizard
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSoulWizard.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES250.MonsterSoulWizard, { frames: [16, 17, 18, 19, 20, 21, 22, 23] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSoulWizard.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES250.MonsterSoulWizard, { frames: [24, 25, 26, 27, 28, 29, 30, 31] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSoulWizard.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES250.MonsterSoulWizard, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterSoulWizard.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES250.MonsterSoulWizard, { frames: [32, 33, 34, 35, 36, 37, 38] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Fire Wizard
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterFireWizard.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES150.MonsterFireWizard, { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterFireWizard.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES150.MonsterFireWizard, { frames: [16, 17, 18, 19, 20, 21, 22, 23] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterFireWizard.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES150.MonsterFireWizard, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterFireWizard.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES150.MonsterFireWizard, { frames: [24, 25, 26, 27, 28, 29, 30, 31] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Guardian
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGuardian.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES120.MonsterGuardian, { frames: [2, 7, 12, 17, 22, 27] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGuardian.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES120.MonsterGuardian, { frames: [3, 8, 13, 18, 23, 28, 33, 38] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGuardian.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES120.MonsterGuardian, { frames: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterGuardian.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES120.MonsterGuardian, { frames: [4, 9, 14, 19, 24, 29, 34, 39, 44, 49] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Miner
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterMiner.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES196.MonsterMiner, { frames: [2, 7, 12, 17] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterMiner.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES196.MonsterMiner, { frames: [3, 8, 13, 18, 23, 28, 33, 38] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterMiner.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES196.MonsterMiner, { frames: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterMiner.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES196.MonsterMiner, { frames: [4, 9, 14, 19, 24, 29, 34, 39, 44, 49] }),
        frameRate: 8,
        repeat: 0
    });

    // Monster Nanny
    scene.anims.create({
        key: CST.ANIMATIONS.MonsterNanny.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.MonsterNanny, { frames: [1, 5, 9, 13, 17] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterNanny.Walk,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.MonsterNanny, { frames: [2, 6, 10, 14, 18, 22, 26, 30] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterNanny.Hit,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.MonsterNanny, { frames: [0, 4, 8, 12, 16, 20, 24, 28] }),
        frameRate: 8,
        repeat: 0
    });

    scene.anims.create({
        key: CST.ANIMATIONS.MonsterNanny.Death,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES80.MonsterNanny, { frames: [3, 7, 11, 15, 19, 23, 27, 31] }),
        frameRate: 8,
        repeat: 0
    });

    // Thunderstruck
    scene.anims.create({
        key: CST.SPRITES64.Thunderstrike,
        frames: scene.anims.generateFrameNumbers(CST.EFFECTS.Thunderstrike, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }),
        frameRate: 8,
        repeat: 0
    });

    // Podkova
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingPodkova.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES360.BuildingPodkova, { frames: [0, 1, 2, 3] }),
        frameRate: 2,
        repeat: -1
    });
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingPodkova.Use,
        frames: scene.anims.generateFrameNumbers(CST.SPRITES360.BuildingPodkova, { frames: [0, 1, 2, 3] }),
        frameRate: 2,
        repeat: -1
    });

    // MP Obelisk
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingMPObelisk.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_MP_OBELISK.BuildingMPObelisk, { frames: [14, 15, 16, 17, 18, 19, 20, 21] }),
        frameRate: 8,
        repeat: -1
    });
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingMPObelisk.Use,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_MP_OBELISK.BuildingMPObelisk, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] }),
        frameRate: 8,
        repeat: 0
    });

    // HP Obelisk
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingHPObelisk.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_HP_OBELISK.BuildingHPObelisk, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }),
        frameRate: 8,
        repeat: -1
    });
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingHPObelisk.Use,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_HP_OBELISK.BuildingHPObelisk, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }),
        frameRate: 8,
        repeat: 0
    });

    // CD Obelisk
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingCDObelisk.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_CD_OBELISK.BuildingCDObelisk, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }),
        frameRate: 8,
        repeat: -1
    });
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingCDObelisk.Use,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_CD_OBELISK.BuildingCDObelisk, { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }),
        frameRate: 8,
        repeat: 0
    });

    // Plasma gun
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingPlasmaGun.Idle,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_PLASMA_GUN.BuildingPlasmaGun, { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
        frameRate: 16,
        repeat: -1
    });
    scene.anims.create({
        key: CST.ANIMATIONS.BuildingPlasmaGun.Use,
        frames: scene.anims.generateFrameNumbers(CST.SPRITE_PLASMA_GUN.BuildingPlasmaGun, { frames: [0, 1, 2, 3] }),
        frameRate: 48,
        repeat: 15
    });
}