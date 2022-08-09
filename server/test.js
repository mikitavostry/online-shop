const e = require("express");

var reverse = function (x) {
    positive = true;
    if (x < 0) {
        positive = false;
    }
    reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);
    if (reversed.toString(2).length > 31) {
        return 0;
    }
    if (!positive) {
        return -reversed;
    }
    return reversed;
};

console.log(reverse(-12300))
num = 1563847412
console.log(num.toString(2).length)