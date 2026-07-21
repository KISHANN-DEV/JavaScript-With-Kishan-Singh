// Operators 

let a = 10;
let b = 5;
console.log("Addition:", a + b); // Addition
console.log("Subtraction:", a - b); // Subtraction
console.log("Multiplication:", a * b); // Multiplication
console.log("Division:", a / b); // Division
console.log("Modulus:", a % b); // Modulus
console.log("Exponentiation:", a ** b); // Exponentiation 

//Assignment Operators

let marks = 85;
marks += 10;

console.log("Updated Marks:" , marks); // Updated Marks: 95

marks -= 5;
console.log("Updated Marks after subtraction:", marks); // Updated Marks after subtraction: 90  

marks *= 2;
console.log("Updated Marks after multiplication:", marks); // Updated Marks after multiplication: 180

marks /= 3;
console.log("Updated Marks after division:", marks); // Updated Marks after division: 60

//Comparison Operators

let x = 10;
let y = 5; 

console.log("Is x equal to y ?", x == y); // Is x equal to y ? false
console.log("Is x not equal to y ?", x != y); // Is x not equal to y ? true
console.log("Is x greater than y ?", x > y); // Is x greater than y ? true
console.log("Is x less than y ?", x < y); // Is x less than y ? false
console.log("Is x greater than or equal to y ?", x >= y);   // Is x greater than or equal to y ? true
console.log("Is x less than or equal to y ?", x <= y); // Is x less than or equal to y ? false

 // logical Operators

 let age = 18;
 let hasLicense = true;

 console.log(age >=18 && hasLicense); // true
 console.log(age >=18 || hasLicense); // true
 console.log(!hasLicense); // false 

 /*

 Key Points
Arithmetic operators perform calculations.
Assignment operators assign or update values.
Comparison operators return true or false.
Logical operators combine multiple conditions.
Prefer === and !== over == and != because they compare both value and data type.

 */

//Real Wrold Example

let adminPassword = "admin123";
let savedPassword = "admin123";

if(adminPassword === savedPassword) {
    console.log("Access granted. Welcome, Admin!");
} else {
    console.log("Access denied. Incorrect password.");
}

 // Task 
 /*
Print:

Addition
Subtraction
Multiplication
Division
Modulus
Exponent

using console.log().
 */

let num1 = 20;
let num2 = 5;

console.log("Addition:", num1 + num2); // Addition: 25
console.log("Subtraction:", num1 - num2); // Subtraction: 15
console.log("Multiplication:", num1 * num2); // Multiplication: 100
console.log("Division:", num1 / num2); // Division: 4
console.log("Modulus:", num1 % num2); // Modulus: 0
console.log("Exponentiation:", num1 ** num2); // Exponentiation: 3200000
