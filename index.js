const root = document.querySelector(":root");
const menuBtn = document.querySelector(".menu");
let changed = false;

menuBtn.addEventListener("click", () => {
    menuBtn.classList.contains("active")
        ? (menuBtn.classList.remove("active"),
          root.style.setProperty("--side-size", "0rem"))
        : (menuBtn.classList.add("active"),
          root.style.setProperty("--side-size", "20rem"));
});
