//your JS code here. If required.
let timerDisplay = document.getElementById("timer");

// Set current date and time
let currentDate = new Date();

// Update the time 
setInterval(() => {
	currentDate = new Date();
	timerDisplay.innerHTML = currentDate.toLocaleString();
}, 1000)