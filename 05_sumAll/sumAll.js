const sumAll = function(l, r) {
    if (l<0 || r<0 || !Number.isInteger(l) || !Number.isInteger(r)) {
        return "ERROR";
    } else {
        let sum = 0;
        if (l<r) {
            for (let i=l; i<=r; i++) {
                sum += i;
            }
        } else {
            for (let i=l; i>=r; i--) {
                sum += i;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
