const buttons = document.querySelectorAll(".cards-buttons button");
const sections = document.querySelectorAll(".cards-section");
const cards = document.querySelector(".cards");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#aboutspeaker" ?
  cards.classList.add("is-active") :
  cards.classList.remove("is-active");
  cards.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});
