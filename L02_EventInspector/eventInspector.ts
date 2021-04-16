namespace L02_EventInspector {

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);

        let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

        for (let i: number = 0; i < divs.length; i++) {
            divs[i].addEventListener("keyup", logInfo);
            divs[i].addEventListener("click", logInfo);
        }
    }

    function setInfoBox(_event: MouseEvent): void {
        let xpos: number = _event.pageX + 30; 
        let ypos: number = _event.pageY + 30;
        // console.log(xpos + ", " + ypos);
        let span: HTMLSpanElement = document.getElementsByTagName("span")[0];
        span.style.left = xpos.toString() + "px";
        span.style.top = ypos.toString() + "px";
        span.innerHTML = "x-Postion: " + xpos + "px, " + "y-Postion: " + ypos + "px" + "<br/>" + _event.target;
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
}