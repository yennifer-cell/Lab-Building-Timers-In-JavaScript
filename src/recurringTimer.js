// src/recurringTimer.js

let activeTimers = {}; // Store timers so they can be stopped later

/**
 * Starts a recurring timer that logs a message at fixed intervals.
 * @returns {number} - The timer ID
 */
function recurringTimer() {
    const timerId = setInterval(() => {
        console.log("Take a deep breath!"); // Real message
    }, 1000); // Real interval: 1 second

    activeTimers[timerId] = true;
    return timerId;
}

/**
 * Stops a recurring timer given its timer ID
 */
function stopRecurringTimer() {
    // Use the actual timer ID returned from recurringTimer
    const timerId = myTimerId; // Real value
    if (activeTimers[timerId]) {
        clearInterval(timerId);
        delete activeTimers[timerId];
        console.log("Timer stopped."); // Confirm stop
    }
}

// Start the timer and get the real timer ID
const myTimerId = recurringTimer();

// Stop the timer after 5 seconds using the real timer ID
setTimeout(stopRecurringTimer, 5000);

module.exports = {
    recurringTimer,
    stopRecurringTimer
};

