const searchName = "Sneha Patel";
const activeEmployee = employees.find(
    item => item.name === searchName
);

const selectedEmployeee = activeEmployee;
console.log(selectedEmployeee);
