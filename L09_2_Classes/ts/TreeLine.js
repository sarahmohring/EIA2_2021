"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
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
                let y = Blumenwiese_obj.randomNumber(this.min, this.max);
                Blumenwiese_obj.crc2.save();
                Blumenwiese_obj.crc2.translate(x, y + (Blumenwiese_obj.canvas.height * 0.39));
                let treeTrunk = -30; // tree trunk height
                let treeTop = -150; // tree top height
                let treeColor = ["#1d5d18", "#22691d", "#267121"]; // shades of green
                let treeSize = Blumenwiese_obj.randomNumber(0.15, 0.2);
                Blumenwiese_obj.crc2.scale(treeSize, treeSize);
                // tree trunk
                Blumenwiese_obj.crc2.fillStyle = "#6d502b"; // colour tree trunk
                Blumenwiese_obj.crc2.fillRect(0, 0, 15, treeTrunk);
                // treetop
                for (let color = 0; color < 3; color++) {
                    // draw triangle and fill with color
                    Blumenwiese_obj.crc2.beginPath();
                    Blumenwiese_obj.crc2.moveTo(-50, treeTrunk);
                    Blumenwiese_obj.crc2.lineTo(60, treeTrunk);
                    Blumenwiese_obj.crc2.lineTo(10, treeTop);
                    Blumenwiese_obj.crc2.closePath();
                    Blumenwiese_obj.crc2.fillStyle = treeColor[color];
                    Blumenwiese_obj.crc2.fill();
                    // move starting position of next triangle upwards
                    treeTrunk += -40;
                    treeTop += -40;
                }
                x += stepMin + Blumenwiese_obj.randomNumber(stepMin, stepMax);
                Blumenwiese_obj.crc2.restore();
            } while (x < Blumenwiese_obj.canvas.width);
        }
    }
    Blumenwiese_obj.TreeLine = TreeLine;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=TreeLine.js.map