document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.querySelector('.hamburger-menu input');
  const logo = document.getElementById('logo-img');
  const cache=document.querySelector('.cache-noir');
  const texte_bienvenue = document.getElementById('texte-bienvenue');
  const Bienvenue = document.querySelector('.Bienvenue');
  const content = document.querySelector('.content');
  const dessin = document.querySelector('.dessin-tri');
  const timer = document.querySelector('.Timer');
  const trajet=document.querySelector('.Trajet');
  const supporter=document.querySelector('.Supporters');
  const annonce=document.querySelector('.Annonces');
  const circuit=document.querySelector('.circuit-triathlon');

  checkbox?.addEventListener('change', () => {
    const isChecked = checkbox.checked;

    logo?.classList.toggle('menu-open', isChecked);
    cache?.classList.toggle('menu-open', isChecked);
    texte_bienvenue?.classList.toggle('menu-open', isChecked);
    Bienvenue?.classList.toggle('menu-open', isChecked);
    content?.classList.toggle('menu-open', isChecked);
    dessin?.classList.toggle('menu-open', isChecked);
    timer?.classList.toggle('menu-open', isChecked);
    trajet?.classList.toggle('menu-open', isChecked);
    supporter?.classList.toggle('menu-open', isChecked);
    annonce?.classList.toggle('menu-open', isChecked);
    circuit?.classList.toggle('menu-open', isChecked);
  });
});