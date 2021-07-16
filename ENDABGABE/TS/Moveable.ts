namespace Fussball {

    export abstract class Moveable {

        public position: Vector;

        public abstract move(): void;

        public abstract draw(): void;
    }
}