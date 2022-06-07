export const CST = {
    EMPTY: "Empty",
    SCENES: {
        MENU: "MENU",
        OPTIONS: "OPTIONS",
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
        BackgroundOptions: 'backgroundOptions',
        Background: "background",
        SwitchON: "switchOn",
        SwitchOFF: "switchOff",
        EraseButton: "eraseButton",
        Parus: "parus",
        CharacterWindow: "characterWindow",
        PlayButton: 'playButton',
        BattleButton: "newWaveButton",
        OptionsButton: 'optionsButton',
        BackButton: 'backButton',
        StatusBar: "statusBar",
        ToolBarClose: "toolBarClose",
        ToolBarLeft: "toolBarLeft",
        ToolBarRight: "toolBarRight",
        ToolBarField: "toolBarField",
        HeroesBarClose: "heroesBarClose",
        HeroesBarField: "heroesBarField"
    },
    ICONS: {
        Parus: "icon_parus",
        BonusGold: "icon_coin",
        BonusExperience: "icon_experience",
        SpawnCooldown: "icon_cooldown",
        Damage: "icon_damage",
        HealPoints: "icon_hp",
        CriticalChance: "icon_critical_chance",
        CriticalDamage: "icon_critical_damage",
        ParusDefense: "icon_defense",
        Speed: "icon_speed",
        MPRecovery: "icon_mp",
        PhisicalDamage: "icon_phisical_damage",
        MagicDamage: "icon_magic_damage",
        PoisonDamage: "icon_poison_damage",
        HeroCat: "iconHeroCat",
        HeroCenturion: "iconHeroCenturion",
        HeroNightmare: "iconHeroNightmare",
        HeroWizard: "iconHeroWizard"
    },
    SPRITES32: {
        MonsterSlime: "monster_slime",
        MonsterTwig: "monster_twig",
        MonsterBrainer: "monster_brainer",
        MonsterGhoul: "monster_ghoul",
        MonsterHedgehog: "monster_hedgehog",
        HeroCat: "hero_cat",
        HeroCenturion: "hero_centurion"
    },
    SPRITES48: {
        MonsterHellhound: "monster_hellhound"
    },
    SPRITES64: {
        MonsterSlayer: "monster_slayer"
    },
    SPRITES80: {
        HeroNightmare: "hero_nightmare",
        HeroWizard: "hero_wisard"
    },
    SPRITESDRAGON: {
        BossBlackDragon: "boss_black_dragon"
    },
    SPRITECTHULHU: {
        BossCthulhu: "boss_cthulhu"
    },
    MUSIC: {
        Psychosocial: "8-Bit_Misfits_Psychosocial"
    },
    MONSTERLIST: ["MonsterSlime", "MonsterTwig", "MonsterBrainer", "MonsterHellhound", "MonsterGhoul", "MonsterHedgehog", "MonsterSlayer", "BossBlackDragon", "BossCthulhu"],
    SHOPLIST: {
        Parus: {
            Name: "Укрепить Парус",
            Description: "Увеличение HP и MP Паруса",
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
        HeroCat: {
            Name: "Укрепить Кота-рыцаря",
            Description: "Увеличение HP и MP Паруса",
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
        HeroCenturion: {
            Name: "Укрепить Рори",
            Description: "Увеличение HP и MP Паруса",
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
        HeroNightmare: {
            Name: "Укрепить Кошмара",
            Description: "Увеличение HP и MP Паруса",
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
        HeroWizard: {
            Name: "Укрепить Чародея",
            Description: "Увеличение HP и MP Паруса",
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
        BonusGold: {
            Name: "Бонусные монеты",
            Description: "Увеличение выпадаемых \nмонет",
            Levels: [
                "+0%",
                "+2.5%",
                "+5%",
                "+7.5%",
                "+10%",
                "+12.5%",
                "+15%",
                "+17.5%",
                "+20%",
                "+22.5%",
                "+25%",
                "+27.5%",
                "+30%",
                "+32.5%",
                "+35%",
                "+37.5%",
                "+40%",
                "+42.5%",
                "+45%",
                "+47.5%",
                "+50%"
            ]
        },
        BonusExperience: {
            Name: "Бонусный опыт",
            Description: "Увеличение выпадемого \nопыта",
            Levels: [
                "+0%",
                "+5%",
                "+10%",
                "+15%",
                "+20%",
                "+25%",
                "+30%",
                "+35%",
                "+40%",
                "+45%",
                "+50%",
                "+55%",
                "+60%",
                "+65%",
                "+70%",
                "+75%",
                "+80%",
                "+85%",
                "+90%",
                "+95%",
                "+100%"
            ]
        },
        SpawnCooldown: {
            Name: "Перезарядка",
            Description: "Уменьшение времени между \nвызовами героев",
            Levels: [
                "-0%",
                "-2.5%",
                "-5%",
                "-7.5%",
                "-10%",
                "-12.5%",
                "-15%",
                "-17.5%",
                "-20%",
                "-22.5%",
                "-25%",
                "-27.5%",
                "-30%",
                "-32.5%",
                "-35%",
                "-37.5%",
                "-40%",
                "-42.5%",
                "-45%",
                "-47.5%",
                "-50%"
            ]
        },
        Damage: {
            Name: "Урон",
            Description: "Увеличение урона",
            Levels: [
                "+0%",
                "+1.25%",
                "+2.5%",
                "+3.75%",
                "+5%",
                "+6.25%",
                "+7.5%",
                "+8.75%",
                "+10%",
                "+11.25%",
                "+12.5%",
                "+13.75%",
                "+15%",
                "+16.25%",
                "+17.5%",
                "+18.75%",
                "+20%",
                "+21.25%",
                "+22.5%",
                "+23.75%",
                "+25%"
            ]
        },
        HealPoints: {
            Name: "Здоровье",
            Description: "Увеличение здоровья",
            Levels: [
                "+0%",
                "+1.25%",
                "+2.5%",
                "+3.75%",
                "+5%",
                "+6.25%",
                "+7.5%",
                "+8.75%",
                "+10%",
                "+11.25%",
                "+12.5%",
                "+13.75%",
                "+15%",
                "+16.25%",
                "+17.5%",
                "+18.75%",
                "+20%",
                "+21.25%",
                "+22.5%",
                "+23.75%",
                "+25%"
            ]
        },
        CriticalChance: {
            Name: "Критический шанс",
            Description: "Увеличение шанса критического \nурона",
            Levels: [
                "0%",
                "+1%",
                "+2%",
                "+3%",
                "+4%",
                "+5%",
                "+6%",
                "+7%",
                "+8%",
                "+9%",
                "+10%",
                "+11%",
                "+12%",
                "+13%",
                "+14%",
                "+15%",
                "+16%",
                "+17%",
                "+18%",
                "+19%",
                "+20%"
            ]
        },
        CriticalDamage: {
            Name: "Критический урон",
            Description: "Увеличение критического \nурона",
            Levels: [
                "0%",
                "+1%",
                "+2%",
                "+3%",
                "+4%",
                "+5%",
                "+6%",
                "+7%",
                "+8%",
                "+9%",
                "+10%",
                "+11%",
                "+12%",
                "+13%",
                "+14%",
                "+15%",
                "+16%",
                "+17%",
                "+18%",
                "+19%",
                "+20%"
            ]
        },
        ParusDefense: {
            Name: "Защищенность",
            Description: "Увеличение защищенности \nПаруса",
            Levels: [
                "+0%",
                "+2.5%",
                "+5%",
                "+7.5%",
                "+10%",
                "+12.5%",
                "+15%",
                "+17.5%",
                "+20%",
                "+22.5%",
                "+25%",
                "+27.5%",
                "+30%",
                "+32.5%",
                "+35%",
                "+37.5%",
                "+40%",
                "+42.5%",
                "+45%",
                "+47.5%",
                "+50%"
            ]
        },
        Speed: {
            Name: "Скорость",
            Description: "Увеличение скорости \nпередвижения героев",
            Levels: [
                "+0%",
                "+5%",
                "+10%",
                "+15%",
                "+20%",
                "+25%",
                "+30%",
                "+35%",
                "+40%",
                "+45%",
                "+50%",
                "+55%",
                "+60%",
                "+65%",
                "+70%",
                "+75%",
                "+80%",
                "+85%",
                "+90%",
                "+95%",
                "+100%"
            ]
        },
        MPRecovery: {
            Name: "Восстановление маны",
            Description: "Увеличение скорости \nвосстановления маны",
            Levels: [
                "+0%",
                "+5%",
                "+10%",
                "+15%",
                "+20%",
                "+25%",
                "+30%",
                "+35%",
                "+40%",
                "+45%",
                "+50%",
                "+55%",
                "+60%",
                "+65%",
                "+70%",
                "+75%",
                "+80%",
                "+85%",
                "+90%",
                "+95%",
                "+100%"
            ]
        },
        PhisicalDamage: {
            Name: "Физический урон",
            Description: "Увеличение физического \nурона",
            Levels: [
                "+0%",
                "+2.5%",
                "+5%",
                "+7.5%",
                "+10%",
                "+12.5%",
                "+15%",
                "+17.5%",
                "+20%",
                "+22.5%",
                "+25%",
                "+27.5%",
                "+30%",
                "+32.5%",
                "+35%",
                "+37.5%",
                "+40%",
                "+42.5%",
                "+45%",
                "+47.5%",
                "+50%"
            ]
        },
        MagicDamage: {
            Name: "Магический урон",
            Description: "Увеличение магического \nурона",
            Levels: [
                "+0%",
                "+2.5%",
                "+5%",
                "+7.5%",
                "+10%",
                "+12.5%",
                "+15%",
                "+17.5%",
                "+20%",
                "+22.5%",
                "+25%",
                "+27.5%",
                "+30%",
                "+32.5%",
                "+35%",
                "+37.5%",
                "+40%",
                "+42.5%",
                "+45%",
                "+47.5%",
                "+50%"
            ]
        },
        PoisonDamage: {
            Name: "Отравляющий урон",
            Description: "Увеличение отравляющего \nурона",
            Levels: [
                "+0%",
                "+2.5%",
                "+5%",
                "+7.5%",
                "+10%",
                "+12.5%",
                "+15%",
                "+17.5%",
                "+20%",
                "+22.5%",
                "+25%",
                "+27.5%",
                "+30%",
                "+32.5%",
                "+35%",
                "+37.5%",
                "+40%",
                "+42.5%",
                "+45%",
                "+47.5%",
                "+50%"
            ]
        }
    },
    ANIMATIONS: {
        MonsterSlime: {
            Idle: 'monster_slime_idle',
            Walk: 'monster_slime_walk',
            Hit: 'monster_slime_hit',
            Death: 'monster_slime_death'
        },
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
        MonsterHellhound: {
            Idle: 'monster_hellhound_idle',
            Walk: 'monster_hellhound_walk',
            Hit: 'monster_hellhound_hit',
            Death: 'monster_hellhound_death'
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
        BossBlackDragon: {
            Idle: 'boss_black_dragon_idle',
            Walk: 'boss_black_dragon_walk',
            Hit: 'boss_black_dragon_hit',
            Death: 'boss_black_dragon_death'
        },
        BossCthulhu: {
            Idle: 'boss_cthulhu_idle',
            Walk: 'boss_cthulhu_walk',
            Brainstorm: 'boss_cthulhu_brainstorm',
            Tentacle: 'boss_cthulhu_tentacle',
            Death: 'boss_cthulhu_death'
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
        MonsterSlime: {
            HealPoints: 300,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            Speed: 100,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 15,
            Experience: 5
        },
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
            HealPoints: 700,
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
        MonsterHellhound: {
            HealPoints: 700,
            PhysicalDamage: 10,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            Speed: 300,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 25,
            Experience: 10
        },
        MonsterGhoul: {
            HealPoints: 800,
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
            HealPoints: 900,
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
            HealPoints: 1000,
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
        BossCthulhu: {
            HealPoints: 20000,
            PhysicalDamage: 4000,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 2000,
            Speed: 15,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 30000,
            Experience: 100
        },
        BossBlackDragon: {
            HealPoints: 10000,
            PhysicalDamage: 200,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            Speed: 50,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Cost: 10000,
            Experience: 10
        },
        HeroCat: {
            Name: "Кот-Рыцарь",
            HealPoints: 1500,
            PhysicalDamage: 75,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 1000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50,
            MPCost: 25
        },
        HeroCenturion: {
            Name: "Центурион Рори",
            HealPoints: 2000,
            PhysicalDamage: 100,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 5000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 50,
            MPCost: 25
        },
        HeroNightmare: {
            Name: "Кошмар",
            HealPoints: 2500,
            PhysicalDamage: 500,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 10000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 150,
            MPCost: 25
        },
        HeroWizard: {
            Name: "Чародей",
            HealPoints: 1000,
            PhysicalDamage: 200,
            PoisonDamage: 10,
            MagicDamage: 10,
            AttackCooldown: 1000,
            SpawnCooldown: 8000,
            SpawnBatchSize: 3,
            PhysicalProtection: 10,
            PoisonProtection: 10,
            MagicProtection: 10,
            Speed: 100,
            MPCost: 25
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
    },
    WAVE_GENERATOR: {
        MinSpawnDelay: 500,
        SpawnDelayVariety: 100,
        PlateauSpawnWave: 1000,
        MinMonsterAmount: 5,
        MonsterWaveCoefficient: 5,
        MaximumMomentMonsters: 30,
        MonsterPreferences: {
            MonsterSlime: {
                MinWave: 1,
                MaxWave: 50,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
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
                MinWave: 5,
                MaxWave: 50,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            MonsterHellhound: {
                MinWave: 10,
                MaxWave: 50,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            MonsterGhoul: {
                MinWave: 15,
                MaxWave: 80,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            MonsterHedgehog: {
                MinWave: 15,
                MaxWave: -1,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            MonsterSlayer: {
                MinWave: 20,
                MaxWave: -1,
                MinBatch: 3,
                MaxBatch: 5,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            BossBlackDragon: {
                MinWave: 40,
                MaxWave: 50,
                MinBatch: 1,
                MaxBatch: 1,
                HealthBoost: 0.1,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            },
            BossCthulhu: {
                MinWave: 40,
                MaxWave: 50,
                MinBatch: 1,
                MaxBatch: 1,
                HealthBoost: 0.2,
                AttackBoost: 0.1,
                BatchComparativeBoost: 0.1
            }
        }
    },
    LEVELS_EXP:{
        1: 10,
        2: 50,
        3: 100,
        4: 250,
        5: 500
    }
}