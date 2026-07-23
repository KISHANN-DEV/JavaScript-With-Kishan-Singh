/*

Function :- Function Is a Resuable block of code which can be reused again and again.
Build Our First Function

*/

function bookHotel(hotelName, city, price) {
    console.log("Booking Confirmed");

    console.log(`Hotelname : ${hotelName}`);
    console.log(`City : ${city}`);
    console.log(`Price : ${price}`);
}

console.log(bookHotel("Taj", "Sirsa", "999"));
console.log("  ")
console.log(bookHotel("Oyo", "Hisar", "998"));

/*
🎯 Today's Challenge

Imagine you're building an Online Food Delivery App instead of a travel website.

Create a function called:

It should accept:

foodName
restaurant
price

====== Order Confirmed ======
Food : Pizza
Restaurant : Domino's
Price : ₹299
=============================

*/

function orderFood(foodName, restaurent, price) {
    console.log("====== Order Confirmed ======")

    console.log(`Foodname: ${foodName}`);
    console.log(`Restaurent ${restaurent}`);
    console.log(`Price : ${price}`);

    console.log("====================")

}
console.log(orderFood("Pizza", "Loh Pizza", "299"));

/*
This is one of the most frequently asked JavaScript interview questions.

Many beginners memorize the definitions.

Developers understand why they exist.
*/

/*
🧑‍💻 Challenge (Developer Edition)

You're building an Online Shopping Cart.

Create a function named: calculateBill()

It should have three parameters:

productName
quantity
pricePerItem

Inside the function:

Calculate the total price.
Print the invoice in a clean format.
Expected Output

====== Invoice ======
Product : Laptop
Quantity : 2
Price Per Item : ₹50000
Total : ₹100000
=====================

🎯 Your Goal

Don't just make it work.

Think like a software developer:

Use meaningful variable names.
Keep the formatting clean.
Calculate the total inside the function instead of hardcoding it.

Once you finish this, we'll move to the next lesson: return vs console.log()—one of the most important concepts for building real applications.
 
*/

function calculateBill(productName, quentity, pricePerItem, TotalPrice) {
    console.log("===== Invoice ======");
    console.log(`Product : ${productName}`);
    console.log(`Quantiy : ${quentity}`);
    console.log(`Price Per Item : ${pricePerItem}`);
    console.log(`Total Price :  ${pricePerItem * quentity} `)
    console.log("===================")
}

console.log(calculateBill("Laptop", 2, 50000));



// Return Function 
function calculatedTotal(price, nights) {
    return price * nights;
}

const total = calculatedTotal(999, 2);
console.log(total);

const finalBill = total + 500;

console.log(finalBill);

const discount = 498;

const payable = finalBill - discount;

console.log(payable);

/*

⚠️ Interview Question
What is the difference between return and console.log()?
console.log()
Prints a value to the console.
Does not send the value back.
Mostly used for debugging.
return
Sends a value back to the caller.
Lets other code reuse the result.
Essential for calculations, APIs, React, and backend logic.
 
*/

/*
 
🧑‍💻 Challenge (Developer Edition)

You're building an E-Commerce Website.

Create a function:

calculateDiscount()

Parameters:

price
discountPercentage

Inside the function:

Calculate the discount amount.
Calculate the final price.
Return the final price (don't print it inside the function).

Example:

const finalPrice = calculateDiscount(5000, 20);
console.log(finalPrice);

Expected Output:
4000

*/

function calculateDiscount(price, discountPercentage) {

    const discountAmount = price * (discountPercentage / 100);
    const finalPrice = price - discountAmount;
    const priceWithGST = finalPrice * 1.18;
    
    return {
        discountAmount,
        finalPrice,
        priceWithGST
    };
    
}    

console.log(calculateDiscount(5000, 20));

/*
💼 Interview Question
Can a JavaScript function return multiple values?

✅ Answer:

A function can only return one value directly.

If you need to return multiple related values, return an object or an array.

*/

// Function Expression:- Wrapping a function inside a variable is called function expression. 

const bookHotell = function(hotelName, city){
    console.log(`======Booking Confirmed======`);
    console.log(`Hotel Name: ${hotelName}`);
    console.log(`City : ${city}`);
    console.log(`=========================`)
}

bookHotell("Taj Hotel(Mumbai)", "Mumbai");

/*
📊 Function Declaration vs Function Expression

Function Declaration	                        Function Expression
Named function	                                Function stored in a variable
Can be called before it's written (hoisted)    	Must be defined before calling
Traditional syntax	                            Modern projects use this frequently
*/

//AnotherOne :- 

const calculateTotall = function calculateTotall(price, nights){   //Const calculateTotall is a varibale in which whole function is stored. 
    return price * nights;
}

const totall = calculateTotall(1000, 2);
console.log(totall);

/*
🧑‍💻 Challenge (Developer Edition)

You're building an Online Banking System.

Create a Function Expression named:
transferMoney

It should accept:

sender
receiver
amount

It should print:

===== Money Transfer =====
From : Kishan
To : Rahul
Amount : ₹5000
Status : Successful
==========================
*/

const transferMoney = function transferMoney(sender, receiver, amount){
    console.log(`=====Money Transfer =====`);
    console.log(`From: ${sender}`);
    console.log(`To : ${receiver}`) ;
    console.log(`Amount : ${amount}`);
    console.log(`==========================`)
    
    return{
        sender : "Kishan Singh",
        receiver : "Lakhan", 
        amount : 1000
    }
}

const finalTransfer = transferMoney("Kishan", "Rahul", 1000);
console.log(finalTransfer);

/*
 💼 Interview Tip
What's the difference between these two?
1st:- 

return {
    sender: sender
} 

2nd :- 

return {
    sender
}

✅ They produce the same result.

The second is called Object Property Shorthand (introduced in ES6) and is the preferred modern style.
*/




// Arrow Functions:-  Arrow functions are simply the shorterway of writing functions. 

const validatedBooking = (name, room) => {   //Arrow function 
   if(room <= 0){
    return "Invalid Booking";
   }
   return `${name}'s Booking Confirmed`;
}

const checkBooking = validatedBooking("Kishan Singh", 1);
console.log(checkBooking);

/*
 📊 Three Common Styles
1. No Parameters
2. One Parameters
3. Multipal Parameter

*/

//No Parameters :- 
const showWelcome = ()=> {
    console.log("Welcome Kishan Singh");
}

showWelcome();



//One Parameter:- 
const greet = name => {
    console.log(`Hello ${name}`);
}
greet("Kishan ji")



// Multipal Parameter :- 

const calculate = (price, quentity) => {
    return price * quentity;
}

let totalCalulatedBill = calculate(2000, 2);
console.log(totalCalulatedBill); 

/*
🧑‍💻 Challenge (Developer Edition)
You're building an Online Food Delivery App.

Create an arrow function called:
calculateFoodBill

Parameters:
foodName
quantity
pricePerItem

Requirements:
Calculate the total bill.
Return an object:

{
    foodName,
    quantity,
    pricePerItem,
    totalBill
}

Example
const bill = calculateFoodBill("Pizza", 3, 299);

console.log(bill);

{
    foodName: "Pizza",
    quantity: 3,
    pricePerItem: 299,
    totalBill: 897
}

*/

const calculatedFoodBill = (foodName, quantity, pricePerIteam) => {
    const totalBill = quantity * pricePerIteam;
    return{
       foodName : "Pizza",
       quantity : 3, 
       pricePerIteam : 299, 
       totalBill : 897
    };
}

const bill = calculatedFoodBill("Pizza", 3, 299);
console.log(bill);

