"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
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
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(this.position.x, this.position.y);
            // start mountain path at the left side of the canvas
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.moveTo(0, 0);
            BlumenwieseInt.crc2.lineTo(0, -this.max);
            // draw mountains
            do {
                x += stepMin + BlumenwieseInt.randomNumber(stepMin, stepMax);
                let y = -BlumenwieseInt.randomNumber(this.min, this.max);
                BlumenwieseInt.crc2.lineTo(x, y);
            } while (x < BlumenwieseInt.canvas.width);
            // end mountain path at the right side of the canvas
            BlumenwieseInt.crc2.lineTo(x, 0);
            BlumenwieseInt.crc2.closePath();
            // color mountains
            let gradient = BlumenwieseInt.crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.9, this.colorHigh);
            BlumenwieseInt.crc2.fillStyle = gradient;
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.restore();
        }
    }
    BlumenwieseInt.MountainRange = MountainRange;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=MountainRange.js.map