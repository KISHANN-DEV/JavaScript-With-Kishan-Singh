const employees = [
  {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering",
    designation: "Frontend Developer",
    salary: 95000,
    experience: 4,
    city: "Delhi",
    skills: ["React", "JavaScript", "CSS"],
    performance: {
      rating: 4.8,
      projects: 12,
      attendance: 98
    }
  },
  {
    id: 102,
    name: "Priya Singh",
    department: "Engineering",
    designation: "Backend Developer",
    salary: 110000,
    experience: 6,
    city: "Bangalore",
    skills: ["Node.js", "Express", "MongoDB"],
    performance: {
      rating: 4.9,
      projects: 18,
      attendance: 96
    }
  },
  {
    id: 103,
    name: "Amit Verma",
    department: "HR",
    designation: "HR Manager",
    salary: 70000,
    experience: 5,
    city: "Mumbai",
    skills: ["Recruitment", "Communication"],
    performance: {
      rating: 4.5,
      projects: 8,
      attendance: 99
    }
  },
  {
    id: 104,
    name: "Sneha Patel",
    department: "Engineering",
    designation: "Full Stack Developer",
    salary: 125000,
    experience: 7,
    city: "Pune",
    skills: ["React", "Node.js", "PostgreSQL"],
    performance: {
      rating: 5.0,
      projects: 20,
      attendance: 97
    }
  },
  {
    id: 105,
    name: "Vikram Joshi",
    department: "QA",
    designation: "QA Engineer",
    salary: 65000,
    experience: 3,
    city: "Jaipur",
    skills: ["Selenium", "Cypress"],
    performance: {
      rating: 4.3,
      projects: 10,
      attendance: 95
    }
  }
];

/*
🚀 What are we learning NOW?
📚 Topic: ES6 Object Destructuring

This is one of the most used JavaScript features in React.

🤔 What is Object Destructuring?

Suppose you have:
*/

const employee = {
    id: 101,
    name: "Rahul",
    department: "Engineering",
    salary: 90000
};

/*
Normally, you write:

console.log(employee.name);
console.log(employee.department);
console.log(employee.salary);
*/



/*
🏢 Why Companies Use It

Imagine a React component.

Instead of:

function EmployeeCard(props) {

    console.log(props.employee.name);
    console.log(props.employee.department);
    console.log(props.employee.salary);

}

Companies write:

function EmployeeCard({ employee }) {

    const { name, department, salary } = employee;

}

Every React codebase looks like this.

📈 Where You'll Use It
React Components
API Responses
Express APIs
MongoDB Data
Redux
Context API
Dashboard Projects
*/

/*
🎫 Jira #1001 — Basic Destructuring
Business Requirement

Extract:

name
department
salary

from the first employee.

Create
const { ... } = employees[0];
*/

const {name, department, salary} = employees[0];
console.log(name);
console.log(department);
console.log(salary)




/*
/*
===============================================================================
🎫 Jira #1002 - Rename Variables Using Destructuring
Difficulty : ⭐⭐☆☆☆

Estimated Time:
10 Minutes
===============================================================================

📢 Business Requirement

HR wants more descriptive variable names.

Extract these properties from the first employee:

✔ name
✔ salary
✔ department

Rename them while destructuring.

-------------------------------------------------------------------------------

Expected Variable Names

employeeName

employeeSalary

employeeDepartment

-------------------------------------------------------------------------------

Example Output

Rahul Sharma

95000

Engineering

-------------------------------------------------------------------------------

Rules

✅ Use object destructuring

✅ Rename variables while destructuring

❌ Do NOT access properties like employee.name

===============================================================================

*/
 const {name : employeeName, salary : employeeSalary, department : employeeDepartment} = employees[0];
 console.log(employeeName);
 console.log(employeeSalary);
 console.log(employeeDepartment);


 /*
🎫 Jira #1003 (Medium)
Business Requirement

Management wants performance metrics.

Extract:

rating
projects
attendance

from:

employees[0].performance
Expected Output
4.8
12
98
Topic

✅ Nested Destructuring
 */