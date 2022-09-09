// TIME: O(n) - loop over indices array
// SPACE: O(n) - to store sorted characters
const restoreString = (s, indices) => {
    const sortedChars = [];
    let result = '';

    for (let i = 0; i < indices.length; i++) {
        sortedChars[indices[i]] = s[i];
    }

    for (let char of sortedChars) {
        result += char;
    }

    return result;
}