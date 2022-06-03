import { CST } from "./const.js";
import { closeHeroesBar } from "../scripts/CreateHeroesBar.js";
import { closeToolBar } from "../scripts/CreateToolBar.js";

export function createShopBar(scene){
    scene.shopBar = scene.add.image(scene.game.renderer.width - 597, scene.game.renderer.height-30, CST.IMAGES.ToolBarLeft).setDepth(CST.DEPTHS.ToolBarField);
    scene.toolBarLeft =  scene.add.image(scene.game.renderer.width - 597, scene.game.renderer.height-567, CST.IMAGES.ToolBarLeft).setDepth(CST.DEPTHS.ToolBarMinor);

    scene.toolBarLeft.setInteractive();
    scene.shopBar.setInteractive();

    scene.toolBarLeft.visible = false;
    scene.shopBar.visible = true;
    
    scene.toolBarLeft.on("pointerup", () => {
        openToolbarLeft(scene);
    });
    scene.shopBar.on("pointerup", () => {
        openToolbarLeft(scene);
    });
}

export function openToolbarLeft(scene, t = null){
    closeHeroesBar(scene);

    if (scene.recyclerViewSkills != undefined) {
        scene.recyclerViewSkills.visible = false;
    }

    scene.shopBar.visible = false;
    scene.skillBar.visible = false;
    scene.toolBarRight.visible = true;
    scene.toolBarLeft.visible = true;
    scene.toolBarField.visible = true;
    scene.toolBarClose.visible = true;

    scene.toolBarLeft.setDepth(CST.DEPTHS.ToolBarPrimal);
    scene.toolBarRight.setDepth(CST.DEPTHS.ToolBarMinor);

    if (scene.recyclerViewShop != undefined) {
        scene.recyclerViewShop.destroy();
    }
    
    scene.recyclerViewShop = scene.rexUI.add.scrollablePanel({
        x: 1050,
        y: 450,
        width: 500,
        height: 528,

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
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
            panel: 10
        }
    }).layout().setDepth(CST.DEPTHS.ToolBarRecyclerView);
    let targets = []
    for (let el in CST.SHOPLIST) {
        targets.push(scene.recyclerViewShop.getByName(el, true))
    }
    scene.recyclerViewShop.setChildrenInteractive({
        targets: targets
    })
    .on('child.click', function(child) {
        let currName = child.getParentSizer().name;
        scene.playerStats.COINS -= CST.SHOPLIST[currName].LevelCost[scene.playerStats.LEVELS_SHOP[currName]]
        scene.setStatusCOIN(scene.playerStats.COINS);
        scene.playerStats.LEVELS_SHOP[currName] += 1;
        closeToolBar(scene);
        openToolbarLeft(scene, scene.recyclerViewShop.t);
    })
    if (t != null){
        scene.t = t;
    }
}

function createGrid(scene) {
    var sizer = scene.rexUI.add.fixWidthSizer({
        space: {
            left: 3,
            right: 3,
            top: 3,
            bottom: 3,
            item: 8,
            line: 8,
        }
    })

    for (let el in CST.SHOPLIST) {
        sizer.add(createShopItem(scene, el), 
            { expand: true }
        )
    }
    return sizer;
}

function createShopItem(scene, key) {
    var table = scene.rexUI.add.gridSizer({
        width: 500,
        height: 120,
        column: 3,
        row: 3,
        rowProportions: 2,
        columnProportions: 1,
        space: { column: -150, row: 10, left: 0, right: 0, top: 0, bottom: 0 }
    }).setDepth(CST.DEPTHS.ToolBarRecyclerView)
    .addBackground(
        scene.rexUI.add.roundRectangle(0, 0, 10, 10, 14, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1),
    );

    table.add(createIcon(scene, CST.ICONS.HPIcon), 0, 1, 'center', {left: 25, right: 150}, true);
    table.add(createLable(scene, CST.SHOPLIST[key].Name), 1, 0, 'left', {left: 0, top: 5}, true);
    table.add(createLable(scene, CST.SHOPLIST[key].Description, 3), 1, 1, 'left', {right: 0}, true);
    table.add(createLable(scene, "LVL " + scene.playerStats.LEVELS_SHOP[key], 1), 2, 0, 'right', {left: 150}, true);
    table.add(createLable(scene,  CST.SHOPLIST[key].LevelCost[scene.playerStats.LEVELS_SHOP[key]], 2), 2, 1, 'center', {left: 150}, true);
    table.add(createButtonAdd(scene, key), 2, 2, 'right', {top: 5, left: 150}, true);

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
            text: scene.add.text(0, 0, name,{ fontFamily: 'Garamond', fontSize: 24, color: '#51c751' }),
        });
    }
    else if(type == 2){ //cost text
        label = scene.rexUI.add.label({
            text: scene.add.text(0, 0, name, { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),
        });
    }
    else if(type == 3){ //description
        label = scene.rexUI.add.label({
            text: scene.add.text(0, 0, name, { fontFamily: 'ClearSans', fontSize: 16, color: '#ffffff' }),
        });
    }
    else{
        label = scene.rexUI.add.label({
            text: scene.add.text(0, 0, name, { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),
        });
    }
    
    return label;
}

function createButtonAdd(scene, key) {
    var table = scene.rexUI.add.gridSizer({
        column: 1,
        row: 1,
        name: key,
        space: {left: 0, right: 0, top: 0, bottom: 90 }
    })
    .addBackground(
        scene.rexUI.add.roundRectangle(0, 0, 20, 20, 5, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1),)
        .setDepth(CST.DEPTHS.ToolBarRecyclerView);

    table.add(
        scene.rexUI.add.label({
            text: scene.add.text(0, 0, "UPGRADE", { fontFamily: 'ClearSans', fontSize: 18, color: '#ffffff' }),
            space: {left: 20, right: 0, top: 5, bottom: 0 }
        })
    );
    return scene.rexUI.add.sizer({}).add(table, 1, 'center', 0, true);
}