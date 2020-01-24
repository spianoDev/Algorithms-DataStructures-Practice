/** Digit Frequency **/

// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Solution must have Time Complexity - O(n)

function sameFrequency(num1, num2) {
    // first I need to separate each of the numbers into a string
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    // first I will eliminate any case where the numbers are not the same length
    if (num1Str.length !== num2Str.length) {
        console.log('false');
        return false;
    }
    // now I can compare each piece of the two numbers by creating key value pairs
    let num1DigitFrequency = {};
    for (let digit of num1Str) {
        num1DigitFrequency[digit] = (num1DigitFrequency[digit] || 0) + 1;
    }
    let num2DigitFrequency = {};
    for (let digit of num2Str) {
        num2DigitFrequency[digit] = (num2DigitFrequency[digit] || 0) + 1;
    }
    // finally I need to check the keys and frequency of those keys
    for (let key in num1DigitFrequency) {
        if (!(key in num2DigitFrequency)) {
            console.log('false');
            return false;
        } if (num2DigitFrequency[key] !== num1DigitFrequency[key]) {
            console.log('false');
            return false;
        }
    }
    console.log('true');
    return true;
}

/** Below are provided test cases **/

// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
