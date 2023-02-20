// TIME: O(n)
// SPACE: O(n)
const isValid = (s) => {
    const stack = [];
    const dict = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    let poppedValue;

    for (let c of s) {
        if (dict[c] === undefined) {
            poppedValue = stack.pop();
            
            if (poppedValue !== c) {
                return false;
            }
        } else {
            stack.push(dict[c]);
        }
    }

    return stack.length === 0;
}
