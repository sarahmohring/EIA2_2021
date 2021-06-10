namespace Blumenwiese_poly {

    export class Beehive {

        draw(): void {

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
}
