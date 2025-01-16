const root = document.querySelector(":root");
const menuBtn = document.querySelector(".menu");
canvas = document.getElementById("can");
const ctx = canvas.getContext("2d");
let changed = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let gridSize = 40;



menuBtn.addEventListener("click", () => {
  if (menuBtn.classList.contains("active")) {
      menuBtn.classList.remove("active");
      root.style.setProperty("--side-size", "0rem");
  } else {
      menuBtn.classList.add("active");
      root.style.setProperty("--side-size", "20rem");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  draw();
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < canvas.height; i += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  for (let i = 0; i < canvas.width; i += gridSize) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  root.style.setProperty("--side-size", "0rem");
  menuBtn.classList.remove("active");
  draw();
});
