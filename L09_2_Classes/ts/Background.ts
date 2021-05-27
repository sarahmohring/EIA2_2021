namespace Blumenwiese_obj {

    export function drawBackground(_horizon: number): void { // Jirka - Alley / modified

        // sky color
        let gradientSky: CanvasGradient = crc2.createLinearGradient(0, 0, 0, _horizon);
        gradientSky.addColorStop(0, "skyblue");
        gradientSky.addColorStop(1, "white");

        crc2.fillStyle = gradientSky;
        crc2.fillRect(0, 0, canvas.width, _horizon);

        // meadow color
        let gradientMeadow: CanvasGradient = crc2.createLinearGradient(0, _horizon, 0, canvas.height);
        gradientMeadow.addColorStop(0, "darkolivegreen");
        gradientMeadow.addColorStop(1, "greenyellow");

        crc2.fillStyle = gradientMeadow;
        crc2.fillRect(0, _horizon, canvas.width, canvas.height);
    }

    export function drawSun(_position: Vector): void { // Jirka - Alley / modified

        // sun and sun rays
        let r1: number = canvas.width * 0.02;
        let r2: number = canvas.width * 0.06;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");

        // draw sun
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void { // Jirka - Alley / modified

        // distance between mountaintops and valleys
        let stepMin: number = 10;
        let stepMax: number = 20;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        // start mountain path at the left side of the canvas
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        // draw mountains
        do {
            x += stepMin + randomNumber(stepMin, stepMax);
            let y: number = - randomNumber(_min, _max);
            crc2.lineTo(x, y);

        } while (x < canvas.width);

        // end mountain path at the right side of the canvas
        crc2.lineTo(x, 0);
        crc2.closePath();

        // color mountains
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    export function drawTrees(_min: number, _max: number): void { // roughly based on Jirka's mountain code (Alley)

        // distance between trees
        let stepMin: number = 5;
        let stepMax: number = 15;
        let x: number = 0;

        // draw each tree
        do {
            let y: number = randomNumber(_min, _max);
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

    export function drawBeehive(): void {

        crc2.save();
        crc2.translate(canvas.width / 2, canvas.height * 0.88);

        // colors
        crc2.fillStyle = "#FFB90F";
        crc2.strokeStyle = "#996633";
        crc2.lineWidth = 4;

        // top bit
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.arc(-18, 0, 10, 0, 2 * Math.PI);
        crc2.arc(18, 0, 10, 0, 2 * Math.PI);
        crc2.rect(-18, - 10, 36, 20);
        crc2.stroke();
        crc2.fill();
        
        // 2nd
        crc2.translate(0, 20);
        crc2.beginPath();
        crc2.arc(-25, 0, 10, 0, 2 * Math.PI);
        crc2.arc(25, 0, 10, 0, 2 * Math.PI);
        crc2.rect(-25, - 10, 50, 20);
        crc2.stroke();
        crc2.fill();

        // 3rd
        crc2.translate(0, 20);
        crc2.beginPath();
        crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
        crc2.arc(30, 0, 10, 0, 2 * Math.PI);
        crc2.rect(-30, - 10, 60, 20);
        crc2.stroke();
        crc2.fill();

        // 4th
        crc2.translate(0, 20);
        crc2.beginPath();
        crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
        crc2.arc(30, 0, 10, 0, 2 * Math.PI);
        crc2.rect(-30, - 10, 60, 20);
        crc2.stroke();
        crc2.fill();

        // entrance hole
        crc2.beginPath();
        crc2.fillStyle = "#663300";
        crc2.arc(0, 0, 8, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }
}