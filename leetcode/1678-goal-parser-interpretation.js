// TIME: O(n) - loop over each char in command
// SPACE: O(n) - to store the answer sting chars
const interpret = (command) => {
    let result = '';

    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'G') {
            result += 'G';
        } else if (command[i] === '(') {
            if (command[i + 1] === ')') {
                result += 'o';
                i++;
            } else {
                result += 'al';
                i += 3;
            }
        }
    }

    return result;
}

// REFACTORED VERSION:
// const interpret = (command) => {
//     return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
// }