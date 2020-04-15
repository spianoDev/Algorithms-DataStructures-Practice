// countdown recursion:

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(countdown(10));

// range of numbers recursion:


function rangeOfNumbers(startNum, endNum) {
    if (endNum === startNum) {
        return [startNum];
    } else {
        let rangeArray = rangeOfNumbers(startNum + 1, endNum);
        rangeArray.unshift(startNum);
        return rangeArray;
    }
}

// console.log(rangeOfNumbers(1,5));
console.log(rangeOfNumbers(6, 9));
