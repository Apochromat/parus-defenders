import { CST } from "../scripts/const.js";

var SAVE_KEY = "ParusSave";
var DisableSaving = true;

var playerDataTemplate = {
    Date: Date.now(),
    BattleMode: false,
    COINS: 1000,
    SKILL_POINTS: 0,
    LVL: 1,
    EXPERIENCE: 0,
    WAVE: 1,
    WAVE_PROGRESS: 0,
    OPTIONS: {
        Music: 80,
        Sounds: 80,
        Fullscreen: false
    },
    LEVELS_SHOP: {
        Parus: 0,
        HeroCat: 0,
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
        HeroWizard: 0
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
        PhisicalDamage: 0,
        MagicDamage: 0,
        LightningDamage: 0
    },
    LEVELS_HEROES: {
        HeroCat: 0,
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
        HeroWizard: 0
    },
    AVAILABLE_HEROES: [
        "HeroCat",
        "HeroMage",
        "HeroArchaeologist",
        "HeroSceleton",
        "HeroCenturion",
        "HeroTesla",
        "HeroWitch",
        "HeroReaper",
        "HeroNightmare",
        "HeroMinotaur",
        "HeroStormhead",
        "HeroWizard"
    ],
    HERO_SLOTS: [
        CST.EMPTY,
        CST.EMPTY,
        CST.EMPTY,
        CST.EMPTY,
        CST.EMPTY,
        CST.EMPTY
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
