import { CharacterSprite } from "./CharacterSprite.js";
import { CST } from "../scripts/const.js";
import { randomIntFromInterval } from "./Misc.js";

export class CharacterHeap {
    scene;
    constructor(scene) {
        this.scene = scene;
    }
    static id = 0;
    heap = {};

    createHero(type = "HeroCat", scene, x, y) {
        switch (type) {
            case "HeroCat":
                this.heap[CharacterHeap.id] = new HeroCat(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroCat));
                this.scene.parus.currMP -= CST.CHARACTERS.HeroCat.MPCost;
                break;
            case "HeroMage":
                this.heap[CharacterHeap.id] = new HeroMage(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroMage));
                this.scene.parus.currMP -= CST.CHARACTERS.HeroMage.MPCost;
                break;
            case "HeroArchaeologist":
                this.heap[CharacterHeap.id] = new HeroArchaeologist(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroArchaeologist));
                this.scene.parus.currMP -= CST.CHARACTERS.HeroArchaeologist.MPCost;
                break;
            case "HeroCenturion":
                this.heap[CharacterHeap.id] = new HeroCenturion(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroCenturion));
                this.scene.parus.currMP -= CST.CHARACTERS.HeroCenturion.MPCost;
                break;
            case "HeroNightmare":
                this.heap[CharacterHeap.id] = new HeroNightmare(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroNightmare));
                this.scene.parus.currMP -= CST.CHARACTERS.HeroNightmare.MPCost;
                break;
            case "HeroWizard":
                this.heap[CharacterHeap.id] = new HeroWizard(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroWizard));
                this.scene.parus.currMP -= CST.CHARACTERS.HeroWizard.MPCost;
                break;
        }
        scene.heroes.add(this.heap[CharacterHeap.id]);
        this.heap[CharacterHeap.id].setDepth(y + this.heap[CharacterHeap.id].height);
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id - 1];
    }

    createMonster(type = "MonsterTwig", scene, x, y) {
        switch (type) {
            case "MonsterSlime":
                this.heap[CharacterHeap.id] = new MonsterSlime(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterSlime));
                break;
            case "MonsterTwig":
                this.heap[CharacterHeap.id] = new MonsterTwig(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterTwig));
                break;
            case "MonsterBrainer":
                this.heap[CharacterHeap.id] = new MonsterBrainer(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterBrainer));
                break;
            case "MonsterHellhound":
                this.heap[CharacterHeap.id] = new MonsterHellhound(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterHellhound));
                break;
            case "MonsterGhoul":
                this.heap[CharacterHeap.id] = new MonsterGhoul(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterGhoul));
                break;
            case "MonsterHedgehog":
                this.heap[CharacterHeap.id] = new MonsterHedgehog(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterHedgehog));
                break;
            case "MonsterSlayer":
                this.heap[CharacterHeap.id] = new MonsterSlayer(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterSlayer));
                break;
            case "BossBlackDragon":
                this.heap[CharacterHeap.id] = new BossBlackDragon(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.BossBlackDragon));
                break;
            case "BossCthulhu":
                this.heap[CharacterHeap.id] = new BossCthulhu(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.BossCthulhu));
                break;
        }
        scene.enemies.add(this.heap[CharacterHeap.id]);
        this.heap[CharacterHeap.id].setDepth(y + this.heap[CharacterHeap.id].height);
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id - 1];
    }

}

export class MonsterSlime extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES32.MonsterSlime, scale);
        this.hp = CST.CHARACTERS.MonsterSlime.HealPoints;
        this.speed = CST.CHARACTERS.MonsterSlime.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Death) {
            this.play(CST.ANIMATIONS.MonsterSlime.Idle);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Death) {
            this.play(CST.ANIMATIONS.MonsterSlime.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterSlime.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Death) {
            this.play(CST.ANIMATIONS.MonsterSlime.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterSlime.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterSlime.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }
}

export class MonsterTwig extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES32.MonsterTwig, scale);
        this.hp = CST.CHARACTERS.MonsterTwig.HealPoints;
        this.speed = CST.CHARACTERS.MonsterTwig.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk()
            })
            this.play(CST.ANIMATIONS.MonsterTwig.Hit);
            console.log(3);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterTwig.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterTwig.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }
}

