import { CharacterSprite } from "./CharacterSprite.js";
import { CST } from "./const.js";
export function battle(parus, enemies, heroes, characterHeap, playerStats) {
    enemies.getMatching("active", true).forEach(enemy => {
        console.log(enemy.specs.Range);
        if (heroes.getLength() == 0 && Math.abs(enemy.x - parus.x) >= enemy.specs.Range + 100) {//
            var VectorX, VectorY;
            VectorX = (parus.x + 200 - enemy.x);
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
        else if (heroes.getLength() == 0) {

            enemy.setVelocity(0, 0);
            enemy.setAnimationHit();
            if (Date.now() - enemy.lastDamageTime >= enemy.specs.AttackCooldown) {
                enemy.lastDamageTime = Date.now();
                if (!parus.damage(enemy.specs.PhysicalDamage)) {
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
            var hero = heroes.getFirstAlive(true);


            var VectorX, VectorY, VectorXMin, VectorYMin;
            VectorXMin = (hero.x - enemy.x);
            VectorYMin = (hero.y - enemy.y);
            var modulMin = Math.sqrt(VectorXMin * VectorXMin + VectorYMin * VectorYMin);
            for (let her of heroes.getMatching("active", true)) {
                VectorX = (her.x - enemies.x);
                VectorY = (her.y - enemies.y);
                var modul = Math.sqrt(VectorX * VectorX + VectorY * VectorY);
                her.lengthForEnemy = modul;
                for (var i = 0; i < enemy.array.length; i++) {
                    //  // //console.log(enemy.array[i].lengthForEnemy);
                    // //console.log(hero.array.includes(ene));
                    // //console.log(ene);
                    if (enemy.array[i] == undefined && !(enemy.array.includes(her))) {
                        enemy.array[i] = her;
                        // //console.log(2);
                    }
                    else if (enemy.array[i] && !(enemy.array.includes(her))) {
                        if (modul < enemy.array[i].lengthForEnemy) {
                            for (var j = 1; j < enemy.array.length; j++) {
                                enemy.array[j] = hero.array[j - 1];
                            }
                            enemy.array[0] = her;
                        }
                    }
                }
                if (modul < modulMin) {
                    modulMin = modul;
                    VectorXMin = VectorX;
                    VectorYMin = VectorY;
                    heroinPriority = hero;
                }
            }

            for (var i = 0; i < enemy.array.length; i++) {
                //console.log(enemy.array);
                if (enemy.array[i]) {
                    hero = enemy.array[i];
                    if (hero.alive) {
                        //console.log(13);
                        if (Math.abs(hero.x - enemy.x) <= enemy.specs.Range) {
                            hero.setVelocity(0, 0);
                            //console.log(hero);
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
                                //console.log(15);

                            }

                        }
                    }
                    else {

                        if (VectorXMin > 0) {
                            enemy.flipX = true;
                            console.log(23);
                            enemy.setAnimationWalk();
                        }
                        else {
                            enemy.flipX = false;
                            console.log(24);
                            enemy.setAnimationWalk();
                        }

                    }
                }
                else {
                    //console.log(33);
                    enemy.flipX = true;
                    enemy.array.splice(enemy.array.indexOf(hero), 1);
                }
            }
            enemy.flipX = true;
            if (Math.abs(hero.x - enemy.x) > enemy.specs.Range) {
                enemy.setVelocity(VectorXMin / modulMin * enemy.specs.Speed, VectorYMin / modulMin * enemy.specs.Speed);
            }

        }
    });

    heroes.getMatching("active", true).forEach(hero => {

        if (enemies.getLength() == 0) {
            hero.setAnimationIdle(false);
            hero.setVelocity(0, 0);
            hero.flipX = false;
            //  // //console.log(hero.id);
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
                console.log(hero.array);
                for (var i = 0; i < hero.array.length; i++) {
                    if (hero.array[i] == undefined && !(hero.array.includes(ene))) {
                        hero.array[i] = ene;
                    }
                    else if (hero.array[i] && !(hero.array.includes(ene))) {
                        if (modul < hero.array[i].lengthForEnemy) {
                            for (var j = 1; j < hero.array.length; j++) {
                                hero.array[j] = hero.array[j - 1];
                            }
                            hero.array[0] = ene;
                        }
                    }
                }
                console.log(hero.array.length);
                if (modul < modulMin) {
                    modulMin = modul;
                    VectorXMin = VectorX;
                    VectorYMin = VectorY;

                }
            }
           // console.log(hero.array);
            if (Math.abs(hero.x - enemy.x) > hero.specs.Range) {
                if (VectorXMin > 0) {
                    hero.flipX = false;
                    hero.setAnimationWalk();
                }
                else {
                    hero.flipX = true;
                    hero.setAnimationWalk();
                }
                console.log(15);
               
                hero.setVelocity(VectorXMin / modulMin * hero.specs.Speed, VectorYMin / modulMin * hero.specs.Speed);
            
            }
            //console.log(hero.array);
           // console.log(hero.array);
            for (var i = 0; i < hero.array.length; i++) {
                console.log(hero.array);
                //console.log(hero.array);
                if (hero.array[i]) {
                    enemy = hero.array[i];
                    if (enemy.alive) {
                        //console.log(1);
                        if (Math.abs(hero.x - enemy.x) <= hero.specs.Range) {
                            hero.setVelocity(0, 0);
                            //console.log(enemy);
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
                                //console.log(15);

                            }

                        }
                    }
                    else {
                        //console.log(3);
                        hero.array[hero.array.indexOf(enemy)]=undefined;
                        hero.array.sort();
                        console.log(hero.array);
                    }
                }
                else {
                    //console.log(3);
                    hero.array.splice(hero.array.indexOf(enemy), 1);
                }
            }
        }

    });
};
