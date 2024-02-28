const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");

const submitButton = document.getElementById("submit");
const allRates = document.getElementsByClassName("rate");
let chosenRate;

function setRate(value) {
    chosenRate = value;
}

function showRate() {
    let htmlRate = document.getElementById('chosen-rate');
    htmlRate.innerHTML = chosenRate;
}

function showThankYou() {
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');

    showRate();
}

Array.from(allRates).forEach(rate => {
    const value = rate.textContent;
    rate.addEventListener('click', () => setRate(value));
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    showThankYou();
});