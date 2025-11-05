function changePage(idPage) {
  // const pages = document.querySelectorAll(".page");
  // pages.forEach((p) => p.classList.add("hidden"));

  document.querySelectorAll(".page").forEach((p) => p.classList.add("hidden"));
  document.querySelector("#" + idPage).classList.remove("hidden");
}
