// HackerRank: https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//
//     For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
//
//     Function Description
//
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
//
//     sockMerchant has the following parameter(s):
//
// n: the number of socks in the pile
// ar: the colors of each sock

function sockMerchant(n, arr) {
    let sortedArray = arr.sort();
    let pointer1 = 0;
    let pointer2 = 1;
    let sockCount = 0;
    while (pointer2 < n) {
        if (sortedArray[pointer1] === sortedArray[pointer2]) {
            sockCount += 1;
            pointer1 += 2;
            pointer2 += 2;
        } if (sortedArray[pointer1] !== sortedArray[pointer2]) {
            pointer1 += 1;
            pointer2 += 1;
        }
    }
    console.log(sortedArray);
    console.log(sockCount);
    return sockCount;
}

sockMerchant(7, [1,2,1,2,1,3,2]);

