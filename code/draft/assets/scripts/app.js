// import { test, test2 } from './util.js';
// import testVarName from './util.js';
import * as util from './util.js'; // group multiple exported things into one object `util`, includes the default export
// import { test as newName } from './util.js'; // use custom name for imported objects

console.log(util.test);
// console.log(util.default);
console.log(util.test2);
// console.log(newName);

// function createGreeting(userName, message = "default Hello!") {
//     console.log(userName);
//     console.log(message);
//     return `Hi, I am ${userName}. ${message}`;
// }

// // greet("Jane");
// // greet("Jane", "hello");

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const user = {
//     name: 'Max',
//     age: 34,
//     greet() {
//         console.log('Hello!');
//         // can access properties of object with `this`
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();

// // create blueprint that can be used to create actual objects
// class User {
//     constructor(name, age) {
//         this.name = name; // store input in the properties
//         this.age = age;
//     }

//     greet() {
//         console.log('Hi from blueprint!');
//     }
// }

// const user1 = new User("Manual", 35);
// console.log(user1);
// user1.greet();

const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const res = hobbies.findIndex((item) => item === 'Sports');
console.log(res);

// map each hobby string to an object
const mappedHobbies = hobbies.map((item) => ({
    text: item
}));
console.log(mappedHobbies);


// on right side, create new array; on left side, destructure array
const [firstName, lastName] = ['Max', "Schwarz"];
console.log(firstName);
console.log(lastName);

// vars are pulled out by property name, can define alias with the colon
const {firstName: userName, age} = {
    firstName: 'Max',
    age: 34
}

console.log(userName);
console.log(firstName); // also works
console.log(age);

function storeOrder({id, currency}) { // destructuring
    console.log(`id: ${id}`);
    console.log(`currency ${currency}`);
}

storeOrder({id: 5, currency: 'USD', amount: 15.99});

const user = {
    name: "Max",
    age: 34
}
const extendedUser = {
    isAdmin: true,
    ...user
}

console.log(extendedUser);

const moreHobbies = ["Sleeping"];
const mergedHobbies = [...hobbies, ...moreHobbies];
console.log(mergedHobbies);

// a new `hobby` will be created for every element in the array
for (const hobby of mergedHobbies) {
    console.log(hobby)
}

// In JS, not so much in React
// const list = document.querySelector("ul");
// list.remove();

function handleTimeout() {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("timed out... again");
};

setTimeout(() => {
    console.log("timed out!!!");
}, 1000);

setTimeout(handleTimeout, 1000);
setTimeout(handleTimeout2, 1000);

function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log('Hi'));

function init() {
    function greet() {
        console.log('Hi');
    }

    greet(); // scoped to function only, can be executed here
}

// greet(); // cannot be executed here
init();

// primitives cannot be mutated 
let test = "test"; // strings, numbers, booleans are primitives
test = "this is a new string" // different string in memory
// objects and arrays (also an object) can be mutated - reference values
// constants: can mutate the value stored in that address, but variable / address cannot be overwritten, so can mutate an array assigned to it

