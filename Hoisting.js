/*
📖 What is Hoisting?

Definition:

Hoisting is JavaScript's behavior of processing declarations before the code is executed.

Notice something important.

I said:

Declarations are processed.

I did not say:

"JavaScript moves your code."

JavaScript doesn't physically rewrite your file.
*/

bookHotel("Taj", "Delhi");

function bookHotel(name,city){
    console.log(`Hotel : ${name} In ${city} `);
}

sayHello();

function sayHello() {
    console.log("Hello Developer");
}

console.log(language);
var language = "javaScript"; //Undefined

console.log(framework);
let framework = "react"; //Reference Error


console.log(totalValue); // Reference Error 
const totalValue = "Nothing"

showprice(); 

const showprice = function() {
    console.log(5000);
}

/*
💼 One More Interview Question

Suppose an interviewer asks:

"Does JavaScript move variables to the top of the file?"

❌ Incorrect Answer

"Yes, JavaScript moves variables to the top."

✅ Correct Answer

No. JavaScript does not physically move code. During the creation phase, it processes declarations and allocates memory for them before executing the code. This behavior is called hoisting.

That answer shows a much deeper understanding. 
*/

