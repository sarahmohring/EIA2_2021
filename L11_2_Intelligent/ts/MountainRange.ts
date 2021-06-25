namespace BlumenwieseInt {

    export class MountainRange {

        private position: Vector;
        private min: number;
        private max: number;
        private colorLow: string;
        private colorHigh: string;

        constructor(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string) {
            this.position = _position;
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }

        public draw(): void { // Jirka - Alley / modified
            
            // distance between mountaintops and valleys
            let stepMin: number = 10;
            let stepMax: number = 20;
            let x: number = 0;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // start mountain path at the left side of the canvas
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -this.max);

            // draw mountains
            do {
                x += stepMin + randomNumber(stepMin, stepMax);
                let y: number = - randomNumber(this.min, this.max);
                crc2.lineTo(x, y);

            } while (x < canvas.width);

            // end mountain path at the right side of the canvas
            crc2.lineTo(x, 0);
            crc2.closePath();

            // color mountains
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(0.9, this.colorHigh);

            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.restore();
        }
    }
}