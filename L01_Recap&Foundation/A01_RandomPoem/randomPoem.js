"use strict";
// console.log("Expecto Patronum");
var randomPoem;
(function (randomPoem) {
    let s = ["Mickey", "Minnie", "Goofy", "Donald", "Daisy", "Pluto"];
    let p = ["verwechselt", "rettet", "besucht", "lacht über", "klaut", "wäscht"];
    let o = ["Tick, Trick und Track", "Dagoberts ersten Dollar", "die Panzerknacker", "Entenhausen", "Daniel Düsentriebs Erfindungen", "den Geldspeicher"];
    // console.log(s);
    // console.log(p);
    // console.log(o);
    for (let i = s.length; i > 0; i--) {
        // console.log(i);
        let result = getVerse(s, p, o);
        console.log(result);
    }
    function getVerse(_s, _p, _o) {
        let verse = "";
        let randomS = Math.floor(Math.random() * s.length);
        let randomP = Math.floor(Math.random() * p.length);
        let randomO = Math.floor(Math.random() * o.length);
        // console.log(randomS);
        verse = s.splice(randomS, 1) + " " + p.splice(randomP, 1) + " " + o.splice(randomO, 1);
        return verse;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=randomPoem.js.map