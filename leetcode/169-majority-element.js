// Boyer-Moore Majority Vote Algorithm: https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
// TIME: O(n)
// SPACE: O(1)
const majorityElement = (nums) => {
    let candidateElement = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidateElement = num;
        } 
        
        if (num === candidateElement) {
            count++;
        } else {
            count--;
        }
    }

    return candidateElement;
}
