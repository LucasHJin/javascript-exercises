function findAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    const ans = people.reduce((oldest, curr) => {
        let oldAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currAge = findAge(curr.yearOfBirth, curr.yearOfDeath);

        if (currAge>oldAge) {
            return curr;
        } else {
            return oldest;
        }
    });
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
