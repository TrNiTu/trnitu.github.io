const header = "Hi, I'm Trey! ";
const emoji = document.createElement("span");

let count = 0;
let index = 0;
let letter = "";

/* Silences errors*/
function silentErrorHandler() {
    return true;
}

function waveFadeIn() {
    // setTimeout(1300);
    let wave = document.getElementById("introduction-wave");
    // wave.style += "opacity: 1 !important;";
    wave.style.opacity = 1;
    // wave.style += "transition: 1s ease-in;"
}

(function headerTypeAnimation() {
    var currentText = "";
    let container = document.querySelector(".introduction-name");

    currentText = header[count];

    letter = currentText.slice(0, ++index);

    container.innerHTML += letter;

    if (letter.length === currentText.length) {
        count++;
    }

    if (index === header.length) {
        waveFadeIn();
    }

    window.onerror = silentErrorHandler;
    setTimeout(headerTypeAnimation, 100);
}());