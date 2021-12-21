// Task 2

// Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
// return the string YES. Otherwise, it must throw an Error according to the following rules:

//  . If a is 0, throw an Error with message = Zero Error.
//  . If a is negative, throw an Error with message = Negative Error.

'use strict'
 
function isPositive(int) {

    try {

        if (int > 0) {
            return "YES";

        } else if (int === 0) {
            throw new Error (`The number is 0`);

        } else if (int < 0) {
            throw Error(`The number is negative`);
        }

    } catch (Error) {

        return Error;

    }
}

console.log(isPositive (-6516));
console.log(isPositive (6516));
console.log(isPositive (0));
