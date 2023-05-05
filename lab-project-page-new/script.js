const darkenBtn = document.getElementById("darken");
const container = document.querySelector(".container");

darkenBtn.addEventListener("mouseenter", () => {
  container.classList.add("dark");
});

darkenBtn.addEventListener("mouseleave", () => {
  container.classList.remove("dark");
});