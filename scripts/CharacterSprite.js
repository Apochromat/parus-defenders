/// <reference path="../typings/phaser.d.ts" />
export class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
    id;
    alive = true;
    specs;
    hp;
    lastDamageTime = 0;
    reachFlag = false;
    state; 
    array =  new Array(3);
    lengthForEnemy=10000;
    constructor(scene, x, y, texture, scale, array,lengthForEnemy) {
        super(scene, x, y, texture);

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setScale(scale);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
    }
}