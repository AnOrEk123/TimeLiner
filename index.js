const root = document.querySelector(":root");
const menuBtn = document.querySelector(".menu");
const grid = document.getElementById("can");
const timeLine = document.getElementById("timeLine");
const timeMark = document.getElementById("timeMark");
const gridCtx = grid.getContext("2d");
const timeLineCtx = timeLine.getContext("2d");
const timeMarkCtx = timeMark.getContext("2d");
let timeLineGradient = timeLineCtx.createLinearGradient(50, 0, 260, 20);
timeLineGradient.addColorStop(0, "blue");
timeLineGradient.addColorStop(1, "white");
let changed = false;
grid.width = window.innerWidth;
grid.height = window.innerHeight;
timeLine.width = 250;
timeLine.height = 30;
timeMark.width = 50;
timeMark.height = 50;
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
  timeLineCtx.fillStyle = timeLineGradient;
  timeLineCtx.fillRect(0, 0, timeLine.width, timeLine.height);
  timeLineCtx.font = "18px Franklin Gothic Medium";
  timeLineCtx.fillStyle = "white";
  timeLineCtx.lineWidth = 1;
  timeLineCtx.fillText("TEXT", 10, 20);

  timeMarkCtx.clearRect(0, 0, timeMark.width, timeMark.height);
  timeMarkCtx.fillStyle = "#28b840";
  timeMarkCtx.fillRect(0, 0, timeMark.width, timeMark.height-10);
  timeMarkCtx.beginPath();
  timeMarkCtx.moveTo((timeMark.width/2)-10, timeMark.height-10);
  timeMarkCtx.lineTo(timeMark.width/2, timeMark.height);
  timeMarkCtx.lineTo((timeMark.width / 2) + 10, timeMark.height-10);
  timeMarkCtx.closePath();
  timeMarkCtx.fillStyle = "#28b840";
  timeMarkCtx.fill();
  timeMarkCtx.font = "18px Franklin Gothic Medium";
  timeMarkCtx.fillStyle = "white";
  timeMarkCtx.lineWidth = 1;
  timeMarkCtx.fillText("TEXT", 6, 25);
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
  }
}
