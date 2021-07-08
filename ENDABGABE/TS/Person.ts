namespace Fussball {

    export abstract class Person {

        public hitRadius: number;
        public expendable: boolean = false;
        protected position: Vector;
        protected velocity: Vector;

        constructor(_position: Vector, _velocity?: Vector) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
        }

        // register if player has been clicked
        public isClicked(_hotspot: Vector): boolean { // Jirka - eiaSteroids
            let hitsize: number = 12.5;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }

        public abstract draw(): void;

        public abstract move(): void;
    }
}