/** Collect Strings **/

// Write a function called 'collectStrings' which accepts an object and returns an array of
// all the values in the object that have a typeof string.
const sampleObject = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

function collectStrings(ob) {
    let strings = [];
    for (let key in ob) {
        if (typeof ob[key] === 'string') {
            strings.push(ob[key]);
        } else if (typeof ob[key] === 'object') {
            strings = strings.concat(collectStrings(ob[key]));
        }
    }
    console.log(strings);
    return strings;
}

/** Below are provided test cases **/

collectStrings(sampleObject); // ["foo", "bar", "baz"])
