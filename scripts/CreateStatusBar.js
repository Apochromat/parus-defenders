import { CST } from "./const.js";

export function createStatusBar(scene){
    scene.graphicsHP =  scene.add.graphics({fillStyle: { color: 0xff1500} }).setDepth(1);
    scene.graphicsMP = scene.add.graphics({fillStyle: { color: 0x009efa} }).setDepth(1);
    scene.graphicsLVL =  scene.add.graphics({fillStyle: { color: 0x51c751} }).setDepth(1);
    scene.graphicsWAVE = scene.add.graphics({fillStyle: { color: 0xe8e8e8} }).setDepth(1);

    scene.titleHP = scene.add.text(240, 22, 0, { fontFamily: 'ClearSans', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 3 }).setDepth(2);
    scene.titleMP = scene.add.text(240, 56, 0, { fontFamily: 'ClearSans', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 3 }).setDepth(2);
    scene.titleLVL = scene.add.text(853, 22, 0, { fontFamily: 'ClearSans', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 3 }).setDepth(2);
    scene.titleWAVE = scene.add.text(853, 56, 0, { fontFamily: 'ClearSans', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 3 }).setDepth(2);
    scene.titleCOIN = scene.add.text(1130, 22, 0, { fontFamily: 'ClearSans', fontSize: 18, color: '#ffffff', stroke: "#000000", strokeThickness: 3 }).setDepth(2);
    
    scene.statusBar = scene.add.image(scene.game.renderer.width / 2, 50, CST.IMAGES.StatusBar).setDepth(0);
}

export function setStatusHP(scene, currHP, maxHP){
    scene.graphicsHP.clear();
    var rect = new Phaser.Geom.Rectangle(227, 26, 525*currHP/maxHP, 14);
    scene.graphicsHP.fillRectShape(rect);
    scene.titleHP.setText(currHP);
}

export function setStatusMP(scene, currMP, maxMP){
    scene.graphicsMP.clear();
    var rect = new Phaser.Geom.Rectangle(227, 60, 525*currMP/maxMP, 14);
    scene.graphicsMP.fillRectShape(rect);
    scene.titleMP.setText(currMP);
}

export function setStatusLVL(scene, currXP, maxXP, LVL, skillPoints){
    scene.graphicsLVL.clear();
    var rect = new Phaser.Geom.Rectangle(840, 26, 217*currXP/maxXP, 14);
    scene.graphicsLVL.fillRectShape(rect);
    if (skillPoints > 0) 
        scene.titleLVL.setText(LVL + "                 " + "SkillPoints: " + skillPoints);
    else
        scene.titleLVL.setText(LVL);
}

export function setStatusWAVE(scene, type, coef, numWave = 0, numHPBoss = 0){
    scene.graphicsWAVE.clear();
    var rect = new Phaser.Geom.Rectangle(840, 60, 482*coef, 14);
    scene.graphicsWAVE.fillRectShape(rect);
    if (type == 1) {
        scene.titleWAVE.setText(numWave + "   BOSS: " + numHPBoss + " HP");
    }
    else{
        scene.titleWAVE.setText(numWave);
    }    
}

export function setStatusCOIN(scene, numCoins){
    scene.titleCOIN.setText(numCoins);
}