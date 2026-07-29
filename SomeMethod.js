/*
What is some()?

some() checks whether at least one element in an array satisfies a condition.
*/

// 📂 Employee Management System Dataset

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
🎫 Jira #419
Business Requirement

The HR dashboard wants to display a warning if at least one employee is inactive.

Create:
const hasInactiveEmployee;
*/
const hasInactiveEmployee = employees.some(
    item => !item.isActive
);

console.log(hasInactiveEmployee);

/*
.

🎫 Jira #420
Business Requirement

The company wants to know:
"Is there at least one employee earning ₹100,000 or more?"

Create:
const hasHighSalaryEmployee;
*/

const hasHighSalaryEmployee = employees.some(
    item => item.salary >= 100000
)

console.log(hasHighSalaryEmployee);

/*
🎫 Jira #421 (Real Dashboard Scenario)
📢 Business Requirement

The Admin Dashboard should show a warning if any employee has less than 2 years of experience.

Create:
const hasJuniorEmployee;
*/

const hasJuniorEmployee = employees.some(
    item => item.experience <= 2
)
console.log(hasJuniorEmployee);

/*
🎫 Jira #422 (Intermediate)

Now let's make it more like a real dashboard requirement.
📢 Business Requirement

The HR team wants to know:
"Is there at least one active employee in the Engineering department?"

Create:
const hasActiveEngineer;
*/

const hasActiveEngineer = employees.some(
    item => item.isActive && item.department === "Engineering"
)

console.log(hasActiveEngineer);

/*
🎫 Jira #423 (Intermediate+)

Now let's add three conditions.

📢 Business Requirement

The Finance team wants to know:
"Is there at least one active employee with a salary of ₹90,000 or more and at least 5 years of experience?"

Create:
const hasSeniorHighPaidEmployee;
*/

const hasSeniorHighPaidEmployee = employees.some(
    item => item.isActive &&
    item.salary >= 90000 &&
     item.experience >= 5
)
console.log(hasHighSalaryEmployee);

/*
🎫 Jira #424 (Advanced)

Let's make it a bit more realistic.

📢 Business Requirement

The HR dashboard should display an alert if there is at least one inactive employee in the Engineering department with more than 3 years of experience.

Create:

const hasExperiencedInactiveEngineer;
Rules
*/