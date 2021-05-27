"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
    class Beehive {
        draw() {
            Blumenwiese_obj.crc2.save();
            Blumenwiese_obj.crc2.translate(Blumenwiese_obj.canvas.width / 2, Blumenwiese_obj.canvas.height * 0.88);
            // colors
            Blumenwiese_obj.crc2.fillStyle = "#FFB90F";
            Blumenwiese_obj.crc2.strokeStyle = "#996633";
            Blumenwiese_obj.crc2.lineWidth = 4;
            // top bit
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.moveTo(0, 0);
            Blumenwiese_obj.crc2.arc(-18, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.arc(18, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.rect(-18, -10, 36, 20);
            Blumenwiese_obj.crc2.stroke();
            Blumenwiese_obj.crc2.fill();
            // 2nd
            Blumenwiese_obj.crc2.translate(0, 20);
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.arc(-25, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.arc(25, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.rect(-25, -10, 50, 20);
            Blumenwiese_obj.crc2.stroke();
            Blumenwiese_obj.crc2.fill();
            // 3rd
            Blumenwiese_obj.crc2.translate(0, 20);
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.rect(-30, -10, 60, 20);
            Blumenwiese_obj.crc2.stroke();
            Blumenwiese_obj.crc2.fill();
            // 4th
            Blumenwiese_obj.crc2.translate(0, 20);
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.rect(-30, -10, 60, 20);
            Blumenwiese_obj.crc2.stroke();
            Blumenwiese_obj.crc2.fill();
            // entrance hole
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.fillStyle = "#663300";
            Blumenwiese_obj.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.restore();
        }
    }
    Blumenwiese_obj.Beehive = Beehive;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=Beehive.js.map