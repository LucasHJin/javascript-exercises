const reverseString = function(word) {
    const split = word.split("");
    split.reverse();
    let rev = "";
    for (letter of split) {
        rev += letter;
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
