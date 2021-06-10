"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class Beehive {
        draw() {
            Blumenwiese_poly.crc2.save();
            Blumenwiese_poly.crc2.translate(Blumenwiese_poly.canvas.width / 2, Blumenwiese_poly.canvas.height * 0.88);
            // colors
            Blumenwiese_poly.crc2.fillStyle = "#FFB90F";
            Blumenwiese_poly.crc2.strokeStyle = "#996633";
            Blumenwiese_poly.crc2.lineWidth = 4;
            // top bit
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.moveTo(0, 0);
            Blumenwiese_poly.crc2.arc(-18, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.arc(18, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.rect(-18, -10, 36, 20);
            Blumenwiese_poly.crc2.stroke();
            Blumenwiese_poly.crc2.fill();
            // 2nd
            Blumenwiese_poly.crc2.translate(0, 20);
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.arc(-25, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.arc(25, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.rect(-25, -10, 50, 20);
            Blumenwiese_poly.crc2.stroke();
            Blumenwiese_poly.crc2.fill();
            // 3rd
            Blumenwiese_poly.crc2.translate(0, 20);
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.rect(-30, -10, 60, 20);
            Blumenwiese_poly.crc2.stroke();
            Blumenwiese_poly.crc2.fill();
            // 4th
            Blumenwiese_poly.crc2.translate(0, 20);
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.rect(-30, -10, 60, 20);
            Blumenwiese_poly.crc2.stroke();
            Blumenwiese_poly.crc2.fill();
            // entrance hole
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.fillStyle = "#663300";
            Blumenwiese_poly.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.restore();
        }
    }
    Blumenwiese_poly.Beehive = Beehive;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=Beehive.js.map