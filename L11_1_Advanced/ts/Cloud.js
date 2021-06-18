"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Cloud extends BlumenwieseAdv.Moveable {
        constructor() {
            super(...arguments);
            this.velocity = new BlumenwieseAdv.Vector(0.3, 0);
        }
        draw() {
            let gradient = BlumenwieseAdv.crc2.createRadialGradient(0, 0, 0, 0, 0, 20);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(this.position.x, this.position.y);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(10, 5);
            BlumenwieseAdv.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(35, 7);
            BlumenwieseAdv.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(20, 10);
            BlumenwieseAdv.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(-20, 10);
            BlumenwieseAdv.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(-30, 5);
            BlumenwieseAdv.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(-40, 0);
            BlumenwieseAdv.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(20, -5);
            BlumenwieseAdv.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(-10, -10);
            BlumenwieseAdv.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.restore();
        }
    }
    BlumenwieseAdv.Cloud = Cloud;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Cloud.js.map