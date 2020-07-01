const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switcherRef = document.querySelector('.js-switch-input');

switcherRef.addEventListener('change', savedTheme);

function defaultTheme() {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switcherRef.checked = true;
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('Theme', 'light-theme');
    bodyRef.classList.add(Theme.LIGHT);
  }
};
defaultTheme();

function savedTheme(event) {
  if (event.target.checked) {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', 'dark-theme');
  } else if (!event.target.checked) {
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', 'light-theme');
  }
}
