// TIME: O(n) - loop over each number
// SPACE: O(1)
const subtractProductAndSum = (n) => {
    let product = 1;
    let sum = 0;
    let digit;

    while (n > 0) {
        digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n / 10);
    }

    return product - sum;
}