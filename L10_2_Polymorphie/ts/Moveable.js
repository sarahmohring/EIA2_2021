"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class Moveable {
        constructor(_position, _velocity, _scale) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
            if (_scale)
                this.scale = _scale;
        }
        draw() {
            // empty method
        }
        update() {
            if (this.position.x < 0)
                this.position.x += Blumenwiese_poly.canvas.width;
            if (this.position.y < 0)
                this.position.y += Blumenwiese_poly.canvas.height;
            if (this.position.x > Blumenwiese_poly.canvas.width)
                this.position.x -= Blumenwiese_poly.canvas.width;
            if (this.position.y > Blumenwiese_poly.canvas.height)
                this.position.y -= Blumenwiese_poly.canvas.height;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
    }
    Blumenwiese_poly.Moveable = Moveable;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=Moveable.js.map