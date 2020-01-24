/** Duplicates **/

// Implement a function called 'areThereDuplicates' which accepts a variable number of arguments, and
// checks whether there are any duplicates among the arguments passed in.
// Solution must have Time Complexity - O(n) and Space Complexity - O(n)

// using the spread operator I can automatically convert the input into an array of values
function areThereDuplicates(...values) {
    // first the edge case of no input
    if (values.length === 0) {
        console.log('false');
        return false;
    }
    // now I'm going to make two pointers so I can compare the contents of the values array
    // it will be most efficient if I sort the values first
    let sortedValues = values.sort();
    let pointer1 = 0;
    let pointer2 = 1;
    console.log(sortedValues);
    while (pointer2 < sortedValues.length) {
        if (values[pointer1] === values[pointer2]) {
            console.log('true');
            return true;
        } else {
            pointer1 += 1;
            pointer2 += 1;
        }
    }
    console.log('false');
    return false;
}

/** Below are provided test cases **/

areThereDuplicates(1,2,3); // false
// areThereDuplicates(1,2,2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true
