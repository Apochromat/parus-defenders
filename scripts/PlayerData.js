import { CST } from "../scripts/const.js";

var SAVE_KEY = "ParusSave";

var playerDataTemplate = {
    Date: Date.now(),
    COINS: 1000,
    SKILL_POINTS: 0,
    LVL: 1,
    EXPERIENCE: 10,
    WAVE: 0,
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
        HeroCat2: 0,
        HeroCat3: 0,
        HeroCat4: 0,
        HeroCat5: 0,
        HeroCat6: 0,
        HeroCat7: 0,
        HeroCat8: 0
    },
    AVAILABLE_HEROES: [
        "HeroCat",
        "HeroCat7",
        "HeroCat2",
        "HeroCat3",
        "HeroCat4",
        "HeroCat5",
        "HeroCat6",
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
    if (temp != null){
        return temp;
    }
    return playerDataTemplate;
}

export function savePlayerData (playerData) {
    playerData.Date = Date.now()
    localStorage.setItem(SAVE_KEY, JSON.stringify(playerData));
}

export function erasePlayerData(){
    localStorage.removeItem(SAVE_KEY);
}
