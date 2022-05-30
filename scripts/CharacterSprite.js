/// <reference path="../typings/phaser.d.ts" />
export class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
    id;
    damagePerHit;
    cooldown;
    hp;
    speed;
    lastDamageTime = 0;
    reachFlag = false;

    constructor(scene, x, y, texture, scale, flip = false) {
        super(scene, x, y, texture);

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setScale(scale);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.flipX = flip;
    }
}