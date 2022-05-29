import { CharacterSprite } from "/CharacterSprite.js";
var heap = {};

export class MonsterTwig extends CharacterSprite {
    constructor(scene, x, y, hp, scale=3) {
        super(scene, x, y, "monster_twig", hp, "monster_twig_death", scale);
    }
}