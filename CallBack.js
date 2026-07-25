/*
Callback Functions (Developer Edition)
Goal: Understand why functions can be passed as values and how callbacks are used in real applications.

🌍 Real-World Problem

Imagine you're building a Food Delivery App like Swiggy or Zomato.

When a user places an order, many things happen in sequence

Order Food
      │
      ▼
Payment Successful
      │
      ▼
Restaurant Starts Cooking
      │
      ▼
Delivery Partner Assigned
      │
      ▼
Order Delivered

Question:

How does JavaScript know what should happen after the payment succeeds?

The answer is Callbacks.
*/



/*Normal Function:- 
function showTicket(movieName) {
      console.log(`Ticket Booked for ${movieName}`);
}

showTicket(`"Batman"`)

//Now let's create a payment function. 
function payment(movieName) {
      console.log(`Payment Done`);
      showTicket(movieName);
}

payment("Avengers");


Looks good.

But tomorrow the client says:
"Don't show the ticket anymore."

Instead:

Payment Successful
↓
Send Email

Now we must edit payment().
Tomorrow again:

Payment Successful
↓
Update Database

Again we edit payment().
Tomorrow again:

Payment Successful
↓
Generate Invoice

Again we edit payment().
Problem: payment() now has too many responsibilities.


instead of deciding inside payment(), let the caller decide.

function payment(movieName, callback) {
      console.log("Payment Done");
      callback(movieName);
}

function showTicket(movieName){
      console.log(`Ticket Booked For : ${movieName}`);
}

Tomorrow the Client Changes the Requirement
Instead of showing the ticket:
Create another function.

function sendEmail(movieName){
      console.log(`Email sent for : ${movieName}`);
}

payment("Dhurander", sendEmail);


function payment(movieName, callback){
      console.log(`Payment Done`);
      callback(movieName);
}

function showTicket(movieName){
      console.log(`Payment SucessFull For : ${movieName}`);
}

function sendEmail(movieName){
      console.log(`Email Sent For : ${movieName}`);
}

function updateDatabase(movieName) {
      console.log(`Database updated for ${movieName}`);
}

payment("Avengers", updateDatabase);
*/

// 2nd Code 
function showTicket(movieName) {
      console.log(`🎬 Ticket Booked for ${movieName}`);
}

function payment(movieName, callback) {
      console.log("Payment Successful");
      callback(movieName);
}

payment("Avengers", showTicket);
function add(a, b) {
      console.log(a + b);
}

function calculate(x, y, callback) {
      console.log("Calculation Started");

      callback(x, y);

      console.log("Calculation Finished");
}

calculate(10, 20, add);


/*
Build a Food Delivery System

createOrder()

Return an object with:

placeOrder()

cancelOrder()

trackOrder()

When payment succeeds,
execute the callback.

Expected Output:
Order Placed
Payment Successful
Order Confirmed
*/

function createOrder(id) {
      return {
            placeOrder(cb) {
                  console.log("Order Placed");
                  console.log("Payment Sucessful");
                  console.log("Order Confirmed");
                  cb();
            },

            cancelOrder() {
                  console.log("Order Cancelled");
            },

            trackOrder() {
                  console.log(`Taking Order : ${id}`);
            }
      }
}

const order = createOrder(1);
order.placeOrder(() => console.log("Callback Payment done"));


/*
🧑‍💻 Feature 1
Build an Inventory System
Requirement

Create:

createInventory(productName, quantity)

Return an object with 3 methods.

1️⃣ checkStock(callback)

If quantity > 0

Print:

Checking Stock...
Stock Available



Then execute the callback.
Otherwise
Checking Stock...
Out of Stock
Don't execute the callback.

2️⃣ purchase()
Decrease quantity by 1.
Print
Purchase Successful
Remaining Stock : X

3️⃣ stock()
Print
Current Stock : X
Expected Usage
const laptop = createInventory("MacBook", 3);

laptop.checkStock(() => {
    laptop.purchase();
});

laptop.stock();

Checking Stock...
Stock Available
Purchase Successful
Remaining Stock : 2
Current Stock : 2
*/

function generateInvoice() {
    console.log("📄 Invoice Generated");
}

function sendEmail() {
    console.log("📧 Confirmation Email Sent");
}

function sendNotification() {
    console.log("🔔 Notification Sent");
}

function updateOrderHistory() {
    console.log("📚 Order History Updated");
}

function createInventory(productName, quantity) {
    return {
        checkStock(callback) {
            console.log("Checking Stock...");
            if (quantity > 0) {
                console.log("Stock Available");
                callback(quantity);
            } else {
                console.log(`Out of Stock: ${productName}`);
            }
        },

        purchase(callback) {
            quantity--;
            console.log("Purchase Successful");
            console.log(`Remaining Stock : ${quantity}`);
            generateInvoice(() => {
                  sendEmail(() => {
                        sendNotification(()=> {
                              UpdateOrderHistory(()=> {
                                  if (callback) callback();
                              })
                        })
                  })
            })
        },

        stock() {
            console.log(`Current Stock : ${quantity}`);
        }
    };
}

const laptop = createInventory("Victus", 1);

laptop.checkStock((qty) => {
    console.log(`Available Qty: ${qty}`);
    laptop.purchase(() => {
        console.log("📄 Invoice Generated");
    });
});

laptop.stock();

//Just For testing 

function sendEmail(callback) {
    setTimeout(() => {
      console.log(`Send Email`);
      callback();
    }, 2000);
}

function sendNotification(callback) {
    setTimeout(() => {
      console.log(`Send Notification`);
      callback();
    }, 2000);
}

function updateOrderHistory(callback) {
    setTimeout(() => {
      console.log(`update order History`)
    }, 1000);
}