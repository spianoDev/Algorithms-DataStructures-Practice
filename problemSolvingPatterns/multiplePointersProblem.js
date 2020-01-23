/** countUniqueValues **/

// Implement a function called 'countUniqueValues' which accepts a sorted array,
// and then counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(n)

function countUniqueValues(arr) {
    // the edge case is for an empty array
    if (arr.length === 0 ) {
        return 0;
    }
// I'm going to create two pointers so I can compare the values as indices in the array
    let pointer1 = 0;
    let pointer2 = 1;
    // now I'm going to use these pointers to compare the values in the array
    while (pointer2 < arr.length) {
        if (arr[pointer1] === arr[pointer2]) {
            pointer2 += 1;
        } else {
            pointer1 += 1;
            arr.splice(pointer1, 1, arr[pointer2]);
            pointer2 += 1;
        }
        console.log(pointer1);
    }
    // the index value of pointer one is 1 less than the number of unique values because indices begin at 0
    return pointer1 + 1;
}

/** Below are provided test cases **/

// countUniqueValues([1,1,1,1,1,2]); // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // 7
// countUniqueValues([]); // 0
countUniqueValues([-2,-1,-1,0,1]); // 4
