"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    class Cloud extends BlumenwieseInt.Moveable {
        constructor() {
            super(...arguments);
            this.velocity = new BlumenwieseInt.Vector(0.3, 0);
        }
        move() {
            if (this.position.x < 0)
                this.position.x += BlumenwieseInt.canvas.width;
            if (this.position.x > BlumenwieseInt.canvas.width)
                this.position.x -= BlumenwieseInt.canvas.width;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
        draw() {
            let gradient = BlumenwieseInt.crc2.createRadialGradient(0, 0, 0, 0, 0, 20);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(this.position.x, this.position.y);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(10, 5);
            BlumenwieseInt.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(35, 7);
            BlumenwieseInt.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(20, 10);
            BlumenwieseInt.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(-20, 10);
            BlumenwieseInt.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(-30, 5);
            BlumenwieseInt.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(-40, 0);
            BlumenwieseInt.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(20, -5);
            BlumenwieseInt.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(-10, -10);
            BlumenwieseInt.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.restore();
        }
    }
    BlumenwieseInt.Cloud = Cloud;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Cloud.js.map