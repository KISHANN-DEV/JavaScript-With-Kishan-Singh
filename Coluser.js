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

    return function() {
        totalBooking++;
        console.log(`Booking : ${totalBooking}`);
    }
}

const book = bookingCounter();
book()
book()