// Problem 1: Multiples of 3 and 5
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    var sumOfNumbers = 0;

    var currentNumber = 3;
    while (currentNumber < number) {
        if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
            sumOfNumbers += currentNumber;
        } else if (currentNumber % 3 === 0) {
            sumOfNumbers += currentNumber;
        } else if (currentNumber % 5 === 0) {
            sumOfNumbers += currentNumber;
        }
        currentNumber++;
    }

    return sumOfNumbers;
}

multiplesOf3and5(1000);
