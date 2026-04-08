// Analog Clock JavaScript - Modular Structure

// ========== DOM Elements ==========
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');
const digitalTime = document.getElementById('digitalTime');
const dateDisplay = document.getElementById('dateDisplay');
const themeToggle = document.getElementById('themeToggle');
const timezoneSelect = document.getElementById('timezoneSelect');

// ========== State Management ==========
let selectedTimezone = 'local';
let isDarkTheme = false;

// ========== Theme Management ==========
/**
 * Initialize theme from localStorage
 */
function initTheme() {
    const savedTheme = localStorage.getItem('clockTheme');
    if (savedTheme === 'dark') {
        isDarkTheme = true;
        document.body.classList.add('dark-theme');
        themeToggle.querySelector('.theme-icon').textContent = '☀️';
    }
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme');
    
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = isDarkTheme ? '☀️' : '🌙';
    
    localStorage.setItem('clockTheme', isDarkTheme ? 'dark' : 'light');
}

// ========== Time Calculation ==========
/**
 * Get current time based on selected timezone
 * @returns {Date} Date object for the selected timezone
 */
function getCurrentTime() {
    if (selectedTimezone === 'local') {
        return new Date();
    }
    
    const now = new Date();
    const localTime = now.toLocaleString('en-US', { timeZone: selectedTimezone });
    return new Date(localTime);
}

/**
 * Calculate rotation angles for clock hands
 * @param {Date} time - Current time
 * @returns {Object} Rotation angles for each hand
 */
function calculateAngles(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return {
        second: seconds * 6,
        minute: minutes * 6 + seconds * 0.1,
        hour: (hours % 12) * 30 + minutes * 0.5
    };
}

// ========== Clock Updates ==========
/**
 * Update analog clock hands
 * @param {Object} angles - Rotation angles for hands
 */
function updateAnalogClock(angles) {
    secondHand.style.transform = `translateX(-50%) rotate(${angles.second}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${angles.minute}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${angles.hour}deg)`;
}

/**
 * Update digital time display
 * @param {Date} time - Current time
 */
function updateDigitalDisplay(time) {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    
    digitalTime.textContent = `${hours}:${minutes}:${seconds}`;
}

/**
 * Update date display
 * @param {Date} time - Current time
 */
function updateDateDisplay(time) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    dateDisplay.textContent = time.toLocaleDateString('en-US', options);
}

/**
 * Main update function - updates all clock components
 */
function updateClock() {
    const currentTime = getCurrentTime();
    const angles = calculateAngles(currentTime);
    
    updateAnalogClock(angles);
    updateDigitalDisplay(currentTime);
    updateDateDisplay(currentTime);
}

// ========== Event Listeners ==========
themeToggle.addEventListener('click', toggleTheme);

timezoneSelect.addEventListener('change', (e) => {
    selectedTimezone = e.target.value;
    updateClock();
});

// ========== Initialization ==========
initTheme();
updateClock();
setInterval(updateClock, 1000);

console.log('Analog Clock with advanced features initialized');
