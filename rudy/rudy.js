// var rudyTimer = (
//     function() {
//         timer = null;

//         function rudy() {
//             document.getElementById("output").innerHTML += " Rudy!";
//         }
//         var f = function delayMsg2() {
//             if (timer === null) {
//                 timer = setInterval(rudy, 1000)
//             }
//         }
//         return f;
//     }
// )();

var rudyTimer = (function() {
    timer = null; // stores ID of interval timer 
    function rudy() { // called each time the timer goes off
        document.getElementById("output").innerHTML += " Rudy!";
    }
    var mytimer = function delayMsg2() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }


    return mytimer;
})();