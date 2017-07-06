
const earth = String.fromCodePoint(0x1f30e);
const moon = String.fromCodePoint(0x1f312);
const rocket = String.fromCodePoint(0x1f680);

const interval = 150;

let steps = 20;
let journey = ' '.repeat(steps);

const tick = () => {
  if (steps) {
    steps--;

    setTimeout(() => {

      journey = rocket.padEnd(steps, ' ').padStart(20, ' ');

      console.clear();
      console.dir();
      console.dir(`${earth}${journey}${moon}`);

      tick();
    }, interval);
  }
};

tick();
