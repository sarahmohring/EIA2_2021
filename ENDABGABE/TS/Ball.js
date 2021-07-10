"use strict";
var Fussball;
(function (Fussball) {
    class Ball {
        constructor() {
            this.position = new Fussball.Vector(Fussball.canvas.width / 2, Fussball.canvas.height / 2); // center of the field
            this.newPosition = this.position;
        }
        move() {
            // ball needs to go towards clicked position (slowing down at the end)
            let distance = Fussball.Vector.getDifference(this.newPosition, this.position);
            distance.scale(1 / 100);
            this.position.add(distance);
            this.draw();
        }
        shot(_position) {
            if (Fussball.stop == true) {
                let distance = Fussball.Vector.getDifference(_position, this.position);
                // destination further away and precision lower: ball is more likely to go to a wrong position
                _position.add(new Fussball.Vector(Fussball.randomNumber(0.5 * (-distance.length) * (1 - this.shooterPrecision), 0.5 * distance.length * (1 - this.shooterPrecision)), Fussball.randomNumber(0.5 * (-distance.length) * (1 - this.shooterPrecision), 0.5 * distance.length * (1 - this.shooterPrecision))));
                this.newPosition = _position.copy();
            }
        }
        draw() {
            Fussball.crc2.save();
            Fussball.crc2.translate(this.position.x, this.position.y);
            // colors
            Fussball.crc2.fillStyle = "#FFFFFF";
            Fussball.crc2.strokeStyle = "#000000";
            Fussball.crc2.lineWidth = 3;
            // ball
            Fussball.crc2.beginPath();
            Fussball.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            Fussball.crc2.stroke();
            Fussball.crc2.fill();
            // black bits on the ball
            Fussball.crc2.beginPath();
            Fussball.crc2.rect(-7, -5, 4, 4);
            Fussball.crc2.fillStyle = "#000000";
            Fussball.crc2.fill();
            Fussball.crc2.closePath();
            Fussball.crc2.beginPath();
            Fussball.crc2.rect(-7, 2, 4, 4);
            Fussball.crc2.fillStyle = "#000000";
            Fussball.crc2.fill();
            Fussball.crc2.closePath();
            Fussball.crc2.beginPath();
            Fussball.crc2.rect(-3, -3, 6, 6);
            Fussball.crc2.fillStyle = "#000000";
            Fussball.crc2.fill();
            Fussball.crc2.closePath();
            Fussball.crc2.beginPath();
            Fussball.crc2.rect(3, -5, 4, 4);
            Fussball.crc2.fillStyle = "#000000";
            Fussball.crc2.fill();
            Fussball.crc2.closePath();
            Fussball.crc2.beginPath();
            Fussball.crc2.rect(3, 2, 4, 4);
            Fussball.crc2.fillStyle = "#000000";
            Fussball.crc2.fill();
            Fussball.crc2.closePath();
            Fussball.crc2.restore();
        }
    }
    Fussball.Ball = Ball;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Ball.js.map