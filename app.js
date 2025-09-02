const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

if (menu && menuLinks) {
    menu.addEventListener("click", function () {
        menu.classList.toggle("is-active");
        menuLinks.classList.toggle("active");
    });
}

const logosTrack = document.querySelector(".rotating-logos__track");
if (logosTrack) {
    const logos = logosTrack.cloneNode(true);
    const rotatingLogos = document.querySelector(".rotating-logos");
    if (rotatingLogos) rotatingLogos.appendChild(logos);
}

function switchPricing() {
    const checkbox = document.getElementById("pricing-toggle-checkbox");
    if (!checkbox) return;

    const monthlyPrices = document.querySelectorAll(".monthly-price");
    const yearlyPrices = document.querySelectorAll(".yearly-price");
    const yearlyDiscount = document.querySelector(".save-percentage");

    if (checkbox.checked) {
        monthlyPrices.forEach((price) => price.classList.add("hidden"));
        yearlyPrices.forEach((price) => price.classList.remove("hidden"));
        if (yearlyDiscount) yearlyDiscount.style.display = "inline";
    } else {
        monthlyPrices.forEach((price) => price.classList.remove("hidden"));
        yearlyPrices.forEach((price) => price.classList.add("hidden"));
        if (yearlyDiscount) yearlyDiscount.style.display = "none";
    }
}

window.addEventListener("load", () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

const signupForm = document.querySelector("#signup-form");
const signupNotification = document.querySelector("#signup-notification");
const signupNotificationText = document.querySelector("#signup-notification-text");
const signupCloseBtn = document.querySelector("#signup-close-btn");

if (signupForm && signupNotification && signupNotificationText) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        signupNotificationText.textContent = "🎉 Thank you for signing up! Our support team will connect with you soon.";
        signupNotification.classList.add("show");

        signupForm.reset();
    });
}

if (signupCloseBtn && signupNotification) {
    signupCloseBtn.addEventListener("click", () => {
        signupNotification.classList.remove("show");
    });
}