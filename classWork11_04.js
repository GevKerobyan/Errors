/* -------------------- GRADELABS -------------------- */

function gradeLabs(labs) {
    try {
        for (let i = 0; i < labs.length; i++) {
            let lab = labs[i];
            let result = lab.runLab(3);
            console.log(`${lab.student} code worked: ${result === 27}`);
        } throw new Error(`: Error thrown`);
    }   catch (Error) {
        return Error;
    }
}

let studentLabs = [
    {
        student: "Carly",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Erica",
        runLab: function (num) {
            return num * num;
        },
    },
]; 

console.log(gradeLabs(studentLabs));