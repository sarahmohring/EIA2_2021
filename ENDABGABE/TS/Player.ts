namespace Fussball {

    export class Player extends Person {

        public color: string;
        public startPosition: Vector;
        public zone: number = 300;
        public shirtNumber: number;
        public target: Ball;

        constructor(_position: Vector, _color: string, _shirtNumber: number, _velocity?: Vector) {
            super(_position, _velocity);

            this.color = _color;
            this.startPosition = _position;
            this.shirtNumber = _shirtNumber;
        }

        public move(): void {

            // switch case?

            // // player can move anywhere within the outer lines
            // s. Hinweis Aufgabenstellung
            // if (this.position.x < 25 || this.position.x > 975)
            //     this.velocity.x = -this.velocity.x;
            // if (this.position.y < 25 || this.position.y > 625)
            //     this.velocity.y = -this.velocity.y;

            // this.position.x += this.velocity.x;
            // this.position.y += this.velocity.y;

            // distance to ball
            // let difference: Vector = Vector.getDifference(this.target.position, this.position);
            // new Vector(this.target.position.x - this.position.x, this.target.position.y - this.position.y);
            // let length: number = Math.abs(Math.sqrt((Math.pow(difference.x, 2) + (Math.pow(difference.y, 2))))); // sqrt((difference.x)^2)+(difference.y)^2))

            // difference.scale(50 / length); // controls PLAYER speed
            // this.position.add(difference);

            this.draw();
        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // colors
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "#FFFFFF";
            crc2.lineWidth = 5;

            // body
            crc2.beginPath();
            crc2.arc(0, 0, 12.5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            crc2.restore();
        }
    }
}