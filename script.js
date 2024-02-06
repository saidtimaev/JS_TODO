const btn = document.querySelector("#btn");
const cards = document.querySelector("#todoCards"); // Contient toutes les cards
const card = document.querySelector(".todoCard"); // 1ere card

btn.onclick = ajouterCard
const delBtn = card.querySelector(".delBtn")
delBtn.addEventListener('click', supprimerCard)


function ajouterCard() {
    const newCard = card.cloneNode(true); // Copie la 1ere card
    cards.appendChild(newCard); // Ajouté la card copiée au conteneur des cards

    const delBtn = newCard.querySelector(".delBtn")
    delBtn.addEventListener('click', supprimerCard)

}

function supprimerCard(event) {
    // console.log("event = ", event);

    // const cardSuprime = event.target;
    // console.log("event.target = ", event.target);

    // const todoCard = cardSuprime.closest('.todoCard');

    // cards.removeChild(todoCard);

    // console.log("event.target = ", event.target);
    // console.log("event.target.parentNode = ", event.target.parentNode);
    // console.log("event.target.parentNode.parentElement = ", event.target.parentNode.parentElement);

    event.target.parentNode.parentElement.remove();
}

