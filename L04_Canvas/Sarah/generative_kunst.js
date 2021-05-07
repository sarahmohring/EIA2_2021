"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    window.addEventListener("load", fillCanvas);
    let canvas;
    let crc2;
    function fillCanvas(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        //lines
        let colorLines = ["aqua", "teal", "aquamarine"];
        for (let i = 0; i < colorLines.length; i++)
            for (let index = 0; index < 200; index++) {
                let x = Math.floor(Math.random() * Math.floor(canvas.width));
                let y = Math.floor(Math.random() * Math.floor(canvas.height));
                let z = Math.floor(Math.random() * Math.floor(canvas.width));
                let a = Math.floor(Math.random() * Math.floor(canvas.height));
                crc2.beginPath();
                crc2.strokeStyle = colorLines[i];
                crc2.moveTo(x, y);
                crc2.lineTo(z, a);
                crc2.closePath();
                crc2.stroke();
            }
        // circles
        let colorCircles = ["orange", "darkgoldenrod", "gold"];
        for (let i = 0; i < colorCircles.length; i++)
            for (let index = 0; index < 40; index++) {
                crc2.beginPath();
                crc2.arc(Math.floor(Math.random() * (canvas.width) + 1), Math.floor(Math.random() * (canvas.height) + 1), Math.floor(Math.random() * (50) + 1), 0, 3 * Math.PI);
                crc2.stroke();
                crc2.closePath();
                crc2.fillStyle = colorCircles[i];
                crc2.fill();
            }
        let newCanvas = document.querySelector("button");
        newCanvas.addEventListener("click", fillCanvas);
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=generative_kunst.js.map