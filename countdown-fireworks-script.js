// Set the countdown timer target date
const countdownDate = moment("2022-12-30 15:30:00", "YYYY-MM-DD HH:mm:ss").endOf('minute');

// Set the countdown timer update interval (in milliseconds)
const updateInterval = 1000;

// Get a reference to the countdown timer element
const countdownTimeElement = document.getElementById('countdown-time');

// Set the initial countdown timer text
countdownTimeElement.textContent = getCountdownTime();

// Start the countdown timer
const countdownTimer = setInterval(updateCountdownTimer, updateInterval);

// Update the countdown timer
function updateCountdownTimer() {
  // Get the current countdown time
  const time = getCountdownTime();

  // Update the countdown timer element
  countdownTimeElement.textContent = time;

  // If the countdown has reached 0, stop the countdown timer and start the fireworks
  if (time === '0 days 0 hours 0 minutes') {
    clearInterval(countdownTimer);
    startFireworks();
  }
}

// Get the current countdown time
function getCountdownTime() {
  // Get the current date and time
  const now = moment();

  // Calculate the time remaining until the target date
  const timeRemaining = moment.duration(countdownDate.diff(now));

  // Format the time remaining as "X days Y hours Z minutes"
  let timeString = '';
  if (timeRemaining.days() > 0) {
    timeString += timeRemaining.days() + ' days ';
  }
  if (timeRemaining.hours() > 0) {
    timeString += timeRemaining.hours() + ' hours ';
  }
  if (timeRemaining.minutes() > 0) {
    timeString += timeRemaining.minutes() + ' minutes';
  }
  if (timeRemaining.seconds() > 0) {
    timeString += timeRemaining.seconds() + ' seconds';
  }

  // Return the formatted time string
  return timeString;
}

// Start the fireworks display
function startFireworks() {
  // Initialize the fireworks display
  const fireworks = new Fireworks(document.getElementById('fireworks'));

  // Start the fireworks display
  fireworks.start();
}
