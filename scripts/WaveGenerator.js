import { CST } from "../scripts/const.js";
import { normalcdf, randomIntFromInterval, shuffle } from "../scripts/Misc.js";

export class Wave {
    creationTime;
    boss;
    lastSpawnTime;
    spawnDelay;
    number;
    monsterMaximum;
    allBatches = 0;
    spawnedBatches = 0;
    scene;
    finished = false;
    spawnList = [];
    monstersForSpawn = [];
    bossesForSpawn = [];
    bossForSpawn;
    constructor(scene, number) {
        this.number = number;
        this.scene = scene;
        this.creationTime = Date.now();
        this.lastSpawnTime = Date.now();
        this.monsterMaximum = CST.WAVE_GENERATOR.MinMonsterAmount + number * CST.WAVE_GENERATOR.MonsterWaveCoefficient;
        this.spawnDelay = CST.WAVE_GENERATOR.MinSpawnDelay + CST.WAVE_GENERATOR.PlateauSpawnWave / number +
            randomIntFromInterval(-CST.WAVE_GENERATOR.SpawnDelayVariety, CST.WAVE_GENERATOR.SpawnDelayVariety);
        for (const iterator of CST.MONSTERLIST) {
            if (CST.WAVE_GENERATOR.MonsterPreferences[iterator].MinWave <= number &&
                (CST.WAVE_GENERATOR.MonsterPreferences[iterator].MaxWave >= number || CST.WAVE_GENERATOR.MonsterPreferences[iterator].MaxWave == -1)) {
                this.monstersForSpawn.push(iterator);
            }
        }
        if (this.number % CST.WAVE_GENERATOR.WavesPerBoss == 0) {
            for (const iterator of CST.BOSSLIST) {
                if (CST.WAVE_GENERATOR.MonsterPreferences[iterator].MinWave <= number &&
                    (CST.WAVE_GENERATOR.MonsterPreferences[iterator].MaxWave >= number || CST.WAVE_GENERATOR.MonsterPreferences[iterator].MaxWave == -1)) {
                    this.bossesForSpawn.push(iterator);
                }
            }
            this.bossesForSpawn = shuffle(this.bossesForSpawn);
            this.bossForSpawn = this.bossesForSpawn[0];
        }
        let intervalAmount = this.monstersForSpawn.length;
        let interval = 6 / intervalAmount;
        let lastProbablity = 0;
        for (let i = 0; i < intervalAmount; i++) {
            let currProbablity = normalcdf((i + 1) * interval - 3) - lastProbablity;
            let spawnAmount = Math.floor(currProbablity * this.monsterMaximum);
            lastProbablity += currProbablity;
            let currentAdd = 0;
            while (currentAdd < spawnAmount) {
                let batchAmount = randomIntFromInterval(CST.WAVE_GENERATOR.MonsterPreferences[this.monstersForSpawn[i]].MinBatch,
                    CST.WAVE_GENERATOR.MonsterPreferences[this.monstersForSpawn[i]].MaxBatch);
                if (batchAmount > (spawnAmount - currentAdd)) {
                    batchAmount = spawnAmount - currentAdd;
                };
                this.spawnList.push({
                    name: this.monstersForSpawn[i],
                    amount: batchAmount
                });
                currentAdd += batchAmount;
            }
        }
        this.spawnList = shuffle(this.spawnList);
        this.allBatches = this.spawnList.length;
    }

    run() {
        if ((Date.now() - this.lastSpawnTime >= this.spawnDelay) && (this.scene.enemies.getLength() <= CST.WAVE_GENERATOR.MaximumMomentMonsters)) {
            let spawnInfo = this.spawnList.pop();

            if (spawnInfo == undefined) {
                this.finished = true;
                if (this.number % CST.WAVE_GENERATOR.WavesPerBoss == 0) {
                    this.boss = this.scene.characterHeap.createBoss(this.bossForSpawn, this.scene,
                        randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.X0, CST.NUMBERS.MonsterSpawnArea.X1),
                        randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.Y0, CST.NUMBERS.MonsterSpawnArea.Y1)).setAnimationWalk();
                }
                return false
            }
            for (let i = 0; i < spawnInfo.amount; i++) {
                this.scene.characterHeap.createMonster(spawnInfo.name, this.scene,
                    randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.X0, CST.NUMBERS.MonsterSpawnArea.X1),
                    randomIntFromInterval(CST.NUMBERS.MonsterSpawnArea.Y0, CST.NUMBERS.MonsterSpawnArea.Y1)).setAnimationWalk();
            }

            this.spawnedBatches += 1;
            this.scene.playerStats.WAVE_PROGRESS = this.spawnedBatches / this.allBatches;
            this.lastSpawnTime = Date.now();
        }
        return true
    }
}
