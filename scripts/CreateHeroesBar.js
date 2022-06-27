import { CST } from "./const.js";
import { closeToolBar } from "../scripts/CreateToolBar.js";
import { closeBuildingsBar } from "../scripts/CreateBuildingsBar.js";
import { calculateHeroSpecs } from "./Misc.js";

export function createHeroesBar(scene) {
    scene.heroesBarField = scene.add.image(scene.game.renderer.width - 300, 530, CST.IMAGES.HeroesBarField).setDepth(CST.DEPTHS.HeroesBarField);
    scene.heroesBarClose = scene.add.image(scene.game.renderer.width - 777, 169, CST.IMAGES.HeroesBarClose).setDepth(CST.DEPTHS.HeroesBarClose);

    scene.heroesBarClose.setInteractive();

    scene.heroesBarField.visible = false;
    scene.heroesBarClose.visible = false;

    scene.heroesBarClose.on("pointerup", () => {
        closeHeroesBar(scene);
    });
    scene.heroesBarClose.on("pointerout", () => {
        scene.heroesBarClose.setTexture(CST.IMAGES.HeroesBarClose);
    });
    scene.heroesBarClose.on("pointerover", () => {
        scene.heroesBarClose.setTexture(CST.IMAGES.HeroesBarCloseChoose);
    });
}

export function closeHeroesBar(scene) {
    scene.heroesBarField.visible = false;
    scene.heroesBarClose.visible = false;

    if (scene.itemCurrentHero != undefined) {
        scene.itemCurrentHero.destroy();
    }
    if (scene.recyclerViewHeroes != undefined) {
        scene.recyclerViewHeroes.destroy();
    }
}

export function openHeroesBar(scene, index, t = null) {
    closeToolBar(scene);
    closeBuildingsBar(scene);
    closeHeroesBar(scene);

    scene.heroesBarField.visible = true;
    scene.heroesBarClose.visible = true;

    scene.itemCurrentHero = scene.rexUI.add.scrollablePanel({
        x: scene.game.renderer.width - 365,
        y: 255,
        width: 690,
        height: 230,

        scrollMode: 0,

        background: scene.rexUI.add.roundRectangle(0, 0, 1, 1, 10, 0x515151),

        panel: {
            child: scene.rexUI.add.fixWidthSizer({}).add(createHeroesItem(scene, scene.playerStats.HERO_SLOTS[index], index, 1)),
            mask: {
                mask: true,
                padding: 1,
            }
        },

        mouseWheelScroller: {
            focus: false,
            speed: 0.3
        },

        header: scene.rexUI.add.label({
            height: 24,
            orientation: 0,
            text: scene.add.text(0, 0, "Окно Героя: " + index, { fontFamily: 'Garamond', fontSize: 32, color: '#ffffff' }),
            space: { left: 0, right: 10, top: 0, bottom: 10 }
        }),

        space: {
            left: 30,
            right: 10,
            top: 10,
            bottom: 10,
            panel: 10
        }
    }).layout().setDepth(CST.DEPTHS.HeroesBarRecyclerView);

    scene.recyclerViewHeroes = scene.rexUI.add.scrollablePanel({
        x: scene.game.renderer.width - 365,
        y: 645,
        width: 690,
        height: 520,

        scrollMode: 0,

        background: scene.rexUI.add.roundRectangle(0, 0, 1, 1, 10, 0x515151),

        panel: {
            child: createGrid(scene, index),
            mask: {
                mask: true,
                padding: 1,
            }
        },

        mouseWheelScroller: {
            focus: false,
            speed: 0.3
        },

        slider: {
            track: scene.rexUI.add.roundRectangle(0, 0, 20, 10, 10, 0x3d3d3d),
            thumb: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 13, 0x939393),
        },

        space: {
            left: 30,
            right: 10,
            top: 10,
            bottom: 10,
            panel: 10
        }
    }).layout().setDepth(CST.DEPTHS.HeroesBarRecyclerView);

    let targets = [];
    let targetsRemove = [];
    for (let el of scene.playerStats.AVAILABLE_HEROES) {
        targets.push(scene.recyclerViewHeroes.getByName(el, true))
    }
    for (let el of scene.playerStats.HERO_SLOTS) {
        targetsRemove.push(scene.itemCurrentHero.getByName(el, true))
    }

    scene.recyclerViewHeroes.setChildrenInteractive({
        targets: targets
    })
        .on('child.click', function (child) {
            if (scene.playerStats.LearningStage == 4) {
                scene.playerStats.LearningStage++;
                scene.playerStats.LearningFlag = true;
                scene.learningSplash.destroy();
            }
            let currName = child.getParentSizer().name;
            if (child.getParentSizer().type == 0) {
                scene.playerStats.AVAILABLE_HEROES.splice(scene.playerStats.AVAILABLE_HEROES.indexOf(currName), 1);
                if (scene.playerStats.HERO_SLOTS[child.getParentSizer().index] != CST.EMPTY) {
                    scene.playerStats.AVAILABLE_HEROES.push(scene.playerStats.HERO_SLOTS[child.getParentSizer().index]);
                }
                scene.playerStats.HERO_SLOTS[child.getParentSizer().index] = currName;
            }
            scene.parus.createHeroWindows(scene.playerStats);
            openHeroesBar(scene, child.getParentSizer().index, scene.recyclerViewHeroes.t);
        })

    scene.itemCurrentHero.setChildrenInteractive({
        targets: targetsRemove
    })
        .on('child.click', function (child) {
            if (child.getParentSizer().type == 1) {
                scene.playerStats.AVAILABLE_HEROES.push(scene.playerStats.HERO_SLOTS[child.getParentSizer().index]);
                scene.playerStats.HERO_SLOTS[child.getParentSizer().index] = CST.EMPTY;
            }
            scene.parus.createHeroWindows(scene.playerStats);
            openHeroesBar(scene, child.getParentSizer().index, scene.recyclerViewHeroes.t);
        })
    if (t != null) {
        scene.recyclerViewHeroes.t = t;
    }
}

