import { Actor, Vector, Input } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Enemy } from "./enemy.js"

export class Bullet extends Actor{
    constructor() {
        super({
            width: Resources.Bullet.width,
            height: Resources.Bullet.height
        });
        this.graphics.use(Resources.Bullet.toSprite());
        this.pos = new Vector(220, 200);
        this.vel = new Vector(400,3);
        this.scale = new Vector(0.5, 0.5);
    }
    onInitialize(){
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.pointer.useGraphicsBounds = true;
        this.on("pointerup", function (e) {
            this.kill();
        });
    }
    hitSomething(event) {
        if (event.other instanceof Enemy){
            event.other.kill()
        }
    }
}