// 12. Calculate rental cost
// A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
// of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
// The total cost would be the rental cost multiplied by the number of days rented.
// The rental costs are
//  Economy = Rs. 4000 /- per day.
//  Midsize = Rs. 10000 /- per day.
//  Luxury = Rs. 20000 /- per day.

function rentedCal(days, rentalCost){
    const totalCost  = rentalCost * days;
    console.log(`Number Of Days ${days} per day Cost ${rentalCost} Total Cost ${totalCost}`);
}

rentedCal(5, 4000);
rentedCal(6, 10000);
rentedCal(10, 20000);