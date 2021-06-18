"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
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
            BlumenwieseAdv.crc2.save();
            BlumenwieseAdv.crc2.translate(this.position.x, this.position.y);
            // start mountain path at the left side of the canvas
            BlumenwieseAdv.crc2.beginPath();
            BlumenwieseAdv.crc2.moveTo(0, 0);
            BlumenwieseAdv.crc2.lineTo(0, -this.max);
            // draw mountains
            do {
                x += stepMin + BlumenwieseAdv.randomNumber(stepMin, stepMax);
                let y = -BlumenwieseAdv.randomNumber(this.min, this.max);
                BlumenwieseAdv.crc2.lineTo(x, y);
            } while (x < BlumenwieseAdv.canvas.width);
            // end mountain path at the right side of the canvas
            BlumenwieseAdv.crc2.lineTo(x, 0);
            BlumenwieseAdv.crc2.closePath();
            // color mountains
            let gradient = BlumenwieseAdv.crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.9, this.colorHigh);
            BlumenwieseAdv.crc2.fillStyle = gradient;
            BlumenwieseAdv.crc2.fill();
            BlumenwieseAdv.crc2.restore();
        }
    }
    BlumenwieseAdv.MountainRange = MountainRange;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=MountainRange.js.map