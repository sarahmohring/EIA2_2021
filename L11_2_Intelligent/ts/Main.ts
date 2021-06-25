/*
Aufgabe: L11.2 Blumenwiese (Intelligent)
Name: Sarah Mohring
Matrikel: 268650
Datum: 26.06.2021
Quellen: Code s. letzte Blumenwiese-Abgabe; Anpassungen (Intelligent): Flug der Bienen zu den Blumen inspiriert von Mona Stingl, Hannah Dürr
*/

namespace BlumenwieseInt {

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let moveables: Moveable[] = [];
    export let flowers: Flower[] = [];
    let imageData: ImageData;

    window.addEventListener("load", fillCanvas);
    window.addEventListener("resize", adaptCanvas, false);
    window.addEventListener("orientationchange", adaptCanvas, false);

    function fillCanvas(_event: Event): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // responsive canvas size
        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.85;

        canvas.addEventListener("pointerup", newBee);

        createBackground();
        createClouds();

        let beehive: Beehive = new Beehive();
        beehive.draw();

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        createFlowers(canvas.width / 70);
        createBees(10);

        animate();
    }

    function adaptCanvas(_event: Event): void {

        moveables = [];
        flowers = [];

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // responsive canvas size
        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.85;

        canvas.addEventListener("pointerup", newBee);

        createBackground();
        createClouds();

        let beehive: Beehive = new Beehive();
        beehive.draw();

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        createFlowers(canvas.width / 40);
        createBees(10);
    }

    function createBackground(): void {

        let background: Background = new Background;
        background.draw();

        let sun: Sun = new Sun((new Vector(canvas.width * 0.1, canvas.height * 0.12)));
        sun.draw();

        let higherMountains: MountainRange = new MountainRange(new Vector(0, canvas.height * 0.38), canvas.height * 0.08, canvas.height * 0.15, "black", "white");
        higherMountains.draw();
        let lowerMountains: MountainRange = new MountainRange(new Vector(0, canvas.height * 0.38), canvas.height * 0.05, canvas.height * 0.09, "#442b0b", "#c09682");
        lowerMountains.draw();

        let trees: TreeLine = new TreeLine(0, 15);
        trees.draw();

    }

    function createClouds(): void {
        moveables.push(new Cloud(new Vector(canvas.width * 0.8, canvas.height * 0.1)));
        moveables.push(new Cloud(new Vector(canvas.width * 0.4, canvas.height * 0.05)));
    }

    function createFlowers(_amount: number): void {

        // draw each flower [_amount] times
        for (let i: number = 0; i < _amount; i++) {

            let daisy: Flower = new Daisy();
            flowers.push(daisy);

            let poppy: Flower = new Poppy();
            flowers.push(poppy);

            let lavender: Flower = new Lavender();
            flowers.push(lavender);
        }
    }

    // create new bee by clicking/touching canvas anywhere
    function newBee(_event: PointerEvent): void {
        let randomScale: number = randomNumber(0.5, 1.7);
        let randomVelocity: Vector = new Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));
        moveables.push(new Bee(new Vector(_event.offsetX, _event.offsetY), new Vector(randomVelocity.x, randomVelocity.y), randomScale));
    }

    // create new bees coming from the beehive
    function createBees(_amount: number): void {
        for (let i: number = 0; i < _amount; i++) {
            let randomScale: number = randomNumber(0.5, 1.7);
            let randomVelocity: Vector = new Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));

            moveables.push(new Bee(new Vector(canvas.width / 2, canvas.height * 0.95), new Vector(randomVelocity.x, randomVelocity.y), randomScale));
        }
    }

    function animate(): void { // roughly based on Asteroids code
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let flower of flowers) {
            flower.fillNectar();
        }

        for (let moveable of moveables) {
            moveable.move();
        }
    }

    // random number between a minimum and a maximum input
    export function randomNumber(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }
}
