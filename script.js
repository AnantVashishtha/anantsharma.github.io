document.querySelectorAll("[data-scroll-left]").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scrollLeft);
    if (target) target.scrollBy({ left: -300, behavior: "smooth" });
  });
});
document.querySelectorAll("[data-scroll-right]").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.scrollRight);
    if (target) target.scrollBy({ left: 300, behavior: "smooth" });
  });
});