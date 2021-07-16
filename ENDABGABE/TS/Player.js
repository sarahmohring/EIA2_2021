"use strict";
var Fussball;
(function (Fussball) {
    class Player extends Fussball.Person {
        constructor(_position, _color, _shirtNumber, _speedMin, _speedMax, _precisionMin, _precisionMax) {
            super(_position);
            this.color = _color;
            this.shirtNumber = _shirtNumber;
            this.precision = Fussball.randomNumber(_precisionMin, _precisionMax);
            this.speed = Fussball.randomNumber(_speedMin, _speedMax);
        }
        move() {
            let distance = Fussball.Vector.getDifference(Fussball.ball.position, this.position);
            if (distance.length <= Fussball.radius) {
                // -> design choice: 30m (= 300px) makes playing fairly tough (too many players around the ball)
                // so now user gets the option to change that
                // move towards ball
                if (distance.length > 20) { // ~ radius of player + ball
                    this.position.x += distance.x * 0.01 * this.speed;
                    this.position.y += distance.y * 0.01 * this.speed;
                }
                // first player reaches ball
                else {
                    Fussball.stop = true;
                    Fussball.ball.shooterPrecision = this.precision;
                    // display player touching the ball
                    let currentTeam = document.getElementById("currentPlayer");
                    currentTeam.style.backgroundColor = this.color;
                    currentTeam.innerHTML = this.shirtNumber.toString();
                }
            }
            else {
                let backToStart = Fussball.Vector.getDifference(this.startPosition.copy(), this.position);
                this.position.x += backToStart.x * 0.01 * this.speed;
                this.position.y += backToStart.y * 0.01 * this.speed;
            }
            this.draw();
        }
        isClicked(_hotspot) {
            let hitsize = 10;
            let difference = Fussball.Vector.getDifference(_hotspot, this.position);
            return (difference.length < hitsize);
        }
        draw() {
            Fussball.crc2.save();
            Fussball.crc2.translate(this.position.x, this.position.y);
            // colors
            Fussball.crc2.fillStyle = this.color;
            Fussball.crc2.strokeStyle = "#FFFFFF";
            Fussball.crc2.lineWidth = 5;
            // body
            Fussball.crc2.beginPath();
            Fussball.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            Fussball.crc2.stroke();
            Fussball.crc2.fill();
            Fussball.crc2.restore();
        }
    }
    Fussball.Player = Player;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Player.js.map