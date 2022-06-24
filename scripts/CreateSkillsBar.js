import { CST } from "./const.js";
import { closeHeroesBar } from "../scripts/CreateHeroesBar.js";
import { closeBuildingsBar } from "../scripts/CreateBuildingsBar.js";
import { closeToolBar } from "../scripts/CreateToolBar.js";

export function createSkillsBar(scene){
    scene.skillBar = scene.add.image(scene.game.renderer.width - 60, 450, CST.IMAGES.ToolBarRight).setDepth(CST.DEPTHS.ToolBarField);
    scene.toolBarRight =  scene.add.image(scene.game.renderer.width - 790, 450, CST.IMAGES.ToolBarRight).setDepth(CST.DEPTHS.ToolBarPrimal);
    
    scene.toolBarRight.setInteractive();
    scene.skillBar.setInteractive();

    scene.toolBarRight.visible = false;
    scene.skillBar.visible = true;

    scene.toolBarRight.on("pointerup", () => {
        openToolbarRight(scene);
    });
    scene.toolBarRight.on("pointerout", () => {
        scene.toolBarRight.setTexture(CST.IMAGES.ToolBarRight);
    });
    scene.toolBarRight.on("pointerover", () => {
        scene.toolBarRight.setTexture(CST.IMAGES.ToolBarRightChoose);
    });

    scene.skillBar.on("pointerup", () => {
        openToolbarRight(scene);
    });
    scene.skillBar.on("pointerout", () => {
        scene.skillBar.setTexture(CST.IMAGES.ToolBarRight);
    });
    scene.skillBar.on("pointerover", () => {
        scene.skillBar.setTexture(CST.IMAGES.ToolBarRightChoose);
    });
}

export function openToolbarRight(scene, t = null){
    closeBuildingsBar(scene);
    closeHeroesBar(scene);

    if (scene.recyclerViewShop != undefined) {
        scene.recyclerViewShop.visible = false;
    }

    scene.shopBar.visible = false;
    scene.skillBar.visible = false;
    scene.toolBarRight.visible = true;
    scene.toolBarLeft.visible = true;
    scene.toolBarField.visible = true;
    scene.toolBarClose.visible = true;

    scene.toolBarRight.setDepth(CST.DEPTHS.ToolBarPrimal);
    scene.toolBarLeft.setDepth(CST.DEPTHS.ToolBarMinor);

    if (scene.recyclerViewSkills != undefined) {
        scene.recyclerViewSkills.destroy();
    }
    
    scene.recyclerViewSkills = scene.rexUI.add.scrollablePanel({
        x: scene.game.renderer.width - 365,
        y: 530,
        width: 690,
        height: 780,

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
    }).layout().setDepth(CST.DEPTHS.ToolBarRecyclerView);
    let targets = []
    for (let el in CST.SKILLSLIST) {
        targets.push(scene.recyclerViewSkills.getByName(el, true))
    }
    scene.recyclerViewSkills.setChildrenInteractive({
        targets: targets
    })
    .on('child.click', function(child) {
        let currName = child.getParentSizer().name;
        if (scene.playerStats.SKILL_POINTS != 0) {
            scene.playerStats.SKILL_POINTS -= 1;
            scene.playerStats.LEVELS_SKILLS[currName] += 1;
            closeToolBar(scene);
            openToolbarRight(scene, scene.recyclerViewSkills.t);
        } 
    })
    if (t != null){
        scene.recyclerViewSkills.t = t;
    }
}

function createGrid(scene) {
    var sizer = scene.rexUI.add.fixWidthSizer({
        space: {
            top: 3,
            bottom: 3,
            line: 8,
        }
    })
    for (let el in CST.SKILLSLIST) {
        sizer.add(createSkillsItem(scene, el), 
            { expand: true }
        )
    }
    
    return sizer;
}


function createSkillsItem(scene, key) {
    var table = scene.rexUI.add.gridSizer({
        width: 600,
        height: 160,
        column: 3,
        row: 3,
        rowProportions: 1,
        columnProportions: 2,
        space: { column: -150, row: 10, left: 0, right: 0, top: 0, bottom: 0 }
    }).setDepth(CST.DEPTHS.ToolBarRecyclerView)
    .addBackground(
        scene.rexUI.add.roundRectangle(0, 0, 10, 10, 14, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1),
    );

    table.add(createIcon(scene, CST.ICONS[key]), 0, 1, 'center', {left: 25, right: 150}, true);
    table.add(createLable(scene, CST.SKILLSLIST[key].Name), 1, 0, 'left', {left: 0, top: 5}, true);
    table.add(createLable(scene, CST.SKILLSLIST[key].Description, 2), 1, 1, 'left', {right: 0}, true);
    table.add(createLable(scene, "LVL " + scene.playerStats.LEVELS_SKILLS[key], 1), 2, 0, 'right', {left: 150}, true);
    table.add(createLable(scene, CST.SKILLSLIST[key].Levels[scene.playerStats.LEVELS_SKILLS[key]], 1), 2, 1, 'right', {left: 150}, true);
    table.add(createButtonAdd(scene, key), 2, 2, 'right', {top: 5, left: 160}, true);

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
            text: scene.add.text(0, 0, name,{ fontFamily: 'Garamond', fontSize: 32, color: '#51c751' }),
        });
    }
    else if(type == 2){ //description
        label = scene.rexUI.add.label({
            text: scene.add.text(0, 0, name, { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),
        });
    }
    else{
        label = scene.rexUI.add.label({
            text: scene.add.text(0, 0, name, { fontFamily: 'ClearSans', fontSize: 32, color: '#ffffff' }),
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
            text: scene.add.text(0, 0, "UPGRADE", { fontFamily: 'ClearSans', fontSize: 24, color: '#ffffff' }),
            space: {left: 20, right: 0, top: 5, bottom: 0 }
        })
    );
    return scene.rexUI.add.sizer({}).add(table, 1, 'center', 0, true);
}