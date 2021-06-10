"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class Flower {
        constructor(_flowerType) {
            this.flowerType = _flowerType;
        }
        draw() {
            let position = new Blumenwiese_poly.Vector((Blumenwiese_poly.canvas.width * (Blumenwiese_poly.randomNumber(-0.1, 1))), (Blumenwiese_poly.canvas.height * (Blumenwiese_poly.randomNumber(0.5, 1))));
            switch (this.flowerType) {
                case "daisy": {
                    // stem
                    Blumenwiese_poly.crc2.save();
                    Blumenwiese_poly.crc2.translate(position.x, position.y);
                    Blumenwiese_poly.crc2.beginPath();
                    Blumenwiese_poly.crc2.moveTo(0, 0);
                    Blumenwiese_poly.crc2.lineTo(0, -40);
                    Blumenwiese_poly.crc2.closePath();
                    Blumenwiese_poly.crc2.strokeStyle = "darkgreen";
                    Blumenwiese_poly.crc2.stroke();
                    // petals
                    Blumenwiese_poly.crc2.save();
                    Blumenwiese_poly.crc2.translate(0, -40);
                    for (let flowerPetals = 0; flowerPetals < 5; flowerPetals++) {
                        Blumenwiese_poly.crc2.rotate(Math.PI * 2 / 5);
                        //petal color
                        let gradient = Blumenwiese_poly.crc2.createLinearGradient(0, 0, 0, -40);
                        gradient.addColorStop(0.3, "white");
                        gradient.addColorStop(1, "violet");
                        // draw each petal
                        Blumenwiese_poly.crc2.beginPath();
                        Blumenwiese_poly.crc2.moveTo(0, 0);
                        Blumenwiese_poly.crc2.lineTo(-5, -10);
                        Blumenwiese_poly.crc2.bezierCurveTo(-10, -30, 10, -30, 10, -10);
                        Blumenwiese_poly.crc2.closePath();
                        Blumenwiese_poly.crc2.fillStyle = gradient;
                        Blumenwiese_poly.crc2.fill();
                    }
                    Blumenwiese_poly.crc2.restore();
                    // center
                    Blumenwiese_poly.crc2.save();
                    Blumenwiese_poly.crc2.translate(0, -40);
                    Blumenwiese_poly.crc2.beginPath();
                    Blumenwiese_poly.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
                    Blumenwiese_poly.crc2.closePath();
                    Blumenwiese_poly.crc2.fillStyle = "yellow";
                    Blumenwiese_poly.crc2.fill();
                    Blumenwiese_poly.crc2.restore();
                    Blumenwiese_poly.crc2.restore();
                    break;
                }
                case "poppy": {
                    // stem
                    Blumenwiese_poly.crc2.save();
                    Blumenwiese_poly.crc2.translate(position.x, position.y);
                    Blumenwiese_poly.crc2.beginPath();
                    Blumenwiese_poly.crc2.moveTo(0, 0);
                    Blumenwiese_poly.crc2.lineTo(0, -60);
                    Blumenwiese_poly.crc2.closePath();
                    Blumenwiese_poly.crc2.strokeStyle = "darkgreen";
                    Blumenwiese_poly.crc2.stroke();
                    // petals
                    Blumenwiese_poly.crc2.save();
                    Blumenwiese_poly.crc2.translate(0, -60);
                    for (let flowerPetals = 0; flowerPetals < 7; flowerPetals++) {
                        Blumenwiese_poly.crc2.rotate(Math.PI * 2 / 7);
                        //petal color
                        let gradient = Blumenwiese_poly.crc2.createLinearGradient(0, 0, 0, -40);
                        gradient.addColorStop(0, "maroon");
                        gradient.addColorStop(0.7, "red");
                        // draw each petal
                        Blumenwiese_poly.crc2.beginPath();
                        Blumenwiese_poly.crc2.moveTo(0, 0);
                        Blumenwiese_poly.crc2.lineTo(-5, -10);
                        Blumenwiese_poly.crc2.bezierCurveTo(-10, -30, 20, -30, 20, -10);
                        Blumenwiese_poly.crc2.closePath();
                        Blumenwiese_poly.crc2.fillStyle = gradient;
                        Blumenwiese_poly.crc2.fill();
                    }
                    Blumenwiese_poly.crc2.restore();
                    // center
                    Blumenwiese_poly.crc2.save();
                    Blumenwiese_poly.crc2.translate(0, -60);
                    Blumenwiese_poly.crc2.beginPath();
                    Blumenwiese_poly.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
                    Blumenwiese_poly.crc2.closePath();
                    Blumenwiese_poly.crc2.fillStyle = "black";
                    Blumenwiese_poly.crc2.fill();
                    Blumenwiese_poly.crc2.restore();
                    Blumenwiese_poly.crc2.restore();
                    break;
                }
                case "lavender": {
                    // stem
                    Blumenwiese_poly.crc2.save();
                    Blumenwiese_poly.crc2.translate(position.x, position.y);
                    Blumenwiese_poly.crc2.beginPath();
                    Blumenwiese_poly.crc2.moveTo(0, 0);
                    Blumenwiese_poly.crc2.lineTo(0, -40);
                    Blumenwiese_poly.crc2.closePath();
                    Blumenwiese_poly.crc2.strokeStyle = "darkgreen";
                    Blumenwiese_poly.crc2.stroke();
                    Blumenwiese_poly.crc2.restore();
                    // flowerbuds
                    Blumenwiese_poly.crc2.save();
                    Blumenwiese_poly.crc2.translate(0, -40);
                    // create and color base particle
                    let radiusParticle = 5;
                    let particle = new Path2D();
                    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
                    let gradient = Blumenwiese_poly.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
                    gradient.addColorStop(0, "lavender");
                    gradient.addColorStop(1, "purple");
                    Blumenwiese_poly.crc2.fillStyle = gradient;
                    // assign random position within flowerbud area to each particle
                    for (let nParticles = 0; nParticles < 50; nParticles++) {
                        Blumenwiese_poly.crc2.save();
                        let xParticle = position.x + Blumenwiese_poly.randomNumber(-5, 5);
                        let yParticle = position.y + Blumenwiese_poly.randomNumber(0, -40);
                        Blumenwiese_poly.crc2.translate(xParticle, yParticle);
                        Blumenwiese_poly.crc2.fill(particle);
                        Blumenwiese_poly.crc2.restore();
                    }
                    Blumenwiese_poly.crc2.restore();
                    break;
                }
            }
        }
    }
    Blumenwiese_poly.Flower = Flower;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=Flower.js.map