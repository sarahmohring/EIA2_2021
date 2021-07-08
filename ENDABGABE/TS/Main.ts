namespace Fussball {

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let people: Person[] = [];
    export let ball: Ball;
    export let stop: boolean = false;
    export let scoreTeam1: number = 0;
    export let scoreTeam2: number = 0;
    let startButton: HTMLElement;
    let formData: FormData;

    let chosenCharacter: string;

    let extraPlayer1: number = 11;
    // let color1: string; // warum nicht global deklarierbar???
    // let speedMax1: number;
    // let speedMin1: number;
    // let precisionMax1: number;
    // let precisionMin1: number;

    let extraPlayer2: number = 11;
    // let color2: string;
    // let speedMax2: number;
    // let speedMin2: number;
    // let precisionMax2: number;
    // let precisionMin2: number;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        // install event listener on start button
        startButton = <HTMLElement>document.querySelector("#startbutton");
        startButton.addEventListener("click", handleStart);
    }

    function handleStart(_event: MouseEvent): void {

        // hide intro text, form, instructions, and start button by pressing start
        let flexDiv: HTMLDivElement = <HTMLDivElement>document.querySelector("#flexContainer");
        let flexCanvas: HTMLDivElement = <HTMLDivElement>document.querySelector("#flexCanvas");
        let spielstand: HTMLDivElement = <HTMLDivElement>document.querySelector("#spielstand");
        let text: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("text");

        flexDiv.style.display = "none";
        startButton.style.display = "none";
        text.style.display = "none";

        // change title and body style
        let title: HTMLElement = <HTMLElement>document.getElementById("title");
        title.innerHTML = "Jogis Fußball-Simulator";

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        // display canvas and game info div
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        flexCanvas.style.display = "flex";
        canvas.style.display = "initial";
        spielstand.style.display = "initial";

        // static canvas size fits football field png (10px = 1m)
        canvas.width = 1000;
        canvas.height = 650;

        handleForm();
    }

    function handleForm(): void {

        // save all form values in variables
        formData = new FormData(document.forms[0]);

        // team 1
        let color1: string = <string>formData.get("ColorTeam1")?.toString();
        let speedMax1: number = Number(<unknown>formData.get("SliderSpeed1Max"));
        let speedMin1: number = Number(<unknown>formData.get("SliderSpeed1Min"));
        let precisionMax1: number = Number(<unknown>formData.get("SliderPrecision1Max"));
        let precisionMin1: number = Number(<unknown>formData.get("SliderPrecision1Min"));

        // team 2
        let color2: string = <string>formData.get("ColorTeam2")?.toString();
        let speedMax2: number = Number(<unknown>formData.get("SliderSpeed2Max"));
        let speedMin2: number = Number(<unknown>formData.get("SliderSpeed2Min"));
        let precisionMax2: number = Number(<unknown>formData.get("SliderPrecision2Max"));
        let precisionMin2: number = Number(<unknown>formData.get("SliderPrecision2Min"));

        // display team colors in info div
        let circleTeam1: HTMLElement = <HTMLElement>document.getElementById("team1");
        circleTeam1.style.backgroundColor = color1;
        let circleTeam2: HTMLElement = <HTMLElement>document.getElementById("team2");
        circleTeam2.style.backgroundColor = color2;

        ball = new Ball();

        // create teams with form values
        createTeam1(color1, speedMax1, speedMin1, precisionMax1, precisionMin1);
        createTeam2(color2, speedMax2, speedMin2, precisionMax2, precisionMin2);

        createReferees();


        // event listeners for interaction with the players
        canvas.addEventListener("click", shootBall); // ctrl+click
        document.addEventListener("keyup", chooseCharacter); // Problem: funktioniert nach dem 2. Klick / zeitverzögert? // wenn gedrückt - Maus funktioniert nicht mehr
        canvas.addEventListener("click", addNewPlayer); // a+click or y+click
        canvas.addEventListener("click", clickedPerson); // shift+click (info) or alt+click (delete)

        // trackScore(); // wann aufrufen?? funktioniert im Prinzip

        animate();
    }

    function createReferees(): void {

        people.push(new AssistantReferee(new Vector(25, 625)));
        people.push(new AssistantReferee(new Vector(975, 25)));
        people.push(new Referee(new Vector(500, 625)));
    }

    function createTeam1(_color: string, _speedMax: number, _speedMin: number, _precisionMax: number, _precisionMin: number): void {

        let positionsTeam1: number[][] = [[25, 325], [200, 100], [200, 550], [400, 50], [400, 600], [350, 325], [550, 125], [550, 525], [850, 175], [850, 475], [725, 325]];

        for (let i: number = 0; i <= 10; i++) {
            people.push(new Player(new Vector(positionsTeam1[i][0], positionsTeam1[i][1]), _color, i + 1, _speedMin, _speedMax, _precisionMin, _precisionMax));
        }
    }

    function createTeam2(_color: string, _speedMax: number, _speedMin: number, _precisionMax: number, _precisionMin: number): void {

        let positionsTeam1: number[][] = [[975, 325], [800, 550], [800, 100], [600, 600], [600, 50], [650, 325], [450, 525], [450, 125], [150, 475], [150, 175], [275, 325]];

        for (let i: number = 0; i <= 10; i++) {
            people.push(new Player(new Vector(positionsTeam1[i][0], positionsTeam1[i][1]), _color, i + 1, _speedMin, _speedMax, _precisionMin, _precisionMax));
        }
    }

    function chooseCharacter(_event: KeyboardEvent): void { // Jirka - Blackmailer Companion
        chosenCharacter = _event.key;
    }

    function addNewPlayer(_event: MouseEvent): void {

        // doesn't work with global variables?
        // save all form values in variables
        formData = new FormData(document.forms[0]);

        // team 1
        let color1: string = <string>formData.get("ColorTeam1")?.toString();
        let speedMax1: number = Number(<unknown>formData.get("SliderSpeed1Max"));
        let speedMin1: number = Number(<unknown>formData.get("SliderSpeed1Min"));
        let precisionMax1: number = Number(<unknown>formData.get("SliderPrecision1Max"));
        let precisionMin1: number = Number(<unknown>formData.get("SliderPrecision1Min"));

        // team 2
        let color2: string = <string>formData.get("ColorTeam2")?.toString();
        let speedMax2: number = Number(<unknown>formData.get("SliderSpeed2Max"));
        let speedMin2: number = Number(<unknown>formData.get("SliderSpeed2Min"));
        let precisionMax2: number = Number(<unknown>formData.get("SliderPrecision2Max"));
        let precisionMin2: number = Number(<unknown>formData.get("SliderPrecision2Min"));


        if (chosenCharacter == "a") { // a+click - new player for Team 1
            extraPlayer1++;
            people.push(new Player(new Vector(_event.offsetX, _event.offsetY), color1, extraPlayer1, speedMin1, speedMax1, precisionMin1, precisionMax1));
        }

        if (chosenCharacter == "y") { // y+click - new player for Team 2
            extraPlayer2++;
            people.push(new Player(new Vector(_event.offsetX, _event.offsetY), color2, extraPlayer2, speedMin2, speedMax2, precisionMin2, precisionMax2));
        }
    }

    function animate(): void {

        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, canvas.width, canvas.height);

        for (let allPeople of people) {
            if (stop == false) // hier if (players.hitBall == false)
                allPeople.move();
            else
                allPeople.draw();
        }

        ball.draw();
        // ball.move(_event);

        deleteExpendables();
    }

    function shootBall(_event: MouseEvent): void {
        if (_event.ctrlKey) {
            // HALIS
            let rect: DOMRect = canvas.getBoundingClientRect();
            let x: number = _event.clientX - rect.left;
            let y: number = _event.clientY - rect.top;
            ball.shot(new Vector(x, y));
            stop = false;
        }
        // ENDE HALIS
    }

    // interact with players via mouse and keyboard
    function clickedPerson(_event: MouseEvent): void { // Jirka - eiaSteroids
        // PROBLEM: Player-Eigenschaften nicht über Person abrufbar; Schiedsrichter können auch gelöscht werden

        if (_event.shiftKey) { // shift+click - display player info
            let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            let personClicked: Person | null = getClickedPerson(hotspot);
            console.log(personClicked);
            if (personClicked)
                displayInfo(personClicked);
        }

        if (_event.altKey) { // alt+click - delete player
            let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            let personClicked: Person | null = getClickedPerson(hotspot);
            if (personClicked)
                personClicked.expendable = true;
        }
    }

    function getClickedPerson(_hotspot: Vector): Person | null { // Jirka - eiaSteroids
        for (let person of people) {
            if (person.isClicked(_hotspot))
                return person;
        }
        return null;
    }


    function displayInfo(_player: Person): void { // PROBLEM: kein Zugriff auf Objekteigenschaften

        let infoTest: HTMLElement = <HTMLElement>document.getElementById("infoNumber");
        infoTest.innerHTML = "<b>TEST:</b> " + _player.hitRadius;

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

    function deleteExpendables(): void { // Jirka - eiaSteroids
        for (let i: number = people.length - 1; i >= 0; i--) {
            if (people[i].expendable)
                people.splice(i, 1);
        }
    }

    // function trackScore(): void {
    //     if (ball.position.x == 25) { // so score doesnt keep going up!? - will still happen if called from animation method
    //         if (ball.position.y >= 250 && ball.position.y <= 400) {
    //             // console.log("scoreTeam2");
    //             scoreTeam1++;
    //             let team1Score: HTMLElement = <HTMLElement>document.getElementById("scoreTeam1");
    //             team1Score.innerHTML = scoreTeam1.toString();
    //             // play cheering sound
    //         }
    //     }
    //     if (ball.position.x == 975) {
    //         if (ball.position.y >= 250 && ball.position.y <= 400) {
    //             // console.log("scoreTeam2");
    //             scoreTeam2++;
    //             let team2Score: HTMLElement = <HTMLElement>document.getElementById("scoreTeam1");
    //             team2Score.innerHTML = scoreTeam2.toString();
    //             // play cheering sound
    //         }
    //     }
    // }

    // random number between a minimum and a maximum input
    export function randomNumber(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }
}