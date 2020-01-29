/** maxSubarraySum **/

// Given an array of integers and a number, write a function called 'maxSubarraySum'
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.

function maxSubarraySum(arr, length) {
    // first i will eliminate edge case of length being longer than the number of values in the array
    if (length > arr.length) {
        console.log('null');
        return null;
    }
    // I need a variable to hold the sums
    let sums = [];
    let pointer = 0;
    // I need a recursive loop that will take in all the value pairs/combinations for the array
    while (pointer <= arr.length - length){
        let sum = 0;
        // now I will create a loop that equals the length of 'length' and add the values together
        for (let index = 0; index < length; index++) {
            let newIndex = index + pointer;
            sum += arr[newIndex];
        }
        sums.push(sum);
        pointer += 1;
        console.log('sum is ' + sum);
        console.log(pointer + ' moves');
    }
    console.log(sums);
    // finally I need to return the highest index of the sorted array
    let answer = sums.sort();
    console.log(answer[answer.length-1]);
    return answer[answer.length-1];
}

 // maxSubarraySum([100, 200, 300, 400], 2); // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4); // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2); // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2); // 5
// maxSubarraySum([2,3], 3); // null
