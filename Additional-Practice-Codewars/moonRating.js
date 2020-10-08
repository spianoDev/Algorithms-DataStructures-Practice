// https://www.codewars.com/kata/5be8852935da89c5c8000157/train/javascript

//When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes.
// While it is very informative, it's not very visually appealing.
// That's what stars, or in our case- moons, are created for.
//
// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale.
// Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.
//
// Write a function which returns valid rating represented as moons ('o','c','x') in single string.
// You are given the following values preloaded (remember, since I can't use unicode characters,
// moons in brackets are here just to improve your imagination):
//
// examples
const moons = {'o':'\u{1f315}', 'c': '\u{1f317}', 'x': '\u{1f311}'};
console.log(moons);

function moonRating(rating) {
    let conversion = Math.round(rating)/2;
    let fullMoon = Math.floor(conversion);
    let halfMoon = conversion % 1;
    let newMoon = Math.floor(5 - conversion);
    console.log(conversion, fullMoon, halfMoon, newMoon);
    if (halfMoon > 0) {
        halfMoon = 1;
    }
    console.log(moons.o.repeat(fullMoon), moons.c.repeat(halfMoon), moons.x.repeat(newMoon));
    console.log('o'.repeat(fullMoon) + 'c'.repeat(halfMoon) + 'x'.repeat(newMoon));
    return 'o'.repeat(fullMoon) + 'c'.repeat(halfMoon) + 'x'.repeat(newMoon);
}

// moonRating(0); // => 'xxxxx'
// moonRating(0.6); // => 'cxxxx'
// moonRating(1.5); // => 'oxxxx'
moonRating(3.9); // => 'ooxxx'
// moonRating(5); // => 'oocxx'

