// Problem 5: Smallest multiple
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
    let sieveOfEratosthenes = new Array(n + 1);
    for (let i = 2; i <= n; i++) {
        for (let j = i; j <= n; j += i) {
            if (sieveOfEratosthenes[j] === undefined) sieveOfEratosthenes[j] = i;
        }
    }

    let dividers = new Array(n + 1);
    dividers.fill(1);

    for (let i = 2; i <= n; i++) {
        let lastDivider = sieveOfEratosthenes[i];
        let max = 1;
        let value = i;

        while (value !== 1) {
            let divider = sieveOfEratosthenes[value];
            if (divider !== lastDivider) {
                if (dividers[lastDivider] < max) {
                    dividers[lastDivider] = max;
                    max = 1;
                }
            } else {
                max *= divider;
            }
            value /= divider;
            lastDivider = divider;
        }

        if (dividers[lastDivider] < max) {
            dividers[lastDivider] = max;
        }
    }

    let result = 1;
    for (let i = 0; i <= n; i++) {
        result *= dividers[i];
    }

    return result;
}

smallestMult(20);

