/*
High-Order-Function 

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