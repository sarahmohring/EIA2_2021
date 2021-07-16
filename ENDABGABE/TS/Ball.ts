namespace Fussball {

    export class Ball extends Moveable {

        public position: Vector = new Vector(canvas.width / 2, canvas.height / 2); // center of the pitch
        public newPosition: Vector = this.position;
        public shooterPrecision: number;

        public move(): void {

            // move towards clicked position (slowing down at the end)
            let distance: Vector = Vector.getDifference(this.newPosition, this.position);
            distance.scale(0.01);
            this.position.add(distance);
            this.draw();

            // track score (team 1 scores)
            if (this.position.x >= 974.9 && out == false) {
                if (this.position.y >= 240 && this.position.y <= 410) {
                    scoreTeam1++;
                    let team1Score: HTMLElement = <HTMLElement>document.getElementById("scoreTeam1");
                    team1Score.innerHTML = scoreTeam1.toString();
                    let info: HTMLElement = <HTMLElement>document.getElementById("goalOrOut");
                    info.innerHTML = "<b>TOR!</b>";

                    let audio: HTMLAudioElement = <HTMLAudioElement>document.getElementById("cheer");
                    audio.play();
                }
            }

            // track score (team 2 scores)
            if (this.position.x <= 25.1 && out == false) {
                if (this.position.y >= 240 && this.position.y <= 410) {
                    scoreTeam2++;
                    let team2Score: HTMLElement = <HTMLElement>document.getElementById("scoreTeam2");
                    team2Score.innerHTML = scoreTeam2.toString();
                    let info: HTMLElement = <HTMLElement>document.getElementById("goalOrOut");
                    info.innerHTML = "<b>TOR!</b>";

                    let audio: HTMLAudioElement = <HTMLAudioElement>document.getElementById("cheer");
                    audio.play();
                }
            }
        }

        public shot(_position: Vector): void {
            if (stop) {
                let distance: Vector = Vector.getDifference(_position, this.position);
                // destination further away and player precision lower: ball is more likely to go to a wrong position
                _position.add(new Vector(randomNumber(0.5 * (-distance.length) * (1 - this.shooterPrecision), 0.5 * distance.length * (1 - this.shooterPrecision)), randomNumber(0.5 * (-distance.length) * (1 - this.shooterPrecision), 0.5 * distance.length * (1 - this.shooterPrecision))));
                this.newPosition = _position.copy();
            }
        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // colors
            crc2.fillStyle = "#FFFFFF";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 3;

            // ball
            crc2.beginPath();
            crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();

            // black bits on the ball
            crc2.beginPath();
            crc2.rect(-7, -5, 4, 4);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(-7, 2, 4, 4);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(-3, -3, 6, 6);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(3, -5, 4, 4);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.rect(3, 2, 4, 4);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }
    }
}