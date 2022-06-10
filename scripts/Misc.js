import { CST } from "./const.js";

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}

export function normalcdf(to, mean = 0, sigma = 1) {
  var z = (to - mean) / Math.sqrt(2 * sigma * sigma);
  var t = 1 / (1 + 0.3275911 * Math.abs(z));
  var a1 = 0.254829592;
  var a2 = -0.284496736;
  var a3 = 1.421413741;
  var a4 = -1.453152027;
  var a5 = 1.061405429;
  var erf = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);
  var sign = 1;
  if (z < 0) {
    sign = -1;
  }
  return (1 / 2) * (1 + sign * erf);
}


export function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function calculateDamage(playerStats, senderName, receiverName) {

  let PhysicalDamage, MagicDamage, LightningDamage;
  PhysicalDamage = CST.CHARACTERS[senderName].PhysicalDamage;
  MagicDamage = CST.CHARACTERS[senderName].MagicDamage;
  LightningDamage = CST.CHARACTERS[senderName].LightningDamage;
  if (senderName[0] = "H") {
    // Применяем критический удар
    if ((CST.CHARACTERS[senderName].CriticalChance + playerStats.LEVELS_SKILLS.CriticalChance) >= randomIntFromInterval(0, 100)) {
      PhysicalDamage *= (1 + ((CST.CHARACTERS[senderName].CriticalDamage + playerStats.LEVELS_SKILLS.CriticalDamage) / 100));
      MagicDamage *= (1 + ((CST.CHARACTERS[senderName].CriticalDamage + playerStats.LEVELS_SKILLS.CriticalDamage) / 100));
      LightningDamage *= (1 + ((CST.CHARACTERS[senderName].CriticalDamage + playerStats.LEVELS_SKILLS.CriticalDamage) / 100));
    }
    // Применяем скилл Damage
    PhysicalDamage *= (1 + (playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)));
    MagicDamage *= (1 + (playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)));
    LightningDamage *= (1 + (playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)));
    // Применяем именованные Damage скиллы
    PhysicalDamage *= (1 + (playerStats.LEVELS_SKILLS.PhysicalDamage * (2.5 / 100)));
    MagicDamage *= (1 + (playerStats.LEVELS_SKILLS.MagicDamage * (2.5 / 100)));
    LightningDamage *= (1 + (playerStats.LEVELS_SKILLS.LightningDamage * (2.5 / 100)));
  }
  // Применяем уровни защищенности получателя
  PhysicalDamage *= (1 - (CST.CHARACTERS[receiverName].PhysicalProtection / 100));
  MagicDamage *= (1 - (CST.CHARACTERS[receiverName].MagicProtection / 100));
  LightningDamage *= (1 - (CST.CHARACTERS[receiverName].LightningProtection / 100));

  return PhysicalDamage + MagicDamage + LightningDamage
}

export function calculateDamageParus(playerStats, senderName) {
  let PhysicalDamage, MagicDamage, LightningDamage;
  PhysicalDamage = CST.CHARACTERS[senderName].PhysicalDamage;
  MagicDamage = CST.CHARACTERS[senderName].MagicDamage;
  LightningDamage = CST.CHARACTERS[senderName].LightningDamage;

  // Применяем уровни защищенности Паруса
  PhysicalDamage *= (1 - (playerStats.LEVELS_SKILLS.ParusDefense * (2.5 / 100)));
  MagicDamage *= (1 - (playerStats.LEVELS_SKILLS.ParusDefense * (2.5 / 100)));
  LightningDamage *= (1 - (playerStats.LEVELS_SKILLS.ParusDefense * (2.5 / 100)));

  return PhysicalDamage + MagicDamage + LightningDamage
}