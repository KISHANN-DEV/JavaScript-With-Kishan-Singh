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

