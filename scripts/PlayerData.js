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
    LEVELS_SHOP: {
        ParusHP: 0,
        ParusMP: 0,
        ParusDEF: 0,
        CatKnight: 0,
        CatNinja: 0,
        CatMag: 0
    },
    LEVELS_SKILLS: {
        Cooldown: 0
    },
    LEVELS_HEROES: {
        HeroCat: 0,
        HeroCenturion: 0,
        HeroNightmare: 0,
        HeroWizard: 0
    },
    AVAILABLE_HEROES: [
        "HeroCat",
        "HeroCenturion",
        "HeroNightmare",
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
    return playerDataTemplate;
}

export function savePlayerData (playerData) {
    playerData.Date = Date.now()
    playerData.BattleMode = false;
    localStorage.setItem(SAVE_KEY, JSON.stringify(playerData));
}

export function erasePlayerData(){
    localStorage.removeItem(SAVE_KEY);
}
