/*
What is Object.keys()?

It returns all property names (keys) of an object as an array.

Example:

const employee = {
  id: 101,
  name: "Rahul",
  salary: 95000
};

console.log(Object.keys(employee));
*/

//Data Set :- 
const employee = {
  id: 101,
  name: "Rahul Sharma",
  department: "Engineering",
  salary: 95000,
  city: "Delhi",
  designation: "Frontend Developer"
};

/*
🎫 Jira #4001
Business Requirement

Get all property names of employee.

Expected Output:

[
  "id",
  "name",
  "department",
  "salary",
  "city",
  "designation"
]
*/

const getAllProperty = employee; 
console.log(Object.keys(getAllProperty));

/*
🎫 Jira #4002
Business Requirement

Count how many fields employee has.

Expected Output:

6

Hint:

Object.keys(employee).length
*/

const countFields = employee; 
console.log(Object.keys(employee).length);

/*
🎫 Jira #4003
Business Requirement

Check if employee contains a field called:

"salary"

Expected Output:

true

Hint:

Object.keys(employee).includes(...)
*/

const containsField = employee; 
console.log(Object.keys(employee).includes("salary"));


/*
🎫 Jira #4004 (Company Level)

Create:

function getObjectSummary(obj) {

}

Input:

getObjectSummary(employee);

Expected Output:

{
  totalFields: 6,
  fields: [
    "id",
    "name",
    "department",
    "salary",
    "city",
    "designation"
  ]
}
*/

function getObjectSummary(obj) {
  const fields = Object.keys(obj);

  return {
    totalFields: fields.length,
    fields
  };
}

const resultt = getObjectSummary(employee);
console.log(resultt); 

/*

What is Object.values()?

It returns all values of an object as an array.

Example:

const employee = {
  id: 101,
  name: "Rahul",
  salary: 95000
};

console.log(Object.values(employee));

Output:

[101, "Rahul", 95000]
*/

const employe = {
  id: 102,
  name: "Kishan Singh",
  department: "Engineering",
  salary: 50000,
  city: "Haryana",
  designation: "Full Stack Developer"
};

/*
🎫 Jira #5001
Business Requirement

Get all values from employee.

Expected Output:

[
  101,
  "Rahul Sharma",
  "Engineering",
  95000,
  "Delhi",
  "Frontend Developer"
]
*/

const getValues = employe; 
console.log(Object.values(getValues));

/*
]
🎫 Jira #5002
Business Requirement

Count total values.

Hint:

Object.values(employee).length

Expected Output:

6
*/

const totalValue = employe; 
console.log(Object.values(totalValue).length);

/*
🎫 Jira #5003
Business Requirement

Check if employee salary is present.

Hint:

Object.values(employee).includes(95000)

Expected Output:

true
*/

const checkPresent = employe;
console.log(Object.values(checkPresent).includes(50000));

/*
🎫 Jira #5004 (Company Level)

Create:

function getValueSummary(obj) {

}

Expected Output:

{
  totalValues: 6,
  values: [
    101,
    "Rahul Sharma",
    "Engineering",
    95000,
    "Delhi",
    "Frontend Developer"
  ]
}
*/


function getValueSummary(obj) {
  const value = Object.values(employe);

  return{
    totalValues : value.length,
    values : value 
  }
}

const answer = getValueSummary(employe); 
console.log(answer);




/*
What is Object.entries()?

It returns an array of key-value pairs.

Example:

const employee = {
  id: 101,
  name: "Rahul",
  salary: 95000
};

console.log(Object.entries(employee));

Output:

[
  ["id", 101],
  ["name", "Rahul"],
  ["salary", 95000]
]
*/


const employeee = {
  id: 103,
  name: "Kishan Ji",
  department: "Engineering",
  salary: 55000,
  city: "Sirsa",
  designation: "Full Stack"
};

/*
🎫 Jira #6001

Get all entries.

Expected:

[
  ["id", 102],
  ["name", "Kishan Singh"],
  ["department", "Engineering"],
  ["salary", 50000],
  ["city", "Haryana"],
  ["designation", "Full Stack Developer"]
]
*/

const allEnteries = employeee; 
console.log(Object.entries(allEnteries));


/*
]
🎫 Jira #6002

Count total entries.

Expected:

6
*/

const totalEntries = employeee;
console.log(Object.entries(totalEntries).length);

/*
🎫 Jira #6003

Check if employee contains:

["salary", 50000]
*/

const checkContains = employeee; 
console.log(Object.entries(checkContains).includes(["salary", 55000]));

/*
🎫 Jira #6004 (Company Level)

Create:

function getEntrySummary(obj) {

}

Expected Output:

{
  totalEntries: 6,
  entries: [
    ["id", 102],
    ["name", "Kishan Singh"],
    ["department", "Engineering"],
    ["salary", 50000],
    ["city", "Haryana"],
    ["designation", "Full Stack Developer"]
  ]
}
*/

function getEntrySummary(obj){
    const totalEntries = Object.entries(employeee).length
    const valuess = Object.entries(employeee);
    return{
        totalEntries, 
        valuess
    }
}

console.log(getEntrySummary(employeee));
