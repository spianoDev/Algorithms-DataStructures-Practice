/** Factorial **/

//Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it.
// Factorial zero is always 1

function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/** Below are provided test cases **/

// factorial(1); // 1
// factorial(2); // 2
console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040
