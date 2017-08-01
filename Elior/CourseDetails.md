## Goals:
#: Revisit Prototype inheritance (Prototype Chain)
#: Understand Object Linking in JS
#: Understand Object Creation Techniques
#: Understand the differance between Classical & Prototypical inharitance
#: Ways to Define Javascript "Classes"
#: ES.Next Classes
#: Strict Mode - Overview
#V: Shorthand Method Definitions
#V: The Class Definition and Properties
#: Sub-Classing 
#: Encapsolation of Data using Differant Techniques
#: Spacial Methods And Generators
#: Mixins and Multiple Inharitance
#: Summery (Bad Practice vs Best Practice)



# Classes in ES.Next







## History & Evolution
- Old fasion classes in JavaScript
    - jQuery, LoDash and such
    - prototype Lib and such
-* The Object.assign Function
-* The Object.create Function
- 

## Theory of Class in JavaScript
- Understanding Instantiation of Objects
- Types of Inharitence 
- Classical Inheritance vs Prototypical Inheritance ("Copy" vs "Link")
  - OOP Classical Inharitance
  - Prototype Inharicatnce
- So what the hell are classes in JavaScript?!?
  - syntetic sugar for Constructor Functions
- Supported Platform


## Classes Deceleration and Syntax
- Class deceleration (Syntax explanation)
- Class Structure
- Define a Classes
- Class Constructor + Defaults Behavior
- Define Methods
- Define Properties
- Private properties (Maps, Symbols)
 - Privileged methods
 - using symbols
 - using Weak Maps
- Define Static Methods
- Static Inharitance

## Class Inheritance (Subclasses)
- The "extend" expression
  - Mixins Support
  - RunTime Classes with Extends
- Basic inheritance
- Ths "super" keyword
- Method override

## Advanced Topics
- The `Object` Object
- Complex inheritance
- inheritance from Native classes
- impact of classes and native inheritance
 - Arrays (Creating Collections based Objects)
- Symbols Functions


## Exercises
API Data Consumption.

Class 1: 
        (Abstract) => Resource
        (Derived) => ApiResource
        (Derived) => Localstorage Resource


Interface: 
 fetchData(key) => return a valid json with the data.




-#- Concept of inharitance
  - When inharit is to implement the abstract interface and not to extend the target.

   



References:
What’s the Difference Between Class & Prototypical Inheritance?: https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9
Evolution: JavaScript Factory Functions vs Constructor Functions vs Classes: 
https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

deep dive es6 classes - EXALENT: https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes

Deep Syntax structure:https://docs.microsoft.com/en-us/scripting/javascript/reference/class-statement-javascript