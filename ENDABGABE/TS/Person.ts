namespace Fussball {

    export abstract class Person extends Moveable {

        public position: Vector;
        public startPosition: Vector;
        public expendable: boolean = false; // should be in Player but causes an error

        constructor(_position: Vector) {
            super();
            this.position = _position;
            this.startPosition = _position.copy();
        }
        
        public abstract move(): void;
        
        public abstract draw(): void;
    }
}