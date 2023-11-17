function romanDecimalChanger(s) {
    // initialize a variable n that holds a capitalized form of s to avaoid any inconsistencies in input variations
    // create a variable romanIntArray that holds an object of definitive or key roman values which will be used as a reference point 
    // while transitioning the roman input to its decimal or numerical value
    // initialize a variable with the value zero and it will be used to sore the cumulative value the roman input
    // loop through the roman input
    // within the loop check if the first value is greater or less than the preceeding value to determine whether 
    // we will be subtracting or adding key values in romanIntArray
    // return result

    const n = s.toUpperCase()
    const romanIntArray = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < n.length; i++) {
        if (i > 0 && romanIntArray[n[i]] > romanIntArray[n[i - 1]]) {
            result += romanIntArray[n[i]] - 2 * romanIntArray[n[i - 1]];
        } else {
            result += romanIntArray[n[i]];
        }
    }

    return result;
}


console.log(romanDecimalChanger('MMVIII')); 

function capitalizeAllCharacters(str) {
    return str.toUpperCase();
}

console.log(capitalizeAllCharacters("hello world")); // Output: 'HELLO WORLD'


function stringCount(stringList, queryList) {
    //  initialize a variable results with the name result and it is equal to an empty list
    // loop through the the queryList 
    // place the current value of in the variable query during the loop
    // use the filter method to create a new array with values that are only equal to the vqlue of query
    // check the length of the new array and append it to results
    const results = [];

    for (let i = 0; i < queryList.length; i++) {
        const query = queryList[i];
        const count = stringList.filter(str => str === query).length;
        results.push(count);
    }

    return results;
}

const stringList = ['ab', 'ab', 'abc'];
const queryList = ['ab', 'abc', 'bc', 'ef'];

console.log(stringCount(stringList, queryList));
