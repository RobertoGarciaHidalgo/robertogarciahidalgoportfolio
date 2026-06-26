const year = document.querySelector('#year');
const themeToggle = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

if (themeToggle) {
  const updateThemeButton = () => {
    const isDark = document.body.classList.contains('dark');
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Activar modo dia' : 'Activar modo noche');
    themeToggle.setAttribute('title', isDark ? 'Modo dia' : 'Modo noche');
  };

  updateThemeButton();

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    updateThemeButton();
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
