// 13. Bill splitter
// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.

function totalBill(dishCost, noOfPeople){
    const dishTotal = 0;
    for(let i = 0; i < dishCost.length; i++){
        dishTotal += dishCost[i];
    }

    const perPersonBill = dishTotal / noOfPeople;

    return perPersonBill
}

const dishCost = [20,20,20,20];
const noOfPeople = 4;

const result = totalBill(dishCost, noOfPeople);
console.log(`Paid by each person ${result}`);