function createGrid(scene, index = 0) {
    var sizer = scene.rexUI.add.fixWidthSizer({
        space: {
            top: 3,
            bottom: 3,
            line: 8,
        }
    })
    for (let el of scene.playerStats.AVAILABLE_HEROES) {
        if (el == undefined) { continue }
        sizer.add(createHeroesItem(scene, el, index),
            { expand: true }
        )
    }

    return sizer;
}

function createHeroesItem(scene, key, index, type) {
    var table = scene.rexUI.add.gridSizer({
        width: 600,
        height: 160,
        column: 4,
        row: 3,
        rowProportions: 1,
        columnProportions: 2,
        space: { column: -100, row: 10, left: 0, right: 0, top: 0, bottom: 0 }
    }).setDepth(CST.DEPTHS.HeroesBarRecyclerView)
        .addBackground(
            scene.rexUI.add.roundRectangle(0, 0, 10, 10, 14, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1),
        );
    table.index = index;

    if (scene.playerStats.HERO_SLOTS[index] == CST.EMPTY && type == 1) {
        table.add(createLable(scene, "ПУСТОЕ ОКНО"), 1, 1, 'left', { left: 20 }, true);
    }
    else if (type == 1) {
        table.add(createIcon(scene, CST.ICONS[key]), 0, 1, 'center', { left: 25, right: 0 }, true);
        table.add(createLable(scene, CST.CHARACTERS[key].Name), 1, 0, 'left', { left: 20, top: 5 }, true);
        table.add(createLable(scene, `HP: ${Math.trunc(calculateHeroSpecs(CST.CHARACTERS[key].HealPoints, scene.playerStats.LEVELS_SHOP[key]) * (1 + scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100))}`, 2), 1, 1, 'left', { left: 20 }, true);
        table.add(createLable(scene, `MP: ${Math.trunc(calculateHeroSpecs(CST.CHARACTERS[key].MPCost, scene.playerStats.LEVELS_SHOP[key]))}`, 2), 2, 1, 'left', { left: 20 }, true);
        table.add(createLable(scene, `Damage: ${Math.floor(calculateHeroSpecs(CST.CHARACTERS[key].PhysicalDamage, scene.playerStats.LEVELS_SHOP[key]) * (1 + (scene.playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)) + (scene.playerStats.LEVELS_SKILLS.PhysicalDamage * (2.5 / 100))))}/${Math.floor(calculateHeroSpecs(CST.CHARACTERS[key].LightningDamage, scene.playerStats.LEVELS_SHOP[key]) * (1 + (scene.playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)) + (scene.playerStats.LEVELS_SKILLS.MagicDamage * (2.5 / 100))))}/${Math.floor(calculateHeroSpecs(CST.CHARACTERS[key].MagicDamage, scene.playerStats.LEVELS_SHOP[key]) * (1 + (scene.playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)) + (scene.playerStats.LEVELS_SKILLS.LightningDamage * (2.5 / 100))))}`, 2), 1, 2, 'left', { left: 20, bottom: 20 }, true);
        table.add(createLable(scene, "LVL " + scene.playerStats.LEVELS_SHOP[key], 1), 3, 0, 'right', { left: 100 }, true);
        table.add(createLable(scene, "CD: " + Math.trunc(CST.CHARACTERS[key].SpawnCooldown * (1 - scene.playerStats.LEVELS_SKILLS.SpawnCooldown * 2.5 / 100), 2)), 3, 1, 'left', { left: 20 }, true);
        table.add(createButtonAdd(scene, key, index, 1), 3, 2, 'right', { top: 5, left: 95 }, true);
    }
    else {
        table.add(createIcon(scene, CST.ICONS[key]), 0, 1, 'center', { left: 25, right: 0 }, true);
        table.add(createLable(scene, CST.CHARACTERS[key].Name), 1, 0, 'left', { left: 20, top: 5 }, true);
        table.add(createLable(scene, `HP: ${Math.trunc(calculateHeroSpecs(CST.CHARACTERS[key].HealPoints, scene.playerStats.LEVELS_SHOP[key]) * (1 + scene.playerStats.LEVELS_SKILLS.HealPoints * 1.25 / 100))}`, 2), 1, 1, 'left', { left: 20 }, true);
        table.add(createLable(scene, `MP: ${Math.trunc(calculateHeroSpecs(CST.CHARACTERS[key].MPCost, scene.playerStats.LEVELS_SHOP[key]))}`, 2), 2, 1, 'left', { left: 20 }, true);
        table.add(createLable(scene, `Damage: ${Math.floor(calculateHeroSpecs(CST.CHARACTERS[key].PhysicalDamage, scene.playerStats.LEVELS_SHOP[key]) * (1 + (scene.playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)) + (scene.playerStats.LEVELS_SKILLS.PhysicalDamage * (2.5 / 100))))}/${Math.floor(calculateHeroSpecs(CST.CHARACTERS[key].LightningDamage, scene.playerStats.LEVELS_SHOP[key]) * (1 + (scene.playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)) + (scene.playerStats.LEVELS_SKILLS.MagicDamage * (2.5 / 100))))}/${Math.floor(calculateHeroSpecs(CST.CHARACTERS[key].MagicDamage, scene.playerStats.LEVELS_SHOP[key]) * (1 + (scene.playerStats.LEVELS_SKILLS.Damage * (1.25 / 100)) + (scene.playerStats.LEVELS_SKILLS.LightningDamage * (2.5 / 100))))}`, 2), 1, 2, 'left', { left: 20, bottom: 20 }, true);
        table.add(createLable(scene, "LVL " + scene.playerStats.LEVELS_SHOP[key], 1), 3, 0, 'right', { left: 100 }, true);
        table.add(createLable(scene, "CD: " + Math.trunc(CST.CHARACTERS[key].SpawnCooldown * (1 - scene.playerStats.LEVELS_SKILLS.SpawnCooldown * 2.5 / 100), 2)), 3, 1, 'left', { left: 20 }, true);
        table.add(createButtonAdd(scene, key, index, 0), 3, 2, 'right', { top: 5, left: 115 }, true);
    }

    return scene.rexUI.add.sizer({
    })
        .add(
            table, 1, 'center', 0, true
        );
}

