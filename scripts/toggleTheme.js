function toggleTheme() {
  var body = document.body;
  if (body.classList.length == 0) {
    body.classList.add('theme-dark');
  } else {
    body.classList.remove('theme-dark');
  }
}
