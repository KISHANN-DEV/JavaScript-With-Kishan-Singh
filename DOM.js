/*
Your Task

Solve:

DOM-101
Select Dashboard Heading

using:

document.getElementById()

Send only your JavaScript code.
*/


const heading = document.getElementById("title");
console.log(heading);

/*
🎫 Jira Ticket DOM-102

Add this to your HTML:

<p class="employee">
    Rahul Sharma
</p>


<p class="employee">
    Priya Singh
</p>


<p class="employee">
    Amit Kumar
</p>
Requirement

Use:

document.querySelector()

to select the first employee.

Store it in:

employee

Print it.

Expected Output:

<p class="employee">
    Rahul Sharma
</p>
*/

const employe = document.querySelector(".employee");
console.log(employe);

/*
🎫 Jira Ticket DOM-103

Using the same HTML:

<p class="employee">Rahul Sharma</p>
<p class="employee">Priya Singh</p>
<p class="employee">Amit Kumar</p>
Requirement
Select all employees using:
document.querySelectorAll(".employee")
Store them in:
employees
Use:
forEach()
Print:
Rahul Sharma
Priya Singh
Amit Kumar
*/

const employees = document.querySelectorAll(".employee");

employees.forEach((employee)=> {
    console.log(employee.innerText);
});

console.log(employees);

/*
🎫 Jira Ticket DOM-104

Given:

<h1 id="title">Employee Dashboard</h1>

Requirements
Select the heading using:
document.getElementById()

Store it in:
heading

Print only the text using:
heading.innerText

Expected Output
Employee Dashboard
*/

const headings = document.getElementById("title");
console.log(headings.innerText)

/*
🎫 Jira Ticket DOM-105
Title

Update Dashboard Title

What Are We Practicing?
element.innerText = "New Value";

This changes text on the webpage.

Current HTML
<h1 id="title">
    Employee Dashboard
</h1>
*/

const updatedDashboard = document.getElementById("title"); 
 updatedDashboard.innerText = "Employee Dashboard";

 console.log(updatedDashboard); 

 /*
Next Ticket (DOM-106)
Title

Update Employee Name

HTML
<p id="employeeName">
    Rahul Sharma
</p>
Requirement

Change:

Rahul Sharma

to:

Kishan Singh

using:

getElementById()
innerText
 */

const updateEmployeeName = document.getElementsByClassName("employee");
updateEmployeeName.innerText = "Kishan Singh";
console.log(updateEmployeeName);

/*
Next Challenge

Without using my answer:

Change:

Priya Singh

to:

Anjali Sharma

using:

getElementsByClassName()
*/

const oneEmployee = document.getElementsByClassName("employee");
oneEmployee[1].innerText = "Anjali Sharma";

console.log(oneEmployee);


