const btn = document.querySelector("#btn");
const cards = document.querySelector("#todoCards"); // Contient toutes les cards
const card = document.querySelector(".todoCard"); // 1ere card

btn.onclick = ajouterCard
const delBtn = card.querySelector(".delBtn")
delBtn.addEventListener('click', supprimerCard)

const affichageCompteur = document.querySelector(".compteurCards")

// affichageCompteur.innerHTML = chiffreCompteur
affichageCompteur.innerHTML = cards.children.length


function ajouterCard() {

    const newCard = card.cloneNode(true); // Copie la 1ere card
    cards.appendChild(newCard); // Ajouté la card copiée au conteneur des cards

    const delBtn = newCard.querySelector(".delBtn")
    delBtn.addEventListener('click', supprimerCard)

    afficherNbCards();
}

function supprimerCard(event) {
    // console.log("event = ", event);

    
    // console.log("event.target = ", event.target);

    

    cards.removeChild(event.target.closest('.todoCard'));

    afficherNbCards();

    // console.log("event.target = ", event.target);
    // console.log("event.target.parentNode = ", event.target.parentNode);
    // console.log("event.target.parentNode.parentElement = ", event.target.parentNode.parentElement);
    // event.target.parentNode.parentElement.remove();
}

function afficherNbCards(){

    affichageCompteur.innerHTML = cards.children.length

}

