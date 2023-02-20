// TIME: O(n)
// SPACE: O(1)
const isPalindrome = (s) => {
    let b = 0;
    let e = s.length - 1;
    let bCode;
    let eCode;

    s = s.toUpperCase();

    while (b < e) {
        bCode = s.charCodeAt(b);
        eCode = s.charCodeAt(e);

        if (!isAlphanumeric(bCode)) {
            b++;
        } else if (!isAlphanumeric(eCode)) {
            e--;
        } else if (bCode === eCode) {
            b++;
            e--;
        } else {
            return false;
        }
    }

    return true;
}

const isAlphanumeric = (code) => {
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90);
}
