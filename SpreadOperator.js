const employees = [
  {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering",
    salary: 95000,
    city: "Delhi"
  },
  {
    id: 102,
    name: "Priya Singh",
    department: "Engineering",
    salary: 110000,
    city: "Bangalore"
  },
  {
    id: 103,
    name: "Amit Verma",
    department: "HR",
    salary: 70000,
    city: "Mumbai"
  }
];

/*

🎫 Jira #2001
Business Requirement

HR wants to create a copy of an employee record.

Use Spread Operator.

Input
const employee = employees[0];
Expected Output
{
  id: 101,
  name: "Rahul Sharma",
  department: "Engineering",
  salary: 95000,
  city: "Delhi"
}
Rules
✅ Use Spread Operator

❌ Don't manually write all properties
Example
const employeeCopy = {
  ...employee
};

console.log(employeeCopy);
*/

const employee = employees[0];

const employeeCopy = {
    ...employee, 
};

const promotedEmployee = {
    ...employee, 
    salary : 120000, 
    designation : "Senior Frontend Developer"
}

console.log(promotedEmployee);

console.log(employeeCopy);

/*
🎫 Jira #2002

Now promote Rahul.

Create:

const promotedEmployee = {
  ...
};

Requirements:

salary = 120000
designation = "Senior Frontend Developer"
*/




const engineering = [
  "Rahul",
  "Priya",
  "Sneha"
];

const hr = [
  "Amit",
  "Neha"
];

/*
🎫 Jira #2003

Now merge two employee arrays.

Dataset:

const engineering = [
  "Rahul",
  "Priya",
  "Sneha"
];

const hr = [
  "Amit",
  "Neha"
];
Requirement

Create:

const allEmployees = ...

Expected Output:

[
  "Rahul",
  "Priya",
  "Sneha",
  "Amit",
  "Neha"
]
*/

const allEmployees = [...engineering, ...hr]

console.log(allEmployees);


/*
🎫 Jira #2004 (Company Level)

Create:

function giveBonus(employee, bonusAmount) {

}
Requirement

Return a new employee object with an updated salary.

Example:

const updatedEmployee =
  giveBonus(employees[0], 10000);

Expected Output:

{
  id: 101,
  name: "Rahul Sharma",
  department: "Engineering",
  salary: 105000,
  city: "Delhi"
}
Rules
✅ Use Spread Operator
✅ Return a new object
*/

function giveBonus(employee, bonusAmount) {
  return {
    ...employee,
    salary: employee.salary + bonusAmount
  };
}

const updatedEmployee = giveBonus(employees[0], 10000);
console.log(updatedEmployee); 

/*
 REST OPERATOR = Always create an array
*/


/*
🎫 Jira #3001
Business Requirement

Create:

function collectEmployeeNames(...names) {

}

Call:

collectEmployeeNames(
  "Rahul",
  "Priya",
  "Sneha",
  "Amit"
);

Expected Output:

[
  "Rahul",
  "Priya",
  "Sneha",
  "Amit"
]
*/

console.log("==================")
function collectEmployeeNames(...names) {
  console.log(names);
}
const resultss = collectEmployeeNames("Rahul", "Priya", "Sneha", "Amit");
console.log(resultss);


/*
🎫 Jira #3002
Business Requirement

Calculate total salary expense.

Create:

function calculateTotalSalary(...salaries) {

}

Call:

calculateTotalSalary(
  50000,
  70000,
  90000
);

Expected Output:

210000
*/

function calculateTotalSalary(...salaries) {
   return salaries.reduce((sum, salary)=> sum + salary, 0);
};

const totalSalary = calculateTotalSalary(50000, 70000, 90000);
console.log(totalSalary);

/*
🎫 Jira #3003
Business Requirement

HR wants the highest salary.

Create:

function getHighestSalary(...salaries) {

}

Expected Output:

130000

Hint:

Math.max(...)
*/

function getHighestSalary(...salaries) {
  return Math.max(...salaries);
}

const checkHighest = getHighestSalary(50000, 70000, 80000);
console.log(checkHighest);

/*
🎫 Jira #3004 (Company Level)

Create:

function createTeam(teamName, ...employees) {

}

Call:

createTeam(
  "Frontend Team",
  "Rahul",
  "Priya",
  "Sneha"
);

Expected Output:

{
  teamName: "Frontend Team",
  members: [
    "Rahul",
    "Priya",
    "Sneha"
  ],
  totalMembers: 3
}
*/

function createTeam(teamName, ...employees) {
  return {
    teamName , 
    members : employees, 
    totalMember : employees.length
  }
};

const checkTeam = createTeam("Frontend Team", "Rahul", "Priya", "Sneha");
console.log(checkTeam);

