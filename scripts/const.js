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
        HeroSpawnArea: {
            X0: 620,
            Y0: 530,
            X1: 700,
            Y1: 620
        },
        MonsterSpawnArea: {
            X0: 1550,
            Y0: 530,
            X1: 1600,
            Y1: 620
        },
        SaveDataDelay: 60000
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
        HeroCenturion: "iconHeroCenturion",
        HeroNightmare: "iconHeroNightmare",
        HeroWizard: "iconHeroWizard",
    },
    SPRITES32: {
        MonsterTwig: "monster_twig",
        MonsterBrainer: "monster_brainer",
        MonsterGhoul: "monster_ghoul",
        MonsterHedgehog: "monster_hedgehog",
        HeroCat: "hero_cat",
        HeroCenturion: "hero_centurion"
    },
    SPRITES64: {
        MonsterSlayer: "monster_slayer"
    },
    SPRITES80: {
        HeroNightmare: "hero_nightmare",
        HeroWizard: "hero_wisard"
    },
    AUDIO: [
    ],
    MONSTERLIST: ["MonsterTwig", "MonsterBrainer", "MonsterGhoul", "MonsterHedgehog", "MonsterSlayer"],
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
        },
        HeroCenturion: {
            Idle: 'hero_centurion_idle',
            Walk: 'hero_centurion_walk',
            Hit: 'hero_centurion_hit',
            Death: 'hero_centurion_death'
        },
        HeroNightmare: {
            Idle: 'hero_nightmare_idle',
            Walk: 'hero_nightmare_walk',
            Hit: 'hero_nightmare_hit',
            Death: 'hero_nightmare_death'
        },
        HeroWizard: {
            Idle: 'hero_wizard_idle',
            Walk: 'hero_wizard_walk',
            Hit: 'hero_wizard_hit',
            Death: 'hero_wizard_death'
        }
    },
    CHARACTERS: {
        MonsterTwig: {
            HealPoints: 500,
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
            SpawnCooldown: 300,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50
        },
        HeroCenturion: {
            Name: "Центурион Рори",
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
        HeroNightmare: {
            Name: "Кошмар",
            HealPoints: 1500,
            PhysicalDamage: 100,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 150
        },
        HeroWizard: {
            Name: "Чародей",
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
            Speed: 100
        }
    },
    PARUS: {
        0: {
            MaxHP: 250,
            MaxMP: 250,
            HeroSlots: 1,
            BuildingSlots: 0
        },
        1: {
            MaxHP: 500,
            MaxMP: 500,
            HeroSlots: 2,
            BuildingSlots: 0
        },
        2: {
            MaxHP: 1000,
            MaxMP: 1000,
            HeroSlots: 3,
            BuildingSlots: 0
        },
        3: {
            MaxHP: 1250,
            MaxMP: 1250,
            HeroSlots: 4,
            BuildingSlots: 1
        },
        4: {
            MaxHP: 1500,
            MaxMP: 1500,
            HeroSlots: 5,
            BuildingSlots: 2
        },
        5: {
            MaxHP: 500000,
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
    },
    WAVE_GENERATOR: {
        MinSpawnDelay: 500,
        SpawnDelayVariety: 100,
        PlateauSpawnWave: 1000,
        MinMonsterAmount: 5,
        MonsterWaveCoefficient: 5,
        MaximumMomentMonsters: 30,
        MonsterPreferences: {
            MonsterTwig: {
                MinWave: 1,
                MaxWave: 50,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            MonsterBrainer: {
                MinWave: 1,
                MaxWave: 50,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            MonsterGhoul: {
                MinWave: 1,
                MaxWave: 50,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            MonsterHedgehog: {
                MinWave: 1,
                MaxWave: 50,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            MonsterSlayer: {
                MinWave: 1,
                MaxWave: 50,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            }
        }
    }
}