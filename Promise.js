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

/*
🎫 PROMISE-103
Title

Generate Invoice

Requirement

Create:

function generateInvoice(order) {


}
Acceptance Criteria

Return Promise.

After 1 second:

Invoice Generated For Rahul Sharma
*/

function generateInvoice(order){
    return new Promise((resolve, reject)=> {
        console.log(`Generating Invoice for Users.....`);

        const invoiceData = order;

        setTimeout(()=>{
         if(order === order){
            resolve = [
              order.customer,
              order.amount,
              order.status
            ]
         } else{
            reject(`No Data for generating Invoice for ${order.customer}`);
         }
        },1000)
    })
}

generateInvoice(orders[0])
   .then((data)=> console.log(data))
   .catch((error)=> console.log(error));

   /*
🎫 Next Jira — PROMISE-104

Create:

function sendEmail(order) {


}
Requirements
Return a Promise
Delay 1 second
Resolve with:
Email Sent To Rahul Sharma

Test using:

sendEmail(orders[0])

   */

function sendEmail(order) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (order.customer) {
        resolve(`Email Sent To ${order.customer}`);
      } else {
        reject("Email Sending Failed");
      }

    }, 1000);

  });
}

sendEmail(orders[0])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));



    /*
🎫 PROMISE-105 (Most Important)

Now we're doing your first Promise Chaining task.

Use these functions:

processOrder(order)
verifyPayment(order)
generateInvoice(order)
sendEmail(order)

Create:

completeOrderWorkflow(order)

Expected flow:

Order Processed
↓
Payment Verified
↓
Invoice Generated
↓
Email Sent
↓
Workflow Completed

Use:

processOrder(order)
  .then(...)
  .then(...)
  .then(...)
  .then(...)
  .catch(...)

This is the topic that companies actually use every day.
    */


function processOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Order Processed...`)
            resolve(order);
        }, 1000);
    });
}

function verifyPayment(order){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log(`Payment Verified `);
            resolve(order);
        }, 1000);
    });
}

function generateInvoice(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Invoice Generated..`);
            resolve(order);
        }, 1000);
    });
}

function sendEmail(order){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log(`Email sent to ${order.customer}`);
            resolve(order);
        },1000);
    });
}

function completeOrderWorkflow(order){
    processOrder(order)
     .then((order)=>verifyPayment(order))
     .then((order)=> generateInvoice(order))
     .then((order)=> sendEmail(order))
     .then(()=> {
        console.log(`WorkFlow Completed.....`)
     })

     .catch((error)=> {
        console.log(`WorkFlow Failed, ${error}`)
     });
}

completeOrderWorkflow(orders[0]);