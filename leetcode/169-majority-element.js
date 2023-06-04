// Boyer-Moore Majority Vote Algorithm: https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
// TIME: O(n)
// SPACE: O(1)
const majorityElement = (nums) => {
    let candidate = null;
    let votes = 0;

    for (let num of nums) {
        if (votes <= 0) {
            candidate = num;
        }

        if (candidate === num) {
            votes++;
        } else {
            votes--;
        }
    }

    return candidate;
}
