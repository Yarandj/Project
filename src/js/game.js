import '../css/style.css'
import {Actor, Color, DisplayMode, Engine, Vector} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Start } from "./scenes/startscreen.js";
import { Settings } from './scenes/settingsscreen.js'

export class Game extends Engine {
    constructor() {
        super({ width: 800, height: 600 });
        this.start(ResourceLoader).then(() => this.startGame())
    }
    startGame() {
        this.addScene('settings', new Settings())
        this.addScene('start', new Start())

        this.goToScene('settings')
    }
}

new Game()
