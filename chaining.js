const numbers = [ 1, 2, 3, 4, 5 ,7]

const people = [
  { name: "Alice", age: 30 },
  { name: "Hope", age: 19 },
  { name: "Ben", age: 25 },
  { name: "Charlie", age: 50 },
  { name: "Dana", age: 28 },
  { name: "Joey", age: 43 },
];

const filterPeople = people 
                    .filter(person => person.age >= 40)  
                    .map(person =>person.name);
                    
    console.log(filterPeople);

const sum= numbers
            .map(num => num * 2)
            .filter(num =>  num <=6)
            .reduce((acc, num) =>  acc + num, 10);

console.log(sum);

