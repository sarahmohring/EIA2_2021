"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class TreeLine {
        constructor(_min, _max) {
            this.min = _min;
            this.max = _max;
        }
        draw() {
            // distance between trees
            let stepMin = 5;
            let stepMax = 15;
            let x = 0;
            // draw each tree
            do {
                let y = Blumenwiese_poly.randomNumber(this.min, this.max);
                Blumenwiese_poly.crc2.save();
                Blumenwiese_poly.crc2.translate(x, y + (Blumenwiese_poly.canvas.height * 0.39));
                let treeTrunk = -30; // tree trunk height
                let treeTop = -150; // tree top height
                let treeColor = ["#1d5d18", "#22691d", "#267121"]; // shades of green
                let treeSize = Blumenwiese_poly.randomNumber(0.15, 0.2);
                Blumenwiese_poly.crc2.scale(treeSize, treeSize);
                // tree trunk
                Blumenwiese_poly.crc2.fillStyle = "#6d502b"; // colour tree trunk
                Blumenwiese_poly.crc2.fillRect(0, 0, 15, treeTrunk);
                // treetop
                for (let color = 0; color < 3; color++) {
                    // draw triangle and fill with color
                    Blumenwiese_poly.crc2.beginPath();
                    Blumenwiese_poly.crc2.moveTo(-50, treeTrunk);
                    Blumenwiese_poly.crc2.lineTo(60, treeTrunk);
                    Blumenwiese_poly.crc2.lineTo(10, treeTop);
                    Blumenwiese_poly.crc2.closePath();
                    Blumenwiese_poly.crc2.fillStyle = treeColor[color];
                    Blumenwiese_poly.crc2.fill();
                    // move starting position of next triangle upwards
                    treeTrunk += -40;
                    treeTop += -40;
                }
                x += stepMin + Blumenwiese_poly.randomNumber(stepMin, stepMax);
                Blumenwiese_poly.crc2.restore();
            } while (x < Blumenwiese_poly.canvas.width);
        }
    }
    Blumenwiese_poly.TreeLine = TreeLine;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=TreeLine.js.map