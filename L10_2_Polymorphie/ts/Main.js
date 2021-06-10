"use strict";
/*
Aufgabe: L10.2 Blumenwiese (Polymorphie)
Name: Sarah Mohring
Matrikel: 268650
Datum: 12.06.2021
Quellen: Code s. letzte Blumenwiese-Abgabe; Anpassungen (Polymorphie): angelehnt an "Asteroid"-Code
*/
var Blumenwiese_poly;
(function (Blumenwiese_poly) {
    let moveables = [];
    let imageData;
    window.addEventListener("load", fillCanvas);
    window.addEventListener("resize", adaptCanvas, false);
    window.addEventListener("orientationchange", adaptCanvas, false);
    function fillCanvas(_event) {
        Blumenwiese_poly.canvas = document.querySelector("canvas");
        Blumenwiese_poly.crc2 = Blumenwiese_poly.canvas.getContext("2d");
        // responsive canvas size
        Blumenwiese_poly.canvas.width = window.innerWidth * 0.95;
        Blumenwiese_poly.canvas.height = window.innerHeight * 0.85;
        createBackground();
        createClouds();
        createFlowers(Blumenwiese_poly.canvas.width / 40);
        let beehive = new Blumenwiese_poly.Beehive();
        beehive.draw();
        createBees(10);
        imageData = Blumenwiese_poly.crc2.getImageData(0, 0, Blumenwiese_poly.canvas.width, Blumenwiese_poly.canvas.height);
        animate();
    }
    function adaptCanvas(_event) {
        moveables = [];
        Blumenwiese_poly.canvas = document.querySelector("canvas");
        Blumenwiese_poly.crc2 = Blumenwiese_poly.canvas.getContext("2d");
        // responsive canvas size
        Blumenwiese_poly.canvas.width = window.innerWidth * 0.95;
        Blumenwiese_poly.canvas.height = window.innerHeight * 0.85;
        createBackground();
        createClouds();
        createFlowers(Blumenwiese_poly.canvas.width / 40);
        let beehive = new Blumenwiese_poly.Beehive();
        beehive.draw();
        createBees(10);
        imageData = Blumenwiese_poly.crc2.getImageData(0, 0, Blumenwiese_poly.canvas.width, Blumenwiese_poly.canvas.height);
    }
    function createBackground() {
        let background = new Blumenwiese_poly.Background;
        background.draw();
        let sun = new Blumenwiese_poly.Sun((new Blumenwiese_poly.Vector(Blumenwiese_poly.canvas.width * 0.1, Blumenwiese_poly.canvas.height * 0.12)));
        sun.draw();
        let higherMountains = new Blumenwiese_poly.MountainRange(new Blumenwiese_poly.Vector(0, Blumenwiese_poly.canvas.height * 0.38), Blumenwiese_poly.canvas.height * 0.08, Blumenwiese_poly.canvas.height * 0.15, "black", "white");
        higherMountains.draw();
        let lowerMountains = new Blumenwiese_poly.MountainRange(new Blumenwiese_poly.Vector(0, Blumenwiese_poly.canvas.height * 0.38), Blumenwiese_poly.canvas.height * 0.05, Blumenwiese_poly.canvas.height * 0.09, "#442b0b", "#c09682");
        lowerMountains.draw();
        let trees = new Blumenwiese_poly.TreeLine(0, 15);
        trees.draw();
    }
    function createClouds() {
        moveables.push(new Blumenwiese_poly.Cloud(new Blumenwiese_poly.Vector(Blumenwiese_poly.canvas.width * 0.8, Blumenwiese_poly.canvas.height * 0.1)));
        moveables.push(new Blumenwiese_poly.Cloud(new Blumenwiese_poly.Vector(Blumenwiese_poly.canvas.width * 0.4, Blumenwiese_poly.canvas.height * 0.05)));
    }
    function createFlowers(_amount) {
        // draw each flower [_amount] times
        for (let i = 0; i < _amount; i++) {
            let daisy = new Blumenwiese_poly.Flower("daisy");
            daisy.draw();
            let poppy = new Blumenwiese_poly.Flower("poppy");
            poppy.draw();
            let lavender = new Blumenwiese_poly.Flower("lavender");
            lavender.draw();
        }
    }
    function createBees(_amount) {
        for (let i = 0; i < _amount; i++) {
            let randomScale = randomNumber(0.5, 1.7);
            let randomVelocity = new Blumenwiese_poly.Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));
            moveables.push(new Blumenwiese_poly.Bee(new Blumenwiese_poly.Vector(Blumenwiese_poly.canvas.width / 2, Blumenwiese_poly.canvas.height * 0.95), new Blumenwiese_poly.Vector(randomVelocity.x, randomVelocity.y), randomScale));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        Blumenwiese_poly.crc2.clearRect(0, 0, Blumenwiese_poly.canvas.width, Blumenwiese_poly.canvas.height);
        Blumenwiese_poly.crc2.putImageData(imageData, 0, 0);
        for (let i = 0; i < moveables.length; i++) {
            moveables[i].update();
        }
    }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    Blumenwiese_poly.randomNumber = randomNumber;
})(Blumenwiese_poly || (Blumenwiese_poly = {}));
//# sourceMappingURL=Main.js.map