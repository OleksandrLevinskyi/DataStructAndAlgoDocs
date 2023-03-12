// TIME: O(n)
// SPACE: O(n)
const evalRPN = (tokens) => {
    const stack = [];
    let a;
    let b;

    for (let token of tokens) {
        // if it is an operator, pop two last values in the stack, reverse them and apply the operator
        // there is no need to handle edge cases because the task says tokens array is always valid
        if (operations[token]) {
            console.log(token)
            b = stack.pop();
            a = stack.pop();
            stack.push(operations[token](a, b));
            console.log(stack[stack.length - 1])
        } else {
            stack.push(parseInt(token));
        }
    }

    // since the tokens array is always valid, there will always be just one value left in stack at the end
    return stack.pop();
}

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b),
}
