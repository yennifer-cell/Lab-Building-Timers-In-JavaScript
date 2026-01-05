// src/reminder.js

/**
 * Logs a reminder message after a delay.
 * Uses hardcoded values: message = "Time to take a break!", delay = 3000ms.
 * 
 * @returns {Promise<void>} Resolves when the message has been logged.
 */
function delayedReminder() {
    const message = "Time to take a break!";
    const delay = 3000; // 3 seconds

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Example usage:
// delayedReminder().then(() => console.log("Reminder done"));

module.exports = { delayedReminder };
