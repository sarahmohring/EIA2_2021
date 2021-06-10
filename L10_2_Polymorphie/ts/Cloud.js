"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class Cloud extends Blumenwiese_poly.Moveable {
        constructor() {
            super(...arguments);
            // position: Vector;
            this.velocity = new Blumenwiese_poly.Vector(0.3, 0);
        }
        // super(_position: Vector): void {
        //     this.position = _position;
        // }
        draw() {
            let gradient = Blumenwiese_poly.crc2.createRadialGradient(0, 0, 0, 0, 0, 20);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
            Blumenwiese_poly.crc2.fillStyle = gradient;
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.save();
            Blumenwiese_poly.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.translate(10, 5);
            Blumenwiese_poly.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.translate(35, 7);
            Blumenwiese_poly.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.translate(20, 10);
            Blumenwiese_poly.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.translate(-20, 10);
            Blumenwiese_poly.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.translate(-30, 5);
            Blumenwiese_poly.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.translate(-40, 0);
            Blumenwiese_poly.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.translate(20, -5);
            Blumenwiese_poly.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.translate(-10, -10);
            Blumenwiese_poly.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.restore();
        }
    }
    Blumenwiese_poly.Cloud = Cloud;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=Cloud.js.map