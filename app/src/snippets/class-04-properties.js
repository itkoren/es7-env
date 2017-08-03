
// ES2015 Implementation
class Counter {
  promote() {
    this.x++;
    this.printLog();
  }

  constructor() {
    this.x = 0;
    this.contextPromote = this.promote.bind(this);
    this.porpFunc = () =>{console.log('~My Func ONLY~');}
  }


  printLog() {
    console.log( this.x.toString() );
  }
}

var counter = new Counter();
counter.promote();
counter.promote();
counter.promote();
counter.promote();
counter.promote();
counter.contextPromote();
counter.porpFunc();

// Proposal: ES Class Fields & Static Properties - (Stage 2 Draft) (implemented in babel)
// https://tc39.github.io/proposal-class-fields/ , https://github.com/littledan/proposal-unified-class-features
/*
class Counter extends HTMLElement {
  x = 0;

  clicked() {
    this.x++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
  }

  connectedCallback() { this.render(); }

  render() {
    this.textContent = this.x.toString();
  }
}
window.customElements.define('num-counter', Counter);
*/

// ES Next with private fields
/*
class Counter extends HTMLElement {
  #x = 0;

  clicked() {
    this.#x++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
  }

  connectedCallback() { this.render(); }

  render() {
    this.textContent = this.#x.toString();
  }
}
window.customElements.define('num-counter', Counter);`
*/

