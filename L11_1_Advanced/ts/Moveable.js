"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Moveable {
        constructor(_position, _velocity, _scale) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
            if (_scale)
                this.scale = _scale;
        }
        update() {
            if (this.position.x < 0)
                this.position.x += BlumenwieseAdv.canvas.width;
            if (this.position.y < 0)
                this.position.y += BlumenwieseAdv.canvas.height;
            if (this.position.x > BlumenwieseAdv.canvas.width)
                this.position.x -= BlumenwieseAdv.canvas.width;
            if (this.position.y > BlumenwieseAdv.canvas.height)
                this.position.y -= BlumenwieseAdv.canvas.height;
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.draw();
        }
    }
    BlumenwieseAdv.Moveable = Moveable;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Moveable.js.map