"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    class Moveable {
        constructor(_position, _velocity, _scale) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
            if (_scale)
                this.scale = _scale;
        }
    }
    BlumenwieseInt.Moveable = Moveable;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Moveable.js.map