/* var cookie = document.getElementById('cookie');
var score = document.getElementById('score');

function scoreincr() {
    score++;
    score.textContent = compteur;
    console.log(compteur);
}

cookie.addEventListener("click", scoreincr); 
*/

document.addEventListener('DOMContentLoaded', (event) => {
    let compteur = 100;
    let multiplicateur = 1;
    const boutonCookie = document.getElementById('cookie');
    const boutonAmelioration = document.getElementById('100');
    const affichageCompteur = document.getElementById('score');
    let boutonMulti = 100;

    boutonCookie.addEventListener('click', () => {
        compteur += multiplicateur;
        affichageCompteur.textContent = "Ton score: " + compteur;
    });

    boutonAmelioration.addEventListener('click', () => {
        if (compteur >= boutonMulti) {
            compteur -= boutonMulti;
            boutonMulti *= 3;
            multiplicateur *= 2;
            boutonAmelioration.textContent = "Amélioration double clique: " + boutonMulti;
            affichageCompteur.textContent = "Ton score: " + compteur;
        } else {
            alert("Vous n'avez pas assez de points pour acheter cette amélioration !");
        }
    });
});