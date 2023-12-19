function createParticles() {
  particlesArray.forEach((e) => {
    e.update();
    e.draw();
    for (let j = 0; j < particlesArray.indexOf(e); j++) {
      let dx = particlesArray[j].x - e.x;
      let dy = particlesArray[j].y - e.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        line(particlesArray[j].x, particlesArray[j].y, e.x, e.y, e.color);
      }
    }
    if (e.size < 0.3) {
      particlesArray.splice(particlesArray.indexOf(e), 1);
    }
  });
}

function line(a, b, x, y, color) {
  ctx.beginPath();
  ctx.moveTo(a, b);
  ctx.lineTo(x, y);
  ctx.lineWidth = 0.3;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, c.width, c.height);
  createParticles();
  hue += 5;
  requestAnimationFrame(animate);
}
