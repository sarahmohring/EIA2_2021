namespace Fussball {

    export class Referee extends Person {

        protected velocity: Vector = new Vector(0.5, 0.5);

        public move(): void { 
            
            // referee can move anywhere within the outer lines except goal area
            if (this.position.x < 75 || this.position.x > 925)
                this.velocity.x = -this.velocity.x;
            if (this.position.y < 25 || this.position.y > 625)
                this.velocity.y = -this.velocity.y;
                
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            this.draw();
        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // colors
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#7F7F7F";
            crc2.lineWidth = 5;

            // body
            crc2.beginPath();
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            // stripes on shirt
            crc2.beginPath();
            crc2.rect(-7, -10, 3, 20);
            crc2.fillStyle = "#7F7F7F";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(-1.5, -10, 3, 20);
            crc2.fillStyle = "#7F7F7F";
            crc2.fill();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.rect(4, -10, 3, 20);
            crc2.fillStyle = "#7F7F7F";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }
}