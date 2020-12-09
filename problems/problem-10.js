// Problem 10: Summation of primes
// Find the sum of all the primes below n

function primeSummation(n) {
    let sieve = new Array(n);
    for (let i = 2; i < n; i++) {
        for (let j = i; j < n; j += i) {
            if (sieve[j] === undefined) {
                sieve[j] = i;
            }
        }
    }
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (sieve[i] === i) sum += i;
    }

    return sum;
}

primeSummation(2000000);
