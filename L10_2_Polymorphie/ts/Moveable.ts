namespace Blumenwiese_poly {
    export class Moveable {

        position: Vector;
        velocity: Vector;
        scale: number;

        constructor(_position: Vector, _velocity?: Vector, _scale?: number) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
            if (_scale)
                this.scale = _scale;

        }

        draw(): void {
            // empty method
        }

        update(): void {
            if (this.position.x < 0)
                this.position.x += canvas.width;
            if (this.position.y < 0)
                this.position.y += canvas.height;
            if (this.position.x > canvas.width)
                this.position.x -= canvas.width;
            if (this.position.y > canvas.height)
                this.position.y -= canvas.height;

            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            this.draw();
        }

    }
}