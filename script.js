currentIndex = 0;

function changeColor() {
  const colors = [
    '#07f41f', '#e90bd3', 'ff0000', '#0727f4', '#a72608', '#7F0799', '#e03616',
    '#0582CA', '#EE6352', '#FF6B6B', '#840032', '#004fff', '#FF4A1C', '#E71D36',
    '#B91372', '#138A36', '#E9D758', '#C20114', '#F2BB05', '#D00000', '#0000FF',
    '#00ff00', '#ff00ff'
  ];
  currentIndex = (currentIndex + 1) % colors.length;
  const newColor = colors[currentIndex];

  // Select the parent element with class "bg-inverse-landing"
  const container = document.querySelector('.bg-inverse-landing');

  // Add a click event listener to the parent element
  container.addEventListener('click', function() {
    // Change the color of all elements with class "bg-primary-landing" inside the container
    const elements = container.querySelectorAll('.bg-primary-landing');
    elements.forEach(element => {
      element.style.backgroundColor = newColor;
    });
  });
}

// Call the function to initialize the event listener
changeColor();