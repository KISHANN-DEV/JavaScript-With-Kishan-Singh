/*

🚀 Today's Topic
Async JavaScript — Sprint 1
Topic 1: setTimeout()

You'll learn:

console.log("Start");

setTimeout(() => {
  console.log("Task Completed");
}, 2000);

console.log("End");

Output:

Start
End
Task Completed
*/

const users = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@gmail.com"
  },
  {
    id: 2,
    name: "Priya",
    email: "priya@gmail.com"
  },
  {
    id: 3,
    name: "Amit",
    email: "amit@gmail.com"
  }
];

/*
🎫 Jira ASYNC-101
Title

Delayed Welcome Email

Requirement

Create:

function sendWelcomeEmail(user) {

}
Acceptance Criteria

Immediately:

Preparing welcome email...

After 2 seconds:

Welcome email sent to Rahul
*/

function sendWelcomeEmail(user) {
    console.log("Preparing Welcome Email");

    setTimeout(() => {
        console.log("Welcome Email Sent To Rahul");
    }, 2000);
}

const sendWelcome = sendWelcomeEmail(users[0]);
console.log(sendWelcome)

/*
🎫 Jira ASYNC-102
Title

User Registration Workflow

Requirement

Create:

function registerUser(user) {

}
Acceptance Criteria

Output:

Registering user...
User Rahul registered successfully

The success message must appear after a delay.
*/


function registerUser(user) {
  console.log("Registering user...");

  setTimeout(() => {
    console.log(
      `User ${user.name} registered successfully`
    );
  }, 2000);
}

registerUser(users[0]); 

//we will do this tommorow 

/*
🎫 Jira ASYNC-104
Title

Generate User Report

Requirement

Create:

function generateUserReport(user) {

}
Acceptance Criteria

Immediately:

Generating report...

After 3 seconds:

Report generated for Rahul
*/

function generateUserReport(user){

  console.log(`Generating report....`);
 
  setTimeout(() => {
    console.log(`Report generated for ${user.name}...`)
  }, 3000);
};

const reportCheck = generateUserReport(users[1]);

console.log(reportCheck);


/*
🎫 Jira ASYNC-105
Title

Password Reset System

Requirement

Create:

function resetPassword(email) {

}
Acceptance Criteria

Immediately:

Password reset requested

After 2 seconds:

Reset link sent to rahul@gmail.com
*/


function resetPassword(email) {
  console.log(`Password reset request send to ${email}....`);

  setTimeout(() => {
    console.log(`Reset link sent to ${email}...`)
  }, 2000);
}

resetPassword(users[0].email);

/*
🎫 Jira ASYNC-106 (Interview Level)
Title

Notification Queue

Requirement

Create:

function sendNotifications(users) {

}
Acceptance Criteria

For every user:

Sending notification...
Notification sent to Rahul

Sending notification...
Notification sent to Priya

Sending notification...
Notification sent to Amit

Use setTimeout() and loop logic.
*/

function sendNotifications(users){
  setTimeout(() => {
    for(let i = 0; i < users.length; i++){
      console.log(`Sending Notification...`);
      console.log(`Notification Send to ${users[i].name}`);
      console.log(" ");
    }
  }, 2000);
}

sendNotifications(users);

