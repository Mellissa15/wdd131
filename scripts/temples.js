// Dynamic footer info
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// Set last modified date
const lastModifiedParagraph = document.getElementById('lastModified');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;
}

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    hamburger.textContent = navMenu.classList.contains("hidden") ? "☰" : "✖";
});
