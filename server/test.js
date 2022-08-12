const e = require("express");

var strStr = function (haystack, needle) {
    if (!needle) {
        return 0
    }
    for (let i = 0; i < haystack.length; i++) {
        console.log(haystack.slice(i, i + needle.length))
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
}
console.log(strStr('hello', 'll'))