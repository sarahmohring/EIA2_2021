"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    class Flower {
        constructor() {
            this.position = new BlumenwieseInt.Vector((BlumenwieseInt.canvas.width * (BlumenwieseInt.randomNumber(-0.1, 1))), (BlumenwieseInt.canvas.height * (BlumenwieseInt.randomNumber(0.5, 1))));
            this.occupied = false;
            this.draw();
            this.nectarAmount = 1;
        }
        fillNectar() {
            if (this.nectarAmount < 20)
                this.nectarAmount += 0.02;
            this.draw();
        }
    }
    BlumenwieseInt.Flower = Flower;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Flower.js.map