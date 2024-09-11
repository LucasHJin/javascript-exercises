const removeFromArray = function(arr, ...values) { //rest
    for (element of values) {
        while (arr.indexOf(element)!=-1) {
            arr.splice(arr.indexOf(element), 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
