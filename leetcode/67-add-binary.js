// TIME: O(n+m)
// SPACE: O(n)
const addBinary = (a, b) => {
    let solution = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carryOver = 0;
    let sum = 0;

    while (i >= 0 || j >= 0) {
        sum = carryOver + parseInt(a[i--] ?? 0) + parseInt(b[j--] ?? 0);
        carryOver = Math.floor(sum / 2);
        solution += sum % 2;
    }

    if (carryOver > 0) {
        solution += '1';
    }

    return [...solution].reverse().join('');
}
