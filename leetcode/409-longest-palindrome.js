// TIME: O(n)
// SPACE: O(n)
const longestPalindrome = (s) => {
    const dict = {};
    let count = 0;

    for (let c of s) {
        if (dict[c]) {
            count += 2;
            delete dict[c];
        } else {
            dict[c] = true;
        }
    }

    if (Object.keys(dict).length > 0) {
        count++;
    }

    return count;
}
