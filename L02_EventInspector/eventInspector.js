"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let divs = document.querySelectorAll("div");
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener("keyup", logInfo);
            divs[i].addEventListener("click", logInfo);
        }
    }
    function setInfoBox(_event) {
        let xpos = _event.pageX + 30;
        let ypos = _event.pageY + 30;
        // console.log(xpos + ", " + ypos);
        let span = document.getElementsByTagName("span")[0];
        span.style.left = xpos.toString() + "px";
        span.style.top = ypos.toString() + "px";
        span.innerHTML = "x-Postion: " + xpos + "px, " + "y-Postion: " + ypos + "px" + "<br/>" + _event.target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=eventInspector.js.map