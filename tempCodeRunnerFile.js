const discountedProducts = products.map((item) => {
//   const discountedPercent = item.price >= 10000 ? 15 : 5;
//   const finalPrice = item.price - (item.price * discountedPercent / 100);

//   let shipping;
//   if (finalPrice >= 50000) {
//     shipping = "Free Express Shipping";
//   } else if (finalPrice >= 10000) {
//     shipping = "Free Shipping";
//   } else {
//     shipping = "Shipping Charges Apply"
//   };
//   return {
//     ...item,
//     discount: discountedPercent,
//     finalPrice: finalPrice,
//     shipping: shipping
//   }
// });

// console.log("==================");
// console.log(discountedProducts);