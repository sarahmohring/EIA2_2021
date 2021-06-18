namespace BlumenwieseAdv {
    export class Bee extends Moveable {

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale, this.scale);
            crc2.lineWidth = 0.5;
            crc2.strokeStyle = "black";
            crc2.fillStyle = "gold";

            // body
            crc2.beginPath();
            crc2.ellipse(0, 0, 7, 10, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            
            // stripes 
            crc2.beginPath();
            crc2.rect(-6.5, 2, 12.8, 3);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(-6.5, -2, 12.8, -3);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            // left wing
            crc2.save();
            crc2.rotate(Math.PI * 2 / 15);
            crc2.beginPath();
            crc2.fillStyle = "#aad5e7b8";
            crc2.translate(-7, 7);
            crc2.lineTo(0, -10);
            crc2.bezierCurveTo(-10, 20, 5, 20, 10, 5);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.restore();

            // right wing
            crc2.save();
            crc2.rotate(- Math.PI * 2 / 15);
            crc2.beginPath();
            crc2.fillStyle = "#aad5e7b8";
            crc2.translate(7, 7);
            crc2.lineTo(0, -10);
            crc2.bezierCurveTo(10, 20, -5, 20, -10, 5);
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
            crc2.restore();

            // antennaes
            crc2.beginPath();
            crc2.moveTo(-3, -8);
            crc2.lineTo(-7, -13);
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(3, -8);
            crc2.lineTo(7, -13);
            crc2.stroke();

            crc2.restore();
        }
    }
}