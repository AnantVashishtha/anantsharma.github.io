document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-scroll-left], [data-scroll-right]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.scrollLeft || button.dataset.scrollRight;
      const target = document.getElementById(targetId);
      if (!target) return;

      const direction = button.hasAttribute("data-scroll-left") ? -1 : 1;
      const amount = Math.max(260, Math.round(target.clientWidth * 0.78));

      target.scrollBy({ left: direction * amount, behavior: "smooth" });
    });
  });

  document.querySelectorAll(".skill-list details").forEach((item) => {
    const icon = item.querySelector("summary i");
    if (!icon) return;

    const update = () => {
      icon.textContent = item.open ? "−" : "+";
    };

    update();
    item.addEventListener("toggle", update);
  });
});

// Skill cards reveal explanations on hover, keyboard focus or click/tap.
document.querySelectorAll(".skill-tile").forEach((tile) => {
  tile.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") tile.open = true;
  });

  tile.addEventListener("pointerleave", (event) => {
    if (
      event.pointerType === "mouse" &&
      !tile.contains(document.activeElement)
    ) {
      tile.open = false;
    }
  });

  tile.addEventListener("focusin", () => {
    tile.open = true;
  });

  tile.addEventListener("focusout", (event) => {
    if (!tile.contains(event.relatedTarget)) {
      tile.open = false;
    }
  });
});