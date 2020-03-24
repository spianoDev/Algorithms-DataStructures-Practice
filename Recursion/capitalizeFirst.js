/** Capitalize First **/

// Write a recursive function called 'capitalizeFirst'.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
    // console.log(arr[0][0].toUpperCase());
    let capitalArray = [];
    for (let word of arr) {
        capitalArray.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(capitalArray);
    return capitalArray;
}

/** Below are provided test cases **/
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

