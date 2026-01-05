// src/reminder.js

function delayedReminder(message, delay) {
    // message: string to log
    // delay: time in milliseconds to wait before logging

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message); // Log the reminder
            resolve(); // Confirm that the reminder was logged
        }, delay);
    });
}

module.exports = {
    delayedReminder
};
