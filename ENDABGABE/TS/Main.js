"use strict";
var Fussball;
(function (Fussball) {
    Fussball.people = [];
    Fussball.stop = false;
    Fussball.scoreTeam1 = 0;
    Fussball.scoreTeam2 = 0;
    let startButton;
    let formData;
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        // install event listener on start button
        startButton = document.querySelector("#startbutton");
        startButton.addEventListener("click", handleStart);
    }
    function handleStart(_event) {
        // hide intro text, form, instructions, and start button by pressing start
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
        // save all form values in variables
        formData = new FormData(document.forms[0]);
        // team 1
        let color1 = formData.get("ColorTeam1")?.toString();
        let speedMax1 = Number(formData.get("SliderSpeed1Max"));
        let speedMin1 = Number(formData.get("SliderSpeed1Min"));
        let precisionMax1 = Number(formData.get("SliderPrecision1Max"));
        let precisionMin1 = Number(formData.get("SliderPrecision1Min"));
        // team 2
        let color2 = formData.get("ColorTeam2")?.toString();
        let speedMax2 = Number(formData.get("SliderSpeed2Max"));
        let speedMin2 = Number(formData.get("SliderSpeed2Min"));
        let precisionMax2 = Number(formData.get("SliderPrecision2Max"));
        let precisionMin2 = Number(formData.get("SliderPrecision2Min"));
        // display team colors in info div
        let circleTeam1 = document.getElementById("team1");
        circleTeam1.style.backgroundColor = color1;
        let circleTeam2 = document.getElementById("team2");
        circleTeam2.style.backgroundColor = color2;
        Fussball.ball = new Fussball.Ball();
        // create teams with form values
        createTeam1(color1, speedMax1, speedMin1, precisionMax1, precisionMin1);
        createTeam2(color2, speedMax2, speedMin2, precisionMax2, precisionMin2);
        createReferees();
        Fussball.canvas.addEventListener("click", shootBall);
        Fussball.canvas.addEventListener("click", clickedPerson); // shift + click
        // trackScore(); // wann aufrufen?? funktioniert im Prinzip
        animate();
    }
    function createReferees() {
        Fussball.people.push(new Fussball.AssistantReferee(new Fussball.Vector(25, 625)));
        Fussball.people.push(new Fussball.AssistantReferee(new Fussball.Vector(975, 25)));
        Fussball.people.push(new Fussball.Referee(new Fussball.Vector(500, 625)));
    }
    function createTeam1(_color, _speedMax, _speedMin, _precisionMax, _precisionMin) {
        let positionsTeam1 = [[25, 325], [200, 100], [200, 550], [400, 50], [400, 600], [350, 325], [550, 125], [550, 525], [850, 175], [850, 475], [725, 325]];
        for (let i = 0; i <= 10; i++) {
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(positionsTeam1[i][0], positionsTeam1[i][1]), _color, i + 1, _speedMin, _speedMax, _precisionMin, _precisionMax));
        }
    }
    function createTeam2(_color, _speedMax, _speedMin, _precisionMax, _precisionMin) {
        let positionsTeam1 = [[975, 325], [800, 550], [800, 100], [600, 600], [600, 50], [650, 325], [450, 525], [450, 125], [150, 475], [150, 175], [275, 325]];
        for (let i = 0; i <= 10; i++) {
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(positionsTeam1[i][0], positionsTeam1[i][1]), _color, i + 1, _speedMin, _speedMax, _precisionMin, _precisionMax));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        Fussball.crc2.clearRect(0, 0, Fussball.canvas.width, Fussball.canvas.height);
        for (let allPeople of Fussball.people) {
            if (Fussball.stop == false) // hier if (players.hitBall == false)
                allPeople.move();
            else
                allPeople.draw();
        }
        Fussball.ball.draw();
        // ball.move(_event);
    }
    function shootBall(_event) {
        if (_event.shiftKey == false) {
            // HALIS
            let rect = Fussball.canvas.getBoundingClientRect();
            let x = _event.clientX - rect.left;
            let y = _event.clientY - rect.top;
            Fussball.ball.shot(new Fussball.Vector(x, y));
            Fussball.stop = false;
        }
        // ENDE HALIS
    }
    // register shift+click on a player to display player info - Jirka - eiaSteroids
    function clickedPerson(_event) {
        if (_event.shiftKey) {
            let hotspot = new Fussball.Vector(_event.clientX - Fussball.crc2.canvas.offsetLeft, _event.clientY - Fussball.crc2.canvas.offsetTop);
            let personClicked = getClickedPerson(hotspot);
            console.log(personClicked);
            if (personClicked)
                displayInfo(personClicked);
        }
    }
    function getClickedPerson(_hotspot) {
        for (let person of Fussball.people) {
            if (person.isClicked(_hotspot))
                return person;
        }
        return null;
    }
    function displayInfo(_player) {
        // bei click und shift - aktuell bei CLICK
        let infoTest = document.getElementById("infoNumber");
        infoTest.innerHTML = "<b>TEST:</b> " + _player.hitRadius;
        // let infoTeam: HTMLElement = <HTMLElement>document.getElementById("infoTeam");
        // infoTeam.style.backgroundColor = _player.color;
        // let infoPosition: HTMLElement = <HTMLElement>document.getElementById("infoPosition");
        // infoPosition.innerHTML = "<b>Position:</b> " + _player.gamePosition;
        // let infoNumber: HTMLElement = <HTMLElement>document.getElementById("infoNumber");
        // infoNumber.innerHTML = "<b>Trikotnummer:</b> " + _player.shirtNumber;
        // let infoSpeed: HTMLElement = <HTMLElement>document.getElementById("infoSpeed");
        // infoSpeed.innerHTML = "<b>Geschwindigkeit:</b> " + _player.speed;
        // let infoPrecision: HTMLElement = <HTMLElement>document.getElementById("infoNumber");
        // infoPrecision.innerHTML = "<b>Präzision:</b> " + _player.precision;
    }
    // function trackScore(): void {
    //     if (ball.position.x == 25) { // so score doesnt keep going up!? - will still happen if called from animation method
    //         if (ball.position.y >= 250 && ball.position.y <= 400) {
    //             // console.log("scoreTeam2");
    //             scoreTeam1++;
    //             let team1Score: HTMLElement = <HTMLElement>document.getElementById("scoreTeam1");
    //             team1Score.innerHTML = scoreTeam1.toString();
    //         }
    //     }
    //     if (ball.position.x == 975) {
    //         if (ball.position.y >= 250 && ball.position.y <= 400) {
    //             // console.log("scoreTeam2");
    //             scoreTeam2++;
    //             let team2Score: HTMLElement = <HTMLElement>document.getElementById("scoreTeam1");
    //             team2Score.innerHTML = scoreTeam2.toString();
    //         }
    //     }
    // }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    Fussball.randomNumber = randomNumber;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Main.js.map