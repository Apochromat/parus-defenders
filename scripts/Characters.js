import { CharacterSprite } from "./CharacterSprite.js";
import { CST } from "../scripts/const.js";
import { calculateHeroSpecs, heroSpecsWithplayerStats, monsterSpecsWithplayerStats, randomIntFromInterval } from "./Misc.js";
import { loadPlayerData } from "./PlayerData.js";

export class CharacterHeap {
    scene;
    constructor(scene) {
        this.scene = scene;
    }
    static id = 0;
    heap = {};

    createHero(type = "HeroCat", scene, x, y, free = false) {
        switch (type) {
            case "HeroCat":
                this.heap[CharacterHeap.id] = new HeroCat(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroCat));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroCat);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroCat.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroCat);
                break;
            case "HeroMage":
                this.heap[CharacterHeap.id] = new HeroMage(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroMage));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroMage);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroMage.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroMage);
                break;
            case "HeroArchaeologist":
                this.heap[CharacterHeap.id] = new HeroArchaeologist(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroArchaeologist));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroArchaeologist);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroArchaeologist.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroArchaeologist);
                break;
            case "HeroSceleton":
                this.heap[CharacterHeap.id] = new HeroSceleton(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroSceleton));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroSceleton);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroSceleton.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroSceleton);
                break;
            case "HeroCenturion":
                this.heap[CharacterHeap.id] = new HeroCenturion(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroCenturion));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroCenturion);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroCenturion.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroCenturion);
                break;
            case "HeroTesla":
                this.heap[CharacterHeap.id] = new HeroTesla(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroTesla));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroTesla);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroTesla.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroTesla);
                break;
            case "HeroWitch":
                this.heap[CharacterHeap.id] = new HeroWitch(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroWitch));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroWitch);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroWitch.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroWitch);
                break;
            case "HeroReaper":
                this.heap[CharacterHeap.id] = new HeroReaper(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroReaper));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroReaper);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroReaper.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroReaper);
                break;
            case "HeroNightmare":
                this.heap[CharacterHeap.id] = new HeroNightmare(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroNightmare));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroNightmare);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroNightmare.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroNightmare);
                break;
            case "HeroMinotaur":
                this.heap[CharacterHeap.id] = new HeroMinotaur(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroMinotaur));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroMinotaur);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroMinotaur.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroMinotaur);
                break;
            case "HeroStormhead":
                this.heap[CharacterHeap.id] = new HeroStormhead(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroStormhead));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroStormhead);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroStormhead.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroStormhead);
                break;
            case "HeroWizard":
                this.heap[CharacterHeap.id] = new HeroWizard(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.HeroWizard));
                heroSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                this.heap[CharacterHeap.id].hp = calculateHeroSpecs(this.heap[CharacterHeap.id].hp, this.scene.playerStats.LEVELS_SHOP.HeroWizard);
                this.heap[CharacterHeap.id].hp *= (1 + this.scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100);
                if (!free) this.scene.parus.currMP -= calculateHeroSpecs(CST.CHARACTERS.HeroWizard.MPCost, this.scene.playerStats.LEVELS_SHOP.HeroWizard);
                break;
        }
        scene.heroes.add(this.heap[CharacterHeap.id]);
        this.heap[CharacterHeap.id].setDepth(y + this.heap[CharacterHeap.id].height);
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id - 1];
    }

    createMonster(type = "MonsterTwig", scene, x, y) {
        switch (type) {
            case "SummonGolem":
                this.heap[CharacterHeap.id] = new SummonGolem(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.SummonGolem));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterSlime":
                this.heap[CharacterHeap.id] = new MonsterSlime(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterSlime));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterTwig":
                this.heap[CharacterHeap.id] = new MonsterTwig(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterTwig));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterBrainer":
                this.heap[CharacterHeap.id] = new MonsterBrainer(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterBrainer));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterHellhound":
                this.heap[CharacterHeap.id] = new MonsterHellhound(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterHellhound));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterGhoul":
                this.heap[CharacterHeap.id] = new MonsterGhoul(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterGhoul));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterBot":
                this.heap[CharacterHeap.id] = new MonsterBot(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterBot));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterHedgehog":
                this.heap[CharacterHeap.id] = new MonsterHedgehog(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterHedgehog));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterSlayer":
                this.heap[CharacterHeap.id] = new MonsterSlayer(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterSlayer));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterToaster":
                this.heap[CharacterHeap.id] = new MonsterToaster(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterToaster));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterWorm":
                this.heap[CharacterHeap.id] = new MonsterWorm(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterWorm));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterIEM":
                this.heap[CharacterHeap.id] = new MonsterIEM(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterIEM));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterSprout":
                this.heap[CharacterHeap.id] = new MonsterSprout(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterSprout));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterBringer":
                this.heap[CharacterHeap.id] = new MonsterBringer(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterBringer));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterDarkKnight":
                this.heap[CharacterHeap.id] = new MonsterDarkKnight(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterDarkKnight));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterReaper":
                this.heap[CharacterHeap.id] = new MonsterReaper(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterReaper));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterNecromancer":
                this.heap[CharacterHeap.id] = new MonsterNecromancer(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterNecromancer));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterSoulWizard":
                this.heap[CharacterHeap.id] = new MonsterSoulWizard(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterSoulWizard));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterFireWizard":
                this.heap[CharacterHeap.id] = new MonsterFireWizard(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterFireWizard));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterGuardian":
                this.heap[CharacterHeap.id] = new MonsterGuardian(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterGuardian));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterMiner":
                this.heap[CharacterHeap.id] = new MonsterMiner(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterMiner));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "MonsterNanny":
                this.heap[CharacterHeap.id] = new MonsterNanny(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.MonsterNanny));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
        }
        scene.enemies.add(this.heap[CharacterHeap.id]);
        this.heap[CharacterHeap.id].setDepth(y + this.heap[CharacterHeap.id].height);
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id - 1];
    }

    createBoss(type = "BossCultist", scene, x, y) {
        switch (type) {
            case "BossCultist":
                this.heap[CharacterHeap.id] = new BossCultist(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.BossCultist));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "BossBlackDragon":
                this.heap[CharacterHeap.id] = new BossBlackDragon(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.BossBlackDragon));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "BossCthulhu":
                this.heap[CharacterHeap.id] = new BossCthulhu(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.BossCthulhu));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "BossDemon":
                this.heap[CharacterHeap.id] = new BossDemon(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.BossDemon));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
            case "BossMiranda":
                this.heap[CharacterHeap.id] = new BossMiranda(scene, x, y, CharacterHeap.id, this.heap);
                this.heap[CharacterHeap.id].specs = JSON.parse(JSON.stringify(CST.CHARACTERS.BossMiranda));
                monsterSpecsWithplayerStats(this.scene.playerStats, this.heap[CharacterHeap.id].specs);
                break;
        }
        scene.enemies.add(this.heap[CharacterHeap.id]);
        this.heap[CharacterHeap.id].setDepth(y + this.heap[CharacterHeap.id].height);
        CharacterHeap.id++;
        return this.heap[CharacterHeap.id - 1];
    }

}

