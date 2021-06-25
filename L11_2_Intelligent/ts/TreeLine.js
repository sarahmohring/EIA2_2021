"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
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
                let y = BlumenwieseInt.randomNumber(this.min, this.max);
                BlumenwieseInt.crc2.save();
                BlumenwieseInt.crc2.translate(x, y + (BlumenwieseInt.canvas.height * 0.39));
                let treeTrunk = -30; // tree trunk height
                let treeTop = -150; // tree top height
                let treeColor = ["#1d5d18", "#22691d", "#267121"]; // shades of green
                let treeSize = BlumenwieseInt.randomNumber(0.15, 0.2);
                BlumenwieseInt.crc2.scale(treeSize, treeSize);
                // tree trunk
                BlumenwieseInt.crc2.fillStyle = "#6d502b"; // colour tree trunk
                BlumenwieseInt.crc2.fillRect(0, 0, 15, treeTrunk);
                // treetop
                for (let color = 0; color < 3; color++) {
                    // draw triangle and fill with color
                    BlumenwieseInt.crc2.beginPath();
                    BlumenwieseInt.crc2.moveTo(-50, treeTrunk);
                    BlumenwieseInt.crc2.lineTo(60, treeTrunk);
                    BlumenwieseInt.crc2.lineTo(10, treeTop);
                    BlumenwieseInt.crc2.closePath();
                    BlumenwieseInt.crc2.fillStyle = treeColor[color];
                    BlumenwieseInt.crc2.fill();
                    // move starting position of next triangle upwards
                    treeTrunk += -40;
                    treeTop += -40;
                }
                x += stepMin + BlumenwieseInt.randomNumber(stepMin, stepMax);
                BlumenwieseInt.crc2.restore();
            } while (x < BlumenwieseInt.canvas.width);
        }
    }
    BlumenwieseInt.TreeLine = TreeLine;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=TreeLine.js.map