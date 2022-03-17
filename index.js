document.addEventListener('DOMContentLoaded', () => {
  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('theme-toggle');
  const gradientToggle = document.getElementById('gradient-heading');
  themeToggle.addEventListener('click', () => {
    // if it's light -> go dark
    if (themeStylesheet.href.includes('light')) {
      themeStylesheet.href = 'stylesheets/dark-theme.css';
      gradientToggle.classList.add("text-gradient-purple-coral");
      gradientToggle.classList.remove("text-gradient-purple-turquoise");
    } else {
      // if it's dark -> go light
      themeStylesheet.href = 'stylesheets/light-theme.css';
      gradientToggle.classList.remove("text-gradient-purple-coral");
      gradientToggle.classList.add("text-gradient-purple-turquoise");
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


// When the user scrolls the page, execute scrollFunction

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  // position of scroll bar in pixels
  let winScroll = document.documentElement.scrollTop; // document.body.scrollTop; ||
  //get height excluding first page
  let height =
    document.documentElement.scrollHeight - // total page height
    document.documentElement.clientHeight; // how tall the client window is
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}
