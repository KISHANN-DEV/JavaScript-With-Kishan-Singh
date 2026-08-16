const employees = [
  {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering",
    salary: 75000
  },
  {
    id: 102,
    name: "Priya Singh",
    department: "HR",
    salary: 65000
  },
  {
    id: 103,
    name: "Amit Kumar",
    department: "Marketing",
    salary: 70000
  }
];


/*
.

🎫 Your Task — ASYNC-102

Create:

function getEmployeeSalary(employee)

Requirements:

Delay: 3 seconds


Success:
Salary Loaded: 75000

Then create:

async function loadSalary()

Use:

await getEmployeeSalary(employees[0]);

and print the result.
*/


function getEmployeeSalary(employee){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(employee){
                resolve(`Salary Loaded : ${employee.salary}`)
            } else {
                reject(`Salary not Found....`);
            }
        }, 3000);
    });
}

async function loadSalary() {
    const result = await getEmployeeSalary(employees[0]);
    console.log(result);
}

loadSalary();


/*
.

🎫 Your Task — TRYCATCH-102

Create:

function getEmployeeDepartment(employee)

Requirements:

Success:
Department Loaded : Engineering


Failure:
Department Not Found

Then create:

async function loadDepartment()

Use:

try { }
catch { }

and:

await getEmployeeDepartment(employees[0]);
*/

function getEmployeeDepartment(employee) {
    return new Promise((resolve, reject) => {
        console.log(`Checking Employee Department......`);
        
        setTimeout(() => {
            if(employee){
                resolve(`Employee Department is : ${employee.department}`)
            } else {
                reject(`Employee Department not Found.....`);
            }
        }, 2000);
    });
}

async function loadDepartment() {
    try{
        const checkDept = await getEmployeeDepartment(employees[0]);
        console.log(checkDept);
    }

    catch(error) {
        console.log(error)
    }
}

loadDepartment();


