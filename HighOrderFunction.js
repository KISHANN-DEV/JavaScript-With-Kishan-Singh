/*
High-Order-Function : 
1. Topic: forEach()
🤔 What is a Higher-Order Function?

A Higher-Order Function is simply:

A function that takes another function as an argument, or returns another function.

*/

const hotel = [
    {
        id: 1,
        name: "Taj Hotel",
        city: "Delhi",
        price: 4500,
        rating: 4.5,
        available: true
    },
    {
        id: 2,
        name: "Lalit Hotel",
        city: "Mumbai",
        price: 5000,
        rating: 4.8,
        available: false
    },
    {
        id: 3,
        name: "Sea view resort",
        city: "Goa",
        price: 4000,
        rating: 4.1,
        available: true,
    }
];

for (let i = 0; i < hotel.length; i++) {
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

hotel.forEach(function (item, index) {
    if (item.available == true) {
        console.log(`${index + 1}. Hotel : ${item.name}`);
        console.log(`Available : ${item.available}`)
        console.log(`=================`)
    }
})


//with the help of arrow funtion: 
hotel.forEach((item, index) => {
    if (item.available == true) {
        console.log(`${index + 1}. Hotel : ${item.name}`);
        console.log(`Available : ${item.available}`)
        console.log(`=================`)
    }
})

/*
Company Requirement

Your Team Lead says:
"We only need the first available hotel. Once you find it, stop searching."
Immediately you might think:

break;

🎯 Important Interview Question

Can we use break inside forEach()?
✅ Correct answer:
No. break only works with looping constructs like for, while, and switch. Since forEach() 
executes a callback function for each element, using break inside that callback results in 
an "Illegal break statement" error.
*/



hotel.forEach((item) => {

    if (!item.available) {
        return;
    }

    console.log(item.name);

});

console.log("Done");

/*
Yesterday, we learned forEach(). Today, you'll understand why filter() exists.
*/
const hotels = [
    {
        id: 1,
        name: "Taj Hotel",
        city: "Delhi",
        price: 4500,
        rating: 4.5,
        available: true
    },
    {
        id: 2,
        name: "Lalit Hotel",
        city: "Mumbai",
        price: 5000,
        rating: 4.8,
        available: false
    },
    {
        id: 3,
        name: "Sea View Resort",
        city: "Goa",
        price: 4000,
        rating: 4.1,
        available: true
    },
    {
        id: 4,
        name: "Mountain Inn",
        city: "Manali",
        price: 3500,
        rating: 4.2,
        available: false
    },
    {
        id: 5,
        name: "Royal Palace",
        city: "Jaipur",
        price: 6000,
        rating: 4.9,
        available: true
    }
];

/*
🎫 Jira Ticket #302

The Product Manager says:
Show only hotels whose price is less than ₹5000.

🎯 Your Task
Complete this code:
*/

const budgetHotels = hotels.filter((item) => {
    return item.price < 5000;
});

console.log(budgetHotels);

/*
🎫 Jira Ticket #303

Let's make it slightly more challenging.
The Product Manager says:

Show only hotels that satisfy both conditions:
⭐ Rating 4.5 or higher
💰 Price less than ₹6000
🎯 Your Task

Write the code using filter().
Expected hotels:

✅ Taj Hotel
✅ Lalit Hotel
*/

const premiumBudgetHotels = hotel.filter((item) => {
    return item.rating >= 4.5 && item.price < 6000;
});
console.log(premiumBudgetHotels);

const numbers = [10, 0, 25, -5, 0, 30];

const result = numbers.filter((num) => {
    return num;
});

console.log(result);

/*
🎫 Jira Ticket #304

The Product Manager says:
"Show only Premium Hotels."
A hotel is considered Premium if:

⭐ Rating is 4.5 or higher
✅ Hotel is available
💰 Price is ₹6000 or less

Use the same dataset:
*/

/*
🎫 Jira Ticket #305

The Product Manager says:
Show hotels that satisfy either of these conditions:

📍 City is "Goa"
⭐ Rating is greater than 4.7
*/

const hotelss = [
  {
    id: 1,
    name: "Taj Hotel",
    city: "Delhi",
    price: 4500,
    rating: 4.5,
    available: true
  },
  {
    id: 2,
    name: "Lalit Hotel",
    city: "Mumbai",
    price: 5200,
    rating: 4.8,
    available: false
  },
  {
    id: 3,
    name: "Sea View Resort",
    city: "Goa",
    price: 4000,
    rating: 4.2,
    available: true
  },
  {
    id: 4,
    name: "Mountain Inn",
    city: "Manali",
    price: 3500,
    rating: 4.0,
    available: true
  },
  {
    id: 5,
    name: "Royal Palace",
    city: "Jaipur",
    price: 6500,
    rating: 4.9,
    available: true
  },
  {
    id: 6,
    name: "Lake View Hotel",
    city: "Udaipur",
    price: 5500,
    rating: 4.6,
    available: false
  },
  {
    id: 7,
    name: "Beach Paradise",
    city: "Goa",
    price: 7000,
    rating: 4.8,
    available: true
  },
  {
    id: 8,
    name: "City Comfort",
    city: "Bangalore",
    price: 3000,
    rating: 3.9,
    available: true
  },
  {
    id: 9,
    name: "Grand Residency",
    city: "Hyderabad",
    price: 4800,
    rating: 4.7,
    available: false
  },
  {
    id: 10,
    name: "Hill Top Resort",
    city: "Shimla",
    price: 3900,
    rating: 4.4,
    available: true
  }
];

const resultss = hotelss.filter((item) => {
    return item.available && item.price < 5000;
});

console.log(result);