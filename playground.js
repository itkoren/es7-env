// Snippets
// ------------------------------------------

var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}

console.log(apple);




















// console.log('----Playground----');

// const YEAR_MS =(1000 * 60 * 60 * 24 * 365.25);
// const GANDER = {
//     Male: 'Male',
//     Female: 'Female'
// };

// // let spacialFieldName = function(){
// //     console.log('This is invoked?');
// //     return 'xxx';
// // };

// const Person = class {
//     constructor(options){

//         if(!options){ throw Error('No Options');}

//         // Declaring class properties
//         this._firstName = options.firstName;
//         this._lastName = options.lastName;
//         this._birthDate = options.birthDate;
//         this._personalId = options.personalId;
//         this._gander = options.gander;
//     }

//     get age(){
//         return ( (Date.now() - this._birthDate) / YEAR_MS).toFixed(0);
//     }
    
//     get fullName(){
//         return `${this._firstName} ${this._lastName}`;
//     }

//     get details(){
//         console.log('Creating an Object from the Person');
//         return {
//             fullName: this.fullName,
//             age: this.age,
//             gander: this.gander,
//             id: this._personalId
//         };
//     }

//     get gander(){
//         if(Person.getGanders().hasOwnProperty(this._gander)){
//             return this._gander;
//         }
//         return null;
//     }

//     static getGanders(){
//         return GANDER;
//     }

//     *whatIsOnYourMind(){
//         yield '........';
//     }
    
// }

// Person.EXTERNAL_STATIC = 'External Static';

// const Employee = class extends Person{
//     constructor(options){
//         super(options);

//         this._employeeId = guid();
//         this._sosicalSecurityId = options.sosicalSecurityId;
//         this._startDate = options.startDate;
//         this._endDate = options.endDate;

//     }

//     get tenyor(){
//         return (((this._endDate || Date.now()) - this._startDate) / YEAR_MS ).toFixed(2);
//     }

//     get details(){
//         console.log('Creating an Object from the Emp');
//         return Object.assign({
//             employeeId: this._employeeId,
//             tenyor: this.tenyor
//         }, super.details);
//     }
// }

// const LivePersonEmployee = class extends Employee{
//     constructor(options){
//         super(options);

//         this._department = options.department;
//     }
//     get details(){
//         console.log('Creating an Object from the LP');
//         return Object.assign({
//             workplace: 'LivePerson',
//             department: this._department
//         }, super.details);
//     }
// } 

// LivePersonEmployee.EXTERNAL_STATIC = 'External Static From LP';

// var lpWorker = new LivePersonEmployee({
//     firstName: 'Elior',
//     lastName: 'Cohen',
//     gander: GANDER.Male,
//     birthDate: new Date(1986, 6,21),
//     personalId: '21989629',
//     startDate: new Date(2014, 9, 1),
//     department: 'R&D'
// });
// console.log( Object.keys(lpWorker));

// var lpWorker2 = new LivePersonEmployee({
//     firstName: 'Elior2',
//     lastName: 'Cohen2',
//     gander: GANDER.Male,
//     birthDate: new Date(1986, 6,21),
//     personalId: '21989629',
//     startDate: new Date(2014, 9, 1),
//     department: 'R&D'
// });


// console.log('=================================================================');
// console.log(lpWorker.details);
// console.log('=================================================================');
// console.log('Spacial Field For worker1                              :', lpWorker.hasOwnProperty('xxx'));
// console.log('Spacial Field For worker1                              :', lpWorker.hasOwnProperty('yyy'));
// console.log('Spacial Field For worker2                              :', lpWorker2.hasOwnProperty('xxx'));
// console.log('Spacial Field For worker2                              :', lpWorker2.hasOwnProperty('yyy'));
// console.log('=================================================================');
// console.log(`lpWorker typeof                                        : ${typeof lpWorker}`);
// console.log(`prototype                                              : ${Object.getPrototypeOf(lpWorker).constructor.name}`);
// console.log(`prototype name                                         : ${Object.getPrototypeOf(lpWorker)}`);
// console.log('=================================================================');
// console.log(`lpWorker instanceof Person                             : ${lpWorker instanceof Person}`);
// console.log(`lpWorker instanceof Employee                           : ${lpWorker instanceof Employee}`);
// console.log(`lpWorker instanceof LivePersonEmployee                 : ${lpWorker instanceof Employee}`);
// console.log('=================================================================');
// console.log(`lpWorker prototype of LivePersonEmployee               : ${Object.getPrototypeOf(lpWorker) === LivePersonEmployee.prototype}`);
// console.log(`lpWorker prototype of Employee                         : ${Object.getPrototypeOf(lpWorker) === Employee.prototype}`);
// console.log(`lpWorker prototype of Person                           : ${Object.getPrototypeOf(lpWorker) === Person.prototype}`);
// console.log('=================================================================');
// console.log(`lpWorker is in the Prototype Chain(LivePersonEmployee) : ${LivePersonEmployee.prototype.isPrototypeOf(lpWorker)}`);
// console.log(`lpWorker is in the Prototype Chain(Employee)           : ${Employee.prototype.isPrototypeOf(lpWorker)}`);
// console.log(`lpWorker is in the Prototype Chain(Person)             : ${Person.prototype.isPrototypeOf(lpWorker)}`);
// console.log(`lpWorker is in the Prototype Chain(Object)             : ${Object.prototype.isPrototypeOf(lpWorker)}`);

// function Tree(name) {
//   this.name = name;
// }

// var theTree = new Tree('Redwood');
// console.log('theTree.constructor is ' + theTree.constructor);


// function guid() {
//   function s4() {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   }
//   return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//     s4() + '-' + s4() + s4() + s4();
// }






// // const ChatLine = class{

// //     get message(){
// //         return this._message;
// //     }

// //     set message(value){
// //         this._message = value;
// //     }

// //     constructor(message){
// //         this._message = message;
// //     }

// //     render(){
// //         return this._message;
// // //        throw new Error('render is Not Implemented in the base class');
// //     }

// // };

// // const SystemChatLine = class extends ChatLine {
// //     constructor(message){
// //         super(message);
// //     }
// //     toString(){
// //         return `System: ${this.message}`;
// //     }
// // };

// // const VisitorChatLine = class extends ChatLine{
// //     constructor(message, visitorName){
// //         super(message);
// //         this._visitorName = visitorName;
// //     }

// //     toString (){
// //         return `Visitor(${this._visitorName}): ${this.message}`;
// //     }
// // };

// // const AgentChatLine = class extends ChatLine{
// //     constructor(message, agentName){
// //         super(message);
// //         this.agentName = agentName;
// //     }

// //     toString (){
// //         return `Agent(${this.agentName}): ${this.message}`;
// //     }
// // };


// // let chatLinesCollections = new Set();
// // chatLinesCollections.add(new SystemChatLine('Wellcome to Chat'));
// // chatLinesCollections.add(new VisitorChatLine('Hello', 'Booti'));
// // chatLinesCollections.add(new AgentChatLine('Hey Visitor', 'Elior'));

// // chatLinesCollections.forEach((item)=>{
// //     console.log("" + item);
// // });


// // // console.log(chatLinesCollections.size);