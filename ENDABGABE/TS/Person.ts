namespace Fussball {

    export abstract class Person extends Moveable {

        public startPosition: Vector;
        public expendable: boolean = false; // should be in Player class but causes an error

        constructor(_position: Vector) {
            super();
            this.position = _position;
            this.startPosition = _position.copy();
        }
        
        public abstract move(): void;
        
        public abstract draw(): void;
    }
}