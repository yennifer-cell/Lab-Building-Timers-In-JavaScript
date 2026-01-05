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

// Example usage
// delayedReminder().then(() => console.log("Reminder done"));

module.exports = { delayedReminder };

