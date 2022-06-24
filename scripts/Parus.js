/// <reference path="../typings/phaser.d.ts" />
import { PlayScene } from "../scenes/PlayScene.js";
import { CST } from "../scripts/const.js";
import { calculateParusBuildings, calculateParusMaxHP, calculateParusMaxMP, calculateParusWindows, randomIntFromInterval } from "../scripts/Misc.js";
import { openHeroesBar } from "../scripts/CreateHeroesBar.js";
import { openBuildingsBar } from "../scripts/CreateBuildingsBar.js";
import { CharacterSprite } from "./CharacterSprite.js";

export class Parus extends Phaser.Physics.Arcade.Sprite {
    level;
    maxHP;
    maxMP;
    currHP;
    currMP;
    HeroSlots;
    BuildingSlots;
    heroWindows = [];
    buildingWindows = [];
    alive;
    constructor(scene, level = 0,alive=true) {
        super(scene, CST.NUMBERS.ParusX, CST.NUMBERS.ParusY, CST.IMAGES.Parus);
        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.setLevel(level);
        this.setScale(1.2);
    }

    damage(hp) {
        
         if (this.currHP <= 0) {
            return false
         }
        this.currHP -= hp;
        return true
    }

    updateLevel(level) {
        if (this.level != level) {
            this.setLevel(level);
        }
    }

    setLevel(level) {
        this.level = level;
        this.maxHP = calculateParusMaxHP(level);
        this.maxMP = calculateParusMaxMP(level);
        this.currHP = this.maxHP;
        this.currMP = this.maxMP;
        this.HeroSlots = calculateParusWindows(level);
        this.BuildingSlots = calculateParusBuildings(level);
        this.createHeroWindows(this.scene.playerStats);
        this.createBuildingWindows(this.scene.playerStats);
    }

    createBuildingWindows(playerStats) {
        for (let i = 0; i < this.BuildingSlots; i++) {
            if (this.buildingWindows[i] != undefined) {
                if (this.buildingWindows[i].buildingImage != undefined) {
                    this.buildingWindows[i].buildingImage.destroy();
                }
                //this.buildingWindowss[i].clearWindowProgress();
                this.buildingWindows[i].destroy();
            }
            this.buildingWindows[i] = new buildingWindows(this.scene, 240, 820, i, playerStats);
        }
    }