export class SummonGolem extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 4) {
        super(scene, x, y, CST.SPRITES32.SummonGolem, scale);
        this.hp = CST.CHARACTERS.SummonGolem.HealPoints;
        this.speed = CST.CHARACTERS.SummonGolem.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.SummonGolem.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.SummonGolem.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.SummonGolem.Death) {
            this.play(CST.ANIMATIONS.SummonGolem.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.SummonGolem.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.SummonGolem.Death) {
            this.play(CST.ANIMATIONS.SummonGolem.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.SummonGolem.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.SummonGolem.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.SummonGolem.Hit);
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.SummonGolem.Death) {
            this.play(CST.ANIMATIONS.SummonGolem.Death);
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterSlime extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES32.MonsterSlime, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterSlimeHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterSlimeDeath);
        this.hp = CST.CHARACTERS.MonsterSlime.HealPoints;
        this.speed = CST.CHARACTERS.MonsterSlime.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterSlime.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Death) {
            this.play(CST.ANIMATIONS.MonsterSlime.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Death) {
            this.play(CST.ANIMATIONS.MonsterSlime.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterSlime.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlime.Death) {
            this.play(CST.ANIMATIONS.MonsterSlime.Death);
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterTwigHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterTwigDeath);
        this.hp = CST.CHARACTERS.MonsterTwig.HealPoints;
        this.speed = CST.CHARACTERS.MonsterTwig.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterTwig.EnemyControl);

    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterTwig.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterTwig.Death) {
            this.play(CST.ANIMATIONS.MonsterTwig.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterBrainerHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterBrainerDeath);
        this.hp = CST.CHARACTERS.MonsterBrainer.HealPoints;
        this.speed = CST.CHARACTERS.MonsterBrainer.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterBrainer.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterBrainer.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBrainer.Death) {
            this.play(CST.ANIMATIONS.MonsterBrainer.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterHellHoundHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterHellhoundDeath);
        this.hp = CST.CHARACTERS.MonsterHellhound.HealPoints;
        this.speed = CST.CHARACTERS.MonsterHellhound.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterHellhound.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Death) {
            this.play(CST.ANIMATIONS.MonsterHellhound.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Death) {
            this.play(CST.ANIMATIONS.MonsterHellhound.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterHellhound.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHellhound.Death) {
            this.play(CST.ANIMATIONS.MonsterHellhound.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterGhoulHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterGhoulDeath);
        this.hp = CST.CHARACTERS.MonsterGhoul.HealPoints;
        this.speed = CST.CHARACTERS.MonsterGhoul.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterGhoul.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterGhoul.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGhoul.Death) {
            this.play(CST.ANIMATIONS.MonsterGhoul.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterBot extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 4) {
        super(scene, x, y, CST.SPRITES40.MonsterBot, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterBotHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterBotDeath);
        this.hp = CST.CHARACTERS.MonsterBot.HealPoints;
        this.speed = CST.CHARACTERS.MonsterBot.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterBot.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBot.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBot.Death) {
            this.play(CST.ANIMATIONS.MonsterBot.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBot.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBot.Death) {
            this.play(CST.ANIMATIONS.MonsterBot.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBot.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBot.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterBot.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBot.Death) {
            this.play(CST.ANIMATIONS.MonsterBot.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterHedgehogHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterHedgehogDeath);
        this.hp = CST.CHARACTERS.MonsterHedgehog.HealPoints;
        this.speed = CST.CHARACTERS.MonsterHedgehog.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterHedgehog.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Idle);


        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Idle);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterHedgehog.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterHedgehog.Death) {
            this.play(CST.ANIMATIONS.MonsterHedgehog.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterSlayerHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonstrSlayerDeath);
        this.hp = CST.CHARACTERS.MonsterSlayer.HealPoints;
        this.speed = CST.CHARACTERS.MonsterSlayer.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterSlayer.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterSlayer.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSlayer.Death) {
            this.play(CST.ANIMATIONS.MonsterSlayer.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterWorm extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES64.MonsterWorm, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterWormHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterWormDeath);
        this.hp = CST.CHARACTERS.MonsterWorm.HealPoints;
        this.speed = CST.CHARACTERS.MonsterWorm.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterWorm.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterWorm.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterWorm.Death) {
            this.play(CST.ANIMATIONS.MonsterWorm.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterWorm.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterWorm.Death) {
            this.play(CST.ANIMATIONS.MonsterWorm.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterWorm.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterWorm.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterWorm.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterWorm.Death) {
            this.play(CST.ANIMATIONS.MonsterWorm.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterDarkKnight extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 4) {
        super(scene, x, y, CST.SPRITES32.MonsterDarkKnight, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterDarkKnightHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterDarkKnightDeath);
        this.hp = CST.CHARACTERS.MonsterDarkKnight.HealPoints;
        this.speed = CST.CHARACTERS.MonsterDarkKnight.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterDarkKnight.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterDarkKnight.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterDarkKnight.Death) {
            this.play(CST.ANIMATIONS.MonsterDarkKnight.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterDarkKnight.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterDarkKnight.Death) {
            this.play(CST.ANIMATIONS.MonsterDarkKnight.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterDarkKnight.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterDarkKnight.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterDarkKnight.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterDarkKnight.Death) {
            this.play(CST.ANIMATIONS.MonsterDarkKnight.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterIEM extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES64.MonsterIEM, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterIEMHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterIEMDeath);
        this.hp = CST.CHARACTERS.MonsterIEM.HealPoints;
        this.speed = CST.CHARACTERS.MonsterIEM.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterIEM.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterIEM.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterIEM.Death) {
            this.play(CST.ANIMATIONS.MonsterIEM.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterIEM.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterIEM.Death) {
            this.play(CST.ANIMATIONS.MonsterIEM.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterIEM.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterIEM.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterIEM.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterIEM.Death) {
            this.play(CST.ANIMATIONS.MonsterIEM.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterSprout extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES96.MonsterSprout, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterSproutHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterSproutDeath);
        this.hp = CST.CHARACTERS.MonsterSprout.HealPoints;
        this.speed = CST.CHARACTERS.MonsterSprout.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterSprout.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSprout.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSprout.Death) {
            this.play(CST.ANIMATIONS.MonsterSprout.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSprout.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSprout.Death) {
            this.play(CST.ANIMATIONS.MonsterSprout.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSprout.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSprout.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterSprout.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSprout.Death) {
            this.play(CST.ANIMATIONS.MonsterSprout.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterBringer extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES140.MonsterBringer, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterBringerHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterBringerDeath);
        this.hp = CST.CHARACTERS.MonsterBringer.HealPoints;
        this.speed = CST.CHARACTERS.MonsterBringer.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterBringer.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBringer.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBringer.Death) {
            this.play(CST.ANIMATIONS.MonsterBringer.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBringer.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBringer.Death) {
            this.play(CST.ANIMATIONS.MonsterBringer.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBringer.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBringer.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterBringer.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterBringer.Death) {
            this.play(CST.ANIMATIONS.MonsterBringer.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterGuardian extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 2.4) {
        super(scene, x, y, CST.SPRITES120.MonsterGuardian, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterGuardianHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterGuardianDeath);
        this.hp = CST.CHARACTERS.MonsterGuardian.HealPoints;
        this.speed = CST.CHARACTERS.MonsterGuardian.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterGuardian.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGuardian.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGuardian.Death) {
            this.play(CST.ANIMATIONS.MonsterGuardian.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGuardian.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGuardian.Death) {
            this.play(CST.ANIMATIONS.MonsterGuardian.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGuardian.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGuardian.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterGuardian.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterGuardian.Death) {
            this.play(CST.ANIMATIONS.MonsterGuardian.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterReaper extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES100.MonsterReaper, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterReaperHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterReaperDeath);
        this.hp = CST.CHARACTERS.MonsterReaper.HealPoints;
        this.speed = CST.CHARACTERS.MonsterReaper.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterReaper.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterReaper.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterReaper.Death) {
            this.play(CST.ANIMATIONS.MonsterReaper.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterReaper.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterReaper.Death) {
            this.play(CST.ANIMATIONS.MonsterReaper.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterReaper.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterReaper.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterReaper.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterReaper.Death) {
            this.play(CST.ANIMATIONS.MonsterReaper.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterToaster extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 5) {
        super(scene, x, y, CST.SPRITE_TOASTER.MonsterToaster, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterToasterHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterToasterDeath);
        this.hp = CST.CHARACTERS.MonsterToaster.HealPoints;
        this.speed = CST.CHARACTERS.MonsterToaster.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterToaster.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterToaster.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterToaster.Death) {
            this.play(CST.ANIMATIONS.MonsterToaster.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterToaster.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterToaster.Death) {
            this.play(CST.ANIMATIONS.MonsterToaster.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterToaster.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterToaster.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterToaster.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterToaster.Death) {
            this.play(CST.ANIMATIONS.MonsterToaster.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterNecromancer extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES128.MonsterNecromancer, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterNecromancerHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterNecromancerDeath);
        this.hp = CST.CHARACTERS.MonsterNecromancer.HealPoints;
        this.speed = CST.CHARACTERS.MonsterNecromancer.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterNecromancer.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNecromancer.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNecromancer.Death) {
            this.play(CST.ANIMATIONS.MonsterNecromancer.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNecromancer.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNecromancer.Death) {
            this.play(CST.ANIMATIONS.MonsterNecromancer.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNecromancer.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNecromancer.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterNecromancer.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNecromancer.Death) {
            this.play(CST.ANIMATIONS.MonsterNecromancer.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterSoulWizard extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 2) {
        super(scene, x, y, CST.SPRITES250.MonsterSoulWizard, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterSoulWizardHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterSoulWizardDeath);
        this.hp = CST.CHARACTERS.MonsterSoulWizard.HealPoints;
        this.speed = CST.CHARACTERS.MonsterSoulWizard.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterSoulWizard.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSoulWizard.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSoulWizard.Death) {
            this.play(CST.ANIMATIONS.MonsterSoulWizard.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSoulWizard.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSoulWizard.Death) {
            this.play(CST.ANIMATIONS.MonsterSoulWizard.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSoulWizard.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSoulWizard.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterSoulWizard.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterSoulWizard.Death) {
            this.play(CST.ANIMATIONS.MonsterSoulWizard.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterFireWizard extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES150.MonsterFireWizard, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterFireWizardHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterFireWizardDeath);
        this.hp = CST.CHARACTERS.MonsterFireWizard.HealPoints;
        this.speed = CST.CHARACTERS.MonsterFireWizard.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterFireWizard.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterFireWizard.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterFireWizard.Death) {
            this.play(CST.ANIMATIONS.MonsterFireWizard.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterFireWizard.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterFireWizard.Death) {
            this.play(CST.ANIMATIONS.MonsterFireWizard.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterFireWizard.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterFireWizard.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterFireWizard.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterFireWizard.Death) {
            this.play(CST.ANIMATIONS.MonsterFireWizard.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterMiner extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 1.5) {
        super(scene, x, y, CST.SPRITES196.MonsterMiner, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterMinerHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterMinerDeath);
        this.hp = CST.CHARACTERS.MonsterMiner.HealPoints;
        this.speed = CST.CHARACTERS.MonsterMiner.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterMiner.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterMiner.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterMiner.Death) {
            this.play(CST.ANIMATIONS.MonsterMiner.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterMiner.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterMiner.Death) {
            this.play(CST.ANIMATIONS.MonsterMiner.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterMiner.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterMiner.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterMiner.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterMiner.Death) {
            this.play(CST.ANIMATIONS.MonsterMiner.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class MonsterNanny extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 4) {
        super(scene, x, y, CST.SPRITES80.MonsterNanny, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.MonsterNannyHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.MonsterNannyDeath);
        this.hp = CST.CHARACTERS.MonsterNanny.HealPoints;
        this.speed = CST.CHARACTERS.MonsterNanny.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.MonsterNanny.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNanny.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNanny.Death) {
            this.play(CST.ANIMATIONS.MonsterNanny.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNanny.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNanny.Death) {
            this.play(CST.ANIMATIONS.MonsterNanny.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNanny.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNanny.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.MonsterNanny.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.MonsterNanny.Death) {
            this.play(CST.ANIMATIONS.MonsterNanny.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class BossCultist extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 1.5) {
        super(scene, x, y, CST.SPRITES200.BossCultist, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.BossCultistHit);
        this.walkSound = scene.sound.add(CST.SOUNDS.BossCultistMove);
        this.deathSound = scene.sound.add(CST.SOUNDS.BossCultistDeath);
        this.hp = CST.CHARACTERS.BossCultist.HealPoints;
        this.speed = CST.CHARACTERS.BossCultist.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.BossCultist.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCultist.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.BossCultist.Death) {
            this.play(CST.ANIMATIONS.BossCultist.Idle);
            this.walkSound.stop();
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCultist.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.BossCultist.Death) {
            this.play(CST.ANIMATIONS.BossCultist.Walk);
            this.walkSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: true,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCultist.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.BossCultist.Death) {
            this.walkSound.stop();
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.BossCultist.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCultist.Death) {
            this.walkSound.stop();
            this.play(CST.ANIMATIONS.BossCultist.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class BossMiranda extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES200.BossMiranda, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.BossMirandaHit);
        this.walkSound = scene.sound.add(CST.SOUNDS.BossMirandaMove);
        this.deathSound = scene.sound.add(CST.SOUNDS.BossMirandaDeath);
        this.hp = CST.CHARACTERS.BossMiranda.HealPoints;
        this.speed = CST.CHARACTERS.BossMiranda.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.BossMiranda.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossMiranda.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.BossMiranda.Death) {
            this.play(CST.ANIMATIONS.BossMiranda.Idle);
            this.walkSound.stop();
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossMiranda.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.BossMiranda.Death) {
            this.play(CST.ANIMATIONS.BossMiranda.Walk);
            this.walkSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: true,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossMiranda.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.BossMiranda.Death) {
            this.walkSound.stop();
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.BossMiranda.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossMiranda.Death) {
            this.walkSound.stop();
            this.play(CST.ANIMATIONS.BossMiranda.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.BossDragonHit);
        this.walkSound = scene.sound.add(CST.SOUNDS.BossDragonMove);
        this.deathSound = scene.sound.add(CST.SOUNDS.BossDragonDeath);
        this.hp = CST.CHARACTERS.BossBlackDragon.HealPoints;
        this.speed = CST.CHARACTERS.BossBlackDragon.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.BossBlackDragon.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Death) {
            this.play(CST.ANIMATIONS.BossBlackDragon.Idle);
            this.walkSound.stop();
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Death) {
            this.play(CST.ANIMATIONS.BossBlackDragon.Walk);
            this.walkSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: true,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Death) {
            this.walkSound.stop();
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.BossBlackDragon.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossBlackDragon.Death) {
            this.walkSound.stop();
            this.play(CST.ANIMATIONS.BossBlackDragon.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.BossCthulhuHit);
        this.walkSound = scene.sound.add(CST.SOUNDS.BossCthulhuMove);
        this.deathSound = scene.sound.add(CST.SOUNDS.BossCthulhuDeath);
        this.hp = CST.CHARACTERS.BossCthulhu.HealPoints;
        this.speed = CST.CHARACTERS.BossCthulhu.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.BossCthulhu.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Death) {
            this.play(CST.ANIMATIONS.BossCthulhu.Idle);
            this.walkSound.stop();
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Death) {
            this.play(CST.ANIMATIONS.BossCthulhu.Walk);
            this.walkSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: true,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || (this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Brainstorm &&
            this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Tentacle &&
            this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Death)) {
            this.walkSound.stop();
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(randomIntFromInterval(0, 1) == 1 ? CST.ANIMATIONS.BossCthulhu.Brainstorm : CST.ANIMATIONS.BossCthulhu.Tentacle);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossCthulhu.Death) {
            this.walkSound.stop();
            this.play(CST.ANIMATIONS.BossCthulhu.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class BossDemon extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES240.BossDemon, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.BossDemonHit);
        this.walkSound = scene.sound.add(CST.SOUNDS.BossDemonMove);
        this.deathSound = scene.sound.add(CST.SOUNDS.BossDemonDeath);
        this.hp = CST.CHARACTERS.BossDemon.HealPoints;
        this.speed = CST.CHARACTERS.BossDemon.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.BossDemon.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossDemon.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.BossDemon.Death) {
            this.play(CST.ANIMATIONS.BossDemon.Idle);
            this.walkSound.stop();
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossDemon.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.BossDemon.Death) {
            this.play(CST.ANIMATIONS.BossDemon.Walk);
            this.walkSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: true,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossDemon.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.BossDemon.Death) {
            this.walkSound.stop();
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.BossDemon.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.BossDemon.Death) {
            this.walkSound.stop();
            this.play(CST.ANIMATIONS.BossDemon.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.scene.playerStats.EXPERIENCE += this.specs.Experience;
            if (flag == true) this.scene.playerStats.COINS += this.specs.Cost * (1 + 0.01 * this.scene.playerStats.LEVELS_SHOP.BuildingPodkova);
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
    constructor(scene, x, y, id, heap, scale = 4) {
        super(scene, x, y, CST.SPRITES32.HeroCat, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroCatHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroCatDeath);
        this.hp = CST.CHARACTERS.HeroCat.HealPoints;
        this.speed = CST.CHARACTERS.HeroCat.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroCat.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.play(CST.ANIMATIONS.HeroCat.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.play(CST.ANIMATIONS.HeroCat.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroCat.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 15,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCat.Death) {
            this.play(CST.ANIMATIONS.HeroCat.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroMageHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroMageDeath);
        this.hp = CST.CHARACTERS.HeroMage.HealPoints;
        this.speed = CST.CHARACTERS.HeroMage.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroMage.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Death) {
            this.play(CST.ANIMATIONS.HeroMage.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Death) {
            this.play(CST.ANIMATIONS.HeroMage.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroMage.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
            let anim = this.scene.add.sprite(this.x + 32, this.y, CST.SPRITES64.Thunderstrike).setDepth(CST.DEPTHS.Effects);
            anim.play(CST.EFFECTS.Thunderstrike);
            anim.once('animationcomplete', () => {
                anim.destroy();
            })
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMage.Death) {
            this.play(CST.ANIMATIONS.HeroMage.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 15,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroArchaeologistHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroArchaeologistDeath);
        this.hp = CST.CHARACTERS.HeroArchaeologist.HealPoints;
        this.speed = CST.CHARACTERS.HeroArchaeologist.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroArchaeologist.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Death) {
            this.play(CST.ANIMATIONS.HeroArchaeologist.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Death) {
            this.play(CST.ANIMATIONS.HeroArchaeologist.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroArchaeologist.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 15,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroArchaeologist.Death) {
            this.play(CST.ANIMATIONS.HeroArchaeologist.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class HeroSceleton extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES48.HeroSceleton, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroSceletonHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroSceletonDeath);
        this.hp = CST.CHARACTERS.HeroSceleton.HealPoints;
        this.speed = CST.CHARACTERS.HeroSceleton.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroSceleton.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroSceleton.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroSceleton.Death) {
            this.play(CST.ANIMATIONS.HeroSceleton.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroSceleton.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroSceleton.Death) {
            this.play(CST.ANIMATIONS.HeroSceleton.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroSceleton.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroSceleton.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroSceleton.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroSceleton.Death) {
            this.play(CST.ANIMATIONS.HeroSceleton.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroCenturionHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroCenturionDeath);
        this.hp = CST.CHARACTERS.HeroCenturion.HealPoints;
        this.speed = CST.CHARACTERS.HeroCenturion.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroCenturion.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroCenturion.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 15,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroCenturion.Death) {
            this.play(CST.ANIMATIONS.HeroCenturion.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class HeroTesla extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES64.HeroTesla, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroTeslaHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroTeslaDeath);
        this.hp = CST.CHARACTERS.HeroTesla.HealPoints;
        this.speed = CST.CHARACTERS.HeroTesla.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroTesla.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroTesla.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroTesla.Death) {
            this.play(CST.ANIMATIONS.HeroTesla.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroTesla.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroTesla.Death) {
            this.play(CST.ANIMATIONS.HeroTesla.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroTesla.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroTesla.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroTesla.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroTesla.Death) {
            this.play(CST.ANIMATIONS.HeroTesla.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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


export class HeroWitch extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES48.HeroWitch, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroWitchHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroWitchDeath);
        this.hp = CST.CHARACTERS.HeroWitch.HealPoints;
        this.speed = CST.CHARACTERS.HeroWitch.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroWitch.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWitch.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWitch.Death) {
            this.play(CST.ANIMATIONS.HeroWitch.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWitch.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWitch.Death) {
            this.play(CST.ANIMATIONS.HeroWitch.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWitch.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWitch.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroWitch.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWitch.Death) {
            this.play(CST.ANIMATIONS.HeroWitch.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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


export class HeroReaper extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES48.HeroReaper, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroReaperHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroReaperDeath);
        this.hp = CST.CHARACTERS.HeroReaper.HealPoints;
        this.speed = CST.CHARACTERS.HeroReaper.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroReaper.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroReaper.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroReaper.Death) {
            this.play(CST.ANIMATIONS.HeroReaper.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroReaper.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroReaper.Death) {
            this.play(CST.ANIMATIONS.HeroReaper.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroReaper.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroReaper.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroReaper.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroReaper.Death) {
            this.play(CST.ANIMATIONS.HeroReaper.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroNightmareHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroNightmareDeath);
        this.hp = CST.CHARACTERS.HeroNightmare.HealPoints;
        this.speed = CST.CHARACTERS.HeroNightmare.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroNightmare.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.play(CST.ANIMATIONS.HeroNightmare.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.play(CST.ANIMATIONS.HeroNightmare.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroNightmare.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroNightmare.Death) {
            this.play(CST.ANIMATIONS.HeroNightmare.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class HeroMinotaur extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES96.HeroMinotaur, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroMinotaurHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroMinotaurDeath);
        this.hp = CST.CHARACTERS.HeroMinotaur.HealPoints;
        this.speed = CST.CHARACTERS.HeroMinotaur.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroMinotaur.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMinotaur.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMinotaur.Death) {
            this.play(CST.ANIMATIONS.HeroMinotaur.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMinotaur.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMinotaur.Death) {
            this.play(CST.ANIMATIONS.HeroMinotaur.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMinotaur.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroMinotaur.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroMinotaur.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroMinotaur.Death) {
            this.play(CST.ANIMATIONS.HeroMinotaur.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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

export class HeroStormhead extends CharacterSprite {
    constructor(scene, x, y, id, heap, scale = 3) {
        super(scene, x, y, CST.SPRITES128.HeroStormhead, scale);
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroStormheadHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroStormheadDeath);
        this.hp = CST.CHARACTERS.HeroStormhead.HealPoints;
        this.speed = CST.CHARACTERS.HeroStormhead.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroStormhead.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroStormhead.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroStormhead.Death) {
            this.play(CST.ANIMATIONS.HeroStormhead.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroStormhead.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroStormhead.Death) {
            this.play(CST.ANIMATIONS.HeroStormhead.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroStormhead.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroStormhead.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroStormhead.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroStormhead.Death) {
            this.play(CST.ANIMATIONS.HeroStormhead.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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
        this.hitSound = scene.sound.add(CST.SOUNDS.HeroWizardHit);
        this.deathSound = scene.sound.add(CST.SOUNDS.HeroWizardDeath);
        this.hp = CST.CHARACTERS.HeroWizard.HealPoints;
        this.speed = CST.CHARACTERS.HeroWizard.Speed;
        this.id = id;
        this.heap = heap;
        this.array = new Array(CST.CHARACTERS.HeroWizard.EnemyControl);
    }

    setAnimationIdle(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Idle && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.play(CST.ANIMATIONS.HeroWizard.Idle);
        }
        return this;
    }

    setAnimationWalk(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Walk && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.play(CST.ANIMATIONS.HeroWizard.Walk);
        }
        return this;
    }

    setAnimationHit(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Hit && this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.once('animationcomplete', () => {
                this.setAnimationIdle(isLeftOriented)
            })
            this.play(CST.ANIMATIONS.HeroWizard.Hit);
            this.hitSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    setAnimationDeath(isLeftOriented = true) {
        if (this.anims.currentAnim == null || this.anims.currentAnim.key != CST.ANIMATIONS.HeroWizard.Death) {
            this.play(CST.ANIMATIONS.HeroWizard.Death);
            this.deathSound.play({
                mute: (loadPlayerData().OPTIONS.Sounds / 10 <= 0) ? true : false,
                volume: loadPlayerData().OPTIONS.Sounds / 10,
                // rate: 1,
                // detune: 0,
                // seek: 0,
                loop: false,
                // delay: 0
            });
        }
        return this;
    }

    death(flag = false) {
        if (this.alive) {
            this.alive = false;
            this.setAnimationDeath();
            this.remove();
        }
    }

    damage(_hp) {
        this.hp -= _hp;
        if (this.hp <= 0) {
            this.death(true);
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