/*
Aufgabe: L08.2 Blumenwiese 
Name: Sarah Mohring
Matrikel: 268650
Datum: 15.05.2021
Quellen: 
- Jirka Dell'Oro-Friedl - Teile des "Alley"-Codes (main, background, sun, cloud, mountains) - modifiziert (-> responsive)
- Hannah Dürr - Basis für Daisy und Poppy (besprochen im Praktikum am 13.05.)
*/

namespace Blumenwiese {

    interface Vector {
        x: number;
        y: number;
    }

    // random number between a minimum and a maximum input
    function randomNumber(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }

    window.addEventListener("load", createCanvas);

    let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;

    function createCanvas(_event: Event): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        window.addEventListener("resize", fillCanvas, false);
        window.addEventListener("orientationchange", fillCanvas, false);
        fillCanvas();
    }

    function fillCanvas(): void {

        // responsive canvas size
        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.85;

        let horizon: number = canvas.height * 0.38;
        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground(horizon);
        drawSun({ x: canvas.width * 0.1, y: canvas.height * 0.12 });
        drawCloud({ x: canvas.width * 0.8, y: canvas.height * 0.15 }, { x: 90, y: 50 });
        drawCloud({ x: canvas.width * 0.4, y: canvas.height * 0.2 }, { x: 70, y: 40 });
        drawMountains(posMountains, canvas.height * 0.08, canvas.height * 0.15, "black", "white");
        drawMountains(posMountains, canvas.height * 0.05, canvas.height * 0.09, "#442b0b", "#c09682");
        drawTrees(0, 15);
        flowers(canvas.width / 25);
    }

    function drawBackground(_horizon: number): void { // Jirka / modified

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

    function drawSun(_position: Vector): void { // Jirka / modified

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

    function drawCloud(_position: Vector, _size: Vector): void { // Jirka / modified

        // create and color base particle
        let nParticles: number = 40;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.fillStyle = gradient;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        // assign random position within cloud area to each particle
        for (let drawn: number = 0; drawn < nParticles; drawn++) {

            crc2.save();

            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);

            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void { // Jirka / modified

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

    function drawTrees(_min: number, _max: number): void { // roughly based on Jirka's mountain code

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

    function flowers(_amount: number): void {

        // draw each flower [_amount] times
        for (let i: number = 0; i < _amount; i++) {

            drawDaisy();
            drawPoppy();
            drawLavender();
        }
    }

    function drawDaisy(): void { // roughly based on Hannah Dürr's code (Praktikum 13.05.)

        // random position
        let posX: number = canvas.width * (randomNumber(-0.1, 1));
        let posY: number = canvas.height * (randomNumber(0.5, 1));

        crc2.save();

        // stem
        crc2.translate(posX, posY);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -40);
        crc2.closePath();
        crc2.strokeStyle = "brown";
        crc2.stroke();

        crc2.save();

        // petals
        crc2.translate(0, -40);

        for (let flowerPetals: number = 0; flowerPetals < 5; flowerPetals++) {

            crc2.rotate(Math.PI * 2 / 5);

            //petal color
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -40);
            gradient.addColorStop(0.3, "white");
            gradient.addColorStop(1, "violet");

            // draw each petal
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-5, -10);
            crc2.bezierCurveTo(-10, -30, 10, -30, 10, -10);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();
        }

        crc2.restore();

        // center
        crc2.save();
        crc2.translate(0, -40);
        crc2.beginPath();
        crc2.arc(0, 0, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.restore();

        crc2.restore();
    }

    function drawPoppy(): void { // roughly based on Hannah Dürr's code (Praktikum 13.05.)

        // random position
        let posX: number = canvas.width * (randomNumber(-0.1, 1));
        let posY: number = canvas.height * (randomNumber(0.5, 1));

        crc2.save();

        // stem
        crc2.translate(posX, posY);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -60);
        crc2.closePath();
        crc2.strokeStyle = "darkslategray";
        crc2.stroke();

        crc2.save();

        // petals
        crc2.translate(0, -60);

        for (let flowerPetals: number = 0; flowerPetals < 7; flowerPetals++) {

            crc2.rotate(Math.PI * 2 / 7);

            //petal color
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -40);
            gradient.addColorStop(0, "maroon");
            gradient.addColorStop(0.7, "red");

            // draw each petal
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-5, -10);
            crc2.bezierCurveTo(-10, -30, 20, -30, 20, -10);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();
        }

        crc2.restore();

        // center
        crc2.save();
        crc2.translate(0, -60);
        crc2.beginPath();
        crc2.arc(0, 0, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();

        crc2.restore();
    }

    function drawLavender(): void { // Jirka (drawCloud) / modified

        // random position
        let posX: number = canvas.width * (randomNumber(-0.1, 1));
        let posY: number = canvas.height * (randomNumber(0.5, 1));

        crc2.save();

        // stem
        crc2.translate(posX, posY);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -30);
        crc2.closePath();
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.restore();

        crc2.save();

        // flowerbuds
        crc2.translate(0, -30);

        // create and color base particle
        let radiusParticle: number = 5;
        let particle: Path2D = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        gradient.addColorStop(0, "lavender");
        gradient.addColorStop(1, "purple");
        crc2.fillStyle = gradient;

        // assign random position within flowerbud area to each particle
        for (let nParticles: number = 0; nParticles < 50; nParticles++) {

            crc2.save();

            let xParticle: number = posX + randomNumber(-5, 5);
            let yParticle: number = posY + randomNumber(0, -30);

            crc2.translate(xParticle, yParticle);
            crc2.fill(particle);
            crc2.restore();
        }

        crc2.restore();
    }
}
