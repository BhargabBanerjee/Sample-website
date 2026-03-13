function updateDashboard() {
    const now = new Date();

    // Update the Clock
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;

    // Change Greeting based on time
    const hours = now.getHours();
    let message = "Good Evening!";
    if (hours < 12) message = "Good Morning!";
    else if (hours < 18) message = "Good Afternoon!";

    document.getElementById('greeting').textContent = message;
}

// Run the function every second
setInterval(updateDashboard, 1000);
updateDashboard(); // Initial call