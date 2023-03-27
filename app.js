// Get the toggle switch and the <body> element
const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
const body = document.querySelector('body');

// Function to switch the theme
function switchTheme(event) {
  if (event.target.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

// Event listener for the toggle switch
toggleSwitch.addEventListener('change', switchTheme);
