let currentIndex = 0;
let darkMode = true; // Default to dark mode

document.addEventListener("DOMContentLoaded", () => {
    // Theme Handling
    loadHTML("#navbar-container", "/navbar.html", () => {
        darkMode = localStorage.getItem('darkMode') !== 'false';
        updateTheme();

        const navbar = document.getElementById("navbar");
        const hideThreshold = 2000;

        if (navbar) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > hideThreshold) {
                    navbar.classList.add("hide-navbar");
                } else {
                    navbar.classList.remove("hide-navbar");
                }
            });
        }
    });

    loadHTML("#footer-container", "/footer.html");

    loadHTML("#illusion-container", "/illusion.html", () => {
        changeColor();

        // Card Click Handling nach Laden der Illusion
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('active');
            });
        });
    });
});

function updateTheme() {
    const iconElement = document.getElementById("theme-icon-img");
    const burgerElement = document.querySelector(".burger");

    if (darkMode) {
        document.body.classList.remove("light-mode");
        iconElement.src = getIconPath("/light-mode.png");
        burgerElement.innerHTML = `<img src="${getIconPath('/menu-light.png')}" alt="Menu">`;
    } else {
        document.body.classList.add("light-mode");
        iconElement.src = getIconPath("/dark-mode.png");
        burgerElement.innerHTML = `<img src="${getIconPath('/menu-dark.png')}" alt="Menu">`;
    }
}

function getIconPath(iconName) {
    const path = window.location.pathname;
    if (path.includes('/subpages/') || path.includes('/projects/')) {
        return `/icons/${iconName}`;
    } else {
        return `icons/${iconName}`;
    }
}

function toggleTheme() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    updateTheme();
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const screenOverlay = document.getElementById("screenOverlay");

    mobileMenu.classList.toggle("show");
    screenOverlay.classList.toggle("show");
}

function changeColor() {
    const container = document.querySelector('.bg-inverse-landing');
    if (!container) {
        console.warn("changeColor: .bg-inverse-landing not found");
        return;
    }

    const colors = [
        'ff0000', '#FF3700', '#07f41f', '#e90bd3', '#0000f', '#0727f4', '#a72608', '#7F0799', '#e03616',
        '#0582CA', '#EE6352', '#FF6B6B', '#840032', '#004fff', '#FF4A1C', '#E71D36',
        '#B91372', '#138A36', '#E9D758', '#C20114', '#F2BB05', '#D00000', '#0000FF',
        '#00ff00', '#ff00ff', 
    ];
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex];

    document.documentElement.style.setProperty('--link-hover-color', newColor);

    const elements = container.querySelectorAll('.bg-primary-landing');
    elements.forEach(element => {
        element.style.backgroundColor = newColor;
    });

    console.log(`Current Illusion Color: ${newColor}`);
}

function loadHTML(selector, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error(error));
}