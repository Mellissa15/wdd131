// Footer date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static values for now
const temperature = 32; // in °C
const windSpeed = 15;   // in km/h

// Calculate wind chill only if conditions are met
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

const windChillElement = document.querySelector(".weather ul li:last-child");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill} °C`;
} else {
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> N/A`;
}
