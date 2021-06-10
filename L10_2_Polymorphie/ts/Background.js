"use strict";
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    class Background {
        draw() {
            let horizon = Blumenwiese_poly.canvas.height * 0.38;
            // sky color
            let gradientSky = Blumenwiese_poly.crc2.createLinearGradient(0, 0, 0, horizon);
            gradientSky.addColorStop(0, "skyblue");
            gradientSky.addColorStop(1, "white");
            Blumenwiese_poly.crc2.fillStyle = gradientSky;
            Blumenwiese_poly.crc2.fillRect(0, 0, Blumenwiese_poly.canvas.width, horizon);
            // meadow color
            let gradientMeadow = Blumenwiese_poly.crc2.createLinearGradient(0, horizon, 0, Blumenwiese_poly.canvas.height);
            gradientMeadow.addColorStop(0, "darkolivegreen");
            gradientMeadow.addColorStop(1, "greenyellow");
            Blumenwiese_poly.crc2.fillStyle = gradientMeadow;
            Blumenwiese_poly.crc2.fillRect(0, horizon, Blumenwiese_poly.canvas.width, Blumenwiese_poly.canvas.height);
        }
    }
    Blumenwiese_poly.Background = Background;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=Background.js.map