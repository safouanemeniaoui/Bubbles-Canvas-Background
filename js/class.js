class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${hue} , 100% , 50%)`;
  }
  update() {
    this.x -= this.speedX;
    this.y -= this.speedY;
    this.size > 0.2 ? (this.size -= 0.1) : this.size;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, circle);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
