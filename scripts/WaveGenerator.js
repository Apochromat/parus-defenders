import { CST } from "../scripts/const.js";
import { randomIntFromInterval } from "../scripts/Misc.js";

export class Wave {
    creationTime;
    lastSpawnTime;
    spawnDelay;
    number;
    monsterMaximum;
    spawnedMonsters = 0;
    scene;
    finished = false;
    constructor(scene, number) {
        this.number = number;
        this.scene = scene;
        this.creationTime = Date.now();
        this.lastSpawnTime = Date.now();
        this.monsterMaximum = CST.WAVE_GENERATOR.MinMonsterAmount + number * CST.WAVE_GENERATOR.MonsterWaveCoefficient;
        this.spawnDelay = CST.WAVE_GENERATOR.MinSpawnDelay + CST.WAVE_GENERATOR.PlateauSpawnWave / number +
            randomIntFromInterval(-CST.WAVE_GENERATOR.SpawnDelayVariety, CST.WAVE_GENERATOR.SpawnDelayVariety);
    }

    run() {
        if (this.monsterMaximum <= this.spawnedMonsters) {
            this.finished = true;
            console.log(`Spawned ${this.spawnedMonsters}/${this.monsterMaximum}`);
            return false
        }
        if (Date.now() - this.lastSpawnTime >= this.spawnDelay) {

            let monsterName = CST.MONSTERLIST[randomIntFromInterval(0, CST.MONSTERLIST.length-1)];
            while ((CST.WAVE_GENERATOR.MonsterPreferences[monsterName].MinWave > this.number) ||
                ((CST.WAVE_GENERATOR.MonsterPreferences[monsterName].MaxWave < this.number) && CST.WAVE_GENERATOR.MonsterPreferences[monsterName].MaxWave != -1)) {
                monsterName = CST.MONSTERLIST[randomIntFromInterval(0, CST.MONSTERLIST.length-1)];
            }

            let spawnAmount = randomIntFromInterval(CST.WAVE_GENERATOR.MonsterPreferences[monsterName].MinBatch,
                CST.WAVE_GENERATOR.MonsterPreferences[monsterName].MaxBatch);
            if (spawnAmount > (this.monsterMaximum - this.spawnedMonsters)) {
                spawnAmount = this.monsterMaximum - this.spawnedMonsters;
            };

            for (let i = 0; i < spawnAmount; i++) {
                this.scene.characterHeap.createMonster(monsterName, this.scene,
                    randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.X0, CST.NUMBERS.MonsterSpawnArea.X1),
                    randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.Y0, CST.NUMBERS.MonsterSpawnArea.Y1)).setAnimationWalk();
            }
            
            this.spawnedMonsters += spawnAmount;
            this.lastSpawnTime = Date.now();

        }
        return true
    }
}