const c = document.getElementById("my-canvas");
const ctx = c.getContext("2d");
let hue = 0;
let circle = 2 * Math.PI;
let particlesArray = [];

c.width = window.innerWidth;
c.height = window.innerHeight;

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("resize", () => {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
});

window.addEventListener("click", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  for (let i = 0; i < 20; i++) {
    particlesArray.push(new Particle());
  }
});

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  particlesArray.push(new Particle());
});

animate();
