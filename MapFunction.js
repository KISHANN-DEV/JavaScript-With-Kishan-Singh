/*
📘 Topic: map()

This is one of the most frequently used methods in React, Next.js, and almost every frontend project.

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
  }
];

const hotelName = hotels.filter((item) => {
  return item.available && item.price < 5000;
}).map((item) => {
  return item.name;
})

console.log(hotelName);


const allHotelNames = hotels.map((item) => {
  return item.name;
})

console.log(allHotelNames);


/*
🎫 Jira Ticket #402 (Now We Learn the Real Power of map())

The backend says:

"Increase the price of every hotel by ₹500."

The original array should stay unchanged.

The new array should look like this:

[
  {
    id: 1,
    name: "Taj Hotel",
    city: "Delhi",
    price: 5000,
    ...
  },
  ...
]
*/

const house = [
  {
    id: 101,
    name: "Emerald Suites",
    city: "Chandigarh",
    price: 3800,
    rating: 4.3,
    available: true,
    roomsLeft: 5
  },
  {
    id: 102,
    name: "Skyline Residency",
    city: "Pune",
    price: 5200,
    rating: 4.7,
    available: true,
    roomsLeft: 2
  },
  {
    id: 103,
    name: "Ocean Breeze Resort",
    city: "Goa",
    price: 7200,
    rating: 4.9,
    available: false,
    roomsLeft: 0
  },
  {
    id: 104,
    name: "Forest Retreat",
    city: "Shimla",
    price: 4100,
    rating: 4.4,
    available: true,
    roomsLeft: 8
  },
  {
    id: 105,
    name: "Golden Palace",
    city: "Jaipur",
    price: 6500,
    rating: 4.8,
    available: true,
    roomsLeft: 3
  },
  {
    id: 106,
    name: "River View Inn",
    city: "Rishikesh",
    price: 2900,
    rating: 4.1,
    available: true,
    roomsLeft: 12
  },
  {
    id: 107,
    name: "Sunset Paradise",
    city: "Goa",
    price: 5600,
    rating: 4.6,
    available: false,
    roomsLeft: 0
  },
  {
    id: 108,
    name: "Royal Orchid",
    city: "Bangalore",
    price: 4800,
    rating: 4.5,
    available: true,
    roomsLeft: 6
  },
  {
    id: 109,
    name: "Snow Peak Hotel",
    city: "Manali",
    price: 4300,
    rating: 4.2,
    available: true,
    roomsLeft: 4,
    status: "Sold Out"
  },
  {
    id: 110,
    name: "Lotus Grand",
    city: "Hyderabad",
    price: 5100,
    rating: 4.4,
    available: false,
    roomsLeft: 1,
    status: "Available"
  }
];


const updatedHotels = house.map((item) => {
  return {
    id: item.id,
    name: item.name,
    city: item.city,
    price: item.price + 500,
    rating: item.rating,
    available: item.available,
    roomsLeft: item.roomsLeft
  };
});
console.log(updatedHotels);


/*
🎫 Jira Ticket #403 (Next Challenge)

Now let's make it a little more interesting.

Requirement:

Create a new array where:

⭐ Hotel name is converted to UPPERCASE
💰 Price is increased by ₹1000
🏷️ Add a new property:
discount: "10%"

Example output for one hotel:
{
id: 101,
name: "EMERALD SUITES",
city: "Chandigarh",
price: 4800,
rating: 4.3,
available: true,
roomsLeft: 5,
discount: "10%"
}
*/

const changesIntoHotels = house.map((item) => {
  return {
    ...item,
    name: item.name.toUpperCase(),
    price: item.price + 1000,
    discount: "10%"
  };
});

console.log(changesIntoHotels);

/*
🎫 Jira Ticket #404 (Interview Level)

Now let's make it feel like a real frontend task.

The product manager says:
"The hotel is Sold Out if roomsLeft is 0; otherwise it's Available."
Using map(), create a new property called status.
*/

const status = house.map((item) => {
  return {
    ...item,
    status: item.status ? "Available" : "Sold out"

  };
});

console.log(status)

const products = [
  {
    id: 201,
    name: "Gaming Laptop",
    brand: "Acer",
    price: 72000,
    stock: 8,
    rating: 4.7,
    category: "Electronics"
  },
  {
    id: 202,
    name: "Wireless Mouse",
    brand: "Logitech",
    price: 1800,
    stock: 25,
    rating: 4.5,
    category: "Accessories"
  },
  {
    id: 203,
    name: "Mechanical Keyboard",
    brand: "Keychron",
    price: 6500,
    stock: 0,
    rating: 4.8,
    category: "Accessories"
  },
  {
    id: 204,
    name: "Smartphone",
    brand: "Samsung",
    price: 45000,
    stock: 15,
    rating: 4.6,
    category: "Electronics"
  },
  {
    id: 205,
    name: "Bluetooth Speaker",
    brand: "JBL",
    price: 3200,
    stock: 10,
    rating: 4.4,
    category: "Audio"
  },
  {
    id: 206,
    name: "Smart Watch",
    brand: "Noise",
    price: 5500,
    stock: 0,
    rating: 4.2,
    category: "Wearables"
  },
  {
    id: 207,
    name: "Monitor",
    brand: "LG",
    price: 16500,
    stock: 7,
    rating: 4.9,
    category: "Electronics"
  },
  {
    id: 208,
    name: "USB-C Hub",
    brand: "Anker",
    price: 2500,
    stock: 30,
    rating: 4.3,
    category: "Accessories"
  },
  {
    id: 209,
    name: "External SSD",
    brand: "Samsung",
    price: 8900,
    stock: 5,
    rating: 4.8,
    category: "Storage"
  },
  {
    id: 210,
    name: "Noise Cancelling Headphones",
    brand: "Sony",
    price: 22000,
    stock: 12,
    rating: 4.9,
    category: "Audio"
  }
];


