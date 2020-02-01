/** minSubarrayLength **/

// This function should return the minimal length of a contiguous subarray of which the sum is
// greater than or equal to the integer passed to the function. If there isn't one, return 0.

// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr, num) {
    // the edge cases are if there is a value in the array that is larger than num
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] >= num) {
            console.log(1);
            return 1;
        }
    }
    // or if there is a number that is higher than the sum of all the elements in the array
    if (num > sum) {
        console.log(0);
        return 0;
    } else {
        // I am making a pointer and a variable (inside the loop) for the sum of consecutive numbers
        let pointer = 0;
        // Make a recursive loop that will tally the new sum as I remove from either end of the array
        while (num < sum) {
            let smallerSum = 0;
            let consecutiveNumbers = 2;
            for (let i = 0; i < arr.length - consecutiveNumbers; i++){
                smallerSum = arr[i]
            }

        }
    }
}

/** Below are provided test cases **/
// minSubArrayLen([2,3,1,2,4,3], 7); // 2
// minSubArrayLen([2,1,6,5,4],9); // 2
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52); // 1
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55); // 5
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39); // 3
// minSubArrayLen([4,3,3,8,1,2,3],11); // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95); // 0
