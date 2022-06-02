export const CST = {
    SCENES: {
        MENU: "MENU",
        PLAY: "PLAY",
        LOAD: "LOAD"
    },
    NUMBERS: {
        WIDTH: 1500,
        HEIGHT: 720,
        ParusX: 410,
        ParusY: 415
    },
    IMAGES: {
        BackgroundEvening: 'backgroundEvening',
        BackgroundMenu: 'backgroundMenu',
        Background: "background",
        Parus: "parus",
        CharacterWindow: "characterWindow",
        HPIcon: "icon_hp",
        PlayButton: 'playButton',
        BattleButton: "newWaveButton",
        OptionsButton: 'optionsButton',
        StatusBar: "statusBar",
        ToolBarClose: "toolBarClose",
        ToolBarLeft: "toolBarLeft",
        ToolBarRight: "toolBarRight",
        ToolBarField: "toolBarField",
        HeroesBarClose: "heroesBarClose",
        HeroesBarField: "heroesBarField",
        CatKnight: "catKnight"
    },
    SPRITES32: {
        MonsterTwig: "monster_twig",
        MonsterBrainer: "monster_brainer",
        MonsterGhoul: "monster_ghoul",
        MonsterHedgehog: "monster_hedgehog",
        HeroCat: "hero_cat"
    },
    SPRITES64: {
        MonsterSlayer: "monster_slayer"
    },
    AUDIO: [

    ],
    MONSTERLIST: ["twig", "brainer", "ghoul", "hedgehog", "slayer"],
    SHOPLIST: {
        ParusHP: {
            Name: "Укрепить Парус",
            Description: "Увеличение HP Паруса",
            LevelCost: [
                100, 
                250, 
                1000,
                5000,
                15000,
                30000,
                50000,
                80000,
                125000,
                250000
            ]
        },
        ParusMP: {
            Name: "Укрепить Парус",
            Description: "Увеличение MP Паруса",
            LevelCost: [
                100, 
                250, 
                1000,
                5000,
                15000,
                30000,
                50000,
                80000,
                125000,
                250000
            ]
        },
        ParusDEF: {
            Name: "Укрепить Парус",
            Description: "Увеличение защиты Паруса",
            LevelCost: [
                100, 
                250, 
                1000,
                5000,
                15000,
                30000,
                50000,
                80000,
                125000,
                250000
            ]
        },
        CatKnight: {
            Name: "Укрепить Кота",
            Description: "Увеличение урон Кота\n бла-бла-бла",
            LevelCost: [
                100, 
                250, 
                1000,
                5000,
                15000,
                30000,
                50000,
                80000,
                125000,
                250000,
                500000,
                1000000,
                10000000
            ]
        },
        CatNinja: {
            Name: "Укрепить Кота",
            Description: "Увеличение урон Кота\n бла-бла-бла",
            LevelCost: [
                100, 
                250, 
                1000,
                5000,
                15000,
                30000,
                50000,
                80000,
                125000,
                250000
            ]
        },
        CatMag: {
            Name: "Укрепить Кота",
            Description: "Увеличение уронa\n Кота\n бла-бла\n-бла",
            LevelCost: [
                100, 
                250, 
                1000,
                5000,
                15000,
                30000,
                50000,
                80000,
                125000,
                250000
            ]
        }
    },
    SKILLSLIST: {
        Cooldown: {
            Name: "Cooldown",
            Description: "Уменьшение времени \nперезарядки"
        },
    },
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
        },
        HeroCat: {
            Idle: 'hero_cat_idle',
            Walk: 'hero_cat_walk',
            Hit: 'hero_cat_hit',
            Death: 'hero_cat_death'
        }
    },
    HEROES: {
        HeroCat: {
            Name: "Кот-Рыцарь",
            HealPoints: 1500,
            Damage: 500,
            Cooldown: 1000,
            Speed: 50,
        },
        HeroCat2: {
            Name: "Кот-Рыцарь",
            HealPoints: 1500,
            Damage: 500,
            Cooldown: 1000,
            Speed: 50,
        },
        HeroCat3: {
            Name: "Кот-Рыцарь",
            HealPoints: 1500,
            Damage: 500,
            Cooldown: 1000,
            Speed: 50,
        },
        HeroCat4: {
            Name: "Кот-Рыцарь",
            HealPoints: 1500,
            Damage: 500,
            Cooldown: 1000,
            Speed: 50,
        }
    },
    CHARACTERS: {
        MonsterTwig: {
            HealPoints: 1500,
            Damage: 10,
            Cooldown: 1000,
            Speed: 150,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        MonsterBrainer: {
            HealPoints: 2000,
            Damage: 25,
            Cooldown: 1000,
            Speed: 100,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        MonsterGhoul: {
            HealPoints: 3000,
            Damage: 50,
            Cooldown: 1000,
            Speed: 100,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        MonsterHedgehog: {
            HealPoints: 4000,
            Damage: 40,
            Cooldown: 1000,
            Speed: 75,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        MonsterSlayer: {
            HealPoints: 5000,
            Damage: 75,
            Cooldown: 1000,
            Speed: 50,
            PhysicalProtection: 10,
            MagicProtection: 10,
            Cost: 25
        },
        HeroCat: {
            HealPoints: 1500,
            Damage: 500,
            Cooldown: 1000,
            Speed: 50,
        }
    },
    PARUS: {
        0 : {
            MaxHP: 500,
            MaxMP: 500,
            InsideHeroSlots: 2,
            OutsideHeroSlots: 0,
            isBuildingAvailable: false
        },
        1 : {
            MaxHP: 1000,
            MaxMP: 1000,
            InsideHeroSlots: 3,
            OutsideHeroSlots: 0,
            isBuildingAvailable: false
        },
        2 : {
            MaxHP: 1250,
            MaxMP: 1250,
            InsideHeroSlots: 4,
            OutsideHeroSlots: 0,
            isBuildingAvailable: false
        },
        3 : {
            MaxHP: 1500,
            MaxMP: 1500,
            InsideHeroSlots: 5,
            OutsideHeroSlots: 0,
            isBuildingAvailable: false
        },
        4 : {
            MaxHP: 2000,
            MaxMP: 2000,
            InsideHeroSlots: 6,
            OutsideHeroSlots: 0,
            isBuildingAvailable: false
        }
    },
    INSIDEHEROSLOTS: {
        1: {
            x: 300,
            y: 546
        },
        2: {
            x: 520,
            y: 546
        },
        3: {
            x: 300,
            y: 434
        },
        4: {
            x: 520,
            y: 434
        },
        5: {
            x: 300,
            y: 315
        },
        6: {
            x: 520,
            y: 315
        },
    },
    DEPTHS: {
        ToolBarClose: 5000,
        ToolBarField: 5002,
        ToolBarPrimal: 5003,
        ToolBarMinor: 5001,
        ToolBarRecyclerView: 5004,
        HeroesBarField: 5006,
        HeroesBarClose: 5006,
        HeroesBarRecyclerView: 5007
    }

}