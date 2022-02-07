// HTML elements for timer functionality
var timer = document.getElementById("timer");
var trigger = document.getElementById("trigger");
var reset = document.getElementById("reset");

// Alarm sound file
const alarm = new Audio("audio/mixkit-happy-bells-notification.wav");

var remainingTime = 3600;
var isStudyBlock = true;
var isPaused = true;

var t = setInterval(function() {
    if (!isPaused) {
        let minutes = parseInt(remainingTime / 60, 10);
        timer.innerHTML = minutes + "min";
        remainingTime--;

        if (remainingTime == 0) {
            if (isStudyBlock) {
                remainingTime = 600;
                alarm.play();
            } else {
                remainingTime = 3600;
                alarm.play();
            }
            isStudyBlock = !isStudyBlock;
        }
    }
}, 1000);

trigger.addEventListener("click", function() {
    trigger.innerHTML = isPaused ? "pause" : "resume";
    isPaused = !isPaused;
});

reset.addEventListener("click", function() {
    trigger.innerHTML = "start";
    timer.innerHTML = "Study Timer";
    isPaused = true;
    remainingTime = 3600;
});