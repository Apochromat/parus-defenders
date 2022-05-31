/// <reference path="../typings/phaser.d.ts" />
import { CST } from "../scripts/const.js";

export class Parus extends Phaser.Physics.Arcade.Sprite {
    level;
    maxHP;
    maxMP;
    currHP;
    currMP;

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
    }

}