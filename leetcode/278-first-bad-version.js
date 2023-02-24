// TIME: O(logn)
// SPACE: O(1)
const solution = (isBadVersion) => {
    return (n) => {
        let start = 1;
        let end = n;
        let middle;

        while (start < end) {
            middle = Math.floor((start + end) / 2);

            if (isBadVersion(middle)) {
                end = middle;
            } else {
                start = middle + 1;
            }
        }

        return start;
    }
}
