/* Importing and exporting modules
import sum, { findMax } from "./myFunctions.js";
import items, { people } from "./myArrays.js";
import { person as lorraine } from "./myObjects.js";

console.log(sum(10, 20, 30));
console.log(findMax(100, 200, 300));

const uniqueItems = new Set(items);
console.log(people);
lorraine.sayHello();

const items = [
    "apple",
    "banana",
    "orange",
    "banana",
    "kiwi",
    "orange",
    "banana",
  ];
  
  export const people = [
    { name: "Jim", age: 21 },
    { name: "John", age: 25 },
    { name: "Sara", age: 20 },
    { name: "Peter", age: 30 },
    { name: "Joy", age: 18 },
    { name: "Dan", age: 44 },
  ];
  
  export default items;



  export default function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  export const findMax = (...numbers) => {
    return Math.max(...numbers);
  };


  export const person = {
    name: "Lorraine",
    age: 30,
    sayHello() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    },
  };

  */