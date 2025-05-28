document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector('.hamburger-menu input');
  const logo = document.getElementById('logo-img');
  const texte_bienvenue = document.getElementById('texte-bienvenue');
  const Bienvenue = document.querySelector('.Bienvenue');
  const content = document.querySelector('.content');
  const dessin = document.querySelector('.dessin-tri');
  const timer = document.querySelector('.Timer');

  checkbox?.addEventListener('change', () => {
    const isChecked = checkbox.checked;

    logo?.classList.toggle('menu-open', isChecked);
    texte_bienvenue?.classList.toggle('menu-open', isChecked);
    Bienvenue?.classList.toggle('menu-open', isChecked);
    content?.classList.toggle('menu-open', isChecked);
    dessin?.classList.toggle('menu-open', isChecked);
    timer?.classList.toggle('menu-open', isChecked);
  });
});