/*
What is find()?

find() searches an array and returns the first element that matches a condition.

If nothing matches, it returns:

undefined

When do we use find()?

Use it when you need exactly one object.

Examples:

Find a user by ID
Find a product by ID
Find an order by order number
Find a student by roll number
Find a blog post by slug
Find a hotel by hotel ID
*/
const products = [
    {
        id: 201,
        name: "Gaming Laptop",
        price: 72000
    },
    {
        id: 202,
        name: "Wireless Mouse",
        price: 2500
    },
    {
        id: 203,
        name: "Mechanical Keyboard",
        price: 4500
    },
    {
        id: 204,
        name: "Monitor",
        price: 18000
    }
];

const product = products.find(item => item.id === 201);
console.log(product);
console.log(product.name);

/*
    🎫 Jira Ticket #412
📢 Business Requirement

The Product Details page opens when a user clicks on a product.

The URL contains:

const productId = 208;

Using the same products array we've been using, find the product whose:

id === productId

Store it in:

const selectedProduct

Then print:

console.log(selectedProduct);
Rules
✅ Use find()
✅ Do not use filter()
✅ Do not use loops (for, while)
✅ Do not modify the original array
*/

const employees = [
  {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering",
    designation: "Frontend Developer",
    salary: 65000,
    experience: 2,
    isActive: true
  },
  {
    id: 102,
    name: "Priya Singh",
    department: "Human Resources",
    designation: "HR Manager",
    salary: 72000,
    experience: 5,
    isActive: true
  },
  {
    id: 103,
    name: "Amit Verma",
    department: "Engineering",
    designation: "Backend Developer",
    salary: 85000,
    experience: 4,
    isActive: false
  },
  {
    id: 104,
    name: "Neha Gupta",
    department: "Marketing",
    designation: "SEO Specialist",
    salary: 55000,
    experience: 3,
    isActive: true
  },
  {
    id: 105,
    name: "Rohan Kapoor",
    department: "Sales",
    designation: "Sales Executive",
    salary: 48000,
    experience: 1,
    isActive: true
  },
  {
    id: 106,
    name: "Sneha Patel",
    department: "Engineering",
    designation: "UI/UX Designer",
    salary: 70000,
    experience: 6,
    isActive: true
  },
  {
    id: 107,
    name: "Karan Malhotra",
    department: "Finance",
    designation: "Accountant",
    salary: 62000,
    experience: 4,
    isActive: false
  },
  {
    id: 108,
    name: "Anjali Mehta",
    department: "Customer Support",
    designation: "Support Lead",
    salary: 50000,
    experience: 2,
    isActive: true
  },
  {
    id: 109,
    name: "Vikram Joshi",
    department: "Engineering",
    designation: "DevOps Engineer",
    salary: 95000,
    experience: 7,
    isActive: true
  },
  {
    id: 110,
    name: "Pooja Arora",
    department: "Quality Assurance",
    designation: "QA Engineer",
    salary: 58000,
    experience: 3,
    isActive: true
  }
];

/*
const employeeId = 106;

const selectedEmployee = employees.find(
    item => item.id === employeeId
);

console.log(selectedEmployee);

🎫 Jira Ticket #413 (Real Company Scenario)
📢 Business Requirement

The HR team wants to search for an active employee.

The employee ID comes from the URL:

const employeeId = 103;

Find an employee only if both conditions are true:

id === employeeId
isActive === true

Store the result in:

const selectedEmployee;
Expected Behavior

For employeeId = 103:

undefined

because employee 103 exists, but:

isActive: false

For:

const employeeId = 106;
*/
// const employeeId = 103;
// const activeEmployee = employees.find(
//     item => item.id === employeeId && item.isActive
// );
// const selectedEmployee = activeEmployee;
// console.log(selectedEmployee);


/*
🎫 Jira Ticket #414 (Real React Scenario)

Now let's make it a bit more practical.

📢 Business Requirement

A user types an employee's name into a search box.

const searchName = "Sneha Patel";

Find the employee whose:

name === searchName

Store it in:

const selectedEmployee;

Finally:

console.log(selectedEmployee);
*/
const searchName = "Sneha Patel";
const activeEmployee = employees.find(
    item => item.name === searchName
);

const selectedEmployeee = activeEmployee;
console.log(selectedEmployeee);

/*
🎫 Jira Ticket #415 (Real React Search)

Now let's make it a little more realistic.

📢 Business Requirement

The search bar should work even if the user types the name in lowercase.

Example:

const searchName = "sneha patel";

It should still find:

Sneha Patel
*/

const searchNamee = "Sneha Patel";

const activeEmployeee = employees.find(
    item => item.name.toLowerCase() === searchNamee.toLowerCase()
);

const selectedEmploy = activeEmployee;
console.log(selectedEmploy);

const searchText = "pat";
const activeeEmployee = employees.find(
    item => item.name.toLowerCase().includes(searchText.toLowerCase())
);

console.log(activeEmployee);


/*
🎫 Jira Ticket #417 (Real API Scenario)

A company API sends an array of employees.
You need to find the first senior employee.
Business Rules

Find the first employee where:
experience >= 5
salary >= 70000
isActive === true

Store the result in:
const seniorEmployee;
*/

const findEmployee = employees.find(
    item => item.experience >= 5 && 
    item.salary >= 70000 && 
    item.isActive
)

console.log("=======================")
const seniorEmployee = findEmployee;
console.log(seniorEmployee);


/*
🎫 Final Jira Ticket #418 (Senior Frontend Challenge)

This is the last find() challenge.

📢 Business Requirement

The company wants to assign a Team Lead.
Find the first employee who satisfies all of these conditions:

department === "Engineering"
experience >= 5
salary >= 70000
isActive === true

Store the result in:
const teamLead;

Print:
console.log(teamLead);
*/

const teamLead = employees.find(
    item => item.department === "Engineering" &&
    item.experience >= 5 && 
    item.salary >= 70000 &&
    item.isActive === true
);
console.log("******Team Lead******")
console.log(teamLead);