# ⏰ Analog Clock

A beautiful, feature-rich analog clock application built with vanilla JavaScript, HTML5, and CSS3. Features real-time updates, dark/light theme toggle, timezone support, and a responsive design that works seamlessly across all devices.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![CSS3](https://img.shields.io/badge/CSS3-Responsive-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-Semantic-orange.svg)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Code Architecture](#code-architecture)
- [Browser Support](#browser-support)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## ✨ Features

### Core Functionality
- **Real-Time Clock**: Accurate analog clock with smooth hand movements
- **Digital Display**: Complementary digital time display (HH:MM:SS format)
- **Date Display**: Full date with weekday, month, day, and year
- **Smooth Animations**: CSS transitions with cubic-bezier easing for natural movement

### Advanced Features
- **Dark/Light Theme Toggle**: Switch between themes with preference persistence
- **Timezone Support**: Select from 10 major world timezones
- **System Theme Detection**: Automatically adapts to system preferences
- **Local Storage**: Remembers your theme preference

### Design & UX
- **Fully Responsive**: Optimized for all screen sizes (320px to 4K)
- **Modern UI**: Gradient backgrounds, glassmorphism effects, and smooth shadows
- **Accessible**: Semantic HTML and ARIA labels
- **Touch-Friendly**: Large touch targets for mobile devices
- **Landscape Support**: Special optimizations for landscape orientation

### Performance
- **Optimized Rendering**: DOM element caching and conditional updates
- **GPU Acceleration**: CSS transforms for smooth animations
- **Modular Code**: Clean, maintainable architecture with separation of concerns
- **Lightweight**: No external dependencies, pure vanilla JavaScript

## 🎯 Demo

### Light Theme
The clock features a clean, modern light theme with:
- White clock face with gradient background
- Dark hands for high contrast
- Purple gradient page background
- Glassmorphism UI elements

### Dark Theme
The dark theme provides:
- Dark clock face with light hands
- Reduced eye strain for night viewing
- Consistent design language
- Smooth theme transitions

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: 
  - CSS Custom Properties (CSS Variables)
  - Flexbox for layout
  - CSS Grid concepts
  - Media Queries for responsiveness
  - CSS Transforms and Transitions
  - Clamp() for fluid typography
  - Backdrop filters for glassmorphism
- **JavaScript (ES6+)**:
  - Modular architecture
  - Date API for time calculations
  - LocalStorage API for persistence
  - DOM manipulation
  - Event handling
  - Arrow functions and template literals

### Development Practices
- Clean code principles
- Modular design patterns
- Performance optimization
- Cross-browser compatibility
- Mobile-first approach

## 📦 Installation

### Option 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Shme-CS/js-analog-clock.git

# Navigate to project directory
cd js-analog-clock

# Open in browser
# Simply open index.html in your preferred browser
```

### Option 2: Download ZIP

1. Download the ZIP file from the repository
2. Extract the contents
3. Open `index.html` in your web browser

### Option 3: Live Server (Recommended for Development)

```bash
# If you have VS Code with Live Server extension
# Right-click on index.html and select "Open with Live Server"

# Or use Python's built-in server
python -m http.server 8000

# Or use Node.js http-server
npx http-server
```

## 🚀 Usage

### Basic Usage

1. **Open the Application**: Open `index.html` in any modern web browser
2. **View Time**: The clock displays your current local time by default
3. **Toggle Theme**: Click the moon/sun icon to switch between dark and light themes
4. **Change Timezone**: Use the dropdown menu to view time in different timezones

### Features Guide

#### Theme Toggle
- Click the theme button (🌙/☀️) in the header
- Your preference is automatically saved
- The app respects your system theme on first visit

#### Timezone Selection
- Select from the dropdown menu:
  - Local Time (default)
  - New York (EST)
  - Los Angeles (PST)
  - Chicago (CST)
  - London (GMT)
  - Paris (CET)
  - Tokyo (JST)
  - Dubai (GST)
  - Shanghai (CST)
  - Sydney (AEDT)

#### Digital Display
- Shows time in 24-hour format
- Updates every second
- Synchronized with analog clock

## 📁 Project Structure

```
js-analog-clock/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   └── script.js          # Modular JavaScript logic
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

### File Descriptions

- **index.html**: Semantic HTML structure with accessibility features
- **style.css**: Complete styling including themes, animations, and responsive design
- **script.js**: Modular JavaScript with separated concerns (Theme, Time, Rendering, Controller)

## 🏗 Code Architecture

### JavaScript Modules

```javascript
// Configuration
CONFIG                    // Application constants

// DOM Management
DOM                       // Cached DOM elements

// State Management
state                     // Application state

// Modules
ThemeManager             // Theme switching and persistence
TimeUtils                // Time calculations and formatting
ClockRenderer            // DOM updates and rendering
ClockController          // Main application logic
EventHandlers            // Event listener management
```

### Key Design Patterns

- **Module Pattern**: Organized code into logical modules
- **Separation of Concerns**: Each module has a single responsibility
- **Performance Optimization**: DOM caching and conditional rendering
- **Configuration Management**: Centralized constants

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Minimum Requirements
- CSS Custom Properties support
- ES6 JavaScript support
- CSS Grid and Flexbox support

## 🔮 Future Improvements

### Planned Features
- [ ] Multiple clock faces (Roman numerals, minimalist, etc.)
- [ ] Alarm functionality
- [ ] Stopwatch and timer modes
- [ ] Sound effects toggle
- [ ] Custom timezone addition
- [ ] 12/24 hour format toggle
- [ ] Export clock as image
- [ ] Multiple clocks for different timezones
- [ ] Customizable colors and themes
- [ ] Keyboard shortcuts

### Technical Improvements
- [ ] Add unit tests (Jest)
- [ ] Implement service worker for offline support
- [ ] Add TypeScript for type safety
- [ ] Create build process with bundler
- [ ] Add CSS preprocessor (SASS/LESS)
- [ ] Implement accessibility audit
- [ ] Add internationalization (i18n)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test on multiple browsers
- Update documentation as needed
- Keep commits atomic and descriptive

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Shme-CS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👤 Author

**Shme-CS**

- GitHub: [@Shme-CS](https://github.com/Shme-CS)
- Project Link: [https://github.com/Shme-CS/js-analog-clock](https://github.com/Shme-CS/js-analog-clock)

## 🙏 Acknowledgments

- Inspired by classic analog clock designs
- Built with modern web technologies
- Thanks to the open-source community

---

⭐ If you found this project helpful, please consider giving it a star!

**Made with ❤️ and JavaScript**

