// Complete the reverseString function, it has one parameter s. You must perform the following actions:
// .    Try to reverse string s using the split, reverse, and join methods.
// .    If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// .    Print s on new line. If no exception was thrown, then this should be the reversed string, if an
//          exception was thrown, this should be the original string.


"use strict";
function reverseString(s) {
    let sCopy
    
    try {
    
        sCopy = s.split('').reverse().join('');
    
    } catch (err) {

        console.log(`${err.name}: ${typeof s}s don't work here`);
        return s;

    } finally {
    
        console.log("This line's gonna work anyways");
    
    }
    
    return sCopy;
}

console.log(reverseString("asdlfkjh"));
console.log(reverseString(35164654));

