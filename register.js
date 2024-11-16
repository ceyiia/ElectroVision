document.addEventListener("DOMContentLoaded", () => {
    const accountSection = document.getElementById("account-section");
    
    // Simula lo stato dell'utente (da sostituire con un controllo reale lato server)
    const isLoggedIn = false; // Cambia a `true` per simulare l'accesso
    const userLastName = "Rossi"; // Cognome dell'utente autenticato

    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? "Buongiorno" : "Buonasera";

    if (isLoggedIn) {
        // Utente autenticato
        accountSection.innerHTML = `
            <button id="logout-btn">
                <img src="/image/User.jpg" alt="Icona utente" id="account-icon" width="20" height="20"> 
                ${greeting} ${userLastName}
            </button>
        `;
        document.getElementById("logout-btn").addEventListener("click", () => {
            // Logica di logout
            alert("Logout effettuato!");
            // Puoi aggiungere un reindirizzamento o altro qui
        });
    } else {
        // Utente non autenticato
        accountSection.innerHTML = `
            <a href="/html/login.html">
                <button id="account-btn">
                    <img src="/image/User.jpg" alt="Icona utente" id="account-icon" width="20" height="20"> 
                    Il mio account
                </button>
            </a>
        `;
    }
});
