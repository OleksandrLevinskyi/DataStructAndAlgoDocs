// TIME: O(n)
// SPACE: O(1)
// simplified bottom-up/tabulation approach:
const rob = (nums) => {
    const cache = [0, nums[0]];
    let temp;

    for (let i = 1; i < nums.length; i++) {
        temp = cache[1];
        cache[1] = Math.max(cache[1], cache[0] + nums[i]);
        cache[0] = temp;
    }

    return cache[1];
}

// TIME: O(n)
// SPACE: O(n)
// bottom-up/tabulation approach:
// const rob = (nums) => {
//     const cache = [0, nums[0]];

//     for (let i = 1; i < nums.length; i++) {
//         cache[i + 1] = Math.max(cache[i], cache[i - 1] + nums[i]);
//     }

//     return cache[nums.length];
// }

// top-down/memoization approach:
// const rob = (nums) => {
//     const cache = {};
    
//     return helper(nums, nums.length - 1, cache);
// }

// const helper = (nums, idx, cache) => {
//     if (idx < 0) {
//         return 0;
//     }

//     if (cache[idx]) {
//         return cache[idx];
//     }

//     const distantNode = helper(nums, idx - 2, cache);
//     const neighbouringNode = helper(nums, idx - 1, cache);

//     const result = Math.max(distantNode + nums[idx], neighbouringNode);

//     cache[idx] = result;

//     return result;
// }
