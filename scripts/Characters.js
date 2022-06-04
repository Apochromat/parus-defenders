import { CharacterSprite } from "./CharacterSprite.js";
import { CST } from "../scripts/const.js";

export class CharacterHeap {
    static id = 0;
    heap = {};

    createHero(type = "HeroCat", scene, x, y) {
        switch (type) {
            case "HeroCat":
                this.heap[CharacterHeap.id] = new HeroCat(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroCat));
                break;
            case "HeroCenturion":
                this.heap[CharacterHeap.id] = new HeroCenturion(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroCenturion));
                break;
            case "HeroNightmare":
                this.heap[CharacterHeap.id] = new HeroNightmare(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroNightmare));
                break;
            case "HeroWizard":
                this.heap[CharacterHeap.id] = new HeroWizard(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroWizard));
                break;
        }
        scene.heroes.add(this.heap[CharacterHeap.id]);
        this.heap[CharacterHeap.id].setDepth(y + this.heap[CharacterHeap.id].height);
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id - 1];
    }

    createMonster(type = "MonsterTwig", scene, x, y) {
        switch (type) {
            case "MonsterTwig":
                this.heap[CharacterHeap.id] = new MonsterTwig(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterTwig));
                break;
            case "MonsterBrainer":
                this.heap[CharacterHeap.id] = new MonsterBrainer(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterBrainer));
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
        }
        scene.enemies.add(this.heap[CharacterHeap.id]);
        this.heap[CharacterHeap.id].setDepth(y + this.heap[CharacterHeap.id].height);
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id - 1];
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
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterTwig.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterTwig.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterTwig.Cost;
            this.setAnimationDeath();
            this.remove();
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
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterBrainer.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterBrainer.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterBrainer.Cost;
            this.setAnimationDeath();
            this.remove();
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
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;

        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterGhoul.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;

        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;

        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterGhoul.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterGhoul.Cost;
            this.setAnimationDeath();
            this.remove();
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
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Idle);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterHedgehog.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterHedgehog.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterHedgehog.Cost;
            this.setAnimationDeath();
            this.remove();
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
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationWalk(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterSlayer.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.scene.playerStats.EXPERIENCE += CST.CHARACTERS.MonsterSlayer.Experience;
            this.scene.playerStats.COINS += CST.CHARACTERS.MonsterSlayer.Cost;
            this.setAnimationDeath();
            this.remove();
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
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.play(CST.ANIMATIONS.HeroCat.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroCat.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.play(CST.ANIMATIONS.HeroCat.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
            this.remove();
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

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Idle);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroCenturion.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
            this.remove();
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
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.play(CST.ANIMATIONS.HeroNightmare.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroNightmare.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.play(CST.ANIMATIONS.HeroNightmare.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
            this.remove();
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
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.play(CST.ANIMATIONS.HeroWizard.Walk);
            this.setVelocityX(isLeftOriented ? -this.speed : this.speed);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroWizard.Hit);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.play(CST.ANIMATIONS.HeroWizard.Death);
            this.setVelocity(0, 0);
            this.flipX = isLeftOriented;
        }
        return this;
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.setAnimationDeath();
            this.remove();
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