namespace Fussball {

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let startButton: HTMLElement;
    let formData: FormData;
    let people: Person[] = [];
    let ball: Ball;
    let imageData: ImageData;
    let clicked: boolean = false;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        // install event listener on start button
        startButton = <HTMLElement>document.querySelector("#startbutton");
        startButton.addEventListener("click", handleStart);
    }

    function handleStart(_event: MouseEvent): void {

        // hide intro text, form, instructions, and start button after pressing start
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

        // Form auswerten
        formData = new FormData(document.forms[0]);

        let color1: string = <string>formData.get("ColorTeam1")?.toString();
        let color2: string = <string>formData.get("ColorTeam2")?.toString();


        // sinnvolle Werte???
        let speedMax1: number = Number(<unknown>formData.get("SliderSpeed1Max"));
        let speedMin1: number = Number(<unknown>formData.get("SliderSpeed1Min"));
        let precisionMax1: number = Number(<unknown>formData.get("SliderPrecision1Max"));
        let precisionMin1: number = Number(<unknown>formData.get("SliderPrecision1Min"));

        let speedMax2: number = Number(<unknown>formData.get("SliderSpeed2Max"));
        let speedMin2: number = Number(<unknown>formData.get("SliderSpeed2Min"));
        let precisionMax2: number = Number(<unknown>formData.get("SliderPrecision2Max"));
        let precisionMin2: number = Number(<unknown>formData.get("SliderPrecision2Min"));

        console.log(speedMax1, speedMin1, precisionMax1, precisionMax2);

        ball = new Ball(); // ???
        canvas.addEventListener("click", shoot);

        createReferees();

        createTeam1(1, color1, speedMax1, speedMin1, precisionMax1, precisionMin1);
        createTeam2(2, color2, speedMax2, speedMin2, precisionMax2, precisionMin2);

        animate();
    }

    function createReferees(): void {

        people.push(new AssistantReferee(new Vector(25, 625)));
        people.push(new AssistantReferee(new Vector(975, 25)));
        people.push(new Referee(new Vector(500, 625)));

    }

    function createTeam1(_team: number /* Teamzugehörigkeit */, _color: string, _speedMax: number, _speedMin: number, _precisionMax: number, _precisionMin: number): void {

        // Torwart
        people.push(new Player(new Vector(25, 325), _color, 1));
        // Innenverteidiger links
        people.push(new Player(new Vector(200, 100), _color, 2));
        // Innenverteidiger rechts
        people.push(new Player(new Vector(200, 550), _color, 3));
        // Außenverteidiger links
        people.push(new Player(new Vector(400, 50), _color, 4));
        // Außenverteidiger rechts
        people.push(new Player(new Vector(400, 600), _color, 5));
        // Mittelverteidiger
        people.push(new Player(new Vector(350, 325), _color, 6));
        // Mittelfeldspieler links
        people.push(new Player(new Vector(550, 125), _color, 7));
        // Mittelfeldspieler rechts
        people.push(new Player(new Vector(550, 525), _color, 8));
        // Außenstürmer links
        people.push(new Player(new Vector(850, 175), _color, 9));
        // Außenstürmer rechts
        people.push(new Player(new Vector(850, 475), _color, 10));
        // Mittelstürmer
        people.push(new Player(new Vector(725, 325), _color, 11));

        // for-Schleife random velocity & precision -> nur Team 1 ! oder Trikotnummer (dann Team 2 Nummern 12+)
    }

    function createTeam2(_team: number /* Teamzugehörigkeit */, _color: string, _speedMax: number, _speedMin: number, _precisionMax: number, _precisionMin: number): void {

        // Torwart
        people.push(new Player(new Vector(975, 325), _color, 1));
        // Innenverteidiger links
        people.push(new Player(new Vector(800, 550), _color, 2));
        // Innenverteidiger rechts
        people.push(new Player(new Vector(800, 100), _color, 3));
        // Außenverteidiger links
        people.push(new Player(new Vector(600, 600), _color, 4));
        // Außenverteidiger rechts
        people.push(new Player(new Vector(600, 50), _color, 5));
        // Mittelverteidiger
        people.push(new Player(new Vector(650, 325), _color, 6));
        // Mittelfeldspieler links
        people.push(new Player(new Vector(450, 525), _color, 7));
        // Mittelfeldspieler rechts
        people.push(new Player(new Vector(450, 125), _color, 8));
        // Außenstürmer links
        people.push(new Player(new Vector(150, 475), _color, 9));
        // Außenstürmer rechts
        people.push(new Player(new Vector(150, 175), _color, 10));
        // Mittelstürmer
        people.push(new Player(new Vector(275, 325), _color, 11));
    }

    function animate(): void { // roughly based on Asteroids code

        // if (/**/ )  hier abfragen ob gerade ein Spieler am Ball ist - wenn nein, dann animieren, 
        // wenn doch dann Animation aussetzen und stattdessen auf Klick warten (click listener installieren?)
        // währenddessen alle Objekte weiter an ihrer Position malen?
        // oder Moveables.velocity = 0,0 ?
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, canvas.width, canvas.height);

        ball.draw();
        // canvas.addEventListener("click", shoot);

        for (let allPeople of people) {
            allPeople.move();
        }

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height); // aktuellen Stand speichern, um während Schuss anzuzeigen

    }

    function shoot(_event: MouseEvent): void {

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

    function getInfo(): void {
        // bei click und shift

        // check welcher Player gerade angeklickt wurde s. Asteroids Code (durch allPeople Array Positions durch)
    }

    // random number between a minimum and a maximum input
    export function randomNumber(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }

}