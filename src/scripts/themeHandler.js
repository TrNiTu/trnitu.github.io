const LIGHTTHEME = "lightTheme";
const DARKTHEME = "darkTheme";

function onClick() {
    let body = document.body;
    let bulb = document.querySelector("[data-theme]");
   
    if (body.classList.contains(LIGHTTHEME)) {
        body.classList.replace(LIGHTTHEME, DARKTHEME);
        bulb.setAttribute("data-theme", DARKTHEME)
    } else if (body.classList.contains(DARKTHEME)) {
        body.classList.replace(DARKTHEME, LIGHTTHEME);
        bulb.setAttribute("data-theme", LIGHTTHEME)
    } else {
        console.error("test");
        throw new Error(Error + ": invalid class");
    }
}