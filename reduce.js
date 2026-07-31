/*
What is reduce()?

reduce() takes all the values of an array and reduces them into a single value.

That single value can be:

Number
String
Object
Array
Boolean
*/

const employees = [
    {
        id: 101,
        name: "Rahul Sharma",
        department: "Engineering",
        designation: "Frontend Developer",
        salary: 65000,
        experience: 2,
        age: 24,
        isActive: true,
        city: "Delhi",
        skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        id: 102,
        name: "Priya Singh",
        department: "HR",
        designation: "HR Manager",
        salary: 72000,
        experience: 5,
        age: 30,
        isActive: true,
        city: "Mumbai",
        skills: ["Recruitment", "Communication", "Excel"]
    },
    {
        id: 103,
        name: "Amit Verma",
        department: "Engineering",
        designation: "Backend Developer",
        salary: 85000,
        experience: 4,
        age: 28,
        isActive: false,
        city: "Pune",
        skills: ["Node.js", "Express", "MongoDB"]
    },
    {
        id: 104,
        name: "Neha Kapoor",
        department: "Marketing",
        designation: "Marketing Executive",
        salary: 58000,
        experience: 3,
        age: 27,
        isActive: true,
        city: "Delhi",
        skills: ["SEO", "Content Writing", "Analytics"]
    },
    {
        id: 105,
        name: "Vikram Joshi",
        department: "Engineering",
        designation: "Full Stack Developer",
        salary: 120000,
        experience: 8,
        age: 34,
        isActive: true,
        city: "Bangalore",
        skills: ["React", "Node.js", "MongoDB", "JavaScript"]
    },
    {
        id: 106,
        name: "Sneha Patel",
        department: "Finance",
        designation: "Accountant",
        salary: 68000,
        experience: 6,
        age: 31,
        isActive: true,
        city: "Ahmedabad",
        skills: ["Excel", "GST", "Tally"]
    },
    {
        id: 107,
        name: "Arjun Mehta",
        department: "Engineering",
        designation: "React Developer",
        salary: 95000,
        experience: 5,
        age: 29,
        isActive: true,
        city: "Hyderabad",
        skills: ["React", "Redux", "JavaScript", "TypeScript"]
    },
    {
        id: 108,
        name: "Karan Malhotra",
        department: "Sales",
        designation: "Sales Executive",
        salary: 55000,
        experience: 2,
        age: 25,
        isActive: false,
        city: "Chandigarh",
        skills: ["Communication", "Negotiation"]
    },
    {
        id: 109,
        name: "Anjali Gupta",
        department: "UI/UX",
        designation: "UI Designer",
        salary: 78000,
        experience: 4,
        age: 28,
        isActive: true,
        city: "Jaipur",
        skills: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
        id: 110,
        name: "Pooja Nair",
        department: "Engineering",
        designation: "DevOps Engineer",
        salary: 98000,
        experience: 7,
        age: 32,
        isActive: true,
        city: "Kochi",
        skills: ["Docker", "Kubernetes", "AWS"]
    }
];


/*
🎫 Jira #502
📢 Business Requirement

Calculate the total years of experience of all employees.

Create:
const totalExperience;
Rules
✅ Use reduce()
✅ Initial value = 0
*/

const totlaExperience = employees.reduce(
    (sum, emp) => sum + emp.experience,
    0);
console.log(totlaExperience);


/*
🎫 Jira #503
📢 Business Requirement

Calculate the average salary of all employees.

Create:
const averageSalary;
Rules
✅ Use reduce()
✅ No loops
✅ Print the result
*/

const totalSalary = employees.reduce(
    (sum, emp) => sum + emp.salary, 0);

    const averageSalary = totalSalary / employees.length;
    console.log(averageSalary);

    /*
.

🎫 Jira #504
📢 Business Requirement

Find the highest salary among all employees.

Create:
const highestSalary;
Rules
✅ Use reduce()
✅ No loops
✅ Print the result
    */

const heighestSalary = employees.reduce(
    (max, emp)=> emp.salary > max ? emp.salary : max , 0)
    console.log(heighestSalary);

    /*
🎫 Jira #505
📢 Business Requirement

Find the lowest salary among all employees.

Create:
const lowestSalary;
Rules
✅ Use reduce()
✅ No loops
✅ Print the result
    */

