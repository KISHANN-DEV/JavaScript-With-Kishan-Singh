/*
🔥 Fetch API

This is the last major topic before Core JavaScript Complete.

What is Fetch API?

Used to get data from a server.

Real projects:

Login User
Get Products
Get Movies
Get Orders
Get Weather

All use APIs.
*/

/*
🎫 FETCH-101 (Solved Example)
Requirement

Fetch all users and print:

User Name
Email
*/


// async function getUsers() {

//     try {
  
//         console.log("Fetching Users...");

//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         const users = await response.json();

//         console.log(users);

//     } catch (error) {

//         console.log(error);

//     }
// }

// getUsers();

/*
🎫 FETCH-102
Title

Print All Employee Names

API
https://jsonplaceholder.typicode.com/users

Requirements
Fetch the users.
Convert response to JSON.
Loop through all users.
Print only names.
Expected Output
Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
...
*/


// async function printEmployeeNames() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users  = await response.json();

//         users.forEach((user)=> {
//             console.log(user.name)
//         });
//     } catch(error){
//         console.log("Error fetching User:", error);
//     }
// }

// printEmployeeNames();


/*
🎫 FETCH-103

Now print:

Name: Leanne Graham
Email: Sincere@april.biz


Name: Ervin Howell
Email: Shanna@melissa.tv

for every user.
*/

async function getNameEmail() {
    try{
        console.log(`Checking Name and Email...`)

        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users  = await response.json();

        const formatted = users.map((user)=>({
            Name : user.name, 
            Email   : user.email
        }))
        console.table(formatted);
    } catch(error){
        console.log(`Nothing Found ..... ${error}`)
    }
}

getNameEmail()


/*
🎫 Next Challenge — FETCH-104

Find the user whose:

id === 5

Expected:

{
  id: 5,
  name: "...",
  username: "...",
  email: "..."
}
Hint

You already know:

find()

Use it after:

const users = await response.json();
*/

async function userDetails() {
  try {
    console.log(`Fetching Users Information....`);

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    const user = users.find((user) => user.id === 5);

    console.table(user);
  } catch (error) {
    console.log(`Error fetching user:`, error);
  }
}

userDetails();  

/*
🎫 FETCH-105
Title

Count Total Users

Requirement

Fetch all users and print:

Total Users: 10
Example Output
Fetching Users...


Total Users: 10
Concepts
fetch()
await
response.json()
.length
*/

async function totalUsers() {
    try{
        console.log(`Calculating total number of Users....`);

        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await response.json();

        console.log(`Total users :- ${users.length}`); 
    } catch(error) {
        console.log(` Error Fetching users : ${error}`)
    }
}

totalUsers();


/*
.

🎫 FETCH-106
Jira Ticket
Title

Search Employee By Name

Requirement

Fetch all users from:

https://jsonplaceholder.typicode.com/users

Print only users whose name contains:

Clementine
Expected Output
Clementine Bauch

Concepts
filter()
includes()
fetch()
async/await
try/catch
Example

If data is:

[
  { name: "Rahul Sharma" },
  { name: "Priya Singh" },
  { name: "Amit Kumar" }
]

and you search:

"Rahul"

Output:

Rahul Sharma
🏢 Company Requirement

After filtering:

filteredUsers.forEach(...)

Print matching names.

🎯 Your Task

Write a function:

async function searchUser()

Use:

filter()
includes("Clementine")

and print the result.

Send the code and I'll review it like a company PR. 🚀
*/


async function searchByName() {
    try{
        console.log(`Fetching By Employee Name.....`);

        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await response.json();

        const filterUser = users.filter((user)=> user.name.includes("Clementine"));

        filterUser.forEach((user)=> {
            console.log(user.name);
        });
    } catch(error) {
        console.log(`Error Searching User: ${error}`);
    }
}

searchByName();

/*
Generate Employee Report

ID: 1
Name: Leanne Graham
Email: Sincere@april.biz

--------------------

ID: 2
Name: Ervin Howell
Email: Shanna@melissa.tv

--------------------


fetch()
async/await
forEach()
template literals

*/

async function employeeReport(){
    try{
        console.log(`Generating Employee Report.....`);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const users = await response.json();

        const formateUser = users.map((user)=> ({
            Id : user.id,
            Name : user.name,
            Email : user.email
        }))
        console.table(formateUser);
    } catch(error){
        console.log(`Nothing Found : ${error}`);
    }
}

employeeReport();


/*
POST

POST means:

Create Data
Send Data
Add New Record

Examples:

Register User
Create Product
Place Order
Submit Form
Add Employee
Real World Example

Suppose a user fills a registration form:

{
  name: "Kishan Singh",
  email: "kishan@gmail.com"
}

We send this data to the server.
*/

async function createEmployee() {

    try {

        console.log("Creating Employee...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Kishan Singh",
                    department: "Engineering",
                    salary: 75000
                })
            }
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

createEmployee();


/*
Your Ticket — POST-102

Create a new product.

Send:

{
  title: "Gaming Laptop",
  price: 85000,
  category: "Electronics"
}

Use:

POST

API:

https://jsonplaceholder.typicode.com/posts

Requirements:

1. async/await
2. try/catch
3. POST request
4. Print server response
*/


async function newProduct() {
    
    try{
        console.log(`Creating new Product...`);

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts` ,{
              
                 method : "POST", 

                 headers : {
                    "Content-Type" : "application/json"
                 }, 

                 body : JSON.stringify({
                    title : "Gaming Laptop", 
                    price : 85000, 
                    category : "Electonics"
                 })
            })

            const getProduct = await response.json()
            console.log(getProduct);
    } catch(error){
        console.log(error);
    }
}

newProduct();


/*
.

🎫 PUT-101
Title

Update Employee Salary

Requirement

Update:

{
   id: 101,
   name: "Rahul Sharma",
   salary: 75000
}
*/


async function updateSalary() {
    
    try{
        console.log(`Updating Employee Salary....`); 

        const response = await fetch(
             `https://jsonplaceholder.typicode.com/posts`, {
                method : "PUT", 

                headers : {
                    "Content-Type" : "application/json"
                }, 

                body : JSON.stringify({
                    id : 101, 
                    name : "Rahul Sharma", 
                    salary : "75000"
                })
             }
        ); 

        const data = await response.json();
        console.log(data); 
    } catch(error) {
        console.log(error)
    }
}

updateSalary();

/*
🎫 Your Ticket — DELETE-102
Title

Delete Product

Delete:

id: 201
title: "Gaming Laptop"

API:

https://jsonplaceholder.typicode.com/posts/2

Requirements:

1. async/await
2. try/catch
3. DELETE request
4. Print success message
*/


async function deleteProduct() {
    try{
        console.log(`Fecting The Info to be Deleted....`);

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/201/title:"Gaming Laptop"`, 
             {
                method : "DELETE"
             }
         ); 

         if(response.ok){
            console.log(`Employee Data has been deleted`)
         }
    } catch(error){
        console.log(error);
    }
}

deleteProduct();