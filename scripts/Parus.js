/// <reference path="../typings/phaser.d.ts" />
import { PlayScene } from "../scenes/PlayScene.js";
import { CST } from "../scripts/const.js";
import { randomIntFromInterval } from "../scripts/Misc.js";
import { openHeroesBar } from "../scripts/CreateHeroesBar.js";

export class Parus extends Phaser.Physics.Arcade.Sprite {
    level;
    maxHP;
    maxMP;
    currHP;
    currMP;
    HeroSlots;
    BuildingSlots;
    heroWindows = [];

    constructor(scene, level=0) {
        super(scene, CST.NUMBERS.ParusX, CST.NUMBERS.ParusY, CST.IMAGES.Parus);

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.setLevel(level);
    }

    damage(hp) {
        this.currHP -= hp;
        if (this.currHP <= 0) {
            return false
        }
        return true
    }

    setLevel(level) {
        this.level = level;
        this.maxHP = CST.PARUS[this.level].MaxHP;
        this.maxMP = CST.PARUS[this.level].MaxMP;
        this.currHP = this.maxHP;
        this.currMP = this.maxMP;
        this.HeroSlots = CST.PARUS[this.level].HeroSlots;
        this.BuildingSlots = CST.PARUS[this.level].BuildingSlots;
        this.createHeroWindows(this.scene.playerStats);
    }

    createHeroWindows(playerStats) {
        for (let i = 0; i < this.HeroSlots; i++){
            if (this.heroWindows[i] != undefined) {
                if (this.heroWindows[i].heroImage != undefined) {
                    this.heroWindows[i].heroImage.destroy();
                }
                this.heroWindows[i].clearWindowProgress();
                this.heroWindows[i].destroy();
            }
            this.heroWindows[i] = new HeroWindow(this.scene, CST.HERO_SLOTS[i].x, CST.HERO_SLOTS[i].y, i, playerStats);
        }
    }
}

export class HeroWindow extends Phaser.GameObjects.Image {
    graphicsStatusInWait;
    graphicsStatusReady;
    graphicsStatusCell;
    scene; 
    x; 
    y; 
    index;
    constructor(scene, x, y, index, playerStats) {
        super(scene, x, y, CST.IMAGES.CharacterWindow).setDepth(3);
        this.scene = scene;
        this.x = x;
        this.y = y; 
        this.index = index;
        this.coof = 1;
        this.heroImage;

        if (this.graphicsStatusInWait == undefined) 
            this.initgraphicsStatusInWait(scene)
        this.graphicsStatusInWait.clear();

        if (playerStats.HERO_SLOTS[index] != CST.EMPTY) {
            this.heroImage = scene.add.image(x, y, CST.ICONS[playerStats.HERO_SLOTS[index]]).setDepth(CST.DEPTHS.Slots);
            if (playerStats.BattleMode) 
                this.setHeroWindowProgress(playerStats);     
        }

        scene.sys.displayList.add(this);
        this.setScale(2.5);
        this.setInteractive();

        this.on("pointerup", () => {
            if (playerStats.BattleMode){
                if (this.coof == 1 && playerStats.HERO_SLOTS[this.index] != CST.EMPTY) {
                    this.graphicsStatusReady.clear();
                    this.coof = 0;
                    this.scene.characterHeap.createHero(playerStats.HERO_SLOTS[this.index], this.scene,
                    randomIntFromInterval(CST.NUMBERS.HeroSpawnArea.X0, CST.NUMBERS.HeroSpawnArea.X1),
                    randomIntFromInterval(CST.NUMBERS.HeroSpawnArea.Y0, CST.NUMBERS.HeroSpawnArea.Y1)).setAnimationWalk(false);
                    playerStats.HERO_SLOTS_SPAWNTIME[this.index] = Date.now();
                }
            }
            else {
                openHeroesBar(this.scene, this.index);
            } 
        })
    }

    initgraphicsStatusInWait(scene){
        this.graphicsStatusInWait = scene.add.graphics({ fillStyle: { color: 0x9966cc } }).setDepth(2);
        this.graphicsStatusCell = scene.add.graphics({ fillStyle: { color: 0x000000 } }).setDepth(1);
        this.graphicsStatusReady = scene.add.graphics({ fillStyle: { color: 0x51c751 } }).setDepth(1);
    }

    setHeroWindowProgress(playerStats){
        if (playerStats.HERO_SLOTS[this.index] != CST.EMPTY){
            this.graphicsStatusInWait.clear();
            this.graphicsStatusReady.clear();
            if ( ((Date.now() - playerStats.HERO_SLOTS_SPAWNTIME[this.index])/CST.CHARACTERS[playerStats.HERO_SLOTS[this.index]].SpawnCooldown) >= 1 || this.coof == 1) {
                this.coof = 1;
                var rect = new Phaser.Geom.Rectangle(this.x - 39, this.y - 55, 79, 10);
                this.graphicsStatusReady.fillRectShape(rect);
            }
            else {
                this.graphicsStatusReady.clear();
                var rect = new Phaser.Geom.Rectangle(this.x - 39, this.y - 55, 79*this.coof, 10);
                this.graphicsStatusInWait.fillRectShape(rect);
                var cell = new Phaser.Geom.Rectangle(this.x - 41, this.y - 57, 83, 14);
                this.graphicsStatusCell.fillRectShape(cell);
                this.coof = (Date.now() - playerStats.HERO_SLOTS_SPAWNTIME[this.index])/CST.CHARACTERS[playerStats.HERO_SLOTS[this.index]].SpawnCooldown;
            }
            var cell = new Phaser.Geom.Rectangle(this.x - 41, this.y - 57, 83, 14);
            this.graphicsStatusCell.fillRectShape(cell);
        }    
    }

    clearWindowProgress(){
        this.graphicsStatusCell.clear();
        this.graphicsStatusReady.clear();
        this.graphicsStatusInWait.clear();
    }
}