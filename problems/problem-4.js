// Problem 4: Largest palindrome product
// Find the largest palindrome made from the product of two n-digit numbers.

function largestPalindromeProduct(n) {
    let biggest = 1;
    for (let i = 0; i < n; i++) {
        biggest *= 10;
    }
    let smallestNumber = biggest / 10;
    biggest--;

    let maxPalindrome = 0;
    for (let j = biggest; j > smallestNumber; j--) {
        for (let k = biggest; k > smallestNumber; k--) {
            let product = j * k;
            if (product > maxPalindrome && isPalindrome(product)) {
                maxPalindrome = product;
            }
        }
    }

    return maxPalindrome;
}

function isPalindrome(n) {
    let number = n;
    let reversedNumber = 0;

    while (number !== 0) {
        let lastDigit = number % 10;
        number -= lastDigit;
        number /= 10;

        reversedNumber *= 10;
        reversedNumber += lastDigit;
    }

    return n === reversedNumber;
}

largestPalindromeProduct(3);

