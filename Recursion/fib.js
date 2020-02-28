/** Fib number **/

// Write a recursive function called fib which accepts a number and returns the nth number in the
// Fibonacci sequence. Recall that the Fibonacci sequence is whole numbers which start with 1, 1, and
// every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

/** Below are provided test cases **/

// console.log(fib(4)); // 3
// fib(10); // 55
console.log(fib(28)); // 317811
// fib(35); // 9227465
