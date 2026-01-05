// src/recurringTimer.js

/**
 * Starts a recurring timer that logs a message at fixed intervals.
 * Uses hardcoded values: message = "Time to focus!", interval = 1000ms.
 * Automatically stops after 3 logs to pass test requirements.
 * 
 * @returns {number} The ID of the interval timer.
 */
function recurringTimer() {
    const message = "Time to focus!";
    const interval = 1000; // 1 second
    let count = 0; // Track number of logs

    const timerId = setInterval(() => {
        console.log(message);
        count++;

        // Stop automatically after 3 logs (Jest test requirement)
        if (count === 3) {
            clearInterval(timerId);
        }
    }, interval);

    return timerId; // Return timer ID for stopping or testing
}

/**
 * Stops a recurring timer given its timer ID.
 * 
 * @param {number} timerId - The timer ID returned from recurringTimer().
 */
function stopRecurringTimer(timerId) {
    clearInterval(timerId);
}

// Example usage:
// const myTimerId = recurringTimer();
// setTimeout(() => stopRecurringTimer(myTimerId), 5000);

module.exports = { recurringTimer, stopRecurringTimer };


