import { CharacterSprite } from "./CharacterSprite.js";
import { CST } from "../scripts/const.js";
export function battle(parus, enemies, heroes, characterHeap, playerStats) {
    enemies.getMatching("active", true).forEach(enemy => {
        console.log(enemy);
        if (heroes.getLength() == 0 && Math.round(enemy.x)> parus.x+250) {
            var VectorX, VectorY;
            VectorX = (parus.x+200 - enemy.x);
            VectorY = (parus.y+150 - enemy.y);
            var modul = Math.sqrt(VectorX * VectorX + VectorY * VectorY);
            if (VectorX > 0) {
                enemy.setAnimationWalk(false);
            }
            else {
                enemy.flipX = true;
                enemy.setAnimationWalk(true);
            }
            enemy.setVelocity(VectorX / modul * enemy.speed, VectorY / modul * enemy.speed);
            console.log(enemy.y);
        }
        else if (heroes.getLength() == 0) {
            enemy.setVelocity(0, 0);
            enemy.setAnimationHit();
            if (Date.now() - enemy.lastDamageTime >= enemy.specs.AttackCooldown) {
                enemy.lastDamageTime = Date.now();
                if (!parus.damage(enemy.specs.PhysicalDamage)) {
                    for (let el in  characterHeap.heap) {
                         characterHeap.heap[el].specs.PhysicalDamage = 0;
                         characterHeap.heap[el].setAnimationDeath();
                         characterHeap.heap[el].remove();
                    }
                    parus.currHP = parus.maxHP;
                    parus.currMP = parus.maxMP;
                    playerStats.BattleMode = false;
                    playerStats.WAVE_PROGRESS = 0;

                };
            }

        }
        if (heroes.getLength() != 0) {
            var hero = heroes.getFirstAlive(true);
            enemy.array.push(hero);
            console.log(enemy.array);
            var VectorX, VectorY,VectorXMin, VectorYMin;
            VectorXMin = (hero.x - enemy.x);
            VectorYMin = (hero.y - enemy.y);
            var modulMin = Math.sqrt(VectorXMin * VectorXMin + VectorYMin * VectorYMin);
            for (let her of heroes.getMatching("active", true)) {
                VectorX = (her.x - enemies.x);
                VectorY = (her.y - enemies.y);
                var modul = Math.sqrt(VectorX * VectorX + VectorY * VectorY);
                if(modul<modulMin){
                    modulMin=modul;
                    VectorXMin =VectorX;
                    VectorYMin=VectorY;
                }
            }
            if(Math.abs(Math.round(hero.x)-Math.round(enemy.x))<50 && Math.abs(Math.round(hero.y)-Math.round(enemy.y))<50){
                hero.setVelocity(0, 0);
                hero.setAnimationHit();
                enemy.setVelocity(0, 0);
                enemy.setAnimationHit();
                if (Date.now() - enemy.lastDamageTime >= enemy.specs.AttackCooldown) {
                    enemy.lastDamageTime = Date.now();
                    hero.damage(enemy.specs.PhysicalDamage);
                }
                if (Date.now() - hero.lastDamageTime >= hero.specs.AttackCooldown) {
                    hero.lastDamageTime = Date.now();
                    enemy.damage(hero.specs.PhysicalDamage);
                }
                console.log(1);
            }
            else{
            if (VectorXMin > 0) {
                enemy.flipX = false;
                enemy.setAnimationWalk(false);
            }
            else {
                enemy.flipX = true;
                enemy.setAnimationWalk(true);
            }
            enemy.setVelocity(VectorXMin / modulMin * enemy.speed, VectorYMin / modulMin * enemy.speed);
        }
            
        }
    });
 
    heroes.getMatching("active", true).forEach(hero => {
        if (enemies.getLength() == 0) {
            hero.setAnimationIdle(false);
            hero.setVelocity(0, 0);
            hero.flipX = false;   
        }
        else if (enemies.getLength() != 0) {
            
            var enemy = enemies.getFirstAlive(true);

            var VectorX, VectorY,VectorXMin, VectorYMin;
            VectorXMin = (enemy.x - hero.x);
            VectorYMin = (enemy.y - hero.y);
            var modulMin = Math.sqrt(VectorXMin * VectorXMin + VectorYMin * VectorYMin);
            for (let ene of enemies.getMatching("active", true)) {
                VectorX = (ene.x - hero.x);
                VectorY = (ene.y - hero.y);
                var modul = Math.sqrt(VectorX * VectorX + VectorY * VectorY);
                if(modul<modulMin){
                    modulMin=modul;
                    VectorXMin =VectorX;
                    VectorYMin=VectorY;
                }
            }
            if(Math.abs(Math.round(hero.x)-Math.round(enemy.x))<50 && Math.abs(Math.round(hero.y)-Math.round(enemy.y))<50){
                hero.setVelocity(0, 0);
                hero.setAnimationHit();
                enemy.setVelocity(0, 0);
                enemy.setAnimationHit();
                if (Date.now() - enemy.lastDamageTime >= enemy.specs.AttackCooldown) {
                    enemy.lastDamageTime = Date.now();
                    hero.damage(enemy.specs.PhysicalDamage);
                }
                if (Date.now() - hero.lastDamageTime >= hero.specs.AttackCooldown) {
                    hero.lastDamageTime = Date.now();
                    enemy.damage(hero.specs.PhysicalDamage);
                }
            }
            else{
            if (VectorXMin > 0) {
                hero.flipX = false;
                hero.setAnimationWalk();
            }
            else {
                hero.flipX = true;
                hero.setAnimationWalk();
            }
            hero.setVelocity(VectorXMin / modulMin * hero.speed, VectorYMin / modulMin * hero.speed); 
        }
        }

    });
};