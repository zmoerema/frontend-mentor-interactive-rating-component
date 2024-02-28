const rootStyles = getComputedStyle(document.documentElement);

const semiGrey = rootStyles.getPropertyValue('--Medium-Grey-Semi');
const lightGrey = rootStyles.getPropertyValue('--Light-Grey');
const grey = rootStyles.getPropertyValue('--Medium-Grey');
const orange = rootStyles.getPropertyValue('--Orange');
const white = rootStyles.getPropertyValue('--White');

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

function updateButtonColor(button) {
    if (button.textContent === chosenRate) {
        button.style.color = white;
        button.style.backgroundColor = orange;
    } else {
        button.style.color = lightGrey;
        button.style.backgroundColor = semiGrey;
    }
}

function clickRateButton(value) {  
    setRate(value);

    Array.from(allRates).forEach(rate => {
        updateButtonColor(rate);
    });
}

function hoverRateButton(rate) {
    rate.style.color = white;
    rate.style.backgroundColor = grey;
}

function showThankYou() {
    const ratingState = document.getElementById("rating-state");
    const thankYouState = document.getElementById("thank-you-state");

    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');

    showRate();
}

Array.from(allRates).forEach(rate => {
    rate.addEventListener('mouseover', () => hoverRateButton(rate));
    rate.addEventListener('mouseout', () => updateButtonColor(rate));

    rate.addEventListener('click', () => {
        const value = rate.textContent;
        clickRateButton(value);
    });
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (!chosenRate) {
        alert("Please select a rate before submitting.");
    } else {
        showThankYou();
    }
});