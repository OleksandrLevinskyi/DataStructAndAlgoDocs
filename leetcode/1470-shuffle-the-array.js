// TIME: O(n) - loop to the middle of nums array
// SPACE: O(n) - to store the result
const shuffle = (nums, n) => {
    const result = [];

    for (let i = 0; i < n; i++) {
        result[i * 2] = nums[i];
        result[i * 2 + 1] = nums[i + n];
    }

    return result;
}