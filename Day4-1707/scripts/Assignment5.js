let sales = window.prompt("Please enter the value for sales made by the employee :", "0");
sales = +sales;

let comm = sales => {
    if(sales>=0 && sales <=5000){
        return sales*2/100;
        }
    else if(sales>5000 && sales <=10000){
        return sales*5/100;
        }
    else if(sales>10000 && sales <=20000){
        return sales*7/100;
    }
    else if(sales>20000){
        return sales*10/100;
        }
}

console.log(`Total commission earned by the employee is ${comm(sales)}.`);