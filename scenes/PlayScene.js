import { CST } from "../scripts/const.js";
import { battle } from "../scripts/Battle.js";
import { createAnimations } from "../scripts/Animations.js";
import { createStatusBar, setStatusHP, setStatusMP, setStatusLVL, setStatusCOIN, setStatusWAVE } from "../scripts/CreateStatusBar.js";
import { createToolBar, closeToolBar } from "../scripts/CreateToolBar.js";
import { createShopBar, openToolbarLeft } from "../scripts/CreateShopBar.js";
import { createSkillsBar, openToolbarRight } from "../scripts/CreateSkillsBar.js";
import { closeHeroesBar, createHeroesBar } from "../scripts/CreateHeroesBar.js";
import { randomIntFromInterval, toggleFullScreen } from "../scripts/Misc.js";
import { loadPlayerData, savePlayerData } from "../scripts/PlayerData.js";
import { Parus } from "../scripts/Parus.js";
import * as Characters from "../scripts/Characters.js";
import { Wave } from "../scripts/WaveGenerator.js";
export class PlayScene extends Phaser.Scene {

    playerStats;
    enemies;
    heroes;
    parus;
    lastManaRegen;

    graphicsHP;
    graphicsMP;
    graphicsLVL;
    graphicsWAVE;

    titleMP;
    titleHP;
    titleLVL;
    titleWAVE;
    titleCOIN;

    toolBarClose;
    toolBarField;

    itemCurrentHero;
    recyclerViewHeroes;
    heroesBarField;
    heroesBarClose;

    waveObject;

    toolBarLeft;
    recyclerViewShop;
    shopBar;

    toolBarRight;
    recyclerViewSkills;
    skillBar;

    scrollablePanel;
    scrollablePanelBosses;
    scrollablePanelHeroes;
    statusBar;
    backButton;
    fullscreenButton;
    battleButton;

    battleFlag = 0;

    constructor() {
        super({
            key: CST.SCENES.PLAY
        })
    }

    init() {
    }

    preload() {
        this.add.tileSprite(CST.NUMBERS.WIDTH / 2, CST.NUMBERS.HEIGHT / 2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.BackgroundEvening);
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: './libs/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
    }

    create() {
        this.createPlayerStats()
        this.add.tileSprite(CST.NUMBERS.WIDTH / 2, CST.NUMBERS.HEIGHT / 2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.Background);
        this.parus = new Parus(this, 0);
        this.parus.createHeroWindows(this.playerStats);

        this.lastManaRegen = Date.now();

        this.characterHeap = new Characters.CharacterHeap(this);
        this.enemies = this.add.group();
        this.heroes = this.add.group();
        createAnimations(this);

        this.createGUI();
        this.createSpawnMonstersBar();
        this.createSpawnBossBar();
        this.createSpawnHeroesBar();

        // this.setPhysicsEnemies();
    }

    update() {
        if (Date.now() - this.playerStats.Date >= CST.NUMBERS.SaveDataDelay && !this.playerStats.BattleMode) {
            savePlayerData(this.playerStats);
            console.log("Data Saved");
        }
        this.wave();
        this.regenerateMana();
        this.parus.updateLevel(this.playerStats.LEVELS_SHOP.Parus);
        setStatusHP(this, this.parus.currHP, this.parus.maxHP);
        setStatusMP(this, this.parus.currMP, this.parus.maxMP);
        this.updateLVL();
        setStatusLVL(this, this.playerStats.EXPERIENCE, CST.LEVELS_EXP[this.playerStats.LVL], this.playerStats.LVL, this.playerStats.SKILL_POINTS);
        setStatusCOIN(this, this.playerStats.COINS);

        for (let el in this.characterHeap.heap)
            //this.characterHeap.heap[el].damage(randomIntFromInterval(0, 2));

            if (this.playerStats.BattleMode)
                for (let i = 0; i < this.parus.heroWindows.length; i++)
                    this.parus.heroWindows[i].setHeroWindowProgress(this.playerStats);

        if (this.playerStats.BattleMode && this.battleFlag == 0) {
            closeToolBar(this);
            closeHeroesBar(this);
            this.skillBar.visible = false;
            this.shopBar.visible = false;
            this.battleButton.visible = false;
            this.scrollablePanel.visible = false;
            this.scrollablePanelHeroes.visible = false;
            this.battleFlag = 1;
        }
        else if (!this.playerStats.BattleMode && this.battleFlag == 1) {
            this.skillBar.visible = true;
            this.shopBar.visible = true;
            this.battleButton.visible = true;
            this.scrollablePanel.visible = true;
            this.scrollablePanelHeroes.visible = true;

            for (let i = 0; i < this.parus.heroWindows.length; i++) {
                this.parus.heroWindows[i].coof = 1;
                this.parus.heroWindows[i].clearWindowProgress();
            }

            this.battleFlag = 0;
        }
        battle(this.parus, this.enemies, this.heroes, this.characterHeap,this.playerStats);

    }

