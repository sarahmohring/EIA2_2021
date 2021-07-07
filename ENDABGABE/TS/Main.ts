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
    let imageData: ImageData;

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

        canvas.addEventListener("click", shootBall);

        canvas.addEventListener("click", clickedPerson); // shift + click

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
    }
    
    function shootBall(_event: MouseEvent): void {
        if (_event.shiftKey == false) {
            // HALIS
            let rect: DOMRect = canvas.getBoundingClientRect();
            let x: number = _event.clientX - rect.left;
            let y: number = _event.clientY - rect.top;
            ball.shot(new Vector(x, y));
            stop = false;
        }
        // ENDE HALIS
    }

    // register shift+click on a player to display player info - Jirka - eiaSteroids
    function clickedPerson(_event: MouseEvent): void { // PROBLEM: Player-Eigenschaften nicht über Person abrufbar
        
        if (_event.shiftKey) {
            let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
            let personClicked: Person | null = getClickedPerson(hotspot);
            console.log(personClicked);
            if (personClicked)
                displayInfo(personClicked);
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
        // bei click und shift - aktuell bei CLICK

        let infoTest: HTMLElement = <HTMLElement>document.getElementById("infoNumber");
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
    export function randomNumber(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }
}