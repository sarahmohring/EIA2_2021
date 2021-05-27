namespace Blumenwiese_obj {

    export class Background {

        draw(): void { // Jirka - Alley / modified
            
            let horizon: number = canvas.height * 0.38;

            // sky color
            let gradientSky: CanvasGradient = crc2.createLinearGradient(0, 0, 0, horizon);
            gradientSky.addColorStop(0, "skyblue");
            gradientSky.addColorStop(1, "white");

            crc2.fillStyle = gradientSky;
            crc2.fillRect(0, 0, canvas.width, horizon);

            // meadow color
            let gradientMeadow: CanvasGradient = crc2.createLinearGradient(0, horizon, 0, canvas.height);
            gradientMeadow.addColorStop(0, "darkolivegreen");
            gradientMeadow.addColorStop(1, "greenyellow");

            crc2.fillStyle = gradientMeadow;
            crc2.fillRect(0, horizon, canvas.width, canvas.height);
        }
    }
}