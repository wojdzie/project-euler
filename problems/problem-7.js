// Problem 7: 10001st prime
// What is the nth prime number?

function nthPrime(n) {
    let size = 1000000;

    let array = new Array(size).fill(0);
    for (let i = 2; i < size; i++) {
        for (let j = i; j < size; j += i) {
            if (array[j] === 0) array[j] = i;
        }
    }

    let counter = 0;
    for (let i = 2; i < size; i++) {
        if (array[i] === i) counter++;
        if (counter === n) return i;
    }

    return -1;
}

nthPrime(10001);
