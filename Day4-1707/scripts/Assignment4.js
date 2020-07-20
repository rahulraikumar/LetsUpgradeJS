let a = window.prompt("Enter the first number:");
let b = window.prompt("Enter the second number:");

a = +a;
b = +b;

let add = (a, b) => a+b;
console.log(`Sum of ${a} & ${b} is ${add(a,b)}`);

let diff = (a, b) => a-b;
console.log(`Difference of ${a} & ${b} is ${diff(a,b)}`);

let prod = (a, b) => a*b;
console.log(`Product of ${a} & ${b} is ${prod(a,b)}`);

let div = (a, b) => a/b;
console.log(`Division of ${a} & ${b} is ${div(a,b)}`);

let sqrt = a => Math.sqrt(a);
console.log(`Square root of ${a} is ${sqrt(a)} and Square root of ${b} is ${sqrt(b)}`);

let per = (a, b) => a*(b/100);
console.log(`${b}% of ${a} is ${per(a,b)}`);

