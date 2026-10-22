
const tips = [
    "Study for 25 minutes, then take a 5-minute break.",
    "Put your phone away when you need to concentrate.",
    "Review your notes shortly after each lesson.",
    "Practise answering questions without looking at your notes.",
    "Create a study timetable and follow it.",
    "Get enough sleep before an exam.",
    "Break large assignments into smaller tasks."
];

const tipText = document.getElementById("tip-text");
const tipButton = document.getElementById("tip-button");

let currentTip = 0;

if (tipButton && tipText) {
    tipButton.addEventListener("click", function () {
        currentTip = (currentTip + 1) % tips.length;
        tipText.textContent = tips[currentTip];
    });
}

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name.length < 2) {
            event.preventDefault();
            formFeedback.textContent =
                "Please enter a name with at least 2 characters.";
            return;
        }

        if (message.length < 10) {
            event.preventDefault();
            formFeedback.textContent =
                "Please write a message with at least 10 characters.";
            return;
        }

        formFeedback.textContent = "Submitting your message...";
    });
}

