let currentIndex = 0;
let darkMode = true; // Default to dark mode

document.addEventListener("DOMContentLoaded", () => {
    const iconElement = document.getElementById("theme-icon-img");

    // Set initial theme and icon based on darkMode variable
    if (darkMode) {
        document.body.classList.remove("light-mode");
        iconElement.src = "icons/light-mode.png"; // Icon to switch to light mode
    } else {
        document.body.classList.add("light-mode");
        iconElement.src = "icons/dark-mode.png"; // Icon to switch to dark mode
    }
});

function toggleTheme() {
    // Toggle the darkMode variable
    darkMode = !darkMode;

    // Update the body class and icon based on darkMode
    document.body.classList.toggle("light-mode", !darkMode);

    const iconElement = document.getElementById("theme-icon-img");
    iconElement.src = darkMode ? "icons/light-mode.png" : "icons/dark-mode.png";
}

function changeColor() {
    const colors = [
        '#07f41f', '#e90bd3', '#ff0000', '#0727f4', '#a72608', '#7F0799', '#e03616',
        '#0582CA', '#EE6352', '#FF6B6B', '#840032', '#004fff', '#FF4A1C', '#E71D36',
        '#B91372', '#138A36', '#E9D758', '#C20114', '#F2BB05', '#D00000', '#0000FF',
        '#00ff00', '#ff00ff'
    ];
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex];

    // Set link hover color based on selected color
    document.documentElement.style.setProperty('--link-hover-color', newColor);

    // Update the Illusions graphic colors
    const container = document.querySelector('.bg-inverse-landing');
    const elements = container.querySelectorAll('.bg-primary-landing');
    elements.forEach(element => {
        element.style.backgroundColor = newColor;
    });
}

// Initialize event listeners and set initial theme state
changeColor();