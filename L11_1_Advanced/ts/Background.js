"use strict";
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    class Background {
        draw() {
            let horizon = BlumenwieseAdv.canvas.height * 0.38;
            // sky color
            let gradientSky = BlumenwieseAdv.crc2.createLinearGradient(0, 0, 0, horizon);
            gradientSky.addColorStop(0, "skyblue");
            gradientSky.addColorStop(1, "white");
            BlumenwieseAdv.crc2.fillStyle = gradientSky;
            BlumenwieseAdv.crc2.fillRect(0, 0, BlumenwieseAdv.canvas.width, horizon);
            // meadow color
            let gradientMeadow = BlumenwieseAdv.crc2.createLinearGradient(0, horizon, 0, BlumenwieseAdv.canvas.height);
            gradientMeadow.addColorStop(0, "darkolivegreen");
            gradientMeadow.addColorStop(1, "greenyellow");
            BlumenwieseAdv.crc2.fillStyle = gradientMeadow;
            BlumenwieseAdv.crc2.fillRect(0, horizon, BlumenwieseAdv.canvas.width, BlumenwieseAdv.canvas.height);
        }
    }
    BlumenwieseAdv.Background = Background;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Background.js.map