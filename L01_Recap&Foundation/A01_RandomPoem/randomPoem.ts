// console.log("Expecto Patronum");
namespace randomPoem {
    let s: String[] = ["Mickey", "Minnie", "Goofy", "Donald", "Daisy", "Pluto"];
    let p: String[] = ["verwechselt", "rettet", "besucht", "lacht ueber", "klaut", "wäscht"];
    let o: String[] = ["Tick, Trick und Track", "Dagoberts ersten Dollar", "die Panzerknacker", "Entenhausen", "Daniel Duesentriebs Erfindungen", "den Geldspeicher"];
    // console.log(s);
    // console.log(p);
    // console.log(o);

    for (let i: number = s.length; i > 0; i--) {
        // console.log(i);
        let result: String = getVerse(s, p, o);
        console.log(result);

    }

    function getVerse(_s: String[], _p: String[], _o: String[]): String {
        let verse: String = "";
        let randomS: number = Math.floor(Math.random() * s.length);
        let randomP: number = Math.floor(Math.random() * p.length);
        let randomO: number = Math.floor(Math.random() * o.length);
        // console.log(randomS);
        verse = s.splice(randomS)[0] + " " + p.splice(randomP)[0] + " " + o.splice(randomO)[0];
        return verse;
    }

}