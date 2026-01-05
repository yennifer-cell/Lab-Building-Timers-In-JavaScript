/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 */
function countdownTimer(startTime, interval) {
  // 1. Initialize the remaining time
  let remainingTime = startTime;

  // 2. Set up a timer using setInterval to decrement time and log it
  const timerId = setInterval(() => {
    console.log(`Remaining time: ${remainingTime}s`);
    
    // Decrement the time
    remainingTime--;

    // 3. Stop the timer when time reaches 0
    if (remainingTime < 0) {
      clearInterval(timerId);
      console.log("Countdown complete.");
    }
  }, interval);

  // 4. Return the timer ID for validation
  return timerId;
}

module.exports = { countdownTimer };
