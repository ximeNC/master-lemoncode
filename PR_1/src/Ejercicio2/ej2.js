function setTheme(theme) {
  document.body.className = theme;
}

// Inicializa el tema
document.addEventListener('DOMContentLoaded', () => {
  setTheme('theme-a');
});
