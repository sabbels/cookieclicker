

document.addEventListener('DOMContentLoaded', (event) => {
    let compteur = 1;
    let multiplicateur = 1;
    const boutonCookie = document.getElementById('cookie');
    const boutonAmelioration = document.getElementById('doubler');
    const affichageCompteur = document.getElementById('score');
    let boutonMulti = 100;

    boutonCookie.addEventListener('click', () => {
        compteur += multiplicateur;
        affichageCompteur.textContent = + compteur;
    });

    boutonAmelioration.addEventListener('click', () => {
        if (compteur >= boutonMulti) {
            compteur -= boutonMulti;
            boutonMulti *= 3;
            multiplicateur *= 2;
            boutonAmelioration.textContent = "price: " + boutonMulti;
            affichageCompteur.textContent = + compteur;
        } else {
            alert("Vous n'avez pas assez de points pour acheter cette amélioration !");
        }
    });
});
