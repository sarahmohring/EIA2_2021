"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
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
    Blumenwiese_obj.Vector = Vector;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=Vector.js.map