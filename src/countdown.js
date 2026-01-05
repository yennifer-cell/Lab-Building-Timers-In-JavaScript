// src/countdown.js

function countdownTimer(duration, interval = 1000) {
    let remainingTime = duration;

    const timerId = setInterval(() => {
        console.log(remainingTime);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timerId);
        }
    }, interval);

    return timerId;
}

module.exports = { countdownTimer };


