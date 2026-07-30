/*
every method return true id if the condition is fully Satisfied.
*/


const employees = [
  {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering",
    designation: "Frontend Developer",
    salary: 65000,
    experience: 2,
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: 102,
    name: "Priya Singh",
    department: "HR",
    designation: "HR Manager",
    salary: 72000,
    experience: 5,
    isActive: true,
    skills: ["Recruitment", "Communication"]
  },
  {
    id: 103,
    name: "Amit Verma",
    department: "Engineering",
    designation: "Backend Developer",
    salary: 85000,
    experience: 4,
    isActive: false,
    skills: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: 104,
    name: "Neha Gupta",
    department: "Marketing",
    designation: "SEO Specialist",
    salary: 55000,
    experience: 3,
    isActive: true,
    skills: ["SEO", "Analytics", "Content Marketing"]
  },
  {
    id: 105,
    name: "Rohan Kapoor",
    department: "Sales",
    designation: "Sales Executive",
    salary: 48000,
    experience: 1,
    isActive: true,
    skills: ["Negotiation", "CRM"]
  },
  {
    id: 106,
    name: "Sneha Patel",
    department: "Engineering",
    designation: "UI/UX Designer",
    salary: 70000,
    experience: 6,
    isActive: true,
    skills: ["Figma", "Adobe XD", "UI Design"]
  },
  {
    id: 107,
    name: "Vikram Joshi",
    department: "Engineering",
    designation: "Tech Lead",
    salary: 120000,
    experience: 9,
    isActive: true,
    skills: ["React", "Node.js", "System Design"]
  },
  {
    id: 108,
    name: "Anjali Mehta",
    department: "Finance",
    designation: "Accountant",
    salary: 68000,
    experience: 5,
    isActive: false,
    skills: ["Excel", "GST", "Accounting"]
  },
  {
    id: 109,
    name: "Karan Malhotra",
    department: "Support",
    designation: "Customer Support",
    salary: 42000,
    experience: 2,
    isActive: true,
    skills: ["Communication", "Problem Solving"]
  },
  {
    id: 110,
    name: "Pooja Nair",
    department: "Engineering",
    designation: "DevOps Engineer",
    salary: 95000,
    experience: 7,
    isActive: true,
    skills: ["Docker", "Kubernetes", "AWS"]
  }
];


/*
🎫 Jira #427 — First every() Challenge
📢 Business Requirement

The HR dashboard wants to verify:

"Are all employees active?"

Create:

const areAllEmployeesActive;
Rules
✅ Use every()
✅ No loops
✅ Print the result
*/

const areAllEmployeesActive = employees.every(
    item => item.isActive
)

console.log(areAllEmployeesActive);

/*
🎫 Jira #428 (Intermediate)
Let's add one more condition.

📢 Business Requirement

The Finance team wants to verify:
"Do all employees earn at least ₹45,000?"

Create:
const areAllEmployeesAboveMinimumSalary;
Rules
✅ Use every()
✅ No loops
✅ Print the result

💻 Solve it first, and then we'll move on to combining multiple conditions with every(), just like we did with some().
*/

const areAllEmployeesAboveMinimumSalary = employees.every(
    item => item.salary <= 45000
)
console.log(areAllEmployeesAboveMinimumSalary);


/*
🎫 Jira #429 (Intermediate)

Now let's combine multiple conditions.

📢 Business Requirement
The HR department wants to verify:
"Are all employees active and do they all have at least 2 years of experience?"

Create:
const areAllExperiencedAndActive;
Rules
✅ Use every()
✅ Use &&
✅ No loops
✅ Print the result

This is your first every() challenge with multiple conditions. Give it a try before looking for hints.
*/
const areAllExperiencedAndActive = employees.every(
    item => item.isActive && 
    item.experience >= 2
)

console.log(areAllExperiencedAndActive)


/*
🎫 Jira #430 (Real Interview Question)

This is a question that frequently appears in coding interviews.

📢 Business Requirement

The company wants to verify:

"Does every employee know JavaScript?"

Remember, each employee has:

skills: ["HTML", "CSS", "JavaScript", "React"]

Create:

const doAllEmployeesKnowJavaScript;
*/

const doAllEmployeesKnowJavaScript = employees.every(
    item => item.skills.includes("JavaScript")
);

console.log(doAllEmployeesKnowJavaScript);

/*
🎫 Jira #431
Business Requirement

"Does every active employee have at least 3 years of experience and know React?"

Create:

const areAllActiveEmployeesQualified;
Rules
✅ Use every()
✅ Use &&
✅ Use includes()
✅ No loops
✅ Print the result
*/

const areAllActiveEmployeesQualified = employees.every(
  item => item.experience >= 3 && 
  item.skills.includes("React")
)

console.log(areAllActiveEmployeesQualified);