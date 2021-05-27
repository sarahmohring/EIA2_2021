"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
    class Cloud {
        constructor(_position) {
            this.velocity = new Blumenwiese_obj.Vector(0.3, 0);
            this.position = _position;
        }
        draw() {
            let gradient = Blumenwiese_obj.crc2.createRadialGradient(0, 0, 0, 0, 0, 20);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0.2)");
            Blumenwiese_obj.crc2.fillStyle = gradient;
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.save();
            Blumenwiese_obj.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_obj.crc2.beginPath();
            Blumenwiese_obj.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.translate(10, 5);
            Blumenwiese_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.translate(35, 7);
            Blumenwiese_obj.crc2.arc(0, 0, 25, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.translate(20, 10);
            Blumenwiese_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.translate(-20, 10);
            Blumenwiese_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.translate(-30, 5);
            Blumenwiese_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.translate(-40, 0);
            Blumenwiese_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.translate(20, -5);
            Blumenwiese_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.translate(-10, -10);
            Blumenwiese_obj.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Blumenwiese_obj.crc2.fill();
            Blumenwiese_obj.crc2.restore();
        }
        update() {
            if (this.position.x < 0)
                this.position.x += Blumenwiese_obj.canvas.width;
            if (this.position.x > Blumenwiese_obj.canvas.width)
                this.position.x -= Blumenwiese_obj.canvas.width;
            this.position.x += this.velocity.x;
            this.draw();
        }
    }
    Blumenwiese_obj.Cloud = Cloud;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=Cloud.js.map