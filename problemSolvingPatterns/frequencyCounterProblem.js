/** ANAGRAMS **/

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another:
// Example:
// cinema = iceman

function validAnagram(str1, str2) {
    // first I will compare the length of the strings and if not equal return false
    if (str1.length !== str2.length) {
        console.log(false);
        return false;
    }
    // next I will loop over the first string and make an object with the number of times each character appears
    let str1Frequency = {};
    for (let char of str1) {
        str1Frequency[char] = (str1Frequency[char] || 0) + 1;
    }
    console.log(str1Frequency);
    // to avoid a nested loop, I will repeat this process with the second string
    let str2Frequency = {};
    for (let char of str2) {
        str2Frequency[char] = (str2Frequency[char] || 0) + 1;
    }
    console.log(str2Frequency);
    // finally I need to compare not only if the keys are the same, but if the frequency is the same
    for (let key in str1Frequency) {
        if (!(key in str2Frequency)) {
            console.log('no');
            return false;
        } if (str1Frequency[key] !== str2Frequency[key]) {
            console.log('no');
        }
    }
    // if all false conditions pass, return true
    console.log('yep');
    return true;
}

/** Below are provided test cases **/

// validAnagram("", ""); // true
// validAnagram('aaz', 'zaz'); // false
// validAnagram('anagram', 'nagaram'); //true
// validAnagram('rat', 'car'); // false
// validAnagram('qwerty', 'qeywrt'); // true
// validAnagram('awesome', 'awesom'); // false
// validAnagram('texttwisttime', 'timetwisttext'); // true
