/*
Perfect. Today we start one of the most important JavaScript topics:

🚀 Topic: Promises
Why Promises?

You already saw Callback Hell:

task1(() => {
  task2(() => {
    task3(() => {
      task4();
    });
  });
});

Promises make it cleaner:

task1()
  .then(() => task2())
  .then(() => task3())
  .then(() => task4());
*/

const orders = [
    {
        id: 101,
        customer: "Rahul Sharma",
        amount: 2500,
        status: "Pending"
    },
    {
        id: 102,
        customer: "Priya Singh",
        amount: 4500,
        status: "Pending"
    },
    {
        id: 103,
        customer: "Amit Kumar",
        amount: 1800,
        status: "Pending"
    }
];

/*
🎫 PROMISE-101
Title

Process Order

Requirement

Create:

function processOrder(order) {


}
Acceptance Criteria

Return a Promise.

After 2 seconds:

Order #101 Processed Successfully

Use:

resolve(...)
*/

function processOrder(order) {
    return new Promise((resolve, reject) => {

        const isSuccess = true;

        setTimeout(() => {
            if (isSuccess) {
                resolve(`Order for # ${order.id} Processed Successfully ....`)
            } else {
                reject(`Order Processing Failed..`);
            }
        }, 2000)
    })
}


processOrder(orders[0])
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

/*
🎫 PROMISE-102
Title

Verify Payment

Requirement

Create:

function verifyPayment(order) {


}
Rules

If amount is greater than 2000:

resolve(...)

Otherwise:

reject(...)
Examples

For Rahul:

Payment Verified

For Amit:

Payment Verification Failed
*/


function verifyPayment(order){
    return new Promise((resolve, reject)=> {

        const amount = order.amount;

        setTimeout(() => {
            if(amount > 2000){
                resolve(`Payment Verified by:- ${order.customer}`)
            } else {
                reject(`Payment rejected by:- ${order.customer}`)
            }
        }, 2000);
    })
}

verifyPayment(orders[2])
   .then((data)=> console.log(data))
   .catch((error)=> console.log(error));

