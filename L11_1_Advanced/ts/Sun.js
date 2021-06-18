"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Sun {
        constructor(_position) {
            this.position = _position;
        }
        draw() {
            // sun and sun rays
            let r1 = BlumenwieseAdv.canvas.width * 0.02;
            let r2 = BlumenwieseAdv.canvas.width * 0.06;
            let gradient = BlumenwieseAdv.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");
            // draw sun
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(this.position.x, this.position.y);
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.restore();
        }
    }
    BlumenwieseAdv.Sun = Sun;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Sun.js.map