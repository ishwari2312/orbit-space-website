// ===========================
// Create Animated Stars
// ===========================

const stars = document.querySelector(".stars");

for (let i = 0; i < 200; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.opacity = Math.random();

    star.style.animationDelay = Math.random() * 2 + "s";

    stars.appendChild(star);
}


// ===========================
// Floating Info Card Effect
// ===========================

const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {

    let x = (e.clientX - window.innerWidth / 2) / 50;
    let y = (e.clientY - window.innerHeight / 2) / 50;

    card.style.transform =
        `translate(${x}px, ${y}px)`;
});


// ===========================
// Parallax Background
// ===========================

document.addEventListener("mousemove", (e) => {

    let moveX = (e.clientX / window.innerWidth) * 20;
    let moveY = (e.clientY / window.innerHeight) * 20;

    document.body.style.backgroundPosition =
        `${moveX}px ${moveY}px`;

});


// ===========================
// Scroll Reveal Animation
// ===========================

const reveals = document.querySelectorAll(".planet-card");

function revealCards() {

    const windowHeight = window.innerHeight;

    reveals.forEach((card) => {

        const top = card.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(80px)";
    card.style.transition = "0.8s";

});

window.addEventListener("scroll", revealCards);

revealCards();


// ===========================
// Planet Hover Rotation
// ===========================

const planets = document.querySelectorAll(".planet");

planets.forEach((planet) => {

    planet.addEventListener("mouseenter", () => {

        planet.style.transform =
            "scale(1.1) rotate(20deg)";

    });

    planet.addEventListener("mouseleave", () => {

        planet.style.transform =
            "scale(1) rotate(0deg)";

    });

});


// ===========================
// Smooth Navbar Active Link
// ===========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navLinks.forEach((item) => {

            item.style.color = "white";

        });

        this.style.color = "#d98cff";

    });

});


// ===========================
// Button Glow Effect
// ===========================

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// ===========================
// Fade Hero on Scroll
// ===========================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let value = window.scrollY;

    hero.style.opacity = 1 - value / 700;

});


// ===========================
// Console Welcome Message 😎
// ===========================

console.log("%c🚀 Welcome to ORBIT",
"color:#d98cff;font-size:22px;font-weight:bold;");

console.log("%cExplore the Universe!",
"color:white;font-size:14px;");}