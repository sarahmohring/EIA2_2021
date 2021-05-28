"use strict";
/*
Aufgabe: L09.2 Blumenwiese (objektorientiert)
Name: Sarah Mohring
Matrikel: 268650
Datum: 29.05.2021
Quellen: Basiscode s. letzte Abgabe; Anpassungen des Codes (Objektorientierung, Animation): Teile des "Asteroid"-Codes
*/
var Blumenwiese_obj;
(function (Blumenwiese_obj) {
    let clouds = [];
    let bees = [];
    let imageData;
    window.addEventListener("load", fillCanvas);
    window.addEventListener("resize", fillCanvas, false);
    window.addEventListener("orientationchange", fillCanvas, false);
    function fillCanvas(_event) {
        Blumenwiese_obj.canvas = document.querySelector("canvas");
        Blumenwiese_obj.crc2 = Blumenwiese_obj.canvas.getContext("2d");
        // responsive canvas size
        Blumenwiese_obj.canvas.width = window.innerWidth * 0.95;
        Blumenwiese_obj.canvas.height = window.innerHeight * 0.85;
        createBackground();
        createClouds();
        createFlowers(Blumenwiese_obj.canvas.width / 40);
        let beehive = new Blumenwiese_obj.Beehive();
        beehive.draw();
        createBees(10);
        imageData = Blumenwiese_obj.crc2.getImageData(0, 0, Blumenwiese_obj.canvas.width, Blumenwiese_obj.canvas.height);
        animate();
    }
    function createBackground() {
        let background = new Blumenwiese_obj.Background;
        background.draw();
        let sun = new Blumenwiese_obj.Sun((new Blumenwiese_obj.Vector(Blumenwiese_obj.canvas.width * 0.1, Blumenwiese_obj.canvas.height * 0.12)));
        sun.draw();
        let higherMountains = new Blumenwiese_obj.MountainRange(new Blumenwiese_obj.Vector(0, Blumenwiese_obj.canvas.height * 0.38), Blumenwiese_obj.canvas.height * 0.08, Blumenwiese_obj.canvas.height * 0.15, "black", "white");
        higherMountains.draw();
        let lowerMountains = new Blumenwiese_obj.MountainRange(new Blumenwiese_obj.Vector(0, Blumenwiese_obj.canvas.height * 0.38), Blumenwiese_obj.canvas.height * 0.05, Blumenwiese_obj.canvas.height * 0.09, "#442b0b", "#c09682");
        lowerMountains.draw();
        let trees = new Blumenwiese_obj.TreeLine(0, 15);
        trees.draw();
    }
    function createClouds() {
        clouds.push(new Blumenwiese_obj.Cloud(new Blumenwiese_obj.Vector(Blumenwiese_obj.canvas.width * 0.8, Blumenwiese_obj.canvas.height * 0.1)));
        clouds.push(new Blumenwiese_obj.Cloud(new Blumenwiese_obj.Vector(Blumenwiese_obj.canvas.width * 0.4, Blumenwiese_obj.canvas.height * 0.05)));
    }
    function createFlowers(_amount) {
        // draw each flower [_amount] times
        for (let i = 0; i < _amount; i++) {
            let daisy = new Blumenwiese_obj.Flower("daisy");
            daisy.draw();
            let poppy = new Blumenwiese_obj.Flower("poppy");
            poppy.draw();
            let lavender = new Blumenwiese_obj.Flower("lavender");
            lavender.draw();
        }
    }
    function createBees(_amount) {
        for (let i = 0; i < _amount; i++) {
            let randomScale = randomNumber(0.5, 1.7);
            let randomVelocity = new Blumenwiese_obj.Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));
            bees.push(new Blumenwiese_obj.Bee(new Blumenwiese_obj.Vector(Blumenwiese_obj.canvas.width / 2, Blumenwiese_obj.canvas.height * 0.95), new Blumenwiese_obj.Vector(randomVelocity.x, randomVelocity.y), randomScale));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        Blumenwiese_obj.crc2.clearRect(0, 0, Blumenwiese_obj.canvas.width, Blumenwiese_obj.canvas.height);
        Blumenwiese_obj.crc2.putImageData(imageData, 0, 0);
        for (let i = 0; i < clouds.length; i++) {
            clouds[i].update();
        }
        for (let i = 0; i < bees.length; i++) {
            bees[i].update();
        }
    }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    Blumenwiese_obj.randomNumber = randomNumber;
})(Blumenwiese_obj || (Blumenwiese_obj = {}));
//# sourceMappingURL=Main.js.map