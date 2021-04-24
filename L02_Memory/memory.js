"use strict";
var Memory;
(function (Memory) {
    // "Layout was forced before the page was fully loaded. If stylesheets are not yet loaded this may cause a flash of unstyled content."
    // handleLoad
    let pairsAmount;
    let cards = [];
    let gamestartTime = 0;
    pairsAmount = Number(window.prompt("Enter the amount of card pairs you want to play with (5-25)"));
    // console.log(pairsAmount);
    startGame(pairsAmount, gamestartTime);
    function startGame(pairsAmount, gamestartTime) {
        createCardDeck(pairsAmount);
        for (let i = 0; i < pairsAmount; i++) { // "in the cards array"
            let div = document.createElement("div");
            // Spielfeld Div (Container) document.innerHTML += div;
            div.setAttribute("class", (i + 1).toString()); // +1 ?
            div.addEventListener("pointerup", handlePointerUp); // funktioniert?
        }
        startTimer(gamestartTime);
    }
    function createCardDeck(_pairsAmount) {
        for (let i = 0; i <= _pairsAmount; i++) {
            let cardOne; // = {i, true}; -> ins Interface schreiben
            cardOne.value = i; // wird vor Zuweisung verwendet
            cardOne.firstClick = true;
            let cardTwo;
            cardTwo.value = i;
            cardTwo.firstClick = true;
            cards.push(cardOne, cardTwo);
        }
        // shuffle cards array??? 
        // gibt es ein return?? statt void ? zu startGame
    }
    function handlePointerUp(_event) {
        let firstValue = "";
        // get class of _event.target
        let;
        class {
        }
        String = _event.target.class; // = firstValue!!    Attribut?? classlist
        // innerHTML: display value on card as a span element
        if (_event.target.firstClick == true) { // toggle
            _event.target.firstClick = false;
            // = get event target's class which is not card, frontside, or backside 
        }
        else {
            checkCards(firstValue);
        } // welchen Wert mitgeben?
    }
    function startTimer(_gamestartTime) {
        let timer = setInterval(function () { _gamestartTime += 1; }, 1000); // typedef of function?
        console.log(timer);
    }
    function checkCards(_firstValue) {
        // = get event target's class which is not card, frontside, or backside 
        window.setTimeout(compareCards, 2000); // kann keine Attribute mitnehmen??
    }
    function compareCards() {
        let secondValue; // class des 2. Values
        if (_firstValue == secondValue) { // keine Mitgabewerte! Hilfe
            {
                // hide value (not whole div?) rom all cards that show a value (turn them back around)
            }
            if (document.querySelectorAll("hidden").length == cards.length) {
                gameWon(); // parameter? where from
            }
            else {
                break;
            } // ?
        }
    }
    function gameWon(_time) {
        clearInterval(_time); // "timer" nur in startTimer deklariert -> hab es in _gamestartTime umgewandelt
        alert("Congratulations, you uncovered all matches. Your play time was: " + _time + " seconds.");
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map