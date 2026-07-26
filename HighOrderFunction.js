/*
High-Order-Function : 
1. Topic: forEach()
🤔 What is a Higher-Order Function?

A Higher-Order Function is simply:

A function that takes another function as an argument, or returns another function.

*/

const hotel = [
    {
        id : 1,
        name : "Taj Hotel",
        city : "Delhi",
        price : 4500,
        rating : 4.5,
        available : true
    },
    {
        id : 2, 
        name : "Lalit Hotel",
        city : "Mumbai",
        price : 5000,
        rating : 4.8,
        available : false
    },
    {
        id : 3, 
        name : "Sea view resort",
        city : "Goa",
        price : 4000,
        rating : 4.1,
        available : true, 
    }
];

for(let i = 0; i < hotel.length; i++){
    console.log(`Hotel : ${hotel[i].name}`)
    console.log(`City : ${hotel[i].city}`)
    console.log(`Price : ${hotel[i].price}`)
    console.log(`Rating : ${hotel[i].rating}`);
    console.log(`Available : ${hotel[i].available}`)
    console.log("==========================");
}

/*
Now we will print all the deatails with the help of foreach() => high-order-function. 

hotel.forEach(function(item, index){
    console.log(`${index + 1}. Hotel: ${item.name}`);
    console.log(`City: ${item.city}`);
    console.log(`Price: ${item.price}`);
    console.log(`Rating: ${item.rating}`);
    console.log(`Available: ${item.available}`);
    console.log("===============")
})
*/


/*
🎫 Jira Ticket #204

Now let's make it feel even more like a real application.
The product manager says:
"Only show hotels that are currently available."

Expected output:
1. Taj Hotel
Available: true

2. Sea View Resort
Available: true
*/

hotel.forEach(function(item, index){
       if(item.available == true){
        console.log(`${index + 1}. Hotel : ${item.name}`);
        console.log(`Available : ${item.available}`)
        console.log(`=================`)
       }
})
