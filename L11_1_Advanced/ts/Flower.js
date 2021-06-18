"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Flower {
        constructor() {
            this.position = new BlumenwieseAdv.Vector((BlumenwieseAdv.canvas.width * (BlumenwieseAdv.randomNumber(-0.1, 1))), (BlumenwieseAdv.canvas.height * (BlumenwieseAdv.randomNumber(0.5, 1))));
            this.draw();
            this.nectarAmount = 0;
        }
        fillNectar() {
            if (this.nectarAmount < 20)
                this.nectarAmount += 0.02;
            this.draw();
        }
    }
    BlumenwieseAdv.Flower = Flower;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Flower.js.map