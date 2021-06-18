"use strict";
/*
Aufgabe: L11.1 Blumenwiese (Advanced)
Name: Sarah Mohring
Matrikel: 268650
Datum: 19.06.2021
Quellen: Code s. letzte Blumenwiese-Abgabe; Anpassungen (Advanced): angelehnt an "Asteroid"-Code; Füllstand basier auf Julia Käpplers Code
*/
var BlumenwieseAdv;
(function (BlumenwieseAdv) {
    let moveables = [];
    let flowers = [];
    let imageData;
    window.addEventListener("load", fillCanvas);
    window.addEventListener("resize", adaptCanvas, false);
    window.addEventListener("orientationchange", adaptCanvas, false);
    function fillCanvas(_event) {
        BlumenwieseAdv.canvas = document.querySelector("canvas");
        BlumenwieseAdv.crc2 = BlumenwieseAdv.canvas.getContext("2d");
        // responsive canvas size
        BlumenwieseAdv.canvas.width = window.innerWidth * 0.95;
        BlumenwieseAdv.canvas.height = window.innerHeight * 0.85;
        createBackground();
        createClouds();
        let beehive = new BlumenwieseAdv.Beehive();
        beehive.draw();
        imageData = BlumenwieseAdv.crc2.getImageData(0, 0, BlumenwieseAdv.canvas.width, BlumenwieseAdv.canvas.height);
        createFlowers(BlumenwieseAdv.canvas.width / 70);
        createBees(10);
        animate();
    }
    function adaptCanvas(_event) {
        moveables = [];
        flowers = [];
        BlumenwieseAdv.canvas = document.querySelector("canvas");
        BlumenwieseAdv.crc2 = BlumenwieseAdv.canvas.getContext("2d");
        // responsive canvas size
        BlumenwieseAdv.canvas.width = window.innerWidth * 0.95;
        BlumenwieseAdv.canvas.height = window.innerHeight * 0.85;
        createBackground();
        createClouds();
        let beehive = new BlumenwieseAdv.Beehive();
        beehive.draw();
        imageData = BlumenwieseAdv.crc2.getImageData(0, 0, BlumenwieseAdv.canvas.width, BlumenwieseAdv.canvas.height);
        createBees(10);
        createFlowers(BlumenwieseAdv.canvas.width / 40);
    }
    function createBackground() {
        let background = new BlumenwieseAdv.Background;
        background.draw();
        let sun = new BlumenwieseAdv.Sun((new BlumenwieseAdv.Vector(BlumenwieseAdv.canvas.width * 0.1, BlumenwieseAdv.canvas.height * 0.12)));
        sun.draw();
        let higherMountains = new BlumenwieseAdv.MountainRange(new BlumenwieseAdv.Vector(0, BlumenwieseAdv.canvas.height * 0.38), BlumenwieseAdv.canvas.height * 0.08, BlumenwieseAdv.canvas.height * 0.15, "black", "white");
        higherMountains.draw();
        let lowerMountains = new BlumenwieseAdv.MountainRange(new BlumenwieseAdv.Vector(0, BlumenwieseAdv.canvas.height * 0.38), BlumenwieseAdv.canvas.height * 0.05, BlumenwieseAdv.canvas.height * 0.09, "#442b0b", "#c09682");
        lowerMountains.draw();
        let trees = new BlumenwieseAdv.TreeLine(0, 15);
        trees.draw();
    }
    function createClouds() {
        moveables.push(new BlumenwieseAdv.Cloud(new BlumenwieseAdv.Vector(BlumenwieseAdv.canvas.width * 0.8, BlumenwieseAdv.canvas.height * 0.1)));
        moveables.push(new BlumenwieseAdv.Cloud(new BlumenwieseAdv.Vector(BlumenwieseAdv.canvas.width * 0.4, BlumenwieseAdv.canvas.height * 0.05)));
    }
    function createFlowers(_amount) {
        // draw each flower [_amount] times
        for (let i = 0; i < _amount; i++) {
            let daisy = new BlumenwieseAdv.Daisy();
            flowers.push(daisy);
            let poppy = new BlumenwieseAdv.Poppy();
            flowers.push(poppy);
            let lavender = new BlumenwieseAdv.Lavender();
            flowers.push(lavender);
        }
    }
    function createBees(_amount) {
        for (let i = 0; i < _amount; i++) {
            let randomScale = randomNumber(0.5, 1.7);
            let randomVelocity = new BlumenwieseAdv.Vector((randomNumber(-2.5, 2.5)), (randomNumber(-3, 0)));
            moveables.push(new BlumenwieseAdv.Bee(new BlumenwieseAdv.Vector(BlumenwieseAdv.canvas.width / 2, BlumenwieseAdv.canvas.height * 0.95), new BlumenwieseAdv.Vector(randomVelocity.x, randomVelocity.y), randomScale));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        BlumenwieseAdv.crc2.clearRect(0, 0, BlumenwieseAdv.canvas.width, BlumenwieseAdv.canvas.height);
        BlumenwieseAdv.crc2.putImageData(imageData, 0, 0);
        for (let flower of flowers) {
            flower.fillNectar();
        }
        for (let moveable of moveables) {
            moveable.update();
        }
    }
    // random number between a minimum and a maximum input
    function randomNumber(_min, _max) {
        return Math.random() * (_max - _min) + _min;
    }
    BlumenwieseAdv.randomNumber = randomNumber;
})(BlumenwieseAdv || (BlumenwieseAdv = {}));
//# sourceMappingURL=Main.js.map