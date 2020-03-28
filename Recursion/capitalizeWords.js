/** Capitalize Words **/

// Write a recursive function called 'capitalizeWords' which takes an array of words
// and returns a new array containing each word capitalized.

function capitalizeWords (arr) {
    let allCapsArray = [];
    for (let word of arr) {
        allCapsArray.push(word.toUpperCase());
    }
    console.log(allCapsArray);
    return allCapsArray;
}

/** Below are provided test cases **/

capitalizeWords(['i', 'am', 'learning', 'recursion']); // ['I', 'AM', 'LEARNING', 'RECURSION']
