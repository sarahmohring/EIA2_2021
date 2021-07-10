"use strict";
var Fussball;
(function (Fussball) {
    class Person {
        constructor(_position) {
            this.expendable = false; // warum nicht bei Player möglich
            this.position = _position;
            this.startPosition = _position.copy();
        }
    }
    Fussball.Person = Person;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Person.js.map