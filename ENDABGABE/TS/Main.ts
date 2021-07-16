namespace Fussball {

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let people: Person[] = [];
    export let ball: Ball;
    export let stop: boolean = false;
    export let scoreTeam1: number = 0;
    export let scoreTeam2: number = 0;
    export let out: boolean = false;

    let startButton: HTMLElement;
    let formData: FormData;

    let extraPlayer1: number = 11;
    let color1: string;
    let speedMax1: number;
    let speedMin1: number;
    let precisionMax1: number;
    let precisionMin1: number;
    let extraPlayer2: number = 11;
    let color2: string;
    let speedMax2: number;
    let speedMin2: number;
    let precisionMax2: number;
    let precisionMin2: number;
    let duration: number;
    export let radius: number;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        startButton = <HTMLElement>document.querySelector("#startbutton");
        startButton.addEventListener("click", handleStart);
    }

    function handleStart(_event: MouseEvent): void {

        // manipulate DOM by pressing start
        let flexDiv: HTMLDivElement = <HTMLDivElement>document.querySelector("#flexContainer");
        let flexCanvas: HTMLDivElement = <HTMLDivElement>document.querySelector("#flexCanvas");
        let spielstand: HTMLDivElement = <HTMLDivElement>document.querySelector("#spielstand");
        let text: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("text");

        flexDiv.style.display = "none";
        startButton.style.display = "none";
        text.style.display = "none";

        let title: HTMLElement = <HTMLElement>document.getElementById("title");
        title.innerHTML = "Jogis Fußball-Simulator";

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        flexCanvas.style.display = "flex";
        canvas.style.display = "initial";
        spielstand.style.display = "initial";

        // canvas size fits football field png (10px = 1m)
        canvas.width = 1000;
        canvas.height = 650;

        handleForm();
    }

    function handleForm(): void {

        formData = new FormData(document.forms[0]);

        duration = Number(<unknown>formData.get("StepperDuration"));
        setInterval(endGame, duration * 60 * 1000);

        radius = Number(<unknown>formData.get("SliderRadius"));

        // team 1
        color1 = <string>formData.get("ColorTeam1")?.toString();
        speedMax1 = Number(<unknown>formData.get("SliderSpeed1Max"));
        speedMin1 = Number(<unknown>formData.get("SliderSpeed1Min"));
        precisionMax1 = Number(<unknown>formData.get("SliderPrecision1Max"));
        precisionMin1 = Number(<unknown>formData.get("SliderPrecision1Min"));

        // team 2
        color2 = <string>formData.get("ColorTeam2")?.toString();
        speedMax2 = Number(<unknown>formData.get("SliderSpeed2Max"));
        speedMin2 = Number(<unknown>formData.get("SliderSpeed2Min"));
        precisionMax2 = Number(<unknown>formData.get("SliderPrecision2Max"));
        precisionMin2 = Number(<unknown>formData.get("SliderPrecision2Min"));

        // team colors in info div
        let circleTeam1: HTMLElement = <HTMLElement>document.getElementById("team1");
        circleTeam1.style.backgroundColor = color1;
        let circleTeam2: HTMLElement = <HTMLElement>document.getElementById("team2");
        circleTeam2.style.backgroundColor = color2;

        ball = new Ball();

        createTeams();

        createReferees();

        // interaction with the players: 
        // ctrl+click (shoot), shift+click (info), alt+click (delete), ctrl+shift+click / ctrl+alt+click (new Player)
        canvas.addEventListener("click", interact);

        animate();
    }

    function createReferees(): void {

        people.push(new AssistantReferee(new Vector(25, 625)));
        people.push(new AssistantReferee(new Vector(975, 25)));
        people.push(new Referee(new Vector(500, 625)));
    }

    function createTeams(): void {

        let positionsTeam1: number[][] = [[25, 325], [200, 100], [200, 550], [400, 50], [400, 600], [350, 325], [550, 125], [550, 525], [850, 175], [850, 475], [775, 325]];

        for (let i: number = 0; i <= 10; i++) {
            people.push(new Player(new Vector(positionsTeam1[i][0], positionsTeam1[i][1]), color1, i + 1, speedMin1, speedMax1, precisionMin1, precisionMax1));
        }

        let positionsTeam2: number[][] = [[975, 325], [800, 550], [800, 100], [600, 600], [600, 50], [650, 325], [450, 525], [450, 125], [150, 475], [150, 175], [225, 325]];

        for (let i: number = 0; i <= 10; i++) {
            people.push(new Player(new Vector(positionsTeam2[i][0], positionsTeam2[i][1]), color2, i + 1, speedMin2, speedMax2, precisionMin2, precisionMax2));
        }
    }

    function animate(): void {

        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, canvas.width, canvas.height);

        // ball is within the lines
        if (ball.position.x >= 25 && ball.position.x <= 975 && ball.position.y >= 25 && ball.position.y <= 625) {
            if (stop == false) {
                ball.move();
            }
            else
                ball.draw();
        }
        else { // ball goes out
            out = true;
            ball.move();

            let info: HTMLElement = <HTMLElement>document.getElementById("goalOrOut");
            if (info.innerHTML != "<b>TOR!</b>") { // avoid "TOR!" override
                info.innerHTML = "<b>AUS!</b>";
            }

            setTimeout(resetPitch, 2000); // players "wiggle" - because animation method is still active?
        }

        for (let allPeople of people) {
            if (stop == false)
                allPeople.move();
            else
                allPeople.draw();
        }

        deleteExpendables();
    }

    function deleteExpendables(): void { // Jirka - eiaSteroids
        for (let i: number = people.length - 1; i >= 0; i--) {
            if (people[i] instanceof Player && people[i].expendable) // "expendable" should be a Player attribute but causes errors if it's not a Person attribute
                people.splice(i, 1);
        }
    }

    function resetPitch(): void {

        stop = false; // restart animation
        out = false;

        // ball and people to starting positions 
        ball = new Ball();

        for (let allPeople of people) {
            allPeople.position = allPeople.startPosition.copy();
        }

        // reset "goalOrOut"  and "momentan am Ball" display
        let info: HTMLElement = <HTMLElement>document.getElementById("goalOrOut");
        info.innerHTML = "<br>";

        let currentTeam: HTMLElement = <HTMLElement>document.getElementById("currentPlayer");
        currentTeam.style.backgroundColor = "white";
        currentTeam.innerHTML = "kein Spieler";
    }

    function interact(_event: MouseEvent): void {

        // ctrl+click - shoot ball
        if (_event.ctrlKey && _event.shiftKey == false && _event.altKey == false) {
            ball.shot(new Vector(_event.offsetX, _event.offsetY));
            stop = false;
            // ball is rolling, no player has reached it yet
            let currentTeam: HTMLElement = <HTMLElement>document.getElementById("currentPlayer");
            currentTeam.style.backgroundColor = "white";
            currentTeam.innerHTML = "kein Spieler";
        }

        // shift+click - display player info / Jirka - eiaSteroids
        if (_event.shiftKey && _event.ctrlKey == false && _event.altKey == false) {
            let hotspot: Vector = new Vector(_event.offsetX, _event.offsetY);
            let personClicked: Player | null = getClickedPerson(hotspot);
            if (personClicked)
                displayInfo(personClicked);
        }

        // alt+click - delete player / Jirka - eiaSteroids
        if (_event.altKey && _event.ctrlKey == false && _event.shiftKey == false) {
            let hotspot: Vector = new Vector(_event.offsetX, _event.offsetY);
            let personClicked: Player | null = getClickedPerson(hotspot);
            if (personClicked)
                personClicked.expendable = true;
        }

        // ctrl+shift+click - new player for Team 1
        if (_event.ctrlKey && _event.shiftKey && _event.altKey == false) {
            extraPlayer1++;
            people.push(new Player(new Vector(_event.offsetX, _event.offsetY), color1, extraPlayer1, speedMin1, speedMax1, precisionMin1, precisionMax1));
        }

        // ctrl+alt+click - new player for Team 2
        if (_event.ctrlKey && _event.altKey && _event.shiftKey == false) {
            extraPlayer2++;
            people.push(new Player(new Vector(_event.offsetX, _event.offsetY), color2, extraPlayer2, speedMin2, speedMax2, precisionMin2, precisionMax2));
        }
    }

    function getClickedPerson(_hotspot: Vector): Player | null { // Jirka - eiaSteroids
        for (let person of people) {
            if (person instanceof Player && person.isClicked(_hotspot)) // don't select referees
                return person;
        }
        return null;
    }

    function displayInfo(_player: Player): void {

        let infoTeam: HTMLElement = <HTMLElement>document.getElementById("infoTeam");
        infoTeam.style.backgroundColor = _player.color;

        let infoNumber: HTMLElement = <HTMLElement>document.getElementById("infoNumber");
        infoNumber.innerHTML = "<b>Trikotnummer:</b> " + _player.shirtNumber;

        let infoSpeed: HTMLElement = <HTMLElement>document.getElementById("infoSpeed");
        infoSpeed.innerHTML = "<b>Geschwindigkeit:</b> " + _player.speed.toFixed(3); // round number

        let infoPrecision: HTMLElement = <HTMLElement>document.getElementById("infoPrecision");
        infoPrecision.innerHTML = "<b>Präzision:</b> " + _player.precision.toFixed(3); // round number
    }

    function endGame(): void {
        stop = true;
        window.alert("Spiel vorbei! Der finale Spielstand ist " + scoreTeam1 + ":" + scoreTeam2);
        location.reload();
    }

    export function randomNumber(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }
}