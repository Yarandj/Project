import { Actor, Vector, GraphicsGroup } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'

export class MovingBackground extends Actor {
    offset;

    onInitialize(engine) {
        const movingBackground = Resources.MovingBackground.toSprite();
        this.offset = movingBackground.width;

        movingBackground.height = 600;

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: movingBackground,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: movingBackground,
                    pos: new Vector(movingBackground.width, 0),
                }
            ]
        });

        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(group);
        this.pos = new Vector(0, 0);
        this.vel = new Vector(-100, 0);
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0);
        }
    }
}