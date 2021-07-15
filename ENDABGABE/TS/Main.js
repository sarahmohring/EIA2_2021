"use strict";
var Fussball;
(function (Fussball) {
    Fussball.people = [];
    Fussball.stop = false;
    Fussball.scoreTeam1 = 0;
    Fussball.scoreTeam2 = 0;
    Fussball.out = false;
    let startButton;
    let formData;
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
    let duration;
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
        // display canvas and game info div instead
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
        // game duration
        duration = Number(formData.get("StepperDuration"));
        setInterval(endGame, duration * 60 * 1000);
        // attention radius around players
        Fussball.radius = Number(formData.get("SliderRadius"));
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
        // interaction with the players: 
        // ctrl+click (shoot), shift+click (info), alt+click (delete), ctrl+shift+click / ctrl+alt+click (new Player)
        Fussball.canvas.addEventListener("click", interact);
        animate();
    }
    function createReferees() {
        Fussball.people.push(new Fussball.AssistantReferee(new Fussball.Vector(25, 625)));
        Fussball.people.push(new Fussball.AssistantReferee(new Fussball.Vector(975, 25)));
        Fussball.people.push(new Fussball.Referee(new Fussball.Vector(500, 625)));
    }
    function createTeams() {
        let positionsTeam1 = [[25, 325], [200, 100], [200, 550], [400, 50], [400, 600], [350, 325], [550, 125], [550, 525], [850, 175], [850, 475], [775, 325]];
        for (let i = 0; i <= 10; i++) {
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(positionsTeam1[i][0], positionsTeam1[i][1]), color1, i + 1, speedMin1, speedMax1, precisionMin1, precisionMax1));
        }
        let positionsTeam2 = [[975, 325], [800, 550], [800, 100], [600, 600], [600, 50], [650, 325], [450, 525], [450, 125], [150, 475], [150, 175], [225, 325]];
        for (let i = 0; i <= 10; i++) {
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(positionsTeam2[i][0], positionsTeam2[i][1]), color2, i + 1, speedMin2, speedMax2, precisionMin2, precisionMax2));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        Fussball.crc2.clearRect(0, 0, Fussball.canvas.width, Fussball.canvas.height);
        // while ball is within the lines
        if (Fussball.ball.position.x >= 25 && Fussball.ball.position.x <= 975 && Fussball.ball.position.y >= 25 && Fussball.ball.position.y <= 625) {
            if (Fussball.stop == false) {
                Fussball.ball.move();
            }
            else
                Fussball.ball.draw();
        }
        else { // if ball goes out - reset to center;
            Fussball.out = true;
            Fussball.ball.move();
            let info = document.getElementById("goalOrOut");
            if (info.innerHTML != "<b>TOR!</b>") { // so "TOR!" doesn't get overwritten
                info.innerHTML = "<b>AUS!</b>";
            }
            setTimeout(resetPitch, 2000); // Zittern wegen Animationsmethode ?!
        }
        for (let allPeople of Fussball.people) {
            if (Fussball.stop == false) // when no player is at the ball position
                allPeople.move();
            else
                allPeople.draw(); // "freeze frame"
        }
        deleteExpendables();
    }
    function deleteExpendables() {
        for (let i = Fussball.people.length - 1; i >= 0; i--) {
            if (Fussball.people[i] instanceof Fussball.Player && Fussball.people[i].expendable) // "expendable" should be a Player attribute but causes errors
                Fussball.people.splice(i, 1);
        }
    }
    function resetPitch() {
        Fussball.stop = false; // so game doesn't have to be manually restarted
        Fussball.out = false;
        // ball goes back to the center of the pitch
        Fussball.ball = new Fussball.Ball();
        // people go to their starting positions
        for (let allPeople of Fussball.people) {
            allPeople.position = allPeople.startPosition.copy();
        }
        // reset "goalOrOut" display
        let info = document.getElementById("goalOrOut");
        info.innerHTML = "<br>";
        // reset "momentan am Ball" display
        let currentTeam = document.getElementById("currentPlayer");
        currentTeam.style.backgroundColor = "white";
        currentTeam.innerHTML = "kein Spieler";
    }
    // interact with players via mouse and keyboard
    function interact(_event) {
        if (_event.ctrlKey && _event.shiftKey == false && _event.altKey == false) { // just ctrl pressed
            Fussball.ball.shot(new Fussball.Vector(_event.offsetX, _event.offsetY));
            Fussball.stop = false;
            // while ball is rolling and no player has reached it yet
            let currentTeam = document.getElementById("currentPlayer");
            currentTeam.style.backgroundColor = "white";
            currentTeam.innerHTML = "kein Spieler";
        }
        // shift+click - display player info / Jirka - eiaSteroids
        if (_event.shiftKey && _event.ctrlKey == false && _event.altKey == false) { // just shift pressed
            let hotspot = new Fussball.Vector(_event.offsetX, _event.offsetY);
            let personClicked = getClickedPerson(hotspot);
            if (personClicked)
                displayInfo(personClicked);
        }
        // alt+click - delete player / Jirka - eiaSteroids
        if (_event.altKey && _event.ctrlKey == false && _event.shiftKey == false) { // just alt pressed
            let hotspot = new Fussball.Vector(_event.offsetX, _event.offsetY);
            let personClicked = getClickedPerson(hotspot);
            if (personClicked)
                personClicked.expendable = true;
        }
        // ctrl+shift+click - new player for Team 1
        if (_event.ctrlKey && _event.shiftKey && _event.altKey == false) { // ctrl+shift pressed
            extraPlayer1++;
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(_event.offsetX, _event.offsetY), color1, extraPlayer1, speedMin1, speedMax1, precisionMin1, precisionMax1));
        }
        // ctrl+alt+click - new player for Team 2
        if (_event.ctrlKey && _event.altKey && _event.shiftKey == false) { // ctrl+alt pressed
            extraPlayer2++;
            Fussball.people.push(new Fussball.Player(new Fussball.Vector(_event.offsetX, _event.offsetY), color2, extraPlayer2, speedMin2, speedMax2, precisionMin2, precisionMax2));
        }
    }
    function getClickedPerson(_hotspot) {
        for (let person of Fussball.people) {
            if (person instanceof Fussball.Player && person.isClicked(_hotspot)) // don't select referees
                return person;
        }
        return null;
    }
    function displayInfo(_player) {
        let infoTeam = document.getElementById("infoTeam");
        infoTeam.style.backgroundColor = _player.color;
        let infoNumber = document.getElementById("infoNumber");
        infoNumber.innerHTML = "<b>Trikotnummer:</b> " + _player.shirtNumber;
        let infoSpeed = document.getElementById("infoSpeed");
        infoSpeed.innerHTML = "<b>Geschwindigkeit:</b> " + _player.speed.toFixed(3); // round number
        let infoPrecision = document.getElementById("infoPrecision");
        infoPrecision.innerHTML = "<b>Präzision:</b> " + _player.precision.toFixed(3); // round number
    }
    function endGame() {
        Fussball.stop = true;
        window.alert("Spiel vorbei! Der finale Spielstand ist " + Fussball.scoreTeam1 + ":" + Fussball.scoreTeam2);
        location.reload();
    }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    Fussball.randomNumber = randomNumber;
})(Fussball || (Fussball = {}));
//# sourceMappingURL=Main.js.map