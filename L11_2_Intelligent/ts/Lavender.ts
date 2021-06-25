namespace BlumenwieseInt {
    
    export class Lavender extends Flower {

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
            crc2.restore();

            // flowerbuds
            crc2.save();
            crc2.translate(0, -40);

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 5);
            gradient.addColorStop(0, "lavender");
            gradient.addColorStop(1, "purple");
            crc2.fillStyle = gradient;

            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();
            
            crc2.translate(0, 0);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.closePath();
            crc2.fill();

            crc2.translate(-6, -2);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.closePath();
            crc2.fill();

            crc2.translate(4, -5);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.translate(0, -5);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.translate(-3, -2);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.translate(6, -5);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.translate(0, -5);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.translate(-6, -2);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.translate(6, -5);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();
           
            crc2.restore();

            // nectar
            crc2.beginPath();
            crc2.fillStyle = "goldenrod";
            crc2.fillRect(this.position.x + 10, this.position.y, 10, 0 - this.nectarAmount);
        }
    }
}