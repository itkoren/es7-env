const themeImpl = {
  'space': {
    apply(el) {
      for (let i of [1, 2, 3]) {
        let stars = document.createElement('div');
        stars.classList.add(`stars${i}`);
        el.appendChild(stars);
      }
    },
    clear(el) {
      for (let i of [1, 2, 3]) {
        let stars = el.querySelector(`.stars${i}`);
        el.removeChild(stars);
      }
    },
  },
};

function apply(name, selector = 'body') {
  if (!name) {
    return false;
  }
  let el = document.querySelector(selector);
  if (el.classList.contains(name)) {
    return false;
  }
  el.classList.add(name);
  let impl = themeImpl[name];
  if (impl) {
    impl.apply(el);
  }
}

function clear(name, selector = 'body') {
  if (!name) {
    return false;
  }
  let el = document.querySelector(selector);
  if (!el.classList.contains(name)) {
    return false;
  }
  el.classList.remove(name);
  let impl = themeImpl[name];
  if (impl) {
    impl.clear(el);
  }
}

export default {
  apply,
  clear,
}
