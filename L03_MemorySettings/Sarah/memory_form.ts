namespace Memory { // Code basiert zu einem Großteil auf Hannah Dürrs Bearbeitung meines Konzepts

    window.addEventListener("load", handleLoad);

    // declare all global variables
    let values: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let pairs: number;
    let cardDeckValues: string[] = [];
    let turnedCards: number = 0;
    let finishedPairs: number = 0;
    let timer: number = 0;
    let gameDuration: number;
    let startButton: HTMLElement;
    let playingField: HTMLDivElement;
    let clickedCard: HTMLElement;
    let clickedCard1: HTMLElement;
    let firstCard: string;
    let secondCard: string;
    let formData: FormData;
    let singleCard: HTMLElement;
    let allCards: NodeList;

    function handleLoad(_event: Event): void {

        // install event listener on start button
        startButton = <HTMLElement>document.querySelector("div.startbutton");
        startButton.addEventListener("pointerup", handleStart);
    }

    function handleStart(_event: PointerEvent): void {

        // start timer
        gameDuration = setInterval(startTimer, 1000);

        // hide form and start button after pressing start
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        form.style.display = "none";
        startButton.style.display = "none";

        // display playingfield Div instead
        playingField = document.createElement("div");
        playingField.setAttribute("class", "playingfield");
        document.body.appendChild(playingField);

        // change intro text
        let text: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("text");
        text.innerHTML = "Viel Spaß beim Spielen!";

        handleForm();
    }

    function handleForm(): void {

        formData = new FormData(document.forms[0]);

        // change color of playing field according to color picker
        playingField.style.backgroundColor = <string>formData.get("ColorField")?.toString();

        // change document font according to radio button
        document.body.style.fontFamily = <string>formData.get("Radiogroup");

        // create stepper*2 cards, assign letter value, and push into card array
        pairs = Number(<unknown>formData.get("Stepper"));
        for (let i: number = 0; i <= pairs - 1; i++) {
            cardDeckValues.push(values[i]);
            cardDeckValues.push(values[i]);
        }

        createCards();
    }

    function createCards(): void {

        shuffleCards();

        for (let i: number = 0; i < cardDeckValues.length; i++) {

            // create span, add class "turned", assign letter
            singleCard = <HTMLSpanElement>document.createElement("span");
            singleCard.classList.add("turned");
            singleCard.classList.add("cardcontent");
            singleCard.innerHTML = "" + cardDeckValues[i];

            // use slider value to adjust width, height, and font size of cards
            singleCard.style.width = <string>formData.get("Slider") + "px";
            singleCard.style.height = <string>formData.get("Slider") + "px";
            singleCard.style.fontSize = <string>formData.get("Slider") + "px";

            // apply color picker value to backside and to font color of cards
            singleCard.style.backgroundColor = <string>formData.get("ColorBack");
            singleCard.style.color = <string>formData.get("ColorFont");

            // put cards on playing field, add pointerup listeners to all cards
            playingField.appendChild(singleCard);

            singleCard.addEventListener("pointerup", turnCards);
        }
    }

    function startTimer(): void {
        timer++;

    }

    function shuffleCards(): void {

        let tmp: string;
        let rand: number;

        // move all entries of cardDeckValue array to random positions within array
        for (let i: number = 0; i < cardDeckValues.length; i++) {
            rand = Math.floor(Math.random() * cardDeckValues.length);
            tmp = cardDeckValues[i];
            cardDeckValues[i] = cardDeckValues[rand];
            cardDeckValues[rand] = tmp;
        }
    }

    function turnCards(_event: Event): void {

        // find card that's been clicked on
        clickedCard = <HTMLElement>_event.target;

        // card can't be clicked twice
        clickedCard.removeEventListener("pointerup", turnCards);

        if (clickedCard.classList.contains("turned")) {

            // turn card around to show front/letter
            clickedCard.classList.toggle("turned", false);
            clickedCard.classList.toggle("visible", true);
            clickedCard.style.backgroundColor = <string>formData.get("ColorFront");

        } else {

            // turn card back around to show backside
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
            clickedCard.style.backgroundColor = <string>formData.get("ColorBack");
        }

        turnedCards++;

        if (turnedCards == 1) {
            clickedCard1 = <HTMLElement>_event.target;
            // save letter on clickedCard1 to compare later
            firstCard = clickedCard1.innerText;

        } else if (turnedCards == 2) {
            // remove all event listeners so no more than 2 cards can be turned at once
            allCards = document.querySelectorAll(".cardcontent");
            for (let i: number = 0; i < allCards.length; i++) {
                allCards[i].removeEventListener("pointerup", turnCards);
            }

            setTimeout(compareCards, 2000);

            // save letter on clickedCard1 to compare later
            secondCard = clickedCard.innerText;
        }
    }

    function compareCards(): void {

        if (firstCard == secondCard) {

            // make both cards of the matching pair invisible
            clickedCard.style.visibility = "hidden";
            clickedCard1.style.visibility = "hidden";

            turnedCards = 0;
            finishedPairs++;

        } else if (firstCard != secondCard) {

            // turn first card back around and show backside
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
            clickedCard.style.backgroundColor = <string>formData.get("ColorBack");

            // turn second card back around and show backside
            clickedCard1.classList.toggle("visible", false);
            clickedCard1.classList.toggle("turned", true);
            clickedCard1.style.backgroundColor = <string>formData.get("ColorBack");

            turnedCards = 0;

            // add event listeners back to both cards
            clickedCard1.addEventListener("pointerup", turnCards);
            clickedCard.addEventListener("pointerup", turnCards);
        }

        if (finishedPairs == pairs) {
            stopGame();
        }

        // add event listeners on all cards again
        allCards = document.querySelectorAll(".cardcontent");
        for (let i: number = 0; i < allCards.length; i++) {
            allCards[i].addEventListener("pointerup", turnCards);
        }
    }

    function stopGame(): void {

        // stop timer
        // clearInterval(gameDuration);


        resetGame();

        // show user their winning time
        alert("Herzlichen Glückwunsch! Deine Zeit: " + timer + " Sekunden");

        // reset timer
        timer = 0;
    }

    function resetGame(): void {

        // replace content of playing field with link to reload the page
        playingField = <HTMLDivElement>document.querySelector("div.playingfield");
        playingField.innerHTML = "<a href='memory_form.html'>Noch einmal spielen</a>";

        // get rid of "Viel Spaß beim Spielen!"
        let text: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("text");
        text.style.display = "none";

        // empty card array
        cardDeckValues = [];
    }
}


