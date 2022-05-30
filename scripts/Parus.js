/// <reference path="../typings/phaser.d.ts" />
import { CST } from "../scripts/const.js";

export class Parus extends Phaser.Physics.Arcade.Sprite {
    currHP = 1000;
    maxHP = 1000;
    currMP = 1000;
    maxMP = 1000;

    constructor(scene) {
        super(scene, CST.NUMBERS.ParusX, CST.NUMBERS.ParusY, CST.IMAGES.Parus);

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
    }

    damage(_hp) {
        this.currHP -= _hp;
        if (this.currHP <= 0) {
            return false
        }
        return true
    }

}