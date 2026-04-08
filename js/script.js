// Analog Clock JavaScript

// Get clock hand elements
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

// Function to set clock hands based on current time
function setClock() {
    // Get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate rotation angles
    // Second hand: 360° / 60 seconds = 6° per second
    const secondDegrees = (seconds * 6);

    // Minute hand: 360° / 60 minutes = 6° per minute
    // Add extra rotation based on seconds for smooth movement
    const minuteDegrees = (minutes * 6) + (seconds * 0.1);

    // Hour hand: 360° / 12 hours = 30° per hour
    // Add extra rotation based on minutes for smooth movement
    const hourDegrees = (hours % 12) * 30 + (minutes * 0.5);

    // Apply rotation to clock hands
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;

    console.log(`Time: ${hours}:${minutes}:${seconds}`);
    console.log(`Angles - Hour: ${hourDegrees}°, Minute: ${minuteDegrees}°, Second: ${secondDegrees}°`);
}

// Initialize clock on page load
setClock();
