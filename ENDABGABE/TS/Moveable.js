"use strict";
var Fussball;
(function (Fussball) {
    class Moveable {
        constructor(_position, _velocity) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
        }
    }
    Fussball.Moveable = Moveable;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Moveable.js.map