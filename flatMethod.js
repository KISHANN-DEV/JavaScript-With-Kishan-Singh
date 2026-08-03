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

/*
🎫 Jira #701
📢 Business Requirement

Flatten this array into a single array.

const departments = [
    ["Engineering", "HR"],
    ["Sales", "Marketing"],
    ["Finance", "Support"]
];
Create
const allDepartments;
Rules
✅ Use flat()
❌ No loops
*/