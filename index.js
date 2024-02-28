let ratingState = document.getElementById("rating-state");
let thankYouState = document.getElementById("thank-you-state");

let ratingContainer = document.getElementById("rating-state.container");
let thankYouContainer = document.getElementById("thank-you-state.container");

let submitButton = document.getElementById("submit");

function showThankYou() {
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden')
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    showThankYou();
});