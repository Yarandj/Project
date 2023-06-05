import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Player } from "./player.js";

export class Enemy extends Actor{
    constructor() {
        super({
            width: Resources.Enemy.width,
            height: Resources.Enemy.height
        });
        this.graphics.use(Resources.Enemy.toSprite());
        this.pos = new Vector(400, 200);
        this.vel = new Vector(-35,1);
        this.scale = new Vector(0.5, 0.5);
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

        if (event.other instanceof Player) {
            event.other.kill()
        }
    }
}