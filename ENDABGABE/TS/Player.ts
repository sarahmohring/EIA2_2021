namespace Fussball {

    export class Player extends Person {

        public color: string;
        public shirtNumber: number;
        public speed: number;
        public precision: number;
        // public expendable: boolean = false;

        constructor(_position: Vector, _color: string, _shirtNumber: number, _speedMin: number, _speedMax: number, _precisionMin: number, _precisionMax: number) {
            super(_position);

            this.color = _color;
            // this.startPosition = _position.copy();
            this.shirtNumber = _shirtNumber;
            this.precision = randomNumber(_precisionMin, _precisionMax);
            this.speed = randomNumber(_speedMin, _speedMax);
        }

        public move(): void {

            // distance to ball
            let distance: Vector = Vector.getDifference(ball.position, this.position);

            if (distance.length <= 250) { // only start moving if ball is within 300px (=30m) radius - 250 for better game play (pitch still entirely covered)?

                // players move towards ball
                if (distance.length > 20) { // roughly radius of player + ball

                    this.position.x += distance.x * 0.01 * this.speed;
                    this.position.y += distance.y * 0.01 * this.speed;
                }

                // first player reaches ball
                else {
                    stop = true;
                    ball.shooterPrecision = this.precision;

                    // show which team can shoot
                    let currentTeam: HTMLElement = <HTMLElement>document.getElementById("currentPlayer");
                    currentTeam.style.backgroundColor = this.color;
                    currentTeam.innerHTML = this.shirtNumber.toString();
                }
            }

            else {
                // player back to starting position
                let backToStart: Vector = Vector.getDifference(this.startPosition.copy(), this.position);
                this.position.x += backToStart.x * 0.01 * this.speed;
                this.position.y += backToStart.y * 0.01 * this.speed;
            }

            this.draw();
        }

        // register if player has been clicked
        public isClicked(_hotspot: Vector): boolean { // Jirka - eiaSteroids
            let hitsize: number = 10;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
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
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            crc2.restore();
        }
    }
}