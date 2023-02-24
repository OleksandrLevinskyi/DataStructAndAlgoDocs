// TIME: O(n+m)
// SPACE: O(1) - max 24 elements in a dict
const canConstruct = (ransomNote, magazine) => {
    const dict = {};

    for (let letter of ransomNote) {
        dict[letter] ? dict[letter]++ : dict[letter] = 1;
    } 

    for (let letter of magazine) {
        dict[letter] > 1 ? dict[letter]-- : delete dict[letter];
    }

    return Object.keys(dict).length === 0;
}
