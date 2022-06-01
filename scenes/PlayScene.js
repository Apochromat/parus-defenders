import { CST } from "../scripts/const.js";
import { createAnimations } from "../scripts/Animations.js";
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
    toolBarLeft;
    toolBarRight;
    toolBarClose;
    toolBarField;
    shopBar;
    skillBar;
    scrollablePanel;
    recyclerViewShop;
    recyclerViewSkills;
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
        this.playerStats = {
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
            COINS: 1000000
        };
        this.add.tileSprite(CST.NUMBERS.WIDTH/2, CST.NUMBERS.HEIGHT/2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.Background);
        this.parus = new Parus(this, 4);
        this.parus.createHeroWindows();

        this.characterHeap = new Characters.CharacterHeap();
        this.enemies = this.add.group();
        this.heroes = this.add.group();
        createAnimations(this);
        this.createStatusBar();

        this.physics.add.collider(this.parus, this.enemies,
            // При столкновении
            (obj1, obj2) => {
                obj2.setVelocity(0, 0);
                obj2.setAnimationHit();
                if (Date.now() - obj2.lastDamageTime >= obj2.specs.Cooldown) {
                    obj2.lastDamageTime = Date.now();
                    if(!obj1.damage(obj2.specs.Damage)) {
                        for (let el in this.characterHeap.heap) {
                            this.characterHeap.heap[el].specs.Damage = 0;
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
                if (Date.now() - obj1.lastDamageTime >= obj1.specs.Cooldown) {
                    obj1.lastDamageTime = Date.now();
                    obj2.damage(obj1.specs.Damage);
                }
                if (Date.now() - obj2.lastDamageTime >= obj2.specs.Cooldown) {
                    obj2.lastDamageTime = Date.now();
                    obj1.damage(obj2.specs.Damage);
                }
            }
        );
        
        this.scrollablePanel = this.rexUI.add.scrollablePanel({
            x: 850,
            y: 250,
            width: 200,
            height: 250,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10, 0x4e342e),

            panel: {
                child: this.createGridMonsters(this),
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
                text: this.add.text(0, 0, 'Spawn Menu'),
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

    update () {
        this.setStatusHP(this.parus.currHP, this.parus.maxHP);
        this.setStatusMP(this.parus.currMP, this.parus.maxMP);
        this.setStatusLVL(30, 80, 2);
        this.setStatusWAVE(0, 1, 5, 4500);
        this.setStatusCOIN(this.playerStats.COINS);
        for (let el in this.characterHeap.heap) {
            this.characterHeap.heap[el].damage(this.randomIntFromInterval(0, 2));
        }     
    }

    randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    createGridMonsters(scene) {
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

    setStatusHP(currHP, maxHP){
        this.graphicsHP.clear();
        var rect = new Phaser.Geom.Rectangle(227, 26, 525*currHP/maxHP, 14);
        this.graphicsHP.fillRectShape(rect);
        this.titleHP.setText(currHP);
    }

    setStatusMP(currMP, maxMP){
        this.graphicsMP.clear();
        var rect = new Phaser.Geom.Rectangle(227, 60, 525*currMP/maxMP, 14);
        this.graphicsMP.fillRectShape(rect);
        this.titleMP.setText(currMP);
    }

    setStatusLVL(currXP, maxXP, LVL){
        this.graphicsLVL.clear();
        var rect = new Phaser.Geom.Rectangle(840, 26, 217*currXP/maxXP, 14);
        this.graphicsLVL.fillRectShape(rect);
        this.titleLVL.setText(LVL);
    }

    setStatusWAVE(type, coef, numWave = 0, numHPBoss = 0){
        this.graphicsWAVE.clear();
        var rect = new Phaser.Geom.Rectangle(840, 60, 482*coef, 14);
        this.graphicsWAVE.fillRectShape(rect);
        if (type == 1) {
            this.titleWAVE.setText(numWave + "   " + "BOSS: " + numHPBoss + " HP");
        }
        else{
            this.titleWAVE.setText(numWave);
        }    
    }

    setStatusCOIN(numCoins){
        this.titleCOIN.setText(numCoins);
    }

    createStatusBar() {
        this.graphicsHP =  this.add.graphics({fillStyle: { color: 0xff1500} }).setDepth(1);
        this.graphicsMP = this.add.graphics({fillStyle: { color: 0x009efa} }).setDepth(1);
        this.graphicsLVL =  this.add.graphics({fillStyle: { color: 0x51c751} }).setDepth(1);
        this.graphicsWAVE = this.add.graphics({fillStyle: { color: 0xe8e8e8} }).setDepth(1);
        this.titleHP = this.add.text(240, 22, 0, { fontFamily: 'NumbersFont', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 5 }).setDepth(2);
        this.titleMP = this.add.text(240, 56, 0, { fontFamily: 'NumbersFont', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 5 }).setDepth(2);
        this.titleLVL = this.add.text(853, 22, 0, { fontFamily: 'NumbersFont', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 5 }).setDepth(2);
        this.titleWAVE = this.add.text(853, 56, 0, { fontFamily: 'NumbersFont', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 5 }).setDepth(2);
        this.titleCOIN = this.add.text(1130, 22, 0, { fontFamily: 'NumbersFont', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 5 }).setDepth(2);
        this.statusBar = this.add.image(this.game.renderer.width / 2, 50, CST.IMAGES.StatusBar).setDepth(0);
        this.shopBar = this.add.image(this.game.renderer.width - 597, this.game.renderer.height-30, CST.IMAGES.ToolBarLeft).setDepth(CST.DEPTHS.ToolBarField);
        this.skillBar = this.add.image(this.game.renderer.width - 297, this.game.renderer.height-30, CST.IMAGES.ToolBarRight).setDepth(CST.DEPTHS.ToolBarField);
        this.battleButton = this.add.image(this.game.renderer.width - 75, this.game.renderer.height-62, CST.IMAGES.BattleButton).setDepth(CST.DEPTHS.ToolBarField);
        this.toolBarRight =  this.add.image(this.game.renderer.width - 297, this.game.renderer.height-567, CST.IMAGES.ToolBarRight).setDepth(CST.DEPTHS.ToolBarPrimal);
        this.toolBarLeft =  this.add.image(this.game.renderer.width - 597, this.game.renderer.height-567, CST.IMAGES.ToolBarLeft).setDepth(CST.DEPTHS.ToolBarMinor);
        this.toolBarClose =  this.add.image(this.game.renderer.width - 128, this.game.renderer.height-508, CST.IMAGES.ToolBarClose).setDepth(CST.DEPTHS.ToolBarClose);
        this.toolBarField =  this.add.image(this.game.renderer.width - 447, this.game.renderer.height-270, CST.IMAGES.ToolBarField).setDepth(CST.DEPTHS.ToolBarField);
    
        this.toolBarRight.setInteractive();
        this.toolBarLeft.setInteractive();
        this.toolBarClose.setInteractive();
        this.shopBar.setInteractive();
        this.skillBar.setInteractive();
        this.toolBarRight.visible = false;
        this.toolBarLeft.visible = false;
        this.toolBarField.visible = false;
        this.toolBarClose.visible = false;
        this.shopBar.visible = true;
        this.skillBar.visible = true;

        this.toolBarLeft.on("pointerup", () => {
            this.raiseToolbarLeft();
        });
        this.toolBarRight.on("pointerup", () => {
            this.raiseToolbarRight();
        });
        this.toolBarClose.on("pointerup", () => {
            this.closeToolbar();
        });
        this.shopBar.on("pointerup", () => {
            this.raiseToolbarLeft();
        });
        this.skillBar.on("pointerup", () => {
            this.raiseToolbarRight();
        });
    }

    raiseToolbarLeft(){
        if (this.recyclerViewSkills != undefined) {
            this.recyclerViewSkills.visible = false;
        }
        this.shopBar.visible = false;
        this.skillBar.visible = false;
        this.toolBarRight.visible = true;
        this.toolBarLeft.visible = true;
        this.toolBarField.visible = true;
        this.toolBarClose.visible = true;
        this.toolBarLeft.setDepth(CST.DEPTHS.ToolBarPrimal);
        this.toolBarRight.setDepth(CST.DEPTHS.ToolBarMinor);

        this.recyclerViewShop = this.rexUI.add.scrollablePanel({
            x: 1050,
            y: 450,
            width: 500,
            height: 500,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 1, 1, 10, 0x515151),

            panel: {
                child: this.createGrid(this, 1),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            mouseWheelScroller: {
                focus: false,
                speed: 0.3
            },

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                panel: 10
            }
        }).layout().setDepth(CST.DEPTHS.ToolBarRecyclerView);
        let targets = []
        for (let el in CST.SHOPLIST) {
            targets.push(this.recyclerViewShop.getByName(el, true))
        }
        this.recyclerViewShop.setChildrenInteractive({
            targets: targets
        })
        .on('child.click', function(child) {
            let currName = child.getParentSizer().name;
            this.scene.playerStats.COINS -= CST.SHOPLIST[currName].LevelCost[this.scene.playerStats.LEVELS_SHOP[currName]]
            this.scene.setStatusCOIN(this.scene.playerStats.COINS);
            this.scene.playerStats.LEVELS_SHOP[currName] += 1;
            let temp = this.scene.recyclerViewShop.t;
            this.scene.closeToolbar();
            this.scene.raiseToolbarLeft();
            this.scene.recyclerViewShop.t = temp;
        })
    }
    raiseToolbarRight(){
        if (this.recyclerViewShop != undefined) {
            this.recyclerViewShop.visible = false;
        }
        this.shopBar.visible = false;
        this.skillBar.visible = false;
        this.toolBarRight.visible = true;
        this.toolBarLeft.visible = true;
        this.toolBarField.visible = true;
        this.toolBarClose.visible = true;
        this.toolBarRight.setDepth(CST.DEPTHS.ToolBarPrimal);
        this.toolBarLeft.setDepth(CST.DEPTHS.ToolBarMinor);

        this.recyclerViewSkills = this.rexUI.add.scrollablePanel({
            x: 1050,
            y: 450,
            width: 500,
            height: 500,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 1, 1, 10, 0x515151),

            panel: {
                child: this.createGrid(this, 2),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            mouseWheelScroller: {
                focus: false,
                speed: 0.3
            },

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                panel: 10
            }
        }).layout().setDepth(CST.DEPTHS.ToolBarRecyclerView);
        let targets = []
        for (let el in CST.SKILLSLIST) {
            targets.push(this.recyclerViewSkills.getByName(el, true))
        }
        this.recyclerViewSkills.setChildrenInteractive({
            targets: targets
        })
        .on('child.click', function(child) {
            let currName = child.getParentSizer().name;
            this.scene.playerStats.LEVELS_SKILLS[currName] += 1;
            let temp = this.scene.recyclerViewSkills.t;
            this.scene.closeToolbar();
            this.scene.raiseToolbarRight();
            this.scene.recyclerViewSkills.t = temp;
        })
    }
    closeToolbar(){
        this.toolBarRight.visible = false;
        this.toolBarLeft.visible = false;
        this.toolBarField.visible = false;
        this.toolBarClose.visible = false;
        this.shopBar.visible = true;
        this.skillBar.visible = true;
        if (this.recyclerViewShop != undefined) {
            this.recyclerViewShop.visible = false;
        }
        if (this.recyclerViewSkills != undefined) {
            this.recyclerViewSkills.visible = false;
        }
    }

    createGrid(scene, type) {
        var sizer = scene.rexUI.add.fixWidthSizer({
            space: {
                left: 3,
                right: 3,
                top: 3,
                bottom: 3,
                item: 8,
                line: 8,
            }
        })
        if(type == 1){
            for (let el in CST.SHOPLIST) {
                sizer
                .add(
                    this.createShopItem(scene, el), // child
                    { expand: true }
                )
            }
        }
        else if(type == 2){
            for (let el in CST.SKILLSLIST) {
                sizer
                .add(
                    this.createSkillsItem(scene, el), // child
                    { expand: true }
                )
            }
        }
        
        return sizer;
    }
    createShopItem(scene, key) {
        var table = scene.rexUI.add.gridSizer({
            width: 500,
            height: 120,
            column: 3,
            row: 3,
            rowProportions: 2,
            columnProportions: 1,
            space: { column: -150, row: 10, left: 0, right: 0, top: 0, bottom: 0 }
        }).setDepth(CST.DEPTHS.ToolBarRecyclerView)
        .addBackground(
            scene.rexUI.add.roundRectangle(0, 0, 10, 10, 14, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1),
        );

        table.add(this.createIcon(scene), 0, 1, 'center', {left: 25, right: 150}, true);
        table.add(this.createLable(scene, CST.SHOPLIST[key].Name), 1, 0, 'left', {left: 50}, true);
        table.add(this.createLable(scene, CST.SHOPLIST[key].Description, 3), 1, 1, 'left', {right: 0}, true);
        table.add(this.createLable(scene, "LVL " + this.playerStats.LEVELS_SHOP[key], 1), 2, 0, 'right', {left: 150}, true);
        table.add(this.createLable(scene,  CST.SHOPLIST[key].LevelCost[this.playerStats.LEVELS_SHOP[key]], 2), 2, 1, 'center', {left: 150}, true);
        table.add(this.createButtonAdd(scene, key, 2), 2, 2, 'right', {top: 5, left: 150}, true);
    
        return scene.rexUI.add.sizer({
        })
            .add(
            table, 1, 'center', 0, true 
            );
    }

    createButtonAdd(scene, key, type) {
        var table = scene.rexUI.add.gridSizer({
            column: 1,
            row: 1,
            name: key,
            space: {left: 0, right: 0, top: 0, bottom: 90 }
        })
        .addBackground(
            scene.rexUI.add.roundRectangle(0, 0, 20, 20, 5, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1),)
            .setDepth(CST.DEPTHS.ToolBarRecyclerView);

        if (type == 1) {
            table.add(
                scene.rexUI.add.label({
                    text: scene.add.text(0, 0, "BUY"),
                })
            );
        }
        else if (type == 2) {
            table.add(
                scene.rexUI.add.label({
                    text: scene.add.text(0, 0, "UPGRADE"),
                    space: {left: 25, right: 0, top: 5, bottom: 0 }
                })
            );
        }
        
    
        return scene.rexUI.add.sizer({
        })
            .add(
            table, 1, 'center', 0, true 
            );
    }

    createSkillsItem(scene, key) {
        var table = scene.rexUI.add.gridSizer({
            width: 500,
            height: 120,
            column: 3,
            row: 3,
            rowProportions: 1,
            columnProportions: 2,
            space: { column: -150, row: 10, left: 0, right: 0, top: 0, bottom: 0 }
        }).setDepth(CST.DEPTHS.ToolBarRecyclerView)
        .addBackground(
            scene.rexUI.add.roundRectangle(0, 0, 10, 10, 14, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1),
        );

        table.add(this.createIcon(scene), 0, 1, 'center', {left: 25, right: 150}, true);
        table.add(this.createLable(scene, CST.SKILLSLIST[key].Name), 1, 0, 'left', {left: 50}, true);
        table.add(this.createLable(scene, CST.SKILLSLIST[key].Description, 3), 1, 1, 'left', {right: 0}, true);
        table.add(this.createLable(scene, "LVL " + this.playerStats.LEVELS_SKILLS[key], 1), 2, 0, 'right', {left: 150}, true);
        table.add(this.createButtonAdd(scene, key, 2), 2, 2, 'right', {top: 5, left: 150}, true);
    
        return scene.rexUI.add.sizer({
        })
            .add(
            table, 1, 'center', 0, true 
            );
    }

    createIcon(scene) {
        var label = scene.rexUI.add.label({
            icon: scene.add.image(0, 0,CST.IMAGES.HPIcon),
        }).setDepth(CST.DEPTHS.ToolBarRecyclerView);
    
        return label;
    }

    createLable(scene, name, type) {
        var label
        if (type == 1) { //LVL text
            label = scene.rexUI.add.label({
                text: scene.add.text(0, 0, name,{ fontFamily: 'Garamond', fontSize: 24, color: '#51c751' }),
            });
        }
        else if(type == 2){ //cost text
            label = scene.rexUI.add.label({
                text: scene.add.text(0, 0, name, { fontFamily: 'NumbersFont', fontSize: 24, color: '#ffffff' }),
            });
        }
        else if(type == 3){ //description
            label = scene.rexUI.add.label({
                text: scene.add.text(0, 0, name, {fontSize: 16, color: '#ffffff' }),
            });
        }
        else{
            label = scene.rexUI.add.label({
                text: scene.add.text(0, 0, name, { fontFamily: 'Garamond', fontSize: 24, color: '#ffffff' }),
            });
        }
        
        return label;
    }
}