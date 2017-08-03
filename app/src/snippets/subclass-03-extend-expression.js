// class ChildClass extends ParentClass { ... }
var Factory = () =>{
    return class FactoryClass{
        constructor(){
            this.fromFactory = true;
        }
    }
};

// we can extend from any class, the extend is an expression
class Component extends Factory(){
    
}

var instance = new Component();


console.log(`instance  => ${instance}`);
console.log(`instance.__proto__.constructor.name            => ${instance.__proto__.constructor.name}`);
console.log(`instance.__proto__.__proto__.constructor.name  => ${instance.__proto__.__proto__.constructor.name}`);