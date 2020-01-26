/** subSequence **/

// Write a function called 'isSubsequence' which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string
// appear somewhere in the second string, WITHOUT their order changing.

// Solution must at least the following complexities:
// Time Complexity - O(n + m)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    // I'm going to have two pointers, one on the first string and one on the second string that I will use for
    // comparison of each character
    let pointer1 = 0;
    let pointer2 = 0;
    // I will also create a new string from the matching characters to check at the end of the loop to see if it
    // matches.
    let match = [];
    // I need a recursive loop that will run as long as the first pointer is less than the length of the string (or
    // the second string is exhausted)
    while (pointer1 < str1.length && pointer2 < str2.length) {
        // If the first character of str1 is not in str2, increment to the next character until it is found
        if (str1[pointer1] !== str2[pointer2]) {
            pointer2 += 1;
            console.log(pointer2);
        }
        // If the first character of str1 is in str2, I will increment the str1 pointer and continue looking for the
        // next character in str2 until the entire length of str1 is exhausted.
        if (str1[pointer1] === str2[pointer2]) {
            match.push(str2[pointer2]);
            pointer1 += 1;
            pointer2 += 1;
            console.log(pointer2, pointer1);
        }
    }
    // now for the final comparison
    console.log(match.join(''));
    return match.join('') === str1;
}
/** Below are provided test cases **/

isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
