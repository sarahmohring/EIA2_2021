namespace Fussball {

    export abstract class Moveable {

        protected position: Vector;
        protected velocity: Vector;

        constructor(_position: Vector, _velocity?: Vector) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
        }

        public abstract draw(): void;

        public abstract move(): void;

    }
}