
const earth = String.fromCodePoint(0x1f30e);
const moon = String.fromCodePoint(0x1f312);
const rocket = String.fromCodePoint(0x1f680);

const interval = 150;
const distance = 20;

let steps = distance;
let journey = ' '.repeat(distance);

const tick = () => {
  if (steps) {
    steps--;

    setTimeout(() => {

      journey = rocket.padEnd(steps, ' ').padStart(distance, ' ');

      console.clear();
      console.dir();
      console.dir(`${earth}${journey}${moon}`);

      tick();
    }, interval);
  }
};

tick();
