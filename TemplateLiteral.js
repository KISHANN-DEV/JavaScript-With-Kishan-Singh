/*
📖 What are Template Literals?
Definition

Template Literals are a modern JavaScript feature (introduced in ES6) that allows us to create strings more easily using backticks ( ). They support variable interpolation and multi-line strings.

Simple Definition

Template literals let us insert variables and expressions directly inside a string using ${}. 
*/

// Old Method :- 
let name = "Kishan Singh";
let age = 18;

console.log("My name is " + name + "and I am " + age + " Year old ");


// New Method :-
console.log(`My name is ${name} and I am ${age} years old`); 

//Example 2: Expressions

let a = 10;
let b = 10;

console.log(`The Sum of ${a} and ${b} is ${a + b}`); // The Sum of 10 and 10 is 20

// Function call 

function greet(name) {
    return `Hello, ${name}`;
}

console.log(`${greet("Kishan")}`);

// Multi-line Strings

let multiLineString = `This is a multi-line String.
This is the second line of the string.
This is the third line of the string.`;

console.log(multiLineString);

//Real-World Example

// Suppose you're building a student profile.

let name1 = "Kishan Singh";
let age1 = 19; 
let course = "MERN Stack Development";
let city = "Sirsa";

let studentProfile = `Student Profile:
Name : ${name1}
Age : ${age1}
course : ${course}
city : ${city}
`
console.log(studentProfile);

/* 
Q6 (Coding Challenge)

Write a JavaScript program that:

Creates the following variables:
let name = "Kishan";
let college = "CDLU";
let course = "BCA";
let age = 19;
Prints the following output using Template Literals only:
Student Information
-------------------
Name    : Kishan
College : CDLU
Course  : BCA
Age     : 19

*/

let studentName  = "Kishan Singh";
let College = "CDLU";
let Course1 = "BCA";
let age2 = 19;

console.log(`
    Student Details
    ----------------
    Name : ${studentName}
    College : ${College}
    Course : ${Course1}
    Age : ${age2}`)