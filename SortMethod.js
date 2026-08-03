/*
sort() is a built-in array method that rearranges the elements of an array in place (it modifies the original array) and also returns that same sorted array.

Basic syntax:

javascript
array.sort(compareFunction);
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
🎫 Jira #601
📢 Business Requirement

Sort all employees by salary in ascending order.

Create
const sortedEmployees;
Rules
✅ Use sort()
✅ Keep the original employees array unchanged
✅ Print the sorted array
❌ No loops
*/

const sortedEmployees = [...employees].sort((a,b)=> {
    return a.salary - b.salary
})

console.log(sortedEmployees);

/*
Jira #602
📢 Business Requirement

The HR dashboard wants to display the highest-paid employees first.

Create
const highestPaidEmployees;
Rules
✅ Use sort()
✅ Keep the original array unchanged
✅ Sort by salary in descending order
❌ No loops
*/

const highestPaidEmployees = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});

console.log(highestPaidEmployees);

/*
🚀 Jira #603
📢 Business Requirement

The HR portal should display employees in alphabetical order by name (A → Z).

Create
const employeesByName;
Rules
✅ Use sort()
✅ Keep the original array unchanged
❌ No loops
❌ Do not subtract strings (a.name - b.name won't work)

*/