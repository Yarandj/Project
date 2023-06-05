import { Actor, DisplayMode, ExitViewPortEvent, Input, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources";
import { Bullet } from './bullet.js'
import { Enemy } from "./enemy.js"
import { Gameover } from './scenes/gameover.js'

    // onInitialize(engine) {
    //     this.graphics.use(Resources.Player.toSprite());
    //     this.pos = new Vector(400, 400);
    //     this.vel = new Vector(0, 0);
    //     enable physics
    //     this.body.useGravity = true
    //     this.body.collisionType = CollisionType.Active
    //     this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation) // voorkom draaien om de z as
    //     this.reset()
    // }

    // constructor() {
    //     super({
    //         name: "Player",
    //         collisionType: CollisionType.Active,
    //         collider: Shape.Box(20, 40, Vector.half, vec(0, 0))
    //     }) // collision box!
    //
    // }
export class Player extends Bullet {
    game;
    constructor() {
        super({
            // width: Resources.Player.width,
            // height: Resources.Player.height
        });
        this.graphics.use(Resources.Player.toSprite());
        this.pos = new Vector(20, 200);
        this.vel = new Vector(0, 0);
        this.scale = new Vector(0.5, 0.5);
    }

    onInitialize(engine) {
        this.game = engine;
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.game.addScene('Gameover', new Gameover())
    }

    hitSomething(event) {
        if (event.other instanceof Enemy) {
            event.other.kill()
            this.game.goToScene('Gameover')
        }
    }

    onPreUpdate(engine) {
        let xmove = 0;
        let ymove = 0;
        let bullet = new Bullet();

        if
        (engine.input.keyboard.isHeld(Input.Keys.Up) ||
            engine.input.keyboard.isHeld(Input.Keys.W))
        {
            ymove = -300;
        }

        else if
        (engine.input.keyboard.isHeld(Input.Keys.Down) ||
            engine.input.keyboard.isHeld(Input.Keys.S))
        {
            ymove = 300;
        }

        if (engine.input.keyboard.isHeld(Input.Keys.Right) ||
            engine.input.keyboard.isHeld(Input.Keys.D))
        {
            xmove = 300;
        }
        else if
        (engine.input.keyboard.isHeld(Input.Keys.Left) ||
            engine.input.keyboard.isHeld(Input.Keys.A))
        {
            xmove = -300;
        }
        if(engine.input.keyboard.wasPressed(Input.Keys.Space)){
            engine.currentScene.add(bullet)
            bullet.pos = this.pos;
        }

        this.vel.x = xmove;
        this.vel.y = ymove;
    }
}