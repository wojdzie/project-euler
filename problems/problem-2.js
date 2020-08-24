// Problem 2: Even Fibonacci Numbers
// By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.

function fiboEvenSum(n) {
    if (n < 2) return 0;

    var firstNumber = 1;
    var secondNumber = 2;
    var sum = 2;
    var nextNumber = firstNumber + secondNumber;

    while (nextNumber <= n) {
        if (nextNumber % 2 === 0) sum += nextNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
        nextNumber = firstNumber + secondNumber;
    }

    return sum;
}

fiboEvenSum(10);
