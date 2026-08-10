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

const workers = [
  {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering",
    performance: {
      rating: 4.8,
      projects: 12,
      attendance: 98
    }
  },

  {
    id: 102,
    name: "Priya Singh",
    department: "HR"
  },

  {
    id: 103,
    name: "Amit Kumar",
    department: "Marketing",
    performance: {
      rating: 4.5,
      projects: 8,
      attendance: 95
    }
  }
];


/*
🎫 Jira #7001
Title

Get Employee Rating Safely

Requirement

Fetch Rahul Sharma's rating using Optional Chaining.

Expected Output
4.8

*/


const checkRahul = workers[0]?.performance?.rating;
console.log(checkRahul);


/*
🎫 Jira #7002
Title

Get Employee Rating Safely

Requirement

Fetch Priya Singh's rating using Optional Chaining.

Expected Output
undefined
*/

const checkPriya = workers[1]?.performance?.rating;
console.log(checkPriya);


/*
🎫 Jira #7003
Title

Get Employee Projects

Requirement

Fetch Amit Kumar's total projects using Optional Chaining.

Expected Output
8
*/

const getProjects = workers[2]?.performance?.projects;
console.log(getProjects);


/*
🎫 Jira #7004
Title

Get Employee Attendance

Requirement

Fetch Priya Singh's attendance using Optional Chaining.

Expected Output
undefined
*/

const priyaAttendance = workers[1]?.performance?.attendance; 
console.log(priyaAttendance);

/*
🎫 Jira #7005
Title

Employee Rating Utility

Requirement

Create a reusable utility function:

function getEmployeeRating(employee) {

}
Acceptance Criteria
Use Optional Chaining
Return rating if available
Return undefined if rating does not exist
Test Cases
getEmployeeRating(employees[0]);

4.8
*/

function getEmployeeRating(workers) {
  return workers?.performance?.rating;
}

console.log(getEmployeeRating(workers[0]));

/*
🎫 Jira #7006
Title

Employee Report Generator

Requirement

Create:

function generateEmployeeReport(employee) {

}
Expected Output (Rahul)
{
  name: "Rahul Sharma",
  rating: 4.8,
  projects: 12,
  attendance: 98
}
Expected Output (Priya)
{
  name: "Priya Singh",
  rating: undefined,
  projects: undefined,
  attendance: undefined
}
*/

function generateEmployeeReport(workers) {
  return {
    name: workers?.name,
    rating: workers?.performance?.rating,
    projects: workers?.performance?.projects,
    attendance: workers?.performance?.attendance
  };
}

const checkReport = generateEmployeeReport(workers[1]);
console.log(checkReport);

const rahul = generateEmployeeReport(workers[0]);
console.log(rahul);



const friends = [
  {
    id: 101,
    name: "Rahul Sharma",
    city: "Delhi",
    department: "Engineering",
    bonus: 15000
  },

  {
    id: 102,
    name: "Priya Singh",
    city: null,
    department: "HR",
    bonus: null
  },

  {
    id: 103,
    name: "Amit Kumar",
    department: "Marketing"
  }
];

/*
🎫 Jira #8001
Title

Get Employee City

Requirement

Fetch Priya's city.

If city is missing or null, show:

"City Not Available"
Expected Output
"City Not Available"
*/


const friendCity = friends[1].city ?? "City Not Available";
console.log(friendCity);

/*
🎫 Jira #8002
Title

Get Employee Bonus

Requirement

Fetch Amit's bonus.

If bonus is missing, return:

0
Expected Output
0
*/

const checkAmit = friends[2].bonus ?? 0;
console.log(checkAmit);

/*
🎫 Jira #8003
Title

Get Employee Department

Requirement

Fetch Rahul's department.

Expected Output
"Engineering"
*/

const rahulDeptt = friends[0].department ?? "Engineering";
console.log(rahulDeptt);

/*
"
🎫 Jira #8004
Title

Employee City Utility

Requirement

Create:

function getEmployeeCity(employee) {

}
Acceptance Criteria
Return city if available
Otherwise return "City Not Available"
Use ??
*/

function getEmployeeCity(friends){
  return friends.city ?? "City Not Available";
};

const checkCity = getEmployeeCity(friends[0]);
console.log(checkCity);

/*
🎫 Jira #8005
Title

Employee Bonus Utility

Requirement

Create:

function getEmployeeBonus(employee) {

}
*/

function getEmployeeBonus(friends){
  return friends.bonus ?? 0;
}

const checkBonus = getEmployeeBonus(friends[0]);
console.log(checkBonus);


/*
🎫 Jira #8006 (Company Level)
Title

Generate Employee Profile

Requirement

Create:

function generateEmployeeProfile(employee) {

}
Expected Output (Priya)
{
  name: "Priya Singh",
  city: "City Not Available",
  bonus: 0,
  department: "HR"
}
Expected Output (Amit)
{
  name: "Amit Kumar",
  city: "City Not Available",
  bonus: 0,
  department: "Marketing"
}
📌 Important Difference
OR Operator (||)
const score = 0;

console.log(score || 100);

Output:

100

⚠️ Wrong if 0 is a valid value.

Nullish Coalescing (??)
const score = 0;

console.log(score ?? 100);

Output:

0

✅ Correct.
*/


function generateEmployeeProfile(friends) {
  const score = 0;
  return {
    name : friends.name ?? "Undefined", 
    city : friends.city ?? "City Not Available", 
    bonus : friends.bonus ?? 0, 
    department : friends.department ?? "Deptt undefined"
  };
}

const checkProfile = generateEmployeeProfile(friends[1]);
console.log(checkProfile);