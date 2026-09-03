console.log("JOEL LAB iniciado");

const labCards = document.querySelectorAll(".lab-card");

const backToLabsButton = document.querySelector("#back-to-labs");

const homeView = document.querySelector("#home-view");

const labView = document.querySelector("#lab-view");

const labViewTitle = document.querySelector("#lab-view-title");

const labViewDescription = document.querySelector("#lab-view-description");

const enterLabButtons = document.querySelectorAll(".enter-lab");

let selectedLab = null;

let selectedCard = null;

console.log(labCards);


labCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const lab = card.dataset.lab;

        if (selectedCard !== null && selectedCard !== card) {

            const previousAction =
                selectedCard.querySelector(".lab-action");

            previousAction.classList.add("hidden");

        }

        const labAction = card.querySelector(".lab-action");

        labAction.classList.remove("hidden");

        selectedCard = card;
        selectedLab = lab;

    });

});

enterLabButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.stopPropagation();

        enterLab(selectedLab);

        homeView.classList.add("hidden");

        labView.classList.remove("hidden");

    });

});

function enterLab(lab) {

    if (lab === "guitar") {

        labViewTitle.textContent = "🎸 GUITAR LAB";
        labViewDescription.textContent = "Your personal space for guitar ideas.";

    } else if (lab === "code") {

        labViewTitle.textContent = "💻 CODE LAB";
        labViewDescription.textContent = "Build, test and experiment with code.";

    } else if (lab === "experiment") {

        labViewTitle.textContent = "🧪 EXPERIMENT LAB";
        labViewDescription.textContent = "A place to test strange ideas.";

    } else if (lab === "vault") {

        labViewTitle.textContent = "💡 IDEA VAULT";
        labViewDescription.textContent = "Store your ideas before they disappear.";

    } else if (lab === "inventor") {

        labViewTitle.textContent = "🔧 MINI INVENTOR";
        labViewDescription.textContent = "Build small tools for real problems.";

    } else if (lab === "audiorain") {

        labViewTitle.textContent = "🌧️ AUDIO RAIN";
        labViewDescription.textContent = "Capture and preserve your musical ideas.";

    } else if (lab === "liminal") {

        labViewTitle.textContent = "🚪 LIMINAL CORNER";
        labViewDescription.textContent = "Enter the strange side of the Lab.";

    }

}


backToLabsButton.addEventListener("click", function () {

    labView.classList.add("hidden");

    homeView.classList.remove("hidden");

});

