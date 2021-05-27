namespace Blumenwiese_obj {

    export class Flower {
        flowerType: string;

        constructor(_flowerType: string) {
            this.flowerType = _flowerType;
        }

        draw(): void {

            let position: Vector = new Vector((canvas.width * (randomNumber(-0.1, 1))), (canvas.height * (randomNumber(0.5, 1))));

            switch (this.flowerType) {
                case "daisy": {

                    // stem
                    crc2.save();
                    crc2.translate(position.x, position.y);
                    crc2.beginPath();
                    crc2.moveTo(0, 0);
                    crc2.lineTo(0, -40);
                    crc2.closePath();
                    crc2.strokeStyle = "darkgreen";
                    crc2.stroke();

                    // petals
                    crc2.save();
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

                    break;
                }

                case "poppy": {

                    // stem
                    crc2.save();
                    crc2.translate(position.x, position.y);
                    crc2.beginPath();
                    crc2.moveTo(0, 0);
                    crc2.lineTo(0, -60);
                    crc2.closePath();
                    crc2.strokeStyle = "darkgreen";
                    crc2.stroke();

                    // petals
                    crc2.save();
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

                    break;
                }

                case "lavender": {

                    // stem
                    crc2.save();
                    crc2.translate(position.x, position.y);
                    crc2.beginPath();
                    crc2.moveTo(0, 0);
                    crc2.lineTo(0, -40);
                    crc2.closePath();
                    crc2.strokeStyle = "darkgreen";
                    crc2.stroke();
                    crc2.restore();

                    // flowerbuds
                    crc2.save();
                    crc2.translate(0, -40);

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

                        let xParticle: number = position.x + randomNumber(-5, 5);
                        let yParticle: number = position.y + randomNumber(0, -40);

                        crc2.translate(xParticle, yParticle);
                        crc2.fill(particle);
                        crc2.restore();
                    }

                    crc2.restore();

                    break;
                }

            }

        }
    }
}