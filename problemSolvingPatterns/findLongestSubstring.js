/** findLongestSubstring **/

// Write a function called 'findLongestSubstring' which accepts a string and returns
// the length of the longest substring with all distinct characters
function findLongestSubstring(s) {

    let frequency = {};
    for (let char of s) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    // create a list of multiple chars based on the frequency
    let multipleChars = [];
    for (let [key, value] of Object.entries(frequency)) {
        // console.log(key, value);
        if (value > 1) {
            let answer = key;
            multipleChars.push(answer);
            console.log('these are the multiple chars: ' + answer);
        }
    }
    // if the frequency is greater than 1, find that index for each letter
    let index = [];

    for (let j = 0; j < multipleChars.length; j++) {
        index.push(s.indexOf(multipleChars[j]));
    }
    console.log('indicies are: ' + index);
    // loop through the characters of the string
    let count = 0;
    let total = 1;
    let pointer = 0;
    while (pointer < multipleChars.length) {
        for (let i = 0; i < s.length; i++) {
        // compare the pointer value to i. If they don't match increase the counter.
        // use recursion to search each multiple counts
            if (multipleChars[pointer] !== s[i]) {
                count += 1;
                if (count > total) {
                    total = count;
                }
            } else if (multipleChars[pointer] === s[i] && i === index[pointer]) {
                count += 1;
                if (count > total) {
                    total = count;
                }
            }else if (multipleChars[pointer] === s[i] && i > index[pointer]) {
                // If they match reset the counter.
                count = 0;
                pointer += 1;
            }
            // pointer += 1;
        }
    }
    // return the largest total based on the counter
    console.log(total);

    }


/** Below are provided test cases **/
// findLongestSubstring(''); // 0
// findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thisisawesome'); // 6
// findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
// findLongestSubstring('thisishowwedoit'); // 6

// I'm super stuck on this one and want to continue on in the course, so I will come back to it.
