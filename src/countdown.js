// src/countdown.js

/**
 * Countdown timer that logs remaining time at 1-second intervals until 0
 * @returns {number} - Timer ID for test validation
 */
function countdownTimer() {
    let remainingTime = 5; // Hardcoded countdown duration in seconds

    // Create the interval
    const timerId = setInterval(() => {
        console.log(remainingTime); // Log the remaining time
        remainingTime--; // Decrease by 1

        // Stop the timer when it reaches below 0
        if (remainingTime < 0) {
            clearInterval(timerId);
        }
    }, 1000); // 1-second interval

    return timerId; // Return timer ID for test validation
}

// Example usage
// countdownTimer();

module.exports = { countdownTimer };

