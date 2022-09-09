// TIME: O(n) - loop over each element in nums array
// SPACE: O(n) - to store the result array
const smallerNumbersThanCurrent = (nums) => {
    const buckets = [0];
    const result = [];
    let recentCount;

    // fill up the buckets
    for (let num of nums) {
        if (!buckets[num]) {
            buckets[num] = 1;
        } else {
            buckets[num]++;
        }
    }

    recentCount = buckets[0] || 0;

    // count buckets
    for (let i = 1; i < buckets.length; i++) {
        if (!buckets[i]) {
            buckets[i] = buckets[i - 1];
        } else {
            buckets[i] += recentCount;
        }
        recentCount = buckets[i];
    }

    // generate result array
    for (let num of nums) {
        if (num === 0) {
            result.push(0);
        } else {
            result.push(buckets[num - 1]);
        }
    }

    return result;
}