"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    class Lavender extends BlumenwieseInt.Flower {
        draw() {
            // stem
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(this.position.x, this.position.y);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.moveTo(0, 0);
            BlumenwieseInt.crc2.lineTo(0, -40);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.strokeStyle = "darkgreen";
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.restore();
            // flowerbuds
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(0, -40);
            let gradient = BlumenwieseInt.crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
            gradient.addColorStop(0, "lavender");
            gradient.addColorStop(1, "purple");
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.translate(this.position.x, this.position.y);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(0, 0);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(-6, -2);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(4, -5);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(0, -5);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(-3, -2);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(6, -5);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(0, -5);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(-6, -2);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.translate(6, -5);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.restore();
            // nectar
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.fillStyle = "goldenrod";
            BlumenwieseInt.crc2.fillRect(this.position.x + 10, this.position.y, 10, 0 - this.nectarAmount);
        }
    }
    BlumenwieseInt.Lavender = Lavender;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Lavender.js.map