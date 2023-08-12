// Q1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.
// Your ES6 function here
// const incrementNumbers = (arr) => arr.map((num) => num + 3);
// const numbers = [1, 2, 3, 4, 5];
// console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]

// Q2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.
// Your ES6 function here
const capitalizeArray = (arr) => arr.map((str) => str.toUpperCase());
const myArray = ["apple", "banana", "cherry"];
console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]

// Q3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// Your ES6 function here
const getAges = (arr) => arr.map((obj) => obj.age);
const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];
const ages = getAges(people);
console.log(ages); // Output: [25, 24, 29]

// Q4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.
// Your ES6 function here
const getProductNamesInLowerCase = (arr) =>
  arr.map((obj) => obj.name.toLowerCase());
const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];
console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]

// Q5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.
// Your ES6 function here
const getCityNames = (arr) => arr.map((obj) => obj.name);
const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]

// Q6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

// Your ES6 function here
const filterLongStrings = (arr) => arr.filter((item) => item.length > 5);
const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
console.log(filterLongStrings(fruits));
// Output: ["banana", "cherry", "watermelon", "pineapple"]

// Q7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

// Your ES6 code here
const isDivisibleBy3and5 = (arr) =>
  arr.filter((num) => num % 3 === 0 && num % 5 === 0);
const numbers = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbers));
// Output: [30, 15]

// Q8. Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

// Your ES6 code here
const filterByAge = (arr) => arr.filter((obj) => obj.age > 30);
const people1 = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];

console.log(filterByAge(people1));
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

// Q9. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.
// Your ES6 code here
const filterByScore = (arr) => arr.filter((obj) => obj.score > 80);
const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

console.log(filterByScore(students));
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

// Q10. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

// Your ES6 code here
const filterByCityAndAge = (Arr) =>
  Arr.filter((obj) => obj.city === "Indore" && obj.age > 70);
const people2 = [
  { name: "Ridhima", age: 75, city: "Indore" },
  { name: "Akshay", age: 60, city: "Delhi" },
  { name: "Udit", age: 80, city: "Indore" },
  { name: "Venki", age: 80, city: "Bangalore" },
];
const filteredPeople = filterByCityAndAge(people2);
console.log(filteredPeople);
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

// Q11. Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

// Your ES6 code here
const filterByGenre = (arr) =>
  arr.filter((obj) => obj.genre === "Science Fiction");
const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
  { title: "1984", author: "George Orwell", genre: "Science Fiction" },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
];

const filteredBooks = filterByGenre(books, "Science Fiction");
console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

// Q12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

// Your ES6 code here
const filterBySalary = (arr) =>
  arr.filter((obj) => obj.age > 25 && obj.salary > 22000);
const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];

const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]
