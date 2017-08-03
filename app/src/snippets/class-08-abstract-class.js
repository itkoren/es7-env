/**
 * Abstract classes are classes that cannot be instantiated.
 */

class AbstractView {
    constructor( /* ... */) {
        console.log(`New Target is AbstractView: ${new.target === AbstractView}`);
        if (new.target === AbstractView) {
            throw new Error(
                'Abstract class AbstractView cannot be instantiated.');
        }
        // ...
    }
    // ...
}

class ComposableView extends AbstractView {
    constructor() {
        console.log(`New Target is ComposableView: ${new.target === ComposableView}`);
        super();
    }
}
 // eslint-disable-next-line no-unused-vars 
const myComposableView = new ComposableView();

 // eslint-disable-next-line no-unused-vars 
const abstarctView = new AbstractView(); //Error: Abstract class AbstractView cannot be instantiated. 

