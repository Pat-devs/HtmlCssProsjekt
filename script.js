// Variabel for å huske hvilken farge vi er på
let isBlue = true;

// Når knappen klikkes, endre bakgrunnsfarge
document.getElementById('action-button').addEventListener('click', function() {
    // Sjekk hvilken farge vi skal bruke
    if (isBlue == true) {
        // Endre til rosa
        document.body.style.backgroundColor = "#3ea2ffff";
        isBlue = false;
    } else {
        // Endre tilbake til grå
        document.body.style.backgroundColor = "#f0f0f0";
        isBlue = true;
    }
});