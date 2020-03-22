/** Is Palindrome **/

// Write a recursive function called 'isPalindrome' which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise, it returns false.

function isPalindrome(str){
    function reverse(string) {
        if (string.length <= 1) return string;
        return reverse(string.slice(1)) + string[0];
    }
    return reverse(str) === str;
}

/** Below are provided test cases **/

// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
// isPalindrome('amanaplanacanalpanama'); // true
// isPalindrome('amanaplanacanalpandemonium'); // false