    createHeroWindows(playerStats) {
        for (let i = 0; i < this.HeroSlots; i++) {
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
            this.heroImage = new CharacterSprite(scene, x, y, CST.SPRITES32[playerStats.HERO_SLOTS[index]], 2).setDepth(CST.DEPTHS.Slots);
            this.heroImage.play(CST.ANIMATIONS[playerStats.HERO_SLOTS[index]].IdleWindow)
            //scene.add.image(x, y, CST.ICONS[playerStats.HERO_SLOTS[index]]).setDepth(CST.DEPTHS.Slots);
            if (playerStats.BattleMode)
                this.setHeroWindowProgress(playerStats);
        }

        scene.sys.displayList.add(this);
        this.setScale(2.5);
        this.setInteractive();

        this.on("pointerup", () => {
            if (playerStats.BattleMode) {
                if (this.coof == 1 &&
                    playerStats.HERO_SLOTS[this.index] != CST.EMPTY &&
                    this.scene.parus.currMP >= CST.CHARACTERS[playerStats.HERO_SLOTS[this.index]].MPCost) {
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

        this.on("pointerover", () => {
            this.setTexture(CST.IMAGES.CharacterWindowChoose);
        })
        this.on("pointerout", () => {
            this.setTexture(CST.IMAGES.CharacterWindow);
        })
    }

    initgraphicsStatusInWait(scene) {
        this.graphicsStatusInWait = scene.add.graphics({ fillStyle: { color: 0x9966cc } }).setDepth(2);
        this.graphicsStatusCell = scene.add.graphics({ fillStyle: { color: 0x000000 } }).setDepth(1);
        this.graphicsStatusReady = scene.add.graphics({ fillStyle: { color: 0x51c751 } }).setDepth(1);
    }

    setHeroWindowProgress(playerStats) {
        if (playerStats.HERO_SLOTS[this.index] != CST.EMPTY) {
            this.graphicsStatusInWait.clear();
            this.graphicsStatusReady.clear();
            if (((Date.now() - playerStats.HERO_SLOTS_SPAWNTIME[this.index]) / (CST.CHARACTERS[playerStats.HERO_SLOTS[this.index]].SpawnCooldown * (1 - playerStats.LEVELS_SKILLS.SpawnCooldown * 2.5 / 100))) >= 1 || this.coof == 1) {
                this.coof = 1;
                var rect = new Phaser.Geom.Rectangle(this.x - 39, this.y - 55, 79, 10);
                this.graphicsStatusReady.fillRectShape(rect);
            }
            else {
                this.graphicsStatusReady.clear();
                var rect = new Phaser.Geom.Rectangle(this.x - 39, this.y - 55, 79 * this.coof, 10);
                this.graphicsStatusInWait.fillRectShape(rect);
                var cell = new Phaser.Geom.Rectangle(this.x - 41, this.y - 57, 83, 14);
                this.graphicsStatusCell.fillRectShape(cell);
                this.coof = (Date.now() - playerStats.HERO_SLOTS_SPAWNTIME[this.index]) / (CST.CHARACTERS[playerStats.HERO_SLOTS[this.index]].SpawnCooldown * (1 - playerStats.LEVELS_SKILLS.SpawnCooldown * 2.5 / 100));
            }
            var cell = new Phaser.Geom.Rectangle(this.x - 41, this.y - 57, 83, 14);
            this.graphicsStatusCell.fillRectShape(cell);
        }
    }

    clearWindowProgress() {
        this.graphicsStatusCell.clear();
        this.graphicsStatusReady.clear();
        this.graphicsStatusInWait.clear();
    }
}

export class buildingWindows extends Phaser.GameObjects.Image {
    graphicsStatusInWait;
    graphicsStatusReady;
    graphicsStatusCell;
    scene;
    x;
    y;
    index;
    constructor(scene, x, y, index, playerStats) {
        super(scene, x, y, CST.IMAGES.CharacterWindow).setDepth(CST.DEPTHS.Slots + 1);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.index = index;
        this.coof = 1;
        this.buildingImage;

        if (this.graphicsStatusInWait == undefined)
            this.initgraphicsStatusInWait(scene)
        this.graphicsStatusInWait.clear();

        if (playerStats.BUILDING_SLOTS[index] != CST.EMPTY) {
            switch (playerStats.BUILDING_SLOTS[index]) {
                case "BuildingPodkova":
                    this.buildingImage = new CharacterSprite(scene, x, y - 130, CST.SPRITES360.BuildingPodkova, 1).setDepth(CST.DEPTHS.Slots);
                    this.buildingImage.play(CST.ANIMATIONS.BuildingPodkova.Idle);
                    break;
                case "BuildingMPObelisk":
                    this.buildingImage = new CharacterSprite(scene, x + 5, y - 180, CST.SPRITE_MP_OBELISK.BuildingMPObelisk, 1).setDepth(CST.DEPTHS.Slots);
                    this.buildingImage.setScale(1.4);
                    this.buildingImage.play(CST.ANIMATIONS.BuildingMPObelisk.Idle);
                    break;
                case "BuildingHPObelisk":
                    this.buildingImage = new CharacterSprite(scene, x, y - 110, CST.SPRITE_HP_OBELISK.BuildingHPObelisk, 1).setDepth(CST.DEPTHS.Slots);
                    this.buildingImage.setScale(2.6);
                    this.buildingImage.play(CST.ANIMATIONS.BuildingHPObelisk.Idle);
                    break;
                case "BuildingCDObelisk":
                    this.buildingImage = new CharacterSprite(scene, x - 5, y - 130, CST.SPRITE_HP_OBELISK.BuildingCDObelisk, 1).setDepth(CST.DEPTHS.Slots);
                    this.buildingImage.setScale(1);
                    this.buildingImage.play(CST.ANIMATIONS.BuildingCDObelisk.Idle);
                    break;
                case "BuildingPlasmaGun":
                    this.buildingImage = new CharacterSprite(scene, x + 45, y - 51, CST.SPRITE_PLASMA_GUN.BuildingPlasmaGun, 1).setDepth(CST.DEPTHS.Slots);
                    this.buildingImage.setScale(0.5);
                    this.buildingImage.play(CST.ANIMATIONS.BuildingPlasmaGun.Idle);
                    break;
            }
            if (playerStats.BattleMode)
                this.setBuildingWindowsProgress(playerStats);
        }

        scene.sys.displayList.add(this);
        this.setScale(2.5);
        this.setInteractive();

        this.on("pointerup", () => {
            if (playerStats.BattleMode) {
                if (this.coof == 1 &&
                    playerStats.BUILDING_SLOTS[this.index] != CST.EMPTY &&
                    this.scene.parus.currMP >= this.scene.parus.maxMP*CST.CHARACTERS[playerStats.BUILDING_SLOTS[this.index]].MPCost) {
                    this.graphicsStatusReady.clear();
                    this.coof = 0;
                    playerStats.BUILDING_SLOTS_SPAWNTIME[this.index] = Date.now();
                    this.scene.parus.currMP -=  this.scene.parus.maxMP*CST.CHARACTERS[playerStats.BUILDING_SLOTS[this.index]].MPCost;
                    switch (playerStats.BUILDING_SLOTS[index]) {
                        case "BuildingPodkova":
                            this.buildingImage.once('animationcomplete', () => {
                                this.buildingImage.play(CST.ANIMATIONS.BuildingPodkova.Idle);
                            })
                            this.buildingImage.play(CST.ANIMATIONS.BuildingPodkova.Use);
                            this.scene.playerStats.COINS += 1000;
                            break;
                        case "BuildingMPObelisk":
                            this.buildingImage.once('animationcomplete', () => {
                                this.buildingImage.play(CST.ANIMATIONS.BuildingMPObelisk.Idle);
                            })
                            this.buildingImage.play(CST.ANIMATIONS.BuildingMPObelisk.Use);
                            this.scene.parus.currMP = this.scene.parus.maxMP;
                            break;
                        case "BuildingHPObelisk":
                            this.buildingImage.once('animationcomplete', () => {
                                this.buildingImage.play(CST.ANIMATIONS.BuildingHPObelisk.Idle);
                            })
                            this.buildingImage.play(CST.ANIMATIONS.BuildingHPObelisk.Use);
                            this.scene.parus.currHP = this.scene.parus.maxHP*0.5;
                            break;
                        case "BuildingCDObelisk":
                            this.buildingImage.once('animationcomplete', () => {
                                this.buildingImage.play(CST.ANIMATIONS.BuildingCDObelisk.Idle);
                            })
                            this.buildingImage.play(CST.ANIMATIONS.BuildingCDObelisk.Use);
                            for (let i = 0; i < this.scene.parus.heroWindows.length; i++) {
                                this.scene.parus.heroWindows[i].coof = 1;
                            }
                            break;
                        case "BuildingPlasmaGun":
                            this.buildingImage.once('animationcomplete', () => {
                                this.buildingImage.play(CST.ANIMATIONS.BuildingPlasmaGun.Idle);
                            })
                            this.buildingImage.play(CST.ANIMATIONS.BuildingPlasmaGun.Use);
                            for (let el in this.scene.characterHeap.heap) {
                                this.scene.characterHeap.heap[el].specs.PhysicalDamage = 0;
                                this.scene.characterHeap.heap[el].setAnimationDeath();
                                this.scene.characterHeap.heap[el].remove();
                            }
                            break;
                    }
                }
            }
            else {
                openBuildingsBar(this.scene);
            }
        })

        this.on("pointerover", () => {
            this.setTexture(CST.IMAGES.CharacterWindowChoose);
        })
        this.on("pointerout", () => {
            this.setTexture(CST.IMAGES.CharacterWindow);
        })
    }

    initgraphicsStatusInWait(scene) {
        this.graphicsStatusInWait = scene.add.graphics({ fillStyle: { color: 0x9966cc } }).setDepth(20000);
        this.graphicsStatusCell = scene.add.graphics({ fillStyle: { color: 0x000000 } }).setDepth(10000);
        this.graphicsStatusReady = scene.add.graphics({ fillStyle: { color: 0x51c751 } }).setDepth(10000);
    }

    setBuildingWindowProgress(playerStats) {
        if (playerStats.BUILDING_SLOTS[this.index] != CST.EMPTY) {
            this.graphicsStatusInWait.clear();
            this.graphicsStatusReady.clear();
            if (((Date.now() - playerStats.BUILDING_SLOTS_SPAWNTIME[this.index])/ (CST.CHARACTERS[playerStats.BUILDING_SLOTS[this.index]].CoolDown * (1 - playerStats.LEVELS_SKILLS.SpawnCooldown * 2.5 / 100))) >= 1 || this.coof == 1) {
                this.coof = 1;
                var rect = new Phaser.Geom.Rectangle(this.x - 39, this.y + 45, 79, 10);
                this.graphicsStatusReady.fillRectShape(rect);
            }
            else {
                this.graphicsStatusReady.clear();
                var rect = new Phaser.Geom.Rectangle(this.x - 39, this.y + 45, 79 * this.coof, 10);
                this.graphicsStatusInWait.fillRectShape(rect);
                var cell = new Phaser.Geom.Rectangle(this.x - 41, this.y + 45, 83, 14);
                this.graphicsStatusCell.fillRectShape(cell);
                this.coof = (Date.now() - playerStats.BUILDING_SLOTS_SPAWNTIME[this.index]) / (CST.CHARACTERS[playerStats.BUILDING_SLOTS[this.index]].CoolDown * (1 - playerStats.LEVELS_SKILLS.SpawnCooldown * 2.5 / 100));
            }
            var cell = new Phaser.Geom.Rectangle(this.x - 41, this.y + 45, 83, 14);
            this.graphicsStatusCell.fillRectShape(cell);
        }
    }

    clearWindowProgress() {
        this.graphicsStatusCell.clear();
        this.graphicsStatusReady.clear();
        this.graphicsStatusInWait.clear();
    }
}