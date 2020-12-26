// Problem 12: Highly divisible triangular number
// What is the value of the first triangle number to have over n divisors?

function divisibleTriangleNumber(n) {
    // Sieve of Eratosthenes
    let arraySize = 100000;
    let array = new Array(arraySize).fill(true);
    array[0] = false;
    array[1] = false;
    for (let i = 2; i * i <= arraySize; i++) {
        for (let j = i * 2; j < arraySize; j += i) {
            array[j] = false;
        }
    }

    let numberOfDivisors = 1;
    let nextNumber = 1;
    let triangleNumber = 0;
    while (numberOfDivisors < n) {
        numberOfDivisors = 1;
        triangleNumber += nextNumber;
        let number = triangleNumber;
        for (let i = 2; i < arraySize && number > 1; i++) {
            if (array[i] === true) {
                let counter = 0;
                while (number % i === 0) {
                    number /= i;
                    counter++;
                }
                numberOfDivisors *= (counter + 1);
            }
        }
        nextNumber++;
    }
    return triangleNumber;
}

divisibleTriangleNumber(500);