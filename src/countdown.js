/**
 * Starts a countdown from a given number of seconds.
 * Logs the remaining time every second and stops at 0.
 */
function startCountdown(seconds) {
    let remainingTime = seconds;

    console.log(`Timer started: ${remainingTime}s`);

    const timerId = setInterval(() => {
        remainingTime--;

        if(remainingTime > 0) {
            console.log(`Time remaining: ${remainingTime}s`);
        } else {
            console.log("Time's up!");
            clearInterval(timerId);
        }
    }, 1000);

    // Return the timer ID for test validation as required
    return timerId;
}

// Example usage for January 2026 Lab:
const myTimerId = startCountdown(5);


