// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
//     Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
//

function largestOfFour(arr) {
    let largestNumArr = [];
    for (let ar of arr) {
        console.log(ar);
        let tempNum = ar[0];
        for (let num of ar) {
            // console.log(num);
            if (tempNum < num) {
                tempNum = num;
                console.log(num);
            }
        }
        largestNumArr.push(tempNum);
    }
    console.log(largestNumArr);
    return largestNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
