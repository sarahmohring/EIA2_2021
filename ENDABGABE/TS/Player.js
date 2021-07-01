"use strict";
var Fussball;
(function (Fussball) {
    class Player extends Fussball.Person {
        constructor(_position, _color, _shirtNumber, _velocity) {
            super(_position, _velocity);
            this.zone = 300;
            this.color = _color;
            this.startPosition = _position;
            this.shirtNumber = _shirtNumber;
        }
        move() {
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
        draw() {
            Fussball.crc2.save();
            Fussball.crc2.translate(this.position.x, this.position.y);
            // colors
            Fussball.crc2.fillStyle = this.color;
            Fussball.crc2.strokeStyle = "#FFFFFF";
            Fussball.crc2.lineWidth = 5;
            // body
            Fussball.crc2.beginPath();
            Fussball.crc2.arc(0, 0, 12.5, 0, 2 * Math.PI);
            Fussball.crc2.stroke();
            Fussball.crc2.fill();
            Fussball.crc2.restore();
        }
    }
    Fussball.Player = Player;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Player.js.map