/** averagePairs **/

// Write a function called 'averagePair'. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.

// There may be more than one pair that matches the average target.

// Time Complexity - O(n)
// Space Complexity - O(n)

function averagePair(arr, ave) {
    // I'm going to start with the edge case of an empty array or a single item
    if (arr.length === 0 || arr.length === 1 && arr[0] !== ave) {
        console.log('f');
        return false;
    }
    // for this comparison, I will be working from either end of the array to compare and move inwards
    let start = 0;
    let end = arr.length -1;
        while (start < end) {
            let pairAverage = (arr[start] + arr[end]) / 2;
            console.log(start, end);
            if (pairAverage === ave) {
                console.log('t');
                return true;
            }
            // if the average of the pair is larger than the average given, move end pointer
            else if (pairAverage > ave) {
                end -= 1;
            }
            // if the average of the pair is smaller than the average given, move start pointer
            else if (pairAverage < ave) {
                start += 1;
            }
            console.log(pairAverage);
            // console.log('f');
        }
        if (start >= end) {
            console.log('f');
            return false;
        }
}

/** Below are provided test cases **/

// averagePair([1,2,3], 2.5); // true
// averagePair([1,3,3,5,6,7,10,12,19], 8); // true
averagePair([-1,0,3,4,5,6], 4.1); // false
// averagePair([], 4); // false
