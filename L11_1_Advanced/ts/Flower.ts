namespace BlumenwieseAdv {

    export abstract class Flower {

        protected nectarAmount: number;

        protected position: Vector = new Vector((canvas.width * (randomNumber(-0.1, 1))), (canvas.height * (randomNumber(0.5, 1))));

        constructor() {
            this.draw();
            this.nectarAmount = 0;
        }

        public fillNectar(): void {
            if (this.nectarAmount < 20)
                this.nectarAmount += 0.02;

            this.draw();
        }

        public abstract draw(): void;
    }
}