/*
🌍 Real-World Problem

Imagine you're building your Travel Booking Website.

A user logs in.
👤 User : Kishan Singh

After login, the username should be available when:
Booking a hotel
Making a payment
Viewing profile
Downloading invoices

Question:

Where should we store the username ?? 
*/

function login() {
    const username = "Kishan Singh";

    function showUser(){
        console.log(username);
    }
    return showUser;
}

const user = login();
user();

/*
💼 Real Project Example

Let's build a booking counter.
*/

function bookingCounter() {
    let totalBooking = 0;

    return function showBooking() {
        totalBooking++;
        console.log(`Total Booking : ${totalBooking}`)
    }
}

const book = bookingCounter();
book();
book();

/*
💼 Interview Challenge: Bank Account (Closures)

Create a function:
createBankAccount(initialBalance)

Inside the function:

let balance = initialBalance;

Return an object with three methods:

1️⃣ deposit(amount)
Add the amount to the balance.
Print:
Deposited ₹500
Current Balance: ₹5500
2️⃣ withdraw(amount)
If balance is sufficient:
Subtract the amount.
Print:
Withdrawn ₹1000
Current Balance: ₹4500
Otherwise print:
Insufficient Balance
3️⃣ checkBalance()

Print:

Current Balance: ₹4500
Expected Usage
const account = createBankAccount(5000);

account.deposit(500);
account.withdraw(1000);
account.checkBalance();
Expected Output
Deposited ₹500
Current Balance: ₹5500

Withdrawn ₹1000
Current Balance: ₹4500

Current Balance: ₹4500
*/

// function createBankAccount(){
//     let currentBalance = 5000;
    
//     return function(deposit){
//        let depositeAmount = 500;
//        let totalCurrent = depositeAmount += currentBalance;
//        console.log(`Total Amount : ${totalCurrent} `);
//     }
//     return function withdrawAmount() {
//         if(totalCurrent <= currentBalance){
//             let withdraw = 1000;
//             let withdrawMoney = currentBalance - withdraw;
//             console.log(`Withdraw Amount : ${withdrawMoney}`)
//         }else {
//             console.log(`insufficient balance`);
//         }
//     }
// }

// const account = createBankAccount(2000);
// console.log(account.deposit(500));


function createBankAccount(initialBalance){
    let currentBalance = initialBalance;

    return{
        deposit(amount){
           currentBalance += amount;
           console.log(`Deposite Amount : ${amount} and Current Amount : ${currentBalance}`);
        },

        withdraw(amount){
          if(currentBalance >= amount){
           currentBalance -= amount;
          console.log(`Withdraw Amount : ${amount}`);
          console.log(`CurrentBalance : ${currentBalance}`);
          } else{ 
            console.log("Insufficient Balance");
          }
        },

        checkBalance(){
           console.log(`Check Balance : ${currentBalance}`);
        }
    }
}

const account = createBankAccount(5000);
account.deposit(500);
account.withdraw(1000);


/*
Interview Questions
Q1. What is a Closure?

Answer:

A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.

Q2. Why are Closures Used?
Data privacy
State management
Event handlers
Callbacks
React Hooks
Timers
Encapsulation

Q3. Can Closures Cause Memory Issues?
Yes.
If a closure keeps references to objects that are no longer needed, those objects cannot be garbage-collected until the closure itself becomes unreachable.

Q4. Does Every Function Create a Closure?
Not exactly.

Every function has access to its lexical scope, but a closure becomes especially meaningful when an inner function continues to use variables from an outer scope after that outer function has finished executing.
*/