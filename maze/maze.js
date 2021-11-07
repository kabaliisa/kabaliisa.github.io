$(document).ready(function() {
    $("#start").click(reset);
    $(".boundary").mouseover(red);
    $("#end").mouseover(end);
});

let isWallHit = false;
let reset = () => {
    isWallHit = false;
    $(".boundary").removeClass("youlose");
    $("#status").text('Click the "S" to begin. ');
}

let red = () => {
    isWallHit = true;
    $(".boundary").addClass("youlose");
}

let end = () => {
    if (!isWallHit) {
        $("#status").text("You win! :]");
    } else {
        $("#status").text("You lost! :[");
    }
}