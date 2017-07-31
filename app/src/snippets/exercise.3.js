
/*

create a progress bar only with characters!


1. follow the instructions in the TODO comments and complete the exercise,
ignore the (optional) instructions for now.

2. if you finished the basic implementation, follow the (optional) comments as well.

*/


// TODO - assign a character for each of those variables
// TODO (optional) - use unicode characters! via unicode code-point escapes, or fromCodePoint (get chars from here: http://www.amp-what.com/)
const start = ''; // opening character for the progress bar
const end = ''; // closing character for the progress bar
const cursor = ''; // the character that moves to show progress
const tail = ''; // a character to fill the gap behind the cursor
const head = ''; // a character to fill the gap in front of the cursor

// a tick interval for the timer, slow it down to track your code more clearly
const interval = 500;

const times = 12;


// the main render loop. this function is called repeatedly, until 'times' is reached.
const paint = (currStep, currPerc) => {

  let nextPerc = currPerc + 100 / times;
  const nextStep = currStep + 1;

  // TODO - assemble the bar as a string, composed of the 'cursor', 'tail', and 'end' characters. use string-manipulation methods
  let bar = '';


  // TODO - change the condition to detect the last step. use string-searching methods
  if (false) {
    // TODO - replace the cursor with another character, any character
    // TODO (optional) - use a regex flag to search a unicode character in the string
  }


  // TODO - change the condition to detect if 'nextPerc' is not accurate (if it has rounding errors)
  if (false) {
    nextPerc = `~${nextPerc}`;
  }

  console.clear();
  console.dir();
  console.dir(`${start}${bar}${end}`);
  console.dir();
  console.dir(`current step: ${currStep}`);
  console.dir(`   next step: ${nextStep}`);
  console.dir(`   current %: ${currPerc}`);
  console.dir(`      next %: ${nextPerc}`);
};




// the following code is not part of the exercise, and so shouldn't be changed


/*
 * a simple function invoking timer
 */
const tick = (task, times, step = 1, perc = 0) => {
  if (times >= step) {
    setTimeout(() => {
      perc = perc + 100 / times * step;
      task(step++, perc);
      tick(task, times, step);
    }, interval);
  }
};

// activate counter
tick(paint, times);

