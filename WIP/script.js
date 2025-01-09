/*document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});*/

// script.js
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check localStorage for the theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  const isDarkMode = body.classList.contains('dark-mode');
  body.classList.toggle('dark-mode', !isDarkMode);
  body.classList.toggle('light-mode', isDarkMode);

  // Save the user's preference in localStorage
  localStorage.setItem('theme', isDarkMode ? 'light-mode' : 'dark-mode');
});