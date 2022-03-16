document.addEventListener('DOMContentLoaded', () => {
  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    // if it's light -> go dark
    if (themeStylesheet.href.includes('light')) {
      themeStylesheet.href = 'stylesheets/dark-theme.css';
    } else {
      // if it's dark -> go light
      themeStylesheet.href = 'stylesheets/light-theme.css';
    }
  });
});


// document.addEventListener('DOMContentLoaded', () => {
//   const styleToggle = document.getElementById('theme-toggle');
//   styleToggle.addEventListener('click', () => {
//     // if it's light -> go dark
//     if (styleToggle.classList.contains('move')) {
//       styleToggle.classList.remove("move");
//     } else {
//       // if it's dark -> go light
//       styleToggle.classList.add("move");
//     }
//   });
// });
