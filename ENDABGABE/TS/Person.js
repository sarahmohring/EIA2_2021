"use strict";
var Fussball;
(function (Fussball) {
    class Person extends Fussball.Moveable {
        constructor(_position) {
            super();
            this.expendable = false; // should be in Player class but causes an error
            this.position = _position;
            this.startPosition = _position.copy();
        }
    }
    Fussball.Person = Person;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Person.js.map