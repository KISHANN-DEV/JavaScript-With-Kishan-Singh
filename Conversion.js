// 1️⃣ Implicit Type Conversion (Automatic)
// JavaScript automatically converts one data type into another when needed.

console.log("5" + 2);

/*
Why?
"5" is a string.
2 is a number.
The + operator with a string performs string concatenation.

So JavaScript converts 2 into "2".

Result:

"52"
*/


console.log("10" - 5);
/* 
Why?

The - operator only works with numbers.

JavaScript converts "10" into 10.

Result:

10 - 5 = 5
*/

console.log("20" * 2); // 40
console.log("20" / 2); // 10
console.log("20" % 3); // 2

/* 
 2️⃣ Explicit Type Conversion (Manual):- Here, you tell JavaScript which data type to convert to.
*/

//Number()
let age = "20" // string 
console.log(typeof age); // string  

let NumberAge = Number(age); // Convert string to number
console.log(typeof NumberAge); // number  
console.log(NumberAge); // 20  

//String() 

let marks  = 100; //number
console.log(typeof marks); // number

let StringMarks = String(marks); // Convert number to string
console.log(typeof StringMarks); // string
console.log(StringMarks); // "100"

//Boolean()

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Kishan")); // true
console.log(Boolean("")); // false

// NaN (Not a Number) - When a value cannot be converted to a number, JavaScript returns NaN.
 
let invalidNumber = Number("Kishan"); // Trying to convert a non-numeric string to a number
console.log(invalidNumber); // NaN

//typeof After Conversion 

let value = "69"; // string 
console.log(typeof value); // string

let ConvertValue = Number(value); // Convert string to number
console.log(typeof ConvertValue); // number
console.log(ConvertValue); // 69

// Real World Example

 //with Number()
let userAge = "25"; // string

let nextYearAge = Number(userAge) + 1; // Convert string to number and add 1
console.log("Next Year Age:", nextYearAge); // Next Year Age: 26


//Without Number() - Implicit Conversion

let UserAge = "20"; //String

console.log("Adding 1 into User's Age :", UserAge + 1); // Adding 1 into User's Age : 201

//because JavaScript performs string concatenation.

/*
Convert age into a Number.
Convert marks into a String.
Print the value and its data type using typeof.
*/

let PersonAge = "22"; // string
let PersonMarks = 80; // number

let ConvertedAge = Number(PersonAge); // Convert string to number
let ConvertedMarks = String(PersonMarks); // Convert number to string

console.log("Convertd Age:", ConvertedAge, "Type:", typeof ConvertedAge); // Converted Age: 22 Type: number")
console.log("Converted Marks:", ConvertedMarks, "Type:", typeof ConvertedMarks); // Converted Marks: 80 Type: string