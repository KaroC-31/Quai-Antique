// Animation menu hamburger

const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)

new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    } else {
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)

// Changement BG et border au clic sur icone de réservation

const reservationToggler = document.querySelector(".icon-reservation")

const toggleReservation = () => {
    reservationToggler.style.background = "#D9984A";
    reservationToggler.style.border = "2px solid #797803"
}

reservationToggler.addEventListener("click", toggleReservation)

// Changement BG au clic sur icone de connexion

const connectionToggler = document.querySelector(".icon-connection")

const toggleConnection = () => {
    connectionToggler.style.background = "#D9984A";
}

connectionToggler.addEventListener("click", toggleConnection)

// Redirection vers la page de réservation au clic sur le bouton de réservation

const redirecterBooking = document.getElementById("btn-reservation")

const redirectBooking = () => {
    window.location.href = "reservation.html";
}

redirecterBooking.addEventListener("click", redirectBooking)

// Redirection vers la page de connexion au clic sur le bouton de connexion

const redirecterConnection = document.getElementById("btn-connection")

const redirectConnection = () => {
    window.location.href = "connexion.html";
}

redirecterConnection.addEventListener("click", redirectConnection)