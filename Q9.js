// 9. Check for divisibility.
// Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2
// Use a for loop and continue statement.


function checkDivisibility(arr){
    for(let i = 0; i < arr.length; i++){
        let num = arr[i]
        if (num % 2 == 0) {
            continue;
        }
        if (num % 3 == 0) {
            console.log(num);
        }
    }
}

const arr = [3,6,9,12,15]

checkDivisibility(arr)