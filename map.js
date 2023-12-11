const numbers = [1, 2, 3, 4, 5];

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "The Art of Gathering", author: "Priya Parker" },
  { title: "1984", author: "George Orwell" },  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Atomic habits", author: "James Clear" },
];

const names = ["abra", "bo", "guil", "hanna", "jacob", "kayla"];

const multipliedNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(multipliedNumbers)


const bookTitles = books.map(function (book, i) {
  return i + " - " + book.author;
});
console.log(bookTitles)

const capitalizedNames = names.map(function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});

console.log(capitalizedNames);

//forEach 

const squaredNumbers = [];
numbers.forEach(function (number) {
  squaredNumbers.push(number * number);
});

//numbers.forEach((number=>squaredNumbers.push(number*2))
  


//find  method 
const foundNumber = numbers.find(function (number) {
  return number > 3;
});
const numb = [1, 2, 3, 4, 5, 6]

const finds = numb.find(function (num) {

 return num > 3
})

console.log(finds)