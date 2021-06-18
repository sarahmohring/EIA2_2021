namespace BlumenwieseAdv {

    export class Daisy extends Flower {

        public draw(): void {
            // stem
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
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

            // nectar
            crc2.beginPath();
            crc2.fillStyle = "goldenrod";
            crc2.fillRect(this.position.x + 10, this.position.y, 10, 0 - this.nectarAmount);
        }
    }
}