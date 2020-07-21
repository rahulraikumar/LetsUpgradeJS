// Write a program which does the following things:

// 1. Takes a positive number from the user.
let num = window.prompt("Please enter a positive number :");
num = +num;
while (num<1){
    num = window.prompt("Entered number is not positive, please retry.")
}
console.log(`Entered number is ${num}.`)

// 2. Makes an array of numbers till the number given by user
let arr = [];
for(let i=1; i<=num; i++) {
    arr.push(i);
}
console.log(`Numbers till ${num}: ${arr}`);

// 3. Use higher order function to filter the odd numbers
let odd = arr.filter(num=>num%2!=0);
console.log(`Odd numbers from the list of numbers: ${odd}`);

// 4. Generate an array of the cubes of the filtered numbers 
let cube = odd.map(num=>num**3);
console.log(`Cubes of the odd numbers: ${cube}`);