/*
📢 Business Requirement

The company has launched a Premium Membership.

Every product with a rating of 4.7 or above should get a new property:

isPremium
Rules
⭐ rating >= 4.7 → true
⭐ Otherwise → false

✅ Rules
Use map()
Use the spread operator (...item)
Add a new property called isPremium
Don't modify the original array
*/

const premiumProducts = products.map((item) => {
  return {
    ...item,
    isPremium: item.rating >= 4.7
  };
});

console.log(premiumProducts);

/*
🎫 Jira Ticket #407 (Real React Scenario)

Now let's solve a task you'll see in many e-commerce websites.

📢 Business Requirement

The UI team wants every product card to display a discounted price.

Rules
If the product price is ₹10,000 or more, apply a 15% discount.
Otherwise, apply a 5% discount.

Add two new properties:

discount

Example:

discount: "15%"

finalPrice

const discountedProducts = products.map((item) => {
  const discountPercent = item.price >= 10000 ? 15 : 5
  return {
    ...item, 
    discount : discountPercent,
    finalPrice : item.price - (item.price * discountPercent / 100)
    
  };
});
console.log("================")
console.log(discountedProducts);

*/
/*
🎫 Jira Ticket #408 (Real Company Task)

The company wants to show a shipping label for every product.

Business Rules
If finalPrice >= 50000
shipping: "Free Express Shipping 🚚"
Else if finalPrice >= 10000
shipping: "Free Shipping 📦"
Otherwise
shipping: "Shipping Charges Apply 💰"
*/


// const discountedProducts = products.map((item) => {
//   const discountedPercent = item.price >= 10000 ? 15 : 5;
//   const finalPrice = item.price - (item.price * discountedPercent / 100);

//   let shipping;
//   if (finalPrice >= 50000) {
//     shipping = "Free Express Shipping";
//   } else if (finalPrice >= 10000) {
//     shipping = "Free Shipping";
//   } else {
//     shipping = "Shipping Charges Apply"
//   };
//   return {
//     ...item,
//     discount: discountedPercent,
//     finalPrice: finalPrice,
//     shipping: shipping
//   }
// });

// console.log("==================");
// console.log(discountedProducts);


/*
🎫 Jira Ticket #409 (Intermediate Level)

Now we're going to combine everything you've learned.
Business Requirement
The company wants to show an inventory status.

Create two new properties:
inventoryStatus

Rules:
stock === 0 → "Out of Stock"
stock <= 5 → "Low Stock"
Otherwise → "In Stock"

Also create:
canBuy
Rules:

If stock > 0 → true
Otherwise → false

Expected output:

{
    id: 209,
    name: "External SSD",
    stock: 5,

    inventoryStatus: "Low Stock",
    canBuy: true
*/


/*
🎫 Jira Ticket #410 (Senior Frontend Challenge)

This is something you'll actually do in React after fetching data from an API.

Business Requirement

The marketing team wants every product card to have a label.

Rules:

⭐ rating >= 4.8 AND stock > 0
"🔥 Best Seller"
⭐ rating >= 4.5
"⭐ Popular"
⭐ stock === 0
"❌ Sold Out"
Otherwise
"🆕 New Arrival"
Expected Output
{
    id: 207,
    name: "Monitor",
    rating: 4.9,
    stock: 7,
    label: "🔥 Best Seller"
}
{
    id: 203,
    name: "Mechanical Keyboard",
    rating: 4.8,
    stock: 0,
    label: "❌ Sold Out"
}
*/


/*
📢 Business Requirement

The company wants a product summary for search results.

Create a new property:

summary

Format:
<name> - <brand> | ₹<finalPrice> | <shipping> | <label>
Example
Gaming Laptop - Acer | ₹61200 | Free Express Shipping | 🔥 Best Seller

Another example:

Bluetooth Speaker - JBL | ₹3040 | Shipping Charges Apply | 🆕 New Arrival
Rules
Use the finalPrice, shipping, and label you've already calculated.
Do not recalculate them.
Add only one new property: summary.

This is a common frontend pattern: after calculating several derived fields, 
you compose them into a display string for cards, lists, or search results.
*/
const discountedProducts = products.map((item) => {
    const discountedPercent = item.price >= 10000 ? 15 : 5;
    const finalPrice = item.price - (item.price * discountedPercent / 100);

    const inventoryStatus = item.stock;
    const canBuy = item.stock > 0;

    let shipping;
    if (finalPrice >= 50000) {
        shipping = "Free Express Shipping";
    } else if (finalPrice >= 10000) {
        shipping = "Free Shipping";
    } else {
        shipping = "Shipping Charges Apply";
    }

    let label;
    if (item.rating >= 4.8 && inventoryStatus > 0) {
        label = "🔥 Best Seller";
    } else if (inventoryStatus === 0) {
        label = "❌ Sold Out";
    } else if (item.rating >= 4.5) {
        label = "⭐ Popular";
    } else {
        label = "🆕 New Arrival";
    }

    const summary = `${item.name} - ${item.brand} | ₹${finalPrice} | ${shipping} | ${label}`;

    return {
        ...item,
        discountedPercent,
        finalPrice,
        shipping,
        inventoryStatus,
        canBuy,
        label,
        summary
    };
});

console.log("==================");
console.log(discountedProducts);