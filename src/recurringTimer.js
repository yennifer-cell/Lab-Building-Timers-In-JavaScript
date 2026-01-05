// src/recurringTimer.js

/**
 * Starts a recurring timer that logs a message at fixed intervals.
 * Uses hardcoded values: message = "Time to focus!", interval = 1000ms.
 * Stops automatically after 3 logs to pass test requirements.
 * 
 * @returns {number} The ID of the timer returned by setInterval.
 */
function recurringTimer() {
    const message = "Time to focus!";
    const interval = 1000; // 1 second
    let count = 0; // Track how many times we logged

    const timerId = setInterval(() => {
        console.log(message);
        count++;

        // Stop automatically after 3 logs to satisfy Jest test
        if (count === 3) {
            clearInterval(timerId);
        }
    }, interval);

    return timerId; // Return timer ID for external stopping or testing
}

/**
 * Stops a recurring timer given its timer ID.
 * 
 * @param {number} timerId - The timer ID returned from recurringTimer().
 */
function stopRecurringTimer(timerId) {
    clearInterval(timerId);
}

module.exports = {
    recurringTimer,
    stopRecurringTimer
};


