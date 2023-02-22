// TIME: O(n)
// SPACE: O(n)
const isAnagram = (s, t) => {
    const dict = {};

    if (s.length !== t.length) {
        return false;
    }

    for (let c of s) {
        if (dict[c]) {
            dict[c]++;
        } else {
            dict[c] = 1;
        }
    }

    for (let c of t) {
        if (!dict[c]) {
            return false;
        }

        if (dict[c] === 1) {
            delete dict[c];
        } else {
            dict[c]--;
        }
    }

    return true;
}