const lowestSalary = employees.reduce(
    (min, emp) => emp.salary < min ? emp.salary : min, Infinity)
    console.log(lowestSalary);

    /*
    🎫 Jira #506
📢 Business Requirement

Calculate the total salary of all active employees.

Create:
const totalActiveSalary;
Rules
✅ Use one reduce()
✅ Initial value = 0
✅ No loops
❌ Do not use filter()
✅ Print the result
    */

const totalActiveSalary = employees.reduce(
    (sum, emp) => emp.isActive ? sum + emp.salary : sum, 
0);
console.log(totalActiveSalary);


/*
🎫 Jira #508
📢 Business Requirement

The HR department wants to know how many active employees are currently working in the company.

Create:
const activeEmployeeCount;
Rules
✅ Use reduce()
✅ Initial value = 0
✅ No loops
❌ Do not use filter()
❌ Do not use length
✅ Print the result
*/

const activeEmployeeCount = employees .reduce(
    (sum, emp) => emp.isActive ? sum + 1 : sum,
0)
console.log(activeEmployeeCount);

/*
🎫 Jira #509
📢 Business Requirement

Count the inactive employees.

Create:
const inactiveEmployeeCount;
Rules
✅ Use reduce()
✅ Initial value = 0
❌ No loops
❌ No filter()

This is almost identical to the previous task.
 The only thing that changes is the condition. Try it on your own first.
*/

const inactiveEmployeeCount = employees.reduce(
    (count, employee) => (!employee.isActive ? count + 1 : count),
0 )

console.log(inactiveEmployeeCount);


/*
🎫 Jira #510
📢 Business Requirement

The HR department wants to know how many employees are in each department.

Expected Output:

{
    Engineering: 5,
    HR: 1,
    Marketing: 1,
    Finance: 1,
    Sales: 1,
    "UI/UX": 1
}
Create:
const departmentCount;
Rules
✅ Use reduce()
✅ Initial value = {}
*/

const departmentCount = employees.reduce((obj, employee)=> {
    obj[employee.department] = (obj[employee.department] || 0) + 1 ;
    return obj;
}, {})

console.log(departmentCount);


/*
🚀 Next Jira (Slightly Harder)
🎫 Jira #511
Business Requirement

The company wants a list of employee names grouped by department.

Expected Output
{
    Engineering: [
        "Rahul Sharma",
        "Amit Verma",
        "Vikram Joshi",
        "Arjun Mehta",
        "Pooja Nair"
    ],
    HR: [
        "Priya Singh"
    ],
    Marketing: [
        "Neha Kapoor"
    ],
    Finance: [
        "Sneha Patel"
    ],
    Sales: [
        "Karan Malhotra"
    ],
    "UI/UX": [
        "Anjali Gupta"
    ]
}
Create
const departmentEmployees;
Rules
✅ Use reduce()
✅ Initial value = {}
*/



const departmentEmployee = employees.reduce((obj, employee)=> {
    (obj[employee.department] ||= []).push(employee.name)
    return obj;
}, {})

console.log(departmentEmployee);

/*
🚀 Next Level (Interview Favorite)

Now let's build something slightly different.

🎫 Jira #512
📢 Business Requirement

Create an object where:

Key = Employee ID
Value = Complete Employee Object
Expected Output
{
    101: { ...Rahul's object... },
    102: { ...Priya's object... },
    103: { ...Amit's object... },
    ...
}
Create
const employeeMap;
Rules
✅ Use reduce()
✅ Initial value = {}
*/

    const employeeMap = employees.reduce((obj, employee)=> {
    obj[employee.id] = employee;
        return obj;
    },{})

    console.log(employeeMap);


    /*
🚀 Next Challenge (Interview Level)
🎫 Jira #513
Business Requirement

The HR team wants to know the highest-paid employee in each department.

Expected Output
    */

const highestPaidByDepartment = employees.reduce((obj, employee)=> {
    const current = obj[employee.department];

    if(!current || employee.salary > current.salary){
        obj[employee.department] = employee;
    }
    return obj;
},{});
console.log("====================================")
console.log(highestPaidByDepartment);

/*
The Finance team wants the total salary expense for each department.
*/
const departmentSalaryExpense = employees.reduce((obj, employee) => {
  obj[employee.department] = (obj[employee.department] || 0) + employee.salary;
  return obj;
}, {});

console.log(departmentSalaryExpense);