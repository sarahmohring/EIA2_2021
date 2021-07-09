"use strict";
var Fussball;
(function (Fussball) {
    Fussball.people = [];
    Fussball.stop = false;
    Fussball.scoreTeam1 = 0;
    Fussball.scoreTeam2 = 0;
    let startButton;
    let formData;
    let pressedKey;
    let extraPlayer1 = 11;
    let color1;
    let speedMax1;
    let speedMin1;
    let precisionMax1;
    let precisionMin1;
    let extraPlayer2 = 11;
    let color2;
    let speedMax2;
    let speedMin2;
    let precisionMax2;
    let precisionMin2;
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
        color1 = formData.get("ColorTeam1")?.toString();
        speedMax1 = Number(formData.get("SliderSpeed1Max"));
        speedMin1 = Number(formData.get("SliderSpeed1Min"));
        precisionMax1 = Number(formData.get("SliderPrecision1Max"));
        precisionMin1 = Number(formData.get("SliderPrecision1Min"));
        // team 2
        color2 = formData.get("ColorTeam2")?.toString();
        speedMax2 = Number(formData.get("SliderSpeed2Max"));
        speedMin2 = Number(formData.get("SliderSpeed2Min"));
        precisionMax2 = Number(formData.get("SliderPrecision2Max"));
        precisionMin2 = Number(formData.get("SliderPrecision2Min"));
        // display team colors in info div
        let circleTeam1 = document.getElementById("team1");
        circleTeam1.style.backgroundColor = color1;
        let circleTeam2 = document.getElementById("team2");
        circleTeam2.style.backgroundColor = color2;
        Fussball.ball = new Fussball.Ball();
        createTeams();
        createReferees();
        // event listeners for interaction with the players
        Fussball.canvas.addEventListener("click", shootBall); // ctrl+click
        document.addEventListener("keyup", pressKey); // Problem: funktioniert nach dem 2. Klick / zeitverzögert? // wenn gedrückt - Maus funktioniert nicht mehr
        Fussball.canvas.addEventListener("click", addNewPlayer); // a+click or y+click
        Fussball.canvas.addEventListener("click", clickedPerson); // shift+click (info) or alt+click (delete)
        animate();
    }
    function createReferees() {
        Fussball.people.push(new Fussball.AssistantReferee(new Fussball.Vector(25, 625)));
        Fussball.people.push(new Fussball.AssistantReferee(new Fussball.Vector(975, 25)));
        Fussball.people.push(new Fussball.Referee(new Fussball.Vector(500, 625)));
    }
    function createTeams() {
        let positionsTeam1 = [[25, 325], [200, 100], [200, 550], [400, 50], [400, 600], [350, 325], [550, 125], [550, 525], [850, 175], [850, 475], [725, 325]];
        for (let i = 0; i <= 10; i++) {
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(positionsTeam1[i][0], positionsTeam1[i][1]), color1, i + 1, speedMin1, speedMax1, precisionMin1, precisionMax1));
        }
        let positionsTeam2 = [[975, 325], [800, 550], [800, 100], [600, 600], [600, 50], [650, 325], [450, 525], [450, 125], [150, 475], [150, 175], [275, 325]];
        for (let i = 0; i <= 10; i++) {
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(positionsTeam2[i][0], positionsTeam2[i][1]), color2, i + 1, speedMin2, speedMax2, precisionMin2, precisionMax2));
        }
    }
    function pressKey(_event) {
        pressedKey = _event.key;
    }
    function addNewPlayer(_event) {
        if (pressedKey == "a" && _event.ctrlKey == false && _event.shiftKey == false && _event.altKey == false) { // a+click - new player for Team 1
            extraPlayer1++;
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(_event.offsetX, _event.offsetY), color1, extraPlayer1, speedMin1, speedMax1, precisionMin1, precisionMax1));
        }
        if (pressedKey == "y" && _event.ctrlKey == false && _event.shiftKey == false && _event.altKey == false) { // y+click - new player for Team 2
            extraPlayer2++;
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(_event.offsetX, _event.offsetY), color2, extraPlayer2, speedMin2, speedMax2, precisionMin2, precisionMax2));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        Fussball.crc2.clearRect(0, 0, Fussball.canvas.width, Fussball.canvas.height);
        if (Fussball.ball.position.x >= 0 && Fussball.ball.position.x <= 1000 && Fussball.ball.position.y >= 0 && Fussball.ball.position.y <= 650) {
            if (Fussball.stop == false) {
                Fussball.ball.move();
            }
            else
                Fussball.ball.draw();
        }
        else { // if ball leaves the pitch - reset to center;
            Fussball.ball.position = new Fussball.Vector(Fussball.canvas.width / 2, Fussball.canvas.height / 2);
            Fussball.ball.newPosition = new Fussball.Vector(Fussball.canvas.width / 2, Fussball.canvas.height / 2);
        }
        for (let allPeople of Fussball.people) {
            if (Fussball.stop == false) // when no player is at the ball position
                allPeople.move();
            else
                allPeople.draw(); // "freeze frame"
        }
        deleteExpendables();
        trackScore();
    }
    function deleteExpendables() {
        for (let i = Fussball.people.length - 1; i >= 0; i--) {
            if (Fussball.people[i].expendable && Fussball.people[i] instanceof Fussball.Player) // can't delete referees
                Fussball.people.splice(i, 1);
        }
    }
    function trackScore() {
        if (Fussball.ball.position.x <= 25.1 && Fussball.ball.position.x >= 25) { // doesn't work perfectly yet!
            if (Fussball.ball.position.y >= 250 && Fussball.ball.position.y <= 400) {
                Fussball.scoreTeam1++;
                let team1Score = document.getElementById("scoreTeam1");
                team1Score.innerHTML = Fussball.scoreTeam1.toString();
                // play cheering sound
                let audio = document.getElementById("cheer");
                audio.play();
                setTimeout(afterGoal, 3000);
            }
        }
        if (Fussball.ball.position.x <= 975.1 && Fussball.ball.position.x >= 975) {
            if (Fussball.ball.position.y >= 250 && Fussball.ball.position.y <= 400) {
                Fussball.scoreTeam2++;
                let team2Score = document.getElementById("scoreTeam2");
                team2Score.innerHTML = Fussball.scoreTeam2.toString();
                // play cheering sound
                let audio = document.getElementById("cheer");
                audio.play();
                setTimeout(afterGoal, 3000);
            }
        }
        function afterGoal() {
            Fussball.ball.position = new Fussball.Vector(Fussball.canvas.width / 2, Fussball.canvas.height / 2);
            Fussball.ball.newPosition = new Fussball.Vector(Fussball.canvas.width / 2, Fussball.canvas.height / 2);
            for (let allPeople of Fussball.people) {
                allPeople.position = allPeople.startPosition;
            }
        }
    }
    function shootBall(_event) {
        if (_event.ctrlKey) {
            Fussball.ball.shot(new Fussball.Vector(_event.offsetX, _event.offsetY));
            Fussball.stop = false;
            // while ball is rolling and no player has reached it yet
            let currentTeam = document.getElementById("currentPlayer");
            currentTeam.style.backgroundColor = "white";
            currentTeam.innerHTML = "kein Spieler";
        }
    }
    // interact with players via mouse and keyboard
    function clickedPerson(_event) {
        // PROBLEM: Player-Eigenschaften nicht über Person abrufbar; Schiedsrichter können auch gelöscht werden
        if (_event.shiftKey) { // shift+click - display player info
            let hotspot = new Fussball.Vector(_event.clientX - Fussball.crc2.canvas.offsetLeft, _event.clientY - Fussball.crc2.canvas.offsetTop);
            let personClicked = getClickedPerson(hotspot);
            console.log(personClicked);
            if (personClicked)
                displayInfo(personClicked);
        }
        if (_event.altKey) { // alt+click - delete player
            let hotspot = new Fussball.Vector(_event.clientX - Fussball.crc2.canvas.offsetLeft, _event.clientY - Fussball.crc2.canvas.offsetTop);
            let personClicked = getClickedPerson(hotspot);
            if (personClicked)
                personClicked.expendable = true;
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
        let infoTest = document.getElementById("infoNumber");
        infoTest.innerHTML = "<b>TEST:</b> " + _player.startPosition.x;
        // let infoTeam: HTMLElement = <HTMLElement>document.getElementById("infoTeam");
        // infoTeam.style.backgroundColor = _player.color;
        // let infoPosition: HTMLElement = <HTMLElement>document.getElementById("infoPosition");
        // infoPosition.innerHTML = "<b>Position:</b> " + _player.gamePosition;
        // let infoNumber: HTMLElement = <HTMLElement>document.getElementById("infoNumber");
        // infoNumber.innerHTML = "<b>Trikotnummer:</b> " + _player.shirtNumber;
        // let infoSpeed: HTMLElement = <HTMLElement>document.getElementById("infoSpeed"); // round number
        // infoSpeed.innerHTML = "<b>Geschwindigkeit:</b> " + _player.speed;
        // let infoPrecision: HTMLElement = <HTMLElement>document.getElementById("infoNumber"); // round number
        // infoPrecision.innerHTML = "<b>Präzision:</b> " + _player.precision;
    }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    Fussball.randomNumber = randomNumber;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Main.js.map