export class MonsterBrainer extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES32.MonsterBrainer, scale);
        this.hp = CST.CHARACTERS.MonsterBrainer.HealPoints;
        this.speed = CST.CHARACTERS.MonsterBrainer.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented=true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
            
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterBrainer.Hit);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterBrainer.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterBrainer.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class MonsterHellhound extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES48.MonsterHellhound, scale);
        this.hp = CST.CHARACTERS.MonsterHellhound.HealPoints;
        this.speed = CST.CHARACTERS.MonsterHellhound.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Death) {
            this.play(CST.ANIMATIONS.MonsterHellhound.Idle);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Death) {
            this.play(CST.ANIMATIONS.MonsterHellhound.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterHellhound.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Death) {
            this.play(CST.ANIMATIONS.MonsterHellhound.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterHellhound.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterHellhound.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class MonsterGhoul extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES32.MonsterGhoul, scale);
        this.hp = CST.CHARACTERS.MonsterGhoul.HealPoints;
        this.speed = CST.CHARACTERS.MonsterGhoul.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;

        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterGhoul.Hit);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;

        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;

        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterGhoul.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterGhoul.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class MonsterHedgehog extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES32.MonsterHedgehog, scale);
        this.hp = CST.CHARACTERS.MonsterHedgehog.HealPoints;
        this.speed = CST.CHARACTERS.MonsterHedgehog.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Idle);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterHedgehog.Hit);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterHedgehog.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterHedgehog.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class MonsterSlayer extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES64.MonsterSlayer, scale);
        this.hp = CST.CHARACTERS.MonsterSlayer.HealPoints;
        this.speed = CST.CHARACTERS.MonsterSlayer.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterSlayer.Hit);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterSlayer.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterSlayer.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class BossBlackDragon extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 5) {
        super(scene, x, y, CST.SPRITESDRAGON.BossBlackDragon, scale);
        this.hp = CST.CHARACTERS.BossBlackDragon.HealPoints;
        this.speed = CST.CHARACTERS.BossBlackDragon.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Death) {
            this.play(CST.ANIMATIONS.BossBlackDragon.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Death) {
            this.play(CST.ANIMATIONS.BossBlackDragon.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.BossBlackDragon.Hit);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Death) {
            this.play(CST.ANIMATIONS.BossBlackDragon.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.BossBlackDragon.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.BossBlackDragon.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class BossCthulhu extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 5) {
        super(scene, x, y, CST.SPRITECTHULHU.BossCthulhu, scale);
        this.hp = CST.CHARACTERS.BossCthulhu.HealPoints;
        this.speed = CST.CHARACTERS.BossCthulhu.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Death) {
            this.play(CST.ANIMATIONS.BossCthulhu.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Death) {
            this.play(CST.ANIMATIONS.BossCthulhu.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || (this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Brainstorm &&
            this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Tentacle &&
            this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Death)) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(randomIntFromInterval(0, 1) == 1 ? CST.ANIMATIONS.BossCthulhu.Brainstorm : CST.ANIMATIONS.BossCthulhu.Tentacle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Death) {
            this.play(CST.ANIMATIONS.BossCthulhu.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.BossCthulhu.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.BossCthulhu.Cost;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }

}

export class HeroCat extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES32.HeroCat, scale);
        this.hp = CST.CHARACTERS.HeroCat.HealPoints;
        this.speed = CST.CHARACTERS.HeroCat.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.play(CST.ANIMATIONS.HeroCat.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.play(CST.ANIMATIONS.HeroCat.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroCat.Hit);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.play(CST.ANIMATIONS.HeroCat.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }
}

export class HeroMage extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES64.HeroMage, scale);
        this.hp = CST.CHARACTERS.HeroMage.HealPoints;
        this.speed = CST.CHARACTERS.HeroMage.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Death) {
            this.play(CST.ANIMATIONS.HeroMage.Idle);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Death) {
            this.play(CST.ANIMATIONS.HeroMage.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroMage.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Death) {
            this.play(CST.ANIMATIONS.HeroMage.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }
}

export class HeroArchaeologist extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES64.HeroArchaeologist, scale);
        this.hp = CST.CHARACTERS.HeroArchaeologist.HealPoints;
        this.speed = CST.CHARACTERS.HeroArchaeologist.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Death) {
            this.play(CST.ANIMATIONS.HeroArchaeologist.Idle);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Death) {
            this.play(CST.ANIMATIONS.HeroArchaeologist.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroArchaeologist.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Death) {
            this.play(CST.ANIMATIONS.HeroArchaeologist.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }
}

export class HeroCenturion extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES32.HeroCenturion, scale);
        this.hp = CST.CHARACTERS.HeroCenturion.HealPoints;
        this.speed = CST.CHARACTERS.HeroCenturion.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Idle);
           // //this.setVelocity(0, 0);
           // //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Walk);
            //////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            ////this.flipX = isLeftOriented;
            //console.log(4);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroCenturion.Hit);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }
}

export class HeroNightmare extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES80.HeroNightmare, scale);
        this.hp = CST.CHARACTERS.HeroNightmare.HealPoints;
        this.speed = CST.CHARACTERS.HeroNightmare.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.play(CST.ANIMATIONS.HeroNightmare.Idle);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.play(CST.ANIMATIONS.HeroNightmare.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroNightmare.Hit);
            // //this.setVelocity(0, 0);
            // //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.play(CST.ANIMATIONS.HeroNightmare.Death);
            ////this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }
}

export class HeroWizard extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 2) {
        super(scene, x, y, CST.SPRITES80.HeroWizard, scale);
        this.hp = CST.CHARACTERS.HeroWizard.HealPoints;
        this.speed = CST.CHARACTERS.HeroWizard.Speed;
        this.id = id;
        this.heap = heap;
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.play(CST.ANIMATIONS.HeroWizard.Idle);
            //this.setVelocity(0, 0);
            ////this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.play(CST.ANIMATIONS.HeroWizard.Walk);
            ////this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroWizard.Hit);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.play(CST.ANIMATIONS.HeroWizard.Death);
            //this.setVelocity(0, 0);
            //this.flipX = isLeftOriented;
        }
        return this;
    }

    death() {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death();
            return false
        }
        return true
    }

    remove() {
        this.once('animationcomplete', () => {
            this.destroy()
            delete this.heap[this.id];
        })
    }
}