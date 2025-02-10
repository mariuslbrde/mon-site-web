document.addEventListener('mousemove', function(e) {
  const text = document.querySelector('.gradient-text');
  const text2 = document.querySelector('.gradient-text2');
  const headers = document.querySelectorAll('header h1'); // Sélectionne tous les h1
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  const xPercent = clientX / innerWidth;
  const yPercent = clientY / innerHeight;

  const xOffset = (xPercent - 0.5) * 100;
  const yOffset = (yPercent - 0.5) * 100;

  if (text) text.style.backgroundPosition = `${50 - xOffset}% ${50 - yOffset}%`;
  if (text2) text2.style.backgroundPosition = `${50 - xOffset}% ${50 - yOffset}%`;

  // Boucle sur tous les h1 pour animer le dégradé
  headers.forEach(header => {
    header.style.backgroundPosition = `${50 - xOffset}% ${50 - yOffset}%`;
  });
});

document.addEventListener('mousemove', function(e) {
  const light = document.querySelector('.mouse-light');
  if (light) {
    light.style.left = `${e.pageX}px`;
    light.style.top = `${e.pageY}px`;
  }
});
