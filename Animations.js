export function createAnimations (scene) {
    scene.anims.create({
        key: 'monster_twig_idle',
        frames: scene.anims.generateFrameNumbers('monster_twig', { frames: [ 0, 1, 2, 3 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: 'monster_twig_walk',
        frames: scene.anims.generateFrameNumbers('monster_twig', { frames: [ 8, 9, 10, 11, 12, 13, 14, 15 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: 'monster_twig_kick',
        frames: scene.anims.generateFrameNumbers('monster_twig', { frames: [ 16, 17, 18, 19, 20, 21 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: 'monster_twig_jump',
        frames: scene.anims.generateFrameNumbers('monster_twig', { frames: [ 24, 25, 26, 27, 28 ] }),
        frameRate: 8,
        repeat: -1
    });

    scene.anims.create({
        key: 'monster_twig_death',
        frames: scene.anims.generateFrameNumbers('monster_twig', { frames: [ 32, 33, 34, 35, 36, 37 ] }),
        frameRate: 8,
        repeat: 0
    });

}