"use strict";
/*
Aufgabe: L08.2 Blumenwiese
Name: Sarah Mohring
Matrikel: 268650
Datum: 15.05.2021
Quellen:
- Jirka Dell'Oro-Friedl - Teile des "Alley"-Codes (main, background, sun, cloud, mountains) - modifiziert (-> responsive)
- Hannah Dürr - Basis für Daisy und Poppy (besprochen im Praktikum am 13.05.)
*/
var Blumenwiese;
(function (Blumenwiese) {
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    window.addEventListener("load", createCanvas);
    let canvas;
    function createCanvas(_event) {
        canvas = document.querySelector("canvas");
        Blumenwiese.crc2 = canvas.getContext("2d");
        window.addEventListener("resize", fillCanvas, false);
        window.addEventListener("orientationchange", fillCanvas, false);
        fillCanvas();
    }
    function fillCanvas() {
        // responsive canvas size
        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.85;
        let horizon = canvas.height * 0.38;
        let posMountains = { x: 0, y: horizon };
        drawBackground(horizon);
        drawSun({ x: canvas.width * 0.1, y: canvas.height * 0.12 });
        drawCloud({ x: canvas.width * 0.8, y: canvas.height * 0.15 }, { x: 90, y: 50 });
        drawCloud({ x: canvas.width * 0.4, y: canvas.height * 0.2 }, { x: 70, y: 40 });
        drawMountains(posMountains, canvas.height * 0.08, canvas.height * 0.15, "black", "white");
        drawMountains(posMountains, canvas.height * 0.05, canvas.height * 0.09, "#442b0b", "#c09682");
        drawTrees(0, 15);
        flowers(canvas.width / 25);
    }
    function drawBackground(_horizon) {
        // sky color
        let gradientSky = Blumenwiese.crc2.createLinearGradient(0, 0, 0, _horizon);
        gradientSky.addColorStop(0, "skyblue");
        gradientSky.addColorStop(1, "white");
        Blumenwiese.crc2.fillStyle = gradientSky;
        Blumenwiese.crc2.fillRect(0, 0, canvas.width, _horizon);
        // meadow color
        let gradientMeadow = Blumenwiese.crc2.createLinearGradient(0, _horizon, 0, canvas.height);
        gradientMeadow.addColorStop(0, "darkolivegreen");
        gradientMeadow.addColorStop(1, "greenyellow");
        Blumenwiese.crc2.fillStyle = gradientMeadow;
        Blumenwiese.crc2.fillRect(0, _horizon, canvas.width, canvas.height);
    }
    function drawSun(_position) {
        // sun and sun rays
        let r1 = canvas.width * 0.02;
        let r2 = canvas.width * 0.06;
        let gradient = Blumenwiese.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");
        // draw sun
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(_position.x, _position.y);
        Blumenwiese.crc2.fillStyle = gradient;
        Blumenwiese.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.restore();
    }
    function drawCloud(_position, _size) {
        // create and color base particle
        let nParticles = 40;
        let radiusParticle = 20;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        let gradient = Blumenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        Blumenwiese.crc2.fillStyle = gradient;
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(_position.x, _position.y);
        // assign random position within cloud area to each particle
        for (let drawn = 0; drawn < nParticles; drawn++) {
            Blumenwiese.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            Blumenwiese.crc2.translate(x, y);
            Blumenwiese.crc2.fill(particle);
            Blumenwiese.crc2.restore();
        }
        Blumenwiese.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        // distance between mountaintops and valleys
        let stepMin = 10;
        let stepMax = 20;
        let x = 0;
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(_position.x, _position.y);
        // start mountain path at the left side of the canvas
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.moveTo(0, 0);
        Blumenwiese.crc2.lineTo(0, -_max);
        // draw mountains
        do {
            x += stepMin + randomNumber(stepMin, stepMax);
            let y = -randomNumber(_min, _max);
            Blumenwiese.crc2.lineTo(x, y);
        } while (x < canvas.width);
        // end mountain path at the right side of the canvas
        Blumenwiese.crc2.lineTo(x, 0);
        Blumenwiese.crc2.closePath();
        // color mountains
        let gradient = Blumenwiese.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        Blumenwiese.crc2.fillStyle = gradient;
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.restore();
    }
    function drawTrees(_min, _max) {
        // distance between trees
        let stepMin = 5;
        let stepMax = 15;
        let x = 0;
        // draw each tree
        do {
            let y = randomNumber(_min, _max);
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.translate(x, y + (canvas.height * 0.39));
            let treeTrunk = -30; // tree trunk height
            let treeTop = -150; // tree top height
            let treeColor = ["#1d5d18", "#22691d", "#267121"]; // shades of green
            let treeSize = randomNumber(0.15, 0.2);
            Blumenwiese.crc2.scale(treeSize, treeSize);
            // tree trunk
            Blumenwiese.crc2.fillStyle = "#6d502b"; // colour tree trunk
            Blumenwiese.crc2.fillRect(0, 0, 15, treeTrunk);
            // treetop
            for (let color = 0; color < 3; color++) {
                // draw triangle and fill with color
                Blumenwiese.crc2.beginPath();
                Blumenwiese.crc2.moveTo(-50, treeTrunk);
                Blumenwiese.crc2.lineTo(60, treeTrunk);
                Blumenwiese.crc2.lineTo(10, treeTop);
                Blumenwiese.crc2.closePath();
                Blumenwiese.crc2.fillStyle = treeColor[color];
                Blumenwiese.crc2.fill();
                // move starting position of next triangle upwards
                treeTrunk += -40;
                treeTop += -40;
            }
            x += stepMin + randomNumber(stepMin, stepMax);
            Blumenwiese.crc2.restore();
        } while (x < canvas.width);
    }
    function flowers(_amount) {
        // draw each flower [_amount] times
        for (let i = 0; i < _amount; i++) {
            drawDaisy();
            drawPoppy();
            drawLavender();
        }
    }
    function drawDaisy() {
        // random position
        let posX = canvas.width * (randomNumber(-0.1, 1));
        let posY = canvas.height * (randomNumber(0.5, 1));
        Blumenwiese.crc2.save();
        // stem
        Blumenwiese.crc2.translate(posX, posY);
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.moveTo(0, 0);
        Blumenwiese.crc2.lineTo(0, -40);
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.strokeStyle = "brown";
        Blumenwiese.crc2.stroke();
        Blumenwiese.crc2.save();
        // petals
        Blumenwiese.crc2.translate(0, -40);
        for (let flowerPetals = 0; flowerPetals < 5; flowerPetals++) {
            Blumenwiese.crc2.rotate(Math.PI * 2 / 5);
            //petal color
            let gradient = Blumenwiese.crc2.createLinearGradient(0, 0, 0, -40);
            gradient.addColorStop(0.3, "white");
            gradient.addColorStop(1, "violet");
            // draw each petal
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(0, 0);
            Blumenwiese.crc2.lineTo(-5, -10);
            Blumenwiese.crc2.bezierCurveTo(-10, -30, 10, -30, 10, -10);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fillStyle = gradient;
            Blumenwiese.crc2.fill();
        }
        Blumenwiese.crc2.restore();
        // center
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(0, -40);
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.fillStyle = "yellow";
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.restore();
        Blumenwiese.crc2.restore();
    }
    function drawPoppy() {
        // random position
        let posX = canvas.width * (randomNumber(-0.1, 1));
        let posY = canvas.height * (randomNumber(0.5, 1));
        Blumenwiese.crc2.save();
        // stem
        Blumenwiese.crc2.translate(posX, posY);
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.moveTo(0, 0);
        Blumenwiese.crc2.lineTo(0, -60);
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.strokeStyle = "darkslategray";
        Blumenwiese.crc2.stroke();
        Blumenwiese.crc2.save();
        // petals
        Blumenwiese.crc2.translate(0, -60);
        for (let flowerPetals = 0; flowerPetals < 7; flowerPetals++) {
            Blumenwiese.crc2.rotate(Math.PI * 2 / 7);
            //petal color
            let gradient = Blumenwiese.crc2.createLinearGradient(0, 0, 0, -40);
            gradient.addColorStop(0, "maroon");
            gradient.addColorStop(0.7, "red");
            // draw each petal
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(0, 0);
            Blumenwiese.crc2.lineTo(-5, -10);
            Blumenwiese.crc2.bezierCurveTo(-10, -30, 20, -30, 20, -10);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fillStyle = gradient;
            Blumenwiese.crc2.fill();
        }
        Blumenwiese.crc2.restore();
        // center
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(0, -60);
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.fillStyle = "black";
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.restore();
        Blumenwiese.crc2.restore();
    }
    function drawLavender() {
        // random position
        let posX = canvas.width * (randomNumber(-0.1, 1));
        let posY = canvas.height * (randomNumber(0.5, 1));
        Blumenwiese.crc2.save();
        // stem
        Blumenwiese.crc2.translate(posX, posY);
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.moveTo(0, 0);
        Blumenwiese.crc2.lineTo(0, -30);
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.strokeStyle = "black";
        Blumenwiese.crc2.stroke();
        Blumenwiese.crc2.restore();
        Blumenwiese.crc2.save();
        // flowerbuds
        Blumenwiese.crc2.translate(0, -30);
        // create and color base particle
        let radiusParticle = 5;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        let gradient = Blumenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        gradient.addColorStop(0, "lavender");
        gradient.addColorStop(1, "purple");
        Blumenwiese.crc2.fillStyle = gradient;
        // assign random position within flowerbud area to each particle
        for (let nParticles = 0; nParticles < 50; nParticles++) {
            Blumenwiese.crc2.save();
            let xParticle = posX + randomNumber(-5, 5);
            let yParticle = posY + randomNumber(0, -30);
            Blumenwiese.crc2.translate(xParticle, yParticle);
            Blumenwiese.crc2.fill(particle);
            Blumenwiese.crc2.restore();
        }
        Blumenwiese.crc2.restore();
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=blumenwiese.js.map