// Gestion du thème (clair/sombre)
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeToggleIcon(savedTheme);

// Écouteur du bouton de thème
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcon(newTheme);
  });
}

function updateThemeToggleIcon(theme) {
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '☼' : '☽';
  }
}

// Détection des préférences système
if (!localStorage.getItem('theme')) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemTheme = prefersDark ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', systemTheme);
  updateThemeToggleIcon(systemTheme);
}

// Effet de souris (gradients interactifs) - Desktop uniquement
const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (!isMobile) {
  document.addEventListener('mousemove', function(e) {
    // Effet de position du fond pour les titres
    const headers = document.querySelectorAll('header h1, .gradient-text');
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    headers.forEach(header => {
      if (header.style.backgroundImage && header.style.backgroundImage.includes('gradient')) {
        const xPercent = (clientX / innerWidth) * 100;
        const yPercent = (clientY / innerHeight) * 100;
        header.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
      }
    });
  });
}