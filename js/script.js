// ============================================
// ANALOG CLOCK APPLICATION
// A modular, performant clock with theme and timezone support
// ============================================

// ========== CONFIGURATION ==========
const CONFIG = {
    UPDATE_INTERVAL: 1000, // Clock update frequency in milliseconds
    THEME_STORAGE_KEY: 'clockTheme',
    DEGREES_PER_SECOND: 6,
    DEGREES_PER_MINUTE: 6,
    DEGREES_PER_HOUR: 30,
    SMOOTH_SECOND_MULTIPLIER: 0.1,
    SMOOTH_MINUTE_MULTIPLIER: 0.5,
    HOURS_IN_CLOCK: 12
};

// ========== DOM ELEMENT CACHE ==========
// Cache DOM elements for better performance
const DOM = {
    hands: {
        hour: document.getElementById('hourHand'),
        minute: document.getElementById('minuteHand'),
        second: document.getElementById('secondHand')
    },
    displays: {
        digital: document.getElementById('digitalTime'),
        date: document.getElementById('dateDisplay')
    },
    controls: {
        themeToggle: document.getElementById('themeToggle'),
        themeIcon: null, // Will be set in init
        timezoneSelect: document.getElementById('timezoneSelect')
    }
};

// ========== APPLICATION STATE ==========
const state = {
    selectedTimezone: 'local',
    isDarkTheme: false,
    lastUpdateTime: null // Track last update to prevent unnecessary renders
};

// ========== THEME MANAGEMENT MODULE ==========
const ThemeManager = {
    /**
     * Initialize theme from localStorage or system preference
     */
    init() {
        const savedTheme = localStorage.getItem(CONFIG.THEME_STORAGE_KEY);
        
        if (savedTheme === 'dark') {
            this.setDarkTheme();
        } else if (savedTheme === 'light') {
            this.setLightTheme();
        } else {
            // Check system preference if no saved theme
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            prefersDark ? this.setDarkTheme() : this.setLightTheme();
        }
    },

    /**
     * Toggle between light and dark themes
     */
    toggle() {
        state.isDarkTheme ? this.setLightTheme() : this.setDarkTheme();
    },

    /**
     * Set dark theme
     */
    setDarkTheme() {
        state.isDarkTheme = true;
        document.body.classList.add('dark-theme');
        DOM.controls.themeIcon.textContent = '☀️';
        this.savePreference('dark');
    },

    /**
     * Set light theme
     */
    setLightTheme() {
        state.isDarkTheme = false;
        document.body.classList.remove('dark-theme');
        DOM.controls.themeIcon.textContent = '🌙';
        this.savePreference('light');
    },

    /**
     * Save theme preference to localStorage
     * @param {string} theme - 'dark' or 'light'
     */
    savePreference(theme) {
        localStorage.setItem(CONFIG.THEME_STORAGE_KEY, theme);
    }
};

// ========== TIME UTILITIES MODULE ==========
const TimeUtils = {
    /**
     * Get current time based on selected timezone
     * @returns {Date} Date object for the selected timezone
     */
    getCurrentTime() {
        if (state.selectedTimezone === 'local') {
            return new Date();
        }
        
        try {
            const now = new Date();
            const timeString = now.toLocaleString('en-US', { 
                timeZone: state.selectedTimezone 
            });
            return new Date(timeString);
        } catch (error) {
            console.error('Invalid timezone:', error);
            return new Date(); // Fallback to local time
        }
    },

    /**
     * Calculate rotation angles for all clock hands
     * @param {Date} time - Current time
     * @returns {Object} Rotation angles in degrees
     */
    calculateHandAngles(time) {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return {
            second: seconds * CONFIG.DEGREES_PER_SECOND,
            minute: minutes * CONFIG.DEGREES_PER_MINUTE + 
                    seconds * CONFIG.SMOOTH_SECOND_MULTIPLIER,
            hour: (hours % CONFIG.HOURS_IN_CLOCK) * CONFIG.DEGREES_PER_HOUR + 
                  minutes * CONFIG.SMOOTH_MINUTE_MULTIPLIER
        };
    },

    /**
     * Format time for digital display (HH:MM:SS)
     * @param {Date} time - Current time
     * @returns {string} Formatted time string
     */
    formatDigitalTime(time) {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        
        return `${hours}:${minutes}:${seconds}`;
    },

    /**
     * Format date for display (Weekday, Month Day, Year)
     * @param {Date} time - Current time
     * @returns {string} Formatted date string
     */
    formatDate(time) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        return time.toLocaleDateString('en-US', options);
    }
};

