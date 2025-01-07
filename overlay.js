// Sélectionnez les boutons et les overlays
const openOverlayButtons = document.querySelectorAll('.openOverlay');
const overlays = document.querySelectorAll('.overlay');
const closeButtons = document.querySelectorAll('.button-close');

// Ajouter un gestionnaire d'événement pour chaque bouton "Voir plus"
openOverlayButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        overlays[index].classList.add('visible');
    });
});

// Ajouter un gestionnaire d'événement pour chaque bouton "Fermer"
closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        overlays[index].classList.remove('visible');
    });
});
