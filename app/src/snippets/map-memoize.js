
console.dir(`
- Map use case: caching server response -
`);

const responseMap = new Map();

const load = (url) => {
  if (responseMap.has(url)) {
    console.log(`${url} (local)`);
    return responseMap.get(url);
  }
  console.log(`${url} (server)`);
  const result = fetch(url);
  responseMap.set(url, result);
  return result;
};

console.info(`fetch with cached responses:
`);
load('a/a/a.js');
load('b/b/b.js');
load('b/b/b.js');
load('c/c/c.js');
load('c/c/c.js');
load('c/c/c.js');

console.dir();


// the above can only work reliably when fetching static assets, which makes fetch() semi-pure (as in 'pure functions') - the output is always the same for a given input
// (another important aspect of pure functions is that they don't have any side-effects, which is violated here)

// which parts are dynamic in the load() function?

// what is 'memoazation'?





// let's refactor load() to expose the hidden memoize():

const cache = new Map();

const memoize = (fn) => {
  return (...args) => {
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log(`${key} (cached)`);
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    console.log(`${key} (fresh)`);
    return result;
  };
};

let memoizedFetch = memoize(fetch);

console.info(`memoized fetch:
`);
memoizedFetch('a/a/a.js');
memoizedFetch('b/b/b.js');
memoizedFetch('b/b/b.js');
memoizedFetch('c/c/c.js');
memoizedFetch('c/c/c.js');
memoizedFetch('c/c/c.js');
