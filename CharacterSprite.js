export class CharacterSprite extends Phaser.Physics.Arcade.Sprite {
    hp;
    deathAnimation;

    constructor(scene, x, y, texture, _hp = 100, _deathAnimation, scale = 3) {
        super(scene, x, y, texture);

        scene.sys.updateList.add(this);
        scene.sys.displayList.add(this);
        this.setScale(scale);
        scene.physics.world.enableBody(this);
        this.setImmovable(true);
        this.hp = _hp;
        this.deathAnimation = _deathAnimation;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0){
            this.play(this.deathAnimation);
        }
    }
}