import { CharacterSprite } from "./CharacterSprite.js";
import { CST } from "../scripts/const.js";
export function battle(parus, enemies, heroes){
     enemies.getMatching("active", true).forEach(enemy => {
        if (enemy.x + 200 >= parus.x && enemy.x <= parus.x + 200) {

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
    });
 heroes.getMatching("active", true).forEach(hero => {
    if ( enemies.getLength() == 0 && hero.x > CST.NUMBERS.HeroSpawnArea.X0 + 1) {
        if (!hero.flipX) {
            hero.flipX = true;
        }
        hero.setAnimationWalk(true);
    }
    else if ( enemies.getLength() == 0 && hero.body.velocity.x != 0) {
        hero.setAnimationIdle(false);
    }
     enemies.getMatching("active", true).forEach(enemy => {
    if ( enemies.getLength() != 0) {
        var enemyinPriority =  enemies.getFirstAlive();
        if (enemy.x + 200 >= parus.x && enemy.x <= parus.x + 200) {

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
                    parus.currHP =parus.maxHP;
                    parus.currMP = parus.maxMP;
                     playerStats.BattleMode = false;
                     playerStats.WAVE_PROGRESS = 0;
                };
            }

        }
        if (enemyinPriority.y > hero.y) {
            hero.y += 1;
        }
        if (enemyinPriority.y < hero.y) {
            hero.y -= 1;
        }
        if (enemyinPriority.x + 5 >= hero.x && enemyinPriority.x <= hero.x + 5) {
            hero.setVelocity(0, 0);
            hero.setAnimationHit();
            enemyinPriority.setVelocity(0, 0);
            enemyinPriority.setAnimationHit(false);
            if (Date.now() - enemyinPriority.lastDamageTime >= enemyinPriority.specs.AttackCooldown) {
                enemyinPriority.lastDamageTime = Date.now();
                hero.damage(enemyinPriority.specs.PhysicalDamage);
            }
            if (Date.now() - hero.lastDamageTime >= hero.specs.AttackCooldown) {
                hero.lastDamageTime = Date.now();
                enemyinPriority.damage(hero.specs.PhysicalDamage);
            }
        }
        else if (enemyinPriority.x < hero.x && hero.body.velocity.x >= 0) {
            if (!hero.flipX) {
                hero.flipX = true;
            }
            hero.body.velocity.x *= -1;
            hero.setAnimationWalk(true);
        }
        else if (enemyinPriority.x > hero.x && hero.body.velocity.x <= 0) {
            if (hero.flipX) {
                hero.flipX = false;
            }
            hero.setAnimationWalk(false);
            hero.body.velocity.x *= -1;

        }

    }
});
 })
;
};