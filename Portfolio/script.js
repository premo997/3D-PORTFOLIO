document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio loaded successfully 🚀");

    /* =========================
       SCROLL PROGRESS BAR
    ========================= */
    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        if (height <= 0) return;

        const progress = (scrollTop / height) * 100;

        const bar = document.querySelector(".scroll-progress");

        if (bar) {
            bar.style.width = progress + "%";
        }
    });

    /* =========================
       SMOOTH SCROLL
    ========================= */
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================
       HERO BUTTON SCROLL
    ========================= */
    const projectBtn = document.querySelector(".hero-left button");

    if (projectBtn) {
        projectBtn.addEventListener("click", () => {
            const projectSection = document.querySelector("#projects");

            if (projectSection) {
                projectSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    /* =========================
       CURSOR GLOW
    ========================= */
    const glow = document.querySelector(".cursor-glow");

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        if (glow) {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            glow.style.left = currentX + "px";
            glow.style.top = currentY + "px";
        }

        requestAnimationFrame(animate);
    }

    animate();

});



/* =========================
   SPACE BACKGROUND
========================= */

const canvas = document.getElementById("space-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* ⭐ STARS */
const stars = [];

for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.02
    });
}

/* ☄️ SHOOTING STARS */
const shootingStars = [];

function createShootingStar() {
    shootingStars.push({
        x: Math.random() * canvas.width,
        y: 0,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 10 + 6,
        opacity: 1
    });
}

/* CREATE RANDOMLY */
setInterval(createShootingStar, 2000);

/* ANIMATION */
function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* ⭐ DRAW STARS */
    stars.forEach(star => {
        star.opacity += star.speed;

        if (star.opacity >= 1 || star.opacity <= 0) {
            star.speed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(76,201,240,${star.opacity})`;
        ctx.fill();
    });
}

animate();

/* RESPONSIVE */
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.querySelectorAll(".toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");

        if (btn.classList.contains("active")) {
            btn.textContent = "ACTIVE";
        } else {
            btn.textContent = "OFF";
        }
    });
});

/* =========================
   HAMBURGER TOGGLE
========================= */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active"); // 🔥 important for animation
});

