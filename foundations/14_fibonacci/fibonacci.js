const fibonacci = function(arg) {
    let arr = [0, 1];
    let index = Number(arg);

    //check for index's input validity
    if (index < 0) {
        return "OOPS";
    }

    let nextNum = 0;

    //loop to sum and push array with new number
    for (let i = 0; i < index - 1; i++) {
        nextNum = arr[i] + arr[i + 1];
        arr.push(nextNum);
    }

    return arr[index];
};

// Do not edit below this line
module.exports = fibonacci;
