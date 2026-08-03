/*
🚀 flat() & flatMap()

These methods solve one common problem:

Nested arrays (arrays inside arrays).

📘 flat()
What does it do?

It flattens nested arrays into a single array.

Example
const numbers = [1, 2, [3, 4], [5, 6]];

const result = numbers.flat();

console.log(result);
Output
[1, 2, 3, 4, 5, 6]

*/
const developers = [
  {
    id: 101,
    name: "Rahul Sharma",
    department: "Engineering",
    skills: ["JavaScript", "React", "Git"],
    projects: ["CRM", "ERP"],
    certifications: ["AWS", "Azure"]
  },
  {
    id: 102,
    name: "Priya Singh",
    department: "Engineering",
    skills: ["HTML", "CSS", "JavaScript"],
    projects: ["Portfolio", "CRM"],
    certifications: ["Google UX"]
  },
  {
    id: 103,
    name: "Amit Verma",
    department: "Backend",
    skills: ["Node.js", "Express", "MongoDB"],
    projects: ["ERP", "Payment Gateway"],
    certifications: ["MongoDB Associate"]
  },
  {
    id: 104,
    name: "Sneha Patel",
    department: "Mobile",
    skills: ["Flutter", "Dart", "Firebase"],
    projects: ["Food Delivery", "Chat App"],
    certifications: ["Firebase Expert"]
  },
  {
    id: 105,
    name: "Vikram Joshi",
    department: "Engineering",
    skills: ["React", "TypeScript", "Next.js"],
    projects: ["E-Commerce", "CRM"],
    certifications: ["AWS", "React Professional"]
  },
  {
    id: 106,
    name: "Anjali Gupta",
    department: "QA",
    skills: ["Manual Testing", "Selenium", "Java"],
    projects: ["ERP", "HRMS"],
    certifications: ["ISTQB"]
  },
  {
    id: 107,
    name: "Karan Malhotra",
    department: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS"],
    projects: ["Cloud Migration", "CRM"],
    certifications: ["AWS", "Docker Certified"]
  },
  {
    id: 108,
    name: "Pooja Nair",
    department: "UI/UX",
    skills: ["Figma", "Adobe XD", "Photoshop"],
    projects: ["Portfolio", "Food Delivery"],
    certifications: ["Google UX", "Adobe Certified"]
  }
];

/*
🎫 Jira #701
📢 Business Requirement

The company wants one array containing all projects.

Create
const allProjects;
*/
const allProjects = developers.flatMap(developer => developer.projects);
console.log(allProjects);


/*
🎫 Jira #702
📢 Business Requirement

Create a single array of all skills.

Create
const allSkills;
Rules
✅ Use flatMap()
❌ No loops
*/

const allSkills = developers.flatMap(developer => developer.skills);
console.log(allSkills);

/*
🎫 Jira #703
📢 Business Requirement

Create a single array of all certifications.

Create
const allCertifications;
Rules
✅ Use flatMap()
❌ No loops
*/

const allCertifications = developers.flatMap(developer => developer.certifications);
console.log(allCertifications);

/*
🎫 Jira #704 (Interview)
📢 Business Requirement

Create a nested array containing each employee's projects.

Create
const nestedProjects;
Rules
✅ Use map()
❌ Do not use flatMap()

This should produce something like:
*/

const nestedProjects = developers.map((developer)=> {
   return developer.skills;
})

console.log(nestedProjects);