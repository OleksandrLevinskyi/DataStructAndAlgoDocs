// bottom-up/tabulation approach:
// TIME: O(n * target)
// SPACE: O(target)
const combinationSum4 = (nums, target) => {
    const cache = new Array(target + 1).fill(0);
    cache[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] >= 0) {
                cache[i] += cache[i - nums[j]];
            }
        }
    }

    return cache[target];
}

// top-down/memoizaiton approach:
// TIME: O(n * target)
// SPACE: O(n * target)
// const combinationSum4 = (nums, target) => {
//     const cache = {};

//     return helper(nums, target, 0, cache);
// }

// const helper = (nums, target, currSum, cache) => {
//     if (currSum === target) {
//         return 1;
//     }

//     if (cache[currSum] && cache[currSum].done) {
//         return cache[currSum].value;
//     }

//     cache[currSum] = {value: 0, done: false}

//     for (let num of nums) {
//         const sum = currSum + num;

//         if (sum <= target) {
//             cache[currSum].value += helper(nums, target, sum, cache);
//         }
//     }

//     cache[currSum].done = true;

//     return cache[currSum].value;
// }
