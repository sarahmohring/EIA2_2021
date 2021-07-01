"use strict";
var Fussball;
(function (Fussball) {
    class Referee extends Fussball.Person {
        constructor() {
            super(...arguments);
            this.velocity = new Fussball.Vector(0.5, 0.5);
        }
        move() {
            // referee can move anywhere within the outer lines except goal area
            if (this.position.x < 75 || this.position.x > 925)
                this.velocity.x = -this.velocity.x;
            if (this.position.y < 25 || this.position.y > 625)
                this.velocity.y = -this.velocity.y;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
        draw() {
            Fussball.crc2.save();
            Fussball.crc2.translate(this.position.x, this.position.y);
            // colors
            Fussball.crc2.fillStyle = "#FFFFFF";
            Fussball.crc2.strokeStyle = "#7F7F7F";
            Fussball.crc2.lineWidth = 5;
            // body
            Fussball.crc2.beginPath();
            Fussball.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            Fussball.crc2.stroke();
            Fussball.crc2.fill();
            // stripes on shirt
            Fussball.crc2.beginPath();
            Fussball.crc2.rect(-7, -10, 3, 20);
            Fussball.crc2.fillStyle = "#7F7F7F";
            Fussball.crc2.fill();
            Fussball.crc2.closePath();
            Fussball.crc2.beginPath();
            Fussball.crc2.rect(-1.5, -10, 3, 20);
            Fussball.crc2.fillStyle = "#7F7F7F";
            Fussball.crc2.fill();
            Fussball.crc2.closePath();
            Fussball.crc2.beginPath();
            Fussball.crc2.rect(4, -10, 3, 20);
            Fussball.crc2.fillStyle = "#7F7F7F";
            Fussball.crc2.fill();
            Fussball.crc2.closePath();
            Fussball.crc2.restore();
        }
    }
    Fussball.Referee = Referee;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Referee.js.map