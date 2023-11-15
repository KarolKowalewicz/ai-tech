// Pobierz wszystkie linki z menu
const menuLinks = document.querySelectorAll(".menu li a");

// Dodaj obsługę kliknięcia do każdego linku
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Usuń klasę "active" z obecnie aktywnego linku
    const currentActiveLink = document.querySelector(".menu li a.active");
    if (currentActiveLink) {
      currentActiveLink.classList.remove("active");
    }

    // Dodaj klasę "active" do klikniętego linku
    link.classList.add("active");
  });
});


// // Pobieramy element z opisem
// const textElement = document.getElementById("description");

// // Tworzymy nowy opis z podziałem na nowe linie
// const nevDescr = "Next Level\nMachine\ninteligence";

// // Aktualizujemy treść opisu
// textElement.textContent = nevDescr;



const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', (ev) => {
  if (window.scrollY > 65) {
    navbar.classList.remove('navbar--top');
  } else {
    navbar.classList.add('navbar--top');
  }
});


