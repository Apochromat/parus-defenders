import { CST } from "../scripts/const.js";

export function raiseToolbarLeft(scene){
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

    scene.recyclerViewShop = scene.rexUI.add.scrollablePanel({
        x: 1050,
        y: 450,
        width: 500,
        height: 528,

        scrollMode: 0,

        background: scene.rexUI.add.roundRectangle(0, 0, 1, 1, 10, 0x515151),

        panel: {
            child: scene.createGrid(scene, 1),
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
        scene.scene.playerStats.COINS -= CST.SHOPLIST[currName].LevelCost[scene.scene.playerStats.LEVELS_SHOP[currName]]
        scene.scene.setStatusCOIN(scene.scene.playerStats.COINS);
        scene.scene.playerStats.LEVELS_SHOP[currName] += 1;
        let temp = scene.scene.recyclerViewShop.t;
        scene.scene.closeToolbar();
        scene.scene.raiseToolbarLeft();
        scene.scene.recyclerViewShop.t = temp;
    })
}