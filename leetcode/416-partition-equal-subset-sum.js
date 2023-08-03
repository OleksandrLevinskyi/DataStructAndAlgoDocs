// TIME: O(n * total)
// SPACE: O(total)
const canPartition = (nums) => {
    const set = new Set([0]);
    let currSum = 0;
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    if (total % 2 !== 0) {
        return false;
    }

    total /= 2;

    for (let num of nums) {
        const valuesInSet = [...set.values()];
        for (let value of valuesInSet) {
            currSum = value + num;

            if (currSum === total) {
                return true;
            }

            set.add(currSum);
        }
    }

    return false;
}

// alternative top-bottom/memoization approach:
// const canPartition = (nums) => {
//     let total = 0;
//     const dict = {};

//     for (let num of nums) {
//         total += num;
//     }

//     if (total % 2 !== 0) {
//         return false;
//     }

//     return helper(nums, total / 2, 0, 0, dict);
// }

// const helper = (nums, total, idx, currSum, dict) => {
//     const key = `${idx}-${currSum}`;
    
//     if (dict[key]) {
//         return dict[key];
//     }

//     if (currSum > total || idx >= nums.length) {
//          return false;
//     }

//     if (currSum === total) {
//         return true;
//     }

//     const result = helper(nums, total, idx + 1, currSum + nums[idx], dict) ||
//         helper(nums, total, idx + 1, currSum, dict);

//     dict[key] = result;

//     return result;
// }
