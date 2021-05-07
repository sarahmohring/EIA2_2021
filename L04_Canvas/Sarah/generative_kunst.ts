namespace GenerativeKunst {

    window.addEventListener("load", fillCanvas);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function fillCanvas(_event: Event): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        crc2.clearRect(0, 0, canvas.width, canvas.height);

        //lines
        let colorLines: string[] = ["aqua", "teal", "aquamarine"];

        for (let i: number = 0; i < colorLines.length; i++)
            for (let index: number = 0; index < 200; index++) {
                let x: number = Math.floor(Math.random() * Math.floor(canvas.width));
                let y: number = Math.floor(Math.random() * Math.floor(canvas.height));
                let z: number = Math.floor(Math.random() * Math.floor(canvas.width));
                let a: number = Math.floor(Math.random() * Math.floor(canvas.height));

                crc2.beginPath();
                crc2.strokeStyle = colorLines[i];
                crc2.moveTo(x, y);
                crc2.lineTo(z, a);
                crc2.closePath();
                crc2.stroke();
            }

        // circles

        let colorCircles: string[] = ["orange", "darkgoldenrod", "gold"];

        for (let i: number = 0; i < colorCircles.length; i++)
            for (let index: number = 0; index < 40; index++) {
        
                crc2.beginPath();
                crc2.arc(Math.floor(Math.random() * (canvas.width) + 1), Math.floor(Math.random() * (canvas.height) + 1), Math.floor(Math.random() * (50) + 1), 0, 3 * Math.PI);
                crc2.stroke();
                crc2.closePath();
                crc2.fillStyle = colorCircles[i];
                crc2.fill();
            }

        let newCanvas: HTMLElement = <HTMLElement>document.querySelector("button")!;
        newCanvas.addEventListener("click", fillCanvas);
    }
}