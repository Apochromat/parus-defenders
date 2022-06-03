export const CST = {
    EMPTY: "Empty",
    SCENES: {
        MENU: "MENU",
        PLAY: "PLAY",
        LOAD: "LOAD"
    },
    NUMBERS: {
        WIDTH: 1500,
        HEIGHT: 720,
        ParusX: 410,
        ParusY: 415,
        SpawnAreaX0: 620,
        SpawnAreaY0: 530,
        SpawnAreaX1: 700,
        SpawnAreaY1: 620,
        SaveDataDelay: 10000
    },
    IMAGES: {
        BackgroundEvening: 'backgroundEvening',
        BackgroundMenu: 'backgroundMenu',
        Background: "background",
        Parus: "parus",
        CharacterWindow: "characterWindow",
        PlayButton: 'playButton',
        BattleButton: "newWaveButton",
        OptionsButton: 'optionsButton',
        StatusBar: "statusBar",
        ToolBarClose: "toolBarClose",
        ToolBarLeft: "toolBarLeft",
        ToolBarRight: "toolBarRight",
        ToolBarField: "toolBarField",
        HeroesBarClose: "heroesBarClose",
        HeroesBarField: "heroesBarField"
    },
    ICONS: {
        HPIcon: "icon_hp",
        HeroCat: "iconHeroCat",
        HeroCat2: "iconHeroCat2",
        HeroCat3: "iconHeroCat3",
        HeroCat4: "iconHeroCat4",
        HeroCat5: "iconHeroCat5",
        HeroCat6: "iconHeroCat6",
        HeroCat7: "iconHeroCat7",
        HeroCat8: "iconHeroCat8"
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
    CHARACTERS: {
        MonsterTwig: {
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            Speed: 150,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 25,
            Experience: 10
        },
        MonsterBrainer: {
            HealPoints: 2000,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            Speed: 100,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 25,
            Experience: 10
        },
        MonsterGhoul: {
            HealPoints: 3000,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            Speed: 100,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 25,
            Experience: 10
        },
        MonsterHedgehog: {
            HealPoints: 4000,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            Speed: 75,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 25,
            Experience: 10
        },
        MonsterSlayer: {
            HealPoints: 5000,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            Speed: 50,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 25,
            Experience: 10
        },
        HeroCat: {
            Name: "Кот-Рыцарь",
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        },
        HeroCat2: {
            Name: "Кот-Рыцарь 2",
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        },
        HeroCat3: {
            Name: "Кот-Рыцарь 3",
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        },
        HeroCat4: {
            Name: "Кот-Рыцарь 4",
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        },
        HeroCat5: {
            Name: "Кот-Рыцарь 5",
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        },
        HeroCat6: {
            Name: "Кот-Рыцарь 6",
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        },
        HeroCat7: {
            Name: "Кот-Рыцарь 7",
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        },
        HeroCat8: {
            Name: "Кот-Рыцарь 8",
            HealPoints: 1500,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        }
    },
    PARUS: {
        0 : {
            MaxHP: 250,
            MaxMP: 250,
            HeroSlots: 1,
            BuildingSlots: 0
        },
        1 : {
            MaxHP: 500,
            MaxMP: 500,
            HeroSlots: 2,
            BuildingSlots: 0
        },
        2 : {
            MaxHP: 1000,
            MaxMP: 1000,
            HeroSlots: 3,
            BuildingSlots: 0
        },
        3 : {
            MaxHP: 1250,
            MaxMP: 1250,
            HeroSlots: 4,
            BuildingSlots: 1
        },
        4 : {
            MaxHP: 1500,
            MaxMP: 1500,
            HeroSlots: 5,
            BuildingSlots: 2
        },
        5 : {
            MaxHP: 2000,
            MaxMP: 2000,
            HeroSlots: 6,
            BuildingSlots: 3
        }
    },
    HERO_SLOTS: {
        0: {
            x: 300,
            y: 546
        },
        1: {
            x: 520,
            y: 546
        },
        2: {
            x: 300,
            y: 434
        },
        3: {
            x: 520,
            y: 434
        },
        4: {
            x: 300,
            y: 315
        },
        5: {
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
        HeroesBarRecyclerView: 5007,
        Slots: 1000
    }
}