"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
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
                let y = BlumenwieseAdv.randomNumber(this.min, this.max);
                BlumenwieseAdv.crc2.save();
                BlumenwieseAdv.crc2.translate(x, y + (BlumenwieseAdv.canvas.height * 0.39));
                let treeTrunk = -30; // tree trunk height
                let treeTop = -150; // tree top height
                let treeColor = ["#1d5d18", "#22691d", "#267121"]; // shades of green
                let treeSize = BlumenwieseAdv.randomNumber(0.15, 0.2);
                BlumenwieseAdv.crc2.scale(treeSize, treeSize);
                // tree trunk
                BlumenwieseAdv.crc2.fillStyle = "#6d502b"; // colour tree trunk
                BlumenwieseAdv.crc2.fillRect(0, 0, 15, treeTrunk);
                // treetop
                for (let color = 0; color < 3; color++) {
                    // draw triangle and fill with color
                    BlumenwieseAdv.crc2.beginPath();
                    BlumenwieseAdv.crc2.moveTo(-50, treeTrunk);
                    BlumenwieseAdv.crc2.lineTo(60, treeTrunk);
                    BlumenwieseAdv.crc2.lineTo(10, treeTop);
                    BlumenwieseAdv.crc2.closePath();
                    BlumenwieseAdv.crc2.fillStyle = treeColor[color];
                    BlumenwieseAdv.crc2.fill();
                    // move starting position of next triangle upwards
                    treeTrunk += -40;
                    treeTop += -40;
                }
                x += stepMin + BlumenwieseAdv.randomNumber(stepMin, stepMax);
                BlumenwieseAdv.crc2.restore();
            } while (x < BlumenwieseAdv.canvas.width);
        }
    }
    BlumenwieseAdv.TreeLine = TreeLine;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=TreeLine.js.map