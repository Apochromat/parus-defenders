import { CharacterSprite } from "./CharacterSprite.js";

export class CharacterHeap {
    static id = 0;
    heap = {};

    collisionCallback (obj1, obj2) {
        if (!obj2.rereachFlag) {
            obj2.setVelocity(0, 0);
            obj2.setAnimationKick();
            obj2.rereachFlag = true;
        }

    }

    createMonster(type = "twig", scene, x, y, colliderObject){
        switch (type) {
            case "twig":
                this.heap[CharacterHeap.id] = new MonsterTwig(scene, x, y, CharacterHeap.id);
                this.heap[CharacterHeap.id].collider = scene.physics.add.collider(colliderObject, this.heap[CharacterHeap.id], this.collisionCallback);
        }
        CharacterHeap.id++;
    }

}

export class MonsterTwig extends CharacterSprite {
    constructor(scene, x, y, id, hp = 1000, scale=3) {
        super(scene, x, y, "monster_twig", scale, id, true);
        this.hp = hp;
    }

    setAnimationWalkk(){
        if (this.anims.currentAnim.key != "monster_twig_walk") {
            this.play("monster_twig_walk");
        }
    }

    setAnimationKick(){
        if (this.anims.currentAnim.key != "monster_twig_kick") {
            this.play("monster_twig_kick");
        }
    }

    setAnimationDeath(){
        if (this.anims.currentAnim.key != "monster_twig_death") {
            this.play("monster_twig_death");
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
        }
    }

    remove() {
        this.once('animationcomplete', ()=>{
            this.destroy()
        })
    }

}