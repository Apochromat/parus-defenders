import { CST } from "./const.js";
import { closeToolBar } from "../scripts/CreateToolBar.js";
import { closeHeroesBar } from "../scripts/CreateHeroesBar.js";
import { calculateHeroSpecs } from "./Misc.js";

export function createBuildingsBar(scene) {
    scene.buildingsBarField = scene.add.image(scene.game.renderer.width - 300, 530, CST.IMAGES.HeroesBarField).setDepth(CST.DEPTHS.HeroesBarField);
    scene.buildingsBarClose = scene.add.image(scene.game.renderer.width - 777, 169, CST.IMAGES.HeroesBarClose).setDepth(CST.DEPTHS.HeroesBarClose);

    scene.buildingsBarClose.setInteractive();

    scene.buildingsBarField.visible = false;
    scene.buildingsBarClose.visible = false;

    scene.buildingsBarClose.on("pointerup", () => {
        closeBuildingsBar(scene);
    });
    scene.buildingsBarClose.on("pointerout", () => {
        scene.buildingsBarClose.setTexture(CST.IMAGES.HeroesBarClose);
    });
    scene.buildingsBarClose.on("pointerover", () => {
        scene.buildingsBarClose.setTexture(CST.IMAGES.HeroesBarCloseChoose);
    });
}

export function closeBuildingsBar(scene) {
    scene.buildingsBarField.visible = false;
    scene.buildingsBarClose.visible = false;

    if (scene.itemCurrentBuilding != undefined) {
        scene.itemCurrentBuilding.destroy();
    }
    if (scene.recyclerViewBuildings != undefined) {
        scene.recyclerViewBuildings.destroy();
    }
}

export function openBuildingsBar(scene, t = null) {
    closeToolBar(scene);
    closeHeroesBar(scene);
    closeBuildingsBar(scene);

    scene.buildingsBarField.visible = true;
    scene.buildingsBarClose.visible = true;

    scene.itemCurrentBuilding = scene.rexUI.add.scrollablePanel({
        x: scene.game.renderer.width - 365,
        y: 255,
        width: 690,
        height: 230,

        scrollMode: 0,

        background: scene.rexUI.add.roundRectangle(0, 0, 1, 1, 10, 0x515151),

        panel: {
            child: scene.rexUI.add.fixWidthSizer({}).add(createBuildingsItem(scene, scene.playerStats.BUILDING_SLOTS[0], 0, 1)),
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
            text: scene.add.text(0, 0, "Окно Здания", { fontFamily: 'Garamond', fontSize: 32, color: '#ffffff' }),
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

    scene.recyclerViewBuildings = scene.rexUI.add.scrollablePanel({
        x: scene.game.renderer.width - 365,
        y: 645,
        width: 690,
        height: 520,

        scrollMode: 0,

        background: scene.rexUI.add.roundRectangle(0, 0, 1, 1, 10, 0x515151),

        panel: {
            child: createGrid(scene),
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
    for (let el of scene.playerStats.AVAILABLE_BUILDINGS) {
        targets.push(scene.recyclerViewBuildings.getByName(el, true))
    }
    for (let el of scene.playerStats.BUILDING_SLOTS) {
        targetsRemove.push(scene.itemCurrentBuilding.getByName(el, true))
    }

    scene.recyclerViewBuildings.setChildrenInteractive({
        targets: targets
    })
        .on('child.click', function (child) {
            let currName = child.getParentSizer().name;
            if (child.getParentSizer().type == 0) {
                scene.playerStats.AVAILABLE_BUILDINGS.splice(scene.playerStats.AVAILABLE_BUILDINGS.indexOf(currName), 1);
                if (scene.playerStats.BUILDING_SLOTS[child.getParentSizer().index] != CST.EMPTY) {
                    scene.playerStats.AVAILABLE_BUILDINGS.push(scene.playerStats.BUILDING_SLOTS[child.getParentSizer().index]);
                }
                scene.playerStats.BUILDING_SLOTS[child.getParentSizer().index] = currName;
            }
            scene.parus.createBuildingWindow(scene.playerStats);
            openBuildingsBar(scene, child.getParentSizer().index, scene.recyclerViewBuildings.t);
        })

    scene.itemCurrentBuilding.setChildrenInteractive({
        targets: targetsRemove
    })
        .on('child.click', function (child) {
            if (child.getParentSizer().type == 1) {
                scene.playerStats.AVAILABLE_BUILDINGS.push(scene.playerStats.BUILDING_SLOTS[child.getParentSizer().index]);
                scene.playerStats.BUILDING_SLOTS[child.getParentSizer().index] = CST.EMPTY;
            }
            scene.parus.createBuildingWindow(scene.playerStats);
            openBuildingsBar(scene, child.getParentSizer().index, scene.recyclerViewBuildings.t);
        })
    if (t != null) {
        scene.recyclerViewBuildings.t = t;
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
    for (let el of scene.playerStats.AVAILABLE_BUILDINGS) {
        if (el == undefined) { continue }
        sizer.add(createBuildingsItem(scene, el, index),
            { expand: true }
        )
    }

    return sizer;
}

function createBuildingsItem(scene, key, index, type) {
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

    if (scene.playerStats.BUILDING_SLOTS[index] == CST.EMPTY && type == 1) {
        table.add(createLable(scene, "ПУСТОЕ ОКНО"), 1, 1, 'left', { left: 20 }, true);
    }
    else if (type == 1) {
        table.add(createIcon(scene, CST.ICONS[key]), 0, 1, 'center', { left: 25, right: 0 }, true);
        table.add(createLable(scene, CST.CHARACTERS[key].Name), 1, 0, 'left', { left: 20, top: 5 }, true);
        table.add(createLable(scene, CST.CHARACTERS[key].Description, 2), 1, 1, 'left', { left: 20 }, true);
        table.add(createLable(scene, `MP: ${CST.CHARACTERS[key].MPCost}`, 2), 1, 2, 'left', { left: 20 }, true);
        table.add(createLable(scene, "LVL "+ scene.playerStats.LEVELS_SHOP[key] , 1), 3, 0, 'right', { left: 100 }, true);
        table.add(createLable(scene, `CD: ${CST.CHARACTERS[key].CoolDown}`, 2), 2, 2, 'left', { left: 20 }, true);
        table.add(createButtonAdd(scene, key, index, 1), 3, 2, 'right', { top: 5, left: 95 }, true);
    }
    else {
        table.add(createIcon(scene, CST.ICONS[key]), 0, 1, 'center', { left: 25, right: 0 }, true);
        table.add(createLable(scene, CST.CHARACTERS[key].Name), 1, 0, 'left', { left: 20, top: 5 }, true);
        table.add(createLable(scene, CST.CHARACTERS[key].Description, 2), 1, 1, 'left', { left: 20 }, true);
        table.add(createLable(scene, `MP: ${CST.CHARACTERS[key].MPCost}`, 2), 1, 2, 'left', { left: 20 }, true);
        table.add(createLable(scene, "LVL "+ scene.playerStats.LEVELS_SHOP[key] , 1), 3, 0, 'right', { left: 100 }, true);
        table.add(createLable(scene, `CD: ${CST.CHARACTERS[key].CoolDown}`, 2), 2, 2, 'left', { left: 20 }, true);
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