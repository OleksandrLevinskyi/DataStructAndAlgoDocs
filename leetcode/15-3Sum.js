// TIME: O(n^2)
// SPACE: O(1)
const threeSum = (nums) => {
    const result = [];
    let l;
    let r;
    let sum;
    let solution;

    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 1; i++) {
        // make sure number 1 is not duplicated
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        l = i + 1;
        r = nums.length - 1;

        while (l < r) { 
            sum = nums[i] + nums[l] + nums[r];

            if (sum < 0) { 
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                solution = [nums[i], nums[l], nums[r]];
                result.push(solution);

                // move left pointer to a new value to avoid duplicate set of triplets
                while (l < r && nums[l] === solution[1]) {
                    l++;
                }
            }
        }
    }

    return result;
}
