"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    let TASK;
    (function (TASK) {
        TASK[TASK["TOFLOWER"] = 0] = "TOFLOWER";
        TASK[TASK["DRINK"] = 1] = "DRINK";
        TASK[TASK["GOHOME"] = 2] = "GOHOME";
        TASK[TASK["VOMIT"] = 3] = "VOMIT";
    })(TASK || (TASK = {}));
    class Bee extends BlumenwieseInt.Moveable {
        constructor(_position, _velocity, _scale) {
            super(_position, _velocity, _scale);
            this.nectarAmount = 0;
            this.task = TASK.TOFLOWER;
            this.needsDestination = true;
            this.draw();
            this.flyToFlower();
        }
        draw() {
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.translate(this.position.x, this.position.y);
            BlumenwieseInt.crc2.scale(this.scale, this.scale);
            BlumenwieseInt.crc2.lineWidth = 0.5;
            BlumenwieseInt.crc2.strokeStyle = "black";
            BlumenwieseInt.crc2.fillStyle = "gold";
            // body
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.ellipse(0, 0, 7, 10, 0, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.stroke();
            // stripes 
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.rect(-6.5, 2, 12.8, 3);
            BlumenwieseInt.crc2.fillStyle = "black";
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.rect(-6.5, -2, 12.8, -3);
            BlumenwieseInt.crc2.fillStyle = "black";
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.closePath();
            // left wing
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.rotate(Math.PI * 2 / 15);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.fillStyle = "#aad5e7b8";
            BlumenwieseInt.crc2.translate(-7, 7);
            BlumenwieseInt.crc2.lineTo(0, -10);
            BlumenwieseInt.crc2.bezierCurveTo(-10, 20, 5, 20, 10, 5);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.restore();
            // right wing
            BlumenwieseInt.crc2.save();
            BlumenwieseInt.crc2.rotate(-Math.PI * 2 / 15);
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.fillStyle = "#aad5e7b8";
            BlumenwieseInt.crc2.translate(7, 7);
            BlumenwieseInt.crc2.lineTo(0, -10);
            BlumenwieseInt.crc2.bezierCurveTo(10, 20, -5, 20, -10, 5);
            BlumenwieseInt.crc2.fill();
            BlumenwieseInt.crc2.closePath();
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.restore();
            // antennaes
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.moveTo(-3, -8);
            BlumenwieseInt.crc2.lineTo(-7, -13);
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.moveTo(3, -8);
            BlumenwieseInt.crc2.lineTo(7, -13);
            BlumenwieseInt.crc2.stroke();
            BlumenwieseInt.crc2.restore();
            BlumenwieseInt.crc2.beginPath();
            BlumenwieseInt.crc2.fillStyle = "goldenrod";
            BlumenwieseInt.crc2.arc(this.position.x, this.position.y + (15 * this.scale), this.nectarAmount * 0.2 * this.scale, 0, 2 * Math.PI);
            BlumenwieseInt.crc2.fill();
        }
        // switch case TASK
        move() {
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
        fly() {
            if (this.position.x < 0)
                this.position.x += BlumenwieseInt.canvas.width;
            if (this.position.y < 0)
                this.position.y += BlumenwieseInt.canvas.height;
            if (this.position.x > BlumenwieseInt.canvas.width)
                this.position.x -= BlumenwieseInt.canvas.width;
            if (this.position.y > BlumenwieseInt.canvas.height)
                this.position.y -= BlumenwieseInt.canvas.height;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
        flyToFlower() {
            //Bee flies to flower
            if (this.needsDestination) {
                let i = Math.round(Math.random() * (BlumenwieseInt.flowers.length - 1));
                if (BlumenwieseInt.flowers[i].occupied == false || BlumenwieseInt.flowers[i].nectarAmount > 10) { // avoid more than 1 bee per flower & empty flowers
                    this.target = BlumenwieseInt.flowers[i];
                    BlumenwieseInt.flowers[i].occupied = true;
                }
                else
                    this.flyToFlower();
                this.needsDestination = false;
            }
            let direction = new BlumenwieseInt.Vector(this.target.position.x - this.position.x, (this.target.position.y - 40) - this.position.y);
            direction.scale(1 / 100);
            this.position.add(direction);
            this.draw();
            // when bee reaches flower - start drinking nectar
            if (Math.abs(this.position.x - this.target.position.x) < 1 && (Math.abs(this.position.y - (this.target.position.y - 40)) < 1)) {
                this.task = TASK.DRINK;
            }
        }
        drinkNectar() {
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
        goHome() {
            this.target.occupied = false; // flower can welcome bees again
            // fly back to beehive
            let home = new BlumenwieseInt.Vector((BlumenwieseInt.canvas.width / 2) - this.position.x, (BlumenwieseInt.canvas.height * 0.95) - this.position.y);
            home.scale(1 / 100);
            this.position.add(home);
            this.draw();
            // bee arrives at the beehive and starts vomiting nectar
            if (Math.abs(this.position.x - (BlumenwieseInt.canvas.width / 2)) < 5 && Math.abs(this.position.y - (BlumenwieseInt.canvas.height * 0.95)) < 5) {
                this.task = TASK.VOMIT;
            }
        }
        vomitNectar() {
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
    BlumenwieseInt.Bee = Bee;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Bee.js.map