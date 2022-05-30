export const CST = {
    SCENES: {
        MENU: "MENU",
        PLAY: "PLAY",
        LOAD: "LOAD"
    },
    NUMBERS: {
        WIDTH: 1500,
        HEIGHT: 720
    },
    IMAGES: {
        BackgroundEvening: 'backgroundEvening',
        BackgroundMenu: 'backgroundMenu',
        Background: "background",
        Parus: "parus",
        PlayButton: 'playButton',
        OptionsButton: 'optionsButton',
        StatusBar: "statusBar"
    },
    SPRITES32: {
        MonsterTwig: "monster_twig",
        MonsterBrainer: "monster_brainer",
        MonsterGhoul: "monster_ghoul",
        MonsterHedgehog: "monster_hedgehog"
    },
    SPRITES64: {
        MonsterSlayer: "monster_slayer"
    },
    AUDIO: [

    ],
    MONSTERLIST: ["twig", "brainer", "ghoul", "hedgehog", "slayer"],
    ANIMATIONS: {
        MonsterTwig: {
            Idle: 'monster_twig_idle',
            Walk: 'monster_twig_walk',
            Hit: 'monster_twig_hit',
            Death: 'monster_twig_death'
        },
        MonsterBrainer: {
            Idle: 'monster_brainer_idle',
            Walk: 'monster_brainer_walk',
            Hit: 'monster_brainer_hit',
            Death: 'monster_brainer_death'
        },
        MonsterGhoul: {
            Idle: 'monster_ghoul_idle',
            Walk: 'monster_ghoul_walk',
            Hit: 'monster_ghoul_hit',
            Death: 'monster_ghoul_death'
        },
        MonsterHedgehog: {
            Idle: 'monster_hedgehog_idle',
            Walk: 'monster_hedgehog_walk',
            Hit: 'monster_hedgehog_hit',
            Death: 'monster_hedgehog_death'
        },
        MonsterSlayer: {
            Idle: 'monster_slayer_idle',
            Walk: 'monster_slayer_walk',
            Hit: 'monster_slayer_hit',
            Death: 'monster_slayer_death'
        }
    },
    CHARACTERS: {
        MonsterTwig: {
            HealPoints: 1000,
            Damage: 10,
            Cooldown: 10,
            Speed: 150,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        MonsterBrainer: {
            HealPoints: 2000,
            Damage: 10,
            Cooldown: 10,
            Speed: 100,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        MonsterGhoul: {
            HealPoints: 3000,
            Damage: 10,
            Cooldown: 10,
            Speed: 100,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        MonsterHedgehog: {
            HealPoints: 4000,
            Damage: 10,
            Cooldown: 10,
            Speed: 75,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        MonsterSlayer: {
            HealPoints: 5000,
            Damage: 10,
            Cooldown: 10,
            Speed: 50,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        }
    }

}