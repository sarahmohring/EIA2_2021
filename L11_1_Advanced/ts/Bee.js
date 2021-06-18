"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Bee extends BlumenwieseAdv.Moveable {
        draw() {
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(this.position.x, this.position.y);
            BlumenwieseAdv.crc2.scale(this.scale, this.scale);
            BlumenwieseAdv.crc2.lineWidth = 0.5;
            BlumenwieseAdv.crc2.strokeStyle = "black";
            BlumenwieseAdv.crc2.fillStyle = "gold";
            // body
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.ellipse(0, 0, 7, 10, 0, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.stroke();
            // stripes 
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.rect(-6.5, 2, 12.8, 3);
            BlumenwieseAdv.crc2.fillStyle = "black";
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.rect(-6.5, -2, 12.8, -3);
            BlumenwieseAdv.crc2.fillStyle = "black";
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.closePath();
            // left wing
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.rotate(Math.PI * 2 / 15);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.fillStyle = "#aad5e7b8";
            BlumenwieseAdv.crc2.translate(-7, 7);
            BlumenwieseAdv.crc2.lineTo(0, -10);
            BlumenwieseAdv.crc2.bezierCurveTo(-10, 20, 5, 20, 10, 5);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.restore();
            // right wing
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.rotate(-Math.PI * 2 / 15);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.fillStyle = "#aad5e7b8";
            BlumenwieseAdv.crc2.translate(7, 7);
            BlumenwieseAdv.crc2.lineTo(0, -10);
            BlumenwieseAdv.crc2.bezierCurveTo(10, 20, -5, 20, -10, 5);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.restore();
            // antennaes
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.moveTo(-3, -8);
            BlumenwieseAdv.crc2.lineTo(-7, -13);
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.moveTo(3, -8);
            BlumenwieseAdv.crc2.lineTo(7, -13);
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.restore();
        }
    }
    BlumenwieseAdv.Bee = Bee;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Bee.js.map