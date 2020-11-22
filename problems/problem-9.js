// Problem 9: Special Pythagorean triplet
//  Find the product abc such that a + b + c = n

function specialPythagoreanTriplet(n) {
    for (let a = 1; a < n; a++) {
        let b = (n*(2*a - n))/(2 *(a - n));
        if (b === Math.ceil(b)) {
            let c = n - a - b;
            return a * b * c;
        }
    }
    return -1;
}

specialPythagoreanTriplet(1000);



