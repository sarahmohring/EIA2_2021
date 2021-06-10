"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class Sun {
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            // sun and sun rays
            let r1 = Blumenwiese_poly.canvas.width * 0.02;
            let r2 = Blumenwiese_poly.canvas.width * 0.06;
            let gradient = Blumenwiese_poly.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");
            // draw sun
            Blumenwiese_poly.crc2.save();
            Blumenwiese_poly.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_poly.crc2.fillStyle = gradient;
            Blumenwiese_poly.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.restore();
        }
    }
    Blumenwiese_poly.Sun = Sun;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=Sun.js.map