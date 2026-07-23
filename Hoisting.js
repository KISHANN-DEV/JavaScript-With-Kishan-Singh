/*
📖 What is Hoisting?

Definition:

Hoisting is JavaScript's behavior of processing declarations before the code is executed.

Notice something important.

I said:

Declarations are processed.

I did not say:

"JavaScript moves your code."

JavaScript doesn't physically rewrite your file.
*/

bookHotel("Taj", "Delhi");

function bookHotel(name,city){
    console.log(`Hotel : ${name} In ${city} `);
}

