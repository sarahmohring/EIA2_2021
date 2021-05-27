"use strict";
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
    class Background {
        draw() {
            let horizon = Blumenwiese_obj.canvas.height * 0.38;
            // sky color
            let gradientSky = Blumenwiese_obj.crc2.createLinearGradient(0, 0, 0, horizon);
            gradientSky.addColorStop(0, "skyblue");
            gradientSky.addColorStop(1, "white");
            Blumenwiese_obj.crc2.fillStyle = gradientSky;
            Blumenwiese_obj.crc2.fillRect(0, 0, Blumenwiese_obj.canvas.width, horizon);
            // meadow color
            let gradientMeadow = Blumenwiese_obj.crc2.createLinearGradient(0, horizon, 0, Blumenwiese_obj.canvas.height);
            gradientMeadow.addColorStop(0, "darkolivegreen");
            gradientMeadow.addColorStop(1, "greenyellow");
            Blumenwiese_obj.crc2.fillStyle = gradientMeadow;
            Blumenwiese_obj.crc2.fillRect(0, horizon, Blumenwiese_obj.canvas.width, Blumenwiese_obj.canvas.height);
        }
    }
    Blumenwiese_obj.Background = Background;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=Background.js.map