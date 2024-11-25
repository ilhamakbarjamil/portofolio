document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true
    });

    // Initialize particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 6 }
        }
    });
});
