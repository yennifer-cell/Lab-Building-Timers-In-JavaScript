// src/countdown.js

/**
 * Logs remaining time at 1-second intervals and stops at 0.
 * Uses a hardcoded duration of 5 seconds for testing.
 * 
 * @returns {number} The ID of the interval timer.
 */
function countdownTimer() {
    let remainingTime = 5; // Hardcoded duration in seconds

    const timerId = setInterval(() => {
        console.log(remainingTime);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(timerId);
        }
    }, 1000); // 1-second interval

    return timerId; // Return timer ID for test validation
}

// Example usage:
// countdownTimer();

module.exports = { countdownTimer };

