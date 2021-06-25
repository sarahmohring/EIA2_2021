namespace BlumenwieseInt {
    
    export abstract class Moveable {

        protected position: Vector;
        protected velocity: Vector;
        protected scale: number;

        constructor(_position: Vector, _velocity?: Vector, _scale?: number) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
            if (_scale)
                this.scale = _scale;

        }

        public abstract draw(): void;

        public abstract move(): void;

    }
}