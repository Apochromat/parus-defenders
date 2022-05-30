//@ts-check
import { CharacterSprite } from "./CharacterSprite.js";

export class CharacterHeap {
    static id = 0;
    heap = {};

    createMonster(type = "twig", scene, x, y){
        switch (type) {
            case "twig":
                this.heap[CharacterHeap.id] = new MonsterTwig(scene, x, y, CharacterHeap.id, this.heap).setDepth(y);
                scene.enemies.add(this.heap[CharacterHeap.id]);
                break;
            case "brainer":
                this.heap[CharacterHeap.id] = new MonsterBrainer(scene, x, y, CharacterHeap.id, this.heap).setDepth(y);
                scene.enemies.add(this.heap[CharacterHeap.id]);
                break;
            case "ghoul":
                this.heap[CharacterHeap.id] = new MonsterGhoul(scene, x, y, CharacterHeap.id, this.heap).setDepth(y);
                scene.enemies.add(this.heap[CharacterHeap.id]);
                break;
            case "hedgehog":
                this.heap[CharacterHeap.id] = new MonsterHedgehog(scene, x, y, CharacterHeap.id, this.heap).setDepth(y);
                scene.enemies.add(this.heap[CharacterHeap.id]);
                break;
            case "slayer":
                this.heap[CharacterHeap.id] = new MonsterSlayer(scene, x, y, CharacterHeap.id, this.heap).setDepth(y);
                scene.enemies.add(this.heap[CharacterHeap.id]);
                break;
        }
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id-1];
    }

}

export class MonsterTwig extends CharacterSprite {
    speed = 150;
    constructor(scene, x, y, id, heap, hp = 1000, scale=3,) {
        super(scene, x, y, "monster_twig", scale, true);
        this.hp = hp;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_twig_idle") {
            this.play("monster_twig_idle");
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_twig_walk") {
            this.play("monster_twig_walk");
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationKick(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_twig_kick") {
            this.play("monster_twig_kick");
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_twig_death") {
            this.play("monster_twig_death");
            this.setVelocity(0, 0);
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
        }
        return this;
    }

    remove() {
        this.once('animationcomplete', ()=>{
            this.destroy()
            delete this.heap[this.id];
        })
    }
}

export class MonsterBrainer extends CharacterSprite {
    speed = 75;
    constructor(scene, x, y, id, heap, hp = 3000, scale=3,) {
        super(scene, x, y, "monster_brainer", scale, true);
        this.hp = hp;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_brainer_idle") {
            this.play("monster_brainer_idle");
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_brainer_walk") {
            this.play("monster_brainer_walk");
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationKick(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_brainer_kick") {
            this.play("monster_brainer_kick");
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_brainer_death") {
            this.play("monster_brainer_death");
            this.setVelocity(0, 0);
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
        }
        return this;
    }

    remove() {
        this.once('animationcomplete', ()=>{
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class MonsterGhoul extends CharacterSprite {
    speed = 175;
    constructor(scene, x, y, id, heap, hp = 3000, scale=3,) {
        super(scene, x, y, "monster_ghoul", scale, true);
        this.hp = hp;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_ghoul_idle") {
            this.play("monster_ghoul_idle");
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_ghoul_walk") {
            this.play("monster_ghoul_walk");
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationKick(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_ghoul_kick") {
            this.play("monster_ghoul_kick");
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_ghoul_death") {
            this.play("monster_ghoul_death");
            this.setVelocity(0, 0);
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
        }
        return this;
    }

    remove() {
        this.once('animationcomplete', ()=>{
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class MonsterHedgehog extends CharacterSprite {
    speed = 50;
    constructor(scene, x, y, id, heap, hp = 8000, scale=3,) {
        super(scene, x, y, "monster_hedgehog", scale, true);
        this.hp = hp;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_hedgehog_idle") {
            this.play("monster_hedgehog_idle");
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_hedgehog_walk") {
            this.play("monster_hedgehog_walk");
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationKick(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_hedgehog_kick") {
            this.play("monster_hedgehog_kick");
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_hedgehog_death") {
            this.play("monster_hedgehog_death");
            this.setVelocity(0, 0);
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
        }
        return this;
    }

    remove() {
        this.once('animationcomplete', ()=>{
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class MonsterSlayer extends CharacterSprite {
    speed = 75;
    constructor(scene, x, y, id, heap, hp = 3000, scale=3,) {
        super(scene, x, y, "monster_slayer", scale, true);
        this.hp = hp;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_slayer_idle") {
            this.play("monster_slayer_idle");
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_slayer_walk") {
            this.play("monster_slayer_walk");
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationKick(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_slayer_kick") {
            this.play("monster_slayer_kick");
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != "monster_slayer_death") {
            this.play("monster_slayer_death");
            this.setVelocity(0, 0);
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
        }
        return this;
    }

    remove() {
        this.once('animationcomplete', ()=>{
            this.destroy()
            delete this.heap[this.id];
        })
    }

}