// Q7 Remove Duplicates
// In an online shopping application, customers can add multiple items to their cart. However, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase but also
// affect the accuracy of the purchase order.

// To solvd this problde, the application needs to remove duplicate itdes from the customer's cart. The program
// should take the customer's cart with duplicates as input, and return a new cart without duplicates.
// Write a program to solve the problem of duplicate items in the cart by removing duplicates.


// Function to remove duplicates from a cart
function removeDuplicates(cart) {
    const uniqueCart = [];
    for (let item of cart) {
      if (!uniqueCart.includes(item)) {
        uniqueCart.push(item);
      }
    }
  
    return uniqueCart;
  }
  
  const customerCart = ["item1", "item2", "item1", "item3", "item2"];
  const newCart = removeDuplicates(customerCart);
  console.log("Original Cart:", customerCart);
  console.log("Cart without Duplicates:", newCart);
  