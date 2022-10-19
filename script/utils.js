import { Particle } from './particle.js';

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

const calculateDistance = (p1x, p1y, p2x, p2y) => {
  const xDistance = p1x - p2x;
  const yDistance = p1y - p2y;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

const createParticles = (x, y, particles, hue, ctx) => {
  let particleCount = 30;
  while (particleCount--) {
    particles.push(new Particle(x, y, hue, ctx, particles));
  }
};

export { random, calculateDistance, createParticles };
