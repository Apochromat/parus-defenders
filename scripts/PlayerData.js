import { CST } from "../scripts/const.js";

var SAVE_KEY = "ParusSave";
var DisableSaving = false;

var playerDataTemplate = {
    Date: Date.now(),
    BattleMode: false,
    COINS: 10000,
    SKILL_POINTS: 1,
    LVL: 1,
    EXPERIENCE: 0,
    WAVE: 1,
    WAVE_PROGRESS: 0,
    OPTIONS: {
        Music: 5,
        Sounds: 3,
        Fullscreen: false
    },
    LEVELS_SHOP: {
        Parus: 0,
        HeroCat: 1,
        HeroMage: 0,
        HeroArchaeologist: 0,
        HeroSceleton: 0,
        HeroCenturion: 0,
        HeroTesla: 0,
        HeroWitch: 0,
        HeroReaper: 0,
        HeroNightmare: 0,
        HeroMinotaur: 0,
        HeroStormhead: 0,
        HeroWizard: 0,
        BuildingPodkova: 1,
        BuildingMPObelisk: 0,
        BuildingHPObelisk: 0,
        BuildingCDObelisk: 0,
        BuildingPlasmaGun: 0
    },
    LEVELS_SKILLS: {
        BonusGold: 0,
        BonusExperience: 0,
        SpawnCooldown: 0,
        Damage: 0,
        HealPoints: 0,
        CriticalChance: 0,
        CriticalDamage: 0,
        ParusDefense: 0,
        Speed: 0,
        MPRecovery: 0,
        PhysicalDamage: 0,
        MagicDamage: 0,
        LightningDamage: 0
    },
    AVAILABLE_HEROES: [
        "HeroCat"
    ],
    AVAILABLE_BUILDINGS: [
        "BuildingPodkova"
    ],
    BUILDING_SLOTS: [
        CST.EMPTY
    ],
    HERO_SLOTS: [
        CST.EMPTY,
        CST.EMPTY,
        CST.EMPTY,
        CST.EMPTY,
        CST.EMPTY,
        CST.EMPTY
    ],
    BUILDING_SLOTS_SPAWNTIME: [
        Date.now()
    ],
    HERO_SLOTS_SPAWNTIME: [
        Date.now(),
        Date.now(),
        Date.now(),
        Date.now(),
        Date.now(),
        Date.now()
    ],
};

export function loadPlayerData(){
    let temp = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (temp != null && !DisableSaving){
        return temp;
    }
    return JSON.parse(JSON.stringify(playerDataTemplate));
}

export function savePlayerData (playerData) {
    playerData.Date = Date.now()
    playerData.BattleMode = false;
    localStorage.setItem(SAVE_KEY, JSON.stringify(playerData));
}

export function erasePlayerData(){
    localStorage.removeItem(SAVE_KEY);
}
