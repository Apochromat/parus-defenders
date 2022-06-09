import { CST } from "./const.js";

export function createToolBar(scene){
    scene.toolBarClose =  scene.add.image(scene.game.renderer.width - 777, 169, CST.IMAGES.ToolBarClose).setDepth(CST.DEPTHS.ToolBarClose);
    scene.toolBarField =  scene.add.image(scene.game.renderer.width - 300, 530, CST.IMAGES.ToolBarField).setDepth(CST.DEPTHS.ToolBarField);

    scene.toolBarClose.setInteractive();

    scene.toolBarField.visible = false;
    scene.toolBarClose.visible = false;

    scene.toolBarClose.on("pointerup", () => {
        closeToolBar(scene);
    });
}

export function closeToolBar(scene){
    scene.toolBarRight.visible = false;
    scene.toolBarLeft.visible = false;
    scene.toolBarField.visible = false;
    scene.toolBarClose.visible = false;

    scene.shopBar.visible = true;
    scene.skillBar.visible = true;
    
    if (scene.recyclerViewShop != undefined) {
        scene.recyclerViewShop.visible = false;
    }
    if (scene.recyclerViewSkills != undefined) {
        scene.recyclerViewSkills.visible = false;
    }
}