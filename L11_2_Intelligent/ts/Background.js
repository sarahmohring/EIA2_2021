"use strict";
var BlumenwieseInt;
(function (BlumenwieseInt) {
    class Background {
        draw() {
            let horizon = BlumenwieseInt.canvas.height * 0.38;
            // sky color
            let gradientSky = BlumenwieseInt.crc2.createLinearGradient(0, 0, 0, horizon);
            gradientSky.addColorStop(0, "skyblue");
            gradientSky.addColorStop(1, "white");
            BlumenwieseInt.crc2.fillStyle = gradientSky;
            BlumenwieseInt.crc2.fillRect(0, 0, BlumenwieseInt.canvas.width, horizon);
            // meadow color
            let gradientMeadow = BlumenwieseInt.crc2.createLinearGradient(0, horizon, 0, BlumenwieseInt.canvas.height);
            gradientMeadow.addColorStop(0, "darkolivegreen");
            gradientMeadow.addColorStop(1, "greenyellow");
            BlumenwieseInt.crc2.fillStyle = gradientMeadow;
            BlumenwieseInt.crc2.fillRect(0, horizon, BlumenwieseInt.canvas.width, BlumenwieseInt.canvas.height);
        }
    }
    BlumenwieseInt.Background = Background;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Background.js.map