const root = document.querySelector(":root");
const menuBtn = document.querySelector(".menu");
canvas = document.getElementById("can");
const ctx = canvas.getContext("2d");
let changed = false;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.contains("active")
    ? (menuBtn.classList.remove("active"),
      root.style.setProperty("--side-size", "0rem"))
    : (menuBtn.classList.add("active"),
      root.style.setProperty("--side-size", "20rem"));
});

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 64;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    for (let i = 0; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 64;
    draw();
  });

  draw();
});
