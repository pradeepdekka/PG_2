// Variables to store time values
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

// Flag to check if stopwatch is running
let running = false;

// Function to start the stopwatch
function startStopwatch() {
    if (!running) {
        running = true;
        interval = setInterval(updateTime, 10); // Update every 10 milliseconds for smoother timing
    }
}

// Function to stop the stopwatch
function stopStopwatch() {
    running = false;
    clearInterval(interval);
}

// Function to reset the stopwatch
function resetStopwatch() {
    running = false;
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.querySelector('.time-display').innerText = '00:00:00';
    document.getElementById('laps').innerHTML = ''; // Clear laps
}

// Function to record a lap
function lapStopwatch() {
    if (running) {
        const lapTime = formatTime(hours, minutes, seconds);
        const lapElement = document.createElement('div');
        lapElement.innerText = `Lap: ${lapTime}`;
        document.getElementById('laps').appendChild(lapElement);
    }
}

// Function to update the time display
function updateTime() {
    milliseconds += 10;

    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    // Display the updated time
    document.querySelector('.time-display').innerText = formatTime(hours, minutes, seconds);
}

// Function to format time as hh:mm:ss
function formatTime(h, m, s) {
    return (
        (h < 10 ? '0' + h : h) + ':' +
        (m < 10 ? '0' + m : m) + ':' +
        (s < 10 ? '0' + s : s)
    );
}

// Event listeners for the buttons
document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', lapStopwatch);
