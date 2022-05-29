export class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
    id;
    hp;
    reachFlag = false;

    constructor(scene, x, y, texture, scale, _id, flip = false) {
        super(scene, x, y, texture);

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setScale(scale);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.id = _id;
        this.flipX = flip;
    }
}