




let sName = "hamza";

let sMarks = 101;

let grade = null;

let result = null;

if (sMarks <= 101) {
    grade = "U";
    result = "U";

}
else if (sMarks >= 90) {
    grade = "A";
    result = "Pass";

}
else if (sMarks >= 80) {
    grade = "B";
    result = "Pass";
}
else if (sMarks >= 70) {
    grade = "C";
    result = "Pass";
}
else if (sMarks >= 60) {
    grade = "D";
    result = "Pass";
}
else if (sMarks >= 50) {
    grade = "E";
    result = "Pass";
}
else if (sMarks >= 101) {
    grade = "Unknown";
    result = "Unknown";
}
else {
    grade = "F";
    result = "Fail";
}

console.log(`Greetings! Hey ${sName}, you are ${result} and your Grade is ${grade} `)
