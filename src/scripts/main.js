// these counters are very very important to me
const COUNTERONE = calculateDayDifference(new Date("06/24/2022"));
const COUNTERTWO = calculateDayDifference(new Date("07/30/2022"));

/* This function hides the loader circle when the DOM is done loading */
function onLoad() {
    let loader = document.getElementById("loader");
    loader.style.display = "none";
    displayCounters();
}
function skillsShowContent(id) {
    document.getElementById(id).classList.remove("skills-hide");
}

function skillsHideContent(id) {
    document.getElementById(id).classList.add("skills-hide");
}

/* this function calculates the difference between two days in days */
function calculateDayDifference(day) {
    var today = new Date();
    var timeDifference = today.getTime() - day.getTime();
    var dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return dayDifference;
}

/* This function displays the counters onto the DOM */
function displayCounters() {
    let target = document.querySelector("[data-navbar-counters]");
    target.innerHTML = COUNTERONE + " | " + COUNTERTWO;
}