    wave() {
        if (this.playerStats.BattleMode) {
            if (this.waveObject.boss != undefined) {
                setStatusWAVE(this, 1, this.playerStats.WAVE_PROGRESS, this.playerStats.WAVE, this.waveObject.boss.hp);
            }
            else {
                setStatusWAVE(this, 0, this.playerStats.WAVE_PROGRESS, this.playerStats.WAVE, 0);
            }

            if (!this.waveObject.finished) {
                this.waveObject.run();
            }
            else if (this.enemies.getLength() == 0) {
                this.playerStats.BattleMode = false;
                for (let el in this.characterHeap.heap) {
                    this.characterHeap.heap[el].specs.PhysicalDamage = 0;
                    this.characterHeap.heap[el].setAnimationDeath();
                    this.characterHeap.heap[el].remove();
                }
                this.parus.currHP = this.parus.maxHP;
                this.parus.currMP = this.parus.maxMP;
                this.playerStats.WAVE += 1;
                this.playerStats.WAVE_PROGRESS = 0;
            }
        }
        else {
            setStatusWAVE(this, 0, this.playerStats.WAVE_PROGRESS, this.playerStats.WAVE, 0);
        }
    }

    updateLVL() {
        if (this.playerStats.EXPERIENCE >= CST.LEVELS_EXP[this.playerStats.LVL]) {
            this.playerStats.EXPERIENCE = this.playerStats.EXPERIENCE % CST.LEVELS_EXP[this.playerStats.LVL];
            this.playerStats.LVL += 1;
            this.playerStats.SKILL_POINTS += 1;
        }
    }

    createPlayerStats() {
        this.playerStats = loadPlayerData();
    }

    regenerateMana() {
        if ((Date.now() - this.lastManaRegen) >= (CST.NUMBERS.ManaRegenTime * (1 - this.playerStats.LEVELS_SKILLS.MPRecovery * 2.5 / 100))) {
            this.lastManaRegen = Date.now();
            if (this.parus.currMP < this.parus.maxMP) {
                this.parus.currMP += 1;
            }
        }
    }


    createGUI() {
        createStatusBar(this);
        createToolBar(this);
        createShopBar(this);
        createSkillsBar(this);
        createHeroesBar(this);

        this.battleButton = this.add.image(this.game.renderer.width - 85, this.game.renderer.height - 72, CST.IMAGES.BattleButton).setDepth(CST.DEPTHS.ToolBarField);
        this.battleButton.setInteractive();
        this.battleButton.on("pointerup", () => {
            if (this.waveObject != undefined) {
                delete this.waveObject;
            }
            this.waveObject = new Wave(this, this.playerStats.WAVE);
            this.playerStats.BattleMode = true;
        });

        this.backButton = this.add.image(50, 50, CST.IMAGES.BackButton).setDepth(CST.DEPTHS.ToolBarField);
        this.backButton.setInteractive();
        this.backButton.on("pointerup", () => {
            this.scene.start(CST.SCENES.MENU);
        });
    }

