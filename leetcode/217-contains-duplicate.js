// 217-contains-duplicate.js
// TIME: O(n)
// SPACE: O(n)
const containsDuplicate = (nums) => {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}

// an alternative solution:
// TIME: O(nlogn)
// SPACE: O(1)
// const containsDuplicate = (nums) => {
//     nums.sort((a, b) => a - b);

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] === nums[i]) {
//             return true;
//         }
//     }

//     return false;
// }
