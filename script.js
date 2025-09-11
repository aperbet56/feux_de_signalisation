// Récupération des éléments HTML
const footerCopyrightYear = document.querySelector(".footer__text__year");
const circles = document.querySelectorAll(".circle");

// Déclaration de la fonction getCurrentYear qui va permettre l'affichage dynamique de l'année
const getCurrentYear = () => {
  // Récupération de la date actuelle stockée dans la constante date
  const date = new Date();
  //console.log(date);

  // Récupération de l'année stockée dans la constante year
  const year = date.getFullYear();
  //console.log(year);

  // Affichage dynamique de l'année en cours
  footerCopyrightYear.textContent = `${year}`;
};
// Appel de la fonction getCurrentYear()
getCurrentYear();

// Création de la variable activeLight
let activeLight = 0;

// Déclaration de la fonction changeLight qui va permettre aux feux de signalisation de changer de couleur
const changeLight = () => {
  circles[activeLight].className = "circle";
  // Incrémentation de la variable activeLight
  console.log(activeLight);
  activeLight++;

  // Condition if
  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight];

  currentLight.classList.add(currentLight.getAttribute("color"));
};

// La méthode setInterval() permet d'exécuter la fonction changeLight() toutes les 1.5s.
setInterval(() => {
  //Appel de la fonction changeLight()
  changeLight();
}, 1500);
