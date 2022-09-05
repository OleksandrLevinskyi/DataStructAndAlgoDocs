const defangIPaddr = (address) => {
    let result = '';

    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            result += '[.]';
        } else {
            result += address[i];
        }
    }

    return result;
}

// REFACTORED VERSION:
// const defangIPaddr = (address) => address.replaceAll('.', '[.]');