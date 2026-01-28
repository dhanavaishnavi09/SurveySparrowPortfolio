function scrollToSection() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function openModal(src) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});

/*function scrollToSection() {
  const about = document.getElementById("about");
  if (about) about.scrollIntoView({ behavior: "smooth" });
}


const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}


const reveals = document.querySelectorAll(".reveal");

function runReveal() {
  reveals.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", runReveal);
window.addEventListener("load", runReveal);  
runReveal(); */

