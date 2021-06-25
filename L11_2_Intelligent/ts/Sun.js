"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    class Sun {
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            // sun and sun rays
            let r1 = BlumenwieseInt.canvas.width * 0.02;
            let r2 = BlumenwieseInt.canvas.width * 0.06;
            let gradient = BlumenwieseInt.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");
            // draw sun
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(this.position.x, this.position.y);
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.restore();
        }
    }
    BlumenwieseInt.Sun = Sun;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Sun.js.map