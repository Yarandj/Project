import {Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit, Input} from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";


export class Gameover extends Scene {
    game;

    constructor() {
        super({ width: 800, height: 600 });
    }

    onInitialize(engine) {
        this.game = engine;

        const background = new Actor();
        background.graphics.use(Resources.GameOverBackground.toSprite());
        background.pos = new Vector(0, 0);
        background.anchor = new Vector(0, 0);
        this.add(background);

        const finalScore = JSON.parse(localStorage.getItem("score"))
        if(finalScore) {console.log(finalScore.score)}

        this.textScore = new Label({
            font: new Font({
                family: 'Arial',
                size: 32,
                color: Color.White,
            }),
            text: `Your score: ${finalScore.score}`,
            pos: new Vector(300, 50),
        })
        this.add(this.textScore)

        const collectedCoins = JSON.parse(localStorage.getItem("coins"))
        if(collectedCoins) {console.log(collectedCoins.coins)}

        this.textCoins = new Label({
            font: new Font({
                family: 'Arial',
                size: 32,
                color: Color.Yellow,
            }),
            text: `Collected coins: ${collectedCoins.coins}`,
            pos: new Vector(275, 100),
        })
        this.add(this.textCoins)
    }
    onPreUpdate(engine){
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)){
            this.game.goToScene('settings')
        }
    }
}