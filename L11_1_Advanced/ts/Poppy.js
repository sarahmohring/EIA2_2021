"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Poppy extends BlumenwieseAdv.Flower {
        draw() {
            // stem
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(this.position.x, this.position.y);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.moveTo(0, 0);
            BlumenwieseAdv.crc2.lineTo(0, -60);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.strokeStyle = "darkgreen";
            BlumenwieseAdv.crc2.stroke();
            // petals
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(0, -60);
            for (let flowerPetals = 0; flowerPetals < 7; flowerPetals++) {
                BlumenwieseAdv.crc2.rotate(Math.PI * 2 / 7);
                //petal color
                let gradient = BlumenwieseAdv.crc2.createLinearGradient(0, 0, 0, -40);
                gradient.addColorStop(0, "maroon");
                gradient.addColorStop(0.7, "red");
                // draw each petal
                BlumenwieseAdv.crc2.beginPath();
                BlumenwieseAdv.crc2.moveTo(0, 0);
                BlumenwieseAdv.crc2.lineTo(-5, -10);
                BlumenwieseAdv.crc2.bezierCurveTo(-10, -30, 20, -30, 20, -10);
                BlumenwieseAdv.crc2.closePath();
                BlumenwieseAdv.crc2.fillStyle = gradient;
                BlumenwieseAdv.crc2.fill();
            }
            BlumenwieseAdv.crc2.restore();
            // center
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(0, -60);
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.closePath();
            BlumenwieseAdv.crc2.fillStyle = "black";
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.restore();
            BlumenwieseAdv.crc2.restore();
            // nectar
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.fillStyle = "goldenrod";
            BlumenwieseAdv.crc2.fillRect(this.position.x + 10, this.position.y, 10, 0 - this.nectarAmount);
        }
    }
    BlumenwieseAdv.Poppy = Poppy;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Poppy.js.map