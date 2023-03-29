const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const numPoints = 1000;
const scaleFactor = 150;

let a = 3;
let b = 5;
let t = 0;
let deltaT = 0.01;

function lissajous(angleA, angleB) {
  const x = Math.sin(angleA) * scaleFactor;
  const y = Math.sin(angleB) * scaleFactor;
  return { x, y };
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  for (let i = 0; i < numPoints; i++) {
    const { x, y } = lissajous(a * t, b * t);
    const hue = (i / numPoints) * 360;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = 2;

    ctx.lineTo(centerX + x, centerY + y);
    t += deltaT;
  }
  ctx.stroke();

  a += 0.005;
  b += 0.007;

  requestAnimationFrame(draw);
}

draw();
