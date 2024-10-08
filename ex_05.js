function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let closestKey = null;
    let closestDiff = Infinity;

    for (const key in functionsObj) {
        const result = functionsObj[key](inputNumber);
        const diff = Math.abs(result - outputNumber);

        if (diff < closestDiff) {
            closestDiff = diff;
            closestKey = key;
        }
    }

    return closestKey;
}

// Test //
const fObj = {
    multipleByEight: x => x * 8,
    square: x => x * x,
    addSixty: x => x + 60,
};

console.log(findClosestResult(fObj, 5, 26)); // square //
console.log(findClosestResult(fObj, 5, 65)); // addSixty //
console.log(findClosestResult(fObj, 5, 10)); // multipleByEight //
