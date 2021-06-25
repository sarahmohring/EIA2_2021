"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    class Beehive {
        draw() {
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(BlumenwieseInt.canvas.width / 2, BlumenwieseInt.canvas.height * 0.88);
            // colors
            BlumenwieseInt.crc2.fillStyle = "#FFB90F";
            BlumenwieseInt.crc2.strokeStyle = "#996633";
            BlumenwieseInt.crc2.lineWidth = 4;
            // top bit
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.moveTo(0, 0);
            BlumenwieseInt.crc2.arc(-18, 0, 10, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.arc(18, 0, 10, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.rect(-18, -10, 36, 20);
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.fill();
            // 2nd
            BlumenwieseInt.crc2.translate(0, 20);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(-25, 0, 10, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.arc(25, 0, 10, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.rect(-25, -10, 50, 20);
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.fill();
            // 3rd
            BlumenwieseInt.crc2.translate(0, 20);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.rect(-30, -10, 60, 20);
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.fill();
            // 4th
            BlumenwieseInt.crc2.translate(0, 20);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.rect(-30, -10, 60, 20);
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.fill();
            // entrance hole
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.fillStyle = "#663300";
            BlumenwieseInt.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.restore();
        }
    }
    BlumenwieseInt.Beehive = Beehive;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Beehive.js.map