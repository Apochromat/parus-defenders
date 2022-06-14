import { CharacterSprite } from "./CharacterSprite.js";
import { CST } from "./const.js";
import { calculateDamage } from "./Misc.js";
import { calculateDamageParus } from "./Misc.js";
export function battle(parus, enemies, heroes, characterHeap, playerStats) {
    enemies.getMatching("active", true).forEach(enemy => {
        if ((heroes.getLength() == 0 || enemy.ParusPriority) && Math.round(Math.abs(enemy.x - parus.x)) > enemy.specs.Range + 200) {//
            var VectorX, VectorY;
            VectorX = (parus.x - enemy.x);
            VectorY = (parus.y + 150 - enemy.y);
            var modul = Math.sqrt(VectorX * VectorX + VectorY * VectorY);
            if (VectorX > 0) {
                enemy.setAnimationWalk(false);
            }
            else {
                enemy.flipX = true;
                enemy.setAnimationWalk(true);
            }

            enemy.setVelocity(VectorX / modul * enemy.specs.Speed, VectorY / modul * enemy.specs.Speed);
        }
        else if (heroes.getLength() == 0 || enemy.ParusPriority) {
            enemy.setVelocity(0, 0);
            enemy.setAnimationHit();
            enemy.setAnimationIdle();
            if (Date.now() - enemy.lastDamageTime >= enemy.specs.AttackCooldown) {
                enemy.lastDamageTime = Date.now();

                if (!parus.damage(calculateDamageParus(playerStats, enemy.constructor.name))) {
                    for (let el in characterHeap.heap) {
                        characterHeap.heap[el].specs.PhysicalDamage = 0;
                        characterHeap.heap[el].death();
                    }
                    parus.currHP = parus.maxHP;
                    parus.currMP = parus.maxMP;
                    playerStats.BattleMode = false;
                    playerStats.WAVE_PROGRESS = 0;

                };
            }
        }

        if (heroes.getLength() != 0) {
            // var full;
            var hero = heroes.getFirstAlive(true);
            var heroButtle=false;
            // var VectorX, VectorY, VectorXMin, VectorYMin;
            // VectorXMin = (hero.x - enemy.x);
            // VectorYMin = (hero.y - enemy.y);
           var VectorXMin = (parus.x - enemy.x);
            var VectorYMin = (parus.y + 150 - enemy.y);
            if (VectorX > 0) {
                enemy.setAnimationWalk(false);
            }
            else {
                enemy.flipX = true;
                enemy.setAnimationWalk(true);
            }
            var modulMin = Math.sqrt(VectorXMin * VectorXMin + VectorYMin * VectorYMin);
            for (let her of heroes.getMatching("active", true)) {
                VectorX = (her.x - enemies.x);
                VectorY = (her.y - enemies.y);
                modul = Math.sqrt(VectorX * VectorX + VectorY * VectorY);
                her.lengthForEnemy = modul;
                // console.log(her.array.includes(undefined));
               

                for (var i = 0; i < enemy.array.length; i++) {
                    if (enemy.array[i] == undefined && !(enemy.array.includes(her))) {
                        enemy.array[i] = her;
                    }
                    else if (enemy.array[i] && !(enemy.array.includes(her))) {
                        if (modul < enemy.array[i].lengthForEnemy) {
                            for (var j = 1; j < enemy.array.length; j++) {
                                enemy.array[j] = enemy.array[j - 1];
                            }
                            enemy.array[0] = her;
                        }
                    }
                }
                if (modul < modulMin && her.array.includes(enemy)) {
                    modulMin = modul;
                    VectorXMin = VectorX;
                    VectorYMin = VectorY;
                    hero = her;
                    heroButtle=true;
                }

            }
            if(hero.array.includes(enemy)){
            if (Math.abs(hero.x - enemy.x) > enemy.specs.Range) {
                if (VectorXMin > 0) {
                    enemy.flipX = false;
                    enemy.setAnimationWalk();
                }
                else {
                    enemy.flipX = true;
                    enemy.setAnimationWalk();
                }
                enemy.setVelocity(VectorXMin / modulMin * enemy.specs.Speed, VectorYMin / modulMin * enemy.specs.Speed);
            }
            for (var i = 0; i < enemy.array.length; i++) {
                if (enemy.array[i]) {
                    if (!enemy.array[i].alive) {
                        enemy.array[i] = undefined;
                    }
                }
            }
            if (Date.now() - enemy.lastDamageTime >= enemy.specs.AttackCooldown && Math.abs(hero.x - enemy.x) <= enemy.specs.Range) {
                enemy.setVelocity(0, 0);
                enemy.setAnimationHit();
                enemy.setAnimationIdle();
                enemy.lastDamageTime = Date.now();
                for (var i = 0; i < enemy.array.length; i++) {
                    if (enemy.array[i]) {
                        if (Math.abs(enemy.x - enemy.array[i].x) <= enemy.specs.Range) {
                            enemy.array[i].damage(calculateDamage(playerStats, String(enemy.constructor.name), String(enemy.array[i].constructor.name)));
                        }
                    }
                }
            }}
            else{
                enemy.setVelocity(VectorXMin / modulMin * enemy.specs.Speed, VectorYMin / modulMin * enemy.specs.Speed);
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
            var VectorX, VectorY, VectorXMin, VectorYMin;
            VectorXMin = (enemy.x - hero.x);
            VectorYMin = (enemy.y - hero.y);
            var modulMin = Math.sqrt(VectorXMin * VectorXMin + VectorYMin * VectorYMin);
            for (let ene of enemies.getMatching("active", true)) {
                VectorX = (ene.x - hero.x);
                VectorY = (ene.y - hero.y);
                var modul = Math.sqrt(VectorX * VectorX + VectorY * VectorY);
                ene.lengthForEnemy = modul;
                for (var i = 0; i < hero.array.length; i++) {
                    if (hero.array[i] == undefined && !(hero.array.includes(ene))) {
                        hero.array[i] = ene;
                    }
                    else if (hero.array[i] && !(hero.array.includes(ene)) && enemy.lengthForEnemy < hero.array.lengthForEnemy) {
                        for (var j = i + 1; j < hero.array.length; j++) {
                            hero.array[j] = hero.array[j - 1];
                        }
                        hero.array[i] = ene;
                    }
                }
                if (modul < modulMin) {
                    modulMin = modul;
                    VectorXMin = VectorX;
                    VectorYMin = VectorY;
                    enemy = ene;
                }
            }
            if (Math.abs(hero.x - enemy.x) > hero.specs.Range) {
                if (VectorXMin > 0) {
                    hero.flipX = false;
                    hero.setAnimationWalk();
                }
                else {
                    hero.flipX = true;
                    hero.setAnimationWalk();
                }
                hero.setVelocity(VectorXMin / modulMin * hero.specs.Speed, VectorYMin / modulMin * hero.specs.Speed);

            }

            for (var i = 0; i < hero.array.length; i++) {
                if (hero.array[i]) {
                    if (!hero.array[i].alive) {
                        hero.array[i] = undefined;
                    }
                }
            }
            if (Date.now() - hero.lastDamageTime >= hero.specs.AttackCooldown && Math.abs(hero.x - enemy.x) <= hero.specs.Range) {
                hero.setVelocity(0, 0);
                hero.setAnimationIdle();
                hero.setAnimationHit();
                hero.lastDamageTime = Date.now();

                for (var i = 0; i < hero.array.length; i++) {

                    if (hero.array[i]) {
                        if (Math.abs(hero.x - hero.array[i].x) <= hero.specs.Range) {
                            hero.array[i].damage(calculateDamage(playerStats, String(hero.constructor.name), String(hero.array[i].constructor.name)));
                        }
                    }
                }
            }
        }
    });
};
