// Product array
const products = [
    { id: 1, name: "SuperVac 3000" },
    { id: 2, name: "TurboBlender Pro" },
    { id: 3, name: "EcoWasher X" },
    { id: 4, name: "AirFryer Plus+" },
];

// Populate product dropdown
const productSelect = document.getElementById("product");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Set last modified date
const lastModifiedParagraph = document.getElementById('lastModified');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last modified: ${document.lastModified}`;
}