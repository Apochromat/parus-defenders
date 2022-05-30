import { CST } from "../scripts/const.js";
import { createAnimations } from "../scripts/Animations.js";
import * as Characters from "../scripts/Characters.js"
export class PlayScene extends Phaser.Scene{
    constructor() {
        super({
            key: CST.SCENES.PLAY
        })
    }
    enemies;
    graphicsHP;
    graphicsMP;
    textMP;
    textHP;
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
    create ()
    {
        this.add.tileSprite(CST.NUMBERS.WIDTH/2, CST.NUMBERS.HEIGHT/2, CST.NUMBERS.WIDTH, CST.NUMBERS.HEIGHT, CST.IMAGES.Background);
        let parus = this.physics.add.sprite(400, 425, CST.IMAGES.Parus).setImmovable();

        this.characterHeap = new Characters.CharacterHeap();
        this.enemies = this.add.group();
        createAnimations(this);

        this.physics.add.collider(parus, this.enemies, (obj1, obj2) => {
            if (!obj2.reachFlag) {
                obj2.setVelocity(0, 0);
                obj2.setAnimationHit();
                obj2.reachFlag = true;
            }
        });
        
        this.graphicsHP =  this.add.graphics({fillStyle: { color: 0xff1500} }).setDepth(1);
        this.graphicsMP = this.add.graphics({fillStyle: { color: 0x009efa} }).setDepth(1);
        this.titleHP = this.add.text(240, 12, 0, { fontFamily: 'NumbersFont', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 5 }).setDepth(2);
        this.titleMP = this.add.text(240, 46, 0, { fontFamily: 'NumbersFont', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 5 }).setDepth(2);
        let statusBar = this.add.image(this.game.renderer.width / 2, 40, CST.IMAGES.StatusBar).setDepth(0);
        this.setStatusHP(1000, 1000);
        this.setStatusMP(1000, 1000);

        var scrollablePanel = this.rexUI.add.scrollablePanel({
            x: 1300,
            y: 300,
            width: 300,
            height: 350,

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
                text: this.add.text(0, 0, 'Header'),
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

        scrollablePanel
            .setChildrenInteractive()
            .on('child.click', function (args) {
                console.log(args.text);
                args.scene.characterHeap.createMonster(args.text, args.scene, 1550, args.scene.randomIntFromInterval(530, 620)).setAnimationWalk();
            })
    }

    update () {
        for (let el in this.characterHeap.heap) {
            if (this.characterHeap.heap[el].hp >= 0){  
                this.characterHeap.heap[el].damage(this.randomIntFromInterval(-2, 5));
            }
            else {
                this.characterHeap.heap[el].remove();
            }
        }     
    }

    randomIntFromInterval(min, max) { // min and max included 
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
            },
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

    setStatusHP(curHP, maxHP){
        this.graphicsHP.clear();
        var rect = new Phaser.Geom.Rectangle(227, 16, 525*curHP/maxHP, 14);
        this.graphicsHP.fillRectShape(rect);
        this.titleHP.setText(curHP);
    }

    setStatusMP(curMP, maxMP){
        this.graphicsMP.clear();
        var rect = new Phaser.Geom.Rectangle(227, 50, 525*curMP/maxMP, 14);
        this.graphicsMP.fillRectShape(rect);
        this.titleMP.setText(curMP);
    }

}