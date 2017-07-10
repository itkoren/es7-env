const earth = String.fromCodePoint(0x1f30e);
const moon = String.fromCodePoint(0x1f312);
const rocket = String.fromCodePoint(0x1f680);
const boom = String.fromCodePoint(0x1f4a5);
const flag = String.fromCodePoint(0x1f3c1);

const \u{f8} = ' ';

const interval = 500;
const distance = 5;
const missionSuccess = !!Math.round(Math.random());

const travel = (step) => {

  let journey = rocket
    .padEnd(step - 1 + rocket.length, ø)
    .padStart(distance - 1 + rocket.length, ø);

  if (journey.endsWith(rocket)) {
    journey = journey.replace(
      new RegExp(`${rocket}$`, 'u'),
      missionSuccess ? flag : boom
    );
  }

  console.clear();
  console.dir();
  console.dir(`${earth}${journey}${moon}`);
};

const tick = (task, steps) => {
  if (steps) {
    setTimeout(() => {
      task(steps);
      tick(task, --steps);
    }, interval);
  }
};

tick(travel, distance);
