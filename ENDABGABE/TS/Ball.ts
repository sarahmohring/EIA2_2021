namespace Fussball {

    export class Ball { // extends Moveable ???

        public position: Vector = new Vector(canvas.width / 2, canvas.height / 2); // center of the field
        public newPosition: Vector = this.position;

        public move(): void {

            // for (let person of people) {
            //     let difference: Vector = Vector.getDifference(ball.position, person.position);
            //     if (difference.length < 20) { // if ball doesn't hit any players on the way
            //         // ball needs to go towards clicked position (slowing down at the end)
            let distance: Vector = Vector.getDifference(this.newPosition, this.position);
            distance.scale(1 / 100);
            this.position.add(distance);


            // }
            this.draw();
            // }
        }

        public shot(_position: Vector): void { // ball destination depending on distance to click and precision of shooting player
            if (stop == true) {
                let distance: Vector = Vector.getDifference(_position, this.position);
                _position.add(new Vector(randomNumber((-distance.x) / 20, distance.x / 20), randomNumber((-distance.x) / 20, distance.x / 20))); // longer shot = less precise aim
                // precision of player
                this.newPosition = _position.copy();
            }
        }

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