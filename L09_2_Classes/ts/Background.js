"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
    function drawBackground(_horizon) {
        // sky color
        let gradientSky = Blumenwiese_obj.crc2.createLinearGradient(0, 0, 0, _horizon);
        gradientSky.addColorStop(0, "skyblue");
        gradientSky.addColorStop(1, "white");
        Blumenwiese_obj.crc2.fillStyle = gradientSky;
        Blumenwiese_obj.crc2.fillRect(0, 0, Blumenwiese_obj.canvas.width, _horizon);
        // meadow color
        let gradientMeadow = Blumenwiese_obj.crc2.createLinearGradient(0, _horizon, 0, Blumenwiese_obj.canvas.height);
        gradientMeadow.addColorStop(0, "darkolivegreen");
        gradientMeadow.addColorStop(1, "greenyellow");
        Blumenwiese_obj.crc2.fillStyle = gradientMeadow;
        Blumenwiese_obj.crc2.fillRect(0, _horizon, Blumenwiese_obj.canvas.width, Blumenwiese_obj.canvas.height);
    }
    Blumenwiese_obj.drawBackground = drawBackground;
    function drawSun(_position) {
        // sun and sun rays
        let r1 = Blumenwiese_obj.canvas.width * 0.02;
        let r2 = Blumenwiese_obj.canvas.width * 0.06;
        let gradient = Blumenwiese_obj.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");
        // draw sun
        Blumenwiese_obj.crc2.save();
        Blumenwiese_obj.crc2.translate(_position.x, _position.y);
        Blumenwiese_obj.crc2.fillStyle = gradient;
        Blumenwiese_obj.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.fill();
        Blumenwiese_obj.crc2.restore();
    }
    Blumenwiese_obj.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        // distance between mountaintops and valleys
        let stepMin = 10;
        let stepMax = 20;
        let x = 0;
        Blumenwiese_obj.crc2.save();
        Blumenwiese_obj.crc2.translate(_position.x, _position.y);
        // start mountain path at the left side of the canvas
        Blumenwiese_obj.crc2.beginPath();
        Blumenwiese_obj.crc2.moveTo(0, 0);
        Blumenwiese_obj.crc2.lineTo(0, -_max);
        // draw mountains
        do {
            x += stepMin + Blumenwiese_obj.randomNumber(stepMin, stepMax);
            let y = -Blumenwiese_obj.randomNumber(_min, _max);
            Blumenwiese_obj.crc2.lineTo(x, y);
        } while (x < Blumenwiese_obj.canvas.width);
        // end mountain path at the right side of the canvas
        Blumenwiese_obj.crc2.lineTo(x, 0);
        Blumenwiese_obj.crc2.closePath();
        // color mountains
        let gradient = Blumenwiese_obj.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        Blumenwiese_obj.crc2.fillStyle = gradient;
        Blumenwiese_obj.crc2.fill();
        Blumenwiese_obj.crc2.restore();
    }
    Blumenwiese_obj.drawMountains = drawMountains;
    function drawTrees(_min, _max) {
        // distance between trees
        let stepMin = 5;
        let stepMax = 15;
        let x = 0;
        // draw each tree
        do {
            let y = Blumenwiese_obj.randomNumber(_min, _max);
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
    Blumenwiese_obj.drawTrees = drawTrees;
    function drawBeehive() {
        Blumenwiese_obj.crc2.save();
        Blumenwiese_obj.crc2.translate(Blumenwiese_obj.canvas.width / 2, Blumenwiese_obj.canvas.height * 0.88);
        // colors
        Blumenwiese_obj.crc2.fillStyle = "#FFB90F";
        Blumenwiese_obj.crc2.strokeStyle = "#996633";
        Blumenwiese_obj.crc2.lineWidth = 4;
        // top bit
        Blumenwiese_obj.crc2.beginPath();
        Blumenwiese_obj.crc2.moveTo(0, 0);
        Blumenwiese_obj.crc2.arc(-18, 0, 10, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.arc(18, 0, 10, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.rect(-18, -10, 36, 20);
        Blumenwiese_obj.crc2.stroke();
        Blumenwiese_obj.crc2.fill();
        // 2nd
        Blumenwiese_obj.crc2.translate(0, 20);
        Blumenwiese_obj.crc2.beginPath();
        Blumenwiese_obj.crc2.arc(-25, 0, 10, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.arc(25, 0, 10, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.rect(-25, -10, 50, 20);
        Blumenwiese_obj.crc2.stroke();
        Blumenwiese_obj.crc2.fill();
        // 3rd
        Blumenwiese_obj.crc2.translate(0, 20);
        Blumenwiese_obj.crc2.beginPath();
        Blumenwiese_obj.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.rect(-30, -10, 60, 20);
        Blumenwiese_obj.crc2.stroke();
        Blumenwiese_obj.crc2.fill();
        // 4th
        Blumenwiese_obj.crc2.translate(0, 20);
        Blumenwiese_obj.crc2.beginPath();
        Blumenwiese_obj.crc2.arc(-30, 0, 10, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.arc(30, 0, 10, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.rect(-30, -10, 60, 20);
        Blumenwiese_obj.crc2.stroke();
        Blumenwiese_obj.crc2.fill();
        // entrance hole
        Blumenwiese_obj.crc2.beginPath();
        Blumenwiese_obj.crc2.fillStyle = "#663300";
        Blumenwiese_obj.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
        Blumenwiese_obj.crc2.fill();
        Blumenwiese_obj.crc2.restore();
    }
    Blumenwiese_obj.drawBeehive = drawBeehive;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=Background.js.map