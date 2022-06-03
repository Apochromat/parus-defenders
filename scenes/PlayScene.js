import { CST } from "../scripts/const.js";
import { createAnimations } from "../scripts/Animations.js";
import { createStatusBar, setStatusHP, setStatusMP, setStatusLVL, setStatusCOIN, setStatusWAVE } from "../scripts/CreateStatusBar.js";
import { createToolBar, closeToolBar } from "../scripts/CreateToolBar.js";
import { createShopBar, openToolbarLeft } from "../scripts/CreateShopBar.js";
import { createSkillsBar, openToolbarRight } from "../scripts/CreateSkillsBar.js";
import { createHeroesBar } from "../scripts/CreateHeroesBar.js";
import { Parus } from "../scripts/Parus.js";
import * as Characters from "../scripts/Characters.js";
export class PlayScene extends Phaser.Scene{

    playerStats;
    enemies;
    heroes;
    parus;

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

    recyclerViewHeroes;
    heroesBarField;
    heroesBarClose;

    toolBarLeft;
    recyclerViewShop;
    shopBar;

    toolBarRight;
    recyclerViewSkills;
    skillBar;

    scrollablePanel;
    statusBar;
    battleButton;

    constructor() {
        super({
            key: CST.SCENES.PLAY
        })
    }

    init() {
    }

    preload() {
        this.add.tileSprite(CST.NUMBERS.WIDTH/2, CST.NUMBERS.HEIGHT/2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.BackgroundEvening);
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: './libs/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
    }

    create () {
        this.createPlayerStats()
        this.add.tileSprite(CST.NUMBERS.WIDTH/2, CST.NUMBERS.HEIGHT/2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.Background);
        this.parus = new Parus(this, 4);
        this.parus.createHeroWindows(this.playerStats);

        this.characterHeap = new Characters.CharacterHeap();
        this.enemies = this.add.group();
        this.heroes = this.add.group();
        createAnimations(this);

        this.createGUI();
        this.createSpawnMonstersBar();

        this.setPhysicsEnemies();
    }

    update () {
        setStatusHP(this, this.parus.currHP, this.parus.maxHP);
        setStatusMP(this, this.parus.currMP, this.parus.maxMP);
        setStatusLVL(this, 30, 80, this.playerStats.LVL, this.playerStats.SKILL_POINTS-1);
        setStatusWAVE(this, 1, 1, this.playerStats.WAVE, 4500);
        setStatusCOIN(this, this.playerStats.COINS);
        for (let el in this.characterHeap.heap) {
            this.characterHeap.heap[el].damage(this.randomIntFromInterval(0, 2));
        }     
    }

    randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    createPlayerStats(){
        this.playerStats = {
            COINS: 1000000,
            SKILL_POINTS: 5,
            LVL: 5,
            WAVE: 3,
            LEVELS_SHOP: {
                ParusHP: 0,
                ParusMP: 0,
                ParusDEF: 0,
                CatKnight: 0,
                CatNinja: 0,
                CatMag: 0
            },
            LEVELS_SKILLS: {
                Cooldown: 0
            },
            LEVELS_HEROES: {
                HeroCat: 0,
                HeroCat2: 0,
                HeroCat3: 0,
                HeroCat4: 0,
                HeroCat5: 0,
                HeroCat6: 0,
                HeroCat7: 0,
                HeroCat8: 0
            },
            AVAILABLE_HEROES: [
                "HeroCat"
            ],
            HERO_SLOTS: [
                CST.EMPTY,
                CST.EMPTY,
                CST.EMPTY,
                CST.EMPTY,
                CST.EMPTY,
                CST.EMPTY
            ],
            HERO_SLOTS_SPAWNTIME: [
                Date.now(),
                Date.now(),
                Date.now(),
                Date.now(),
                Date.now(),
                Date.now()
            ],
        };
    }

    setPhysicsEnemies(){
        this.physics.add.collider(this.parus, this.enemies,
            // При столкновении
            (obj1, obj2) => {
                obj2.setVelocity(0, 0);
                obj2.setAnimationHit();
                if (Date.now() - obj2.lastDamageTime >= obj2.specs.AttackCooldown) {
                    obj2.lastDamageTime = Date.now();
                    if(!obj1.damage(obj2.specs.PhysicalDamage)) {
                        for (let el in this.characterHeap.heap) {
                            this.characterHeap.heap[el].specs.PhysicalDamage = 0;
                            this.characterHeap.heap[el].setAnimationDeath();
                            this.characterHeap.heap[el].remove();
                        }
                        obj1.currHP = obj1.maxHP;
                    };
                }
            }
        );

        this.physics.add.collider(this.heroes, this.enemies,
            // При столкновении
            (obj1, obj2) => {
                obj2.setVelocity(0, 0);
                obj2.setAnimationHit();
                obj1.setVelocity(0, 0);
                obj1.setAnimationHit(false);
                if (Date.now() - obj1.lastDamageTime >= obj1.specs.AttackCooldown) {
                    obj1.lastDamageTime = Date.now();
                    obj2.damage(obj1.specs.PhysicalDamage);
                }
                if (Date.now() - obj2.lastDamageTime >= obj2.specs.AttackCooldown) {
                    obj2.lastDamageTime = Date.now();
                    obj1.damage(obj2.specs.PhysicalDamage);
                }
            }
        );
    }

    createGUI() {
        createStatusBar(this);
        createToolBar(this);
        createShopBar(this);
        createSkillsBar(this);
        createHeroesBar(this);
        
        this.battleButton = this.add.image(this.game.renderer.width - 75, this.game.renderer.height-62, CST.IMAGES.BattleButton).setDepth(CST.DEPTHS.ToolBarField);
        this.battleButton.setInteractive();
        this.battleButton.on("pointerup", () => {
            for (let i = 0; i < 3; i++) {
                this.characterHeap.createHero("cat", this, 
                this.randomIntFromInterval(CST.NUMBERS.SpawnAreaX0, CST.NUMBERS.SpawnAreaX1), 
                this.randomIntFromInterval(CST.NUMBERS.SpawnAreaY0, CST.NUMBERS.SpawnAreaY1)).setAnimationWalk(false);
            }
        });
    }

    createSpawnMonstersBar(){
        this.scrollablePanel = this.rexUI.add.scrollablePanel({
            x: 850,
            y: 250,
            width: 200,
            height: 250,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10, 0x4e342e),

            panel: {
                child: this.createGrid(this),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            mouseWheelScroller: {
                focus: false,
                speed: 0.1
            },

            header: this.rexUI.add.label({
                height: 30,
                orientation: 0,
                text: this.add.text(0, 0, 'Spawn Menu', { fontFamily: 'Garamond', fontSize: 24, color: '#ffffff' }),
            }),

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
                args.scene.characterHeap.createMonster(args.text, args.scene, 1550, args.scene.randomIntFromInterval(530, 620)).setAnimationWalk();
            })
    }

    createGrid(scene) {
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
        }).addBackground(scene.rexUI.add.roundRectangle(0, 0, 10, 10, 0, 0x260e04))
    
        for (let el of CST.MONSTERLIST) {
            sizer.add(scene.rexUI.add.label({
                width: 300, height: 60,
    
                background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 14, 0x7b5e57),
                text: scene.add.text(0, 0, `${el}`, {
                    fontSize: 18
                }),
    
                align: 'center',
                space: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10,
                }
            }));
        }
    
        return sizer;
    }
}