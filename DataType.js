// String 

let name = "Kishan"; // String literal
let city = `New Delhi`; // String literal using backticks

console.log(city);
console.log(name);

let age = 18; // Number literal
let price = 100.50; // Number literal with decimal

console.log(age);
console.log(price);

let isAvailable = true; // Boolean literal
let isLoggedIn = false; // Boolean literal

console.log(isAvailable);
console.log(isLoggedIn); 

let user ;// Undefined literal
console.log(user);

let emptyValue = null; // Null literal
console.log(emptyValue);

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);


// Non-Primitive Data Types 

// objects

let student ={
    name: "Kishan singh",
    course: "MERN Stack",
    age: 18,
    city: "Sirsa"
};

console.log(student);

//Array

let fruits = ["apple", "banana", "mango", "grapes"];
console.log(fruits);

// Function
function greet() {
    console.log("Hello, welcome to the world of JavaScript!");
}

greet(); // Calling the function to execute it

// const name = "Kishan";
// const age = 18;
// const isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isAvailable);


/* Stores your name (String).
Stores your age (Number).
Stores whether you are a student (Boolean).
Declares your phone number but does not assign a value.
Creates a variable for your favorite game and sets it to null.
Prints each variable and its data type using typeof.  */

let Age = 19;
let IsStudent = true;
let PhoneNumber; // Undefined literal
let FavoriteGame = null; // Null literal

console.log(typeof Age);
console.log(typeof isStudent);
console.log(typeof phoneNumber);
console.log(typeof favoriteGame);