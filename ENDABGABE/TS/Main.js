"use strict";
var Fussball;
(function (Fussball) {
    let startButton;
    let formData;
    let people = [];
    let ball;
    let imageData;
    let clicked = false;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // install event listener on start button
        startButton = document.querySelector("#startbutton");
        startButton.addEventListener("click", handleStart);
    }
    function handleStart(_event) {
        // hide intro text, form, instructions, and start button after pressing start
        let flexDiv = document.querySelector("#flexContainer");
        let flexCanvas = document.querySelector("#flexCanvas");
        let spielstand = document.querySelector("#spielstand");
        let text = document.getElementById("text");
        flexDiv.style.display = "none";
        startButton.style.display = "none";
        text.style.display = "none";
        // change title and body style
        let title = document.getElementById("title");
        title.innerHTML = "Jogis Fußball-Simulator";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        // display canvas and game info div
        Fussball.canvas = document.querySelector("canvas");
        Fussball.crc2 = Fussball.canvas.getContext("2d");
        flexCanvas.style.display = "flex";
        Fussball.canvas.style.display = "initial";
        spielstand.style.display = "initial";
        // static canvas size fits football field png (10px = 1m)
        Fussball.canvas.width = 1000;
        Fussball.canvas.height = 650;
        handleForm();
    }
    function handleForm() {
        // Form auswerten
        formData = new FormData(document.forms[0]);
        let color1 = formData.get("ColorTeam1")?.toString();
        let color2 = formData.get("ColorTeam2")?.toString();
        // sinnvolle Werte???
        let speedMax1 = Number(formData.get("SliderSpeed1Max"));
        let speedMin1 = Number(formData.get("SliderSpeed1Min"));
        let precisionMax1 = Number(formData.get("SliderPrecision1Max"));
        let precisionMin1 = Number(formData.get("SliderPrecision1Min"));
        let speedMax2 = Number(formData.get("SliderSpeed2Max"));
        let speedMin2 = Number(formData.get("SliderSpeed2Min"));
        let precisionMax2 = Number(formData.get("SliderPrecision2Max"));
        let precisionMin2 = Number(formData.get("SliderPrecision2Min"));
        console.log(speedMax1, speedMin1, precisionMax1, precisionMax2);
        ball = new Fussball.Ball(); // ???
        Fussball.canvas.addEventListener("click", shoot);
        createReferees();
        createTeam1(1, color1, speedMax1, speedMin1, precisionMax1, precisionMin1);
        createTeam2(2, color2, speedMax2, speedMin2, precisionMax2, precisionMin2);
        animate();
    }
    function createReferees() {
        people.push(new Fussball.AssistantReferee(new Fussball.Vector(25, 625)));
        people.push(new Fussball.AssistantReferee(new Fussball.Vector(975, 25)));
        people.push(new Fussball.Referee(new Fussball.Vector(500, 625)));
    }
    function createTeam1(_team /* Teamzugehörigkeit */, _color, _speedMax, _speedMin, _precisionMax, _precisionMin) {
        // Torwart
        people.push(new Fussball.Player(new Fussball.Vector(25, 325), _color, 1));
        // Innenverteidiger links
        people.push(new Fussball.Player(new Fussball.Vector(200, 100), _color, 2));
        // Innenverteidiger rechts
        people.push(new Fussball.Player(new Fussball.Vector(200, 550), _color, 3));
        // Außenverteidiger links
        people.push(new Fussball.Player(new Fussball.Vector(400, 50), _color, 4));
        // Außenverteidiger rechts
        people.push(new Fussball.Player(new Fussball.Vector(400, 600), _color, 5));
        // Mittelverteidiger
        people.push(new Fussball.Player(new Fussball.Vector(350, 325), _color, 6));
        // Mittelfeldspieler links
        people.push(new Fussball.Player(new Fussball.Vector(550, 125), _color, 7));
        // Mittelfeldspieler rechts
        people.push(new Fussball.Player(new Fussball.Vector(550, 525), _color, 8));
        // Außenstürmer links
        people.push(new Fussball.Player(new Fussball.Vector(850, 175), _color, 9));
        // Außenstürmer rechts
        people.push(new Fussball.Player(new Fussball.Vector(850, 475), _color, 10));
        // Mittelstürmer
        people.push(new Fussball.Player(new Fussball.Vector(725, 325), _color, 11));
        // for-Schleife random velocity & precision -> nur Team 1 ! oder Trikotnummer (dann Team 2 Nummern 12+)
    }
    function createTeam2(_team /* Teamzugehörigkeit */, _color, _speedMax, _speedMin, _precisionMax, _precisionMin) {
        // Torwart
        people.push(new Fussball.Player(new Fussball.Vector(975, 325), _color, 1));
        // Innenverteidiger links
        people.push(new Fussball.Player(new Fussball.Vector(800, 550), _color, 2));
        // Innenverteidiger rechts
        people.push(new Fussball.Player(new Fussball.Vector(800, 100), _color, 3));
        // Außenverteidiger links
        people.push(new Fussball.Player(new Fussball.Vector(600, 600), _color, 4));
        // Außenverteidiger rechts
        people.push(new Fussball.Player(new Fussball.Vector(600, 50), _color, 5));
        // Mittelverteidiger
        people.push(new Fussball.Player(new Fussball.Vector(650, 325), _color, 6));
        // Mittelfeldspieler links
        people.push(new Fussball.Player(new Fussball.Vector(450, 525), _color, 7));
        // Mittelfeldspieler rechts
        people.push(new Fussball.Player(new Fussball.Vector(450, 125), _color, 8));
        // Außenstürmer links
        people.push(new Fussball.Player(new Fussball.Vector(150, 475), _color, 9));
        // Außenstürmer rechts
        people.push(new Fussball.Player(new Fussball.Vector(150, 175), _color, 10));
        // Mittelstürmer
        people.push(new Fussball.Player(new Fussball.Vector(275, 325), _color, 11));
    }
    function animate() {
        // if (/**/ )  hier abfragen ob gerade ein Spieler am Ball ist - wenn nein, dann animieren, 
        // wenn doch dann Animation aussetzen und stattdessen auf Klick warten (click listener installieren?)
        // währenddessen alle Objekte weiter an ihrer Position malen?
        // oder Moveables.velocity = 0,0 ?
        requestAnimationFrame(animate);
        Fussball.crc2.clearRect(0, 0, Fussball.canvas.width, Fussball.canvas.height);
        ball.draw();
        // canvas.addEventListener("click", shoot);
        for (let allPeople of people) {
            allPeople.move();
        }
        imageData = Fussball.crc2.getImageData(0, 0, Fussball.canvas.width, Fussball.canvas.height); // aktuellen Stand speichern, um während Schuss anzuzeigen
    }
    function shoot(_event) {
        clicked = false; // wenn player.position = ball.position --> clicked = true;
        // // reguläre Animation stoppt NOCH NICHT
        // // requestAnimationFrame(shoot); -> geht nicht wegen _event
        // // update(_timeslice??) mit setInterval
        // // cancelAnimationFrame();
        // crc2.clearRect(0, 0, canvas.width, canvas.height);
        // crc2.putImageData(imageData, 0, 0);
        // ball.move(_event);
        // // animate();
    }
    function getInfo() {
        // bei click und shift
        // check welcher Player gerade angeklickt wurde s. Asteroids Code (durch allPeople Array Positions durch)
    }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    Fussball.randomNumber = randomNumber;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Main.js.map