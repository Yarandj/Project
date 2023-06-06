import { Scene, Input, Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Start } from './startscreen.js';

export class Settings extends Scene {
    game;

    constructor() {
        super({width: 800, height: 600});
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.SettingsBackground.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        this.add(background);
    }

    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)){
            this.game.goToScene('start')
        }
    }
}