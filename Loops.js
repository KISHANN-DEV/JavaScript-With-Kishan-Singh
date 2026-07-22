/*
📖 What is a Loop?
Definition

A loop is a programming construct that repeatedly executes a block of code until a specified condition becomes false.

Simple Definition

A loop is used to repeat the same block of code multiple times without writing it again and again.
*/

let i = 10;

for(let i = 0; i <= 10; i++){
    console.log(` Here is Normal Loop: ${i}`)
}


//Reverse Number
for(let i = 10; i >= 5; i--){
    console.log(`Here is Reverse Number: ${i}`);
}

//Even Numbers 

for(let i = 2; i <= 10; i += 2){
    console.log(`Here is Even Number: ${i}`);
}

//Real World Example 

for(let product = 1; product <= 5; product++){
    console.log(`Here is Products: ${product}`)
}

/*
Coding Challenge

Write a JavaScript program using a for loop to print the multiplication table of 7.
*/

let num = 7;

for(let i = 1; i <= 10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}



/*
📖 What is a while Loop?
Definition

A while loop repeatedly executes a block of code as long as the specified condition is true.

Simple Definition

A while loop keeps running until its condition becomes false.
*/

//When Condition one is false 
let k = 10;

do {
    console.log(k);
} while (k < 5);


//When Condition one is true 

let j = 1;
do{
    console.log(j);
    j++;
}while(j <= 5);

/*
💻 Q6 – Coding Challenge

Write a JavaScript program using a while loop to print the multiplication table of 5.

Expected output:
*/

let number = 1;
let number2 = 5;

while(number < 10){
    console.log(`${number} * ${number2} = ${number * number2} `);
    number++;
}



/*
📖 What is the break Statement?
Definition

The break statement immediately terminates a loop when a specified condition is met.

Simple Definition

break is used to stop a loop immediately.
*/

for(let i = 1; i <= 6; i++){
    if(i === 6 ){
        break;  //Statement break 
    }
    console.log(i);
}

//First Even Number 

for(let i = 2; i <= 10; i++){
    if(i % 2 !== 0){
        break;
    }
    console.log(i);
}


/*
Real-World Example

Searching for a student in a list.
*/

let student = ["Lakhan", "Hitesh", "Satyam", "Sucksham", "Hameet", "Karan Yadav"];

for(let i = 0; i <= student.length; i++){
    if(student[i] === "Hitesh"){
        console.log("Student Record Found");
        break;
    } 
}

/*
📖 What is the continue Statement?
Definition

The continue statement skips the current iteration and moves to the next iteration of the loop.

Simple Definition

continue skips one iteration but does not stop the loop.
*/

for(let i = 0; i <= 5; i++){
    if(i === 3){
        continue;   //Skips 3
    }
    console.log(i);
}