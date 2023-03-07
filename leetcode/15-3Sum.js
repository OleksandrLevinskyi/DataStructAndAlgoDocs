// TIME: O(n^2)
// SPACE: O(1)
const threeSum = (nums) => {
    const result = [];
    let solution;
    let l;
    let r;
    let sum;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // skip a value if it is the same as the previous num 1 to avoid duplicates for number 1
        }

        l = i + 1;
        r = nums.length - 1;

        // use two pointers
        while (l < r) {
            sum = nums[i] + nums[l] + nums[r];

            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                solution = [nums[i], nums[l], nums[r]];
                result.push(solution);
                
                // avoid duplicates for number 2
                while (l < r && nums[l] === solution[1]) {
                    l++;
                }
                
                // avoid duplicates for number 3
                while (l < r && nums[r] === solution[2]) {
                    r--;
                }
            }
        }
    }

    return result;
}
