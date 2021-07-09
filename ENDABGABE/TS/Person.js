"use strict";
var Fussball;
(function (Fussball) {
    class Person {
        constructor(_position) {
            this.expendable = false;
            this.position = _position;
            this.startPosition = _position.copy();
        }
        // register if person has been clicked
        isClicked(_hotspot) {
            let hitsize = 12.5;
            let difference = new Fussball.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    Fussball.Person = Person;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Person.js.map