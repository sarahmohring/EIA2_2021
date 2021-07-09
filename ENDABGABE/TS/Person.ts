namespace Fussball {

    export abstract class Person {

        public position: Vector;
        public startPosition: Vector;
        public expendable: boolean = false;
        
        constructor(_position: Vector) {
            this.position = _position;
            this.startPosition = _position.copy();
        }

        // register if person has been clicked
        public isClicked(_hotspot: Vector): boolean { // Jirka - eiaSteroids
            let hitsize: number = 12.5;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }

        public abstract draw(): void;

        public abstract move(): void;
    }
}