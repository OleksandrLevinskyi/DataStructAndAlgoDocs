// TIME: O(n)
// SPACE: O(n)
const lengthOfLongestSubstring = (s) => {
    const dict = {};
    let startIdx = 0;
    let maxLength = 0;

    for (let endIdx = 0; endIdx < s.length; endIdx++) {
        if (dict[s[endIdx]] !== undefined) {
            startIdx = Math.max(dict[s[endIdx]] + 1, startIdx);
        }

        dict[s[endIdx]] = endIdx;
        maxLength = Math.max(maxLength, endIdx - startIdx + 1);
    }

    return maxLength;
}

// notes: another edge case is 'abba'
