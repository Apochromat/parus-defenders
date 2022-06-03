/// <reference path="../typings/phaser.d.ts" />
import { CST } from "../scripts/const.js";
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
                this.heroWindows[i].destroy();
            }
            this.heroWindows[i] = new HeroWindow(this.scene, CST.HERO_SLOTS[i].x, CST.HERO_SLOTS[i].y, i, playerStats);
        }
    }
}

export class HeroWindow extends Phaser.GameObjects.Image {
    constructor(scene, x, y, index, playerStats) {
        super(scene, x, y, CST.IMAGES.CharacterWindow).setDepth(3);
        this.heroImage;
        if (playerStats.HERO_SLOTS[index] != CST.EMPTY) {
            this.heroImage = scene.add.image(x, y, CST.ICONS[playerStats.HERO_SLOTS[index]]).setDepth(CST.DEPTHS.Slots);
        }
        this.index = index;
        scene.sys.displayList.add(this);
        this.setScale(2.5);
        this.setInteractive();
        this.on("pointerup", () => {
            openHeroesBar(this.scene, this.index);
        })
    }
}