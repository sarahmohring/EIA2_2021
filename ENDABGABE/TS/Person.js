"use strict";
var Fussball;
(function (Fussball) {
    class Person {
        constructor(_position, _velocity) {
            this.position = _position;
            if (_velocity)
                this.velocity = _velocity;
        }
    }
    Fussball.Person = Person;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Person.js.map