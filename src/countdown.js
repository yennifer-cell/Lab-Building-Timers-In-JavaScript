// src/countdown.js

function countdownTimer(duration, interval = 1000) {
    // duration: time in seconds to count down
    // interval: how often to log remaining time (default 1 second)

    let remainingTime = duration;

    // Log the initial time immediately
    console.log(remainingTime);

    const timerId = setInterval(() => {
        remainingTime--;

        if (remainingTime <= 0) {
            console.log(0); // Ensure 0 is logged
            clearInterval(timerId); // Stop the timer
        } else {
            console.log(remainingTime);
        }
    }, interval);

    // Return timer ID for test validation
    return timerId;
}

module.exports = {
    countdownTimer
};

