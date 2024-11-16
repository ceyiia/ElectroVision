document.getElementById('grid-view').addEventListener('click', function () {
    const container = document.getElementById('product-container');
    container.classList.remove('list-view');
    container.classList.add('grid-view');
    this.classList.add('active');
    document.getElementById('list-view').classList.remove('active');
});

document.getElementById('list-view').addEventListener('click', function () {
    const container = document.getElementById('product-container');
    container.classList.remove('grid-view');
    container.classList.add('list-view');
    this.classList.add('active');
    document.getElementById('grid-view').classList.remove('active');
});
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".category-link");

    links.forEach(link => {
        // Rimuovi la classe 'active' da tutti i link
        link.classList.remove("active");

        // Aggiungi la classe 'active' al link che corrisponde alla pagina corrente
        if (window.location.pathname === link.getAttribute("href")) {
            link.classList.add("active");
        }
    });
});
