"use strict";
/*
Aufgabe: L11.2 Blumenwiese (Intelligent)
Name: Sarah Mohring
Matrikel: 268650
Datum: 26.06.2021
Quellen: Code s. letzte Blumenwiese-Abgabe; Anpassungen (Intelligent): Flug der Bienen zu den Blumen inspiriert von Mona Stingl, Hannah Dürr
*/
var BlumenwieseInt;
(function (BlumenwieseInt) {
    BlumenwieseInt.moveables = [];
    BlumenwieseInt.flowers = [];
    let imageData;
    window.addEventListener("load", fillCanvas);
    window.addEventListener("resize", adaptCanvas, false);
    window.addEventListener("orientationchange", adaptCanvas, false);
    function fillCanvas(_event) {
        BlumenwieseInt.canvas = document.querySelector("canvas");
        BlumenwieseInt.crc2 = BlumenwieseInt.canvas.getContext("2d");
        // responsive canvas size
        BlumenwieseInt.canvas.width = window.innerWidth * 0.95;
        BlumenwieseInt.canvas.height = window.innerHeight * 0.85;
        BlumenwieseInt.canvas.addEventListener("pointerup", newBee);
        createBackground();
        createClouds();
        let beehive = new BlumenwieseInt.Beehive();
        beehive.draw();
        imageData = BlumenwieseInt.crc2.getImageData(0, 0, BlumenwieseInt.canvas.width, BlumenwieseInt.canvas.height);
        createFlowers(BlumenwieseInt.canvas.width / 70);
        createBees(10);
        animate();
    }
    function adaptCanvas(_event) {
        BlumenwieseInt.moveables = [];
        BlumenwieseInt.flowers = [];
        BlumenwieseInt.canvas = document.querySelector("canvas");
        BlumenwieseInt.crc2 = BlumenwieseInt.canvas.getContext("2d");
        // responsive canvas size
        BlumenwieseInt.canvas.width = window.innerWidth * 0.95;
        BlumenwieseInt.canvas.height = window.innerHeight * 0.85;
        BlumenwieseInt.canvas.addEventListener("pointerup", newBee);
        createBackground();
        createClouds();
        let beehive = new BlumenwieseInt.Beehive();
        beehive.draw();
        imageData = BlumenwieseInt.crc2.getImageData(0, 0, BlumenwieseInt.canvas.width, BlumenwieseInt.canvas.height);
        createFlowers(BlumenwieseInt.canvas.width / 40);
        createBees(10);
    }
    function createBackground() {
        let background = new BlumenwieseInt.Background;
        background.draw();
        let sun = new BlumenwieseInt.Sun((new BlumenwieseInt.Vector(BlumenwieseInt.canvas.width * 0.1, BlumenwieseInt.canvas.height * 0.12)));
        sun.draw();
        let higherMountains = new BlumenwieseInt.MountainRange(new BlumenwieseInt.Vector(0, BlumenwieseInt.canvas.height * 0.38), BlumenwieseInt.canvas.height * 0.08, BlumenwieseInt.canvas.height * 0.15, "black", "white");
        higherMountains.draw();
        let lowerMountains = new BlumenwieseInt.MountainRange(new BlumenwieseInt.Vector(0, BlumenwieseInt.canvas.height * 0.38), BlumenwieseInt.canvas.height * 0.05, BlumenwieseInt.canvas.height * 0.09, "#442b0b", "#c09682");
        lowerMountains.draw();
        let trees = new BlumenwieseInt.TreeLine(0, 15);
        trees.draw();
    }
    function createClouds() {
        BlumenwieseInt.moveables.push(new BlumenwieseInt.Cloud(new BlumenwieseInt.Vector(BlumenwieseInt.canvas.width * 0.8, BlumenwieseInt.canvas.height * 0.1)));
        BlumenwieseInt.moveables.push(new BlumenwieseInt.Cloud(new BlumenwieseInt.Vector(BlumenwieseInt.canvas.width * 0.4, BlumenwieseInt.canvas.height * 0.05)));
    }
    function createFlowers(_amount) {
        // draw each flower [_amount] times
        for (let i = 0; i < _amount; i++) {
            let daisy = new BlumenwieseInt.Daisy();
            BlumenwieseInt.flowers.push(daisy);
            let poppy = new BlumenwieseInt.Poppy();
            BlumenwieseInt.flowers.push(poppy);
            let lavender = new BlumenwieseInt.Lavender();
            BlumenwieseInt.flowers.push(lavender);
        }
    }
    // create new bee by clicking/touching canvas anywhere
    function newBee(_event) {
        let randomScale = randomNumber(0.5, 1.7);
        let randomVelocity = new BlumenwieseInt.Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));
        BlumenwieseInt.moveables.push(new BlumenwieseInt.Bee(new BlumenwieseInt.Vector(_event.offsetX, _event.offsetY), new BlumenwieseInt.Vector(randomVelocity.x, randomVelocity.y), randomScale));
    }
    // create new bees coming from the beehive
    function createBees(_amount) {
        for (let i = 0; i < _amount; i++) {
            let randomScale = randomNumber(0.5, 1.7);
            let randomVelocity = new BlumenwieseInt.Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));
            BlumenwieseInt.moveables.push(new BlumenwieseInt.Bee(new BlumenwieseInt.Vector(BlumenwieseInt.canvas.width / 2, BlumenwieseInt.canvas.height * 0.95), new BlumenwieseInt.Vector(randomVelocity.x, randomVelocity.y), randomScale));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        BlumenwieseInt.crc2.clearRect(0, 0, BlumenwieseInt.canvas.width, BlumenwieseInt.canvas.height);
        BlumenwieseInt.crc2.putImageData(imageData, 0, 0);
        for (let flower of BlumenwieseInt.flowers) {
            flower.fillNectar();
        }
        for (let moveable of BlumenwieseInt.moveables) {
            moveable.move();
        }
    }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    BlumenwieseInt.randomNumber = randomNumber;
})(BlumenwieseInt || (BlumenwieseInt = {}));
//# sourceMappingURL=Main.js.map