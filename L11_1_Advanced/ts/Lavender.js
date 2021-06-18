"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Lavender extends BlumenwieseAdv.Flower {
        draw() {
            // stem
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(this.position.x, this.position.y);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.moveTo(0, 0);
            BlumenwieseAdv.crc2.lineTo(0, -40);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.strokeStyle = "darkgreen";
            BlumenwieseAdv.crc2.stroke();
            BlumenwieseAdv.crc2.restore();
            // flowerbuds
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(0, -40);
            let gradient = BlumenwieseAdv.crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
            gradient.addColorStop(0, "lavender");
            gradient.addColorStop(1, "purple");
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.translate(this.position.x, this.position.y);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(0, 0);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(-6, -2);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(4, -5);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(0, -5);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(-3, -2);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(6, -5);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(0, -5);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(-6, -2);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.translate(6, -5);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.restore();
            // nectar
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.fillStyle = "goldenrod";
            BlumenwieseAdv.crc2.fillRect(this.position.x + 10, this.position.y, 10, 0 - this.nectarAmount);
        }
    }
    BlumenwieseAdv.Lavender = Lavender;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Lavender.js.map