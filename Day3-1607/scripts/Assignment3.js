let marks = window.prompt("Please enter your marks out of 100 :");
marks = Number(marks) ;
let grade = "";


if ((marks > 100) || (marks < 0)) {
    console.log("Using Conditional Operator: Incorrect marks entered!!!")
}
else if ((marks <= 100) && (marks >= 80)) {
    grade = 'A';
}
else if ((marks < 80) && (marks >= 60)) {
    grade = 'B';
}
else if ((marks < 60) && (marks >= 40)) {
    grade = 'C';
}
else {
    grade = 'D';
}
console.log(`Using Conditional Operator: Marks are ${marks} and grade is ${grade}`);


(marks > 100) || (marks < 0) ? console.log("Using Ternary Operator: Incorrect marks entered!!!") : 
    (marks <= 100) && (marks >= 80) ? grade = 'A' : 
    (marks < 80) && (marks >= 60) ? grade = 'B' : 
    (marks < 60) && (marks >= 40) ? grade = 'C' : grade = 'D' ;
console.log(`Using Ternary Operator: Marks are ${marks} and grade is ${grade}`);