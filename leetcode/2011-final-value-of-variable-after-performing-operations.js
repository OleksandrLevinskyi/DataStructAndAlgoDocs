const finalValueAfterOperations = (operations) => {
    let result = 0;

    for (let operation of operations) {
        if (operation[1] === '-') {
            result--;
        } else {
            result++;
        }
    }

    return result;
}