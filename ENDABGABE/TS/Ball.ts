namespace Fussball {

    export class Ball { // extends Moveable geht nicht wg Parameter in move

        public position: Vector = new Vector(canvas.width / 2, canvas.height / 2);
        public hitRadius: number = 7;

        // constructor mit draw Aufruf?
        // position als Startposition festhalten?? - _position.copy();

        public move(_event: MouseEvent /*, _precision: number*/): void {

            // ball needs to go towards clicked position (but depending on distance of destination and precision of shooting player (as PARAMETERS?))


            // if (this.position.x < 10 || this.position.x > 980)
            //     this.draw();
            // if (this.position.y < 10 || this.position.y > 640)
            //     this.draw();

            // ???
            // let difference: Vector = new Vector(_event.offsetX - this.position.x, _event.offsetY - this.position.y);
            // difference.scale(1 / 30); // controls ball speed
            // this.position.add(difference);

            // this.draw();
            
            
        }

        // HALIS
        public shot(_position: Vector): void {
            if (stop == true) {
                //let x: number = _pos.screenX;
                //let y: number = _pos.screenY;
                //console.log(x, y);
                //this.position.x = x;
                //this.position.y = y;
                this.position = _position.copy();
            }
        }
        // ENDE HALIS

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // colors
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;

            // ball
            crc2.beginPath();
            crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            // black bits on the ball
            crc2.beginPath();
            crc2.rect(-7, -5, 4, 4);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(-7, 2, 4, 4);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(-3, -3, 6, 6);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(3, -5, 4, 4);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(3, 2, 4, 4);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }
}