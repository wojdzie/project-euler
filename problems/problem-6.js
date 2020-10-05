// Problem 6: Sum square difference
// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
    return ((n - 1) * n * (n + 1) * (3 * n + 2)) / 12;
}

sumSquareDifference(100);