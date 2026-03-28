const reverseString = function(input) {
    let str = "";
    for (let i = input.length - 1; i >= 0; i-- ) {
        str += input[i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
