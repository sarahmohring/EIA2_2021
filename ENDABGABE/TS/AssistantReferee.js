"use strict";
var Fussball;
(function (Fussball) {
    class AssistantReferee extends Fussball.Person {
        constructor() {
            super(...arguments);
            this.velocity = new Fussball.Vector(0.5, 0);
        }
        move() {
            // assistant referees can move horizontally along the outer lines
            if (this.position.x < 25 || this.position.x > 975)
                this.velocity.x = -this.velocity.x;
            this.position.x += this.velocity.x;
            this.draw();
        }
        draw() {
            Fussball.crc2.save();
            Fussball.crc2.translate(this.position.x, this.position.y);
            // colors
            Fussball.crc2.fillStyle = "#A6A6A6";
            Fussball.crc2.strokeStyle = "#7F7F7F";
            Fussball.crc2.lineWidth = 5;
            // body
            Fussball.crc2.beginPath();
            Fussball.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            Fussball.crc2.stroke();
            Fussball.crc2.fill();
            Fussball.crc2.restore();
        }
    }
    Fussball.AssistantReferee = AssistantReferee;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=AssistantReferee.js.map