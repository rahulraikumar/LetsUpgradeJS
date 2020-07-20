let n = window.prompt("Please enter value for 'n' :");
let prime = [];

let isPrime = num => {
    for(let i=2; i<num; i++) {
        if(num%i==0){
            return false;
        }
    }
    return true;
}

let output = n => {
    for(let i=2; i<=n; i++) {
        if(isPrime(i)) {
            prime.push(i);
        }
    }
    return prime;
}
console.log(`Prime numbers from 1 to ${n} are :\n${output(n)}`);