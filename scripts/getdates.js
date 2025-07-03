// Set current year
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
