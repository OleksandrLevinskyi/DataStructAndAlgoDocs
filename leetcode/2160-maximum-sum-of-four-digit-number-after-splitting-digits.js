// TIME: O(1) - only 4 iterations
// SPACE: O(1) - only 4 elements in digits array
const minimumSum = (num) => {
    const digits = [];

    for (let i = 0; i < 4; i++) {
        digits[i] = num % 10;
        num = Math.floor(num / 10);
    }

    digits.sort();

    return (digits[0] + digits[1]) * 10 + digits[2] + digits[3];
}