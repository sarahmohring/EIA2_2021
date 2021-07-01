"use strict";
var Fussball;
(function (Fussball) {
    class Ball {
        constructor() {
            this.position = new Fussball.Vector(Fussball.canvas.width / 2, Fussball.canvas.height / 2);
        }
        // constructor mit draw Aufruf?
        move(_event /*, _precision: number*/) {
            // ball needs to go towards clicked position (but depending on distance of destination and precision of shooting player (as PARAMETERS?))
            // if (this.position.x < 10 || this.position.x > 980)
            //     this.draw();
            // if (this.position.y < 10 || this.position.y > 640)
            //     this.draw();
            // 
            let difference = new Fussball.Vector(_event.offsetX - this.position.x, _event.offsetY - this.position.y);
            difference.scale(1 / 30); // controls ball speed
            this.position.add(difference);
            this.draw();
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