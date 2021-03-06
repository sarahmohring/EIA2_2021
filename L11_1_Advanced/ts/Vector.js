"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    BlumenwieseAdv.Vector = Vector;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Vector.js.map