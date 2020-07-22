let table = document.getElementById("table");
let num = window.prompt("Enter the number for table : ", 0);
table.style.color = "blue";
table.innerText = `Below is the table of ${num} :\n\n`
for (let i = 1; i <= 10; i++) {
    table.innerText += `${num} x ${i} = ${num * i}\n`;
}