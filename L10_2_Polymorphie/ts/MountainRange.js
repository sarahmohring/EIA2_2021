"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class MountainRange {
        constructor(_position, _min, _max, _colorLow, _colorHigh) {
            this.position = _position;
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }
        draw() {
            // distance between mountaintops and valleys
            let stepMin = 10;
            let stepMax = 20;
            let x = 0;
            Blumenwiese_poly.crc2.save();
            Blumenwiese_poly.crc2.translate(this.position.x, this.position.y);
            // start mountain path at the left side of the canvas
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.moveTo(0, 0);
            Blumenwiese_poly.crc2.lineTo(0, -this.max);
            // draw mountains
            do {
                x += stepMin + Blumenwiese_poly.randomNumber(stepMin, stepMax);
                let y = -Blumenwiese_poly.randomNumber(this.min, this.max);
                Blumenwiese_poly.crc2.lineTo(x, y);
            } while (x < Blumenwiese_poly.canvas.width);
            // end mountain path at the right side of the canvas
            Blumenwiese_poly.crc2.lineTo(x, 0);
            Blumenwiese_poly.crc2.closePath();
            // color mountains
            let gradient = Blumenwiese_poly.crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.9, this.colorHigh);
            Blumenwiese_poly.crc2.fillStyle = gradient;
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.restore();
        }
    }
    Blumenwiese_poly.MountainRange = MountainRange;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=MountainRange.js.map