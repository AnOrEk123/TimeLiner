const root = document.querySelector(":root");
const menuBtn = document.querySelector(".menu");
const grid = document.getElementById("can");
const timeLine = document.getElementById("timeLine");
const gridCtx = grid.getContext("2d");
const timeLineCtx = timeLine.getContext("2d");
let changed = false;
grid.width = window.innerWidth;
grid.height = window.innerHeight;
timeLine.width = 250;
timeLine.height = 20;
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
  gridCtx.clearRect(0, 0, grid.width, grid.height);

  for (let i = 0; i < grid.height; i += gridSize) {
    gridCtx.beginPath();
    gridCtx.moveTo(0, i);
    gridCtx.lineTo(grid.width, i);
    gridCtx.stroke();
  }

  for (let i = 0; i < grid.width; i += gridSize) {
    gridCtx.beginPath();
    gridCtx.moveTo(i, 0);
    gridCtx.lineTo(i, grid.height);
    gridCtx.stroke();
  }

  timeLineCtx.clearRect(0, 0, timeLine.width, timeLine.height);
  timeLineCtx.fillStyle = "blue";
  timeLineCtx.fillRect(0, 0, timeLine.width, timeLine.height);
  timeLineCtx.font = "18px Franklin Gothic Medium";
  timeLineCtx.fillStyle = "white";
  timeLineCtx.lineWidth = 1;
  timeLineCtx.fillText("Text", 10, 15);
}

window.addEventListener("resize", () => {
  grid.width = window.innerWidth;
  grid.height = window.innerHeight;
  root.style.setProperty("--side-size", "0rem");
  menuBtn.classList.remove("active");
  draw();
});

class TimeLine {
  constructor(id, width, height, text) {
    this.canvas.id = id;
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.text = text;
    this.getContext("2d");

    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
}
