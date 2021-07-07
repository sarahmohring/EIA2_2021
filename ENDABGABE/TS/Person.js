"use strict";
var Fussball;
(function (Fussball) {
    class Person {
        constructor(_position, _velocity) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
        }
        // register if player has been clicked
        isClicked(_hotspot) {
            let hitsize = 12.5;
            let difference = new Fussball.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    Fussball.Person = Person;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Person.js.map