// ========== CLOCK RENDERER MODULE ==========
const ClockRenderer = {
    /**
     * Update analog clock hands with rotation
     * Uses transform for better performance than other CSS properties
     * @param {Object} angles - Rotation angles for each hand
     */
    updateAnalogHands(angles) {
        // Use transform for GPU acceleration
        DOM.hands.second.style.transform = 
            `translateX(-50%) rotate(${angles.second}deg)`;
        DOM.hands.minute.style.transform = 
            `translateX(-50%) rotate(${angles.minute}deg)`;
        DOM.hands.hour.style.transform = 
            `translateX(-50%) rotate(${angles.hour}deg)`;
    },

    /**
     * Update digital time display
     * @param {string} timeString - Formatted time string
     */
    updateDigitalTime(timeString) {
        // Only update if content has changed (performance optimization)
        if (DOM.displays.digital.textContent !== timeString) {
            DOM.displays.digital.textContent = timeString;
        }
    },

    /**
     * Update date display
     * @param {string} dateString - Formatted date string
     */
    updateDateDisplay(dateString) {
        // Only update if content has changed (performance optimization)
        if (DOM.displays.date.textContent !== dateString) {
            DOM.displays.date.textContent = dateString;
        }
    }
};

// ========== CLOCK CONTROLLER MODULE ==========
const ClockController = {
    /**
     * Main update function - orchestrates all clock updates
     * Called every second by setInterval
     */
    update() {
        const currentTime = TimeUtils.getCurrentTime();
        
        // Calculate angles for analog clock
        const angles = TimeUtils.calculateHandAngles(currentTime);
        ClockRenderer.updateAnalogHands(angles);
        
        // Update digital displays
        const digitalTime = TimeUtils.formatDigitalTime(currentTime);
        ClockRenderer.updateDigitalTime(digitalTime);
        
        const dateString = TimeUtils.formatDate(currentTime);
        ClockRenderer.updateDateDisplay(dateString);
        
        // Store last update time for debugging
        state.lastUpdateTime = currentTime;
    },

    /**
     * Handle timezone change event
     * @param {string} timezone - Selected timezone value
     */
    handleTimezoneChange(timezone) {
        state.selectedTimezone = timezone;
        this.update(); // Immediate update on timezone change
    },

    /**
     * Start the clock update loop
     */
    start() {
        this.update(); // Initial update
        setInterval(() => this.update(), CONFIG.UPDATE_INTERVAL);
    }
};

// ========== EVENT HANDLERS ==========
const EventHandlers = {
    /**
     * Initialize all event listeners
     */
    init() {
        // Theme toggle button
        DOM.controls.themeToggle.addEventListener('click', () => {
            ThemeManager.toggle();
        });

        // Timezone selector
        DOM.controls.timezoneSelect.addEventListener('change', (event) => {
            ClockController.handleTimezoneChange(event.target.value);
        });

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                if (!localStorage.getItem(CONFIG.THEME_STORAGE_KEY)) {
                    event.matches ? ThemeManager.setDarkTheme() : ThemeManager.setLightTheme();
                }
            });
    }
};

// ========== APPLICATION INITIALIZATION ==========
/**
 * Initialize the clock application
 * Sets up DOM references, theme, and starts the clock
 */
function initializeApp() {
    // Set up theme icon reference
    DOM.controls.themeIcon = DOM.controls.themeToggle.querySelector('.theme-icon');
    
    // Initialize modules
    ThemeManager.init();
    EventHandlers.init();
    ClockController.start();
    
    console.log('✓ Analog Clock initialized successfully');
    console.log('✓ Features: Theme toggle, Timezone support, Digital display');
}

// ========== START APPLICATION ==========
// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
