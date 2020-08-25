// Problem 3: Largest prime factorPassed
// What is the largest prime factor of the given number

function largestPrimeFactor(number) {
    var divider = 2;
    while (divider !== number && divider * divider <= number) {
        if (number % divider === 0) {
            number /= divider;
        } else {
            divider++;
        }
    }

    return number;
}

largestPrimeFactor(13195);
