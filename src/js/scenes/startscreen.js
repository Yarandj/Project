import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Player } from '../player'
import { Enemy } from '../enemy.js'
import {MovingBackground} from "../movingBackground.js";

export class Start extends Scene {
    score = 0
    scoreText

    constructor(){
        super({ width: 800, height: 600});
    }

    onInitialize(engine) {
        const space = new MovingBackground();
        this.add(space);
        let player = new Player();
        this.add(player);

        this.scoreText = new Label({
            text: 'Score',
            font: new Font({
                family: 'Determination Mono Web Regular',
                size: 28,
                color: Color.White,
            }),
            pos: new Vector(250, 100)
        })
        this.add(this.scoreText)

        //Resources.settingMusic.stop(0.7)
        //Resources.backgroundMusic.play(0.7)

        const enemyTimer = new Timer({
            fcn: () => this.spawnEnemies(),
            repeats: true,
            interval: 1000,
        })

        this.add(enemyTimer)

        enemyTimer.start()

        const timer2 = new Timer({
            fcn: () => this.updateScore(),
            repeats: true,
            interval: 1000,
        })

        this.add(timer2)

        timer2.start()
    }

    spawnEnemies() {
        let enemies = new Enemy();
        this.add(enemies)
        enemies.pos = new Vector(800, Math.random() * 600);
    }

    updateScore() {
        this.score++
        let data = {
            score : this.score
        }
        this.scoreText.text = `Score: ${this.score}`
        localStorage.setItem("score", JSON.stringify(data))
    }

    // localStorage.setItem("score", JSON.stringify(data))
}
