function changePage(idPage) {
  document.querySelectorAll(".page").forEach((p) => p.classList.add("hidden"));
  document.querySelector(idPage).classList.remove("hidden");
}

window.addEventListener("hashchange", (e) => {
  changePage(location.hash);
});

document.addEventListener("DOMContentLoaded", () => {
  location.hash = "#product01"
  changePage(location.hash);
});
