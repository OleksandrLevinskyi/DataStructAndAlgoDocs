// TIME: O(n^2)
// SPACE: O(n)
const lengthOfLIS = (nums) => {
    const cache = Array(nums.length).fill(1);
    let result = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                cache[i] = Math.max(cache[i], cache[j] + 1);
                result = Math.max(result, cache[i]);
            }
        }
    }

    return result;
}
