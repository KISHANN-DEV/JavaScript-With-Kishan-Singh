/*
Definition:- 

Conditional statements are used to make decisions in a program. They execute different blocks of code depending on whether a condition is true or false.

Simple Definition
Conditional statements help JavaScript decide what code should run based on a condition

*/

// If Statement 

let age = 18;

if (age >= 18) {
    console.log("You Can Vote");
};

// if-else 

let age1 = 17;

if (age >= 18) {
    console.log("You can Vote");
} else {
    console.log("You Can't Vote");
}

// If-else Statement 

let marks = 90;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A")
} else if (marks >= 75) {
    console.log("Grade B")
} else {
    console.log("Grade C");
}

// Real-World Example
// Login System

let username = "Kishan Singh";
let password = "Admin@123"; 

if(username === "Kishan Singh" && password === "Admin@123"){
    console.log("Login Successful !!")
} else {
    console.log("Wrong PassWord Try Again !! ")
}

/* 
Summary
if → Executes code only if the condition is true.
if...else → Chooses between two blocks.
else if → Checks multiple conditions.
Use === instead of == in most cases.
Always use {} for readability and to avoid bugs.
*/

/*
📚 Revision Notes

Remember these interview points:

if → Executes code only if the condition is true.
if...else → Chooses between two blocks.
else if → Used when checking multiple conditions.
else → Runs if all previous conditions are false.
Use === instead of == for safer comparisons.
Variable names are case-sensitive and must match exactly.
*/