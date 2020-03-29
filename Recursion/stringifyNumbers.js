/** Stringify Numbers **/

// Write a function called 'stringifyNumbers' which takes in an object and finds all the
// values which are numbers and converts them to strings.

function stringifyNumbers (obj) {
    let stringObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            stringObj[key] = obj[key].toString();
        }else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            (stringObj[key] = stringifyNumbers(obj[key]));
        } else {
            stringObj[key] = obj[key];
        }
    }
    console.log(stringObj);
    console.log(typeof (stringObj.num));
    return stringObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

/** Below are provided test cases **/

stringifyNumbers(obj);


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
