
/* This function hides the loader circle when the DOM is done loading */
function onLoad() {
    let loader = document.getElementById("loader");
    loader.style.display = "none";
}
function skillsShowContent(id) {
    document.getElementById(id).classList.remove("skills-hide");
}

function skillsHideContent(id) {
    document.getElementById(id).classList.add("skills-hide");
}