/*
🚀 Topic 9 - Lesson 6
Scope (Developer Edition) ⭐⭐⭐⭐⭐

Goal: Understand where a variable exists, who can access it, and when it gets destroyed.

📖 What is Scope?

Scope defines where a variable can be accessed in your program.

🏗️ Types of Scope

Today we'll cover:

1️⃣ Global Scope
2️⃣ Function Scope
3️⃣ Block Scope

1️⃣ Global Scope

A variable declared outside every function and block is called a Global Variable.


*/

//Global Scope:- 
const websiteName = "Cineverse";

function showMovie() {
    console.log(websiteName);
}

showMovie();
showMovie(websiteName);

//Function Scope:- A Variable declared inside a function is called function scope. 

function bookHotel() {
    let bookingID = "BKD123";
    console.log(bookingID);
}
bookHotel();

/* Block Scope:- let/ const are block scoped and theri are only accessable inside {} block of the code and cannot accessed outside of that block. 
 But var ignore the block scope and the data stored inside the var variable can be accssed outside the block thats why in modern js they dont use var variable.*/

if (true) {
    let x = 10;
    console.log(x);
};

//  console.log(x); Reference Error.

/*
🧑‍💻 Developer Challenge

You're building a Banking System.

Write a program with these requirements:
Create a global variable:
const bankName = "State Bank";
Create a function:
createAccount(customerName)

Inside the function:
Create a variable:
const accountNumber = "SB1001";
Print:
Bank Name
Customer Name
Account Number
Inside the function, add:
if (true) {
    const balance = 50000;
    console.log(balance);
}
After the if block, try to print:
console.log(balance);
*/

const bankName = "State Bank";

function createAccount(customerName){
    const accountNumber = "SB1001";

    console.log(`Bank Name : ${bankName}`);
    console.log(`Customer Name: ${customerName}`);
    console.log(`Account Number : ${accountNumber}`);

    if(true){
        const balance = 50000;
        console.log(balance);
    }

    return{
        bankName,
        customerName,
        accountNumber,
    };

    console.log(balance); // Refrence error because const is block scope;
}

const checkEligibal = createAccount("Kishan Singh");
console.log(checkEligibal);


