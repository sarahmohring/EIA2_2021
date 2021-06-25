namespace BlumenwieseInt {

    enum TASK {
        TOFLOWER,
        DRINK,
        GOHOME,
        VOMIT
    }

    export class Bee extends Moveable {

        target: Flower;
        nectarAmount: number = 0;
        task: TASK = TASK.TOFLOWER;
        needsDestination: boolean = true;

        constructor(_position: Vector, _velocity?: Vector, _scale?: number) {
            super(_position, _velocity, _scale);
            this.draw();
            this.flyToFlower();

        }

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

            crc2.beginPath();
            crc2.fillStyle = "goldenrod";
            crc2.arc(this.position.x, this.position.y + (15 * this.scale), this.nectarAmount * 0.2 * this.scale, 0, 2 * Math.PI);
            crc2.fill();
        }

        // switch case TASK
        public move(): void {
            switch (this.task) {
                case TASK.TOFLOWER:
                    this.flyToFlower();
                    break;
                case TASK.DRINK:
                    this.drinkNectar();
                    break;
                case TASK.GOHOME:
                    this.goHome();
                    break;
                case TASK.VOMIT:
                    this.vomitNectar();
                    break;
                default:
                    this.fly();
                    break;
            }
        }

        private fly(): void { // default: regular flying

            if (this.position.x < 0)
                this.position.x += canvas.width;
            if (this.position.y < 0)
                this.position.y += canvas.height;
            if (this.position.x > canvas.width)
                this.position.x -= canvas.width;
            if (this.position.y > canvas.height)
                this.position.y -= canvas.height;

            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            this.draw();
        }

        private flyToFlower(): void {
            //Bee flies to flower
            if (this.needsDestination) {
                let i: number = Math.round(Math.random() * (flowers.length - 1));
                if (flowers[i].occupied == false || flowers[i].nectarAmount > 10) { // avoid more than 1 bee per flower & empty flowers
                    this.target = flowers[i];
                    flowers[i].occupied = true;
                }
                else
                    this.flyToFlower();
                this.needsDestination = false;
            }

            let direction: Vector = new Vector(this.target.position.x - this.position.x, (this.target.position.y - 40) - this.position.y);
            direction.scale(1 / 100);
            this.position.add(direction);

            this.draw();

            // when bee reaches flower - start drinking nectar
            if (Math.abs(this.position.x - this.target.position.x) < 1 && (Math.abs(this.position.y - (this.target.position.y - 40)) < 1)) {
                this.task = TASK.DRINK;
            }
        }

        private drinkNectar(): void {

            // bee is thirsty 
            if (this.nectarAmount < 50) {
                this.nectarAmount += 0.1;
                if (this.target.nectarAmount >= 0)
                    this.target.nectarAmount -= 0.1;
                else { // bee isn't full but flower is empty -> next flower
                    this.needsDestination = true;
                    this.task = TASK.TOFLOWER;
                }
            }
            this.draw();

            // bee is full
            if (this.nectarAmount >= 50)
                this.task = TASK.GOHOME;
        }

        private goHome(): void { // bee flies back to beehive

            this.target.occupied = false; // flower can welcome bees again

            // fly back to beehive
            let home: Vector = new Vector((canvas.width / 2) - this.position.x, (canvas.height * 0.95) - this.position.y);
            home.scale(1 / 100);
            this.position.add(home);

            this.draw();

            // bee arrives at the beehive and starts vomiting nectar
            if (Math.abs(this.position.x - (canvas.width / 2)) < 5 && Math.abs(this.position.y - (canvas.height * 0.95)) < 5) {
                this.task = TASK.VOMIT;
            }
        }

        private vomitNectar(): void {
            // bee vomits 
            if (this.nectarAmount > 0.1) {
                this.nectarAmount -= 0.1;
                this.draw();
            }
            else { // bee has vomited all nectar and is ready to fly again
                this.nectarAmount = 0;
                this.task = TASK.TOFLOWER;
            }
        }
    }
}