// HackerRank: https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:
//
// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
//     A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
//     Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
//
// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.
//
// Function Description
//
// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
//
//     countingValleys has the following parameter(s):
//
// n: the number of steps Gary takes
// s: a string describing his path
function countingValleys(n, s) {
    let path = s.split('');
    // console.log(path);
    let level = 0;
    let valleyCount = 0;
    for (let i = 0; i < n; i++) {
        if (path[i] === 'U') {
            level += 1;
            if (level === 0) {
                valleyCount += 1;
                // console.log('Total count: ' + valleyCount);
            }
        } else if (path[i] === 'D') {
            level -= 1;
        }
        // console.log(level);
    }
    // console.log(valleyCount);
    return valleyCount;
}

console.log(countingValleys(8, 'UDDDUDUU'));
