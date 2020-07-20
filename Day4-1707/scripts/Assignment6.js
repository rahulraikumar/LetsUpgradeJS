let num = window.prompt("Please enter a number greater that 100.");

while (!(num>100)) {
    if((num == null)||(num=="")){
        num = "No Input";
        break;
    }
    else{
        num = window.prompt("Number is not greater than 100, please retry.");
    }
}
   

console.log(`num = ${num}`);