"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Beehive {
        draw() {
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(BlumenwieseAdv.canvas.width / 2, BlumenwieseAdv.canvas.height * 0.88);
            // colors
            BlumenwieseAdv.crc2.fillStyle = "#FFB90F";
            BlumenwieseAdv.crc2.strokeStyle = "#996633";
            BlumenwieseAdv.crc2.lineWidth = 4;
            // top bit
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.moveTo(0, 0);
            BlumenwieseAdv.crc2.arc(-18, 0, 10, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.arc(18, 0, 10, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.rect(-18, -10, 36, 20);
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.fill();
            // 2nd
            BlumenwieseAdv.crc2.translate(0, 20);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(-25, 0, 10, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.arc(25, 0, 10, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.rect(-25, -10, 50, 20);
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.fill();
            // 3rd
            BlumenwieseAdv.crc2.translate(0, 20);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.rect(-30, -10, 60, 20);
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.fill();
            // 4th
            BlumenwieseAdv.crc2.translate(0, 20);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.rect(-30, -10, 60, 20);
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.fill();
            // entrance hole
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.fillStyle = "#663300";
            BlumenwieseAdv.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.restore();
        }
    }
    BlumenwieseAdv.Beehive = Beehive;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Beehive.js.map