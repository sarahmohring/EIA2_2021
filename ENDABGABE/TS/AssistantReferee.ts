namespace Fussball {

    export class AssistantReferee extends Person {

        protected velocity: Vector = new Vector(0.5, 0);

        public move(): void { 
            
            // assistant referees can move along the outer lines
            if (this.position.x < 25 || this.position.x > 975)
                this.velocity.x = -this.velocity.x;

            this.position.x += this.velocity.x;

            this.draw();
        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // colors
            crc2.fillStyle = "#A6A6A6";
            crc2.strokeStyle = "#7F7F7F";
            crc2.lineWidth = 5;

            // body
            crc2.beginPath();
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            crc2.restore();
        }
    }
}