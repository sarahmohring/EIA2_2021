"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    class Daisy extends BlumenwieseInt.Flower {
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
            // petals
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(0, -40);
            for (let flowerPetals = 0; flowerPetals < 5; flowerPetals++) {
                BlumenwieseInt.crc2.rotate(Math.PI * 2 / 5);
                //petal color
                let gradient = BlumenwieseInt.crc2.createLinearGradient(0, 0, 0, -40);
                gradient.addColorStop(0.3, "white");
                gradient.addColorStop(1, "violet");
                // draw each petal
                BlumenwieseInt.crc2.beginPath();
                BlumenwieseInt.crc2.moveTo(0, 0);
                BlumenwieseInt.crc2.lineTo(-5, -10);
                BlumenwieseInt.crc2.bezierCurveTo(-10, -30, 10, -30, 10, -10);
                BlumenwieseInt.crc2.closePath();
                BlumenwieseInt.crc2.fillStyle = gradient;
                BlumenwieseInt.crc2.fill();
            }
            BlumenwieseInt.crc2.restore();
            // center
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(0, -40);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.fillStyle = "yellow";
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.restore();
            BlumenwieseInt.crc2.restore();
            // nectar
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.fillStyle = "goldenrod";
            BlumenwieseInt.crc2.fillRect(this.position.x + 10, this.position.y, 10, 0 - this.nectarAmount);
        }
    }
    BlumenwieseInt.Daisy = Daisy;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Daisy.js.map