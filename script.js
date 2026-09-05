// =========================
// WELCOME MESSAGE
// =========================

console.log("Welcome to NexaTech Computer Literacy and Innovation Centre!");


// =========================
// CURRENT YEAR IN FOOTER
// =========================

const year = new Date().getFullYear();

document.getElementById("year").textContent = year;


// =========================
// MOBILE NAVIGATION
// =========================

const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("show");
});
