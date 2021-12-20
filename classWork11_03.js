// Task 3

// Convert the code using try...catch.

// function reverseString(s) {
// typeof s !== "string"
// ? console.log("s.split is not a function")
// : (s = s.split("").reverse().join(""));
// console.log(s);
// }

function reverseString(s) {
try {
    if (typeof s !== "string") {
        throw (`s.split is not a function`);
    } else {
        s = s.split("").reverse().join("");
        return s 
        
    }
}
    catch (err) {
        return err;
    }
}

console.log(reverseString(1354656541))
console.log(reverseString("lkjadsf"))