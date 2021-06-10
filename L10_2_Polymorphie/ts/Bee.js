"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class Bee extends Blumenwiese_poly.Moveable {
        // position: Vector;
        // velocity: Vector;
        // scale: number;
        // super(_position: Vector, _velocity: Vector, _scale: number): void {
        //     this.position = _position;
        //     this.velocity = _velocity;
        //     this.scale = _scale;
        // }
        draw() {
            Blumenwiese_poly.crc2.save();
            Blumenwiese_poly.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_poly.crc2.scale(this.scale, this.scale);
            Blumenwiese_poly.crc2.lineWidth = 0.5;
            Blumenwiese_poly.crc2.strokeStyle = "black";
            Blumenwiese_poly.crc2.fillStyle = "gold";
            // body
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.ellipse(0, 0, 7, 10, 0, 0, 2 * Math.PI);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.stroke();
            // stripes 
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.rect(-6.5, 2, 12.8, 3);
            Blumenwiese_poly.crc2.fillStyle = "black";
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.closePath();
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.rect(-6.5, -2, 12.8, -3);
            Blumenwiese_poly.crc2.fillStyle = "black";
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.closePath();
            // left wing
            Blumenwiese_poly.crc2.save();
            Blumenwiese_poly.crc2.rotate(Math.PI * 2 / 15);
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_poly.crc2.translate(-7, 7);
            Blumenwiese_poly.crc2.lineTo(0, -10);
            Blumenwiese_poly.crc2.bezierCurveTo(-10, 20, 5, 20, 10, 5);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.closePath();
            Blumenwiese_poly.crc2.stroke();
            Blumenwiese_poly.crc2.restore();
            // right wing
            Blumenwiese_poly.crc2.save();
            Blumenwiese_poly.crc2.rotate(-Math.PI * 2 / 15);
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_poly.crc2.translate(7, 7);
            Blumenwiese_poly.crc2.lineTo(0, -10);
            Blumenwiese_poly.crc2.bezierCurveTo(10, 20, -5, 20, -10, 5);
            Blumenwiese_poly.crc2.fill();
            Blumenwiese_poly.crc2.closePath();
            Blumenwiese_poly.crc2.stroke();
            Blumenwiese_poly.crc2.restore();
            // antennaes
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.moveTo(-3, -8);
            Blumenwiese_poly.crc2.lineTo(-7, -13);
            Blumenwiese_poly.crc2.stroke();
            Blumenwiese_poly.crc2.beginPath();
            Blumenwiese_poly.crc2.moveTo(3, -8);
            Blumenwiese_poly.crc2.lineTo(7, -13);
            Blumenwiese_poly.crc2.stroke();
            Blumenwiese_poly.crc2.restore();
        }
    }
    Blumenwiese_poly.Bee = Bee;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=Bee.js.map