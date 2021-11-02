window.onload = function() {
    document.getElementById("stop").disabled = true;
}


function animationSelector() {
    let animation = document.getElementById("animation").value;
    document.getElementById("mytextarea").value = ANIMATIONS[animation];
}

let fonts = {
    tiny: "7pt",
    small: "10pt",
    medium: "12pt",
    large: "16pt",
    extraLarge: "24pt",
    xxl: "32pt"
}


function fontSelector() {
    let size = document.getElementById("font").value;
    document.getElementById("mytextarea").style.fontSize = fonts[size];
}

let frames;
let i = 0;
let timeInterval = null;
var myspeed = 250;

function start() {
    let animation = document.getElementById("mytextarea").value;
    frames = animation.split("=====\n");
    timeInterval = setInterval(setAnime, myspeed);
    document.getElementById("stop").disabled = false;
    checkProgress();
}

function checkProgress() {
    if (timeInterval !== null) {
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
    }
}

function setAnime() {
    if (i < frames.length) {
        document.getElementById("mytextarea").value = frames[i];
        i++;
    } else {
        i = 0;
    }
}

function speed() {
    let turboCheckbox = document.getElementById("mycheck");

    if (frames !== undefined) {
        if (turboCheckbox.checked) {
            myspeed = 50;
            clearInterval(timeInterval);
            timeInterval = setInterval(setAnime, myspeed)

        } else {
            myspeed = 250;
            clearInterval(timeInterval);
            timeInterval = setInterval(setAnime, myspeed)
        }
    }
}

function stop() {
    clearInterval(timeInterval);
    timeInterval = null;
    animationSelector();
}