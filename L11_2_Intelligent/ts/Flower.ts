namespace BlumenwieseInt {

    export abstract class Flower { // abstract

        public position: Vector = new Vector((canvas.width * (randomNumber(-0.1, 1))), (canvas.height * (randomNumber(0.5, 1))));
        public occupied: boolean = false;
        public nectarAmount: number;

        constructor() {
            this.draw();
            this.nectarAmount = 1;
        }

        public fillNectar(): void {
            if (this.nectarAmount < 20)
                this.nectarAmount += 0.02;

            this.draw();
        }

        public abstract draw(): void;
    }
}