namespace Fussball {

    export class Player extends Person {

        public color: string;
        public shirtNumber: number;
        public speed: number;
        public precision: number;

        constructor(_position: Vector, _color: string, _shirtNumber: number, _speedMin: number, _speedMax: number, _precisionMin: number, _precisionMax: number) {
            super(_position);

            this.color = _color;
            this.shirtNumber = _shirtNumber;
            this.precision = randomNumber(_precisionMin, _precisionMax);
            this.speed = randomNumber(_speedMin, _speedMax);
        }

        public move(): void {

            let distance: Vector = Vector.getDifference(ball.position, this.position);

            if (distance.length <= radius) {
            // -> design choice: 30m (= 300px) makes playing fairly tough (too many players around the ball)
            // so now user gets the option to change that

                // move towards ball
                if (distance.length > 20) { // ~ radius of player + ball

                    this.position.x += distance.x * 0.01 * this.speed;
                    this.position.y += distance.y * 0.01 * this.speed;
                }

                // first player reaches ball
                else {
                    stop = true;
                    ball.shooterPrecision = this.precision;
                    
                    // display player touching the ball
                    let currentTeam: HTMLElement = <HTMLElement>document.getElementById("currentPlayer");
                    currentTeam.style.backgroundColor = this.color;
                    currentTeam.innerHTML = this.shirtNumber.toString();
                }
            }

            else {
                let backToStart: Vector = Vector.getDifference(this.startPosition.copy(), this.position);
                this.position.x += backToStart.x * 0.01 * this.speed;
                this.position.y += backToStart.y * 0.01 * this.speed;
            }

            this.draw();
        }

        public isClicked(_hotspot: Vector): boolean { // Jirka - eiaSteroids
            let hitsize: number = 10;
            let difference: Vector = Vector.getDifference(_hotspot, this.position);
            return (difference.length < hitsize);
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