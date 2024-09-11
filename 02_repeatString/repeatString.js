const repeatString = function(str, times) {
    if (times>=0) {
        let ans = "";
        for (let i=0; i<times; i++) {
            ans += str;
        }
        return ans;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
