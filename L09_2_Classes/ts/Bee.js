"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
    class Bee {
        constructor(_position, _velocity, _scale) {
            this.position = _position;
            this.velocity = _velocity;
            this.scale = _scale;
        }
        draw() {
            Blumenwiese_obj.crc2.save();
            Blumenwiese_obj.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_obj.crc2.scale(this.scale, this.scale);
            Blumenwiese_obj.crc2.lineWidth = 0.5;
            Blumenwiese_obj.crc2.strokeStyle = "black";
            Blumenwiese_obj.crc2.fillStyle = "gold";
            // body
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.ellipse(0, 0, 7, 10, 0, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.stroke();
            // stripes 
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.rect(-6.5, 2, 12.8, 3);
            Blumenwiese_obj.crc2.fillStyle = "black";
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.closePath();
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.rect(-6.5, -2, 12.8, -3);
            Blumenwiese_obj.crc2.fillStyle = "black";
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.closePath();
            // left wing
            Blumenwiese_obj.crc2.save();
            Blumenwiese_obj.crc2.rotate(Math.PI * 2 / 15);
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_obj.crc2.translate(-7, 7);
            Blumenwiese_obj.crc2.lineTo(0, -10);
            Blumenwiese_obj.crc2.bezierCurveTo(-10, 20, 5, 20, 10, 5);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.closePath();
            Blumenwiese_obj.crc2.stroke();
            Blumenwiese_obj.crc2.restore();
            // right wing
            Blumenwiese_obj.crc2.save();
            Blumenwiese_obj.crc2.rotate(-Math.PI * 2 / 15);
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_obj.crc2.translate(7, 7);
            Blumenwiese_obj.crc2.lineTo(0, -10);
            Blumenwiese_obj.crc2.bezierCurveTo(10, 20, -5, 20, -10, 5);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.closePath();
            Blumenwiese_obj.crc2.stroke();
            Blumenwiese_obj.crc2.restore();
            // antennaes
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.moveTo(-3, -8);
            Blumenwiese_obj.crc2.lineTo(-7, -13);
            Blumenwiese_obj.crc2.stroke();
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.moveTo(3, -8);
            Blumenwiese_obj.crc2.lineTo(7, -13);
            Blumenwiese_obj.crc2.stroke();
            Blumenwiese_obj.crc2.restore();
        }
        update() {
            if (this.position.x < 0)
                this.position.x += Blumenwiese_obj.canvas.width;
            if (this.position.y < 0)
                this.position.y += Blumenwiese_obj.canvas.height;
            if (this.position.x > Blumenwiese_obj.canvas.width)
                this.position.x -= Blumenwiese_obj.canvas.width;
            if (this.position.y > Blumenwiese_obj.canvas.height)
                this.position.y -= Blumenwiese_obj.canvas.height;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
    }
    Blumenwiese_obj.Bee = Bee;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=Bee.js.map