let currentIndex = 0;
let darkMode = true; // Default to dark mode

document.addEventListener("DOMContentLoaded", () => {

    changeColor();

    const navbar = document.getElementById("navbar");

    // Set threshold in pixels for when to hide the navbar
    const hideThreshold = 200; // Adjust as needed

    // Scroll event listener
    window.addEventListener("scroll", () => {
        if (window.scrollY > hideThreshold) {
            navbar.classList.add("hide-navbar"); // Hide navbar after threshold
        } else {
            navbar.classList.remove("hide-navbar"); // Show navbar when above threshold
        }
    });

    // Initialize theme and icon
    const iconElement = document.getElementById("theme-icon-img");
    if (darkMode) {
        document.body.classList.remove("light-mode");
        iconElement.src = "icons/light-mode.png";
    } else {
        document.body.classList.add("light-mode");
        iconElement.src = "icons/dark-mode.png";
    }
});

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle("light-mode", !darkMode);

    const iconElement = document.getElementById("theme-icon-img");
    iconElement.src = darkMode ? "icons/light-mode.png" : "icons/dark-mode.png";
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const screenOverlay = document.getElementById("screenOverlay");

  mobileMenu.classList.toggle("show");
  screenOverlay.classList.toggle("show");
}

function changeColor() {
    const colors = [
        '#07f41f', '#FF0000', '#e90bd3', '#0000f', '#0727f4', '#a72608', '#7F0799', '#e03616',
        '#0582CA', '#EE6352', '#FF6B6B', '#840032', '#004fff', '#FF4A1C', '#E71D36',
        '#B91372', '#138A36', '#E9D758', '#C20114', '#F2BB05', '#D00000', '#0000FF',
        '#00ff00', '#ff00ff', 
    ];
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex];

    // Set hover color and Illusions graphic color
    document.documentElement.style.setProperty('--link-hover-color', newColor);

    const container = document.querySelector('.bg-inverse-landing');
    const elements = container.querySelectorAll('.bg-primary-landing');
    elements.forEach(element => {
        element.style.backgroundColor = newColor;
    });

    console.log(`Current Illusion Color: ${newColor}`);
}


const container = document.querySelector('.scroll-container');

container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollBy({
        left: e.deltaY < 0 ? -100 : 100
    });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.interests-card');

  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      const isActive = card.classList.contains('active');

      cards.forEach(function(c) {
        c.classList.remove('active');
      });

      if (!isActive) {
        card.classList.add('active');
      }
    });
  });
});