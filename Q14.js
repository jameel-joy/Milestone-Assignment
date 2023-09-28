// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.

const calculateTotalCost = (cart) => {
    let totalCost = 0;
  
    for (const item of cart) {
      totalCost += item.unitPrice * item.quantity;
    }
  
    return totalCost;
  };
  
  const customerCart = [
    { unitPrice: 10, quantity: 3 },
    { unitPrice: 20, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
  ];
  
  const totalCost = calculateTotalCost(customerCart);
  console.log("Total Cost : Rs." + totalCost);