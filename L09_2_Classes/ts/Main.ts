/*
Aufgabe: L09.2 Blumenwiese (objektorientiert)
Name: Sarah Mohring
Matrikel: 268650
Datum: 29.05.2021
Quellen: Basiscode s. letzte Abgabe; Anpassungen des Codes (Objektorientierung, Animation): Teile des "Asteroid"-Codes
*/

namespace Blumenwiese_obj {

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let clouds: Cloud[] = [];
    let bees: Bee[] = [];
    let imageData: ImageData;

    window.addEventListener("load", fillCanvas);
    window.addEventListener("resize", fillCanvas, false);
    window.addEventListener("orientationchange", fillCanvas, false);

    function fillCanvas(_event: Event): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        // responsive canvas size
        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.85;

        createBackground();
        createClouds();
        createFlowers(canvas.width / 40);

        let beehive: Beehive = new Beehive();
        beehive.draw();

        createBees(10);

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();
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
        clouds.push(new Cloud(new Vector(canvas.width * 0.8, canvas.height * 0.1)));
        clouds.push(new Cloud(new Vector(canvas.width * 0.4, canvas.height * 0.05)));
    }

    function createFlowers(_amount: number): void {

        // draw each flower [_amount] times
        for (let i: number = 0; i < _amount; i++) {

            let daisy: Flower = new Flower("daisy");
            daisy.draw();

            let poppy: Flower = new Flower("poppy");
            poppy.draw();

            let lavender: Flower = new Flower("lavender");
            lavender.draw();
        }
    }

    function createBees(_amount: number): void {
        for (let i: number = 0; i < _amount; i++) {
            let randomScale: number = randomNumber(0.5, 1.7);
            let randomVelocity: Vector = new Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));

            bees.push(new Bee(new Vector(canvas.width / 2, canvas.height * 0.95), new Vector(randomVelocity.x, randomVelocity.y), randomScale));
        }
    }

    function animate(): void { // roughly based on Asteroids code
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.putImageData(imageData, 0, 0);
        
        for (let i: number = 0; i < clouds.length; i++) {
            clouds[i].update();
        }
        for (let i: number = 0; i < bees.length; i++) {
            bees[i].update();
        }
    }

    // random number between a minimum and a maximum input
    export function randomNumber(_min: number, _max: number): number {
        return Math.random() * (_max - _min) + _min;
    }
}
