const products = [
    {
        id: 101,
        name: "Apple iPhone 16 Pro Max",
        brand: "Apple",
        category: "Smartphone",
        color: "Natural Titanium",
        description: "Premium flagship smartphone with A18 Pro chip",
        sku: "APL-IP16PM-001",
        sellerEmail: "apple@store.com"
    },
    {
        id: 102,
        name: "Samsung Galaxy S26 Ultra",
        brand: "Samsung",
        category: "Smartphone",
        color: "Phantom Black",
        description: "High-end Android flagship with AI features",
        sku: "SAM-S26U-002",
        sellerEmail: "samsung@store.com"
    },
    {
        id: 103,
        name: "Sony WH-1000XM6 Headphones",
        brand: "Sony",
        category: "Audio",
        color: "Black",
        description: "Wireless noise cancelling headphones",
        sku: "SON-WH1000XM6-003",
        sellerEmail: "sony@store.com"
    },
    {
        id: 104,
        name: "Dell XPS 15 Laptop",
        brand: "Dell",
        category: "Laptop",
        color: "Silver",
        description: "Premium Windows laptop for developers",
        sku: "DEL-XPS15-004",
        sellerEmail: "dell@store.com"
    },
    {
        id: 105,
        name: "MacBook Pro M5",
        brand: "Apple",
        category: "Laptop",
        color: "Space Black",
        description: "Powerful laptop for professionals",
        sku: "APL-MBP-M5-005",
        sellerEmail: "apple@store.com"
    },
    {
        id: 106,
        name: "Nike Air Zoom Pegasus",
        brand: "Nike",
        category: "Shoes",
        color: "White",
        description: "Comfortable running shoes",
        sku: "NIK-PEG-006",
        sellerEmail: "nike@store.com"
    },
    {
        id: 107,
        name: "Adidas Ultraboost 6",
        brand: "Adidas",
        category: "Shoes",
        color: "Blue",
        description: "High-performance running shoes",
        sku: "ADI-ULT6-007",
        sellerEmail: "adidas@store.com"
    },
    {
        id: 108,
        name: "Canon EOS R8 Camera",
        brand: "Canon",
        category: "Camera",
        color: "Black",
        description: "Mirrorless camera for creators",
        sku: "CAN-R8-008",
        sellerEmail: "canon@store.com"
    },
    {
        id: 109,
        name: "Apple Watch Ultra 3",
        brand: "Apple",
        category: "Wearable",
        color: "Titanium",
        description: "Advanced smartwatch with GPS",
        sku: "APL-WU3-009",
        sellerEmail: "apple@store.com"
    },
    {
        id: 110,
        name: "Logitech MX Master 4",
        brand: "Logitech",
        category: "Accessories",
        color: "Graphite",
        description: "Wireless productivity mouse",
        sku: "LOG-MX4-010",
        sellerEmail: "logitech@store.com"
    }
];

/*
===============================================================================
🏢 Sprint 1 - Product Search Engine
===============================================================================

📢 Business Requirement

The company wants to build a reusable Product Search Engine.

Create the following function:

function searchProducts(products, searchText) {

}

Requirements:

1. Accept two parameters:
   - products (array)
   - searchText (string)

2. Clean the user's input:
   - Remove extra spaces using trim()
   - Ignore uppercase/lowercase using toLowerCase()

3. Search inside every product for:
   - name
   - brand
   - category
   - color
   - description

4. A product should be returned if ANY ONE of the above fields
   contains the searched text.

5. Search should be case-insensitive.

6. If nothing is found, return an empty array [].

7. Do NOT modify the original products array.

Rules

✅ Use filter()
✅ Use includes()
✅ Use trim()
✅ Use toLowerCase()
❌ No loops
❌ No hardcoded values

Example:

searchProducts(products, "apple");

Expected Result:

✔ Apple iPhone 16 Pro Max
✔ MacBook Pro M5
✔ Apple Watch Ultra 3

===============================================================================

function searchProducts(products, searchText) {
    const query = searchText.trim().toLowerCase();
    
    return products.filter((item) => {
        return (
            item.name.toLowerCase().includes(query) ||
            item.brand.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.color.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
    });
}

const result = searchProducts(products, "apple");
console.log(result);

*/

/*
===============================================================================
🏢 Sprint 2 - Dynamic Product Filter Engine
Difficulty : ⭐⭐⭐⭐☆ (Intermediate)

Skills Required:
✔ Functions
✔ Business Logic
✔ filter()
✔ Conditional Statements
✔ String Methods
✔ Clean Code

Estimated Time:
30-45 Minutes
===============================================================================

📢 Business Requirement

The company is building an E-Commerce website.

Users can apply multiple filters to search for products.

Create a reusable utility function.

-------------------------------------------------------------------------------

Function Signature

function filterProducts(products, filters) {

}

-------------------------------------------------------------------------------

Requirements

The function should support the following filters:

✔ brand
✔ category
✔ color

The filters object may contain:

{
    brand: "Apple",
    category: "Laptop",
    color: "Space Black"
}

OR

{
    brand: "Samsung"
}

OR

{
    category: "Shoes"
}

OR

{}

The function should work correctly in every case.

-------------------------------------------------------------------------------

Business Rules

1. Compare only the filters provided.

2. Ignore missing filters.

3. Search should be case-insensitive.

4. Return a NEW array.

5. Never modify the original products array.

-------------------------------------------------------------------------------

Sample Input

const result1 = filterProducts(products, {
    brand: "Apple"
});

const result2 = filterProducts(products, {
    category: "Laptop"
});

const result3 = filterProducts(products, {
    brand: "Apple",
    category: "Laptop"
});

const result4 = filterProducts(products, {
    brand: "Apple",
    category: "Laptop",
    color: "Space Black"
});

-------------------------------------------------------------------------------

Expected Output

Result 1

[
    Apple iPhone 16 Pro Max,
    MacBook Pro M5,
    Apple Watch Ultra 3
]

------------------------------------------------

Result 2

[
    Dell XPS 15 Laptop,
    MacBook Pro M5
]

------------------------------------------------

Result 3

[
    MacBook Pro M5
]

------------------------------------------------

Result 4

[
    MacBook Pro M5
]

-------------------------------------------------------------------------------

Edge Cases

filterProducts(products, {})

Expected Output:

Return ALL products.

------------------------------------------------

filterProducts(products, {
    brand: "APPLE"
})

Expected Output:

Should still return Apple products.

------------------------------------------------

filterProducts(products, {
    brand: "XYZ"
})

Expected Output:

[]

===============================================================================
*/

function searchProducts(products, searchText) {
    const query = searchText.trim().toLowerCase();
    
    return products.filter((item) => {
        return (
      item.name.toLowerCase().includes(query) ||
      item.brand.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.color.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
});
}

const result = searchProducts(products, "apple");
console.log(result);



function filterProducts(products, filters) {
  const filterKeys = Object.keys(filters);

  return products.filter((product) => {
    return filterKeys.every((key) => {
      return product[key].toLowerCase() === filters[key].toLowerCase();
    });
  });
}

const result1 = filterProducts(products, { brand: "Apple" });
const result2 = filterProducts(products, { category: "Laptop" });
const result3 = filterProducts(products, { brand: "Apple", category: "Laptop" });
const result4 = filterProducts(products, { brand: "Apple", category: "Laptop", color: "Space Black" });

console.log(result1);
console.log(result2);


