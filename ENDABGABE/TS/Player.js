"use strict";
var Fussball;
(function (Fussball) {
    class Player extends Fussball.Person {
        // public expendable: boolean = false;
        constructor(_position, _color, _shirtNumber, _speedMin, _speedMax, _precisionMin, _precisionMax) {
            super(_position);
            this.color = _color;
            // this.startPosition = _position.copy();
            this.shirtNumber = _shirtNumber;
            this.precision = Fussball.randomNumber(_precisionMin, _precisionMax);
            this.speed = Fussball.randomNumber(_speedMin, _speedMax);
        }
        move() {
            // distance to ball
            let distance = Fussball.Vector.getDifference(Fussball.ball.position, this.position);
            if (distance.length <= 250) { // only start moving if ball is within 300px (=30m) radius - 250 for better game play (pitch still entirely covered)?
                // players move towards ball
                if (distance.length > 20) { // roughly radius of player + ball
                    this.position.x += distance.x * 0.01 * this.speed;
                    this.position.y += distance.y * 0.01 * this.speed;
                }
                // first player reaches ball
                else {
                    Fussball.stop = true;
                    Fussball.ball.shooterPrecision = this.precision;
                    // show which team can shoot
                    let currentTeam = document.getElementById("currentPlayer");
                    currentTeam.style.backgroundColor = this.color;
                    currentTeam.innerHTML = this.shirtNumber.toString();
                }
            }
            else {
                // player back to starting position
                let backToStart = Fussball.Vector.getDifference(this.startPosition.copy(), this.position);
                this.position.x += backToStart.x * 0.01 * this.speed;
                this.position.y += backToStart.y * 0.01 * this.speed;
            }
            this.draw();
        }
        // register if player has been clicked
        isClicked(_hotspot) {
            let hitsize = 10;
            let difference = new Fussball.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
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