let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  // Set the initial icon based on the default theme
  const iconElement = document.getElementById("icon");
  iconElement.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
});

function toggleTheme() {
  document.body.classList.toggle("light-mode");
  
  const iconElement = document.getElementById("icon");
  iconElement.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
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

// Initialize event listeners
toggleTheme();
changeColor();