
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

const departmentCount = employees.reduce(
    (obj, employee)=> employee.department ? employee.department :obj[employee.department],
{})