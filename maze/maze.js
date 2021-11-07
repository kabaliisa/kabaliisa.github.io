$(document).ready(function() {
    $("#start").click(reset);
    $(".boundary").mouseover(red);
    $("#end").mouseover(end);
});

let isWallHit = false;
let isStarted = false;
let reset = () => {
    isWallHit = false;
    isStarted = true;
    $(".boundary").removeClass("youlose");
    $("#status").text('Click the "S" to begin. ');
}

let red = () => {
    if (isStarted) {
        isWallHit = true;
        $(".boundary").addClass("youlose");
    }
}

let end = () => {
    if (isStarted) {
        if (!isWallHit) {
            $("#status").text("You win! :]");
        } else {
            $("#status").text("You lost! :[");
        }
    }
    isStarted = false;
}