function createIcon(scene, name) {
    var label = scene.rexUI.add.label({
        icon: scene.add.image(0, 0, name),
    }).setDepth(CST.DEPTHS.ToolBarRecyclerView);

    return label;
}

function createLable(scene, name, type) {
    var label
    if (type == 1) { //LVL text
        label = scene.rexUI.add.label({
            text: scene.add.text(0, 0, name, { fontFamily: 'Garamond', fontSize: 32, color: '#51c751' }),
        });
    }
    else if (type == 2) { //description
        label = scene.rexUI.add.label({
            text: scene.add.text(0, 0, name, { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),
        });
    }
    else {
        label = scene.rexUI.add.label({
            text: scene.add.text(0, 0, name, { fontFamily: 'ClearSans', fontSize: 32, color: '#ffffff' }),
        });
    }

    return label;
}

function createButtonAdd(scene, key, index, type) {
    var table = scene.rexUI.add.gridSizer({
        column: 1,
        row: 1,
        name: key,
        space: { left: 0, right: 0, top: 0, bottom: 90 }
    })
        .addBackground(
            scene.rexUI.add.roundRectangle(0, 0, 20, 20, 5, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1))
        .setDepth(CST.DEPTHS.ToolBarRecyclerView);
    table.index = index;

    if (type == 0) {
        table.type = 0
        table.add(
            scene.rexUI.add.label({
                text: scene.add.text(0, 0, "EQUIP", { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),
                space: { left: 20, right: 0, top: 5, bottom: 0 }
            })
        );
    }
    else if (type == 1) {
        table.type = 1
        table.add(
            scene.rexUI.add.label({
                text: scene.add.text(0, 0, "REMOVE", { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),
                space: { left: 20, right: 0, top: 5, bottom: 0 }
            })
        );
    }
    return scene.rexUI.add.sizer({}).add(table, 1, 'center', 0, true);
}