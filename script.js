// ✍️ Efek mengetik otomatis
const nameTyping = document.getElementById("typing");
const aboutTyping = document.getElementById("typingAbout");

const texts = ["Husen Husaeri"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect() {
  const currentText = texts[index];
  nameTyping.textContent = currentText.slice(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typingEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typingEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % texts.length;
    setTimeout(typingEffect, 1000);
  }
}
typingEffect();

// Efek mengetik untuk "Tentang Saya"
const aboutText = "Tentang Saya";
let i = 0;
function typeAbout() {
  if (i < aboutText.length) {
    aboutTyping.textContent += aboutText.charAt(i);
    i++;
    setTimeout(typeAbout, 100);
  } else {
    aboutTyping.style.borderRight = "none";
  }
}
window.addEventListener("load", typeAbout);

// 🌗 Toggle Mode Gelap / Terang
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// 🔽 Scroll ke kontak
function scrollToContact() {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}
