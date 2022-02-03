var timer = document.getElementById("timer");
var trigger = document.getElementById("trigger");
var reset = document.getElementById("reset");

function startTimer(duration) {
    let data = duration, minutes, seconds;
    setInterval(function() {
        minutes = parseInt(data / 60, 10);
        seconds = parseInt(data % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timer.innerHTML = minutes + "m " + seconds + "s";
        console.log(minutes, seconds);
        
        if (--data < 0) {
            data = duration;
        }
    }, 1000);
}

window.onload = function() {
    let oneHour = 20;
    startTimer(oneHour);
}