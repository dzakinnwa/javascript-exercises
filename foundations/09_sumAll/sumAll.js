const sumAll = function(num1, num2) {
    let arr = [];
    let min = num1;
    let max = num2;

    if (!Number.isInteger(num1) || !Number.isInteger(num2)
        || num1 < 0 || num2 < 0
    ) {
        return "ERROR";
    }

    if (num1 > num2) {
        min = num2;
        max = num1;
    }

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    const result = arr.reduce((total, current) => total + current);
    return result;
};

console.log(sumAll(3, 7))

// Do not edit below this line
module.exports = sumAll;
