"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
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
            Blumenwiese_obj.crc2.save();
            Blumenwiese_obj.crc2.translate(this.position.x, this.position.y);
            // start mountain path at the left side of the canvas
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.moveTo(0, 0);
            Blumenwiese_obj.crc2.lineTo(0, -this.max);
            // draw mountains
            do {
                x += stepMin + Blumenwiese_obj.randomNumber(stepMin, stepMax);
                let y = -Blumenwiese_obj.randomNumber(this.min, this.max);
                Blumenwiese_obj.crc2.lineTo(x, y);
            } while (x < Blumenwiese_obj.canvas.width);
            // end mountain path at the right side of the canvas
            Blumenwiese_obj.crc2.lineTo(x, 0);
            Blumenwiese_obj.crc2.closePath();
            // color mountains
            let gradient = Blumenwiese_obj.crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.9, this.colorHigh);
            Blumenwiese_obj.crc2.fillStyle = gradient;
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.restore();
        }
    }
    Blumenwiese_obj.MountainRange = MountainRange;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=MountainRange.js.map