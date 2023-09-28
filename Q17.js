// 17. Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.

  function deposit(customer, amount) {
    if (amount <= 0) {
      console.log("Invalid deposit amount. Please enter a positive number.");
    }
  
    customer.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${customer.balance}`);
  }
  
  function withdraw(customer, amount) {
    if (amount <= 0) {
      console.log("Invalid withdrawal amount. Please enter a positive number.");
    }
  
    if (amount > customer.balance) {
      console.log("Insufficient funds for withdrawal.");
    }
  
    customer.balance -= amount;
    console.log(`Withdrawn $${amount}. New balance: $${customer.balance}`);
  }

  const customer = {
    name: "Jameel Joy",
    balance: 1000, // Initial balance
  };
  
  deposit(customer, 500); // Deposited $500. New balance: $1500
  withdraw(customer, 200); // Withdrawn $200. New balance: $1300
  withdraw(customer, 2000); // Insufficient funds for withdrawal.
  deposit(customer, -100); // Invalid deposit amount. Please enter a positive number.
  