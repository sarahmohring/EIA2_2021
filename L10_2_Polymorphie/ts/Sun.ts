namespace Blumenwiese_poly {

    export class Sun {

        position: Vector;

        constructor(_position: Vector) {
            this.position = _position;
        }

        draw(): void { // Jirka - Alley / modified
            
            // sun and sun rays
            let r1: number = canvas.width * 0.02;
            let r2: number = canvas.width * 0.06;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 60%, 0)");

            // draw sun
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();

        }
    }
}