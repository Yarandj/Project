import '../css/style.css'
import {Actor, Color, DisplayMode, Engine, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from "./player.js";

export class Game extends Engine {

    constructor() {
        super({ displayMode: DisplayMode.FillScreen })
        this.start(ResourceLoader).then(() => this.startGame())
    }
    startGame() {
        console.log("start de game!")

        let player = new Player
        this.add(player)

    }
}

new Game()
