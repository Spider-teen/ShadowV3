const modal = document.getElementById("selfhost-modal");
const openBtn = document.getElementById("selfhost-btn");
const closeBtn = document.getElementById("close-selfhost");

openBtn?.addEventListener("click", () => {
  modal?.classList.remove("hidden");
});

closeBtn?.addEventListener("click", () => {
  modal?.classList.add("hidden");
});

modal?.addEventListener("click", (event) => {
  if (event.target === modal) modal.classList.add("hidden");
});

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy");
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1200);
    } catch (_) {
      button.textContent = "Copy failed";
    }
  });
});
