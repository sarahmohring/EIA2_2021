namespace Blumenwiese_poly {

    export class Cloud extends Moveable {

        // position: Vector;
        velocity: Vector = new Vector(0.3, 0);

        // super(_position: Vector): void {
        //     this.position = _position;
        // }

        draw(): void {

            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 20);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
            crc2.fillStyle = gradient;
            crc2.fill();
            
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fill();
            
            crc2.translate(10, 5);
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fill();

            crc2.translate(35, 7);
            crc2.arc(0, 0, 25, 0, 2 * Math.PI);
            crc2.fill();

            crc2.translate(20, 10);
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fill();

            crc2.translate(-20, 10);
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fill();

            crc2.translate(-30, 5);
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fill();

            crc2.translate(-40, 0);
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fill();

            crc2.translate(20, -5);
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fill();

            crc2.translate(-10, -10);
            crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            crc2.fill();
           
            crc2.restore();
        }
    }
}