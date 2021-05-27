namespace Blumenwiese_obj {

    export class TreeLine {

        min: number;
        max: number;

        constructor(_min: number, _max: number) {
            this.min = _min;
            this.max = _max;
        }

        draw(): void { // roughly based on Jirka's mountain code (Alley)

            // distance between trees
            let stepMin: number = 5;
            let stepMax: number = 15;
            let x: number = 0;

            // draw each tree
            do {
                let y: number = randomNumber(this.min, this.max);
                crc2.save();
                crc2.translate(x, y + (canvas.height * 0.39));

                let treeTrunk: number = -30; // tree trunk height
                let treeTop: number = -150; // tree top height
                let treeColor: string[] = ["#1d5d18", "#22691d", "#267121"]; // shades of green

                let treeSize: number = randomNumber(0.15, 0.2);

                crc2.scale(treeSize, treeSize);

                // tree trunk
                crc2.fillStyle = "#6d502b"; // colour tree trunk
                crc2.fillRect(0, 0, 15, treeTrunk);

                // treetop
                for (let color: number = 0; color < 3; color++) {

                    // draw triangle and fill with color
                    crc2.beginPath();
                    crc2.moveTo(-50, treeTrunk);
                    crc2.lineTo(60, treeTrunk);
                    crc2.lineTo(10, treeTop);
                    crc2.closePath();
                    crc2.fillStyle = treeColor[color];
                    crc2.fill();

                    // move starting position of next triangle upwards
                    treeTrunk += -40;
                    treeTop += -40;
                }

                x += stepMin + randomNumber(stepMin, stepMax);
                crc2.restore();

            } while (x < canvas.width);
        }
    }
}