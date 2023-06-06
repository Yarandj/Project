import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Player } from "./player.js";

export class Coin extends Actor{
    constructor() {
        super({
            width: Resources.Coin.width,
            height: Resources.Coin.height
        });
        this.graphics.use(Resources.Coin.toSprite());
        this.pos = new Vector(200, 200);
        this.vel = new Vector(-40,1);
        this.scale = new Vector(1.0, 1.0);
    }
    onInitialize() {
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.pointer.useGraphicsBounds = true;
        this.on("pointerup", function (e) {
            this.kill();
            console.log("test")
        });
    }
    hitSomething(event) {

        if (event.other instanceof Coin) {
            event.other.kill()
        }
    }
}