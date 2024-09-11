const fibonacci = function(num) {
    if (num<0) {
        return "OOPS";
    }
    if (num==0) {
        return 0;
    }
    if (num==1 || num==2) {
        return 1;
    }
    let prev = 1;
    let prev2 = 1;
    let ans = 2;
    for (let i=3; i<num; i++) {
        prev2 = ans;
        ans += prev;
        prev = prev2;
    }
    return ans;
};

// Do not edit below this line
module.exports = fibonacci;
