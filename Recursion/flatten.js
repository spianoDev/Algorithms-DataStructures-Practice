/** Flatten **/

// Write a recursive function called 'flatten' which accepts an array of arrays and returns a new array
// with all the values flattened.

// function flatten(arr){
//     let flattenedArr = [].concat.apply([], arr);
//     for (let j = 0; j < flattenedArr.length; j++) {
//         // need to keep applying the concat until the array is one dimensional
//         while (Array.isArray(flattenedArr[j])) {
//             flattenedArr = [].concat.apply([], flattenedArr);
//         }
//     }
//     return flattenedArr;
// }

// The above totally works, but it isn't 'recursive' enough in that it doesn't use
// flatten(arr) inside. Below is the more correct answer...

function flatten(arr){
    let flattenedArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (Array.isArray(arr[j])) {
            flattenedArr = flattenedArr.concat(flatten(arr[j]));
        } else {
            flattenedArr.push(arr[j]);
        }
    }
    return flattenedArr;
}
/** Below are provided test cases **/

// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
