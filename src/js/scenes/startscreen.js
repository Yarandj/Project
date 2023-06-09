import { Actor, Engine, Vector, Label, Color, Font, Sound, Timer, Scene, FontUnit } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { Player } from '../player'
import { Enemy } from '../enemy.js'
import { Coin } from '../coin.js'
import {MovingBackground} from "../movingBackground.js";

export class Start extends Scene {
    score = 0
    scoreText
    coins = 0
    coinsText
    coinCounter

    constructor(){
        super({ width: 800, height: 600});
    }

    onInitialize(engine) {
        const space = new MovingBackground();
        this.add(space);
        // let player = new Player();
        // this.add(player);

        //Score
        this.scoreText = new Label({
            text: 'Score',
            font: new Font({
                family: 'Determination Mono Web Regular',
                size: 28,
                color: Color.White,
            }),
            pos: new Vector(55, 50)
        })
        this.add(this.scoreText)

        //Coins
        this.coinsText = new Label({
            text: 'Coins',
            font: new Font({
                family: 'Determination Mono Web Regular',
                size: 28,
                color: Color.Yellow,
            }),
            pos: new Vector(55, 75)
        })
        this.add(this.coinsText)
        //Resources.settingMusic.stop(0.7)
        //Resources.backgroundMusic.play(0.7)

        const enemyTimer = new Timer({
            fcn: () => this.spawnEnemies(),
            repeats: true,
            interval: 1000,
        })

        this.add(enemyTimer)

        enemyTimer.start()

        const coinTimer = new Timer({
            fcn: () => this.spawnCoins(),
            repeats: true,
            interval: 5000,
        })

        this.add(coinTimer)

        coinTimer.start()

        this.coinCounter = new Timer({
            fcn: () => this.updateCoins(),
        })

        this.add(this.coinCounter)

        this.coinCounter.start()

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

    spawnCoins() {
        let coins = new Coin();
        this.add(coins)
        coins.pos = new Vector(800, Math.random() * 600);
    }

    onActivate(_context) {
        this.score = 0;

        let player = new Player

        this.add(player)
    }

    updateScore() {
        this.score++
        let data = {
            score : this.score
        }
        this.scoreText.text = `Score: ${this.score}`
        localStorage.setItem("score", JSON.stringify(data))
    }

    updateCoins() {
        this.coins++
        let data2 = {
            coins : this.coins
        }
        this.coinsText.text = `Coins: ${this.coins}`
        localStorage.setItem("coins", JSON.stringify(data2))
    }
}
