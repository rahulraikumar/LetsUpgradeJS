let num = window.prompt("Please enter any number : ");

if (num) {
let output = (num%2 == 0 ? "Number is even." : "Number is odd.");
console.log(`The number entered is ${num} and ${output}`);
}
else {
    console.log("No number entered!!!");
}