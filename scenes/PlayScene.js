import { CST } from "../scripts/const.js";
import { createAnimations } from "../scripts/Animations.js";
import { Parus } from "../scripts/Parus.js";
import * as Characters from "../scripts/Characters.js";
export class PlayScene extends Phaser.Scene{

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
        this.setStatusCOIN(1000000);
        for (let el in this.characterHeap.heap) {
            this.characterHeap.heap[el].damage(this.randomIntFromInterval(0, 2));
        }     
    }

    randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
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
                child: this.createGridShop(this),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            mouseWheelScroller: {
                focus: false,
                speed: 0.1
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
        for (let el of CST.SHOPLIST) {
            targets.push(this.recyclerViewShop.getByName(el, true))
        }
        this.recyclerViewShop.setChildrenInteractive({
            targets: targets
        })
        .on('child.click', function(child) {
            console.log(child.getParentSizer().name);
        })
    }
    raiseToolbarRight(){
        this.recyclerViewShop.visible = false;
        this.shopBar.visible = false;
        this.skillBar.visible = false;
        this.toolBarRight.visible = true;
        this.toolBarLeft.visible = true;
        this.toolBarField.visible = true;
        this.toolBarClose.visible = true;
        this.toolBarRight.setDepth(CST.DEPTHS.ToolBarPrimal);
        this.toolBarLeft.setDepth(CST.DEPTHS.ToolBarMinor);
    }
    closeToolbar(){
        this.toolBarRight.visible = false;
        this.toolBarLeft.visible = false;
        this.toolBarField.visible = false;
        this.toolBarClose.visible = false;
        this.shopBar.visible = true;
        this.skillBar.visible = true;
        this.scrollablePanel.visible = false;
        this.recyclerViewShop.visible = false;
    }

    createGridShop(scene) {
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
        })

    
        for (let el of CST.SHOPLIST) {
            sizer
            .add(
                this.createTable(scene, el), // child
                { expand: true }
            )
            .add(
                this.createPseudoTable(scene, el), // child
                { expand: true } 
            )
        }
        
        return sizer;
    }


    createTable(scene, key) {
        var table = scene.rexUI.add.gridSizer({
            width: 300,
            height: 120,
            column: 3,
            row: 3,
    
            rowProportions: 1,
            space: { column: 40, row: 10, left: 30, right: 0, top: 10, bottom: 10 }
        }).setDepth(CST.DEPTHS.ToolBarRecyclerView)
        .addBackground(
            scene.rexUI.add.roundRectangle(0, 0, 10, 10, 14, 0x3d3d3d),
        );

        table.add(this.createIcon(scene), 0, 1, 'center', 0, true);
        table.add(this.createLable(scene, "magaz"), 1, 0, 'center', 0, true);
        table.add(this.createLable(scene, "lox"), 1, 1, 'center', 0, true);
        table.add(this.createLable(scene, "lvl"), 2, 0, 'center', 0, true);
        table.add(this.createLable(scene, "cost"), 2, 1, 'center', 0, true);
        table.add(this.createLable(scene, "buy"), 2, 2, 'bottom', 0, true);
    
        return scene.rexUI.add.sizer({
        })
            .add(
            table, 1, 'center', 0, true 
            );
    }

    createPseudoTable(scene, key) {
        var table = scene.rexUI.add.gridSizer({
            width: 30,
            height: 120,
            column: 1,
            row: 1,
    
            rowProportions: 1,
            space: { column: 40, row: 10, left: 30, right: 0, top: 10, bottom: 10 },
            name: key
        }).setDepth(CST.DEPTHS.ToolBarRecyclerView+1);

        table.add(
            scene.rexUI.add.label({
                orientation: 'x',
                icon: scene.add.image(0, 0,CST.IMAGES.HPIcon),
                space: { icon: 1 }
            })
        );
    
        return scene.rexUI.add.sizer({
        })
            .add(
            table, 1, 'center', 0, true 
            );
    }

    createIcon(scene) {
        var label = scene.rexUI.add.label({
            orientation: 'x',
            icon: scene.add.image(0, 0,CST.IMAGES.HPIcon),
            space: { icon: 1 }
        }).setDepth(CST.DEPTHS.ToolBarRecyclerView);
    
        return label;
    }

    createLable(scene, name) {
        var label = scene.rexUI.add.label({
            orientation: 'x',
            text: scene.add.text(0, 0, name),
            space: { icon: 1 }
        });
    
        return label;
    }
}