    createSpawnMonstersBar() {
        this.scrollablePanel = this.rexUI.add.scrollablePanel({
            x: 200,
            y: 220,
            width: 200,
            height: 150,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10, 0x3d3d3d),

            panel: {
                child: this.createGrid(this, 1),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            mouseWheelScroller: {
                focus: true,
                speed: 0.1
            },

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                panel: 10,
                header: 10
            }
        }).layout()

        this.scrollablePanel
            .setChildrenInteractive()
            .on('child.click', function (args) {
                console.log(args.text);
                args.scene.characterHeap.createMonster(args.text, args.scene,
                    randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.X0, CST.NUMBERS.MonsterSpawnArea.X1),
                    randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.Y0, CST.NUMBERS.MonsterSpawnArea.Y1)).setAnimationWalk();
            })
    }

    createSpawnBossBar() {
        this.scrollablePanelBosses = this.rexUI.add.scrollablePanel({
            x: 200,
            y: 370,
            width: 200,
            height: 150,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10, 0x3d3d3d),

            panel: {
                child: this.createGrid(this, 666),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            mouseWheelScroller: {
                focus: true,
                speed: 0.1
            },

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                panel: 10,
                header: 10
            }
        }).layout()

        this.scrollablePanelBosses
            .setChildrenInteractive()
            .on('child.click', function (args) {
                console.log(args.text);
                args.scene.characterHeap.createBoss(args.text, args.scene,
                    randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.X0, CST.NUMBERS.MonsterSpawnArea.X1),
                    randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.Y0, CST.NUMBERS.MonsterSpawnArea.Y1)).setAnimationWalk();
            })
    }

    createSpawnHeroesBar() {
        this.scrollablePanelHeroes = this.rexUI.add.scrollablePanel({
            x: 200,
            y: 520,
            width: 200,
            height: 150,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10, 0x3d3d3d),

            panel: {
                child: this.createGrid(this, 2),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            mouseWheelScroller: {
                focus: true,
                speed: 0.1
            },

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                panel: 10,
                header: 10
            }
        }).layout()

        this.scrollablePanelHeroes
            .setChildrenInteractive()
            .on('child.click', function (args) {
                console.log(args.text);
                args.scene.characterHeap.createHero(args.text, args.scene,
                    randomIntFromInterval(CST.NUMBERS.HeroSpawnArea.X0, CST.NUMBERS.HeroSpawnArea.X1),
                    randomIntFromInterval(CST.NUMBERS.HeroSpawnArea.Y0, CST.NUMBERS.HeroSpawnArea.Y1)).setAnimationWalk(false);
            })
    }

    createGrid(scene, type) {
        // Create table body
        var sizer = scene.rexUI.add.fixWidthSizer({
            space: {
                left: 3,
                right: 3,
                top: 3,
                bottom: 3,
                item: 8,
                line: 8,
            }
        }).addBackground(scene.rexUI.add.roundRectangle(0, 0, 10, 10, 0, 0x939393))

        if (type == 1) {
            for (let el of CST.MONSTERLIST) {
                sizer.add(scene.rexUI.add.label({
                    width: 300, height: 60,

                    background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 14, 0x3d3d3d),
                    text: scene.add.text(0, 0, `${el}`,{ fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),

                    align: 'center',
                    space: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10,
                    }
                }));
            }
        }
        else if (type == 666) {
            for (let el of CST.BOSSLIST) {
                sizer.add(scene.rexUI.add.label({
                    width: 300, height: 60,

                    background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 14, 0x3d3d3d),
                    text: scene.add.text(0, 0, `${el}`, { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),

                    align: 'center',
                    space: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10,
                    }
                }));
            }
        }
        else {
            for (let el of CST.HEROLIST) {
                sizer.add(scene.rexUI.add.label({
                    width: 300, height: 60,

                    background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 14, 0x3d3d3d),
                    text: scene.add.text(0, 0, `${el}`, { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),

                    align: 'center',
                    space: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10,
                    }
                }));
            }
        }
        return sizer;
    }
}