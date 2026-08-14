/*
Next Topic: Callback Hell

This is the problem that led JavaScript developers to create Promises and later Async/Await.

A company workflow often looks like:

Place Order
↓
Process Payment
↓
Generate Invoice
↓
Send Email
↓
Send Notification

Each step depends on the previous one.

Without Promises, developers used nested callbacks.

That's called:

Callback Hell
*/

const orders = [
  {
    orderId: 101,
    customer: "Rahul Sharma",
    amount: 2500,
    email: "rahul@gmail.com"
  },
  {
    orderId: 102,
    customer: "Priya Singh",
    amount: 4200,
    email: "priya@gmail.com"
  },
  {
    orderId: 103,
    customer: "Amit Kumar",
    amount: 1800,
    email: "amit@gmail.com"
  }
];


/*
const orders = [
  {
    orderId: 101,
    customer: "Rahul Sharma",
    amount: 2500,
    email: "rahul@gmail.com"
  },
  {
    orderId: 102,
    customer: "Priya Singh",
    amount: 4200,
    email: "priya@gmail.com"
  },
  {
    orderId: 103,
    customer: "Amit Kumar",
    amount: 1800,
    email: "amit@gmail.com"
  }
]
*/

console.log(`Order ${orders[0].orderId} Received`);

setTimeout(() => {
    console.log(`Payment of ${orders[0].amount} Successful`);

    setTimeout(()=> {
        console.log(`Invoice Generated for ${orders[0].email}`)
    },1000)

    setTimeout(()=> {
        console.log(`Email sent to ${orders[0].email}`)
    },1000)
}, 1000);

/*

🎫 CALLBACK-102
User Registration Workflow

Dataset


Create:

function registerUser(user) {
    

}
Expected Output
Creating Account...
↓
Account Created
↓
Sending Verification Email
↓
Email Verified
↓
Welcome Message Sent
*/

const users = [
  {
    id: 1,
    name: "Kishan",
    email: "kishan@gmail.com"
  }
];


function registerUser(users){
    console.log(`Creating Account....`);

    setTimeout(()=>{
        console.log(`Account Created for ${users[0].name}.`)
  
        setTimeout(()=>{
            console.log(`Sending Verification Email :- ${users[0].email}`);

            setTimeout(()=> {
                console.log(`${users[0].email} Verified`)

                setTimeout(()=>{
                    console.log(`Welcome Message Sent.....`)
                },2000)
            },1000)
        },1000)
    },1000)
};

registerUser(users);


/*
🎫 CALLBACK-103
Employee Onboarding System

Dataset


Create:

Expected Output
Creating Employee Profile
↓
Assigning Department
↓
Generating Employee ID Card
↓
Sending Welcome Email
↓
Onboarding Completed
*/
const employees = [
  {
      id: 101,
      name: "Rahul Sharma",
      department: "Engineering"
    }
];


function onboardEmployee(employees) {
    console.log(`Creating Employee Profile...`);

    setTimeout(()=> {
        console.log(`Assigning Department :- ${employees[0].name}`)
    },1000);

    setTimeout(()=> {
        console.log(`Generating ${employees[0].name} Id card :- ${employees[0].id}`)
    },1000)

    setTimeout(()=> {
        console.log(`Sending Welcome Email To :- ${employees[0].name}`);

    },1000)

    setTimeout(()=>{
        console.log(`Onboarding Compeleted for ${employees[0].name} `);
    },2000)
}

onboardEmployee(employees);

/*
🎫 CALLBACK-104 (Interview Level)
Food Delivery Workflow

Dataset


Create:

Expected Output
Order Accepted
↓
Food Preparing
↓
Food Ready
↓
Out For Delivery
↓
Delivered Successfully
*/


const delivery = {
    orderId: 501,
    customer: "Kishan Singh",
    restaurant: "Domino's"
};


function deliverOrder(delivery) {

    console.log(`Order Accepted....`); 

    setTimeout(()=> {
      console.log(`Food Preparing for ${delivery.customer}`)

      setTimeout(()=> {
        console.log(`Food Ready By :- ${delivery.restaurant}`);

        setTimeout(()=> {
            console.log(`Out For Delivery for :- ${delivery.customer}`)

            setTimeout(()=> {
                console.log(`Delivered Successfully By :- ${delivery.restaurant}`);
            },1000)
        },1000)
      },1000)
    },1000)

}

deliverOrder(delivery);