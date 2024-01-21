function average(assignment1, assignment2, assignment3) {
    var totalMarks = assignment1 + assignment2 + assignment3;
    var average = totalMarks / 3;
    var average = average.toFixed(2);
    return average;
}

const assignment1 = 59;
const assignment2 = 60;
const assignment3 = 60;
var myAverage = average(assignment1, assignment2, assignment3);
console.log(myAverage);