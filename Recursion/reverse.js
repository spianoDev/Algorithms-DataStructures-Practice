/** Reverse String **/

// Write a recursivefunction called 'reverse' which accepts a string and returns a new string in reverse

function reverse(string){
    if (string.length <= 1) return string;
    return reverse(string.slice(1)) + string[0];
}

/** Below are provided test cases **/
// console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
