"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
    class Sun {
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            // sun and sun rays
            let r1 = Blumenwiese_obj.canvas.width * 0.02;
            let r2 = Blumenwiese_obj.canvas.width * 0.06;
            let gradient = Blumenwiese_obj.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");
            // draw sun
            Blumenwiese_obj.crc2.save();
            Blumenwiese_obj.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_obj.crc2.fillStyle = gradient;
            Blumenwiese_obj.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.restore();
        }
    }
    Blumenwiese_obj.Sun = Sun;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=Sun.js.map