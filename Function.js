/*

Function :- Function Is a Resuable block of code which can be reused again and again.
Build Our First Function

*/

function bookHotel(hotelName, city, price){
    console.log("Booking Confirmed") ;

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

function orderFood(foodName, restaurent, price){
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

function calculateBill(productName, quentity, pricePerItem, TotalPrice){
    console.log("===== Invoice ======");
    console.log(`Product : ${productName}`);
    console.log(`Quantiy : ${quentity}`);
    console.log(`Price Per Item : ${pricePerItem}`);
    console.log(`Total Price :  ${pricePerItem * quentity} `)
    console.log("===================")
}

console.log(calculateBill("Laptop", 2, 50000));