import { CST } from "./const.js";
import { closeToolBar } from "../scripts/CreateToolBar.js";

export function createHeroesBar(scene){
    scene.heroesBarField =  scene.add.image(scene.game.renderer.width - 171, 391, CST.IMAGES.HeroesBarField).setDepth(CST.DEPTHS.HeroesBarField);
    scene.heroesBarClose =  scene.add.image(scene.game.renderer.width - 491, 153, CST.IMAGES.HeroesBarClose).setDepth(CST.DEPTHS.HeroesBarClose);

    scene.heroesBarClose.setInteractive();

    scene.heroesBarField.visible = false;
    scene.heroesBarClose.visible = false;
    
    scene.heroesBarClose.on("pointerup", () => {
        closeHeroesBar(scene);
    });
}

export function closeHeroesBar(scene){
    scene.heroesBarField.visible = false;
    scene.heroesBarClose.visible = false;
    
    if (scene.recyclerViewHeroes != undefined) {
        scene.recyclerViewHeroes.destroy();
    }
}

export function openHeroesBar(scene, index){
    closeToolBar(scene);
    closeHeroesBar(scene);

    scene.heroesBarField.visible = true;
    scene.heroesBarClose.visible = true;

    scene.recyclerViewHeroes = scene.rexUI.add.scrollablePanel({
        x: 1274,
        y: 360,
        width: 434,
        height: 450,

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

        header: scene.rexUI.add.label({
            height: 24,
            orientation: 0,
            text: scene.add.text(0, 0, "Окно Героя: " + index, { fontFamily: 'Garamond', fontSize: 24, color: '#ffffff' }),
            space: {left: 0, right: 10, top: 0, bottom: 10 }
        }),

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
    }).layout().setDepth(CST.DEPTHS.HeroesBarRecyclerView); 

    let targets = [];
    for (let el of scene.playerStats.AVAILABLE_HEROES) {
        targets.push(scene.recyclerViewHeroes.getByName(el, true))
    }

    scene.recyclerViewHeroes.setChildrenInteractive({
        targets: targets
    })
    .on('child.click', function(child) {
        let currName = child.getParentSizer().name;
        scene.playerStats.AVAILABLE_HEROES.splice(scene.playerStats.AVAILABLE_HEROES.indexOf(currName), 1);
        if (scene.playerStats.INSIDE_HERO_SLOTS[child.getParentSizer().index] != "Empty") {
            scene.playerStats.AVAILABLE_HEROES.push(scene.playerStats.INSIDE_HERO_SLOTS[child.getParentSizer().index]);
        }
        scene.playerStats.INSIDE_HERO_SLOTS[child.getParentSizer().index] = currName;
        scene.parus.createHeroWindows(scene.playerStats);
        openHeroesBar(scene, child.getParentSizer().index);
    })       
}

function createGrid(scene, index=0) {
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
    for (let el of scene.playerStats.AVAILABLE_HEROES) {
        if (el == undefined) {continue}
        sizer.add(createHeroesItem(scene, el, index), 
            { expand: true }
        )
    }

    return sizer;
}

function createHeroesItem(scene, key, index) {
    var table = scene.rexUI.add.gridSizer({
        name: key,
        width: 375,
        height: 120,
        column: 3,
        row: 3,
        rowProportions: 1,
        columnProportions: 2,
        space: { column: -100, row: 10, left: 0, right: 0, top: 0, bottom: 0 }
    }).setDepth(CST.DEPTHS.HeroesBarRecyclerView)
    .addBackground(
        scene.rexUI.add.roundRectangle(0, 0, 10, 10, 14, 0x3d3d3d).setStrokeStyle(3, 0x939393, 1),
    );
    table.index = index;
    table.add(createIcon(scene, CST.ICONS[key]), 0, 1, 'center', {left: 15, right: 0}, true);
    table.add(createLable(scene, CST.CHARACTERS[key].Name), 1, 0, 'left', {left: 0, top: 5}, true);
    table.add(createLable(scene, "HP: " + CST.CHARACTERS[key].HealPoints, 2), 1, 1, 'left', {right: 0}, true);
    table.add(createLable(scene, "Damage: " + CST.CHARACTERS[key].Damage, 2), 1, 2, 'left', {right: 0, bottom: 20}, true);
    table.add(createLable(scene, "LVL " + scene.playerStats.LEVELS_HEROES[key], 1), 2, 0, 'right', {left: 100}, true);
    table.add(createLable(scene, "CoolDown: " + CST.CHARACTERS[key].Cooldown, 2), 2, 1, 'left', {right: 0}, true);
    table.add(createLable(scene, "Speed: " + CST.CHARACTERS[key].Speed, 2), 2, 2, 'left', {left: 50, bottom: 20}, true);

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
    else if(type == 2){ //description
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