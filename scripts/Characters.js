//@ts-check
import { CharacterSprite } from "./CharacterSprite.js";
import { CST } from "../scripts/const.js";

export class CharacterHeap {
    static id = 0;
    heap = {};

    createMonster(type = "twig", scene, x, y){
        switch (type) {
            case "twig":
                this.heap[CharacterHeap.id] = new MonsterTwig(scene, x, y, CharacterHeap.id, this.heap);
                break;
            case "brainer":
                this.heap[CharacterHeap.id] = new MonsterBrainer(scene, x, y, CharacterHeap.id, this.heap);
                break;
            case "ghoul":
                this.heap[CharacterHeap.id] = new MonsterGhoul(scene, x, y, CharacterHeap.id, this.heap);
                break;
            case "hedgehog":
                this.heap[CharacterHeap.id] = new MonsterHedgehog(scene, x, y, CharacterHeap.id, this.heap);
                break;
            case "slayer":
                this.heap[CharacterHeap.id] = new MonsterSlayer(scene, x, y, CharacterHeap.id, this.heap);
                break;
        }
        scene.enemies.add(this.heap[CharacterHeap.id]);
        this.heap[CharacterHeap.id].setDepth(y + this.heap[CharacterHeap.id].height);
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id-1];
    }

}

export class MonsterTwig extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale=3) {
        super(scene, x, y, CST.SPRITES32.MonsterTwig, scale, true);
        this.hp = CST.CHARACTERS.MonsterTwig.HealPoints;
        this.speed = CST.CHARACTERS.MonsterTwig.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Idle) {
            this.play(CST.ANIMATIONS.MonsterTwig.Idle);
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Walk) {
            this.play(CST.ANIMATIONS.MonsterTwig.Walk);
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationHit(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Hit) {
            this.play(CST.ANIMATIONS.MonsterTwig.Hit);
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Death);
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
    constructor(scene, x, y, id, heap, scale=3) {
        super(scene, x, y, CST.SPRITES32.MonsterBrainer, scale, true);
        this.hp = CST.CHARACTERS.MonsterBrainer.HealPoints;
        this.speed = CST.CHARACTERS.MonsterBrainer.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Idle) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Idle);
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Walk) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Walk);
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationHit(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Hit) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Hit);
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Death);
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
    constructor(scene, x, y, id, heap, scale=3) {
        super(scene, x, y, CST.SPRITES32.MonsterGhoul, scale, true);
        this.hp = CST.CHARACTERS.MonsterGhoul.HealPoints;
        this.speed = CST.CHARACTERS.MonsterGhoul.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Idle) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Idle);
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Walk) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Walk);
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationHit(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Hit) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Hit);
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Death);
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
    constructor(scene, x, y, id, heap, scale=3) {
        super(scene, x, y, CST.SPRITES32.MonsterHedgehog, scale, true);
        this.hp = CST.CHARACTERS.MonsterHedgehog.HealPoints;
        this.speed = CST.CHARACTERS.MonsterHedgehog.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Idle) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Idle);
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Idle) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Idle);
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationHit(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Hit) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Hit);
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Death);
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
    constructor(scene, x, y, id, heap, scale=3) {
        super(scene, x, y, CST.SPRITES64.MonsterSlayer, scale, true);
        this.hp = CST.CHARACTERS.MonsterSlayer.HealPoints;
        this.speed = CST.CHARACTERS.MonsterSlayer.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Idle) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Idle);
            this.setVelocityX(0);
        }
        return this;
    }

    setAnimationWalk(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Walk) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Walk);
            this.setVelocityX(-this.speed);
        }
        return this;
    }

    setAnimationHit(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Hit) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Hit);
            this.setVelocity(0, 0);
        }
        return this;
    }

    setAnimationDeath(){
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Death);
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