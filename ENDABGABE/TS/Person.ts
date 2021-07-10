namespace Fussball {

    export abstract class Person {

        public position: Vector;
        public startPosition: Vector;
        public expendable: boolean = false; // warum nicht bei Player möglich
        
        constructor(_position: Vector) {
            this.position = _position;
            this.startPosition = _position.copy();
        }

        public abstract draw(): void;

        public abstract move(): void;
    }
}